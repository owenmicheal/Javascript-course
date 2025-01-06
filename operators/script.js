// strict and loose operators

console.log("This is a string." === "This is a string."); // true
console.log(2 === 2); // true


console.log(5 == "5"); // true

// this is what we should use because its more safer than the evil twins
console.log(20 === "20"); // false


// console.log({} === {}); // false
// we get false, even though they have the same type and content, weird

// the same thing happens for arrays as they are actually objects under the hood
// console.log([] === []); // false


"" == "0"; // false
0 == ""; // true
0 == "0"; // true

false == "false"; // false
false == "0"; // true

false == undefined; // false
false == null; // false
null == undefined; // true

// and so many other examples that proves hoe untrustworthy strict and loose operator are but atleast we can be safer with the strick equality