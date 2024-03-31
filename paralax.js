let img = document.querySelectorAll(".paralax")
let word = document.querySelectorAll(".text-paralax")
window.addEventListener("mousemove", function(event){
    let x = event.offsetX
    let y = event.offsetY
    for(let i = 0; i < img.length; i++){
        let paralax = img[i]
        paralax.style.transform = `translate(${-x / 30}px, ${-y / 30}px)`
    }
    for(let j = 0; j < word.length; j++){
        let paralaxWord = word[j]
        paralaxWord.style.transform = `translate(${x / 150}px, ${y / 150}px)`
    }
})