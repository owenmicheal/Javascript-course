//  object methods

const dog = {
    name: 'police',
    bark: () => {
        console.log('woof woof!');
    }
}

dog.bark();

// we can do this in another complex way
const car = {
    name: 'Benz',
    year: 2018,
    carInfo: function() {
        console.log(this.name, this.year); // with this keyword we can be able to nall the keys of the propreties 
    }
}

car.carInfo();

