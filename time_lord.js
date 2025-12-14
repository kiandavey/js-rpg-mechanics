class AdventureGuild {
    constructor() {
        this.quests = []
        this.totalGold = 0
    }

    addQuest(title, reward) {
        const tempObject = {
            title,
            reward,
            completed: false
        }
        this.quests.push(tempObject);
        console.log(`Added Quest : ${tempObject.title}`);
    }

    calculateTotalRewards() {
        this.totalGold = this.quests.reduce((total, quest) => total + quest.reward, 0);
        return this.totalGold;
    }

    async loadDailyQuests() {
        console.log("Loading quests...");
        try {
            const data = await getQuestsFromDB();
            this.quests.push(...data);
            console.log(data)
            console.log("Quests loaded!");
        }
        catch(error) {
            console.log(error);
        }
    }
}

function getQuestsFromDB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { title: "Dark Souls", reward: 5000 }
            ]);
        }, 2000);
    });
}

const myGuild = new AdventureGuild();

myGuild.loadDailyQuests();
console.log("This happens while waiting...");
