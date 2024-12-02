const express = require('express');
const cookieParser = require('cookie-parser');
const md5 = require('md5');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware to use cookie-parser and serve static files
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'html'))); // Serve static HTML files

// In-memory store for fingerprints
const fingerprints = {};

// Function to generate fingerprint using MD5
function generateFingerprint(req) {
    const headers = {
        userAgent: req.headers['user-agent'] || '',         // User-Agent header
        acceptLanguage: req.headers['accept-language'] || '', // Accept-Language header
        accept: req.headers['accept'] || '',                 // Accept header
        encoding: req.headers['accept-encoding'] || '',      // Accept-Encoding header
        cookies: req.cookies || {},                          // Include cookies for returning users
    };
    // Generate MD5 hash of the headers object
    return md5(JSON.stringify(headers));
}

// Function to log fingerprints to a file
function logFingerprint(fingerprint, headers) {
    console.log('logFingerprint called with fingerprint:', fingerprint);
    const logEntry = {
        fingerprint,
        headers,
        timestamp: new Date().toISOString(),
    };
    const logFilePath = path.join(__dirname, 'fingerprints.log');
    try {
        fs.appendFileSync(logFilePath, JSON.stringify(logEntry) + '\n', 'utf8');
        console.log('Fingerprint logged successfully at', logFilePath);
    } catch (error) {
        console.error('Error writing to fingerprints.log:', error);
    }
}

// Middleware for cloaking and fingerprinting
app.use((req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    const ipAddress = req.ip;

    // Cloaking logic
    if (/curl|wget/i.test(userAgent)) {
        // If the request is from a command-line tool, serve a plain text response
        res.setHeader('Content-Type', 'text/plain');
        res.send("Special response for CLI tools like curl or wget.");
    } else if (
        ipAddress.startsWith('::ffff:192.168.') || 
        ipAddress.startsWith('192.168.') || 
        ipAddress.startsWith('::ffff:10.27.27.') || 
        ipAddress.startsWith('10.27.27.')
    ) {
        // If the request comes from a local IP range or the additional IP range, serve a local-user page
        res.sendFile(path.join(__dirname, 'html', 'local-user.html'));
    } else {
        // Default behavior with fingerprinting
        const fingerprint = generateFingerprint(req);

        // Check if the fingerprint is already known
        if (!fingerprints[fingerprint]) {
            // Assign a unique HTML page to the new client
            fingerprints[fingerprint] = `page-${Object.keys(fingerprints).length + 1}.html`;
            console.log(`New client: ${fingerprint}`);
        } else {
            console.log(`Returning client: ${fingerprint}`);
        }

        // Log the fingerprint and headers
        logFingerprint(fingerprint, req.headers);

        // Serve the assigned HTML page
        const htmlFile = fingerprints[fingerprint];
        const filePath = path.join(__dirname, 'html', htmlFile);
        if (fs.existsSync(filePath)) {
            res.sendFile(filePath);
        } else {
            // If the HTML file doesn't exist, send a 404 response
            res.status(404).send('<h1>404 Not Found</h1>');
        }
    }
});

// Endpoint for Echo Service to return HTTP request headers
app.get('/echo', (req, res) => {
    const response = {
        method: req.method,
        headers: req.headers,
        client_ip: req.ip,
        time_utc: new Date().toISOString(),
        info: "Echo service from this server",
    };
    res.json(response);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

