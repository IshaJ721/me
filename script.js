// TAB FUNCTIONALITY
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

// FLOATING STICKERS - more, gentle drift, lower on page
const stickerImages = ['heart.jpeg','star.jpeg','cloud.jpeg','tape.jpeg','heart.jpeg','star.jpeg'];
stickerImages.forEach((src, i) => {
  const sticker = document.createElement('div');
  sticker.className = 'sticker';
  sticker.style.backgroundImage = `url(${src})`;

  // Start position random lower half of page
  sticker.style.left = `${5 + Math.random() * 85}vw`;
  sticker.style.top = `${55 + Math.random() * 40}vh`;

  document.body.appendChild(sticker);

  let rotation = Math.random() * 360;
  let dirX = Math.random() < 0.5 ? -1 : 1;
  let speed = 0.05 + Math.random() * 0.1;

  function animate() {
    let x = parseFloat(sticker.style.left);
    x += dirX * speed;

    if (x < 0) dirX = 1;
    if (x > 90) dirX = -1;

    sticker.style.left = `${x}vw`;

    rotation += 0.05;
    sticker.style.transform = `rotate(${rotation}deg)`;

    requestAnimationFrame(animate);
  }
  animate();
});
