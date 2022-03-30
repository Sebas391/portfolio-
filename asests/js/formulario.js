let btnForm = document.getElementById("btn-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let asunto = document.getElementById("message");
let error = document.getElementById("error");
btnForm.addEventListener("click",(e)=>{
  e.preventDefault();
  let warmings = "";
  let entrar = false;
  error.textContent = "";
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
  if(name.value.length == "" || name.value.length == null){
      warmings += "el nombre no debe estar vacío ";
      entrar = true;
  }else if(name.value.length < 8){
      warmings += "el nombre es muy corto ";
      entrar = true;
  }
  if(emailRegex.test(email.value)){
      entrar = false;
  }else{
      warmings += "email no válido ";
      entrar = true;
  }
  if(asunto.value.length == "" || asunto.value.length == null){
    warmings += "el asunto no debe estar vacío ";
    entrar = true;
  }else if(asunto.value.length < 80){
    warmings +="cómo mínimo el asunto debe contener 80 carácteres ";
    entrar = true;
  }
 if(entrar){
      error.textContent = warmings;
 }else{
      let modal = document.querySelector(".modal");
      error.textContent = "Enviado...";
      modal.classList.remove("modal-active");
 }
});
