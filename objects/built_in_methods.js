// object built in methods
// to use the object buolt in metods, u must use the Object keyword then dot and method {Object.keys()}

// Object.keys()
const employees = {
    secretary: 'Leticia',
    Manager: 'Owen',
    Accountant: 'Oprah',
    Sales: 'Tevor'
}
const positions = Object.keys(employees); // return the keys of the emplyees object

console.log(positions);

// Object.values
const names = Object.values(employees);

console.log(names); // returns the values of the object

// Object.entries(), this creates a nested array of key/value pairs of an object
const entries = Object.entries(employees);

console.log(entries);

// object.freeze() prevents modification
const frozen = Object.freeze(employees); // this prevents modifying the object

// Object.seal this allows modification of current properties but prevents new properties from being added to the object
const seal = Object.seal(employees);
