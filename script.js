const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

if (slides.length > 0) {
  showSlide(currentSlide);

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000); // každé 4 sekundy
}
