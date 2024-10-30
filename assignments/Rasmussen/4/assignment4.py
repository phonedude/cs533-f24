import os
import asyncio
from playwright.async_api import async_playwright

async def check_iframe_load(website):
    """
    Uses Playwright to launch a browser, load the website in an iframe,
    and determine if it rendered successfully by capturing iframe load events.

    Args:
        website: The URL of the website to check.

    Returns:
        True if the iframe loaded successfully, False otherwise.
    """
    try:
        async with async_playwright() as p:
            # Launch the browser
            browser = await p.chromium.launch(headless=True)
            page = await browser.new_page()

            # Store load status
            iframe_loaded = {"status": False}

            # Create a simple HTML page with the iframe pointing to the target site
            await page.set_content(f"""
                <!DOCTYPE html>
                <html>
                <head><title>Iframe Test</title></head>
                <body>
                    <iframe id="myIframe" src="{website}" width="800" height="600"></iframe>
                    <script>
                        const iframe = document.getElementById('myIframe');
                        iframe.onload = function() {{
                            console.log('iframe loaded');  // Log on successful load
                        }};
                        iframe.onerror = function() {{
                            console.error('iframe failed to load');  // Log on failure
                        }};
                    </script>
                </body>
                </html>
            """)

            # Capture console messages
            page.on("console", lambda msg: _check_console_message(msg, iframe_loaded))

            # Allow time for the iframe to load or fail
            await asyncio.sleep(5)

            # Close the browser
            await browser.close()

            return iframe_loaded["status"]

    except Exception as e:
        print(f"Error processing {website}: {e}")
        return False

def _check_console_message(msg, iframe_loaded):
    """
    Helper function to check console messages from the browser page.

    Args:
        msg: The console message object.
        iframe_loaded: A dictionary to track iframe load status.
    """
    if "iframe loaded" in msg.text:
        iframe_loaded["status"] = True
    elif "iframe failed to load" in msg.text:
        iframe_loaded["status"] = False

def generate_markdown_table(results):
    """
    Generates a markdown table from the results dictionary.

    Args:
        results: A dictionary mapping websites to boolean render status.

    Returns:
        A string containing the markdown table.
    """
    table = "| Website | Rendered |\n"
    table += "|---|---|\n"
    for website, rendered in results.items():
        table += f"| {website} | {'Yes' if rendered else 'No'} |\n"
    return table

async def main():
    """
    Main function to process the list of websites.
    """
    website_file = "./data/ARASM002_test"
    results = {}

    # Read the list of websites from the file
    with open(website_file, "r") as f:
        websites = [line.strip() for line in f]

    # Iterate over websites and check iframe rendering
    for website in websites:
        print(f"Checking {website}...")
        rendered = await check_iframe_load(website)
        results[website] = rendered

    # Generate the markdown table with the results
    markdown_table = generate_markdown_table(results)

    # Write results to README.md
    with open("README.md", "a") as readme_file:
        readme_file.write("\n\n## Website Rendering Results\n\n")
        readme_file.write(markdown_table)

    print('Program Complete!')

if __name__ == "__main__":
    asyncio.run(main())
