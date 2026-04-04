import { Page } from "@playwright/test";

export const getByTestId = (page: Page, id: string) => page.locator(`[data-testid="${id}"]`);