const http = require('http');

// The URL is provided as the first command-line argument
const url = process.argv[2];

// Make an HTTP GET request
http.get(url, function (response) {
    // Set the encoding of the response to 'utf8' so we get strings instead of Buffers
    response.setEncoding('utf8');

    // Listen to the 'data' event, which gives us chunks of the response
    response.on('data', function (data) {
        console.log(data); // Print each chunk of data to the console
    });

    // Handle any potential errors
    response.on('error', console.error);

}).on('error', console.error); // Handle any errors from the HTTP GET request
