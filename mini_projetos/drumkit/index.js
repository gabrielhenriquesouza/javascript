function increaseButton(ev) {
  let btn = document.getElementById(ev);
  btn.classList = "biggerButton";

  setTimeout(() => {
    btn.classList = "btn";
  }, 300);
}

const soundA = new Audio("audios/songA.wav");
const soundS = new Audio("audios/songS.wav");
const soundD = new Audio("audios/songD.wav");
const soundF = new Audio("audios/songF.wav");
const soundG = new Audio("audios/songG.wav");
const soundH = new Audio("audios/songH.wav");
const soundJ = new Audio("audios/songJ.wav");
const soundK = new Audio("audios/songK.wav");
const soundL = new Audio("audios/songL.wav");

document.getElementById("btnA").addEventListener("click", () => soundA.play());
document.getElementById("btnS").addEventListener("click", () => soundS.play());
document.getElementById("btnD").addEventListener("click", () => soundD.play());
document.getElementById("btnF").addEventListener("click", () => soundF.play());
document.getElementById("btnG").addEventListener("click", () => soundG.play());
document.getElementById("btnH").addEventListener("click", () => soundH.play());
document.getElementById("btnJ").addEventListener("click", () => soundJ.play());
document.getElementById("btnK").addEventListener("click", () => soundK.play());
document.getElementById("btnL").addEventListener("click", () => soundL.play());

document.body.addEventListener("keypress", (ev) => {
  const key = ev.key;

  if (key === "a" || key === "A") {
    soundA.play();
    increaseButton("btnA");
  }
  if (key === "s" || key === "S") {
    soundS.play();
    increaseButton("btnS");
  }
  if (key === "d" || key === "D") {
    soundD.play();
    increaseButton("btnD");
  }
  if (key === "f" || key === "F") {
    soundF.play();
    increaseButton("btnF");
  }
  if (key === "g" || key === "G") {
    soundG.play();
    increaseButton("btnG");
  }
  if (key === "h" || key === "H") {
    soundH.play();
    increaseButton("btnH");
  }
  if (key === "j" || key === "J") {
    soundJ.play();
    increaseButton("btnJ");
  }
  if (key === "k" || key === "K") {
    soundK.play();
    increaseButton("btnK");
  }
  if (key === "l" || key === "L") {
    soundL.play();
    increaseButton("btnL");
  }
});
