const constants = require("../support/constants");

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.waitForSelector('input[name="identification"]');
        await this.page.type('input[name="identification"]', username);
        await this.page.type('input[name="password"]', password);
        await this.page.click('[data-test-button="sign-in"]');
        await this.page.waitForNavigation({ waitUntil: 'networkidle0'});
    }

    async isSignInPage() {
        try {
            const selector = '[data-test-button="sign-in"]';
            await this.page.waitForSelector(selector, { waitUntil: 'networkidle0', timeout: 2000});
            const btnExists = await this.page.evaluate((selector) => {
                return document.querySelector(selector) !== null;
            }, selector);

            return btnExists;
        } catch (error) {
            return false;
        }
    }

    async signOut() {
        await this.page.goto(`${constants.baseUrl}/ghost/#/signout`);
    }
}

module.exports = LoginPage;