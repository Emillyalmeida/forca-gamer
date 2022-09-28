import User from "../model/user.js";
import Template from "../view/template.js";
import words from "../js/word.js";

export default class Controller {
  static changeTheme() {
    Template.changeTheme();
  }

  static player(name, vitorias, derrotas) {
    const player = new User(name, vitorias, derrotas);
    localStorage.setItem("@forcaGame", JSON.stringify(player));
    window.location = "./src/pages/start.html";
    return player;
  }

  static nameEmpty() {
    Template.ModalInfo();
  }
  static startGame() {
    window.location = "./game.html";
  }

  static newWord() {
    window.location = "./registerWord.html";
  }

  static registerWord(value) {
    if (value.length > 3) {
      words.push(value);
      this.startGame();
    } else {
      this.nameEmpty();
    }
  }

  static closeModal() {
    Template.closeModal();
  }

  static sortWord() {
    const pos = Math.floor(Math.random() * words.length);
    console.log(pos);
    return words[pos];
  }
}
