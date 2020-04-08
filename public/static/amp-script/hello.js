const submenuBackBtn = document.querySelector("#submenu-back");
const dropDownToggle = document.querySelector(".dropdown-toggle");
const menu = document.querySelector(".menu");

submenuBackBtn.addEventListener("click", () => {
  menu.style.display = "none";
});
dropDownToggle.addEventListener("click", () => {
  menu.style.display = "flex";
});
