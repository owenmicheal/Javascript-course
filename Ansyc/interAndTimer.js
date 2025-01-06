// Async 
// intervals and Timers

// set interval
const myInterval = setInterval(() => alert('Hello owen'), 10000); // sets the interval

// clears the interval
clearInterval(myInterval);

// set time out{this waits till the time you allocated for it to exacute code}
const myTimeOut = setTimeout(() => {
    alert('I have alearted you after 5 seconds');
}, 5000); // execute the code after five second and thats it untill u reload the page

// Clear TimeOut interval
clearTimeout(myTimeOut);



