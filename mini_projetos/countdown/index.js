function changeSecond() {
  seconds.innerText = seconds.innerText - 1;
}

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

seconds.innerText = 4;

setInterval(changeSecond(), 10);
