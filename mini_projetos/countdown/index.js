function updateTime() {
  if (
    seconds.innerText == minutes.innerText &&
    minutes.innerText == hours.innerText &&
    hours.innerText == days.innerText
  ) {
  } else {
    if (seconds.innerText != 0) {
      seconds.innerText = seconds.innerText - 1;
    } else {
      seconds.innerText = 59;

      if (minutes.innerText != 0) {
        minutes.innerText = minutes.innerText - 1;
      } else {
        minutes.innerText = 59;

        if (hours.innerText != 0) {
          hours.innerText = hours.innerText - 1;
        } else {
          hours.innerText = 23;

          if (days.innerText != 0) {
            days.innerText = days.innerText - 1;
          }
        }
      }
    }
  }
}

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

days.innerText = 0;
hours.innerText = 0;
minutes.innerText = 0;
seconds.innerText = 10;

setInterval(updateTime, 1000);
