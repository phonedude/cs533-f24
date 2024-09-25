const fs = require('fs');
const path = require('path');

// Read the directory contents
fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        return console.error(err);
    }

    // Filter the files by the given extension
    const ext = '.' + process.argv[3]; // Add the '.' prefix to the extension

    list.forEach(function (file) {
        // Check if the file has the desired extension
        if (path.extname(file) === ext) {
            console.log(file);
        }
    });
});
