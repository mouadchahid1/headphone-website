/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu") , 
      navToggle = document.getElementById("nav-toggle") , 
      navClose  = document.getElementById("nav-close") ; 
// cekck if navToggle exists 
if(navToggle) { 
    navToggle.addEventListener("click",()=> {
        navMenu.classList.add("menu-show") ;
    })
}  
// cekck if navClose exists 
if(navClose) { 
 navClose.addEventListener("click",()=> {
    navMenu.classList.remove("menu-show");
 })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link") ;  
const linkAction = () => {
    if(navMenu){
        navMenu.classList.remove("menu-show");
    }
}
navLinks.forEach(el=>el.addEventListener("click",linkAction));


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    // WHEN the scroll is great then 50 viewport height ,add the blur
    const header = document.getElementById("header") ; 
    this.scrollY >= 50 ?  header.classList.add("blur-header") 
      : header.classList.remove("blur-header") ;
}
window.addEventListener("scroll" ,blurHeader)

/*=============== SWIPER FAVORITES ===============*/ 
let  swiperFavorites = new Swiper('.favorite__swipper', { 
    loop: true,  
    slidesPerView : "auto", 
    centeredSlides : "auto",
    grabCursor : true ,  

    breakpoints : {
          768 : { 
            slidesPerView : 3,
          }
    }
  
    // If we need pagination
   
  });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up") ; 
  this.scrollY >= 350 ?  scrollUp.classList.add("show-scrollup")  
                      : scrollUp.classList.remove("show-scrollup");
}; 
window.addEventListener("scroll",scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/  
const sections = document.querySelectorAll("section[id]") ;
const scrollActive = () => { 
   const scrollDown = window.scrollY ; 
   sections.forEach(current => {
           const sectionHeight = current.offsetHeight ,  
           sectionTop = current.offsetTop -58 , 
           sectionId= current.getAttribute("id") , 
           sectionClass = document.querySelector(".nav__menu  a[href*="+ sectionId + "]");              
         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link");
         } 
         else { 
          sectionClass.classList.remove("active-link");
         }
          }) ;
}
window.addEventListener("scroll",scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({ 
  origin : "top",
  distance : "80px" , 
  duration : 2500 , 
  delay : 400 , 
  //reset : true , // for animation repeat 
}) ;
sr.reveal(`.home__social , .favorite__container , .footer`) 
sr.reveal(`.home__title span:nth-child(1)`,{origin:"left" , opacity : 1})
sr.reveal(`.home__title span:nth-child(3)`,{origin:"right" , opacity : 1})
sr.reveal(`.home__tooltip, .home__button , .model__button`,{origin:"bottom" })
sr.reveal(`.about__data`,{origin:"left"})   
sr.reveal(`.about__image , .model__tooltip`,{origin:"right"})  



