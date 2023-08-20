import { monsterStaminaCounter, changeTurn2, monDmgAnimation } from "../combatUtil.js";
import { combatLog } from "../docElements.js";
import { chosenCharacter, loser } from "../main.js";
//CHARACTER CLASS CONSTRUCTORS
class Monster {
    constructor(name, maxHp, currentHp, hitChanceRate, img, staminaPoints) {
        this.name = name;
        this.maxHp = maxHp;
        this.currentHp = currentHp;
        this.hitChanceRate = hitChanceRate
        this.img = img
        this.staminaPoints = staminaPoints
    }
}

class Undead extends Monster {
    constructor(name, maxHp, currentHp, hitChanceRate, img, staminaPoints) {
        super(name, maxHp, currentHp, hitChanceRate, img, staminaPoints)
    }

    attack1(target, targetHp, targetArmor) {
        console.log(chosenCharacter)
        const naturalRoll = Math.floor(Math.random() * (20 - 8) + 8)
        console.log(`The ${this.name} rolls ${naturalRoll}`)
        monsterStaminaCounter.textContent -- 
        changeTurn2()

        if (naturalRoll >= target) {
            let damage = Math.floor(Math.random() * (7 - 1) + 1);
            console.log('monster raw damage: ' + damage)
            monDmgAnimation('./assets/damage.jpg')
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            combatLog.textContent = `The ${Undead.name} hits you for ${dmgLessArmor} damage`
            if ((targetHp - dmgLessArmor) < 1) {
                loser()
            }
            return targetHp - dmgLessArmor;
        } else {
            monDmgAnimation('./assets/miss.jpg')
            console.log(`The ${this.name} missed!`)
            combatLog.textContent = `The ${Undead.name} missed!`
            return targetHp;
        }

    }
}

const undead = new Undead ('Undead', 20, 20, 10, './assets/undead-static.jpg,', 1)

//-----------------------------------------------

class Goblin extends Monster {
    constructor(name, maxHp, currentHp, hitChanceRate, img, staminaPoints) {
        super(name, maxHp, currentHp, hitChanceRate, img, staminaPoints)
    }

    attack1(target, targetHp, targetArmor) {
        console.log(chosenCharacter)
        const naturalRoll = Math.floor(Math.random() * (20 - 12) + 12)
        console.log(`The ${this.name} rolls ${naturalRoll}`)
        monsterStaminaCounter.textContent -- 
        changeTurn2()

        if (naturalRoll >= target) {
            let damage = Math.floor(Math.random() * (9 - 1) + 1);
            console.log('monster raw damage: ' + damage)
            monDmgAnimation('./assets/damage.jpg')
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            combatLog.textContent = `The ${Undead.name} hits you for ${dmgLessArmor} damage`
            if ((targetHp - dmgLessArmor) < 1) {
                loser()
            }
            return targetHp - dmgLessArmor;
        } else {
            monDmgAnimation('./assets/miss.jpg')
            console.log(`The ${this.name} missed!`)
            combatLog.textContent = `The ${Undead.name} missed!`
            return targetHp;
        }

    }
}

const goblin = new Goblin('Goblin', 20, 20, 12, './assets/goblin-static.jpg', 1)


export { undead, goblin }