let result = document.getElementById("result");

document
  .getElementById("calculateBtn")
  .addEventListener("click", function (ev) {
    ev.preventDefault();

    const personsName = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    let txt = document.getElementById("txt");

    let imc = weight / (height * height);

    let rel = "";
    if (imc < 18.5) {
      rel = "está abaixo do peso!";
    } else if (imc >= 18.5 && imc <= 24.9) {
      rel = "está no peso ideal!";
    } else if (imc >= 25 && imc <= 29.9) {
      rel = "está acima do peso!";
    } else if (imc >= 30 && imc <= 39.9) {
      rel = "está com obesidade!";
    } else if (imc >= 40) {
      rel = "está com obesidade grave!";
    }

    txt = personsName + " seu IMC é " + imc + " e você " + rel;
    result.append(txt);
  });
