const tabs = Array.from(document.querySelectorAll(".tab"));
const contents = Array.from(document.querySelectorAll(".tab__content"));

const clearActiveClass = (element, className) => {
  element.find((item) => item.classList.remove(className));
};

const addActiveClass = (element, index, className) => {
  element[index].classList.add(className);
};

const checkoutTabs = (tab, index) => {
  tab.addEventListener("click", () => {
    if (tab.classList.contains("tab_active")) return;
    console.log(tab);

    clearActiveClass(tabs, "tab_active");
    clearActiveClass(contents, "tab__content_active");

    addActiveClass(tabs, index, "tab_active");
    addActiveClass(contents, index, "tab__content_active");
  });
};

tabs.forEach(checkoutTabs);
