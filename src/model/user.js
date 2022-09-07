export default class User {
  constructor(nome, vitorias, derrotas) {
    this._nome = nome;
    this._vitorias = vitorias;
    this._derrotas = derrotas;
  }

  win() {
    this._vitorias++;
  }
  lose() {
    this._derrotas++;
  }
}
