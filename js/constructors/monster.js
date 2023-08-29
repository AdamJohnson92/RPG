import { changeTurn2, monDmgAnimation } from "../combatUtil.js";
import { charHpDiv, combatLog, heroHealthJuice} from "../docElements.js";



//MONSTER CLASS CONSTRUCTORS
//-----------------------------------

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
        const naturalRoll = Math.floor(Math.random() * (20 - 10) + 10)

        if (naturalRoll >= targetHit) {
            let damage = Math.floor(Math.random() * (7 - 2) + 2);
            monDmgAnimation('./assets/damage.png')
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            combatLog.textContent = `The ${this.name} hits you for ${dmgLessArmor} damage`
            charHpDiv.textContent = `${(targetHp - dmgLessArmor)}`
            if ((targetHp - dmgLessArmor) < 1) {
                heroHealthJuice.style.width = '0%'
                loser()
            }
            return targetHp - dmgLessArmor;
        } else {
            monDmgAnimation('./assets/miss.png')
            combatLog.textContent = `The ${this.name} missed!`
            return targetHp;
        }

    }
}

class Goblin extends Monster {
    constructor(name, maxHp, currentHp, hitChanceRate, img, attackImg, staminaPoints) {
        super(name, maxHp, currentHp, hitChanceRate, img, attackImg, staminaPoints)
    }
    attack1(targetHit, targetHp, targetArmor) {
        const naturalRoll = Math.floor(Math.random() * (20 - 12) + 12)

        if (naturalRoll >= targetHit) {
            let damage = Math.floor(Math.random() * (9 - 2) + 2);
            monDmgAnimation('./assets/damage.png')
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            combatLog.textContent = `The ${this.name} hits you for ${dmgLessArmor} damage`
            charHpDiv.textContent = `${(targetHp - dmgLessArmor)}`
            if ((targetHp - dmgLessArmor) < 1) {
                loser()
            }
            return targetHp - dmgLessArmor;
        } else {
            monDmgAnimation('./assets/miss.png')
            combatLog.textContent = `The ${this.name} missed!`
            return targetHp;
        }

    }
}

// MONSTER ROSTER
//-----------------------------------


const undead = new Undead('Undead', 23, 23, 12, './assets/undead-static.png','./assets/undead-attack.png', 1)

const goblin = new Goblin('Goblin', 35, 35, 13, './assets/goblin-static.png', './assets/goblin-attack.png', 1)

const badFrog = new Goblin('Bad Frog', 40, 40, 10,'./assets/bad-frog-static.png','./assets/bad-frog-static.png', 1)

const monsterRoster = [goblin, undead, badFrog]

export { monsterRoster }