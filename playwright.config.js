/** @type {import('@playwright/test').PlaywrightTestConfig} */

require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        baseURL: process.env.BASE_URL,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        // headless: true,
        // viewport: { width: 1280, height: 800 },
    },
});

// possible improvement: adding storageState for speed