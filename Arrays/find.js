// array.find method {as its name is, it funds a specific element from the array}
// the first value that satsifies the condition 
const numbers = [ 1, 2, 3, 4, 5, 6, 7,8 ,9 ]

const greater = numbers.find((number) => {
    return number > 5;
});

console.log(greater);

const states = [ 'alaska', 'calafonia', 'kampala', 'gulu', 'kamwokya'];

const latterK = states.find((state) => {
    return state.startsWith('k'); //startwith() is a built in method that helps us retrieve an element in the array that starts with k
})

console.log(latterK); // returns the 1st element that starts with k in the array

