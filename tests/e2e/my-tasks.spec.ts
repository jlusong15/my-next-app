import { expect, Page, test } from '@playwright/test';
import { checkAllDropdownOptionExists, selectDropdownOption } from '../utils/dropdown';
import { selectDate } from '../utils/datepicker';
import { TaskCategoryList, TaskGroupList, TaskNameList } from '@/app/types/tasks.model';
import { format } from 'date-fns';
import { toggleCollapsible } from '../utils/collapsible';
import { toggleSidebar } from '../utils/sidebar';

const url = '/tasks';

const taskCategoryOptions = TaskCategoryList.map(x => x.display);
const taskNameOptions = TaskNameList.map(x => x.display);
const taskGroupOptions = TaskGroupList.map(x => x.display);

const dateToday = new Date();

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const note = `Curabitur elementum elementum augue, vitae tempus lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ligula diam, lobortis eu laoreet quis, tincidunt quis mauris. Pellentesque ornare aliquam arcu, nec vestibulum sem cursus in. Sed consectetur dapibus elementum. Nam suscipit mi at urna vulputate, pretium tincidunt nisi semper.`;

const getByTestId = (page: Page, id: string) => page.locator(`[data-testid="${id}"]`);

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

	test('Sidebar Section Loaded', async ({ page }) => {
		await expect(
			page.locator('[data-slot="sidebar-wrapper"]')
		).toHaveCount(1);
	});

	test('Toggle Sidebar', async ({ page }) => {
		await toggleSidebar(page, 'sidebar-trigger', 'sidebar-content');
	});

	test('Check Dropdowns Options', async ({ page }) => {
		await checkAllDropdownOptionExists(page, 'task-category', taskCategoryOptions);
		await checkAllDropdownOptionExists(page, 'task-name', taskNameOptions);
		await checkAllDropdownOptionExists(page, 'task-group', taskGroupOptions);
	});

	test('Fill Form', async ({ page }) => {

		// ----- Date
		await selectDate(page, 'task-date', dateToday);
		await expect(getByTestId(page, 'task-date'))
			.toHaveText(format(dateToday, 'PP'));

		// ----- Dropdowns
		await selectDropdownOption(page, 'task-category', taskCategoryOptions[1]);
		await expect(getByTestId(page, 'task-category'))
			.toHaveText(taskCategoryOptions[1]);

		await selectDropdownOption(page, 'task-name', taskNameOptions[1]);
		await expect(getByTestId(page, 'task-name'))
			.toHaveText(taskNameOptions[1]);

		await selectDropdownOption(page, 'task-group', taskGroupOptions[1]);
		await expect(getByTestId(page, 'task-group'))
			.toHaveText(taskGroupOptions[1]);

		// ----- Input
		const shortDesc = getByTestId(page, 'task-shortDescription');
		await shortDesc.fill(description);
		await expect(shortDesc).toHaveValue(description);

		// ----- Textarea
		const taskNote = getByTestId(page, 'task-note');
		await taskNote.fill(note);
		await expect(taskNote).toHaveValue(note);
	});

	test('Toggle Accordions', async ({ page }) => {
		await toggleCollapsible(page, 'task-step1-trigger', 'task-step1-content');
		await toggleCollapsible(page, 'task-step2-trigger', 'task-step2-content');
	});
});