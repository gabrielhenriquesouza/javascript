let img = document.getElementById("img");

document.getElementById("next").addEventListener("click", function () {
  if (img.alt == "yuyuhakusho") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/chrono.jpg";
    img.alt = "chrono";
  } else if (img.alt == "chrono") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/inuyasha.jpg";
    img.alt = "inuyasha";
  } else if (img.alt == "inuyasha") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/ippo.png";
    img.alt = "ippo";
  } else if (img.alt == "ippo") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/tenchi.jpg";
    img.alt = "tenchi";
  } else if (img.alt == "tenchi") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/tenjhotenge.jpg";
    img.alt = "tenjhotenge";
  } else if (img.alt == "tenjhotenge") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/yuyuhakusho.jpg";
    img.alt = "yuyuhakusho";
  }
});

document.getElementById("previous").addEventListener("click", function () {
  if (img.alt == "yuyuhakusho") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/tenjhotenge.jpg";
    img.alt = "tenjhotenge";
  } else if (img.alt == "tenjhotenge") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/tenchi.jpg";
    img.alt = "tenchi";
  } else if (img.alt == "tenchi") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/ippo.png";
    img.alt = "ippo";
  } else if (img.alt == "ippo") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/inuyasha.jpg";
    img.alt = "inuyasha";
  } else if (img.alt == "inuyasha") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/chrono.jpg";
    img.alt = "chrono";
  } else if (img.alt == "chrono") {
    img.src =
      "https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/03-slideshow/img/yuyuhakusho.jpg";
    img.alt = "yuyuhakusho";
  }
});
