import { monsterMoveCounter, changeTurn2 } from "../combatUtil.js";
import { combatLog } from "../docElements.js";
//CHARACTER CLASS CONSTRUCTORS
class Monster {
    constructor(name, hp, hitChanceRate, img) {
        this.name = name;
        this.hp = hp;
        this.hitChanceRate = hitChanceRate
        this.img = img
    }
}

class Undead extends Monster {
    constructor(name, hp, hitChanceRate, img) {
        super(name, hp, hitChanceRate, img)
    }

    attack1(target, targetHp) {
        const naturalRoll = Math.floor(Math.random() * (20 - 12) + 12)
        console.log(`The ${this.name} rolls ${naturalRoll}`)
        monsterMoveCounter.textContent -- 
        changeTurn2()

        if (naturalRoll >= 12) {
            const damage = Math.floor(Math.random() * (7 - 1) + 1);
            // dmgAnimation()
            combatLog.textContent = `The ${Undead.name} hits you for ${damage} damage`
            return targetHp - damage;
        } else {
            console.log(`The ${this.name} missed!`)
            combatLog.textContent = `The ${Undead.name} missed!`
            return targetHp;
        }
    }
}

const undead = new Undead ('Unead', 20, 1, './assets/undead-static.jpg')

export { undead }