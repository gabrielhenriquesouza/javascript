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

function checkingNull() {
  console.log("Null");
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
    "yearsExperience0-2",
    "yearsExperience",
    indice
  );
  let labelYearsExperience0_2 = createLabel(
    "0-2 anos",
    "yearsExperience0-2",
    indice
  );
  let inputYearsExperience3_4 = createInput(
    "radio",
    "yearsExperience3-4",
    "yearsExperience",
    indice
  );
  let labelYearsExperience3_4 = createLabel(
    "3-4 anos",
    "yearsExperience3-4",
    indice
  );
  let inputYearsExperience5 = createInput(
    "radio",
    "yearsExperience5",
    "yearsExperience",
    indice
  );
  let labelYearsExperience5 = createLabel(
    "5+ anos",
    "yearsExperience5",
    indice
  );

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
  eve.preventDefault();

  let developerData = [];

  let nameDeveloper = document.getElementById("nameDeveloper");
  let name = nameDeveloper.value;
  developerData.push(name);

  for (let ind = 1; ind <= indice; ind++) {
    let technologyName = document.getElementById("technologyName" + ind);
    if (technologyName == null) {
      checkingNull();
    } else {
      let technology = technologyName.value;
      developerData.push(technology);
    }

    let DEFINIRNOME = document.querySelector(
      "input[name=yearsExperience]:checked"
    );
  }

  console.log(developerData);
  alert("Desenvolvedor cadastrado com sucesso!");

  /*
  Limpando os dados  
  */
  nameDeveloper.value = "";
  for (let i = 0; i < indice; i++) {
    let inputs = document.getElementById("formTechnologies" + i);
    if (inputs == null) {
      console.log("null");
    } else {
      let liTechnologies = document.getElementById("liTechnologies");
      liTechnologies.remove(inputs);
    }
  }
});
