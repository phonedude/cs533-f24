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
| Total Cookies Collected    | 155 |
| HttpOnly Cookies           | 40 |
| Secure Cookies             | 75 |
| SameSite Cookies           | 57 |
| SameSite Strict            | 3 |
| SameSite Lax               | 15 |
| SameSite None              | 39 |
| Cookies with Path          | 155 |
| Cookies with Non-Root Path | 0 |
| Min Cookies Per Site       | 0 |
| Max Cookies Per Site       | 14 |
| Mean Cookies Per Site      | 1.55 |
| Median Cookies Per Site    | 0.00 |

## Detailed Site Information

| URL | Status Code | Number of Cookies | Cookie Attributes | Final URL |
|-----|-------------|-------------------|-------------------|-----------|
| http://4shared.com | 200 | 1 | day1host:  | https://www.4shared.com |
| http://abcnews.go.com | 200 | 2 | region: <br>_dcf:  | https://abcnews.go.com/ |
| http://alibaba.com | 200 | 3 | JSESSIONID: HttpOnly<br>cna: Secure, SameSite=None<br>ug_se_c: Secure, SameSite=None | https://www.alibaba.com/ |
| http://aliexpress.com | 200 | 5 | ali_apache_id: <br>intl_common_forever: HttpOnly<br>intl_locale: <br>xman_us_f: Secure, SameSite=None<br>aep_usuc_f: Secure, SameSite=None | https://www.aliexpress.us/?gatewayAdapt=glo2usa&_randl_shipto=US |
| http://aol.com | 200 | 0 | N/A | https://www.aol.com/ |
| http://apache.org | 200 | 0 | N/A | https://apache.org/ |
| http://apple.com | 200 | 1 | geo:  | https://www.apple.com/ |
| http://arxiv.org | 200 | 0 | N/A | http://arxiv.org/ |
| http://biblegateway.com | 200 | 0 | N/A | https://www.biblegateway.com/ |
| http://biglobe.ne.jp | 200 | 0 | N/A | http://biglobe.ne.jp/ |
| http://bloomberg.com | 200 | 0 | N/A | https://www.bloomberg.com/tosv2.html?vid=&uuid=6b4941aa-8d19-11ef-8e35-ffa5f7376ebb&url=Lw== |
| http://booking.com | 200 | 4 | _implmdnbl: HttpOnly<br>px_init: HttpOnly, Secure, SameSite=Strict<br>bkng: HttpOnly, Secure, SameSite=None<br>pcm_personalization_disabled: HttpOnly, Secure | https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaLICiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuALD_ce4BsACAdICJGRmYmYzZmVlLWFlM2YtNGFjZC1iMWYwLTVhYTRlODIzODk1MtgCBeACAQ&sid=fd68c14aab00dcbb84f2320be581ef13&keep_landing=1&sb_price_type=total& |
| http://britannica.com | 200 | 6 | bcomID: <br>SessionAuth: <br>subreturn: <br>webstats: <br>__mendel: <br>__cf_bm: HttpOnly, Secure, SameSite=None | https://www.britannica.com:443/ |
| http://buzzfeed.com | 200 | 2 | next-i18next: <br>dsl25_frhf:  | https://www.buzzfeed.com/ |
| http://cambridge.org | 200 | 0 | N/A | https://www.cambridge.org:443/ |
| http://cnil.fr | 200 | 0 | N/A | https://www.cnil.fr/fr |
| http://cnn.com | 200 | 6 | SecGpc: Secure, SameSite=None<br>countryCode: Secure, SameSite=None<br>stateCode: Secure, SameSite=None<br>geoData: Secure, SameSite=None<br>FastAB: SameSite=Lax<br>wbdFch: Secure, SameSite=None | https://www.cnn.com/ |
| http://cointernet.com.co | 200 | 0 | N/A | https://www.cointernet.com.co/ |
| http://com.com | 200 | 1 | XYZSRV:  | http://com.com/ |
| http://cpanel.net | 200 | 0 | N/A | https://cpanel.net/ |
| http://discord.com | 200 | 2 | __dcfduid: HttpOnly, Secure, SameSite=Lax<br>__sdcfduid: HttpOnly, Secure, SameSite=Lax | https://discord.com/ |
| http://disqus.com | 200 | 0 | N/A | https://disqus.com/ |
| http://doi.org | 200 | 0 | N/A | https://www.doi.org/ |
| http://drive.google.com | 200 | 0 | N/A | https://workspace.google.com/intl/en-US/products/drive/ |
| http://dropbox.com | 200 | 5 | gvc: HttpOnly, Secure, SameSite=None<br>t: HttpOnly, Secure, SameSite=None<br>__Host-js_csrf: Secure, SameSite=None<br>__Host-ss: HttpOnly, Secure, SameSite=Strict<br>locale:  | https://www.dropbox.com/ |
| http://ea.com | 200 | 3 | EDGESCAPE_COUNTRY: <br>EDGESCAPE_REGION: <br>EDGESCAPE_TIMEZONE:  | https://www.ea.com/ |
| http://elmundo.es | 200 | 0 | N/A | https://www.elmundo.es/ |
| http://espn.com | 200 | 8 | edition-view: <br>country: <br>connectionspeed: <br>edition: <br>region: <br>_dcf: <br>SWID: <br>userab_1:  | https://www.espn.com/ |
| http://feedburner.com | 200 | 0 | N/A | http://feedburner.google.com/ |
| http://forms.gle | 400 | 0 | N/A | https://forms.gle/ |
| http://g.co | 200 | 0 | N/A | https://g.co/ |
| http://get.google.com | 200 | 2 | AEC: HttpOnly, Secure, SameSite=lax<br>NID: HttpOnly, Secure, SameSite=none | https://www.google.com/ |
| http://gfycat.com | None | 0 | N/A | None |
| http://globo.com | 200 | 0 | N/A | https://www.globo.com/ |
| http://godaddy.com | 403 | 3 | market: <br>currency: <br>akaas_godaddy-com-wildcard: Secure, SameSite=None | https://www.godaddy.com/ |
| http://gofundme.com | 200 | 1 | visitor:  | https://www.gofundme.com/ |
| http://goo.ne.jp | 200 | 10 | XSRF-TOKEN: Secure<br>top_session: HttpOnly, Secure<br>gootop: Secure<br>gootopstay: Secure<br>mental: HttpOnly, Secure<br>gooproperty: Secure<br>searchstate: HttpOnly, Secure<br>TS01ea13e3: <br>TS011bfe84: <br>TS011667c7:  | https://www.goo.ne.jp |
| http://goodreads.com | 200 | 3 | ccsid: <br>locale: <br>_session_id2: HttpOnly | https://www.goodreads.com/ |
| http://google.ru | 200 | 1 | NID: HttpOnly, Secure, SameSite=none | https://www.google.ru/?gws_rd=ssl |
| http://gravatar.com | 200 | 0 | N/A | https://gravatar.com/ |
| http://gsmarena.com | 200 | 0 | N/A | https://www.gsmarena.com/ |
| http://guardian.co.uk | 200 | 2 | GU_mvt_id: Secure<br>GU_geo_country: Secure | https://www.theguardian.com/us |
| http://hatena.ne.jp | 200 | 1 | b:  | https://www.hatena.ne.jp:443/ |
| http://hindustantimes.com | 200 | 2 | ht-location: <br>Meta-Geo:  | https://www.hindustantimes.com/ |
| http://hp.com | 200 | 1 | aka_client_code:  | https://www.hp.com/us-en/home.html |
| http://ign.com | 200 | 1 | geoCC:  | https://www.ign.com/ |
| http://ikea.com | 200 | 2 | _abck: Secure<br>bm_sz:  | https://www.ikea.com/ |
| http://imageshack.us | 200 | 0 | N/A | https://imageshack.com/ |
| http://independent.co.uk | 200 | 14 | gdpr: <br>subscriber_origin: <br>_pc_subscriber_origin: <br>feat__support_now_donate_copy: HttpOnly, Secure<br>feat__pubx_integration: HttpOnly, Secure<br>esi-uuid: HttpOnly, Secure<br>esi-permutive-id: Secure<br>gdpr: <br>subscriber_origin: <br>_pc_subscriber_origin: <br>feat__support_now_donate_copy: HttpOnly, Secure<br>feat__pubx_integration: HttpOnly, Secure<br>esi-uuid: HttpOnly, Secure<br>esi-permutive-id: Secure | https://www.independent.co.uk/us |
| http://jhu.edu | 200 | 0 | N/A | https://www.jhu.edu/ |
| http://jstor.org | 200 | 6 | AccessSession: Secure, SameSite=Lax<br>AccessSessionSignature: Secure, SameSite=Lax<br>AccessSessionTimedSignature: Secure, SameSite=Lax<br>UUID: Secure, SameSite=None<br>csrftoken: Secure, SameSite=Lax<br>ReferringRequestId: Secure, SameSite=Lax | https://www.jstor.org/ |
| http://justgiving.com | 200 | 0 | N/A | https://justgiving.com/ |
| http://latimes.com | 200 | 0 | N/A | https://www.latimes.com:443/ |
| http://liberation.fr | 200 | 0 | N/A | https://www.liberation.fr/ |
| http://linkedin.com | 429 | 0 | N/A | https://www.linkedin.com/ |
| http://mailchimp.com | 200 | 1 | ak_bmsc: Secure, SameSite=None | https://mailchimp.com/ |
| http://marca.com | 200 | 0 | N/A | https://www.marca.com/ |
| http://naver.com | 200 | 0 | N/A | https://www.naver.com/ |
| http://news.com.au | 403 | 0 | N/A | https://www.news.com.au/ |
| http://npr.org | 200 | 0 | N/A | https://www.npr.org/ |
| http://nytimes.com | 200 | 6 | nyt-a: Secure, SameSite=none<br>nyt-gdpr: <br>nyt-purr: Secure, SameSite=Lax<br>nyt-geo: <br>datadome: Secure, SameSite=Lax<br>nyt-b3-traceid: Secure, SameSite=none | https://www.nytimes.com/ |
| http://offset.com | 200 | 0 | N/A | https://www.offset.com:443/ |
| http://oup.com | 202 | 0 | N/A | http://global.oup.com |
| http://outlook.com | 200 | 0 | N/A | https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f&sdf=0 |
| http://ovhcloud.com | 200 | 1 | SERVERID116590: HttpOnly | https://us.ovhcloud.com/ |
| http://people.com | 200 | 4 | TMog: <br>globalTI_SID: <br>Mint: <br>pc:  | https://people.com/ |
| http://php.net | 200 | 2 | COUNTRY: <br>LAST_NEWS:  | https://www.php.net/ |
| http://pinterest.fr | 200 | 4 | csrftoken: Secure, SameSite=lax<br>_pinterest_sess: HttpOnly, Secure, SameSite=none<br>_auth: HttpOnly, Secure<br>_routing_id: HttpOnly | https://fr.pinterest.com/ |
| http://pl.wikipedia.org | 200 | 0 | N/A | https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna |
| http://play.google.com | 200 | 0 | N/A | https://play.google.com/store/games?device=windows |
| http://playstation.com | 200 | 2 | sbsd_o: Secure, SameSite=None<br>sbsd: HttpOnly, Secure, SameSite=None | https://www.playstation.com/en-us/ |
| http://plos.org | 200 | 0 | N/A | https://plos.org/ |
| http://prezi.com | 200 | 2 | csrftoken: SameSite=Lax<br>__putma: Secure, SameSite=none | https://prezi.com/ |
| http://pt.wikipedia.org | 200 | 0 | N/A | https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal |
| http://reverbnation.com | 200 | 1 | _reverbnation_session: HttpOnly, Secure, SameSite=None | https://www.reverbnation.com/ |
| http://sakura.ne.jp | 200 | 0 | N/A | https://rs.sakura.ad.jp/ |
| http://samsung.com | 200 | 1 | device_type:  | https://www.samsung.com/us/ |
| http://search.yahoo.com | 200 | 1 | PROMO:  | https://search.yahoo.com/ |
| http://sina.com.cn | 200 | 0 | N/A | https://www.sina.com.cn/ |
| http://spiegel.de | 200 | 0 | N/A | https://www.spiegel.de/ |
| http://support.google.com | 200 | 2 | NID: HttpOnly, Secure, SameSite=none<br>NID: HttpOnly, Secure, SameSite=none | https://support.google.com/ |
| http://thefreedictionary.com | 200 | 0 | N/A | https://www.thefreedictionary.com |
| http://theverge.com | 200 | 1 | vmidv1: Secure, SameSite=Lax | https://www.theverge.com/ |
| http://usgs.gov | 200 | 0 | N/A | https://www.usgs.gov/ |
| http://vistaprint.com | 200 | 6 | userContext: <br>ucSearchParams: <br>testUserId: <br>optimizelyEndUserId: <br>expCtx: <br>cf-ipcountry: Secure, SameSite=None | https://www.vistaprint.com/ |
| http://walmart.com | 200 | 1 | akavpau_p2: HttpOnly, Secure, SameSite=None | https://www.walmart.com/ |
| http://webmd.com | 200 | 6 | ab: <br>lrt_wrk: <br>gtinfo: <br>VisitorId: <br>ab: <br>__cf_bm: HttpOnly, Secure, SameSite=None | https://www.webmd.com/ |
| http://webnode.page | 200 | 6 | PHPSESSID: HttpOnly, Secure, SameSite=Lax<br>ubh: HttpOnly<br>usi: HttpOnly<br>tu: <br>mfd: <br>mfdp:  | https://www.webnode.com/ |
| http://whitehouse.gov | 200 | 0 | N/A | https://www.whitehouse.gov/ |
| http://wikimedia.org | 200 | 0 | N/A | https://www.wikimedia.org/ |
| http://wordpress.org | 200 | 0 | N/A | https://wordpress.org/ |
| http://wp.com | 200 | 4 | tk_ai: Secure, SameSite=None<br>tk_ai_explat: Secure, SameSite=None<br>tk_qs: Secure, SameSite=Strict<br>explat_test_aa_weekly_lohp_2024_week_42: Secure, SameSite=None | https://wordpress.com/ |
| http://www.gov.uk | 200 | 0 | N/A | https://www.gov.uk/ |
| http://www.over-blog.com | 200 | 0 | N/A | http://www.over-blog.com/ |
| http://www.wix.com | 200 | 4 | ssr-caching: <br>XSRF-TOKEN: Secure, SameSite=None<br>_wixCIDX: Secure, SameSite=None<br>_wixUIDX: Secure, SameSite=None | https://www.wix.com/ |
| http://www.yahoo.com | 200 | 0 | N/A | https://www.yahoo.com/ |
| http://yadi.sk | 200 | 0 | N/A | https://360.yandex.com/disk/ |
| http://ytimg.com | None | 0 | N/A | None |
| http://zendesk.com | 200 | 2 | __cf_bm: HttpOnly, Secure, SameSite=None<br>__cfruid: HttpOnly, Secure, SameSite=None | https://www.zendesk.com/ |
| http://zippyshare.com | 200 | 0 | N/A | http://zippyshare.com/ |


## Individual Cookie Details

| URL | Cookie Name | HttpOnly | Secure | SameSite | Path |
|-----|-------------|----------|--------|----------|------|
| http://4shared.com | day1host | False | False | False | / |
| http://abcnews.go.com | region | False | False | False | / |
| http://abcnews.go.com | _dcf | False | False | False | / |
| http://alibaba.com | JSESSIONID | True | False | False | / |
| http://alibaba.com | cna | False | True | True: None | / |
| http://alibaba.com | ug_se_c | False | True | True: None | / |
| http://aliexpress.com | ali_apache_id | False | False | False | / |
| http://aliexpress.com | intl_common_forever | True | False | False | / |
| http://aliexpress.com | intl_locale | False | False | False | / |
| http://aliexpress.com | xman_us_f | False | True | True: None | / |
| http://aliexpress.com | aep_usuc_f | False | True | True: None | / |
| http://apple.com | geo | False | False | False | / |
| http://booking.com | _implmdnbl | True | False | False | / |
| http://booking.com | px_init | True | True | True: Strict | / |
| http://booking.com | bkng | True | True | True: None | / |
| http://booking.com | pcm_personalization_disabled | True | True | False | / |
| http://britannica.com | bcomID | False | False | False | / |
| http://britannica.com | SessionAuth | False | False | False | / |
| http://britannica.com | subreturn | False | False | False | / |
| http://britannica.com | webstats | False | False | False | / |
| http://britannica.com | __mendel | False | False | False | / |
| http://britannica.com | __cf_bm | True | True | True: None | / |
| http://buzzfeed.com | next-i18next | False | False | False | / |
| http://buzzfeed.com | dsl25_frhf | False | False | False | / |
| http://cnn.com | SecGpc | False | True | True: None | / |
| http://cnn.com | countryCode | False | True | True: None | / |
| http://cnn.com | stateCode | False | True | True: None | / |
| http://cnn.com | geoData | False | True | True: None | / |
| http://cnn.com | FastAB | False | False | True: Lax | / |
| http://cnn.com | wbdFch | False | True | True: None | / |
| http://com.com | XYZSRV | False | False | False | / |
| http://discord.com | __dcfduid | True | True | True: Lax | / |
| http://discord.com | __sdcfduid | True | True | True: Lax | / |
| http://dropbox.com | gvc | True | True | True: None | / |
| http://dropbox.com | t | True | True | True: None | / |
| http://dropbox.com | __Host-js_csrf | False | True | True: None | / |
| http://dropbox.com | __Host-ss | True | True | True: Strict | / |
| http://dropbox.com | locale | False | False | False | / |
| http://ea.com | EDGESCAPE_COUNTRY | False | False | False | / |
| http://ea.com | EDGESCAPE_REGION | False | False | False | / |
| http://ea.com | EDGESCAPE_TIMEZONE | False | False | False | / |
| http://espn.com | edition-view | False | False | False | / |
| http://espn.com | country | False | False | False | / |
| http://espn.com | connectionspeed | False | False | False | / |
| http://espn.com | edition | False | False | False | / |
| http://espn.com | region | False | False | False | / |
| http://espn.com | _dcf | False | False | False | / |
| http://espn.com | SWID | False | False | False | / |
| http://espn.com | userab_1 | False | False | False | / |
| http://get.google.com | AEC | True | True | True: lax | / |
| http://get.google.com | NID | True | True | True: none | / |
| http://godaddy.com | market | False | False | False | / |
| http://godaddy.com | currency | False | False | False | / |
| http://godaddy.com | akaas_godaddy-com-wildcard | False | True | True: None | / |
| http://gofundme.com | visitor | False | False | False | / |
| http://goo.ne.jp | XSRF-TOKEN | False | True | False | / |
| http://goo.ne.jp | top_session | True | True | False | / |
| http://goo.ne.jp | gootop | False | True | False | / |
| http://goo.ne.jp | gootopstay | False | True | False | / |
| http://goo.ne.jp | mental | True | True | False | / |
| http://goo.ne.jp | gooproperty | False | True | False | / |
| http://goo.ne.jp | searchstate | True | True | False | / |
| http://goo.ne.jp | TS01ea13e3 | False | False | False | / |
| http://goo.ne.jp | TS011bfe84 | False | False | False | / |
| http://goo.ne.jp | TS011667c7 | False | False | False | / |
| http://goodreads.com | ccsid | False | False | False | / |
| http://goodreads.com | locale | False | False | False | / |
| http://goodreads.com | _session_id2 | True | False | False | / |
| http://google.ru | NID | True | True | True: none | / |
| http://guardian.co.uk | GU_mvt_id | False | True | False | / |
| http://guardian.co.uk | GU_geo_country | False | True | False | / |
| http://hatena.ne.jp | b | False | False | False | / |
| http://hindustantimes.com | ht-location | False | False | False | / |
| http://hindustantimes.com | Meta-Geo | False | False | False | / |
| http://hp.com | aka_client_code | False | False | False | / |
| http://ign.com | geoCC | False | False | False | / |
| http://ikea.com | _abck | False | True | False | / |
| http://ikea.com | bm_sz | False | False | False | / |
| http://independent.co.uk | gdpr | False | False | False | / |
| http://independent.co.uk | subscriber_origin | False | False | False | / |
| http://independent.co.uk | _pc_subscriber_origin | False | False | False | / |
| http://independent.co.uk | feat__support_now_donate_copy | True | True | False | / |
| http://independent.co.uk | feat__pubx_integration | True | True | False | / |
| http://independent.co.uk | esi-uuid | True | True | False | / |
| http://independent.co.uk | esi-permutive-id | False | True | False | / |
| http://independent.co.uk | gdpr | False | False | False | / |
| http://independent.co.uk | subscriber_origin | False | False | False | / |
| http://independent.co.uk | _pc_subscriber_origin | False | False | False | / |
| http://independent.co.uk | feat__support_now_donate_copy | True | True | False | / |
| http://independent.co.uk | feat__pubx_integration | True | True | False | / |
| http://independent.co.uk | esi-uuid | True | True | False | / |
| http://independent.co.uk | esi-permutive-id | False | True | False | / |
| http://jstor.org | AccessSession | False | True | True: Lax | / |
| http://jstor.org | AccessSessionSignature | False | True | True: Lax | / |
| http://jstor.org | AccessSessionTimedSignature | False | True | True: Lax | / |
| http://jstor.org | UUID | False | True | True: None | / |
| http://jstor.org | csrftoken | False | True | True: Lax | / |
| http://jstor.org | ReferringRequestId | False | True | True: Lax | / |
| http://mailchimp.com | ak_bmsc | False | True | True: None | / |
| http://nytimes.com | nyt-a | False | True | True: none | / |
| http://nytimes.com | nyt-gdpr | False | False | False | / |
| http://nytimes.com | nyt-purr | False | True | True: Lax | / |
| http://nytimes.com | nyt-geo | False | False | False | / |
| http://nytimes.com | datadome | False | True | True: Lax | / |
| http://nytimes.com | nyt-b3-traceid | False | True | True: none | / |
| http://ovhcloud.com | SERVERID116590 | True | False | False | / |
| http://people.com | TMog | False | False | False | / |
| http://people.com | globalTI_SID | False | False | False | / |
| http://people.com | Mint | False | False | False | / |
| http://people.com | pc | False | False | False | / |
| http://php.net | COUNTRY | False | False | False | / |
| http://php.net | LAST_NEWS | False | False | False | / |
| http://pinterest.fr | csrftoken | False | True | True: lax | / |
| http://pinterest.fr | _pinterest_sess | True | True | True: none | / |
| http://pinterest.fr | _auth | True | True | False | / |
| http://pinterest.fr | _routing_id | True | False | False | / |
| http://playstation.com | sbsd_o | False | True | True: None | / |
| http://playstation.com | sbsd | True | True | True: None | / |
| http://prezi.com | csrftoken | False | False | True: Lax | / |
| http://prezi.com | __putma | False | True | True: none | / |
| http://reverbnation.com | _reverbnation_session | True | True | True: None | / |
| http://samsung.com | device_type | False | False | False | / |
| http://search.yahoo.com | PROMO | False | False | False | / |
| http://support.google.com | NID | True | True | True: none | / |
| http://support.google.com | NID | True | True | True: none | / |
| http://theverge.com | vmidv1 | False | True | True: Lax | / |
| http://vistaprint.com | userContext | False | False | False | / |
| http://vistaprint.com | ucSearchParams | False | False | False | / |
| http://vistaprint.com | testUserId | False | False | False | / |
| http://vistaprint.com | optimizelyEndUserId | False | False | False | / |
| http://vistaprint.com | expCtx | False | False | False | / |
| http://vistaprint.com | cf-ipcountry | False | True | True: None | / |
| http://walmart.com | akavpau_p2 | True | True | True: None | / |
| http://webmd.com | ab | False | False | False | / |
| http://webmd.com | lrt_wrk | False | False | False | / |
| http://webmd.com | gtinfo | False | False | False | / |
| http://webmd.com | VisitorId | False | False | False | / |
| http://webmd.com | ab | False | False | False | / |
| http://webmd.com | __cf_bm | True | True | True: None | / |
| http://webnode.page | PHPSESSID | True | True | True: Lax | / |
| http://webnode.page | ubh | True | False | False | / |
| http://webnode.page | usi | True | False | False | / |
| http://webnode.page | tu | False | False | False | / |
| http://webnode.page | mfd | False | False | False | / |
| http://webnode.page | mfdp | False | False | False | / |
| http://wp.com | tk_ai | False | True | True: None | / |
| http://wp.com | tk_ai_explat | False | True | True: None | / |
| http://wp.com | tk_qs | False | True | True: Strict | / |
| http://wp.com | explat_test_aa_weekly_lohp_2024_week_42 | False | True | True: None | / |
| http://www.wix.com | ssr-caching | False | False | False | / |
| http://www.wix.com | XSRF-TOKEN | False | True | True: None | / |
| http://www.wix.com | _wixCIDX | False | True | True: None | / |
| http://www.wix.com | _wixUIDX | False | True | True: None | / |
| http://zendesk.com | __cf_bm | True | True | True: None | / |
| http://zendesk.com | __cfruid | True | True | True: None | / |


## HTTP Response Details

### URL: http://4shared.com
- **Final URL:** https://www.4shared.com
- **Status Code:** 200
- **Headers:**
  - Server: 558
  - Set-Cookie: day1host=h; Domain=.4shared.com; Expires=Sat, 19-Oct-2024 06:22:50 GMT; Path=/
  - Pragma: no-cache
  - Expires: Thu, 01 Jan 1970 00:00:00 GMT
  - Cache-Control: no-cache
  - Content-Type: text/html;charset=UTF-8
  - Content-Language: en
  - Transfer-Encoding: chunked
  - Date: Fri, 18 Oct 2024 06:22:49 GMT
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>4shared.com - free file sharing and storage</title>
  <meta name="Description" content="Online file sharing and storage - 15 GB free web space. Easy registration. File upload progressor. Multiple file transfer. Fast download.">
  <meta name="Keywords" content="file sharing, free web space, online storage, share files, photo image music mp3 video sharing, dedicated hosting, enterprise sharing, file transfer, file hosting, i
```

---
### URL: http://abcnews.go.com
- **Final URL:** https://abcnews.go.com/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=utf-8
  - Content-Length: 79879
  - Connection: keep-alive
  - Date: Fri, 18 Oct 2024 06:22:44 GMT
  - Server: nginx/1.24.0
  - Expires: Fri, 18 Oct 2024 06:22:53 GMT
  - Last-Modified: Fri, 18 Oct 2024 06:22:53 GMT
  - Content-Encoding: gzip
  - Via: 1.1 varnish (Varnish/6.0), 1.1 1fecb697c6f121d7ce54a35628ac154e.cloudfront.net (CloudFront)
  - Cache-Control: max-age=9
  - Accept-Ranges: bytes
  - Set-Cookie: region=ccpa; path=/; Expires=Fri, 25 Oct 2024 06:22:44 GMT;, _dcf=1; path=/; Expires=Fri, 25 Oct 2024 06:22:44 GMT;
  - Vary: Accept-Encoding
  - X-Cache: Hit from cloudfront
  - X-Amz-Cf-Pop: IAD61-P2
  - X-Amz-Cf-Id: -n0Ie9-DLB3rPM5Rp-eRjLvaVR1l5kZniVWfJwnGYpQ_8_4W1wYKow==
  - Age: 6
- **Content Snippet (first 500 characters):**
```

        <!doctype html>
        <html lang="en" lang="en">
            <head>
                <!-- ABCNEWS | 22aa3d60a7d9 | 3361 | e832d3cc217bf7b9407073b39d0613059660f69e | abcnews.go.com | Fri, 18 Oct 2024 06:22:44 GMT -->
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, user-scalable=yes" />
                <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
                <meta property="og:locale" content="en_US" />
  
```

---
### URL: http://alibaba.com
- **Final URL:** https://www.alibaba.com/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html;charset=UTF-8
  - Link: <https://s.alicdn.com>; rel=preconnect;
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block
  - Cache-Control: no-cache, no-store, max-age=0, must-revalidate
  - Pragma: no-cache
  - Expires: 0
  - X-Frame-Options: DENY
  - Content-Encoding: gzip
  - Strict-Transport-Security: max-age=31536000
  - Timing-Allow-Origin: *
  - EagleId: 2103087c17292325724108595e94c6
  - Server-Timing: rt;dur=0.007,eagleid;desc=2103087c17292325724108595e94c6, akamai;dur=12;desc=cache-miss
  - Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With
  - Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
  - Access-Control-Allow-Credentials: true
  - Date: Fri, 18 Oct 2024 06:22:52 GMT
  - Transfer-Encoding: chunked
  - Connection: keep-alive, Transfer-Encoding
  - Vary: Accept-Encoding
  - Set-Cookie: JSESSIONID=1DF295007D30966A9FD6F96C5BB547E0; Path=/; HttpOnly, cna=vOyYH47BwXwCAS/2gNfnccvQ; Domain=.alibaba.com; Path=/; Expires=Wed, 05-Nov-2092 09:36:59 GMT; Secure; SameSite=None, ug_se_c=organic_1729232572416; Domain=.alibaba.com; Expires=Mon, 26-Jun-2056 08:09:31 GMT; Path=/; Secure; SameSite=None
  - Alt-Svc: h3=":443"; ma=2592000
  - Object-Status: ttl=-1,age=0
  - Edge-Type: akamai
- **Content Snippet (first 500 characters):**
```

    <!-- tangram:6763 begin-->
