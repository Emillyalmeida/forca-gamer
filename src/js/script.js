import Controller from "../controller/controller.js";
import { player } from "../controller/controller.js";

const btnColorMode = document.querySelector("header button");
const btnClose = document.getElementById("close-info");

const form = document.querySelector("form");

if (player) {
  Controller.player(player._nome, player._vitorias, player._derrotas);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target[0].value) {
    Controller.player(e.target[0].value, 0, 0);
  } else {
    Controller.modalWarn();
  }
});

btnClose.addEventListener("click", () => {
  Controller.closeModal();
});

btnColorMode.addEventListener("click", Controller.changeTheme);