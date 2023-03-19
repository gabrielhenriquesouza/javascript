let buttonAddTechnology = document.querySelector("button[id='addTechnology']");

buttonAddTechnology.addEventListener("click", function (ev) {
  ev.preventDefault();

  let form = document.getElementById("technologies");

  let ul = document.createElement("ul");
  let li = document.createElement("li");
  let formTechnologies = document.createElement("form");

  let inputTechnologyName = document.createElement("input");
  inputTechnologyName.type = "text";
  inputTechnologyName.id = "technologyName";
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

  formTechnologies.appendChild(inputTechnologyName);
  formTechnologies.appendChild(yearsExperience0_2);
  formTechnologies.appendChild(yearsExperience3_4);
  formTechnologies.appendChild(yearsExperience5);
  formTechnologies.appendChild(removeButton);
  li.appendChild(formTechnologies);
  ul.appendChild(li);
  form.appendChild(ul);
});

/*
    <input type="radio" name="radio" id="" value="A" />
    <input type="radio" name="radio" id="" value="B" />
    <input type="radio" name="radio" id="" value="C" />
*/
