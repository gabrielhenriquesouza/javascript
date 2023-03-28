function initializeGame() {
  player1Move();
  player2Move();
}

function checkButtonClickedPlayer1() {
  document.getElementById("item1").addEventListener("click", function () {
    if (this.dataset.value === "-") {
      this.innerText = "x";
      this.dataset.value = "x";
    }
  });

  document.getElementById("item2").addEventListener("click", function () {
    if (this.dataset.value === "-") {
      this.innerText = "x";
      this.dataset.value = "x";
    }
  });

  document.getElementById("item3").addEventListener("click", function () {
    if (this.dataset.value === "-") {
      this.innerText = "x";
      this.dataset.value = "x";
    }
  });

  document.getElementById("item4").addEventListener("click", function () {
    if (this.dataset.value === "-") {
      this.innerText = "x";
      this.dataset.value = "x";
    }
  });

  document.getElementById("item5").addEventListener("click", function () {
    if (this.dataset.value === "-") {
      this.innerText = "x";
      this.dataset.value = "x";
    }
  });

  document.getElementById("item6").addEventListener("click", function () {
    if (this.dataset.value === "-") {
      this.innerText = "x";
      this.dataset.value = "x";
    }
  });

  document.getElementById("item7").addEventListener("click", function () {
    if (this.dataset.value === "-") {
      this.innerText = "x";
      this.dataset.value = "x";
    }
  });

  document.getElementById("item8").addEventListener("click", function () {
    if (this.dataset.value === "-") {
      this.innerText = "x";
      this.dataset.value = "x";
    }
  });

  document.getElementById("item9").addEventListener("click", function () {
    if (this.dataset.value === "-") {
      this.innerText = "x";
      this.dataset.value = "x";
    }
  });
}

function player1Move() {
  checkButtonClickedPlayer1();
}

function player2Move() {}

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
// const value = charKeyBtn.dataset.value;
