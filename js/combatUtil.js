import { attackBtn1, attackBtn2, specialBtn1, chosenCharacter, monsterHpBar, heroHpBar } from "./main.js"
import { undead, goblin } from "./constructors/monster.js"
import { monsterDmgImg, heroDmgImg, heroStaminaCounter, monsterStaminaCounter, turnDisplay } from "./docElements.js"

let isHeroTurn = true
function turnBannerChange(truthiness){
    if (truthiness === true) {
        turnDisplay.style.backgroundColor = 'var(--green)'
        turnDisplay.textContent = 'Your Turn'
    } else {
        turnDisplay.style.backgroundColor = 'var(--red)'
        turnDisplay.textContent = "Enemy's Turn"
    }
    
}

function hideBtnsCPUTurn() {
    attackBtn1.style.display = 'none'
    attackBtn2.style.display = 'none'
    specialBtn1.style.display = 'none'
}

function cpuPause() {
    console.log('is cpuPause happening?')
    hideBtnsCPUTurn()
    setTimeout(changeTurn1, 2000)
}

function changeTurn1() {
    const monHpNum = parseInt(monsterHpBar.textContent)
    if ((heroStaminaCounter.textContent < 1) && (monHpNum > 0)) {
        if (monHpNum < 1) {
            return
        } else {
            const heroCombatHp = goblin.attack1(chosenCharacter.hitChanceRate, chosenCharacter.currentHp, chosenCharacter.armor.armorRating)
            chosenCharacter.currentHp = heroCombatHp
            heroHpBar.textContent = heroCombatHp

            return heroCombatHp;
        }

    } else { return }
}

function changeTurn2() {
    console.log(heroHpBar.textContent)
    if ((monsterStaminaCounter.textContent < 1) && (heroHpBar.textContent > 0)) {
        isHeroTurn = true
        turnBannerChange(isHeroTurn)
        heroStaminaCounter.textContent = chosenCharacter.staminaPoints
        attackBtn1.style.display = 'block'
        attackBtn2.style.display = 'block'
        specialBtn1.style.display = 'block'
    }

}

function dmgAnimation(src) {
    dmgSlashAppear(src);
    setTimeout(dmgSlashDisappear, 500)
}
function dmgSlashAppear(src) {
    monsterDmgImg.setAttribute('src', src)
    monsterDmgImg.style.display = 'block'
}

function dmgSlashDisappear() {
    monsterDmgImg.style.display = 'none'
}

//--------
function monDmgAnimation(src) {
    monDmgSlashAppear(src);
    setTimeout(monDmgSlashDisappear, 500)
}
function monDmgSlashAppear(src) {
    heroDmgImg.setAttribute('src', src)
    heroDmgImg.style.display = 'block'
}

function monDmgSlashDisappear() {
    heroDmgImg.style.display = 'none'
}


export { changeTurn1, changeTurn2, cpuPause, dmgAnimation, monDmgAnimation, isHeroTurn, turnBannerChange }