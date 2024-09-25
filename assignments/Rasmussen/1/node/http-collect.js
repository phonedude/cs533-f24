const http = require('http');

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  let allData = '';
  response.on('data', (partData) => {
      allData += partData;
  });

  response.on('end', () => {
    console.log(allData.length);
    console.log(allData);
  });
})