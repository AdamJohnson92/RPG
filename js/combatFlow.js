import { arenaHeroAttack, arenaHeroAvatar, arenaMonsterAvatar, arenaMonsterAttack } from "./docElements"

import { changeHeroStaminaBar, changeMonsterStaminaBar, changePotionMeter } from "./combatUtil"

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

export { attackBtn1, attackBtn2, specialBtn1, loser,  arenaHeroAvatar, arenaHeroAttack, arenaMonsterAvatar, arenaMonsterAttack, changeHeroStaminaBar, changeMonsterStaminaBar, potionBtn }