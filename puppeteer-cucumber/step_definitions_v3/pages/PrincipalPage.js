const constants = require("../support/constants");

class PrincipalPage {
    constructor(page) {
        this.page = page;
        // Bind the methods to the class context
        this.navigateToSite = this.navigateToSite.bind(this);
        this.navigateToPosts = this.navigateToPosts.bind(this);
        this.navigateToPages = this.navigateToPages.bind(this);
        this.navigateToTags = this.navigateToTags.bind(this);
        this.navigateToProfile = this.navigateToProfile.bind(this);
        this.navigateToSettings = this.navigateToSettings.bind(this);
    }

    async isHomePage() {
        //Print the current URL
        await new Promise(r => setTimeout(r, 500));
        return this.page.url().includes('ghost/#/site');
    }

    async navigateToSite() {
        // Navega a la página de Ghost
        await this.page.goto(`${constants.baseUrl}/ghost/`);
    }

    async navigateToPosts() {
        // Espera a que el elemento con la clase "gh-viewport" esté disponible en la página
        await this.page.waitForSelector('a[href="#/posts/"]');

        // Wait 500ms
        await new Promise(r => setTimeout(r, 500));

        // Navega a la sección de "Posts" haciendo clic en el enlace correspondiente
        await this.page.click('a[href="#/posts/"]');
    }

    async navigateToPages() {
        // Espera a que el elemento con la clase "gh-viewport" esté disponible en la página
        await this.page.waitForSelector('a[href="#/pages/"]');

        // Navega a la sección de "Posts" haciendo clic en el enlace correspondiente
        await this.page.click('a[href="#/pages/"]');

        // Espera a que la navegación se complete
        await this.page.waitForNavigation();
    }

    async navigateToTags() {
        // Espera a que el elemento con la clase "gh-viewport" esté disponible en la página
        await this.page.waitForSelector('a[href="#/tags/"]');

        // Navega a la sección de "Tags" haciendo clic en el enlace correspondiente
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click('a[href="#/tags/"]')
        ]);
    }

    async navigateToProfile() {
        let menuSelector = 'div.pe-all>div[role="button"]';
        let profileSelector = 'a[data-test-nav="user-profile"]';
        await new Promise(r => setTimeout(r, 1000));
        
        await this.page.waitForSelector(menuSelector);
        await this.page.click(menuSelector);
        
        await this.page.waitForSelector(profileSelector);
        
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(profileSelector)
        ]);
        // Espera a que se abra el perfil
        await new Promise(r => setTimeout(r, 5000));

        // If the profile is not opened, try opening
        // Check if modal is open
        const profileOpen = await this.page.evaluate(() => {
            return document.querySelector('section[datat-testid="user-detail-modal"]');
        });

        await this.page.waitForSelector('div[data-testid="owner-user"]');

        if (!profileOpen) {
            await this.page.evaluate(() => {
                [...document.querySelector('div[data-testid="owner-user"]').querySelectorAll('button')].find(btn => btn.textContent === "View profile").click();
            });
        }
    }

    async navigateToSettings() {
        // Espera a que el elemento con la clase "gh-viewport" esté disponible en la página
        await this.page.waitForSelector('a[data-test-nav="settings"]');

        // Navega a la sección de "Settings" haciendo clic en el enlace correspondiente
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click('a[data-test-nav="settings"]')
        ]);
    }
}

module.exports = PrincipalPage;