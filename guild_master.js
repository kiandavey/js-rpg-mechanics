const questLog = [];

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
addQuest("Save the Princess", 1000);

function completeQuest(questTitle) {
    const quest = questLog.find(q => q.title === questTitle);
    
    if(quest) {
        quest.completed = true
        console.log(`Quest completed: ${quest.title}`)
    } else {
        console.log("Quest not found");
    }
}

completeQuest("Slay the Dragon");
completeQuest("Non-existent Quest");

function showUnfinished() {
    const unfinishedQuest = questLog.filter(q => !q.completed);
    console.log(unfinishedQuest);
}

showUnfinished();