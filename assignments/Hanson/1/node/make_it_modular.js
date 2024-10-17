// Import the module you created
const filterFilesByExtension = require('./mymodule');

// Get the directory and extension from command-line arguments
const directoryPath = process.argv[2];
const extension = process.argv[3];

// Call the module function and handle the callback
filterFilesByExtension(directoryPath, extension, (err, filteredFiles) => {
    if (err) {
        // If there's an error, print an informative message
        console.error(`Error: ${err.message}`);
        return;
    }

    // Print each filtered file name to the console
    filteredFiles.forEach(file => console.log(file));
});
