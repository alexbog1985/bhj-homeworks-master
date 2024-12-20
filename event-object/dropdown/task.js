const btn = document.querySelector(".dropdown__value");
const dropdown = document.querySelector(".dropdown__list");

const dropdownList = Array.from(document.querySelectorAll(".dropdown__item"));
console.log(dropdownList);
console.log(btn.textContent);

dropdownList.forEach((item) => {
  item.addEventListener("click", (event) => {
    dropdown.classList.remove("dropdown__list_active");
    btn.textContent = item.textContent;
    event.preventDefault();
  });
});

btn.addEventListener("click", () => {
  dropdown.classList.toggle("dropdown__list_active");
});
