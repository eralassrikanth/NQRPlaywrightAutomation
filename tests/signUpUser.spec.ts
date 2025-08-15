/**
 * TestCase: Sign Up User
 * 
 * Steps:
 * 1. Navigate to application URL
 * 2. Click on 'Sign Up Now' link in Home Page
 * 3. Verify 'Sign Up Now' page is displayed
 * 4. Verify 'Sign Up Now' page contains the expected text
 * 5. Close the browser
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';
import { RegisterUserPage } from '../pages/RegisterUserPage';


test('Sign Up User', async ({ page }) => {

    //Navigate to application URL
    const config = new TestConfig();
    await page.goto(config.appUrl);

    //Create HomePage object
    const homePage = new HomePage(page);

    //Verify Home Page exists
    expect(await homePage.isHomePageExists()).toBeTruthy();

    //Click on Myaccount link
    await homePage.clkMyAccountBtn();

   //click 'Create Account' link
    await homePage.clickCreateAcclnk();

   //click first name field
    const registerUserPage = new RegisterUserPage(page);
    await registerUserPage.enterFirstName("Naveen");

    //click last name field
    await registerUserPage.enterLastName("Kumar");

    //click email field
    await registerUserPage.enterEmailID("naveen.kumar@gmail.com");

    //click password field
    await registerUserPage.enterPassword("Naveen@123");

    //click on 'Create My Account' button
    await registerUserPage.clickCreateMyAccountBtn();


});


