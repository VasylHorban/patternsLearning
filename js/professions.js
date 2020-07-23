class Hunter extends Man {
    constructor(data){
        super(data);
        this.responsebilities = ['catch an animal']
    }
}

class Worker extends Man {
    constructor(data){
        super(data);
        this.responsebilities = ['feed an animal', 'clear an aviary']
    }
}

class Librarian extends Woman {
     constructor(data){
        super(data);
        this.responsebilities = ['keep an archive']
    }
}

class Nurse extends Woman {
    constructor(data){
        super(data);
        this.responsebilities = ['vet']
    }
}