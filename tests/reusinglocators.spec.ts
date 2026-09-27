import { test, expect } from '@playwright/test';

test('reusinglocators', async ({ page }) => {
     await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

    page.locator('input') //playwright way to find the element.


});
