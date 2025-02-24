
const contentModal = document.getElementById("modal")
const titleDiv = document.querySelector(".title-div")
const trialDiv = document.querySelector(".trial-div")


const rmAcitve = () => {
    const getBtns = document.querySelectorAll(".nav-title")
    getBtns.forEach((item) => {
        item.classList.remove("active")
    })
}

document.addEventListener("click",(ev) => {
    if(ev.target.innerText === "Why pomExpen$e?"){
        rmAcitve()
        ev.target.classList.add("active")
        titleDiv.style.display = "none"
        trialDiv.style.display = "none"
        contentModal.classList.add("active")
        console.log(titleDiv.classList)
        console.log("Why pom expenses baby")
    }else if(ev.target.innerText === "Platform"){
        rmAcitve()
        ev.target.classList.add("active")
        console.log("Platform")
    }else if(ev.target.innerText === "Solutions"){
        rmAcitve()
        ev.target.classList.add("active")
        console.log("Solutions")
    }else if(ev.target.innerText === "Changelog"){
        rmAcitve()
        ev.target.classList.add("active")
        console.log("Changelog")
    }
})