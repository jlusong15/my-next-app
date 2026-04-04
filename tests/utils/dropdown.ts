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
	await trigger.click(); // Open the dropdown
	// 1️⃣ Wait for portal to appear
	// const portal = page.locator('[data-radix-portal]'); // ShadCN portal wrapper
	// await portal.waitFor({ state: 'visible' });

	// // Use getByRole("option", { name }) for reliable selection
	// const option = page.getByRole("option", { name: optionText }).first();
	// await option.waitFor({ state: 'visible' });
	// await option.click(); // Click to select

	// await page.locator(`[data-testid="${testId}"]`).first().click();
	// await page.getByRole("listbox").getByRole("option").first().click();

	// 2️⃣ Wait for the portal options to be visible
	const option = page.getByRole('option', { name: optionText }).first();
	await option.waitFor({ state: 'visible' });

	// Get the bounding box and click using mouse (real pointer event)
	const box = await option.boundingBox();
	if (!box) throw new Error(`Option "${optionText}" is not visible for clicking`);

	await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);

	// Tiny wait for trigger text to update
	await page.waitForTimeout(50);
	// await option.click(); // Click to select
	// await expect(page.getByRole("combobox").first()).toHaveText(/Pineapple/);

	// const selectedText = page.locator(`[data-testid="${testId}"]`).innerText();
	// console.log(selectedText)
	// await expect(selectedText).toBe(option);
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