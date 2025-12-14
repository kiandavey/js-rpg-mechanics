let questLog = [];

function addQuest(title, reward) {
    const tempObject = {
        title,
        reward,
        completed: false
    }
    questLog.push(tempObject);
    console.log(`Added Quest : ${tempObject.title}`);
}

addQuest("Slay the Dragon", 500);
addQuest("Find the Ring", 100);

console.log(questLog);