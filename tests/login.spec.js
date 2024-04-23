// @ts-check
import { test, expect } from "@playwright/test";
import login from "../pageObjects/login-page";
import config from "../config/config.js";

test("Registering a new user with unique email", async ({ page }) => {
  await login.navigateTo(page);
  await login.clickSignUpButton(page);
  await login.RegisterNewUserCredentials(
    page,
    config.USER_NAME,
    config.LOGIN_EMAIL
  );
  await login.newUserAccountInformation(page);
  await login.correctUserLoggedIn(page, config.USER_NAME);
});

test("Registering a new user with an already used email", async ({ page }) => {
  await login.navigateTo(page);
  await login.clickSignUpButton(page);
  await login.RegisterNewUserCredentials(
    page,
    config.USER_NAME,
    config.EXISTING_USER_EMAIL
  );
  await login.errorMessageAfterInccorectCredentials(
    page,
    "Email Address already exist!"
  );
});

test("Logging in with correct credentials", async ({ page }) => {
  await login.navigateTo(page);
  await login.clickSignUpButton(page);
  await login.UserCredentials(
    page,
    config.EXISTING_USER_EMAIL,
    config.EXISTING_USER_PASSWORD
  );
  await login.correctUserLoggedIn(page, config.USER_NAME);
});

test("Logging in with incorrect credentials", async ({ page }) => {
  await login.navigateTo(page);
  await login.clickSignUpButton(page);
  await login.UserCredentials(
    page,
    config.NON_EXISTING_USER_EMAIL,
    "incorrect_paswsword"
  );
  await login.errorMessageAfterInccorectCredentials(
    page,
    "Your email or password is incorrect!"
  );
});

test("Logging out after successful login", async ({ page }) => {
  await login.navigateTo(page);
  await login.clickSignUpButton(page);
  await login.UserCredentials(
    page,
    config.EXISTING_USER_EMAIL,
    config.EXISTING_USER_PASSWORD
  );
  await login.correctUserLoggedIn(page, config.USER_NAME);
  await login.logout(page);
});
