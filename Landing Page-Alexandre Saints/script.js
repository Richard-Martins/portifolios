let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector("#sidebar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  sidebar.classList.toggle("active");
});
