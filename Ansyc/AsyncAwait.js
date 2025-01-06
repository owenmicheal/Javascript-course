// Ansyc Await is an easier way of working with Promises 
// Ansyc functions return promises
// Await waits for the promise to return a result
const user = (username) => {
    return new Promise((resolve, reject) => {
        console.log('fetching data...');
        setTimeout(() => {
            console.log('we have got your name');
            resolve({ username });
        }, 2000)
    });

};

const contacts = (contact) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('0701300204');
        }, 2000);
    });
};

const bithYear = (birth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('19/08/2000');
        }, 2000);
    });
};

const tut = async () => {
    const use = await user('Owen');
    const contacte = await contacts(use.username);
    const bith = await bithYear(contacte);

    console.log(bith);
};

tut();