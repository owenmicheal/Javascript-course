// the new keyword
// it creates a new empty object
const person = {}; // seems like the short hand of the new object()
const person1 = new Object(); // this one is used for creating complex objects

person.fname = 'Owen';
person1.fname = 'Owen';

console.log(person); // same
console.log(person1); // same

// the same can be used for arrays
const numbers = [];
const numbers1 = new Array();

numbers.push( 1, 2, 3, 4, 5 );
numbers1.push( 1, 2, 3, 4, 5 );

console.log(numbers);
console.log(numbers1);


