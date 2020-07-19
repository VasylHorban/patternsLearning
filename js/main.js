//DECORATOR
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



//FUCTORY

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
        if(!setEmploy){
            result = list[key](obj)
        }else{
            result = workAtZoo.add(list[key](obj))
        }

        return result
    }
    return {
        create: create
    }
})();