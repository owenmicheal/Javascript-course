// array reduce
/* her the we assign the total to grossaryList and call the reduce method on it which takes in
two values, callaback function and the value you want it to add to, in this case it is 0 that we
want to add from. the call back function recieves two paremeters (accumulator(0 we said earlier),
 currentValue(the elemnt it is about to irritate)) */
const list = [ 23, 45, 56, 76, 87, 787, 788, ]

const total = list.reduce((acc, cur) => {
    return acc + cur;
}, 0);

console.log(total);

// lets try it on somthing simpler
const numbers = [ 1, 2, 3, 4, 5 ];

const totalValue = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(totalValue);