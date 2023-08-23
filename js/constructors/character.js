import { valeGreatsword, slickDoubleDaggers } from "./weapons.js";
import { plateArmor, leatherArmor } from "./armor.js";
import { charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charArmorRating, combatLog, charSpecial, heroStaminaCounter } from '../docElements.js'
import { chosenCharacter, changeHeroStaminaBar } from "../index.js";
import { buffDisplay, clearBuffDisplay, heroHealthJuice } from "../combatUtil.js";


//CHARACTER CLASS CONSTRUCTORS
class Character {
    constructor(name, charClass, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionCount) {
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
        this.attackImg = attackImg;
        this.staminaPoints = staminaPoints;
        this.potionCount = potionCount
    }
    //MUST MAKE POTION COUNTER THAT DECREMENTS TO 0 SO PLAYER CAN ONLY USE ONCE
    takePotion() {
            const healAmount = Math.floor(Math.random() * (4 - 2) + 2);
            console.log
            console.log('glug glug glug glug')
            if ((this.currentHp + healAmount) > this.maxHp) {
                this.currentHp = this.maxHp
            } else {
                this.currentHp = healAmount + this.currentHp
            }
            heroHealthJuice.style.width = `${(this.currentHp / this.maxHp) * 100}%`
            charHpDiv.textContent = `Hitpoints: ${this.currentHp}`
            combatLog.textContent = `You heal for ${healAmount} hitpoints.`


    }
}
//-----
class Knight extends Character {
    constructor(name, charClass, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionCount) {
        super(name, charClass, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionCount)
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

const valeChar = new Knight("Vale", "Knight", 20, 20, 3, 1, 0, 12, valeGreatsword, plateArmor, `Tank`, "./assets/vale-static.png", './assets/vale-attack.png', 2, 1)

//--------

class Rogue extends Character {
    constructor(name, charClass, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionCount) {
        super(name, charClass, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionCount)
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
    "./assets/slick-static.png", "./assets/slick-attack.png", 3, 1)

const characterRoster = [valeChar, slickChar]

export { characterRoster }
