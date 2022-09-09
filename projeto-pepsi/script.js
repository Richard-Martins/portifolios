var sidebar = document.getElementById('sidebar')
var navlinks = document.getElementById('nav-links')
var header = document.getElementById('header')
var section = document.getElementById('landing-page')

sidebar.addEventListener('click', toggle)

function toggle(){
    sidebar.classList.toggle('active')
    navlinks.classList.toggle('active')
    header.classList.toggle('active')
    section.classList.toggle('active')
}

function imgSlider (anything){
    document.querySelector('.pepsi').src = anything
}

function changeBgColor (color){
    var body = document.body
    body.style.backgroundColor = color
}





