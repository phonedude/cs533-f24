# Assignment 4 Submission

## Directories

- **framable** - HTML files that attempt to iframe the assigned public sites.
- **frame-path-attack** - Files demonstrating the Path attribute vulnerability in cookies.

## Framable Sites Test:

- A script (`generate_iframe_files.js`) was used to generate HTML files for 100 assigned sites.
- A Node.js server (`frame_server.js`) served these files at `http://localhost:3001` to test if each site allowed framing.

### Results:
Some sites allowed framing, while others blocked it using headers like `X-Frame-Options` or `Content-Security-Policy`.
## Website Framing Results

This section outlines the results of testing 100 websites for their ability to be framed. Websites are categorized into those that allow framing, those that block framing using the `X-Frame-Options` header, and those that use the `Content-Security-Policy` header to block framing.
___

### Framable Websites
The following websites allowed framing:
- 20minutos_es.html
- abril_com_br.html
- adssettings_google_com.html
- alexa_com.html
- blog_google.html
- bp0_blogger_com.html
- calendar_google_com.html
- dailymail_co_uk.html
- dailymotion_com.html
- es_wikipedia_org.html
- estadao_com_br.html
- eventbrite_com.html
- ign_com.html
- liveinternet_ru.html
- marca_com.html
- plus_google_com.html
- pt_wikipedia_org.html
- rtve_es.html
- sites_google_com.html
- t_co.html

### Websites Blocking Framing Using `X-Frame-Options`
These websites block framing using the `X-Frame-Options` header:
- abc_es.html (X-Frame-Options: DENY)
- abc_net_au.html (X-Frame-Options: SAMEORIGIN)
- alibaba_com.html (X-Frame-Options: DENY)
- amazon_co_uk.html (X-Frame-Options: SAMEORIGIN)
- amazon_fr.html (X-Frame-Options: SAMEORIGIN)
- arxiv_org.html (X-Frame-Options: SAMEORIGIN)
- afternic_com.html (X-Frame-Options: SAMEORIGIN)
- bbc_com.html (X-Frame-Options: SAMEORIGIN)
- ebay_com.html (X-Frame-Options: SAMEORIGIN)
- google_co_uk.html (X-Frame-Options: SAMEORIGIN)
- google_com_br.html (X-Frame-Options: SAMEORIGIN)
- google_it.html (X-Frame-Options: SAMEORIGIN)
- google_ru.html (X-Frame-Options: SAMEORIGIN)
- shutterstock_com.html (X-Frame-Options: SAMEORIGIN https://app.contentful.com)
- microsoft_com.html (X-Frame-Options: SAMEORIGIN)
- samsung_com.html (X-Frame-Options: SAMEORIGIN)
- icann_org.html (X-Frame-Options: SAMEORIGIN)
- intel_com.html (X-Frame-Options: SAMEORIGIN)

### Websites Blocking Framing Using `Content-Security-Policy`
These websites block framing using the `Content-Security-Policy` header:
- abc_es.html (Content-Security-Policy: default-src 'self' ...)
- espn_com.html (Content-Security-Policy: frame-ancestors 'self' ...)
- fifa_com.html (Content-Security-Policy: script-src 'self' ...)
- discord_com.html (Content-Security-Policy: default-src 'self' ...)
- search_yahoo_com.html (Content-Security-Policy: frame-ancestors 'none' ...)
- t-online_de.html (Content-Security-Policy: frame-ancestors 'self' ...)
- scmp_com.html (Content-Security-Policy: frame-ancestors 'none')

### Remaining Websites
These websites either blocked framing without specifying the method clearly or didn't block framing:
- aliexpress_com.html
- cookie_stats.html
- gfycat_com.html
- googleusercontent_com.html
- jimdofree_com.html
- jstor_org.html
- reuters_com.html
- sedoparking_com.html
- ssl-images-amazon_com.html
- stanford_edu.html
- rapidshare_com.html
- netvibes_com.html
- pixabay_com.html
- shutterstock_com.html
- target_com.html

___


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

- Framable Sites Test: [Framing Public Websites: Which Sites Can Be Framed?](https://www.youtube.com/watch?v=fhX5kG7RSYU)
- Frame Path Attack: [Web Security Demonstration: Stealing Cookies from an Iframe with Frame Path Attack](https://youtu.be/XW-yS9uZIIU)


## Extra Credit - Week 5 Literary Reference

The reference on Slide 65 can be connected to the concept of "greedy algorithms" in computer science. A greedy algorithm makes a series of decisions based on what seems best at each step, without considering the overall problem. Similarly, the HTML parser is described as "greedy" because it immediately searches for and processes HTML tags as it encounters them, building the DOM tree as fast as possible without waiting for other elements like CSS or JavaScript to load.

This approach highlights the browser's method of rendering content quickly, prioritizing immediate results over deferred actions, much like a greedy algorithm.


