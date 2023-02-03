import Controller from "../controller/controller.js";

Controller.checkPlayer();

Controller.checkTheme();

Controller.sortWord();

const btnColorMode = document.querySelector("header button");
const keyboard = document.getElementById("keyboard");
const btnQuit = document.getElementById("quit");
const btnConfirmQuit = document.querySelector(".btn-quit");
const btnClose = document.getElementById("close-info");

for (let i = 0; i < keyboard.children.length; i++) {
  keyboard.children[i].addEventListener("click", (e) => {
    Controller.getLetter(e.target.id);
  });
}

btnQuit.addEventListener("click", () => {
  Controller.modalWarn();
});

btnColorMode.addEventListener("click", () => {
  Controller.changeTheme();
});

btnConfirmQuit.addEventListener("click", () => {
  Controller.quit();
})

btnClose.addEventListener("click", () => {
  Controller.closeModal();
});
