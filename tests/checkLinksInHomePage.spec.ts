/**
 * Test Case: Check links in Home Page
 * 
 * steps: 
 * 1. Navigate to application URL
 * 2. Verify links in Home Page 
 * 
 */

import { test, expect, Locator } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';

test('Check links in Home Page', async ({ page }) => {

    //Navigate to application URL
    const config = new TestConfig();
    await page.goto(config.appUrl);

    //Create HomePage object
    const homePage = new HomePage(page);

    //Verify Home Page exists
    expect(await homePage.isHomePageExists()).toBeTruthy();

    //Verify Shop Online link in Home Page
    expect(await homePage.isShopOnlineLinkExists()).toBeTruthy();

    //Verify Weekly Specials link in Home Page
    expect(await homePage.isWeeklySpecialsLinkExists()).toBeTruthy();

    //Verify Find A Store link in Home Page
    expect(await homePage.isFindAStoreLinkExists()).toBeTruthy();

    //Verify Sign Up Now link in Home Page
    expect(await homePage.isSignUpNowLinkExists()).toBeTruthy();        

    //Verify Contact Us link in Home Page
    expect(await homePage.isContactUsLinkExists()).toBeTruthy();

    //Verify About Us link in Home Page
    expect(await homePage.isAboutUsLinkExists()).toBeTruthy();

    //Close the browser
    await page.close();
}


);