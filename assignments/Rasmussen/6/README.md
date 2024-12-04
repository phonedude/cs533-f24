## Assignment 6, CS 433/533 Web Security, Fall 2024

### Anton Rasmussen

Points available: 15

For this assignment, we wrote server side code for an Express server that fingerprints browsers (as per week 7's lecture).  The server write theses fingerprints out to a server-side log (`server.log`) and recognizes the client when it visits again.  For different clients, we used different browsers (Firefox, Opera, curl, Safari, Lynx, Chrome).

We used eight different HTTP request headers to form the browser fingerprint, and employed MD5 to return fingerprint hashes: MD5(`ip + userAgent + accept + acceptLanguage + acceptEncoding + connection + host + referer`).


```
├── 6
│   ├── server.js
│   ├── server.log
└── README.md
```

* The following video demonstrates `6`: https://youtu.be/vLhoEqA89Uw

