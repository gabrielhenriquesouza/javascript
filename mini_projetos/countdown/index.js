function updateTime() {
  if (seconds.innerText != 0) {
    seconds.innerText = seconds.innerText - 1;
  } else {
    seconds.innerText = 59;
    if (minutes.innerText != 0) {
      minutes.innerText = minutes.innerText - 1;
    }
  }
}

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

days.innerText = 03;
hours.innerText = 0;
minutes.innerText = 1;
seconds.innerText = 10;
setInterval(updateTime, 1000);
