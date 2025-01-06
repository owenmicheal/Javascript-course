// Arrays ins Javascript
// this are used to store an orgarnised structure of data
// we can strore as elements of any datatype
// arrays are objects{premitive datatypes}
const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

console.log(month); //displaying the array in the console
console.log(month[7]); //retriving an array on the 7th index

month[3] = 'gatonya'; //we change the 3rd index which is apr to gatonya
console.log(month);

month[12] = 'teguliyo';
console.log(month); //we added a new sring 'teguliyo'to the array

console.log(month.length); //we check the total count of the elements in the array

// we can loop over arrays of any length using for loop
for (let i = 0; i < month.length; i++) {
    console.log(month[i]);
} // this enables us to loop the array and display each on a new line

// Arrays can store elements of any datatype
const dataTypes = ['owen', true, 24, {education : 'Degree'}];
console.log(dataTypes);



