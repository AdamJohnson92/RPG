//CHARACTER CLASS CONSTRUCTORS
class Monster {
    constructor(name, hp, hitChanceRate, img) {
        this.name = name;
        this.hp = hp;
        this.hitChanceRate = hitChanceRate
        this.img = img
    }
}

class Undead extends Monster {
    constructor(name, hp, hitChanceRate, img) {
        super(name, hp, hitChanceRate, img)
    }

    attack1(target) {
        const naturalRoll = Math.floor(Math.random() * (20 - 2) + 2)
        console.log(`The ${this.name} rolls ${naturalRoll}`)

        if (naturalRoll >= target) {
            const damage = Math.floor(Math.random() * (7 - 1) + 1);
            dmgAnimation()
            combatLog.textContent = `The ${this.name} hits you for ${damage} damage`
            return damage;
        } else {
            console.log(`The ${this.name} missed!`)
            combatLog.textContent = `The ${this.name} missed!`
            return;
        }
    }
}

const undead = new Undead ('Undead', 20, 10, './assets/undead-static.jpg')

export { undead }