import { changeTurn2, monDmgAnimation } from "../combatUtil.js";
import { charHpDiv, combatLog, monsterStaminaCounter,} from "../docElements.js";
import { chosenCharacter, loser } from "../main.js";

//MONSTER CLASS CONSTRUCTORS
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

    attack1(targetHit, targetHp, targetArmor) {
        console.log(chosenCharacter)
        const naturalRoll = Math.floor(Math.random() * (20 - 8) + 8)
        console.log(`The ${this.name} rolls ${naturalRoll}`)
        monsterStaminaCounter.textContent -- 
        changeTurn2()

        if (naturalRoll >= targetHit) {
            let damage = Math.floor(Math.random() * (7 - 1) + 1);
            console.log('monster raw damage: ' + damage)
            monDmgAnimation('./assets/damage.png')
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            combatLog.textContent = `The ${this.name} hits you for ${dmgLessArmor} damage`
            charHpDiv.textContent = `Hitpoints:  ${(targetHp - dmgLessArmor)}`
            console.log(chosenCharacter)
            if ((targetHp - dmgLessArmor) < 1) {
                loser()
            }
            return targetHp - dmgLessArmor;
        } else {
            monDmgAnimation('./assets/miss.png')
            console.log(`The ${this.name} missed!`)
            combatLog.textContent = `The ${this.name} missed!`
            return targetHp;
        }

    }
}

const undead = new Undead ('Undead', 20, 20, 10, './assets/undead-static.jpg', 1)

//-----------------------------------------------

class Goblin extends Monster {
    constructor(name, maxHp, currentHp, hitChanceRate, img, staminaPoints) {
        super(name, maxHp, currentHp, hitChanceRate, img, staminaPoints)
    }

    attack1(targetHit, targetHp, targetArmor) {
        console.log(chosenCharacter)
        const naturalRoll = Math.floor(Math.random() * (20 - 12) + 12)
        console.log(`The ${this.name} rolls ${naturalRoll}`)
        monsterStaminaCounter.textContent -- 
        changeTurn2()

        if (naturalRoll >= targetHit) {
            let damage = Math.floor(Math.random() * (9 - 1) + 1);
            console.log('monster raw damage: ' + damage)
            monDmgAnimation('./assets/damage.png')
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            combatLog.textContent = `The ${this.name} hits you for ${dmgLessArmor} damage`
            charHpDiv.textContent = `Hitpoints:  ${(targetHp - dmgLessArmor)}`
            console.log(chosenCharacter)
            if ((targetHp - dmgLessArmor) < 1) {
                loser()
            }
            return targetHp - dmgLessArmor;
        } else {
            monDmgAnimation('./assets/miss.png')
            console.log(`The ${this.name} missed!`)
            console.log(this)
            combatLog.textContent = `The ${this.name} missed!`
            return targetHp;
        }

    }
}

const goblin = new Goblin('Goblin', 20, 20, 12, './assets/goblin-static.jpg', 1)

const monsterRoster = [goblin, undead]

export { monsterRoster }