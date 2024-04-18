// @ts-check
const { test, expect } = require("@playwright/test");

test("Sign in", async ({ page }) => {
  await page.goto("https://www.automationexercise.com/");
  await expect(
    page.getByRole("link", { name: "Website for automation" })
  ).toBeVisible();
});
