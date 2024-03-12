"use strict"

const cv = document.querySelector(".cv ")
const logoCv = document.querySelector(".Cv i")

logoCv.addEventListener("click",()=>{
    if(cv.style.right===""){
        cv.style.right = "50vw"
        cv.style.transition = "1s"
    }else{
        cv.style.right = ""
        cv.style.transition = "1s"
    }
    
})