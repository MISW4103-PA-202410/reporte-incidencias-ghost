class UserHistory {
    constructor(page) {
    this.page = page;
    }

    async isOpen() {
        try {
            await this.page.waitForSelector('section[data-testid="history-modal"]', { timeout: 10000 });
            return true;
        } catch (error) {
            return false;
        }
    }

    async getActivities() {
        const divItems = await this.page.$$('div.group\\\/list-item');
        let activities = [];
        for (let divItem of divItems) {
            try {
                const activity = await divItem.evaluate((el) => {
                    let activity = {};
                    const innerDiv = el.querySelector('div.text-sm');
                    if (!innerDiv) return null;
                    activity.name = innerDiv.innerHTML.split("<")[0];
                    activity.user_name = innerDiv.querySelector('span').innerText.split("by ")[1];
                    return activity;
                
                });
                if (activity) {
                    activities.push(activity);
                }
            } catch (error) {
                console.error('Error al obtener la actividad:', error);
            }
        }

        return activities;
    }
}

module.exports = UserHistory;