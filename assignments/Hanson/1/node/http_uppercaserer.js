const http = require('http');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        // Collect the data from the POST request
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Once all the data is received
        req.on('end', () => {
            // Convert the body to upper-case
            const upperCaseBody = body.toUpperCase();

            // Respond with the upper-case version of the body
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(upperCaseBody);
        });

    } else {
        // If it's not a POST request, respond with a 405 Method Not Allowed
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Only POST requests are allowed\n');
    }
});

// Start the server on the specified port
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
