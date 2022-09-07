import User from "../model/user.js";
import Template from "../view/template.js";

export default class Controller {
  static changeTheme() {
    Template.changeTheme();
  }

  static player(name, vitorias, derrotas) {
    const player = new User(name, vitorias, derrotas);
    localStorage.setItem("@forcaGame", JSON.stringify(player));
    Template.Buttons(player._nome);
    return player;
  }

  static nameEmpty() {
    Template.ModalInfo();
  }
  static startGame() {}
}
