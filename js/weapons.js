//WEAPON CLASS CONSTRUCTORS
export default class Weapon {
    constructor(name, type, weight) {
        this.name = name;
        this.type = type;
        this.weight = weight;
    }
}

export class Greatsword extends Weapon {
    constructor(name, type, weight) {
        super(name, type, weight)

    }
    sweepAttack() {
        const damage = Math.floor(Math.random() * (12 - 3) + 3);
        console.log(`You swing your greatsword in a wide arc for ${damage} damage`)
    }
    lungeAttack() {
        const damage = Math.floor(Math.random() * (12 - 3) + 3);
        console.log(`You thrust your greatsword forward for ${damage} damage`)
    }
}

export class DoubleDaggers extends Weapon{
    constructor(name, type, weight) {
        super(name, type, weight)
    }
    doubleSlash(){
        const damage1 = Math.floor(Math.random() * (6 - 1) + 1);
        const damage2 = Math.floor(Math.random() * (6 - 1) + 1);
        console.log(`You slash with your first dagger for ${damage1} damage, and follow up with a slash from your second dagger for ${damage2} damage.`)

    }
    doubleStab(){
        const damage1 = Math.floor(Math.random() * (5 - 1) + 1);
        const damage2 = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(`You stab your first dagger for ${damage1} damage, and follow up with a stab from your second dagger for ${damage2} damage.`)
    }
}
