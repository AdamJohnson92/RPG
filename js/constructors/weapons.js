import { combatLog, heroStaminaCounter } from "../docElements.js";
import { chosenCharacter } from "../main.js";
import { dmgAnimation } from "../combatUtil.js";

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
    attackDam1(targetHit, targetHp) {
        const naturalRoll = Math.floor(Math.random() * (20 - 3) + 3)
        console.log(`You roll ${naturalRoll}`)
        const totalRoll = naturalRoll + chosenCharacter.strength
        console.log(`total roll = ${totalRoll}`)

        if (totalRoll >= targetHit) {
            const damage = Math.floor(Math.random() * (9 - 2) + 2);
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

    attackDam2(targetHit, targetHp) {
        const naturalRoll = Math.floor(Math.random() * (20 - 1) + 1)
        console.log(`You roll ${naturalRoll}`)
        const totalRoll = naturalRoll + chosenCharacter.strength
        console.log(`total roll = ${totalRoll}`)

        if (totalRoll >= targetHit) {
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
    attackDam1(targetHit, targetHp) {
        const naturalRoll1 = Math.floor(Math.random() * (20 - 5) + 2)
        console.log(`Your first roll is ${naturalRoll1}`)
        const totalRoll1 = naturalRoll1 + chosenCharacter.dexterity
        console.log(`Your first total roll is ${totalRoll1}`)

        const naturalRoll2 = Math.floor(Math.random() * (20 - 5) + 2)
        console.log(`Your second roll is ${naturalRoll2}`)
        const totalRoll2 = naturalRoll2 + chosenCharacter.dexterity
        console.log(`Your second total roll is ${totalRoll2}`)

        let totalDmg1
        let multiLog1;
        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (3 - 1) + 1);
            dmgAnimation('./assets/damage.jpg')
            totalDmg1 = damage1 + chosenCharacter.dexterity
            console.log(`total damage 1: ${totalDmg1}`)
            multiLog1 = `deals ${totalDmg1} damage`
        } else {
            totalDmg1 = 0
            dmgAnimation('./assets/miss.jpg')
            multiLog1 = 'misses';
        }

        let totalDmg2;
        let multiLog2;
        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (3 - 1) + 1);
            dmgAnimation('./assets/damage.jpg')
            totalDmg2 = damage2 + chosenCharacter.dexterity
            console.log(`total damage 2: ${totalDmg2}`)
            multiLog2 = `deals ${totalDmg2} damage`
        } else {
            totalDmg2 = 0
            dmgAnimation('./assets/miss.jpg')
            multiLog2 = 'misses';
        }

        combatLog.textContent = `Your first dagger ${multiLog1}, and you follow up with your second dagger that ${multiLog2}.`

        return targetHp - (totalDmg1 + totalDmg2);
    };

    attackDam2(targetHit, targetHp) {
        const naturalRoll1 = Math.floor(Math.random() * (20 - 2) + 2)
        console.log(`Your first roll is ${naturalRoll1}`)
        const totalRoll1 = naturalRoll1 + chosenCharacter.dexterity
        console.log(`Your first total roll is ${totalRoll1}`)

        const naturalRoll2 = Math.floor(Math.random() * (20 - 2) + 2)
        console.log(`Your second roll is ${naturalRoll2}`)
        const totalRoll2 = naturalRoll2 + chosenCharacter.dexterity
        console.log(`Your second total roll is ${totalRoll2}`)

        let totalDmg1
        let multiLog1;
        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (4 - 1) + 1);
            dmgAnimation('./assets/damage.jpg')
            totalDmg1 = damage1 + chosenCharacter.dexterity
            console.log(`total damage 1: ${totalDmg1}`)
            multiLog1 = `deals ${totalDmg1} damage`
        } else {
            console.log('Your first attack missed!')
            totalDmg1 = 0
            dmgAnimation('./assets/miss.jpg')
            multiLog1 = 'misses';
        }

        let totalDmg2;
        let multiLog2;
        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (4 - 1) + 1);
            dmgAnimation('./assets/damage.jpg')
            totalDmg2 = damage2 + chosenCharacter.dexterity
            console.log(`total damage 2: ${totalDmg2}`)
            multiLog2 = `deals ${totalDmg2} damage`
        } else {
            console.log('Your second attack missed!')
            totalDmg2 = 0
            dmgAnimation('./assets/miss.jpg')
            multiLog2 = 'misses';
        }

        combatLog.textContent = `Your first dagger ${multiLog1}, and you follow up with your second dagger that ${multiLog2}.`

        return targetHp - (totalDmg1 + totalDmg2);
    }
}

const valeGreatsword = new Greatsword("Vale's Greatsword", 'Sword', 6, 'Sweep Attack', 'Lunge Attack', 'strength')
const slickDoubleDaggers = new DoubleDaggers("Slick's Double Daggers", "Daggers", 3, 'Double Slash', 'Double Stab', 'dexterity')

export { valeGreatsword, slickDoubleDaggers }

