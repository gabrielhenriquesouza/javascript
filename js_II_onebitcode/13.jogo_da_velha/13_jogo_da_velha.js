let nameX = document.getElementById("x");
let nameO = document.getElementById("o");

let arr = [[], [], []];
for (let i = 1; i <= 3; i++) {
  arr[0].push(document.getElementsByClassName("item" + i));
}
for (let o = 4; o <= 6; o++) {
  arr[1].push(document.getElementsByClassName("item" + o));
}
for (let p = 7; p <= 9; p++) {
  arr[2].push(document.getElementsByClassName("item" + p));
}

console.table(arr);
//document.getElementById("item1").addEventListener("click", function () {
//  alert("oi");
//});
