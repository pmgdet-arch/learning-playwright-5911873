import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.thebicestervillageshoppingcollection.com/e-commerce/bvsc/en/bv/gift-card');
  await expect(page.locator('section')).toContainText('Gift Card');
  await page.locator('#md-input-fdqakgjmu').click();
  await page.getByRole('button', { name: 'Bicester Village' }).click();
  await expect(page.locator('div:nth-child(2) > .md-radio-container').first()).toBeVisible();
  await page.locator('div:nth-child(2) > .md-radio-container').first().click();
  await expect(page.locator('[id="__GiftCardAntiForgeryForm"]')).toContainText('Add to bag');
});