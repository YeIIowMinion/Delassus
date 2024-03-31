let baton = document.querySelectorAll(".button__slide")
let slider = document.querySelector(".slider")
let slider_box = document.querySelectorAll(".slider__box") 
let checkIndex = 0
let rgb = ["#234b75", "#328521", "#8f1e18", "#ffa500"] 
function toSlide(index){
    slider.style.transform = `translateX(-${index * 100}%)`
}
function showSlide(index){
    checkIndex = index
    toSlide(checkIndex)
    document.body.style.backgroundColor = rgb[checkIndex]
}
function nextSlide(){
    checkIndex = (checkIndex + 1) % slider_box.length
    toSlide(checkIndex)
}   
function previousSlide(){
    checkIndex = (checkIndex - 1 + slider_box.length) % slider_box.length
    toSlide(checkIndex)
}
for(let i = 0; i < baton.length; i++){
    baton[i].addEventListener("click", function(){
        showSlide(i)
    })
}   
