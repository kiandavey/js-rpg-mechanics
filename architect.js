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
        return this.quests.reduce((total, quest) => total + quest.reward, 0);
    }
}

const myGuild = new AdventureGuild();

myGuild.addQuest("Slay the Dragon", 500);
myGuild.addQuest("Find the Ring", 100);
myGuild.addQuest("Save the Princess", 1000);

console.log(myGuild.calculateTotalRewards());