// TAB FUNCTIONALITY (unchanged)
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    contents[i].classList.add('active');
  });
});

// BACKGROUND ANIMATED ICONS - MORE OF THEM
const iconImages = ['heart.jpeg','star.jpeg','cloud.jpeg','tape.jpeg']; 

// create 30+ icons randomly
for (let i = 0; i < 30; i++) {
  const icon = document.createElement('div');
  icon.className = 'bg-icon';
  const src = iconImages[Math.floor(Math.random() * iconImages.length)];
  icon.style.backgroundImage = `url(${src})`;

  // random start position
  icon.style.left = `${Math.random() * 95}vw`;
  icon.style.top = `${Math.random() * 90}vh`;

  // random scale size
  const size = 30 + Math.random() * 70; // 30px to 100px
  icon.style.width = `${size}px`;
  icon.style.height = `${size}px`;

  // random animation duration
  icon.style.animationDuration = `${3 + Math.random() * 5}s`;

  document.body.appendChild(icon);
}
