import { test, expect } from '@playwright/test';

test('my first test case',async({page})=>{
    await page.goto("https://playground.bondaracademy.com/pages/iot-dashboard")

    //await page.getByText('Forms').click()
    //await page.getByText('Form Layouts').click()
    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
    await page.getByText("Modal & Overlays").click()

    //identify the email address box on the Basic Form layout
    
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('gsbyrne1@gmail.com');
        //await page.locator("inputEmail1").click() // this was for email field.
    //await page.getByLabel('Password').click();
    //page.click('#exampleInputPassword1')

    await page.locator('#exampleInputPassword1').click();
    await page.locator('#exampleInputPassword1').fill("yo")

    await page.getByRole("button", {name: "Submit"}).nth(1).click()

 //await page.locator("nb-card").getByRole("button", {name: "Sign in"}).first().click()

    await page.pause()
})

/* different locator calls */



