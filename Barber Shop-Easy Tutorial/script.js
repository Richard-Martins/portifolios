var barOpen = document.getElementById("bar-open");
var sidebar = document.getElementById("nav-links");

barOpen.addEventListener("click", toggleopen);

function toggleopen() {
  if (sidebar.style.left == "-100%") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-100%";
  }
}
