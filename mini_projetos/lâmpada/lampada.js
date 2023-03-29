let img = document.getElementById("img");

//Botão para ligar a lampada
document
  .getElementById("turnOnAndTurnOff")
  .addEventListener("click", function () {
    if ((img.src = "imagens/desligada.jpg")) {
      img.src = "imagens/ligada.jpg";
    } else if ((img.src = "imagens/ligada.jpg")) {
      img.src = "imagens/desligada.jpg";
    }
  });

//Botão para desligar a lampada

//Quando o mouse estiver em cima a lampada liga
/*
img.addEventListener("mouseover", function () {
  img.src = "imagens/ligada.jpg";
  img.alt = "lampada_ligada";
});

//Quando o mouse sair a lampada desliga
img.addEventListener("mouseout", function () {
  img.src = "imagens/desligada.jpg";
  img.alt = "lampada_desligada";
});

//Duplo click quebra a lampada
img.addEventListener("dblclick", function () {
  let result = document.getElementById("result");

  result.removeChild(img);

  let imgBroken = document.createElement("img");
  imgBroken.src = "imagens/quebrada.jpg";
  imgBroken.id = "brokenImage";

  result.appendChild(imgBroken);
});
*/
