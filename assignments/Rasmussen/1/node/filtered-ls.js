const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(dir, (err, files) => {
  if (err) {
    process.exit(1);
  }
  const filtered = files.filter(file => path.extname(file) === ext);
  filtered.forEach(file => console.log(file));
});