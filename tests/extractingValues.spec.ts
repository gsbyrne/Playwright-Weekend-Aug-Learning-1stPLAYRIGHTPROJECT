import { test, expect } from '@playwright/test';

test('Extracting values', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/pages/forms/layouts');

    // const basicFormBtn = page.locator('nb-card', {hasText: 'Basic form'}).locator('button')
    const basicFormBtn = page.locator('nb-card', {hasText: 'Basic form'}).getByRole('button')

    console.log(await basicFormBtn.textContent())       //Submit
    console.log(await basicFormBtn.innerText())         //SUBMIT

    //textContent() - Before styling
    //It returns exactly what is in the HTML, no matter how it is styled or displayed. 

    //innerText() - After styling
    //It returns what is actually rendered on the screen.
    //Give me the text the user actually sees. 
})