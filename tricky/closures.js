// closure in javascript

/* A closure is created when a function is defined
 inside another function, allowing the inner function to
  access variables from the outer function's scope. The inner
   function "closes over" the variables from the outer function. */

const outer = () => {
    const outerVar = 'Hello';

    const inner = () => {
        const innerVar = 'Owen';
        console.log(outerVar, innerVar);//calls both {acceses both} variables from the outer function and the in its self.
    }
    return inner; //outer returns inner
}

const fuc = outer(); //we store the outer() in the fuc
fuc();

// in conlusion closure enables the nested function to acces variables form the outer function
// we console loged both variables and returned the inner function as of the outer so the output is Hell Owen.

// lets have another example

const innit = () => {    //this is the parent function
    const hobby = 'Playing games'; //intialise a variable in the parent function

    const inside = () => { //child function
        console.log(hobby); //call the parent variable from the child function {this is the whole point of closures}
    }

    return inside; //the parent funtion return the inside / child function as its value
}

const func = innit(); // we manuplate it by storing it in ton func
func() // we call it and it will display 'Playing games'