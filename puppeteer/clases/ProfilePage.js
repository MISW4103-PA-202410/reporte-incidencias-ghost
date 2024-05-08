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
            const imgElement = await this.page.$('div.bg-cover');
            if(imgElement == null){
                console.log("No se encontró la imagen");
                return false;
            }
            const backgroundImage = await imgElement.evaluate((el) => el.style.backgroundImage);
            return backgroundImage.includes(filePath.split(".")[0]);
        }
        catch (error){
            console.log("Error al cargar la imagen");
            return false;
        }
    }

    async deleteCoverImage() {
        await this.page.evaluate(() => {
            [...document.querySelectorAll('button')].find(btn => btn.innerText === "Delete cover image").click();
        });
        await new Promise(r => setTimeout(r, 500));
    }

    async clearInput(input) {
        await input.click({ clickCount: 3 });
        await this.page.keyboard.press('Backspace');
    }

    async changeName(name) {
        let inputs = await this.page.$$('input.peer');
        // Name is the first input
        let input = inputs[0];
        await this.clearInput(input);
        await input.type(name);
    }

    async changeEmail(email) {
        let inputs = await this.page.$$('input.peer');
        // Email is the second input
        let input = inputs[1];
        await this.clearInput(input);
        await input.type(email);
    }

    async getProfileName() {
        let nameInput = (await this.page.$$('input.peer'))[0];
        
        return await nameInput.evaluate((el) => el.value);
    }

    async getProfileEmail() {
        let emailInput = (await this.page.$$('input.peer'))[1];
        
        return await emailInput.evaluate((el) => el.value);
    }

    async changeFacebook(facebook) {
        let inputs = await this.page.$$('input.peer');
        // Facebook is the sixth input
        let input = inputs[5];
        await this.clearInput(input);
        await input.type(facebook);
    }

    async changeTwitter(twitter) {
        let inputs = await this.page.$$('input.peer');
        // Twitter is the seventh input
        let input = inputs[6];
        await this.clearInput(input);
        await input.type(twitter);
        await (await this.page.$$('input.peer'))[4].click();
    }

    async getFacebook() {
        let fbInput = (await this.page.$$('input.peer'))[5];
        return await fbInput.evaluate((el) => el.value);
    }

    async getTwitter() {
        let twInput = (await this.page.$$('input.peer'))[6];
        return await twInput.evaluate((el) => el.value);
    }
}

module.exports = ProfilePage;