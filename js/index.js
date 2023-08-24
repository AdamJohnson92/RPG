import { characterRoster } from './constructors/character.js';
import { charContainer, charNameDiv, charClassDiv, charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charSpecial, charWeaponName, charWeaponType, charWeaponWeight, charWeaponAttack1, charWeaponAttack2, charArmorName, charArmorClass, charArmorWeight, charArmorRating, charImgDiv, playBtn, playAgainBtn, charSelectionDiv, combatDiv, combatLog, heroStaminaCounter, turnDisplay, monsterStaminaCounter, heroHealthJuice, monsterHealthJuice, heroStamJuice, monsterStamJuice, arenaHeroAvatar, arenaHeroAttack, arenaMonsterAvatar, arenaMonsterAttack } from './docElements.js';
import { monsterRoster } from './constructors/monster.js';
import { cpuPause, isHeroTurn, turnBannerChange, clearBuffDisplay, heroAttackAnimation, damageMonsterHealthBar } from './combatUtil.js';

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
    charArmorClass.textContent = `Armor Class: ${chosenCharacter.armor.armorClass}`
    charArmorWeight.textContent = `Weight: ${chosenCharacter.armor.weight}`
    charArmorRating.textContent = `Damage Reduction: ${chosenCharacter.armor.armorRating}`

    playBtn.style.display = 'block'

    attackBtn1.textContent = chosenCharacter.weapon.attack1;
    attackBtn2.textContent = chosenCharacter.weapon.attack2;
    specialBtn1.textContent = chosenCharacter.special
    potionsLeft = chosenCharacter.potionCount
console.log(potionsLeft)
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
let monster = {};
const generateMonster = function () {
    const randomMonster = monsterRoster[Math.floor(Math.random() * monsterRoster.length)]
    //for testing against goblin
    return monsterRoster[0]
    // return randomMonster;
}

function playGame() {
    charSelectionDiv.style.display = 'none'
    combatDiv.style.display = 'flex'
    combatLog.textContent = 'Begin!'
    monster = generateMonster()
    arenaHeroAvatar.setAttribute("src", chosenCharacter.img)
    arenaHeroAttack.setAttribute('src', chosenCharacter.attackImg)
    arenaMonsterAvatar.setAttribute("src", monster.img)
    arenaMonsterAttack.setAttribute('src', monster.attackImg)
    monster.currentHp = monster.maxHp
    chosenCharacter.currentHp = chosenCharacter.maxHp
    charHpDiv.textContent = `Hitpoints: ${chosenCharacter.maxHp}`
    console.log(monster)
    heroStaminaCounter.textContent = chosenCharacter.staminaPoints
    changeHeroStaminaBar(chosenCharacter.staminaPoints, heroStaminaCounter.textContent)
    
    monsterStaminaCounter.textContent = monster.staminaPoints
    changeMonsterStaminaBar(monster.staminaPoints, monsterStaminaCounter.textContent)
    turnDisplay.textContent = 'Your Turn'
    turnBannerChange(isHeroTurn)
}

function renderCharSelectionDiv() {
    clearBuffDisplay()
    //Sets everything within the 
    combatDiv.style.display = 'none'
    arenaMonsterAvatar.style.display = 'flex'
    arenaHeroAvatar.style.display = 'flex'
    heroHealthJuice.style.width = '100%'
    monsterHealthJuice.style.width = '100%'
    playAgainBtn.style.display = 'none'
    attackBtn1.style.display = 'block'
    attackBtn2.style.display = 'block'
    specialBtn1.style.display = 'block'
    potionBtn.style.display = 'block'
    charSelectionDiv.style.display = 'flex'
    potionsLeft = chosenCharacter.potionCount
}

playBtn.addEventListener('click', playGame)
playAgainBtn.addEventListener('click', renderCharSelectionDiv)

//------------------------------

function winner() {
    combatLog.textContent = `You have slain the ${monster.name}!`
    attackBtn1.style.display = 'none'
    attackBtn2.style.display = 'none'
    specialBtn1.style.display = 'none'
    potionBtn.style.display = 'none'
    arenaMonsterAvatar.style.display = 'none'

    playAgainBtn.style.display = 'block'
    turnDisplay.textContent = 'You Win!'
    turnDisplay.style.backgroundColor = 'var(--gold)'
}

