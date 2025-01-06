// array some and Every
const array = [ 1, 2, 3, 4, 5 ,6 , 7, 8, 9 ];

// array some
// if atleast one element pass a provided test, returns true or else false (boolean)
console.log(array.some((number) => number > 5));

// array every
// every element in the array should pass the test to return truee otherwise false (boolean)
console.log(array.every((number) => number > 2));




