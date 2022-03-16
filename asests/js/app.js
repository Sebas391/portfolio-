let toggleMenu = document.getElementById("toggle-menu");
let menu = document.querySelector(".menu");
toggleMenu.addEventListener("click",()=>{
  menu.classList.toggle("menu-active");
});
let header = document.querySelector(".header");
window.addEventListener("scroll",()=>{
  header.classList.toggle("header-shadow",window.scrollY> 0);
});

// v3
window.sr = new ScrollReveal();

sr.reveal('section', { 
  delay: 500 ,
  interval: 16, 
  reset: true
});
