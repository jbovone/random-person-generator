module.exports = class SquadRequest {
    constructor(parameters) {
        this.class = parameters[1]
        this.amount = Number(parameters[2].split('=')[1])
        this.region = this.setOptionals('region', parameters)
        this.budget = Number(this.setOptionals('budget', parameters)) || 1000000000
    }
    setOptionals(value, parameters) {
        const option = parameters.find(argument => argument.split('=')[0] === value)
        if (option) {
            return option.split('=')[1]
        } else {
            return null
        }

    }
}
