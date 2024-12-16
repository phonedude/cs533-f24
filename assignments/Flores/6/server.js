const express = require('express');
const cookieParser = require('cookie-parser');
const md5 = require('md5');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

// Configuration variables to control cloaking
let cloakFor192168 = true;  // Set to true to enable cloaking for 192.168.*.*
let cloakFor102727 = false;  // Set to true to enable cloaking for 10.27.27.*
let cloakFile = 'page-1.html';  // File to serve when cloaking is triggered

// Middleware to use cookie-parser
app.use(cookieParser());

// In-memory store for fingerprints
const fingerprints = {};

// Function to generate fingerprint using MD5
function generateFingerprint(req) {
    const headers = {
        userAgent: req.headers['user-agent'] || '',
        acceptLanguage: req.headers['accept-language'] || '',
        accept: req.headers['accept'] || '',
        encoding: req.headers['accept-encoding'] || '',
        cookies: req.cookies || {},
    };
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

// Middleware for fingerprinting and cloaking (placed before express.static)
app.use((req, res, next) => {
    const userAgent = req.headers['user-agent'] || '';
    const ipAddress = req.ip;

    // Generate the fingerprint
    const fingerprint = generateFingerprint(req);

    // Check if the fingerprint is already known
    if (!fingerprints[fingerprint]) {
        fingerprints[fingerprint] = `page-${Object.keys(fingerprints).length + 1}.html`;
        console.log(`New client: ${fingerprint} assigned to ${fingerprints[fingerprint]}`);
    } else {
        console.log(`Returning client: ${fingerprint} with page ${fingerprints[fingerprint]}`);
    }

    // Log the fingerprint and headers
    logFingerprint(fingerprint, req.headers);

    // Handle only the root URL ('/')
    if (req.path === '/') {
        // Cloaking logic
        if (/curl|wget/i.test(userAgent)) {
            // Handle requests from CLI tools like curl or wget
            res.setHeader('Content-Type', 'text/plain');
            res.send("Special response for CLI tools like curl or wget.");
        } else if (
            (cloakFor192168 && (ipAddress.startsWith('::ffff:192.168.') || ipAddress.startsWith('192.168.'))) ||
            (cloakFor102727 && (ipAddress.startsWith('::ffff:10.27.27.') || ipAddress.startsWith('10.27.27.')))
        ) {
            // Serve the specified cloak file for the cloaked IP ranges
            const filePath = path.join(__dirname, 'html', cloakFile);
            if (fs.existsSync(filePath)) {
                res.sendFile(filePath);
            } else {
                res.status(404).send(`<h1>404 Not Found: ${cloakFile} not found</h1>`);
            }
        } else {
            // Serve the assigned HTML page based on the fingerprint
            const htmlFile = fingerprints[fingerprint];
            const filePath = path.join(__dirname, 'html', htmlFile);
            if (fs.existsSync(filePath)) {
                res.sendFile(filePath);
            } else {
                res.status(404).send(`<h1>404 Not Found: ${htmlFile} not found</h1>`);
            }
        }
    } else {
        // For other paths, pass control to the next middleware
        next();
    }
});

// Serve static files (after custom middleware)
app.use(express.static(path.join(__dirname, 'html')));

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

