import { whyPomContent,
    platformContent,
    currencyContent,
    changelogContent } from './content.js'


const contentModal = document.getElementById("modal")
const titleDiv = document.querySelector(".title-div")
const trialDiv = document.querySelector(".trial-div")
const contentSec = document.getElementById("content-sec")
const scrollUpDiv = document.getElementById("scroll-up-div")

const state = "first-state"

const SCREEN_WIDTH = window.screen.availWidth
const SCREEN_HEIGHT = window.innerHeight

const scrollYTolerance = SCREEN_HEIGHT - 50

/* create space */
const contentSecTop = contentSec.getBoundingClientRect().top
const leftOverScreen = SCREEN_HEIGHT - contentSecTop
contentSec.style.height = `${SCREEN_HEIGHT - 50}px`
contentSec.style.marginTop = `${leftOverScreen}px`



const rmAcitve = () => {
    const getBtns = document.querySelectorAll(".nav-title")
    const getCircles = document.querySelectorAll(".nav-circle")

    for(let i = 0; i < getBtns.length; i++){
        getBtns[i].classList.remove("active")
        getCircles[i].classList.remove("active")
    }
}
const resetToStart = () => {
    rmAcitve()
    titleDiv.style.display = "flex"
    trialDiv.style.display = "flex"

    const childElement = document.getElementById("contentModal")
    if(childElement) contentModal.removeChild(childElement)
    
    if(contentModal.classList.contains("active")) contentModal.classList.remove("active")
}


const showContent = (content,msg,ev) => {
    rmAcitve()
    const childElement = document.getElementById("contentModal")
    if(childElement) contentModal.removeChild(childElement)
    
    ev.target.classList.add("active")
    ev.target.parentElement.children[1].classList.add("active")
    titleDiv.style.display = "none"
    trialDiv.style.display = "none"
    contentModal.classList.add("active")

    contentModal.insertAdjacentHTML("beforeend",content)
    console.log(msg)
}

window.document.addEventListener("click",(ev) => {
    if(ev.target.innerText === "Why pomExpen$e?"){
        showContent(whyPomContent,"Why pom expenses baby",ev)

    }else if(ev.target.innerText === "Platform"){
        showContent(platformContent,"Platform",ev)

    }else if(ev.target.innerText === "Currencies"){
        showContent(currencyContent,"Currencies",ev)
        
    }else if(ev.target.innerText === "Changelog"){
        showContent(changelogContent,"Changelog",ev)

    }else if(ev.target.innerText === "Start for free now"){
        window.scrollTo({
            top: SCREEN_HEIGHT,
            behavior: "smooth"
        })
    }else if(ev.target.id.includes("main-title")){
        resetToStart()
    }
})

window.addEventListener("scroll",() => {
    if(!scrollUpDiv.classList.contains("active")){
        setTimeout(() => {
            if(window.scrollY > scrollYTolerance){
                scrollUpDiv.classList.add("active")
            }
        }, 1500);
    }

    if(window.scrollY < 300){
        scrollUpDiv.classList.remove("active")
    }
})


scrollUpDiv.addEventListener("click",() => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
    scrollUpDiv.classList.remove("active")
})


