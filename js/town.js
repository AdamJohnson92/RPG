import { chosenCharacter } from "./playerCharacter.js"
import {monster} from './index.js'

const chosenCharacterName = JSON.parse(localStorage.getItem('thisCharacter'))
console.log(chosenCharacterName)

const chosenCharacter2 = JSON.parse(localStorage.getItem(chosenCharacterName))
console.log(chosenCharacter2)


const charNameDiv = document.getElementById("char-name")
charNameDiv.textContent = `${chosenCharacter2.name}`

const charImgDiv = document.getElementById("character-img-div")
charImgDiv.setAttribute("src", chosenCharacter2.img)

const charContainer = document.getElementById('char-container')

const charClassDiv = document.getElementById("char-class-div")
charClassDiv.textContent = `${chosenCharacter2.charClass}`
const charHpDiv = document.getElementById('char-hp-div')
charHpDiv.textContent = `${chosenCharacter2.currentHp}`
const charStrDiv = document.getElementById('char-str-div')
charStrDiv.textContent = `${chosenCharacter2.strength}`
const charDexDiv = document.getElementById('char-dex-div')
charDexDiv.textContent = `${chosenCharacter2.dexterity}`
const charWisDiv = document.getElementById('char-wis-div')
charWisDiv.textContent = `${chosenCharacter2.wisdom}`

const charHitDiv = document.getElementById('char-hit-div')
charHitDiv.textContent = `${chosenCharacter2.hitChanceRate}`
const charSpecial = document.getElementById('char-special-div')
charSpecial.textContent = `${chosenCharacter2.special}`

const charWeaponName = document.getElementById('weapon-name')
charWeaponName.textContent = `${chosenCharacter2.weapon.name}`
const charWeaponType = document.getElementById('weapon-type')
charWeaponType.textContent = `${chosenCharacter2.weapon.type}`
const charWeaponWeight = document.getElementById('weapon-weight')
charWeaponWeight.textContent = `${chosenCharacter2.weapon.weight}`
const charWeaponAttack1 = document.getElementById('weapon-attack-1')
charWeaponAttack1.textContent = `${chosenCharacter2.weapon.attack1}`
const charWeaponAttack2 = document.getElementById('weapon-attack-2')
charWeaponAttack2.textContent = `${chosenCharacter2.weapon.attack2}`


const charArmorName = document.getElementById('armor-name')
charArmorName.textContent = `${chosenCharacter2.armor.name}`
const charArmorClass = document.getElementById('armor-class')
charArmorClass.textContent = `${chosenCharacter2.armor.armorClass}`
const charArmorWeight = document.getElementById('armor-weight')
charArmorWeight.textContent = `${chosenCharacter2.armor.weight}`
const charArmorRating = document.getElementById('armor-rating')
charArmorRating.textContent = `${chosenCharacter2.armor.armorRating}`

const charGold = document.getElementById('char-gold')
charGold.textContent = `${chosenCharacter2.gold}`