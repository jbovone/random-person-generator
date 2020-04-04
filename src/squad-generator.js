import Player from './class-player.js'
import random from './random-algorithm.js'

export default function squadGenerator(sockets, name, budget = 10000) {
    console.log(sockets)
    let mySquad = new Array(sockets)
    for (let members = 0; members < mySquad.length; members++) {
        let player = new Player(name())
        const payment = random(budget)
        player.setValue(payment)
        mySquad[members] = player
    }
    return mySquad
}
