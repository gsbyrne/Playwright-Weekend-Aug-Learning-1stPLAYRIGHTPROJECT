import { test, expect } from '@playwright/test';

test('Login to demo blaze', async ({ page }) => {
  
    await page.goto('https://demoblaze.com//');

//when we see HTML tag with 'a' with a HREF it's a hyperlink.
// how do I click on it?
// Can use ID, or check if I can use getbylocator.
    await page.locator('#login2')
    await page.getByRole('link', {name: 'Log in' }).click()
    //await page.getByRole('dialog', { name: 'Log in' }).locator('form').fill('ggggg')
    await page.locator('#loginusername').fill('ggg')
    await page.locator('#loginpassword').fill('ggg')

    //bneflroe loggin in , logout should be higgen
            //expect the logout should be hidden
        await expect(page.getByRole('link',{name: 'Log out'})).toBeHidden
        await page.getByRole('link', {name: 'Log in' }).click()
        await expect(page.getByRole('link',{name: 'Log out'})).toBeVisible




await page.pause()

})




test('Click on Sony vaio i5', async ({ page }) => {

    // this will be a number of products together..
    // you just need to select which one you want.
    // this will make it scalable.

    const products = page.locator('h4.card-title')//this gives the collection.

    await page.goto('https://demoblaze.com//');


    //await page.getByText('Sony vaio i5').click()
    // Now using the location, I select the numer I want.
    
    //await page.locator(products)

    // this will wait 3 seconds, but no a good idea
    // But tomorrow it might take 5 secods to load.
    // How do we make playwright wait for just the right time, not hardcoded.
    // i.e. only when the page has loaded. 
    await page.waitForTimeout(9000)

    // instead of using waitForTimeout, use
    //await page.locator('use whatever the main page you can e.g. ') .waitFor

    //await (products.count())// this should give me the list of all. 

    console.log(await products.count())

await page.pause()

})




test('Click on Sony vaio i5 Optonised', async ({ page }) => {

    // this will be a number of products together..
    // you just need to select which one you want.
    // this will make it scalable.

    await page.goto('https://demoblaze.com//');
    const products = page.locator('h4.card-title')//this gives the collection.

    //using the filter it will look though the products to find "Sony vaio i5" and click on it.
    await products.filter({hasText: 'Sony vaio i5'}).click()

await page.pause()

})




// Quick Guide
// These are the recommended built-in locators.

// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).








/* A locator is good even if it works after the application has changed 
A strong resilliant locator.

If the marketing team change the name, and so the text changes, it will no longer work.


But there are 9 seperate lineks, i.e. Samsun glaxy s6 and then the next for all the proeucts, so it's the same but the data chagnes.
There is a pattern, if I can find the common structure, and then select based on that?!!!



*/

