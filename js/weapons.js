//WEAPON CLASS CONSTRUCTORS
class Weapon {
    constructor(name, type, weight, attack1, attack2) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.attack1 = attack1;
        this.attack2 = attack2;
    }
}

class Greatsword extends Weapon {
    constructor(name, type, weight, attack1, attack2) {
        super(name, type, weight, attack1, attack2)

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

class DoubleDaggers extends Weapon{
    constructor(name, type, weight, attack1, attack2) {
        super(name, type, weight, attack1, attack2)
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

const valeGreatsword = new Greatsword("Vale's Greatsword", 'sword', 6, 'Sweep Attack', 'Lunge Attack')
const slickDoubleDaggers = new DoubleDaggers("Slick's Double Daggers", "daggers", 3, 'Double Slash', 'Double Stab')

export {valeGreatsword, slickDoubleDaggers}