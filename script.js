// buttons
const buttonAsk = document.getElementById("button-ask");
const buttonHelper = document.getElementById("button-help");
const buttonChange = document.getElementById("button-change");
const buttonAnswer = document.getElementById("button-answer");


const codesList = document.getElementsByTagName("code");
const sectionHelpers = document.getElementById("helpers");
let currentCodeBlock = 0;

let spanList = codesList[currentCodeBlock].getElementsByTagName("span");

let currentDataLanguage = "";


function loadQuiz() {
    
    loadAnswerList();
    
    changeCode();
}

// change code
function changeCode() {
    codesList[currentCodeBlock].classList.remove("active");
    if(currentCodeBlock < codesList.length - 1) {
        currentCodeBlock++;
    }
    else {
        currentCodeBlock = 0;
    }
    codesList[currentCodeBlock].classList.add("active");
    spanList = codesList[currentCodeBlock].getElementsByTagName("span");

    displayAnswer(false);
    askNewQuestion();
}

loadQuiz();


// ask
buttonAsk.addEventListener('click', ()=> {
    displayAnswer(false);
    askNewQuestion();
})

function askNewQuestion() {
    const spanArray = Array.from(spanList);
    const currentSpanElement = codesList[currentCodeBlock].getElementsByClassName('selected')[0];

    spanArray.forEach((element) => {
        element.classList.remove('selected');
    })
    
    let spanActive;

    do {
        spanActive = spanList[Math.floor(Math.random()*spanList.length)];
    }
    while(spanActive == currentSpanElement);    // avoid picking the same element twice

    document.getElementById("correct-answer").innerText = spanActive.dataset.type;

    console.log(spanActive.dataset.type);

    spanActive.classList.add('selected');
}

// load the answer list
function loadAnswerList() {

    let answerList = document.getElementById('answer-list');
    const codeQuizSpans = document.getElementById("code-quiz").getElementsByTagName("span");
    let dataTypeSpan = [];

    for(span of codeQuizSpans) {
        //console.log(span);
        //console.log(span.dataset.type);
        if(!dataTypeSpan.includes(span.dataset.type)) {
            dataTypeSpan.push(span.dataset.type);
            let li = document.createElement("li");
            li.innerText = span.dataset.type;
            answerList.appendChild(li);
        }
    }

    console.log(dataTypeSpan);
}

function displayAnswer(active) {
    const answer = document.getElementById("correct-answer-container");
    if(active) {
        answer.classList.remove("visually-hidden");
    } else {
        answer.classList.add("visually-hidden");
    }
    
}

// help
buttonHelper.addEventListener('click', ()=> {
    sectionHelpers.classList.toggle("hidden");
})

// change
buttonChange.addEventListener('click', ()=> {
    changeCode();
})

// answer
buttonAnswer.addEventListener('click', ()=> {
    displayAnswer(true);
})

