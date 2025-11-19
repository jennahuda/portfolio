const buttons = document.querySelectorAll('.tab-btn');
const carousels = document.querySelectorAll('.carousel');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.tab;

    carousels.forEach(c => {
      c.classList.remove('active');
      if (c.id === target) c.classList.add('active');
    });
  });
});
  

  const galleries = {
    portraits: ["images/portraits/p1.jpg", "images/portraits/p2.jpg"],
    travel: ["images/travel/t1.jpg", "images/travel/t2.jpg"],
    urban: ["images/wildlife/w1.jpg", "images/wildlife/w2.jpg"]
  };
  
  let currentGenre = "portraits";
  let currentIndex = 0;
  let autoplayInterval = null;
  
  function showGenre(genre) {
    currentGenre = genre;
    currentIndex = 0;
    updateCarousel();
    startAutoplay(); // Restart autoplay on genre change
  }
  
  function updateCarousel() {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = '';
  
    galleries[currentGenre].forEach((imgSrc, index) => {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = "";
      if (index === currentIndex) img.classList.add('active');
      carousel.appendChild(img);
    });
  }
  
  function nextImage() {
    currentIndex++;
    if (currentIndex >= galleries[currentGenre].length) currentIndex = 0;
    updateCarousel();
  }
  
  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = galleries[currentGenre].length - 1;
    updateCarousel();
  }
  
  function startAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextImage, 5000); // Change image every 5 seconds
  }
  
  // Initialize carousel
  updateCarousel();
  startAutoplay();