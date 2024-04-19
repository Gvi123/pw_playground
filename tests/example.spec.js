// @ts-check
import { test, expect } from "@playwright/test";
import login from "../pageObjects/login-page";

test("Register User", async ({ page }) => {
  await login.navigateTo(page);
  await login.clickSignUpButton(page);
  await login.newUserCredentials(page);
  await login.newUserAccountInformation(page);
  await login.checkIfNewUserIsCreated(page);
});