<!DOCTYPE html>
<html class="rwd">
<script>window._timing = {};window._timing.html_start = Date.now();</script>
<head>
        <script>window.__defaultcall=function(){}; var domainToLanguageMap={'www.alibaba.com':'en_US','german.alibaba.com':'de_DE','portuguese.alibaba.com':'pt_PT','spanish.alibaba.com':'es_ES','french.alibaba.com':'fr_FR','italian.alibaba.com':'it_IT','hindi.alibaba.com':'hi_IN','russian.alibaba.com':'ru_RU','korean.alibaba.com':'ko_KR','japanes
```

---
### URL: http://aliexpress.com
- **Final URL:** https://www.aliexpress.us/?gatewayAdapt=glo2usa&_randl_shipto=US
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html;charset=UTF-8
  - Vary: Accept-Encoding
  - P3P: CP="CAO PSA OUR"
  - X-Application-Context: ae-fn-gateway-f:7001
  - Access-Control-Allow-Origin: https://hz.aliexpress.com
  - Server: Tengine/Aserver
  - EagleEye-TraceId: 2101c71a17292325754743447e9e6e
  - Strict-Transport-Security: max-age=31536000
  - Timing-Allow-Origin: *
  - X-Akamai-Transformed: 9 - 0 pmb=mRUM,2
  - Content-Encoding: gzip
  - Date: Fri, 18 Oct 2024 06:22:56 GMT
  - Transfer-Encoding: chunked
  - Connection: keep-alive, Transfer-Encoding
  - Set-Cookie: ali_apache_id=33.1.199.26.1729232575475.649253.3; path=/; domain=.aliexpress.com; expires=Wed, 30-Nov-2084 01:01:01 GMT, intl_common_forever=XuhwnB336hX4b63Q4If9mHc4SpaTPh8rio/KhCFO3AfojEJf4Qhxwg==; Domain=.aliexpress.us; Expires=Wed, 05-Nov-2092 09:37:02 GMT; Path=/; HttpOnly, intl_locale=en_US; Domain=.aliexpress.us; Path=/, xman_us_f=x_locale=en_US&x_l=0&x_c_chg=1&acs_rt=da722190ad264919b458ba5565ae0bcd; Domain=.aliexpress.us; Expires=Wed, 05-Nov-2092 09:37:02 GMT; Path=/; Secure; SameSite=None, aep_usuc_f=site=usa&c_tp=USD&region=US&b_locale=en_US; Domain=.aliexpress.us; Expires=Wed, 05-Nov-2092 09:37:02 GMT; Path=/; Secure; SameSite=None
  - Server-Timing: edge; dur=3, origin; dur=544, cdn-cache; desc=MISS, ak_p; desc="1729232575459_400321156_3034240491_55348_12614_24_0_-";dur=1
  - X-Akamai-Fwd-Auth-SHA: 2CD4B152855F581E877E5E59408C08FE2DA99114FD46082FC1060AFCFFBDD713
  - X-Akamai-Fwd-Auth-Data: 1777955256, 23.220.106.132, 1729232576, 98.183.222.96
  - X-Akamai-Fwd-Auth-Sign: m0DA7jlFHlH7Q8x3EIn6rofzO4fgzIk9V1T4HckkgaftR5tMF4OP2Vn6fDLkH4iw3t7X865PcdtOtkaJBIdq04fagULYW+A4tOKfiHRmJNo=
- **Content Snippet (first 500 characters):**
```

<!DOCTYPE html><html prefix="og: https://ogp.me/ns/website#" lang="en_US"><head><meta charSet="utf-8"/><meta name="data-spm" content="a2g0o"/><meta http-equiv="content-language" content="en_US"/><title>AliExpress - Affordable Prices on Top Brands with Free Shipping</title><meta name="viewport" content="width=device-width, initial-scale=1.0"/><meta name="aplus-waiting" content="MAN"/><meta name="aplus-auto-exp-visible" content="0.5"/><meta name="aplus-auto-exp-duration" content="500"/><meta nam
```

---
### URL: http://aol.com
- **Final URL:** https://www.aol.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:22:56 GMT
  - Content-Type: text/html; charset=utf-8
  - Expect-CT: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only
  - Referrer-Policy: no-referrer-when-downgrade
  - Strict-Transport-Security: max-age=31536000
  - X-Frame-Options: SAMEORIGIN
  - Vary: Accept-Encoding
  - Content-Encoding: gzip
  - content-security-policy: upgrade-insecure-requests; block-all-mixed-content; sandbox allow-modals allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation allow-orientation-lock allow-pointer-lock;
  - cache-control: no-cache, no-store, private, must-revalidate
  - Age: 0
  - Server: ATS
  - X-YCPI: 1
  - X-XSS-Protection: 1; mode=block
  - X-Content-Type-Options: nosniff
  - Transfer-Encoding: chunked
  - Connection: keep-alive
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html id="atomic" class="NoJs chrome desktop" lang="en-US"><head prefix="og: http://ogp.me/ns#"><script>window.performance && window.performance.mark && window.performance.mark('PageStart');</script><meta charSet="utf-8"/><meta http-equiv="content-type" content="text/html; charset=UTF-8"/><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"/><meta http-equiv="x-dns-prefetch-control" content="on"/><meta name="author" content="AOL"/><meta name="google-site-verification" con
```

---
### URL: http://apache.org
- **Final URL:** https://apache.org/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 16101
  - Server: Apache
  - Last-Modified: Fri, 18 Oct 2024 01:23:22 GMT
  - ETag: "fd94-624b6261f46b8-gzip"
  - Cache-Control: max-age=3600
  - Expires: Fri, 18 Oct 2024 02:23:23 GMT
  - Content-Encoding: gzip
  - Content-Security-Policy: default-src 'self' data: 'unsafe-inline' https://www.apachecon.com/ https://analytics.apache.org/ http://analytics.apache.org/ https://www.youtube-nocookie.com https://www.youtube.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://analytics.apache.org/ http://analytics.apache.org/ https://www.youtube-nocookie.com https://www.youtube.com; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'; img-src 'self' 'https://www.apache.org/';
  - Content-Type: text/html
  - Via: 1.1 varnish, 1.1 varnish
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:22:56 GMT
  - Age: 3551
  - X-Served-By: cache-hel1410034-HEL, cache-iad-kjyo7100146-IAD
  - X-Cache: HIT, HIT
  - X-Cache-Hits: 16, 1
  - X-Timer: S1729232577.984468,VS0,VE1
  - Vary: Accept-Encoding
  - Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Home page of The Apache Software Foundation">
  <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" h
```

---
### URL: http://apple.com
- **Final URL:** https://www.apple.com/
- **Status Code:** 200
- **Headers:**
  - Server: Apple
  - Content-Type: text/html; charset=utf-8
  - Set-Cookie: geo=US; path=/; domain=.apple.com
  - X-Frame-Options: SAMEORIGIN
  - Vary: Accept-Encoding
  - Content-Security-Policy: default-src 'self' blob: data: *.akamaized.net *.apple.com *.apple-mapkit.com *.cdn-apple.com *.organicfruitapps.com; child-src blob: mailto: embed.music.apple.com embed.podcasts.apple.com https://recyclingprogram.apple.com swdlp.apple.com www.apple.com www.instagram.com platform.twitter.com www.youtube-nocookie.com; img-src 'unsafe-inline' blob: data: *.apple.com *.apple-mapkit.com *.cdn-apple.com *.mzstatic.com; script-src 'unsafe-inline' 'unsafe-eval' blob: *.apple.com *.apple-mapkit.com www.instagram.com platform.twitter.com; style-src 'unsafe-inline' *.apple.com
  - Referrer-Policy: no-referrer-when-downgrade
  - Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
  - X-Content-Type-Options: nosniff
  - X-Xss-Protection: 1; mode=block
  - Content-Encoding: gzip
  - Cache-Control: max-age=31
  - Expires: Fri, 18 Oct 2024 06:23:28 GMT
  - Date: Fri, 18 Oct 2024 06:22:57 GMT
  - Content-Length: 40676
  - X-Cache: TCP_MEM_HIT from a23-62-155-202.deploy.akamaitechnologies.com (AkamaiGHost/11.6.5-0c617a4be13e71cac2c90d10d87ecf54) (-)
  - Connection: keep-alive
- **Content Snippet (first 500 characters):**
```



	


	

	


	


	

	
		
	

	

		
		

	


	


				

					

				


				

					
						



<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US" prefix="og: http://ogp.me/ns#" class="no-js" data-layout-name="shrinking-s2-10-16">
<head>
	
































<meta charset="utf-8" />
<link rel="canonical" href="https://www.apple.com/" />


	
	<link rel="alternate" href="https://www.apple.com/" hreflang="en-US" /><link rel="alternate" href="https://www.a
```

---
### URL: http://arxiv.org
- **Final URL:** http://arxiv.org/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 44362
  - content-type: text/html; charset=utf-8
  - content-security-policy: frame-ancestors 'none'
  - x-frame-options: SAMEORIGIN
  - x-cloud-trace-context: 7198410424784570ccf28dede49b2b69
  - server: Google Frontend
  - via: 1.1 google, 1.1 varnish, 1.1 varnish
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:22:57 GMT
  - Age: 24
  - X-Served-By: cache-lga21981-LGA, cache-iad-kjyo7100148-IAD
  - X-Cache: HIT, HIT
  - X-Timer: S1729232577.334933,VS0,VE1
- **Content Snippet (first 500 characters):**
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

<head>  <title>arXiv.org e-Print archive</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="apple-touch-icon" sizes="180x180" href="/static/browse/0.3.4/images/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" size
```

---
### URL: http://biblegateway.com
- **Final URL:** https://www.biblegateway.com/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Date: Fri, 18 Oct 2024 05:42:15 GMT
  - Server: nginx
  - Strict-Transport-Security: max-age=7776000
  - Content-Encoding: gzip
  - Vary: Accept-Encoding
  - X-Cache: Hit from cloudfront
  - Via: 1.1 7af6fcba5fc7d18afd4c6d456b52e886.cloudfront.net (CloudFront)
  - X-Amz-Cf-Pop: IAD61-P3
  - Alt-Svc: h3=":443"; ma=86400
  - X-Amz-Cf-Id: EXJbOCHSmRK-eqiqBfTyYsFU42yDYjutcI_KET_kYh7m4dc8kos54Q==
  - Age: 2442
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset='utf-8'>
<meta http-equiv="Content-Language" content="en">
<meta name="google" content="notranslate" />
<meta content='width=device-width, initial-scale=1' name='viewport'>
<title>BibleGateway.com: A searchable online Bible in over 150 versions and 50 languages.</title>
<link rel="canonical" href="https://www.biblegateway.com/" />
<meta property="og:image" content="https://www.biblegateway.com/assets/images/logos/logo_bg-sharing.png?fd6090e5
```

---
### URL: http://biglobe.ne.jp
- **Final URL:** http://biglobe.ne.jp/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:22:58 GMT
  - Content-Type: text/html
  - Content-Length: 254
  - Connection: keep-alive
  - Server: Apache
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - Last-Modified: Thu, 05 Apr 2018 04:11:53 GMT
  - Accept-Ranges: bytes
- **Content Snippet (first 500 characters):**
```
<html>
<head>
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache, no-store" />
<meta http-equiv="refresh" content="0;url=https://www.biglobe.ne.jp/" />
<title>BIGLOBE</title>
</head>
<body>
</body>
</html>

```

---
### URL: http://bloomberg.com
- **Final URL:** https://www.bloomberg.com/tosv2.html?vid=&uuid=6b4941aa-8d19-11ef-8e35-ffa5f7376ebb&url=Lw==
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Type: text/html; charset=utf-8
  - Server: openresty
  - Last-Modified: Thu, 17 Oct 2024 19:31:40 GMT
  - ETag: W/"6711661c-2dca"
  - Cache-Control: public, max-age=5, private, no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0
  - Content-Encoding: gzip
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:22:58 GMT
  - X-Served-By: cache-iad-kjyo7100083-IAD
  - X-Cache: MISS
  - X-Cache-Hits: 0
  - X-Timer: S1729232579.672635,VS0,VE10
  - Strict-Transport-Security: max-age=31557600
  - Link: <https://assets.bwbx.io>; rel=preconnect; crossorigin, <https://assets.bwbx.io>; rel=preconnect, <https://sourcepointcmp.bloomberg.com>; rel=preconnect; crossorigin, <https://tpc.googlesyndication.com	>; rel=preconnect; crossorigin, <https://www.google-analytics.com>; rel=preconnect; crossorigin, <https://www.googletagmanager.com>; rel=preconnect, <https://www.googletagmanager.com>; rel=preconnect; crossorigin
  - Vary: Accept-Encoding
  - alt-svc: h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400
  - transfer-encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!doctype html>
<html lang="en">
<head>
    <title>Bloomberg - Are you a robot?</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex">
    <style rel="stylesheet">
        @font-face {
            font-family: BWHaasGroteskWeb;
            font-display: swap;
            font-weight: 400;
            font-style: normal;
            src: url('https://assets.bwbx.io/s3/fontservice/fonts/BWHaasGrotesk-55Roman-Web-7998fbcba8.eot');
```

---
### URL: http://booking.com
- **Final URL:** https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaLICiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuALD_ce4BsACAdICJGRmYmYzZmVlLWFlM2YtNGFjZC1iMWYwLTVhYTRlODIzODk1MtgCBeACAQ&sid=fd68c14aab00dcbb84f2320be581ef13&keep_landing=1&sb_price_type=total&
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - server: nginx
  - date: Fri, 18 Oct 2024 06:22:59 GMT
  - cache-control: private
  - vary: User-Agent, Accept-Encoding
  - content-encoding: gzip
  - link: <https://cf.bstatic.com/static/css/gprof_icons_cloudfront_sd.iq_ltr/308436ca26aacf6a7553e4c0cf298d0f780727a2.css>; rel=preload; as=style, <https://cf.bstatic.com/static/css/incentives_cloudfront_sd.iq_ltr/f1558a6e9832a4eb8cfe1d3d14db176bd3564335.css>; rel=preload; as=style, <https://cf.bstatic.com/static/css/index_cloudfront_sd.iq_ltr/8c4382cb776a747249815b8dfc6e41527a56143e.css>; rel=preload; as=style, <https://cf.bstatic.com/static/css/main_cloudfront_sd.iq_ltr/2ee63c50562eff5b15bd5494ec6df807b8ad79c2.css>; rel=preload; as=style, <https://cf.bstatic.com/static/css/main_exps_cloudfront_sd.iq_ltr/22870d2036e5b5667d39fb7d0c2c8e937d5d2a13.css>; rel=preload; as=style, <https://cf.bstatic.com/static/css/xp-index-sb_cloudfront_sd.iq_ltr/5b5ab8ab66a5ce3092875d0725122439c4f2dfdd.css>; rel=preload; as=style
  - nel: {"max_age":604800,"report_to":"default"}
  - report-to: {"max_age":604800,"endpoints":[{"url":"https://nellie.booking.com/report"}],"group":"default"}
  - set-cookie: _implmdnbl=2__1__0; path=/; expires=Sun, 20-Oct-2019 06:22:59 GMT; HttpOnly, px_init=0; domain=booking.com; expires=Wed, 04-Oct-2079 12:45:58 GMT; SameSite=Strict; secure; HttpOnly, bkng=11UmFuZG9tSVYkc2RlIyh9Yaa29%2F3xUOLbKE7bjkbYWzkd%2BwJK4Aig3At8MkALR7Cynn%2FHg1M27OIm3lCArt0rISOdFXriMVSetm%2BjgMWNzuP913mkFIWc3fzuOac6QoS4VZQrAWIP6zmWBF2AlMTMc4rzl9is6x1f48%2B%2BjsztaFqv8%2BvaCJcwG9IIeNqWf2g3; domain=.booking.com; path=/; expires=Wed, 17-Oct-2029 06:22:59 GMT; Secure; HTTPOnly; SameSite=None, pcm_personalization_disabled=0; domain=booking.com; path=/; expires=Wed, 16-Apr-2025 06:22:59 GMT; Secure; HTTPOnly
  - strict-transport-security: max-age=63072000; includeSubDomains; preload
  - x-content-type-options: nosniff
  - x-recruiting: Like HTTP headers? Come write ours: https://careers.booking.com
  - content-security-policy-report-only: base-uri 'none'; object-src 'none'; report-uri https://nellie.booking.com/csp-report-uri?type=report&tag=146&pid=1a812ce1df83005c&e=UmFuZG9tSVYkc2RlIyh9YYYdGuViorKPlycYfUxhXbQ-Jl4X2HRxrbAhwy80z2r7; script-src 'self' 'nonce-i5AyyCT3XMjeZ3e' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: 'sha256-47mKTaMaEn1L3m5DAz9muidMqw636xxw7EFAK/YnPdg=' 'sha256-iry7oJKoKJ+9HSjmU3E1TlRlpSesJWZ1vapuUz2MP38='
  - x-xss-protection: 1; mode=block
  - X-Cache: Miss from cloudfront
  - Via: 1.1 16dfaf786e60aa9bf3b94684a08564c6.cloudfront.net (CloudFront)
  - X-Amz-Cf-Pop: IAD61-P1
  - X-Amz-Cf-Id: bCz8Rx93srU10AsZsY8peCyFC1G_HSBFBGkxXKu0ZSNTHleUySc0eg==
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<!--
You know you could be getting paid to poke around in our code?
We're hiring designers and developers to work in Amsterdam:
https://careers.booking.com/
-->
<!-- wdot-802 -->
<script type="text/javascript" nonce="i5AyyCT3XMjeZ3e">
document.addEventListener('DOMContentLoaded', function () {
/**
* provides the current user's cookie consent
* in order to use it:
* 1. inline privacy/cookieConsent.js in the page you need to use it.
* please note that this library relies on window.
```

---
### URL: http://britannica.com
- **Final URL:** https://www.britannica.com:443/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:23:00 GMT
  - Content-Type: text/html;charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - vary: Accept-Encoding,User-Agent
  - x-tserver: ip-10-145-22-195/127.0.1.1
  - Set-Cookie: bcomID=8107659664227623776; Max-Age=315360000; Expires=Mon, 16 Oct 2034 06:23:00 GMT; Domain=britannica.com; Path=/, SessionAuth=vQocCUuH5QBOHcXJqs7N9PknZYhTWM8NQNmVfb25V162nJD5BqNvaVq6fVwlstcXCd+zG69s9rxLMR8gyJbujQ==; Domain=britannica.com; Path=/, subreturn=https%3A%2F%2Fwww.britannica.com%2F; Domain=britannica.com; Path=/, webstats=referer_page=https%3A%2F%2Fwww.britannica.com%2F; Domain=britannica.com; Path=/, __mendel=%7B%27surveyShown%27%3Afalse%2C%27visitedTopicId%27%3A0%2C%27currentDate%27%3A20241018%7D; Domain=britannica.com; Path=/, __cf_bm=cv4aFCcS5a9haVZmi_KimGzVZnaLzD3yA2lzrNIPh1Q-1729232580-1.0.1.1-1SvxD4Jyd8dGdSK6RF.EjuQYMMMkx23sDZCljzp5TtwYU8U1zoEzkPueB3XJKbMcXrk2M6TWUs5dBlzIuPuyKg; path=/; expires=Fri, 18-Oct-24 06:53:00 GMT; domain=.britannica.com; HttpOnly; Secure; SameSite=None
  - content-language: en-US
  - x-wserver: 127.0.0.1
  - x-iset: blue
  - x-xss-protection: 1; mode=block
  - x-permitted-cross-domain-policies: master-only
  - expect-ct: max-age=604800
  - CF-Cache-Status: DYNAMIC
  - Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=Gt6kEOAIK1wzCZYzRfFBmYioTwqq%2FxYqk08rvCswCbXkVKfRUn9YXTxj3Wu0ttyt1CwRfSGPNBMhs58UCz8iFwwca9uO3Ui7kHv9vuqT0ZGDJ55HhimfZqdP9aaqVuZ3D9wceA%3D%3D"}],"group":"cf-nel","max_age":604800}
  - NEL: {"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}
  - Server: cloudflare
  - CF-RAY: 8d466fed6ecf4fe4-ORF
  - Content-Encoding: gzip
  - alt-svc: h3=":443"; ma=86400
- **Content Snippet (first 500 characters):**
```
<!doctype html>

<html lang="en" class="home-desktop ui-chrome91 ui-chrome">

<head prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb#">

    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<link rel="dns-prefetch" href="https://cdn.britannica.com/mendel-resources/3-127">
	<link rel="preconnect" href="https://cdn.britannica.com/mendel-resources/3-127">

    <link 
```

---
### URL: http://buzzfeed.com
- **Final URL:** https://www.buzzfeed.com/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 230125
  - Content-Type: text/html; charset=utf-8
  - Cache-Control: no-cache, no-store, must-revalidate
  - Content-Encoding: gzip
  - Content-Language: en
  - Document-Policy: js-profiling
  - Etag: "17baaa-U0ViOQBWeyEGosrJhnhyGGxkxuo"
  - Expires: 0
  - Pragma: no-cache
  - Set-Cookie: next-i18next=en; path=/; expires=Sat, 18 Oct 2025 06:21:50 GMT, dsl25_frhf=control;expires=Fri, 15 Nov 2024 06:23:01 GMT;
  - X-Request-Id: 67444499a676a5cd1435c9491aa13273
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:23:01 GMT
  - Age: 70
  - X-Frame-Options: SAMEORIGIN
  - Content-Security-Policy: upgrade-insecure-requests
  - Strict-Transport-Security: max-age=31536000; preload
  - Timing-Allow-Origin: *
  - X-Served-By: cache-iad-kiad7000044-IAD
  - X-Cache: HIT
  - X-Cache-Hits: 1
  - X-Timer: S1729232581.221023,VS0,VE2
  - Vary: X-BF-User-Edition, Accept-Encoding, X-BF-Canary, X-BF-Canary-Site-Router, X-BF-Canary-Perimeter, X-BF-Canary-Feed-UI
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html class="undefined " lang="en-us"><head><script>
  window.BZFD = window.BZFD || {};
  window.BZFD.Config = {
    bfwInfoCookie: 'bf2-b_info'
  };
</script><script>((env)=>{
        window.BFADS = {
            badges: env.badges || null,
            buzz_id: null,
            compilation_id: null,
            cms_tag: env.cms_tags,
            cms_tags: env.cms_tags,
            dfp_keyword: env.dfp_keyword,
            pagetype: env.pagetype,
            recipe_id: null,
    
```

---
### URL: http://cambridge.org
- **Final URL:** https://www.cambridge.org:443/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:23:01 GMT
  - Content-Type: text/html; charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Vary: CF-IPCountry,Accept-Encoding
  - X-Cache-Hits: 1081
  - Cache-Control: max-age=86400, public
  - X-Cache: HIT
  - X-Request-ID: v-2024b490-8cfd-11ef-94fc-c7a014d7a8bc
  - Expires: Sun, 19 Nov 1978 05:00:00 GMT
  - X-XSS-Protection: 1; mode=block
  - Content-language: en
  - X-Content-Type-Options: nosniff
  - Via: varnish
  - CF-IPCountry: US
  - X-Frame-Options: SAMEORIGIN
  - Last-Modified: Fri, 18 Oct 2024 03:00:26 GMT
  - X-AH-Environment: prod
  - Age: 12154
  - X-Served-From: aws
  - CF-Cache-Status: DYNAMIC
  - Server: cloudflare
  - CF-RAY: 8d466ff3c8184fdb-ORF
  - Content-Encoding: gzip
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<!--[if IE 8 ]><html class="coh-ie8"  lang="en" dir="ltr" prefix="content: http://purl.org/rss/1.0/modules/content/  dc: http://purl.org/dc/terms/  foaf: http://xmlns.com/foaf/0.1/  og: http://ogp.me/ns#  rdfs: http://www.w3.org/2000/01/rdf-schema#  schema: http://schema.org/  sioc: http://rdfs.org/sioc/ns#  sioct: http://rdfs.org/sioc/types#  skos: http://www.w3.org/2004/02/skos/core#  xsd: http://www.w3.org/2001/XMLSchema# "> <![endif]-->
<!--[if IE 9 ]><html class="coh-ie9"  l
```

---
### URL: http://cnil.fr
- **Final URL:** https://www.cnil.fr/fr
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:23:07 GMT
  - Content-Type: text/html; charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Cache-Control: must-revalidate, no-cache, private
  - x-drupal-dynamic-cache: UNCACHEABLE
  - x-ua-compatible: IE=edge
  - content-language: fr
  - x-content-type-options: nosniff
  - expires: Sun, 19 Nov 1978 05:00:00 GMT
  - x-generator: Drupal 9 (https://www.drupal.org)
  - vary: Accept-Encoding
  - content-security-policy: default-src *.openstreetmap.org *.openlayers.org *.arcgisonline.com 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' cdnjs.cloudflare.com cdn.jsdelivr.net unpkg.com *.openstreetmap.org *.openlayers.org *.cnil.fr; script-src-elem 'self' data: 'unsafe-inline' 'unsafe-eval' cdnjs.cloudflare.com cdn.jsdelivr.net unpkg.com *.openstreetmap.org *.openlayers.org *.cnil.fr; style-src 'self' 'unsafe-inline' cdn.jsdelivr.net cdnjs.cloudflare.com *.openstreetmap.org *.openlayers.org *.cnil.fr; img-src 'self' *.openstreetmap.org *.openlayers.org *.cnil.fr data:; font-src 'self' *.openstreetmap.org *.openlayers.org *.cnil.fr; object-src 'self' *.openstreetmap.org *.openlayers.org *.cnil.fr; frame-src 'self' *.openstreetmap.org *.openlayers.org *.cnil.fr; frame-ancestors 'self' *.openstreetmap.org *.openlayers.org *.cnil.fr ; form-action 'self' *.signal-spam.fr *.cnil.fr *.economie.gouv.fr ; block-all-mixed-content; base-uri 'self'
  - strict-transport-security: max-age=63072000; includeSubdomains; preload
  - referrer-policy: strict-origin-when-cross-origin
  - x-xss-protection: 1; mode=block
  - x-varnish: 3195271
  - Age: 0
  - via: 1.1 varnish (Varnish/6.5)
  - cache-tags: MISS
  - cf-cache-status: DYNAMIC
  - Server: cloudflare
  - CF-RAY: 8d466fff2bb84fe7-ORF
  - Content-Encoding: gzip
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html  lang="fr" dir="ltr" prefix="content: http://purl.org/rss/1.0/modules/content/  dc: http://purl.org/dc/terms/  foaf: http://xmlns.com/foaf/0.1/  og: http://ogp.me/ns#  rdfs: http://www.w3.org/2000/01/rdf-schema#  schema: http://schema.org/  sioc: http://rdfs.org/sioc/ns#  sioct: http://rdfs.org/sioc/types#  skos: http://www.w3.org/2004/02/skos/core#  xsd: http://www.w3.org/2001/XMLSchema# ">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <
```

---
### URL: http://cnn.com
- **Final URL:** https://www.cnn.com/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 627089
  - x-last-modified: Fri, 18 Oct 2024 06:01:17 GMT
  - content-type: text/html; charset=utf-8
  - cache-control: max-age=60
  - access-control-allow-origin: *
  - content-security-policy: default-src 'self' blob: https://*.cnn.com:* http://*.cnn.com:* *.cnn.io:* *.cnn.net:* *.turner.com:* *.turner.io:* *.ugdturner.com:* courageousstudio.com *.vgtf.net:*; script-src 'unsafe-eval' 'unsafe-inline' 'self' *; style-src 'unsafe-inline' 'self' blob: *; child-src 'self' blob: *; frame-src 'self' *; object-src 'self' *; img-src 'self' data: blob: *; media-src 'self' data: blob: *; font-src 'self' data: *; connect-src 'self' data: *; frame-ancestors 'self' https://*.cnn.com:* http://*.cnn.com https://*.cnn.io:* http://*.cnn.io:* *.turner.com:* courageousstudio.com;
  - x-content-type-options: nosniff
  - x-content-hub: build-env=prod; unique-deployment-key=rn1016cw; build-version=v5.14.7-rc1-0-g957f12dfff; build-commit-hash=957f12dfffdedca16f9fcb46f2ec309ae775831e
  - x-xss-protection: 1; mode=block
  - Content-Encoding: gzip
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:23:07 GMT
  - Via: 1.1 varnish
  - Age: 1071
  - set-cookie: SecGpc=0; Domain=.cnn.com; Path=/; SameSite=None; Secure, countryCode=US; Domain=.cnn.com; Path=/; SameSite=None; Secure, stateCode=VA; Domain=.cnn.com; Path=/; SameSite=None; Secure, geoData=norfolk|VA|23513|US|NA|-400|broadband|36.890|-76.240|544; Domain=.cnn.com; Path=/; SameSite=None; Secure, FastAB=0=2509,1=3169,2=4194,3=9646,4=7289,5=2318,6=3327,7=9021,8=4594,9=0083,10=5000,11=0788,12=8274,13=7308,14=7718,15=2398,16=9078,17=0145,18=5631,19=9070; Domain=.cnn.com; Path=/; Expires=Sat, 18 Oct 2025 06:23:07 GMT; SameSite=Lax, wbdFch=36a3dc75f37def504e926e6070be1ed2f9d81261; Domain=www.cnn.com; Path=/; Max-Age=30; SameSite=None; Secure
  - X-Served-By: cache-iad-kcgs7200113-IAD, cache-iad-kjyo7100043-IAD
  - X-Cache: MISS, HIT
  - X-Cache-Hits: 0, 1
  - X-Timer: S1729232587.353702,VS0,VE4
  - Vary: Accept-Encoding,Accept-Language
  - alt-svc: h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400
- **Content Snippet (first 500 characters):**
```
  <!DOCTYPE html>
<html lang="en" data-uri="cms.cnn.com/_pages/clg34ol9u000047nodabud1o2@published" data-layout-uri="cms.cnn.com/_layouts/layout-homepage/instances/homepage-domestic@published" >
  <head><style>body,h1,h2,h3,h4,h5{font-family:cnn_sans_display,helveticaneue,Helvetica,Arial,Utkal,sans-serif}:root{--base-space-48:48px;--base-font-letter-spacing-100:1px;--base-size-36:36px;--base-color-transparent-black-20:#0c0c0c33;--base-font-text-transform-uppercase:uppercase;--base-font-text-deco
```

---
### URL: http://cointernet.com.co
- **Final URL:** https://www.cointernet.com.co/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:23:07 GMT
  - Content-Type: text/html; charset=utf-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Server: nginx/1.20.1
  - Vary: RSC, Next-Router-State-Tree, Next-Router-Prefetch, Accept-Encoding
  - x-nextjs-cache: HIT
  - X-Powered-By: Next.js
  - Cache-Control: s-maxage=31536000, stale-while-revalidate
  - ETag: "sx9t0m5p6llak"
  - Content-Encoding: gzip
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: no-referrer
  - Permissions-Policy: geolocation=(),midi=(),sync-xhr=(),microphone=(),camera=(),magnetometer=(),gyroscope=(),fullscreen=(self),payment=()
  - Content-Security-Policy: default-src *; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'; img-src * blob: data: 'unsafe-inline';connect-src * 'unsafe-inline'; frame-src *
  - X-XSS-Protection: 1; mode=block
  - Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="preload" as="image" href="/images/ui/home-arrow-down.png"/><link rel="preload" as="image" href="/images/ui/ind-search.png"/><link rel="preload" as="image" href="/images/ui/ind-compra.png"/><link rel="preload" as="image" href="/images/ui/ind-comm.png"/><link rel="preload" as="image" href="/images/ui/ind-icon-globehand.png"/><link rel="preload" as="image" href
```

---
### URL: http://com.com
- **Final URL:** http://com.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:23:08 GMT
  - Content-Type: text/html; charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - set-cookie: XYZSRV=wtc2-a-2; path=/
  - CF-Cache-Status: DYNAMIC
  - Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=dmS7yXGwMLdlA%2FPXGSupTAcIrQFDQJnrXMNi72hREueoXc58RxDorYko83A39aS1gAXwjC33u0wuw6mz5r9jH7fo20RMQHNHvhCILlHIbNCvlXVdUI6uxgzkyO4Qj8nmv%2FXWDKU%3D"}],"group":"cf-nel","max_age":604800}
  - NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
  - Server: cloudflare
  - CF-RAY: 8d46701afcc258a6-IAD
  - Content-Encoding: gzip
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>com.com - owned and operated since 1995</title>
	<style>
		/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progr
```

---
### URL: http://cpanel.net
- **Final URL:** https://cpanel.net/
- **Status Code:** 200
- **Headers:**
  - Connection: Keep-Alive
  - Keep-Alive: timeout=5, max=100
  - cache-control: public, max-age=300
  - expires: Fri, 18 Oct 2024 06:28:08 GMT
  - content-type: text/html
  - last-modified: Thu, 17 Oct 2024 14:06:08 GMT
  - accept-ranges: bytes
  - content-encoding: gzip
  - vary: Accept-Encoding,User-Agent,User-Agent
  - content-length: 11794
  - date: Fri, 18 Oct 2024 06:23:08 GMT
  - server: LiteSpeed
  - x-content-type-options: nosniff
  - x-xss-protection: 1; mode=block
  - x-frame-options: SAMEORIGIN
  - strict-transport-security: max-age=31536000
  - alt-svc: h3=":443"; ma=2592000, h3-29=":443"; ma=2592000, h3-Q050=":443"; ma=2592000, h3-Q046=":443"; ma=2592000, h3-Q043=":443"; ma=2592000, quic=":443"; ma=2592000; v="43,46"
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<link href="https://cpanel.net/wp-content/themes/cPbase/assets/img/favicon.ico?v=1.0.2" rel="shortcut icon">
    <link href="https://cpanel.net/wp-content/themes/cPbase/assets/img/apple-touch-icon.png" rel="apple-touch-icon-precomposed">


	<!-- CSS -->
    <!-- <link rel="stylesheet" href="https://use.font
```

---
### URL: http://discord.com
- **Final URL:** https://discord.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:23:08 GMT
  - Content-Type: text/html
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - CF-Ray: 8d46701f6b534fe5-ORF
  - CF-Cache-Status: HIT
  - Cache-Control: no-cache
  - Last-Modified: Fri, 18 Oct 2024 06:17:54 GMT
  - Set-Cookie: __dcfduid=715b1c708d1911efa58d6735bfb2d02a; Expires=Wed, 17 Oct 2029 06:23:08 GMT; Max-Age=157680000; Path=/; Secure; HttpOnly; SameSite=Lax, __sdcfduid=715b1c718d1911efa58d6735bfb2d02a3ebc6cd41c3f39ed5818787751afa325641bd9759d5de3397642f32399e1a279; Expires=Wed, 17 Oct 2029 06:23:08 GMT; Max-Age=157680000; Path=/; Secure; HttpOnly; SameSite=Lax
  - Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  - Vary: Accept-Encoding
  - Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'nonce-MTQ4LDI1NCw3OCwxMzAsMTE4LDIwMiw0NywyMzg=' https://discord.com https://www.googletagmanager.com https://connect.facebook.net https://www.google-analytics.com https://ssl.google-analytics.com https://www.gstatic.com/recaptcha/ https://www.google.com/recaptcha/ https://recaptcha.net/recaptcha/ https://hcaptcha.com https://*.hcaptcha.com https://s.ytimg.com/yts/jsbin/ https://www.youtube.com/iframe_api https://www.youtube.com/s/player/ https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location https://script.crazyegg.com https://*.website-files.com https://uploads-ssl.webflow.com https://global.localizecdn.com https://cdn.localizeapi.com https://d3e54v103j8qbb.cloudfront.net https://gist.github.com https://unpkg.com/@splinetool/runtime/build/runtime.js https://*.twitter.com https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js https://boards-api.greenhouse.io https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js https://cdn.finsweet.com/files/fscalendar/calendar-invite-v1.0.min.js 'sha256-mjdgHR9aXy-6OwAGlNS_XgNcYG1Uhd2U4pl8vi7-XCY=' 'sha256-gqG2LEZaHDwOL3S_CXJTuk_f3LimTEyruhOc_U0_QUY=' 'sha256-y0oGiuXZdmX7xRABTnY5cbHkfghDqbfX6JoerXLgVJc=' 'sha256-gBzDBwsujjXjXk6GLgdSlLIrvt5h0s3F_qF7Qt8TYwY=' 'sha256-TrY3AqlyKfZdsI3LYsy6u8GAhckLEXeyLcFK2gOe18U=' 'sha256-lVOL-gH47X0Li5QriWNZ69Hcr-71DsXFvGmQxN9TpBw=' 'sha256-j11ZNhk91nmUjPCBAIRcvJeEgnkbdJ9qNqoEMekilec=' 'sha256-1sQ9sTbc6Lumd2Frwf7IBwGG02gPTreTI8QBBW5kibM=' 'sha256-uh1p-Vy3_Cn66Ugk4Hak-gGr2Udg7yiI_5u5E_BdCRM=' 'sha256-7JHgDILwD7i_kvnHwJFF5WsHHmIc98tkBqDqbv47iFE=' 'sha256-KvstP_RIj6GGaE25Mqo-kIO0_WVEls1n5tnNhm8zmPA=' 'sha256-6xIDOlx5P0LKHv8fkot5ULOnB8ySdhjJi5r_ZP5EDPY=' 'sha256-jY_7jWrddtNUb-Y4CFKWaH-R2lrqgm_LAX72E8SLqKw=' 'sha256-MdICB9cW7ILT3ZeSxhN2YlpFxEsn5WHr03Ix-WVpHsw=' 'sha256-fUfByJGhChEFu7PE5HJfFwiYKySnP1H0iXvAxkauLNU=' 'sha256-xjkCDxBOM2TlIn5DpGQM4aJldb4AiHMKlRjfW46l-x0=' 'sha256-VOPfGBY-XgTDMwhG41S5eZyMKlu3gN60suwCPDWZ8MY=' 'sha256-tVeTMYknRG_IAdCHRGlDd9S2bX2_rX0e4HpaP9lgKWY=' 'sha256-kprfDg8ElCpUCFQAX5shnAPf3i59vVTSy02AjZXV3k0=' 'sha256-llLws8TR-U3nNRCIvJNVc-SGscqwyeO1IPgpbnWuZdc=' 'sha256-h9lm4cvrD7egZu1GTAE1h2IDy1K4fXgD-q_O7aEosuw=' 'sha256-_cdQbTQzcfSt2_aCceUvkUmLh1WMdvlKbi1BBG7u8Jg=' 'sha256-U0jHWhsvIpjnwYKeJS_-2pe9ROsYnck5ZB2aXNyKWq8=' 'sha256-rB4G_-e_bAPU7rKI_9HC1lBZ0XEa_nHDH6hXFz4GIh4=' 'sha256-N02bP-slnHB-OYEN6imRqCHcHLN5DvBouRmyO2qcQYU=' 'sha256-QHiY6i8ql9SJTaFXzUhm08ZWuNz0QarKruf0Omd9-OQ=' 'sha256-s4OBHcHJnkGxjEyNJhU5BQt4qlt6MH07rG/j/hFOUnE=' 'sha256-s4OBHcHJnkGxjEyNJhU5BQt4qlt6MH07rG_j_hFOUnE=' 'sha256-mjdgHR9aXy+6OwAGlNS/XgNcYG1Uhd2U4pl8vi7+XCY=' 'sha256-jY/7jWrddtNUb+Y4CFKWaH+R2lrqgm/LAX72E8SLqKw=' 'sha256-lVOL+gH47X0Li5QriWNZ69Hcr+71DsXFvGmQxN9TpBw=' 'sha256-/cdQbTQzcfSt2/aCceUvkUmLh1WMdvlKbi1BBG7u8Jg=' 'sha256-N02bP+slnHB+OYEN6imRqCHcHLN5DvBouRmyO2qcQYU=' 'sha256-gqG2LEZaHDwOL3S/CXJTuk/f3LimTEyruhOc/U0/QUY=' 'sha256-llLws8TR+U3nNRCIvJNVc+SGscqwyeO1IPgpbnWuZdc=' 'sha256-gBzDBwsujjXjXk6GLgdSlLIrvt5h0s3F/qF7Qt8TYwY=' 'sha256-6xIDOlx5P0LKHv8fkot5ULOnB8ySdhjJi5r/ZP5EDPY=' 'sha256-7JHgDILwD7i/kvnHwJFF5WsHHmIc98tkBqDqbv47iFE=' 'sha256-VOPfGBY+XgTDMwhG41S5eZyMKlu3gN60suwCPDWZ8MY='; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.hcaptcha.com https://hcaptcha.com https://*.website-files.com https://uploads-ssl.webflow.com https://*.githubassets.com https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css; img-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.facebook.com https://cdn.discordapp.com https://hackerone-api.discord.workers.dev/user-avatars/ https://safety.discord.com https://discordmoderatoracademy.zendesk.com https://assets-global.website-files.com data: https://*.website-files.com https://uploads-ssl.webflow.com https://global.localizecdn.com https://cdn.localizeapi.com https://*.ytimg.com https://uploads-ssl.webflow.com; font-src 'self' https://fonts.gstatic.com https://fonts.gstatic.com https://*.website-files.com https://uploads-ssl.webflow.com; connect-src 'self' https://discordapp.com https://discord.com https://connect.facebook.net https://api.greenhouse.io https://api.github.com https://sentry.io https://www.google-analytics.com https://hackerone-api.discord.workers.dev https://*.hcaptcha.com https://hcaptcha.com https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location ws://127.0.0.1:* http://127.0.0.1:* https://global.localizecdn.com https://cdn.localizeapi.com https://*.website-files.com https://uploads-ssl.webflow.com https://webflow.com/api/ https://script.crazyegg.com https://assets-tracking.crazyegg.com https://pagestates-tracking.crazyegg.com https://tracking.crazyegg.com; media-src 'self' https://cdn.discordapp.com/assets/ https://cdn.discordapp.com/promotions/premium-marketing/ https://*.website-files.com https://uploads-ssl.webflow.com; frame-src https://discordapp.com/domain-migration https://www.google.com/recaptcha/ https://recaptcha.net/recaptcha/ https://*.hcaptcha.com https://hcaptcha.com https://www.youtube.com/embed/ https://hackerone.com/631fba12-9388-43c3-8b48-348f11a883c0/ https://10851314.fls.doubleclick.net/ https://*.twitter.com https://*.vimeo.com;
  - Permissions-Policy: interest-cohort=()
  - surrogate-control: max-age=2147483647
  - surrogate-key: prod-wf1.discord.com 6257adef93867e50d84d30e2 pageId:6661f9f5d68f517d666be828
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - X-XSS-Protection: 1; mode=block
  - Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=EF9Zpb8gxBn9NtnTjjOgXvEvJSjHmKigk4fxN9y9rU9pRs%2Ba9wwolkFSHXIhOAOvDx9OMC9uMqyNvxYF8CwkCsGGcByjj9EH4lRj47SPO3anWFLqQuvACxFXslRQ"}],"group":"cf-nel","max_age":604800}
  - NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
  - Server: cloudflare
  - Content-Encoding: gzip
  - alt-svc: h3=":443"; ma=86400
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><!-- Last Published: Fri Oct 18 2024 06:15:59 GMT+0000 (Coordinated Universal Time) --><html data-wf-domain="prod-wf1.discord.com" data-wf-page="6661f9f5d68f517d666be828" data-wf-site="6257adef93867e50d84d30e2"><head><meta charset="utf-8"/><title>Discord - Group Chat Thatâs All Fun &amp; Games</title><meta content="Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out." name="des
```

---
### URL: http://disqus.com
- **Final URL:** https://disqus.com/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 1579
  - Server: nginx
  - Content-Type: text/html; charset=utf-8
  - p3p: CP="DSP IDC CUR ADM DELi STP NAV COM UNI INT PHY DEM"
  - Cache-Control: no-cache, private, must-revalidate, s-maxage=60
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block
  - Content-Encoding: gzip
  - Date: Fri, 18 Oct 2024 06:23:08 GMT
  - Age: 13
  - Cross-Origin-Resource-Policy: cross-origin
  - Strict-Transport-Security: max-age=300; includeSubdomains
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>&num;1 in audience engagement and community growth &vert; Disqus</title>

    <meta name="description" content="More publishers trust us to engage, grow, and understand their audiences than any other. Build your on-site community with Disqus.">

    
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:descriptio
```

---
### URL: http://doi.org
- **Final URL:** https://www.doi.org/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html
  - Content-Length: 6951
  - Connection: keep-alive
  - Date: Fri, 18 Oct 2024 06:23:10 GMT
  - Last-Modified: Tue, 17 Sep 2024 17:33:27 GMT
  - ETag: "40ca3249393c605326f122c98984af8a"
  - x-amz-server-side-encryption: AES256
  - x-amz-meta-md5chksum: 40ca3249393c605326f122c98984af8a
  - Content-Encoding: gzip
  - Accept-Ranges: bytes
  - Server: AmazonS3
  - X-Cache: Miss from cloudfront
  - Via: 1.1 6744171422c4a271f6b0fe32071ae980.cloudfront.net (CloudFront)
  - X-Amz-Cf-Pop: IAD55-P8
  - X-Amz-Cf-Id: ecyJhhLPIljxIw0ummsxKQxbDw4L6anjHnMKXY9lQFB7LmZgShCh_A==
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en-us">
<head>
	<meta name="generator" content="Hugo 0.101.0" />
	
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
	<meta name="ahrefs-site-verification" content="a4d19d13d080685e48094a2591188be35d7b5db05918a5eb84828500a14f3c5e">
	
	<title>Home Page</title>
	
	

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
		  rel="stylesheet
```

---
### URL: http://drive.google.com
- **Final URL:** https://workspace.google.com/intl/en-US/products/drive/
- **Status Code:** 200
- **Headers:**
  - Accept-Ranges: bytes
  - Vary: Accept-Encoding
  - Content-Type: text/html
  - Content-Security-Policy: script-src  'nonce-tlzO2g3iHvcklHSn7rEHYA' 'report-sample' 'strict-dynamic' 'unsafe-eval' 'unsafe-hashes' 'unsafe-inline' http: https:; object-src 'none'; report-uri https://csp.withgoogle.com/csp/workspace-web-team; base-uri 'self'
  - Cross-Origin-Resource-Policy: cross-origin
  - Cross-Origin-Opener-Policy-Report-Only: same-origin; report-to="workspace-web-team"
  - Report-To: {"group":"workspace-web-team","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/workspace-web-team"}]}
  - Date: Fri, 18 Oct 2024 06:23:11 GMT
  - Pragma: no-cache
  - Expires: Fri, 01 Jan 1990 00:00:00 GMT
  - Cache-Control: no-cache, must-revalidate
  - Last-Modified: Thu, 17 Oct 2024 19:38:00 GMT
  - Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  - X-Content-Type-Options: nosniff
  - Content-Encoding: gzip
  - Server: sffe
  - X-XSS-Protection: 0
  - Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
  - Transfer-Encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!doctype html>
<html lang="en" dir="ltr" itemscope itemtype="https://schema.org/WebPage">

  <head>
    <meta charset="utf-8" />
    <title>Google Drive: Share Files Online with Secure Cloud Storage | Google Workspace</title>
    <meta name="description" content="Learn about Google Driveâs file sharing platform that provides a personal, secure cloud storage option to share content with other users." />
    <link rel="canonical" href="https://workspace.google.com/products/drive/" />
    <link 
```

---
### URL: http://dropbox.com
- **Final URL:** https://www.dropbox.com/
- **Status Code:** 200
- **Headers:**
  - Content-Security-Policy: font-src https://* data: ; worker-src https://www.dropbox.com/static/serviceworker/ https://www.dropbox.com/encrypted_folder_download/service_worker.js https://www.dropbox.com/service_worker.js blob: ; report-uri https://www.dropbox.com/csp_log?policy_name=metaserver-whitelist ; base-uri 'self' ; connect-src https://* ws://127.0.0.1:*/ws blob: wss://dsimports.dropbox.com/ ; frame-src https://* carousel: dbapi-6: dbapi-7: dbapi-8: dropbox-client: itms-apps: itms-appss: ; frame-ancestors 'self' ; style-src https://* 'unsafe-inline' 'unsafe-eval' ; child-src https://www.dropbox.com/static/serviceworker/ blob: ; media-src https://* blob: ; script-src 'unsafe-eval' 'inline-speculation-rules' https://www.dropbox.com/static/api/ https://www.dropbox.com/pithos/* https://www.dropbox.com/page_success/ https://cfl.dropboxstatic.com/static/ https://www.dropboxstatic.com/static/ https://accounts.google.com/gsi/client https://canny.io/sdk.js https://www.paypal.com/sdk/js 'nonce-lPm9uxRYMsYcEJjcWtiP0zRBmIA=' ; form-action 'self' https://www.dropbox.com/ https://dl-web.dropbox.com/ https://photos.dropbox.com/ https://paper.dropbox.com/ https://showcase.dropbox.com/ https://www.hellofax.com/ https://app.hellofax.com/ https://www.hellosign.com/ https://app.hellosign.com/ https://docsend.com/ https://www.docsend.com/ https://help.dropbox.com/ https://navi.dropbox.jp/ https://a.sprig.com/ https://selfguidedlearning.dropboxbusiness.com/ https://instructorledlearning.dropboxbusiness.com/ https://sales.dropboxbusiness.com/ https://accounts.google.com/ https://api.login.yahoo.com/ https://login.yahoo.com/ https://experience.dropbox.com/ https://pal-test.adyen.com https://2e83413d8036243b-Dropbox-pal-live.adyenpayments.com/ https://onedrive.live.com/picker ; default-src 'none' ; object-src 'self' https://cfl.dropboxstatic.com/static/ https://www.dropboxstatic.com/static/ ; img-src https://* data: blob:, report-uri https://www.dropbox.com/csp_log?policy_name=metaserver-dynamic ; script-src 'unsafe-eval' 'strict-dynamic' 'nonce-lPm9uxRYMsYcEJjcWtiP0zRBmIA=' 'nonce-ktWLUHlLuJHRGwTIBsrefzcvWsU='
  - Content-Type: text/html; charset=utf-8
  - Pragma: no-cache
  - Referrer-Policy: strict-origin-when-cross-origin
  - Set-Cookie: gvc=MzMwMzU1Njk2MTA2MDQ4ODkxMzk3NjY3MzMxMjE5NzgzNDc1Mzky; Path=/; Expires=Wed, 17 Oct 2029 06:23:11 GMT; HttpOnly; Secure; SameSite=None, t=p0Fw1N5dwRxMhHGKj35FS6QC; Path=/; Domain=dropbox.com; Expires=Sat, 18 Oct 2025 06:23:11 GMT; HttpOnly; Secure; SameSite=None, __Host-js_csrf=p0Fw1N5dwRxMhHGKj35FS6QC; Path=/; Expires=Sat, 18 Oct 2025 06:23:11 GMT; Secure; SameSite=None, __Host-ss=yv6m01kxMU; Path=/; Expires=Sat, 18 Oct 2025 06:23:11 GMT; HttpOnly; Secure; SameSite=Strict, locale=en; Path=/; Domain=dropbox.com; Expires=Wed, 17 Oct 2029 06:23:11 GMT
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: SAMEORIGIN
  - X-Permitted-Cross-Domain-Policies: none
  - X-Xss-Protection: 1; mode=block
  - Date: Fri, 18 Oct 2024 06:23:11 GMT
  - Strict-Transport-Security: max-age=31536000; includeSubDomains
  - Server: envoy
  - Cache-Control: no-cache, no-store
  - Content-Encoding: gzip
  - Vary: Accept-Encoding
  - X-Dropbox-Response-Origin: far_remote
  - X-Dropbox-Request-Id: 45436428a9234da39deb9ffc5d28ef62
  - Transfer-Encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html class="maestro global-header" xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head><meta charset="utf-8" />
<meta content="all" name="robots" />
<meta content="width=device-width, initial-scale=1" name="viewport" />
<meta content="Dropbox.com" name="og:title" />
<meta content="Dropbox helps you simplify your workflow. So you can spend more time in your flow." name="og:description" />
<meta content="/" name="og:url" />
<meta content="website" name="og:type" />
<meta content
```

---
### URL: http://ea.com
- **Final URL:** https://www.ea.com/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=UTF-8
  - Last-Modified: Fri, 18 Oct 2024 06:09:25 UTC
  - Content-Encoding: gzip
  - Content-Length: 27202
  - Cache-Control: max-age=139
  - Expires: Fri, 18 Oct 2024 06:25:32 GMT
  - Date: Fri, 18 Oct 2024 06:23:13 GMT
  - Connection: keep-alive
  - Set-Cookie: EDGESCAPE_COUNTRY=US; path=/, EDGESCAPE_REGION=VA; path=/, EDGESCAPE_TIMEZONE=EST; path=/
  - Vary: Accept-Encoding
  - Alt-Svc: h3=":443"; ma=93600
  - X-LDNR-IS-EN-US: yes
  - X-LDNR-ROOT-HL-SET: yes
  - X-L-Path: inert
  - X-Environment-Context: prod
  - X-Application-Context: eacom
  - Content-Security-Policy: frame-ancestors 'self'
  - X-Frame-Options: SAMEORIGIN
  - Strict-Transport-Security: max-age=15768000
- **Content Snippet (first 500 characters):**
```


<!DOCTYPE html>
<html lang="en" dir="ltr" wf-loading>
    <head>
        
    
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="shortcut icon" type="image/png" href="/assets/images/favicon.png">


    <script>
        window.newrelicAttributes = {
            accountId: "1796917",
            trustKey: "1796917",
            agentId: "149134891",
            licenseKey: "f701a6c63c",
            applicationId: "149134891"
        };
    </sc
```

---
### URL: http://elmundo.es
- **Final URL:** https://www.elmundo.es/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 104356
  - Content-Type: text/html; charset=iso-8859-15
  - Content-Encoding: gzip
  - Referrer-Policy: unsafe-url
  - Cache-Control: s-maxage=60
  - x-backend: CONTENT
  - Accept-Ranges: bytes
  - Age: 0
  - Date: Fri, 18 Oct 2024 06:23:34 GMT
  - X-Served-By: cache-ams2100138-AMS, cache-iad-kiad7000113-IAD
  - X-Cache: MISS, MISS
  - X-Cache-Hits: 0, 0
  - X-Timer: S1729232614.053570,VS0,VE100
  - Vary: Accept-Encoding, User-Agent
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="es"><head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-15"/><meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1"/><meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0"><meta name="cXenseParse:une-kicker" content=""/><title data-ue-u="title" data-ue-c="innerHTML">
EL MUNDO - Diario online líder de información en español </title><link rel="preload" href="https://e00.uecdn.es/fonts/Mundo/Mundo-Regular.wof
```

---
### URL: http://espn.com
- **Final URL:** https://www.espn.com/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html;charset=UTF-8
  - Content-Length: 47274
  - Connection: keep-alive
  - Date: Fri, 18 Oct 2024 06:23:34 GMT
  - access-control-allow-origin: *
  - content-security-policy: frame-ancestors  'self' asia.espn.com:* asia.espnqa.com:* *.espn.com:* *.espnqa.com:* *.espnsb.com:* *.espnsb.com *.espn.co.uk *.espndeportes.espn.com *.espn.com.br *.espn.com.mx *.espn.com.ve *.espn.com.ar *.espn.com.co *.espnfc.com.au *.espn.com.au *.espn.in *.espn.com.sg *.espn.cl *.espn.ph *.espn.ph:* *.espn.com.pe *.espn.com.gt *.espn.com.do *.espn.com.ec *.espn.com.uy *.espn.com.pa *.espn.co.cr qa.abcnews.go.com preview.abcnews.go.com abc7ny.com abc7.com *.abcotvssb.com preview.goodmorningamerica.com http://*.espnqa.com:* http://*.espn.com:* *.abcotvssb.com *.abcnews.go.com *.abcnews.go.com:* http://*.abcnews.go.com:* abc30.com abc7news.com abc13.com abc7chicago.com 6abc.com abc11.com *.goodmorningamerica.com qa.abc7.com qa.abc30.com qa.abc7news.com qa.abc13.com qa.abc7chicago.com qa.6abc.com qa.abc7ny.com qa.abc11.com *.abcnews.go.com:* abcnews.go.com qa.secsports.com *.secsports.com https://*.espn.com:* *.espnqa.com:*
  - etag: W/"063682df943a0a4816930e7b556a41d8d86bbfc3"
  - content-encoding: gzip
  - via: 1.1 varnish (Varnish/6.0), 1.1 a20436c6d109fe9002d093f519ad4398.cloudfront.net (CloudFront)
  - vary: Accept-Encoding
  - accept-ranges: bytes
  - set-cookie: edition-view=espn-en-us; path=/; Expires=Fri, 25 Oct 2024 06:23:34 GMT;, country=us; path=/;, connectionspeed=full; path=/; Expires=Fri, 25 Oct 2024 06:23:34 GMT;, edition=espn-en-us; path=/; Expires=Fri, 25 Oct 2024 06:23:34 GMT;, region=ccpa; path=/; Expires=Fri, 25 Oct 2024 06:23:34 GMT;, _dcf=1; path=/; Expires=Fri, 25 Oct 2024 06:23:34 GMT;, SWID=9E7A2AFD-05C4-4E24-CEEF-F91A9FAA394E; path=/; Expires=Tue, 18 Oct 2044 06:23:34 GMT; domain=espn.com;, userab_1=eplus_pw_pre_mobile-55%2Apre-168%2Cespn_app_playlists_fallback-254%2Aplethora-c-978%2Cespn_app_playlists_home-262%2Aplethora-a-1021%2Cespn_app_playlists_home_article-252%2Aplethora-a-966%2Cespn_app_playlists_score-263%2Aplethora-a-1027%2Cespn_my_news_design_a-87%2Amy_news_variation1-308%2Cespn_onefeed_my_news-246%2Aplethora-a-934%2Cespn_watch_breakout_rows-266%2Awatch-breakout-a-1040%2Cespn_watch_for_you-261%2Awatch-fy-a-1016%2Cespn_watch_rfy_latest-260%2Awatch-fy-a-1009%2Cespn_web_standalone_video-113%2Aplethora-a-400%2Cespnplus_paywall_prepurchase-106%2Avariant_a-371%2Cgamecast_video-91%2Agamecast-319%2Cgamecast_video_mlb-124%2Agamecast-439%2Cgamecast_video_nfl-125%2Agamecast-440%2Cweb_index1_hlstack-117%2Agolf_stackb-414%2Cweb_index1_pres-99%2Aenhanced-346; Expires=Fri, 18 Oct 2024 10:23:34 GMT; Domain=www.espn.com; Path=/
  - Cache-Control: max-age=0, must-revalidate
  - X-Cache: Miss from cloudfront
  - X-Amz-Cf-Pop: IAD89-C2
  - X-Amz-Cf-Id: Vod5VAk4eJ6lxQrIIA3X6PBVxieF6ezXpPRVYFqxw8LQxJnG7zo3vQ==
- **Content Snippet (first 500 characters):**
```

	<!DOCTYPE html>
	<html class="no-icon-fonts" lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="referrer" content="origin-when-cross-origin">
<link rel="canonical" href="https://www.espn.com" />
<title>ESPN - Serving Sports Fans. Anytime. Anywhere.</title>
<meta name="description" content="Vi
```

---
### URL: http://feedburner.com
- **Final URL:** http://feedburner.google.com/
- **Status Code:** 200
- **Headers:**
  - Accept-Ranges: bytes
  - Vary: Accept-Encoding
  - Content-Type: text/html
  - Content-Security-Policy: script-src 'nonce-mrrxHfDh80FalZDtUaJoHQ' 'report-sample' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline' http: https:; object-src 'none'; report-uri https://csp.withgoogle.com/csp/pichu-static; base-uri 'none', require-trusted-types-for 'script'; report-uri https://csp.withgoogle.com/csp/pichu-static
  - Cross-Origin-Opener-Policy: same-origin; report-to="pichu-static"
  - Report-To: {"group":"pichu-static","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/pichu-static"}]}
  - X-Frame-Options: deny
  - Content-Length: 606
  - Date: Fri, 18 Oct 2024 06:23:34 GMT
  - Pragma: no-cache
  - Expires: Fri, 01 Jan 1990 00:00:00 GMT
  - Cache-Control: no-cache, must-revalidate
  - Last-Modified: Tue, 17 Sep 2024 03:08:00 GMT
  - X-Content-Type-Options: nosniff
  - Content-Encoding: gzip
  - Server: sffe
  - X-XSS-Protection: 0
- **Content Snippet (first 500 characters):**
```
<!doctype html><html lang="en-US"><head><title>Feedburner</title><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Google+Sans:300,400,500|Oswald:300,400,500|Material+Icons" nonce="mrrxHfDh80FalZDtUaJoHQ"><link rel="icon" href="https://feedburner.google.com/fb/images/favicon.ico"><base href="/" target="_blank"><meta name="viewport" content="width=device-width, initial-scale=1"><script nonce="mrrxHfDh80FalZDtUaJoHQ">window.gaiaBase = "https:\/\/accounts.googl
```

---
### URL: http://forms.gle
- **Final URL:** https://forms.gle/
- **Status Code:** 400
- **Headers:**
  - Connection: keep-alive
  - Accept-Ch: Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version
  - Cache-Control: no-cache, no-store, max-age=0, must-revalidate
  - Content-Security-Policy: script-src 'report-sample' 'nonce-GQvzsDNZMwmzFWqHi53Rng' 'unsafe-inline';object-src 'none';base-uri 'self';report-uri /_/DurableDeepLinkUi/cspreport;worker-src 'self',script-src 'unsafe-inline' 'unsafe-eval' blob: data: 'self' https://apis.google.com https://ssl.gstatic.com https://www.google.com https://www.googletagmanager.com https://www.gstatic.com https://www.google-analytics.com https://www.googleapis.com/appsmarket/v2/installedApps/;report-uri /_/DurableDeepLinkUi/cspreport/allowlist,require-trusted-types-for 'script';report-uri /_/DurableDeepLinkUi/cspreport
  - Content-Type: text/html; charset=utf-8
  - Cross-Origin-Opener-Policy: unsafe-none
  - Expires: Mon, 01 Jan 1990 00:00:00 GMT
  - Permissions-Policy: ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*
  - Pragma: no-cache
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:23:35 GMT
  - X-Served-By: cache-iad-kiad7000095-IAD
  - X-Cache: MISS
  - X-Cache-Hits: 0
  - X-Timer: S1729232615.100416,VS0,VE67
  - Vary: Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site, x-fh-requested-host, accept-encoding
  - alt-svc: h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400
  - transfer-encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!doctype html><head><title>Invalid Dynamic Link</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="color: rgba(0,0,0,0.87); font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif; font-size: 16px; line-height: 24px; margin-top: 48px; margin: 0 auto; max-width: 616px; padding: 0 16px;"><div style="border-bottom: 1px solid rgba(0,0,0,0.1); font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif; font-size: 32px; font-weight: 350; line-height: 36p
```

---
### URL: http://g.co
- **Final URL:** https://g.co/
- **Status Code:** 200
- **Headers:**
  - Accept-Ranges: bytes
  - Vary: Accept-Encoding
  - Content-Type: text/html
  - Content-Security-Policy-Report-Only: script-src 'nonce-J8UA49-gfAn81k3YafHkuw' 'report-sample' 'strict-dynamic' 'unsafe-eval' 'unsafe-inline' http: https:; object-src 'none'; report-uri https://csp.withgoogle.com/csp/static-on-bigtable; base-uri 'none'
  - Cross-Origin-Resource-Policy: cross-origin
  - Cross-Origin-Opener-Policy-Report-Only: same-origin; report-to="static-on-bigtable"
  - Report-To: {"group":"static-on-bigtable","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/static-on-bigtable"}]}
  - Date: Fri, 18 Oct 2024 06:23:35 GMT
  - Pragma: no-cache
  - Expires: Fri, 01 Jan 1990 00:00:00 GMT
  - Cache-Control: no-cache, must-revalidate
  - Last-Modified: Tue, 17 Sep 2024 03:08:00 GMT
  - Strict-Transport-Security: max-age=31536000; preload
  - X-Content-Type-Options: nosniff
  - Content-Encoding: gzip
  - Server: sffe
  - X-XSS-Protection: 0
  - Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
  - Transfer-Encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html class="google mmfb" lang="en">
  <head>

    <script nonce="J8UA49-gfAn81k3YafHkuw">
(function(H){H.className=H.className.replace(/\bgoogle\b/,'google-js')})(document.documentElement)
    </script>
    <meta charset="utf-8">
    <meta content="initial-scale=1, minimum-scale=1, width=device-width" name="viewport">
    <title>
      g.co
    </title>
    <script src="//www.google.com/js/gweb/analytics/autotrack.js" nonce="J8UA49-gfAn81k3YafHkuw">
</script>
    <script nonce="
```

---
### URL: http://get.google.com
- **Final URL:** https://www.google.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:23:35 GMT
  - Expires: -1
  - Cache-Control: private, max-age=0
  - Content-Type: text/html; charset=UTF-8
  - Content-Security-Policy-Report-Only: object-src 'none';base-uri 'self';script-src 'nonce-RAMMw8f5EhHxC-I9byLtrA' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp
  - Cross-Origin-Opener-Policy: same-origin-allow-popups; report-to="gws"
  - Report-To: {"group":"gws","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/gws/other"}]}
  - Accept-CH: Sec-CH-Prefers-Color-Scheme, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version, Sec-CH-UA-Arch, Sec-CH-UA-Model, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64
  - Permissions-Policy: unload=()
  - P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
  - Content-Encoding: gzip
  - Server: gws
  - X-XSS-Protection: 0
  - X-Frame-Options: SAMEORIGIN
  - Set-Cookie: AEC=AVYB7cqYaEGh8-N4S-4GXk15_g73lqk1kHcymptZ3T-N65yJyvG-LAK6Sks; expires=Wed, 16-Apr-2025 06:23:35 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax, NID=518=oKZg_d4T333oS2dV2at5ZYbmEcgwtB470_ip1JeQxiFceFPKX87QLf6RtE7g0WvxwNc7UDcpKHeuy4zod4iBi4Xjbf2fjDd1ceC1P2CTkR4r6sbBvl5FSTAfnbmst9QlUZ1mlJAtymv-DQKDTS51-ytK7XhxZlF3bUVUcLmWzOHDGKa_5If_JXTO84ryTyknBayf; expires=Sat, 19-Apr-2025 06:23:35 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none
  - Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
  - Transfer-Encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="en"><head><meta charset="UTF-8"><meta content="origin" name="referrer"><meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image"><title>Google</title><script nonce="RAMMw8f5EhHxC-I9byLtrA">window._hst=Date.now();performance&&performance.mark&&performance.mark("SearchHeadStart");</script><script nonce="RAMMw8f5EhHxC-I9byLtrA">(function(){var _g={kEI:'5_4RZ_WkKrjQ5NoPqsPjgAU',kEXPI:'31'
