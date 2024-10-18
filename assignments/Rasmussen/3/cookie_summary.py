#!/usr/bin/env python3
"""
Assignment 3, CS 433/533 Web Security, Fall 2024
Anton Rasmussen

Cookie report for 100 of the Mozilla top 500 web sites

This script reads a list of URLs from an input file, fetches each URL,
extracts cookies along with their attributes, compiles statistics, and
generates a Markdown report that includes HTTP response details.

Usage:
    nohup python cookie_summary.py input_file.txt [output_report.md] > output.txt &

Note:
- If the [output_report.md] is not specified, it defaults to 'README.md'.
- 'output.txt' allows us to see a run log.
"""

import argparse
import logging
import os
import statistics
from urllib.parse import urlparse

import requests
from requests.exceptions import RequestException


def is_valid_url(url):
    """
    Validate a URL to ensure it has a proper scheme/protocol.

    Parameters:
    - url (str): The URL to validate.

    Returns:
    - bool: True if the URL is valid, False otherwise.
    """
    parsed = urlparse(url)
    return all([parsed.scheme in ('http', 'https'), parsed.netloc])


def parse_set_cookie_headers(set_cookie_headers, default_domain):
    """
    Parse 'Set-Cookie' headers to extract cookie attributes.

    Parameters:
    - set_cookie_headers (list): List of 'Set-Cookie' header strings.
    - default_domain (str): The domain of the URL if 'Domain' attribute is absent.

    Returns:
    - list: List of dictionaries containing cookie attributes.
    """
    cookies = []
    for header in set_cookie_headers:
        parts = header.split(';')
        name_value = parts[0].strip()
        if '=' in name_value:
            name, value = name_value.split('=', 1)
        else:
            # Skip invalid cookie
            continue

        cookie_info = {
            'name': name.strip(),
            'httponly': False,
            'secure': False,
            'samesite': False,
            'path': '/',
            'domain': default_domain,
            'expires': None,
        }

        # Iterate over the remaining parts to extract attributes
        for attr in parts[1:]:
            attr = attr.strip()
            if attr.lower() == 'httponly':
                cookie_info['httponly'] = True
            elif attr.lower() == 'secure':
                cookie_info['secure'] = True
            elif attr.lower().startswith('samesite='):
                samesite_value = attr.split('=', 1)[1]
                cookie_info['samesite'] = f"True: {samesite_value}"
            elif attr.lower().startswith('path='):
                path_value = attr.split('=', 1)[1]
                cookie_info['path'] = path_value
            elif attr.lower().startswith('domain='):
                domain_value = attr.split('=', 1)[1]
                cookie_info['domain'] = domain_value
            elif attr.lower().startswith('expires='):
                expires_value = attr.split('=', 1)[1]
                cookie_info['expires'] = expires_value
            # We can add more attributes as needed

        cookies.append(cookie_info)
    return cookies


def get_cookies(url):
    """
    Fetch cookies and HTTP response details from a given URL.

    Parameters:
    - url (str): The URL to fetch cookies from.

    Returns:
    - dict: A dict containing the URL, final URL after redirects, status code, cookies, and response details.
    """
    if not url.startswith(('http://', 'https://')):
        url = 'http://' + url

    try:
        headers = {
            'User-Agent': (
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                'AppleWebKit/537.36 (KHTML, like Gecko) '
                'Chrome/91.0.4472.124 Safari/537.36'
            )
        }
        response = requests.get(
            url, allow_redirects=True, headers=headers, timeout=10
        )
        final_url = response.url
        status_code = response.status_code

        # Get the default domain from the final URL
        parsed_url = urlparse(final_url)
        default_domain = parsed_url.hostname

        # Parse 'Set-Cookie' headers
        raw_cookies = []
        try:
            # Access the raw HTTP response
            raw_headers = response.raw._original_response.msg
            raw_cookies = raw_headers.get_all('Set-Cookie')
            if raw_cookies is None:
                raw_cookies = []
        except AttributeError:
            logging.warning(
                f"Could not access raw 'Set-Cookie' headers for {url}"
            )
            # Fallback to response.headers (NOTE: may not get all cookies)
            set_cookie = response.headers.get('Set-Cookie')
            if set_cookie:
                raw_cookies = [set_cookie]
            else:
                raw_cookies = []

        cookie_data = parse_set_cookie_headers(raw_cookies, default_domain)

        # Capture the response details
        response_details = {
            'status_code': response.status_code,
            'headers': dict(response.headers),
            'content_snippet': response.text[:500],  # Truncate content to first 500 characters
        }

        return {
            'url': url,
            'final_url': final_url,
            'status_code': status_code,
            'cookies': cookie_data,
            'response_details': response_details,
        }

    except RequestException as e:
        logging.error(f"Error processing {url}: {str(e)}")
        return {
            'url': url,
            'final_url': None,
            'status_code': None,
            'cookies': [],
            'response_details': {
                'status_code': None,
                'headers': {},
                'content_snippet': '',
                'error': str(e),
            },
        }


