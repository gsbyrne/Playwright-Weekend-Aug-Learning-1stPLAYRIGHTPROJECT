import { test } from '@playwright/test'

//Test case name tells us what the test case is about. 
//The callback function contains what the test case should do. 

//fixture
//A fixture is something that Playwright prepares and provides to our test case when we need it.
//There are other built-in fixtures like `browser` and `request`.

//Whenever you see the word "promise" with any Playwright command, it means it's an asynchronous operation.
//Asynchronous operation means this is non-blocking in nature.

//Await means wait for this operation to complete before continuing. 
test('my first testcase', async({page})=> {
    await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard')

    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('navigate to Datepicker page', async({page})=> {
    await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard')

    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()
})

