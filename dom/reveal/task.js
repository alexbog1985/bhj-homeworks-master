isVisible = (element) => {
  let coords = element.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  let topVisible = coords.top > 0 && coords.top < windowHeight;

  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
};

showVisible = () => {
  for (let el of document.querySelectorAll(".reveal")) {
    if (isVisible(el)) {
      el.classList.add("reveal_active");
    }
  }
};

showVisible();
window.onscroll = showVisible;
