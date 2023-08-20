import { combatLog, heroStaminaCounter } from "../docElements.js";
import { chosenCharacter } from "../main.js";
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
            console.log(`base damage: ${damage}`)
            const totalDmg = damage + chosenCharacter.strength
            combatLog.textContent = `You swing your greatsword in a wide arc for ${totalDmg} damage`

            return targetHp - totalDmg;
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
            console.log(`base damage: ${damage}`)
            const totalDmg = damage + chosenCharacter.strength
            combatLog.textContent = `You swing your greatsword in a wide arc for ${totalDmg} damage`

            return targetHp - totalDmg;
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
            const damage1 = Math.floor(Math.random() * (3 - 1) + 1);
            const damage2 = Math.floor(Math.random() * (3 - 1) + 1);
            dmgAnimation('./assets/damage.jpg')
            console.log(`base damage: ${damage1 + damage2}`)
            const totalDmg1 = damage1 + chosenCharacter.dexterity
            const totalDmg2 = damage2 + chosenCharacter.dexterity
            combatLog.textContent = `You slash with your first dagger for ${totalDmg1} damage, and follow up with a slash from your second dagger for ${totalDmg2} damage.`
            console.log(`You deal ${totalDmg1 + totalDmg2} damage`)
            return targetHp - (totalDmg1 + totalDmg2);
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
            const damage1 = Math.floor(Math.random() * (3 - 2) + 2);
            const damage2 = Math.floor(Math.random() * (3 - 2) + 2);
            dmgAnimation('./assets/damage.jpg')
            const totalDmg1 = damage1 + chosenCharacter.dexterity
            const totalDmg2 = damage2 + chosenCharacter.dexterity
            combatLog.textContent = `You stab your first dagger for ${totalDmg1} damage, and follow up with a stab from your second dagger for ${totalDmg2} damage.`
            console.log(`You deal ${damage1 + damage2} damage`)
            return targetHp - (totalDmg1 + totalDmg2);
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

