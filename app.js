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
    text:" When a magnet is held at rest or stationary the induce current is seen to be zero.",
},
{
    id:2,
    img:"./images/science-icon1.png",
    title:"Science",
    text:"Protein can be hydrolyzed to form amino acid by boiling them with solution of HCL(Hydrochloric acid)  or NaOH(sodium hydroxide).",
},
{
    id:3,
    img:"./images/science-icon1.png",
    title:"Science",
    text:" Nutrition is the taking in of food substance by living organisms, needed to supply nutrient to enhance the metabolic activities going on within the body.",
},
{
    id:4,
    img:"./images/business.png",
    title:"Commercial",
    text:"Occupation is any productive activities in which people engage in as a source of income.",
},
{
    id:5,
    img:"./images/business.png",
    title:"Commercial",
    text:" The major advantage of advertisement is to increase the sales of a business.",
},
{
    id:6,
    img:"./images/business.png",
    title:"Commercial",
    text:"Profit and loss account is the account that reveals the net profit or loss in an organization or company.",
},
{
    id:7,
    img:"./images/art-icon.png",
    title:"Art",
    text:"Power is the ability to control one's behaviour either in a positive or negative way.",
},
{
    id:8,
    img:"./images/art-icon.png",
    title:"Art",
    text:"Authority is the legal right a particular person or group of people have in order to enforce laws that the citizens must obey.",
},
{
    id:9,
    img:"./images/art-icon.png",
    title:"Art",
    text:" Aorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempore, voluptatum libero optio fugit magnam est soluta veniam minima accusantium, at harum dicta ipsum blanditiis omnis. Natus eum, laborum in nam dignissimos molestiae maxime hic esse neque architecto quo ex animi numquam sequi ullam culpa quae voluptate nulla? Tempora, dolorem.",
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

