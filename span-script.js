let spandq = document.querySelector(".span-dq")
let spanhawg = document.querySelector(".span-hawg")
let spanchicks = document.querySelector(".span-chicks")
let spancatapult = document.querySelector(".span-catapult")

let spaninnerdq = document.querySelector(".span-innerdq")
let spaninnerhawg = document.querySelector(".span-innerhawg")
let spaninnerchicks = document.querySelector(".span-innerchicks")
let spaninnercatapult = document.querySelector(".span-innercatapult")

spandq.addEventListener("mouseover", function() {

    spaninnerdq.innerHTML= "Mayo 2021 - Marzo 2023"
    spaninnerdq.style.color= "#29140a"
    
})
spandq.addEventListener("mouseleave", function() {

    spaninnerdq.style.display = ''
    spaninnerdq.style.color = "#D6532C"
    
    
})


spanhawg.addEventListener("mouseover", function() {

    spaninnerhawg.innerHTML= "Abril 2023 - Presente"
    spaninnerhawg.style.color= "#29140a"
    
})
spanhawg.addEventListener("mouseleave", function() {

    spaninnerhawg.style.display = ''
    spaninnerhawg.style.color = "#D6532C"
    
    
})

spanchicks.addEventListener("mouseover", function() {

    spaninnerchicks.innerHTML= "Octubre 2023 - Marzo 2024"
    spaninnerchicks.style.color= "#29140a"
    
})
spanchicks.addEventListener("mouseleave", function() {

    spaninnerchicks.style.display = ''
    spaninnerchicks.style.color = "#D6532C"
    
    
})


spancatapult.addEventListener("mouseover", function() {

    spaninnercatapult.innerHTML= "Junio 2024"
    spaninnercatapult.style.color= "#29140a"
    
})
spancatapult.addEventListener("mouseleave", function() {

    spaninnercatapult.style.display = ''
    spaninnercatapult.style.color = "#D6532C"
    
    
})

