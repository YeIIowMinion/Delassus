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