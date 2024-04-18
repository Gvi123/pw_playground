// @ts-check
const { test, expect } = require("@playwright/test");

test("Sign in", async ({ page }) => {
  await page.goto("https://www.automationexercise.com/");
});
