import { chosenCharacter, monster, changeHeroStaminaBar, changeMonsterStaminaBar} from "./index.js"
import { monsterDmgImg, heroDmgImg, heroStaminaCounter, monsterStaminaCounter, turnDisplay, charArmorRating, charHitDiv, charSpecial, monsterDmgImg2, monsterDmgImg3, heroHealthJuice, monsterHealthJuice, potionJuice, arenaHeroAttack, arenaHeroAvatar, arenaMonsterAttack, arenaMonsterAvatar } from "./docElements.js"

import { attackBtn1, attackBtn2, specialBtn1, potionBtn } from "./combatFlow.js"



function hideCombatBtns() {
    attackBtn1.style.display = 'none'
    attackBtn2.style.display = 'none'
    specialBtn1.style.display = 'none'
    potionBtn.style.display = 'none'
}

function showCombatBtns() {
    attackBtn1.style.display = 'block'
    attackBtn2.style.display = 'block'
    specialBtn1.style.display = 'block'
    potionBtn.style.display = 'block'
}
//------------------------
//CONTROLLS WHOSE TURN IT IS
//---------------------

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
//------------------------------
//-----------------------------
function damageHeroHealthBar(maxHp, currentHp) {
    if (currentHp < 0) {
        heroHealthJuice.style.width = "0%"
    } else {
        heroHealthJuice.style.width = `${(currentHp / maxHp) * 100}%`
    }
}

function damageMonsterHealthBar(maxHp, currentHp) {
    if (currentHp < 0) {
        monsterHealthJuice.style.width = "0%"
    } else {
        monsterHealthJuice.style.width = `${(currentHp / maxHp) * 100}%`
    }
}

function changePotionMeter(maxPotion, currentPotion) {
    potionJuice.style.height = `${(currentPotion / maxPotion) * 100}%`
    if ((currentPotion / maxPotion) * 100 < 100) {
        potionJuice.style.borderRadius = '0px 0px 100px 100px'
    } else {
        potionJuice.style.borderRadius = '100px'
    }
}

////-----------------
//WHEN PLAYERS USE BUFFS
//------------------
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

//-------------------------------------------
//DAMAGE ANIMATIONS
//------------------------------
function dmgAnimation(src) {
    setTimeout(dmgSlashAppear, 10, src)
    setTimeout(dmgSlashDisappear, 300)
}
function dmgSlashAppear(src) {
    monsterDmgImg.setAttribute('src', src)
    monsterDmgImg.style.display = 'block'
}
function dmgSlashDisappear() {
    monsterDmgImg.style.display = 'none'
}
/////MUST MAKE THIS MORE DRY Second parameter that is only sent with the second attack

function dmgAnimation2(src) {
    setTimeout(dmgSlashAppear2, 301, src);
    setTimeout(dmgSlashDisappear2, 601)
}
function dmgSlashAppear2(src) {
    monsterDmgImg2.setAttribute('src', src)
    monsterDmgImg2.style.display = 'block'
}
function dmgSlashDisappear2() {
    monsterDmgImg2.style.display = 'none'
}
//-------------------------------------
function dmgAnimation3(src) {
    setTimeout(dmgSlashAppear3, 602, src);
    setTimeout(dmgSlashDisappear3, 902)
}
function dmgSlashAppear3(src) {
    monsterDmgImg3.setAttribute('src', src)
    monsterDmgImg3.style.display = 'block'
}
function dmgSlashDisappear3() {
    monsterDmgImg3.style.display = 'none'
}

//Damage animations for when monster attack
function monDmgAnimation(src) {
    monDmgSlashAppear(src);
    setTimeout(monDmgSlashDisappear, 300)
}
function monDmgSlashAppear(src) {
    heroDmgImg.setAttribute('src', src)
    heroDmgImg.style.display = 'block'
}

function monDmgSlashDisappear() {
    heroDmgImg.style.display = 'none'
}

//-----------------
//CHARACTER ATTACK ANIMATIONS
//------------------

function attackAnimation(playerTurn) {
    if (playerTurn) {
        heroAttackAppear()
        setTimeout(heroAttackDisappear, 500)
    } else {
        monsterAttackAppear()
        setTimeout(monsterAttackDisappear, 500)
    }

}
function heroAttackAppear() {
    arenaHeroAvatar.style.display = 'none'
    arenaHeroAttack.style.display = 'block'
}
function heroAttackDisappear() {
    arenaHeroAttack.style.display = 'none'
    arenaHeroAvatar.style.display = 'block'
}

function monsterAttackAppear() {
    arenaMonsterAvatar.style.display = 'none'
    arenaMonsterAttack.style.display = 'block'
}
function monsterAttackDisappear() {
    arenaMonsterAttack.style.display = 'none'
    arenaMonsterAvatar.style.display = 'block'
}


export { changeTurn1, changeTurn2, cpuPause, dmgAnimation, dmgAnimation2, dmgAnimation3, attackAnimation, monDmgAnimation, isHeroTurn, turnBannerChange, buffDisplay, clearBuffDisplay, damageMonsterHealthBar, heroHealthJuice, changePotionMeter, hideCombatBtns, showCombatBtns, changeHeroStaminaBar, changeMonsterStaminaBar }