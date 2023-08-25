// ATTACK ROLLS

function confidentRoll(){
    const confident = Math.floor(Math.random() * (20 - 5) + 5)
    return confident
}

function measuredRoll(){
    const measured = Math.floor(Math.random() * (20 - 3) + 3)
    return measured
}

function riskyRoll(){
    const risky = Math.floor(Math.random() * (18 - 2) + 2)
    return risky
}

//DAMAGE ROLLS

export {confidentRoll, measuredRoll, riskyRoll}