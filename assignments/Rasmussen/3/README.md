## Assignment 3, CS 433/533 Web Security, Fall 2024 
### Anton Rasmussen

For this assignment, we created a script to analyze 100 of the Mozilla top 500 web sites.

This script (`cookie_summary.py`) reads a list of URLs from an input file (`ARASM002@ODU.EDU`), 
fetches each URL, extracts cookies along with their attributes, compiles statistics, and
generates a Markdown report that includes HTTP response details.

```
.
|__ README.md -- the markdown file that you are reading; this is this assignment's final report
|__ cookie_summary.py -- a Python script that reads a list of URLs and helps us produce the final report
|__ output.txt -- the cookie_summary.py script run log (Note that there were two ERRORs)
|__ output_2.txt -- the cookie_summary.py script run log for getting response_files_2
|__ response_files -- directory containing detailed HTTP responses for each site
|__ response_files_2 -- the directory containing raw HTTP response headers for each site
```

## Extra Credit

- The title of slide 48 in week 4 is a literary reference. Briefly describe this literary reference, both the origin and the meaning in the slides.

I believe the reference in question is "Turtles All The Way Down." From my understanding this comes from a conversation with a teacher 
and a student where the student asks about the Earth and the teacher says the Earth rests on the back of a turtle. 
Then the student asks, "Well, what does the turtle rest on?" and the teacher says "It's turtles all the way down." 
Often this is used when people ask about philosophical concepts like "if God made everything, who made God?" It's this idea that 
at a certain point we have to admit that the problem results in saying something like "God made God," which is infitely recursive. 

Similarly, in the example cited on the slide, if only top-level windows are checked for vulnerabilities then frames can hold malicious code; but, 
if only the first frame within a window is checked then frames within frames can hold vulnerabilites, etc. etc. 

Another way of looking at it is to say that we must be vigilant at every level, all the way down!


## Summary Statistics

| Statistic                  | Value          |
|----------------------------|----------------|
| Total Sites Analyzed       | 100 |
| Total Cookies Collected    | 0 |
| HttpOnly Cookies           | 0 |
| Secure Cookies             | 0 |
| SameSite Cookies           | 0 |
| SameSite Strict            | 0 |
| SameSite Lax               | 0 |
| SameSite None              | 0 |
| Cookies with Path          | 0 |
| Cookies with Non-Root Path | 0 |
| Min Cookies Per Site       | 0 |
| Max Cookies Per Site       | 0 |
| Mean Cookies Per Site      | 0.00 |
| Median Cookies Per Site    | 0.00 |

## Detailed Site Information

