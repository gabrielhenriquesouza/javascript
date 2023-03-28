//Botão para ligar a lampada
document.getElementById("lightUp").addEventListener("click", function (ev) {
  document.getElementById("img").src = "imagens/ligada.jpg";
});

//Botão para desligar a lampada
document.getElementById("toSwitchOff").addEventListener("click", function (ev) {
  document.getElementById("img").src = "imagens/desligada.jpg";
});

//Quando o mouse estiver em cima a lampada liga
document.getElementById("img").addEventListener("mouseover", function (ev) {
  this.src = "imagens/ligada.jpg";
});

//Quando o mouse sair a lampada desliga
document.getElementById("img").addEventListener("mouseout", function (ev) {
  this.src = "imagens/desligada.jpg";
});

//Duplo click quebra a lampada
document.getElementById("img").addEventListener("click", function (ev) {
  this.src = "imagens/quebrada.jpg";
});
