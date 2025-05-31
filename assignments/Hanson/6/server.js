const express = require('express');
const md5 = require('md5');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Store fingerprints and client count
const fingerprints = new Map();
let clientCount = 0;

// Setup logging
const logFilePath = path.join(__dirname, 'server_fingerprints.log');
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

function writeLog(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;
  logStream.write(logMessage + '\n');
  console.log(logMessage);
}

// Generate a fingerprint based on HTTP headers
function getFingerprint(req) {
  const ip = req.ip || '';
  const headers = [
    req.headers['user-agent'],
    req.headers['accept'],
    req.headers['accept-language'],
    req.headers['accept-encoding'],
    req.headers['connection'],
    req.headers['host'],
    req.headers['referer'],
  ].filter(Boolean).join('');

  return md5(ip + headers);
}

// Middleware to handle root path requests only
app.use((req, res, next) => {
  if (req.path !== '/') {
    return res.status(204).end(); // No content for other paths like /favicon.ico
  }

  const fingerprint = getFingerprint(req);

  if (fingerprints.has(fingerprint)) {
    const clientId = fingerprints.get(fingerprint);
    writeLog(`A returning client ${clientId} with fingerprint: ${fingerprint}`);
    res.send(`We recognize you as client with number ID: ${clientId}. `);
  } else {
    clientCount++;
    fingerprints.set(fingerprint, clientCount);
    writeLog(`A new client ${clientCount} was created with fingerprint: ${fingerprint}`);
    res.send(`Your new client number ID is ${clientCount}. `);
  }
});

// Start server while listening on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
  writeLog(`Server started on port ${PORT} and listening on all interfaces`);
});
