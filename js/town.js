

const chosenCharacterName = JSON.parse(localStorage.getItem('thisCharacter'))
console.log(chosenCharacterName)

const chosenCharacter = JSON.parse(localStorage.getItem(chosenCharacterName))
console.log(chosenCharacter)


const charNameDiv = document.getElementById("char-name")
charNameDiv.textContent = `${chosenCharacter.name}`

const charImgDiv = document.getElementById("character-img-div")
charImgDiv.setAttribute("src", chosenCharacter.img)

const charContainer = document.getElementById('char-container')

const charClassDiv = document.getElementById("char-class-div")
charClassDiv.textContent = `${chosenCharacter.charClass}`
const charHpDiv = document.getElementById('char-hp-div')
charHpDiv.textContent = `${chosenCharacter.currentHp}`
const charStrDiv = document.getElementById('char-str-div')
charStrDiv.textContent = `${chosenCharacter.strength}`
const charDexDiv = document.getElementById('char-dex-div')
charDexDiv.textContent = `${chosenCharacter.dexterity}`
const charWisDiv = document.getElementById('char-wis-div')
charWisDiv.textContent = `${chosenCharacter.wisdom}`

const charHitDiv = document.getElementById('char-hit-div')
charHitDiv.textContent = `${chosenCharacter.hitChanceRate}`
const charSpecial = document.getElementById('char-special-div')
charSpecial.textContent = `${chosenCharacter.special}`

const charWeaponName = document.getElementById('weapon-name')
charWeaponName.textContent = `${chosenCharacter.weapon.name}`
const charWeaponType = document.getElementById('weapon-type')
charWeaponType.textContent = `${chosenCharacter.weapon.type}`
const charWeaponWeight = document.getElementById('weapon-weight')
charWeaponWeight.textContent = `${chosenCharacter.weapon.weight}`
const charWeaponAttack1 = document.getElementById('weapon-attack-1')
charWeaponAttack1.textContent = `${chosenCharacter.weapon.attack1}`
const charWeaponAttack2 = document.getElementById('weapon-attack-2')
charWeaponAttack2.textContent = `${chosenCharacter.weapon.attack2}`


const charArmorName = document.getElementById('armor-name')
charArmorName.textContent = `${chosenCharacter.armor.name}`
const charArmorClass = document.getElementById('armor-class')
charArmorClass.textContent = `${chosenCharacter.armor.armorClass}`
const charArmorWeight = document.getElementById('armor-weight')
charArmorWeight.textContent = `${chosenCharacter.armor.weight}`
const charArmorRating = document.getElementById('armor-rating')
charArmorRating.textContent = `${chosenCharacter.armor.armorRating}`

const charGold = document.getElementById('char-gold')
charGold.textContent = `${chosenCharacter.gold}`