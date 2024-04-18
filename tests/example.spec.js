// @ts-check
import { test, expect } from "@playwright/test";
import login from "../pageObjects/login-page";

test("Register User", async ({ page }) => {
  await login.navigateTo(page);
  await login.SignupButton(page);
  await login.newUserForm(page);
  await login.newUserFinalForm(page);
  await login.newUserSignedIn(page);
});
