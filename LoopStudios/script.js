// =========================NAVBAR SHRIK===================
let navbar = document.getElementById("navbar");
window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// =========================NAVBAR===================
let menu = document.getElementById("menu");
let menuX = document.getElementById("menu-x");
let navlist = document.getElementById("navlist");

menu.addEventListener("click", () => {
  if (navlist.style.top === "-1000%") {
    navlist.style.top === "75px";
    navbar.style.backgroundColor = "black";
  }
});

console.log(menu);
