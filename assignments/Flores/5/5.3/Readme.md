# 5.3: CSP Embedding Demonstration

This directory demonstrates the use of Content Security Policy (CSP) headers to control the embedding of external content using iframes. The example tests embedding [Dailymotion](https://www.dailymotion.com) and shows how to block or allow its content based on CSP configuration.

## Files

- **`server.js`**: A Node.js server that serves the `index.html` file and sets the CSP headers to allow or block iframe embedding.


---

## Setup Instructions

1. **Install Dependencies**:
   Ensure you have Node.js installed. Then, install the required dependencies by running:

   ```bash
   npm install express

   ```


## Run the Server: Start the server by running:

2. **run the server**

```BASH

node server.js

```

3. Access the Test Page: Open your browser and navigate to: 

http://localhost:4000/embed.html

---

## CSP Configurations

### 1. Blocking All Embedding

In `server.js`, the CSP directive `frame-src 'none'` is used to block all iframe embedding.

**Observed Behavior**:
- The iframe remains blank.
- The browser console shows a CSP violation error.

**Example Error**:



---

### 2. Allowing Embedding from Dailymotion

In `server.js`, the CSP directive `frame-src https://www.dailymotion.com` is used to allow embedding only from Dailymotion.

**Observed Behavior**:
- The iframe successfully loads the Dailymotion content.
- No CSP violation errors appear in the browser console.
