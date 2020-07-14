const random = require('../random-algorithm')
const namesDatabase = require('../names-bank-entrypoint')

class Person {
    constructor(props) {
        this.nacionality = props.from || this.getNacionality(namesDatabase)
        this.name = `${this.getName(this.nacionality)} ${this.getSurname(this.nacionality)}`
        this.age = this.getAge(props.age)
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
    getAge(range = []) {
        const yearsRange, ageBasis = range || [17, 70]
        return random(yearsRange) + ageBasis
    }
}
module.exports = Person
