// scroll function

const scrollBtn = document.querySelector(".scroll-btn");
const header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    scrollBtn.classList.toggle("active", window.scrollY > 500);
    header.classList.toggle("change", window.scrollY > 100);
});

scrollBtn.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// links function

const topics = document.querySelector(".topics");
const links = document.querySelector(".links");
const allLinks = document.querySelectorAll(".links a")
const angleUp = document.querySelector(".up");
const angleDown = document.querySelector(".down");
const headerR = document.querySelector(".header-container .header-r");


topics.addEventListener("click", ()=>{
links.classList.toggle("show-links");
angleUp.classList.toggle("active");
angleDown.classList.toggle("active");
headerR.classList.toggle("show-logo")

})


allLinks.forEach((link)=>{
link.addEventListener("click", ()=>{
    links.classList.remove("show-links");
    headerR.classList.remove("show-logo")
})
})