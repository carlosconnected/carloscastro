import { test, expect } from "@playwright/test";

test("mobile menu opens and shows nav links", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");

  await page.getByRole("button", { name: "Toggle menu" }).click();
  await expect(page.getByRole("link", { name: "Hobbies" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Sudoku" })).toBeVisible();
});

test("mobile menu closes after navigating", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");

  await page.getByRole("button", { name: "Toggle menu" }).click();
  await page.getByRole("link", { name: "Hobbies" }).click();

  await expect(page).toHaveURL("/hobbies");
  await expect(page.getByRole("heading", { name: "Hobbies" })).toBeVisible();
});
