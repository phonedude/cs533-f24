const net = require('net');

const port = process.argv[2];

const server = net.createServer(function (socket) {
  const date = new Date();
  const year = date.getFullYear();
  const month = zeroFill(date.getMonth() + 1); // Months are zero-based
  const day = zeroFill(date.getDate());
  const hours = zeroFill(date.getHours());
  const minutes = zeroFill(date.getMinutes());

  const data = `${year}-${month}-${day} ${hours}:${minutes}\n`;
  socket.end(data);
});

server.listen(port);

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}
