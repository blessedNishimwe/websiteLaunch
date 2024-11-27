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

    /*==========SHOW SCROLL UP===========*/
    
    const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
        //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll

        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')

    }
    window.addEventListener('scroll',scrollUp)

    /*==========SCROLL SECTIONS ACTIVE lINK===========*/
    const sections = document.querySelectorAll('section[id]')

    const scrollActive = () => {
    const scrollDown= window.scrollY

    sections.forEach( current =>{
   const  sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop -58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
          }else {
            sectionsClass.classList.remove('active-link')
          }

    })

    }
    window.addEventListener('scroll', scrollActive)
    
     /*==========SCROLL REVEAL ANIMATION===========*/
     const sr = ScrollReveal ({
    origin:'top',
    distance: '100px',
    duration: 2500,
    delay: 400,
      // reset: true, // Animation repeat
    })

    sr.reveal ('.home-description, .services-data, .service-swiper, .footer-container')
    sr.reveal ('.home-images', {origin: 'bottom', delay: 1000})
    sr.reveal ('.about-images, .contact-img', {origin: 'left'})
    sr.reveal('about-data, .contact-data',{origin:'right'})
    sr.reveal('projects-card',{interval:100})