import Controller from "../controller/controller.js";

Controller.checkPlayer()
Controller.checkTheme()

const btnStart = document.getElementById("start");
const btnBack = document.getElementById("back");
const btnColorMode = document.querySelector("header button");
const divContent = document.querySelector(".content-info")

const player = Controller.getPlayer()

const divInfoPlayer = `<div class="info-player">
                          <i class="fa-sharp fa-solid fa-trophy"></i>
                          <h4>Vitórias</h4>
                          <span>${player._vitorias}</span>
                        </div>
                        <div class="info-player">
                          <i class="fa-solid fa-heart-crack"></i>
                          <h4>Derrotas</h4>
                          <span>${player._derrotas}</span>
                        </div>`;

divContent.innerHTML = divInfoPlayer                      

btnStart.addEventListener("click", Controller.startGame);

btnBack.addEventListener("click", Controller.back);

btnColorMode.addEventListener("click", Controller.changeTheme);