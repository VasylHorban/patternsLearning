class Human {
    constructor(data) {
        this.name = data.name || this.constructor.name;
        this.skinColor = data.skinColor;
        this.nationality = data.nationality || 'ukrainian';
        this.canWalk = true;
        this.canDoHardWork = true;
        this.responsebilities = [];
        this.isBusy = false;
        this.workTime;
        this.gender;
    }
    voice() {
        console.log(`I am a ${this.name}.`)
    }
    greetings() {
        console.log(`Hello, my name is ${this.name}, I am a ${this.constructor.name}.`)
    }
    getResponsebilities(){
        if(this.responsebilities.length == 1){
            return this.responsebilities[0]
        };
        return this.responsebilities.join(', ');
    }
    startDoing(type, animal){
        this.greetings()
        console.log(`Start ${this.getResponsebilities()} ${animal}`);
        this.isBusy = true
        setTimeout(this.endDoing(this.name), this.workTime)
    }
    endDoing(name){
        console.log(`${name} end ${this.checkGender()} work!`)
        this.isBusy = false
    }
    showResponsebilities() {
        console.log(`My work is to ${this.getResponsebilities()}.`)
    
    }
    checkGender(){
        if(this.gender == 'man') return 'his'
        return 'her'
    }
}

class Man extends Human {
    constructor(data) {
        super(data);
        this.gender = 'man';
    }

}

class Woman extends Human {
    constructor(data) {
        super(data);
        this.gender = 'woman';
        this.canDoHardWork = false;
    }
}

class Hunter extends Man {
    constructor(data){
        super(data);
        this.responsebilities = ['catch an animal']
        this.workTime = 7000;
    }
}

class Worker extends Man {
    constructor(data){
        super(data);
        this.responsebilities = ['feed an animal', 'clear an aviary']
        this.workTime = 5000;
    }
}

class Librarian extends Woman {
     constructor(data){
        super(data);
        this.responsebilities = ['keep an archive']
        this.workTime = 3000;
    }
}

class Nurse extends Woman {
    constructor(data){
        super(data);
        this.responsebilities = ['vet']
        this.workTime = 4000;
    }
}