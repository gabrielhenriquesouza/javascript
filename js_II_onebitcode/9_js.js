function createLabel(namelabel, idinput) {
  label = document.createElement("label");
  label.inn;
  label.htmlFor = "";
}

let buttonAddTechnology = document.querySelector("button[id='addTechnology']");

buttonAddTechnology.addEventListener("click", function (ev) {
  ev.preventDefault(); // para não reiniciar a página

  let displayResult = document.getElementById("technologies"); //onde ficará os resultados

  let ul = document.createElement("ul"); //criando ul
  let li = document.createElement("li"); //criando li
  let formTechnologies = document.createElement("form"); // criando form

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
  formTechnologies.appendChild(yearsExperience0_2);
  formTechnologies.appendChild(yearsExperience3_4);
  formTechnologies.appendChild(yearsExperience5);
  formTechnologies.appendChild(removeButton);
  li.appendChild(formTechnologies);
  ul.appendChild(li);
  displayResult.appendChild(ul);
});
