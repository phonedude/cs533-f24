const fs = require('fs');
const path = require('path');

// Define the module function that takes directoryPath, extension, and callback
module.exports = function (directoryPath, extension, callback) {
    // Read the directory asynchronously
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return callback(err);  // Pass the error to the callback
        }

        // Filter the files based on the given extension
        const filteredFiles = files.filter(file => path.extname(file) === '.' + extension);

        // Pass the filtered files to the callback
        callback(null, filteredFiles);
    });
};
