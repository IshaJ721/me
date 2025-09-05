// Select all floating stickers
const stickers = document.querySelectorAll('.floating-stickers .sticker');

// Assign each sticker a random starting position + speed
stickers.forEach(sticker => {
  sticker.style.top = `${Math.random() * window.innerHeight}px`;
  sticker.style.left = `${Math.random() * window.innerWidth}px`;

  // store custom speed/direction
  sticker.dataset.dx = (Math.random() * 2 - 1) * 0.5; // horizontal speed
  sticker.dataset.dy = (Math.random() * 2 - 1) * 0.5; // vertical speed
});

// Animate stickers drifting
function animateStickers() {
  stickers.forEach(sticker => {
    let x = parseFloat(sticker.style.left);
    let y = parseFloat(sticker.style.top);
    let dx = parseFloat(sticker.dataset.dx);
    let dy = parseFloat(sticker.dataset.dy);

    x += dx;
    y += dy;

    // Bounce back when hitting edges
    if (x < 0 || x > window.innerWidth - 60) {
      dx *= -1;
    }
    if (y < 0 || y > window.innerHeight - 60) {
      dy *= -1;
    }

    sticker.style.left = `${x}px`;
    sticker.style.top = `${y}px`;

    sticker.dataset.dx = dx;
    sticker.dataset.dy = dy;
  });

  requestAnimationFrame(animateStickers);
}

animateStickers();

// Fade/slide in notes on scroll
const notes = document.querySelectorAll('.note');
const revealNotes = () => {
  const triggerBottom = window.innerHeight * 0.85;

  notes.forEach(note => {
    const noteTop = note.getBoundingClientRect().top;
    if (noteTop < triggerBottom) {
      note.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealNotes);
revealNotes();
