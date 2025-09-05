document.addEventListener("DOMContentLoaded", () => {
  // Wiggle on hover
  const notes = document.querySelectorAll('.note, .sticky-note');
  notes.forEach(note => {
    note.addEventListener('mouseover', () => {
      note.style.transform = 'rotate(3deg) scale(1.05)';
    });
    note.addEventListener('mouseout', () => {
      note.style.transform = 'rotate(-1deg) scale(1)';
    });
  });

  // Add random blue sparkles
  for (let i = 0; i < 20; i++) {
    let sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(sparkle);
  }
});

// Sparkle animation style
const style = document.createElement('style');
style.innerHTML = `
  .sparkle {
    position: fixed;
    width: 8px;
    height: 8px;
    background: #66b3ff;
    border-radius: 50%;
    animation: twinkle 2s infinite;
    opacity: 0.7;
  }
  @keyframes twinkle {
    0%, 100% { transform: scale(0.8); opacity: 0.7; }
    50% { transform: scale(1.5); opacity: 1; }
  }
`;
document.head.appendChild(style);
