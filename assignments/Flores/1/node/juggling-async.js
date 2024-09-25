const http = require('http');

const urls = process.argv.slice(2); // Get the three URLs from the command-line arguments
const results = [];
let completedRequests = 0;

// Function to perform HTTP GET and store the result in order
function httpGet(index) {
    http.get(urls[index], function (response) {
        let result = '';

        // Set encoding to 'utf8' to receive strings instead of Buffers
        response.setEncoding('utf8');

        // Collect the data
        response.on('data', function (chunk) {
            result += chunk;
        });

        // Once the response ends, store the result and check if all requests are done
        response.on('end', function () {
            results[index] = result;
            completedRequests++;

            // Once all requests are complete, print the results in order
            if (completedRequests === urls.length) {
                results.forEach(result => console.log(result));
            }
        });

        // Handle errors
        response.on('error', console.error);
    }).on('error', console.error); // Handle errors with the HTTP GET request itself
}

// Perform HTTP GET for each URL
for (let i = 0; i < urls.length; i++) {
    httpGet(i);
}
