class Human {
    constructor(data) {
        this.name = data.name || this.constructor.name;
        this.skinColor = data.skinColor;
        this.nationality = data.nationality || 'ukrainian';
        this.canWalk = true;
        this.birthDay = new Date([data.birthDay]);
        this.canDoHardWork = true;
        this.responsebilities = [];
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
    startDoing(type){
        console.log(`Start ${getResponsebilities()}`)
    }
    showResponsebilities() {
        console.log(`My work is to ${this.getResponsebilities()}.`)
    
    }
}

class Man extends Human {
    constructor(data) {
        super(data);
        this.gender = this.constructor.name;
    }

}

class Woman extends Human {
    constructor(data) {
        super(data);
        this.gender = this.constructor.name;
        this.canDoHardWork = false;
    }
}