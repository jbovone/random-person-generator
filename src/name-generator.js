import random from './random-algorithm.js'
import names from './names-database.js'


function nameTemplate(list) {
    const regions = Object.keys(list)
    const playerIsFrom = regions[random(regions.length)]
    const newPlayer = `${list[playerIsFrom].names[0][random(list[playerIsFrom].names[0].length)]} ${list[playerIsFrom].surnames[0][random(list[playerIsFrom].surnames[0].length)]}`
    return newPlayer
}

export default function newName() {
    const myPlayer = nameTemplate(names)
    return myPlayer
}



