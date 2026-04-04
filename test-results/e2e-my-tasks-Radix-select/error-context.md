# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/my-tasks.spec.ts >> Radix: select
- Location: tests/e2e/my-tasks.spec.ts:41:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('combobox').first()
Expected pattern: /Story/
Received string:  "Select a task category..."
Timeout: 5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByRole('combobox').first()
    9 × locator resolved to <button dir="ltr" type="button" role="combobox" data-state="closed" data-placeholder="" data-size="default" aria-expanded="false" aria-autocomplete="none" data-slot="select-trigger" aria-label="Select a value" aria-controls="radix-_R_eatuknelb_" class="flex items-center justify-between gap-1.5 border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-…>…</button>
      - unexpected value "Select a task category..."

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e7]:
        - link "Home" [ref=e8] [cursor=pointer]:
          - /url: /
        - link "Dashboard" [ref=e9] [cursor=pointer]:
          - /url: /dashboard
        - link "My Tasks" [ref=e10] [cursor=pointer]:
          - /url: /tasks
        - link "Stepper" [ref=e11] [cursor=pointer]:
          - /url: /stepper
        - link "To Do" [ref=e12] [cursor=pointer]:
          - /url: /to-do-list
      - button "Open user menu" [ref=e15] [cursor=pointer]:
        - generic [ref=e17]: Open user menu
        - img [ref=e18]
  - generic [ref=e22]:
    - generic [ref=e28]:
      - button "Add Task" [ref=e29] [cursor=pointer]:
        - img
        - text: Add Task
      - generic [ref=e30]:
        - textbox "Find..." [ref=e32]
        - button [ref=e34] [cursor=pointer]:
          - img
      - button "Recent 5" [ref=e36] [cursor=pointer]:
        - generic [ref=e37]:
          - generic [ref=e38]:
            - generic [ref=e39]:
              - img [ref=e40]
              - text: Recent
            - generic [ref=e43]: "5"
          - img [ref=e45]
      - generic [ref=e47]:
        - button "Schedule 2" [expanded] [ref=e48] [cursor=pointer]:
          - generic [ref=e49]:
            - generic [ref=e50]:
              - generic [ref=e51]:
                - img [ref=e52]
                - text: Schedule
              - generic [ref=e54]: "2"
            - img [ref=e56]
        - generic [ref=e59]:
          - generic [ref=e60]:
            - generic [ref=e61]:
              - img [ref=e62]
              - text: Deployment Time (3pm, Sat.)
            - generic [ref=e65]: "12"
          - generic [ref=e66]:
            - generic [ref=e67]:
              - img [ref=e68]
              - text: Monday 8:00am
            - generic [ref=e77]: "9"
      - button "Logs 3" [ref=e79] [cursor=pointer]:
        - generic [ref=e80]:
          - generic [ref=e81]:
            - generic [ref=e82]:
              - img [ref=e83]
              - text: Logs
            - generic [ref=e84]: "3"
          - img [ref=e86]
    - main [ref=e89]:
      - generic [ref=e90]:
        - generic [ref=e91]:
          - button "Toggle Sidebar" [ref=e93] [cursor=pointer]:
            - img
            - generic [ref=e94]: Toggle Sidebar
          - generic [ref=e96]: Add Task
        - navigation "breadcrumb" [ref=e98]:
          - list [ref=e99]:
            - listitem [ref=e100]:
              - link "Task" [ref=e101] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e102]:
              - img [ref=e103]
            - listitem [ref=e105]:
              - link "Create Task" [disabled] [ref=e106]
        - generic [ref=e108]:
          - heading "Add Task" [level=4] [ref=e110]
          - paragraph [ref=e111]: Task Category
          - combobox "Select a value" [active] [ref=e113]:
            - generic: Select a task category...
            - img
          - generic [ref=e114]:
            - generic [ref=e115]:
              - button "Step1" [expanded] [ref=e116] [cursor=pointer]:
                - generic [ref=e117]:
                  - generic [ref=e118]:
                    - img [ref=e119]
                    - text: Step1
                  - img [ref=e123]
              - generic [ref=e126]:
                - generic [ref=e127]:
                  - generic [ref=e128]:
                    - generic [ref=e129]: Task Name
                    - combobox "Select a value" [ref=e130]:
                      - generic: Select
                      - img
                  - generic [ref=e131]:
                    - generic [ref=e132]: Schedule
                    - button "Select Date" [ref=e133] [cursor=pointer]:
                      - img
                      - generic [ref=e134]: Select Date
                - generic [ref=e136]:
                  - generic [ref=e137]: Group
                  - combobox "Select a value" [ref=e138]:
                    - generic: Select
                    - img
            - generic [ref=e140]:
              - button "Step2" [expanded] [ref=e141] [cursor=pointer]:
                - generic [ref=e142]:
                  - generic [ref=e143]: Step2
                  - img [ref=e145]
              - generic [ref=e148]:
                - generic [ref=e150]:
                  - generic [ref=e151]: Short Description
                  - textbox [ref=e152]
                - generic [ref=e154]:
                  - generic [ref=e155]: Other Notes
                  - textbox [ref=e156]
  - button "Open Next.js Dev Tools" [ref=e162] [cursor=pointer]:
    - img [ref=e163]
  - alert [ref=e166]
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import { checkAllDropdownOptionExists, checkDropdownOptionExists, selectDropdownOption } from '../utils/dropdown'
  3  | import { selectDate } from '../utils/datepicker';
  4  | 
  5  | const url = "/tasks"
  6  | 
  7  | test('Page Load', async ({ page }) => {
  8  | 	await page.goto(url);
  9  | 	await expect(page).toHaveTitle(/React Next/);
  10 | });
  11 | 
  12 | test('Content Section Loaded', async ({ page }) => {
  13 | 	await page.goto(url);
  14 | 	await expect(page.getByRole('heading', { name: 'Add Task' })).toBeVisible();
  15 | });
  16 | 
  17 | test('Sidebar Section Loaded', async ({ page }) => {
  18 | 	await page.goto(url);
  19 | 	await expect(page.locator('[data-slot="sidebar-wrapper"]')).toHaveCount(1);
  20 | });
  21 | 
  22 | test('Step 1 - Check Dropdowns Options', async ({ page }) => {
  23 | 	await page.goto(url);
  24 | 
  25 | 	const taskOptions = ['Development Planning', 'Backlog Grooming', 'Sprint Review'];
  26 | 	const taskGroupOptions = ['Dev Team', 'QA Team', 'SME'];
  27 | 
  28 | 	await checkAllDropdownOptionExists(page, 'task-name', taskOptions);
  29 | 	await checkAllDropdownOptionExists(page, 'task-group', taskGroupOptions);
  30 | });
  31 | 
  32 | test('Step 1 - Check Form', async ({ page }) => {
  33 | 	await page.goto(url);
  34 | 	// await selectDate(page, 'task-date', 'Select Date');
  35 | 	await selectDropdownOption(page, 'task-name', 'Development Planning');
  36 | 	const selectedText = await page.locator(`[data-testid="task-name"]`).innerText();
  37 | 	console.log(selectedText)
  38 | 	await expect(selectedText).toBe('Development Planning');
  39 | });
  40 | 
  41 | test("Radix: select", async ({ page }) => {
  42 | 	await page.goto(url);
  43 | 	// await page.locator(`[data-testid="task-dropdown"]`).first().click();
  44 | 	await page.getByRole("combobox").first().click();
  45 | 	await page.getByRole("listbox").getByRole("option", { name: "Story" }).click();
  46 | 
> 47 | 	await expect(page.getByRole("combobox").first()).toHaveText(/Story/);
     |                                                   ^ Error: expect(locator).toHaveText(expected) failed
  48 | });
  49 | 
  50 | 
```