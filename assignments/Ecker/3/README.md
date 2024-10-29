# Assignment 3 CS 533 F24
## Jim Ecker

This repository contains all of the code developed while completing assignment 3

I am including two reports:

1. [The first](#cookie-practices-report) is only reporting on unexpired cookies that can be added to a CookieJar.
2. [The second one](#cookie-practices-report---expired-included) includes expired cookies for completeness.

# Table of Contents
- [Cookie Practices Report](#cookie-practices-report)
  - [Summary Statistics](#summary-statistics)
  - [Cookie Attribute Counts](#cookie-attribute-counts)
- [Cookie Practices Report - Expired Included](#cookie-practices-report---expired-included)
  - [Summary Statistics](#summary-statistics-1)
  - [Cookie Attribute Counts](#cookie-attribute-counts-1)
- [Instructions on Running the Script](#instructions-on-running-the-script)
  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)
    - [Including Expired Cookies](#including-expired-cookies)
    - [Specifying Output File](#specifying-output-file)
    - [Combining Options](#combining-options)
  - [Output](#output)
  - [Notes and Considerations](#notes-and-considerations)
- [Extra Credit](#extra-credit)

# Cookie Practices Report

This report summarizes the cookie practices of 100 websites.

HTTP responses for each individual URL can be found in the [responses folder](responses/)

| No. | URL | Final Status Code | Number of Cookies |
|-----|-----|-------------------|-------------------|
| 1 | https://000webhost.com | 403 | 0 |
| 2 | http://4shared.com | 200 | 1 |
| 3 | http://abcnews.go.com | 200 | 2 |
| 4 | http://about.com | 200 | 0 |
| 5 | http://accounts.google.com | 200 | 1 |
| 6 | http://alexa.com | 200 | 0 |
| 7 | http://amazon.co.uk | 200 | 0 |
| 8 | http://amazon.es | 200 | 0 |
| 9 | http://amazon.fr | 200 | 0 |
| 10 | https://amebaownd.com | 500 | 0 |
| 11 | http://android.com | 200 | 0 |
| 12 | http://apache.org | 200 | 0 |
| 13 | http://bandcamp.com | 200 | 5 |
| 14 | http://bbc.co.uk | 200 | 0 |
| 15 | https://berkeley.edu | 403 | 0 |
| 16 | https://bigcommerce.com | 403 | 0 |
| 17 | https://bloglovin.com | 403 | 0 |
| 18 | http://bloomberg.com | 200 | 0 |
| 19 | http://booking.com | 200 | 4 |
| 20 | http://box.com | 200 | 1 |
| 21 | https://bp0.blogger.com | 400 | 0 |
| 22 | https://clickbank.net | 500 | 0 |
| 23 | https://cloudflare.com | 403 | 2 |
| 24 | http://deezer.com | 200 | 4 |
| 25 | http://doi.org | 200 | 0 |
| 26 | https://domainmarket.com | 403 | 0 |
| 27 | https://e-monsite.com | 403 | 0 |
| 28 | http://enable-javascript.com | 200 | 0 |
| 29 | http://europa.eu | 200 | 0 |
| 30 | http://eventbrite.com | 200 | 1 |
| 31 | http://fb.me | 200 | 0 |
| 32 | http://focus.de | 200 | 0 |
| 33 | https://forms.gle | 400 | 0 |
| 34 | http://ft.com | 200 | 2 |
| 35 | http://ftc.gov | 200 | 0 |
| 36 | http://gettyimages.com | 200 | 5 |
| 37 | https://ggpht.com | 500 | 0 |
| 38 | http://gmail.com | 200 | 1 |
| 39 | https://godaddy.com | 403 | 3 |
| 40 | http://gofundme.com | 200 | 2 |
| 41 | http://google.co.uk | 200 | 2 |
| 42 | http://google.pl | 200 | 2 |
| 43 | http://groups.google.com | 200 | 2 |
| 44 | https://gstatic.com | 404 | 0 |
| 45 | http://guardian.co.uk | 200 | 2 |
| 46 | https://ig.com.br | 403 | 1 |
| 47 | https://imdb.com | 403 | 0 |
| 48 | http://independent.co.uk | 200 | 9 |
| 49 | http://ja.wikipedia.org | 200 | 5 |
| 50 | http://jhu.edu | 200 | 0 |
| 51 | http://jstor.org | 200 | 6 |
| 52 | http://justice.gov | 200 | 0 |
| 53 | http://last.fm | 200 | 6 |
| 54 | http://lavanguardia.com | 200 | 0 |
| 55 | https://linktr.ee | 500 | 4 |
| 56 | http://mail.ru | 200 | 4 |
| 57 | http://merriam-webster.com | 200 | 0 |
| 58 | http://myaccount.google.com | 200 | 1 |
| 59 | http://myspace.com | 200 | 4 |
| 60 | https://namecheap.com | 403 | 0 |
| 61 | http://naver.com | 200 | 0 |
| 62 | http://netflix.com | 200 | 4 |
| 63 | http://netvibes.com | 200 | 1 |
| 64 | http://news.google.com | 200 | 2 |
| 65 | http://nginx.com | 200 | 9 |
| 66 | https://nih.gov | 200 | 0 |
| 67 | http://opera.com | 200 | 0 |
| 68 | http://photobucket.com | 200 | 0 |
| 69 | https://photos1.blogger.com | 404 | 0 |
| 70 | http://plus.google.com | 200 | 0 |
| 71 | http://prezi.com | 200 | 2 |
| 72 | http://public-api.wordpress.com | 200 | 0 |
| 73 | http://redbull.com | 200 | 1 |
| 74 | http://sedoparking.com | 200 | 0 |
| 75 | http://softonic.com | 200 | 0 |
| 76 | http://spiegel.de | 200 | 0 |
| 77 | https://ssl-images-amazon.com | 500 | 0 |
| 78 | http://stanford.edu | 200 | 0 |
| 79 | http://steampowered.com | 200 | 3 |
| 80 | http://t-online.de | 200 | 0 |
| 81 | http://techcrunch.com | 200 | 0 |
| 82 | http://theglobeandmail.com | 200 | 2 |
| 83 | http://thetimes.co.uk | 200 | 4 |
| 84 | http://tinyurl.com | 200 | 5 |
| 85 | http://tmz.com | 200 | 0 |
| 86 | http://trustpilot.com | 200 | 0 |
| 87 | https://usnews.com | 500 | 0 |
| 88 | http://variety.com | 200 | 0 |
| 89 | http://video.google.com | 200 | 2 |
| 90 | http://vimeo.com | 200 | 2 |
| 91 | http://washington.edu | 200 | 0 |
| 92 | http://washingtonpost.com | 200 | 9 |
| 93 | https://webmd.com | 403 | 3 |
| 94 | http://whatsapp.com | 200 | 3 |
| 95 | http://wikia.com | 200 | 5 |
| 96 | http://wikihow.com | 200 | 3 |
| 97 | http://wordpress.org | 200 | 0 |
| 98 | http://workspace.google.com | 200 | 1 |
| 99 | http://www.canalblog.com | 200 | 0 |
| 100 | http://www.over-blog.com | 200 | 0 |

## Summary Statistics

- **Total Cookies**: 143
- **Min Cookies per Site**: 0
- **Max Cookies per Site**: 9
- **Mean Cookies per Site**: 1.43
- **Median Cookies per Site**: 0.00

## Cookie Attribute Counts

- **HttpOnly Cookies**: 0
- **Secure Cookies**: 92
- **SameSite Cookies**: 4
  - **SameSite=Strict**: 0
  - **SameSite=Lax**: 4
  - **SameSite=None**: 0
- **Cookies with Path Attribute**: 143
  - **Path not '/'**: 0

# Cookie Practices Report - Expired Included

This report summarizes the cookie practices of 100 websites.

_Note: Expired cookies are **included** in this analysis._

HTTP responses for each individual URL can be found in the [responses folder](responses/)

| No. | URL | Final Status Code | Number of Cookies |
|-----|-----|-------------------|-------------------|
| 1 | https://000webhost.com | 403 | 0 |
| 2 | http://4shared.com | 200 | 1 |
| 3 | http://abcnews.go.com | 200 | 2 |
| 4 | http://about.com | 200 | 0 |
| 5 | http://accounts.google.com | 200 | 1 |
| 6 | http://alexa.com | 200 | 0 |
| 7 | http://amazon.co.uk | 200 | 0 |
| 8 | http://amazon.es | 200 | 10 |
| 9 | http://amazon.fr | 200 | 0 |
| 10 | https://amebaownd.com | 500 | 0 |
| 11 | http://android.com | 200 | 0 |
| 12 | http://apache.org | 200 | 0 |
| 13 | http://bandcamp.com | 200 | 6 |
| 14 | http://bbc.co.uk | 200 | 0 |
| 15 | https://berkeley.edu | 403 | 0 |
| 16 | https://bigcommerce.com | 403 | 0 |
| 17 | https://bloglovin.com | 403 | 0 |
| 18 | http://bloomberg.com | 200 | 1 |
| 19 | http://booking.com | 200 | 5 |
| 20 | http://box.com | 200 | 1 |
| 21 | https://bp0.blogger.com | 400 | 0 |
| 22 | https://clickbank.net | 500 | 0 |
| 23 | https://cloudflare.com | 403 | 0 |
| 24 | http://deezer.com | 200 | 6 |
| 25 | http://doi.org | 200 | 0 |
| 26 | https://domainmarket.com | 403 | 0 |
| 27 | https://e-monsite.com | 403 | 0 |
| 28 | http://enable-javascript.com | 200 | 0 |
| 29 | http://europa.eu | 200 | 0 |
| 30 | http://eventbrite.com | 200 | 1 |
| 31 | http://fb.me | 200 | 0 |
| 32 | http://focus.de | 200 | 0 |
| 33 | https://forms.gle | 400 | 0 |
| 34 | http://ft.com | 200 | 2 |
| 35 | http://ftc.gov | 200 | 0 |
| 36 | http://gettyimages.com | 200 | 5 |
| 37 | https://ggpht.com | 500 | 0 |
| 38 | http://gmail.com | 200 | 1 |
| 39 | https://godaddy.com | 403 | 0 |
| 40 | http://gofundme.com | 200 | 2 |
| 41 | http://google.co.uk | 200 | 2 |
| 42 | http://google.pl | 200 | 2 |
| 43 | http://groups.google.com | 200 | 2 |
| 44 | https://gstatic.com | 404 | 0 |
| 45 | http://guardian.co.uk | 200 | 4 |
| 46 | https://ig.com.br | 403 | 0 |
| 47 | https://imdb.com | 403 | 0 |
| 48 | http://independent.co.uk | 200 | 17 |
| 49 | http://ja.wikipedia.org | 200 | 5 |
| 50 | http://jhu.edu | 200 | 0 |
| 51 | http://jstor.org | 200 | 6 |
| 52 | http://justice.gov | 200 | 0 |
| 53 | http://last.fm | 200 | 6 |
| 54 | http://lavanguardia.com | 200 | 0 |
| 55 | https://linktr.ee | 500 | 0 |
| 56 | http://mail.ru | 200 | 3 |
| 57 | http://merriam-webster.com | 200 | 0 |
| 58 | http://myaccount.google.com | 200 | 1 |
| 59 | http://myspace.com | 200 | 4 |
| 60 | https://namecheap.com | 403 | 0 |
| 61 | http://naver.com | 200 | 0 |
| 62 | http://netflix.com | 200 | 4 |
| 63 | http://netvibes.com | 200 | 1 |
| 64 | http://news.google.com | 200 | 2 |
| 65 | http://nginx.com | 200 | 9 |
| 66 | https://nih.gov | 200 | 0 |
| 67 | http://opera.com | 200 | 0 |
| 68 | http://photobucket.com | 200 | 0 |
| 69 | https://photos1.blogger.com | 404 | 0 |
| 70 | http://plus.google.com | 200 | 0 |
| 71 | http://prezi.com | 200 | 2 |
| 72 | http://public-api.wordpress.com | 200 | 0 |
| 73 | http://redbull.com | 200 | 1 |
| 74 | http://sedoparking.com | 200 | 0 |
| 75 | http://softonic.com | 200 | 0 |
| 76 | http://spiegel.de | 200 | 0 |
| 77 | https://ssl-images-amazon.com | 500 | 0 |
| 78 | http://stanford.edu | 200 | 0 |
| 79 | http://steampowered.com | 200 | 3 |
| 80 | http://t-online.de | 200 | 0 |
| 81 | http://techcrunch.com | 200 | 0 |
| 82 | http://theglobeandmail.com | 200 | 2 |
| 83 | http://thetimes.co.uk | 200 | 5 |
| 84 | http://tinyurl.com | 200 | 5 |
| 85 | http://tmz.com | 200 | 0 |
| 86 | http://trustpilot.com | 200 | 0 |
| 87 | https://usnews.com | 500 | 0 |
| 88 | http://variety.com | 200 | 0 |
| 89 | http://video.google.com | 200 | 2 |
| 90 | http://vimeo.com | 200 | 2 |
| 91 | http://washington.edu | 200 | 0 |
| 92 | http://washingtonpost.com | 200 | 9 |
| 93 | https://webmd.com | 403 | 1 |
| 94 | http://whatsapp.com | 200 | 3 |
| 95 | http://wikia.com | 200 | 5 |
| 96 | http://wikihow.com | 200 | 3 |
| 97 | http://wordpress.org | 200 | 0 |
| 98 | http://workspace.google.com | 200 | 1 |
| 99 | http://www.canalblog.com | 200 | 0 |
| 100 | http://www.over-blog.com | 200 | 0 |

## Summary Statistics

- **Total Cookies**: 156
- **Min Cookies per Site**: 0
- **Max Cookies per Site**: 17
- **Mean Cookies per Site**: 1.56
- **Median Cookies per Site**: 0.00

## Cookie Attribute Counts

- **HttpOnly Cookies**: 55
- **Secure Cookies**: 93
- **SameSite Cookies**: 57
  - **SameSite=Strict**: 4
  - **SameSite=Lax**: 21
  - **SameSite=None**: 32
- **Cookies with Path Attribute**: 154
  - **Path not '/'**: 0

# Instructions on Running the Script

## Overview

The `report.pl` script is a Perl script designed to analyze the cookie practices of a list of websites. It performs the following actions:

- Fetches each website and follows redirects.
- Collects all `Set-Cookie` headers from the responses.
- Analyzes cookie attributes such as `HttpOnly`, `Secure`, `SameSite`, and `Path`.
- Generates a Markdown report summarizing the findings.
- Saves HTTP headers for each website in a `responses` directory.

## Prerequisites

Before running the script, ensure that you have the following installed on your system:

- **Perl** (version 5.10 or higher is recommended)
- **Perl Modules**:
  - `LWP::UserAgent`
  - `HTTP::Cookies`
  - `IO::Socket::SSL`
  - `Mozilla::CA`
  - `List::Util`
  - `POSIX`
  - `Term::ProgressBar::Simple`
  - `File::Path`
  - `Digest::MD5`
  - `HTTP::Headers::Util`
  - `Time::Piece`
  - `Getopt::Long`

## Installation

1. **Install Perl Modules**

   You can install the required Perl modules using CPAN. Run the following command:

   ```bash
   cpan install LWP::UserAgent HTTP::Cookies IO::Socket::SSL Mozilla::CA List::Util POSIX Term::ProgressBar::Simple File::Path Digest::MD5 HTTP::Headers::Util Time::Piece Getopt::Long
   ```

2. **Make the Script Executable**
   ```bash
   chmod +x report.pl
   ```
## Usage

### Basic Usage

To run the script with default settings:

```bash
./report.pl urls.txt
```

`urls.txt` is a .txt file containing all of the urls to be analyzed, with each url on a line

#### Including Expired Cookies

By default, the script excludes expired cookies from the analysis. To include expired cookies, use the `--include-expired` flag:

```bash
./report.pl --include-expired urls.txt
```

#### Specifying Output File

By default, the script generates the report as `README.md`. To specify a different output file, use the `-o` or `--output` option:

```bash
./report.pl -o report.md urls.txt
```

#### Combining Options

Of course, you can combine the `--include-expired` flag and the `-o` option:

```bash
./report.pl --include-expired -o full_report.md urls.txt
```
   
#### Output

- **Report File**

  The script generates a Markdown report summarizing the cookie practices. By default, it's named `README.md`, but you can specify a different name using the `-o` option.

- **Responses Directory**

  A directory named `responses` is created, containing the HTTP headers for each website processed. The headers include all redirects and are formatted similarly to the output of `curl -I -L -s -k`. Each file has its MD5 hash appended to the url as its file name to avoid naming collisions.

### Notes and Considerations

- **URL Format**
  
  - Ensure that your URLs are correctly formatted.
  - If a URL does not include a scheme (`http://` or `https://`), the script will try `http://` first and then `https://` if needed.

- **Expired Cookies**
  
  - Expired cookies are those with an `Expires` attribute in the past.
  - By default, expired cookies are **excluded** from the analysis.
  - Use `--include-expired` to include them.

- **Dependencies**
  
  - All required Perl modules must be installed prior to running the script.
  - Some modules may require additional libraries or tools (e.g., `IO::Socket::SSL` may require OpenSSL).

- **Time Synchronization**
  
  - The script uses the system's current time to determine if cookies are expired.
  - Ensure your system clock is accurate.

- **Date Parsing**
  
  - The script assumes the `Expires` attribute in cookies follows the format: `Wdy, DD-Mon-YYYY HH:MM:SS GMT`.
  - If cookies use different date formats, you may need to adjust the `strptime` pattern in the `is_cookie_expired` function.
  - If parsing fails, the cookie is treated as **not expired** to avoid false exclusions.
  
# Extra Credit

I know the Turtles all the Way Down reference from two main sources, ["Surely You Must be Joking Mr. Feynman" by Richard Feynman](https://en.wikipedia.org/wiki/Surely_You%27re_Joking,_Mr._Feynman!) and ["A Brief History of Time" by Stephen Hawking](https://en.wikipedia.org/wiki/A_Brief_History_of_Time). Hawking tells it as a story about a Physics professor explaining the mechanics of the solar system and a little old lady coming up to him and saying "don't you know the Earth rests on the back of a giant turtle?" To which the professor replies, "well whats under the turtle?" The little old lady replies "its turtles all the way down!" Feynman tells it in the first person claming it was he, who was the Physics professor in the story. Anyway, its about infinite regress where the relationship of a thing can include the thing in subsequent instances of the thing.

That's why Turtles all the Way Down is referenced in slide 48. A window can contain a frame which can contain a frame which can contain a frame, forever including opportunities for an attacker to chain targets and attack vectors forever
