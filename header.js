let faBars = document.querySelector(".fa-bars")
let elips = document.querySelector(".header__elips")
let images = document.querySelector(".header__navigation-block")
let nav2Box = document.querySelector(".nav-2__box")
let faX = document.querySelector(".fa-x")
faBars.addEventListener("click", function(){
    if(elips.className === "header__elips"){
        elips.classList.add("black")
        faBars.classList.add("hover")
        images.classList.add("translate")
        nav2Box.classList.add("menu")
        faX.classList.add("faX")
    } else {
        elips.classList.remove("black")
        faBars.classList.remove("hover")
        images.classList.remove("translate")
        nav2Box.classList.remove("menu")
        faX.classList.remove("faX")
    }
})

let cucumbers = document.querySelector(".Cucumbers")
let tomatoes = document.querySelector(".Tomatoes")
let carrots = document.querySelector(".Carrots")
let beets = document.querySelector(".Beets")

let cucumberImg = document.querySelector(".cucumberImg")
let tomatoeImg = document.querySelector(".tomatoeImg")
let carrotsImg = document.querySelector(".carrotsImg")
let beetImg = document.querySelector(".beetImg")

cucumbers.addEventListener("mouseenter", function(){
    cucumberImg.classList.add("img")
    beetImg.classList.remove("img")
    tomatoeImg.classList.remove("img")
    carrotsImg.classList.remove("img")
})
tomatoes.addEventListener("mouseenter", function(){
    tomatoeImg.classList.add("img")
    cucumberImg.classList.remove("img")
    carrotsImg.classList.remove("img")
    beetImg.classList.remove("img")
})
carrots.addEventListener("mouseenter", function(){
    carrotsImg.classList.add("img")
    tomatoeImg.classList.remove("img")
    cucumberImg.classList.remove("img")
    beetImg.classList.remove("img")
})
beets.addEventListener("mouseenter", function(){
    beetImg.classList.add("img")
    carrotsImg.classList.remove("img")
    cucumberImg.classList.remove("img")
    tomatoeImg.classList.remove("img")
})