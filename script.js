document.addEventListener("DOMContentLoaded", () => {
  // Tab switching
  const buttons = document.querySelectorAll(".tab-button");
  const pages = document.querySelectorAll(".tab-page");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      pages.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // Sticker hover animation
  const stickers = document.querySelectorAll('.sticker');
  stickers.forEach(sticker => {
    sticker.addEventListener('mouseover', () => sticker.style.transform = 'scale(1.2)');
    sticker.addEventListener('mouseout', () => sticker.style.transform = 'scale(1)');
  });

  // Activate first tab by default
  buttons[0].click();
});
