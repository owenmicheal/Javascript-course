// Array map
// the map method has a return value thats the major defference
// the array map doesnt mutate the array

const iphone = [
    { price : 1000000, name : 'iphone 11' },
    { price : 1500000, name : 'iphone 12' },
    { price : 2000000, name : 'iphone 13' },
    { price : 2500000, name : 'iphone 14' }
];

const prices = iphone.map((version) => {
    return version.price;
});
const names = iphone.map((version) => {
   return version.name;
});

console.log(names);
console.log(prices);

// the array map maps throurg th array elements and returns the the specific at command and lieaves the array untouched