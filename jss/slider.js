const slides = document.getElementById("slides");

document.querySelector(".next").onclick = () => {
  slides.scrollLeft += 200;
};

document.querySelector(".prev").onclick = () => {
  slides.scrollLeft -= 200;
};