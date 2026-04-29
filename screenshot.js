const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle', timeout: 15000 });
  await page.screenshot({ path: '/Users/alofx/Desktop/vice-hero.png' });
  
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/Users/alofx/Desktop/vice-transformation.png' });
  
  await page.evaluate(() => window.scrollTo(0, 3000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/alofx/Desktop/vice-services.png' });
  
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/Users/alofx/Desktop/vice-footer.png' });
  
  await browser.close();
  console.log('Done');
})();
