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

// FLOATING ANIMATIONS
const floatImages = ['heart.jpeg', 'star.jpeg', 'cloud.jpeg', 'tape.jpeg'];

floatImages.forEach(src => {
  const img = document.createElement('img');
  img.src = `images/${src}`; // adjust path if needed
  img.className = 'floating';
  document.body.appendChild(img);

  // randomize starting position
  img.style.left = `${Math.random() * 90}vw`;
  img.style.top = `${Math.random() * 90}vh`;

  // animate float
  let xDir = Math.random() < 0.5 ? -1 : 1;
  let yDir = Math.random() < 0.5 ? -1 : 1;
  let speed = 0.3 + Math.random() * 0.7;

  function animate() {
    let x = parseFloat(img.style.left);
    let y = parseFloat(img.style.top);

    x += xDir * speed;
    y += yDir * speed;

    if (x < 0 || x > 90) xDir *= -1;
    if (y < 0 || y > 90) yDir *= -1;

    img.style.left = `${x}vw`;
    img.style.top = `${y}vh`;

    requestAnimationFrame(animate);
  }
  animate();
});

// OPTIONAL: subtle rotation for fun scrapbook vibe
document.querySelectorAll('.floating').forEach(img => {
  let rotation = Math.random() * 360;
  let speed = 0.1 + Math.random() * 0.3;

  function rotate() {
    rotation += speed;
    img.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(rotate);
  }
  rotate();
});
