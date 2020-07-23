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
        this.alias = data.alias || null
    }
    voice() {
        console.log(this.voiceType.repeat(3))
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
}
