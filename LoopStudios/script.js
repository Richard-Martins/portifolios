var menuOpen = document.getElementById("menu-open");
var menuClose = document.getElementById("menu-close");
var navlinks = document.getElementById("nav-links");

menuOpen.addEventListener("click", toggleopen);
menuClose.addEventListener("click", toggleclose);

function toggleopen() {
  navlinks.style.top = "0";
}

function toggleclose() {
  navlinks.style.top = "-100%";
}
