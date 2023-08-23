const charContainer = document.getElementById('char-container')
charContainer.setAttribute("class", "container")

const charCard = document.createElement('div')
charCard.setAttribute("class", "card")
charCard.setAttribute('id', 'character-card')

const charAvatar = document.createElement('div')
charAvatar.setAttribute('id', 'character-avatar-div')
const charNameDiv = document.createElement('h1')

const charClassDiv = document.createElement('h3')
const charHpDiv = document.createElement('p')
const charStrDiv = document.createElement('p')
const charDexDiv = document.createElement('p')
const charWisDiv = document.createElement('p')
const charHitDiv = document.createElement('p')
const charSpecial = document.createElement('p')

const equipCard = document.createElement('div')
equipCard.setAttribute("class", "card")
equipCard.setAttribute('id', 'equipment-card')

const charWeaponName = document.createElement('h3')
const charWeaponType = document.createElement('p')
const charWeaponWeight = document.createElement('p')
const charWeaponAttack1 = document.createElement('p')
const charWeaponAttack2 = document.createElement('p')

const charArmorName = document.createElement('h3')
const charArmorClass = document.createElement('p')
const charArmorWeight = document.createElement('p')
const charArmorRating = document.createElement('p')


const charImgDiv = document.createElement("img")
charImgDiv.setAttribute("id", "character-img-div")

charCard.append(charAvatar, charClassDiv, charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charSpecial)
equipCard.append(charWeaponName, charWeaponType, charWeaponWeight, charWeaponAttack1, charWeaponAttack2, charArmorName, charArmorClass, charArmorWeight, charArmorRating)

charContainer.append(charCard, equipCard)

charAvatar.append(charNameDiv, charImgDiv)

const playBtn = document.getElementById('play-btn')

const charSelectionDiv = document.getElementById('character-selection-div')

const arenaHeroAvatar = document.getElementById('arena-hero-avatar')
const arenaHeroAttack = document.getElementById('arena-hero-attack')

const arenaMonsterAvatar = document.getElementById('arena-monster-avatar')
const arenaMonsterAttack = document.getElementById('arena-monster-attack')

const monsterDmgImg = document.getElementById('monster-dmg')
const monsterDmgImg2 = document.getElementById('monster-dmg-2')
const heroDmgImg = document.getElementById('hero-dmg')
const combatDiv = document.getElementById('combat-div')
const combatLog = document.getElementById('combat-log')
const playAgainBtn = document.getElementById('play-again')

let heroStaminaCounter = document.getElementById('hero-stam-counter')
heroStaminaCounter.setAttribute('class', 'stamina-counter')
const heroStamJuice = document.getElementById('hero-stam-juice')


let turnDisplay = document.getElementById('turn-display')

const monsterStaminaCounter = document.getElementById('monster-stam-counter')
monsterStaminaCounter.setAttribute('class', 'stamina-counter')
const monsterStamJuice = document.getElementById('monster-stam-juice')

const heroHealthJuice = document.getElementById('hero-health-juice')
const monsterHealthJuice = document.getElementById('monster-health-juice')



export {charContainer, charCard, charAvatar, charNameDiv, charClassDiv, charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charSpecial, equipCard, charWeaponName, charWeaponType, charWeaponWeight, charWeaponAttack1, charWeaponAttack2, charArmorName, charArmorClass, charArmorWeight, charArmorRating, charImgDiv, playBtn, playAgainBtn, charSelectionDiv, combatDiv, combatLog,monsterDmgImg, monsterDmgImg2, heroDmgImg, heroHealthJuice, heroStaminaCounter, heroStamJuice,  turnDisplay, monsterHealthJuice, monsterStaminaCounter, monsterStamJuice, arenaHeroAvatar, arenaHeroAttack, arenaMonsterAvatar, arenaMonsterAttack}