import { test, expect } from '@playwright/test';

/* y m,ain goal is -> I want to identuy elements uniquely.

WHenver Im wrigin CSS, XPAth, or playweright inbuild locator, I weite 
these locators keeing in main goal i mind.

Priority:
1.  Playwright built locators.
2.  CSS selectors
3.  XPath ( We try to avoid it)
*/



test('Different locating strategies', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

    // Lazy locators means playwright will igfnor all the 
    //1. locate by tag name. 
    page.locator('input') //playwright way to find the element.

    //2. locate by ID.
    //very powerful strategy.
    //syntac #id or tagName#id
    page.locator("inputEmail1") // this was for email field.

    //3. Locate by classes
    // Classes are for Styling. Not supposed to be unique.
    // locaatel by one or more classes.
    // Syntac = class1.class2 or tagName.class1.class2...
    //see "!"class" 
    page.locator("")

    //4. By Attribute name and value.
    // use this only if we can find a unique attribute and value.
    // Syntax -  //  [attributeName="attributeValue"] OR tagName[attributeName="attributeValue"]

    page.locator('[placeholder="Jane Doe"]')


    // 1 and 2 can or should be enough to get the locator.
    //5. By Xpath


    //6. By text.
    page.getByText("Forms") //Partial match + case insensitive
    //OR
    page.getByText("Forms",{exact: true}) //eCXACT MATCH AND CASE SENSITIVE.
    //OR
    page.locator

    //Traversal strategy
    // finding out a nearby element 1st that is unique
    // and from this you can come dfown to the target emment.
    // only used 

    //1. Parent -> Chil
    //2. Sibiling -> Sibling
    //3. Child -> Parent

    // LOOK AT THE NOTES from the l;ecture. "locatingTechniques.spec.ts"

    //TRYIN TO GFET TO THE RADIO BUTTON.





  // Expect a title "to contain" a substring.
 await page.pause()
});



test('CLick the 1st Signin Button', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

  //Im looking for a buggon that has the name of "Sign In"
   
    //If there's more than 1 matches you get a "Strict mode violation" - 
    //So if there are multiple matchesGlob.
    // you can use first or last?

    //E.g.
    await page.locator("nb-card").getByRole("button", {name: "Sign in"}).first().click()

    await page.locator("nb-card").getByRole("button", {name: "Sign in"}).last().click()

    await page.locator("nb-card").getByRole("button", {name: "Sign in"}).nth(0).click() // SO you're picking which ever on eit is. Not ideal as it may changed

    await page.locator("nb-card").getByRole("button", {name: "Sign in"}).nth(1).click() // SO you're picking which ever on eit is.  Not ideal as it may changed

    ///// THE MOST OF THE TIME WE WILL USE SOMETHING LIKE THIS....

    // EVERY CARD MAY HAVE A UNIQUE NAME OR "E.G. "uSING THE grID"

    // THERE ARE 6 CARDS  BUT FILTER OUT THE TEST "USING THE GRID"
    await page.locator("nb-card").filter({hasText: "Using the Grid"}).getByRole("button",{name: "Sign in"}).click()

    await page.locator("nb-card",{has: page.locator("#inputEmail1")})

});