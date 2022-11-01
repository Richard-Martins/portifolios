// =================SHIRINK NAVBAR====================
let navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
// ================SCROLL FUNCTION====================
// =======================SIDEBAR====================
