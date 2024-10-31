
## Assignment 4, CS 433/533 Web Security, Fall 2024
### Anton Rasmussen

For this assignment, we explored website framing vulnerabilities by testing the frameability of 100 popular websites and demonstrating a cookie theft attack using iframes.

The project consists of two main components:

1. A website framing test that checks whether popular websites can be embedded in iframes, documenting the reasons why some sites cannot be framed (e.g. X-Frame-Options headers, Content-Security-Policy).

2. A demonstration of a cookie theft vulnerability using iframes, showing how cookies scoped only with the Path attribute can be accessed by malicious pages.

The project includes:
- A main index page with links to both demonstrations
- Individual HTML pages for each tested website showing whether it can be framed
- An attacker page that attempts to steal cookies from a vulnerable page
- A vulnerable page that sets cookies with only path-based protection

After completing this project we have the following directory structure:

```
.
├── README.md
├── data
│   ├── ARASM002@ODU.EDU
│   └── ARASM002_test
├── frame-path-attack
│   ├── attacker-page
│   │   └── attacker.html
│   └── vulnerable-page
│       └── vulnerable.html
├── frameable
│   ├── 4shared.com.html
│   ├── abcnews.go.com.html
│   ├── alibaba.com.html
│   ├── aliexpress.com.html
│   ├── aol.com.html
│   ├── apache.org.html
│   ├── apple.com.html
│   ├── arxiv.org.html
│   ├── biblegateway.com.html
│   ├── biglobe.ne.jp.html
│   ├── bloomberg.com.html
│   ├── booking.com.html
│   ├── britannica.com.html
│   ├── buzzfeed.com.html
│   ├── cambridge.org.html
│   ├── cnil.fr.html
│   ├── cnn.com.html
│   ├── cointernet.com.co.html
│   ├── com.com.html
│   ├── cpanel.net.html
│   ├── discord.com.html
│   ├── disqus.com.html
│   ├── doi.org.html
│   ├── drive.google.com.html
│   ├── dropbox.com.html
│   ├── ea.com.html
│   ├── elmundo.es.html
│   ├── espn.com.html
│   ├── feedburner.com.html
│   ├── forms.gle.html
│   ├── g.co.html
│   ├── get.google.com.html
│   ├── gfycat.com.html
│   ├── globo.com.html
│   ├── godaddy.com.html
│   ├── gofundme.com.html
│   ├── goo.ne.jp.html
│   ├── goodreads.com.html
│   ├── google.ru.html
│   ├── gravatar.com.html
│   ├── gsmarena.com.html
│   ├── guardian.co.uk.html
│   ├── hatena.ne.jp.html
│   ├── hindustantimes.com.html
│   ├── hp.com.html
│   ├── ign.com.html
│   ├── ikea.com.html
│   ├── imageshack.us.html
│   ├── independent.co.uk.html
│   ├── jhu.edu.html
│   ├── jstor.org.html
│   ├── justgiving.com.html
│   ├── latimes.com.html
│   ├── liberation.fr.html
│   ├── linkedin.com.html
│   ├── mailchimp.com.html
│   ├── marca.com.html
│   ├── naver.com.html
│   ├── news.com.au.html
│   ├── npr.org.html
│   ├── nytimes.com.html
│   ├── offset.com.html
│   ├── oup.com.html
│   ├── outlook.com.html
│   ├── ovhcloud.com.html
│   ├── people.com.html
│   ├── php.net.html
│   ├── pinterest.fr.html
│   ├── pl.wikipedia.org.html
│   ├── play.google.com.html
│   ├── playstation.com.html
│   ├── plos.org.html
│   ├── prezi.com.html
│   ├── pt.wikipedia.org.html
│   ├── reverbnation.com.html
│   ├── sakura.ne.jp.html
│   ├── samsung.com.html
│   ├── search.yahoo.com.html
│   ├── sina.com.cn.html
│   ├── spiegel.de.html
│   ├── support.google.com.html
│   ├── thefreedictionary.com.html
│   ├── theverge.com.html
│   ├── usgs.gov.html
│   ├── vistaprint.com.html
│   ├── walmart.com.html
│   ├── webmd.com.html
│   ├── webnode.page.html
│   ├── whitehouse.gov.html
│   ├── wikimedia.org.html
│   ├── wordpress.org.html
│   ├── wp.com.html
│   ├── www.gov.uk.html
│   ├── www.over-blog.com.html
│   ├── www.wix.com.html
│   ├── www.yahoo.com.html
│   ├── yadi.sk.html
│   ├── ytimg.com.html
│   ├── zendesk.com.html
│   └── zippyshare.com.html
├── index.html
├── package-lock.json
├── package.json
├── server.js
└── templates
    ├── frameable_template.html
    └── index_template.html
```

