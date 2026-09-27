
import { test, expect } from '@playwright/test';

/*
Assertion is basically a verification or a check. 

Action -> Perform something.
Assertion -> Verify the result. 

Click Login -> Verify if the dashboard is visible.

There are two types of assertions:
1. Generic assertions
2. Locator assertions

1. Generic assertions - They are used to verify JavaScript values
or conditions rather than directly verifying a web element. 

const username = "Piyush"
expect(username).toBe("Piyush")

We can also compare numbers. 

const count = 10
expect(count).toBe(10)

Generic assertions are useful when we are working with variables,
strings, numbers, objects, arrays, or other JavaScript values. 

2. Locator assertions - Locator assertions are used when we
want to verify something about an element on the web page. 

For example, suppose we have a login button, and we want to
verify that it is visible or not. 

await expect(submitBtn).toBeVisible()

Whenever our verification is related to a web element, we will generally use a locator assertion.

Generic Assertion -> Verify a JavaScript value.
Locator Assertion -> Verify Something on the page 

Locator assertions are designed to wait and retry until the
expected condition is met or the timeout is reached. That is
the reason why you should prefer locator assertions as much as possible.

In generic assertions, there is no wait and retry. If it passes,
it passes immediately. If it fails, it fails immediately. There
is no retry mechanism. 

For locator assertions, always start with `await expect`. 
They also have a timeout of 5 seconds.

*/
test('Assertions', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/pages/forms/layouts');

    const username = "Piyush"
    expect(username).toBe("Piyush")

    const count = 10
    expect(count).toBe(10)

    const basicFormButton = page.locator('nb-card', {hasText: "Basic form"})
                                .getByRole('button', {name: 'Submit'})

    //Locator Assertion
    await expect(basicFormButton).toBeVisible()
})