function loser() {
    console.log('you died!')
    combatLog.textContent = `You Died!`
    attackBtn1.style.display = 'none'
    attackBtn2.style.display = 'none'
    specialBtn1.style.display = 'none'
    potionBtn.style.display = 'none'
    arenaHeroAvatar.style.display = 'none'
    heroStaminaCounter.textContent = ' '
    playAgainBtn.style.display = 'block'
    turnDisplay.textContent = 'You Died'
    turnDisplay.style.backgroundColor = 'var(--red)'
}

function attackRoll(event) {

    heroAttackAnimation()

    heroStaminaCounter.textContent--
    changeHeroStaminaBar(chosenCharacter.staminaPoints, heroStaminaCounter.textContent)

    if (event.target === attackBtn1) {
        console.log('this is attack 1')
        monster.currentHp = chosenCharacter.weapon.attackDam1(monster.hitChanceRate, monster.currentHp, chosenCharacter.weapon.modifyingStat)
    } else if (event.target === attackBtn2) {
        console.log('this is attack 2')
        monster.currentHp = chosenCharacter.weapon.attackDam2(monster.hitChanceRate, monster.currentHp, chosenCharacter.weapon.modifyingStat)
    }

    damageMonsterHealthBar(monster.maxHp, monster.currentHp)

    if (monster.currentHp < 1) {
        winner()
    }
    if ((heroStaminaCounter.textContent < 1) && (monster.currentHp > 0)) {
        monsterStaminaCounter.textContent = 1
        changeMonsterStaminaBar(monster.staminaPoints, monsterStaminaCounter.textContent)

        let isHeroTurn = false
        turnBannerChange(isHeroTurn)
        cpuPause()
    }
}

function special1() {

    heroStaminaCounter.textContent--
    changeHeroStaminaBar(chosenCharacter.staminaPoints, heroStaminaCounter.textContent)

    chosenCharacter.special1()

    if (heroStaminaCounter.textContent < 1) {
        monsterStaminaCounter.textContent = 1
        changeMonsterStaminaBar(monster.staminaPoints, monsterStaminaCounter.textContent)
        let isHeroTurn = false
        turnBannerChange(isHeroTurn)
        cpuPause()
    }
}

let potionsLeft; 
function drinkPotion() {
    if (potionsLeft < 1) {
        combatLog.textContent = 'You are all out of potions!'
    } else {
        heroStaminaCounter.textContent --
        changeHeroStaminaBar(chosenCharacter.staminaPoints, heroStaminaCounter.textContent)

        chosenCharacter.takePotion()

        console.log(potionsLeft)
        potionsLeft --
        console.log(potionsLeft)

        if (heroStaminaCounter.textContent < 1) {
            monsterStaminaCounter.textContent = 1
            changeMonsterStaminaBar(monster.staminaPoints, monsterStaminaCounter.textContent)
            let isHeroTurn = false
            turnBannerChange(isHeroTurn)
            cpuPause()
        }


    }
}


const attackBtn1 = document.getElementById('attack-1')
const attackBtn2 = document.getElementById('attack-2')
const specialBtn1 = document.getElementById('special-button-1')
const potionBtn = document.getElementById('potion-button')

attackBtn1.addEventListener('click', attackRoll)
attackBtn2.addEventListener('click', attackRoll)
specialBtn1.addEventListener('click', special1)
potionBtn.addEventListener('click', drinkPotion)

generateCharBtns()

//---------------------------------------------

function changeHeroStaminaBar(maxStam, currentStam) {
    heroStamJuice.style.width = `${(currentStam / maxStam * 100)}%`
}

function changeMonsterStaminaBar(maxStam, currentStam) {
    monsterStamJuice.style.width = `${(currentStam / maxStam * 100)}%`
}

export { attackBtn1, attackBtn2, specialBtn1, chosenCharacter, loser, monster, arenaHeroAvatar, arenaHeroAttack, arenaMonsterAvatar, arenaMonsterAttack, changeHeroStaminaBar, changeMonsterStaminaBar, potionBtn }

