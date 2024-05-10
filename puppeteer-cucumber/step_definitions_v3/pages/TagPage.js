class TagPage {
    constructor(page) {
    this.page = page;
    }

    async saveTag() {
        await this.page.evaluate(() => {
            [...document.querySelectorAll('button')].find(span => span.innerText.includes("Save")).click();
            
        });
        // Espera a que el tag se guarde
        await new Promise(r => setTimeout(r, 500));

        let savedButton = await this.page.evaluate(() => {
            return [...document.querySelectorAll('button')].find(span => span.innerText.includes("Saved"));
        });

        return savedButton !== undefined;
    }

    async fillTagName(tagName) {
        let selector = 'input#tag-name';
        // Espera a que el campo de texto para el nombre del tag esté disponible en la página
        await this.page.waitForSelector(selector);
        // Llena el campo de texto con el nombre del tag
        await this.page.type(selector, tagName);
    }

    async getSlug() {
        // Espera a que el campo de texto para el slug del tag esté disponible en la página
        await this.page.waitForSelector('input#tag-slug');
        // Obtiene el valor del campo de texto para el slug del tag
        const slug = await this.page.evaluate(() => {
            return document.querySelector('input#tag-slug').value;
        });

        return slug;
    }

    async fillSlug(slug) {
        // Espera a que el campo de texto para el slug del tag esté disponible en la página
        await this.page.waitForSelector('input#tag-slug');
        // Llena el campo de texto con el slug del tag
        await this.page.type('input#tag-slug', slug);
    }

    async fillDescription(description) {
        // Espera a que el campo de texto para la descripción del tag esté disponible en la página
        await this.page.waitForSelector('textarea#tag-description');
        // Llena el campo de texto con la descripción del tag
        await this.page.type('textarea#tag-description', description);
    }

    async fillTagColor(color) {
        // Espera a que el campo de texto para el color del tag esté disponible en la página
        await this.page.waitForSelector('input[name="accent-color"]');
        // Llena el campo de texto con el color del tag
        await this.page.type('input[name="accent-color"]', color);
    }

    async addImage(filePath) {
        //Esperar a que el botón "Upload tag image" esté disponible en la página
        await this.page.waitForSelector('input.x-file--input');
        const [fileChooser] =  await Promise.all([
            this.page.waitForFileChooser(),
            this.page.click('.x-file-input')
        ]);
        await fileChooser.accept([filePath]);

        //Esperar a que la imagen se cargue
        try{
            await this.page.waitForSelector('div.gh-image-uploader.-with-image');
            return true;
        }
        catch{
            return false;
        }
    }

    async imageExist() {
        //Esperar a que la imagen se cargue
        try{
            await this.page.waitForSelector('div.gh-image-uploader.-with-image>div>img');
            return true;
        }
        catch (error){
            console.log("Error al cargar la imagen");
            console.log(error);
            return false;
        }
    }

    async fillMetadata(title, description) {
        // Expand the all expandable sections by clicking on the "Expand" button
        await this.page.evaluate(() => {
            const expandButtons = [...document.querySelectorAll('button.gh-btn')].filter(button => button.innerText === 'Expand');
            expandButtons.forEach(button => button.click());
        });

        let titleInput = 'input#meta-title';
        let descriptionInput = 'textarea#meta-description';
        
        //Esperar a que los inputs de título y descripción estén disponibles en la página
        await this.page.waitForSelector(titleInput);
        await this.page.waitForSelector(descriptionInput);

        //Llenar los campos de texto con el título y descripción del tag
        await this.page.type(titleInput, title);
        await this.page.type(descriptionInput, description);
    }

    async getMetadata() {
        // Expand the all expandable sections by clicking on the "Expand" button
        await this.page.evaluate(() => {
            const expandButtons = [...document.querySelectorAll('button.gh-btn')].filter(button => button.innerText === 'Expand');
            expandButtons.forEach(button => button.click());
        });
        
        let titleInput = 'input#meta-title';
        let descriptionInput = 'textarea#meta-description';

        //Esperar a que los inputs de título y descripción estén disponibles en la página
        await this.page.waitForSelector(titleInput);
        await this.page.waitForSelector(descriptionInput);

        //Obtener el valor de los campos de texto de título y descripción
        const metadata = await this.page.evaluate(() => {
            return {
                title: document.querySelector('input#meta-title').value,
                description: document.querySelector('textarea#meta-description').value
            };
        });

        return metadata;
    }

}

module.exports = TagPage;