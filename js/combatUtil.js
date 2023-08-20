import { attackBtn1, attackBtn2, specialBtn1, chosenCharacter, monsterHpBar, heroHpBar } from "./main.js"
import { heroStaminaNum } from "./constructors/weapons.js"
import { undead } from "./constructors/monster.js"
import { monsterDmgImg, heroDmgImg, heroStaminaCounter, monsterStaminaCounter } from "./docElements.js"

function hideBtnsCPUTurn() {
    console.log('is hideBtnsCPUTurn happening?')
    attackBtn1.style.display = 'none'
    attackBtn2.style.display = 'none'
    specialBtn1.style.display = 'none'
}

function cpuPause() {
    console.log('is cpuPause happening?')
    hideBtnsCPUTurn()
    setTimeout(changeTurn1, 1000)
}

function changeTurn1() {
    console.log('is changeTurn1 happening?')
    const monHpNum = parseInt(monsterHpBar.textContent)
    console.log(heroStaminaCounter.textContent)
    if ((heroStaminaCounter.textContent < 1) && (monHpNum > 0)) {
        console.log('what about this?')
        monsterStaminaCounter.textContent = 1
        if (monHpNum < 1) {
            return
        } else {
            const heroCombatHp = undead.attack1(chosenCharacter.hitChanceRate, chosenCharacter.currentHp, chosenCharacter.armor.armorRating)
            chosenCharacter.currentHp = heroCombatHp
            heroHpBar.textContent = heroCombatHp

            return heroCombatHp;
        }

    } else { return }
}

function changeTurn2() {
    console.log(heroHpBar.textContent)
    if ((monsterStaminaCounter.textContent < 1) && (heroHpBar.textContent > 0)) {
        heroStaminaCounter.textContent = chosenCharacter.staminaPoints
        attackBtn1.style.display = 'block'
        attackBtn2.style.display = 'block'
        specialBtn1.style.display = 'block'
    }

}

//NOTE TO SELF: MUST MAKE EACH CHARACTER HAVE DIFFERENT MOVE POINT VALUES

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


export { heroStaminaCounter, monsterStaminaCounter, changeTurn1, changeTurn2, cpuPause, dmgAnimation, monDmgAnimation }