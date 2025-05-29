const fs = require('fs');
const path = require('path');

// List of websites from your assignment
const websites = [
  '20minutos.es', 'abc.es', 'abc.net.au', 'abril.com.br', 'adssettings.google.com',
  'afternic.com', 'alexa.com', 'alibaba.com', 'aliexpress.com', 'amazon.co.uk',
  'amazon.fr', 'apnews.com', 'arxiv.org', 'bbc.com', 'bestfreecams.club',
  'blog.google', 'bp0.blogger.com', 'buzzfeed.com', 'calendar.google.com', 'cookie.stats',
  'cpanel.com', 'cpanel.net', 'dailymail.co.uk', 'dailymotion.com', 'discord.com',
  'discord.gg', 'doi.org', 'ebay.com', 'e.monsite.com', 'espn.com',
  'estadao.com.br', 'es.wikipedia.org', 'eventbrite.com', 'fifa.com', 'files.wordpress.com',
  'ftc.gov', 'gettyimages.com', 'gfycat.com', 'giphy.com', 'google.com.br',
  'google.co.uk', 'google.it', 'google.ru', 'googleusercontent.com', 'groups.google.com',
  'huawei.com', 'icann.org', 'ign.com', 'intel.com', 'jimdofree.com',
  'jstor.org', 'lefigaro.fr', 'lemonde.fr', 'liveinternet.ru', 'marca.com',
  'mediafire.com', 'medium.com', 'microsoft.com', 'mirror.co.uk', 'nature.com',
  'netvibes.com', 'newsweek.com', 'php.net', 'pinterest.com', 'pixabay.com',
  'plesk.com', 'plos.org', 'plus.google.com', 'pt.wikipedia.org', 'radiofrance.fr',
  'rapidshare.com', 'reuters.com', 'rtve.es', 'samsung.com', 'scmp.com',
  'search.yahoo.com', 'sedoparking.com', 'shutterstock.com', 'sites.google.com', 'ssl-images-amazon.com',
  'stanford.edu', 'substack.com', 'surveymonkey.com', 'target.com', 't.co',
  'theglobeandmail.com', 'themeforest.net', 'thesun.co.uk', 'thetimes.co.uk', 't-online.de',
  'tools.google.com', 'tripadvisor.com', 'trustpilot.com', 'unesco.org', 'usgs.gov',
  'utexas.edu', 'vistaprint.com', 'webmd.com', 'wiley.com', 'www.canalblog.com',
  'zippyshare.com'
];

// Directory to save the generated HTML files
const outputDir = path.join(__dirname, 'framable');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate HTML files with iframes for each website
websites.forEach((website) => {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iframe Test - ${website}</title>
</head>
<body>
    <h1>Attempting to Frame: ${website}</h1>
    <iframe src="https://${website}" width="800" height="600"></iframe>
</body>
</html>`;

  // Write HTML content to a file
  const filename = path.join(outputDir, `${website.replace(/\./g, '_')}.html`);
  fs.writeFileSync(filename, htmlContent, 'utf8');

  console.log(`Generated HTML file for ${website}`);
});

console.log('All HTML files have been generated.');
