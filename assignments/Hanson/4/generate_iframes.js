const fs = require('fs');
const path = require('path');

// List of websites
const websites = [
  '20minutos.es', '4shared.com', 'abril.com.br', 'adobe.com', 'alexa.com',
  'alibaba.com', 'amazon.co.jp', 'amazon.com', 'amazon.fr', 'amzn.to',
  'archives.gov', 'bandcamp.com', 'bbc.com', 'bestfreecams.club', 'biglobe.ne.jp',
  'booking.com', 'books.google.com', 'box.com', 'bp.blogspot.com', 'brandbucket.com',
  'cambridge.org', 'cnn.com', 'cpanel.com', 'detik.com', 'domainmarket.com',
  'draft.blogger.com', 'enable-javascript.com', 'facebook.com', 'focus.de',
  'foxnews.com', 'francetvinfo.fr', 'gnu.org', 'gofundme.com', 'goo.ne.jp',
  'google.it', 'googleblog.com', 'gravatar.com', 'hollywoodreporter.com',
  'howstuffworks.com', 'hubspot.com', 'huffingtonpost.com', 'insider.com',
  'it.wikipedia.org', 'jhu.edu', 'jstor.org', 'justice.gov', 'justjared.com',
  'last.fm', 'list-manage.com', 'mediafire.com', 'merriam-webster.com',
  'microsoft.com', 'myaccount.google.com', 'myspace.com', 'narod.ru',
  'newyorker.com', 'nicovideo.jp', 'nih.gov', 'nydailynews.com', 'nypost.com',
  'offset.com', 'opera.com', 'ouest-france.fr', 'picasa.google.com', 'pinterest.fr',
  'plos.org', 'pt.wikipedia.org', 'radiofrance.fr', 'repubblica.it', 'rtve.es',
  'salesforce.com', 'samsung.com', 'sapo.pt', 'sciencedaily.com', 'sciencedirect.com',
  'sciencemag.org', 'sedoparking.com', 'sky.com', 'softonic.com', 'sputniknews.com',
  'statista.com', 't.co', 't.me', 'target.com', 'theatlantic.com', 'thenai.org',
  'thesun.co.uk', 'thetimes.co.uk', 'trustpilot.com', 'uol.com.br', 'wa.me',
  'weather.com', 'whatsapp.com', 'who.int', 'www.canalblog.com', 'www.livejournal.com',
  'www.yahoo.com', 'yandex.com', 'youronlinechoices.com', 'zoom.us'
];

// Output directory
const outputDirectory = path.resolve(__dirname, 'framable');

// Create output directory if it doesn't exist
fs.mkdirSync(outputDirectory, { recursive: true });

// Template for generating iframe HTML
const generateHtml = (website) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>iFrame Test - ${website}</title>
</head>
<body>
  <h1>Attempting to Frame Website: ${website}</h1>
  <iframe src="https://${website}" width="800" height="600" frameborder="1" loading="lazy"></iframe>
</body>
</html>`;

// Generate the HTML files
websites.forEach((website) => {
  const safeName = website.replace(/\./g, '_');
  const filePath = path.join(outputDirectory, `${safeName}.html`);
  const htmlContent = generateHtml(website);

  try {
    fs.writeFileSync(filePath, htmlContent, 'utf8');
    console.log(`Generated: ${safeName}.html`);
  } catch (err) {
    console.error(`Failed to write file for ${website}:`, err.message);
  }
});

console.log('\n All HTML files have been generated with iframes!');
