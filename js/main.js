import { characterRoster } from './character.js';

//--------------------------------------------------------------

const charContainer = document.getElementById('char-container')
charContainer.setAttribute("class", "container")

const charCard = document.createElement('div')
charCard.setAttribute("class", "container")
charCard.setAttribute('id', 'character-card')

const charAvatar = document.createElement('div')
charAvatar.setAttribute('id', 'character-avatar-div')
const charNameDiv = document.createElement('h1')

const charClassDiv = document.createElement('h3')
const charHpDiv = document.createElement('p')
const charStrDiv = document.createElement('p')
const charDexDiv = document.createElement('p')
const charWisDiv = document.createElement('p')
const charHitDiv = document.createElement('p')
const charSpecial = document.createElement('p')

const equipCard = document.createElement('div')
equipCard.setAttribute("class", "container")
equipCard.setAttribute('id', 'equipment-card')

const charWeaponName = document.createElement('h3')
const charWeaponType = document.createElement('p')
const charWeaponWeight = document.createElement('p')
const charWeaponAttack1 = document.createElement('p')
const charWeaponAttack2 = document.createElement('p')

const charArmorName = document.createElement('h3')
const charArmorClass = document.createElement('p')
const charArmorWeight = document.createElement('p')
const charArmorRating = document.createElement('p')


const charImgDiv = document.createElement("img")
charImgDiv.setAttribute("id", "character-img-div")

charCard.append(charAvatar, charClassDiv, charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charSpecial)
equipCard.append(charWeaponName, charWeaponType, charWeaponWeight, charWeaponAttack1, charWeaponAttack2, charArmorName, charArmorClass, charArmorWeight, charArmorRating)

charContainer.append(charCard, equipCard)

charAvatar.append(charNameDiv, charImgDiv)

function selectCharacter(event) {


    let chosenCharacter;

    for(let i = 0; i < characterRoster.length; i ++) {
    if (event.target.matches('#Slick-play')) {
        chosenCharacter = characterRoster[1]
        console.log(chosenCharacter)
    } else if (event.target.matches('#Vale-play')) {
        chosenCharacter = characterRoster[0]
        console.log(chosenCharacter)
    }
}
    charNameDiv.textContent = `${chosenCharacter.name}`

    charAvatar.setAttribute('id', 'character-avatar-div')
    charImgDiv.setAttribute("src", chosenCharacter.img)

    charClassDiv.textContent = `Class: ${chosenCharacter.charClass}`
    charHpDiv.textContent = `Hitpoints: ${chosenCharacter.hp}`
    charStrDiv.textContent = `Strength: ${chosenCharacter.strength}`
    charDexDiv.textContent = `Dexterity: ${chosenCharacter.dexterity}`
    charWisDiv.textContent = `Wisdom: ${chosenCharacter.wisdom}`
    charHitDiv.textContent = `Hit Chance: ${chosenCharacter.hitChanceRate}`
    charSpecial.textContent = `Special Ability: ${chosenCharacter.special}`

    charWeaponName.textContent = `Weapon: ${chosenCharacter.weapon.name}`
    charWeaponType.textContent = `Weapon Type: ${chosenCharacter.weapon.type}`
    charWeaponWeight.textContent = `Weight: ${chosenCharacter.weapon.weight}`
    charWeaponAttack1.textContent = `Attack 1: ${chosenCharacter.weapon.attack1}`
    charWeaponAttack2.textContent = `Attack 2: ${chosenCharacter.weapon.attack2}`
    charArmorName.textContent = `Armor: ${chosenCharacter.armor.name}`
    charArmorClass.textContent = `Armor Class: ${chosenCharacter.armor.armorClass}`
    charArmorWeight.textContent = `Weight: ${chosenCharacter.armor.weight}`
    charArmorRating.textContent = `Damage Reduction: ${chosenCharacter.armor.armorRating}`

    charImgDiv.setAttribute("src", chosenCharacter.img)

    charCard.append(charAvatar, charClassDiv, charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charSpecial)
    equipCard.append(charWeaponName, charWeaponType, charWeaponWeight, charWeaponAttack1, charWeaponAttack2, charArmorName, charArmorClass, charArmorWeight, charArmorRating)

    charContainer.append(charCard, equipCard)
    charAvatar.append(charNameDiv, charImgDiv)

    charContainer.style.display = "flex"
   
}

function generateCharBtns() {
    const charSelectionDiv = document.getElementById('character-selection-div')
    for (let i = 0; i < characterRoster.length; i++) {
        const charBtn = document.createElement('button')
        charBtn.textContent = `${characterRoster[i].name} the ${characterRoster[i].charClass}`
        charBtn.setAttribute('class', 'btn character-btn')
        charBtn.setAttribute('id', `${characterRoster[i].name}-play` )
        charSelectionDiv.append(charBtn)
        charBtn.addEventListener('click', selectCharacter)
    }
}

generateCharBtns()

export { charStrDiv, charDexDiv, charWisDiv, charHitDiv, charArmorRating }
