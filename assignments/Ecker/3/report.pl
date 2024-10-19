#!/usr/bin/perl
use strict;
use warnings;
use Getopt::Long;
use LWP::UserAgent;
use HTTP::Cookies;
use HTTP::Response;
use IO::Socket::SSL;
use Mozilla::CA;
use List::Util qw(min max sum);
use POSIX qw(floor);
use Term::ProgressBar::Simple;
use File::Path qw(make_path);
use File::Basename;
use Digest::MD5 qw(md5_hex);
use Time::Piece;

# Variables for command-line options
my $include_expired = 0;
my $output_file     = 'README.md';

# Parse command-line options
GetOptions(
    'include-expired' => \$include_expired,
    'output|o=s'      => \$output_file,
) or die "Usage: $0 [--include-expired] [-o <output_file>] <filename>\n";

# Check if filename is provided as an argument
if (@ARGV != 1) {
    die "Usage: $0 [--include-expired] [-o <output_file>] <filename>\n";
}

# Read in the file containing URLs
my $filename = $ARGV[0];
open(my $fh, '<', $filename) or die "Could not open file '$filename' $!";

# Read all URLs into an array
my @urls;
while (my $url = <$fh>) {
    chomp $url;
    next unless $url; # Skip empty lines
    push @urls, $url;
}
close($fh);

# Initialize progress bar
my $num_urls = scalar @urls;

# Output file name and number of URLs
print "Processing file: $filename\n";
print "Number of URLs: $num_urls\n";
print "Including expired cookies in analysis.\n" if $include_expired;
print "Excluding expired cookies from analysis.\n" unless $include_expired;
print "Report will be saved to '$output_file'.\n";

my $progress = Term::ProgressBar::Simple->new($num_urls);

# Create a directory to store responses
my $responses_dir = "responses";
unless (-d $responses_dir) {
    make_path($responses_dir) or die "Failed to create directory '$responses_dir': $!";
}

# Arrays to store data for summary statistics
my @num_cookies_list;
my @site_data; # Array of hashes for each site's data
my %cookie_attribute_counts = (
    HttpOnly        => 0,
    Secure          => 0,
    SameSite        => 0,
    SameSite_Strict => 0,
    SameSite_Lax    => 0,
    SameSite_None   => 0,
    Path            => 0,
    Path_NotRoot    => 0,
);

my $counter = 0;

