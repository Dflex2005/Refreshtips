//typing function
const typing =["Helps you to learn more", "Offers educational tips", "Give you access to free learning"]

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
    text:"Dentition is the arrangement of teeth in an organism.",
},
{
    id:2,
    img:"./images/science-icon1.png",
    title:"Science",
    text:"The major raw material in a plastic industry is called ethene",
},
// {
//     id:3,
//     img:"./images/science-icon1.png",
//     title:"Science",
//     text:"",
// },
{
    id:4,
    img:"./images/business.png",
    title:"Commercial",
    text:"Mobiilization is the process of creating groups, association, and organisation with the aim of collective goals.",
},
{
    id:5,
    img:"./images/business.png",
    title:"Commercial",
    text:"Services are intangible product which cannot be seen or touched that are provided to consumers or other organisation.",
},
// {
//     id:6,
//     img:"./images/business.png",
//     title:"Commercial",
//     text:"",
// },
// {
//     id:7,
//     img:"./images/art-icon.png",
//     title:"Art",
//     text:"",
// },
{
    id:8,
    img:"./images/art-icon.png",
    title:"Art",
    text:"A prose is an ordinary non-metrical form of writing or spoken language.",
},
{
    id:9,
    img:"./images/art-icon.png",
    title:"Art",
    text:"The executive arm of government implement and execute the law.",
}
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

