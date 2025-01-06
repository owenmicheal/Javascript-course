// hoisting in javascript{always asked in interviews}
// it is very useless but interviewers ask it alot

/*Hoisting is a JavaScript behavior in which variable and 
function declarations are moved, or "hoisted," to the top
 of their containing scope during the compilation phase. 
 This means that you can use variables and functions before
  they are actually declared in the code. */

var age;

console.log(age);

age = 20;// we get undefined
// this is how hoistinfg works but really has no use case

// the only way we should declare varibleas is at the top of the code 
var aging = 30;//this is the correct way
console.log(aging);// this will output 30

// hoisting using functions
myfunc()// we actually call or move the call function ast the top

function myfunc() {
    console.log('chips');
}
// not that this is fading away in modern js and they are less devs who use it as of today
// const and let donot do hoisting{always declare the variables on top}
// arrow functions as well donot use hoisting{you cant call a function b4 declaring it}
// in short, hoisting nolonger exist in modern javasscript