Note: I ran tree -I 'node_modules' to ignore the verbose node_modules directory; notably this directory is hidden (i.e. configured to be ignored by git).


### The videos demonstrating each of these tasks can be found here:

- [Which public sites are framable?](https://youtu.be/RbsX8UF_SOQ)
- [Frame Path attack](https://youtu.be/E4ytD1ksskY)


# Website Rendering Results

## Frameable Websites (30)
- http://4shared.com
- http://abcnews.go.com
- http://biblegateway.com
- http://bloomberg.com
- http://booking.com
- http://com.com
- http://disqus.com
- http://doi.org
- http://elmundo.es
- http://g.co
- http://globo.com
- http://gofundme.com
- http://ign.com
- http://liberation.fr
- http://marca.com
- http://news.com.au
- http://npr.org
- http://offset.com
- http://pl.wikipedia.org
- http://plos.org
- http://pt.wikipedia.org
- http://sina.com.cn
- http://thefreedictionary.com
- http://usgs.gov
- http://vistaprint.com
- http://webmd.com
- http://wikimedia.org
- http://www.wix.com
- http://yadi.sk
- http://zippyshare.com

## Not Frameable Websites (70)
- [http://alibaba.com](frameable/alibaba.com.html) (Reason: X-Frame-Options)
- [http://aliexpress.com](frameable/aliexpress.com.html) (Reason: Error)
- [http://aol.com](frameable/aol.com.html) (Reason: X-Frame-Options)
- [http://apache.org](frameable/apache.org.html) (Reason: Content-Security-Policy)
- [http://apple.com](frameable/apple.com.html) (Reason: X-Frame-Options)
- [http://arxiv.org](frameable/arxiv.org.html) (Reason: X-Frame-Options)
- [http://biglobe.ne.jp](frameable/biglobe.ne.jp.html) (Reason: X-Frame-Options)
- [http://britannica.com](frameable/britannica.com.html) (Reason: Too many redirects)
- [http://buzzfeed.com](frameable/buzzfeed.com.html) (Reason: X-Frame-Options)
- [http://cambridge.org](frameable/cambridge.org.html) (Reason: Error)
- [http://cnil.fr](frameable/cnil.fr.html) (Reason: Content-Security-Policy)
- [http://cnn.com](frameable/cnn.com.html) (Reason: Content-Security-Policy)
- [http://cointernet.com.co](frameable/cointernet.com.co.html) (Reason: X-Frame-Options)
- [http://cpanel.net](frameable/cpanel.net.html) (Reason: X-Frame-Options)
- [http://discord.com](frameable/discord.com.html) (Reason: X-Frame-Options)
- [http://drive.google.com](frameable/drive.google.com.html) (Reason: X-Frame-Options)
- [http://dropbox.com](frameable/dropbox.com.html) (Reason: X-Frame-Options)
- [http://ea.com](frameable/ea.com.html) (Reason: X-Frame-Options)
- [http://espn.com](frameable/espn.com.html) (Reason: Content-Security-Policy)
- [http://feedburner.com](frameable/feedburner.com.html) (Reason: X-Frame-Options)
- [http://forms.gle](frameable/forms.gle.html) (Reason: Error)
- [http://get.google.com](frameable/get.google.com.html) (Reason: X-Frame-Options)
- [http://gfycat.com](frameable/gfycat.com.html) (Reason: Error)
- [http://godaddy.com](frameable/godaddy.com.html) (Reason: Error)
- [http://goo.ne.jp](frameable/goo.ne.jp.html) (Reason: X-Frame-Options)
- [http://goodreads.com](frameable/goodreads.com.html) (Reason: X-Frame-Options)
- [http://google.ru](frameable/google.ru.html) (Reason: X-Frame-Options)
- [http://gravatar.com](frameable/gravatar.com.html) (Reason: X-Frame-Options)
- [http://gsmarena.com](frameable/gsmarena.com.html) (Reason: Error)
- [http://guardian.co.uk](frameable/guardian.co.uk.html) (Reason: X-Frame-Options)
- [http://hatena.ne.jp](frameable/hatena.ne.jp.html) (Reason: X-Frame-Options)
- [http://hindustantimes.com](frameable/hindustantimes.com.html) (Reason: X-Frame-Options)
- [http://hp.com](frameable/hp.com.html) (Reason: X-Frame-Options)
- [http://ikea.com](frameable/ikea.com.html) (Reason: X-Frame-Options)
- [http://imageshack.us](frameable/imageshack.us.html) (Reason: X-Frame-Options)
- [http://independent.co.uk](frameable/independent.co.uk.html) (Reason: X-Frame-Options)
- [http://jhu.edu](frameable/jhu.edu.html) (Reason: X-Frame-Options)
- [http://jstor.org](frameable/jstor.org.html) (Reason: X-Frame-Options)
- [http://justgiving.com](frameable/justgiving.com.html) (Reason: X-Frame-Options)
- [http://latimes.com](frameable/latimes.com.html) (Reason: X-Frame-Options)
- [http://linkedin.com](frameable/linkedin.com.html) (Reason: X-Frame-Options)
- [http://mailchimp.com](frameable/mailchimp.com.html) (Reason: X-Frame-Options)
- [http://naver.com](frameable/naver.com.html) (Reason: X-Frame-Options)
- [http://nytimes.com](frameable/nytimes.com.html) (Reason: X-Frame-Options)
- [http://oup.com](frameable/oup.com.html) (Reason: Error)
- [http://outlook.com](frameable/outlook.com.html) (Reason: X-Frame-Options)
- [http://ovhcloud.com](frameable/ovhcloud.com.html) (Reason: X-Frame-Options)
- [http://people.com](frameable/people.com.html) (Reason: Content-Security-Policy)
- [http://php.net](frameable/php.net.html) (Reason: X-Frame-Options)
- [http://pinterest.fr](frameable/pinterest.fr.html) (Reason: X-Frame-Options)
- [http://play.google.com](frameable/play.google.com.html) (Reason: X-Frame-Options)
- [http://playstation.com](frameable/playstation.com.html) (Reason: X-Frame-Options)
- [http://prezi.com](frameable/prezi.com.html) (Reason: X-Frame-Options)
- [http://reverbnation.com](frameable/reverbnation.com.html) (Reason: X-Frame-Options)
- [http://sakura.ne.jp](frameable/sakura.ne.jp.html) (Reason: X-Frame-Options)
- [http://samsung.com](frameable/samsung.com.html) (Reason: X-Frame-Options)
- [http://search.yahoo.com](frameable/search.yahoo.com.html) (Reason: X-Frame-Options)
- [http://spiegel.de](frameable/spiegel.de.html) (Reason: Content-Security-Policy)
- [http://support.google.com](frameable/support.google.com.html) (Reason: X-Frame-Options)
- [http://theverge.com](frameable/theverge.com.html) (Reason: Content-Security-Policy)
- [http://walmart.com](frameable/walmart.com.html) (Reason: X-Frame-Options)
- [http://webnode.page](frameable/webnode.page.html) (Reason: X-Frame-Options)
- [http://whitehouse.gov](frameable/whitehouse.gov.html) (Reason: X-Frame-Options)
- [http://wordpress.org](frameable/wordpress.org.html) (Reason: X-Frame-Options)
- [http://wp.com](frameable/wp.com.html) (Reason: X-Frame-Options)
- [http://www.gov.uk](frameable/www.gov.uk.html) (Reason: X-Frame-Options)
- [http://www.over-blog.com](frameable/www.over-blog.com.html) (Reason: X-Frame-Options)
- [http://www.yahoo.com](frameable/www.yahoo.com.html) (Reason: X-Frame-Options)
- [http://ytimg.com](frameable/ytimg.com.html) (Reason: Error)
- [http://zendesk.com](frameable/zendesk.com.html) (Reason: Content-Security-Policy)
    