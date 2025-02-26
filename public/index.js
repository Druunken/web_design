import { whyPomContent,
    platformContent,
    currencyContent,
    changelogContent } from './content.js'


const contentModal = document.getElementById("modal")
const titleDiv = document.querySelector(".title-div")
const trialDiv = document.querySelector(".trial-div")



const rmAcitve = () => {
    const getBtns = document.querySelectorAll(".nav-title")
    getBtns.forEach((item) => {
        item.classList.remove("active")
    })
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
    titleDiv.style.display = "none"
    trialDiv.style.display = "none"
    contentModal.classList.add("active")

    contentModal.insertAdjacentHTML("beforeend",content)

    console.log(msg)
}

document.addEventListener("click",(ev) => {
    if(ev.target.innerText === "Why pomExpen$e?"){
        showContent(whyPomContent,"Why pom expenses baby",ev)

    }else if(ev.target.innerText === "Platform"){
        showContent(platformContent,"Platform",ev)

    }else if(ev.target.innerText === "Currencies"){
        showContent(currencyContent,"Currencies",ev)
        
    }else if(ev.target.innerText === "Changelog"){
        showContent(changelogContent,"Changelog",ev)

    }else if(ev.target.id.includes("main-title")){
        resetToStart()

    }
})