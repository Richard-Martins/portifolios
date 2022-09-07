var sidebar = document.getElementById('sidebar')
var line = document.querySelector('.line')
var navbar = document.querySelector('.navbar')

sidebar.addEventListener('click', toggle)

function toggle(){
    sidebar.classList.toggle('active')
    navbar.classList.toggle('active')
}



function imgSlider (anything){
    document.querySelector('.pepsi').src = anything
}

function changeBgColor (color){
    var body = document.body
    body.style.backgroundColor = color
}





