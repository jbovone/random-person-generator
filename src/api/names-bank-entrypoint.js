
const namesDataBase = {
    japanese: {
        names: japaneseNames.match(/([A-Z])(\w)+/gu),
        surnames: japaneseSurnames.match(/([A-Z])(\w)+/gu)
    },
    spanish: {
        names: spanishNames.match(/([A-Z])(\w)+/gu),
        surnames: spanishSurnames.match(/([A-Z])(\w)+/gu)
    },
    english: {
        names: enghlishNames.match(/([A-Z])(\w)+/gu),
        surnames: englishSurnames.match(/([A-Z])(\w)+/gu),
    },
    german: {
        names: germanNames.match(/([A-Z])(\w)+/gu),
        surnames: germanSurnames.match(/([A-Z])(\w)+/gu),
    },
    poruguese: {
        names: portugueseNames.match(/([A-Z])(\w)+/gu),
        surnames: portugueseSurnames.match(/([A-Z])(\w)+/gu),
    }
}
module.exports = namesDataBase
