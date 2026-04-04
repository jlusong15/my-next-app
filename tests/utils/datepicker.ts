import { Page } from '@playwright/test';
import { format } from 'date-fns';

export async function selectDate(page: Page, testId: string, date: Date) {
	const result = format(date, "'Today,' EEEE, MMMM do, yyyy");
	const trigger = page.locator(`[data-testid="${testId}"]`);
	await trigger.click();
	await page.locator(`button[aria-label="${result}"]`).click();
	await trigger.click();
}