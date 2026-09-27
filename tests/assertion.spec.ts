import { test, expect } from '@playwright/test';



test('WhatIsAssertion', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');


  
    // this is my verfication .. i.e. I expect... 
    //Action -> Perform somethiong.
    //Assertion -> verify the resourceLimits.
    //click login THEN verify the dashboard is visible.

    //There are two types

    //1/ Generic Assertion.
    // Theya re used to verify JS values or conditions rather than directly verifying a web element.
     
    //2. Locator AuthenticatorAssertionResponse.
  

    //1/ Generic Assertion.
    // Theya re used to verify JS values or conditions rather than directly verifying a web element.
    // useful when working with varianbvles, numbers, strings, objects, arrays or other JS values.
    const username = "gary"
    const count = 1-
    expect(username).toBe("gary")
    expect(count).toBe(10)

    //2. Locator Assertion - VERIFY SOMETHING ON THE PAGE.0
    // This is used when the want to verify something about an element on the web page.
    //We have a login button, and want to verify it's accessible.
    await expect(submitBtn).toBeVisible
    // abouit is a locator.
    //LOCATORS ARE DESIGNED TO WAIT AND RETRY UNTIL THE EXPECTED CONDITION IS MET OR THE TIMEOUT IS REACHED.
    // GENERIC ASSERTIONS EITHER PASS OR FAIL.

    



  
});