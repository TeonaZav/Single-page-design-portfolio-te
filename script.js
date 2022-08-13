"use strict";

const slider = document.querySelector(".slider-wrapper");
const container = document.querySelector(".slider-container");

let counter = 0;
let direction = 0;
const carousel = () => {
  slider.style.transition = "none";
  counter = 0;
};
container.addEventListener("click", function (e) {
  slider.style.transition = "all 1s ease-in-out";
  if (e.target.classList.contains("next")) {
    nextSlide();
  }
  if (e.target.classList.contains("prev")) {
    previous();
  }
});
document.addEventListener("keydown", function (e) {
  slider.style.transition = "all 1s ease-in-out";

  if (e.keyCode == "37") {
    previous();
  } else if (e.keyCode == "39") {
    nextSlide();
  }
});
slider.addEventListener("transitionend", carousel);

function previous() {
  direction = -1;
  counter += 30;
  slider.style.transform = `translateX(${counter}%)`;
  slider.prepend(slider.lastElementChild);
  slider.style.transform = `translateX(0%)`;
}
function nextSlide() {
  direction = 1;
  counter -= 30;
  slider.style.transform = `translateX(${counter}%)`;
  slider.appendChild(slider.firstElementChild);
  slider.style.transform = `translateX(0%)`;
}
