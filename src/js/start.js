import Controller from "../controller/controller.js";

const main = document.querySelector("main");
const player = JSON.parse(localStorage.getItem("@forcaGame"));

main.innerHTML = `<h2>Jogador: ${player._nome}</h2>
                      <div class="div-buttons">
                        <button id="start">Começar a jogar</button>
                        <button id="newWord">Adicionar nova palavra</button>
                      </div>`;

const btnStart = document.getElementById("start");
const btnNewWord = document.getElementById("newWord");

const btnColorMode = document.querySelector("header button");

btnStart.addEventListener("click", Controller.startGame);

btnNewWord.addEventListener("click", Controller.newWord);

btnColorMode.addEventListener("click", Controller.changeTheme);
