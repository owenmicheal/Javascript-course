// Acessing, adding and updating properties of the object

const person = {
    fname: 'Owen',
    'its about to go down': true
};

// we can add aproperty to our object person via dot nottation as well
person.dog = { name: 'Police', age: 2 }; 
person.age = 24;

console.log(person);

// we can acces a property using DOT NOTATION
console.log(person.fname);
console.log(person.dog.name); // accessing the dog name
console.log(person.age); // acessing person's age

// square bracket notation{they can help us access properties dynamically}
console.log(person['its about to go down']);
console.log(person["fname"]); // second way of accesing an object property
