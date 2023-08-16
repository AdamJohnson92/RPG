import { characterRoster } from './character.js';
import { charContainer, charCard, charAvatar, charNameDiv, charClassDiv, charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charSpecial, equipCard, charWeaponName, charWeaponType, charWeaponWeight, charWeaponAttack1, charWeaponAttack2, charArmorName, charArmorClass, charArmorWeight, charArmorRating, charImgDiv } from './charCardElements.js';
const playBtn = document.getElementById('play-btn')
const charSelectionDiv = document.getElementById('character-selection-div')
const combatDiv = document.getElementById('combat-div')
//--------------------------------------------------------------

function selectCharacter(event) {

    let chosenCharacter;

    for (let i = 0; i < characterRoster.length; i++) {
        if (event.target.matches('#Slick-play')) {
            chosenCharacter = characterRoster[1]
            console.log(chosenCharacter)
        } else if (event.target.matches('#Vale-play')) {
            chosenCharacter = characterRoster[0]
            console.log(chosenCharacter)
        }
    }
    charNameDiv.textContent = `${chosenCharacter.name}`

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

    charContainer.style.display = 'flex'

    playBtn.style.display = 'block'
};
function generateCharBtns() {

    for (let i = 0; i < characterRoster.length; i++) {
        const charBtn = document.createElement('button')
        charBtn.textContent = `${characterRoster[i].name} the ${characterRoster[i].charClass}`
        charBtn.setAttribute('class', 'btn character-btn')
        charBtn.setAttribute('id', `${characterRoster[i].name}-play`)
        charSelectionDiv.append(charBtn)
        charBtn.addEventListener('click', selectCharacter)
    }
};

function playGame() {
    charSelectionDiv.style.display = 'none'
    combatDiv.style.display = 'flex'
}

playBtn.addEventListener('click', playGame)

function attackRoll(stat){
    const naturalRoll = Math.floor(Math.random() * (2 - 19) + 2)
    totalRoll = naturalRoll + stat
}

generateCharBtns()

export { charStrDiv, charDexDiv, charWisDiv, charHitDiv, charArmorRating }
