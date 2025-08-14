import { Page, Locator, expect } from "@playwright/test";


export class HomePage {

    private readonly page: Page;

    //locators
    private readonly txtEmailID: Locator;
    private readonly txtPasswd: Locator;
    private readonly btnLogin: Locator;
    //private readonly lnkCreateAcc: Locator;
    private readonly lnkForgotPwd: Locator;

    //constructors

    constructor(page: Page) {

        this.page = page;

        this.txtEmailID = page.locator("customer[email]");
        this.txtPasswd = page.locator("customer[password]");
        this.btnLogin = page.locator("//button[normalize-space()='Login']");
        //this.lnkCreateAcc = page.locator("//a[@class='link link--accented']");
        this.lnkForgotPwd = page.locator("//button[normalize-space()='Recover password']");

    }
    //Action methods

    async enterEmailID() {
        try {
            await this.txtEmailID.fill("srkanthe@virtusa.com");
        } catch (error) {
            console.log(`Exception occurred while enetering text in 'Email ID': ${error}`);
            throw error;
        }
    }



    async enterPassword() {
        try {
            await this.txtPasswd.fill("password123");
        } catch (error) {
            console.log(`Exception occurred while enetering text in 'Password': ${error}`);
            throw error;
        }
    }


    async clickSubmitBtn() {
        try {
            await this.btnLogin.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Submit Button': ${error}`);
            throw error;
        }
    }

    
    async clickForgotPwdlnk() {
        try {
            await this.lnkCreateAcc.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Forgot Password link': ${error}`);
            throw error;
        }
    }



}



