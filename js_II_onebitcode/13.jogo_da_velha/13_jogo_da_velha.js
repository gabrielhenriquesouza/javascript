let nameX = document.getElementById("x");
let nameO = document.getElementById("o");

let arr = [];
for (let i = 0; i <= 8; i++) {
  arr.push(document.getElementById("item" + i));
}

console.log(nameX, nameO, arr);
