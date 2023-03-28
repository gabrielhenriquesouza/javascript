//Botão para ligar a lampada
document.getElementById("lightUp").addEventListener(" click", function (ev) {
  ev.preventDefault();

  document.getElementById("img").src = "imagens/ligada.jpg";
});

//Botão para desligar a lampada
document.getElementById("toSwitchOff").addEventListener("click", function (ev) {
  ev.preventDefault();

  document.getElementById("img").src = "imagens/desligada.jpg";
});

//Quando o mouse estiver em cima a lampada acende
document.getElementById("img").addEventListener("mouseover", function (ev) {
  ev.preventDefault();

  this.src = "imagens/ligada.jpg";
});

//Quando o mouse sair a lampada apaga
document.getElementById("img").addEventListener("mouseout", function (ev) {
  ev.preventDefault();

  this.src = "imagens/desligada.jpg";
});
