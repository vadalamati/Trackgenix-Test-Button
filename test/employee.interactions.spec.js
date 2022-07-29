const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://franco-trackgenix-app.vercel.app/home
  await page.goto('https://franco-trackgenix-app.vercel.app/home');
  // Click text=Manage your hours and teams with ease
  await page.locator('text=Manage your hours and teams with ease').click();
  // Click text=Login
  await page.locator('text=Login').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/login');
  // Click [placeholder="Enter your email address"]
  await page.locator('[placeholder="Enter your email address"]').click();
  // Fill [placeholder="Enter your email address"]
  await page.locator('[placeholder="Enter your email address"]').fill('axelsantini703');
  // Press 6 with modifiers
  await page.locator('[placeholder="Enter your email address"]').press('Alt+6');
  // Press 4 with modifiers
  await page.locator('[placeholder="Enter your email address"]').press('Alt+4');
  // Fill [placeholder="Enter your email address"]
  await page.locator('[placeholder="Enter your email address"]').fill('axelsantini703@gmail.com');
  // Click [placeholder="Enter your password"]
  await page.locator('[placeholder="Enter your password"]').click();
  // Click [placeholder="Enter your password"]
  await page.locator('[placeholder="Enter your password"]').click();
  // Fill [placeholder="Enter your password"]
  await page.locator('[placeholder="Enter your password"]').fill('test1234');
  // Click button:has-text("Log In")
  await page.locator('button:has-text("Log In")').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/employee/home');
  // Click text=Add new progress
  await page.locator('text=Add new progress').click();
  // Click text=X >> nth=3
  await page.locator('text=X').nth(3).click();
  // Click text=Cancel
  await page.locator('text=Cancel').click();
  // Click header button >> nth=0
  await page.locator('header button').first().click();
  // Click text=Logout
  await page.locator('text=Logout').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/home');
});