import User from "../model/user.js";
import Template from "../view/template.js";
import words from "../js/word.js";

let existPlayer = JSON.parse(localStorage.getItem("@forcaGame"));
let themeDark = JSON.parse(localStorage.getItem("@forcaGame/dark"));

export default class Controller {
  static word = ''
  static listLettersAttempts = [];
  static sizeWord = 0;
  static corrects = 0;
  static errors = 0;
  static player = existPlayer? new User(existPlayer._nome, existPlayer._vitorias, existPlayer._derrotas): null;


  static changeTheme() {
    Template.changeTheme();
  }

  static checkTheme() {
    if(themeDark){
      Template.changeTheme();
    }
  }

  static setPlayer(name, vitorias, derrotas) {
    this.player = new User(name, vitorias, derrotas);
    localStorage.setItem("@forcaGame", JSON.stringify(this.player));
    return window.location = "./src/pages/start.html";
  }

  static checkPlayer() {
    if(!this.player){
      return window.location = "../../index.html";
    }
  }

  static modalWarn() {
    Template.ModalInfo();
  }
  static startGame() {
    window.location = "./game.html";
  }

  static newWord() {
    window.location = "./registerWord.html";
  }

  static back() {
    window.location = "./start.html"
  }

  static registerWord(value) {
    if (value.length > 3) {
      words.push(value);
      this.startGame();
    } else {
      this.modalWarn();
    }
  }

  static closeModal() {
    Template.closeModal();
  }

  static sortWord() {
    const pos = Math.floor(Math.random() * words.length);
    this.word = words[pos];
    Template.drawHang();
    Template.linesLetters(words[pos]);
    return words[pos];
  }

  static getLetter = (letter) => {
    this.sizeWord = this.word.length
    if (this.listLettersAttempts.includes(letter)) {
      return;
    }
    const hasLetter = this.word.includes(letter);
  
    if (hasLetter) {
      const positionsAcertos = this.word.split("").filter((char, i) => {
        if (char == letter) {
          Template.showCorrectLetter(i, this.word);
          return char;
        }
      });

      this.corrects += positionsAcertos.length;
      this.listLettersAttempts.push(letter);
      Template.showAttemptsLetter(this.listLettersAttempts);
      
      if (this.corrects === this.sizeWord) {
        Controller.win();
      }

    } else {
      this.listLettersAttempts.push(letter);
      Template.showAttemptsLetter(this.listLettersAttempts);
      this.errors++;
      Template.draw(this.errors);

      if (this.errors === 8) {
        Controller.lose();
      }
    }
  };

  static win() {
    this.player.win()
    localStorage.setItem("@forcaGame", JSON.stringify(this.player));
    window.location = "./win.html";
  }

  static lose() {
    this.player.lose();
    localStorage.setItem("@forcaGame", JSON.stringify(this.player));
    window.location = "./lose.html";
  }

  static getPlayer() {
    return this.player;
  }

  static quit() {
    this.lose();
    Template.closeModal();
    this.back();
  }
}
