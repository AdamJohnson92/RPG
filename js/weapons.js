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
    attackDam1(target) {
        const naturalRoll = Math.floor(Math.random() * (20 - 2) + 2)
        console.log(`You roll ${naturalRoll}`)

        if (naturalRoll >= target) {
            const damage = Math.floor(Math.random() * (12 - 3) + 3);
        console.log(`You swing your greatsword in a wide arc for ${damage} damage`)
        return damage;
        } else {
            console.log('You missed!')
            return;
        }
    }
    attackDam2(target) {
        const naturalRoll = Math.floor(Math.random() * (20 - 2) + 2)
    console.log(`You roll ${naturalRoll}`)
    // const totalRoll = naturalRoll + stat

    if (naturalRoll >= target) {
        const damage = Math.floor(Math.random() * (12 - 3) + 3);
        console.log(`You thrust your greatsword forward for ${damage} damage`)
        return damage;
    } else {
        console.log('You missed!')
        return;
    }
       
    }
}

class DoubleDaggers extends Weapon {
    constructor(name, type, weight, attack1, attack2, modifyingStat) {
        super(name, type, weight, attack1, attack2, modifyingStat)
    }
    attackDam1(target) {
        const naturalRoll = Math.floor(Math.random() * (20 - 2) + 2)
        console.log(`You roll ${naturalRoll}`)
        // const totalRoll = naturalRoll + stat

        if (naturalRoll >= 7) {
        const damage1 = Math.floor(Math.random() * (6 - 1) + 1);
        const damage2 = Math.floor(Math.random() * (6 - 1) + 1);
        console.log(`You slash with your first dagger for ${damage1} damage, and follow up with a slash from your second dagger for ${damage2} damage.`)
        return damage1 + damage2;
        } else {
            console.log('You missed!')
            return;
        }
    }
    attackDam2(target) {
        const naturalRoll = Math.floor(Math.random() * (20 - 2) + 2)
        console.log(`You roll ${naturalRoll}`)
        // const totalRoll = naturalRoll + stat

        if (naturalRoll >= 7) {
            const damage1 = Math.floor(Math.random() * (5 - 1) + 1);
            const damage2 = Math.floor(Math.random() * (5 - 1) + 1);
            console.log(`You stab your first dagger for ${damage1} damage, and follow up with a stab from your second dagger for ${damage2} damage.`)
            return damage1 + damage2;
        } else {
            console.log('You missed!')
            return;
        }
    }
}

const valeGreatsword = new Greatsword("Vale's Greatsword", 'sword', 6, 'Sweep Attack', 'Lunge Attack', 'strength')
const slickDoubleDaggers = new DoubleDaggers("Slick's Double Daggers", "daggers", 3, 'Double Slash', 'Double Stab', 'dexterity')

export { valeGreatsword, slickDoubleDaggers }

