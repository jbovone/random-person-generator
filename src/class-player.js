class Player {
    constructor(names = '') {
        this.name = names
        this.marketValue
    }
    setValue(value = Number) {
        if (typeof value === 'function') {
            value = value()
        }
        return this.marketValue = `$${value}`
    }
    getValue() {
        return this.marketValue.match(/\d+/)
    }
}
export default function player(names) {
    return new Player(names)
}
//expansiones posibles, tipos de jugador, monthly wage, status: lesionado, green.
//exportar la clase en si no fue posible, tarea averiguar porque?. 
