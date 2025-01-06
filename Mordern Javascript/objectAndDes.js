// Object and destructuring
const person = {
    name: 'Owen',
    age: 25,
    job: 'Software Engineer',
    car: {
        color: 'Black',
        Type: 'Subaru',
        value: 1000
    },
    pets: {
        dog:{
            name: 'Police',
            age: 2
        },
        cat: {
            name: 'Mojo',
            age: 2
        }
    }
};

// normal way 
console.log(person.pets.dog.name)

// destructuring

const { name, age, job, car, pets, car: { color, type, value }, pets:{ dog, cat } } = person;

console.log(name)
console.log(age)
console.log(color)
console.log(pets)
// and so on