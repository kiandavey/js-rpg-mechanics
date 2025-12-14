function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Character {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

    attack(target) {
        let randomDamage = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        target.hp -= randomDamage;
        target.hp = Math.max(target.hp, 0);
        console.log(`${this.name} hit ${target.name} for ${randomDamage} damage! ${target.name} HP: ${target.hp}`);
    }
}

async function startBattle(hero, monster) {
    console.log("⚔️--------------- Battle Start! ---------------⚔️");
    while (hero.hp > 0 && monster.hp > 0) {
        hero.attack(monster);
        await wait(1000);
        if (monster.hp <= 0) break;

        monster.attack(hero);
        await wait(1000);
        if (hero.hp <= 0) break;
    }

    console.log("⚔️--------------- WINNER ---------------⚔️");
    if (hero.hp > 0) {
        console.log(`${hero.name} wins!`);
    } else {
        console.log(`${monster.name} wins!`);
    }
}

const hero = new Character("Shin", 100); 
const monster = new Character("Houken", 100);

startBattle(hero, monster);