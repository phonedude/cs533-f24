const express = require('express');
const cookieParser = require('cookie-parser');
const md5 = require('md5');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 4000;

// Cloaking configuration
const cloakConfig = {
    '192.168': true,
    '10.27.27': false,
    file: 'page-1.html',
};

// Middleware setup
app.use(cookieParser());

// In-memory fingerprint store
const fingerprints = {};

// Generate client fingerprint
const generateFingerprint = req =>
    md5(JSON.stringify({
        userAgent: req.headers['user-agent'] || '',
        acceptLanguage: req.headers['accept-language'] || '',
        accept: req.headers['accept'] || '',
        encoding: req.headers['accept-encoding'] || '',
        cookies: req.cookies || {},
    }));

// Log fingerprint to file
const logFingerprint = (fp, headers) => {
    const logPath = path.join(__dirname, 'fingerprints.log');
    const entry = JSON.stringify({ fingerprint: fp, headers, timestamp: new Date().toISOString() }) + '\n';
    fs.appendFile(logPath, entry, err => {
        if (err) console.error('Log error:', err);
    });
};

// Middleware for fingerprinting and cloaking
app.use((req, res, next) => {
    const ip = req.ip.replace(/^.*:/, ''); // Normalize IPv4-mapped IPv6
    const userAgent = req.headers['user-agent'] || '';
    const fingerprint = generateFingerprint(req);

    fingerprints[fingerprint] ??= `page-${Object.keys(fingerprints).length + 1}.html`;
    logFingerprint(fingerprint, req.headers);

    if (req.path === '/') {
        // CLI detection
        if (/curl|wget/i.test(userAgent)) {
            return res.type('text').send('Special response for CLI tools like curl or wget.');
        }

        // Cloaking by IP prefix
        for (const [subnet, enabled] of Object.entries(cloakConfig)) {
            if (enabled && ip.startsWith(subnet)) {
                const cloakPath = path.join(__dirname, 'html', cloakConfig.file);
                return fs.existsSync(cloakPath)
                    ? res.sendFile(cloakPath)
                    : res.status(404).send(`<h1>404 Not Found: ${cloakConfig.file}</h1>`);
            }
        }

        // Serve assigned HTML page
        const assignedPage = fingerprints[fingerprint];
        const filePath = path.join(__dirname, 'html', assignedPage);
        return fs.existsSync(filePath)
            ? res.sendFile(filePath)
            : res.status(404).send(`<h1>404 Not Found: ${assignedPage}</h1>`);
    }

    next();
});

// Serve static files
app.use(express.static(path.join(__dirname, 'html')));

// Echo endpoint
app.get('/echo', (req, res) => {
    res.json({
        method: req.method,
        headers: req.headers,
        client_ip: req.ip,
        time_utc: new Date().toISOString(),
        info: "Echo service from this server",
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
