import { characterRoster } from './constructors/character.js';
import { attackBtn1, attackBtn2, specialBtn1 } from './combatFlow.js';

//------------------------------------------

const playBtn = document.getElementById('play-btn')
const townBtn = document.getElementById('to-town-btn')

const charGold = document.getElementById('char-gold')
const charHpDiv = document.getElementById("char-hp-div")
const charStrDiv = document.getElementById('char-str-div')
const charArmorRating = document.getElementById('armor-rating')
const charHitDiv = document.getElementById('char-hit-div')
const charSpecial = document.getElementById('char-special-div')


const arenaHeroAvatar = document.getElementById('arena-hero-avatar')
const arenaHeroAttack = document.getElementById('arena-hero-attack')

const arenaMonsterAvatar = document.getElementById('arena-monster-avatar')
const arenaMonsterAttack = document.getElementById('arena-monster-attack')

let chosenCharacter = {};
const selectCharacter = function (event) {

    for (let i = 0; i < characterRoster.length; i++) {
        if (event.target.matches(`#${characterRoster[i].name}`)) {
            chosenCharacter = characterRoster[i]
            console.log(chosenCharacter)
            localStorage.setItem('thisCharacter', JSON.stringify(chosenCharacter.name))
        }
    }
    const charNameDiv = document.getElementById("char-name")
    charNameDiv.textContent = `${chosenCharacter.name}`

    const charImgDiv = document.getElementById("character-img-div")
    charImgDiv.setAttribute("src", chosenCharacter.img)

    const charContainer = document.getElementById('char-container')
    charContainer.style.display = 'flex'

    const charClassDiv = document.getElementById("char-class-div")
    charClassDiv.textContent = `${chosenCharacter.charClass}`
    charHpDiv.textContent = `${chosenCharacter.currentHp}`

    charStrDiv.textContent = `${chosenCharacter.strength}`
    const charDexDiv = document.getElementById('char-dex-div')
    charDexDiv.textContent = `${chosenCharacter.dexterity}`
    const charWisDiv = document.getElementById('char-wis-div')
    charWisDiv.textContent = `${chosenCharacter.wisdom}`

    charHitDiv.textContent = `${chosenCharacter.hitChanceRate}`
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

    playBtn.style.display = 'flex'
    townBtn.style.display = 'flex'


    attackBtn1.textContent = chosenCharacter.weapon.attack1;
    attackBtn2.textContent = chosenCharacter.weapon.attack2;
    specialBtn1.textContent = chosenCharacter.special

    const chosenCharacterSaveData = JSON.parse(localStorage.getItem(chosenCharacter.name))
    console.log(chosenCharacterSaveData)


    if (!chosenCharacterSaveData) {
        chosenCharacter.gold = 0
    } else { chosenCharacter.gold = chosenCharacterSaveData.gold }
    charGold.textContent = chosenCharacter.gold
    return chosenCharacter;
};

// ------------------------------------


//-------------------------------------------

export default {chosenCharacter}
export {  chosenCharacter, selectCharacter, playBtn, townBtn, charHpDiv, charArmorRating, charHitDiv, charSpecial, arenaHeroAttack, arenaHeroAvatar, arenaMonsterAttack, arenaMonsterAvatar, charGold }