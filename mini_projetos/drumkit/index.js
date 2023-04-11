function increaseButton(ev) {
  let btn = document.getElementById(ev);
  btn.classList = "biggerButton";

  setTimeout(() => {
    btn.classList = "btn";
  }, 300);
}

let sounds = {
  soundA: new Audio("audios/songA.wav"),
  soundS: new Audio("audios/songS.wav"),
  soundD: new Audio("audios/songD.wav"),
  soundF: new Audio("audios/songF.wav"),
  soundG: new Audio("audios/songG.wav"),
  soundH: new Audio("audios/songH.wav"),
  soundJ: new Audio("audios/songJ.wav"),
  soundK: new Audio("audios/songK.wav"),
  soundL: new Audio("audios/songL.wav"),
};

document.getElementById("btnA").addEventListener("click", () => {
  sounds.soundA.play();
  increaseButton("btnA");
});
document.getElementById("btnS").addEventListener("click", () => {
  sounds.soundS.play();
  increaseButton("btnS");
});
document.getElementById("btnD").addEventListener("click", () => {
  sounds.soundD.play();
  increaseButton("btnD");
});
document.getElementById("btnF").addEventListener("click", () => {
  sounds.soundF.play();
  increaseButton("btnF");
});
document.getElementById("btnG").addEventListener("click", () => {
  sounds.soundG.play();
  increaseButton("btnG");
});
document.getElementById("btnH").addEventListener("click", () => {
  sounds.soundH.play();
  increaseButton("btnH");
});
document.getElementById("btnJ").addEventListener("click", () => {
  sounds.soundJ.play();
  increaseButton("btnJ");
});
document.getElementById("btnK").addEventListener("click", () => {
  sounds.soundK.play();
  increaseButton("btnK");
});
document.getElementById("btnL").addEventListener("click", () => {
  sounds.soundL.play();
  increaseButton("btnL");
});

document.body.addEventListener("keypress", (ev) => {
  const key = ev.key;

  if (key === "a" || key === "A") {
    sounds.soundA.play();
    increaseButton("btnA");
  }
  if (key === "s" || key === "S") {
    sounds.soundS.play();
    increaseButton("btnS");
  }
  if (key === "d" || key === "D") {
    sounds.soundD.play();
    increaseButton("btnD");
  }
  if (key === "f" || key === "F") {
    sounds.soundF.play();
    increaseButton("btnF");
  }
  if (key === "g" || key === "G") {
    sounds.soundG.play();
    increaseButton("btnG");
  }
  if (key === "h" || key === "H") {
    sounds.soundH.play();
    increaseButton("btnH");
  }
  if (key === "j" || key === "J") {
    sounds.soundJ.play();
    increaseButton("btnJ");
  }
  if (key === "k" || key === "K") {
    sounds.soundK.play();
    increaseButton("btnK");
  }
  if (key === "l" || key === "L") {
    sounds.soundL.play();
    increaseButton("btnL");
  }
});
