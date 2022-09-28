import Controller from "../controller/controller.js";
const word = Controller.sortWord();

const btnColorMode = document.querySelector("header button");
const main = document.querySelector("main");
const tela = document.querySelector("canvas");
const tablero = document.getElementById("forca").getContext("2d");
const divLines = document.getElementById("lines-word");
const keyboard = document.getElementById("keyboard");
const divLetterIcorrect = document.getElementById("letters-incorrects");

let listLettersIcorrect = [];
let sizeWord = word.length;
let acertos = 0;

btnColorMode.addEventListener("click", Controller.changeTheme);

console.log(word.split(""));

word.split("").forEach((letter, i) => {
  const divLetter = document.createElement("div");
  divLetter.id = i;
  divLetter.classList.add("line-letter");

  divLines.appendChild(divLetter);
});

const showIncorrectLetter = () => {
  divLetterIcorrect.innerHTML = "";
  listLettersIcorrect.forEach((letter) => {
    const spanLetter = document.createElement("span");
    spanLetter.innerText = letter;

    divLetterIcorrect.appendChild(spanLetter);
  });
};

const getLetter = (letter) => {
  const hasLetter = word.split("").filter((char) => char == letter);

  if (hasLetter.length) {
    acertos += hasLetter.length;
  } else {
    listLettersIcorrect.push(letter);
    showIncorrectLetter();
  }
};

for (let i = 0; i < keyboard.children.length; i++) {
  let item = keyboard.children[i].addEventListener("click", (e) => {
    getLetter(e.target.id);
  });
}
