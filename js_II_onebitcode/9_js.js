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

//Botão de adicionar tecnologias
let indice = 0;
let buttonAddTechnology = document.querySelector("button[id='addTechnology']");
buttonAddTechnology.addEventListener("click", function (ev) {
  ev.preventDefault(); // para não reiniciar a página

  let displayResult = document.getElementById("technologies");
  let li = document.createElement("li");
  li.id = "liTechnologies";
  let formTechnologies = document.createElement("form");
  formTechnologies.id = "formTechnologies" + indice;
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
    "3-4 anos",
    "yearsExperience",
    indice
  );
  let inputYearsExperience5 = createInput(
    "radio",
    "yearsExperience",
    "yearsExperience",
    indice
  );
  let labelYearsExperience5 = createLabel("5+ anos", "yearsExperience", indice);

  /*
  CRIANDO O BOTÃO DE REMOVER TECHNOLOGIA 
  */
  let removeButton = document.createElement("button");
  removeButton.innerText = "Remover";
  removeButton.addEventListener("click", function (event) {
    event.preventDefault();
    indice -= 1;
    li.remove(formTechnologies);
  });

  /*
  ADICIONANDO OS ITENS
   */
  formTechnologies.append(
    labelTechnologyName,
    inputTechnologyName,
    labelExperience,
    inputYearsExperience0_2,
    labelYearsExperience0_2,
    inputYearsExperience3_4,
    labelYearsExperience3_4,
    inputYearsExperience5,
    labelYearsExperience5,
    removeButton
  );
  li.append(formTechnologies);
  displayResult.append(li);
});

//Botão de Registrar
let buttonRegister = document.getElementById("buttonRegister");
buttonRegister.addEventListener("click", function (eve) {
  let nameDeveloper = document.getElementById("nameDeveloper");
  let name = nameDeveloper.value;

  alert("Desenvolvedor cadastrado com sucesso!");

  /*
  Limpando os dados  
  */
  nameDeveloper.value = "";
  let liTechnologies = document.getElementById("liTechnologies");

  for (let i = 0; i < indice; i++) {
    let inputs = document.getElementById("formTechnologies" + i);
    console.log(inputs);
    liTechnologies.remove(inputs);
    console.log("removi");
  }
});
