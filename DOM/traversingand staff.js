// traversing and remove child
// create
const heading = document.createElement('h1');
heading.innerHTML = 'God is Great';
heading.style.color = 'green';

const body = document.querySelector('body');
body.appendChild(heading);

// traversing
const sub = document.querySelector('.subjects');
const fav = document.querySelector('.fav');
const newSub = document.createElement('li') // create new element
newSub.innerHTML = 'Geography'; // add content to it
sub.appendChild(newSub); // add the newSub to the Subjects tag/element
fav.nextElementSibling.remove(); // removes the element below our fav

console.log(sub.firstElementChild); // first element in the list 
console.log(sub.lastElementChild); // last element in the list
console.log(fav); // displays a lis with fav class
console.log(fav.nextElementSibling); // displays next element in the list
console.log(fav.previousElementSibling) // displays previous element
console.log(fav.parentElement); // displays the parent element


