const rotatorCases = Array.from(document.querySelectorAll(".rotator__case"));
let counter = 0;
let delay = +document.getElementsByClassName("rotator__case_active")[0].dataset
  .speed;

rotator = () => {
  if (counter === rotatorCases.length) {
    counter = 0;
  }

  if (
    counter > 0 &&
    rotatorCases[counter - 1].className.includes("rotator__case_active")
  ) {
    rotatorCases[counter - 1].classList.remove("rotator__case_active");
  } else if (
    counter === 0 &&
    rotatorCases[rotatorCases.length - 1].className.includes(
      "rotator__case_active"
    )
  ) {
    rotatorCases[rotatorCases.length - 1].classList.remove(
      "rotator__case_active"
    );
  }

  rotatorCases[counter].classList.add("rotator__case_active");

  const activeElement = document.querySelector(".rotator__case_active");
  delay = +activeElement.dataset.speed;

  counter += 1;

  rotator = setInterval(rotator, delay);
  console.log(delay);
};

rotator();
