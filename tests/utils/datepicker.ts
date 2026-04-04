// playwright-helpers.ts
import { Page } from '@playwright/test';

/**
 * Select a date from ShadCN DatePicker
 * @param page Playwright page
 * @param triggerId The ID of the DatePicker input or trigger
 * @param dateText The visible date number, e.g. "15"
 */
export async function selectDate2(page: Page, testId: string, dateText: string) {
	const trigger = page.locator(`[data-testid="${testId}"]`);
	await trigger.click(); // Open the calendar popover

	// const option = page.getByRole("grid", { name: optionText }).first();
	// await option.waitFor({ state: 'visible' });

	// // Wait for calendar to appear and find the date button
	// const dateButton = page.locator(`button:text-is("${dateText}")`).first();
	// await dateButton.waitFor({ state: 'visible' });

	// await dateButton.click(); // Select the date

	// // Optional: wait for popover to close
	// await trigger.evaluate((el) => el.blur());
}

export async function selectDate(page: Page, testId: string, date: Date) {
	const formatted = date.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});

	const trigger = page.locator(`[data-testid="${testId}"]`);
	await trigger.click(); // Open the calendar popover

	console.log({formatted})
	// Click the day
	await page.locator(`button[aria-label="${formatted}"]`).click();
}