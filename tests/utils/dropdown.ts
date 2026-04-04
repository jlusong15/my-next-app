import type { Page } from '@playwright/test';

export async function checkDropdownOptionExists(page: Page, testId: string, option: string) {
	const trigger = page.locator(`[data-testid="${testId}"]`);
	await trigger.click();

	const dropdownOption = page.locator(`div[role="option"]:has-text("${option}")`);
	await dropdownOption.waitFor({ state: 'visible' });
	await dropdownOption.waitFor({ state: 'detached' });
}

export async function selectDropdownOption(page: Page, testId: string, optionText: string) {
	const trigger = page.locator(`[data-testid="${testId}"]`);
	await trigger.click();

	const option = page.getByRole("option", { name: optionText }).first();
	await option.waitFor({ state: 'visible' });
	await option.click();
}

export async function checkAllDropdownOptionExists(
	page: Page,
	triggerId: string,
	expectedOptions: string[]
) {
	const trigger = page.locator(`[data-testid="${triggerId}"]`);
	await trigger.click(); // open dropdown

	// Wait for at least one option to appear
	const firstOption = page.locator('[role="option"]').first();
	await firstOption.waitFor({ state: 'visible' });

	// Get all option texts
	const allOptions = page.locator('[role="option"]');
	const count = await allOptions.count();
	const renderedOptions: string[] = [];
	for (let i = 0; i < count; i++) {
		const text = (await allOptions.nth(i).innerText()).trim();
		renderedOptions.push(text);
	}

	// Check each expected option
	const missingOptions: string[] = [];
	for (const expected of expectedOptions) {
		if (!renderedOptions.includes(expected)) {
			missingOptions.push(expected);
		}
	}

	// Close the dropdown
	await trigger.press('Escape');

	if (missingOptions.length > 0) {
		throw new Error(
			`Dropdown "${triggerId}" is missing options: ${missingOptions.join(', ')}`
		);
	}
}

