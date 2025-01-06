// array sort method
//it sorts the array of strigs alphabetically
// the sort methods mutates or edits the original arrays

const names = [ 'owen', 'trevor', 'oprah', 'shawn' ];

names.sort(); // it sorts the names alphabetically

console.log(names);

// array sort() also sorts numbers in ascending or decending order only if you add a callback funtion
// and add 2  (a, b) parameters and return an instant value subtracting between them them a - b or b - a
const numbers = [ 7, 8, 3, 5, 7, 0, 4, 2, 900, 20, 78, 2, 56 ];

numbers.sort((a, b) => a - b); // ascending order
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers); // descending order
