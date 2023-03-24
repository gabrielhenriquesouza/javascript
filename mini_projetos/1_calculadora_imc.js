document
  .getElementById("calculateBtn")
  .addEventListener("click", function (ev) {
    ev.preventDefault();

    const personsName = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    const imc = weight / (height * height);

    if (imc < 18.5) {
    } else if (imc >= 18.5 && imc <= 24.9) {
    } else if (imc >= 25 && imc <= 29.9) {
    } else if (imc >= 30 && imc <= 39.9) {
    } else if (imc >= 40) {
    }
  });

/*
  MENOR QUE 18,5	MAGREZA	0
  ENTRE 18,5 E 24,9	NORMAL	0
  ENTRE 25,0 E 29,9	SOBREPESO	I
  ENTRE 30,0 E 39,9	OBESIDADE	II
  MAIOR QUE 40,0	OBESIDADE GRAVE	
   */
