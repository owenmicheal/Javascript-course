// Global  scope{its avariable accesed any whaere in the code and it is written outside of the function}
const lastName = 'Faridah'; // this is a global vairiable that can be used anywhere in the code

const sirName = (age) => {
    console.log(`Your name is ${lastName} and you are ${age} old.`);
}

sirName(24); //ivoking function

// local scope/function scope{these are variables difined inside a function}

const songs = () => {
    // local scope 1
    const mySong = 'Onchunya';
    console.log(`My name is ${lastName} and my favorite song is ${mySong} by Ajay`);

    const nyimba = () => {
        // we can as well use the local  scope inside this function which is nested inside the songs function
        //jukila we cannot use this variable somewhere else outside the song function
        // and lets say we declare a variable here, it wont be accesible outside this function
        console.log(`Are you sure your name is ${lastName} and your favourite song is ${mySong}?`)
    }

    nyimba()
}
songs()
console.log(`My name is ${lastName} and my favorite song is ${mySong} by Ajay`);// output will be error because mysong was defined loccally so it wont work anywhere

// block scope
if(true) {
    //this is a block scope, it will only be valid inside this block of code and not anywhere else
    const food = 'yam';
    console.log(food);
}

console.log(food);//we get an error undefined because it cant be accesed globaly
