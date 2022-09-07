var menu = document.querySelector('.menu')
var menuBar = document.querySelector('.menu-bar')
var bar = document.querySelector('.bar')

menuBar.addEventListener('click', clicou)

function clicou(){
    menuBar.classList.toggle('active')
    bar.classList.toggle('active')
    menu.classList.toggle('active')
}