import { valeGreatsword, slickDoubleDaggers } from "./weapons.js";
import { plateArmor, leatherArmor } from "./armor.js";
import { charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charArmorRating, combatLog, charSpecial } from '../docElements.js'
import { chosenCharacter } from "../main.js";
import { buffDisplay, clearBuffDisplay } from "../combatUtil.js";


//CHARACTER CLASS CONSTRUCTORS
class Character {
    constructor(name, charClass, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, staminaPoints) {
        this.name = name;
        this.charClass = charClass
        this.maxHp = maxHp;
        this.currentHp = currentHp;
        this.strength = strength;
        this.dexterity = dexterity;
        this.wisdom = wisdom;
        this.hitChanceRate = hitChanceRate
        this.weapon = weapon;
        this.armor = armor;
        this.special = special;
        this.img = img;
        this.staminaPoints = staminaPoints;
    }
    takePotion(){
        //must write code for taking a potion
    }
}
//-----
class Knight extends Character {
    constructor(name, charClass, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, staminaPoints) {
        super(name, charClass, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, staminaPoints)
    }

    special1() {
        this.armor.armorRating = this.armor.armorRating + 2
        charArmorRating.textContent = `Damage Reduction: ${chosenCharacter.armor.armorRating}`
        buffDisplay(charArmorRating)
        console.log("Your damage reduction is increased by 2 for one turn")
        combatLog.textContent = "Your damage reduction is increased by 2 for one turn"
    }

    undo1() {
        if (this.armor.armorRating > 2) {
            this.armor.armorRating = 2
        }
        clearBuffDisplay()
        charArmorRating.textContent = `Damage Reduction: ${chosenCharacter.armor.armorRating}`
    }
}

const valeChar = new Knight("Vale", "Knight", 20, 20, 3, 1, 0, 12, valeGreatsword, plateArmor, `Tank`, "./assets/vale-static.jpg", 2)

//--------

class Rogue extends Character {
    constructor(name, charClass, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, staminaPoints) {
        super(name, charClass, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, staminaPoints)
    }

    special1() {
        this.hitChanceRate = this.hitChanceRate + 2
        charHitDiv.textContent = `Hit Chance: ${this.hitChanceRate}`
        console.log("Your hit chance rating is increased by 2 for one turn")
        combatLog.textContent = "Your hit chance rating is increased by 2 for one turn"
        buffDisplay(charHitDiv)
    }

    undo1() {
        if (this.hitChanceRate > 14) {
            this.hitChanceRate = 14
        } clearBuffDisplay()
        charHitDiv.textContent = `Hit Chance: ${this.hitChanceRate}`
    }
    
}

const slickChar = new Rogue("Slick", "Rogue", 15, 15, 1, 3, 0, 14, slickDoubleDaggers, leatherArmor, "Agile",
    "./assets/slick-static.png", 3)

const characterRoster = [valeChar, slickChar]

export { characterRoster }
