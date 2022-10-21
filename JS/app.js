let navbar = document.querySelector('.navbar')
let item = document.querySelectorAll('ul li a')
let toggle = document.querySelector('.toggle')

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active')
    navbar.classList.toggle('active')
})