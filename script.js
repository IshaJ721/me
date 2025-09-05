document.addEventListener("DOMContentLoaded", () => {
  const stickers = document.querySelectorAll('.sticker');
  stickers.forEach(sticker => {
    sticker.addEventListener('mouseover', () => {
      sticker.style.transform = 'scale(1.2)';
    });
    sticker.addEventListener('mouseout', () => {
      sticker.style.transform = 'scale(1)';
    });
  });
});