```

---
### URL: http://gfycat.com
- **Final URL:** None
- **Status Code:** None
- **Headers:**

---
### URL: http://globo.com
- **Final URL:** https://www.globo.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:23:37 GMT
  - Content-Type: text/html; charset=UTF-8
  - Content-Length: 355527
  - Connection: keep-alive
  - Cache-Control: max-age=10
  - Show-Page-Version: 0
  - X-Request-Id: 6665af9e-666e-48ae-a6c5-3fe913e848e3
  - X-Mobile: desktop
  - X-Served-From: Router Home PROD, BS Show Services
  - Content-Security-Policy: upgrade-insecure-requests
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block
  - Expires: Fri, 18 Oct 2024 06:23:39 GMT
  - Content-Encoding: gzip
  - X-Location-Rule: location-barra
  - Link: <https://s2-home-globo.glbimg.com>; rel="preconnect", <https://s3.glbimg.com>; rel="preconnect"
  - Age: 7
  - Vary: X-Forwarded-Proto, User-Agent, Accept-Encoding
  - X-Bip: 750997699 asra03mp05lx01ca03.globoi.com
  - Via: 2.0 CachOS
  - Accept-Ranges: bytes
  - X-Thanos: 0AB1D108
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="pt-BR"> <head><title>globo.com - Absolutamente tudo sobre notícias, esportes e entretenimento</title><meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="canonical" href="https://www.globo.com/"><meta name="title" content="globo.com - Absolutamente tudo sobre notícias, esportes e entretenimento"><meta name="description" content="globo.com - Absolutamente tudo s
```

---
### URL: http://godaddy.com
- **Final URL:** https://www.godaddy.com/
- **Status Code:** 403
- **Headers:**
  - Server: AkamaiGHost
  - Mime-Version: 1.0
  - Content-Type: text/html
  - Content-Length: 369
  - Expires: Fri, 18 Oct 2024 06:23:38 GMT
  - Cache-Control: max-age=0, no-cache, no-store
  - Pragma: no-cache
  - Date: Fri, 18 Oct 2024 06:23:38 GMT
  - Connection: close
  - Set-Cookie: market=en-US; expires=Sat, 18-Oct-2025 06:23:38 GMT; path=/; domain=.godaddy.com, currency=USD; expires=Sat, 18-Oct-2025 06:23:38 GMT; path=/; domain=.godaddy.com, akaas_godaddy-com-wildcard=2147483647~rv=2~id=17def26d3ab1658d38b2599ebaa54fb1~rn=; path=/; Secure; SameSite=None
  - X-Frame-Options: DENY
  - X-ORIGIN-TAG: frontdoor
  - X-ARC: 2, 6a
  - Server-Timing: ak_p; desc="1729232618345_389979083_2669955098_19_23387_37_38_-";dur=1
- **Content Snippet (first 500 characters):**
```
<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>
 
You don't have permission to access "http&#58;&#47;&#47;www&#46;godaddy&#46;com&#47;" on this server.<P>
Reference&#32;&#35;18&#46;cb9b3e17&#46;1729232618&#46;9f24481a
<P>https&#58;&#47;&#47;errors&#46;edgesuite&#46;net&#47;18&#46;cb9b3e17&#46;1729232618&#46;9f24481a</P>
</BODY>
</HTML>

```

