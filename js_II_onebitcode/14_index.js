//Session storage
document.getElementById("sessionBtn").addEventListener("click", function () {
  let input = document.getElementById("session");
  sessionStorage.setItem("info: ", input.value);
  input.value = "";
});
document.getElementById("read");
