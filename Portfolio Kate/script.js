var body = document.body;
var openMenu = document.getElementById("open-menu");
var closeMenu = document.getElementById("close-menu");
var navLinks = document.getElementById("nav-links");
var navbar = document.querySelector(".navbar");
var titulo = document.querySelector(".titulo");
var paragrafo = document.getElementsByTagName("p")[0];
var btn = document.querySelector(".btn");
var socialMedia = document.querySelector(".social-media");
var changeBg = document.getElementById("changeBg");
var conteiner = document.querySelector(".conteiner");

openMenu.addEventListener("click", openNavbar);
closeMenu.addEventListener("click", closeNavbar);
conteiner.addEventListener("click", touchOut);
changeBg.addEventListener("click", switchBg);

function switchBg() {
  changeBg.classList.toggle("active");
  body.classList.toggle("active");
  navLinks.classList.toggle("active");
  openMenu.classList.toggle("active");
  titulo.classList.toggle("active");
  paragrafo.classList.toggle("active");
  btn.classList.toggle("active");
  socialMedia.classList.toggle("active");
}

function openNavbar() {
  navLinks.style.left = "0";
}

function closeNavbar() {
  navLinks.style.left = "-100%";
}

function touchOut() {
  navLinks.style.left = "-100%";
}
