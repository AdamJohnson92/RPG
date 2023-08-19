import { attackBtn1, attackBtn2, monsterHpBar, heroMoveCounter } from "./main.js"
import { undead } from "./constructors/monster.js"
import { monsterDmgImg } from "./docElements.js"


const monsterMoveCounter = document.getElementById('monster-move-counter')
monsterMoveCounter.setAttribute('class', 'move-counter')
monsterMoveCounter.setAttribute('id', 'monster-move-counter')
monsterMoveCounter.textContent = 1


function changeTurn1() {
    if ((heroMoveCounter.textContent < 1) && (monsterHpBar.textContent > 0)) {
        monsterMoveCounter.textContent = 1
        attackBtn1.style.display = 'none'
        attackBtn2.style.display = 'none'
        console.log(monsterHpBar)
        console.log(typeof monsterHpBar)
    if(monsterHpBar.textContent > 0){
    undead.attack1()}
    } else {return}
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

function dmgAnimation(src){
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


export { heroMoveCounter, monsterMoveCounter, changeTurn1, changeTurn2, dmgAnimation, dmgSlashAppear, dmgSlashDisappear }