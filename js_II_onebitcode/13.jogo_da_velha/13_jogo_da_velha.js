function checkButtonClickedPlayer1() {
  let verification = false;
  document.getElementById("item1").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        arr[0][0] = "x";
        checkWin();

        let title = document.getElementById("title");
        let nameO = document.getElementById("o").value;
        title.textContent = `Vez de ${nameO}`;

        return (verification = true);
      }
    }
  });

  document.getElementById("item2").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        arr[0][1] = "x";
        checkWin();

        let title = document.getElementById("title");
        let nameO = document.getElementById("o").value;
        title.textContent = `Vez de ${nameO}`;

        return (verification = true);
      }
    }
  });

  document.getElementById("item3").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        arr[0][2] = "x";
        checkWin();

        let title = document.getElementById("title");
        let nameO = document.getElementById("o").value;
        title.textContent = `Vez de ${nameO}`;

        return (verification = true);
      }
    }
  });

  document.getElementById("item4").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        arr[1][0] = "x";
        checkWin();

        let title = document.getElementById("title");
        let nameO = document.getElementById("o").value;
        title.textContent = `Vez de ${nameO}`;

        return (verification = true);
      }
    }
  });

  document.getElementById("item5").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        arr[1][1] = "x";
        checkWin();

        let title = document.getElementById("title");
        let nameO = document.getElementById("o").value;
        title.textContent = `Vez de ${nameO}`;

        return (verification = true);
      }
    }
  });

  document.getElementById("item6").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        arr[1][2] = "x";
        checkWin();

        let title = document.getElementById("title");
        let nameO = document.getElementById("o").value;
        title.textContent = `Vez de ${nameO}`;

        return (verification = true);
      }
    }
  });

  document.getElementById("item7").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        arr[2][0] = "x";
        checkWin();

        let title = document.getElementById("title");
        let nameO = document.getElementById("o").value;
        title.textContent = `Vez de ${nameO}`;

        return (verification = true);
      }
    }
  });

  document.getElementById("item8").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        arr[2][1] = "x";
        checkWin();

        let title = document.getElementById("title");
        let nameO = document.getElementById("o").value;
        title.textContent = `Vez de ${nameO}`;

        return (verification = true);
      }
    }
  });

  document.getElementById("item9").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "x";
        this.dataset.value = "x";
        arr[2][2] = "x";
        checkWin();

        let title = document.getElementById("title");
        let nameO = document.getElementById("o").value;
        title.textContent = `Vez de ${nameO}`;

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
        arr[0][0] = "o";
        checkWin();

        let title = document.getElementById("title");
        let nameX = document.getElementById("x").value;
        title.textContent = `Vez de ${nameX}`;

        return (verification = true);
      }
    }
  });
  document.getElementById("item2").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        arr[0][1] = "o";
        checkWin();

        let title = document.getElementById("title");
        let nameX = document.getElementById("x").value;
        title.textContent = `Vez de ${nameX}`;

        return (verification = true);
      }
    }
  });
  document.getElementById("item3").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        arr[0][2] = "o";
        checkWin();

        let title = document.getElementById("title");
        let nameX = document.getElementById("x").value;
        title.textContent = `Vez de ${nameX}`;

        return (verification = true);
      }
    }
  });
  document.getElementById("item4").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        arr[1][0] = "o";
        checkWin();

        let title = document.getElementById("title");
        let nameX = document.getElementById("x").value;
        title.textContent = `Vez de ${nameX}`;

        return (verification = true);
      }
    }
  });
  document.getElementById("item5").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        arr[1][1] = "o";
        checkWin();

        let title = document.getElementById("title");
        let nameX = document.getElementById("x").value;
        title.textContent = `Vez de ${nameX}`;

        return (verification = true);
      }
    }
  });
  document.getElementById("item6").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        arr[1][2] = "o";
        checkWin();

        let title = document.getElementById("title");
        let nameX = document.getElementById("x").value;
        title.textContent = `Vez de ${nameX}`;

        return (verification = true);
      }
    }
  });
  document.getElementById("item7").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        arr[2][0] = "o";
        checkWin();

        let title = document.getElementById("title");
        let nameX = document.getElementById("x").value;
        title.textContent = `Vez de ${nameX}`;

        return (verification = true);
      }
    }
  });
  document.getElementById("item8").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        arr[2][1] = "o";
        checkWin();

        let title = document.getElementById("title");
        let nameX = document.getElementById("x").value;
        title.textContent = `Vez de ${nameX}`;

        return (verification = true);
      }
    }
  });
  document.getElementById("item9").addEventListener("click", function () {
    if (verification === false) {
      if (this.dataset.value === "-") {
        this.innerText = "o";
        this.dataset.value = "o";
        arr[2][2] = "o";
        checkWin();

        let title = document.getElementById("title");
        let nameX = document.getElementById("x").value;
        title.textContent = `Vez de ${nameX}`;

        return (verification = true);
      }
    }
  });
}

