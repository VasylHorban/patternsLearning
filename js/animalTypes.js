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
