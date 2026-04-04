import { expect, test } from '@playwright/test';
import { checkAllDropdownOptionExists, selectDropdownOption } from '../utils/dropdown'
import { selectDate } from '../utils/datepicker';
import { TaskCategoryList, TaskGroupList, TaskNameList } from '@/app/types/tasks.model';

const url = "/tasks"

test('Page Load', async ({ page }) => {
	await page.goto(url);
	await expect(page).toHaveTitle(/React Next/);
});

test('Content Section Loaded', async ({ page }) => {
	await page.goto(url);
	await expect(page.getByRole('heading', { name: 'Add Task' })).toBeVisible();
});

test('Sidebar Section Loaded', async ({ page }) => {
	await page.goto(url);
	await expect(page.locator('[data-slot="sidebar-wrapper"]')).toHaveCount(1);
});

test('Step 1 - Check Dropdowns Options', async ({ page }) => {
	await page.goto(url);

	const taskCategoryOptions = TaskCategoryList.map((x) => x.display);
	const taskNameOptions = TaskNameList.map((x) => x.display);
	const taskGroupOptions = TaskGroupList.map((x) => x.display);

	await checkAllDropdownOptionExists(page, 'task-category', taskCategoryOptions);
	await checkAllDropdownOptionExists(page, 'task-name', taskNameOptions);
	await checkAllDropdownOptionExists(page, 'task-group', taskGroupOptions);
});

test('Step 1 - Check Form', async ({ page }) => {
	await page.goto(url);
	// await selectDate(page, 'task-date', 'Select Date');
	await selectDropdownOption(page, 'task-name', 'Backlog Grooming');
	// const selectedText = await page.locator(`[data-testid="task-name"]`).innerText();
	// console.log(selectedText)
	// await expect(selectedText).toBe('Development Planning');
});

// test("Radix: select", async ({ page }) => {
// 	await page.goto(url);
// 	// await page.locator(`[data-testid="task-dropdown"]`).first().click();
// 	await page.getByRole("combobox").first().click();
// 	await page.getByRole("listbox").getByRole("option", { name: "Story" }).click();

// 	await expect(page.getByRole("combobox").first()).toHaveText(/Story/);
// });

