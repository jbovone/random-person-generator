const random = require('./random-algorithm')
const { Person, Player } = require('./classes')
function squadGenerator(request) {
    let squad = []
    if (request.class === 'person') {
        squad = personGenerator(request)
    } else if (request.class === 'player') {
        squad = playerGenerator(request)
    }
    return squad
}
function personGenerator(request) {
    let squad = []
    for (let i = 0; i < request.amount; i++) {
        squad[i] = new Person
    }
    return squad
}
function playerGenerator(request) {
    const average = request.budget / request.amount
    let playerSokets = request.amount
    const rolesDraft = gameRoles()
    const playerDraft = {
        classSSS: setAmount(0.05),
        classE: setAmount(0.05),
        classAAA: setAmount(0.1),
        classD: setAmount(0.1),
        classA: setAmount(0.2),
        classB: playerSokets / 2,
        classC: playerSokets / 2
    }
    const squad = new Array(request.amount)
    for (let socket = 0; socket < squad.length; socket++) {
        const skillTier = Object.entries(playerDraft)[0][0]
        const tierPool = Object.entries(playerDraft)[0][1]
        if (!tierPool) {
            delete playerDraft[skillTier]
            socket--
        } else {
            playerDraft[skillTier] -= 1
            squad[socket] = new Player(skillTier, average, rolesDraft.next().value)
        }
    }
    function setAmount(factor) {
        const amount = Math.floor(playerSokets * factor + random(10) / 100)
        playerSokets = playerSokets - amount
        return amount
    }
    function* gameRoles() {
        const roles = {
            Forward: ['Winger', 'Striker'],
            Midfield: ['Side', 'Forward', 'Defender'],
            Defender: ['Libero', 'Center-Back', 'Wing-Back'],
            'Goal': ['Keeper']
        }
        while (true) {
            const mainRoles = Object.keys(roles)
            for (let i = 0; i < mainRoles.length; i++) {
                for (let j = 0; j < roles[mainRoles[i]].length; j++) {
                    yield `${mainRoles[i]} ${roles[mainRoles[i]][j]}`
                }
            }
        }
    }
    return squad
}
module.exports = squadGenerator

