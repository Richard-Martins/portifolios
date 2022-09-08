var sidebar = document.getElementById('sidebar')
var menuLinks = document.getElementById('menu-links')

sidebar.addEventListener('click', toggle)

function toggle(){
    sidebar.classList.toggle('active')
    menuLinks.classList.toggle('active')
}