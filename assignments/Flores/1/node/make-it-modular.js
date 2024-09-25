// make-it-modular.js

const mymodule = require('./mymodule.js');

// Get the directory and extension from the command-line arguments
const dir = process.argv[2];
const ext = process.argv[3];

// Call the function exported from mymodule.js
mymodule(dir, ext, function (err, list) {
    if (err) {
        // If there's an error, print it
        return console.error('Error:', err);
    }

    // Print each filtered file on a new line
    list.forEach(function (file) {
        console.log(file);
    });
});
