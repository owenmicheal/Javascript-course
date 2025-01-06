// eS6+
// const and let
const name = 'Owen'; // doesnt change values

let age = 24; // can change value

console.log(name);

age = 25;

console.log(age);

// arrow functions

const multiply = (n) => n*n;

console.log(multiply(100)); //simple syntax

// Default parameters {add default values to the parameters}
const add = (a = 0, b = 0, c = 0) => {
    return a + b + c;
};

console.log(add(700, 893)); // pass only tp arguements{by default all weill be equal to 0}

// Templete strings
const customer = 'Oprah';

const order = {
    name: 'Macbook',
    price: 10000
};

// display message the old way
const oldmessage = 'Hello ' + customer + ', do you want to buy a ' + order.name + ', valued at ' + order.price;

console.log(oldmessage);

// Es6 display {new message}
const newMessage = `Hello ${customer}, do you want to buy a ${order.name} valued at ${order.price}`;

console.log(newMessage);


