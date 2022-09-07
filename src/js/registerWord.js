import Controller from "../controller/controller.js";

const btnBack = document.getElementById("back");

btnBack.addEventListener("click", () => {
  window.location = "./src/pages/start.html";
});
