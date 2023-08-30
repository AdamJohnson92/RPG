import { characterRoster } from './constructors/character.js';
import { charContainer,  playBtn, townBtn, charClassDiv, charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charSpecial, equipCard, charGold, charWeaponName, charWeaponType, charWeaponWeight, charWeaponAttack1, charWeaponAttack2, charArmorName, charArmorClass, charArmorWeight, charArmorRating } from './docElements.js';
import { attackBtn1, attackBtn2, specialBtn1 } from './combatFlow.js';

//------------------------------------------
let chosenCharacter = {};
const selectCharacter = function (event) {

    for (let i = 0; i < characterRoster.length; i++) {
        if (event.target.matches(`#${characterRoster[i].name}`)) {
            chosenCharacter = characterRoster[i]
            console.log(chosenCharacter)
        }
    }
    const charNameDiv = document.getElementById("char-name")
    charNameDiv.textContent = `${chosenCharacter.name}`

    const charImgDiv = document.getElementById("character-img-div")
    charImgDiv.setAttribute("src", chosenCharacter.img)

    charContainer.style.display = 'flex'

    charClassDiv.textContent = `${chosenCharacter.charClass}`
    charHpDiv.textContent = `${chosenCharacter.currentHp}`
    charStrDiv.textContent = `${chosenCharacter.strength}`
    charDexDiv.textContent = `${chosenCharacter.dexterity}`
    charWisDiv.textContent = `${chosenCharacter.wisdom}`
    charHitDiv.textContent = `${chosenCharacter.hitChanceRate}`
    charSpecial.textContent = `${chosenCharacter.special}`

    charWeaponName.textContent = `${chosenCharacter.weapon.name}`
    charWeaponType.textContent = `${chosenCharacter.weapon.type}`
    charWeaponWeight.textContent = `${chosenCharacter.weapon.weight}`
    charWeaponAttack1.textContent = `${chosenCharacter.weapon.attack1}`
    charWeaponAttack2.textContent = `${chosenCharacter.weapon.attack2}`

    charArmorName.textContent = `${chosenCharacter.armor.name}`
    charArmorClass.textContent = `${chosenCharacter.armor.armorClass}`
    charArmorWeight.textContent = `${chosenCharacter.armor.weight}`
    charArmorRating.textContent = `${chosenCharacter.armor.armorRating}`

    playBtn.style.display = 'block'
    townBtn.style.display = 'block'


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


export { chosenCharacter, selectCharacter }