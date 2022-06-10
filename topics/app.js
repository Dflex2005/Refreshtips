const scrollBtn = document.querySelector(".scroll-btn");
const header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
    scrollBtn.classList.toggle("active", window.scrollY > 500);
    header.classList.toggle("active", window.scrollY > 50);
});

scrollBtn.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})