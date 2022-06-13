$(function () {
    $('#header',).load('header.html');
});

$(function(){
  $('#webseries',).load('webseries.html');
});

$(function(){
  $('#footer',).load('footer.html');
});

const gap = 45;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "inline";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "inline";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "inline";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "inline";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("", e => (width = carousel.offsetWidth));



