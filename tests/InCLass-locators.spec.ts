/*
Before Playwright can click a button, type into a text box, select a
value from a dropdown, or validate some text, it needs the address of this element. 

This address is called a locator. 

Locator helps Playwright identify a specific element among hundreds of elements present on the page. 

Whenever you are writing automation, the first thing Playwright needs to do is find the element uniquely.

Everything you see on a web page is an element, and a locator
is the address that helps Playwright find that element so that I can interact with it.

DOM - DOM stands for Document Object Model.
DOM is like the blueprint of the webpage. 

Everything that you see on the screen is represented somewhere inside the DOM:
- The login button is here.
- The username text box is here.
- Images are here.
- Links are here.
- Dropdowns are here.

In fact, every visible element on the page has a representation
inside the DOM, and this is exactly where Playwright starts its work.

Browser --------> Request
Response <---------- Server

This response usually contains three important things:
1. HTML - HTML is the skeleton of the website. 
2. CSS - CSS is responsible for the appearance of the page (for example, colours, fonts, spacing, alignment).
3. JavaScript - Playwright is for adding the behaviour to the web page. 

All the interactive features that you see are handled using JavaScript.
Once the response is received by the browser, it starts reading the HTML,
and as it reads HTML, it starts building the DOM (Document Object Model).

DOM is the browser's internal representation of the webpage. 
The browser keeps reading the HTML, builds the DOM, applies CSS,
executes JavaScript, and displays the web page on the screen. 

This process happens incredibly fast, so fast that we don't even notice it.

As human beings, we interact with the web page that we see on the screen. 

But Playwright interacts with the DOM. 

When we ask Playwright to click a login button, Playwright first looks for that button inside the DOM. 

How does Playwright find all these elements?
By using locators...

A good locator helps Playwright find the correct element quickly and `reliably`. 
A poor locator may work today and fail tomorrow, and that is one of the
biggest reasons why automation test cases become flaky. 

*/

import { test, expect } from '@playwright/test';

test('Identify option 1 radio button', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/pages/forms/layouts');

    // await page.locator('nb-card nb-radio :text("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text("Option 1")').click()

    await page.locator('nb-card nb-radio').getByText('Option 2', {exact: true}).click()
})

test('Click the first sign-in button', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/pages/forms/layouts');

    //I'm looking for a button that has the name "Sign In".
    //If you locate multiple elements with Selenium and then
    //try to perform an action, Selenium goes with the first match without any error.
    //But in Playwright, it immediately gives a strict mode violation error. 
    
    //await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).click()
    await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).first().click()
    await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).last().click()

    await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).nth(0).click()
    await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).nth(1).click()  
    
    //Using indexing is considered fragile or flaky automation. This is not recommended.
    await page.locator('nb-card').nth(1).getByRole('button', {name: 'Sign in'}).click() 

    //filter() is an external filter
    await page.locator('nb-card').filter({hasText: "Using the Grid"})
              .getByRole('button', {name: 'Sign in'}).click()

    //Inline filter    
    await page.locator('nb-card', {hasText: "Using the Grid"})
              .getByRole('button', {name: 'Sign in'}).click() 
              
    await page.locator('nb-card', {hasNotText: "Using the Grid"})             

    await page.locator('nb-card', {has: page.locator('#inputEmail1')})
})

