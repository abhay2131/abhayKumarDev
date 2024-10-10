const toogleBtn = document.querySelector(".responsive");
const toogleBtnIcon = document.querySelector(".responsive i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toogleBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toogleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});
