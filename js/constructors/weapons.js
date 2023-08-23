import { combatLog } from "../docElements.js";
import { chosenCharacter } from "../index.js";
import { dmgAnimation, dmgAnimation2 } from "../combatUtil.js";

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
        console.log(this.modifyingStat)
        const naturalRoll = Math.floor(Math.random() * (20 - 3) + 3)
        const totalRoll = naturalRoll + chosenCharacter.strength

        if (totalRoll >= targetHit) {
            const damage = Math.floor(Math.random() * (9 - 2) + 2);
            dmgAnimation('./assets/damage.png')
            console.log(`base damage: ${damage}`)
            const totalDmg = damage + chosenCharacter.strength
            combatLog.textContent = `You swing your greatsword in a wide arc for ${totalDmg} damage`

            return targetHp - totalDmg;
        } else {
            console.log('You missed!')
            dmgAnimation('./assets/miss.png')
            combatLog.textContent = 'You missed!';
            return targetHp
        }
    }

    attackDam2(targetHit, targetHp) {
        const naturalRoll = Math.floor(Math.random() * (20 - 1) + 1)
        const totalRoll = naturalRoll + chosenCharacter.strength

        if (totalRoll >= targetHit) {
            const damage = Math.floor(Math.random() * (10 - 3) + 3);
            dmgAnimation('./assets/damage.png')
            console.log(`base damage: ${damage}`)
            const totalDmg = damage + chosenCharacter.strength
            combatLog.textContent = `You thrust your greatsword forward for ${totalDmg} damage`

            return targetHp - totalDmg;
        } else {
            console.log('You missed!')
            dmgAnimation('./assets/miss.png')
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
        const naturalRoll1 = Math.floor(Math.random() * (20 - 4) + 2)
        const totalRoll1 = naturalRoll1 + chosenCharacter.dexterity

        let totalDmg1
        let multiLog1;
        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (2 - 1) + 1);
            dmgAnimation('./assets/damage.png', 1)
            totalDmg1 = damage1 + chosenCharacter.dexterity
            console.log(`total damage 1: ${totalDmg1}`)
            multiLog1 = `deals ${totalDmg1} damage`
        } else {
            totalDmg1 = 0
            dmgAnimation('./assets/miss.png', 1)
            multiLog1 = 'misses';
        }

        const naturalRoll2 = Math.floor(Math.random() * (20 - 4) + 2)
        const totalRoll2 = naturalRoll2 + chosenCharacter.dexterity

        let totalDmg2;
        let multiLog2;
        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (2 - 1) + 1);
            dmgAnimation2('./assets/damage-2.png', 2)
            totalDmg2 = damage2 + chosenCharacter.dexterity
            console.log(`total damage 2: ${totalDmg2}`)
            multiLog2 = `deals ${totalDmg2} damage`
        } else {
            totalDmg2 = 0
            dmgAnimation2('./assets/miss-2.png', 2)
            multiLog2 = 'misses';
        }

        combatLog.textContent = `Your first dagger slash ${multiLog1}, and you follow up with your second dagger that ${multiLog2}.`

        return targetHp - (totalDmg1 + totalDmg2);
    };

    attackDam2(targetHit, targetHp) {
        const naturalRoll1 = Math.floor(Math.random() * (18 - 2) + 2)
        const totalRoll1 = naturalRoll1 + chosenCharacter.dexterity

        let totalDmg1
        let multiLog1;
        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (4 - 1) + 1);
            dmgAnimation('./assets/damage.png', 1)
            totalDmg1 = damage1 + chosenCharacter.dexterity
            console.log(`total damage 1: ${totalDmg1}`)
            multiLog1 = `deals ${totalDmg1} damage`
        } else {
            console.log('Your first attack missed!')
            totalDmg1 = 0
            dmgAnimation('./assets/miss.png', 1)
            multiLog1 = 'misses';
        }

        const naturalRoll2 = Math.floor(Math.random() * (18 - 2) + 2)
        const totalRoll2 = naturalRoll2 + chosenCharacter.dexterity

        let totalDmg2;
        let multiLog2;
        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (4 - 1) + 1);
            dmgAnimation2('./assets/damage-2.png', 2)
            totalDmg2 = damage2 + chosenCharacter.dexterity
            console.log(`total damage 2: ${totalDmg2}`)
            multiLog2 = `deals ${totalDmg2} damage`
        } else {
            console.log('Your second attack missed!')
            totalDmg2 = 0
            dmgAnimation2('./assets/miss-2.png', 2)
            multiLog2 = 'misses';
        }

        combatLog.textContent = `Your first dagger stab ${multiLog1}, and you follow up with your second dagger that ${multiLog2}.`

        return targetHp - (totalDmg1 + totalDmg2);
    }
}

const valeGreatsword = new Greatsword("Greatsword", 'Sword', 6, 'Sweep Attack', 'Lunge Attack', 'strength')
const slickDoubleDaggers = new DoubleDaggers("Double Daggers", "Daggers", 3, 'Double Slash', 'Double Stab', 'dexterity')

export { valeGreatsword, slickDoubleDaggers }

