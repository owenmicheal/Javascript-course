// values vs references intro

// copying premitive values
// copying numbers
let x = 1;
let y = x; // will be equal to the initual x

x = 3;

console.log(x);
console.log(y);

// copying strings
let fname = 'owen';
let myname = fname; //assigned it to the innitual value

fname = 'kimbowa'; // changed the initual value

console.log(fname);
console.log(myname);

// copying complex datatypes {When copying complex values, JavaScript engine is not going to behave as you would initially think it would.}
// coping arrays
let array = [ 1, 2, 3, 4 ];
let array2 = array; // assigned to the intial value

array.push(33, 45); // changed the first array

console.log(array);
console.log(array2); // it will reflect the chacges mad on the array and add them to array1

// copying objects
let dog = {name: 'police', age: 2};
let cat = dog; //same value with the dog

dog.name = 'fluffy'; // make changes to the dog name 

console.log(dog); // you would assume its  returning police as its name but no, it updates the cat with the changes made on the dog
console.log(cat);

/* So.... what happened here? Well...

When a variable is assigned a primitive value, it just copies that value. We saw that with number and strings examples.

On the other hand, when a variable is assigned a non-primitive value (such as an object, an array or a function), it is given a 
reference to that object’s location in memory. so it means whatever happens to the original variable, it also happens to the one that copied it
n this example above, the variable otherPerson doesn’t actually contain the value { firstName: 'Jon', lastName: 'Snow' }, instead it points to a
 location in memory where that value is stored. */