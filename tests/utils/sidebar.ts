import { Page, expect } from '@playwright/test';

export async function toggleSidebar(page: Page, triggerTestId: string, contentTestId: string) {
	const trigger = page.getByTestId(triggerTestId);
	const content = page.getByTestId(contentTestId);

	// Initially visible
	await expect(content).toHaveAttribute('data-state', 'expanded');

	// Check if collapsed
	await trigger.click();
	await expect(content).toHaveAttribute('data-state', 'collapsed');

	// Check if expanded
	await trigger.click();
	await expect(content).toHaveAttribute('data-state', 'expanded');
};