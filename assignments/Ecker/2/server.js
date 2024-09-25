const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 4000;

/* 
List of acronyms to be fully capitalized
  There does not appear to be a good option to reliably capitalize abbreviations and acronyms
  from the NPM
  
  I tried both title-case and ap-style-title-case packages and neither correctly capitalized "TV"
  This is my solution for now - using a list of common abbreviations and checking against it. I would
  like a more robust solution but for this project this will suffice.

  - Jim
*/
const ACRONYMS = new Set([
  'TV', 'USA', 'UK', 'NASA', 'FBI', 'CIA', 'HTML', 'CSS', 'JSON', 'ID', 'CPU', 'RAM',
  'API', 'HTTP', 'HTTPS', 'SQL', 'XML', 'WWW', 'URL', 'URI', 'TCP', 'UDP', 'IP',
  'DNS', 'GUI', 'SDK', 'JPEG', 'PNG', 'GIF', 'PDF', 'UN', 'EU', 'GPS', 'AI', 'VR',
  'AR', 'IOT', 'SMTP', 'FTP', 'SSH', 'REST', 'SOAP', 'JWT', 'USB', 'GPU', 'ATM',
  'LED', 'LCD', 'CD', 'DVD', 'HD', 'SSD', 'BIOS', 'OS', 'PC', 'IT', 'HR', 'CEO',
  'CFO', 'COO', 'CTO', 'VPN', 'LAN', 'WAN', 'PIN', 'DOB', 'ASAP', 'ETA', 'FYI',
  'DIY', 'BRB', 'LOL', 'OMG', 'BTW', 'IDK', 'IMHO', 'IRL', 'JK', 'N/A', 'R&D'
]);

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
app.use(express.static('favicons'));

// Function to convert a string to title case with acronym handling
function toTitleCase(str) {
  return str.replace(/\b\w+\b/g, function (word) {
    if (ACRONYMS.has(word.toUpperCase())) {
      return word.toUpperCase();
    } else {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }
  });
}

// Function to handle double dashes and convert to title case
function handleDoubleDashes(str) {
  // Temporarily replace '--' with a null character
  str = str.replace(/--/g, '\0');
  // Replace single dashes with spaces
  str = str.replace(/-/g, ' ');
  // Restore '--' (null character) back to '-'
  str = str.replace(/\0/g, '-');
  // Convert to title case
  return toTitleCase(str);
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

    // Handle double dashes for 'type' and 'name'
    type = toTitleCase(handleDoubleDashes(type));
    name = toTitleCase(handleDoubleDashes(name));

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

