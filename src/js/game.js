import Controller from "../controller/controller.js";

Controller.checkPlayer();

const word = Controller.sortWord();

const btnColorMode = document.querySelector("header button");
const tablero = document.getElementById("forca").getContext("2d");
const keyboard = document.getElementById("keyboard");
const divLetterAttempts = document.getElementById("letters-incorrects");
const btnQuit = document.getElementById("quit");
const btnConfirmQuit = document.querySelector(".btn-quit");
const btnClose = document.getElementById("close-info");

let listLettersAttempts = [];
let sizeWord = word.length;
let acertos = 0;
let errors = 0;

console.log(word.split(""));

const drawHang = () => {
  tablero.lineWidth = 6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.strokeStyle = "#83bbff";
  tablero.beginPath();
  tablero.moveTo(100, 200);
  tablero.lineTo(100, 20);
  tablero.stroke();
  tablero.closePath();
};

drawHang();
function desenharForca() {
  tablero.lineWidth = 5;
  tablero.stroke();
  if (errors === 1) {
    //teto
    tablero.moveTo(240, 20);
    tablero.lineTo(100, 20);
  }
  if (errors === 2) {
    //corda
    tablero.moveTo(240, 20);
    tablero.lineTo(240, 40);
  }
  if (errors === 3) {
    //para cara
    tablero.moveTo(240, 50);
    tablero.fillStyle = "#83bbff";
    tablero.arc(240, 55, 15, 0, Math.PI * 2);
    tablero.fill();
  }
  if (errors === 4) {
    //para corpo
    tablero.moveTo(240, 110);
    tablero.lineTo(240, 70);
  }
  if (errors === 5) {
    //para perna esquerda
    tablero.moveTo(240, 110);
    tablero.lineTo(220, 130);
  }
  if (errors === 6) {
    //para perna direita
    tablero.moveTo(240, 110);
    tablero.lineTo(260, 130);
  }
  if (errors === 7) {
    //para mão esquerda
    tablero.moveTo(240, 80);
    tablero.lineTo(220, 92);
  }
  if (errors === 8) {
    //para mão direita
    tablero.moveTo(240, 80);
    tablero.lineTo(260, 92);
  }
  tablero.stroke();
  tablero.closePath();
}

const showCorrectLetter = (index) => {
  const placeLetterCorrect = document.getElementById(index);
  placeLetterCorrect.innerHTML = `<span>${word[index]}</span>`;
};

const showIncorrectLetter = () => {
  divLetterAttempts.innerHTML = "";
  listLettersAttempts.forEach((letter) => {
    const spanLetter = document.createElement("span");
    spanLetter.innerText = letter;

    divLetterAttempts.appendChild(spanLetter);
  });
};

const getLetter = (letter) => {
  if (listLettersAttempts.includes(letter)) {
    return;
  }
  const hasLetter = word.includes(letter);

  if (hasLetter) {
    const positionsAcertos = word.split("").filter((char, i) => {
      if (char == letter) {
        showCorrectLetter(i);
        return char;
      }
    });
    acertos += positionsAcertos.length;
    listLettersAttempts.push(letter);
    showIncorrectLetter();

    if (acertos === sizeWord) {
      Controller.win();
    }
  } else {
    listLettersAttempts.push(letter);
    showIncorrectLetter();
    errors++;
    desenharForca();
    if (errors === 8) {
      Controller.lose();
    }
  }
};

for (let i = 0; i < keyboard.children.length; i++) {
  keyboard.children[i].addEventListener("click", (e) => {
    getLetter(e.target.id);
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
