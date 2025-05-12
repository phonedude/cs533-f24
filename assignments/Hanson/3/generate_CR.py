from pathlib import Path
import re
import pandas as pd

input_dir = Path('output_files')
output_dir = Path('cookie-report')
output_dir.mkdir(parents=True, exist_ok=True)

def contains_html(content):
    return '<html' in content.lower()

def parse_status_code(content):
    codes = re.findall(r'HTTP/\d(?:\.\d)?\s+(\d{3})', content)
    return codes[-1] if codes else "No Status Code Found"

def parse_final_url(content):
    match = re.search(r'^Final-URL:\s*(.*)$', content, flags=re.MULTILINE)
    return match.group(1) if match else 'N/A'

def parse_cookie_attributes(cookies):
    stats = {
        'http_only': 0, 'secure': 0, 'same_site': 0,
        'same_site_strict': 0, 'same_site_lax': 0, 'same_site_none': 0,
        'path_count': 0, 'path_non_root_count': 0,
        'paths': set(), 'paths_not_root': set()
    }
    for cookie in cookies:
        attrs = [attr.strip() for attr in cookie.split(';')]
        lower_attrs = [a.lower() for a in attrs]

        stats['http_only'] += 'httponly' in lower_attrs
        stats['secure'] += 'secure' in lower_attrs

        same_site = next((a for a in lower_attrs if a.startswith('samesite=')), None)
        if same_site:
            stats['same_site'] += 1
            value = same_site.split('=', 1)[1].strip()
            stats[f'same_site_{value}'] += 1 if value in stats else 0

        path_attr = next((a for a in attrs if a.lower().startswith('path=')), None)
        if path_attr:
            stats['path_count'] += 1
            path = path_attr.split('=', 1)[1].strip()
            stats['paths'].add(path)
            if path != '/':
                stats['path_non_root_count'] += 1
                stats['paths_not_root'].add(path)

    return stats

def extract_cookie_data(file_path):
    content = file_path.read_text(encoding='utf-8', errors='ignore')

    if contains_html(content):
        return {
            'site': file_path.stem,
            'status_code': 'Invalid (HTML content)',
            'num_cookies': 0,
            'http_only': 0, 'secure': 0, 'same_site': 0,
            'same_site_strict': 0, 'same_site_lax': 0, 'same_site_none': 0,
            'path_count': 0, 'path_non_root_count': 0,
            'paths': 'N/A', 'paths_not_root': 'N/A',
            'final_url': 'N/A'
        }

    cookies = re.findall(r'(?i)^Set-Cookie:\s*(.*)$', content, flags=re.MULTILINE)
    stats = parse_cookie_attributes(cookies)

    return {
        'site': file_path.stem,
        'status_code': parse_status_code(content),
        'num_cookies': len(cookies),
        'http_only': stats['http_only'],
        'secure': stats['secure'],
        'same_site': stats['same_site'],
        'same_site_strict': stats['same_site_strict'],
        'same_site_lax': stats['same_site_lax'],
        'same_site_none': stats['same_site_none'],
        'path_count': stats['path_count'],
        'path_non_root_count': stats['path_non_root_count'],
        'paths': ', '.join(stats['paths']) if stats['paths'] else 'No path set',
        'paths_not_root': ', '.join(stats['paths_not_root']) if stats['paths_not_root'] else 'N/A',
        'final_url': parse_final_url(content)
    }

summary = [extract_cookie_data(f) for f in input_dir.glob('*.txt') if not f.name.endswith('_invalid.txt')]
df = pd.DataFrame(summary)
valid_df = df[df['status_code'] != 'Invalid (HTML content)']


def markdown_cookie_report_table(df):
    return f"""

##Cookie Report for 100 Websites

| site | status_code | num_cookies | http_only | secure | same_site | same_site_strict | same_site_lax | same_site_none | paths | paths_not_root |

"""



def markdown_summary_stats_table(df):
    return f"""
## Summary Statistics

| Statistic | Value |
|-----------|--------|
| Total Sites Analyzed | {len(df)} |
| Total Cookies Collected | {df['num_cookies'].sum()} |
| HttpOnly Cookies | {df['http_only'].sum()} |
| Secure Cookies | {df['secure'].sum()} |
| SameSite Cookies | {df['same_site'].sum()} |
| SameSite Strict | {df['same_site_strict'].sum()} |
| SameSite Lax | {df['same_site_lax'].sum()} |
| SameSite None | {df['same_site_none'].sum()} |
| Cookies with Path | {df['path_count'].sum()} |
| Non-Root Paths | {df['path_non_root_count'].sum()} |
| Min Cookies Per Site | {df['num_cookies'].min()} |
| Max Cookies Per Site | {df['num_cookies'].max()} |
| Mean Cookies Per Site | {df['num_cookies'].mean():.2f} |
| Median Cookies Per Site | {df['num_cookies'].median():.2f} |
"""

df['Cookie Attributes'] = df.apply(
    lambda r: f"HttpOnly: {r['http_only']}, Secure: {r['secure']}, SameSite: {r['same_site']} (Strict: {r['same_site_strict']}, Lax: {r['same_site_lax']}, None: {r['same_site_none']}), Paths: {r['path_count']} (Non-root: {r['path_non_root_count']})",
    axis=1
)

detailed_df = df[['site', 'status_code', 'num_cookies', 'Cookie Attributes', 'final_url']].rename(columns={
    'site': 'URL', 'status_code': 'Status Code', 'num_cookies': 'Number of Cookies', 'final_url': 'Final URL'
})

detailed_table = detailed_df.to_markdown(index=False)

output_file = output_dir / 'final_stats.md'
with output_file.open('w', encoding='utf-8') as f:
    f.write('# Cookie Report for 100 Websites\n\n')
    f.write(markdown_summary_stats_table(valid_df))
    f.write('\n\n## Detailed Site Information\n\n')
    f.write(detailed_table)

print(f"Markdown table and statistics saved to {output_file}")