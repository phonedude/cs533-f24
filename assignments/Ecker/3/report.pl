#!/usr/bin/perl
use strict;
use warnings;
use LWP::UserAgent;
use HTTP::Cookies;
use IO::Socket::SSL;
use Mozilla::CA;

# Check if filename is provided as an argument
if (@ARGV != 1) {
    die "Usage: $0 <filename>\n";
}

# Read in the file containing URLs
my $filename = $ARGV[0];
open(my $fh, '<', $filename) or die "Could not open file '$filename' $!";

while (my $url = <$fh>) {
    chomp $url;
    next unless $url; # Skip empty lines

    # Add 'http://' if the URL doesn't have a scheme
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
    );

    my @responses;

    # Add a handler to capture response codes and cookies at each step
    $ua->add_handler("response_header", sub {
        my ($response, $ua, $h) = @_;
        my $code    = $response->code;
        my @cookies = $response->header('Set-Cookie');
        push @responses, {
            code    => $code,
            cookies => \@cookies,
        };
        return;
    });

    # Perform the request
    my $response = $ua->get($url);

    # Check for request errors
    if ($response->is_error) {
        print "URL: $url\n";
        print "Error: " . $response->status_line . "\n";
        print "----------------------------------------\n\n";
        next;
    }

    # Get the final response code
    my $final_code = $response->code;

    # Print the collected data
    print "URL: $url\n";
    print "Final Response Code: $final_code\n\n";

    if (@responses) {
        print "Responses and Cookies Along the Way:\n";
        foreach my $resp (@responses) {
            print "Response Code: $resp->{code}\n";
            if (@{$resp->{cookies}}) {
                print "Cookies set in this response:\n";
                foreach my $cookie (@{$resp->{cookies}}) {
                    print "\t$cookie\n";
                }
            } else {
                print "No cookies set in this response.\n";
            }
            print "\n";
        }
    } else {
        print "No intermediate responses.\n";
    }

    # Optionally, print the final cookies stored in the cookie jar
    my @all_cookies;
    $cookie_jar->scan(sub {
        my ($version, $key, $val) = @_;
        push @all_cookies, "$key=$val";
    });

    if (@all_cookies) {
        print "Final Cookie Jar Contents:\n";
        foreach my $cookie (@all_cookies) {
            print "\t$cookie\n";
        }
    } else {
        print "Final Cookie Jar is empty.\n";
    }
    print "----------------------------------------\n\n";
}

close($fh);
