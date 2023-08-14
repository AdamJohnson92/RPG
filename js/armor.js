//ARMOR CLASS CONSTRUCTORS
class Armor {
    constructor(name, armorClass, weight, armorRating) {
        this.name = name;
        this.armorClass = armorClass;
        this.weight = weight;
        this. armorRating = armorRating;
    }
}

const plateArmor = new Armor ("Plate mail", "Heavy", 20, 3)
const leatherArmor = new Armor("Leather armor", "Medium", 10, 2)

export {plateArmor, leatherArmor}