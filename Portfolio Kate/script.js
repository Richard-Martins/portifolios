var bodyDark = document.body
var moon = document.getElementById('moon')
var sun = document.getElementById('sun')
var navbar = document.querySelector('.navbar')
var icon = document.querySelector('.icon')
var titulo = document.querySelector('.titulo')
var paragrafo = document.querySelector('.paragrafo')
var btn = document.querySelector('.btn')


moon.addEventListener('click', clicar)

function clicar(){``
    moon.classList.toggle('active')
    sun.classList.toggle('active')
    bodyDark.classList.toggle('active')
    navbar.classList.toggle('active')
    titulo.classList.toggle('active')
    paragrafo.classList.toggle('active')
    btn.classList.toggle('active')
    icon.classList.toggle('active')
    
}