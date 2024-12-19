const dropdown = document.querySelector(".dropdown__value");
const dropdown__list = document.querySelector(".dropdown__list");

dropdown.addEventListener("click", () => {
  dropdown__list.classList.toggle("dropdown__list_active");
});
