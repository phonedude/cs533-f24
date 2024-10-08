import os
import re
import pandas as pd

# Directory where the text files are located
response_dir = '/home/samuelflores/cs533-f24/assignments/Flores/3/output_dir'

# Function to extract cookie information from each response file
def extract_cookie_data(response_file):
    with open(response_file, 'r') as file:
        content = file.read()

        # Get final status code (last HTTP response code)
        status_code_matches = re.findall(r'HTTP/.* (\d{3})', content)
        if status_code_matches:
            status_code = status_code_matches[-1]  # Get the last status code if found
        else:
            status_code = "No Status Code Found"  # Default message if no status code is found

        # Find all "Set-Cookie" headers
        cookies = re.findall(r'Set-Cookie: (.*)', content)
        num_cookies = len(cookies)

        # Extract attributes from cookies
        http_only = sum(1 for cookie in cookies if 'HttpOnly' in cookie)
        secure = sum(1 for cookie in cookies if 'Secure' in cookie)
        same_site_strict = sum(1 for cookie in cookies if 'SameSite=Strict' in cookie)
        same_site_lax = sum(1 for cookie in cookies if 'SameSite=Lax' in cookie)
        same_site_none = sum(1 for cookie in cookies if 'SameSite=None' in cookie)
        path_set = sum(1 for cookie in cookies if 'Path=' in cookie)
        path_not_root = sum(1 for cookie in cookies if 'Path=/' not in cookie)

        return {
            'status_code': status_code,
            'num_cookies': num_cookies,
            'http_only': http_only,
            'secure': secure,
            'same_site_strict': same_site_strict,
            'same_site_lax': same_site_lax,
            'same_site_none': same_site_none,
            'path_set': path_set,
            'path_not_root': path_not_root
        }

# Create a summary table
summary = []

# Process all the .txt files in the response directory
for filename in os.listdir(response_dir):
    if filename.endswith('.txt'):
        response_file = os.path.join(response_dir, filename)
        site_data = extract_cookie_data(response_file)
        site_data['site'] = filename.replace('.txt', '')  # Add the site name (cleaned)
        summary.append(site_data)

# Convert summary into a DataFrame for better handling
df = pd.DataFrame(summary)

# Generate Markdown table
markdown_table = df.to_markdown(index=False)

# Write the Markdown table to a file in the response directory
markdown_output_file = os.path.join(response_dir, 'README.md')
with open(markdown_output_file, 'w') as f:
    f.write(markdown_table)

# Print a message indicating success
print(f"Markdown table saved to {markdown_output_file}")

# Calculate summary statistics
cookie_stats = {
    'min': df['num_cookies'].min(),
    'max': df['num_cookies'].max(),
    'mean': df['num_cookies'].mean(),
    'median': df['num_cookies'].median()
}

# Save statistics to a file in the response directory
stats_output_file = os.path.join(response_dir, 'cookie_stats.txt')
with open(stats_output_file, 'w') as f:
    f.write(f"Min cookies: {cookie_stats['min']}\n")
    f.write(f"Max cookies: {cookie_stats['max']}\n")
    f.write(f"Mean cookies: {cookie_stats['mean']:.2f}\n")
    f.write(f"Median cookies: {cookie_stats['median']}\n")

# Print a message indicating success
print(f"Cookie statistics saved to {stats_output_file}")

