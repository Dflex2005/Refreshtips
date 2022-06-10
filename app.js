//typing function
const typing =["Helps you to learn more", "Helps you to have ideas on different topics", "Latest information on education"]

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function displayText(){
    if(count === typing.length){
        count = 0;
    } 

    currentText = typing[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing-text").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(displayText, 250)
};
displayText();



// sidebar function
const sideBar = document.querySelector(".sidebar");
const barContainer = document.querySelector(".bar-container");
const cancel = document.querySelector(".cancel");
sideBar.addEventListener("click", ()=>{
    barContainer.classList.add("active");
});
cancel.addEventListener("click", ()=>{
    barContainer.classList.remove("active");
});

document.body.addEventListener("dblclick", ()=>{
    barContainer.classList.remove("active");
});




// filter and show function
const keyPoints = [
{
    id:1,
    img:"./images/science-icon1.png",
    title:"Science",
    text:" Sorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:2,
    img:"./images/science-icon1.png",
    title:"Science",
    text:" Sorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:3,
    img:"./images/science-icon1.png",
    title:"Science",
    text:" Sorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:4,
    img:"./images/science-icon1.png",
    title:"Science",
    text:" Sorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:5,
    img:"./images/science-icon1.png",
    title:"Science",
    text:" Sorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:6,
    img:"./images/business.png",
    title:"Commercial",
    text:" Corem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:7,
    img:"./images/business.png",
    title:"Commercial",
    text:" Corem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:8,
    img:"./images/business.png",
    title:"Commercial",
    text:" Corem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:9,
    img:"./images/business.png",
    title:"Commercial",
    text:" Corem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:10,
    img:"./images/business.png",
    title:"Commercial",
    text:" Corem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:11,
    img:"./images/art-icon.png",
    title:"Art",
    text:" Aorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:12,
    img:"./images/art-icon.png",
    title:"Art",
    text:" Aorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:13,
    img:"./images/art-icon.png",
    title:"Art",
    text:" Aorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:14,
    img:"./images/art-icon.png",
    title:"Art",
    text:" Aorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
{
    id:15,
    img:"./images/art-icon.png",
    title:"Art",
    text:" Aorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
},
];

const showContent = document.querySelector(".show-content");

window.addEventListener("DOMContentLoaded", ()=>{
    displayAll(keyPoints);
    displayContent(keyPoints);
});



function displayContent(displayScience){
    let display = displayScience.map((point)=>{
        if(point.title === "Science"){
            return `<div class="sub-content">
            <div class="head-content">
            <img src="${point.img}" alt="">
            <p class="content-title">${point.title}</p>
        </div>
        <div class="content-body">${point.text}</div>
        </div>`
        }
    });
    showContent.innerHTML = display.join("")
}

function displayAll(displayScience){
    let display = displayScience.map((point)=>{
            return `<div class="sub-content">
            <div class="head-content">
            <img src="${point.img}" alt="">
            <p class="content-title">${point.title}</p>
        </div>
        <div class="content-body">${point.text}</div>
        </div>`
    });
    showContent.innerHTML = display.join("")
}

const filterBtn = document.querySelectorAll(".filter-btn");


filterBtn.forEach((items)=>{
    items.addEventListener("click", (e)=>{
        const selectItems = e.currentTarget.dataset.id;
        
        const filterContent = keyPoints.filter((filterItems)=>{
            if(selectItems === filterItems.title){
                return filterItems;
            }
        });
        displayAll(filterContent)
    });

});


const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button)=>{
const selectBtns = button.querySelector(".filter-btn");
const allItems = document.querySelector(".science");
selectBtns.addEventListener("click", ()=>{
   allItems.classList.remove("science")

   
buttons.forEach((butt)=>{
if(butt !== button){
    butt.classList.remove("show-style")
}
});



    button.classList.add("show-style");
});
});

//date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const getYear = new Date().getFullYear();
const getMonth = new Date().getMonth();
const getDay = new Date().getDate();

const showDate = document.querySelector(".show-date");
showDate.innerHTML = `${getDay}-${months[getMonth]}-${getYear}`;

