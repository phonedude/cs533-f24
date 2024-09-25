const net = require('net');

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

function getCurrentTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = zeroFill(date.getMonth() + 1); // bc months are 0-index
  const day = zeroFill(date.getDate());
  const hours = zeroFill(date.getHours());
  const minutes = zeroFill(date.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const server = net.createServer(function (socket) {
  socket.end(getCurrentTime() + '\n');
});

server.listen(Number(process.argv[2]));