import { changeTurn2, monDmgAnimation, monsterAttackAnimation } from "../combatUtil.js";
import { charHpDiv, combatLog, heroHealthJuice} from "../docElements.js";
import { chosenCharacter, loser,  } from "../index.js";

//MONSTER CLASS CONSTRUCTORS
class Monster {
    constructor(name, maxHp, currentHp, hitChanceRate, img, attackImg, staminaPoints) {
        this.name = name;
        this.maxHp = maxHp;
        this.currentHp = currentHp;
        this.hitChanceRate = hitChanceRate
        this.img = img
        this.staminaPoints = staminaPoints
        this.attackImg = attackImg
    }
}

class Undead extends Monster {
    constructor(name, maxHp, currentHp, hitChanceRate, img, attackImg, staminaPoints) {
        super(name, maxHp, currentHp, hitChanceRate, img, attackImg, staminaPoints)
    }

    attack1(targetHit, targetHp, targetArmor) {
        monsterAttackAnimation()
        console.log(chosenCharacter)
        const naturalRoll = Math.floor(Math.random() * (20 - 10) + 10)
        console.log(`The ${this.name} rolls ${naturalRoll}`)
        changeTurn2()

        if (naturalRoll >= targetHit) {
            let damage = Math.floor(Math.random() * (7 - 2) + 2);
            console.log('monster raw damage: ' + damage)
            monDmgAnimation('./assets/damage.png')
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            combatLog.textContent = `The ${this.name} hits you for ${dmgLessArmor} damage`
            charHpDiv.textContent = `${(targetHp - dmgLessArmor)}`
            console.log(chosenCharacter)
            if ((targetHp - dmgLessArmor) < 1) {
                heroHealthJuice.style.width = '0%'
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

const undead = new Undead('Undead', 23, 23, 12, './assets/undead-static.png','./assets/undead-static.png', 1)

//-----------------------------------------------

class Goblin extends Monster {
    constructor(name, maxHp, currentHp, hitChanceRate, img, attackImg, staminaPoints) {
        super(name, maxHp, currentHp, hitChanceRate, img, attackImg, staminaPoints)
    }

    attack1(targetHit, targetHp, targetArmor) {
        monsterAttackAnimation()
        console.log(chosenCharacter)
        const naturalRoll = Math.floor(Math.random() * (20 - 12) + 12)
        console.log(`The ${this.name} rolls ${naturalRoll}`)
        changeTurn2()

        if (naturalRoll >= targetHit) {
            let damage = Math.floor(Math.random() * (9 - 2) + 2);
            console.log('monster raw damage: ' + damage)
            monDmgAnimation('./assets/damage.png')
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            combatLog.textContent = `The ${this.name} hits you for ${dmgLessArmor} damage`
            charHpDiv.textContent = `${(targetHp - dmgLessArmor)}`
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

const goblin = new Goblin('Goblin', 35, 35, 13, './assets/goblin-static.png', './assets/goblin-static.png', 1)

const monsterRoster = [goblin, undead]

export { monsterRoster }