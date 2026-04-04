import { test, expect } from '@playwright/test';

const url = "/";

test.describe('Home Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Page Load', async ({ page }) => {
    await expect(page).toHaveTitle(/React Next/);
  });

  test('Page Title', async ({ page }) => {
    await expect(page).toHaveTitle(/My React Next.js App/);
  });

  test('Scroll to: About Me', async ({ page }) => {
    await page.getByRole('link', { name: 'About Me' }).click();
    await expect(page.getByRole('heading', { name: 'Jennifer Bautista' })).toBeVisible();
  });
});