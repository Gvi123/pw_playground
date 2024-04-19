import { test, expect } from "@playwright/test";
import config from "../config/config.js";
import user_data from "../test_data/user.json";

class login {
  static async navigateTo(page) {
    await page.goto(config.AUTOMATIONEXCERCISE_HOME_URL);
  }

  static async clickSignUpButton(page) {
    await page.getByRole("link", { name: " Signup / Login" }).click();
    await expect(
      page.getByRole("heading", { name: "New User Signup!" })
    ).toBeVisible();
  }

  static async newUserCredentials(page) {
    await page.getByPlaceholder("Name").fill(config.USER_NAME);
    await page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address")
      .fill(config.LOGIN_EMAIL);
    await page.getByRole("button", { name: "Signup" }).click();
    await expect(page.locator("#form")).toContainText(
      "Enter Account Information"
    );
  }

  static async newUserAccountInformation(page) {
    await page.getByLabel("Mr.").check();
    await page.getByLabel("Password *").fill(config.PASSWORD);
    await page.locator("#days").selectOption("1");
    await page.locator("#months").selectOption("1");
    await page.locator("#years").selectOption("2021");
    await page.getByLabel("Sign up for our newsletter!").check();
    await page.getByLabel("Receive special offers from").check();
    await page.getByLabel("First name *").fill(user_data.first_name);
    await page.getByLabel("Last name *").fill(user_data.last_name);
    await page.getByLabel("Company", { exact: true }).fill(user_data.company);
    await page
      .getByLabel("Address * (Street address, P.")
      .fill(user_data.address);
    await page.getByLabel("Address 2").fill(user_data.address2);
    await page.getByLabel("Country *").selectOption(user_data.country);
    await page.getByLabel("State *").fill(user_data.state);
    await page.getByLabel("City *").fill(user_data.city);
    await page.locator("#zipcode").fill(user_data.zipcode);
    await page.getByLabel("Mobile Number *").fill(user_data.mobile_number);
    await page.getByRole("button", { name: "Create Account" }).click();
    await expect(page.locator("b")).toContainText("Account Created!");
  }

  static async checkIfNewUserIsCreated(page) {
    await page.getByRole("link", { name: "Continue" }).click();
    await expect(page.locator("#header")).toContainText(
      `Logged in as ${config.USER_NAME}`
    );
  }
}

export default login;
