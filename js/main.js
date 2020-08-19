//humans DECORATOR 
const workAtZoo = (function () {
    let name = 'Lviv Zoo';

    function showWorkPlace() {
        console.log(`I am working at ${this.hired}`)
    }

    function add(person) {
        person.hired = name;
        person.showWorkPlace = showWorkPlace;
        return person;
    }
    return {
        add: add
    }
})();



//humans FUCTORY

const humanFuctory = (function () {
    let obj;
    let list = {
        hunter: function () {
            return new Hunter(obj)
        },
        worker: function () {
            return new Worker(obj)
        },
        nurse: function () {
            return new Nurse(obj)
        },
        librarian: function () {
            return new Librarian(obj)
        },
        human: function () {
            return new Human(obj)
        }
    }

    function create(key, data, setEmploy) {
        let result;
        obj = data
        if (!setEmploy) {
            result = list[key](obj)
        } else {
            result = workAtZoo.add(list[key](obj))
        }

        return result
    }
    return {
        create: create
    }
})();


//animal FUCTORY

const animalFuctory = (function () {
    let obj;
    let list = {
        herbivorous: function () {
            return new Herbivorous(obj)
        },
        predator: function () {
            return new Predator(obj)
        }
    }

    function create(key, data) {
        obj = data;
        return list[key](obj);
    }
    return {
        create: create
    }
})();

const lain = animalFuctory.create('herbivorous', {
    name: 'tom',
    year: 10,
    gender: 'man',
    voiceType: 'rarrrr',
    habitat: 'savane',
    isDangerous: true
})

/////create workers
const zooWorkers = [
    humanFuctory.create('hunter', {
        name: "Taras",
        skinColor: "White",
    }, true),
    humanFuctory.create('worker', {
        name: "Andriy",
        skinColor: "White",
    }, true),
    humanFuctory.create('worker', {
        name: "Semen",
        skinColor: "White",
    }, true),
    humanFuctory.create('worker', {
        name: "Igor",
        skinColor: "White",
        nationality: 'belorussian',
    }, true),
    humanFuctory.create('librarian', {
        name: "Oksana",
        skinColor: "White",
    }, true),
    humanFuctory.create('nurse', {
        name: "Anna",
        skinColor: "White",
        nationality: 'pole',
    }, true)

]

const zooAnimals = [
    animalFuctory.create('predator', {
        name: "Lion",
        habitat: "savanna",
        gender: 'man',
        age: 8,
        price: 1800,
        voiceType: 'rarr',
        alias: 'mouse'
    }),
    animalFuctory.create('predator', {
        name: "Lion",
        habitat: "savanna",
        gender: 'woman',
        age: 4,
        price: 1900,
        voiceType: 'rarr',
        alias: 'small flower'
    }),
    animalFuctory.create('predator', {
        name: "Tiger",
        habitat: "jungle",
        gender: 'woman',
        age: 6,
        price: 2500,
        voiceType: 'rrrarrr',
        alias: 'bagira'
    }),
    animalFuctory.create('predator', {
        name: "Polar bear",
        habitat: "arctic",
        gender: 'man',
        age: 17,
        price: 5000,
        voiceType: 'braaar',
        alias: 'snowman'
    }),
    animalFuctory.create('predator', {
        name: "Python",
        habitat: "jungle",
        gender: 'man',
        age: 13,
        price: 2000,
        voiceType: 'ssss',
        alias: 'sock'
    }),
    animalFuctory.create('herbivorous', {
        name: "Elephant",
        habitat: "savanna",
        gender: 'man',
        age: 34,
        price: 12000,
        voiceType: 'ffFFf',
        alias: 'Daddy'
    }),
    animalFuctory.create('herbivorous', {
        name: "Elephant",
        habitat: "savanna",
        gender: 'woman',
        age: 19,
        price: 15000,
        voiceType: 'ffFFf',
        alias: 'Mammy'
    }),
    animalFuctory.create('herbivorous', {
        name: "Elephant",
        habitat: "savanna",
        gender: 'woman',
        age: 19,
        price: 15000,
        voiceType: 'ffFFf',
        alias: 'Mammy'
    }),
        animalFuctory.create('herbivorous', {
        name: "Deer",
        habitat: "savanna",
        gender: 'man',
        age: 23,
        price: 3000,
        voiceType: 'mmmre',

    }),
    animalFuctory.create('herbivorous', {
        name: "Deer",
        habitat: "savanna",
        gender: 'man',
        age: 19,
        price: 3100,
        voiceType: 'mmmre',

    }),
    animalFuctory.create('herbivorous', {
        name: "Deer",
        habitat: "savanna",
        gender: 'woman',
        age: 30,
        price: 1900,
        voiceType: 'mmmre',

    }),
    animalFuctory.create('herbivorous', {
        name: "Ostriches",
        habitat: "savanna",
        gender: 'woman',
        age: 10,
        price: 4900,
        voiceType: 'klul',

    }),
    animalFuctory.create('herbivorous', {
        name: "Hippo",
        habitat: "savanna",
        gender: 'man',
        age: 24,
        price: 9000,
        voiceType: 'mmuu',
    }),
]


//Mediator//
class ZooMediator {
    constructor() {
        this.workers = {};
        this.animals = {};
    }
    register(workers, animals) {
        this.workers = workers;
        this.animals = animals
    }
    resolveProplem(type, animal) {
        let types = {
            isIll: 'Nurse',
            isEscape: 'Hunter',
            isHungry: 'Worker',
            archiveProblem : 'Librarian'
        }
        this.workers.forEach(person => {
            if (person.constructor.name == types[type] && !person.isBusy) {
                person.startDoing(type, animal);
            }
            this.animals.forEach(elem => {
                if (elem.name == animal) elem.voice();
            })
        })
    }
}

const zoo = new ZooMediator();
zoo.register(zooWorkers, zooAnimals)
