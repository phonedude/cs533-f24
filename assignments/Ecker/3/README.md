# Assignment 3 CS 533 F24
## Jim Ecker

This repository contains all of the code developed while completing assignment 3

# Table of Contents
- [Cookie Practices Report](#cookie-practices-report)
  - [Website Cookie Table](#website-cookie-table)
  - [Summary Statistics](#summary-statistics)
  - [Cookie Attribute Counts](#cookie-attribute-counts)
- [Instructions on Running the Script](#instructions-on-running-the-script)
  - [Prerequisites](#prerequisites)
  - [Prepare the URLs File](#prepare-the-urls-file)
  - [Run the Script](#run-the-script)
  - [Output](#output)

# Cookie Practices Report

This report summarizes the cookie practices of 100 websites.

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



# Instructions on Running the Script

To generate this report yourself, follow these steps:

1. **Prerequisites:**

   - Ensure you have **Perl** installed on your system.
   - Install the required Perl modules:

     ```bash
     cpan LWP::UserAgent HTTP::Cookies IO::Socket::SSL Mozilla::CA List::Util POSIX Term::ProgressBar::Simple File::Path Digest::MD5
     ```

2. **Prepare the URLs File:**

   - Create a text file (e.g., `urls.txt`) containing the list of websites you want to analyze.
   - Each URL should be on a separate line.
   - Example `urls.txt` content:

     ```
     example.com
     google.com
     github.com
     ```

3. **Run the Script:**

   - Ensure the `report.pl` script is executable. If not, set the executable permission:

     ```bash
     chmod +x report.pl
     ```

   - Run the script with the URLs file as an argument:

     ```bash
     ./report.pl urls.txt
     ```

   - The script will process each URL and collect cookie data.

4. **Output:**

   - Upon completion, the script will generate:

     - A `README.md` file containing the report (this file).
     - A `responses` directory containing HTTP headers for each URL processed.

   - You can view the `README.md` to see the summary and detailed results.