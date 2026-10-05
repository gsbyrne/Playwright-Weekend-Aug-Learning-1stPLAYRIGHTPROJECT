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

    //await page.pause()
})

/* different locator calls */

// A test to check DEMOBLAZE


test.beforeEach(async ({page})=> {
      await page.goto("https://demoblaze.com/index.html")

    await page.getByRole('link',{name: "Log in"}).click()

    await page.locator('#loginusername').fill('gsbyrne@gmail.com');
    await page.locator('#loginpassword').fill('Mistral277');
    await page.getByRole('button', {name: "Log in"}).click()

})

test('demoblaze Check Login',async({page})=>{
    // await page.goto("https://demoblaze.com/index.html")

    // await page.getByRole('link',{name: "Log in"}).click()

    // await page.locator('#loginusername').fill('gsbyrne@gmail.com');
    // await page.locator('#loginpassword').fill('Mistral277');
    // await page.getByRole('button', {name: "Log in"}).click()

    await page.waitForTimeout(5000); // waits 5 seconds

    //Expect = |Assertion.
    await expect(page.getByRole('link', {name: "Log in"}).isHidden)
    await expect(page.getByRole('link', {name: "Log out"}).isVisible())
    await expect(page.getByRole('link', { name: 'Welcome gsbyrne@gmail.com1' }))

    await page.pause()

    //check the box can accept max X chars? use the getattribute
    //console.log(page.locator('#loginusername').getAttribute('maxlength') )




    // now check that the login button no longer highlighted.



    //await page.getByText('Forms').click()
    //await page.getByText('Form Layouts').click()
//     await page.getByText("Forms").click()
//     await page.getByText("Form Layouts").click()
//     await page.getByText("Modal & Overlays").click()

//     //identify the email address box on the Basic Form layout
    
//     await page.getByLabel('Email address').click();
//     await page.getByLabel('Email address').fill('gsbyrne1@gmail.com');
//         //await page.locator("inputEmail1").click() // this was for email field.
//     //await page.getByLabel('Password').click();
//     //page.click('#exampleInputPassword1')

//     await page.locator('#exampleInputPassword1').click();
//     await page.locator('#exampleInputPassword1').fill("yo")

//     await page.getByRole("button", {name: "Submit"}).nth(1).click()

//  //await page.locator("nb-card").getByRole("button", {name: "Sign in"}).first().click()

    //await page.pause()
})


test('Click A phone on main page',async({page})=>{
  await 

    //await page.pause()
})