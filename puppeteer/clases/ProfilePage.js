class ProfilePage {
    constructor(page) {
    this.page = page;
    }

    async saveProfile() {
        await this.page.evaluate(() => {
            [...document.querySelectorAll('span')].find(span => span.innerText === "Save & close").click();
            
        });
        await new Promise(r => setTimeout(r, 500));
    }

    async openChangePassword() {
        await this.page.evaluate(() => {
            [...document.querySelectorAll('span')].find(span => span.innerText === "Change password").click();
        
        });
        await new Promise(r => setTimeout(r, 500));
    }

    async fillPassword(oldPassword, newPassword) {

        const passwordInputs = await this.page.$$('input[type="password"]');

        //Llenar los campos de texto con la contraseña antigua y la nueva contraseña
        const oldPasswordInput = passwordInputs[0];
        const newPasswordInput = passwordInputs[1];
        const newPasswordVerificationInput = passwordInputs[2];
        await oldPasswordInput.type(oldPassword);
        await newPasswordInput.type(newPassword);
        await newPasswordVerificationInput.type(newPassword);
    }

    async saveChangePassword() {
        await this.page.evaluate(() => {
            [...document.querySelectorAll('span')].find(span => span.innerText === "Change password").click();
        });
        await new Promise(r => setTimeout(r, 500));
    }

    async addImage(filePath) {
        //Esperar a que el botón "Upload tag image" esté disponible en la página
        await this.page.waitForSelector('input#cover-image');
        const [fileChooser] =  await Promise.all([
            this.page.waitForFileChooser(),
            this.page.click('label[for="cover-image"]')
        ]);
        await fileChooser.accept([filePath]);

        //Esperar a que la imagen se cargue
        await new Promise(r => setTimeout(r, 30000));
    }

    async imageExist(filePath) {
        //Esperar a que la imagen se cargue
        try{
            const backgroundImage = await this.page.evaluate(() => { return document.querySelector('img#cover-image').src;});
            return backgroundImage.includes(filePath.split(".")[0]);
        }
        catch (error){
            console.log("Error al cargar la imagen");
            console.log(error);
            return false;
        }
    }

    async deleteCoverImage() {
        await this.page.evaluate(() => {
            [...document.querySelectorAll('button')].find(btn => btn.innerText === "Delete cover image").click();
        });
        await new Promise(r => setTimeout(r, 500));
    }

    async changeName(name) {

        await this.page.evaluate((name) => {
            document.querySelector('input.peer').value = name;
        }, name);
    }

    async changeEmail(email) {
        await this.page.evaluate((email) => {
            document.querySelectorAll('input.peer')[1].value = email;
        }, email);
    }

    async getProfileName() {
        return await this.page.evaluate(() => {
            return document.querySelector('input.peer').value;
        });
    }

    async getProfileEmail() {
        return await this.page.evaluate(() => {
            return document.querySelectorAll('input.peer')[1].value;
        });
    }

    async changeFacebook(facebook) {
        await this.page.evaluate((facebook) => {
            document.querySelectorAll('input.peer')[5].value = facebook;
        }, facebook);
    }

    async changeTwitter(twitter) {
        await this.page.evaluate((twitter) => {
            document.querySelectorAll('input.peer')[6].value = twitter;
        }, twitter);
    }

    async getFacebook() {
        return await this.page.evaluate(() => {
            return document.querySelectorAll('input.peer')[5].value;
        });
    }

    async getTwitter() {
        return await this.page.evaluate(() => {
            return document.querySelectorAll('input.peer')[6].value;
        });
    }
}

module.exports = ProfilePage;