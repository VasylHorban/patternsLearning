class Human{
    constructor(data){
        this.name = data.name || this.constructor.name;
        this.skinColor = data.skinColor;
        this.nationality = data.nationality || 'ukrainian';
        this.canWalk = true;
        this.birthDay = new Date([data.birthDay]);
        this.canDoHardWork = true;
    }
    voice(){
        console.log(`I am a ${this.name}.`)
    }
    greetings(){
        console.log(`Hello, my name is ${this.name}`)
    }
    getResponsebilities(){
        return this.constructor.name.responsebilities;
    }
    showResponsebilities(){}
}

class Man extends Human{
    constructor(data){
        super(data);
        this.gender = this.constructor.name;
    }
    
}

class Woman extends Human{
    constructor(data){
        super(data);
        this.gender = this.constructor.name;
        this.canDoHardWork = false;
    }
}

class Hunter extends Man {
    static responsebilities = ['catch an animal'];
    showResponsebilities(){
        console.log(`My work is to ${Hunter.responsebilities[0]}.`)
    }
}

const hunter = new Hunter({
    name: 'Viktor',
    skinColor : 'white',
    birthDay : [1999, 26, 12]
});

hunter.greetings();
hunter.showResponsebilities();


class Worker extends Man{
    static responsebilities = ['feed an animal', 'clear an aviary'];
    showResposebilities(){
        console.log(`My work is to ${Worker.responsebilities[0]} and ${Worker.responsebilities[1]}.`)
    } 
}


const worker = new Worker({
    name: 'Taras',
    skinColor : 'white',
    birthDay : [1999, 26, 12]
});

worker.greetings();
worker.showResposebilities();

class librarian extends Woman{
    static responsebilities = ['keep an archive'];
    showResposebilities(){
         .log(`My work is to ${librarian.responsebilities[0]}.`)
    }
}