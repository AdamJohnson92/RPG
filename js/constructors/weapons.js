import { combatLog, heroStaminaCounter } from "../docElements.js";
import {  dmgAnimation } from "../combatUtil.js";

let heroStaminaNum;

//WEAPON CLASS CONSTRUCTORS
class Weapon {
    constructor(name, type, weight, attack1, attack2, modifyingStat) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.attack1 = attack1;
        this.attack2 = attack2;
        this.modifyingStat = modifyingStat;
    }
}

class Greatsword extends Weapon {
    constructor(name, type, weight, attack1, attack2, modifyingStat) {
        super(name, type, weight, attack1, attack2, modifyingStat)

    }
    attackDam1(target, targetHp) {
        const naturalRoll = Math.floor(Math.random() * (20 - 2) + 2)
        console.log(`You roll ${naturalRoll}`)
        // const totalRoll = naturalRoll + stat

        if (naturalRoll >= target) {
            const damage = Math.floor(Math.random() * (10 - 3) + 3);
            dmgAnimation('./assets/damage.jpg')
            combatLog.textContent = `You swing your greatsword in a wide arc for ${damage} damage`
            console.log(`You deal ${damage} damage`)

            return targetHp - damage;
        } else {
            console.log('You missed!')
            dmgAnimation('./assets/miss.jpg')
            combatLog.textContent = 'You missed!';
            return targetHp
        }
    }
    
    attackDam2(target, targetHp) {
        const naturalRoll = Math.floor(Math.random() * (20 - 2) + 2)
        console.log(`You roll ${naturalRoll}`)
        // const totalRoll = naturalRoll + stat

        if (naturalRoll >= target) {
            const damage = Math.floor(Math.random() * (10 - 3) + 3);
            dmgAnimation('./assets/damage.jpg')
            combatLog.textContent = `You thrust your greatsword forward for ${damage} damage`
            console.log(`You deal ${damage} damage`)
            return targetHp - damage;
        } else {
            console.log('You missed!')
            dmgAnimation('./assets/miss.jpg')
            combatLog.textContent = 'You missed!';
            return targetHp
        }
    }
}

class DoubleDaggers extends Weapon {
    constructor(name, type, weight, attack1, attack2, modifyingStat) {
        super(name, type, weight, attack1, attack2, modifyingStat)
    }
    attackDam1(target, targetHp) {
        const naturalRoll = Math.floor(Math.random() * (20 - 2) + 2)
        console.log(`You roll ${naturalRoll}`)
        // const totalRoll = naturalRoll + stat

        if (naturalRoll >= target) {
            const damage1 = Math.floor(Math.random() * (4 - 2) + 2);
            const damage2 = Math.floor(Math.random() * (4 - 2) + 2);
            dmgAnimation('./assets/damage.jpg')
            combatLog.textContent = `You slash with your first dagger for ${damage1} damage, and follow up with a slash from your second dagger for ${damage2} damage.`
            console.log(`You deal ${damage1 + damage2} damage`)
            return targetHp - (damage1 + damage2);
        } else {
            console.log('You missed!')
            dmgAnimation('./assets/miss.jpg')
            combatLog.textContent = 'You missed!';
            return targetHp
        }
    };

    attackDam2(target, targetHp) {
        const naturalRoll = Math.floor(Math.random() * (20 - 2) + 2)
        console.log(`You roll ${naturalRoll}`)
        // const totalRoll = naturalRoll + stat

        if (naturalRoll >= target) {
            const damage1 = Math.floor(Math.random() * (5 - 2) + 2);
            const damage2 = Math.floor(Math.random() * (5 - 2) + 2);
            dmgAnimation('./assets/damage.jpg')
            combatLog.textContent = `You stab your first dagger for ${damage1} damage, and follow up with a stab from your second dagger for ${damage2} damage.`
            console.log(`You deal ${damage1 + damage2} damage`)
            return targetHp - (damage1 + damage2);
        } else {
            console.log('You missed!')
            dmgAnimation('./assets/miss.jpg')
            combatLog.textContent = 'You missed!';
            return targetHp
        }
    }
}

const valeGreatsword = new Greatsword("Vale's Greatsword", 'Sword', 6, 'Sweep Attack', 'Lunge Attack', 'strength')
const slickDoubleDaggers = new DoubleDaggers("Slick's Double Daggers", "Daggers", 3, 'Double Slash', 'Double Stab', 'dexterity')

export { valeGreatsword, slickDoubleDaggers, heroStaminaNum }

