// get all the necessary items
const startBtn = document.querySelector(".start-btn button");
const contentBox = document.querySelector(".content-box");
const exitBtn = contentBox.querySelector(".buttons .quit");
const continueBtn = contentBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");
const optionList = document.querySelector(".option-list");
const timeCount = quizBox.querySelector(".timer .timer-sec");
const timerOff = quizBox.querySelector("header .timer-text");


// startbtn clicked
startBtn.addEventListener("click", ()=>{
    contentBox.classList.add("active");
});


// exitbtn clicked
exitBtn.addEventListener("click", ()=>{
    contentBox.classList.remove("active");
});


// continuebtn clicked
continueBtn.addEventListener("click", ()=>{
    contentBox.classList.remove("active");
    quizBox.classList.add("active");
    showQuestions(0);
    queCounter(1);
    startTimer(30);
});

let queCount = 0;
let queNumb = 1;
let counter;
let timerValue = 30;
let userScore = 0;


const nextBtn = quizBox.querySelector(".next-btn");
const resultBox = document.querySelector(".result-box");
const restartQuiz = resultBox.querySelector(".buttons .restart");
const quitQuiz = resultBox.querySelector(".buttons .quit");


// restart quiz
restartQuiz.addEventListener("click", ()=>{
    resultBox.classList.remove("active");
    quizBox.classList.add("active")
    let queCount = 0;
    let queNumb = 1;
    let timerValue = 30;
    let userScore = 0;
        queCount++;
        queNumb++;
    showQuestions(queCount);
    queCounter(queNumb);
    clearInterval(counter);
    startTimer(timerValue);
    nextBtn.style.display = "none";
    timerOff.textContent = "Time Left";
    window.location.reload();
});


// quitbtn clicked
quitQuiz.addEventListener("click", ()=>{
    window.location.reload();
})

// nextbtn clicked
nextBtn.addEventListener("click", ()=>{
    if(queCount < questions.length -1){
        queCount++;
        queNumb++;
        showQuestions(queCount);
        queCounter(queNumb);
        clearInterval(counter);
        startTimer(timerValue);
        nextBtn.style.display = "none";
        timerOff.textContent = "Time Left";
    }else{
        clearInterval(counter);
        showResultBox();
    }

});

// getting questions an options from array
function showQuestions(index){
    const questionText = document.querySelector(".question-text");
    
    let questionTag = `<span>${questions[index].numb}. ${questions[index].question}</span>`;

    let optionTag =`<div class="option">${questions[index].options[0]}<span></span></div>` + 
                    `<div class="option">${questions[index].options[1]}<span></span></div>` + 
                    `<div class="option">${questions[index].options[2]}<span></span></div>`+ 
                    `<div class="option">${questions[index].options[3]}<span></span></div>`;

    questionText.innerHTML = questionTag;
    optionList.innerHTML = optionTag;
    const options = optionList.querySelectorAll(".option");
    options.forEach((option)=>{
        option.setAttribute("onclick", "optionSelected(this)")
    })
}

let tickIcon = ' <div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    let allOptions = optionList.children.length;
    if(userAns == correctAns){
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);

       for(let i=0; i< allOptions; i++){
        if(optionList.children[i].textContent == correctAns){
            optionList.children[i].setAttribute("class", "option correct");
            optionList.children[i].insertAdjacentHTML("beforeend", tickIcon);
        }
       }
    }

    // one click disable all options
    for(let i=0; i<allOptions ; i++){
        optionList.children[i].classList.add("disabled");
        nextBtn.style.display = "block";
    }
}

function showResultBox(){
    contentBox.classList.remove("active");
    quizBox.classList.remove("active");
    resultBox.classList.add("active");
    const scoreText = resultBox.querySelector(".score-text");
    if(userScore > 3){
        let scoreTag = `<span>Congrats!, You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        let scoreTag = `<span>Nice!, You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
        scoreText.innerHTML = scoreTag;
    }else{
    let scoreTag = `<span>Sorry!, You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
    scoreText.innerHTML = scoreTag;
}
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0"+addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timerOff.textContent = "Time Up";

            let correctAns = questions[queCount].answer;
            let allOptions = optionList.children.length;

            for(let i=0; i< allOptions; i++){
                if(optionList.children[i].textContent == correctAns){
                    optionList.children[i].setAttribute("class", "option correct");
                    optionList.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
               }

               for(let i=0; i<allOptions ; i++){
                optionList.children[i].classList.add("disabled");
            }
            nextBtn.style.display = "block";
        }
    }
}




function queCounter(index){
    const bottomQueCounter = quizBox.querySelector(".total-question");
    let totalQueTag = `<span><p>${index}</p>Of<p>${questions.length}</p>Question</span>`;
    bottomQueCounter.innerHTML = totalQueTag;
}

