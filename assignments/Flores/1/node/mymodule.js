// mymodule.js

const fs = require('fs');
const path = require('path');

// The module exports a function that takes 3 arguments: directory, extension, callback
module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            // If there's an error, pass it to the callback
            return callback(err);
        }

        // Filter the list by extension
        const filteredList = list.filter(function (file) {
            return path.extname(file) === '.' + ext;
        });

        // Pass null as the first argument (no error) and the filtered list
        callback(null, filteredList);
    });
};
