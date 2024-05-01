class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
    await this.page.type('#username', username);
    await this.page.type('#password', password);
    await this.page.click('#loginButton');
    await this.page.waitForNavigation();
    }
}

module.exports = LoginPage;