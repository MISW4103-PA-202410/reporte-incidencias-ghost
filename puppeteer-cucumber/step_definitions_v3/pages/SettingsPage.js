class SettingsPage {
    constructor(page) {
    this.page = page;
    }

    async gotToLabs() {
        await this.page.waitForSelector('a[href="#/settings/labs/"]');
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click('a[href="#/settings/labs/"]')
        ]);
    }
}

module.exports = SettingsPage;