// Promises
// these are fuctions that return sucssesfull data or errors
// thier main aim is to help us not to fall in into call back hell

// promises and error catching
// const user = new Promise((verify, error) => {
//     console.log('fetching data...');

//     setTimeout(() => {
//         console.log('We have got your usename');

//         verify({ username: 'Kimbowa' }); 
//         error('User not found');
//     }, 2000);
// });

// user
// .then((user) => console.log(`Your user name is ${user.username}`))
// .catch((error) => console.log('User not found'));

const user = (username) => {
    return new Promise((resolve, reject) => {
        console.log('fetching data...');

        setTimeout(() => {
            console.log('We have got your username');
            resolve({ username });
        }, 2000);
    });
};

const photo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('We have got your photos');
            resolve('[Photo 1, Photo 2, Photo 3]'); // Simulate photo data
        }, 2000);
    });
};

const email = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('We are getting your email');
            resolve({ email });
        }, 2000);
    });
};

const contacts = (contacts) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('We have got your contacts');
            resolve({ contacts });
        }, 2000);
    });
};

user('Kimbowa')
.then((user) => {
    console.log(`Your username is ${user.username}`);
    return photo();
})
.then((photos) => {
    console.log(`Your photos are ${photos}`);
    return email('kimbowa@example.com'); // Provide email to simulate fetching email data
})
.then((email) => {
    console.log(`Your email is ${email.email}`);
    return contacts('[0701300204, 0787067299]'); // Provide contacts to simulate fetching contacts
})
.then((contact) => {
    console.log(`Your contacts are ${contact.contacts}`);
});