# Assignment 4 CS 533 F24
## Brian Hanson, Jr.

This document lists directories, frame site tests with results that are categorized based on their ability to be framed. The website categories are those that allowed framing, blocked framing based on the 'X-Frame-Options' header, & finally those that use the 'Content-Security-Policy' header to block framing from occuring. Finally, I will demonstrate a frame path attack based on how the 'Path' attribute for cookies is security vulnerability that reveals how a parent page can steal cookies from an iframed page if only the 'Path' attribute is used in the 'Set-Cookie' header.

## Project Structure

- **/framable/**: Generated HTML files that iFrame assigned websites.
- **/frame-path-attack/**: Demonstrates cookie vulnerabilities via path-restricted cookies.

---

## 1. Website Framing Analysis

The goal was to test 100 public websites for iFrame vulnerabilities by hosting the HTML files locally (`http://localhost:4000`).  

The outcomes fall into three categories:

### Category 1: Websites That Allowed Framing
These sites loaded successfully inside an iframe:
- 20minutos_es.html
- 4shared_com.html
- abril_com_br.html
- adobe_com.html
- blog_google.html
- bandcamp_com.html
- bestfreecams_club.html
- booking_com.html
- domainmarket_com.html
- draft_blogger_com.html
- enable-javascript_com.html
- foxnews_com.html
- francetvinfo_fr.html
- gofundme_com.html
- howstuffworks_com.html
- it_wikipedia_org.html
- justjared_com.html
- merriam-webster_com.html
- myaccount_google_com.html
- narod_ru.html
- newyorker_com.html
- nydailynews_com.html
- offset_com.html
- picasa_google_com.html
- plos_org.html
- pt_wikipedia_org.html
- repubblica.it
- rtve_es.html
- sciencedirect_com.html
- sedoparking_com.html
- sputniknews.com
- t_co.html
- theatlatntic_com.html
- thenai_org.html
- zoom_us.html

---

### Category 2: Websites Blocking Framing Using `X-Frame-Options`
These sites explicitly refused framing with `X-Frame-Options` headers:
- amzn_to.html (DENY)
- archives.gov (SAMEORIGIN)
- abc_es.html (DENY)
- abc_net_au.html (SAMEORIGIN)
- alibaba_com.html (DENY)
- amazon_co_uk.html (SAMEORIGIN)
- amazon_fr.html (SAMEORIGIN)
- arxiv_org.html (SAMEORIGIN)
- afternic_com.html (SAMEORIGIN)
- bbc_com.html (SAMEORIGIN)
- biglobe_ne_jp.html (DENY)
- books_google_com.html (SAMEORIGIN)
- box_com.html (SAMEORIGIN)
- brandbucket_com.html (SAMEORIGIN)
- cambridge_org.html (SAMEORIGIN)
- cpanel_com.html (SAMEORIGIN)
- detik_com.html (SAMEORIGIN)
- ebay_com.html (SAMEORIGIN)
- facebook_com.html (DENY)
- gnu_org.html (SAMEORIGIN)
- gravatar_com.html (SAMEORIGIN)
- insider_com.html (SAMEORIGIN)
- jstor_org.html (DENY)
- justice_gov.html (SAMEORIGIN)
- last_fm.html (DENY)
- mediafire_com.html (SAMEORIGIN)
- myspace_com.html (SAMEORIGIN)
- goo_ne_jp.html (SAMEORIGIN)
- google_it.html (SAMEORIGIN)
- google_co_uk.html (SAMEORIGIN)
- google_it.html (SAMEORIGIN)
- shutterstock_com.html (SAMEORIGIN)
- microsoft_com.html (SAMEORIGIN)
- nicovideo_jp.html (SAMEORIGIN)
- nypost_com.html (SAMEORIGIN)
- pinterest_fr.html (SAMEORIGIN)
- radiofrance_fr.html (SAMEORIGIN)
- salesforce_com.html (SAMEORIGIN)
- samsung_com.html (SAMEORIGIN)
- sapo_pt.html (SAMEORIGIN)
- sciencedaily_com.html (SAMEORIGIN)
- sciencemag_org.html (SAMEORIGIN)
- sky_com.html (SAMEORIGIN)
- statista_com.html (DENY)
- t_me.html (SAMEORIGIN)
- target_com.html (SAMEORIGIN)
- thetimes_co_uk.html (SAMEORIGIN)
- trustpilot_com.html (DENY)
- wa_me.html (DENY)
- weather_com.html (SAMEORIGIN)
- whatsapp_com.html (DENY)
- who_int.html (SAMEORIGIN)
- www_canalblog_com.html (DENY)
- youronlinechoices_com.html (SAMEORIGIN)


---

###  Category 3: Websites Blocking Framing Using `Content-Security-Policy`
These sites blocked framing by setting restrictive `Content-Security-Policy` (CSP) headers:
- cnn_com.html (CSP: default-src 'self')
- hollywoodreporter_com.html (CSP: frame-ancestors 'none')


---

### Other Cases
Websites with unclear/unspecified framing behaviors:
- alexa_com.html
- alibaba_com.html
- amazon_co_jp.html
- amazon_com.html
- focus_de.html
- jstor_org.html
- hubspot_com.html
- huffingtonpost_com.html
- microsoft_com.html
- sedoparking_com.html
- target_com.html
- jhu_edu.html
- ouest-frane.fr
- softonic_com.html
- thesun_co_uk.html
- uol_com_br.html
- www_livejournal_com.html
- www_yahoo_com.html
- yandex_com.html

---

## 2. Frame Path Attack Demonstration

**Objective:**  
Demonstrate how setting cookies with the `Path` attribute alone is insufficient protection from exfiltration.

**Setup:**
- **iframe-path/**: A page sets a cookie with `Path=/iframe-path/`.
- **parent-page/**: This different page tries to access the iFrame's cookies.

**Server Behavior (`frame-server.js`):**
```javascript
res.setHeader('Set-Cookie', 'session_id=abc123; Path=/iframe-path/; HttpOnly');
```

**Result:**  
Despite the `Path` restriction, an iFrame hosted from another page attempted to access cookies. Access was blocked by the browser's same-origin policy, but the exercise shows the theoretical risk if browser defenses were weakened.

---

## 3. Video Evidence

- [Framable Sites Test](https://youtu.be/NAV3VPuTN-c)
- [Frame Path Attack Demonstration](https://youtu.be/ZxUaO5UoXDI)

---

## 4. Extra Credit - Literary Reference

On Slide 65, "greedy" parsing refers to the HTML parser aggressively consuming content without waiting for external resources. This behavior mirrors **greedy algorithms** in computer science where a series of decisions are made based on what short-term gain through making immediate, local optimizations without regard for the overall impact.

**Key Principle:**  
Web Browsers prioritize rendering speed by greedily building the DOM tree as content streams in which ensures users see something quickly even before the page fully loads avoiding perception of internet not being broken.