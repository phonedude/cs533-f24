const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 4000;

app.use(cookieParser());

// Set Cookie
const setCookie = (type, name) => (request, response, next) => {
    response.cookie('favorite', `${type}:${name}`, {
        maxAge: 900000,
        httpOnly: false,
        encode: String,
    });
    next();  
};

app.use(express.static('pages'));

// Function to convert a string to title case
function toTitleCase(str) {
  return str.replace(/\b\w+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
}

// Function to recursively read files from a directory
function readFilesRecursively(dir, callback) {
  fs.readdirSync(dir).forEach((fileOrDir) => {
    const fullPath = path.join(dir, fileOrDir);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // If it's a directory, recurse into it
      readFilesRecursively(fullPath, callback);
    } else if (stat.isFile() && path.extname(fullPath) === '.html') {
      // If it's an HTML file, execute the callback
      callback(fullPath);
    }
  });
}

// Function to build routes dynamically
function buildRoutes() {
  const pagesDir = path.join(__dirname, 'pages');

  readFilesRecursively(pagesDir, (filePath) => {
    // Extract 'type' and 'name' from the file path
    const relativePath = path.relative(pagesDir, filePath);
    const pathSegments = relativePath.split(path.sep);

    if (pathSegments.length !== 2) {
      console.warn(
        `File "${filePath}" is not in the expected 'Type/Name.html' format. Skipping.`
      );
      return;
    }

    let type = pathSegments[0];
    let nameWithExt = pathSegments[1];
    let name = path.basename(nameWithExt, '.html');

    // Handle double dashes for 'type'
    type = type.replace(/--/g, '\0'); // Temporarily replace '--' with null character
    type = type.replace(/-/g, ' '); // Replace single dashes with spaces
    type = type.replace(/\0/g, '-'); // Restore '--' as '-'
    type = toTitleCase(type);

    // Handle double dashes for 'name'
    name = name.replace(/--/g, '\0');
    name = name.replace(/-/g, ' ');
    name = name.replace(/\0/g, '-');
    name = toTitleCase(name);

    // Build the route path by removing all dashes and converting to lowercase
    const routePath = '/' + nameWithExt.replace('.html', '').replace(/-/g, '').toLowerCase();

    // Build the file path correctly (directories and filenames are in lowercase)
    const typeDir = type.toLowerCase().replace(/ /g, '-').replace(/-/g, '-');
    const fileName = nameWithExt;

    // Create route dynamically
    app.get(routePath, setCookie(type, name), (req, res) => {
      res.sendFile(path.join(__dirname, 'pages', typeDir, fileName));
    });

    console.log(`Route created: ${routePath}`);
  });
}

// Build routes
buildRoutes();

// Run Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
