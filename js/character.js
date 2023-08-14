import { valeGreatsword, slickDoubleDaggers } from "./weapons.js";
import { plateArmor, leatherArmor } from "./armor.js";

//CHARACTER CLASS CONSTRUCTORS
class Character {
    constructor(name, charClass, hp, strength, dexterity, wisdom,hitChanceRate, weapon, armor) {
        this.name = name;
        this.charClass = charClass
        this.hp = hp;
        this.strength = strength;
        this.dexterity = dexterity;
        this.wisdom = wisdom;
        this.hitChanceRate = hitChanceRate
        this.weapon = weapon;
        this.armor = armor;
    }
}
//-----
class Knight extends Character {
    constructor(name, charClass, hp, strength, dexterity, wisdom, hitChanceRate, weapon, armor) {
        super(name, charClass, hp, strength, dexterity, wisdom, hitChanceRate, weapon, armor)
    }

    tank() {
        this.armor.armorRating = this.armor.armorRating + 2
        console.log("Your armor rating is increased by 2 for one turn")
    }
}



const valeChar = new Knight("Vale", "Knight", 20, 3, 1, 0, 12, valeGreatsword, plateArmor)

//--------

class Rogue extends Character {
    constructor(name, charClass, hp, strength, dexterity, wisdom, hitChanceRate, weapon, armor) {
        super(name, charClass, hp, strength, dexterity, wisdom, hitChanceRate, weapon, armor)
    }

    agile() {
        this.hitChanceRate = this.hitChanceRate + 2
        console.log("Your hit chance rating is increased by 2 for one turn")
    }
}



const slickChar = new Rogue("Slick", "Rouge", 15, 1, 3, 0, 14, slickDoubleDaggers, leatherArmor)

export {valeChar, slickChar}
