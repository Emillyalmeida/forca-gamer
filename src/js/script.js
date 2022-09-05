const btnColorMode = document.querySelector("header button");

const changeTheme = () => {
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
};

btnColorMode.addEventListener("click", changeTheme);
