let nameX = document.getElementById("x");
let nameO = document.getElementById("o");

let arr = [[], [], []];
for (let i = 1; i <= 3; i++) {
  arr[0].push(document.getElementsByClassName("item" + i));
  console.log(arr[0][i]);
}
for (let o = 1; o <= 3; o++) {
  arr[1].push(document.getElementsByClassName("item" + o));
  console.log(arr[1][o]);
}
for (let p = 1; p <= 3; p++) {
  arr[2].push(document.getElementsByClassName("item" + p));
  console.log(arr[2][p]);
}

console.table(arr);
//document.getElementById("item1").addEventListener("click", function () {
//  alert("oi");
//});
