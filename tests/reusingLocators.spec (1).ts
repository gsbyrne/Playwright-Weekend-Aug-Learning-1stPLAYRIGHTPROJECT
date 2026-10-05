import { test, expect } from '@playwright/test';

//We want to automate the basic form by entering the
// email address, password, and clicking on the Submit button. 

test('Without reusing locators', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/pages/forms/layouts');

    //In order to find the locator, never ever assume. Your first step
    //is always to right-click on the target element and click the Inspect button.

    //Connected fields
    //Here, you have a matching `for` and `id` attribute.
    //The name is coming from the connected fields' visible text.
    await page.locator('nb-card', {hasText: "Basic form"})
              .getByRole('textbox', {name: 'Email address'}).fill('piyush@text.com')

    await page.locator('nb-card', {hasText: "Basic form"})
              .getByRole('textbox', {name: 'Password'}).fill('123456')          
              
    await page.locator('nb-card', {hasText: "Basic form"})
              .getByRole('button', {name: 'Submit'}).click()
})

test('Reusing locators', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/pages/forms/layouts');

    const basicForm = page.locator('nb-card', {hasText: "Basic form"})
    // const emailTextbox = basicForm.getByRole('textbox', {name: 'Email address'})
    // const passwordTextbox = basicForm.getByRole('textbox', {name: 'Password'})
    const emailTextbox = basicForm.getByLabel('Email address')
    const passwordTextbox = basicForm.getByLabel('Password')

    const submitBtn = basicForm.getByRole('button', {name: 'Submit'})

    await emailTextbox.fill('piyush@text.com')
    await passwordTextbox.fill('123456')                        
    await submitBtn.click()

    console.log(await emailTextbox.inputValue())

    //On the email text box, I'm trying to verify that it should
    //contain a text called "piyush@text.com"
    await expect(emailTextbox).toHaveValue('piyush@text.com')

    await expect(submitBtn).toBeVisible()
})

/*
Browser Properties        Playwright methods
textContent property <--> textContent()
innerText property   <--> innerText()

value property       <--> inputValue()

*/