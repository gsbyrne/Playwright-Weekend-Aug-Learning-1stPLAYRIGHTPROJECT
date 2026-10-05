import { test, expect } from '@playwright/test';

//Whenever we see an HTML tag as `a` with an `href` attribute, it is a hyperlink.

test('login to demo Blaze', async ({ page }) => {
    await page.goto('https://demoblaze.com/');

    page.locator('#login2')     //Priority#2
    await page.getByRole('link', { name: 'Log in' }).click()    //Priority#1

    await page.locator('#loginusername').fill('piyushgupta84')
    await page.locator('#loginpassword').fill('123456')

    const logoutLink = page.getByRole('link', { name: 'Log out' })

    //Before logging in, logout should be hidden. 
    await expect(logoutLink, 'Verify that the logout link is not present').toBeHidden()
    await page.getByRole('button', { name: 'Log in' }).click()
    await expect(logoutLink, 'Verify that the logout link is now present').toBeVisible()

    //After logging in, logout should be visible. 

    await page.pause()
})

//v1
test('Click on Sony Vaio i5 product', async ({ page }) => {
    await page.goto('https://demoblaze.com/')

    await page.getByText('Sony vaio i5').click()
})

/*
A locator is not good because it works today. 
A locator is good because it continues to work even
after the application changes in the future.

As an automation engineer, we should always ask one
question: "Will this locator still work 6 months from now?"
*/

//Common Locator strategy
//Beginners search for elements.
//Experienced automation engineers search for patterns. 
test('Click on Sony Vaio i5 product - optimized', async ({ page }) => {
    await page.goto('https://demoblaze.com/')

    //I am getting a collection here.
    //Instead of one product, I now have all the products together.
    const products = page.locator('h4.card-title')

    //It is a hard-coded wait for 3 seconds. 
    //A fixed width is sometimes too long and sometimes too short. 
    //The real puzzle is: can we make Playwright wait only as long as required?
    //await page.waitForTimeout(3000)

    //Wait until this product container is available. 
    await page.locator('#tbodyid').waitFor()

    const optionsCount = await products.count()     //9

    for(let i = 0; i < optionsCount; i++){
        const text = await products.nth(i).innerText()

        if(text === 'Sony vaio i5'){
            await products.nth(i).click()
            break
        }
    }
})

//Instead of using a for loop, try running the same code with a for-of loop.

test('Click on Sony Vaio i5 product - optimized1', async ({ page }) => {
    await page.goto('https://demoblaze.com/')

    const products = page.locator('h4.card-title')

    //Out of the nine matches, give me only that match that contains this text: Sony Vaio i5.
    //Click on it. 
    await products.filter({hasText: 'Sony vaio i5'}).click()
})
