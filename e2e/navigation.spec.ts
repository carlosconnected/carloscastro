import { test, expect } from "@playwright/test";

test("navbar links navigate to correct pages", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Hobbies" }).click();
  await expect(page).toHaveURL("/hobbies");
  await expect(page.getByRole("heading", { name: "Hobbies" })).toBeVisible();

  await page.getByRole("link", { name: "Personal projects" }).click();
  await expect(page).toHaveURL("/personal-projects");
  await expect(
    page.getByRole("heading", { name: "Personal projects" })
  ).toBeVisible();

  await page.getByRole("link", { name: "Sudoku" }).click();
  await expect(page).toHaveURL("/sudoku");
  await expect(page.getByRole("button", { name: "New Game" })).toBeVisible();
});

test("navbar Home link returns to home", async ({ page }) => {
  await page.goto("/hobbies");
  await page.getByRole("link", { name: "Home" }).click();
  await expect(page).toHaveURL("/");
  await expect(page.getByRole("main")).toBeVisible();
});
