import { test, expect } from "@playwright/test";

test("home page loads with title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Carlos Castro Vargas/);
});

test("home has main content", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("main")).toBeVisible();
});
