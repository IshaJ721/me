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

// Floating stickers gentle animation
const stickers = document.querySelectorAll('.sticker');

stickers.forEach(sticker => {
  let rotation = Math.random() * 360;
  let dirX = Math.random() < 0.5 ? -1 : 1;
  let dirY = Math.random() < 0.5 ? -1 : 1;
  let speed = 0.1 + Math.random() * 0.2;

  function animate() {
    let x = parseFloat(sticker.style.left) || 0;
    let y = parseFloat(sticker.style.top) || 0;

    x += dirX * speed;
    y += dirY * speed;

    if (x < 0 || x > 90) dirX *= -1;
    if (y < 0 || y > 90) dirY *= -1;

    sticker.style.left = `${x}vw`;
    sticker.style.top = `${y}vh`;

    rotation += 0.1;
    sticker.style.transform = `rotate(${rotation}deg)`;

    requestAnimationFrame(animate);
  }
  animate();
});
