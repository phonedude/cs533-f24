const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

(async () => {
  // Start the Node.js server (frame-server.js)
  console.log('Starting the Node.js server...');
  const server = spawn('node', ['frame-server.js'], {
    cwd: path.join(__dirname, '../frame-path-attack'), // Adjust this path if necessary
    stdio: 'inherit'
  });

  // Wait for the server to start
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Launch Puppeteer
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const framableDir = path.join(__dirname, '../framable');
  const results = [];

  // Get all HTML files in the framable directory
  const htmlFiles = fs.readdirSync(framableDir).filter(file => file.endsWith('.html'));

  for (const file of htmlFiles) {
    const filePath = `http://localhost:4000/framable/${file}`; // Updated port to 4000 and path

    let blockingHeaders = {};

    try {
      // Intercept responses to capture headers
      const responseHandler = async (response) => {
        const url = response.url();
        if (url !== filePath) { // Ignore the main page, focus on iframe content
          const headers = response.headers();

          if (headers['x-frame-options']) {
            blockingHeaders['X-Frame-Options'] = headers['x-frame-options'];
          }

          if (headers['content-security-policy']) {
            blockingHeaders['Content-Security-Policy'] = headers['content-security-policy'];
          }
        }
      };

      page.on('response', responseHandler);

      await page.goto(filePath, { waitUntil: 'networkidle2' });

      // Check if the page contains an iframe
      const iframeElement = await page.$('iframe');
      if (iframeElement) {
        const frame = await iframeElement.contentFrame();

        if (frame) {
          const frameContent = await frame.content();

          // Check if the iframe URL or content is valid or if it's blocked
          const iframeURL = frame.url();
          if (iframeURL && !frameContent.includes("blocked") && !frameContent.includes("denied")) {
            results.push({ file, framable: true });
            console.log(`${file}: Framable`);
          } else {
            // If the iframe's content is not loaded properly or it's blank
            results.push({ file, framable: false, blockingHeaders });
            console.log(`${file}: Not Framable (blocked or blank iframe content)`);
          }
        } else {
          // No frame content loaded, likely blocked
          results.push({ file, framable: false, blockingHeaders });
          console.log(`${file}: Not Framable (no frame content)`);
        }
      } else {
        // No iframe found at all
        results.push({ file, framable: false, error: 'No iframe found' });
        console.log(`${file}: Not Framable (no iframe found)`);
      }

      // Remove the response listener for the next iteration
      page.off('response', responseHandler);

    } catch (err) {
      // Handle errors like connection issues or blocked resources
      console.error(`${file}: Error loading page - ${err.message}`);
      results.push({ file, framable: false, error: err.message });
    }
  }

  await browser.close();

  // Write the results to a file
  fs.writeFileSync(path.join(__dirname, 'framable_results.json'), JSON.stringify(results, null, 2));

  // Stop the Node.js server
  console.log('Stopping the Node.js server...');
  server.kill();

  console.log('All done!');
})();

