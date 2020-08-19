const animalNames = zooAnimals.map(elem => elem.name)
const problemTypes = {
    'escape' : 'escape', 
    'illing' : 'illing', 
    'startHungry' : 'startHungry'

simulation();

function simulation() {
    zooAnimals[randomInt(0, zooAnimals.length -1)].
    console.log(zooAnimals)
//    zoo.resolveProplem(problemTypes[randomInt(0, problemTypes.length - 1)], animalNames[randomInt(0, animalNames.length - 1)])
    setTimeout(simulation, 4000)
}

function randomInt(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
console.log(zooWorkers)