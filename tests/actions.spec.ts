import { test, expect, Locator } from '@playwright/test';

//toBe** -> Behaviour assertion 
//toHave** -> Value assertion
test('text actions', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    //getByLabel() - The option is ruled out because the fields are not connected.
    page.locator('[placeholder="Enter Name"]')
    page.getByPlaceholder('Enter Name')
    const nameTextbox: Locator = page.getByRole('textbox', {name: 'Enter Name'})

    //Now I want to verify if this text box is visible as well as enabled on the page.
    //Locator assertions always start with `await expect`. 
    await expect(nameTextbox, 'Verify that the name text box is visible').toBeVisible()
    await expect(nameTextbox, 'Verify that the name text box is enabled').toBeEnabled()

    //
    console.log(await nameTextbox.getAttribute('maxlength'))    //"15"
    console.log(await nameTextbox.getAttribute('piyush'))       //null

    //Generic Assertion(No autowait and no retry)
    //I'm fetching the value first and then putting the assertion. 
    const maxLength: string | null = await nameTextbox.getAttribute('maxlength')
    expect(maxLength).toBe('15')

    //Locator assertion(Autowait and autoretry)
    await expect(nameTextbox).toHaveAttribute('maxlength')
    await expect(nameTextbox).toHaveAttribute('maxlength', '15')
})

test('Radio button actions', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    //As per Playwright recommendation, try to use the locator
    //that closely resembles how a real user would interact with the application. 
    page.getByLabel('Male', {exact: true}) 
    const maleRadioBtn: Locator = page.getByRole('radio', {name: 'Male', exact: true})
    page.locator('#male')
    page.getByText('Male')

    await expect(maleRadioBtn, 'Verify that the Male radio button is visible').toBeVisible()
    await expect(maleRadioBtn, 'Verify that the Male radio button is enabled').toBeEnabled()  

    //Locator Assertion(Recommended)
    await expect(maleRadioBtn).not.toBeChecked()

    //Generic Assertion(Not recommended)
    expect(await maleRadioBtn.isChecked()).toBe(false)
    expect(await maleRadioBtn.isChecked()).toBeFalsy()      //TODO - Figure out what does it do
    
    //This will check the radio button.
    await maleRadioBtn.check()

    //Locator Assertion(Recommended)
    await expect(maleRadioBtn).toBeChecked()

    //Generic Assertion(Not recommended)
    expect(await maleRadioBtn.isChecked()).toBe(true)    

    //Add the meaningful messages for all the assertions.
})

//TODO - Automate checkboxes. 
//For checkboxes, we always use the `check()` method and not `click()`.
//The click method will simply toggle the state. If the checkbox
// is already checked, it'll uncheck it. If the checkbox is unchecked,
// it'll check it.

//The check method will only check the checkbox if it is not checked.
//Otherwise, it'll do nothing. 

//TODO - Write some code that will check all the checkboxes.
//TODO - Check the Sunday and Monday checkboxes first.
//Now, check the checkboxes that are checked and uncheck the
//checkboxes that are already checked. 