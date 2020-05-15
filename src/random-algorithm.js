module.exports = function superRandomizer(number, negativeChance = null) {
    let selection = Math.floor(Math.random() * number)
    if (negativeChance) {
        const chance = Math.random()
        if (chance < 0.5) {
            selection = selection * -1
        }
    }
    return selection
}
