class Animal {
    constructor(data) {
        this.name = data.name || this.constructor.name;
        this.habitat = data.habitat;
        this.gender = data.gender
        this.canWalk = true;
        this.age = data.age;
        this.price = data.price;
        this.hasWool = data.hasWool || true;
        this.voiceType = data.voiceType;
        this.isEscape = false;
        this.isIll = false;
        this.alias = data.alias || null;
        this.isHungry = false;
    }
    voice() {
        console.log(this.voiceType)
    }
    escape() {
        if (this.isEscape) {
            this.isEscape = false
        } else {
            this.isEscape = true
        }
    }
    illing() {
        if (this.isIll) {
            this.isIll = false
        } else {
            this.isIll = true
        }
    }
    startHungry(){
        if (this.hungry) {
            this.hungry = false
        } else {
            this.hungry = true
        }
    }
    
}
class Herbivorous extends Animal{
    constructor(data) {
        super(data);
        this.food = data.food;
        this.isDangerous = data.dangerous || true
    }
}
class Predator extends Animal{
    constructor(data) {
        super(data);
        this.food = data.food;
        this.isDangerous = data.dangerous || false
    }
}
