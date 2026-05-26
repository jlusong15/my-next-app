import { TaskCategoryList, TaskGroupList, TaskNameList } from '@/types/tasks.model';
import { expect, test } from '@playwright/test';
import { toggleCollapsible } from '../utils/collapsible';
import { selectAndVerifyDate } from '../utils/datepicker';
import { checkAllDropdownOptionExists, selectAndVerifyDropdown } from '../utils/dropdown';
import { fillAndVerifyText } from '../utils/input';
import { toggleSidebar } from '../utils/sidebar';

const url = '/tasks';

const taskCategoryOptions = TaskCategoryList.map(x => x.display);
const taskNameOptions = TaskNameList.map(x => x.display);
const taskGroupOptions = TaskGroupList.map(x => x.display);

const dateToday = new Date();

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const note = `Curabitur elementum elementum augue, vitae tempus lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ligula diam, lobortis eu laoreet quis, tincidunt quis mauris. Pellentesque ornare aliquam arcu, nec vestibulum sem cursus in. Sed consectetur dapibus elementum. Nam suscipit mi at urna vulputate, pretium tincidunt nisi semper.`;

test.describe('Tasks Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(url);
	});

	test('Page Load', async ({ page }) => {
		await expect(page).toHaveTitle(/React Next/);
	});

	test('Content Section Loaded', async ({ page }) => {
		await expect(
			page.getByRole('heading', { name: 'Add Task' })
		).toBeVisible();
	});

	test('Check Dropdowns Options', async ({ page }) => {
		await checkAllDropdownOptionExists(page, 'task-category', taskCategoryOptions);
		await checkAllDropdownOptionExists(page, 'task-name', taskNameOptions);
		await checkAllDropdownOptionExists(page, 'task-group', taskGroupOptions);
	});

	test('Fill Form', async ({ page }) => {
		// ----- Date
		await selectAndVerifyDate(page, 'task-date', dateToday);

		// ----- Dropdowns
		await selectAndVerifyDropdown(page, 'task-category', taskCategoryOptions[1]);
		await selectAndVerifyDropdown(page, 'task-name', taskNameOptions[1]);
		await selectAndVerifyDropdown(page, 'task-group', taskGroupOptions[1]);

		// ----- Texts
		await fillAndVerifyText(page, 'task-shortDescription', description)
		await fillAndVerifyText(page, 'task-note', note);
	});

	test('Toggle Accordions', async ({ page }) => {
		await toggleCollapsible(page, 'task-step1-trigger', 'task-step1-content');
		await toggleCollapsible(page, 'task-step2-trigger', 'task-step2-content');
	});
});

test.describe('Tasks Page Sidebar', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(url);
	});

	test('Sidebar Section Loaded', async ({ page }) => {
		await expect(
			page.locator('[data-slot="sidebar-wrapper"]')
		).toHaveCount(1);
	});

	test('Toggle Sidebar', async ({ page }) => {
		await toggleSidebar(page, 'sidebar-trigger', 'sidebar-content');
	});
});