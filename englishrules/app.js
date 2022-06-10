// scroll function

const scrollBtn = document.querySelector(".scroll-btn");
const header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    scrollBtn.classList.toggle("active", window.scrollY > 500);
    header.classList.toggle("change", window.scrollY > 50);
});

scrollBtn.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// links function

const topics = document.querySelector(".topics");
const links = document.querySelector(".links");
const allLinks = document.querySelectorAll(".links a")

topics.addEventListener("click", ()=>{
links.classList.toggle("show-links");
});

allLinks.forEach((link)=>{
link.addEventListener("click", ()=>{
    links.classList.remove("show-links");
})
})