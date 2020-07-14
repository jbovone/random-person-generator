const Person = require('./entities/person')
const User = require('./entities/user')
function squadGenerator(request) {
    let squad = []
    if (request.class === 'person') {
        squad = personGenerator(request)
    } else if (request.class === 'user') {
        squad = personGenerator(request)
    }
    return squad
}
function personGenerator(request) {
    let squad = []
    for (let i = 0; i < request.amount; i++) {
        squad[i] = new Person(request.region)
    }
    return squad
}

module.exports = squadGenerator
