import Controller from "../controller/controller.js";
const player = JSON.parse(localStorage.getItem("@forcaGame"));

const btnColorMode = document.querySelector("header button");
const btnClose = document.getElementById("close-info");

const form = document.querySelector("form");

if (player) {
  window.location = "./src/pages/start.html";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target[0].value) {
    Controller.player(e.target[0].value, 0, 0);
  } else {
    Controller.nameEmpty();
  }
});

btnClose.addEventListener("click", () => {
  Controller.closeModal();
});

btnColorMode.addEventListener("click", Controller.changeTheme);
