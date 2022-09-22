var menuIcon = document.querySelector(".menu-icon");
var navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", toggleOpen);

function toggleOpen() {
  menuIcon.classList.toggle("active");
  navLinks.classList.toggle("active");
}
