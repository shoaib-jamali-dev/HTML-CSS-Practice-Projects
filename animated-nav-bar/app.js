const toggle = document.querySelector("#toggle")
const active = document.querySelector("#nav")

toggle.addEventListener('click', ()=> active.classList.toggle("active"))