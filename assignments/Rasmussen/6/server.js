const express = require('express');
const md5 = require('md5');
const fs = require('fs');
const path = require('path');

const app = express();

const fingerprints = {};
let clientCount = 0;

const logFilePath = path.join(__dirname, 'server.log');
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });

function writeLog(message) {
  const timestamp = new Date().toISOString();
  logStream.write(`[${timestamp}] ${message}\n`);
  console.log(message);
}

function getFingerprint(req) {
  const ip = req.ip;
  const userAgent = req.headers['user-agent'] || '';
  const accept = req.headers['accept'] || '';
  const acceptLanguage = req.headers['accept-language'] || '';
  const acceptEncoding = req.headers['accept-encoding'] || '';
  const connection = req.headers['connection'] || '';
  const host = req.headers['host'] || '';
  const referer = req.headers['referer'] || '';

  const data = ip + userAgent + accept + acceptLanguage + acceptEncoding + connection + host + referer;
  const hash = md5(data);

  return hash;
}

app.use((req, res) => {
    const fingerprint = getFingerprint(req);
  
    if (fingerprints[fingerprint]) {
      const clientId = fingerprints[fingerprint];
      res.send(`Welcome back! We recognize you as client ${clientId}.`);
      writeLog(`Returning client ${clientId} with fingerprint: ${fingerprint}`);
    } else {
      clientCount++;
      fingerprints[fingerprint] = clientCount;
      res.send(`Hello, new client! You are client number ${clientCount}.`);
      writeLog(`New client ${clientCount} with fingerprint: ${fingerprint}`);
    }
  });
  
  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    writeLog(`Server started on port ${PORT}`);
  });