// I have to import test 9i.e. show you test as in test()
// playweriting.test comes from "mode_module", which is one of the libraries.
import { test, expect } from '@playwright/test';

//you can give any name, you have to use 
// "()=>" - Anonymouns callback function, when I run this test case this function gets callback function container what th test cases should do.


//fixture... 
// A fixture is someting that playwright prepare and provides to ou test case when we need it.
// there are other build in fixure, like "borwser" and "request"
test('my first test case',async({page})=>{
    // "page " is a fixture like "{page}" above
    // page is a fixture that playwright has already prepared.
    await page.goto("https://playground.bondaracademy.com/pages/iot-dashboard")
    //await is so it waits until its done.
    //have to "async" with "await"


    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    await page.getByText('Datepicker').click()

    await page.pause()
})


test('naviage to datepicker page',async({page})=>{
    // "page " is a fixture like "{page}" above
    // page is a fixture that playwright has already prepared.
    await page.goto("https://playground.bondaracademy.com/pages/iot-dashboard")
    //await is so it waits until its done.
    //have to "async" with "await"

    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()
    
})

//So for every page you have to click on "Forms" etc.. so is a lot of replication
// use HOOKS


