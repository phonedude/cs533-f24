const fs = require('fs');

const fileContent = fs.readFileSync(process.argv[2], 'utf8');
const lines = fileContent.split('\n');

console.log(lines.length - 1);