---
### URL: http://gofundme.com
- **Final URL:** https://www.gofundme.com/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=utf-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Date: Fri, 18 Oct 2024 06:22:27 GMT
  - Server: nginx
  - Set-Cookie: visitor={"locale":"en_US","shimLocale":"en_US","country":"US"}; path=/; domain=.gofundme.com
  - Cache-Control: max-age=120, s-maxage=120, stale-while-revalidate=3600, stale-if-error=86400
  - ETag: "gir88xf5s5xx5h"
  - Content-Encoding: gzip
  - Content-Security-Policy-Report-Only: frame-ancestors gofundme.com *.gofundme.com *.hopin.com;
  - Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  - Vary: Accept-Encoding
  - X-Cache: Hit from cloudfront
  - Via: 1.1 c09e1ee371c0b677b7724c2a52462928.cloudfront.net (CloudFront)
  - X-Amz-Cf-Pop: IAD61-P4
  - X-Amz-Cf-Id: jF6ZHPeT4Ng0JOhuFy5sbfxpiLupIyNV67r0q53Ln9FGddXCTobtFA==
  - Age: 71
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="en-US"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/><title>GoFundMe | The #1 Crowdfunding and Fundraising Platform</title><meta name="description" content="Start your fundraiser in minutes with tools to help you succeed. GoFundMe is the global leader in crowdfunding, trusted by 100+ million people."/><link rel="alternate" href="ios-app://id734130700/gofundme/"/><style>body {height:auto !important
```

---
### URL: http://goo.ne.jp
- **Final URL:** https://www.goo.ne.jp
- **Status Code:** 200
- **Headers:**
  - Cache-Control: must-revalidate, no-cache, no-store, post-check=0, pre-check=0, private
  - Content-Encoding: gzip
  - Content-Type: text/html; charset=UTF-8
  - Date: Fri, 18 Oct 2024 06:23:41 GMT
  - Set-Cookie: XSRF-TOKEN=eyJpdiI6InpIbzVWSm9sMXhBWS9YZXNJVFp0TWc9PSIsInZhbHVlIjoiNnArREQrWVNLc3o1OTd2SkpCeklyYnkzVEdlMDNqMVZQM2pzRW5oU1EzVTE1K1VNZm5mMDV6d2VXSnFqeGwvcyIsIm1hYyI6ImQwNTEwMmVkMzdjNTlmYTczOTk5NzkzNzQyNjE4YjU0NThkODUzMTFhNzZiMWExMDUzMTVmNTExNDBiZTljMWQiLCJ0YWciOiIifQ%3D%3D; expires=Fri, 18 Oct 2024 08:23:41 GMT; Max-Age=7200; path=/; secure, top_session=eyJpdiI6IklWVlVDUCswZklOUGIyZVhTdm9QN3c9PSIsInZhbHVlIjoiWmh1REdQOGNzVXBOT1hIdnJGSjE3V0ZJMGtTWHFFeVFkUUw1MTBiWkpsWU5jWW1zcDh5dVdyTzMxZUVCaE9KWiIsIm1hYyI6IjBkNjAwYmViZjYxMTVmNjEzOTRkMmM5NWM5NmYwNTE2NzVjOGI0NmNlNDM0ODFiMzJmMTE3MDc2ZThmMzVjYzgiLCJ0YWciOiIifQ%3D%3D; expires=Fri, 18 Oct 2024 08:23:41 GMT; Max-Age=7200; path=/; secure; httponly, gootop=NE:0&SJA:0_1535601469&CST:7e27479ee567b420743adbcf935eacca&SR:&PCE:1&SL:2_3_4_53_11_8_16_6_27; expires=Thu, 18 Oct 2040 06:23:40 GMT; Max-Age=504921599; path=/; secure, gootopstay=eyJpdiI6InIvcVdvL3FMT08rMkQ1OGdCd3h1bFE9PSIsInZhbHVlIjoiUjdvWG5nZTVpNGRydkdPVXlXUkFHdz09IiwibWFjIjoiNTU3YTA5MDU5M2E4MzM3NGNiNWQzNjQ1ZjFkMTBhMTY3YjliNzZjYjJlNDE1NzRlZGJjOTBiNTUzMDAxNjAxOCIsInRhZyI6IiJ9; expires=Sat, 18 Oct 2025 06:23:40 GMT; Max-Age=31535999; path=/; secure, mental=eyJpdiI6IkpDdEpsN0d4RWFCa3pyZUpoSEpTRGc9PSIsInZhbHVlIjoiNWdHUVUzaFM3NVQrK2FEbjk1NnZoZz09IiwibWFjIjoiYmY4YmU1NTdiNzQyY2VlYzE4MmQxZDg0NmMzNGM1ZTcxODZiMjcwYTkyNzI2ODQ1YzcyMzg3YzIwMTZkOTQ4ZiIsInRhZyI6IiJ9; expires=Sat, 19 Oct 2024 06:23:41 GMT; Max-Age=86400; path=/; secure; httponly, gooproperty=AR%3D%26HO%3D1%26MD%3D%26TH%3DM13%26HH%3D%26WEATHER%3D; expires=Sun, 18 Oct 2026 06:23:40 GMT; Max-Age=63071999; path=/; domain=.goo.ne.jp; secure, searchstate=deleted; expires=Thu, 19 Oct 2023 06:23:40 GMT; Max-Age=0; path=/; domain=goo.ne.jp; secure; httponly, TS01ea13e3=016952d21ee5e39e8c86d3969165c0df27d003979b1292be3fc64c381fb45e1ae12ef068af45aaf384e0cc61756610ff664102d438; Path=/, TS011bfe84=016952d21ee5e39e8c86d3969165c0df27d003979b1292be3fc64c381fb45e1ae12ef068af45aaf384e0cc61756610ff664102d438; path=/; domain=.goo.ne.jp, TS011667c7=016952d21ee5e39e8c86d3969165c0df27d003979b1292be3fc64c381fb45e1ae12ef068af45aaf384e0cc61756610ff664102d438; path=/; domain=goo.ne.jp
  - Vary: Accept-Encoding
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: SAMEORIGIN
  - X-Vcap-Request-Id: 72f611ec-2ffc-4ed4-490b-96e61783c941
  - X-Xss-Protection: 1; mode=block
  - Transfer-Encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE HTML>

<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="referrer" content="unsafe-url">
<!--[if !IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->

<title>goo</title>
<meta name="csrf-token" content="FmDaodVrya7ErXbF2zP9pqN6FeUJv9sCwvvATsTy">
<meta name="keywords" content="goo,グー,ぐー,ポータル,portal,検索">
<meta name="description" content="NTTドコモが運営する安心・安全のポータルサイト。使えば使うほど、あなたの興味・関心、趣味・嗜好を学習し、限られた時間で効率よく「あなた専用」のポータルサイトとして必要な情報を収集することができます。">
<meta property="og:tit
```

---
### URL: http://goodreads.com
- **Final URL:** https://www.goodreads.com/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=utf-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Server: Server
  - Date: Fri, 18 Oct 2024 06:23:43 GMT
  - x-amz-rid: 3EK96YAV536V3PNJBTX3
  - Set-Cookie: ccsid=277-6685854-4798610; path=/; expires=Tue, 18 Oct 2044 06:23:42 -0000, locale=en; path=/, _session_id2=7968c90e69691655342b1ed2b84eb896; path=/; expires=Fri, 18 Oct 2024 12:23:43 -0000; HttpOnly
  - X-Frame-Options: SAMEORIGIN
  - X-XSS-Protection: 1; mode=block
  - X-Content-Type-Options: nosniff, nosniff
  - Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  - ETag: W/"b84344059e30389213b127573b74523b"
  - Cache-Control: max-age=0, private, must-revalidate
  - X-Request-Id: 3EK96YAV536V3PNJBTX3
  - X-Runtime: 0.587467
  - Content-Encoding: gzip
  - Vary: User-Agent,Content-Type,Accept-Encoding,User-Agent
  - X-Cache: Miss from cloudfront
  - Via: 1.1 03c28758fe0abb70088fb45c6855d854.cloudfront.net (CloudFront)
  - X-Amz-Cf-Pop: IAD61-P2
  - X-Amz-Cf-Id: gApLCO0_aBr0eUad4apoHphOXkHmIzVzUaSTPkRr8pQ_jXgABoj7Uw==
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html class="desktop withSiteHeaderTopFullImage
">
<head>
  <title>Goodreads | Meet your next favorite book</title>

<meta content='Find and read more books you’ll love, and keep track of the books you want to read. Be part of the world’s largest community of book lovers on Goodreads.' name='description'>
<meta content='telephone=no' name='format-detection'>
<link href='https://www.goodreads.com/' rel='canonical'>
  <meta property="og:url" content="https://www.goodreads.com/"/>
 
```

---
### URL: http://google.ru
- **Final URL:** https://www.google.ru/?gws_rd=ssl
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:23:43 GMT
  - Expires: -1
  - Cache-Control: private, max-age=0
  - Content-Type: text/html; charset=UTF-8
  - Content-Security-Policy-Report-Only: object-src 'none';base-uri 'self';script-src 'nonce-JWCIIrm4C-HLDejv8QnwXA' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp
  - Cross-Origin-Opener-Policy: same-origin-allow-popups; report-to="gws"
  - Report-To: {"group":"gws","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/gws/other"}]}
  - Accept-CH: Sec-CH-Prefers-Color-Scheme, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version, Sec-CH-UA-Arch, Sec-CH-UA-Model, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64
  - Permissions-Policy: unload=()
  - P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
  - Content-Encoding: gzip
  - Server: gws
  - X-XSS-Protection: 0
  - X-Frame-Options: SAMEORIGIN
  - Set-Cookie: NID=518=mfpkpnE093U3TGltCH3IEcIIcFeBBEIiW8cGOjTGC917e3iqdZI0uc9jO1ZLgnZL3OswmHbz6hoH853baSLLp6UBwpr-s5o7dHGkw-ETks6F3MMZXGfEIaHyUOs3tewqrRHaTE-OQnuLdLrY1w2fi7aQ8qS0StjXQgZFCJ55DNnBoS8fehi8SKSY6dfUFagTAJLI; expires=Sat, 19-Apr-2025 06:23:43 GMT; path=/; domain=.google.ru; Secure; HttpOnly; SameSite=none
  - Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
  - Transfer-Encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="en"><head><meta charset="UTF-8"><meta content="origin" name="referrer"><meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image"><title>Google</title><script nonce="JWCIIrm4C-HLDejv8QnwXA">window._hst=Date.now();performance&&performance.mark&&performance.mark("SearchHeadStart");</script><script nonce="JWCIIrm4C-HLDejv8QnwXA">(function(){var _g={kEI:'7_4RZ-aDJM6o5NoPyMbSkQg',kEXPI:'31'
```

---
### URL: http://gravatar.com
- **Final URL:** https://gravatar.com/
- **Status Code:** 200
- **Headers:**
  - Server: nginx
  - Date: Fri, 18 Oct 2024 06:23:44 GMT
  - Content-Type: text/html; charset=utf-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Vary: Accept-Encoding
  - Content-Language: en
  - P3P: CP="CAO PSA"
  - Expires: Wed, 11 Jan 1984 05:00:00 GMT
  - Cache-Control: no-cache, must-revalidate, max-age=0
  - X-Frame-Options: SAMEORIGIN
  - Content-Security-Policy: default-src gravatar.com *.gravatar.com; script-src gravatar.com *.gravatar.com *.wp.com *.google-analytics.com *.googletagmanager.com apis.google.com/js/ 'nonce-320d84ed5caf' 'nonce-19ef6f045b64'; style-src 'self' gravatar.com *.gravatar.com *.wp.com fonts.googleapis.com 'nonce-19ef6f045b64' 'nonce-670cd06482ef' 'sha256-NE3gBSsVG0IdyINKOXv7oHDjOD1hoJpOCZQDS8LzvUc=' 'sha256-biLFinpqYMtWHmXfkA1BPeCY0/fNt46SAZ+BBk5YUog=' 'sha256-ONA8DqqhBTsIrZzU3/jZyRdkNkkAGEU74EH252dbGS8=' 'sha256-uYx4ryugsGdahnaIId0IhtdPIgBkKBfNZg2/H0eWhqk=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-xi7Iu5TcqJkb4mlu0FHpAYfWWCETn5kNH3GPA4Coh4M=' 'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=' 'sha256-Fw2RK+YpRih15zbXuAaoQAV98ZS+OLAX6wDQ2AkaEho=' 'sha256-t9/679CRyrVA6r3JGaAzcO+diam/7WLn6KXJHJuOzUI=' 'sha256-h0RPO0+/L+WC46JS6RvM6D3KN9C2LfMai6hxwzVFU2k=' 'sha256-YIktaUP7IBRwVksGEOmRykAcO2jHTw97BHns4OnHTIw=' 'sha256-MSTZvl0psO46WYZImeDzGMr7OqGRUy5RPDaeL19QpBk='; font-src data: gravatar.com *.gravatar.com *.wp.com fonts.gstatic.com; img-src data: https: blob:; media-src https://videos.files.wordpress.com/ s.gravatar.com; frame-src gravatar.com *.gravatar.com automattic.crowdsignal.net widgets.wp.com; connect-src gravatar.com *.gravatar.com *.wp.com data: blob: *.google-analytics.com *.analytics.google.com analytics.google.com https://public-api.wordpress.com/; object-src 'none'; base-uri 'self'; report-uri https://public-api.wordpress.com/csp/; worker-src 'self' blob:;
  - Alt-Svc: h3=":443"; ma=86400
  - Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
  - Content-Encoding: gzip
- **Content Snippet (first 500 characters):**
```
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml" lang="en">
<head>
	<title>Your Free Avatar, Profile, and Link In Bio | Gravatar</title>
	<link rel="canonical" href="https://gravatar.com/" />
	<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-192x192.png">

```

---
### URL: http://gsmarena.com
- **Final URL:** https://www.gsmarena.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:23:45 GMT
  - Server: Apache
  - Upgrade: h2
  - Connection: Upgrade, Keep-Alive
  - X-Powered-By: PHP/7.4.33
  - Vary: Accept-Encoding
  - Content-Encoding: gzip
  - Content-Security-Policy: frame-ancestors 'self' *.gsmarena.com;
  - Content-Length: 14013
  - Keep-Alive: timeout=15, max=100
  - Content-Type: text/html; charset=utf-8
- **Content Snippet (first 500 characters):**
```
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US">
<head>
<title>GSMArena.com - mobile phone reviews, news, specifications and more...</title>
<script>
DESKTOP_BASE_URL = "https://www.gsmarena.com/";
MOBILE_BASE_URL = "https://m.gsmarena.com/";
ASSETS_BASE_URL  = "https://fdn.gsmarena.com/vv/assets12/";
CDN_BASE_URL = "//fdn.gsmarena.com/";
CDN2_BASE_URL = "//fdn2.gsmarena.com/";
</script>


<meta charset="utf-8">
<meta name="viewport" content
```

---
### URL: http://guardian.co.uk
- **Final URL:** https://www.theguardian.com/us
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 130262
  - x-gu-dotcomponents: true
  - onion-location: https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/us
  - x-gu-frontend-git-commit-id: b27a4afd6542a4fac4818c5763a27b8a82ca196e
  - content-encoding: gzip
  - etag: W/"hash5763846766352595001"
  - link: <https://assets.guim.co.uk/polyfill.io/v3/polyfill.min.js?rum=0&features=es6%2Ces7%2Ces2017%2Ces2018%2Ces2019%2Cdefault-3.6%2CHTMLPictureElement%2CIntersectionObserver%2CIntersectionObserverEntry%2CURLSearchParams%2Cfetch%2CNodeList.prototype.forEach%2Cnavigator.sendBeacon%2Cperformance.now%2CPromise.allSettled&flags=gated&callback=guardianPolyfilled&unknown=polyfill&cacheClear=1>; rel=prefetch,<https://assets.guim.co.uk/assets/frameworks.client.web.54329d27b5d3d9368122.js>; rel=prefetch,<https://assets.guim.co.uk/assets/index.client.web.4f035a11b31f2fb76aab.js>; rel=prefetch,<https://assets.guim.co.uk/javascripts/commercial/07bdb9f2c273f0bc66fb/graun.standalone.commercial.js>; rel=prefetch,,<https://assets.guim.co.uk/>; rel=preconnect,<https://i.guim.co.uk>; rel=preconnect,<https://j.ophan.co.uk>; rel=preconnect,<https://ophan.theguardian.com>; rel=preconnect,<https://api.nextgen.guardianapps.co.uk>; rel=preconnect,<https://hits-secure.theguardian.com>; rel=preconnect,<https://interactive.guim.co.uk>; rel=preconnect,<https://phar.gu-web.net>; rel=preconnect,<https://static.theguardian.com>; rel=preconnect,<https://support.theguardian.com>; rel=preconnect
  - content-type: text/html; charset=UTF-8
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:23:46 GMT
  - Age: 103
  - Set-Cookie: GU_mvt_id=828589; expires=Thu, 16 Jan 2025 06:23:46 GMT; path=/; domain=.theguardian.com; Secure, GU_geo_country=US; path=/; Secure
  - X-Timer: S1729232626.132768,VS0,VS0,VE1
  - Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  - X-Frame-Options: SAMEORIGIN
  - X-XSS-Protection: 1; mode=block
  - X-Content-Type-Options: nosniff
  - Content-Security-Policy: default-src https:; script-src https: 'unsafe-inline' 'unsafe-eval' blob: 'unsafe-inline'; frame-src https: data:; style-src https: 'unsafe-inline'; img-src https: data: blob:; media-src https: data: blob:; font-src 'self' https://assets.guim.co.uk https://pasteup.guim.co.uk https://interactive.guim.co.uk https://dashboard.ophan.co.uk data:; connect-src https: wss: blob:; child-src https: blob:; object-src 'none'; base-uri 'none'
  - Referrer-Policy: no-referrer-when-downgrade
  - Feature-Policy: camera 'none'; microphone 'none'; midi 'none'; geolocation 'none'
  - Permissions-Policy: camera=(), microphone=(), midi=(), geolocation=(), interest-cohort=()
  - X-GU-Edition: us
  - Cache-Control: max-age=60, stale-while-revalidate=6, stale-if-error=864000, private,no-transform
  - Vary: Accept-Encoding,User-Agent
  - alt-svc: h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400
- **Content Snippet (first 500 characters):**
```
<!doctype html>
        <html lang="en" >
            <head>
			    <!-- Hello there, HTML enthusiast! -->

				<!-- DCR commit hash e8569d95e7d8cecf715bd4a95c3087b4e9b514f1 -->

                <title>Latest news, sport and opinion from the Guardian</title>
                <meta name="description" content="Latest US news, world news, sports, business, opinion, analysis and reviews from the Guardian, the world&#x27;s leading liberal voice" />
				<meta charset="utf-8">
				<link rel="canonical" 
```

---
### URL: http://hatena.ne.jp
- **Final URL:** https://www.hatena.ne.jp:443/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:23:47 GMT
  - Content-Type: text/html; charset=utf-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Server: nginx
  - Set-Cookie: b=$1$Kp8Lkv0s$FekiAKlZR6JVw.7V.uUby1; expires=Thu, 13-Oct-2044 06:23:47 GMT; domain=hatena.ne.jp; path=/
  - ETag: "4b51f-B0yw/cElSM9V/UTumL8Q0vHx74I"
  - Vary: Accept-Encoding
  - Content-Encoding: gzip
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="ja"><head><script>
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WPVF7X');</script><meta charSet="utf-8"/><link re
```

---
### URL: http://hindustantimes.com
- **Final URL:** https://www.hindustantimes.com/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html;charset=UTF-8
  - Server: nginx
  - Content-Encoding: gzip
  - Content-Language: en-US
  - X-Server: ip-10-136-166-190.ap-south-1.compute.internal
  - Content-Length: 105616
  - Cache-Control: public, must-revalidate, max-age=30
  - Date: Fri, 18 Oct 2024 06:23:49 GMT
  - Connection: keep-alive
  - Vary: Accept-Encoding
  - Set-Cookie: ht-location=US; path=/; domain=.hindustantimes.com, Meta-Geo=US--VA--NORFOLK; path=/; domain=.hindustantimes.com
  - cachettl: 
  - X-Frame-Options: SAMEORIGIN
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="max-image-preview:large">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes">
<link rel="apple-touch-icon" href="https://www.hindustantimes.com/res/images/icons/icon-57x57.png"/>
<link rel="apple-touch-icon-57x57" href="https://www.hindustantimes.com/res/images/icons/icon-57x57.png"/>
<link rel="apple-touch-icon" sizes="72x72" hre
```

---
### URL: http://hp.com
- **Final URL:** https://www.hp.com/us-en/home.html
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html;charset=utf-8
  - Server: Apache
  - X-Dispatcher: dispatcher2westus2-28533384
  - X-Vhost: publish
  - X-Content-Type-Options: nosniff
  - Last-Modified: Thu, 17 Oct 2024 23:14:38 GMT
  - ETag: "c5d4d-624b459c1b4dc-gzip"
  - Accept-Ranges: bytes
  - X-Akamai-Transformed: 9 - 0 pmb=mTOE,1
  - Content-Encoding: gzip
  - Cache-Control: max-age=531
  - Expires: Fri, 18 Oct 2024 06:32:41 GMT
  - Date: Fri, 18 Oct 2024 06:23:50 GMT
  - Transfer-Encoding: chunked
  - Connection: keep-alive, Transfer-Encoding
  - Vary: Accept-Encoding
  - Set-Cookie: aka_client_code=US-
  - X-Frame-Options: SAMEORIGIN, SAMEORIGIN, SAMEORIGIN
  - Strict-Transport-Security: max-age=600
  - Akamai-GRN: 0.4adfda17.1729232630.229c3d45
  - Server-Timing: ak_p; desc="1729232630153_400219978_580664645_41_16528_23_32_-";dur=1
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html class=" " xmlns="http://www.w3.org/1999/xhtml" lang="en-us" xml:lang="en-us" dir="ltr">
  
    <head>
    <meta charset="UTF-8"/>
    <title>Laptop Computers, Desktops, Printers, Ink &amp; Toner  | HP® Official Site</title>
    <script type="application/ld+json">
      {
        "@context" : "https://schema.org",
        "@type" : "WebSite",
        "name" : "HP",
        "url" : "https://www.hp.com/"
      }
    </script>
    <link href="/content/dam/sites/worldwide/dems/f
```

---
### URL: http://ign.com
- **Final URL:** https://www.ign.com/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 57877
  - content-type: text/html; charset=utf-8
  - cache-control: max-age=10
  - content-encoding: gzip
  - etag: "s8exj0qq0p7qqv"
  - X-UA: desktop
  - X-Hash: authfalse:
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:23:50 GMT
  - Age: 3
  - X-Served-By: cache-iad-kiad7000127-IAD, cache-iad-kjyo7100178-IAD
  - X-Cache: MISS, HIT
  - X-Cache-Hits: 0, 1
  - X-Timer: S1729232631.656551,VS0,VE2
  - Access-Control-Allow-Origin: *
  - Access-Control-Allow-Methods: GET, POST, PUT
  - Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization
  - Vary: Accept-Encoding
  - Set-Cookie: geoCC=US; path=/
  - Strict-Transport-Security: max-age=300
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="en" data-build-id="N5-Ai471LOmMsJvm46bZc" data-kraken-env="production" data-release="v0.76.3"><head prefix="og: http://ogp.me/ns# article: http://ogp.me/ns/article# fb: http://www.facebook.com/2008/fbml"><meta charSet="utf-8"/><title>Video Game News, Reviews, and Walkthroughs - IGN</title><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/><meta name="theme-color" content="#BF1313"/><meta name="description" content="IGN is your #1
```

---
### URL: http://ikea.com
- **Final URL:** https://www.ikea.com/
- **Status Code:** 200
- **Headers:**
  - Server: IKEA Server
  - Content-Type: text/html; charset=utf-8
  - Akamai-GRN: 0.cc9b3e17.1729232631.17e0dcaa
  - Strict-Transport-Security: max-age=31536000
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: SAMEORIGIN
  - x-ms-version: 2018-03-28
  - x-ms-request-id: 127465b7-601e-003d-58d1-1feb2d000000
  - ETag: "0x8DCEDE87E656B95"
  - Vary: Accept-Encoding
  - Content-Encoding: gzip
  - Cache-Control: max-age=900
  - Expires: Fri, 18 Oct 2024 06:38:51 GMT
  - Date: Fri, 18 Oct 2024 06:23:51 GMT
  - Content-Length: 16080
  - Connection: keep-alive
  - Akamai-Cache-Status: Hit from child
  - Set-Cookie: _abck=8B8C6E92BA321EE1F0F182D942707B90~-1~YAAQzJs+F+dUAJKSAQAAQfVLngwk+NB9eaK130rqJegyzua8xTjvKJthT9YiWaZFRGZ5MVTxmsTlMD2Ta+QAYxg6E8FIMLfWj7noTh2egLYGTyduM76bUWoyfxrmuGjbN2Q1rTJxvM5wSBEweNHMMSyd7OyWDJR22E1qzx+2smUzNAU8XCbRaDjV2Nttuw/ovoFJW2E3fgVn/GbL2eGfnmcDNi/RDfzYea1VOJF/RpUwCYBvrXfz0EUxtA3KLkyoYJDhOAU7Q0ELxROSS8pktJSkBkLrSOVpqmw3J+PpQppMMon5mYDDf+QfLr5xAttIHyYwadioBA/0jWdWlWiGDB1O2SwIq0HbEbZb0Q17QfK1wp2crD3Pjq1TDDwx73DyXg9fYCKAY5BdVXpycEVlX6T2WjcxCA1+1cif~-1~-1~-1; Domain=.ikea.com; Path=/; Expires=Sat, 18 Oct 2025 06:23:51 GMT; Max-Age=31536000; Secure, bm_sz=55EF08EFEB55CA091187D740B3176B76~YAAQzJs+F+hUAJKSAQAAQfVLnhlBODMS4JRtx2xs/iLZnXGj6GwPMGuVHo8HiIbK7J1NevzJVoZAKAlojVpJe1AoBPCOXj9PEauuc7zZN8g98J0HryK/+IPYY6QNXdmRpExz6pg8RNHUcA431e934Xj/F1hQKB3kToSUbgoFjjHQezZLwyywvpb6+NEDbWeo3Ef2qxq33J82Gi8ZP2jImsYw2lkFhIi4LfsVvMmm0S7sm9Y2+ihNl70LoqzIj+wbyP4ZD3nacrWmdUYQltl/Kv3nEYrFt4GTet8N6HAQfo2eSm/6AMEtH0iKzB7zg70OSULSP5gGbBS6Aa++ou+sEpt2OXF7Tir9j5g6ZEYbyRzo1L6SFyvROX092Ke8TUY8EBk22zZV~3682355~3619127; Domain=.ikea.com; Path=/; Expires=Fri, 18 Oct 2024 10:23:51 GMT; Max-Age=14400
- **Content Snippet (first 500 characters):**
```
<!doctype html><html lang="en" dir="ltr"><head><title>Hej! Welcome to IKEA Global</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><meta name="robots" content="index, follow"><meta property="og:title" content="Hej! Welcome to IKEA Global"><meta name="twitter:title" content="Hej! Welcome to IKEA Global"><link rel="canonical" href="https://www.ikea.com/"><meta property="og:url" conte
```

---
### URL: http://imageshack.us
- **Final URL:** https://imageshack.com/
- **Status Code:** 200
- **Headers:**
  - Server: nginx/1.2.8
  - Date: Fri, 18 Oct 2024 06:23:51 GMT
  - Content-Type: text/html
  - Content-Length: 2841
  - Connection: keep-alive
  - X-Powered-By: PHP/5.2.9
  - Content-Encoding: gzip
  - X-Frame-Options: SAMEORIGIN
  - Accept-Ranges: bytes
  - X-Varnish: 664229664 664228841
  - Age: 58
  - Via: 1.1 varnish
  - X-Varnish-Hits: 36
  - X-Varnish-IP: 208.94.3.35
  - X-Varnish-Port: 17001
  - Vary: Accept-Encoding, User-Agent
- **Content Snippet (first 500 characters):**
```
<!-- 9.4.70 -->
<!DOCTYPE html><html lang="en">
    <head>
        <title>ImageShack - Best place for all of your image hosting and image sharing needs</title>        <meta charset="utf-8">
<meta name="copyright" content="Copyright 2024 ImageShack">
<meta name="google-site-verification" content="gFE6jG6VX-EGA3a-RV5ICuiGS5o3Xxnec4cgcmy8WPM">
<meta name="description" content="Unlimited space to host images, easy to use image uploader, albums, photo hosting, sharing, dynamic image resizing on web a
```

---
### URL: http://independent.co.uk
- **Final URL:** https://www.independent.co.uk/us
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 60027
  - Content-Type: text/html; charset=utf-8
  - Cache-Tag: independent.co.uk,v8.13.1,us,section_1741
  - Content-Encoding: gzip
  - Content-Language: en
  - Etag: W/"4cc14-kP/8KvzeHv7FOfBk900ek2SJzL4-gzip"
  - Link: <https://static.independent.co.uk>; rel=dns-prefetch, <https://static.independent.co.uk>; rel=preconnect, <https://assets.the-independent.com>; rel=dns-prefetch, <https://assets.the-independent.com>; rel=preconnect
  - Speculation-Rules: /speculationrules.json
  - Strict-Transport-Security: max-age=63072000;  preload
  - X-Head-Hash: 
  - Accept-Ranges: bytes
  - Via: 1.1 varnish, 1.1 varnish
  - Age: 26
  - Set-Cookie: gdpr=0 ; Path=/ ;, subscriber_origin=us ; Path=/ ;, _pc_subscriber_origin=us ; Path=/ ;, feat__support_now_donate_copy=false ; Path=/ ; Secure ; HttpOnly ; Expires=Tue, 12 Nov 2024 06:23:52 GMT ;, feat__pubx_integration=true ; Path=/ ; Secure ; HttpOnly ; Expires=Tue, 17 Dec 2024 06:23:52 GMT ;, esi-uuid=c2c49173-e5ad-40a8-b41c-d56afb445a11 ; Path=/ ; Secure; HttpOnly; Expires=Sat, 18 Oct 2025 06:23:52 GMT ;, esi-permutive-id=c2c49173-e5ad-40a8-b41c-d56afb445a11; Path=/ ; Secure ;, gdpr=0 ; Path=/ ;, subscriber_origin=us ; Path=/ ;, _pc_subscriber_origin=us ; Path=/ ;, feat__support_now_donate_copy=false ; Path=/ ; Secure ; HttpOnly ; Expires=Tue, 12 Nov 2024 06:23:52 GMT ;, feat__pubx_integration=true ; Path=/ ; Secure ; HttpOnly ; Expires=Tue, 17 Dec 2024 06:23:52 GMT ;, esi-uuid=c2c49173-e5ad-40a8-b41c-d56afb445a11 ; Path=/ ; Secure; HttpOnly; Expires=Sat, 18 Oct 2025 06:23:52 GMT ;, esi-permutive-id=c2c49173-e5ad-40a8-b41c-d56afb445a11; Path=/ ; Secure ;
  - Access-Control-Allow-Origin: *
  - Cache-control: no-cache, no-store, max-age=0, must-revalidate
  - Date: Fri, 18 Oct 2024 06:23:52 GMT
  - canary: 1
  - X-Backend: flow-us
  - Content-Security-Policy: default-src https: 'unsafe-inline' data: blob:; frame-src https: data:; script-src https: 'unsafe-inline' 'unsafe-eval' blob: 'unsafe-inline'; media-src https: 'unsafe-inline' data: blob:; img-src https: http: data: blob:; frame-ancestors https:
  - x-frame-options: SAMEORIGIN
  - x-xss-protection: 1; mode=block
  - x-content-type-options: nosniff
  - referrer-policy: no-referrer-when-downgrade
  - feature-policy: camera 'none'; microphone 'none'; midi 'none'; geolocation 'none'
  - permissions-policy: camera=(), microphone=(), midi=(), geolocation=(), interest-cohort=()
  - X-Served-By: cache-lga21985-LGA, cache-iad-kjyo7100124-IAD
  - X-Cache: HIT, MISS
  - X-Cache-Hits: 1, 0
  - X-Timer: S1729232632.317249,VS0,VE8
  - alt-svc: h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html> <html lang="en"> <head> <title>The Independent | Latest news and features from US, UK and worldwide</title> <meta charset="utf-8"><meta name="amp-google-client-id-api" content="googleanalytics"><meta name="robots" content="max-image-preview:large,max-video-preview:-1"><meta property="fb:app_id" content="235586169789578"><meta property="fb:pages" content="https://www.facebook.com/TheIndependentOnline"><meta name="category" content="US"><meta name="sitename" content="The Independen
