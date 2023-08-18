import { attackBtn1, attackBtn2 } from "./main.js"

const heroMoveCounter = document.getElementById('hero-move-counter')
heroMoveCounter.setAttribute('class', 'move-counter')
heroMoveCounter.setAttribute('id', 'hero-move-counter')

heroMoveCounter.textContent = 2

const monsterMoveCounter = document.getElementById('monster-move-counter')
monsterMoveCounter.setAttribute('class', 'move-counter')
monsterMoveCounter.setAttribute('id', 'monster-move-counter')
monsterMoveCounter.textContent = 1

console.log(heroMoveCounter)

function changeTurn1() {
    if (heroMoveCounter.textContent < 1) {
        attackBtn1.style.display = 'none'
        attackBtn2.style.display = 'none'
    } else {return}
}

//Set move counter to designate when turn ends. Decriment each time button is clicked by player
//Turn ends when move counter hits zero
//set button display to none 
//setTimeout on CPU move//use while loop on monster attacks to loop until movepoints=0
//After CPU move, set player move counter back to character default value.
//Set button display to flex... or block... not sure yet.

//NOTE TO SELF: MUST MAKE EACH CHARACTER HAVE DIFFERENT MOVE POINT VALUES




export { heroMoveCounter, monsterMoveCounter, changeTurn1 }