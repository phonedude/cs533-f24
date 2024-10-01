const http = require('http');

// Store the URLs from the command-line arguments
const urls = process.argv.slice(2);

// Array to store the data for each URL
let results = [];
let count = 0;

// Function to make the HTTP GET request for each URL
function httpGet(index) {
    http.get(urls[index], (response) => {
        let fullData = '';

        // Set the response encoding to 'utf8' to receive string data
        response.setEncoding('utf8');

        // Collect data chunks
        response.on('data', (chunk) => {
            fullData += chunk;
        });

        // Once all data is received
        response.on('end', () => {
            // Store the result in the correct order
            results[index] = fullData;
            count++;

            // When all requests are finished, print the results in the correct order
            if (count === urls.length) {
                results.forEach(result => console.log(result));
            }
        });

        // Handle errors
        response.on('error', (err) => {
            console.error(`Error: ${err.message}`);
        });
    }).on('error', (err) => {
        console.error(`Request error: ${err.message}`);
    });
}

// Make a request for each URL
for (let i = 0; i < urls.length; i++) {
    httpGet(i);
}
