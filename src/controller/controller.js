import User from "../model/user.js";
import Template from "../view/template.js";
import words from "../js/word.js";

let existPlayer = JSON.parse(localStorage.getItem("@forcaGame"));

export let player = existPlayer? new User(existPlayer._nome, existPlayer._vitorias, existPlayer._derrotas): null;

export default class Controller {
  static changeTheme() {
    Template.changeTheme();
  }

  static player(name, vitorias, derrotas) {
    player = new User(name, vitorias, derrotas);
    localStorage.setItem("@forcaGame", JSON.stringify(player));
    return window.location = "./src/pages/start.html";
  }

  static checkPlayer() {
    console.log(player)
    if(!player){
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
    console.log(pos);
    Template.linesLetters(words[pos])
    return words[pos];
  }

  static win() {
    player.win()
    localStorage.setItem("@forcaGame", JSON.stringify(player));
    window.location = "./win.html";
  }

  static lose() {
    player.lose()
    localStorage.setItem("@forcaGame", JSON.stringify(player));
    window.location = "./lose.html";
  }

  static getPlayer() {
    return player
  }

  static quit() {
    this.lose()
    Template.closeModal()
    this.back()
  }
}
