// similar to the filter method, it doesnt mutate or change tihe array

const numbers = [ -50, 45, 76, -234, 45, -345, -32, 33 ];

const positive = numbers.filter((number) => {
    return number >= 0;
});

const negative = numbers.filter((number) => {
    return number <= 0;
})

console.log(positive);
console.log(negative);
console.log(`These are positive numbers: ${positive} and These arethe negative numbers: ${negative}.`)

// in this example we have combined all the methods weve leant sofar on a real life example
const employees = [
    { name: 'Shawn', overtime: 7 },
    { name: 'Oprah', overtime: 5 },
    { name: 'Trevor', overtime: 10 },
    { name: 'Jojo', overtime: 5 }
]

const workMore = employees.filter((hard) => {
    return hard.overtime >= 2;
})

const names = workMore.map((name) => name.name); //craeted a new array that gets the names of hardworking peaople

// here we get all the names of hard working people and display a congulagulatinng massage using foreach method
names.forEach((name) => console.log(`${name} is a very hard working person`)); 
