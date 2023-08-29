import { characterRoster } from './constructors/character.js';
import {  charHpDiv,  charGold, playBtn, playAgainBtn, charSelectionDiv, combatDiv, combatLog, heroStaminaCounter, turnDisplay, monsterStaminaCounter, heroHealthJuice, monsterHealthJuice, heroStamJuice, monsterStamJuice, arenaHeroAvatar, arenaHeroAttack, arenaMonsterAvatar, arenaMonsterAttack } from './docElements.js';
import { monsterRoster } from './constructors/monster.js';
import { isHeroTurn, turnBannerChange, clearBuffDisplay, attackAnimation, damageMonsterHealthBar, changePotionMeter, hideCombatBtns, showCombatBtns } from './combatUtil.js';

import { chosenCharacter, selectCharacter } from './playerCharacter.js';

//--------------------------------------------------------------


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
    // return monsterRoster[0]
    return randomMonster;
}

function playGame() {
    charSelectionDiv.style.display = 'none'
    combatDiv.style.display = 'flex'

    monster = generateMonster()
    arenaHeroAvatar.setAttribute("src", chosenCharacter.img)
    arenaHeroAttack.setAttribute('src', chosenCharacter.attackImg)
    arenaMonsterAvatar.setAttribute("src", monster.img)
    arenaMonsterAttack.setAttribute('src', monster.attackImg)

    monster.currentHp = monster.maxHp
    chosenCharacter.currentHp = chosenCharacter.maxHp
    charHpDiv.textContent = `${chosenCharacter.maxHp}`

    heroStaminaCounter.textContent = chosenCharacter.staminaPoints
    changeHeroStaminaBar(chosenCharacter.staminaPoints, heroStaminaCounter.textContent)

    monsterStaminaCounter.textContent = monster.staminaPoints
    changeMonsterStaminaBar(monster.staminaPoints, monsterStaminaCounter.textContent)

    turnBannerChange(isHeroTurn)
    combatLog.textContent = 'Begin!'
}

function renderCharSelectionDiv() {
    clearBuffDisplay()
    combatDiv.style.display = 'none'
    arenaMonsterAvatar.style.display = 'flex'
    arenaHeroAvatar.style.display = 'flex'
    heroHealthJuice.style.width = '100%'
    monsterHealthJuice.style.width = '100%'
    playAgainBtn.style.display = 'none'
    showCombatBtns()
    charSelectionDiv.style.display = 'flex'
    potionsLeft = chosenCharacter.potionCount
    changePotionMeter(chosenCharacter.potionCount, potionsLeft)
}

playBtn.addEventListener('click', playGame)
playAgainBtn.addEventListener('click', renderCharSelectionDiv)

//------------------------------

function winner() {
    combatLog.textContent = `You have slain the ${monster.name}!`
    hideCombatBtns()
    arenaMonsterAvatar.style.display = 'none'

    playAgainBtn.style.display = 'block'
    turnDisplay.textContent = 'You Win!'
    turnDisplay.style.backgroundColor = 'var(--gold)'
    chosenCharacter.gold = chosenCharacter.gold + 100
    localStorage.setItem(chosenCharacter.name, JSON.stringify(chosenCharacter))
    charGold.textContent = chosenCharacter.gold
}

function loser() {
    combatLog.textContent = `You Died!`
    hideCombatBtns()
    arenaHeroAvatar.style.display = 'none'
    heroStaminaCounter.textContent = ' '
    playAgainBtn.style.display = 'block'
    turnDisplay.textContent = 'You Died'
    turnDisplay.style.backgroundColor = 'var(--red)'
}

function attackRoll(event) {

    attackAnimation(isHeroTurn)

    heroStaminaCounter.textContent--
    changeHeroStaminaBar(chosenCharacter.staminaPoints, heroStaminaCounter.textContent)

    if (event.target === attackBtn1) {
        monster.currentHp = chosenCharacter.weapon.attackDam1(monster.hitChanceRate, monster.currentHp, chosenCharacter.weapon.modifyingStat)
    } else if (event.target === attackBtn2) {
        monster.currentHp = chosenCharacter.weapon.attackDam2(monster.hitChanceRate, monster.currentHp, chosenCharacter.weapon.modifyingStat)
    }

    damageMonsterHealthBar(monster.maxHp, monster.currentHp)

    if (monster.currentHp < 1) {
        winner()
    }
    if ((heroStaminaCounter.textContent < 1) && (monster.currentHp > 0)) {
        monsterStaminaCounter.textContent = 1
        changeMonsterStaminaBar(monster.staminaPoints, monsterStaminaCounter.textContent)

        turnBannerChange()
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
    }
}

let potionsLeft;
function drinkPotion() {
    if (potionsLeft < 1) {
        combatLog.textContent = 'You are all out of potions!'
    } else {
        heroStaminaCounter.textContent--
        changeHeroStaminaBar(chosenCharacter.staminaPoints, heroStaminaCounter.textContent)

        chosenCharacter.takePotion()
        potionsLeft--
        changePotionMeter(chosenCharacter.potionCount, potionsLeft)
        
        if (heroStaminaCounter.textContent < 1) {
            monsterStaminaCounter.textContent = monster.staminaPoints
            changeMonsterStaminaBar(monster.staminaPoints, monsterStaminaCounter.textContent)
            let isHeroTurn = false
            turnBannerChange(isHeroTurn)
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

