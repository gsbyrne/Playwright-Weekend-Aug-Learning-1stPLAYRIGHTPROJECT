import { test, expect, Locator, chromium } from '@playwright/test'

//Multi-tab workflow/multi user workflow

test('create multiple pages inside a session', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.pause()
})

//Multi user workflow
//Within the same browser, I'm launching two isolated sessions. 
test('Handle multiple pages1', async ({browser}) => {
    // const browser = await chromium.launch()

    const context1 = await browser.newContext()
    const page1 = await context1.newPage()
    await page1.goto('https://conduit.bondaracademy.com/login')
    await page1.getByPlaceholder('Email').fill('piyushtest@test.com')
    await page1.getByPlaceholder('Password').fill('123456')
    await page1.getByRole('button', {name: 'Sign in'}).click()

    const context2 = await browser.newContext()
    const page2 = await context2.newPage()
    await page2.goto('https://conduit.bondaracademy.com/login')

    await page1.pause()
})

//Multi tab scenario
//Here, I'm using the browser fixture because I want more control
// over the browser sessions and pages or tabs. 
test('Handle multiple pages2', async ({browser}) => {
    // const browser = await chromium.launch()

    const context = await browser.newContext()
    const page1 = await context.newPage()
    await page1.goto('https://conduit.bondaracademy.com/login')
    await page1.getByPlaceholder('Email').fill('piyushtest@test.com')
    await page1.getByPlaceholder('Password').fill('123456')
    await page1.getByRole('button', {name: 'Sign in'}).click()

    const page2 = await context.newPage()
    await page2.goto('https://conduit.bondaracademy.com/login')

    await page1.pause()
})

