const formatarDigito = (digito) => `0${digito}`.slice(-2);

function updateTime() {
  if (
    seconds.innerText == minutes.innerText &&
    minutes.innerText == hours.innerText &&
    hours.innerText == days.innerText
  ) {
    clearInterval(interval);
  } else {
    if (seconds.innerText != 0) {
      seconds.innerText = formatarDigito(seconds.innerText - 1);
    } else {
      seconds.innerText = 59;

      if (minutes.innerText != 0) {
        minutes.innerText = formatarDigito(minutes.innerText - 1);
      } else {
        minutes.innerText = 59;

        if (hours.innerText != 0) {
          hours.innerText = formatarDigito(hours.innerText - 1);
        } else {
          hours.innerText = 23;

          if (days.innerText != 0) {
            days.innerText = formatarDigito(days.innerText - 1);
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

days.innerText = formatarDigito(3);
hours.innerText = formatarDigito(7);
minutes.innerText = formatarDigito(12);
seconds.innerText = 10;

let interval = setInterval(updateTime, 1000);
