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
    wildlife: ["images/wildlife/w1.jpg", "images/wildlife/w2.jpg"]
  };
  
  let currentGenre = "portraits";
  let currentIndex = 0;
  
  function showGenre(genre) {
    currentGenre = genre;
    currentIndex = 0;
    updateCarousel();
  }
  
  function updateCarousel() {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = `<img src="${galleries[currentGenre][currentIndex]}" alt="">`;
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
  
  // Initialize carousel
  updateCarousel();
  