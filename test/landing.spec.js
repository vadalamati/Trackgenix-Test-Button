const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://franco-trackgenix-app.vercel.app/
  await page.goto('https://franco-trackgenix-app.vercel.app/');
  // Go to https://franco-trackgenix-app.vercel.app/home
  await page.goto('https://franco-trackgenix-app.vercel.app/home');
  // Click [placeholder="John Smith"]
  await page.locator('[placeholder="John Smith"]').click();
  // Fill [placeholder="John Smith"]
  await page.locator('[placeholder="John Smith"]').fill('Testing');
  // Click [placeholder="johnsmith\@mail\.com"]
  await page.locator('[placeholder="johnsmith\\@mail\\.com"]').click();
  // Fill [placeholder="johnsmith\@mail\.com"]
  await page.locator('[placeholder="johnsmith\\@mail\\.com"]').fill('Playwright');
  // Select value2
  await page.locator('select').selectOption('value2');
  // Click text=LowMediumHigh >> div >> nth=1
  await page.locator('text=LowMediumHigh >> div').nth(1).click();
  // Check input[name="priority"] >> nth=1
  await page.locator('input[name="priority"]').nth(1).check();
  // Click textarea
  await page.locator('textarea').click();
  // Click textarea
  await page.locator('textarea').click();
  // Fill textarea
  await page.locator('textarea').fill('Hi! I just testing this page :)');
  // Check input[name="not_a_robot"]
  await page.locator('input[name="not_a_robot"]').check();
  // Click text=Reset
  await page.locator('text=Reset').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/home?priority=medium&not_a_robot=not_a_robot');
  // Click [placeholder="John Smith"]
  await page.locator('[placeholder="John Smith"]').click();
  // Fill [placeholder="John Smith"]
  await page.locator('[placeholder="John Smith"]').fill('Now');
  // Press Tab
  await page.locator('[placeholder="John Smith"]').press('Tab');
  // Press Tab
  await page.locator('[placeholder="johnsmith\\@mail\\.com"]').press('Tab');
  // Click [placeholder="johnsmith\@mail\.com"]
  await page.locator('[placeholder="johnsmith\\@mail\\.com"]').click();
  // Fill [placeholder="johnsmith\@mail\.com"]
  await page.locator('[placeholder="johnsmith\\@mail\\.com"]').fill('testing');
  // Click textarea
  await page.locator('textarea').click();
  // Fill textarea
  await page.locator('textarea').fill('Testing Submit button');
  // Check input[name="not_a_robot"]
  await page.locator('input[name="not_a_robot"]').check();
  // Check input[name="priority"] >> nth=1
  await page.locator('input[name="priority"]').nth(1).check();
  // Click text=Submit
  await page.locator('text=Submit').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/home?priority=medium&not_a_robot=not_a_robot');
  // Click a:has-text("Functionalities")
  await page.locator('a:has-text("Functionalities")').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/home?priority=medium&not_a_robot=not_a_robot#');
  // Click text=About us
  await page.locator('text=About us').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/home?priority=medium&not_a_robot=not_a_robot#');
  // Click text=Login
  await page.locator('text=Login').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/login');
  // Click a:has-text("Sign Up")
  await page.locator('a:has-text("Sign Up")').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/signup');
  // Click text=Home
  await page.locator('text=Home').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/home');
  // Click text=Login
  await page.locator('text=Login').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/login');
  // Click a:has-text("Sign Up")
  await page.locator('a:has-text("Sign Up")').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/signup');
});