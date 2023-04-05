function leaveInRed() {
  img.src = "imagens/vermelho.png";
  img.alt = "vermelho";
}

function leaveInYellow() {
  img.src = "imagens/amarelo.png";
  img.alt = "amarelo";
}

function leaveInGreen() {
  img.src = "imagens/verde.png";
  img.alt = "verde";
}

function checkColor() {
  if (img.alt == "desligado") {
    leaveInRed();
  } else if (img.alt == "vermelho") {
    leaveInYellow();
  } else if (img.alt == "amarelo") {
    leaveInGreen();
  } else if (img.alt == "verde") {
    leaveInRed();
  }
}

function leaveAutomatic() {
  setInterval(checkColor, 500);
}

let img = document.getElementById("img");

document.getElementById("btnRed").addEventListener("click", leaveInRed);
document.getElementById("btnYellow").addEventListener("click", leaveInYellow);
document.getElementById("btnGreen").addEventListener("click", leaveInGreen);
document
  .getElementById("btnAutomatic")
  .addEventListener("click", leaveAutomatic);
