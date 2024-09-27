// Import the built-in 'http' module
const http = require('http');

// Get the URL from the first command-line argument
const url = process.argv[2];

// Perform the HTTP GET request
http.get(url, (response) => {
    // Set the encoding to 'utf8' to receive the data as a string
    response.setEncoding('utf8');

    // Listen to the "data" event and print each chunk of data to the console
    response.on('data', (chunk) => {
        console.log(chunk);
    });

    // Handle any potential error during the request
    response.on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });

    // Handle the "end" event when the response finishes
    response.on('end', () => {
        console.log('');
    });
}).on('error', (err) => {
    console.error(`Request error: ${err.message}`);
});
