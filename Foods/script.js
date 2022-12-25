// =================SIDEBAR FUNCTION=================
const menuIcon = document.getElementById("menu-icon");
const navlinks = document.getElementById("navlinks");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navlinks.classList.toggle("active");
});

// =================SCROLL FUNCTION SIDEBAR=================
window.addEventListener("scroll", () => {
  navlinks.classList.remove("active");
});
