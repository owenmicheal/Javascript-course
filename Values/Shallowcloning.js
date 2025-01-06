// shallow cloning 
// how can we copy a complete object or array not its memory so that the changes in the 1st one dont reflrect in the other one

// this is the shalow clone of arrays
// cloning arrays {spread operators}
const numbers = [ 1, 2, 3, 4, 5 ]; //sameLocation
const copy = numbers; //sameLocation
const newNumbers = [ ...numbers ]; //DifferentLocation


numbers.push( 56, 78 ); // we push thes values to the original array

console.log(numbers); // displays original array with pushed numbers
console.log(copy); // displays original array with pushed numbers as well
console.log(newNumbers); // displays only original numbers beacause it copied the array not the memory location

console.log(numbers === copy); // returns true because the share the same memory location
console.log(numbers === newNumbers); // returns false because by using the spread operator it clones inly the array not the location


// another method of shallow cloning arrays is by splice() method
const digits = [ 24, 25, 26, 27, 28 ]; // same memory location
const copyDigits = digits; // same memory location
const newDigits = digits.slice(); // different memory location

digits.push( 29, 30, 31, 32, 33 ); // modify original digits

console.log(digits);
console.log(copyDigits);
console.log(newDigits);

console.log(digits === copyDigits); // returns true
console.log(digits === newDigits); // returns false 

// so basically slice does the same job

// shallow cloning OBJECTS
// cloniing using a spread operator
const mac = { name: 'Macbook Pro', year: 2019 }; // same memory location
const macCopy = mac; // same memory location
const originalMac = { ...mac }; // different memory location

mac.condition = 'Used'; // modify mac

console.log(mac); // same
console.log(macCopy); // same
console.log(originalMac); // diferent

console.log(mac === macCopy); // true
console.log(mac === originalMac); // false

// another method of cloning objects using the assign() object method
const person = {
    name: 'Trevor',
    age: 23
} // same memory location 
const personCopy = person; // same memory location 
const newperson = Object.assign({}, person); // different memory location

person.lastName = 'Ssembatya'; // modify person

console.log(person); // same
console.log(personCopy); // same
console.log(newperson); // different





