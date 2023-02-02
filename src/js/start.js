import Controller from "../controller/controller.js";

Controller.checkPlayer()

const main = document.querySelector("main");
const player = JSON.parse(localStorage.getItem("@forcaGame"));

main.innerHTML = `    <h2>Jogador: ${player._nome}</h2>
                      <div class="content-info">
                        <div class="info-player">
                          <i class="fa-sharp fa-solid fa-trophy"></i>
                          <h4>Vitórias</h4>
                          <span>${player._vitorias}</span>
                        </div>
                        <div class="info-player">
                          <i class="fa-solid fa-heart-crack"></i>
                          <h4>Derrotas</h4>
                          <span>${player._derrotas}</span>
                        </div>
                      </div>
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
