const puppeteer = require('puppeteer');

describe('Route: /', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox','--disable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
      headless: true
    });
  });

  it('matches the visual snapshot', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8080');
    const image = await page.screenshot({ fullPage: true });

    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent'
    });
  })
})
