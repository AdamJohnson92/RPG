//ARMOR CLASS CONSTRUCTORS
class Armor {
    constructor(name, armorClass, weight, armorRating) {
        this.name = name;
        this.armorClass = armorClass;
        this.weight = weight;
        this. armorRating = armorRating;
    }
}

const plateArmor = new Armor ("Plate Armor", "Heavy", 20, 2)
const leatherArmor = new Armor("Leather Armor", "Medium", 10, 1)

export {plateArmor, leatherArmor}