| URL | Status Code | Number of Cookies | Cookie Attributes | Final URL |
|-----|-------------|-------------------|-------------------|-----------|
| http://4shared.com | 200 | 0 |  | https://www.4shared.com |
| http://abcnews.go.com | 200 | 0 |  | https://abcnews.go.com/ |
| http://alibaba.com | 200 | 0 |  | https://www.alibaba.com/ |
| http://aliexpress.com | 200 | 0 |  | https://www.aliexpress.us/?gatewayAdapt=glo2usa&_randl_shipto=US |
| http://aol.com | 200 | 0 |  | https://www.aol.com/ |
| http://apache.org | 200 | 0 |  | https://apache.org/ |
| http://apple.com | 200 | 0 |  | https://www.apple.com/ |
| http://arxiv.org | 200 | 0 |  | http://arxiv.org/ |
| http://biblegateway.com | 200 | 0 |  | https://www.biblegateway.com/ |
| http://biglobe.ne.jp | 200 | 0 |  | http://biglobe.ne.jp/ |
| http://bloomberg.com | 200 | 0 |  | https://www.bloomberg.com/tosv2.html?vid=&uuid=cf1d70d9-98a8-11ef-83b4-6f76db9928ec&url=Lw== |
| http://booking.com | 200 | 0 |  | https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaLICiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuALLx5W5BsACAdICJDkxYTc2NDFiLTZmM2QtNDE2NC1iOWE3LWZkZGU5ZGQ3YjliM9gCBeACAQ&sid=f52c6fe86654e2617bb23a1bfd3635ae&keep_landing=1&sb_price_type=total& |
| http://britannica.com | 200 | 0 |  | https://www.britannica.com:443/ |
| http://buzzfeed.com | 200 | 0 |  | https://www.buzzfeed.com/ |
| http://cambridge.org | 403 | 0 |  | https://www.cambridge.org:443/ |
| http://cnil.fr | 200 | 0 |  | https://www.cnil.fr/fr |
| http://cnn.com | 200 | 0 |  | https://www.cnn.com/ |
| http://cointernet.com.co | 200 | 0 |  | https://www.cointernet.com.co/ |
| http://com.com | 200 | 0 |  | http://com.com/ |
| http://cpanel.net | 200 | 0 |  | https://cpanel.net/ |
| http://discord.com | 200 | 0 |  | https://discord.com/ |
| http://disqus.com | 200 | 0 |  | https://disqus.com/ |
| http://doi.org | 200 | 0 |  | https://www.doi.org/ |
| http://drive.google.com | 200 | 0 |  | https://workspace.google.com/intl/en-US/products/drive/ |
| http://dropbox.com | 200 | 0 |  | https://www.dropbox.com/ |
| http://ea.com | 200 | 0 |  | https://www.ea.com/ |
| http://elmundo.es | 200 | 0 |  | https://www.elmundo.es/ |
| http://espn.com | 200 | 0 |  | https://www.espn.com/ |
| http://feedburner.com | 200 | 0 |  | http://feedburner.google.com/ |
| http://forms.gle | 400 | 0 |  | https://forms.gle/ |
| http://g.co | 200 | 0 |  | https://g.co/ |
| http://get.google.com | 200 | 0 |  | https://www.google.com/ |
| http://gfycat.com | None | 0 |  | N/A |
| http://globo.com | 200 | 0 |  | https://www.globo.com/ |
| http://godaddy.com | 403 | 0 |  | https://www.godaddy.com/ |
| http://gofundme.com | 200 | 0 |  | https://www.gofundme.com/ |
| http://goo.ne.jp | 200 | 0 |  | https://www.goo.ne.jp |
| http://goodreads.com | 200 | 0 |  | https://www.goodreads.com/ |
| http://google.ru | 200 | 0 |  | http://www.google.ru/ |
| http://gravatar.com | 200 | 0 |  | https://gravatar.com/ |
| http://gsmarena.com | 429 | 0 |  | https://www.gsmarena.com/ |
| http://guardian.co.uk | 200 | 0 |  | https://www.theguardian.com/us |
| http://hatena.ne.jp | 200 | 0 |  | https://www.hatena.ne.jp:443/ |
| http://hindustantimes.com | 200 | 0 |  | https://www.hindustantimes.com/ |
| http://hp.com | 503 | 0 |  | https://www.hp.com/ |
| http://ign.com | 200 | 0 |  | https://www.ign.com/ |
| http://ikea.com | 200 | 0 |  | https://www.ikea.com/ |
| http://imageshack.us | 204 | 0 |  | http://imageshack.us/ |
| http://independent.co.uk | 200 | 0 |  | https://www.independent.co.uk/us |
| http://jhu.edu | 200 | 0 |  | https://www.jhu.edu/ |
| http://jstor.org | 200 | 0 |  | http://www.jstor.org/ |
| http://justgiving.com | 200 | 0 |  | https://justgiving.com/ |
| http://latimes.com | 200 | 0 |  | https://www.latimes.com:443/ |
| http://liberation.fr | 200 | 0 |  | https://www.liberation.fr/ |
| http://linkedin.com | 200 | 0 |  | https://www.linkedin.com/ |
| http://mailchimp.com | 200 | 0 |  | https://mailchimp.com/ |
| http://marca.com | 200 | 0 |  | https://www.marca.com/ |
| http://naver.com | 200 | 0 |  | https://www.naver.com/ |
| http://news.com.au | 403 | 0 |  | http://www.news.com.au/ |
| http://npr.org | 200 | 0 |  | https://www.npr.org/ |
| http://nytimes.com | 200 | 0 |  | https://www.nytimes.com/ |
| http://offset.com | 200 | 0 |  | https://www.offset.com:443/ |
| http://oup.com | 202 | 0 |  | http://global.oup.com |
| http://outlook.com | 440 | 0 |  | https://outlook.live.com/owa/ |
| http://ovhcloud.com | 200 | 0 |  | https://us.ovhcloud.com/ |
| http://people.com | 200 | 0 |  | https://people.com/ |
| http://php.net | 200 | 0 |  | https://www.php.net/ |
| http://pinterest.fr | 200 | 0 |  | https://fr.pinterest.com/ |
| http://pl.wikipedia.org | 200 | 0 |  | https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna |
| http://play.google.com | 200 | 0 |  | https://play.google.com/store/games?device=windows |
| http://playstation.com | 200 | 0 |  | https://www.playstation.com/en-us/ |
| http://plos.org | 200 | 0 |  | https://plos.org/ |
| http://prezi.com | 406 | 0 |  | https://prezi.com/ |
| http://pt.wikipedia.org | 200 | 0 |  | https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal |
| http://reverbnation.com | 200 | 0 |  | https://www.reverbnation.com/ |
| http://sakura.ne.jp | 200 | 0 |  | https://rs.sakura.ad.jp/ |
| http://samsung.com | 403 | 0 |  | https://www.samsung.com/ |
| http://search.yahoo.com | 200 | 0 |  | https://search.yahoo.com/ |
| http://sina.com.cn | 200 | 0 |  | https://www.sina.com.cn/ |
| http://spiegel.de | 200 | 0 |  | https://www.spiegel.de/ |
| http://support.google.com | 404 | 0 |  | https://support.google.com/ |
| http://thefreedictionary.com | 200 | 0 |  | https://www.thefreedictionary.com |
| http://theverge.com | 200 | 0 |  | https://www.theverge.com/ |
| http://usgs.gov | 200 | 0 |  | https://www.usgs.gov/ |
| http://vistaprint.com | 200 | 0 |  | https://www.vistaprint.com/ |
| http://walmart.com | 200 | 0 |  | https://www.walmart.com/ |
| http://webmd.com | 200 | 0 |  | https://www.webmd.com/ |
| http://webnode.page | 200 | 0 |  | https://www.webnode.com/ |
| http://whitehouse.gov | 200 | 0 |  | https://www.whitehouse.gov/ |
| http://wikimedia.org | 200 | 0 |  | https://www.wikimedia.org/ |
| http://wordpress.org | 200 | 0 |  | https://wordpress.org/ |
| http://wp.com | 200 | 0 |  | https://wordpress.com/ |
| http://www.gov.uk | 200 | 0 |  | https://www.gov.uk/ |
| http://www.over-blog.com | 200 | 0 |  | http://www.over-blog.com/ |
| http://www.wix.com | 200 | 0 |  | https://www.wix.com/ |
| http://www.yahoo.com | 200 | 0 |  | https://www.yahoo.com/ |
| http://yadi.sk | 200 | 0 |  | https://360.yandex.com/disk/ |
| http://ytimg.com | None | 0 |  | N/A |
| http://zendesk.com | 200 | 0 |  | https://www.zendesk.com/ |
| http://zippyshare.com | 200 | 0 |  | http://zippyshare.com/ |


## HTTP Response Details

Response details for each site have been saved to individual files in the 'response_files' directory.
