import { test, expect } from '@playwright/test';

/*
My main goal is -> I want to identify elements uniquely.
Whenever I'm writing any CSS, XPath, or Playwright inbuilt
locator, I write these locators keeping my main goal in mind.

This is a priority of locators:
1. Playwright built-in locators
2. CSS selectors
3. XPath(Avoid it)

*/

test('Different locating strategies', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/pages/forms/layouts');

    //Lazy Locators - 
    //Playwright will ignore all the below lines of code because I'm not performing any action.

    //1. Locate by tag name.
    page.locator('input')

    //2. Locate by ID.
    //This is a very powerful strategy.
    //Syntax - #id OR tagName#id
    page.locator('#inputEmail1')
    page.locator('input#inputEmail1')

    //3. Locate by classes
    //Classes are for styling. They are not supposed to be unique.
    //You can locate by one or more classes. 
    //Syntax - .class1.class2..... OR tagName.class1.class2.....
    page.locator(".input-full-width.size-medium.status-basic")
    page.locator("input.input-full-width.size-medium.status-basic")
    page.locator("input.input-full-width.size-medium")
    page.locator("input.input-full-width")  //Input is the tag on the left.

    //4. By attribute name and value
    //We can use this strategy only if we are able to find a unique attribute and value.

    //Syntax - 
    //  [attributeName="attributeValue"] OR
    //  tagName[attributeName="attributeValue"]
    page.locator('[placeholder="Jane Doe"]')

    //You can also give multiple attributes and values, and for
    //every attribute-value pair, you have to use square brackets.
    page.locator('[placeholder="Jane Doe"][type="text"]')

    //5. By XPath
    //Syntax - 
    //  //tagName[@attributeName="attributeValue"] OR
    //  //*[@attributeName="attributeValue"]    
    page.locator('//input[@placeholder="Jane Doe"]')

    //Use the XPath syntax only if CSS is not working.
    //1. Backward traversal is not possible with CSS, but it works in XPath.
    //2. We cannot find out elements by using HTML text in CSS, but it works in XPath.

    //6. Locate by text.
    page.getByText('Form')     //Partial match + case-insensitive
    page.getByText('Form Layouts', {exact: true})   //Exact match + case-sensitive

    page.locator(':text("Form Layouts")')           //Partial match
    page.locator(':text-is("Form Layouts")')        //Exact match

    //Traversal
    //601, 602, 603, 604

    //Traversal simply means finding a nearby element first, which is unique.
    //And then, from this element, you can come down to the target element.

    //1. Parent -> Child
    //2. Sibling -> Sibling
    //3. Child -> Parent

    /*

    Slash slash in XPATH
    //      //nb-card/nb-card-body
    //I'm starting from the nb-card element. Single slash means
    //immediate child ONLY. 

    Double slash in XPATH
    //      //nb-card//nb-card-body
    //I'm starting from the nb-card element. Double slash means
    //either an immediate child or a deeply nested child.

    //We have an equivalent syntax in CSS. 
    //> in CSS
    //      nb-card > nb-card-body
    //I'm starting from the nb-card element. > means
    //immediate child ONLY.     

    Space in CSS
    //      nb-card nb-card-body
    //I'm starting from the nb-card element. Space means
    //either an immediate child or a deeply nested child.

    */
});