# Assignment 4 Submission

## Directories

- **framable** - HTML files that attempt to iframe the assigned public sites.
- **frame-path-attack** - Files demonstrating the Path attribute vulnerability in cookies.

## Framable Sites Test:

- A script (`generate_iframe_files.js`) was used to generate HTML files for 100 assigned sites.
- A Node.js server (`frame_server.js`) served these files at `http://localhost:3001` to test if each site allowed framing.

### Results:
Some sites allowed framing, while others blocked it using headers like `X-Frame-Options` or `Content-Security-Policy`.

## Frame Path Attack Demonstration:

- Demonstrated how using the `Path` attribute for cookies is insecure.

### Setup:

- **Parent Page** (`parent.html`) contains an iframe to load `iframe.html` and attempts to steal cookies.
- **Iframe Page** (`iframe.html`) sets cookies with the `Path` attribute.
- Both files were served via a Node.js server (`frame_server.js`) at `http://localhost:3001`.

### Conclusion:
The `Path` attribute alone is insufficient to prevent unauthorized cookie access.

## Screenshots:
Here are screenshots of the (partial) completion.

## Video Links:

- Framable Sites Test: [https://youtu.be/examplelink1](https://youtu.be/examplelink1)
- Frame Path Attack: [https://youtu.be/examplelink2](https://youtu.be/examplelink2)


