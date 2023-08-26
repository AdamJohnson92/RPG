const charContainer = document.getElementById('char-container')
charContainer.setAttribute("class", "container")

const charCard = document.getElementById("character-card")

const charAvatar = document.getElementById('character-avatar-div')
const charNameDiv = document.getElementById("char-name")
const charImgDiv = document.getElementById("character-img-div")

const charClassDiv = document.getElementById("char-class-div")
const charHpDiv = document.getElementById("char-hp-div")
const charStrDiv = document.getElementById('char-str-div')
const charDexDiv = document.getElementById('char-dex-div')
const charWisDiv = document.getElementById('char-wis-div')
const charHitDiv = document.getElementById('char-hit-div')
const charSpecial = document.getElementById('char-special-div')

const equipCard = document.getElementById('equipment-card')

const charGold = document.getElementById('char-gold')
const charWeaponName = document.getElementById('weapon-name')
const charWeaponType = document.getElementById('weapon-type')
const charWeaponWeight = document.getElementById('weapon-weight')
const charWeaponAttack1 = document.getElementById('weapon-attack-1')
const charWeaponAttack2 = document.getElementById('weapon-attack-2')

const charArmorName = document.getElementById('armor-name')
const charArmorClass = document.getElementById('armor-class')
const charArmorWeight = document.getElementById('armor-weight')
const charArmorRating = document.getElementById('armor-rating')

const playBtn = document.getElementById('play-btn')

const charSelectionDiv = document.getElementById('character-selection-div')

const arenaHeroAvatar = document.getElementById('arena-hero-avatar')
const arenaHeroAttack = document.getElementById('arena-hero-attack')

const arenaMonsterAvatar = document.getElementById('arena-monster-avatar')
const arenaMonsterAttack = document.getElementById('arena-monster-attack')

const monsterDmgImg = document.getElementById('monster-dmg')
const monsterDmgImg2 = document.getElementById('monster-dmg-2')
const monsterDmgImg3 = document.getElementById('monster-dmg-3')
const heroDmgImg = document.getElementById('hero-dmg')
const combatDiv = document.getElementById('combat-div')
const combatLog = document.getElementById('combat-log')
const playAgainBtn = document.getElementById('play-again')

let heroStaminaCounter = document.getElementById('hero-stam-counter')
heroStaminaCounter.setAttribute('class', 'stamina-counter')

const heroStamJuice = document.getElementById('hero-stam-juice')
const potionJuice = document.getElementById('potion-juice')

let turnDisplay = document.getElementById('turn-display')

const monsterStaminaCounter = document.getElementById('monster-stam-counter')
monsterStaminaCounter.setAttribute('class', 'stamina-counter')
const monsterStamJuice = document.getElementById('monster-stam-juice')

const heroHealthJuice = document.getElementById('hero-health-juice')
const monsterHealthJuice = document.getElementById('monster-health-juice')



export {charContainer, charCard, charAvatar, charNameDiv, charClassDiv, charHpDiv, charStrDiv, charDexDiv, charWisDiv, charHitDiv, charSpecial, equipCard, charGold, charWeaponName, charWeaponType, charWeaponWeight, charWeaponAttack1, charWeaponAttack2, charArmorName, charArmorClass, charArmorWeight, charArmorRating, charImgDiv, playBtn, playAgainBtn, charSelectionDiv, combatDiv, combatLog,monsterDmgImg, monsterDmgImg2, monsterDmgImg3, heroDmgImg, heroHealthJuice, heroStaminaCounter, heroStamJuice, potionJuice,  turnDisplay, monsterHealthJuice, monsterStaminaCounter, monsterStamJuice, arenaHeroAvatar, arenaHeroAttack, arenaMonsterAvatar, arenaMonsterAttack}