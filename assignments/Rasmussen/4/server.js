const express = require('express');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const app = express();
const port = 4000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Function to check if a website is frameable
const isFrameable = async (url) => {
    try {
        const response = await axios.get(url, { maxRedirects: 5 });
        const xFrameOptions = response.headers['x-frame-options'];
        const contentSecurityPolicy = response.headers['content-security-policy'];

        // Check if the website has headers that prevent framing
        if (xFrameOptions || (contentSecurityPolicy && contentSecurityPolicy.includes('frame-ancestors'))) {
            return false;
        }
        return true;
    } catch (error) {
        if (error.response) {
            console.error(`Error checking ${url}:`, error.message);
        } else if (error.code === 'ERR_FR_TOO_MANY_REDIRECTS') {
            console.error(`Too many redirects for ${url}`);
        } else {
            console.error(`Error checking ${url}:`, error.message);
        }
        return false;
    }
};

// Route to check frameability of websites and render them in boxes
app.get('/check-frameable', async (req, res) => {
    const filePath = path.join(__dirname, 'data', 'ARASM002@ODU.EDU');
    let websites = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);

    // Filter out britannica.com
    websites = websites.filter(website => website !== 'britannica.com');

    const results = await Promise.all(websites.map(async (website) => {
        const frameable = await isFrameable(`http://${website}`);
        return { website: `http://${website}`, frameable };
    }));

    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Frameable Websites</title>
            <style>
                .container {
                    display: flex;
                    flex-wrap: wrap;
                }
                .box {
                    width: 20%;
                    padding: 10px;
                    box-sizing: border-box;
                }
                iframe {
                    width: 100%;
                    height: 200px;
                    border: 1px solid #ccc;
                }
                .url {
                    text-align: center;
                    margin-top: 5px;
                    font-size: 12px;
                }
                .not-frameable {
                    text-align: center;
                    color: red;
                    font-size: 12px;
                }
            </style>
        </head>
        <body>
            <div class="container">
    `;

    results.forEach(result => {
        if (result.frameable) {
            htmlContent += `
                <div class="box">
                    <iframe src="${result.website}" frameborder="0"></iframe>
                    <div class="url">${result.website}</div>
                </div>
            `;
        } else {
            htmlContent += `
                <div class="box">
                    <div class="not-frameable">Cannot frame ${result.website}</div>
                </div>
            `;
        }
    });

    htmlContent += `
            </div>
        </body>
        </html>
    `;

    res.send(htmlContent);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});