import { Page, expect } from '@playwright/test';
import { format } from 'date-fns';
import { getByTestId } from './general';

export async function selectDate(page: Page, testId: string, date: Date) {
	const result = format(date, "'Today,' EEEE, MMMM do, yyyy");
	const trigger = page.locator(`[data-testid="${testId}"]`);
	await trigger.click();
	await page.locator(`button[aria-label="${result}"]`).click();
	await trigger.click();
}

export async function selectAndVerifyDate(page: Page, testId: string, value: Date, formatConfig = 'PP') {
	await selectDate(page, testId, value);
	await expect(getByTestId(page, testId)).toHaveText(format(value, formatConfig));
}