const Person = require('./person')

class User extends Person {
    constructor(props){
        super(props)
        this.username = this.generateUsername()
        this.password = this.generatePassword()
        this.id = props.id
    }
    generatePassword(){}
    generateUsername(){}
}
module.exports = User
