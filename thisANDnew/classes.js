// classes {this are blue print for objects }
class person {
    constructor(name, age, working) {
        this.name = name;
        this.age = age;
        this.working = working;
    }
}; // this is a blue print for creating new people

const newPerson = new person( 'Oprah', 18, false ); // creates a new object and refer to the class

newPerson.age = 19; // modifys newPerson
console.log(newPerson);

// we can do something similar using functions which js is turning to more often
const createCar = (Name, Value, MaxSpeed, Mannual) => {
    const bluePrint = {
        Name: Name,
        Value: Value,
        MaxSpeed: MaxSpeed,
        Mannual: Mannual
    };
    console.log(bluePrint);
};

createCar( 'Opel', 100000000, 280, true );
// you can see we can basically do all staff being done by classes in OPP using Arrow Functions 
// Both have their advantages but functional programming seems the way to go in javascript
