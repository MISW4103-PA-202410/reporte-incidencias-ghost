class PrincipalPage {
    constructor(page) {
        this.page = page;
    }

    async isHomePage() {
        return this.page.url().includes('ghost/#/dashboard');
    }

    async navigateToSite() {
        // Navega a la página de Ghost
        await this.page.goto('http://34.170.53.250/ghost/#/dashboard');
    }

    async navigateToPosts() {
        // Espera a que el elemento con la clase "gh-viewport" esté disponible en la página
        await this.page.waitForSelector('a[data-test-nav="posts"]');

        // Navega a la sección de "Posts" haciendo clic en el enlace correspondiente
        await this.page.click('a[data-test-nav="posts"]');

        // Espera a que la navegación se complete
        await this.page.waitForNavigation();
    }

    async navigateToPages() {
        // Espera a que el elemento con la clase "gh-viewport" esté disponible en la página
        await this.page.waitForSelector('a[data-test-nav="pages"]');

        // Navega a la sección de "Posts" haciendo clic en el enlace correspondiente
        await this.page.click('a[data-test-nav="pages"]');

        // Espera a que la navegación se complete
        await this.page.waitForNavigation();
    }

    async navigateToTags() {
        // Espera a que el elemento con la clase "gh-viewport" esté disponible en la página
        await this.page.waitForSelector('a[data-test-nav="tags"]');

        // Navega a la sección de "Tags" haciendo clic en el enlace correspondiente
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click('a[data-test-nav="tags"]')
        ]);
    }

    async navigateToProfile() {
        let menuSelector = 'div.pe-all>div[role="button"]';
        let profileSelector = 'a[data-test-nav="user-profile"]';

        await this.page.waitForSelector(menuSelector);
        await this.page.click(menuSelector);
        
        await this.page.waitForSelector(profileSelector);
        
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(profileSelector),
            this.page.screenshot({path: 'screenshot12345667.png'})
        ]);
        // Espera a que se abra el perfil
        await new Promise(r => setTimeout(r, 5000));

        // If the profile is not opened, try opening
        // Check if modal is open
        const profileOpen = await this.page.evaluate(() => {
            return document.querySelector('section[datat-testid="user-detail-modal"]');
        });

        if (!profileOpen) {
            await this.page.evaluate(() => {
                [...document.querySelector('div[data-testid="owner-user"]').querySelectorAll('button')].find(btn => btn.textContent === "View profile").click();
            });
        }
    }
}

module.exports = PrincipalPage;