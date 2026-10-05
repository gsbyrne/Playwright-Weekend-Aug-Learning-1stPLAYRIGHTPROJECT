import { test } from '@playwright/test'

// There are some steps that I want to perform before my test.
// I do not want to keep writing them inside every test,
// and this is where hooks help us. 

/*
A hook is simply a mechanism provided by Playwright that allows us
to execute some common code at a particular point in the test execution. 

We can tell Playwright, before every test case, to perform these common steps. 
This is where we can use a hook called `beforeEach()`. 

Playwright will automatically execute the `beforeEach` code before each test case. 
Before each, run this block of code before each test. 
*/

test.beforeEach(async ({page})=> {
    await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard')
    await page.getByText('Forms').click()
})

test('my first testcase', async({page})=> {
    await page.getByText('Form Layouts').click()
})

test('navigate to Datepicker page', async({page})=> {
    await page.getByText('Datepicker').click()
})

/*
Playwright mainly provides four hooks that we commonly use:
1. `beforeAll` - Run this code once before all the tests. 
2. `beforeEach` - Run this code before every test case. 

3. `afterEach` - Run this code after every test.  
4. `afterAll` - Run this code once after all the tests are completed. 

Whenever you see yourself writing the same setup or cleanup code
again and again across multiple tests, stop and ask yourself:
"Can this common code be moved into a hook?" 

In simple words, before or after my test, I want to automatically
perform these common activities for me. 

*/