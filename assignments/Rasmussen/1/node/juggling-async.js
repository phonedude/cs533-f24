const http = require('http');

const urls = process.argv.slice(2);
let allRes = ['', '', ''];
let totalReq = 0;

urls.forEach((url, index) => {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    let allData = '';
    response.on('data', (partData) => {
      allData += partData;
    });

    response.on('end', () => {
      allRes[index] = allData;
      totalReq++;
      if (totalReq === urls.length) {
        allRes.forEach(res => console.log(res));
      }
    });
  })
});
