// i will use hooks
// i wil perform this before my test.
// it's an mechanisem that allows us to execute some common code at a particular point in the test execustion.
// We can use a hook called "beforeEach()"

import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

//playwreitng runs the beforeEach before each test automatically.
// beforeEach means run before each test.
// only the common parts of the code.
test.beforeEach(async ({page})=>{
        await page.goto("https://playground.bondaracademy.com/pages/iot-dashboard")
        await page.getByText('Forms').click()
})


test('my first test case',async({page})=>{
    await page.goto("https://playground.bondaracademy.com/pages/iot-dashboard")

    //await page.getByText('Forms').click()
    //await page.getByText('Form Layouts').click()
    await page.getByText('Datepicker').click()
})


test('naviage to datepicker page',async({page})=>{
    // "page " is a fixture like "{page}" above
    // page is a fixture that playwright has already prepared.
    //await page.goto("https://playground.bondaracademy.com/pages/iot-dashboard")
    //await is so it waits until its done.
    //have to "async" with "await"
    //await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()
    
})

/* playwright provides 4 hoks
1. befreAll     - run before ALL trests, this executes once before the tets
2. beforeEach   - runs before EACH test case.
3. afterEach    - this runs after each test case.
4. afterAll     - run this once afer all the tests have run (will run only once)

If youre writing the same code, think can it be used in a hook... if so use a hook.

*/




