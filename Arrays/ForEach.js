// Array.For Each in Javascript{it is the most used method in js}
// the foreach method performs an action for each element in the array
const names = ['Owen', 'Trevor', 'Oprah'];

//for loop [this is the basic one for looping through the arrays]
// for (let i = 0; i < names.length; i++) {
//     console.log(i, names[i]);
// }

//forEach method{we call the foeEach method on the array and add a callback function which will have parameters, a block of code and where neccesary arguments}
names.forEach((name, i) => {
     console.log(`${i}: ${name}`);
});
// note that the return value of forEach is always undefined so take note of that
// const value = names.forEach((name, i) => name);
// console.log(value);

// Use case for the forEach method
// it is used when you want to do somthing on each element of the array

// DONT use case for the forEach
// when you want to break or stop the loop of the array
// when you are working with ansyc code

// Real use case example
let sum = 0;
const nums = [65, 45, 12, 4, 8];

nums.forEach((number) => {
    sum += number // += is a short hand for the sum = sum + number (it adds a value to a variable then assigns it to the variable)
});
console.log(sum);
//  thats it for the forEach loop
