document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".banner-slide");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const navLinks = document.querySelectorAll(".nav-link");
  
  let currentSlide = 0;

  // ฟังก์ชันสลับสไลด์ 6 หน้า
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });

    // อัปเดตเมนูบาร์ active ลิ้งก์ตามสไลด์
    navLinks.forEach((link, i) => {
      link.classList.remove("active");
      if (i === index) {
        link.classList.add("active");
      }
    });
  }

  // กดปุ่ม Next / Prev เปลี่ยนสไลด์
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // กดที่เมนูหมวดหมู่เพื่อเปลี่ยนสไลด์ตามหน้าที่เลือก
  navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });
});
