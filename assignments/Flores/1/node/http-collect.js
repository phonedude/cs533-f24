const http = require('http');

// The URL is provided as the first command-line argument
const url = process.argv[2];

// Make an HTTP GET request
http.get(url, function (response) {
    let result = '';

    // Set the encoding to 'utf8' to receive strings
    response.setEncoding('utf8');

    // Collect all data from the "data" events
    response.on('data', function (chunk) {
        result += chunk;
    });

    // When the response has finished ("end" event), print the results
    response.on('end', function () {
        console.log(result.length); // Print the number of characters
        console.log(result);        // Print the complete string
    });

    // Handle potential errors
    response.on('error', console.error);

}).on('error', console.error); // Handle errors from the HTTP GET request
