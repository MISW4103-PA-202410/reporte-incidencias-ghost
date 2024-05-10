class TagListPage {
    constructor(page) {
    this.page = page;
    }

    async newTag() {
        let selector = 'a[href="#/tags/new/"]';
        // Espera a que el botón "New tag" esté disponible en la página
        await this.page.waitForSelector(selector, {visible: true});
        // Navega a la página de creación de un nuevo tag haciendo clic en el botón "New tag"
        await this.page.click(selector);
        // Espera a que la navegación se complete
        await new Promise(r => setTimeout(r, 500));
    }

    async showPublicTags() {
        // Espera a que el botón "Public tags" esté disponible en la página
        await this.page.waitForSelector('a[data-test-tags-nav="public"]');
        // Navega a la página de tags públicos haciendo clic en el botón "Public tags"
        await this.page.click('a[data-test-tags-nav="public"]');
        // Espera a que la navegación se complete
        await new Promise(r => setTimeout(r, 500));
    }

    async showInternalTags() {
        // Espera a que el botón "Internal tags" esté disponible en la página
        await this.page.waitForSelector('a[data-test-tags-nav="internal"]');
        // Navega a la página de tags internos haciendo clic en el botón "Internal tags"
        await this.page.click('a[data-test-tags-nav="internal"]');
        // Espera a que la navegación se complete
        await new Promise(r => setTimeout(r, 500));
    }

    async goToTag(tagSlug) {
        let anchor = 'a[href="#/tags/' + tagSlug + '/"]';
        // Espera a que el link para editar el tag esté disponible en la página
        await this.page.waitForSelector(anchor);
        // Navega a la página de creación de un nuevo tag haciendo clic en el botón "New tag"
        await this.page.click(anchor);
        // Espera a que la navegación se complete
        await new Promise(r => setTimeout(r, 500));
    }

    async getTags() {
        // Espera a que la lista con la clase "tags-list" esté disponible en la página
        await this.page.waitForSelector('ol.tags-list');
        
        // Obtiene la lista de tags
        const tags = await this.page.evaluate(() => {
            const tags = [];
            const tagElements = document.querySelectorAll('li.gh-tags-list-item');
            for (const tagElement of tagElements) {
                tags.push({
                    name: tagElement.querySelector('a.gh-tag-list-title').querySelector('h3.gh-tag-list-name').innerText,
                    slug: tagElement.querySelector('a.gh-tag-list-slug').querySelector('span').innerText
                });
            }
            return tags;
        });

        return tags;
    }
}

module.exports = TagListPage;