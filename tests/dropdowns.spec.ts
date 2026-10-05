/*

Static dropdown - A static dropdown has fixed options. 
For example, if you click on the country dropdown and
immediately see some countries, that's a fixed or static dropdown.

Options are fixed and do not change based on your actions.

When you see the `select` tag, it is a select dropdown.
This dropdown means it has a fixed number of elements.
For this dropdown, we have a direct method in Playwright called `selectOption`. 
*/

import { test, expect, Locator } from '@playwright/test';
//Whenever you are running any test case that uses an application
// that you are running from a live server, always run it via the
// terminal and don't use the VS Code green play button. 
test('select dropdown(Country', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    page.locator('#country')
    page.getByLabel('Country')
    const country: Locator = page.getByRole('combobox', {name: 'Country'})

    //In the selectOption() method, we can provide a string-based argument. 

    //Playwright will select the target country, but it will not automatically scroll down. 
    await country.scrollIntoViewIfNeeded()
    await country.selectOption('Canada')        //HTML/visible text
    await country.selectOption('uk')            //Value attribute

    //In the selectOption() method, we can also provide an object
    await country.selectOption({label: 'Japan'}) 
    await country.selectOption({value: 'brazil'})   //this is the last selected country

    console.log(await country.inputValue())

    await expect(country, '<TODO>').toHaveValue('brazil')

    //2. Check the number of options in the dropdown and make sure it is 10.
    const dropdownOptions = country.locator('option')
    await expect(dropdownOptions).toHaveCount(10)

    //Both the `innerText` and `textContent` methods will expect exactly one match.
    // console.log(await dropdownOptions.innerText())       -> This will fail
    // console.log(await dropdownOptions.textContent())     -> This will fail

    console.log(await dropdownOptions.allInnerTexts()) 
    console.log(await dropdownOptions.allTextContents()) 

    //My final requirement is to remove all the garbage values from `country` and store all the countries in an array.

    const countries: string[] = (await dropdownOptions.allInnerTexts()).map(country => country.trim())

    for(const country of countries){
        console.log(country)
    }
    
    await page.pause()
})

//TODO - Automate the Colors dropdown.
//This is a multi-select dropdown. 
//To select multiple options, hold the Ctrl/Command key And now select the proper option. 

//In order to automate a multi-select dropdown, you have to
// use the `selectOption` method only. Instead of providing
// just a single string argument or a single object argument,
// you want to provide an array of strings or an array of objects.

//TODO - Verify that the Sorted list is a sorted list or not.
