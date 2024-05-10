class LabsPage {
    constructor(page) {
    this.page = page;
    }

    async deleteAllContent() {
        await this.page.evaluate(() => {
            [...document.querySelectorAll('span')].find(span => span.innerText === "Delete all content").click();
        });
        await new Promise(r => setTimeout(r, 500));

        // Confirm deletion
        await this.page.evaluate(() => {
            [...document.querySelectorAll('span')].find(span => span.innerText === "Delete").click();
        });
        await new Promise(r => setTimeout(r, 10000));

    }
}

module.exports = LabsPage;