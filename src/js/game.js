import Controller from "../controller/controller.js";

const btnColorMode = document.querySelector("header button");
const main = document.querySelector("main");

btnColorMode.addEventListener("click", Controller.changeTheme);

const word = Controller.sortWord();

main.innerHTML = `<h1>${word}</h1>`;
