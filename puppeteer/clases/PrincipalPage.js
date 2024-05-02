class PrincipalPage {
    constructor(page) {
        this.page = page;
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
}

module.exports = PrincipalPage;