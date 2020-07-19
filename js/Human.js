class Human {
    constructor(data) {
        this.name = data.name || this.constructor.name;
        this.skinColor = data.skinColor;
        this.nationality = data.nationality || 'ukrainian';
        this.canWalk = true;
        this.birthDay = new Date([data.birthDay]);
        this.canDoHardWork = true;
    }
    voice() {
        console.log(`I am a ${this.name}.`)
    }
    greetings() {
        console.log(`Hello, my name is ${this.name}, I am a ${this.constructor.name}.`)
    }
    getResponsebilities() {
        return this.constructor.name.responsebilities;
    }
    showResponsebilities() {}
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