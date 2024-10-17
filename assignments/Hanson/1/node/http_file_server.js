const http = require('http');
const fs = require('fs');
const path = require('path');

// Get the port and file path from the command-line arguments
const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
    // Set the response header with a 200 status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Create a readable stream from the file and pipe it to the response
    const readStream = fs.createReadStream(filePath);

    // Handle errors while reading the file
    readStream.on('error', (err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Error: ${err.message}`);
    });

    // Pipe the file stream to the HTTP response
    readStream.pipe(res);
});

// Start the server on the specified port
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
