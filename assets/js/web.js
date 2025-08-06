/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',() => {
            navMenu.classList.add('show-menu')
        })
    }


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader =() =>{
    const header = document.getElementById('header')
    this.scrollY >=50? header.classList.add('scroll-header')
                      :header.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader);
/*=============== POPULAR SWIPER ===============*/
let swiperPagination = new Swiper('.popular-container',{
    loop: true,
    spaceBetween:24,
    slidesPerview:'auto',
    grabCursor: true,

    pagination:{
        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    breakpoints:{
        768: {
            slidesPerview: 3,
        },
        1024:{
            slidesPerview: 3,
            spaceBetween: 48,
        }

            
            
        
    }

})

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured-content', {
    selectors: {
        target: '.featured-card'
    },
    animation: {
        duration: 400
    }
})

/* Link active featured */
const linkFeatured = document.querySelectorAll('.featured-item')

function activeFeatured(){
    linkFeatured.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured)) 

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
