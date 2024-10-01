const net = require('net');

// Get the port from the first command-line argument
const port = process.argv[2];

// Function to format the current date and time as "YYYY-MM-DD hh:mm"
function getCurrentDateTime() {
    const now = new Date();

    // Zero-fill to 2 integers for month, day, hour, minute
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}`;
}

// Create the TCP server
const server = net.createServer((socket) => {
    // Send the current date and time, followed by a new line
    socket.end(getCurrentDateTime() + '\n');
});

// Start the server on the provided port
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
