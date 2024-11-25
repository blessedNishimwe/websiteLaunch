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
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==========CHANGE BACKGROUND HEADER===========*/

const bgHeader = () =>{
    const header = document.getElementById('header')
    //Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')

}

window.addEventListener('scroll', bgHeader)
bgHeader()


/*==========SWIPER SERVICES===========*/

const swiperServices = new Swiper('.service-swiper', {  
        loop:true,
        grabCursor: true,
        spaceBetween:24,
        slidesPerView: 'auto',

        navigation : {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
  
    })