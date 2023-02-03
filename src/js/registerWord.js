import Controller from "../controller/controller.js";

Controller.checkPlayer();
Controller.checkTheme();

const btnBack = document.getElementById("back");
const save = document.getElementById("save");
const texrArea = document.querySelector("textarea");
const btnClose = document.getElementById("close-info");
const btnColorMode = document.querySelector("header button");

btnBack.addEventListener("click", () => {
  Controller.back();
});

save.addEventListener("click", () => {
  Controller.registerWord(texrArea.value);
});

btnClose.addEventListener("click", Controller.closeModal);

btnColorMode.addEventListener("click", Controller.changeTheme);
