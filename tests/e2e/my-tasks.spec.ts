import { expect, test } from '@playwright/test';
import { checkAllDropdownOptionExists, selectDropdownOption } from '../utils/dropdown'
import { selectDate } from '../utils/datepicker';
import { TaskCategoryList, TaskGroupList, TaskNameList } from '@/app/types/tasks.model';
import { format } from 'date-fns';

const url = "/tasks"
const taskCategoryOptions = TaskCategoryList.map((x) => x.display);
const taskNameOptions = TaskNameList.map((x) => x.display);
const taskGroupOptions = TaskGroupList.map((x) => x.display);

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
	await checkAllDropdownOptionExists(page, 'task-category', taskCategoryOptions);
	await checkAllDropdownOptionExists(page, 'task-name', taskNameOptions);
	await checkAllDropdownOptionExists(page, 'task-group', taskGroupOptions);
});

test('Step 1 - Check Dropdowns Options', async ({ page }) => {
	await page.goto(url);
	await checkAllDropdownOptionExists(page, 'task-category', taskCategoryOptions);
	await checkAllDropdownOptionExists(page, 'task-name', taskNameOptions);
	await checkAllDropdownOptionExists(page, 'task-group', taskGroupOptions);
});

test('Step 1 - Test Form', async ({ page }) => {
	await page.goto(url);
	// await selectDate(page, 'task-date', new Date())

	await selectDropdownOption(page, 'task-category', taskCategoryOptions[1]);
	const selectedTaskCategory = await page.locator(`[data-testid="task-category"]`).innerText();
	await expect(selectedTaskCategory).toBe(taskCategoryOptions[1]);

	await selectDropdownOption(page, 'task-name', taskNameOptions[1]);
	const selectedTaskName = await page.locator(`[data-testid="task-name"]`).innerText();
	await expect(selectedTaskName).toBe(taskNameOptions[1]);

	await selectDropdownOption(page, 'task-group', taskGroupOptions[1]);
	const selectedTaskGroup = await page.locator(`[data-testid="task-group"]`).innerText();
	await expect(selectedTaskGroup).toBe(taskGroupOptions[1]);

});
