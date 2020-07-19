class Animal{
    constructor(data){
        this.name = data.name || this.constructor.name;
        this.habitat = data.habitat;
        this.gender = data.gender
        this.canWalk = true;
        this.birthDay = new Date([data.birthDay]);
        this.canDoHardWork = true;
    }
}