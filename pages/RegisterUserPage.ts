/**
 * This file create a class for Register user page and locators & methods
 *  for actions on Register user page
 */

import { Page, Locator, expect } from '@playwright/test';

export class RegisterUserPage {

    private readonly page: Page;

    //locators
    private readonly txtEmailID: Locator;
    private readonly txtPasswd: Locator;
    private readonly txtFname: Locator;
    private readonly txtLname: Locator;
    private readonly btnCreateMyAccount: Locator;

    //constructors

    constructor(page: Page) {

        this.page = page;

        this.txtFname = page.locator("input[id='customer[first_name]']");
        this.txtLname = page.locator("input[id='customer[last_name]']");
        this.txtEmailID = page.locator("input[id='customer[email]']");
        this.txtPasswd = page.locator("input[id='customer[password]']");
        this.btnCreateMyAccount = page.locator("button[class='form__submit button button--primary button--full']");
        

    }

    //Action methods

    async enterFirstName(firstName: string) {

        try {
            await this.txtFname.fill("Naveen");
        } catch (error) {
            console.log(`Exception occurred while entering text in 'First Name': ${error}`);
            throw error;
        }
    }

    async enterLastName(lastName: string) {
        try {
            await this.txtLname.fill("Kumar");
        } catch (error) {
            console.log(`Exception occurred while entering text in 'Last Name': ${error}`);
            throw error;
        }
    }



    async enterEmailID(email: string) {
        try {
            await this.txtEmailID.fill("naveen.kumar@gmail.com");
        } catch (error) {
            console.log(`Exception occurred while entering text in 'Email ID': ${error}`);
            throw error;
        }
    }

    async enterPassword(password: string) {
        try {
            await this.txtPasswd.fill("Hyundai#321");
        } catch (error) {
            console.log(`Exception occurred while entering text in 'Password': ${error}`);
            throw error;
        }
    }

    async clickCreateMyAccountBtn() {
        try {
            await this.btnCreateMyAccount.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Create My Account Button': ${error}`);
            throw error;
        }
    }
}