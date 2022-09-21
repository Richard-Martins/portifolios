var navLinks = document.getElementById("nav-links");
var darkmode = document.querySelector(".darkMode");
var body = document.body;

darkmode.addEventListener("click", changeBg);

function changeBg() {
  body.classList.toggle("active");
}

sidebar.addEventListener("click", toggleOpen);
function toggleOpen() {
  var sidebar = document.getElementById("sidebar");
  navLinks.style.left = "0";
}

cross.addEventListener("click", toggleClose);
function toggleClose() {
  var cross = document.getElementById("cross");
  navLinks.style.left = "-100%";
}
