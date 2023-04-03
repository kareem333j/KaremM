// //////////////html

let circularprogress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");


let progressStartValue = 0,
    progressEndtValue = 100;
speed = 80;


let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularprogress.style.background = `conic-gradient(red ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if (progressStartValue == progressEndtValue) {
        clearInterval(progress)
    }
}, speed);

// //////////////css
let circularprogresss = document.querySelector(".circular-progress2"),
    progressValuee = document.querySelector(".progress-value2");


let progressStartValuee = 0,
    progressEndtValuee = 80;
speed = 80;


let progresss = setInterval(() => {
    progressStartValuee++;

    progressValuee.textContent = `${progressStartValuee}%`
    circularprogresss.style.background = `conic-gradient(blue ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if (progressStartValuee == progressEndtValuee) {
        clearInterval(progresss)
    }
}, speed);


// //////////////js

let circularprogressss = document.querySelector(".circular-progress3"),
    progressValueee = document.querySelector(".progress-value3");


let progressStartValueee = 0,
    progressEndtValueee = 40;
speed = 80;


let progressss = setInterval(() => {
    progressStartValueee++;

    progressValueee.textContent = `${progressStartValueee}%`
    circularprogressss.style.background = `conic-gradient(yellow ${progressStartValueee * 3.6}deg, #ededed 0deg)`

    if (progressStartValueee == progressEndtValueee) {
        clearInterval(progressss)
    }
}, speed);

// //////////////python

let circularprogresssss = document.querySelector(".circular-progress4"),
    progressValueeee = document.querySelector(".progress-value4");


let progressStartValueeee = 0,
    progressEndtValueeee = 80;
speed = 80;


let progresssss = setInterval(() => {
    progressStartValueeee++;

    progressValueeee.textContent = `${progressStartValueeee}%`
    circularprogresssss.style.background = `conic-gradient(orange ${progressStartValueeee * 3.6}deg, #ededed 0deg)`

    if (progressStartValueeee == progressEndtValueeee) {
        clearInterval(progresssss)
    }
}, speed);

// //////////////////////////watsapp////////


function butWats() {
    document.getElementById("butWats").innerHTML = "01023681084";
}

// ///////////////yes / no ////////

function yes() {
    document.getElementById("thanks").className = "thanks";
    document.getElementById("yes").className = "none";
    document.getElementById("no").className = "none";

}

function no() {
    document.getElementById("yes").className = "none";
    document.getElementById("no").className = "none";
    document.getElementById("text-message").className = "text-message";
}

function done() {
    document.getElementById("textarea").className = "none";
    document.getElementById("but-done").className = "none";
    document.getElementById("done2").className = "done2";

}
