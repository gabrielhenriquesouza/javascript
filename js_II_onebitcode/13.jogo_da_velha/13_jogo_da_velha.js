let nameX = document.getElementById("x");
let nameO = document.getElementById("o");

let arr = [[], [], []];
for (let i = 1; i <= 3; i++) {
  arr[0].push(document.getElementById("item" + i));
}
for (let o = 4; o <= 6; o++) {
  arr[1].push(document.getElementById("item" + o));
}
for (let p = 7; p <= 9; p++) {
  arr[2].push(document.getElementById("item" + p));
}

document.getElementById("start").addEventListener("click", function (ev) {
  alert("clicou");
});
