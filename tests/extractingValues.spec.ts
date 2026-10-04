import { test, expect } from '@playwright/test';

test('extracting values', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

  //get to the main area you want.  
  //const basicFormBtm = page.locator('nb-card', {hasNotText: 'Basic form'})
    // how search for it.
    //OR

const basicFormBtm = page.locator('nb-card', {hasNotText: 'Basic form'}).getByRole('button')

//textContent: returns whatever you see in the HTML, (black, no matter what )
console.log(await basicFormBtm.textContent())
//innertext = give me the actual text the user sees.
console.log(await basicFormBtm.innerText())


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});