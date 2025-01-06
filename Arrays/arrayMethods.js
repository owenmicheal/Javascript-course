// Array methods
const names = ['Owen', 'Trevor', 'Oprah', 'Shawn', 'Fabian'];

// Array push method{adds a new value at the end of an array(it takes in values)}
names.push('Jojo', 'Tetumumanyi'); //we added leticia and jojo to the end of an array
console.log(names);

// array pop {this removes the last element of the array}
names.pop(); //we pop the last element of an array
console.log(names);

// Array Shift{removes the first element from an array}
names.shift() //removed owen from the array
console.log(names);

// Array Unshift {adds a value at the start of an array (it takes in values)}
names.unshift('Owen'); //added owen at the start of the array
console.log(names);

// Array splice{adds a new value on a specific index and you can decide to remove the existing index or not}
names.splice(3, 0, 'Leticia'); //we added leticia to the 3rd index and removed none
console.log(names)
/* we can also use splice to remove elements or values from the array by passing in food.splice(2, 2)
this deletes 2 elements from the food array starting from the 2nd index */

// Array slice {this creates a new variable that represents the same values in our array but can specify who we dont fetch}
const banyankoleMums = names.slice(3, 7); //returns values above 3 to 7
console.log(banyankoleMums)

const bagandaMums = names.slice(0, 3); // returns values above 0 to 3
console.log(bagandaMums)


