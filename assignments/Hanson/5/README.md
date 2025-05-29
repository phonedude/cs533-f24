# Assignment 5 Submission  
## Brian Hanson, Jr.

This submission documents the implementation and testing of **Cross-Origin Resource Sharing (CORS)** and **Content Security Policy (CSP)** using Node.js servers and web clients. Each section includes setup instructions, observed results, and visual demonstrations.

---

## Directory Overview

- **5.1** — Block and allow cross-origin JSON responses using CORS.
- **5.2** — Block and expose custom HTTP headers using CORS.
- **5.3** — Embed a remote site with restrictions controlled by CSP.

---

## 5.1: Cross-Origin JSON Requests with CORS

### Description
Demonstrates how JSON responses from one origin are blocked by default when requested from another, and how enabling CORS resolves this issue.

### Setup
- `Server1.js` — Hosts the `/favorites` endpoint. CORS is toggled using the `ENABLE_CORS` environment variable.
- `Server2.js` — Serves the client (`index.html`) that fetches JSON from Server 1.

### Execution Steps
```bash
# Start Server 1 with CORS disabled
export ENABLE_CORS=false
node Server1.js

# Start Server 2 (client)
node Server2.js
```
- Visit the client in the browser and observe the **blocked** cross-origin request.

```bash
# Re-start Server 1 with CORS enabled
export ENABLE_CORS=true
node Server1.js
```
- Refresh the client page and observe the **successful** response.

### Results
- **Blocked JSON**  
  ![Blocked JSON]()
- **Allowed JSON**  
  ![Allowed JSON]()

---

## 5.2: Custom HTTP Headers with CORS

### Description
Demonstrates how CORS affects visibility of custom headers sent by the server.

### Setup
- Server 1 includes custom response headers.
- Server 2 (client) reads and logs headers using JavaScript.

### Results
- **Blocked Headers**  
  ![Blocked Headers]()
- **Allowed Headers** (with `exposedHeaders` properly configured)  
  ![Allowed Headers]()

---

## 5.3: Embedding Remote Sites via CSP

### Description
Tests how the `Content-Security-Policy` header affects iframe embedding behavior.

### Setup
- `server.js` serves `embed.html`, dynamically controlling CSP to allow or block content from `https://www.wikipedia.org`.

### Results
- **Embedding Allowed**  
  ![Allowed Embed]()
- **Embedding Blocked**  
  ![Blocked Embed]()

---

## Video Demonstrations

- [5.1 - JSON Test with CORS](https://youtu.be/C6W1dUFxKlo)  
- [5.2 - Custom Headers with CORS](https://youtu.be/ejneNIRQals)  
- [5.3 - Embedding with CSP](https://youtu.be/J7gI7bAl6Sk)

---

## Assignment Conclusion

This assignment provides practical experience with web security features:
- **CORS** ensures controlled cross-origin data access and header exposure.
- **CSP** restricts embedding of external content to prevent injection attacks.

The demonstrations clearly show how browser behavior changes based on server configurations and response headers.
