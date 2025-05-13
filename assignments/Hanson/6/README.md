# Assignment 3 CS 533 F24
## Brian Hanson, Jr.

This document lists all of the tabular output from completing the large-scale analysis of the cookie practices for 100 websites of Mozilla's Top 500. Included are the final HTTP status codes, the number of cookies set by each site, & the various cookie attributes of interest such as HttpOnly, Secure, SameSite, Path settings for each cookie, & statistical summary table.

---
# Cookie Report for 100 Websites

| URL                    | Status Code          |   Number of Cookies | Cookie Attributes                                                                          | Final URL                                                              |
|:-----------------------|:---------------------|--------------------:|:-------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------|
| weather_com_           | 200                  |                   4 | HttpOnly: 0, Secure: 2, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 4 (Non-root: 0)   | https://weather.com/                                                   |
| samsung_com_           | 403                  |                   5 | HttpOnly: 1, Secure: 1, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 5 (Non-root: 0)   | https://www.samsung.com/                                               |
| statista_com_          | 200                  |                   5 | HttpOnly: 4, Secure: 4, SameSite: 2 (Strict: 0, Lax: 0, None: 0), Paths: 5 (Non-root: 0)   | https://www.statista.com/?__sso_cookie_checker=failed                  |
| sciencedirect_com_     | 403                  |                   1 | HttpOnly: 1, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 1 (Non-root: 0)   | http://sciencedirect.com/                                              |
| hollywoodreporter_com_ | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.hollywoodreporter.com/                                     |
| radiofrance_fr_        | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.radiofrance.fr/                                            |
| insider_com_           | 200                  |                   2 | HttpOnly: 0, Secure: 1, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 2 (Non-root: 0)   | https://www.businessinsider.com/                                       |
| cpanel_com_            | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://cpanel.net/                                                    |
| amazon_co_jp_          | 405                  |                   1 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 1 (Non-root: 0)   | https://www.amazon.co.jp/                                              |
| thesun_co_uk_          | 200                  |                   2 | HttpOnly: 0, Secure: 1, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 2 (Non-root: 0)   | https://www.thesun.co.uk/                                              |
| 20minutos_es_          | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.20minutos.es/                                              |
| bestfreecams_club_     | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.bestfreecams.club/                                         |
| t_me_                  | 200                  |                   2 | HttpOnly: 2, Secure: 2, SameSite: 2 (Strict: 0, Lax: 0, None: 0), Paths: 2 (Non-root: 0)   | https://telegram.org/                                                  |
| picasa_google_com_     | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | http://picasa.google.com/                                              |
| thetimes_co_uk_        | 200                  |                   5 | HttpOnly: 0, Secure: 1, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 5 (Non-root: 0)   | https://www.thetimes.com/                                              |
| salesforce_com_        | 200                  |                   4 | HttpOnly: 0, Secure: 2, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 4 (Non-root: 0)   | https://www.salesforce.com/                                            |
| cnn_com_               | 200                  |                  10 | HttpOnly: 1, Secure: 5, SameSite: 10 (Strict: 0, Lax: 0, None: 0), Paths: 10 (Non-root: 0) | https://www.cnn.com/                                                   |
| yandex_com_            | 200                  |                  15 | HttpOnly: 4, Secure: 7, SameSite: 2 (Strict: 0, Lax: 0, None: 0), Paths: 15 (Non-root: 0)  | https://yandex.com/                                                    |
| goo_ne_jp_             | 200                  |                  10 | HttpOnly: 3, Secure: 7, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 10 (Non-root: 0)  | https://www.goo.ne.jp/                                                 |
| nypost_com_            | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://nypost.com/                                                    |
| wa_me_                 | 200                  |                   1 | HttpOnly: 0, Secure: 1, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 1 (Non-root: 0)   | https://api.whatsapp.com/                                              |
| gnu_org_               | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | http://www.gnu.org/                                                    |
| ouest_france_fr_       | 403                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.ouest-france.fr/                                           |
| softonic_com_          | 406                  |                   2 | HttpOnly: 0, Secure: 2, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 2 (Non-root: 0)   | http://softonic.com/                                                   |
| bandcamp_com_          | 200                  |                   1 | HttpOnly: 0, Secure: 1, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 1 (Non-root: 0)   | https://bandcamp.com/                                                  |
| gravatar_com_          | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://gravatar.com/                                                  |
| francetvinfo_fr_       | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.francetvinfo.fr/                                           |
| zoom_us_               | 200                  |                   3 | HttpOnly: 3, Secure: 2, SameSite: 2 (Strict: 0, Lax: 0, None: 0), Paths: 3 (Non-root: 0)   | https://www.zoom.com/                                                  |
| amazon_fr_             | 405                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.amazon.fr/                                                 |
| rtve_es_               | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.rtve.es/                                                   |
| sapo_pt_               | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.sapo.pt/                                                   |
| offset_com_            | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.offset.com:443/                                            |
| box_com_               | 200                  |                   1 | HttpOnly: 1, Secure: 1, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 1 (Non-root: 0)   | https://www.box.com/                                                   |
| myspace_com_           | 200                  |                   4 | HttpOnly: 2, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 4 (Non-root: 0)   | https://myspace.com:443/                                               |
| adobe_com_             | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.adobe.com/                                                 |
| thenai_org_            | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://thenai.org/                                                    |
| newyorker_com_         | 200                  |                  10 | HttpOnly: 2, Secure: 6, SameSite: 6 (Strict: 0, Lax: 0, None: 0), Paths: 10 (Non-root: 0)  | https://www.newyorker.com/                                             |
| amzn_to_               | 503                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.amazon.com/                                                |
| youronlinechoices_com_ | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.youronlinechoices.com/                                     |
| nydailynews_com_       | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.nydailynews.com/                                           |
| www_yahoo_com_         | 429                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | http://www.yahoo.com/                                                  |
| last_fm_               | 200                  |                   6 | HttpOnly: 1, Secure: 4, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 6 (Non-root: 0)   | https://www.last.fm:443/                                               |
| gofundme_com_          | 200                  |                   4 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 4 (Non-root: 0)   | https://www.gofundme.com/                                              |
| merriam_webster_com_   | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.merriam-webster.com:443/                                   |
| opera_com_             | 403                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.opera.com/                                                 |
| draft_blogger_com_     | 200                  |                   3 | HttpOnly: 3, Secure: 3, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 3 (Non-root: 0)   | https://draft.blogger.com/about/?bpli=1                                |
| repubblica_it_         | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.repubblica.it/                                             |
| jstor_org_             | 200                  |                   6 | HttpOnly: 0, Secure: 6, SameSite: 6 (Strict: 0, Lax: 0, None: 0), Paths: 6 (Non-root: 0)   | http://www.jstor.org/                                                  |
| huffingtonpost_com_    | 200                  |                   3 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 3 (Non-root: 0)   | https://www.huffpost.com/                                              |
| who_int_               | 200                  |                   3 | HttpOnly: 3, Secure: 2, SameSite: 2 (Strict: 0, Lax: 0, None: 0), Paths: 3 (Non-root: 0)   | https://www.who.int/                                                   |
| plos_org_              | 200                  |                   2 | HttpOnly: 2, Secure: 1, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 2 (Non-root: 0)   | https://plos.org/                                                      |
| brandbucket_com_       | 403                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | http://brandbucket.com/                                                |
| biglobe_ne_jp_         | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | http://biglobe.ne.jp/                                                  |
| archives_gov_          | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.archives.gov/                                              |
| target_com_            | 200                  |                   4 | HttpOnly: 0, Secure: 3, SameSite: 2 (Strict: 0, Lax: 0, None: 0), Paths: 4 (Non-root: 0)   | https://www.target.com/                                                |
| t_co_                  | 200                  |                   2 | HttpOnly: 2, Secure: 1, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 2 (Non-root: 0)   | https://t.co/                                                          |
| sciencemag_org_        | 403                  |                   1 | HttpOnly: 1, Secure: 1, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 1 (Non-root: 0)   | https://www.sciencemag.org/                                            |
| abril_com_br_          | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://assine.abril.com.br/?redirect=abrilcom                         |
| enable_javascript_com_ | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.enable-javascript.com/                                     |
| google_it_             | 200                  |                   2 | HttpOnly: 2, Secure: 1, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 2 (Non-root: 0)   | http://www.google.it/                                                  |
| pt_wikipedia_org_      | 200                  |                   8 | HttpOnly: 4, Secure: 8, SameSite: 2 (Strict: 0, Lax: 0, None: 0), Paths: 8 (Non-root: 0)   | https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal     |
| howstuffworks_com_     | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.howstuffworks.com/                                         |
| amazon_com_            | 503                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.amazon.com/                                                |
| sciencedaily_com_      | 403                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://sciencedaily.com/                                              |
| cambridge_org_         | 403                  |                   2 | HttpOnly: 2, Secure: 1, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 2 (Non-root: 0)   | https://www.cambridge.org:443/                                         |
| foxnews_com_           | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.foxnews.com/                                               |
| failed_urls            | No Status Code Found |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | N/A                                                                    |
| jhu_edu_               | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.jhu.edu/                                                   |
| justjared_com_         | 403                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | http://justjared.com/                                                  |
| sky_com_               | 200                  |                   4 | HttpOnly: 0, Secure: 2, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 4 (Non-root: 0)   | https://www.sky.com/                                                   |
| bbc_com_               | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.bbc.com/                                                   |
| narod_ru_              | 200                  |                   8 | HttpOnly: 2, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 8 (Non-root: 0)   | https://narod.ru/                                                      |
| mediafire_com_         | 200                  |                   3 | HttpOnly: 3, Secure: 1, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 3 (Non-root: 0)   | https://www.mediafire.com/                                             |
| sedoparking_com_       | 405                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | http://sedoparking.com/                                                |
| whatsapp_com_          | 200                  |                   3 | HttpOnly: 2, Secure: 3, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 3 (Non-root: 0)   | https://www.whatsapp.com/                                              |
| hubspot_com_           | 200                  |                   5 | HttpOnly: 5, Secure: 3, SameSite: 3 (Strict: 0, Lax: 0, None: 0), Paths: 5 (Non-root: 0)   | https://www.hubspot.com/                                               |
| uol_com_br_            | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.uol.com.br/                                                |
| nicovideo_jp_          | 200                  |                   1 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 1 (Non-root: 0)   | https://www.nicovideo.jp/                                              |
| booking_com_           | 200                  |                   6 | HttpOnly: 6, Secure: 5, SameSite: 5 (Strict: 0, Lax: 0, None: 0), Paths: 6 (Non-root: 0)   | https://www.booking.com/                                               |
| 4shared_com_           | 200                  |                   1 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 1 (Non-root: 0)   | https://www.4shared.com/                                               |
| detik_com_             | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.detik.com/                                                 |
| googleblog_com_        | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://blog.google/                                                   |
| pinterest_fr_          | 200                  |                   4 | HttpOnly: 3, Secure: 3, SameSite: 2 (Strict: 0, Lax: 0, None: 0), Paths: 4 (Non-root: 0)   | https://fr.pinterest.com/                                              |
| alexa_com_             | 503                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.amazon.com/dp/B0DCCNHWV5?ref=aucc_web_red_xaa_evgn_tx_0001 |
| it_wikipedia_org_      | 200                  |                   9 | HttpOnly: 5, Secure: 9, SameSite: 2 (Strict: 0, Lax: 0, None: 0), Paths: 9 (Non-root: 0)   | https://it.wikipedia.org/wiki/Pagina_principale                        |
| trustpilot_com_        | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.trustpilot.com/                                            |
| focus_de_              | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.focus.de/                                                  |
| facebook_com_          | 200                  |                   2 | HttpOnly: 2, Secure: 2, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 2 (Non-root: 0)   | https://www.facebook.com/                                              |
| www_livejournal_com_   | 200                  |                   1 | HttpOnly: 0, Secure: 1, SameSite: 1 (Strict: 0, Lax: 0, None: 0), Paths: 1 (Non-root: 0)   | https://www.livejournal.com/                                           |
| sputniknews_com_       | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://sputnikglobe.com/                                              |
| theatlantic_com_       | 200                  |                  10 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 10 (Non-root: 0)  | https://www.theatlantic.com/                                           |
| alibaba_com_           | 200                  |                   1 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 1 (Non-root: 0)   | https://www.alibaba.com/                                               |
| www_canalblog_com_     | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | http://www.canalblog.com/                                              |
| books_google_com_      | 200                  |                   2 | HttpOnly: 2, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 2 (Non-root: 0)   | https://books.google.com/?hl=en                                        |
| domainmarket_com_      | 403                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | http://domainmarket.com/                                               |
| myaccount_google_com_  | 200                  |                   3 | HttpOnly: 3, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 3 (Non-root: 0)   | https://www.google.com/account/about/?hl=en-US                         |
| justice_gov_           | 200                  |                   0 | HttpOnly: 0, Secure: 0, SameSite: 0 (Strict: 0, Lax: 0, None: 0), Paths: 0 (Non-root: 0)   | https://www.justice.gov/                                               |


## Summary Statistics

| Statistic | Value |
|-----------|--------|
| Total Sites Analyzed | 97 |
| Total Cookies Collected | 197 |
| HttpOnly Cookies | 77 |
| Secure Cookies | 106 |
| SameSite Cookies | 61 |
| SameSite Strict | 0 |
| SameSite Lax | 0 |
| SameSite None | 0 |
| Cookies with Path | 197 |
| Non-Root Paths | 0 |
| Min Cookies Per Site | 0 |
| Max Cookies Per Site | 15 |
| Mean Cookies Per Site | 2.03 |
| Median Cookies Per Site | 1.00 |