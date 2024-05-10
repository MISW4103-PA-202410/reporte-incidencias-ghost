class LabsPage {
    constructor(page) {
    this.page = page;
    }

    async deleteAllContent() {
        await this.page.evaluate(() => {
            [...document.querySelectorAll('span')].find(span => span.innerText === "Delete").click();
        });
        await new Promise(r => setTimeout(r, 500));

        // Confirm deletion
        await this.page.evaluate(() => {
            [...document.querySelector("button.gh-btn-red").querySelectorAll('span')].find(span => span.innerText === "Delete").click();
        });
        await new Promise(r => setTimeout(r, 3000));

    }
}

module.exports = LabsPage;