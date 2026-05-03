const btn = document.querySelector(".btn")
const hex = document.querySelector("#hexCode")
const body = document.querySelector("body")

function randomColors(){
    let letters = "0123456789ABCDEF"
    let color = "#"

    for(let i =0; i<6;i++){
        color+= letters[Math.floor(Math.random()*16)]
    }
    return color;
}


btn.addEventListener("click",()=>{
    const colors = randomColors()
    hex.textContent = colors
    body.style.backgroundColor = colors

})