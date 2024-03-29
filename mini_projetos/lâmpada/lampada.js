let img = document.getElementById("img");
let btn = document.getElementById("turnOnAndTurnOff");
let result = document.getElementById("imgContainer");

//Botão para ligar e desligar a lampada
btn.addEventListener("click", function () {
  if (this.textContent == "Ligar") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/ligada.jpg";
    img.alt = "lampada_ligada";
    this.textContent = "Desligar";
  } else if (this.textContent == "Desligar") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/desligada.jpg";
    img.alt = "lampada_desligada";
    this.textContent = "Ligar";
  }
});

//Quando o mouse entrar no foco a lampada liga
img.addEventListener("mouseover", function () {
  img.src =
    "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/ligada.jpg";
  img.alt = "lampada_ligada";
  btn.textContent = "Desligar";
});

//Quando o mouse sair do foco a lampada desliga
img.addEventListener("mouseout", function () {
  img.src =
    "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/desligada.jpg";
  img.alt = "lampada_desligada";
  btn.textContent = "Ligar";
});

//Duplo click quebra a lampada
img.addEventListener("dblclick", function () {
  let imgBroken = document.createElement("img");
  imgBroken.src =
    "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/quebrada.jpg";
  imgBroken.id = "brokenImage";
  btn.textContent = "Lâmpada quebrada";

  result.removeChild(img);
  result.appendChild(imgBroken);
});
