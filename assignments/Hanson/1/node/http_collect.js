// Import the built-in 'http' module
const http = require('http');

// Get the URL from the first command-line argument
const url = process.argv[2];

// Perform the HTTP GET request
http.get(url, (response) => {
    // Set the encoding to 'utf8' to receive the data as a string
    response.setEncoding('utf8');

    let fullData = '';

    // Collect data from the "data" event
    response.on('data', (chunk) => {
        fullData += chunk; // Concatenate the chunks into fullData
    });

    // Handle the "end" event, which occurs when all data has been received
    response.on('end', () => {
        console.log(fullData.length);  // Print the number of characters received
        console.log(fullData);         // Print the full response data
    });

    // Handle any potential errors
    response.on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });

}).on('error', (err) => {
    console.error(`Request error: ${err.message}`);
});
