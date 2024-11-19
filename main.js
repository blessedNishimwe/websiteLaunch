/*===========SHOW MENU===========*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle-btn'),
    navClose = document.getElementById('nav-close-btn')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*===========REMOVE MENU MOBILE===========*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav-link, we remove the show-menun class
    navMenu.classList.remove('show-menu')
}
navLink.foreach(n => n.addEventListener('click', linkAction))
