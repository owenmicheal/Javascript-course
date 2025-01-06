//  FUNCTIONS
// is a block of code that performs a specific task
// inbuilt functions{console.log ans many others}

// function declaration means we are creating a funtion
function add(number) {
    return number * number;
}
// funtion call is what executes the funtion
const result = add(50);
console.log(result);

// declaring and ivoking variables{executin a function}

// funtion expressino(this is a function with no name)
const sub = function(params) {
    return params * params;
}
const sum = sub(800);
console.log(sum)

// Arrow fuctions{simplest and most used way of creating function }
const divide = (div) => div*div;
const total = divide(400);
console.log(total);

// invoking functions or executing functions
const greatings = (yourName) => console.log(`Hello, ${yourName}`);
greatings('Owen'); // this is ivoking{executing}

// return staement in a javascript function
// every function in javascript returns undefined by default
const addition = (a, b) => {
    return a + b;// this is the return, it executes the 1st return and stops, doesnt care about other returns
}
const byo = addition(10, 34);
console.log(byo);

// Arrow functions in detail
// Arrow functions are the most used in the modern day javascript mo so in libraries and frame works
// they dont create thier own THIS value

const box = (plus) => {
    return plus + plus;
}
const hu = box(10000);
console.log(hu); // thats it, its simple and precise.

// we can as well write an arrow function in an easier way if returns only one stament of code
const opel = (j, b) => j * b; //simpler way {when it takes one statements}

const mag = opel(500, 200);
console.log(mag);

// parameters and arguments
// parameters{similar to placeholders or variable in the function brackets()}
const rat = (parameter) => parameter * parameter;
const dude = rat(//the argument goes in here);
);
// arguments{these are the actual values we pass to the paremeters}

