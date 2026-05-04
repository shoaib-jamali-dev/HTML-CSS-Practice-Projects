const typed = document.querySelector(".typed-text")
const cursor = document.querySelector(".cursor")

let words = ["awesome","fun","weird","everything","love","cool"]
const typingDelay = 200
const erasingDelay = 200
const newLetterDelay = 2000

document.addEventListener("DOMContentLoaded",()=>{
    if(words.length){
        setTimeout(type,newLetterDelay)

    }
})

let index = 0
let charIndex = 0;

function type(){
    if(charIndex<words[index].length){
        typed.textContent += words[index].charAt(charIndex)
        charIndex++
        setTimeout(type,typingDelay)
    }else{
        setTimeout(erase,newLetterDelay)
    }
}

function erase(){
    if(charIndex>0){
        typed.textContent = words[index].substring(0,charIndex-1)
        charIndex--
        setTimeout(erase,erasingDelay)
    } else {
        index++
        if(index>=words.length){
            index = 0;
        }
        setTimeout(type,typingDelay+1100)
    }
}