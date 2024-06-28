let aboutButton = document.querySelector(".about-button")
let dq = document.querySelector(".dq")
let hawg = document.querySelector(".hawg")
let chicks = document.querySelector(".chicks")
let catapult = document.querySelector(".catapult")

let innerdq = document.querySelector(".innerdq")
let innerhawg = document.querySelector(".innerhawg")
let innerchicks = document.querySelector(".innerchicks")
let innercatapult = document.querySelector(".innercatapult")

dq.addEventListener("mouseover", function() {

    innerdq.innerHTML= "May 2021 - March 2023"
    innerdq.style.color= "#29140a"
    
})
dq.addEventListener("mouseleave", function() {

    innerdq.style.display = ''
    innerdq.style.color = "#D6532C"
    
    
})


hawg.addEventListener("mouseover", function() {

    innerhawg.innerHTML= "April 2023 - Present"
    innerhawg.style.color= "#29140a"
    
})
hawg.addEventListener("mouseleave", function() {

    innerhawg.style.display = ''
    innerhawg.style.color = "#D6532C"
    
    
})

chicks.addEventListener("mouseover", function() {

    innerchicks.innerHTML= "October 2023 - March 2024"
    innerchicks.style.color= "#29140a"
    
})
chicks.addEventListener("mouseleave", function() {

    innerchicks.style.display = ''
    innerchicks.style.color = "#D6532C"
    
    
})


catapult.addEventListener("mouseover", function() {

    innercatapult.innerHTML= "June 2024"
    innercatapult.style.color= "#29140a"
    
})
catapult.addEventListener("mouseleave", function() {

    innercatapult.style.display = ''
    innercatapult.style.color = "#D6532C"
    
    
})
