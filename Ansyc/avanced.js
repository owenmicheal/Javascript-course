// Advanced Javascript 
// Data fecthing
// from APIs {Aplication programming interface}
const fetch = (username, box) => {
    console.log('fetching data..');

    setTimeout(()=> {
        console.log('[Now We Have the user]')
        box({ username });
    }, 2000);
};
// call back hell
const fetchPhoto = (username, photo) => {
    setTimeout(() => {
        console.log('[Now we have the photos]');
        photo('[ photo1 photo2 photo3]') // this is the callback storage
    }, 2000);
};
const contactInfo = (photo, contacts) => {
    setTimeout(() => {
        console.log('[Now we have the contacts]');
        contacts('[ 0701300204 0787067299 ]');
    }, 2000);
};
const email = (contacts, email) => {
    setTimeout(() => {
        console.log('[Now we have your email]');
        email('[owenmicheal3rd@gmail.com]');
    }, 2000);
};
const birthYear = (email, birthYear) => {
    setTimeout(() => {
        console.log('[We now have your Year of Birth]');
        birthYear('[ 19/08.2000 ]');
    }, 2000);
};
const country = (birth, nationality) => {
    setTimeout(() => {
        console.log('[Now we have got your nationality]');
        nationality('[ Ugandan ]');
    }, 2000);
};

// you nest all the ivoked method with in another depending on how you hav set your time
// call back hell becomes unreadable{its difficult to manatain}
fetch('Micheal', (user) => {
    console.log(`Your user name is ${user.username}`);

    fetchPhoto(user.username, (photo) => {
        console.log(`Your Photos are ${photo}`);

        contactInfo(user.photo, (contact) => {
            console.log(`Your contacts are ${contact}`);

            email(user.contact, (email) => {
                console.log(`Your email is ${email}`);

                birthYear(user.email, (birth) => {
                    console.log(`Your yer of birth is ${birth}`);
                    
                    country(user.birth, (nation) => {
                        console.log(`Your nationaility is a ${nation}`);

                    });
                });
            });
        });
    });
});


