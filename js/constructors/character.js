import { valeGreatsword, slickDoubleDaggers } from "./weapons.js";
import { plateArmor, leatherArmor } from "./armor.js";


//CHARACTER CLASS CONSTRUCTORS
class Character {
    constructor(name, charClass, hp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, movePoints) {
        this.name = name;
        this.charClass = charClass
        this.hp = hp;
        this.strength = strength;
        this.dexterity = dexterity;
        this.wisdom = wisdom;
        this.hitChanceRate = hitChanceRate
        this.weapon = weapon;
        this.armor = armor;
        this.special = special;
        this.img = img;
        this.movePoints = movePoints;
    }
}
//-----
class Knight extends Character {
    constructor(name, charClass, hp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, movePoints) {
        super(name, charClass, hp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, movePoints)
    }

    tank() {
        this.armor.armorRating = this.armor.armorRating + 2
        charArmorRating.textContent = `Damage Reduction: ${valeChar.armor.armorRating}`
        console.log("Your damage reduction is increased by 2 for one turn")
    }
}

const valeChar = new Knight("Vale", "Knight", 20, 3, 1, 0, 12, valeGreatsword, plateArmor, `Tank (Increases Damage Reduction by 2 for one turn)`, "./assets/vale-static.jpg", 2)

//--------

class Rogue extends Character {
    constructor(name, charClass, hp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, movePoints) {
        super(name, charClass, hp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, movePoints)
    }

    agile() {
        this.hitChanceRate = this.hitChanceRate + 2
        console.log("Your hit chance rating is increased by 2 for one turn")
    }
}

const slickChar = new Rogue("Slick", "Rogue", 15, 1, 3, 0, 14, slickDoubleDaggers, leatherArmor, "Agile (Increases your Hit Chance Rating by 2 for one turn)", 
"./assets/slick-static.png", 3)

const characterRoster = [valeChar, slickChar]

export { characterRoster }
