import { attackBtn1, attackBtn2, specialBtn1, chosenCharacter, monster, monsterHpBar, heroHpBar } from "./index.js"
import { monsterRoster } from "./constructors/monster.js"
import { monsterDmgImg, heroDmgImg, heroStaminaCounter, monsterStaminaCounter, turnDisplay, charArmorRating, charHitDiv, charSpecial, monsterDmgImg2 } from "./docElements.js"

let isHeroTurn = true
function turnBannerChange(truthiness) {
    if (truthiness === true) {
        turnDisplay.style.backgroundColor = 'var(--green)'
        turnDisplay.textContent = 'Your Turn'
        attackBtn1.style.visibility = 'visible'
        attackBtn2.style.visibility = 'visible'
        specialBtn1.style.visibility = 'visible'
        chosenCharacter.undo1()
    } else {
        turnDisplay.style.backgroundColor = 'var(--red)'
        turnDisplay.textContent = "Enemy's Turn"
        attackBtn1.style.visibility = 'hidden'
        attackBtn2.style.visibility = 'hidden'
        specialBtn1.style.visibility = 'hidden'
    }

}

function cpuPause() {
    setTimeout(changeTurn1, 2000)
}

function changeTurn1() {
    if ((heroStaminaCounter.textContent < 1) && (monsterHpBar.textContent > 0)) {
        if (monsterHpBar.textContent < 1) {
            return
        } else {
            chosenCharacter.currentHp = monster.attack1(chosenCharacter.hitChanceRate, chosenCharacter.currentHp, chosenCharacter.armor.armorRating)
            heroHpBar.textContent = chosenCharacter.currentHp

            return chosenCharacter.currentHp;
        }

    } else { return }
}

function changeTurn2() {
    if ((monsterStaminaCounter.textContent < 1) && (heroHpBar.textContent > 0)) {
        isHeroTurn = true
        turnBannerChange(isHeroTurn)
        heroStaminaCounter.textContent = chosenCharacter.staminaPoints
    }
}

function buffDisplay(statDiv) {
    statDiv.style.backgroundColor = 'var(--gold)'
    statDiv.style.boxShadow = '0 0 7px 10px var(--gold)'
    charSpecial.style.backgroundColor = 'var(--gold)'
    charSpecial.style.boxShadow = '0 0 7px 10px var(--gold)'
}

function clearBuffDisplay() {
    charArmorRating.style.backgroundColor = 'transparent'
    charArmorRating.style.boxShadow = 'none'
    charHitDiv.style.backgroundColor = 'transparent'
    charHitDiv.style.boxShadow = 'none'
    charSpecial.style.backgroundColor = 'transparent'
    charSpecial.style.boxShadow = 'none'
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

/////MUST MAKE THIS MORE DRY????????? Second parameter that is only sent with the second attack

function dmgAnimation2(src) {
    dmgSlashAppear2(src);
    setTimeout(dmgSlashDisappear2, 500)
}
function dmgSlashAppear2(src) {
    monsterDmgImg2.setAttribute('src', src)
    monsterDmgImg2.style.display = 'block'
}

function dmgSlashDisappear2() {
    monsterDmgImg2.style.display = 'none'
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


export { changeTurn1, changeTurn2, cpuPause, dmgAnimation, dmgAnimation2, monDmgAnimation, isHeroTurn, turnBannerChange, buffDisplay, clearBuffDisplay }