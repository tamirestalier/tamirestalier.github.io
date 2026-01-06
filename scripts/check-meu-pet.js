const puppeteer = require('puppeteer');

(async () => {
  const url = 'https://tamirestalier.github.io';
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  const consoleMessages = [];
  const failedRequests = [];
  const badResponses = [];

  page.on('console', msg => consoleMessages.push({ type: msg.type(), text: msg.text() }));
  page.on('pageerror', err => consoleMessages.push({ type: 'pageerror', text: err.toString() }));
  page.on('requestfailed', req => failedRequests.push({ url: req.url(), error: req.failure() && req.failure().errorText }));
  page.on('response', res => {
    if (res.status() >= 400) badResponses.push({ url: res.url(), status: res.status() });
  });

  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  // Wait a bit for any lazy-loaded images
  await page.waitForTimeout(1500);

  // Query for images containing meupetsumiu
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({ src: img.getAttribute('src'), alt: img.getAttribute('alt'), outer: img.outerHTML }));
  });

  const matches = images.filter(i => i.src && i.src.toLowerCase().includes('meupetsumiu'));

  console.log('\nFound', images.length, 'images on page.');
  if (matches.length > 0) {
    console.log('Found image(s) matching "meupetsumiu":');
    matches.forEach(m => console.log(' -', m.src));
  } else {
    console.log('No image with "meupetsumiu" found in DOM.');
  }

  if (failedRequests.length) {
    console.log('\nFailed requests:');
    failedRequests.forEach(f => console.log(' -', f.url, f.error));
  }

  if (badResponses.length) {
    console.log('\nResponses with status >= 400:');
    badResponses.forEach(b => console.log(' -', b.status, b.url));
  }

  if (consoleMessages.length) {
    console.log('\nConsole messages:');
    consoleMessages.forEach(c => console.log(' -', c.type, c.text));
  }

  await browser.close();
})();