/*function addTechnologies() {
  let technologies = document.getElementById("technologies");
  console.log(technologies);

  let labelName = document.createElement("label");

  let technologyName = document.createElement("input");
  technologyName.type = "text";
  technologyName.id = "technologyName";
  technologyName.name = "technologyName";

  technologies.appendChild(technologyName);
}*/

let buttonAddTechnology = document.getElementById("addTechnology");

buttonAddTechnology.addEventListener("click", function (ev) {
  ev.preventDefault();

  let technologies = document.getElementById("technologies");

  let inputTechnologyName = document.createElement("input");
  technologyName.type = "text";
  technologyName.id = "technologyName";
  technologyName.name = "technologyName";

  technologies.appendChild(inputTechnologyName);
});
