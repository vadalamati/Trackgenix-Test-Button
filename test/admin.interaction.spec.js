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
  await page.locator('[placeholder="Enter your email address"]').fill('admin');
  // Press 6 with modifiers
  await page.locator('[placeholder="Enter your email address"]').press('Alt+6');
  // Press 4 with modifiers
  await page.locator('[placeholder="Enter your email address"]').press('Alt+4');
  // Fill [placeholder="Enter your email address"]
  await page.locator('[placeholder="Enter your email address"]').fill('admin@gmail.com');
  // Press Tab
  await page.locator('[placeholder="Enter your email address"]').press('Tab');
  // Fill [placeholder="Enter your password"]
  await page.locator('[placeholder="Enter your password"]').fill('admin123');
  // Click button:has-text("Log In")
  await page.locator('button:has-text("Log In")').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/employees');
  // Click text=Projects
  await page.locator('text=Projects').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/projects');
  // Click text=TestPMTimesheetUnoDoneNo me borres este projecto QA, que es sobre el cual estoy  >> button >> nth=0
  await page.locator('text=TestPMTimesheetUnoDoneNo me borres este projecto QA, que es sobre el cual estoy  >> button').first().click();
  // Click text=OK
  await page.locator('text=OK').click();
  // Click text=TestPMTimesheetUno
  await page.locator('text=TestPMTimesheetUno').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/project/62ceb5114758658e381ad8bb');
  // Click #Layer_1
  await page.locator('#Layer_1').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/projects');
  // Click text=Timesheets
  await page.locator('text=Timesheets').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/time-sheets');
  // Click text=PMNoBorrarNoLoBorres2022-07-25Show All >> button >> nth=0
  await page.locator('text=PMNoBorrarNoLoBorres2022-07-25Show All >> button').first().click();
  // Click text=OK
  await page.locator('text=OK').click();
  // Click header button >> nth=0
  await page.locator('header button').first().click();
  // Click text=Logout
  await page.locator('text=Logout').click();
  await expect(page).toHaveURL('https://franco-trackgenix-app.vercel.app/home');
});