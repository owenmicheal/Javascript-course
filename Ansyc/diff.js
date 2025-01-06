// differences between syncronous and ansyncronous code
// Syncronous is js code where code is executed line by line{their is no time delay}

// Syncronous code example
const func = () => {
    console.log('func one'); // outputs this 1st
    
    fuc2(); // goes to fuc2 and outputs it
    
    console.log('func on part 2'); // finally it outputs this
};

const fuc2 = () => {
    console.log('fun two');
};

func(); // all becaouse we ivoked this function

// Asyncronous code example
const box = () => {
    setTimeout(() => {
        console.log('Box One'); // outputs the last after 1 sec
    }, 10);

    box2(); // out puts this next from the box2 function

    console.log('Box part two');
};

const box2 = () => {
    console.log('Box Two'); // outputs this last
};

box();