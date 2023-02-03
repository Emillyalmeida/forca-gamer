
const btnColorMode = document.querySelector("header button");
const modal = document.getElementById("info");
const divLines = document.getElementById("lines-word");
const table = document.getElementById("forca")?.getContext("2d");
const divLetterAttempts = document.getElementById("letters-incorrects");

export default class Template {
  static ModalInfo() {
    modal.classList.add("modal-info");
    modal.classList.remove("notAppear");
  }
  static closeModal() {
    modal.classList.add("notAppear");
    modal.classList.remove("modal-info");
  }
  static changeTheme() {
    const themeBody = document.body.classList;

    if (themeBody[0] === "light-theme") {
      localStorage.setItem("@forcaGame/dark", JSON.stringify(true));
      themeBody.remove("light-theme");
      themeBody.add("dark-theme");     
    } else {
      localStorage.setItem("@forcaGame/dark", JSON.stringify(false));
      themeBody.add("light-theme");
      themeBody.remove("dark-theme");
    }
    btnColorMode.innerHTML = "";
    themeBody[0] === "light-theme"
      ? (btnColorMode.innerHTML = '<i class="fa-solid fa-moon"></i>')
      : (btnColorMode.innerHTML = '<i class="fa-solid fa-sun"></i>');
  }

  static linesLetters (word) {
    word.split("").forEach((letter, i) => {
      const divLetter = document.createElement("div");
      divLetter.id = i;
      divLetter.classList.add("line-letter");
    
      divLines.appendChild(divLetter);
    });
  }

  static drawHang = () => {
    table.lineWidth = 6;
    table.lineCap = "round";
    table.lineJoin = "round";
    table.strokeStyle = "#83bbff";
    table.beginPath();
    table.moveTo(100, 200);
    table.lineTo(100, 20);
    table.stroke();
    table.closePath();
  };

  static draw(errors) {
    table.lineWidth = 5;
    table.stroke();
    if (errors === 1) {
      //teto
      table.moveTo(240, 20);
      table.lineTo(100, 20);
    }
    if (errors === 2) {
      //corda
      table.moveTo(240, 20);
      table.lineTo(240, 40);
    }
    if (errors === 3) {
      //para cara
      table.moveTo(240, 50);
      table.fillStyle = "#83bbff";
      table.arc(240, 55, 15, 0, Math.PI * 2);
      table.fill();
    }
    if (errors === 4) {
      //para corpo
      table.moveTo(240, 110);
      table.lineTo(240, 70);
    }
    if (errors === 5) {
      //para perna esquerda
      table.moveTo(240, 110);
      table.lineTo(220, 130);
    }
    if (errors === 6) {
      //para perna direita
      table.moveTo(240, 110);
      table.lineTo(260, 130);
    }
    if (errors === 7) {
      //para mão esquerda
      table.moveTo(240, 80);
      table.lineTo(220, 92);
    }
    if (errors === 8) {
      //para mão direita
      table.moveTo(240, 80);
      table.lineTo(260, 92);
    }
    table.stroke();
    table.closePath();
  }

  static showCorrectLetter = (index, word) => {
    const placeLetterCorrect = document.getElementById(index);
    placeLetterCorrect.innerHTML = `<span>${word[index]}</span>`;
  }

  static showAttemptsLetter = (listLettersAttempts) => {
    divLetterAttempts.innerHTML = "";
    listLettersAttempts.forEach((letter) => {
      const spanLetter = document.createElement("span");
      spanLetter.innerText = letter;
  
      divLetterAttempts.appendChild(spanLetter);
    });
  };
}
