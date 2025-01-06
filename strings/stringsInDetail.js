// strings in detail
// in js we use strings to store texts
const single = 'This is a single string';
const double = "This is a double string";

const backticks = `They are ${1 + 2} types of strings`; //this can execute js code inside it

// we can as well expand backticks on mulitiple lines which is really helpfull
const rows = `1: single
2: double
3: backticks` //3 rowss

console.log(single);
console.log(double);
console.log(backticks);
console.log(rows);

// string length and other basic properties
const lname = 'Owen is my friend';

console.log(lname.length); //length property{4} length is a property note that given it has no ()
console.log(lname[0]); //geting a specific latter position{J is the out put}
console.log(lname[lname.length -1]); //returns the last character of the string
console.log(lname.toLowerCase());// method that converts texts to lowercase
console.log(lname.toUpperCase());// method that converts texts to uppercase
console.log(lname.indexOf('Owen')); // getting the index of a substring(a word in the string)
console.log(lname.includes('is')); // searches for the string and returns a boolean
console.log(lname.startsWith('J'));// checks whether the string starts with the given value then returns a boolean
console.log(lname.endsWith('d')); //checks whether the string ends with the given value then returns a boolean

// getting a sub string
console.log(lname.slice(0, 3)); //returns the substring depending on the index you have specified to it.

// split a string into characters
console.log(lname.split('')); //returns charaters as an array of letters [o,w,e,n and so on] by adding and empty string

// spliting a sentence into words
console.log(lname.split(' ')); // returns each words in a sentence seperately in an array buy adding space in the string

// reverse, repeat and trim srings
console.log(lname.repeat(5)); //repeats or irritates a string 5 times
console.log(lname.trim()); //this trims unwanted spaces aroung the string{mostly used to protect user input}
console.log(lname.split(' ').reverse().join(' ')); // reverce is an array method so we will 1st split the strings into arrays then call reverse on them and then join them, if words add space in the string


// so thats it for this lesson, we wont be using most os the methods{apart from the includes() and the length property}


