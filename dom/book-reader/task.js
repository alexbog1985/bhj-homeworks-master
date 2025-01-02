const bookContents = Array.from(document.querySelectorAll('.book__content'));
const bookControls = Array.from(document.querySelectorAll('.font-size'));
console.log(bookControls);


const clearActiveClass = (el, className) => {
    el.find((item) => item.classList.remove(className));
}

const addActiveClass = (el, index, className) => {
    el[index].classList.add(className);
}

const changeFontSize = (controller, index) => {
    controller.addEventListener("click", (e) => {
        let size;
        let sizeClass;
        e.preventDefault();
        if (controller.classList.contains("font-size_active")) return;


        clearActiveClass(bookControls, "font-size_active");
        clearActiveClass(bookContents, "font-size_big");
        clearActiveClass(bookContents, "font-size_small");


        addActiveClass(bookControls, index, "font-size_active");

        size = controller.dataset.size;

        if (size === "big") sizeClass = "font-size_big";
        if (size === "small") sizeClass = "font-size_small";

        if (size) bookContents[0].classList.add(sizeClass);

    });
}

bookControls.forEach(changeFontSize);