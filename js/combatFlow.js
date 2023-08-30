import { attackAnimation, changeHeroStaminaBar, changeMonsterStaminaBar, damageHeroHealthBar, damageMonsterHealthBar, changePotionMeter, showCombatBtns, hideCombatBtns } from "./combatUtil.js"
import { heroStaminaCounter, monsterStaminaCounter, combatLog, arenaMonsterAvatar, arenaHeroAvatar, playAgainBtn, turnDisplay, charGold, heroHealthJuice, monsterHealthJuice } from "./docElements.js"
import { chosenCharacter } from "./playerCharacter.js"
import { monster } from "./index.js"

function winner() {
    combatLog.textContent = `You have slain the ${monster.name}!`
    hideCombatBtns()
    arenaMonsterAvatar.style.display = 'none'

    playAgainBtn.style.display = 'block'
    turnDisplay.textContent = 'You Win!'
    turnDisplay.style.backgroundColor = 'var(--gold)'
    chosenCharacter.gold = chosenCharacter.gold + 100
    chosenCharacter.potionCount = chosenCharacter.potionMax
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
    chosenCharacter.potionCount = chosenCharacter.potionMax

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
    console.log(chosenCharacter)

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

function drinkPotion() {
    console.log(chosenCharacter)
    if (chosenCharacter.potionCount < 1) {
        combatLog.textContent = 'You are all out of potions!'
    } else {
        heroStaminaCounter.textContent--
        changeHeroStaminaBar(chosenCharacter.staminaPoints, heroStaminaCounter.textContent)

        console.log(chosenCharacter.potionCount)

        chosenCharacter.takePotion()
        chosenCharacter.potionCount--
        console.log(chosenCharacter.potionCount)
        changePotionMeter(chosenCharacter.potionMax, chosenCharacter.potionCount)
        
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

let isHeroTurn = true
function turnBannerChange(playerTurn) {
    if (playerTurn) {
        turnDisplay.style.backgroundColor = 'var(--green)'
        turnDisplay.textContent = 'Your Turn'
        showCombatBtns()
        chosenCharacter.undo1()
    } else {
        turnDisplay.style.backgroundColor = 'var(--red)'
        turnDisplay.textContent = "Enemy's Turn"
        hideCombatBtns()
        cpuPause()
    }
}

function cpuPause() {
    setTimeout(changeTurn1, 2000)
}

function cpuPause2() {
    setTimeout(changeTurn2, 2000)
}

function changeTurn1() {
    monsterStaminaCounter.textContent--
    changeMonsterStaminaBar(monster.staminaPoints, monsterStaminaCounter.textContent)
    attackAnimation()
    chosenCharacter.currentHp = monster.attack1(chosenCharacter.hitChanceRate, chosenCharacter.currentHp, chosenCharacter.armor.armorRating)

    damageHeroHealthBar(chosenCharacter.maxHp, chosenCharacter.currentHp)
    cpuPause2()
    return chosenCharacter.currentHp;

}

function changeTurn2() {
    if ((monsterStaminaCounter.textContent < 1) && (chosenCharacter.currentHp > 0)) {
        turnBannerChange(isHeroTurn)
        heroStaminaCounter.textContent = chosenCharacter.staminaPoints
        changeHeroStaminaBar(chosenCharacter.staminaPoints, heroStaminaCounter.textContent)

    }
}

export { attackBtn1, attackBtn2, specialBtn1, loser, potionBtn, changeTurn2, isHeroTurn, turnBannerChange }