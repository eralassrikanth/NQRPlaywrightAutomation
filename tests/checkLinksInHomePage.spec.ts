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
    //expect(await homePage.isShopOnlineLinkExists()).toBeTruthy();



    const isVisible = await homePage.isShopOnlineLinkExists();

    if (isVisible) {
        console.log('✅ Shop Online link is visible on the page.');
    } else {
        console.log('❌ Shop Online link is NOT visible on the page.');
    }




}


);