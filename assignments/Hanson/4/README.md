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
- alibaba_com.html
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
- focus_de.html
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
- thesun_co_uk.html
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
- amazon_co_jp.html (SAMEORIGIN)
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
- hubspot_com.html (DENY)
- insider_com.html (SAMEORIGIN)
- jhu_edu.html (SAMEORIGIN)
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
- yandex_com.html (DENY)


---

###  Category 3: Websites Blocking Framing Using `Content-Security-Policy`
These sites blocked framing by setting restrictive `Content-Security-Policy` (CSP) headers:
- cnn_com.html (CSP: default-src 'self')
- hollywoodreporter_com.html (CSP: frame-ancestors 'none')
- huffingtonpost_com.html (CSP: sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation; frame-ancestors 'self' *.huffpost.com *.huffingtonpost.com *.huffpost.net *.buzzfeed.com clients.opinary.com compass.pressekompass.net *.newsbreak.com *.newsbreakapp.com *.upday-content.com *.upday.com *.samsung-news.com; report-uri https://huffpost.report-uri.com/r/d/csp/enforce;)
- uol_com_br.html (CSP: frame-ancestors 'self' *.intranet *.uolinc.com;)
- www_livejournal_com.html (CSP: default-src 'self' *.livejournal.com *.livejournal.net *.dsp-rambler.ru *.google.com google.com *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru *.tiktok.com tiktok.com *.youtube.com youtube.com; script-src 'self' *.livejournal.com *.livejournal.net *.adfox.ru *.adlooxtracking.com adlooxtracking.com *.adlooxtracking.ru adlooxtracking.ru ad.mail.ru api.giphy.com bs.serving-sys.ru cdn.ampproject.org cdn.jsdelivr.net cdnjs.smi2.ru content.adriver.ru *.criteo.com *.criteo.net data.24smi.net *.doubleclick.net *.dropbox.com dsp-rambler.ru *.dsp-rambler.ru embed.bsky.app *.exelator.com *.facebook.com vk.com *.facebook.net gist.github.com googleads.g.doubleclick.net *.google-analytics.com *.googleapis.com *.google.com google.com *.google.ru *.googlesyndication.com *.googletagmanager.com googletagmanager.com *.googletagservices.com *.gstatic.com *.instagram.com js.mamydirect.com jsn.24smi.net *.lj.ru mc.yandex.com mc.yandex.ru *.newrelic.com *.nr-data.net *.ok.ru openstat.net pingback.giphy.com *.pingdom.com *.pingdom.net *.pinterest.com *.plista.com privacy-cs.mail.ru *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru rb.infox.sg r.mradx.net *.rnet.plus *.rubiconproject.com r.webturn.ru *.scorecardresearch.com sdk.canva.com *.services.livejournal.com smi2.ru ssl.p.jwpcdn.com ssp.24smi.net static.smi2cdn.ru static.smi2.net static.xx.fbcdn.net stat.media telegram.org tiktokcdn-us.com *.tiktok.com tiktok.com tns-counter.ru *.top100.ru top-fwz1.mail.ru tpc.googlesyndication.com *.ttwstatic.com twemoji.maxcdn.com *.twimg.com *.twitter.com *.videos.livejournal.com *.vk.com *.weborama.fm weborama.fm *.weborama.fr weborama.fr *.weborama.ru weborama.ru *.weborama-tech.ru weborama-tech.ru *.webturn.ru *.webvisor.org *.yahooapis.com *.yandex.ru yandex.ru yastatic.net ymetrica.com *.youtube.com youtube.com z.moatads.com 'unsafe-inline' 'unsafe-eval'; style-src http: https: data: 'unsafe-inline'; img-src blob: http: https: data:; frame-src http: https:; font-src http: https: data:; connect-src 'self' *.livejournal.com *.livejournal.net ad.adriver.ru ad.mail.ru *.ad-tech.ru api.giphy.com bs.serving-sys.ru cdn.ampproject.org *.criteo.com csi.gstatic.com data00.adlooxtracking.com dsp-rambler.ru *.dsp-rambler.ru *.eaglecdn.com export-download.canva.com *.g.doubleclick.net googleads.g.doubleclick.net *.google-analytics.com *.googleapis.com *.google.com google.com *.googletagmanager.com googletagmanager.com graph.facebook.com gstatic.com *.lj.ru lj.stat.eagleplatform.com mc.yandex.by mc.yandex.com mc.yandex.md mc.yandex.ru pingback.giphy.com *.pingdom.net privacy-cs.mail.ru *.rambler-co.ru rambler-co.ru *.rambler.ru rambler.ru rb.infox.sg *.rnet.plus *.services.livejournal.com *.ssp.rambler.ru ssp.rambler.ru static-mon.yandex.net static.xx.fbcdn.net stat.media stats.g.doubleclick.net smi2.net smi2.ru sve.online.sberbank.ru *.tiktok.com tiktok.com top-fwz1.mail.ru *.twitter.com *.webturn.ru *.webvisor.org wss://www.livejournal.com yandexmetrica.com yandexmetrica.com:29010 yandexmetrica.com:30103 *.yandex.net *.yandex.ru yandex.ru yastatic.net ymetrica1.com ymetrica.com *.youtube.com youtube.com; report-uri https://www.livejournal.com/csp_reports; report-to livejournal; media-src http: https: blob: data: storage.mds.yandex.net; frame-ancestors 'self'; worker-src 'self' blob:; object-src 'self' blob: *.livejournal.net youtube.com *.youtube.com; child-src 'self' blob:;)


---

### Other Cases
Websites with no specified headers of X-Frame-Options or CSP:
- alexa_com.html (503 Response Code)
- amazon_com.html (503 Response Code)
- ouest-frane.fr (403 Response Code)
- softonic_com.html (406 Response Code)
- www_yahoo_com.html (429 Response Code)


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
- [Frame Path Attack Demonstration](https://youtu.be/hzEZ-w1pVCE)

---

## 4. Extra Credit - Literary Reference

On Slide 65, "greedy" parsing refers to the HTML parser aggressively consuming content without waiting for external resources. This behavior mirrors **greedy algorithms** in computer science where a series of decisions are made based on what short-term gain through making immediate, local optimizations without regard for the overall impact.

**Key Principle:**  
Web Browsers prioritize rendering speed by greedily building the DOM tree as content streams in which ensures users see something quickly even before the page fully loads avoiding perception of internet not being broken.
