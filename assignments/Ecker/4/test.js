const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Directory containing the generated HTML files
const framableDir = path.join(__dirname, 'frameable');

// Output markdown file
const outputFile = path.join(__dirname, 'framable_report.md');

(async () => {
  // Launch Puppeteer browser
  const browser = await puppeteer.launch();

  // Array to store the results
  const results = [];

  // Loop through all 100 pages
  for (let i = 1; i <= 100; i++) {
    console.log(`Processing page ${i}...`); // Progress report

    const pageUrl = `http://localhost:3000/page${i}.html`;
    const page = await browser.newPage();

    let iframeResponseHeaders = null;
    let iframeFailed = false;
    let iframeError = null;
    let embeddedUrl = null;

    // Set up request and response interceptors
    page.on('request', request => {
      const requestFrame = request.frame();
      if (
        requestFrame &&
        requestFrame.parentFrame() === page.mainFrame()
      ) {
        // This is the request for the iframe
        embeddedUrl = request.url();
      }
    });

    page.on('response', response => {
      const responseFrame = response.frame();
      if (
        responseFrame &&
        responseFrame.parentFrame() === page.mainFrame()
      ) {
        // This is the response for the iframe
        iframeResponseHeaders = response.headers();
      }
    });

    try {
      // Navigate to the page and wait until network is idle
      await page.goto(pageUrl, { waitUntil: 'networkidle2' });

      // Get the iframe element
      const iframeElement = await page.$('iframe');

      if (!iframeElement) {
        // No iframe found on the page
        iframeFailed = true;
        iframeError = new Error('No iframe element found on the page.');
      } else {
        // Get the content frame of the iframe
        const frame = await iframeElement.contentFrame();

        if (frame === null) {
          // Iframe failed to load
          iframeFailed = true;
        } else {
          // Try to access the iframe's content
          try {
            await frame.evaluate(() => document.body.innerHTML);
          } catch (err) {
            iframeFailed = true;
            iframeError = err;
          }
        }
      }
    } catch (err) {
      console.error(`Error loading page ${pageUrl}:`, err);
      iframeFailed = true;
      iframeError = err;
    }

    // Report on the iframe loading result
    if (!iframeFailed) {
      console.log(`Page ${i}: Iframe loaded successfully.`);
    } else {
      console.log(`Page ${i}: Failed to load iframe.`);
    }

    // Prepare the result for this page
    let result = {
      page: i,
      url: embeddedUrl,
      framable: !iframeFailed,
      reason: '',
    };

    if (iframeFailed) {
      if (iframeResponseHeaders) {
        if (iframeResponseHeaders['x-frame-options']) {
          result.reason = `X-Frame-Options: ${iframeResponseHeaders['x-frame-options']}`;
        } else if (iframeResponseHeaders['content-security-policy']) {
          result.reason = `Content-Security-Policy: ${iframeResponseHeaders['content-security-policy']}`;
        } else {
          result.reason = 'Iframe failed to load for an unknown reason.';
        }
      } else if (iframeError) {
        result.reason = `Error: ${iframeError.message}`;
      } else {
        result.reason = 'Iframe failed to load for an unknown reason.';
      }
    }

    results.push(result);

    await page.close();
  }

  await browser.close();

  // Generate the markdown report
  let mdContent = `# Framable Sites Report\n\n`;
  mdContent += `| Page | URL | Framable | Reason |\n`;
  mdContent += `|------|-----|----------|--------|\n`;

  for (const res of results) {
    let framable = res.framable ? 'Yes' : 'No';
    mdContent += `| ${res.page} | ${res.url || 'N/A'} | ${framable} | ${res.reason} |\n`;
  }

  // Write the markdown file
  fs.writeFileSync(outputFile, mdContent, 'utf-8');

  console.log('Framable sites report generated at:', outputFile);
})();
