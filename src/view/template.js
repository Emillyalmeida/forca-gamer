const main = document.querySelector("main");
const btnColorMode = document.querySelector("header button");

export default class Template {
  static Buttons(name) {
    main.innerHTML = `<h2>Jogador: ${name}</h2>
                      <div class="div-buttons">
                        <button id="start">Começar a jogar</button>
                        <button id="newWord">Adicionar nova palavra</button>
                      </div>`;
  }
  static ModalInfo() {
    document.getElementById("info").classList.add("modal-info");
    document.getElementById("info").classList.remove("notAppear");
  }
  static changeTheme() {
    const themeBody = document.body.classList;

    if (themeBody[0] === "light-theme") {
      themeBody.remove("light-theme");
      themeBody.add("dark-theme");
    } else {
      themeBody.add("light-theme");
      themeBody.remove("dark-theme");
    }
    btnColorMode.innerHTML = "";
    themeBody[0] === "light-theme"
      ? (btnColorMode.innerHTML = '<i class="fa-solid fa-moon"></i>')
      : (btnColorMode.innerHTML = '<i class="fa-solid fa-sun"></i>');
  }
}
