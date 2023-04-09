function whenToClick() {}

//Audios
const soundA = new Audio("audios/songA.wav");
const soundS = new Audio("audios/songS.wav");
const soundD = new Audio("audios/songD.wav");
const soundF = new Audio("audios/songF.wav");
const soundG = new Audio("audios/songG.wav");
const soundH = new Audio("audios/songH.wav");
const soundJ = new Audio("audios/songJ.wav");
const soundK = new Audio("audios/songK.wav");
const soundL = new Audio("audios/songL.wav");

//Quando clicar em um botão sai algum audio
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

  if (key === "a") {
    soundA.play();
  }
  if (key === "s") {
    soundS.play();
  }
  if (key === "d") {
    soundD.play();
  }
  if (key === "f") {
    soundF.play();
  }
  if (key === "g") {
    soundG.play();
  }
  if (key === "h") {
    soundH.play();
  }
  if (key === "j") {
    soundJ.play();
  }
  if (key === "k") {
    soundK.play();
  }
  if (key === "l") {
    soundL.play();
  }
});

/*document.body.addEventListener("keypress", function (event) {
  const key = event.key;
  const code = event.keyCode;
  console.log(`Key: ${key}, Code ${code}`);
});*/
