// classes
const menuClicked = (currEl) => {
    const menuitem = document.getElementsByClassName('menuitem');
    for( let i = 0; i < menuitem.length; i++ ) {
        menuitem[i].classList.remove('active');
    };
    currEl.classList.add('active')
};