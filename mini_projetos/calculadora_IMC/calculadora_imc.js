const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (name !== "" && height !== "" && weight !== "") {
    const imc = weight / (height * height);

    let classification = "";
    if (imc < 18.5) {
      classification = "está abaixo do peso!";
    } else if (imc <= 24.9) {
      classification = "está no peso ideal!";
    } else if (imc <= 29.9) {
      classification = "está acima do peso!";
    } else if (imc <= 39.9) {
      classification = "está com obesidade!";
    } else if (imc >= 40) {
      classification = "está com obesidade grave!";
    }

    result.textContent = `${name} seu IMC é ${imc.toFixed(2)} e você 
    ${classification}`;
  } else {
    result.textContent = "Preencha todos os campos!";
  }
});