```

---
### URL: http://jhu.edu
- **Final URL:** https://www.jhu.edu/
- **Status Code:** 200
- **Headers:**
  - Server: nginx/1.25.5
  - Content-Type: text/html; charset=UTF-8
  - Content-Length: 20011
  - X-Powered-By: PHP/8.3.11
  - Link: <https://www.jhu.edu/wp-json/>; rel="https://api.w.org/", <https://www.jhu.edu/wp-json/wp/v2/pages/12375>; rel="alternate"; title="JSON"; type="application/json", <https://www.jhu.edu/>; rel=shortlink
  - X-Frame-Options: SAMEORIGIN, SAMEORIGIN
  - X-Content-Type-Options: nosniff, nosniff
  - Referrer-Policy: strict-origin, strict-origin-when-cross-origin
  - Permissions-Policy: geolocation=(),midi=(),microphone=(),camera=(),magnetometer=(),gyroscope=(),fullscreen=(self),payment=()
  - Content-Encoding: gzip
  - Strict-Transport-Security: max-age=31536000; includeSubDomains; preload, max-age=31536000; includeSubDomains
  - X-XSS-Protection: 1; mode=block, 1; mode=block
  - Cache-Control: max-age=434
  - Expires: Fri, 18 Oct 2024 06:31:06 GMT
  - Date: Fri, 18 Oct 2024 06:23:52 GMT
  - Connection: keep-alive
  - Vary: Accept-Encoding
- **Content Snippet (first 500 characters):**
```
<!doctype html>

<html class="no-js" lang="en">
  <head>
    <script>
    dataLayer = [];
    </script>
        <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P
```

---
### URL: http://jstor.org
- **Final URL:** https://www.jstor.org/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - x-envoy-upstream-service-time: 79
  - content-encoding: gzip
  - x-frame-options: DENY
  - set-cookie: AccessSession=H4sIAAAAAAAA_5WSTW8TMRCG_4vPncjfHu8tigRFSBzaFAkQQv7adGGbRJtdJIj63xlvAs0pFT6NXz8z89rjI5umLrOGiaxd9qFAFFKBFikB2qyh2GBLSjqa0rIb1u2J9bgQqBZSyoW3VawFCk_Rclq-lRoxY04UuhBltFEKR9wwg1pxJ4tCMNlp0FxZQJEc2Ji4MeRCBEVwH0aCJZcaBAeBa24bqRpDfTly4Q23nys2Xcc8ztjhGiW5tjM1Jta0oT-UG_Yz9LPbyxz_N0dwq1Ag1pwwjsOBNUe2WhH-YUnSak3Rdje0u_7Ht4-z8omUh3uK7lZzBLN8X8F369vl-yV7plLT-LhMaaRyX77S9hweTw-snHZa1PcuJ2c5qmhiBhME0sS0BGyjBnRaBl20LijqnX7tC9F3ZdPttrR_6rbdU_e7vOnDhjXjMNFl-3MD5aWpDfpz0jAnPRzKQPYubEj7YqNYWWLwCer4QEunIPDYgot1mCgDN-G_bXj1mg1BP039M-ELcpdLgla5CDo5AyGhBJ4E-mBS5IG_mHg77Kb9VQ_yovum0qfmNJTv8zl_ZbHTMM-_6fkP62A8yGYDAAA; Path=/; SameSite=Lax; Secure, AccessSessionSignature=f12aeff728241b6b2c8231b71abfa5335f0dfb0de45dc14d18a8336efc957711; Path=/; SameSite=Lax; Secure, AccessSessionTimedSignature=c63aab7b0280d42f1c662c7c049a05af6b97b205b0fa54a38160ce363f590b5e; Path=/; SameSite=Lax; Secure, UUID=1d47d9ae-b123-41cc-86d4-e6a6ecc4b5ef; expires=Mon, 18 Oct 2027 06:23:53 GMT; Max-Age=94608000; Path=/; SameSite=None; Secure, csrftoken=mcQYkO7CXrHIONdtphulrg46gRN2AWrX; expires=Fri, 17 Oct 2025 06:23:53 GMT; Max-Age=31449600; Path=/; SameSite=Lax; Secure, ReferringRequestId=fastly-default:ad6cb81ae076b3b7120ffad006621379; Path=/; SameSite=Lax; Secure
  - server: envoy
  - content-type: text/html; charset=utf-8
  - X-JSTOR-Restarts: 0
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:23:53 GMT
  - Via: 1.1 varnish
  - X-Served-By: cache-iad-kiad7000046-IAD, cache-iad-kjyo7100098-IAD
  - X-Cache: MISS, MISS
  - X-Cache-Hits: 0, 0
  - X-Timer: S1729232633.146985,VS0,VE93
  - Vary: Cookie, origin, Accept-Encoding,Fastly-SSL,Origin,X-Requested-Host
  - alt-svc: h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400
  - transfer-encoding: chunked
- **Content Snippet (first 500 characters):**
```









<!DOCTYPE html>
<html class="no-js" lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        
        <link rel="preconnect" href="https://static.ithaka.org">
        <link rel="preconnect" href="https://cdn.cookielaw.org">
        <link rel="preconnect" href="https://geolocation.onetrust.com">
        <link rel="preconnect" href="https://www.googletagmanager.com">

        <link rel="dns-prefetch" href
```

---
### URL: http://justgiving.com
- **Final URL:** https://justgiving.com/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=utf-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Last-Modified: Mon, 07 Oct 2024 09:04:47 GMT
  - x-amz-server-side-encryption: AES256
  - x-amz-version-id: MJ5A8Vr8IrH2ti.fSfi_8I.IB74c51G7
  - Server: AmazonS3
  - Content-Encoding: gzip
  - Date: Fri, 18 Oct 2024 06:23:53 GMT
  - Cache-Control: public, max-age=60
  - ETag: W/"ce8f70401c218de13f0bb6de4c33cd03"
  - Vary: Accept-Encoding
  - X-Cache: Hit from cloudfront
  - Via: 1.1 6306947fb6ab60dc617ca2e025941652.cloudfront.net (CloudFront)
  - X-Amz-Cf-Pop: IAD50-C2
  - X-Amz-Cf-Id: Y71zBACtoGjXpAivTQvMjKxm-8rdUSLXstVoN9HUSpjnxx1aXrH5Ig==
  - Age: 2
  - X-XSS-Protection: 1; mode=block
  - X-Frame-Options: SAMEORIGIN
  - Referrer-Policy: same-origin
  - X-Content-Type-Options: nosniff
  - Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="en"><head>
  <meta data-application-version="9068c58"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  <title>Online fundraising donations and ideas - JustGiving</title>
  <meta name="title" content="JustGiving">
  <meta name="description" content="Fundraise or donate with JustGiving, the worlds leading online fundraising platform, helping charities to make more with GiftAid">
  <met
```

---
### URL: http://latimes.com
- **Final URL:** https://www.latimes.com:443/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html;charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Cache-Control: max-age=180, stale-if-error=86400, stale-while-revalidate=60
  - Content-Encoding: gzip
  - Content-Security-Policy: upgrade-insecure-requests
  - Date: Fri, 18 Oct 2024 06:20:58 GMT
  - Server: N/A
  - Strict-Transport-Security: max-age=63072000
  - X-Frame-Options: DENY
  - X-Powered-By: Brightspot
  - Vary: Accept-Encoding
  - X-Cache: Hit from cloudfront
  - Via: 1.1 d91f9d07d2d79c22681fc8eb4b5f2698.cloudfront.net (CloudFront)
  - X-Amz-Cf-Pop: IAD79-C3
  - Alt-Svc: h3=":443"; ma=86400
  - X-Amz-Cf-Id: gsCT9tP9Vvix35TqWkLn59AtBnedEpmQWRyvg4vhZxm6CVfHot2iew==
  - Age: 174
- **Content Snippet (first 500 characters):**
```
 <!DOCTYPE html> <html class="page home-page is-desktop"  data-content-type="homepage"  lang="en-US">  <head> <meta charset="UTF-8"> <style>:root{--site-bg-color: #ffffff;--site-inverse-bg-color: #000000;--header-bg-color: #ffffff;--header-bg-color-inverse: #000000;--header-border-color: #e6e6e6;--header-border-color-inverse: #858585;--header-text-color: #333333;--header-text-color-inverse: #ffffff;--header-menu-bg-color: #ffffff;--header-menu-text-color: #333333;--header-logo-color: #000000;--n
```

---
### URL: http://liberation.fr
- **Final URL:** https://www.liberation.fr/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=utf-8
  - Content-Length: 1353016
  - Server: openresty
  - ETag: W/"70cfec-bKqoQypNU/KrnittDvKqj8Sp3zU"
  - x-arc-pb-mx-id: 00000000
  - Content-Encoding: gzip
  - x-arc-pb-request-id: c331eec8-24d1-491d-a7d8-4ccdb834c368, 6c23bdf1-cb8d-4358-b68e-a37ac8b072b0
  - Last-Modified: Fri, 18 Oct 2024 06:23:36 GMT
  - Vary: Accept-Encoding
  - Cache-Control: private, max-age=60
  - Expires: Fri, 18 Oct 2024 06:24:54 GMT
  - Date: Fri, 18 Oct 2024 06:23:54 GMT
  - Connection: keep-alive
  - Content-Security-Policy: upgrade-insecure-requests
  - x-arc-ttl: 120
  - x-arc-request-id: 0.ca643717.1729232634.b2f60557
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="fr"><head><meta name="viewport" content="width=device-width, initial-scale=1"/><meta name="tdm:reservation" content="1"/><meta name="tdm:policy" content="https://www.liberation.fr/arc/outboundfeeds/policies/liberation-tdm-policy-1/policy.json?outputType=json"/><script async="" src="https://client.px-cloud.net/PXTW9veCqb/main.min.js"></script><script async=""></script><script defer="" crossorigin="anonymous" src="https://cdn.speedcurve.com/js/lux.js?id=4360634937"></scr
```

---
### URL: http://linkedin.com
- **Final URL:** https://www.linkedin.com/
- **Status Code:** 429
- **Headers:**
  - Cache-Control: no-cache, no-store
  - Pragma: no-cache
  - Content-Length: 24633
  - Content-Type: text/html
  - Expires: Thu, 01 Jan 1970 00:00:00 GMT
  - X-Li-Fabric: prod-lva1
  - X-Li-Pop: afd-prod-lva1-x
  - X-Li-Proto: http/1.1
  - X-LI-UUID: AAYkulj02zQbWqryFDefYg==
  - X-Cache: CONFIG_NOCACHE
  - X-MSEdge-Ref: Ref A: 9CADF15056CF49439507336D5E31F26F Ref B: BL2AA2030106011 Ref C: 2024-10-18T06:23:55Z
  - Date: Fri, 18 Oct 2024 06:23:54 GMT
- **Content Snippet (first 500 characters):**
```
<html><head>
    <meta http-equiv="refresh" content="1;url=https://www.linkedin.com" />
    <script type="text/javascript">
