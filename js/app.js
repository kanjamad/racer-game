
// Timer

let margin = 0;
let minutes = 2;
let seconds = 4;
let timer;

const min = document.getElementById('min');
const sec = document.getElementById('sec');

min.innerText = minutes;
sec.innerText = seconds;

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

// // minutes
// timer  = window.setInterval(() => {
//     if (minutes === 0){
//         return clearInterval(timer)
//     }
//    minutes--;
//     sec.innerText = minutes;
// },1000)


// second
timer  = window.setInterval(() => {
    if (seconds === 0){
        return clearInterval(timer)
    }
    seconds--;
    sec.innerText = seconds;
},1000)

  














/*
// click 

const button = document.getElementById('move');
button.addEventListener('click', moveRight);


function moveRight(e) {
    // console.log('click working');
    margin += 100;
    const playerOne = document.getElementById('playerOne');
    const playerTwo = document.getElementById('playerTwo');
    // console.log('moving');
    // playerOne.style.marginLeft = margin + 'px';
    playerOne.style.marginLeft = `${margin}px`;
    playerTwo.style.marginLeft = `${margin}px`;

}
*/


// keydown
    // currentTarget mean the value  key code 
const body = document.querySelector('body');
body.addEventListener('keydown', moveRight);

function moveRight(e) {
    console.log('Key Pressed');
    console.log(e.keyCode);
    // pass A
    if (e.keyCode === 65){
        margin +=100;
        const playerOne = document.getElementById('playerOne');
        playerOne.style.marginLeft = `${margin}px`;
    //  pass L
    } else if (e.keyCode === 76) {
        margin +=100;
        const playerTwo = document.getElementById('playerTwo');
        playerTwo.style.marginLeft = `${margin}px`;
     }
}





