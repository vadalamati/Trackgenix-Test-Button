const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://franco-trackgenix-app.vercel.app/home
  await page.goto('https://franco-trackgenix-app.vercel.app/home');
  // Click text=Login
  await page.locator('text=Login').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/login');
  // Click [placeholder="Enter your email address"]
  await page.locator('[placeholder="Enter your email address"]').click();
  // Fill [placeholder="Enter your email address"]
  await page.locator('[placeholder="Enter your email address"]').fill('eee');
  // Press 6 with modifiers
  await page.locator('[placeholder="Enter your email address"]').press('Alt+6');
  // Press 4 with modifiers
  await page.locator('[placeholder="Enter your email address"]').press('Alt+4');
  // Fill [placeholder="Enter your email address"]
  await page.locator('[placeholder="Enter your email address"]').fill('eee@gmail.com');
  // Press Tab
  await page.locator('[placeholder="Enter your email address"]').press('Tab');
  // Fill [placeholder="Enter your password"]
  await page.locator('[placeholder="Enter your password"]').fill('admin123');
  // Click button:has-text("Log In")
  await page.locator('button:has-text("Log In")').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/employee/home');
  // Click text=Employee > Home<2022-08-01 - 2022-08-07>ProjectMonTueWedThuFriSatSunTotal hsProj
  await page.locator('text=Employee > Home<2022-08-01 - 2022-08-07>ProjectMonTueWedThuFriSatSunTotal hsProj').click();
  // Click text=Add new progress
  await page.locator('text=Add new progress').click();
  // Click text=Cancel
  await page.locator('text=Cancel').click();
  // Click text=Projects >> nth=0
  await page.locator('text=Projects').first().click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/projects');
  // Click text=Show All
  await page.locator('text=Show All').click();
  // Click text=OK
  await page.locator('text=OK').click();
  // Click text=Projects Timesheets
  await page.locator('text=Projects Timesheets').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/employees/pm/timesheet');
  // Select 62e00742337e3f20c8c63d07
  await page.locator('select').selectOption('62e00742337e3f20c8c63d07');
  // Click text=Alejandro Brussa050024011Modify Tasks >> button
  await page.locator('text=Alejandro Brussa050024011Modify Tasks >> button').click();
  // Click text=Cancel
  await page.locator('text=Cancel').click();
  // Click header button >> nth=0
  await page.locator('header button').first().click();
  // Click text=Logout
  await page.locator('text=Logout').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/home');
});
