let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});


let toggle = document.getElementById('container')
let inicio = document.getElementById('inicio')
let body = document.querySelector('body')
let header = document.querySelector('header')
let footer = document.querySelector('footer')

toggle.onclick = function(){

  toggle.classList.toggle('active')
  body.classList.toggle('active')
  header.classList.toggle('active')
  footer.classList.toggle('active')
  inicio.classList.toggle('active')
}




