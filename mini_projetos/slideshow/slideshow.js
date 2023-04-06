let img = document.getElementById("img");

document.getElementById("next").addEventListener("click", function () {
  if (img.alt == "yuyuhakusho") {
    img.src = "imagens/chrono.jpg";
    img.alt = "chrono";
  } else if (img.alt == "chrono") {
    img.src = "imagens/inuyasha.jpg";
    img.alt = "inuyasha";
  } else if (img.alt == "inuyasha") {
    img.src = "imagens/ippo.png";
    img.alt = "ippo";
  } else if (img.alt == "ippo") {
    img.src = "imagens/tenchi.jpg";
    img.alt = "tenchi";
  } else if (img.alt == "tenchi") {
    img.src = "imagens/tenjhotenge.jpg";
    img.alt = "tenjhotenge";
  } else if (img.alt == "tenjhotenge") {
    img.src = "imagens/yuyuhakusho.jpg";
    img.alt = "yuyuhakusho";
  }
});

document.getElementById("previous").addEventListener("click", function () {
  if (img.alt == "yuyuhakusho") {
    img.src = "imagens/tenjhotenge.jpg";
    img.alt = "tenjhotenge";
  } else if (img.alt == "tenjhotenge") {
    img.src = "imagens/tenchi.jpg";
    img.alt = "tenchi";
  } else if (img.alt == "tenchi") {
    img.src = "imagens/ippo.png";
    img.alt = "ippo";
  } else if (img.alt == "ippo") {
    img.src = "imagens/inuyasha.jpg";
    img.alt = "inuyasha";
  } else if (img.alt == "inuyasha") {
    img.src = "imagens/chrono.jpg";
    img.alt = "chrono";
  } else if (img.alt == "chrono") {
    img.src = "imagens/yuyuhakusho.jpg";
    img.alt = "yuyuhakusho";
  }
});
