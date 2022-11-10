// =========SHIRINK NAVBAR===============
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// =================SIDEBAR=================
let navlist = document.getElementById("navlist");
let menu = document.getElementById("menu");
let menuX = document.getElementById("menu-x");

menu.addEventListener("click", () => {
  navlist.classList.add("active");
  menu.style.display = "none";
  menuX.style.display = "block";
});

menuX.addEventListener("click", () => {
  navlist.classList.remove("active");
  menu.style.display = "block";
  menuX.style.display = "none";
});

// =================SIDEBAR SCROLL=================
window.addEventListener("scroll", () => {
  navlist.classList.remove("active");
  menuX.style.display = "none";
  menu.style.display = "block";
});

// ========SCROLL FUNCTION===============
