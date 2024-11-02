import requests
import socket
import os
from tqdm import tqdm
from requests.adapters import HTTPAdapter
from urllib3.util import Retry

# File containing the list of URLs
urls_file = 'urls.txt'

# Output markdown file
output_file = 'framable_report.md'

# Read URLs from urls.txt
with open(urls_file, 'r') as f:
    urls = [line.strip() for line in f if line.strip()]

results = []

# Common headers to use in requests
headers_common = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept-Encoding': 'gzip, deflate',
    'Accept': '*/*',
    'Connection': 'keep-alive',
}

# Initialize tqdm progress bar
with tqdm(total=len(urls), desc='Processing URLs', unit='url') as pbar:
    for i, url in enumerate(urls, start=1):
        original_url = url  # URL as in urls.txt

        framable = 'Unknown'
        reason = ''
        final_url = ''
        resolved_domain = ''
        scheme = 'https://'

        # Ensure the URL has a scheme
        if url.startswith('http://'):
            scheme = 'http://'
            domain = url[len('http://'):]
        elif url.startswith('https://'):
            scheme = 'https://'
            domain = url[len('https://'):]
        else:
            domain = url

        # Validate domain name, try with and without 'www.'
        try_domains = [domain]
        if not domain.startswith('www.'):
            try_domains.append('www.' + domain)

        for attempt, test_domain in enumerate(try_domains):
            try:
                socket.gethostbyname(test_domain)
                resolved_domain = test_domain
                break  # Domain resolved successfully
            except socket.gaierror:
                continue  # Try the next domain

        if not resolved_domain:
            # Could not resolve the domain
            results.append({
                'page': i,
                'url': scheme + domain,  # Show the attempted URL with scheme
                'framable': 'Unknown',
                'reason': f'Cannot resolve domain: {domain}'
            })
            pbar.update(1)
            continue

        # Construct the URL with the resolved domain
        url_with_scheme = scheme + resolved_domain

        # Record the actual URL used
        actual_url_used = url_with_scheme

        # Try HTTPS first, then HTTP if SSL error occurs
        tried_http = False
        headers = {}
        session = requests.Session()

        # Add retries to handle transient errors
        retries = Retry(total=3, backoff_factor=1, status_forcelist=[502, 503, 504])
        adapter = HTTPAdapter(max_retries=retries)
        session.mount('http://', adapter)
        session.mount('https://', adapter)

        while True:
            try:
                response = session.get(
                    url_with_scheme,
                    headers=headers_common,
                    allow_redirects=True,
                    timeout=(10, 30),
                    # SSL verification is enabled by default; no need to set verify=True
                )
                final_url = response.url
                headers = {k.lower(): v for k, v in response.headers.items()}
                response.content[:1024]  # Read a small part of the content
                response.close()  # Close the connection
                break  # Request successful
            except requests.exceptions.SSLError as e:
                if not tried_http and scheme == 'https://':
                    # SSL error, try HTTP
                    scheme = 'http://'
                    url_with_scheme = scheme + resolved_domain
                    actual_url_used = url_with_scheme  # Update actual URL used
                    tried_http = True
                    continue
                else:
                    # SSL error on HTTP or already tried HTTP
                    results.append({
                        'page': i,
                        'url': actual_url_used,
                        'framable': 'Unknown',
                        'reason': f'SSL error: {e}'
                    })
                    break
            except requests.exceptions.ReadTimeout:
                # Read timeout occurred
                results.append({
                    'page': i,
                    'url': actual_url_used,
                    'framable': 'Unknown',
                    'reason': 'Read timeout after 30 seconds'
                })
                break
            except requests.exceptions.ConnectionError as e:
                # Connection error
                results.append({
                    'page': i,
                    'url': actual_url_used,
                    'framable': 'Unknown',
                    'reason': f'Connection error: {e}'
                })
                break
            except Exception as e:
                # Other exceptions
                results.append({
                    'page': i,
                    'url': actual_url_used,
                    'framable': 'Unknown',
                    'reason': f'Error accessing URL: {e}'
                })
                break

        if not headers:
            # Headers not retrieved due to an error
            pbar.update(1)
            continue

        x_frame_options = headers.get('x-frame-options', '').lower()
        content_security_policy = headers.get('content-security-policy', '').lower()

        framable = 'Yes'
        reason = ''

        if x_frame_options:
            framable = 'No'
            reason = f"X-Frame-Options: {x_frame_options}"
        elif 'frame-ancestors' in content_security_policy:
            framable = 'No'
            # Extract the frame-ancestors directive
            csp_directives = content_security_policy.split(';')
            for directive in csp_directives:
                if 'frame-ancestors' in directive:
                    reason = f"Content-Security-Policy: {directive.strip()}"
                    break

        results.append({
            'page': i,
            'url': actual_url_used,  # Use the actual URL used for the request
            'framable': framable,
            'reason': reason
        })

        pbar.update(1)  # Update the progress bar

    session.close()

# Generate the markdown report
md_content = '# Framable Sites Report\n\n'
md_content += '| Page | URL | Framable | Reason |\n'
md_content += '|------|-----|----------|--------|\n'

for res in results:
    # Escape vertical bars in the reason to prevent markdown table issues
    reason = res['reason'].replace('|', '\\|')
    md_content += f"| {res['page']} | {res['url']} | {res['framable']} | {reason} |\n"

# Write the markdown file
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(md_content)

print(f'\nFramable sites report generated at: {output_file}')
