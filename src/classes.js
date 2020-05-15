const random = require('./random-algorithm')
const namesDatabase = require('./names-database')

const Person = class Person {
    constructor() {
        this.nacionality = this.getNacionality(namesDatabase)
        this.name = `${this.getName(this.nacionality)} ${this.getSurname(this.nacionality)}`
        this.age = this.getAge()
    }
    getName(playerIsFrom) {
        return `${namesDatabase[playerIsFrom].names[random(namesDatabase[playerIsFrom].names.length)]}`
    }
    getSurname(playerIsFrom) {
        return `${namesDatabase[playerIsFrom].surnames[random(namesDatabase[playerIsFrom].surnames.length)]}`
    }
    getNacionality(namesDatabase) {
        const regions = Object.keys(namesDatabase)
        return regions[random(regions.length)]
    }
    getAge(ageBasis = 17) {
        const yearsRange = 20
        return random(yearsRange) + ageBasis
    }
}
const Player = class Player extends Person {
    constructor(skillTier, average, position) {
        super()
        this.skillClass = skillTier.substring(5)
        this.marketValue = this.setInitialValue(skillTier, average)
        this.getValue = function () {
            return Number(this.marketValue.substring(1))
        }
        this.wage = this.setInitialWage(this.getValue())
        this.role = position
        this.freeAgent = false
        this.condition = this.statsTemplate(skillTier)
        this.speed = this.statsTemplate(skillTier)
        this.agility = this.statsTemplate(skillTier)
        this.strength = this.statsTemplate(skillTier)
        this.dexterity = this.statsTemplate(skillTier)
        this.reaction = this.statsTemplate(skillTier)
        this.perks = this.getPerks()
    }
    setInitialValue(skillTier, average) {
        const negociationContext = random(20, true) / 100 + 1
        const valueTable = {
            classSSS: Math.floor(average + 18 * average * negociationContext),
            classAAA: Math.floor(average + 8 * average * negociationContext),
            classA: Math.floor(average + 1 * average * negociationContext),
            classB: Math.floor((average - average / 1.02) / negociationContext),
            classC: Math.floor((average - average / 1.01) / negociationContext),
            classD: Math.floor((average - average / 1.008) / negociationContext),
            classE: Math.floor((average - average / 1.005) / negociationContext),
        }
        return `$${valueTable[skillTier]}`
    }
    setInitialWage(totalValue) {
        const negociationContext = random(20, true) / 100 + 1
        return '$' + Math.floor(Number(totalValue) * negociationContext * 0.03)
    }
    statsTemplate(skillTier) {
        const dispersion = random(10, true)
        const statsAveragesBasis = {
            classSSS: 90,
            classAAA: 80,
            classA: 70,
            classB: 60,
            classC: 50,
            classD: 40,
            classE: 30,
        }
        return Math.ceil(statsAveragesBasis[skillTier] + dispersion)
    }
    getPerks() {
        const mentals = {
            understanding: ['technical', 'negligency'],
            comunication: ['leadership', 'autism'],
            emotional: ['unyielding', 'crumbles'],
            reactive: ['agressive', 'flinchs'],
            ethical: ['foolplay', 'simulation', 'fairPlay']
        }
        const physicals = {
            height: ['short', 'tall'],
            sprint: ['sprinter', 'slugggish'],
            dexterity: ['sharpshooter', 'feints']
        }
        let perkDrafts = []
        perkDrafts.push(setOrientation())
        if (Math.random() < 0.05) {
            perkDrafts.push(getPerk())
        }
        if (Math.random() < 0.25) {
            perkDrafts.push(getPerk())
        }
        return perkDrafts

        function setOrientation() {
            const orientation = ['left-handed', 'right-handed', 'ambidexterity']
            if (Math.random < 0.02) {
                return orientation[2]
            } else if (Math.random() < 0.3) {
                return orientation[0]
            } else {
                return orientation[1]
            }
        }
        function getPerk() {
            const perksPool = Object.keys(mentals).concat(Object.keys(physicals))
            const perks = Object.assign(physicals, mentals)
            const selection = perksPool[random(perksPool.length)]
            if (selection === 'ethical' || selection === 'dexterity') {
                return perks[selection][random(perks[selection].length)]
            } else if (Math.random() < 0.3) {
                return perks[selection][1]
            } else {
                return perks[selection][0]
            }
        }
    }
}
module.exports = { Person, Player }
