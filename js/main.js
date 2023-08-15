import { valeChar, slickChar } from './character.js';

//--------------------------------------------------------------


const charContainer = document.getElementById('char-container')
charContainer.setAttribute("class", "container")
const charCard = document.createElement('div')
charCard.setAttribute("class", "container")
charCard.setAttribute('id', 'character-card')
charContainer.appendChild(charCard)
const charNameDiv = document.createElement('h2')
charNameDiv.textContent = `Name: ${valeChar.name}`
const charClassDiv = document.createElement('h3')
charClassDiv.textContent = `Class: ${valeChar.charClass}`
const charHpDiv = document.createElement('p')
charHpDiv.textContent = `Hitpoints: ${valeChar.hp}`
const charStrDiv = document.createElement('p')
charStrDiv.textContent = `Strength: ${valeChar.strength}`
const charDexDiv = document.createElement('p')
charDexDiv.textContent = `Dexterity: ${valeChar.dexterity}`
const charWisDiv = document.createElement('p')
charWisDiv.textContent = `Wisdom: ${valeChar.wisdom}`
const charHitDiv = document.createElement('p')
charHitDiv.textContent= `Hit Chance: ${valeChar.hitChanceRate}`
const charSpecial = document.createElement('p')
charSpecial.textContent = `Special Ability: ${valeChar.special}`

charCard.append(charNameDiv, charClassDiv, charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charSpecial)

const equipCard = document.createElement('div')
equipCard.setAttribute("class", "container")
equipCard.setAttribute('id', 'equipment-card')
charContainer.appendChild(equipCard)

const charWeaponName = document.createElement('h3')
charWeaponName.textContent = `Weapon: ${valeChar.weapon.name}`
const charWeaponType = document.createElement('p')
charWeaponType.textContent = `Weapon Type: ${valeChar.weapon.type}`
const charWeaponWeight = document.createElement('p')
charWeaponWeight.textContent = `Weight: ${valeChar.weapon.weight}`
const charWeaponAttack1 = document.createElement('p')
charWeaponAttack1.textContent = `Attack 1: ${valeChar.weapon.attack1}`
const charWeaponAttack2 = document.createElement('p')
charWeaponAttack2.textContent = `Attack 2: ${valeChar.weapon.attack2}`
const charArmorName = document.createElement('h3')
charArmorName.textContent = `Armor: ${valeChar.armor.name}`
const charArmorClass = document.createElement('p')
charArmorClass.textContent = `Armor Class: ${valeChar.armor.armorClass}`
const charArmorWeight = document.createElement('p')
charArmorWeight.textContent = `Weight: ${valeChar.armor.weight}`
const charArmorRating = document.createElement('p')
charArmorRating.textContent = `Damage Reduction: ${valeChar.armor.armorRating}`


equipCard.append(charWeaponName, charWeaponType, charWeaponWeight, charWeaponAttack1, charWeaponAttack2, charArmorName, charArmorClass, charArmorWeight, charArmorRating)

console.log(valeChar)
console.log(slickChar)


export {charStrDiv, charDexDiv, charWisDiv, charHitDiv, charArmorRating}
