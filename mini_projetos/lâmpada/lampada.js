//Botão para ligar a lampada
document.getElementById("lightUp").addEventListener("click", function () {
  document.getElementById("img").src = "imagens/ligada.jpg";
  document.getElementById("img").alt = "lampada_ligada";
});

//Botão para desligar a lampada
document.getElementById("toSwitchOff").addEventListener("click", function () {
  document.getElementById("img").src = "imagens/desligada.jpg";
  document.getElementById("img").alt = "lampada_desligada";
});

//Quando o mouse estiver em cima a lampada liga
document.getElementById("img").addEventListener("mouseover", function () {
  this.src = "imagens/ligada.jpg";
  this.alt = "lampada_ligada";
});

//Quando o mouse sair a lampada desliga
document.getElementById("img").addEventListener("mouseout", function () {
  this.src = "imagens/desligada.jpg";
  this.alt = "lampada_desligada";
});

//Duplo click quebra a lampada
document.getElementById("img").addEventListener("dblclick", function () {
  let result = document.getElementById("result");
  let img = document.getElementById("img");
  result.removeChild(img);

  img = document.createElement("img");
  img.src = "imagens/quebrada.jpg";
  img.id = "brokenImage";

  result.appendChild(img);
  //this.src = "imagens/quebrada.jpg";
  //this.alt = "lampada_quebrada";
});