function checkWin() {
  if (
    arr[0][0] === arr[0][1] &&
    arr[0][1] === arr[0][2] &&
    arr[0][0] !== "-" &&
    arr[0][0] === "x"
  ) {
    document.getElementById("item1").style.backgroundColor = "#03A64A";
    document.getElementById("item2").style.backgroundColor = "#03A64A";
    document.getElementById("item3").style.backgroundColor = "#03A64A";
  }

  if (
    arr[1][0] === arr[1][1] &&
    arr[1][1] === arr[1][2] &&
    arr[1][0] !== "-" &&
    arr[1][0] === "x"
  ) {
    document.getElementById("item4").style.backgroundColor = "#03A64A";
    document.getElementById("item5").style.backgroundColor = "#03A64A";
    document.getElementById("item6").style.backgroundColor = "#03A64A";
  }

  if (
    arr[2][0] === arr[2][1] &&
    arr[2][1] === arr[2][2] &&
    arr[2][0] !== "-" &&
    arr[2][0] === "x"
  ) {
    document.getElementById("item7").style.backgroundColor = "#03A64A";
    document.getElementById("item8").style.backgroundColor = "#03A64A";
    document.getElementById("item9").style.backgroundColor = "#03A64A";
  }

  if (
    arr[0][0] === arr[1][0] &&
    arr[1][0] === arr[2][0] &&
    arr[2][0] !== "-" &&
    arr[2][0] === "x"
  ) {
    document.getElementById("item1").style.backgroundColor = "#03A64A";
    document.getElementById("item4").style.backgroundColor = "#03A64A";
    document.getElementById("item7").style.backgroundColor = "#03A64A";
  }

  if (
    arr[0][1] === arr[1][1] &&
    arr[1][1] === arr[2][1] &&
    arr[2][1] !== "-" &&
    arr[2][1] === "x"
  ) {
    document.getElementById("item2").style.backgroundColor = "#03A64A";
    document.getElementById("item5").style.backgroundColor = "#03A64A";
    document.getElementById("item8").style.backgroundColor = "#03A64A";
  }

  if (
    arr[0][2] === arr[1][2] &&
    arr[1][2] === arr[2][2] &&
    arr[2][2] !== "-" &&
    arr[2][2] === "x"
  ) {
    document.getElementById("item3").style.backgroundColor = "#03A64A";
    document.getElementById("item6").style.backgroundColor = "#03A64A";
    document.getElementById("item9").style.backgroundColor = "#03A64A";
  }

  if (
    arr[0][0] === arr[1][1] &&
    arr[1][1] === arr[2][2] &&
    arr[2][2] !== "-" &&
    arr[2][2] === "x"
  ) {
    document.getElementById("item1").style.backgroundColor = "#03A64A";
    document.getElementById("item5").style.backgroundColor = "#03A64A";
    document.getElementById("item9").style.backgroundColor = "#03A64A";
  }

  if (
    arr[0][2] === arr[1][1] &&
    arr[1][1] === arr[2][0] &&
    arr[2][0] !== "-" &&
    arr[2][0] === "x"
  ) {
    document.getElementById("item3").style.backgroundColor = "#03A64A";
    document.getElementById("item5").style.backgroundColor = "#03A64A";
    document.getElementById("item7").style.backgroundColor = "#03A64A";
  }

  //----------------------------------------------------------------------

  if (
    arr[0][0] === arr[0][1] &&
    arr[0][1] === arr[0][2] &&
    arr[0][0] !== "-" &&
    arr[0][0] === "o"
  ) {
    document.getElementById("item1").style.backgroundColor = "#03A64A";
    document.getElementById("item2").style.backgroundColor = "#03A64A";
    document.getElementById("item3").style.backgroundColor = "#03A64A";
  }

  if (
    arr[1][0] === arr[1][1] &&
    arr[1][1] === arr[1][2] &&
    arr[1][0] !== "-" &&
    arr[1][0] === "o"
  ) {
    document.getElementById("item4").style.backgroundColor = "#03A64A";
    document.getElementById("item5").style.backgroundColor = "#03A64A";
    document.getElementById("item6").style.backgroundColor = "#03A64A";
  }

  if (
    arr[2][0] === arr[2][1] &&
    arr[2][1] === arr[2][2] &&
    arr[2][0] !== "-" &&
    arr[2][0] === "o"
  ) {
    document.getElementById("item7").style.backgroundColor = "#03A64A";
    document.getElementById("item8").style.backgroundColor = "#03A64A";
    document.getElementById("item9").style.backgroundColor = "#03A64A";
  }

  if (
    arr[0][0] === arr[1][0] &&
    arr[1][0] === arr[2][0] &&
    arr[2][0] !== "-" &&
    arr[2][0] === "o"
  ) {
    document.getElementById("item1").style.backgroundColor = "#03A64A";
    document.getElementById("item4").style.backgroundColor = "#03A64A";
    document.getElementById("item7").style.backgroundColor = "#03A64A";
  }

  if (
    arr[0][1] === arr[1][1] &&
    arr[1][1] === arr[2][1] &&
    arr[2][1] !== "-" &&
    arr[2][1] === "o"
  ) {
    document.getElementById("item2").style.backgroundColor = "#03A64A";
    document.getElementById("item5").style.backgroundColor = "#03A64A";
    document.getElementById("item8").style.backgroundColor = "#03A64A";
  }

  if (
    arr[0][2] === arr[1][2] &&
    arr[1][2] === arr[2][2] &&
    arr[2][2] !== "-" &&
    arr[2][2] === "o"
  ) {
    document.getElementById("item3").style.backgroundColor = "#03A64A";
    document.getElementById("item6").style.backgroundColor = "#03A64A";
    document.getElementById("item9").style.backgroundColor = "#03A64A";
  }

  if (
    arr[0][0] === arr[1][1] &&
    arr[1][1] === arr[2][2] &&
    arr[2][2] !== "-" &&
    arr[2][2] === "o"
  ) {
    document.getElementById("item1").style.backgroundColor = "#03A64A";
    document.getElementById("item5").style.backgroundColor = "#03A64A";
    document.getElementById("item9").style.backgroundColor = "#03A64A";
  }

  if (
    arr[0][2] === arr[1][1] &&
    arr[1][1] === arr[2][0] &&
    arr[2][0] !== "-" &&
    arr[2][0] === "o"
  ) {
    document.getElementById("item3").style.backgroundColor = "#03A64A";
    document.getElementById("item5").style.backgroundColor = "#03A64A";
    document.getElementById("item7").style.backgroundColor = "#03A64A";
  }
}

function stopGame() {}

function initializeGame() {
  let title = document.getElementById("title");
  let nameX = document.getElementById("x").value;
  title.textContent = `Vez de ${nameX}`;

  for (let i = 1; i <= 5; i++) {
    checkButtonClickedPlayer1();

    checkButtonClickedPlayer2();
  }
}

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

document.getElementById("start").addEventListener("click", initializeGame);
// const value = charKeyBtn.dataset.value;
