class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.waitForSelector('input[name="identification"]');
        await this.page.type('input[name="identification"]', username);
        await this.page.type('input[name="password"]', password);
        await this.page.click('[data-test-button="sign-in"]');
        await this.page.waitForNavigation();
    }

    async isSignInPage() {
        try {
            await this.page.waitForSelector('[data-test-button="sign-in"]', { timeout: 10000 });
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = LoginPage;