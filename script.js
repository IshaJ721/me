/* script.js — tabs, tilt randomizer, extra animations & keyboard nav */

// TAB BEHAVIOR (with keyboard support)
document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('.tab-btn'));
  const panels = Array.from(document.querySelectorAll('.tab-panel'));

  function activateTab(tabBtn) {
    tabs.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    panels.forEach(p => {
      p.classList.remove('active');
      p.setAttribute('aria-hidden', 'true');
    });
    tabBtn.classList.add('active');
    tabBtn.setAttribute('aria-selected', 'true');
    const id = tabBtn.dataset.tab;
    const panel = document.getElementById(id);
    if (panel) {
      panel.classList.add('active');
      panel.setAttribute('aria-hidden', 'false');
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // small focus flash
      panel.animate([{ filter: 'brightness(.95)' }, { filter: 'brightness(1)' }], { duration: 450 });
    }
  }

  tabs.forEach((b, i) => {
    b.addEventListener('click', () => activateTab(b));
    b.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const next = e.key === 'ArrowRight' ? tabs[(i + 1) % tabs.length] : tabs[(i - 1 + tabs.length) % tabs.length];
        next.focus();
        activateTab(next);
      }
    });
  });

  // initialize first tab
  const first = document.querySelector('.tab-btn.active') || tabs[0];
  if (first) activateTab(first);

  // RANDOM TILTS FOR PHOTO CARDS (makes it look scrapbook-cut)
  const photoCards = document.querySelectorAll('.photo-card');
  photoCards.forEach((card, idx) => {
    const classes = ['tilt-left','tilt-right','tilt-small'];
    const pick = classes[idx % classes.length];
    card.classList.add(pick);
    // slight staggered float or wiggle
    if (idx % 2 === 0) card.classList.add('wiggle');
    else card.classList.add('floaty');
  });

  // hover micro-interactions for cards
  document.querySelectorAll('.card, .photo-card, .polaroid-large').forEach(el => {
    el.addEventListener('mouseenter', () => el.style.transform = 'translateY(-6px) rotate(-1deg) scale(1.02)');
    el.addEventListener('mouseleave', () => el.style.transform = '');
  });

  // decorative: randomize doodles' animation durations for organic feel
  document.querySelectorAll('.doodle').forEach((d, i) => {
    d.style.animationDuration = (6 + (i * 2)) + 's';
    d.style.opacity = 0.7 + (i * 0.07);
  });

});
