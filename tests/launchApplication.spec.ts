/**
 * Test Case: Launch application and search 'DishWashing'
 * 
 * Steps:
 * 1) Navigate to application Url
 * 2) Search DishWashing  
 */

import { test, expect, Locator } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';
//import { LoginPage } from '../pages/LoginPage';
//import { TIMEOUT } from 'dns';




test('Verify application and search an item', async ({ page }) => {

    //Navigate to application URL
    const config = new TestConfig();

    await page.goto(config.appUrl);

    //Enter text in search box
    const homePage = new HomePage(page);
   // await homePage.enterTextSearch();
    //await homePage.clkSearchBtn();
    await homePage.clkMyAccountBtn();
    await homePage.clickCreateAcclnk();
    
    //const loginPage = new LoginPage();
    //await homePage.lnkCreateAcc();


    /*const products: Locator = page.locator("div[class='collection'] div[class='card']");
    const productCount: number = await products.count();

    console.log("No. of Dish washing items:", productCount);
    expect(productCount).toBeGreaterThan(0);

    let productTitles: string[] = await products.allTextContents();

    console.log("Cadbury Cholocates names:", productTitles);
*/


});