import { Page, expect, Locator } from '@playwright/test'

export class HomePage {

    //This declares the type of the property as Page, which is a Playwright object representing a browser tag or page
    private readonly page: Page;

    //Locators

    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;
    private readonly btnMyAccount: Locator;
    private readonly lnkCreateAcc: Locator;
    private readonly lnkShopOnline: Locator;
    private readonly lnkWeeklySpecials: Locator;
    private readonly lnkFindAStore: Locator;
    private readonly lnkSignUpNow: Locator;
    private readonly lnkContactUs: Locator;
    private readonly lnkAboutUs: Locator;
    private readonly lnkBlog: Locator;
    private readonly lnkYearofSale: Locator;




    //constructors

    constructor(page: Page) {
        this.page = page;

        this.btnSearch = page.locator("button[aria-label='Search']");
        this.txtSearchBox = page.locator("input[placeholder='Search...']");
        this.btnMyAccount = page.locator("//a[@class='header__action-item-link hidden-pocket hidden-lap']");
        this.lnkCreateAcc = page.locator("//a[@class='link link--accented']");
        this.lnkShopOnline = page.locator(".nav-bar__link.link[href='/collections']");
        this.lnkWeeklySpecials = page.locator(".nav-bar__link.link[href='/pages/weekly-specials']");
        this.lnkFindAStore = page.locator(".nav-bar__link.link[href='/pages/find-a-store']");
        this.lnkSignUpNow = page.locator(".nav-bar__link.link[href='/pages/sign-up-now']");
        this.lnkContactUs = page.locator(".nav-bar__link.link[href='/pages/contact-us']");
        this.lnkAboutUs = page.locator(".nav-bar__link.link[href='/pages/about-us']");
        this.lnkBlog = page.locator(".nav-bar__link.link[href='/blogs/news']");
        this.lnkYearofSale = page.locator(".nav-bar__link.link[href='https://nqr.com.au/pages/year-of-grocery-giveaways']");





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

    async clickShopOnlinelnk() {
        try {
            await this.lnkShopOnline.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Create Account link': ${error}`);
            throw error;
        }
    }

    async clickweeklySpecialslink() {
        try {
            await this.lnkWeeklySpecials.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Weekly Specials link': ${error}`);
            throw error;
        }
    }

    async clcikFindAStorelink() {
        try {
            await this.lnkFindAStore.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Find A Store link': ${error}`);
            throw error;
        }
    }

    async clickSignUpNowlink() {
        try {
            await this.lnkSignUpNow.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Sign Up Now link': ${error}`);
            throw error;
        }
    }

    async clickContactUslink() {
        try {
            await this.lnkContactUs.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Contact Us link': ${error}`);
            throw error;
        }
    }


    async clickAboutUslink() {
        try {
            await this.lnkAboutUs.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'About Us link': ${error}`);
            throw error;
        }
    }

    async clickBloglink() {
        try {
            await this.lnkBlog.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Blog link': ${error}`);
            throw error;
        }
    }

    async clickYearofSalelink() {
        try {
            await this.lnkYearofSale.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Year of Sale link': ${error}`);
            throw error;
        }
    }




}









