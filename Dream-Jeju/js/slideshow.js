const images = document.querySelectorAll(".slides__img");
const prev = document.querySelector(".slides__prevBtn");
const next = document.querySelector(".slides__nextBtn");
let current = 0; //슬라이드 번호 저장

function prevSlide() {
  if (current === 0) current = images.length - 1;
  else current -= 1;
  showSlide(current);
}

function nextSlide() {
  if (current === images.length - 1) current = 0;
  else current += 1;
  showSlide(current);
}

function showSlide(current) {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("on");
  }
  images[current].classList.add("on");
}

showSlide(current);
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
