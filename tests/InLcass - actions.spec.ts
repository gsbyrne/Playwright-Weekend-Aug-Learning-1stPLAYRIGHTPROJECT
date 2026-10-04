import { test, expect } from '@playwright/test';

test('extracting values', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/Practise-Websites/automationpy.html');

  //get to the main area you want.  
  //const basicFormBtm = page.locator('nb-card', {hasNotText: 'Basic form'})
    // how search for it.
    //OR

page.getByLabel('Male',{exact: true})

//const basicFormBtm = page.locator('nb-card', {hasNotText: 'Basic form'}).getByRole('button')

//textContent: returns whatever you see in the HTML, (black, no matter what )
//console.log(await basicFormBtm.textContent())
//innertext = give me the actual text the user sees.
//console.log(await basicFormBtm.innerText())


  // Expect a title "to contain" a substring.
  await page.pause()


////////////// TO DO
//Automate the check boxes:
//We always use the check() instead of click() ?  Because the click method is unchecked or if it was It will be unchecked.
//Check method will only check the checkbox if its is not checked. Otheriwse it’ll do nothing.

//////////////  TO DO
//weite some code that wil check all the boxes, Monday Tuesday wednes etc… 

//////////////  TO DO
// Check the Sunday and Monday checkboxes first
// Now uncheck the checkboxes that re already checked.



});