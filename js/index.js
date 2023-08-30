import { characterRoster } from './constructors/character.js';
import { monsterRoster } from './constructors/monster.js';
import { clearBuffDisplay, showCombatBtns, changePotionMeter, heroHealthJuice, monsterHealthJuice, heroStamJuice, monsterStamJuice, changeHeroStaminaBar, changeMonsterStaminaBar } from './combatUtil.js';
import { isHeroTurn, turnBannerChange, playAgainBtn, heroStaminaCounter, monsterStaminaCounter } from './combatFlow.js'

import { chosenCharacter, selectCharacter, playBtn, charHpDiv, arenaHeroAttack, arenaHeroAvatar, arenaMonsterAttack, arenaMonsterAvatar } from './playerCharacter.js';

//-----------------------------------------------------
const charSelectionDiv = document.getElementById('character-selection-div')

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

const combatDiv = document.getElementById('combat-div')
const combatLog = document.getElementById('combat-log')

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

    heroHealthJuice.style.width = '100%'
    monsterHealthJuice.style.width = '100%'

    heroStaminaCounter.textContent = chosenCharacter.staminaPoints
    changeHeroStaminaBar(chosenCharacter.staminaPoints, heroStaminaCounter.textContent)

    changePotionMeter(chosenCharacter.potionMax, chosenCharacter.potionCount)

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
    playAgainBtn.style.display = 'none'
    showCombatBtns()
    charSelectionDiv.style.display = 'flex'

}

playBtn.addEventListener('click', playGame)
playAgainBtn.addEventListener('click', renderCharSelectionDiv)

//------------------------------

generateCharBtns()

//---------------------------------------------

export {  monster }

