import { characterRoster } from './character.js';
import { valeGreatsword, slickDoubleDaggers } from './weapons.js';
import { charContainer, charCard, charAvatar, charNameDiv, charClassDiv, charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charSpecial, equipCard, charWeaponName, charWeaponType, charWeaponWeight, charWeaponAttack1, charWeaponAttack2, charArmorName, charArmorClass, charArmorWeight, charArmorRating, charImgDiv, playBtn, charSelectionDiv, combatDiv, combatLog } from './docElements.js';

const arenaHeroAvatar = document.getElementById('arena-hero-avatar')

//--------------------------------------------------------------
let chosenCharacter;
function selectCharacter(event) {

    

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
    arenaHeroAvatar.setAttribute("src", chosenCharacter.img)

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

    attackBtn1.textContent = chosenCharacter.weapon.attack1
    attackBtn2.textContent = chosenCharacter.weapon.attack2
};

// ------------------------------------

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

//-------------------------------------------

let targetHit ;
function playGame() {
    charSelectionDiv.style.display = 'none'
    combatDiv.style.display = 'flex'
    targetHit = 7
    
}

playBtn.addEventListener('click', playGame)

//------------------------------


//must add stat modifiers and targets
function attackRoll1(){
    chosenCharacter.weapon.attackDam1(targetHit, chosenCharacter.weapon.modifyingStat)
}

//must add stat modifiers and targets
function attackRoll2(){
    chosenCharacter.weapon.attackDam2(targetHit, chosenCharacter.weapon.modifyingStat)
}

const attackBtn1 = document.getElementById('attack-1')
const attackBtn2 = document.getElementById('attack-2')

attackBtn1.addEventListener('click', attackRoll1)
attackBtn2.addEventListener('click', attackRoll2)

generateCharBtns()


export { charStrDiv, charDexDiv, charWisDiv, charHitDiv, charArmorRating, combatLog }
