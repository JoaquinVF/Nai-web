const element = document.getElementById("menu");
const check = document.getElementById("checkbox");
const theme = document.getElementById("theme");
const bombilla = document.querySelector(".bombilla");
const luna = document.querySelector(".luna");
const main = document.querySelector("main");
const load = document.querySelector(".load");
const instagram = document.querySelector(".social");
const naiqui = document.querySelector("#naiqui");

function loading() {
  if (document.title !== "Naiquen Villanueva | Fotografía") {
    setTimeout(function () {
      load.style.opacity = "0";
      load.style.display = "none";
      main.style.display = "block";
      setTimeout(() => (main.style.opacity = "1"), 50);
    }, 2000);
  } else {
    naiqui.addEventListener("click", () => {
      load.style.opacity = "0";
      load.style.display = "none";
      main.style.display = "block";
      setTimeout(() => (main.style.opacity = "1"), 50);
    });
  }
}
loading();

function showMenu() {
  if (check.checked) {
    element.style.display = "block";
    setTimeout(() => {
      element.style.opacity = "1";
    }, 50);
  } else {
    setTimeout(() => {
      element.style.opacity = "0";
      element.style.display = "none";
    }, 50);
  }
}
check.addEventListener("click", () => {
  showMenu();
});

theme.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("dark", "true");
    luna.style.display = "none";
    bombilla.style.display = "block";
    instagram.style.backgroundImage =
      "url('./imgs/icons8_instagram_old_100px.png')";
  } else {
    document.body.classList.remove("dark");
    localStorage.removeItem("dark");
    luna.style.display = "block";
    bombilla.style.display = "none";
    instagram.style.backgroundImage =
      "url('./imgs/icons8-instagram-viejo-100.png')";
  }
});

function darkOrLight() {
  if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark");
    theme.checked = true;
    luna.style.display = "none";
    bombilla.style.display = "block";
    instagram.style.backgroundImage =
      "url('./imgs/icons8_instagram_old_100px.png')";
  } else {
    luna.style.display = "block";
    bombilla.style.display = "none";
    instagram.style.backgroundImage =
      "url('./imgs/icons8-instagram-viejo-100.png')";
  }
}
darkOrLight();
