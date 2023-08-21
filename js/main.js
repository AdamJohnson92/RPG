import { characterRoster } from './constructors/character.js';
import { charContainer, charNameDiv, charClassDiv, charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charSpecial, charWeaponName, charWeaponType, charWeaponWeight, charWeaponAttack1, charWeaponAttack2, charArmorName, charArmorClass, charArmorWeight, charArmorRating, charImgDiv, playBtn, playAgainBtn, charSelectionDiv, combatDiv, combatLog, heroStaminaCounter, turnDisplay,monsterStaminaCounter } from './docElements.js';
import { undead, goblin } from './constructors/monster.js';
import { cpuPause, isHeroTurn, turnBannerChange} from './combatUtil.js';

const arenaHeroAvatar = document.getElementById('arena-hero-avatar')
const arenaMonsterAvatar = document.getElementById('arena-monster-avatar')

let heroStaminaNum;

//--------------------------------------------------------------
let chosenCharacter = {};
const selectCharacter = function (event) {

    for (let i = 0; i < characterRoster.length; i++) {
        if (event.target.matches(`#${characterRoster[i].name}`)) {
            chosenCharacter = characterRoster[i]
            console.log(chosenCharacter)
        }

    }
    charNameDiv.textContent = `${chosenCharacter.name}`

    charImgDiv.setAttribute("src", chosenCharacter.img)
    arenaHeroAvatar.setAttribute("src", chosenCharacter.img)
    arenaMonsterAvatar.setAttribute("src", goblin.img)

    charClassDiv.textContent = `Class: ${chosenCharacter.charClass}`
    charHpDiv.textContent = `Hitpoints: ${chosenCharacter.currentHp}`
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

    attackBtn1.textContent = chosenCharacter.weapon.attack1;
    attackBtn2.textContent = chosenCharacter.weapon.attack2;
    specialBtn1.textContent = chosenCharacter.special
    return chosenCharacter;
};

// ------------------------------------

function generateCharBtns() {

    for (let i = 0; i < characterRoster.length; i++) {
        const charBtn = document.createElement('button')
        charBtn.textContent = `${characterRoster[i].name} the ${characterRoster[i].charClass}`
        charBtn.setAttribute('class', 'btn character-btn')
        charBtn.setAttribute('id', `${characterRoster[i].name}`)
        charSelectionDiv.append(charBtn)
        charBtn.addEventListener('click', selectCharacter)
    }
};

//-------------------------------------------
let monster;

const heroHpBar = document.getElementById('hero-hp-bar')
const monsterHpBar = document.getElementById('monster-hp-bar')

function playGame() {
    console.log(selectCharacter(event))
    charSelectionDiv.style.display = 'none'
    combatDiv.style.display = 'flex'
    combatLog.textContent = 'Begin!'
    monster = goblin
    monster.currentHp = monster.maxHp
    chosenCharacter.currentHp = chosenCharacter.maxHp
    console.log(monster)
    heroHpBar.textContent = chosenCharacter.currentHp;
    heroStaminaCounter.textContent = chosenCharacter.staminaPoints
    monsterHpBar.textContent = monster.currentHp;
    monsterStaminaCounter.textContent = monster.staminaPoints
    turnDisplay.textContent = 'Your Turn'
    turnBannerChange(isHeroTurn)
}

function renderCharSelectionDiv() {
    arenaMonsterAvatar.style.display = 'flex'
    monsterHpBar.style.display = 'flex'
    arenaHeroAvatar.style.display = 'flex'
    heroHpBar.style.display = 'flex'
    playAgainBtn.style.display = 'none'
    attackBtn1.style.display = 'block'
    attackBtn2.style.display = 'block'
    specialBtn1.style.display = 'block'
    charSelectionDiv.style.display = 'flex'
    combatDiv.style.display = 'none'
    // target.currentHp = target.maxHp
}

playBtn.addEventListener('click', playGame)
playAgainBtn.addEventListener('click', renderCharSelectionDiv)

//------------------------------

function winner() {
    combatLog.textContent = `You slayed the ${monster.name}!`
    attackBtn1.style.visibility = 'hidden'
        attackBtn2.style.visibility = 'hidden'
        specialBtn1.style.display='none'
    arenaMonsterAvatar.style.display = 'none'
    monsterHpBar.style.display = 'none'
    heroHpBar.style.display = 'none'
    monsterStaminaCounter.textContent = ''
    playAgainBtn.style.display = 'block'
    turnDisplay.textContent = 'You Win!'
    turnDisplay.style.backgroundColor = 'var(--gold)'
}

function loser() {
    console.log('you died!')
    combatLog.textContent = `You Died!`
    attackBtn1.style.visibility = 'hidden'
    attackBtn2.style.visibility = 'hidden'
    specialBtn1.style.display='none'
    arenaHeroAvatar.style.display = 'none'
    heroHpBar.style.display = 'none'
    heroStaminaCounter.textContent = ' '
    playAgainBtn.style.display = 'block'
    turnDisplay.textContent= 'You Died'
    turnDisplay.style.backgroundColor = 'var(--red)'
}

//must add stat modifiers
function attackRoll1() {

    heroStaminaNum = parseInt(heroStaminaCounter.textContent)
    heroStaminaNum--
    heroStaminaCounter.textContent = heroStaminaNum

    monster.currentHp = chosenCharacter.weapon.attackDam1(monster.hitChanceRate, monster.currentHp, chosenCharacter.weapon.modifyingStat)

    monsterHpBar.textContent =  monster.currentHp
    console.log(monster)
    
    if (monster.currentHp < 1) {
        winner()
    }
    if ((heroStaminaCounter.textContent < 1) && (monster.currentHp > 0)){
        monsterStaminaCounter.textContent = 1
        let isHeroTurn = false
        turnBannerChange(isHeroTurn)
        cpuPause()
    }
}

//must add stat modifiers
function attackRoll2() {

    heroStaminaNum = parseInt(heroStaminaCounter.textContent)
    heroStaminaNum--
    heroStaminaCounter.textContent = heroStaminaNum

    monster.currentHp = chosenCharacter.weapon.attackDam2(monster.hitChanceRate, monster.currentHp, chosenCharacter.weapon.modifyingStat)

    monsterHpBar.textContent =  monster.currentHp

    if (monster.currentHp < 1) {
        winner()
    }

    if (heroStaminaCounter.textContent < 1) {
        monsterStaminaCounter.textContent = 1
        let isHeroTurn = false
        turnBannerChange(isHeroTurn)
        cpuPause()
    }
};

function special1(){
    heroStaminaNum = parseInt(heroStaminaCounter.textContent)
    heroStaminaNum--
    heroStaminaCounter.textContent = heroStaminaNum

    chosenCharacter.special1()

    if (heroStaminaCounter.textContent < 1) {
        monsterStaminaCounter.textContent = 1
        let isHeroTurn = false
        turnBannerChange(isHeroTurn)
        cpuPause()
    }
}

const attackBtn1 = document.getElementById('attack-1')
const attackBtn2 = document.getElementById('attack-2')
const specialBtn1 = document.getElementById('special-button-1')

attackBtn1.addEventListener('click', attackRoll1)
attackBtn2.addEventListener('click', attackRoll2)
specialBtn1.addEventListener('click', special1)

generateCharBtns()

export { attackBtn1, attackBtn2, specialBtn1, monsterHpBar, heroHpBar, heroStaminaCounter, chosenCharacter, loser }

