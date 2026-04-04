import { expect, test } from '@playwright/test';
import { format } from 'date-fns';

const url = "/dashboard"

test('Page Load', async ({ page }) => {
	const today = new Date()

	await page.goto(url);
	await expect(page.getByRole('heading', { name: `Welcome! Today is ${format(today, "PPPP")}!` })).toBeVisible();
});

test('GridStack is loaded', async ({ page }) => {
	await page.goto(url);
	await page.waitForSelector('.grid-stack');
});

test('GridStack items are complete', async ({ page }) => {
	await page.goto(url);

	const count = await page.locator('.grid-stack-item').count();
	await expect(count).toBe(6);
});