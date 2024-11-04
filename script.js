// buttons
const buttonAsk = document.getElementById("button-ask");
const buttonHelper = document.getElementById("button-help");
const buttonChange = document.getElementById("button-change");


const codesList = document.getElementsByTagName("code");
const sectionHelpers = document.getElementById("helpers");
let currentCodeBlock = 0;

let spanList = codesList[currentCodeBlock].getElementsByTagName("span");

// ask
buttonAsk.addEventListener('click', ()=> {
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

    console.log(spanActive.dataset.type);
    spanActive.classList.add('selected');
})

// help
buttonHelper.addEventListener('click', ()=> {
    sectionHelpers.classList.toggle("hidden");
})

// change
buttonChange.addEventListener('click', ()=> {
    codesList[currentCodeBlock].classList.remove("active");
    if(currentCodeBlock < codesList.length - 1) {
        currentCodeBlock++;
    }
    else {
        currentCodeBlock = 0;
    }
    codesList[currentCodeBlock].classList.add("active");
    spanList = codesList[currentCodeBlock].getElementsByTagName("span");
})