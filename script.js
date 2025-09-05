// Sticker hover scale effect
document.addEventListener("DOMContentLoaded", () => {
  const stickers = document.querySelectorAll('.sticker');
  stickers.forEach(sticker => {
    sticker.addEventListener('mouseover', () => { sticker.style.transform = 'scale(1.3)'; });
    sticker.addEventListener('mouseout', () => { sticker.style.transform = 'scale(1)'; });
  });

  // Tab functionality
  const buttons = document.querySelectorAll('.tab-button');
  const pages = document.querySelectorAll('.tab-page');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      pages.forEach(page => page.classList.remove('active'));
      button.classList.add('active');
      document.getElementById(button.dataset.tab).classList.add('active');
    });
  });
});
