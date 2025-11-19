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
