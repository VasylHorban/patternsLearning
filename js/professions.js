class Hunter extends Man {
    static responsebilities = ['catch an animal'];
    showResponsebilities() {
        console.log(`My work is to ${Hunter.responsebilities[0]}.`)
    }
}

class Worker extends Man {
    static responsebilities = ['feed an animal', 'clear an aviary'];
    showResposebilities() {
        console.log(`My work is to ${Worker.responsebilities[0]} and ${Worker.responsebilities[1]}.`)
    }
}

class Librarian extends Woman {
    static responsebilities = ['keep an archive'];
    showResposebilities() {
        console.log(`My work is to ${Librarian.responsebilities[0]}.`)
    }
}

class Nurse extends Woman {
    static responsebilities = ['vet'];
    showResposebilities() {
        console.log(`My work is to ${Nurse.responsebilities[0]}.`)
    }
}