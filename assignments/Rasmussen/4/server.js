const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const app = express();
const port = 4000;

// Add logging utility
const logFile = path.join(__dirname, 'output.txt');

function logToFile(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${type}: ${message}\n`;
    fs.appendFileSync(logFile, logMessage);
}


async function generateResponseFile(url, response) {
    try {
        // Create response_files directory if it doesn't exist
        const responseDir = path.join(__dirname, 'response_files');
        if (!fs.existsSync(responseDir)) {
            fs.mkdirSync(responseDir);
            logToFile('Created response_files directory');
        }

        // Parse URL to get hostname
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname.replace(':', '_');
        const filename = path.join(responseDir, `${hostname}.txt`);

        // Format the response content
        let content = '';
        content += `URL: ${url}\n`;
        content += `Final URL: ${response.request.res.responseUrl || 'N/A'}\n`;
        content += `Status Code: ${response.status}\n\n`;

        // Add headers
        content += 'Headers:\n';
        Object.entries(response.headers).forEach(([key, value]) => {
            content += `${key}: ${value}\n`;
        });

        // Add content snippet (first 500 characters)
        content += '\nContent Snippet (first 500 characters):\n';
        content += response.data.toString().substring(0, 500);

        // Write to file using synchronous version
        fs.writeFileSync(filename, content, 'utf-8');
        logToFile(`Response file generated for ${hostname}`);

    } catch (error) {
        logToFile(`Error generating response file for ${url}: ${error}`, 'ERROR');
    }
}

// Serve static files from the 'frameable' directory
app.use('/frameable', express.static(path.join(__dirname, 'frameable')));

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'index.html'));
});

// Route for the vulnerable page
app.get('/frame-path-attack/vulnerable-page', (req, res) => {

    // Set a cookie that's only protected by Path attribute
    res.cookie('serverSecret', 'super_sensitive_data', {
        path: '/frame-path-attack/vulnerable-page',
        httpOnly: false // Allow JavaScript access
    });

    
    res.sendFile(path.join(__dirname, 'frame-path-attack/vulnerable-page', 'vulnerable.html'));
});
// Route for the attacker page
app.get('/frame-path-attack/attacker-page', (req, res) => {
    // Set a cookie for the attacker page path to demonstrate cookie isolation
    res.cookie('attackerCookie', 'not-sensitive', {
        path: '/frame-path-attack/attacker-page',
        httpOnly: false
    });
    res.sendFile(path.join(__dirname, 'frame-path-attack/attacker-page', 'attacker.html'));
});

// Function to check if a website is frameable
const isFrameable = async (url) => {
    logToFile(`Processing URL: ${url}`);
    try {
        const response = await axios.get(url, {
            maxRedirects: 5,
            timeout: 50000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5'
            }
        });

        // Generate response file
        await generateResponseFile(url, response);

        const xFrameOptions = response.headers['x-frame-options'];
        const contentSecurityPolicy = response.headers['content-security-policy'];

        // Check if the website has headers that prevent framing
        if (xFrameOptions || (contentSecurityPolicy && contentSecurityPolicy.includes('frame-ancestors'))) {
            return {
                frameable: false,
                reason: xFrameOptions ? 'X-Frame-Options' : 'Content-Security-Policy'
            };
        }
        return { frameable: true };
    } catch (error) {
        logToFile(`Error checking frameability for ${url}: ${error}`, 'ERROR');
        if (error.response) {
            logToFile(`Error response for ${url}: ${error.response.status} - ${error.response.statusText}`, 'ERROR');
        } else if (error.code === 'ERR_FR_TOO_MANY_REDIRECTS') {
            logToFile(`Too many redirects for ${url}`, 'ERROR');
        } else {
            logToFile(`Error checking ${url}: ${error.message}`, 'ERROR');
        }
        return { frameable: false, reason: 'Error' };
    }
};

// Function to generate a specific HTML page for each website
const generateWebsitePage = (website, frameable) => {
    const websiteName = website.replace('http://', '').replace('https://', '');
    const template = fs.readFileSync(path.join(__dirname, 'templates', 'frameable_template.html'), 'utf-8');
    const frameContent = frameable ? `<iframe src="${website}" frameborder="0"></iframe>` : `<div class="not-frameable">Website was not frameable</div>`;
    const htmlContent = template.replace(/{{websiteName}}/g, websiteName).replace(/{{frameContent}}/g, frameContent);
    fs.writeFileSync(path.join(__dirname, 'frameable', `${websiteName}.html`), htmlContent);
};

// Route to check frameability of websites and render them in boxes
app.get('/check-frameable', async (req, res) => {
    const filePath = path.join(__dirname, 'data', 'ARASM002@ODU.EDU');
    let websites = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);

    const results = await Promise.all(websites.map(async (website) => {
        // Try HTTPS first, then fallback to HTTP if needed
        try {
            const httpsUrl = `https://${website}`;
            if (website === 'britannica.com') {
                // Mock result for britannica.com because it kept re-directing me
                const frameable = false;
                const reason = 'Too many redirects';
                generateWebsitePage(httpsUrl, frameable);
                return { website: httpsUrl, frameable, reason };
            }
            
            const { frameable, reason } = await isFrameable(httpsUrl);
            generateWebsitePage(httpsUrl, frameable);
            return { website: httpsUrl, frameable, reason };

        } catch (error) {
            // Fallback to HTTP
            const httpUrl = `http://${website}`;
            const { frameable, reason } = await isFrameable(httpUrl);
            generateWebsitePage(httpUrl, frameable);
            return { website: httpUrl, frameable, reason };
        }
    }));

    let frameableCount = 0;
    let notFrameableCount = 0;
    let frameableList = [];
    let notFrameableList = [];

    results.forEach(result => {
        if (result.frameable) {
            frameableCount++;
            frameableList.push(result.website);
        } else {
            notFrameableCount++;
            notFrameableList.push({ website: result.website, reason: result.reason });
        }
    });

    const template = fs.readFileSync(path.join(__dirname, 'templates', 'index_template.html'), 'utf-8');
    let content = '';

    results.forEach(result => {
        if (result.frameable) {
            content += `
                <div class="box">
                    <iframe src="${result.website}" frameborder="0"></iframe>
                    <div class="url"><a href="/frameable/${result.website.replace('http://', '').replace('https://', '')}.html">${result.website}</a></div>
                </div>
            `;
        } else {
            content += `
                <div class="box">
                    <div class="not-frameable">🚫</div>
                    <div class="url"><a href="/frameable/${result.website.replace('http://', '').replace('https://', '')}.html">Cannot frame ${result.website}</a></div>
                </div>
            `;
        }
    });

    const htmlContent = template.replace('{{content}}', content);
    res.send(htmlContent);

    // Update README.md
    const readmeContent = `
## Assignment 4, CS 433/533 Web Security, Fall 2024
### Anton Rasmussen

For this assignment, we explored website framing vulnerabilities by testing the frameability of 100 popular websites and demonstrating a cookie theft attack using iframes.

The project consists of two main components:

1. A website framing test that checks whether popular websites can be embedded in iframes, documenting the reasons why some sites cannot be framed (e.g. X-Frame-Options headers, Content-Security-Policy).

2. A demonstration of a cookie theft vulnerability using iframes, showing how cookies scoped only with the Path attribute can be accessed by malicious pages.

The project includes:
- A main index page with links to both demonstrations
- Individual HTML pages for each tested website showing whether it can be framed
- An attacker page that attempts to steal cookies from a vulnerable page
- A vulnerable page that sets cookies with only path-based protection

After completing this project we have the following directory structure:

\`\`\`
.
├── README.md
├── data
│   ├── ARASM002@ODU.EDU
│   └── ARASM002_test
├── frame-path-attack
│   ├── attacker-page
│   │   └── attacker.html
│   └── vulnerable-page
│       └── vulnerable.html
├── frameable
│   ├── 4shared.com.html
│   ├── abcnews.go.com.html
│   ├── alibaba.com.html
│   ├── aliexpress.com.html
│   ├── aol.com.html
│   ├── apache.org.html
│   ├── apple.com.html
│   ├── arxiv.org.html
│   ├── biblegateway.com.html
│   ├── biglobe.ne.jp.html
│   ├── bloomberg.com.html
│   ├── booking.com.html
│   ├── britannica.com.html
│   ├── buzzfeed.com.html
│   ├── cambridge.org.html
│   ├── cnil.fr.html
│   ├── cnn.com.html
│   ├── cointernet.com.co.html
│   ├── com.com.html
│   ├── cpanel.net.html
│   ├── discord.com.html
│   ├── disqus.com.html
│   ├── doi.org.html
│   ├── drive.google.com.html
│   ├── dropbox.com.html
│   ├── ea.com.html
│   ├── elmundo.es.html
│   ├── espn.com.html
│   ├── feedburner.com.html
│   ├── forms.gle.html
│   ├── g.co.html
│   ├── get.google.com.html
│   ├── gfycat.com.html
│   ├── globo.com.html
│   ├── godaddy.com.html
│   ├── gofundme.com.html
│   ├── goo.ne.jp.html
│   ├── goodreads.com.html
│   ├── google.ru.html
│   ├── gravatar.com.html
│   ├── gsmarena.com.html
│   ├── guardian.co.uk.html
│   ├── hatena.ne.jp.html
│   ├── hindustantimes.com.html
│   ├── hp.com.html
│   ├── ign.com.html
│   ├── ikea.com.html
│   ├── imageshack.us.html
│   ├── independent.co.uk.html
│   ├── jhu.edu.html
│   ├── jstor.org.html
│   ├── justgiving.com.html
│   ├── latimes.com.html
│   ├── liberation.fr.html
│   ├── linkedin.com.html
│   ├── mailchimp.com.html
│   ├── marca.com.html
│   ├── naver.com.html
│   ├── news.com.au.html
│   ├── npr.org.html
│   ├── nytimes.com.html
│   ├── offset.com.html
│   ├── oup.com.html
│   ├── outlook.com.html
│   ├── ovhcloud.com.html
│   ├── people.com.html
│   ├── php.net.html
│   ├── pinterest.fr.html
│   ├── pl.wikipedia.org.html
│   ├── play.google.com.html
│   ├── playstation.com.html
│   ├── plos.org.html
│   ├── prezi.com.html
│   ├── pt.wikipedia.org.html
│   ├── reverbnation.com.html
│   ├── sakura.ne.jp.html
│   ├── samsung.com.html
│   ├── search.yahoo.com.html
│   ├── sina.com.cn.html
│   ├── spiegel.de.html
│   ├── support.google.com.html
│   ├── thefreedictionary.com.html
│   ├── theverge.com.html
│   ├── usgs.gov.html
│   ├── vistaprint.com.html
│   ├── walmart.com.html
│   ├── webmd.com.html
│   ├── webnode.page.html
│   ├── whitehouse.gov.html
│   ├── wikimedia.org.html
│   ├── wordpress.org.html
│   ├── wp.com.html
│   ├── www.gov.uk.html
│   ├── www.over-blog.com.html
│   ├── www.wix.com.html
│   ├── www.yahoo.com.html
│   ├── yadi.sk.html
│   ├── ytimg.com.html
│   ├── zendesk.com.html
│   └── zippyshare.com.html
├── index.html
├── package-lock.json
├── package.json
├── server.js
└── templates
    ├── frameable_template.html
    └── index_template.html
\`\`\`

Note: I ran tree -I 'node_modules' to ignore the verbose node_modules directory; notably this directory is hidden (i.e. configured to be ignored by git).


### The videos demonstrating each of these tasks can be found here:

- [Which public sites are framable?](https://youtu.be/RbsX8UF_SOQ)
- [Frame Path attack](https://youtu.be/E4ytD1ksskY)


# Website Rendering Results

## Frameable Websites (${frameableCount})
${frameableList.map(website => `- ${website}`).join('\n')}

## Not Frameable Websites (${notFrameableCount})
${notFrameableList.map(item => `- [${item.website}](frameable/${item.website.replace('http://', '').replace('https://', '')}.html) (Reason: ${item.reason})`).join('\n')}
    `;

    fs.writeFileSync(path.join(__dirname, 'README.md'), readmeContent);
});

// Start the server
app.listen(port, () => {
    logToFile('Server started on port 3000');
});