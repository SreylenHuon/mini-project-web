let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-3');

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll=()=>{
    menu.classList.toggle('fs-times');
    navbar.classList.toggle('active');
    if(window.scrolly > 250){
        header.classList.addEventListener
    }
}

var swiper = new Swiper(".home-slide", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    loop:true,
  });
 