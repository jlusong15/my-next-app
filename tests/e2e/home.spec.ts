import { test, expect } from '@playwright/test';

const url ="/"

test('Page Load', async ({ page }) => {
	await page.goto(url);
	await expect(page).toHaveTitle(/React Next/);
});

test('Page Title', async ({ page }) => {
  await page.goto(url);
  await expect(page).toHaveTitle(/My React Next.js App/);
});

test('Scroll to: About me', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('link', { name: 'About Me' }).click();
  await expect(page.getByRole('heading', { name: 'Jennifer Bautista' })).toBeVisible();
});