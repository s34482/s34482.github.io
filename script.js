document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0; // วนกลับไปสไลด์แรก
    }
    showSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1; // ไปสไลด์สุดท้าย
    }
    showSlide(currentSlide);
  });
});
