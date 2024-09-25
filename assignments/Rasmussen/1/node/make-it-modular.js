const myModule = require('./mymodule');
const dir = process.argv[2];
const ext = process.argv[3];

myModule(dir, ext, (err, files) => {
  if (err) {
    process.exit(1);
  }
  files.forEach(file => console.log(file));
});