import { test, expect } from '@playwright/test';
import { format } from 'date-fns';

const url = "/dashboard";

test.describe('Dashboard Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Page Load', async ({ page }) => {
    const today = new Date();
    await expect(
      page.getByRole('heading', { name: `Welcome! Today is ${format(today, "PPPP")}!` })
    ).toBeVisible();
  });

  test('GridStack is loaded', async ({ page }) => {
    await page.waitForSelector('.grid-stack');
  });

  test('GridStack items are complete', async ({ page }) => {
    const count = await page.locator('.grid-stack-item').count();
    await expect(count).toBe(6);
  });
});