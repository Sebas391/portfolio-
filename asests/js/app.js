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
let btn = document.querySelector("#btn-contac");
let modal = document.querySelector(".modal");
let cardForm = document.querySelector(".card-modal");
let btnSend = document.querySelector(".btn-send");
  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.add("modal-active");
  });
  modal.addEventListener("click",()=>{
    cardForm.addEventListener("click",(e)=>{
      e.stopPropagation();
    })
    modal.classList.remove("modal-active");
  });
  btnSend.addEventListener("click",(e)=>{
    e.preventDefault();
  });
  let link = document.querySelectorAll(".link");
  for (links of link){
    links.addEventListener("click",()=>{
      menu.classList.remove("menu-active");
    });
  };
