document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
  
    // Fungsi utama untuk ganti slide
    function goToSlide(index) {
      // Pastikan index valid
      if (index < 0) index = slides.length - 1;
      else if (index >= slides.length) index = 0;
      
      // Sembunyikan semua slide
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Tampilkan slide yang dipilih
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      currentIndex = index;
    }
  
    // Event listeners sederhana
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    
    // Click pada dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });
  
    // Keyboard navigation (optional)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
      else if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
    });
  
    // Inisialisasi
    goToSlide(0);
  });