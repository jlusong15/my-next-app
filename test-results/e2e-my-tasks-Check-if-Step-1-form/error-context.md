# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/my-tasks.spec.ts >> Check if Step 1 form
- Location: tests/e2e/my-tasks.spec.ts:22:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.getAttribute: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-testid="task-dropdown"]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - combobox "Select a value" [ref=e113]:
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
                    - button "Pick a date" [ref=e133] [cursor=pointer]:
                      - img
                      - generic [ref=e134]: Pick a date
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
  1  | import type { Page } from '@playwright/test';
  2  | 
  3  | /**
  4  |  * Select an option from a Radix/ShadCN SelectDropdown using stable selector.
  5  |  * Automatically handles if dropdown is already open.
  6  |  *
  7  |  * @param page Playwright page
  8  |  * @param dropdownSelector string - selector for trigger (data-testid or aria-label)
  9  |  * @param option string - text of the option to select
  10 |  */
  11 | export async function selectDropdownOption(
  12 |   page: Page,
  13 |   dropdownSelector: string,
  14 |   option: string
  15 | ) {
  16 |   const trigger = page.locator(dropdownSelector);
  17 | 
  18 |   // 1️⃣ Check if dropdown is already open
> 19 |   const isExpanded = await trigger.getAttribute('aria-expanded');
     |                                    ^ Error: locator.getAttribute: Test timeout of 30000ms exceeded.
  20 |   if (isExpanded !== 'true') {
  21 |     await trigger.click(); // open it only if closed
  22 |   }
  23 | 
  24 |   // 2️⃣ Wait for the option to appear
  25 |   const dropdownOption = page.locator(`div[role="option"]:has-text("${option}")`);
  26 |   await dropdownOption.waitFor({ state: 'visible' });
  27 | 
  28 |   // 3️⃣ Click the desired option
  29 |   await dropdownOption.click();
  30 | 
  31 |   // 4️⃣ Optional: wait for dropdown to close
  32 |   await trigger.waitFor({ state: 'visible' }); // ensures dropdown collapsed
  33 | }
```