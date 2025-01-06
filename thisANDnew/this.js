// the this key word
// is used to reference the object that it is executing a function

// This defines a constructor function named car.
// Constructor functions are used to create objects in JavaScript. They define properties and methods for the objects they create.
function car(brand, color, wheels) {
    this.brand = brand;
    this.color = color;
    this.wheels = wheels;
    // the this keyword is used to refer to the new object being created.

    console.log(this); // outputs the newly created object to the console.
}

const newCar = new car('subaru', 'black', 4);

// another example
function phone(Brand, Version, Storage, Color) {
    this.Brand = Brand;
    this.Version = Version;
    this.Storage = Storage;
    this.Color =Color;

    console.log(this);
}

const newPhone = new phone( 'iPhone', '14 pro max', 256, 'Black' );