import { test, expect } from '@playwright/test';

/* statid dropdowns, static

WHen you see the 'select' tag it is a select dropdown.
Mans is has a fixed number of elements.

we have a direect methog called 'selectOption'
*/



test('dropdown', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/Practise-Websites/automationpy.html');

  //if id use #country for the ID
  page.locator('#Country')
  page.getByLabel('Country')


  const Countries = page.getByRole('combobox',{name: 'Country'})

  // to automatically scroll to where we are
await page.getByRole('combobox',{name: 'Country'}).scrollIntoViewIfNeeded()
  await page.getByRole('combobox',{name: 'Country'}).selectOption('Canada')
  await page.getByRole('combobox',{name: 'Country'}).selectOption('uk')


  //How do I find out what the value that is selected.
  // In the properties of the location it will tell you.

  console.log(await page.getByRole('combobox',{name: 'Country'}).inputValue())

  //now to check that it's UK
  await expect(page.getByRole('combobox',{name: 'Country'}))



  //2. Check that there are 10 countries in the dropdown.

  const dropdownOptions = Countries.locator('option')
  await expect(dropdownOptions).toHaveCount(10)

  console.log(await dropdownOptions.allInnerTexts())
  console.log(await dropdownOptions.allTextContents())

  //3. Final requirement: I need to remove all the garbatch data from the countries and save to an array. e.g. \n etc...

  await dropdownOptions.allInnerTexts() // this gives you an array back of the countries.

  //you can use MAP
  // have to do this... 
  (await dropdownOptions.allInnerTexts()).map(country => country.trim()) // you use a callback function so give it a name to give what it returns. e..g country
  console.log(Countries)


   await page.pause()
});