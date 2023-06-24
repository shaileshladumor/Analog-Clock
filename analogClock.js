let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function playTickSound() {
    const tickSound = document.getElementById('tickSound');
    tickSound.play();
}

function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(() => {
    displayTime();
    playTickSound();
}, 1000);









// function getCurrentTime() {
//     const now = new Date();
//     return {
//       hours: now.getHours(),
//       minutes: now.getMinutes(),
//       seconds: now.getSeconds()
//     };
// }

// function rotateClockHands() {
//     const currentTime = getCurrentTime();
//     const hourHand = document.getElementById('hour');
//     const minuteHand = document.getElementById('min');
//     const secondHand = document.getElementById('sec');
  
//     const hourRotation = (30 * currentTime.hours) + (currentTime.minutes / 2);
//     const minuteRotation = (6 * currentTime.minutes) + (currentTime.seconds / 10);
//     const secondRotation = 6 * currentTime.seconds;
  
//     hourHand.style.transform = `rotate(${hourRotation}deg)`;
//     minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
//     secondHand.style.transform = `rotate(${secondRotation}deg)`;
// }

// function playTickSound() {
//     const tickSound = document.getElementById('tickSound');
//     tickSound.play();
// }
  
// setInterval(() => {
//     rotateClockHands();
//     playTickSound();
// }, 1000);






