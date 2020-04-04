import generateSquad from './squad-generator.js'
import getName from './name-generator.js'

document.querySelector('button').onclick = function (e) {
    let teamParameters = {}
    e.preventDefault()
    const $inputs = document.querySelectorAll('input')
    for (let i = 0; i < $inputs.length; i++) {
        switch ($inputs[i].id) {
            case $inputs[i].id = 'team-name':
                if (!/^.{0,20}$/i.test($inputs[i].value)) {
                    terminate()
                } else {
                    teamParameters.teamName = $inputs[i].value
                }
                break;
            case $inputs[i].id = 'squadies-number':
                if (isNaN($inputs[i].value)) {
                    terminate()
                } else {
                    teamParameters.squaddiesNumber = $inputs[i].value
                }
                break;
            case $inputs[i].id = 'budget-money':
                if (isNaN($inputs[i].value)) {
                    terminate()
                } else {
                    teamParameters.budgetMoney = $inputs[i].value
                }
                break;
        }
        function terminate() {
            document.querySelector('.message').innerHTML = 'you fail'
            teamParameters = undefined
            i = $inputs.length - 1
        }
    }
    generateTeam(teamParameters)
}
function generateTeam(teamParameters) {
    if (!teamParameters) {
        return
    }
    const myTeam = {
        name: teamParameters.teamName,
        count: teamParameters.squaddiesNumber,
        squaddies: generateSquad(Number(teamParameters.squaddiesNumber), getName, teamParameters.budgetMoney)
    }
    document.querySelector('.message').innerHTML = JSON.stringify(myTeam)
    console.log(myTeam)
}






/*
propuesta de expansion
function budget(number) {
    BARCELONA_BUDGET / sockets.length + BARCELONA_BUDGET * 0.2
    let ALVARADO_BUDGET = 1000
    let BOCA_BUDGET = 10000000
    let BARCELONA_BUDGET = 1000000000
    BARCELONA_BUDGET = BARCELONA_BUDGET - payment
}

*/
