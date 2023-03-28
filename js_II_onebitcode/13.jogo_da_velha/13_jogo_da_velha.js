function initializeGame() {
  alert("começou");
}

function player1Move(ev) {
  alert("KKKKKKKKKKKK");
}

let nameX = document.getElementById("x");
let nameO = document.getElementById("o");

let arr = [[], [], []];
for (let i = 1; i <= 9; i++) {
  if (i <= 3) {
    let element = document.getElementById("item" + i);
    let value = element.dataset.value;
    arr[0].push(value);
  } else if (i <= 6) {
    let element = document.getElementById("item" + i);
    let value = element.dataset.value;
    arr[1].push(value);
  } else if (i <= 9) {
    let element = document.getElementById("item" + i);
    let value = element.dataset.value;
    arr[2].push(value);
  }
}

console.table(arr);

document.getElementById("start").addEventListener("click", initializeGame);
document.getElementsByClassName("btn").addEventListener("click");

// const value = charKeyBtn.dataset.value;
