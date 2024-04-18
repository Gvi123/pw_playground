import { test, expect } from "@playwright/test";
import randomEmail from "random-email";

class login {
  static async navigateTo(page) {
    await page.goto("https://www.automationexercise.com/");
  }

  static async SignupButton(page) {
    await page.getByRole("link", { name: " Signup / Login" }).click();
    await expect(
      page.getByRole("heading", { name: "New User Signup!" })
    ).toBeVisible();
  }

  static async newUserForm(page) {
    await page.getByPlaceholder("Name").fill("Gvidas");
    await page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address")
      .fill(randomEmail({ domain: "gmail.com" }));
    await page.getByRole("button", { name: "Signup" }).click();
    await expect(page.locator("#form")).toContainText(
      "Enter Account Information"
    );
  }

  static async newUserFinalForm(page) {
    await page.getByLabel("Mr.").check();
    await page.getByLabel("Password *").fill("TDL!Test123");
    await page.locator("#days").selectOption("1");
    await page.locator("#months").selectOption("1");
    await page.locator("#years").selectOption("2021");
    await page.getByLabel("Sign up for our newsletter!").check();
    await page.getByLabel("Receive special offers from").check();
    await page.getByLabel("First name *").fill("Labas");
    await page.getByLabel("Last name *").fill("Vakaras");
    await page.getByLabel("Company", { exact: true }).fill("Tikrai ne TDL");
    await page.getByLabel("Address * (Street address, P.").fill("pilaitės pr");
    await page.getByLabel("Address 2").fill("pilaitės pr 2");
    await page.getByLabel("Country *").selectOption("United States");
    await page.getByLabel("State *").fill("New York");
    await page.getByLabel("City *").fill("New York");
    await page.locator("#zipcode").fill("51215");
    await page.getByLabel("Mobile Number *").fill("123456789");
    await page.getByRole("button", { name: "Create Account" }).click();
    await expect(page.locator("b")).toContainText("Account Created!");
  }

  static async newUserSignedIn(page) {
    await page.getByRole("link", { name: "Continue" }).click();
    await expect(page.locator("#header")).toContainText("Logged in as Gvidas");
  }
}

export default login;
