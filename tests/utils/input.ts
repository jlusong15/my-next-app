import { Page, expect } from '@playwright/test';
import { getByTestId } from './general';

export async function fillInput(page: Page, testId: string, value: string) {
	const shortDesc = getByTestId(page, testId);
	await shortDesc.fill(value);
}

export async function fillAndVerifyText(page: Page, testId: string, value: string) {
	fillInput(page, testId, value);
	const shortDesc = getByTestId(page, testId);
	await expect(shortDesc).toHaveValue(value);
};

