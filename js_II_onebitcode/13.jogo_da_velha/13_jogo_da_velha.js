function initializeGame() {
  checkButtonClickedPlayer1();
  checkButtonClickedPlayer2();
}

function checkButtonClickedPlayer1() {
  let verification = false;
  document.getElementById("item1").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        return (verification = true);
      }
    }
  });

  document.getElementById("item2").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        return (verification = true);
      }
    }
  });

  document.getElementById("item3").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        return (verification = true);
      }
    }
  });

  document.getElementById("item4").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        return (verification = true);
      }
    }
  });

  document.getElementById("item5").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        return (verification = true);
      }
    }
  });

  document.getElementById("item6").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        return (verification = true);
      }
    }
  });

  document.getElementById("item7").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        return (verification = true);
      }
    }
  });

  document.getElementById("item8").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        return (verification = true);
      }
    }
  });

  document.getElementById("item9").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        return (verification = true);
      }
    }
  });
}

function checkButtonClickedPlayer2() {
  let verification = false;
  document.getElementById("item1").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        return (verification = true);
      }
    }
  });
  document.getElementById("item2").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        return (verification = true);
      }
    }
  });
  document.getElementById("item3").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        return (verification = true);
      }
    }
  });
  document.getElementById("item4").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        return (verification = true);
      }
    }
  });
  document.getElementById("item5").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        return (verification = true);
      }
    }
  });
  document.getElementById("item6").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        return (verification = true);
      }
    }
  });
  document.getElementById("item7").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        return (verification = true);
      }
    }
  });
  document.getElementById("item8").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        return (verification = true);
      }
    }
  });
  document.getElementById("item9").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        return (verification = true);
      }
    }
  });
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
// const value = charKeyBtn.dataset.value;