foreach my $original_url (@urls) {
    $counter++;

    # Add 'http://' if the URL doesn't have a scheme
    my $url = $original_url;
    unless ($url =~ m{^https?://}) {
        $url = "http://$url";
    }

    # Prepare a fresh cookie jar for each URL
    my $cookie_jar = HTTP::Cookies->new;
    my $ua = LWP::UserAgent->new(
        cookie_jar   => $cookie_jar,
        max_redirect => 10,             # Follow up to 10 redirects
        ssl_opts     => {
            SSL_verify_mode => IO::Socket::SSL::SSL_VERIFY_NONE,
            verify_hostname => 0,
        },
        timeout => 20,
    );

    # Perform the request
    my $response = $ua->get($url);

    # If the initial request failed and the URL didn't have a scheme, try 'https://'
    if ($response->is_error && $original_url !~ m{^https?://}) {
        $url = "https://$original_url";
        $response = $ua->get($url);
    }

    # Get the final response code
    my $final_code = $response->code;

    # Collect all responses including redirects
    my @responses;
    my $res = $response;
    do {
        unshift @responses, $res;
    } while ($res = $res->previous);

    # Collect Set-Cookie headers from all responses
    my @all_cookies;
    foreach my $res (@responses) {
        my @set_cookie_headers = $res->header('Set-Cookie');
        foreach my $set_cookie (@set_cookie_headers) {
            my $cookie = parse_set_cookie($set_cookie);
            # Filter expired cookies if not including them
            if (!$include_expired && is_cookie_expired($cookie)) {
                next;
            }
            push @all_cookies, $cookie;
        }
    }

    my $num_cookies = scalar @all_cookies;
    push @num_cookies_list, $num_cookies;

    # Debugging: Print the number of cookies found for each URL
    # Uncomment the following line if you want to see debug info
    # print "URL: $url - Cookies Found: $num_cookies\n";

    # Analyze cookie attributes
    foreach my $cookie (@all_cookies) {
        # Count HttpOnly
        if ($cookie->{httponly}) {
            $cookie_attribute_counts{HttpOnly}++;
        }

        # Count Secure
        if ($cookie->{secure}) {
            $cookie_attribute_counts{Secure}++;
        }

        # Count Path
        if (defined $cookie->{path}) {
            $cookie_attribute_counts{Path}++;
            if ($cookie->{path} ne '/') {
                $cookie_attribute_counts{Path_NotRoot}++;
            }
        }

        # Count SameSite
        if (defined $cookie->{samesite}) {
            $cookie_attribute_counts{SameSite}++;
            my $samesite_value = lc($cookie->{samesite});
            if ($samesite_value eq 'strict') {
                $cookie_attribute_counts{SameSite_Strict}++;
            } elsif ($samesite_value eq 'lax') {
                $cookie_attribute_counts{SameSite_Lax}++;
            } elsif ($samesite_value eq 'none') {
                $cookie_attribute_counts{SameSite_None}++;
            }
        }
    }

    # Store site data
    push @site_data, {
        url          => $url,
        final_code   => $final_code,
        num_cookies  => $num_cookies,
    };

    # Save HTTP headers to a file (including redirects)
    my $response_filename = sanitize_filename($url);
    my $response_filepath = "$responses_dir/$response_filename.txt";

    open(my $resp_fh, '>', $response_filepath) or die "Could not open file '$response_filepath' $!";

    foreach my $res (@responses) {
        # Get the HTTP protocol and status line
        my $protocol = $res->protocol || 'HTTP/1.1';
        my $status_line = "$protocol " . $res->code . " " . $res->message;

        # Print the status line
        print $resp_fh "$status_line\n";

        # Print the headers
        my $headers = $res->headers_as_string("\n");
        print $resp_fh "$headers\n\n";
    }

    close($resp_fh);

    # Update the progress bar
    $progress++;
}

# Generate Markdown table
open(my $md_fh, '>', $output_file) or die "Could not open '$output_file' $!";

print $md_fh "# Cookie Practices Report\n\n";
print $md_fh "This report summarizes the cookie practices of $num_urls websites.\n\n";

# Indicate whether expired cookies are included
if ($include_expired) {
    print $md_fh "_Note: Expired cookies are **included** in this analysis._\n\n";
} else {
    print $md_fh "_Note: Expired cookies are **excluded** from this analysis._\n\n";
}

# Table Header
print $md_fh "| No. | URL | Final Status Code | Number of Cookies |\n";
print $md_fh "|-----|-----|-------------------|-------------------|\n";

# Table Rows
$counter = 1;
foreach my $site (@site_data) {
    print $md_fh "| $counter | $site->{url} | $site->{final_code} | $site->{num_cookies} |\n";
    $counter++;
}

# Summary Statistics
my $total_cookies = sum(@num_cookies_list);
my $min_cookies = min(@num_cookies_list);
my $max_cookies = max(@num_cookies_list);
my $mean_cookies = $total_cookies / scalar(@num_cookies_list);
my @sorted_cookies = sort { $a <=> $b } @num_cookies_list;
my $median_cookies;
if (@sorted_cookies % 2) {
    $median_cookies = $sorted_cookies[int(@sorted_cookies/2)];
} else {
    my $mid = @sorted_cookies / 2;
    $median_cookies = ($sorted_cookies[$mid - 1] + $sorted_cookies[$mid]) / 2;
}

print $md_fh "\n## Summary Statistics\n\n";
print $md_fh "- **Total Cookies**: $total_cookies\n";
print $md_fh "- **Min Cookies per Site**: $min_cookies\n";
print $md_fh "- **Max Cookies per Site**: $max_cookies\n";
printf $md_fh "- **Mean Cookies per Site**: %.2f\n", $mean_cookies;
printf $md_fh "- **Median Cookies per Site**: %.2f\n\n", $median_cookies;

print $md_fh "## Cookie Attribute Counts\n\n";
print $md_fh "- **HttpOnly Cookies**: $cookie_attribute_counts{HttpOnly}\n";
print $md_fh "- **Secure Cookies**: $cookie_attribute_counts{Secure}\n";
print $md_fh "- **SameSite Cookies**: $cookie_attribute_counts{SameSite}\n";
print $md_fh "  - **SameSite=Strict**: $cookie_attribute_counts{SameSite_Strict}\n";
print $md_fh "  - **SameSite=Lax**: $cookie_attribute_counts{SameSite_Lax}\n";
print $md_fh "  - **SameSite=None**: $cookie_attribute_counts{SameSite_None}\n";
print $md_fh "- **Cookies with Path Attribute**: $cookie_attribute_counts{Path}\n";
print $md_fh "  - **Path not '/'**: $cookie_attribute_counts{Path_NotRoot}\n";

close($md_fh);

print "\nReport generated in '$output_file'\n";
print "HTTP headers saved in the '$responses_dir' directory.\n";

# Function to sanitize filenames based on URL
sub sanitize_filename {
    my ($url) = @_;
    # Remove scheme (http:// or https://)
    $url =~ s{^https?://}{};
    # Replace non-alphanumeric characters with underscores
    $url =~ s{[^a-zA-Z0-9]}{_}g;
    # Limit filename length to avoid filesystem limitations
    $url = substr($url, 0, 50);
    # Append MD5 hash of the URL to ensure uniqueness
    my $hash = md5_hex($url);
    return "$url\_$hash";
}

# Function to parse Set-Cookie header into a hash
sub parse_set_cookie {
    my ($set_cookie_str) = @_;
    my %cookie;
    
    # Split the Set-Cookie string on semicolons
    my @parts = split /;\s*/, $set_cookie_str;
    
    # The first part is the 'key=value'
    my ($key, $value) = split /=/, shift @parts, 2;
    $cookie{key} = $key;
    $cookie{value} = $value;
    
    # Process the remaining attributes
    foreach my $part (@parts) {
        if ($part =~ /^expires=(.+)$/i) {
            $cookie{expires} = $1;
        } elsif ($part =~ /^path=(.+)$/i) {
            $cookie{path} = $1;
        } elsif ($part =~ /^domain=(.+)$/i) {
            $cookie{domain} = $1;
        } elsif ($part =~ /^secure$/i) {          # Corrected: Using $part
            $cookie{secure} = 1;
        } elsif ($part =~ /^httponly$/i) {        # Corrected: Using $part
            $cookie{httponly} = 1;
        } elsif ($part =~ /^samesite=(.+)$/i) {
            $cookie{samesite} = $1;
        }
    }
    
    return (\%cookie);
}

# Function to check if a cookie is expired
sub is_cookie_expired {
    my ($cookie) = @_;
    if (defined $cookie->{expires}) {
        my $expires_str = $cookie->{expires};
        my $expired = 0; # Initialize as not expired
        eval {
            my $expires_time = Time::Piece->strptime($expires_str, '%a, %d-%b-%Y %H:%M:%S %Z');
            my $current_time = gmtime;
            if ($expires_time < $current_time) {
                $expired = 1; # Cookie is expired
            }
        };
        # If parsing fails, $expired remains 0
        return $expired;
    }
    return 0; # Cookie is not expired
}
