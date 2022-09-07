const main = document.querySelector("main");
const btnColorMode = document.querySelector("header button");
const modal = document.getElementById("info");

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
