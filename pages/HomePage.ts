import { Page, expect, Locator } from '@playwright/test'

export class HomePage {

    //This declares the type of the property as Page, which is a Playwright object representing a browser tag or page
    private readonly page: Page;

    //Locators

    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;
    private readonly btnMyAccount: Locator;
    private readonly lnkCreateAcc: Locator;


    //constructors

    constructor(page: Page) {
        this.page = page;

        this.btnSearch = page.locator("button[aria-label='Search']");
        this.txtSearchBox = page.locator("input[placeholder='Search...']");
        this.btnMyAccount = page.locator("//a[@class='header__action-item-link hidden-pocket hidden-lap']");
         this.lnkCreateAcc = page.locator("//a[@class='link link--accented']");

    }

    //action methods

    //Check HomePage exists
    async isHomePageExists() {

        let title: string = await this.page.title();
        if (title) {

            return true;
            console.log("Application launched successfully");
        } else {

            return false;
        }
    }

    //Enter text in searxh box
    async enterTextSearch() {

        try {
            await this.txtSearchBox.fill('Dishwashing');
        } catch (error) {
            console.log(`Exception occurred while enetering text in 'search box': ${error}`);
            throw error;
        }

    }

    //Click search button
    async clkSearchBtn() {

        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception occurred while enetering text in 'search button': ${error}`);
            throw error;
        }

    }

    //Click MyAccout button

    async clkMyAccountBtn() {

        try {
            await this.btnMyAccount.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'MyAccount button': ${error}`);
            throw error;
        }

    }

    async clickCreateAcclnk() {
        try {
            await this.lnkCreateAcc.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Create Account link': ${error}`);
            throw error;
        }
    }







}









