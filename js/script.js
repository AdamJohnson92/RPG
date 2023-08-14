// import Weapon from './weapons'

//CHARACTER CLASS CONSTRUCTORS
class Character {
    constructor(name, charClass, hp, strength, dexterity, intelligence,hitChanceRate, weapon, armor) {
        this.name = name;
        this.charClass = charClass
        this.hp = hp;
        this.strength = strength;
        this.dexterity = dexterity;
        this.intelligence = intelligence;
        this.hitChanceRate = hitChanceRate
        this.weapon = weapon;
        this.armor = armor;
    }
}
//-----
class Knight extends Character {
    constructor(name, charClass, hp, strength, dexterity, intelligence, hitChanceRate, weapon, armor) {
        super(name, charClass, hp, strength, dexterity, intelligence, hitChanceRate, weapon, armor)
    }

    tank() {
        this.armor.armorRating = this.armor.armorRating + 2
        console.log("Your armor rating is increased by 2 for one turn")
    }
}
//--------
class Rogue extends Character {
    constructor(name, charClass, hp, strength, dexterity, intelligence, hitChanceRate, weapon, armor) {
        super(name, charClass, hp, strength, dexterity, intelligence, hitChanceRate, weapon, armor)
    }

    agile() {
        this.hitChanceRate = this.hitChanceRate + 2
        console.log("Your hit chance rating is increased by 2 for one turn")
    }
}

//--------------------------------------------------------------

//WEAPON CLASS CONSTRUCTORS
class Weapon {
    constructor(name, type, weight) {
        this.name = name;
        this.type = type;
        this.weight = weight;
    }
}

class Greatsword extends Weapon {
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

class DoubleDaggers extends Weapon{
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

const valeGreatsword = new Greatsword("Vale's Greatsword", 'sword', 6)
const slickDoubleDaggers = new DoubleDaggers("Slick's Double Daggers", "daggers", 3)

// valeGreatsword.sweepAttack()
// valeGreatsword.lungeAttack()

//---------------------------------------
//ARMOR CLASS CONSTRUCTORS
class Armor {
    constructor(name, armorClass, weight, armorRating) {
        this.name = name;
        this.armorClass = armorClass;
        this.weight = weight;
        this. armorRating = armorRating;
    }
}

const plateArmor = new Armor ("Plate mail", "Heavy", 20, 3)
const leatherArmor = new Armor("Leather armor", "Medium", 10, 2)
//----------------------------------------

const valeChar = new Knight("Vale", "Knight", 20, 3, 1, 0, 12, valeGreatsword, plateArmor)

const slickChar = new Rogue("Slick", "Rouge", 15, 1, 3, 0, 14, slickDoubleDaggers, leatherArmor)

console.log(valeChar)
console.log(slickChar)

