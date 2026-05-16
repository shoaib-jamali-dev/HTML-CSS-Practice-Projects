let arrow = document.querySelector(".arrow")

const fade = () =>{
    let position = window.scrollY
    if(position<=5){
        arrow.classList.toggle("fade-in")
        arrow.classList.toggle("fade-out")
    }
}

window.addEventListener("scroll",fade)