// ==========================SHRINK BAR FUNCTION==================
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("navbar").style.padding = "0% 6%";
    document.getElementById("navbar").style.background = "black";
    document.querySelector(".logo").style.fontSize = "2.3rem";
  } else {
    document.getElementById("navbar").style.padding = "1% 6%";
    document.getElementById("navbar").style.background = "transparent";
    document.querySelector(".logo").style.fontSize = "3rem";
  }
}
// ==========================SCROLL ANIMATION==================

ScrollReveal({ reset: true });

ScrollReveal().reveal(".content-home", {
  distance: "50px",
  origin: "left",
  duration: "1000",
  delay: "300",
});

ScrollReveal().reveal(
  ".conteiner-about, .services, .conteiner-services, .portfolio, .conteiner-portfolio, .blog, .conteiner-blog, .contact-title, .input-box, .footer",
  {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
    delay: "300",
  }
);

// ==========================SIDEBAR=========================
let menu = document.getElementById("menu-icon");
let menuX = document.getElementById("menu-x");
let navlist = document.getElementById("navlist");
let toggleMain = document.getElementById("main");

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

toggleMain.addEventListener("click", () => {
  navlist.style.top = "-2000%";
  menu.style.display = "block";
  menuX.style.display = "none";
});