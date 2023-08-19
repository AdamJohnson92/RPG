import { attackBtn1, attackBtn2, monsterHpBar } from "./main.js"
import { heroStaminaNum } from "./constructors/weapons.js"
import { undead } from "./constructors/monster.js"
import { monsterDmgImg, heroDmgImg } from "./docElements.js"

let heroStaminaCounter = document.getElementById('hero-stamina-counter')
heroStaminaCounter.setAttribute('class', 'stamina-counter')
heroStaminaCounter.setAttribute('id', 'hero-stamina-counter')

heroStaminaCounter.textContent = 2

const monsterStaminaCounter = document.getElementById('monster-stamina-counter')
monsterStaminaCounter.setAttribute('class', 'stamina-counter')
monsterStaminaCounter.setAttribute('id', 'monster-stamina-counter')
monsterStaminaCounter.textContent = 1

function hideBtnsCPUTurn() {
    attackBtn1.style.display = 'none'
    attackBtn2.style.display = 'none'
}

function cpuPause() {
    if (heroStaminaNum < 1) {
        setTimeout(hideBtnsCPUTurn, 0)
        setTimeout(changeTurn1, 1500)
    }
}

function changeTurn1() {
    const monHpNum = parseInt(monsterHpBar.textContent)
    if ((heroStaminaNum < 1) && (monHpNum > 0)) {
        monsterStaminaCounter.textContent = 1
        if (monHpNum < 1) {
            return
        } else {
            console.log(monHpNum)
            undead.attack1()
        }

    } else { return }
}

function changeTurn2() {
    if (monsterStaminaCounter.textContent < 1) {
        heroStaminaCounter.textContent = 2
        attackBtn1.style.display = 'block'
        attackBtn2.style.display = 'block'
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