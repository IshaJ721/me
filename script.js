document.addEventListener("DOMContentLoaded", () => {
  // Sticker hover
  const stickers = document.querySelectorAll('.sticker');
  stickers.forEach(sticker => {
    sticker.addEventListener('mouseover', () => {
      sticker.style.transform = 'scale(1.3)';
    });
    sticker.addEventListener('mouseout', () => {
      sticker.style.transform = 'scale(1)';
    });
  });

  // Tabs logic
  const buttons = document.querySelectorAll('.tab-button');
  const pages = document.querySelectorAll('.tab-page');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tab = btn.dataset.tab;
      pages.forEach(p => {
        p.classList.remove('active');
        if(p.id === tab) p.classList.add('active');
      });
    });
  });

  // Activate first tab by default
  pages[0].classList.add('active');
});
