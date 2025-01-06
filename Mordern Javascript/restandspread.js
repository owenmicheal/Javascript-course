// normal functions
const add = (a, b) => {
    return a + b;
};

console.log(add(5004, 456));

// with rest operators
const multiply = (...number) => {
    return number.reduce((acc, value) => acc * value);
};

console.log(multiply( 234, 434, 5, 657, 767, 6788, 878, 45, )); // you can as many values you want

// another example
const sub = (...num) => {
    return num.reduce((acc, val) => acc - val );
};

console.log(sub( 3455, 566, 65, 678, 788, 789, 9 )); // you can sytract as many as you want

// last example
const addition = (...num) => {
    return num.reduce((acc, val) => acc + val );
};

console.log(addition( 35, 34, 454, 46, 76, 879, 89, 990, 78, 89, 9876, 67876, 6545, 5687 ));

// spead
const nembers = [ 1, 3 , 5, 6, 87, 56 ];

nembers.push( 34 );

const newNembers = [ ...nembers, 46, 67, 78, 98, 889, 8, 68 ];

console.log( ...nembers );

console.log( ...newNembers )

// with objects
const person = {
    name: 'john',
    age: 24
};

const person1 = { ...person }; //copies the object not the location

person.Job = 'Developer'; // these changes dont apply to the cloned person

console.log(person);
console.log(person1)
