// Dom intro
// Accessing/Selecting Elements via DOM
const clas = document.getElementsByClassName('test1'); // selects element by classname
const id = document.getElementById('test3'); // this is the most efficient way of selecting elements form the document
const tag = document.getElementsByTagName('p'); // selects element by tag name
const cssAll = document.querySelectorAll('h2.testing'); // selects all elements passed in {ids,  class and tags}
const css = document.querySelector('h3.testing') // query selectors are verstile, the can replace all other methods of selecting elements
const button = document.querySelector('button')

// element methods and properties
button.addEventListener('click', () => {
    alert('Nze wuuyo');
})
id.innerHTML = 'Mukama Yebazibwe';
tag.style.color = 'red';
cssAll.forEach((css) => {
    css.style.color = 'blue';
});

console.log(clas)
console.log(id);
console.log(tag);
console.log(cssAll)
console.log(css)




