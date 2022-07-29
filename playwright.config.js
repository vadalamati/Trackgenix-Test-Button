// @ts-check
const { devices } = require('@playwright/test');
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      headless: false,
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
      video: 'on-first-retry',
      launchOptions: {
        slowMo: 500,
      },
    },

};
    // projects: [
    //     {
    //       name: 'chromium',
    //       use: { ...devices['Desktop Chrome'] },
    //     },
    //     {
    //       name: 'firefox',
    //       use: { ...devices['Desktop Firefox'] },
    //     },
    //     {
    //       name: 'webkit',
    //       use: { ...devices['Desktop Safari'] },
    //     },
    //   ],
    // };

  module.exports = config;