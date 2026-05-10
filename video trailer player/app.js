let btn = document.querySelector(".btn")
let close = document.querySelector(".close")
let trailerContainer = document.querySelector(".trailer-container")
let video = document.querySelector("video")

btn.addEventListener("click", ()=>{
    trailerContainer.classList.remove("active");

})

close.addEventListener("click", ()=>{
    trailerContainer.classList.add("active")
    video.pause()
    video.currentTime = 0;
})