def get_cookie_stats(all_cookie_data):
    """
    Compile statistics from the collected cookie data and generate Markdown content.

    Parameters:
    - all_cookie_data (list): A list of dictionaries containing cookie data for each URL.

    Returns:
    - str: A string containing the Markdown-formatted report.
    """
    # Initialize counters
    total_cookies = 0
    httponly_count = 0
    secure_count = 0
    samesite_count = 0
    samesite_strict = 0
    samesite_lax = 0
    samesite_none = 0
    path_count = 0
    path_non_root = 0
    cookies_per_site = []

    for site in all_cookie_data:
        num_cookies = len(site['cookies'])
        cookies_per_site.append(num_cookies)
        cookies = site['cookies']
        total_cookies += len(cookies)

        for cookie in cookies:
            if cookie.get('httponly'):
                httponly_count += 1

            if cookie.get('secure'):
                secure_count += 1

            samesite = cookie.get('samesite')
            if samesite != False:
                samesite_count += 1
                samesite_value = samesite.lower()
                if 'strict' in samesite_value:
                    samesite_strict += 1
                elif 'lax' in samesite_value:
                    samesite_lax += 1
                elif 'none' in samesite_value:
                    samesite_none += 1

            path = cookie.get('path')
            if path:
                path_count += 1
                if path != '/':
                    path_non_root += 1

    # Compute statistical summaries
    min_cookies = min(cookies_per_site)
    max_cookies = max(cookies_per_site)
    mean_cookies = statistics.mean(cookies_per_site)
    median_cookies = statistics.median(cookies_per_site)

    markdown_content = (
        f"""# Cookie Analysis Report

## Summary Statistics

| Statistic                  | Value          |
|----------------------------|----------------|
| Total Sites Analyzed       | {len(all_cookie_data)} |
| Total Cookies Collected    | {total_cookies} |
| HttpOnly Cookies           | {httponly_count} |
| Secure Cookies             | {secure_count} |
| SameSite Cookies           | {samesite_count} |
| SameSite Strict            | {samesite_strict} |
| SameSite Lax               | {samesite_lax} |
| SameSite None              | {samesite_none} |
| Cookies with Path          | {path_count} |
| Cookies with Non-Root Path | {path_non_root} |
| Min Cookies Per Site       | {min_cookies} |
| Max Cookies Per Site       | {max_cookies} |
| Mean Cookies Per Site      | {mean_cookies:.2f} |
| Median Cookies Per Site    | {median_cookies:.2f} |

## Detailed Site Information

| URL | Final URL | Status Code | Number of Cookies | Cookie Attributes |
|-----|-----------|-------------|-------------------|-------------------|
"""
    )

    for site in all_cookie_data:
        cookie_attributes = []
        for cookie in site['cookies']:
            attributes = []
            if cookie.get('httponly'):
                attributes.append('HttpOnly')
            if cookie.get('secure'):
                attributes.append('Secure')
            samesite = cookie.get('samesite')
            if samesite != False:
                samesite_value = samesite.split(': ')[1]
                attributes.append(f"SameSite={samesite_value}")

            cookie_attributes.append(
                f"{cookie['name']}: {', '.join(attributes)}"
            )

        cookie_attribute_policy = (
            '<br>'.join(cookie_attributes) or 'N/A'
        )

        markdown_content += (
            f"| {site['url']} | {site.get('final_url', 'N/A')} | "
            f"{site.get('status_code', 'N/A')} | {len(site['cookies'])} | "
            f"{cookie_attribute_policy} |\n"
        )

    markdown_content += """

## Individual Cookie Details

| URL | Cookie Name | HttpOnly | Secure | SameSite | Path |
|-----|-------------|----------|--------|----------|------|
"""
    for site in all_cookie_data:
        for cookie in site['cookies']:
            markdown_content += (
                f"| {site['url']} | {cookie['name']} | "
                f"{cookie.get('httponly', False)} | "
                f"{cookie.get('secure', False)} | "
                f"{cookie.get('samesite')} | "
                f"{cookie.get('path', '/')} |\n"
            )

    markdown_content += """

## HTTP Response Details

"""
    for site in all_cookie_data:
        response_details = site.get('response_details', {})
        markdown_content += f"### URL: {site['url']}\n"
        markdown_content += f"- **Final URL:** {site.get('final_url', 'N/A')}\n"
        markdown_content += f"- **Status Code:** {response_details.get('status_code', 'N/A')}\n"
        markdown_content += "- **Headers:**\n"
        headers = response_details.get('headers', {})
        for header_name, header_value in headers.items():
            markdown_content += f"  - {header_name}: {header_value}\n"
        content_snippet = response_details.get('content_snippet', '')
        if content_snippet:
            markdown_content += "- **Content Snippet (first 500 characters):**\n"
            # Escape backticks to prevent Markdown formatting issues
            content_snippet = content_snippet.replace('`', '\\`')
            markdown_content += f"```\n{content_snippet}\n```\n"
        markdown_content += "\n---\n"

    return markdown_content


def main():
    """
    Main function to orchestrate cookie analysis.
    """
    parser = argparse.ArgumentParser(description="Cookie Analysis Script")
    parser.add_argument(
        'input_file', help='Path to the input file containing URLs'
    )
    parser.add_argument(
        'output_report',
        nargs='?',
        default='README.md',
        help='Path to the output Markdown report file',
    )
    args = parser.parse_args()

    logging.basicConfig(
        level=logging.INFO, format='%(levelname)s: %(message)s'
    )

    if not os.path.exists(args.input_file):
        logging.error(f"Input file '{args.input_file}' does not exist.")
        return

    with open(args.input_file, 'r') as f:
        urls = [line.strip() for line in f if line.strip()]

    # Prepend 'http://' since it's missing and validate URLs
    urls = [
        url if url.startswith(('http://', 'https://')) else 'http://' + url
        for url in urls
    ]
    urls = [url for url in urls if is_valid_url(url)]

    if not urls:
        logging.error('No valid URLs found in the input file.')
        return

    all_cookie_data = []
    for url in urls:
        logging.info(f"Processing URL: {url}")
        cookie_data = get_cookies(url)
        all_cookie_data.append(cookie_data)

    markdown_content = get_cookie_stats(all_cookie_data)

    with open(args.output_report, 'w', encoding='utf-8') as f:
        f.write(markdown_content)
    logging.info(f"Report generated and saved to '{args.output_report}'.")


if __name__ == '__main__':
    main()
