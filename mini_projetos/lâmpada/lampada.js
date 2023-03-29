let img = document.getElementById("img");
let btn = document.getElementById("turnOnAndTurnOff");

//Botão para ligar a lampada
btn.addEventListener("click", function () {
  if (this.textContent == "Ligar") {
    img.src = "imagens/ligada.jpg";
    img.alt = "lampada_ligada";
    this.textContent = "Desligar";
  } else if (this.textContent == "Desligar") {
    img.src = "imagens/desligada.jpg";
    img.alt = "lampada_desligada";
    this.textContent = "Ligar";
  }
});

//Quando o mouse estiver em cima a lampada liga
img.addEventListener("mouseover", function () {
  img.src = "imagens/ligada.jpg";
  img.alt = "lampada_ligada";
  btn.textContent = "Desligar";
});

//Quando o mouse sair a lampada desliga
img.addEventListener("mouseout", function () {
  img.src = "imagens/desligada.jpg";
  img.alt = "lampada_desligada";
  btn.textContent = "Ligar";
});

//Duplo click quebra a lampada
img.addEventListener("dblclick", function () {
  let result = document.getElementById("result");

  result.removeChild(img);

  let imgBroken = document.createElement("img");
  imgBroken.src = "imagens/quebrada.jpg";
  imgBroken.id = "brokenImage";

  btn.textContent = "Lâmpada quebrada";

  result.appendChild(imgBroken);
});
