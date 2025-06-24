import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://flipkart.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('iphone 14 pro max');
  await page.getByRole('button', { name: 'Search' }).click(); 
  await page.pause();
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
