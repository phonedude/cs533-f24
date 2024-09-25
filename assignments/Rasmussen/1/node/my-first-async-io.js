const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, fileContent) => {
    if (err) {
        return console.log(err)
    }
    const lines = fileContent.split('\n').length - 1;
    console.log(lines);
});