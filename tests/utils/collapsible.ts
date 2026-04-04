import { Page, expect } from '@playwright/test';

export async function toggleCollapsible(page: Page, triggerTestId: string, contentTestId: string) {
	const trigger = page.getByTestId(triggerTestId);
	const content = page.getByTestId(contentTestId);

	// Initially visible
	await expect(content).toBeVisible();

	// Close
	await trigger.click();
	await expect(content).not.toBeVisible();

	// Open
	await trigger.click();
	await expect(content).toBeVisible();
};