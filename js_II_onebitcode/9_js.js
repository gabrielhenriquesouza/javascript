function createLabel(txtlabel, idinput) {
  label = document.createElement("label");
  label.innerText = txtlabel;
  label.htmlFor = idinput;
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

  let displayResult = document.getElementById("technologies"); //onde ficará os resultados

  let li = document.createElement("li"); //criando li
  let formTechnologies = document.createElement("form"); // criando form

  //CRIANDO INPUT PARA COLETAR O NOME DA TECHNOLOGIA
  indice += 1;
  let inputTechnologyName = createInput(
    "text",
    "technologyName",
    "technologyName",
    indice
  );
  let labelTechnologyName = createLabel("Nome: ", "inputTechnologyName");

  //CRIANDO INPUT PARA COLETAR OS ANOS DE EXPERIENCIA
  let yearsExperience;

  /*
  let labelTechnologyName = document.createElement("label");
  labelTechnologyName.htmlFor = "technologyName";
  labelTechnologyName.innerText = "Nome: ";
  let inputTechnologyName = document.createElement("input");
  inputTechnologyName.type = "text";
  inputTechnologyName.id = "technologyName-" + ul.lenght;
  inputTechnologyName.name = "technologyName";

  let yearsExperience0_2 = document.createElement("input");
  yearsExperience0_2.type = "radio";
  yearsExperience0_2.name = "yearsExperience";

  let yearsExperience3_4 = document.createElement("input");
  yearsExperience3_4.type = "radio";
  yearsExperience3_4.name = "yearsExperience";

  let yearsExperience5 = document.createElement("input");
  yearsExperience5.type = "radio";
  yearsExperience5.name = "yearsExperience";

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remover";
  removeButton.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Clicou");
  });
  */
  formTechnologies.appendChild(labelTechnologyName);
  formTechnologies.appendChild(inputTechnologyName);
  li.appendChild(formTechnologies);
  displayResult.appendChild(li);

  /*
  formTechnologies.appendChild(labelTechnologyName);
  formTechnologies.appendChild(inputTechnologyName);
  formTechnologies.appendChild(yearsExperience0_2);
  formTechnologies.appendChild(yearsExperience3_4);
  formTechnologies.appendChild(yearsExperience5);
  formTechnologies.appendChild(removeButton);
  li.appendChild(formTechnologies);
  ul.appendChild(li);
  displayResult.appendChild(ul);
  */
});
