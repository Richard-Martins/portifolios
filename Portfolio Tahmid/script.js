// =======================SHIRINK NAVBAR=======================
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
// =======================SCROLL FUNCTION=======================
// =======================SIDEBAR=======================
let menu = document.getElementById("menu");
let menuX = document.getElementById("menu-x");
let navlist = document.getElementById("navlist");

menu.addEventListener("click", () => {
  if ((navlist.style.top = "-2000%")) {
    navlist.style.top = "100%";
    menu.style.display = "none";
    menuX.style.display = "block";
  }
});

menuX.addEventListener("click", () => {
  if ((navlist.style.top = "100%")) {
    navlist.style.top = "-2000%";
    menu.style.display = "block";
    menuX.style.display = "none";
  }
});
