const features= document.querySelector(".nav-link1")
const company= document.querySelector(".nav-link2")


features.addEventListener("mouseover",()=>{
    document.querySelector(".sub-menu").style.display="block"
    document.querySelector(".sub-menu1").style.display="none"
})
features.addEventListener("click",()=>{
    document.querySelector(".sub-menu").style.display="none"
})
 function handleClick(){
    document.querySelector(".sub-menu").style.display="none" 
    document.querySelector(".sub-menu1").style.display="none"
 }





 company.addEventListener("mouseover",()=>{
    document.querySelector(".sub-menu1").style.display="block"
    document.querySelector(".sub-menu").style.display="none"
})
company.addEventListener("click",()=>{
    document.querySelector(".sub-menu1").style.display="none"
})
