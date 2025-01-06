//  deep cloning Array and Objects

// Deep cloning Objects
// using spread operator
const person = {
    fname: 'Emma',
    car: { Brand: 'BMW',
    color: 'Black',
    wheels: 4
    }
};

// this deep cloning only works for only 2 levels of objects
const newPerson = { ...person, car: { ...person.car } }; // adding car: { ...person.car } should remove the referrence to the car object enabling us to clone only its properties

newPerson.car.value = 1000000;
newPerson.fname = 'Oprah';

console.log(person);
console.log(newPerson);

//  deep cloning using Json 
const president = {
    name: 'Museveni',
    cabinate: {
        ministers: {
            noOfmin: 4,
            workPlace: 'State House',
            salary: 5000000
        },
        mps: {
            noOfmps: 20,
            workPlace: 'Parliament',
            salary: 15000000
        }
    },
    cars: {
        Brand: 'Toyota',
        value: 30000000,
        noOfcars: 50
    }
};

// const newPresidentstring = JSON.stringify(president); // we clone president object in strings using JSON.stringfy
const newPresident = JSON.parse(JSON.stringify(president));
// we change it back to objects using JSON.parses


newPresident.cars.Brand = 'Subaru';
newPresident.name = 'Bobi Wine';

console.log(president);
console.log(newPresident);

// thats what you can do in deep cloning