var _0x26bb58=_0x3a5d;function _0x2511(){var _0x2338e3=['__proto__','http:','location','substr','qAPtM','table','onload','call','sigBytes','sPJpW','kZeqA','cookie','split','lib','FNMFc','init','QVpsV','constructor','521958Zfkeyt','splice','string','protocol','14Uotzra','HMAC','698688vKSiEf','clamp','indexOf','YTmHn','min','Hex','href','_createHelper','sYmlV','slice','WordAr
```

---
### URL: http://mailchimp.com
- **Final URL:** https://mailchimp.com/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=UTF-8
  - X-UA-Compatible: IE=edge,chrome=1
  - X-Plums-Vary: Accept-Encoding, Accept-Language, Cookie
  - X-Frame-Options: SAMEORIGIN
  - Cache-Control: max-age=600, private, must-revalidate
  - X-Akamai-Transformed: 9 - 0 pmb=mTOE,1mRUM,2
  - Content-Encoding: gzip
  - Date: Fri, 18 Oct 2024 06:23:55 GMT
  - Transfer-Encoding: chunked
  - Connection: keep-alive, Transfer-Encoding
  - Vary: Accept-Encoding
  - Server-Timing: cdn-cache; desc=HIT, edge; dur=1, ak_p; desc="1729232635411_400321171_2033344271_35_11116_25_31_-";dur=1
  - Set-Cookie: ak_bmsc=108355E44D426C07DA647C51A3B8EA77~000000000000000000000000000000~YAAQk2rcF/cojIKSAQAASQZMnhmWBJNWFeqZHlVs4cKP/P2l4zPENQp5XzWvtUPRVgf6CS8sCf9xUlwN3qfdDQk4gK64LcXxY5jCzdVDm7U/Y7V2UlSjaMKHgJvhVREnNiWN2aWLJyRG4vl9ERAWQ4t3j52Xwjv85MVqEG/z/VWk3ooBFl8Ac6N+FBseoogGwbq3v5O1PHDCave4s6H9oS9jS6Cuv/Q/5Vj4eAA1eC4KOJSFec6izp4w1HVsP4yZAlamnADoGgxysQOGTzuXtDhXIN3o55hrYLqX2CsOMQ3U1bCb+zdLI5xl1U6f5vs+MhD+JzzVj3TaRNpp30HX/OdiRx3vp0BTMaFWZKYXIt26ZANikaBOxoLTQDmK7fEM; Domain=.mailchimp.com; Path=/; Expires=Fri, 18 Oct 2024 08:23:55 GMT; Max-Age=7200; SameSite=None; Secure
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en">
    <head>
        
        <script type="text/javascript">
    window.EnabledFlags = ["plums.revert_dollar_promo","plums.fs2_preview_links","plums.use_pricing_cache_pt2","plums.gps_logging_fix","plums.sms_v2","plums.discount_lander_locale","plums.ga4_experiment_event","plums.fix_sales_banner","plums.update_twitter_logo","plums.fix_serp_click_tracking_index","plums.algolia_partners_search","plums.algolia_collection_page","plums.algolia_newsroom_page","plums.swift
```

---
### URL: http://marca.com
- **Final URL:** https://www.marca.com/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 122075
  - Content-Type: text/html; charset=iso-8859-15
  - Content-Encoding: gzip
  - Referrer-Policy: unsafe-url
  - Cache-Control: s-maxage=60
  - x-backend: CONTENT
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:24:16 GMT
  - Age: 34
  - X-Served-By: cache-ams2100116-AMS, cache-iad-kiad7000081-IAD
  - X-Cache: HIT, HIT
  - X-Cache-Hits: 1, 1
  - X-Timer: S1729232657.568558,VS0,VE2
  - Vary: Accept-Encoding, User-Agent
- **Content Snippet (first 500 characters):**
```
 <!DOCTYPE html><html lang="es"><head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-15"/><meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1"/><title data-ue-c="innerHTML" data-ue-u="title">MARCA - Diario online líder en información deportiva</title><meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0"><meta name="keywords" content=""/><meta name="news_keywords" content=""/><!-- ##IBEXCLU --><link Href="https://www.marca.com" dat
```

---
### URL: http://naver.com
- **Final URL:** https://www.naver.com/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=UTF-8
  - Cache-Control: no-cache, no-store, must-revalidate
  - Pragma: no-cache
  - x-frame-options: DENY
  - x-xss-protection: 1; mode=block
  - strict-transport-security: max-age=63072000; includeSubdomains
  - referrer-policy: unsafe-url
  - Content-Encoding: gzip
  - Server: nfront
  - Content-Length: 34263
  - Date: Fri, 18 Oct 2024 06:24:18 GMT
  - Connection: keep-alive
  - Vary: Accept-Encoding
- **Content Snippet (first 500 characters):**
```
   <!doctype html> <html lang="ko" class="fzoom"> <head> <meta charset="utf-8"> <meta name="Referrer" content="origin"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=1190"> <title>NAVER</title> <meta name="apple-mobile-web-app-title" content="NAVER"/> <meta name="robots" content="index,nofollow"/> <meta name="description" content="네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요"/> <meta property="og:title" content="네이버"> <meta property="og:url" content="https://www.
```

---
### URL: http://news.com.au
- **Final URL:** https://www.news.com.au/
- **Status Code:** 403
- **Headers:**
  - Server: AkamaiGHost
  - Mime-Version: 1.0
  - Content-Length: 1328
  - Cache-Control: no-cache, no-store, must-revalidate, max-age=0
  - Pragma: no-cache
  - Expires: 0, Fri, 18 Oct 2024 06:24:18 GMT
  - Content-Type: text/html
  - Date: Fri, 18 Oct 2024 06:24:18 GMT
  - Connection: keep-alive
  - Strict-Transport-Security: max-age=600 ; includeSubDomains
  - Content-Security-Policy-Report-Only: frame-ancestors 'self'; report-uri https://www.news.com.au/csp-reports
  - Content-Security-Policy: block-all-mixed-content; style-src https: 'unsafe-inline'; script-src https: blob: 'unsafe-inline' 'unsafe-eval'; img-src https: data:; frame-src https:;
  - X-ARRRG5: /blaize/decision-engine?path=https%3a%2f%2fwww.news.com.au%2f&blaizehost=cdn.news.newscorp.blaize.io&content_id=
  - X-ARRRG4: 
  - X-PathQS: TRUE
  - X-R: GI2TUUZ2IZAUYU2FHJKFGTSTFUYTKNJQHJXHK3DMHJSGKZTBOVWHIOSSKM5EIORRFU4TOOSBHI4TQLJZHA5EEORZHEWTSOJ2IM5DCMBQFUYTAMB2JA5EMQKMKNCTUVCTJZEC2MJVGUYDU3TVNRWDUZDFMZQXK3DUHJJEQOSEHIYS2OJXHJATUOJYFU4TQOSCHI4TSLJZHE5EGORRGAYC2MJQGA5DCNZSHEZDGMRWGU4A
  - Vary: User-Agent
  - Akamai-GRN: 0.8c643017.1729232658.a689cc6d
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html>
   <body>
      <h2>You might have been detected and blocked as a crawler bot!<h2>
      <h3>News Corp Australia uses software that manages crawler bot traffic on our websites. If you receive this message and are not a crawler bot (and are just a reader or subscriber), please try these steps first:</h3>
      <ol type = "1">
         <li>Temporarily disable any AdBlockers / pop-up blockers / script blockers you have enabled</li>
         <li>Add this site in to the allowed
```

---
### URL: http://npr.org
- **Final URL:** https://www.npr.org/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=UTF-8
  - X-Cache-NPR: HIT
  - Access-Control-Allow-Origin: *
  - Access-Control-Allow-Credentials: true
  - X-NPR-Trace-ID: renpATpmXvQ
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block
  - X-Served-By: pod-www-render-nginx-59c5ffd485-hcx67
  - Referrer-Policy: no-referrer-when-downgrade
  - Strict-Transport-Security: max-age=15724800; includeSubDomains
  - X-Akamai-Transformed: 9 - 0 pmb=mRUM,1
  - Vary: Accept-Encoding
  - Content-Encoding: gzip
  - Cache-Control: no-cache
  - Expires: Fri, 18 Oct 2024 06:24:19 GMT
  - Date: Fri, 18 Oct 2024 06:24:19 GMT
  - Transfer-Encoding: chunked
  - Connection: keep-alive, Transfer-Encoding
  - Server-Timing: cdn-cache; desc=HIT, edge; dur=1, ak_p; desc="1729232659223_400219975_2591617742_35_12900_23_33_-";dur=1
- **Content Snippet (first 500 characters):**
```
<!doctype html><html class="no-js" lang="en"><head><!-- OneTrust Cookies Consent Notice start for npr.org -->
<script type="text/javascript" src="https://cdn.cookielaw.org/consent/82089dfe-410c-4e1b-a7f9-698174b62a86/OtAutoBlock.js" ></script>
<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="82089dfe-410c-4e1b-a7f9-698174b62a86" ></script>

<script type="text/javascript">
function OptanonWrapper() {
    NPR_OptanonWr
```

---
### URL: http://nytimes.com
- **Final URL:** https://www.nytimes.com/
- **Status Code:** 200
- **Headers:**
  - Connection: close
  - Content-Length: 219361
  - x-b3-traceid: 6d5de864c959457cb7b1c4e863f24d61
  - x-nyt-data-last-modified: Fri, 18 Oct 2024 06:12:07 GMT
  - last-modified: Fri, 18 Oct 2024 06:12:07 GMT
  - x-pagetype: vi-homepage
  - x-xss-protection: 1; mode=block
  - x-content-type-options: nosniff
  - content-type: text/html; charset=utf-8
  - x-envoy-upstream-service-time: 220
  - server: envoy
  - x-envoy-decorator-operation: vi.nyt.net:443/*
  - content-encoding: gzip
  - cache-control: s-maxage=30,no-cache
  - x-nyt-route: homepage
  - X-Origin-Time: 2024-10-18 06:23:31 UTC
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:24:19 GMT
  - Age: 27
  - X-Served-By: cache-lga21964-LGA, cache-iad-kjyo7100078-IAD
  - X-Cache: HIT, HIT
  - X-Cache-Hits: 367, 1
  - X-Timer: S1729232660.673007,VS0,VE2
  - Vary: Accept-Encoding, Fastly-SSL
  - Set-Cookie: nyt-a=vpxmy6UqUrBqGDoT2RAK1T; Expires=Sat, 18 Oct 2025 06:24:19 GMT; Path=/; Domain=.nytimes.com; SameSite=none; Secure, nyt-gdpr=0; Expires=Fri, 18 Oct 2024 12:24:19 GMT; Path=/; Domain=.nytimes.com, nyt-purr=cfshcfhshckfhdfshgas2; Expires=Sat, 18 Oct 2025 06:24:19 GMT; Path=/; Domain=.nytimes.com; SameSite=Lax; Secure, nyt-geo=US; Expires=Fri, 18 Oct 2024 12:24:19 GMT; Path=/; Domain=.nytimes.com, datadome=0; Domain=.nytimes.com; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure, nyt-b3-traceid=19a09789964547b392957bdaaed1dc9d; Path=/; Domain=.nytimes.com; SameSite=none; Secure
  - x-gdpr: 0
  - Permissions-Policy: browsing-topics=()
  - X-Frame-Options: DENY
  - onion-location: https://www.nytimesn7cgmftshazwhfgzm37qxb44r64ytbb2dj3x62d2lljsciiyd.onion/
  - X-API-Version: F-F-VI
  - Content-Security-Policy: upgrade-insecure-requests; default-src data: 'unsafe-inline' 'unsafe-eval' https:; script-src data: 'unsafe-inline' 'unsafe-eval' https: blob:; style-src data: 'unsafe-inline' https:; img-src data: https: blob: android-webview-video-poster:; font-src data: https:; connect-src data: https: wss: blob:; media-src data: https: blob:; object-src https:; child-src https: data: blob:; form-action https:; report-uri https://csp.nytimes.com/report;
  - Strict-Transport-Security: max-age=63072000; preload; includeSubdomains
  - Access-Control-Expose-Headers: X-Nyt-Mktg-Group, X-Nyt-Mktg-Group
  - x-nyt-mktg-group: group1
  - x-nyt-home-headers-map: allocation-id=vpxmy6UqUrBqGDoT2RAK1T
  - x-nyt-edge-cache: HIT-HIT
  - x-nyt-app-webview: 0
  - x-nyt-app-map: webview=false,preloaded=false
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en" class=" nytapp-vi-homepage "  xmlns:og="http://opengraphprotocol.org/schema/">
  <head>
    
    
    <meta charset="utf-8" />
    <title data-rh="true">The New York Times - Breaking News, US News, World News and Videos</title>
    <meta data-rh="true" name="description" content="Live news, investigations, opinion, photos and video by the journalists of The New York Times from more than 150 countries around the world. Subscribe for coverage of U.S. and internation
```

---
### URL: http://offset.com
- **Final URL:** https://www.offset.com:443/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Last-Modified: Thu, 21 Mar 2024 16:04:14 GMT
  - Content-Encoding: gzip
  - x-amz-server-side-encryption: AES256
  - Server: AmazonS3
  - Date: Sat, 05 Oct 2024 17:35:55 GMT
  - Cache-Control: public, max-age=31536000
  - ETag: W/"e9bf427654715c36f8de2762d4ab3844"
  - Vary: Accept-Encoding
  - X-Cache: Hit from cloudfront
  - Via: 1.1 b9e3ae23b2e5d7b2e1c159467ba23f34.cloudfront.net (CloudFront)
  - X-Amz-Cf-Pop: IAD12-P3
  - Alt-Svc: h3=":443"; ma=86400
  - X-Amz-Cf-Id: dkazDJVGRqa6DlXZ_E75D3Sp4qSV4MbF7nDW9ntN91ZllrPtA_xR0A==
  - Age: 1082906
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com"/><link type="text/css" rel="stylesheet" href="css/style.css"/><title>OFFSET by Shutterstock</title><meta content="A high-end imagery resource from Shutterstock. Authentic, captivating stock photography and illustrations. All royalty-free." name="description"/><meta name="
```

---
### URL: http://oup.com
- **Final URL:** http://global.oup.com
- **Status Code:** 202
- **Headers:**
  - Server: awselb/2.0
  - Date: Fri, 18 Oct 2024 06:24:20 GMT
  - Content-Length: 0
  - Connection: keep-alive
  - x-amzn-waf-action: challenge
  - Cache-Control: no-store, max-age=0
  - Content-Type: text/html; charset=UTF-8
  - Access-Control-Allow-Origin: *
  - Access-Control-Max-Age: 86400
  - Access-Control-Allow-Methods: OPTIONS,GET,POST

---
### URL: http://outlook.com
- **Final URL:** https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f&sdf=0
- **Status Code:** 200
- **Headers:**
  - Accept-Ranges: bytes
  - Content-Type: text/html
  - ETag: "85de642e1467807f64f7e10807df3869:1711562737.176211"
  - Last-Modified: Tue, 26 Mar 2024 18:16:43 GMT
  - Server: AkamaiNetStorage
  - Vary: Accept-Encoding
  - Content-Encoding: gzip
  - Date: Fri, 18 Oct 2024 06:24:22 GMT
  - Content-Length: 12623
  - Connection: keep-alive
- **Content Snippet (first 500 characters):**
```

<!DOCTYPE html><html xmlns:mscom="http://schemas.microsoft.com/CMSvNext"
        xmlns:md="http://schemas.microsoft.com/mscom-data" lang="en-us"
        xmlns="http://www.w3.org/1999/xhtml"><head><link rel="shortcut icon"
                        href="//www.microsoft.com/favicon.ico?v2" /><link
                        type="text/css" rel="stylesheet"
                        href="https://assets.onestore.ms/cdnfiles/external/mwf/long/v1/v1.25.0/css/mwf-west-european-default.min.css"
     
```

---
### URL: http://ovhcloud.com
- **Final URL:** https://us.ovhcloud.com/
- **Status Code:** 200
- **Headers:**
  - server: nginx
  - date: Fri, 18 Oct 2024 06:24:23 GMT
  - content-type: text/html
  - transfer-encoding: chunked
  - vary: Accept-Encoding
  - x-frame-options: ORIGIN
  - x-xss-protection: 1; mode=block
  - x-content-type-options: nosniff
  - access-control-allow-origin: *
  - x-toujours-debout-location: BHS
  - x-toujours-debout-branch: B
  - cache-control: public, must-revalidate, max-age=90, private
  - content-encoding: gzip
  - x-iplb-request-id: 0A6F2047:35E0_C063418B:01BB_6711FF17_80F16:7386, 62B7DE60:C74F_93870066:01BB_6711FF17_199AFF50:5EC6
  - strict-transport-security: max-age=15768000
  - x-iplb-instance: 58927
  - set-cookie: SERVERID116590=411b079e|ZxH/G|ZxH/G; path=/; HttpOnly
- **Content Snippet (first 500 characters):**
```

<!DOCTYPE html>
<html lang="en-us" dir="ltr" prefix="og: https://ogp.me/ns#">
  <head>
    <meta charset="utf-8" />
<style>/* @see https://github.com/aFarkas/lazysizes#broken-image-symbol */.js img.lazyload:not([src]) { visibility: hidden; }/* @see https://github.com/aFarkas/lazysizes#automatically-setting-the-sizes-attribute */.js img.lazyloaded[data-sizes=auto] { display: block; width: 100%; }</style>
<link rel="canonical" href="https://us.ovhcloud.com/" />
<meta name="robots" content="index,
```

---
### URL: http://people.com
- **Final URL:** https://people.com/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - x-content-security-policy: frame-ancestors 'self' *.specless.io *.specless.tech http://*.seo.aws.about.com https://*.seo.aws.about.com http://*.dotdash.com https://*.dotdash.com *.people.com
  - referrer-policy: no-referrer-when-downgrade
  - x-abt-application-version: 2.122.0
  - link: <//people.com/static/2.122.0/cache/eNqVVlsW3CAI3VA9WUR_uwkSSWLHSCpmHrsvmvdMap2PGQG5oBeiVhwgmKYawAWLVcNcRQv-qD4nzAAdqtFCgz1Zjf7KaUBvtAFXGafxuXmkKTBuN9AwkkMXuAIvBoEvo2rIBZmoehow_eVAI9IomEXdV0R6sshHhAdj1d1opLSaJOX8a-CFkEaB5stF6PT74GH3eBjdoYw9mq4PP3twHf4yLPtDf2nMxOos1WAFBTqB4ViCUr_PsA7uppM5ctUUjDXhpcR0lDPglvwgDCH4pldROcoZ3IDMsZtqcJGJs1q22Hljaa27WAZtJ2u58Yguwc9qWQimxoBN8NQjm3pVkWtcHhN7y6Z91QReF3Vqa_Fp6vg5ZP0PYRPsMs2_2q8lClKxeci037VfvizJdy7JJn4Ftcbd-KSUwTUFDdyryZk7el4KdGnNBJRzz1K3DLnE-GCLIa5xgXxYMsR-g_7MvZ6bse7vh-bBjbGJxHA6f0f5NIXUyauROOzSt8BAo-JA3mCuLE1qy3wvbj5KtQhh8qjLFjN6ucX8S9WWmttZy6RLN1-irDPtVaIUgLcNvlSA7qz9ZzPSrELQJl3liJPFzp87Dw9aqrAIZTA2rpMDJe3jpGRoGMiZmzRjJOEgZxDHwHIJ6LfEs6lswesrInF0VL7sVrUzfWErC9ZLA8xGFUys-ruhsAYBhEAPialdzh3x_GcCvzxfkliWycrTT7bZIuqjXAZujI9cz5_WUSkmK_RyCc9detLKAgzA5KRLl_H7_l7PkktjpnvTUzJ1-yYVJl96YXmqndVceec8vx_yGH8JcBXKsqZX58zyLpay9ZyBq1AGqxGmsB66R6Xwm5Trd704Tkoh3NOg4qNUkHzW_gL9dgB-.min.css>; rel=preload; as=style; nopush, <//people.com/static/fonts/limerick_serial-regular-webfont.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin; nopush, <//people.com/static/fonts/limerick_serial-bold-webfont.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin; nopush, <//www.googletagmanager.com/gtm.js?id=GTM-P3X3VT7>; rel=preload; as=script; nopush, <//people.com/static/fonts/limerick_serial-italic-webfont.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin; nopush, <//people.com/static/fonts/limerick_serial-bolditalic-webfont.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin; nopush, <//www.googletagmanager.com/gtag/js?id=G-31EK5CQB08&l=dataLayer&cx=c>; rel=preload; as=script; nopush, <//securepubads.g.doubleclick.net/tag/js/gpt.js>; rel=preload; as=script; nopush, <//people.com/static/2.122.0/cache/eNqFkmFuwyAMhS80xhm2adqvSdXUCxBwiBuCI2wypacfiaY1qWgmAQK-h22erFmMoNWDiRJAWxpGihCFdTAzZdEXLkPZDmz_pPfiyyK6zoxXKAqKLfp7ye8pYMN7OUaBxGAFKdbiknHgKsAS9QhcIVkwoNRZG9URdjQc8gmio6SlSyTlqqIYykY1CUw_UvnaLUhhI9AY4HGCjeeWU7sulRRjbjg3FfD2ebrdkssBVq-_zq_LfIQkGduXzfsE23o3XzJzA7XXH6fzMmtITPIgGL1i00JAlpqKrTKOayRBqSbDeamtRPmTbCwqLxelH6XmkfGgJoTvA4-9DGsjBbS9kvtMu2LaBNyZJsCL4_86m59znABDVxqUfwAQc0C6.min.js>; rel=preload; as=script; nopush; group=top, <//people.com/static/2.122.0/cache/eNqNVG1y4yAMvdBqPT1D__YSMgisRkAWcFzn9AWcbp00oZnxGH28J0tC8pAyZlaDCu4YPPmchoW1pXKqOeXgQAmrA-SI6sDe3rf-GS5hHPos9KUJj2l4L8-_meJ6CyqOObNwZkowziwZFs4TPES7IsAJPYsgJBWDyC1qVwb7TNGjDJoMxcpvQiTdIakUTXs9yGIHRWNK8pgJhP0BIi2R8_ahgnIUFT3CdKLSx5Y1nzdO698P43eAoGehBhI8r4C94r4udiK2U36d0Ft645TJl7TvGTuxrISx9HYi1I1cj1-mAF9eVtCMEmwnsMcT2-IL_jIdKxTTXu6QTYguDYkwqgmqspc7PEcpoSUY0ddeXKsd3lbN5WhX81xlW79aYd_ic1Qzi5TZJ_KNfq3em4u6Jrjg-sO3iz9iahtmhD54FOrP0VXVvQ10pYk1rGXzH7bzJ1K1pDKQwdGxYgsmbj-VtJefI0vZs5TBEOm9DBJQgwuReh04saYA78tRcK1LfBF-GWlJf0ebKHebZTlMoKnG0zfqJ6U0GrM.min.js>; rel=preload; as=script; nopush; group=bottom
  - strict-transport-security: max-age=15552000
  - content-encoding: gzip
  - x-content-type-options: nosniff
  - content-type: text/html;charset=utf-8
  - content-security-policy: frame-ancestors 'self' *.specless.io *.specless.tech http://*.seo.aws.about.com https://*.seo.aws.about.com http://*.dotdash.com https://*.dotdash.com *.people.com
  - set-cookie: TMog=n9961bc14d66e4da6931e230d12c5b83606; Path=/; Domain=.people.com; Expires=Wed, 05-Nov-2092 09:38:30 GMT; Max-Age=2147483647, globalTI_SID=498687dd-4cce-4a53-993a-801ac1fe9a34; Path=/; Domain=.people.com; Expires=Sun, 18-Oct-2026 06:24:23 GMT; Max-Age=63072000, Mint=n9961bc14d66e4da6931e230d12c5b83606; Path=/; Domain=.people.com; Expires=Fri, 18-Oct-2024 06:54:23 GMT; Max-Age=1800, pc=1; Path=/; Domain=.people.com; Expires=Fri, 18-Oct-2024 06:54:23 GMT; Max-Age=1800
  - expires: Thu, 01 Jan 1970 00:00:00 GMT
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:24:24 GMT
  - Via: 1.1 varnish
  - X-Served-By: cache-iad-kjyo7100067-IAD, cache-iad-kjyo7100171-IAD
  - X-Cache: MISS
  - X-Cache-Hits: 0
  - X-Timer: S1729232664.900730,VS0,VE151
  - NEL: {"report_to":"network-errors","max_age":2592000,"success_fraction":0,"failure_fraction":1.0, "include_subdomains": true}
  - Report-To: {"group":"network-errors","max_age":2592000,"endpoints":[{"url":"https://r.3gl.net/hawklogserver/7815/re.p"}]}
  - transfer-encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html id="homeTemplate_1-0" class="comp homeTemplate html mntl-html no-js com.about.mantle.model.TaxeneLevelType@70a9b4eb taxlevel-0" data-ab="99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,81,53" data-mm-transactional-resource-version="1.14.20" data-people-resource-version="2.122.0" data-mm-ads-resource-version="1.2.135" data-mm-video-resource-version="1.4.5" data-mantle-resource-version="4.0.660" data-mm-digital-issues-resource-version="1.18.6" lang="en" data-tracking-co
```

---
### URL: http://php.net
- **Final URL:** https://www.php.net/
- **Status Code:** 200
- **Headers:**
  - Server: myracloud
  - Date: Fri, 18 Oct 2024 06:24:25 GMT
  - Content-Type: text/html; charset=utf-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Last-Modified: Fri, 18 Oct 2024 06:10:09 GMT
  - Content-language: en
  - Permissions-Policy: interest-cohort=()
  - X-Frame-Options: SAMEORIGIN
  - Set-Cookie: COUNTRY=NA%2C80.90.5.137; expires=Fri, 25 Oct 2024 06:24:25 GMT; Max-Age=604800; path=/; domain=.php.net, LAST_NEWS=1729232665; expires=Sat, 18 Oct 2025 06:24:25 GMT; Max-Age=31536000; path=/; domain=.php.net
  - Link: <https://www.php.net/index>; rel=shorturl
  - Content-Encoding: gzip
  - vary: accept-encoding
  - Expires: Fri, 18 Oct 2024 06:24:25 GMT
  - Cache-Control: max-age=0
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>PHP: Hypertext Preprocessor</title>

 <link rel="icon" type="image/svg+xml" sizes="any" href="https://www.php.net/favicon.svg?v=2">
 <link rel="icon" type="image/png" sizes="196x196" href="https://www.php.net/favicon-196x196.png?v=2">
 <link rel="icon" type="image/png" sizes="32x32" href="https://www.php.net/favi
```

---
### URL: http://pinterest.fr
- **Final URL:** https://fr.pinterest.com/
- **Status Code:** 200
- **Headers:**
  - x-xss-protection: 1; mode=block
  - x-content-type-options: nosniff
  - Vary: User-Agent, Accept-Encoding
  - x-ua-compatible: IE=edge
  - reporting-endpoints: coop-endpoint="https://www.pinterest.com/_/_/coop_report/", coep-endpoint="https://www.pinterest.com/_/_/coep_report/"
  - cross-origin-opener-policy-report-only: same-origin; report-to="coop-endpoint"
  - p3p: CP="This is not a P3P policy. See https://www.pinterest.com/_/_/help/articles/pinterest-and-p3p for more info."
  - Content-Security-Policy: default-src 'self' blob: s.pinimg.com; font-src 'self' s.pinimg.com data: fonts.googleapis.com fonts.gstatic.com use.typekit.net; style-src 'self' blob: 'unsafe-inline' data: *.pinimg.com *.pinterest.com accounts.google.com fonts.googleapis.com *.adyen.com *.adyenpayments.com; img-src blob: data: *; base-uri 'none'; connect-src 'self' blob: m.media-amazon.com *.pinimg.com *.pinterest.com accounts.google.com *.adyen.com pinterest-salvador.s3.amazonaws.com *.adyenpayments.com *.facebook.com www.googleapis.com *.dropboxapi.com pinterest-aberdeen.s3.amazonaws.com pinterest-aberdeen.s3.us-east-1.amazonaws.com pinterest-anaheim.s3.amazonaws.com pinterest-anaheim.s3.us-east-1.amazonaws.com pinterest-hilo.s3.amazonaws.com pinterest-hilo.s3.us-east-1.amazonaws.com pinterest-sim-toontown.s3.amazonaws.com pinterest-sim-toontown.s3.us-east-1.amazonaws.com pinterest-media-upload.s3.amazonaws.com pinterest-media-upload.s3.us-east-1.amazonaws.com pinterest-media-upload.s3-accelerate.amazonaws.com pinterest-media-upload.s3-accelerate.us-east-1.amazonaws.com pinterest-milwaukee.s3.amazonaws.com pinterest-milwaukee.s3.us-east-1.amazonaws.com pinterest-poughkeepsie.s3.amazonaws.com pinterest-poughkeepsie.s3.us-east-1.amazonaws.com pinterest-waterloo.s3.amazonaws.com pinterest-waterloo.s3.us-east-1.amazonaws.com pinterest-plymouth.s3.amazonaws.com pinterest-plymouth.s3.us-east-1.amazonaws.com pinterest-salvador.s3.us-east-1.amazonaws.com pinterest-yamagata.s3.amazonaws.com pinterest-yamagata.s3.us-east-1.amazonaws.com *.cedexis.com *.cedexis-radar.net *.tvpixel.com api.pinadmin.com *.live-video.net https://*.daily.co https://*.pluot.blue wss://*.wss.daily.co; form-action 'self' *.adyen.com *.sofort.com *.tink.com *.adyenpayments.com; frame-src 'self' *.pinimg.com *.pinterest.com *.adyen.com static-sandbox.dlocal.com static.dlocal.com *.google.com *.facebook.com www.recaptcha.net pinterest-hilo.s3.amazonaws.com pinterest-hilo.s3.us-east-1.amazonaws.com pinterest-sim-toontown.s3.amazonaws.com pinterest-sim-toontown.s3.us-east-1.amazonaws.com pinterest-milwaukee.s3.amazonaws.com pinterest-milwaukee.s3.us-east-1.amazonaws.com pinterest-waterloo.s3.amazonaws.com pinterest-waterloo.s3.us-east-1.amazonaws.com pinterest-tolu.s3.amazonaws.com *.pinterdev.com content.googleapis.com *.youtube.com *.youtube-nocookie.com *.ytimg.com player.vimeo.com calendly.com vine.co bid.g.doubleclick.net *.fls.doubleclick.net pinlogs.s3.amazonaws.com pinlogs.s3.us-east-1.amazonaws.com advertising-delivery-metric-reports.s3.amazonaws.com advertising-delivery-metric-reports.s3.us-east-1.amazonaws.com servedby.flashtalking.com pinterest-uk.admo.tv pinterest-uk-web.admo.tv fbrpc://call *.linkedin.com px.ads.linkedin.com; media-src 'self' blob: m.media-amazon.com data: *.pinimg.com *.live-video.net; object-src 'self'; script-src 'nonce-4451b196ff16a6ec5359344dd646a413' 'strict-dynamic' 'self' blob: 'unsafe-inline' *.pinimg.com *.pinterest.com *.adyen.com js.dlocal.com js-sandbox.dlocal.com static-sandbox.dlocal.com static.dlocal.com *.adyenpayments.com 'report-sample' *.google.com connect.facebook.net *.google-analytics.com *.facebook.com *.googleadservices.com *.doubleclick.net *.googletagmanager.com radar.cedexis.com *.cedexis-test.com www.gstatic.com/recaptcha/ www.gstatic.cn/recaptcha/ www.recaptcha.net 'wasm-unsafe-eval'; worker-src 'self' blob: 'unsafe-inline'; report-uri /_/_/csp_report/?rid=1695580806879886; frame-ancestors 'self' , script-src 'self' blob: 'unsafe-inline' *.pinimg.com *.pinterest.com *.adyen.com js.dlocal.com js-sandbox.dlocal.com static-sandbox.dlocal.com static.dlocal.com *.adyenpayments.com 'report-sample' *.google.com connect.facebook.net *.google-analytics.com *.facebook.com *.googleadservices.com *.doubleclick.net *.googletagmanager.com radar.cedexis.com *.cedexis-test.com www.gstatic.com/recaptcha/ www.gstatic.cn/recaptcha/ www.recaptcha.net 'wasm-unsafe-eval'; report-uri /_/_/csp_report/?rid=1695580806879886
  - x-frame-options: SAMEORIGIN
  - origin-trial: AvlUIFJouPpJAKljRGh7EnYm2Brnx/eu51h39Z7p11vbzNlw2YhkUhxvxZdkS709VlGGNw4Gcg/a9mAzHDrEcQ0AAAB5eyJvcmlnaW4iOiJodHRwczovL3BpbnRlcmVzdC5jb206NDQzIiwiZmVhdHVyZSI6IlNlbmRGdWxsVXNlckFnZW50QWZ0ZXJSZWR1Y3Rpb24iLCJleHBpcnkiOjE2ODQ4ODYzOTksImlzU3ViZG9tYWluIjp0cnVlfQ==
  - Accept-CH: Sec-CH-UA-Full,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Model,Sec-CH-UA-Platform-Version
  - Content-Type: text/html; charset=utf-8
  - Link: <https://i.pinimg.com>; rel=preconnect; crossorigin=anonymous, <https://s.pinimg.com>; rel=preconnect; crossorigin=anonymous, <https://v1.pinimg.com>; rel=preconnect; crossorigin=anonymous
  - Trailer: x-pinterest-sli-streamed-response-type
  - x-envoy-upstream-service-time: 135
  - pinterest-generated-by: coreapp-webapp-prod-0a039287
  - Content-Encoding: gzip
  - pinterest-version: d4c12f0
  - referrer-policy: origin
  - x-pinterest-rid: 1695580806879886
  - x-pinterest-rid-128bit: 7ebc922af2846863eb4f219a54755254
  - Date: Fri, 18 Oct 2024 06:24:26 GMT
  - Alt-Svc: h3=":443"; ma=600
  - Transfer-Encoding: chunked
  - Connection: keep-alive, Transfer-Encoding
  - Set-Cookie: csrftoken=92185628e10e5f053fcf93823dcf3013; path=/; expires=Sat, 18 Oct 2025 06:24:26 GMT; samesite=lax; secure, _pinterest_sess=TWc9PSZuMVpydEYxOXRpYjRORllmeG9oWjV4MHlwT2lyWmc2RjNoRGhUc2lRMjBOQXNuczBNMFFodXo4d2dNMjhjaFUxTkptaWoyb3cxNTZFWE51Q3ByNUZUZGNVRi9wNE1oNUYvZGFGcktjV0FsQT0mY1JNc2JYb1hiTnJzWUFkRHNjUHJ3cysydWtRPQ==; path=/; expires=Mon, 13 Oct 2025 06:24:26 GMT; domain=.pinterest.com; samesite=none; secure; httponly, _auth=0; path=/; expires=Mon, 13 Oct 2025 06:24:26 GMT; domain=.pinterest.com; secure; httponly, _routing_id="11297ae0-5234-4cf7-a8a6-497a5adbebfa"; Max-Age=86400; Path=/; HttpOnly
  - AKAMAI-GRN: 0.f2c83017.1729232666.9575ba28
  - X-CDN: akamai
  - Strict-Transport-Security: max-age=31536000 ; includeSubDomains ; preload
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html class="en" lang="en"><head><meta charSet="utf-8"/><meta content="AobcHP0Riuw7qx+GcJ79jLXxzvz+vbYglMh02KHK8du7LYn9e2JLytVX5ABrS3PMoEeAZ5HxTvNW05uVVfni5gEAAAByeyJvcmlnaW4iOiJodHRwczovL3BpbnRlcmVzdC5jb206NDQzIiwiZmVhdHVyZSI6IkxvbmdBbmltYXRpb25GcmFtZVRpbWluZyIsImV4cGlyeSI6MTcxNjk0MDc5OSwiaXNTdWJkb21haW4iOnRydWV9" http-equiv="origin-trial"/><meta content="width=device-width, initial-scale=1" id="viewport" name="viewport"/><meta content="default-src &#x27;self&#x27; blob: s.pinimg
```

---
### URL: http://pl.wikipedia.org
- **Final URL:** https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna
- **Status Code:** 200
- **Headers:**
  - date: Thu, 17 Oct 2024 22:09:02 GMT
  - server: mw-web.eqiad.main-685877499b-58khb
  - x-content-type-options: nosniff
  - content-language: pl
  - accept-ch: 
  - vary: Accept-Encoding,Cookie,Authorization
  - last-modified: Thu, 17 Oct 2024 22:07:37 GMT
  - content-type: text/html; charset=UTF-8
  - content-encoding: gzip
  - age: 29724
  - x-cache: cp1102 miss, cp1102 hit/169
  - x-cache-status: hit-front
  - server-timing: cache;desc="hit-front", host;desc="cp1102"
  - strict-transport-security: max-age=106384710; includeSubDomains; preload
  - report-to: { "group": "wm_nel", "max_age": 604800, "endpoints": [{ "url": "https://intake-logging.wikimedia.org/v1/events?stream=w3c.reportingapi.network_error&schema_uri=/w3c/reportingapi/network_error/1.0.0" }] }
  - nel: { "report_to": "wm_nel", "max_age": 604800, "failure_fraction": 0.05, "success_fraction": 0.0}
  - x-client-ip: 2600:8805:1729:2d00:1904:cdc3:e05:6073
  - cache-control: private, s-maxage=0, max-age=0, must-revalidate, no-transform
  - accept-ranges: bytes
  - content-length: 23726
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html class="client-nojs vector-feature-language-in-header-enabled vector-feature-language-in-main-page-header-enabled vector-feature-sticky-header-disabled vector-feature-page-tools-pinned-disabled vector-feature-toc-pinned-clientpref-1 vector-feature-main-menu-pinned-disabled vector-feature-limited-width-clientpref-1 vector-feature-limited-width-content-disabled vector-feature-custom-font-size-clientpref-1 vector-feature-appearance-pinned-clientpref-1 vector-feature-night-mode-
```

---
### URL: http://play.google.com
- **Final URL:** https://play.google.com/store/games?device=windows
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=utf-8
  - Vary: Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site
  - x-ua-compatible: IE=edge
  - Cache-Control: no-cache, no-store, max-age=0, must-revalidate
  - Pragma: no-cache
  - Expires: Mon, 01 Jan 1990 00:00:00 GMT
  - Date: Fri, 18 Oct 2024 06:24:27 GMT
  - Strict-Transport-Security: max-age=31536000
  - Content-Security-Policy: script-src 'report-sample' 'nonce-yzx1a5z89UUWmSquzzpaWQ' 'unsafe-inline' 'unsafe-eval';object-src 'none';base-uri 'self';report-uri /_/PlayStoreUi/cspreport;worker-src 'self', script-src 'unsafe-inline' 'unsafe-eval' blob: data: 'self' https://apis.google.com https://ssl.gstatic.com https://www.google.com https://www.googletagmanager.com https://www.gstatic.com https://www.google-analytics.com https://market.android.com https://clients2.google.com https://payments.sandbox.google.com https://payments.google.com https://maps.googleapis.com https://translate.googleapis.com https://translate.google.com https://support.google.com https://www.gstatic.cn https://families.google.com https://clients1.google.com https://myaccount.google.com https://accounts.google.com https://support.google.com/inapp/ https://www.google.com/tools/feedback/ https://www.gstatic.com/inproduct_help/ https://www.gstatic.com/support/content/ https://www.googleapis.com/appsmarket/v2/installedApps/;report-uri /_/PlayStoreUi/cspreport/allowlist, require-trusted-types-for 'script';report-uri /_/PlayStoreUi/cspreport
  - Content-Security-Policy-Report-Only: script-src 'unsafe-inline' 'unsafe-eval' blob: data: https://www.googletagmanager.com/gtag/js https://www.google-analytics.com/analytics.js https://www.googletagmanager.com/gtag/destination https://www.gstatic.com/_/mss/boq-one-google/_/ https://www.gstatic.com/og/_/js/ https://apis.google.com/js/api.js https://apis.google.com/js/client.js https://www.google.com/tools/feedback/load.js https://www.google.com/tools/feedback/open.js https://www.gstatic.com/inproduct_help/service/lazy.min.js https://www.gstatic.com/inproduct_help/api/main.min.js https://www.gstatic.com/inproduct_help/chatsupport/chatsupport_button_v2.js https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js https://www.gstatic.com/uservoice/feedback/client/web/live/ https://www.google.com/tools/feedback/chat_load.js https://www.gstatic.com/uservoice/surveys/resources/prod/js/survey/ https://www.gstatic.com/feedback/js/ghelp/ https://www.google.com/js/bg/ https://www.gstatic.com/_/boq-play/_/js/k=boq-play.PlayStoreUi.en_US.ymBkJmw9rOA.2021.O/ https://apis.google.com/_/scs/abc-static/_/js/;report-uri /_/PlayStoreUi/cspreport/fine-allowlist
  - Permissions-Policy: ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factors=*, ch-ua-platform=*, ch-ua-platform-version=*
  - Accept-CH: Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factors, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version
  - Cross-Origin-Opener-Policy: same-origin-allow-popups
  - Cross-Origin-Resource-Policy: same-site
  - reporting-endpoints: default="/_/PlayStoreUi/web-reports?context=eJzjCtHikmII1pBikPj6kkkNiJ3SZ7AGAHHrzXOsk4E46d951gIgNlS4xGoPxKo9l1iNgbhI4gprAxBz1Nxj5QHi2f33WOcDcezse6xCPByz_x3fwSbw4N7beYxK8kn5hfEFOYmVpZnFqUVlqUXxRgZGJoYGhmZ6BqbxBQYAadMzBw"
  - Content-Encoding: gzip
  - Server: ESF
  - X-XSS-Protection: 0
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
  - Transfer-Encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!doctype html><html lang="en-US" dir="ltr"><head><base href="https://play.google.com/"><link rel="preconnect" href="//www.gstatic.com"><meta name="referrer" content="origin"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="google-site-verification" content="sBw2N8uateIzRr93vmFze5MF_35vMk5F1wG04L5JcJE"><meta name="google-site-verification" content="PJKdyVFC5jlu
```

---
### URL: http://playstation.com
- **Final URL:** https://www.playstation.com/en-us/
- **Status Code:** 200
- **Headers:**
  - Server: Apache
  - Content-Type: text/html;charset=utf-8
  - Set-Cookie: sbsd_o=47C2AA23F8C549266C41F2787C1F294166B4F0E03FDD3E46EEA5E5B1EC116E98~sHxzjU/k5vuuy9xLaU1Mrmaf6OmVVad5PRspPxOfWJcJZvbbdncvcxzmW3TIP7YXHBQSIlrrQI9bfc6P5Odlz00Or4yy4KLgir51XtAzGTdfEZm6Yf7zKhjxNk4SxILGezugNsgsqojvfhQyMcfmi+LOJ9q1uefLGofAfXvUfN+0K3dkUz1WP0ut8Hs814h74jqfZRphaYfOHvNmKnLDEZg3nmcZLsrX1GTmbexsoX+6hhdABRtoRGD+tqi+qfXiT; Secure; SameSite=None; Domain=.playstation.com; Path=/; Max-Age=86400, sbsd=sC/209Cl5qUcKvyOPGtt3iU1+VXgW5zSy9yYAb7jmKIj6+MbLwluPC/KdLbtiXlxH9SjmY14dj2hFccWTYji9bho5lswbFcqGeLOdfqa8P5feDD9GsrXf+DdXEUZaDG02dMR08WXltR3NbxBV/Si2SqXxoNhi49rF4yhQwGb3Z+ZRh2i/10vqDThvrxvb3IGT; Secure; SameSite=None; Domain=.playstation.com; Path=/; HttpOnly; Max-Age=2678400
  - Strict-Transport-Security: max-age=63072000; includeSubdomains; preload;
  - Vary: Accept-Encoding
  - X-Vhost: publish
  - X-Frame-Options: SAMEORIGIN
  - X-Dispatcher: dispatcher1apnortheast1-b80
  - X-Content-Type-Options: nosniff
  - X-Akamai-Transformed: 9 512057 0 pmb=mTOE,1
  - Content-Encoding: gzip
  - Expires: Fri, 18 Oct 2024 06:24:28 GMT
  - Cache-Control: max-age=0, no-cache, no-store
  - Pragma: no-cache
  - Date: Fri, 18 Oct 2024 06:24:28 GMT
  - Transfer-Encoding: chunked
  - Connection: keep-alive, Transfer-Encoding
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE HTML><html lang="en-US" xml:lang="en-US" dir="ltr"><head><link rel="preload" media="(min-width: 768px) and (max-width: 1023px)" href="https://gmedia.playstation.com/is/image/SIEPDC/metaphor-refantazio-homepage-hero-desktop-01-en-11oct24?$1200px$" as="image"/><link rel="preload" media="(min-width: 1024px) and (max-width: 1366px)" href="https://gmedia.playstation.com/is/image/SIEPDC/metaphor-refantazio-homepage-hero-desktop-01-en-11oct24?$1600px$" as="image"/><link rel="preload" media="(
```

---
### URL: http://plos.org
- **Final URL:** https://plos.org/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:24:28 GMT
  - Content-Type: text/html; charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - CF-Ray: 8d4672134dd99292-ORF
  - CF-Cache-Status: HIT
  - Access-Control-Allow-Origin: *
  - Age: 2655
  - Cache-Control: public, max-age=0, s-maxage=3600
  - Last-Modified: Fri, 18 Oct 2024 04:51:44 GMT
  - Link: <https://plos.org/wp-json/>; rel="https://api.w.org/", <https://plos.org/wp-json/wp/v2/pages/51>; rel="alternate"; title="JSON"; type="application/json", <https://plos.org/>; rel=shortlink
  - Vary: Accept-Encoding
  - ki-Cache-Tag: 4a23e41a-8890-4216-808b-57e0278bb098,99039c56822bdf8304bc31cd22c0635e5dc220009453511a799228292d02c698
  - ki-cache-type: Edge
  - Ki-CF-Cache-Status: HIT
  - ki-edge: v=20.2.8;mv=3.1.2
  - ki-origin: g1p
  - X-Content-Type-Options: nosniff
  - X-Edge-Location-Klb: 1
  - x-kinsta-cache: HIT
  - Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=eV0l5xZ5wf6YHvSQ6%2B3Wx%2FD93JdwaBNR%2B1tfT4dfCSmvQG3GeRfqtLCAPnKdntsajs5RwGue%2FDKa%2BaJESh3WXlfG9ma7EHGeiLj0G8aWwL2uW3ZgFb7Xg%2FEOS12JXll4y9XMpeBk"}],"group":"cf-nel","max_age":604800}
  - NEL: {"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}
  - Server: cloudflare
  - Content-Encoding: gzip
  - alt-svc: h3=":443"; ma=86400
- **Content Snippet (first 500 characters):**
```
<!doctype html>
<html lang="en-US">
  <head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  
      <script>
    const tracking = null;
  </script>

  <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

	<!-- This site is optimized with the Yoast SEO plugin v23.4 - https://yoast.com/wordpress/plugins/seo/ -->
	<tit
```

---
### URL: http://prezi.com
- **Final URL:** https://prezi.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:24:29 GMT
  - Content-Type: text/html; charset=utf-8
  - Content-Length: 13961
  - Connection: keep-alive
  - Vary: Cookie, Accept-Language, Accept-Encoding
  - X-Frame-Options: DENY
  - Content-Language: en
  - X-Content-Type-Options: nosniff, nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Content-Encoding: gzip
  - Set-Cookie: csrftoken=m4gXAHC4UutLcAPVhsOChblemn3PEL6V; Domain=.prezi.com; expires=Fri, 17 Oct 2025 06:24:29 GMT; Max-Age=31449600; Path=/; SameSite=Lax, __putma=a13c9950-8d19-11ef-9a2b-26dfcb8cb1ab; Domain=.prezi.com; expires=Thu, 13 Oct 2044 06:24:29 GMT; Max-Age=630720000; Path=/; SameSite=none; Secure
  - Permissions-Policy: usb=(), xr-spatial-tracking=()
  - Strict-Transport-Security: max-age=31536000; includeSubDomains
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html data-wf-page="66211787b03806cf39c1dffb" data-wf-site="64be3ac6d7e811ba37809e1c" lang="en"><head><!-- OneTrust Cookies Consent Notice start --><script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="babb4261-7c8b-4e0d-9b99-ce4e6e126a13"></script><script src="https://package-bundles.prezi.com/cookie-consent/cookie-consent.1.0.6/cookie-consent.js"></script><!-- OneTrust Cookies
```

---
### URL: http://pt.wikipedia.org
- **Final URL:** https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal
- **Status Code:** 200
- **Headers:**
  - date: Thu, 17 Oct 2024 22:10:18 GMT
  - server: mw-web.eqiad.main-685877499b-mx8xq
  - x-content-type-options: nosniff
  - content-language: pt
  - accept-ch: 
  - vary: Accept-Encoding,Cookie,Authorization
  - last-modified: Thu, 17 Oct 2024 22:07:37 GMT
  - content-type: text/html; charset=UTF-8
  - content-encoding: gzip
  - age: 29650
  - x-cache: cp1102 miss, cp1102 hit/164
  - x-cache-status: hit-front
  - server-timing: cache;desc="hit-front", host;desc="cp1102"
  - strict-transport-security: max-age=106384710; includeSubDomains; preload
  - report-to: { "group": "wm_nel", "max_age": 604800, "endpoints": [{ "url": "https://intake-logging.wikimedia.org/v1/events?stream=w3c.reportingapi.network_error&schema_uri=/w3c/reportingapi/network_error/1.0.0" }] }
  - nel: { "report_to": "wm_nel", "max_age": 604800, "failure_fraction": 0.05, "success_fraction": 0.0}
  - x-client-ip: 2600:8805:1729:2d00:1904:cdc3:e05:6073
  - cache-control: private, s-maxage=0, max-age=0, must-revalidate, no-transform
  - accept-ranges: bytes
  - content-length: 46531
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html class="client-nojs vector-feature-language-in-header-enabled vector-feature-language-in-main-page-header-disabled vector-feature-sticky-header-disabled vector-feature-page-tools-pinned-disabled vector-feature-toc-pinned-clientpref-1 vector-feature-main-menu-pinned-disabled vector-feature-limited-width-clientpref-1 vector-feature-limited-width-content-disabled vector-feature-custom-font-size-clientpref-1 vector-feature-appearance-pinned-clientpref-1 vector-feature-night-mode
```

---
### URL: http://reverbnation.com
- **Final URL:** https://www.reverbnation.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:24:29 GMT
  - Content-Type: text/html; charset=utf-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - server: Apache
  - x-frame-options: SAMEORIGIN
  - x-xss-protection: 1; mode=block
  - x-digits-of-pi: 
  - etag: W/"8c79dfd02a62ffb696f0ef3593b45703"
  - cache-control: max-age=0, private, must-revalidate
  - x-request-id: 60249140-2f4a-475f-af42-b7763e828205
  - x-runtime: 0.083293
  - set-cookie: _reverbnation_session=5dc839dcf03a94774dc8acf4d314dbc4; domain=.reverbnation.com; path=/; expires=Fri, 18 Oct 2024 18:24:29 GMT; secure; HttpOnly; SameSite=None
  - x-ua-compatible: IE=Edge,chrome=1
  - p3p: CP="DSP ALL COR OUR SAMi UNRi CUR ADM TAI IVA IVD CONo BUS DEM UNI STA LOC NAV COM INT", policyref="/w3c/p3p.xml"
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta http-equiv="Content-language" content="en"/>
  <title>ReverbNation : Artists First</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="description" content="ReverbNation helps Artists grow lasting careers by introducing them to music industry partners, exposing them to fans, and 
```

---
### URL: http://sakura.ne.jp
- **Final URL:** https://rs.sakura.ad.jp/
- **Status Code:** 200
- **Headers:**
  - Server: nginx
  - Date: Fri, 18 Oct 2024 06:24:34 GMT
  - Content-Type: text/html; charset=UTF-8
  - Content-Length: 9330
  - Connection: keep-alive
  - Vary: Accept-Encoding,User-Agent
  - Content-Encoding: gzip
  - Cache-Control: max-age=0, must-revalidate, s-maxage=60, public
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block
  - Strict-Transport-Security: max-age=15768000
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description"
    content="高速、安定サーバーならさくらのレンタルサーバ！PHP7モジュールモードでWordPress高速化。無料SSL、Webフォント、バックアップ機能などWebサイト制作に便利な機能が充実。ドメイン取得、WordPressインストールも簡単。無料電話サポートで個人から法人まで安心してお使いいただけます。">
  <meta name="keywords" content="レンタルサーバー,サーバー">
  <meta name="format-detection" content="telephone=no">
  <title>さく
```

---
### URL: http://samsung.com
- **Final URL:** https://www.samsung.com/us/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=UTF-8
  - Vary: Accept-Encoding
  - X-Frame-Options: SAMEORIGIN
  - Last-Modified: Fri, 18 Oct 2024 03:46:03 GMT
  - ETag: W/"bcd97-624b824604418"
  - Strict-Transport-Security: max-age=31536000
  - X-XSS-Protection: 0
  - X-Akamai-Transformed: 9 - 0 pmb=mRUM,3
  - Content-Encoding: gzip
  - Date: Fri, 18 Oct 2024 06:24:36 GMT
  - Transfer-Encoding: chunked
  - Connection: keep-alive, Transfer-Encoding
  - Set-Cookie: device_type=pc; path=/; domain=.samsung.com
  - Server-Timing: cdn-cache; desc=HIT, edge; dur=1, ak_p; desc="1729232675940_400320660_42669354_3137_23605_26_0_-";dur=1
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>

<html lang="en">
    
    <head>
	<!-- PWA - manifest
	<link rel="manifest" href="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/pwa/manifest/us.json">
	 -->
	<!-- PWA - Browser Compatible
	<script async src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/pwa/js/pwacompat.js"></script>
	 -->
	<!-- <meta name="theme-color" content="#0c4da2"> -->
	<!-- Add to home screen for Safari on iOS -->
    <!-- <meta
```

---
### URL: http://search.yahoo.com
- **Final URL:** https://search.yahoo.com/
- **Status Code:** 200
- **Headers:**
  - date: Fri, 18 Oct 2024 06:24:36 GMT
  - p3p: policyref="https://policies.yahoo.com/w3c/p3p.xml", CP="CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE LOC GOV"
  - set-cookie: PROMO=ono_sc=1&ono_fts=1729232676&ltv_pid=&ltv_new=1&ltv_ts=1729232676&ltv_sts=1729232676&ltv_c=1; expires=Sat, 18-Oct-2025 06:24:36 GMT; Max-Age=31536000; path=/; domain=.search.yahoo.com
  - secure_search_bypass: true
  - x-frame-options: DENY
  - content-security-policy: frame-ancestors 'none'; default-src 'self' https://*.yahoo.com https://*.yimg.com; script-src 'self' 'unsafe-inline' 'nonce-OQvXYkV7T8QJnPp2vqtWAQ==' 'unsafe-eval' https://*.yahoo.net https://*.yahoo.com https://*.yimg.com https://*.uservoice.com *.oath.com https://*.hereapi.com https://*.youtube.com *.yahooapis.com blob:; style-src 'self' 'unsafe-inline' https://assets.video.yahoo.net https://*.yimg.com; img-src 'self' data: blob: https://*.aol.com https://s.aolcdn.com https://*.bing.net https://*.yimg.com https://s.ytimg.com yahoo.com https://*.yahoo.com https://*.bing.com https://bing.com *.here.com *.wc.yahoodns.net https://*.doubleclick.net https://sb.scorecardresearch.com https://*.adaptv.advertising.com https://*.vidible.tv https://*.yahoo.net https://*.footprint.net https://*.akamaized.net https://*.cloudfront.net https://*.llnwd.net; frame-src 'self' https://*.yahoo.net https://*.youtube.com https://s.yimg.com https://*.yahoo.com https://yahoo.uservoice.com https://*.vidible.tv https://*.advertising.com https://fun.games.com/ https://interactives.ap.org; media-src * blob:; object-src *; connect-src * blob:; font-src * data:; child-src blob:;
  - vary: Accept-Encoding
  - content-encoding: gzip
  - cache-control: private
  - content-length: 39605
  - content-type: text/html; charset=UTF-8
  - x-envoy-upstream-service-time: 31
  - server: ATS
  - Age: 0
  - Connection: keep-alive
  - Strict-Transport-Security: max-age=31536000
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block; report=https://csp.search.yahoo.com/xssreport
  - Referrer-Policy: no-referrer-when-downgrade
- **Content Snippet (first 500 characters):**
```
<!doctype html><html id="atomic" class="NoJs" lang="en-US"><head><meta http-equiv="content-type" content="text/html; charset=UTF-8"><title>Yahoo Search - Web Search</title><meta name="description" content="The search engine that helps you find exactly what you're looking for. Find the most relevant information, video, images, and answers from all across the Web."><meta name="oath:guce:consent-host" content="guce.yahoo.com"/><link rel="apple-touch-icon" sizes="76x76" href="https://s.yimg.com/pv/s
```

---
### URL: http://sina.com.cn
- **Final URL:** https://www.sina.com.cn/
- **Status Code:** 200
- **Headers:**
  - Server: Tengine
  - Content-Type: text/html
  - Content-Length: 115947
  - Connection: keep-alive
  - Date: Fri, 18 Oct 2024 06:24:38 GMT
  - Vary: Accept-Encoding
  - ETag: W/"6711ff02-5e31a"V=5965C31
  - X-Powered-By: shci_v1.13
  - Expires: Fri, 18 Oct 2024 06:25:21 GMT
  - Cache-Control: max-age=60
  - Content-Encoding: gzip
  - X-Via-SSL: ssl.32.sinag1.bx.lb.sinanode.com
  - Edge-Copy-Time: 1729232661036
  - Via: http/1.1 ctc.guangzhou.union.184 (ApacheTrafficServer/6.2.1 [cRs f ]), ens-cache2.l2us3[285,285,200-0,M], ens-cache27.l2us3[288,0], ens-cache14.us26[307,307,200-0,M], ens-cache3.us26[310,0]
  - X-Via-CDN: f=aliyun,s=ens-cache3.us26,c=2600:8805:1729:2d00:1904:cdc3:e05:6073;f=sinaedge,s=ctc.guangzhou.union.51.nb.sinaedge.com,c=163.181.67.150;f=Edge,s=ctc.guangzhou.union.184,c=10.31.54.51
  - X-Via-Edge: 17292326782169643b5a333361f0a49ebae19
  - X-Ali-Tproxy-Consistent-Hash-Hot: 1
  - Age: 18
  - Ali-Swift-Global-Savetime: 1729232678
  - X-Cache: MISS TCP_REFRESH_MISS dirn:-2:-2
  - X-Swift-SaveTime: Fri, 18 Oct 2024 06:24:38 GMT
  - X-Swift-CacheTime: 60
  - Timing-Allow-Origin: *
  - EagleId: 0819529717292326780953284e
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<!-- [ published at 2024-10-18 14:24:00 ] -->
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>æ°æµªç½</title>
	<meta name="keywords" content="æ°æµª,æ°æµªç½,SINA,sina,sina.com.cn,æ°æµªé¦é¡µ,é¨æ·,èµè®¯" />
	<meta name="description" content="æ°æµªç½ä¸ºå¨çç¨æ·24å°æ¶æä¾å¨é¢åæ¶çä¸­æèµè®¯ï¼åå®¹è¦çå½åå¤çªåæ°é»äºä»¶ãä½åèµäºã
```

---
### URL: http://spiegel.de
- **Final URL:** https://www.spiegel.de/
- **Status Code:** 200
- **Headers:**
  - Accept-Ranges: bytes
  - Cache-Control: public, max-age=0,s-maxage=90
  - Content-Encoding: gzip
  - Content-Security-Policy: frame-ancestors 'self'
  - Content-Type: text/html; charset=utf-8
  - Date: Fri, 18 Oct 2024 06:23:24 GMT
  - Strict-Transport-Security: max-age=2592000;
  - Vary: X-Forwarded-Proto, X-Authorized-Sppur, Accept-Encoding
  - X-Cache: HIT
  - X-Cache-Grace: 3600.000
  - Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
  - Transfer-Encoding: chunked
  - Via: 1.1 google
- **Content Snippet (first 500 characters):**
```
<!doctype html><html lang="de">
<head>
<title>DER SPIEGEL | Online-Nachrichten</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes">
<meta name="MSSmartTagsPreventParsing" content="true">
<meta http-equiv="imagetoolbar" content="no">
<meta name="referrer" content="origin-when-cross-origin">
<meta name="apple-itunes-app" content="app-id=424881832">
<link rel="manifest" href="https://www.spiegel.de/public/spon/json/manifest.json">
<met
```

---
### URL: http://support.google.com
- **Final URL:** https://support.google.com/
- **Status Code:** 200
- **Headers:**
  - P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info.", CP="This is not a P3P policy! See g.co/p3phelp for more info."
  - Strict-Transport-Security: max-age=31536000; includeSubdomains
  - Content-Type: text/html; charset=UTF-8
  - Date: Fri, 18 Oct 2024 06:24:40 GMT
  - Expires: Fri, 18 Oct 2024 06:24:40 GMT
  - Cache-Control: private, max-age=0
  - Content-Security-Policy-Report-Only: object-src 'none';base-uri 'self';script-src 'nonce-WnV41/vykclOKuHbI8Br' 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http: 'report-sample';report-uri https://csp.withgoogle.com/csp/scfe
  - X-Content-Type-Options: nosniff
  - Content-Encoding: gzip
  - Server: support-content-ui
  - X-XSS-Protection: 0
  - X-Frame-Options: SAMEORIGIN
  - Set-Cookie: NID=518=XiUV4iYBIkhOMdrR2eaFbHrW_9IbdMFDxp1EQ0UjvtoR-N9BZJJVc4GYQoScO5YwPKbcUD6I5wB-42aBRi_lU8k5TCjPcL238xPuzqv-tZVvlSHuAUhnxTKoK-KG18zNq8rLMImXlSDQQAOOD7sNdOQlrYjQ0ICJbCAovv6g6XLZzZpVWg; expires=Sat, 19-Apr-2025 06:24:40 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none, NID=518=XiUV4iYBIkhOMdrR2eaFbHrW_9IbdMFDxp1EQ0UjvtoR-N9BZJJVc4GYQoScO5YwPKbcUD6I5wB-42aBRi_lU8k5TCjPcL238xPuzqv-tZVvlSHuAUhnxTKoK-KG18zNq8rLMImXlSDQQAOOD7sNdOQlrYjQ0ICJbCAovv6g6XLZzZpVWg; expires=Sat, 19-Apr-2025 06:24:40 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none
  - Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
  - Transfer-Encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!doctype html><html class="hcfe" data-page-type="PORTAL" lang="en"><head><title>Google Help</title><meta content="email=no" name="format-detection"><meta content="follow,index" name="robots"><meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"><meta content="" name="description"><meta content="XDaf09mosy9iTj6dOnwb6sKTrNhfKwOS6v98lPV0dEE" name="google-site-verification"><link href="https://support.google.com/?hl=en" rel="canonical"><meta content="width=device-width,initial-scale=1,minim
```

---
### URL: http://thefreedictionary.com
- **Final URL:** https://www.thefreedictionary.com
- **Status Code:** 200
- **Headers:**
  - Cache-Control: no-cache
  - Pragma: no-cache
  - Content-Type: text/html; charset=utf-8
  - Content-Encoding: gzip
  - Content-Language: en
  - Expires: -1
  - Last-Modified: Fri, 18 Oct 2024 04:00:00 GMT
  - Vary: Accept-Encoding
  - Date: Fri, 18 Oct 2024 06:24:41 GMT
  - Content-Length: 24409
- **Content Snippet (first 500 characters):**
```
<!Doctype html>
<html> 
<head>
<title>Dictionary, Encyclopedia and Thesaurus - The Free Dictionary</title>
<meta name="description" content="The World&#39;s most comprehensive free online dictionary, thesaurus, and encyclopedia with synonyms, definitions, idioms, abbreviations, and medical, financial, legal specialized dictionaries">
<base href="//www.thefreedictionary.com/">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="content-language" content
```

---
### URL: http://theverge.com
- **Final URL:** https://www.theverge.com/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 121680
  - Content-Type: text/html; charset=utf-8
  - content-security-policy: frame-ancestors https://voxmedia.stories.usechorus.com 'self'
  - etag: "bzzvoed683iugt"
  - content-encoding: gzip
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:24:42 GMT
  - Via: 1.1 varnish
  - Age: 2454
  - X-Served-By: cache-iad-kiad7000120-IAD
  - X-Cache: HIT
  - X-Cache-Hits: 3
  - X-Timer: S1729232682.001142,VS0,VE0
  - Vary: Accept-Encoding, X-Vox-Duet-Beta-Cookie, X-Chorus-Unison-Testing, X-Chorus-Require-Privacy-Consent, X-Chorus-Restrict-In-Privacy-Consent-Region
  - Set-Cookie: vmidv1=294c0460-a160-4d37-9894-972005b1dc72;Expires=Wed, 17 Oct 2029 06:24:42 GMT;Domain=theverge.com;Path=/;SameSite=Lax;Secure
  - Cache-Control: no-store,private
  - alt-svc: h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta name="description" content="The Verge is about technology and how it makes us feel. Founded in 2011, we offer our audience everything from breaking news to reviews to award-winning features and investigations, on our site, in video, and in podcasts."/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:site" content="@verge"/><meta property="fb:app_id" content="549923288395304"/><meta property="og:descript
```

---
### URL: http://usgs.gov
- **Final URL:** https://www.usgs.gov/
- **Status Code:** 200
- **Headers:**
  - Content-Type: text/html; charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Date: Fri, 18 Oct 2024 06:24:35 GMT
  - Server: nginx
  - Cache-Control: must-revalidate, no-cache, private
  - Content-Language: en
  - Expires: Sun, 19 Nov 1978 05:00:00 GMT
  - X-Generator: Drupal 10 (https://www.drupal.org)
  - X-Drupal-Cache: MISS
  - Content-Encoding: gzip
  - Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  - Vary: Accept-Encoding
  - X-Cache: Hit from cloudfront
  - Via: 1.1 e6aeeb7570ed691a78ca7b97af923d2a.cloudfront.net (CloudFront)
  - X-Amz-Cf-Pop: IAD55-P7
  - Alt-Svc: h3=":443"; ma=86400
  - X-Amz-Cf-Id: tzuXO_C4w46mBSpg_DqSK4Dm9BYPfT84Mp95nzINe0rfN_Y8noCvVg==
  - Age: 7
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-KWRSKS');</script>
  <!-- End Google Tag Manager -->


```

---
### URL: http://vistaprint.com
- **Final URL:** https://www.vistaprint.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:24:43 GMT
  - Content-Type: text/html
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - CF-Ray: 8d46726e8c73505b-ORF
  - CF-Cache-Status: DYNAMIC
  - Age: 39
  - Cache-Control: no-cache, private, max-age=0
  - Expires: Thu, 01 Jan 1970 00:00:00 UTC
  - Set-Cookie: userContext={%22ctc%22:{%22v1%22:[%22login_prompt_not_logged_in_customers%22%2C%22no_account%22%2C%22design_services_hub_inspiration%22%2C%22es_payment_before_brief_test%22%2C%22es__multi_step_brief%22%2C%22site_tagging_new_customer%22%2C%22new_user_registered_nonregistered%22%2C%22new_customer_fr_de_nl%22]}%2C%22userProfile%22:{%22v1%22:{%22culture%22:%22en-US%22}}}; path=/; domain=.vistaprint.com; expires=Fri, 18 Oct 2024 18:24:43 GMT, ucSearchParams=%7B%7D; path=/; domain=.vistaprint.com; expires=Sun, 17 Nov 2024 06:24:43 GMT, testUserId=_7d68e281-7af0-4343-8308-2eadc207356c; path=/; domain=.vistaprint.com; Max-Age=15552000, optimizelyEndUserId=_7d68e281-7af0-4343-8308-2eadc207356c; path=/; domain=.vistaprint.com; Max-Age=15552000, expCtx=; path=/; domain=.vistaprint.com; Max-Age=0, cf-ipcountry=US; Secure; Path=/; SameSite=None
  - Strict-Transport-Security: max-age=31536000
  - Vary: Accept-Encoding
  - Via: 1.1 c59b5a542015c208c95d2ed3c65cdbcc.cloudfront.net (CloudFront)
  - Pragma: no-cache
  - alt-svc: h3=":443"; ma=86400
  - vp-ingress-route: Default
  - x-amz-cf-id: tlLoXG_tG5_tyuxwgAPXzsZFCN_ZQlwIMdyTrYLaMqJyHST0bazcEQ==
  - x-amz-cf-pop: IAD12-P2
  - x-amz-expiration: expiry-date="Sat, 26 Oct 2024 00:00:00 GMT", rule-id="NTFiMjNkZmYtN2ZlNS00OWQzLWI3MjYtZTFjOGZkNmE0NjVk"
  - x-amz-meta-exclusive-hint: /page-data/en-us/camp/nawk42oct15oct20deals/page-data-cf751d41-9945-45a6-b3e1-41e4d1f58f57.json
  - x-amz-meta-hint-domain: /static/merch/home-page-vistaprint-na.prod
  - x-amz-meta-shared-hint: /534f1d35-dc76a6030a1bda5551ee.js,/701-130d607492ab6ccc2a5d.js,/ajax-aggregate-b725f10e229642920a89.js,/app-b961c5007a6154ef9b69.js,/async-api-dba8a9e359def5203939.js,/basic-spa-aggregate-f3eab0a8bce4526eaec1.js,/c8f7fe3b0e41be846d5687592cf2018ff6e22687-c589bd9f3e47297693ae.js,/commons-dc19617083eaf109f7bb.js,/component---src-pages-404-jsx-224a7371ab58a5dce51f.js,/component---src-pages-healthcheck-jsx-f5595e3c4b61d5fe7878.js,/component---src-templates-auth-page-layout-jsx-462bc773209e68d793b2.js,/component---src-templates-home-page-layout-jsx-68f2640d8c3141ed7c05.js,/compressor-f0d43c35f358b7bbb4de.js,/framework-8094427122681b7d0a75.js,/generic_events-aggregate-b1bb1c8b1d54ee426496.js,/jserrors-aggregate-2423f1382d3841ec28ce.js,/lazy-feature-loader-fe3f03e75c958f148ae5.js,/logging-aggregate-465c754a7eb6175bb4cf.js,/metrics-aggregate-a379cfbc349329143a8f.js,/page_view_event-aggregate-21617308ab53d65d7ac8.js,/page_view_timing-aggregate-7bb980d2b01151a594f6.js,/recorder-f28133ec4557cf202570.js,/session-manager-6ed65897dad8169ac569.js,/session_replay-aggregate-5f3685daf30166a9c6d2.js,/session_trace-aggregate-1c32bbb44503c24defe1.js,/spa-aggregate-66ad12be684e8fb082e8.js,/styles.8356188b33c7990b0c33.css,/webpack-runtime-b38e95244fda4ba5ef77.js,/~partytown/partytown-atomics.js,/~partytown/partytown-media.js,/~partytown/partytown-sw.js,/~partytown/partytown.js,/~partytown/debug/partytown-atomics.js,/~partytown/debug/partytown-media.js,/~partytown/debug/partytown-sandbox-sw.js,/~partytown/debug/partytown-sw.js,/~partytown/debug/partytown-ww-atomics.js,/~partytown/debug/partytown-ww-sw.js,/~partytown/debug/partytown.js
  - x-cache: Hit from cloudfront
  - Server: cloudflare
  - Content-Encoding: gzip
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="en-US"><head><script type="text/javascript">(function() { window.__pageDataPath = "page-data-cf751d41-9945-45a6-b3e1-41e4d1f58f57.json"; })();</script><script type="text/javascript">(function() { performance.mark("parseHeadStarted"); })();</script><meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="ie=edge"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="generator" content="Gatsby 4.25.9"><meta name="descr
```

---
### URL: http://walmart.com
- **Final URL:** https://www.walmart.com/
- **Status Code:** 200
- **Headers:**
  - Accept-CH: Downlink, DPR
  - Accept-Ranges: bytes
  - Content-Encoding: gzip
  - Content-Length: 51694
  - Content-Security-Policy: child-src 'self' blob:; connect-src 'self' *.1worldsync.com *.accenture.com *.akamaihd.net *.babylist.com *.buywith.com *.cloudinary.com *.cnetcontent.com *.digital-cloud.medallia.com *.doubleclick.net *.flix360.com *.flix360.io *.kampyle.co *.kampyle.com *.ksckreate.net *.perimeterx.net *.purpleportal.net *.px-cdn.net *.px-cloud.net *.pxchk.net *.quantummetric.com *.richcontext.com *.salsify.com *.stylitics.com *.syndigo.cloud *.syndigo.com *.talkshop.live *.thestable.com *.wal.co *.walmart.com:* *.walmart.net *.walmartimages.com *.walmartlabs.com *.zeekit.www.walmart.com a02f69a90dstg.blob.core.windows.net ads01.groovinads.com api.bazaarvoice.com api.inhome.walmart.com api.sspinc.io aroptical-scan.wal-mart.com assets-jpcust.jwpsrv.com assets.optiwise.ai azmatch.adsrvr.org b.affil.walmart.com b.affiliates.buynow.stg.walmart.com b.affiliates.walmart.com b.identity-stage.walmart.com b.identity-teflon.walmart.com b.identity.walmart.com b.native-checkout.dev.affiliates.walmart.com b.native-checkout.prod.affiliates.walmart.com b.native-checkout.stg.affiliates.walmart.com b.photos16qa.walmart.com b.photos3.walmart.com b.www-e16.walmart.com b.www-stage.walmart.com b.www-teflon.walmart.com b.www.walmart.com beacon.qa.walmart.com beacon.walmart.com blob: bp.www.walmart.com c.bing.com c.sspinc.io c0b535ed7astg.blob.core.windows.net cdn-assets.affirm.com cdn.jwplayer.com cdn.quantummetric.com content.etilize.com content.jwplatform.com directline.botframework.com dw.wmt.co edge.fullstory.com fitpredictor-api.sspinc.io gum.criteo.com https://www-qa.walmart.com.mx i.liadm.com i6.liadm.com ib.adnxs.com idsync.rlcdn.com ingest.quantummetric.com ls.chatid.com maps.googleapis.com maps.gstatic.com media.flixcar.com media.flixfacts.com media.sku.ninja mmwm-scan-dev.centralus.cloudapp.azure.com mmwm-scan-prod.centralus.cloudapp.azure.com photorankstatics-a.akamaihd.net rackcdn.com rl.quantummetric.com rs.fullstory.com secure.adnxs.com sizeguide-api.sspinc.io ssl.p.jwpcdn.com stats.g.doubleclick.net sync.mathtag.com t.myvisualiq.net tap.walmart.com tps.doubleverify.com us.creativecdn.com videos-cloudfront.jwpsrv.com walmart-app.quantummetric.com walmart-sync.quantummetric.com walmart.sspinc.io wss://api.talkshop.live wss://directline.botframework.com wss://us.server.buywith.com wss://wm-converse-wss.dev.walmart.com wss://www-perf.walmart.com wss://www-stage.walmart.com wss://www-teflon.walmart.com wss://www.walmart.com www.facebook.com www.google.com www.gstatic.com zeekit.www.walmart.com; default-src 'self' 'unsafe-eval' 'unsafe-inline' *.quantummetric.com *.wal.co *.walmart.com:* *.walmart.net *.walmartimages.com *.walmartlabs.com https://www-qa.walmart.com.mx; font-src 'self' *.1worldsync.com *.accenture.com *.buywith.com *.cloudfront.net *.cloudinary.com *.cnetcontent.com *.flix360.com *.flix360.io *.ksckreate.net *.richcontext.com *.salsify.com *.syndigo.cloud *.syndigo.com *.thestable.com *.wal.co *.walmart.com:* *.walmart.net *.walmartimages.com *.walmartlabs.com assets-jpcust.jwpsrv.com assets.optiwise.ai cc.cs.1worldsync.com ccsprodus1.blob.core.windows.net cdn.cs.1worldsync.com cdn.jwplayer.com content.etilize.com content.jwplatform.com d3nkfb7815bs43.cloudfront.net d3np41mctoibfu.cloudfront.net fonts.googleapis.com fonts.gstatic.com https://www-qa.walmart.com.mx ls.chatid.com media.flixcar.com media.flixfacts.com media.sku.ninja photorankstatics-a.akamaihd.net rackcdn.com salsify-ecdn.com ssl.p.jwpcdn.com videos-cloudfront.jwpsrv.com ws.cnetcontent.com www.ezdia.com; frame-ancestors 'self' *.wal.co *.walmart.com:* *.walmart.net *.walmartimages.com *.walmartlabs.com https://www-qa.walmart.com.mx; frame-src 'self' *.1worldsync.com *.accenture.com *.affirm.com *.alldata.cashedge.com *.babylist.com *.buywith.com *.cloudinary.com *.cnetcontent.com *.countr.one *.digital-cloud.medallia.com *.eko.com *.fiservapps.com *.flix360.com *.flix360.io *.kampyle.co *.kampyle.com *.ksckreate.net *.one.app *.onefinance.com *.online-metrix.net *.quantummetric.com *.richcontext.com *.salsify.com *.shopstylecollective.com *.syndigo.cloud *.syndigo.com *.talkshop.live *.thestable.com *.vantivcnp.com *.vimeo.com *.wal.co *.walmart.com:* *.walmart.net *.walmartimages.com *.walmartlabs.com adclick.g.doubleclick.net app.collectivevoice.com app.collectivevoiceqa.com assets-jpcust.jwpsrv.com assets.optiwise.ai ccsprodus1.blob.core.windows.net cdn.jwplayer.com content.etilize.com content.jwplatform.com https://www-qa.walmart.com.mx ln-rules.rewardstyle.com ls.chatid.com media.flixcar.com media.flixfacts.com media.sku.ninja mmwmpdscanoprod.z19.web.core.windows.net one.app.link photorankstatics-a.akamaihd.net pinpad.paysecure.acculynk.net rackcdn.com salsify-ecdn.com ssl.p.jwpcdn.com tpc.googlesyndication.com videos-cloudfront.jwpsrv.com ws.cnetcontent.com wss://api.talkshop.live www.ezdia.com www.facebook.com www.google.com www.recaptcha.net; img-src 'self' *.1worldsync.com *.accenture.com *.akamaihd.net *.buywith.com *.cloudfront.net *.cloudinary.com *.cnetcontent.com *.digital-cloud.medallia.com *.doubleclick.net *.doubleverify.com *.flix360.com *.flix360.io *.geekseller.com *.googleapis.com *.imrworldwide.com *.kampyle.co *.kampyle.com *.ksckreate.net *.online-metrix.net *.paypal.com *.px-cdn.net *.px-cloud.net *.rackcdn.com *.richcontext.com *.salsify.com *.stylitics.com *.syndigo.cloud *.syndigo.com *.talkshop.live *.thestable.com *.wal.co *.walmart.com:* *.walmart.net *.walmartimages.com *.walmartlabs.com *.zeekit.www.walmart.com 1d81e75c4337a6e2e3c2-4a69748413de5fcbd7a7a944817c2356.ssl.cf1.rackcdn.com 3d-qc.walmartimages.com 3d.walmartimages.com a.sellpoint.net a02f69a90dstg.blob.core.windows.net ad.doubleclick.net ads01.groovinads.com akamai.ksckreate.net aroptical-scan.wal-mart.com assets-jpcust.jwpsrv.com assets.optiwise.ai azmatch.adsrvr.org b.affil.walmart.com b.affiliates.buynow.stg.walmart.com b.affiliates.walmart.com b.identity-stage.walmart.com b.identity-teflon.walmart.com b.identity.walmart.com b.native-checkout.dev.affiliates.walmart.com b.native-checkout.prod.affiliates.walmart.com b.native-checkout.stg.affiliates.walmart.com b.photos16qa.walmart.com b.photos3.walmart.com b.www-e16.walmart.com b.www-stage.walmart.com b.www-teflon.walmart.com b.www.walmart.com beacon.qa.walmart.com beacon.walmart.com blob: bp.www.walmart.com c.bing.com c0b535ed7astg.blob.core.windows.net ccsprodus1.blob.core.windows.net cdn-assets.affirm.com cdn.jwplayer.com content.etilize.com content.jwplatform.com content.syndigo.com crtormassetmguseprod.blob.core.windows.net cyborg-wm-auth-service-v2.jet.com d3nkfb7815bs43.cloudfront.net d3np41mctoibfu.cloudfront.net data: dw.wmt.co gum.criteo.com https://www-qa.walmart.com.mx i.liadm.com i6.liadm.com ib.adnxs.com idsync.rlcdn.com ir.surveywall-api.survata.com ls.chatid.com maps.googleapis.com maps.gstatic.com media.flixcar.com media.flixfacts.com media.sku.ninja mmwm-scan-dev.centralus.cloudapp.azure.com mmwm-scan-prod.centralus.cloudapp.azure.com photorankstatics-a.akamaihd.net pixel.adsafeprotected.com player.cloudinary.com rackcdn.com res.cloudinary.com rs.fullstory.com s.xlgmedia.com s0.2mdn.net salsify-ecdn.com secure.adnxs.com securepubads.g.doubleclick.net smedia.webcollage.net ssl.p.jwpcdn.com static.adsafeprotected.com stats.g.doubleclick.net sync.mathtag.com t.myvisualiq.net tap.walmart.com tpc.googlesyndication.com us.creativecdn.com videos-cloudfront.jwpsrv.com walmart.ugc.bazaarvoice.com wss://api.talkshop.live www.ezdia.com www.facebook.com www.gstatic.com; media-src *.1worldsync.com *.accenture.com *.akamaized.net *.buywith.com *.cloudfront.net *.cloudinary.com *.cnetcontent.com *.flix360.com *.flix360.io *.ksckreate.net *.richcontext.com *.salsify.com *.syndigo.cloud *.syndigo.com *.thestable.com *.vimeo.com *.vimeocdn.com *.wal.co *.walmart.com:* *.walmart.net *.walmartimages.com *.walmartlabs.com 1d81e75c4337a6e2e3c2-4a69748413de5fcbd7a7a944817c2356.ssl.cf1.rackcdn.com a.sellpoint.net advertising.staging.walmart.com akamai.ksckreate.net api.inhome.walmart.com assets-jpcust.jwpsrv.com assets.optiwise.ai blob: ca-media.contentanalyticsinc.com cc.cnetcontent.com cc.cs.1worldsync.com ccsprodus1.blob.core.windows.net cdn-azure.kwikee.com cdn.cnetcontent.com cdn.cs.1worldsync.com cdn.jwplayer.com content.etilize.com content.jwplatform.com content.syndigo.com cyborg-wm-auth-service-v2.jet.com d3nkfb7815bs43.cloudfront.net d3np41mctoibfu.cloudfront.net https://www-qa.walmart.com.mx images.salsify.com ls.chatid.com media.flixcar.com media.flixfacts.com media.sku.ninja photorankstatics-a.akamaihd.net rackcdn.com salsify-ecdn.com ssl.p.jwpcdn.com videos-cloudfront.jwpsrv.com vimeo.com ws.cnetcontent.com www.ezdia.com; object-src *.wal.co *.walmart.com:* *.walmart.net *.walmartimages.com *.walmartlabs.com https://www-qa.walmart.com.mx; script-src 'self' 'strict-dynamic' 'wasm-unsafe-eval' *.1worldsync.com *.accenture.com *.babylist.com *.buywith.com *.cloudfront.net *.cloudinary.com *.cnetcontent.com *.digital-cloud.medallia.com *.flix360.com *.flix360.io *.kampyle.co *.kampyle.com *.ksckreate.net *.px-cloud.net *.richcontext.com *.salsify.com *.syndigo.cloud *.syndigo.com *.talkshop.live *.thestable.com *.wal.co *.walmart.com:* *.walmart.net *.walmartimages.com *.walmartlabs.com *.zeekit.www.walmart.com aroptical-scan.wal-mart.com assets-jpcust.jwpsrv.com assets.optiwise.ai b.affil.walmart.com b.affiliates.buynow.stg.walmart.com b.affiliates.walmart.com b.identity-stage.walmart.com b.identity-teflon.walmart.com b.identity.walmart.com b.native-checkout.dev.affiliates.walmart.com b.native-checkout.prod.affiliates.walmart.com b.native-checkout.stg.affiliates.walmart.com b.photos16qa.walmart.com b.photos3.walmart.com b.www-e16.walmart.com b.www-stage.walmart.com b.www-teflon.walmart.com b.www.walmart.com beacon.qa.walmart.com beacon.walmart.com bp.www.walmart.com ccsprodus1.blob.core.windows.net cdn.jwplayer.com cdn.quantummetric.com connect.facebook.net content.etilize.com content.jwplatform.com d3nkfb7815bs43.cloudfront.net d3np41mctoibfu.cloudfront.net edge.fullstory.com https://www-qa.walmart.com.mx ls.chatid.com maps.googleapis.com media.flixcar.com media.flixfacts.com media.sku.ninja mmwm-scan-dev.centralus.cloudapp.azure.com mmwm-scan-prod.centralus.cloudapp.azure.com photorankstatics-a.akamaihd.net rackcdn.com rs.fullstory.com salsify-ecdn.com ssl.p.jwpcdn.com videos-cloudfront.jwpsrv.com ws.cnetcontent.com wss://api.talkshop.live www.ezdia.com www.recaptcha.net 'nonce-NcnGGxW0qh95UXNY'; style-src 'self' 'unsafe-inline' *.1worldsync.com *.accenture.com *.buywith.com *.cloudfront.net *.cloudinary.com *.cnetcontent.com *.flix360.com *.flix360.io *.kampyle.com *.ksckreate.net *.richcontext.com *.salsify.com *.stylitics.com *.syndigo.cloud *.syndigo.com *.thestable.com *.wal.co *.walmart.com:* *.walmart.net *.walmartimages.com *.walmartlabs.com assets-jpcust.jwpsrv.com assets.optiwise.ai cc.cs.1worldsync.com ccsprodus1.blob.core.windows.net cdn.cs.1worldsync.com cdn.jwplayer.com content.etilize.com content.jwplatform.com d3nkfb7815bs43.cloudfront.net d3np41mctoibfu.cloudfront.net fonts.googleapis.com https://www-qa.walmart.com.mx ls.chatid.com media.flixcar.com media.flixfacts.com media.sku.ninja photorankstatics-a.akamaihd.net rackcdn.com rl.quantummetric.com salsify-ecdn.com sizeguide-api.sspinc.io ssl.p.jwpcdn.com videos-cloudfront.jwpsrv.com walmart.sspinc.io ws.cnetcontent.com www.ezdia.com; worker-src 'self' blob:; report-uri https://csp.walmart.com/c/r/gl
  - Content-Type: text/html; charset=utf-8
  - Traceparent: 00-3e612de9b599bc3c5ea490f09d09087d-277ddefe64bb5412-00
  - X-Envoy-Upstream-Service-Time: 425
  - X-Frame-Options: SAMEORIGIN
  - X-Opt-Inj: true
  - X-Tb: 0
  - Expires: Fri, 18 Oct 2024 06:24:43 GMT
  - Cache-Control: max-age=0, no-cache, no-store
  - Pragma: no-cache
  - Date: Fri, 18 Oct 2024 06:24:43 GMT
  - Connection: keep-alive
  - Vary: Accept-Encoding
  - Cache-Status: Hit
  - Server-Timing: cdn-cache; desc=HIT, edge; dur=1, product;desc="edge",host;desc="26331336e00d",dc;desc="a652627",fetch-ms;dur=426,req-proc-ms;dur=65,resp-proc-ms;dur=11, ak_p; desc="1729232683759_400320666_242016265_48_17452_26_53_-";dur=1
  - Origin-EX: 
  - Origin-CC: 
  - Set-Cookie: akavpau_p2=1729233283~id=eadc508b6c6827f5f2e9636e8db6d404; Path=/; HttpOnly; Secure; SameSite=None
  - Strict-Transport-Security: max-age=31536000
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="en-US"><head><meta charSet="utf-8"/><script id="ttp-marker" blocking="render" nonce="NcnGGxW0qh95UXNY">(()=>{window.performance.mark("ttp")})();</script><meta property="fb:app_id" content="105223049547814"/><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1, interactive-widget=resizes-content"/><link rel="dns-prefetch" href="https://tap.walmart.com "/><link rel="preload" fetchpriority="high" crossorigin="anonymous" href="https://i5.wa
```

---
### URL: http://webmd.com
- **Final URL:** https://www.webmd.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:24:44 GMT
  - Content-Type: text/html
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - CF-Cache-Status: HIT
  - Access-Control-Allow-Origin: *
  - Age: 83
  - Cache-Control: no-cache, no-store, must-revalidate
  - Set-Cookie: ab=default; domain=.webmd.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT, lrt_wrk=lrt1_cached_k8_worker_4_19R_3W_2024-10-10_14:17:11_gdbp_false_gtedgefrom_MA1_E_false_UC_false_UD_false_mp_false_active_true_from_MA1_ovr_null_config_envName_.k8s.lb._envNameFound_true_actv_true_blk_N/A_1729232684155_hvid_false; domain=webmd.com; path=/, gtinfo={"ct":"Norfolk","c":"Norfolk City","cc":"51710","st":"VA","sc":"47","z":"23502","lat":"36.85","lon":"-76.21","dma":"544","cntr":"usa","cntrc":"840","tz":null,"ci":"98.183.222.96"}; domain=webmd.com; path=/, VisitorId=114937b0-cf10-4f14-17f0-7efb4008519b; Expires=Wed, 18 Oct 2034 06:24:44 GMT; domain=webmd.com; path=/, ab=default; domain=.webmd.com; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT, __cf_bm=mZQsyDulcy15R02.gf0EYJ5e9SwsEHRK2GPQTC0EgUQ-1729232684-1.0.1.1-m6EafTOcctrHx2hT1Zp844LKRCyJFRb5A.bCUotZGRCeq5ny5B_V.DxSeW4q96JiJBdKyqsSrwqF1nTjrw78IQ; path=/; expires=Fri, 18-Oct-24 06:54:44 GMT; domain=.www.webmd.com; HttpOnly; Secure; SameSite=None
  - CF-Edge-Cache-Control: s-maxage=119, maxage=10, proxy-revalidate, stale-while-revalidate=30
  - cf-wrk: lrt1_cached_k8_worker_4_19R_3W_2024-10-10_14:17:11_gdbp_false_gtedgefrom_MA1_E_false_UC_false_UD_false_mp_false_active_true_from_MA1_ovr_null_config_envName_.k8s.lb._envNameFound_true_actv_true_blk_N/A_1729232684155
  - Content-Security-Policy: upgrade-insecure-requests
  - X-Backend: default
  - X-Backend-By: default
  - X-Cache: HIT
  - X-Cache-Control-By: override
  - X-Cache-Duration: 0.083333333333333h
  - X-Cache-Expiry: Friday, 18-Oct-2024 06:22:04 GMT
  - X-Cache-Reason: routing
  - X-Cache-Time: Friday, 18-Oct-2024 06:17:04 GMT
  - X-DataCenter: MA1
  - X-Dbg-Gt: gtinfo={"ct":"Ash","c":"Brunswick","cc":"37019","st":"NC","sc":"34","z":"28420","lat":"34.06","lon":"-78.52","dma":"550","cntr":"usa","cntrc":"840","tz":null,"ci":"5.161.252.69"}
  - X-Edge-Cache-Duration: 0.033333333333333h
  - X-Edge-Cache-Expiry: Friday, 18-Oct-2024 06:19:04 GMT
  - X-Gt-Setter: usr
  - X-Redis: redis_server_2
  - X-Route: pg
  - X-Route-Akamai: N/A
  - X-Runtime: new
  - X-True-Client-Ip: 98.183.222.96
  - Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v4?s=dtDcJQc1I12o5GuOE3EImmtjQ1siI6WMDjrxkLJWrd%2B4jGJAtsE47rBBRBX4pYQnFkXVPZ2NuwrWR%2BeLCRA5PoHg4Zmtt%2BKFqCc12K6tycEtOvKQ3KTOY7Vc6Vkw7Xs%3D"}],"group":"cf-nel","max_age":604800}
  - NEL: {"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}
  - Vary: Accept-Encoding
  - Server: cloudflare
  - CF-RAY: 8d4672739e154fe1-ORF
  - Content-Encoding: gzip
  - alt-svc: h3=":443"; ma=86400
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en" class="no-js home-page class-bg-ghost">
<HEAD><script>window.isCa = true; </script><!-- webmd-Banner  -->
                        <script>window.onetTrustLoaded = true;</script>
                        <script id="sdkStub" src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" data-document-language="true" type="text/javascript" charset="UTF-8" data-domain-script="797d052a-d0f4-447d-b9ae-0a293fb5e41f"></script>
                        <script id="optWrapper"
```

---
### URL: http://webnode.page
- **Final URL:** https://www.webnode.com/
- **Status Code:** 200
- **Headers:**
  - server: webnode
  - date: Fri, 18 Oct 2024 06:24:45 GMT
  - content-type: text/html; charset=UTF-8
  - set-cookie: PHPSESSID=goonef7q9n814rg84horlueu68; path=/; secure; HttpOnly; SameSite=Lax, ubh=d7caf55b23bb7c4d093fb6947c4d402334316978; expires=Sun, 18 Oct 2026 06:24:45 GMT; Max-Age=63072000; path=/; domain=www.webnode.com; HttpOnly, usi=17292326856711ff2d8d44c; path=/; domain=www.webnode.com; HttpOnly, tu=d7caf55b23bb7c4d093fb6947c4d402334316978.17292326856711ff2d8d44c, mfd=1; expires=Sat, 19 Oct 2024 06:24:45 GMT; Max-Age=86400, mfdp=1; expires=Wed, 18 Oct 2034 06:24:45 GMT; Max-Age=315532800
  - expires: Thu, 19 Nov 1981 08:52:00 GMT
  - pragma: no-cache
  - cache-control: private,max-age=0,no-cache,no-store
  - content-security-policy: default-src *;script-src 'self' resource://pdf.js 'unsafe-hashes' 'unsafe-inline' 'unsafe-eval' *.teamblue.services d1rv23qj5kas56.cloudfront.net d3nn3278imm5nr.cloudfront.net d1di2lzuh97fh2.cloudfront.net duyn491kcolsw.cloudfront.net events.webnode.com js.stripe.com www.gstatic.com www.googleadservices.com www.googletagmanager.com bat.bing.com connect.facebook.net a.quora.com www.google-analytics.com googleads.g.doubleclick.net c.imedia.cz www.google.com www.google.de www.google.com.br cdn.inspectlet.com *.clarity.ms *.bing.com c.seznam.cz pagead2.googlesyndication.com s.yimg.jp cdn.euc-freshbots.ai blob: euc-widget.freshworks.com/widgets/101000002785.js euc-widget.freshworks.com/widgetBase/ b98.yahoo.co.jp https://s.pinimg.com https://track.adform.net https://s2.adform.net;style-src 'self' 'unsafe-inline' 'unsafe-eval' d1rv23qj5kas56.cloudfront.net d3nn3278imm5nr.cloudfront.net www.gstatic.com js.stripe.com d11bh4d8fhuq47.cloudfront.net d1di2lzuh97fh2.cloudfront.net duyn491kcolsw.cloudfront.net use.typekit.net p.typekit.net cdn.euc-freshbots.ai euc-widget.freshworks.com/widgetBase/static/media/;img-src 'self' data: mediastream: blob: filesystem: *.teamblue.services d1rv23qj5kas56.cloudfront.net d3nn3278imm5nr.cloudfront.net du5rkdszt1kq5.cloudfront.net d11bh4d8fhuq47.cloudfront.net d1bz77arbww182.cloudfront.net d1me9yvfki5736.cloudfront.net d6scj24zvfbbo.cloudfront.net *.pbhom-cdnwnd.com *.cbaul-cdnwnd.com *.clvaw-cdnwnd.com www.webnode.com www.gstatic.com q.stripe.com bat.bing.com q.quora.com www.google.com www.google.cz www.google.de www.google.com.br www.google-analytics.com googleads.g.doubleclick.net cx.atdmt.com c.seznam.cz www.facebook.com www.googletagmanager.com *.clarity.ms *.bing.com *.webnode.com *.webnode.cz *.webnode.sk *.webnode.at *.webnode.es *.webnode.cl *.webnode.com.ve *.webnode.com.uy *.webnode.mx *.webnode.com.co *.webnode.co *.webnode.com.ar *.webnode.com.py *.webnode.bo *.webnode.do *.webnode.ec *.webnode.pe *.webnode.cr *.webnode.com.br *.webnode.pt *.webnode.it *.webnode.fr *.webnode.us *.webnode.in *.webnode.gr *.webnode.com.tr *.webnode.cn *.webnode.tw *.webnode.nl *.webnode.be *.webnode.jp *.webnode.hu *.webnode.ru *.webnode.com.ua *.webnode.se *.webnode.dk *.webnode.lv *.webnode.hr *.webnode.no *.webnode.co.uk *.webnode.vn *.webnode.ro *.webnode.cat *.webnode.kr *.webnode.fi ct.capterra.com d1di2lzuh97fh2.cloudfront.net duyn491kcolsw.cloudfront.net cdn.euc-freshbots.ai cdn.freshbots.ai fc-euc1-00-pics-bkt-00.s3.eu-central-1.amazonaws.com https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/ https://ct.pinterest.com https://track.adform.net https://server.seadform.net/serving/cookie/;frame-ancestors 'self';
  - strict-transport-security: max-age=15768000
  - x-frame-options: DENY
  - content-encoding: gzip
  - transfer-encoding: chunked
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html class="no-js " lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><meta name="msapplication-tap-highlight" content="no"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>Webnode Website Builder | Build a Website for Free</title><link rel="preconnect" href="https://d1rv23qj5kas56.cloudfront.net"><link rel="preconnect" href="https://www.googletagmanager.com"><link rel="preconnect" href="http
```

---
### URL: http://whitehouse.gov
- **Final URL:** https://www.whitehouse.gov/
- **Status Code:** 200
- **Headers:**
  - Server: nginx
  - Date: Fri, 18 Oct 2024 06:24:46 GMT
  - Content-Type: text/html; charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Vary: Accept-Encoding
  - X-Build-Back-Better: https://usds.gov/
  - X-Frame-Options: DENY
  - Referrer-Policy: strict-origin-when-cross-origin
  - X-XSS-Protection: 1; mode=block
  - X-Content-Type-Options: nosniff
  - Content-Security-Policy: upgrade-insecure-requests
  - Content-Encoding: gzip
  - Strict-Transport-Security: max-age=31536000;includeSubdomains;preload
  - x-rq: dca6 96 184 443
  - accept-ranges: bytes
  - cache-control: max-age=300, must-revalidate
  - x-cache: HIT
- **Content Snippet (first 500 characters):**
```
<!doctype html>
<html class="no-js alert__has-cookie" lang="en-US">
<head>
	<meta charset="utf-8">
	<meta name="google" content="notranslate">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	
	<!-- If you're reading this, we need your help building back better. https://usds.gov/ -->
<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, 
```

---
### URL: http://wikimedia.org
- **Final URL:** https://www.wikimedia.org/
- **Status Code:** 200
- **Headers:**
  - date: Fri, 18 Oct 2024 06:13:06 GMT
  - cache-control: s-maxage=3600, must-revalidate, max-age=0
  - server: ATS/9.2.5
  - etag: W/"4ae9-62484de1d2940"
  - last-modified: Tue, 15 Oct 2024 14:35:41 GMT
  - content-type: text/html
  - content-encoding: gzip
  - vary: Accept-Encoding
  - age: 699
  - x-cache: cp1102 hit, cp1102 hit/14
  - x-cache-status: hit-front
  - server-timing: cache;desc="hit-front", host;desc="cp1102"
  - strict-transport-security: max-age=106384710; includeSubDomains; preload
  - report-to: { "group": "wm_nel", "max_age": 604800, "endpoints": [{ "url": "https://intake-logging.wikimedia.org/v1/events?stream=w3c.reportingapi.network_error&schema_uri=/w3c/reportingapi/network_error/1.0.0" }] }
  - nel: { "report_to": "wm_nel", "max_age": 604800, "failure_fraction": 0.05, "success_fraction": 0.0}
  - x-client-ip: 2600:8805:1729:2d00:1904:cdc3:e05:6073
  - accept-ranges: bytes
  - content-length: 4718
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<title>Wikimedia</title>
<meta name="description" content="Wikimedia is a global movement whose mission is to bring free educational content to the world.">
<meta name="robots" content="index, follow">
<link rel="apple-touch-icon" href="https://foundation.wikimedia.org/favicon.ico">
<link rel="shortcut icon" href="https://foundation.wikimedia.org/favicon.ico">
<link rel="copyright" href="https://creativecommons.org/licenses
```

---
### URL: http://wordpress.org
- **Final URL:** https://wordpress.org/
- **Status Code:** 200
- **Headers:**
  - Server: nginx
  - Date: Fri, 18 Oct 2024 06:24:46 GMT
  - Content-Type: text/html; charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Vary: Accept-Encoding
  - Strict-Transport-Security: max-age=3600
  - X-Olaf: â
  - Link: <https://wordpress.org/wp-json/>; rel="https://api.w.org/", <https://wordpress.org/wp-json/wp/v2/pages/457>; rel="alternate"; title="JSON"; type="application/json", <https://w.org/>; rel=shortlink
  - X-Frame-Options: SAMEORIGIN
  - Content-Encoding: gzip
  - Alt-Svc: h3=":443"; ma=86400
  - X-nc: HIT ord 2
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel='preload' href='https://wordpress.org/wp-content/mu-plugins/pub-sync/global-fonts/Inter/Inter-latin.woff2' as='font' crossorigin='crossorigin' type='font/woff2' />
<link rel='preload' href='https://wordpress.org/wp-content/mu-plugins/pub-sync/global-fonts/EB-Garamond/EBGaramond-latin.woff2' as='font' crossorigin='crossorigin' type='font/woff2' />

```

---
### URL: http://wp.com
- **Final URL:** https://wordpress.com/
- **Status Code:** 200
- **Headers:**
  - Server: nginx
  - Date: Fri, 18 Oct 2024 06:24:47 GMT
  - Content-Type: text/html; charset=utf-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Vary: Accept-Encoding, Cookie
  - X-Frame-Options: SAMEORIGIN
  - X-Content-Type-Options: nosniff
  - X-XSS-Protection: 1; mode=block
  - X-hacker: Want root?  Visit join.a8c.com/hacker and mention this header.
  - Host-Header: WordPress.com
  - Set-Cookie: tk_ai=f5Lib7FrBisz%2Fg1LNLznFqrJ; expires=Wed, 17-Oct-2029 06:24:47 GMT; Max-Age=157680000; path=/; domain=.wordpress.com; secure; SameSite=None, tk_ai_explat=f5Lib7FrBisz%2Fg1LNLznFqrJ; expires=Wed, 17-Oct-2029 06:24:47 GMT; Max-Age=157680000; path=/; domain=.wordpress.com; secure; SameSite=None, tk_qs=_en%3Dwpcom_experiment_variation_assigned%26_ut%3Danon%26_ui%3Df5Lib7FrBisz%252Fg1LNLznFqrJ%26_ts%3D1729232687185%26experiment_id%3D22047%26experiment_variation_id%3D4683%26reason%3Dset_by_anon_id; path=/; domain=.wordpress.com; secure; SameSite=Strict, explat_test_aa_weekly_lohp_2024_week_42=control; expires=Mon, 04-Nov-2024 00:00:00 GMT; Max-Age=1445713; path=/; domain=.wordpress.com; secure; SameSite=None
  - Content-Encoding: gzip
  - X-ac: 2.dca _dca BYPASS
  - Strict-Transport-Security: max-age=31536000; preload
  - Alt-Svc: h3=":443"; ma=86400
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en" class="no-webp" dir="ltr">
	<head>
	<meta charset="UTF-8" />
	<meta http-equiv="x-ua-compatible" content="IE=Edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />

	<title>WordPress.com: Build a Site, Sell Your Stuff, Start a Blog &amp; More</title>
	<meta name="description" content="Build a site, sell online, earn with your content, and more" />

	<link rel="preconnect" href="//s1.wp.com" crossorigin="anonymous" />

```

---
### URL: http://www.gov.uk
- **Final URL:** https://www.gov.uk/
- **Status Code:** 200
- **Headers:**
  - Connection: keep-alive
  - Content-Length: 11586
  - Content-Type: text/html; charset=utf-8
  - Server: nginx
  - Cache-Control: max-age=300, public
  - Content-Security-Policy: default-src 'self'; base-uri 'none'; img-src 'self' *.publishing.service.gov.uk www.gov.uk *.dev.gov.uk www.google-analytics.com ssl.google-analytics.com stats.g.doubleclick.net www.googletagmanager.com www.region1.google-analytics.com region1.google-analytics.com lux.speedcurve.com assets.digital.cabinet-office.gov.uk https://img.youtube.com https://i.ytimg.com; script-src 'self' www.google-analytics.com ssl.google-analytics.com stats.g.doubleclick.net www.googletagmanager.com www.region1.google-analytics.com region1.google-analytics.com www.gstatic.com *.ytimg.com www.youtube.com www.youtube-nocookie.com 'nonce-ZfXmpQruCtvw/UOfuInDaA=='; style-src 'self' www.gstatic.com; font-src 'self'; connect-src 'self' *.publishing.service.gov.uk www.gov.uk *.dev.gov.uk www.google-analytics.com ssl.google-analytics.com stats.g.doubleclick.net www.googletagmanager.com www.region1.google-analytics.com region1.google-analytics.com lux.speedcurve.com gds-single-consent-staging.app gds-single-consent.app; object-src 'none'; frame-src 'self' *.publishing.service.gov.uk www.gov.uk *.dev.gov.uk www.youtube.com www.youtube-nocookie.com; frame-ancestors 'self' *.publishing.service.gov.uk www.gov.uk *.dev.gov.uk; report-uri https://csp-reporter.publishing.service.gov.uk/report
  - Etag: W/"57e02c923461293b28235db6fd0e4ebd"
  - Link: </assets/frontend/application-52317d426199dc41bb91ca225d09ea009cc40bda1cbb5d9111c02e37222ce2b6.css>; rel=preload; as=style; nopush,</assets/frontend/views/_homepage-cd43eecdb08cd168672be81d5e7a81d8dd01c176583b5665b4d5ba66fc1eba5f.css>; rel=preload; as=style; nopush,</assets/frontend/views/_homepage_header-de0edcd2ce904a93d149eaf13ecbc6eeffd1846210f83e637a74e0a8458536bb.css>; rel=preload; as=style; nopush,</assets/frontend/views/_popular_links-4ecc3766c0884579358bdd11899cce950bd33d5f6a1c99c800fd34f0a20d9a92.css>; rel=preload; as=style; nopush,</assets/frontend/govuk_publishing_components/components/_action-link-6a0bd6b1dea8a06695b7678e5457c809bc4ffd5f0221e557b5ede25238328312.css>; rel=preload; as=style; nopush,</assets/frontend/govuk_publishing_components/components/_cards-e8ebfa5a9585adec676a2602012a8336175448362c4fe0540d77fe6e26f84691.css>; rel=preload; as=style; nopush
  - Permissions-Policy: interest-cohort=(), interest-cohort=()
  - Via: 1.1 router, 1.1 varnish
  - X-Content-Type-Options: nosniff, nosniff
  - X-Frame-Options: ALLOWALL
  - X-Request-Id: 17fc6959-76f5-4591-b871-82be1b3afdf4
  - X-Runtime: 0.035862
  - Fastly-Backend-Name: origin
  - Content-Encoding: gzip
  - Accept-Ranges: bytes
  - Date: Fri, 18 Oct 2024 06:24:47 GMT
  - Age: 165
  - Strict-Transport-Security: max-age=31536000; preload
  - X-Served-By: cache-iad-kiad7000170-IAD
  - X-Cache: HIT
  - X-Cache-Hits: 1
  - X-Timer: S1729232688.514928,VS0,VE1
  - Vary: Accept-Encoding
  - alt-svc: h3=":443";ma=86400,h3-29=":443";ma=86400,h3-27=":443";ma=86400
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<!--[if lt IE 9]><html class="lte-ie8 govuk-template" lang="en"><![endif]--><!--[if gt IE 8]><!--><html class="govuk-template" lang="en">
<!--<![endif]-->
  <head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="govuk:organisations" content="&lt;OT1056&gt;">
<meta name="govuk:primary-publishing-organisation" content="Government Digital Service">
<meta name="govuk:public-updated-at" content="2023-06-28T10:32:34+01:00">
<meta name="govuk:updated-at" 
```

---
### URL: http://www.over-blog.com
- **Final URL:** http://www.over-blog.com/
- **Status Code:** 200
- **Headers:**
  - date: Fri, 18 Oct 2024 05:36:07 GMT
  - cache-control: public, s-maxage=3600
  - content-type: text/html; charset=UTF-8
  - age: 2920
  - accept-ranges: bytes
  - content-length: 135543
  - x-frame-options: DENY
  - x-xss-protection: 1;mode=block
  - x-content-type-options: nosniff
  - strict-transport-security: max-age=31536000;preload
  - referrer-policy: no-referrer-when-downgrade
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">

    <title>Overblog - Les meilleurs blogs et la meilleure plateforme de blog</title>

    <meta name="description" content="Le portail d&#039;OverBlog ! Le meilleur de l&#039;info et des articles de nos blogueurs ! Créez facilement et gratuitement un blog sur OverBlog ! Forums, communautés et annuaire de blog sur OverBlog !">

    
          <script type="application/ld+j
```

---
### URL: http://www.wix.com
- **Final URL:** https://www.wix.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:24:48 GMT
  - Content-Type: text/html; charset=UTF-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - link: <https://static.parastorage.com/>; rel=preconnect; crossorigin;,<https://static.parastorage.com/>; rel=preconnect;,<https://static.wixstatic.com/>; rel=preconnect; crossorigin;,<https://static.wixstatic.com/>; rel=preconnect;,<https://siteassets.parastorage.com>; rel=preconnect; crossorigin;,
  - html-cacheable: true
  - etag: W/"2164dd2fa74fdf10a735df315ab236ce"
  - x-meta-site-is-wix-site: 1
  - content-language: en
  - referrer-policy: no-referrer-when-downgrade
  - Age: 244532
  - Set-Cookie: ssr-caching=cache#desc=hit#varnish=hit#dc#desc=42; Max-Age=20; Expires=Tue, 15 Oct 2024 10:29:36 GMT, XSRF-TOKEN=1729232688|qpdL-4fYkUTI; Path=/; Domain=.wix.com; Secure; SameSite=None, _wixCIDX=38bfd394-5f79-46bf-90aa-4b9252849ddf; Max-Age=7776000; Expires=Thu, 16 Jan 2025 06:24:48 GMT; Path=/; Domain=.wix.com; Secure; SameSite=None, _wixUIDX=null-user-id; Max-Age=7776000; Expires=Thu, 16 Jan 2025 06:24:48 GMT; Path=/; Domain=.wix.com; Secure; SameSite=None
  - Server-Timing: cache;desc=hit, varnish;desc=hit, dc;desc=42
  - X-Seen-By: oDbbMvfdXCdtsgjD2KgaM8iHE4dbw+wewoJ5nvKoyjE=,m0j2EEknGIVUW/liY8BLLkiHzpTYSDRA7u88Ic3Fde4MbwluI1yUDJty9McxOlfY,2d58ifebGbosy5xc+FRalgug3YNpaDXjg5T4CgzVCNSbaLfARaHaqOy/nR0myLFgnBYZIr9vUp8hNCD1zJ26fg==,2UNV7KOq4oGjA5+PKsX47B1ANU/aY3kA+J3E1oSuFO5YgeUJqUXtid+86vZww+nL
  - Vary: Accept-Encoding
  - X-Wix-Request-Id: 1729232688.5451336251330115004
  - cache-control: private,max-age=0,must-revalidate
  - Strict-Transport-Security: max-age=31536000
  - Server: Pepyaka
  - X-Content-Type-Options: nosniff
  - Content-Encoding: gzip
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html>
<html lang="en">
<head>
  
  <meta charset='utf-8'>
  <meta name="viewport" content="width=device-width, initial-scale=1" id="wixDesktopViewport" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="generator" content="Wix.com Website Builder"/>

  <link rel="icon" sizes="192x192" href="https://www.wix.com/favicon.ico" type="image/x-icon"/>
  <link rel="shortcut icon" href="https://www.wix.com/favicon.ico" type="image/x-icon"/>
  <link rel="apple-touch-icon" h
```

---
### URL: http://www.yahoo.com
- **Final URL:** https://www.yahoo.com/
- **Status Code:** 200
- **Headers:**
  - expect-ct: max-age=31536000, report-uri="http://csp.yahoo.com/beacon/csp?src=yahoocom-expect-ct-report-only
  - referrer-policy: no-referrer-when-downgrade
  - strict-transport-security: max-age=31536000
  - x-frame-options: SAMEORIGIN
  - content-type: text/html; charset=utf-8
  - content-encoding: gzip
  - date: Fri, 18 Oct 2024 06:24:49 GMT
  - x-envoy-upstream-service-time: 67
  - server: ATS
  - Age: 1
  - Cache-Control: no-store, no-cache, max-age=0, private
  - Expires: -1
  - X-YCPI: 1
  - X-XSS-Protection: 1; mode=block
  - X-Content-Type-Options: nosniff
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Content-Security-Policy: frame-ancestors 'self' https://*.builtbygirls.com https://*.rivals.com https://*.engadget.com https://*.intheknow.com https://*.autoblog.com https://*.techcrunch.com https://*.yahoo.com https://*.aol.com https://*.huffingtonpost.com https://*.oath.com https://*.search.yahoo.com https://*.pnr.ouryahoo.com https://pnr.ouryahoo.com https://*.search.aol.com https://*.search.huffpost.com https://*.onesearch.com https://*.verizonmedia.com https://*.publishing.oath.com https://cdn.taboola.com https://ads.taboola.com; sandbox allow-forms allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-presentation; report-uri https://csp.yahoo.com/beacon/csp?src=ats&site=news&region=US&lang=en-US&device=desktop&yrid=6o9nr8tivmg0j&partner=;
- **Content Snippet (first 500 characters):**
```
<!doctype html><html data-color-scheme id=atomic class="ltr fp  desktop  fp-none bkt900,seamless ua-chrome ua-91.0 isModern" lang=en-US><head><script nonce=022f7e18e7d043a20f4f0bb2b2f1839bd78d569a07c469adebd7a0b5993d21ad>
        window.performance.mark('PageStart');
        document.documentElement.className += ' JsEnabled jsenabled';
        /**
        * Empty darlaOnready method, to avoid JS error.
        * This can happen when Async Darla JS file is loaded earlier than Darla Proxy JS.
    
```

---
### URL: http://yadi.sk
- **Final URL:** https://360.yandex.com/disk/
- **Status Code:** 200
- **Headers:**
  - Cache-Control: max-age=0, must-revalidate, proxy-revalidate, no-cache, no-store, private
  - Content-Encoding: gzip
  - Content-Security-Policy: default-src 'none'; script-src yastatic.net https://*.static-dev.mail.yandex.net/s3/psf/ 'unsafe-eval' 'nonce-8YfOMp00eMP5LE5gzTdmZg==' 'self' 'unsafe-inline' mc.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.ru mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.webvisor.com mc.webvisor.org mc.admetrica.ru yastatic.net; style-src yastatic.net https://*.static-dev.mail.yandex.net/s3/psf/ 'unsafe-inline' 'self' fonts.googleapis.com; font-src yastatic.net https://*.static-dev.mail.yandex.net/s3/psf/ fonts.gstatic.com; media-src yastatic.net https://*.static-dev.mail.yandex.net/s3/psf/ 'unsafe-inline' 'self' storage.yandexcloud.net storage.cloud-preprod.yandex.net s3.mds.yandex.net; img-src yastatic.net https://*.static-dev.mail.yandex.net/s3/psf/ 'self' data: blob: mc.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.ru mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.webvisor.com mc.webvisor.org mc.admetrica.ru yastatic.net downloader.disk.yandex.com downloader.disk.yandex.net yandex.ru favicon.yandex.net storage.yandexcloud.net storage.cloud-preprod.yandex.net s3.mds.yandex.net yc-www-community-images.storage.yandexcloud.net avatars.mds.yandex.net *.storage.yandex.net *.disk.yandex.net; connect-src yandex.ru mc.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.ru mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.webvisor.com mc.webvisor.org mc.admetrica.ru yandexmetrica.com:* 'self' api.passport.yandex.com mail.yandex.com https://pdd.yandex.ru:* https://pdd.yandex.com:* api-stable.dst.yandex.ru cloud-api.yandex.ru s3.mds.yandex.net yastatic.net https://*.static-dev.mail.yandex.net/s3/psf/; frame-src yastatic.net https://*.static-dev.mail.yandex.net/s3/psf/ 'self' blob: mc.yandex.ru forms.yandex.ru www.youtube.com yandex.com trust.yandex.com calendar.yandex.ru; child-src 'self' blob: mc.yandex.ru; base-uri 'self'; frame-ancestors 'self' https://*.webvisor.com https://metrika.yandex.com https://metrika.yandex.ru https://*.mail.yandex.com https://mail.yandex.com https://disk.yandex.com https://*.disk.yandex.com https://*.disk.dsp.yandex.com https://*.disk.dst.yandex.com https://*.disk-dev.dsd.yandex.com https://*.regtests.dsp.yandex.com https://disk.dst.yandex.com https://disk.dsp.yandex.com; report-uri https://csp.yandex.net/csp?from=tuning&project=tuning&yandex_login=&yandexuid=8380304461729232690;
  - Content-Type: text/html; charset=utf-8
  - Date: Fri, 18 Oct 2024 06:24:51 GMT
  - Expires: Thu, 01 Jan 1970 00:00:01 GMT
  - Pragma: no-cache
  - Transfer-Encoding: chunked
  - Vary: Accept-Encoding
  - X-Response-With: YMail
- **Content Snippet (first 500 characters):**
```

        <!DOCTYPE html>
        <html itemScope itemType="https://schema.org/WebPage" lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
                <title data-react-helmet="true" itemprop="name">Yandex Disk</title>
                <link rel="canonical" href="https://360.yandex.com/disk/" />
                <link rel="stylesheet" href="https://yastatic.net/s3/psf/ps-tuning/disk-public-landing.b6f41d6740f9ce97b
```

---
### URL: http://ytimg.com
- **Final URL:** None
- **Status Code:** None
- **Headers:**

---
### URL: http://zendesk.com
- **Final URL:** https://www.zendesk.com/
- **Status Code:** 200
- **Headers:**
  - Date: Fri, 18 Oct 2024 06:24:52 GMT
  - Content-Type: text/html; charset=utf-8
  - Transfer-Encoding: chunked
  - Connection: keep-alive
  - Cache-Control: public, max-age=3600
  - vary: Accept-Encoding
  - nc: T
  - content-security-policy: default-src * wss://*.zopim.com 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self' app.optimizely.com *.zendesk.com *.zendesk.co.jp *.zendesk.co.uk *.zendesk.com.br *.zendesk.com.mx *.zendesk.de *.zendesk.es *.zendesk.fr *.zendesk.kr *.zendesk.nl *.zendesk.tw *.zendesk.hk; font-src * data:; img-src * data:; media-src * blob:;worker-src 'self' blob:
  - Last-Modified: Fri, 18 Oct 2024 04:53:45 GMT
  - CF-Cache-Status: HIT
  - Age: 2170
  - Expires: Fri, 18 Oct 2024 07:24:52 GMT
  - Set-Cookie: __cf_bm=wHSH_r4wWkJ4czjSA50u0VZtX9Lmza7Iu9ylcFpYG0E-1729232692-1.0.1.1-f9OSTZpC.kHbMi8FTrXliyNsWIydS3D07fK_3tfCeANGEwXGnc.nIHB862XvrQm9R23H9wFcTztGrqvOqBZI4A; path=/; expires=Fri, 18-Oct-24 06:54:52 GMT; domain=.www.zendesk.com; HttpOnly; Secure; SameSite=None, __cfruid=8cae52c3be2aa165f0d58777181257b320224ce5-1729232692; path=/; domain=.www.zendesk.com; HttpOnly; Secure; SameSite=None
  - Strict-Transport-Security: max-age=0; preload
  - Server: cloudflare
  - CF-RAY: 8d4672a6e80e4fe5-ORF
  - Content-Encoding: gzip
- **Content Snippet (first 500 characters):**
```
<!DOCTYPE html><html lang="en-US"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width"/><title>Zendesk: The Complete Customer Service Solution</title><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/><link rel="profile" href="https://gmpg.org/xfn/11"/><meta name="google-site-verification" content="2q8u-0_6HxJZdS7l7LYlf-WDEYwIPvdJ_XVujkTFNCY"/><meta name="naver-site-verification" content="0280b3893b4fa7c8bbe9bc24ef61756c9dccec97"/><link rel="preconnect" hre
```

---
### URL: http://zippyshare.com
- **Final URL:** http://zippyshare.com/
- **Status Code:** 200
- **Headers:**
  - Server: nginx/1.10.3 (Ubuntu)
  - Date: Fri, 18 Oct 2024 06:24:52 GMT
  - Content-Type: text/html
  - Content-Length: 4771
  - Last-Modified: Thu, 25 May 2023 21:37:27 GMT
  - Connection: keep-alive
  - ETag: "646fd517-12a3"
  - Accept-Ranges: bytes
- **Content Snippet (first 500 characters):**
```
 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta charset="utf-8">
		<title>Zippyshare.com - [now defunct] Free File Hosting</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
		<link href="css/bootstrap.min.v2.css" rel="stylesheet">
		<link href="css/font-awesome.v2.css" rel=
```

---
