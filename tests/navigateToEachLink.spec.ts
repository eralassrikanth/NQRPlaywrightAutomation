/**
 * Test Case: Navigate to each link in Home Page
 * 
 * steps:1. Navigate to application URL
 * 2. Click each link in Home Page and verify the page title
 * 
 * 
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';

test('Navigate to each link in Home Page', async ({ page }) => {

    //Navigate to application URL
    const config = new TestConfig();
    await page.goto(config.appUrl);

    //Create HomePage object
    const homePage = new HomePage(page);

    //Verify Home Page exists
    expect(await homePage.isHomePageExists()).toBeTruthy();

    //Click My Account button and verify title
    await homePage.clkMyAccountBtn();
    expect(await page.title()).toContain('Account');

    //Click Create Account link and verify title
    await homePage.clickCreateAcclnk();
    expect(await page.title()).toContain('Create Account');


    //Click Shop Online link and verify title
    await homePage.clickShopOnlinelnk();
    expect(await page.title()).toContain('Collections');

    //Click Weekly Specials link and verify title
    await homePage.clickweeklySpecialslink();
    expect(await page.title()).toContain('Weekly In-Store Specials');


    //Click Find A Store link and verify title
    await homePage.clcikFindAStorelink();
    expect(await page.title()).toContain('Find a Store');

    //Navigate back to Contact Us page
    await homePage.clickContactUslink();
    expect(await page.title()).toContain('Contact Us');

     //click Sign Up Now link and verify title
    await homePage.clickSignUpNowlink();
    expect(await page.title()).toContain('Subscribe Now!');

    //click About Us link and verify title
    await homePage.clickAboutUslink();
    expect(await page.title()).toContain('About Us');

    //click Blog link and verify title
    await homePage.clickBloglink();
    expect(await page.title()).toContain("What's the latest?");

    //click Yearly Specials link and verify title
    await homePage.clickYearofSalelink();
    expect(await page.title()).toContain('Year of Grocery Giveaways');




});