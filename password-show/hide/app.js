let input = document.querySelector('input')
let eye = document.querySelector('.fa-eye')

eye.addEventListener("click", () =>{
    input.type === "password" ? input.type = "text" : input.type = "password"
})