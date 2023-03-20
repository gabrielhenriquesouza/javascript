function createLabel(txtlabel, idinput, indice) {
  label = document.createElement("label");
  label.innerText = txtlabel;
  label.htmlFor = idinput + indice;
  return label;
}

function createInput(type, id, name, indice) {
  let input = document.createElement("input");
  input.type = type;
  input.id = id + indice;
  input.name = name;
  return input;
}

let buttonAddTechnology = document.querySelector("button[id='addTechnology']");
let indice = 0;

buttonAddTechnology.addEventListener("click", function (ev) {
  ev.preventDefault(); // para não reiniciar a página

  let displayResult = document.getElementById("technologies");
  let li = document.createElement("li");
  let formTechnologies = document.createElement("form");
  indice += 1;

  /*
  CRIANDO INPUT PARA COLETAR O NOME DA TECHNOLOGIA
  */
  let inputTechnologyName = createInput(
    "text",
    "technologyName",
    "technologyName",
    indice
  );
  let labelTechnologyName = createLabel("Nome: ", "technologyName", indice);

  /*
  CRIANDO INPUT PARA COLETAR OS ANOS DE EXPERIENCIA
  */
  let labelExperience = createLabel(
    " Experiência: ",
    "yearsExperience",
    "yearsExperience",
    indice
  );
  let inputYearsExperience0_2 = createInput(
    "radio",
    "yearsExperience",
    "yearsExperience",
    indice
  );
  let labelYearsExperience0_2 = createLabel(
    "0-2 anos",
    "yearsExperience",
    indice
  );
  let inputYearsExperience3_4 = createInput(
    "radio",
    "yearsExperience",
    "yearsExperience",
    indice
  );
  let labelYearsExperience3_4 = createLabel(
    "0-2 anos",
    "yearsExperience",
    indice
  );
  let inputYearsExperience5 = createInput(
    "radio",
    "yearsExperience",
    "yearsExperience",
    indice
  );
  let labelYearsExperience5 = createLabel(
    "0-2 anos",
    "yearsExperience",
    indice
  );
  /*
  let removeButton = document.createElement("button");
  removeButton.innerText = "Remover";
  removeButton.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Clicou");
  });
  */

  formTechnologies.appendChild(labelTechnologyName);
  formTechnologies.appendChild(inputTechnologyName);
  formTechnologies.appendChild(labelExperience);
  formTechnologies.appendChild(inputYearsExperience0_2);
  formTechnologies.appendChild(labelYearsExperience0_2);
  li.appendChild(formTechnologies);
  displayResult.appendChild(li);
});
