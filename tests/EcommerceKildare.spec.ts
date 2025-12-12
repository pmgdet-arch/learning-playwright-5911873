import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.thebicestervillageshoppingcollection.com/e-commerce/bvsc/en/bv/gift-card"
  );
  await page.getByText("Bag total").click();
  await expect(page.locator("#gift-card-container")).toContainText("Bag total");
  await expect(page.locator("section")).toContainText("Gift Card");
  await page.locator("i").first().click();
  await page.getByRole("button", { name: "Kildare Village" }).click();
  await expect(page).toHaveTitle("Gift Card • Kildare Village");
  await expect(page.locator("section")).toContainText(
    "Choose the Gift Card and let your family and friends indulge in must-haves from their favourite brands with up to 60% off the recommended retail price. If you’d prefer to receive the confirmation directly, use your own email address in the recipient section or enter the recipient's email address to have the confirmation sent to them. We will continue to process your gift card orders throughout the season. However, please note that delivery before Christmas depends on our delivery partner, An Post, who may experience delays during this busy time. Alternatively, we recommend when purchasing your Gift Card online, you can select the option to “collect in village”. You will then receive an email confirmation which you can gift to the recipient and they can collect their gift card at their leisure when visiting Kildare Village."
  );
  await page.locator("div:nth-child(3) > .md-radio-container").first().click();
});
