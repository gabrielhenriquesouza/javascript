//Session storage
document.getElementById("sessionBtn").addEventListener("click", function () {
  let input = document.getElementById("session");
  sessionStorage.setItem("info: ", input.value);
  input.value = "";
});
document.getElementById("readSession").addEventListener("click", function () {
  let info = sessionStorage.getItem("info: ");
  alert("A informação salva é: " + info);
});

//Local storage
document.getElementById("localBtn").addEventListener("click", function () {
  let input = document.getElementById("local");
  localStorage.setItem("localInfo", input.value);
  input.value = "";
});
document.getElementById("readLocal").addEventListener("click", function () {
  let info = localStorage.getItem("localInfo");
  alert("A informação salva no local é: " + info);
});

//Cookies
document.getElementById("cookieBtn").addEventListener("click", function () {
  let input = document.getElementById("cookie");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 4, 7) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  let input = document.getElementById("cookie2");
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 4, 7) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  console.log(document.cookie);
});
