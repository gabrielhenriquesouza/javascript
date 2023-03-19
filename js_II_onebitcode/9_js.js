let buttonAddTechnology = document.querySelector("button[id='addTechnology']");

buttonAddTechnology.addEventListener("click", function (ev) {
  ev.preventDefault();

  let form = document.getElementById("technologies");

  let inputTechnologyName = document.createElement("input");
  inputTechnologyName.type = "text";
  inputTechnologyName.id = "technologyName";
  inputTechnologyName.name = "technologyName";

  let yearsExperience = document.createElement("input");
  yearsExperience.type = "radio";

  form.appendChild(inputTechnologyName);
});
