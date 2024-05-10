class PostPage {
    constructor(page) {
    this.page = page;
    }

    async newPost() {
        // Espera a que el botón "New post" esté disponible en la página
        await this.page.waitForSelector('a[data-test-new-post-button=""]');
        // Navega a la página de creación de un nuevo post haciendo clic en el botón "New post"
        await this.page.click('a[data-test-new-post-button=""]');
        // Espera a que la navegación se complete
        await new Promise(r => setTimeout(r, 500));
    }

    async fillPostData(title, content) {
        const html = await this.page.content();
        //console.log(html);
        // Espera a que el campo de título esté disponible en la página
        await this.page.waitForSelector('textarea[placeholder="Post title"]');
        // Ingresa el título del post
        await this.page.type('textarea[placeholder="Post title"]', title);
        // Ingresa el contenido del post
        await new Promise(r => setTimeout(r, 1000));
        await this.page.type('[data-lexical-editor="true"]', content);
    }

    async submitPost() {
        await new Promise(r => setTimeout(r, 3000));
        // Espera a que el botón "Publish" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="publish-flow"]');
        // Publica el post haciendo clic en el botón "Publish"
        await this.page.click('button[data-test-button="publish-flow"]');
        // Espear a que el botón "Continue" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="continue"]');
        // Continúa con la publicación haciendo clic en el botón "Continue"
        await this.page.click('button[data-test-button="continue"]');
        // Espera aa que el botón "Publish post, right now" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="confirm-publish"]');
        // Publica el post haciendo clic en el botón "Publish post, right now"
        await this.page.click('button[data-test-button="confirm-publish"]');
        await new Promise(r => setTimeout(r, 1000));
        //Esperar a que el post se publique
        await this.page.waitForSelector('a[data-test-complete-bookmark=""]');
        //Completa la publicación haciendo clic en el botón "Done"
        await this.page.click('a.ember-view.gh-back-to-editor');
        // Espera a que la publicación se complete
        await new Promise(r => setTimeout(r, 500));
    }

    async uploadImage(filePath) {
        //Esperar a que el botón "Add feature image" esté disponible en la página
        await this.page.waitForSelector('.gh-editor-feature-image-add-button');
        const [fileChooser] =  await Promise.all([
            this.page.waitForFileChooser(),
            this.page.click('.gh-editor-feature-image-add-button')
        ]);
        await fileChooser.accept([filePath]);

        //Esperar a que la imagen se cargue
        try{
            await this.page.waitForSelector('.gh-editor-feature-image-container');
            return true;
        }
        catch{
            return false;
        }
    }

    async scheduleLater(){
        await new Promise(r => setTimeout(r, 3000));
        // Espera a que el botón "Publish" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="publish-flow"]');
        // Publica el post haciendo clic en el botón "Publish"
        await this.page.click('button[data-test-button="publish-flow"]');

        //Habilitar la opción de programar la publicación
        const spans = await this.page.$$('span');

        // Iterar sobre los elementos para encontrar el que contiene "Right now"
        for (const span of spans) {
            const text = await this.page.evaluate(span => span.innerText, span);
            if (text.trim() === 'Right now') {
                await span.click();
                break; // Salir del bucle una vez que se hace clic en el elemento correcto
            }
        }

        //Seleccionar la opción de programar la publicación
        await this.page.evaluate(() => {
            const labels = Array.from(document.querySelectorAll('label'));
            const label = labels.find(label => label.textContent.trim() === 'Schedule for later');
            if (label) {
                label.click();
            } else {
                throw new Error('Elemento no encontrado');
            }
        });

        // Espear a que el botón "Continue" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="continue"]');
        // Continúa con la publicación haciendo clic en el botón "Continue"
        await this.page.click('button[data-test-button="continue"]');

        // Espera aa que el botón "Publish post, right now" esté disponible en la página
        await this.page.waitForSelector('button[data-test-button="confirm-publish"]');
        // Publica el post haciendo clic en el botón "Publish post, right now"
        await this.page.click('button[data-test-button="confirm-publish"]');

        //dashboard
        await this.page.goto('http://34.170.53.250/ghost/#/dashboard');

        // Espera a que la publicación se complete
        await new Promise(r => setTimeout(r, 500));
    }

    async firstPost(){
        //Screen shot
        await this.page.waitForSelector('h3.gh-content-entry-title');
        const h3Title = await this.page.$('h3.gh-content-entry-title');
        const title = await this.page.evaluate(h3Title => h3Title.innerText, h3Title);
        return title;
    }

    async postLook(postTitle) {
        // Espera a que se carguen todos los elementos h3 con la clase especificada
        await this.page.waitForSelector('h3.gh-content-entry-title');
        // Obtiene todos los elementos h3 con la clase especificada
        const h3Titles = await this.page.$$('h3.gh-content-entry-title');
        // Itera sobre los elementos y verifica si alguno coincide con el título proporcionado
        for (const h3Title of h3Titles) {
            const title = await this.page.evaluate(h3 => h3.innerText, h3Title);
            if (title === postTitle) {
                return true; // Retorna true si encuentra el título
            }
        }
        return false; // Retorna false si no encuentra el título
    }

    async eschedulePosts(){
        await this.page.waitForSelector('a[title="Scheduled"]');
        await this.page.click('a[title="Scheduled"]');
        await new Promise(r => setTimeout(r, 500));
    }

    async filterByUser() {
        //Open filter
        let authorsFilter = "div.gh-contentfilter-author>div[role='button']";
        await this.page.waitForSelector(authorsFilter);
        await this.page.click(authorsFilter);

        //Select user
        let user = 'ul[role="listbox"]>li[data-option-index="1"]';
        await this.page.waitForSelector(user);
        await this.page.click(user);
        await new Promise(r => setTimeout(r, 500));

    }

    async filterByStatus() {
        //Open filter
        let statusFilter = "div.gh-contentfilter-type>div[role='button']";
        await this.page.waitForSelector(statusFilter);
        await this.page.click(statusFilter);

        //Select status
        let status = 'ul[role="listbox"]>li[data-option-index="2"]';
        await this.page.waitForSelector(status);
        await this.page.click(status);
        await new Promise(r => setTimeout(r, 500));
    }

    async filterByTag() {
        //Open filter
        let tagsFilter = "div.gh-contentfilter-tag>div[role='button']";
        await this.page.waitForSelector(tagsFilter);
        await this.page.click(tagsFilter);

        //Select tag
        let tag = 'ul[role="listbox"]>li[data-option-index="1"]';
        await this.page.waitForSelector(tag);
        await this.page.click(tag);
        await new Promise(r => setTimeout(r, 500));
    }

    async saveView(name) {
        // Open dialog to save view
        let btnSelector = "button.gh-btn-save-view";
        await this.page.waitForSelector(btnSelector);
        await this.page.click(btnSelector);

        // Fill name
        let inputSelector = "input#view-name";
        await this.page.waitForSelector(inputSelector);
        //Clear input
        await this.page.evaluate(() => {
            document.querySelector("input#view-name").value = "";
        });
        await this.page.type(inputSelector, name);

        // Save view
        btnSelector = "button[data-test-button='save-custom-view']";
        await this.page.waitForSelector(btnSelector);
        await this.page.click(btnSelector);
        await new Promise(r => setTimeout(r, 500));

    }

    async getViews() {
        let viewListSelector = "ul.gh-nav-view-list";
        await this.page.waitForSelector(viewListSelector);
        const views = await this.page.evaluate(() => {
            const views = [];
            const viewElements = document.querySelectorAll('ul.gh-nav-view-list>li');
            for (const viewElement of viewElements) {
                views.push(viewElement.querySelector('a>span.gh-nav-viewname').innerText);
            }
            return views;
        });

        return views;
    }

    async navigateToView(name) {
        let viewListSelector = "ul.gh-nav-view-list";
        await this.page.waitForSelector(viewListSelector);
        const viewElements = await this.page.$$('ul.gh-nav-view-list>li');
        for (const viewElement of viewElements) {
            const viewName = await viewElement.$eval('a>span.gh-nav-viewname', el => el.innerText);
            if (viewName === name) {
                await viewElement.click();
                break;
            }
        }
        await new Promise(r => setTimeout(r, 500));
    }

    async deleteView() {
        try {
            let btnSelector = "button[data-test-button='edit-view']";
            await this.page.waitForSelector(btnSelector);
            await this.page.click(btnSelector);
            await new Promise(r => setTimeout(r, 500));
            btnSelector = "button[data-test-button='delete-custom-view']";
            await this.page.waitForSelector(btnSelector);
            await this.page.click(btnSelector);
            await new Promise(r => setTimeout(r, 500));
        } catch (error) {
            console.error('No se logró eliminar la vista.');
        }

    }


}


module.exports = PostPage;