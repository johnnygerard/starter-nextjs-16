import { expect, test } from "@playwright/test";

test("homepage displays deployment success message", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Deployment successful!" }),
  ).toBeVisible();
});
