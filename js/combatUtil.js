import { attackBtn1, attackBtn2, monsterHpBar, heroMoveCounter } from "./main.js"
import { heroMoveNum } from "./constructors/weapons.js"
import { undead } from "./constructors/monster.js"
import { monsterDmgImg } from "./docElements.js"


const monsterMoveCounter = document.getElementById('monster-move-counter')
monsterMoveCounter.setAttribute('class', 'move-counter')
monsterMoveCounter.setAttribute('id', 'monster-move-counter')
monsterMoveCounter.textContent = 1

function hideBtnsCPUTurn() {
    attackBtn1.style.display = 'none'
    attackBtn2.style.display = 'none'
}

function cpuPause() {
    if (heroMoveNum < 1) {
        setTimeout(hideBtnsCPUTurn, 0)
        setTimeout(changeTurn1, 1500)
    }
}

function changeTurn1() {
    const monHpNum = parseInt(monsterHpBar.textContent)
    if ((heroMoveNum < 1) && (monHpNum > 0)) {
        monsterMoveCounter.textContent = 1
        if (monHpNum < 1) {
            return
        } else {
            console.log(monHpNum)
            undead.attack1()
        }

    } else { return }
}

function changeTurn2() {
    if (monsterMoveCounter.textContent < 1) {
        heroMoveCounter.textContent = 2
        attackBtn1.style.display = 'block'
        attackBtn2.style.display = 'block'
    }
}

//Set move counter to designate when turn ends. Decriment each time button is clicked by player
//Turn ends when move counter hits zero
//set button display to none 
//setTimeout on CPU move//use while loop on monster attacks to loop until movepoints=0
//After CPU move, set player move counter back to character default value.
//Set button display to flex... or block... not sure yet.

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


export { heroMoveCounter, monsterMoveCounter, changeTurn1, changeTurn2, cpuPause, dmgAnimation, dmgSlashAppear, dmgSlashDisappear }