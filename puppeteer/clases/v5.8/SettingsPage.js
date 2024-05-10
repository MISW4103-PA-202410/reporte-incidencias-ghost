class SettingsPage {
    constructor(page) {
    this.page = page;
    }

    async gotToLabs() {
        await this.page.waitForSelector('a#labs');
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click('a#labs')
        ]);
    }
}

module.exports = SettingsPage;