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
        const response = await axios.get(url);
        return !response.headers['x-frame-options'];
    } catch (error) {
        console.error(`Error checking ${url}:`, error.message);
        return false;
    }
};

// Route to check frameability of websites
app.get('/check-frameable', async (req, res) => {
    const filePath = path.join(__dirname, 'frameable', './ARASM002_test');
    const websites = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);

    const results = await Promise.all(websites.map(async (website) => {
        const frameable = await isFrameable(website);
        return { website, frameable };
    }));

    res.json(results);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});