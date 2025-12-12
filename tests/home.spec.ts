import { test, expect } from "@playwright/test";

test.describe("Home Page with no auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });

test("visual test", async ({ page }) => {
 await expect(page).toHaveScreenshot("home-page-no-auth.png");

});
  test("Check Sign In", async ({ page }) => {
    //Ensure the sign-in is present
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  });
  test("validate page title", async ({ page }) => {
    //Check the tittle of the page
    await expect(page).toHaveTitle(
      "Practice Software Testing - Toolshop - v5.0"
    );
  });
  test("Grid loads with 9 items", async ({ page }) => {
    //Check the count of item displayed
    const productGrid = page.locator(".col-md-9");
    await expect(productGrid.getByRole("link")).toHaveCount(9);
    expect(await productGrid.getByRole("link").count()).toBe(9);
  });
  test("Thor Hammer", async ({ page }) => {
    // Search for the Thor Hammer and check the result
    const productGrid = page.locator(".col-md-9");
    await page.getByTestId("search-query").fill("Thor Hammer");
    await page.getByTestId("search-submit").click();
    await expect(productGrid.getByRole("link")).toHaveCount(1);
    await expect(page.getByAltText("Thor Hammer")).toBeVisible();
  });
});

test.describe("Home Page customer 01 auth", () => {
test.use ({storageState:".auth/customer01.json"});
test.beforeEach(async({page})=>{
  await page.goto("https://practicesoftwaretesting.com/");
});

test ("Visual test authorized",async ({page})=>{
 await expect(page).toHaveScreenshot("home-page-customer01.png")

});
test("check customer01 is signed in",async({page})=>{
  await expect(page.getByTestId("nav-sign-in")).not.toBeVisible();
  await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
})
  });
