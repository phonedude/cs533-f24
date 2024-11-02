const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  console.log('Puppeteer version:', puppeteer.version);
  console.log('Node.js version:', process.version);

  // Replace waitForTimeout with a standard delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log('Waited for 1 second');

  await browser.close();
})();