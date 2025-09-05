document.addEventListener('DOMContentLoaded', function(){
  const tabs = document.querySelectorAll('.tab');
  const pages = document.querySelectorAll('.page');

  function activate(targetId){
    tabs.forEach(t=> t.classList.toggle('active', t.dataset.target===targetId));
    pages.forEach(p=> p.classList.toggle('active', p.id===targetId));
    // pop stickers and sparkles when changing
    makePop();
  }

  tabs.forEach(t=>{
    t.addEventListener('click', ()=> activate(t.dataset.target));
    t.addEventListener('keydown', (e)=> { if(e.key==='Enter' || e.key===' ') activate(t.dataset.target); });
  });

  // initial sparkles
  function makeSparkle(){
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = Math.random()*window.innerWidth + 'px';
    s.style.top = Math.random()*window.innerHeight + 'px';
    document.body.appendChild(s);
    setTimeout(()=> s.remove(), 2600);
  }
  for(let i=0;i<14;i++){ setTimeout(makeSparkle, i*180); }
  setInterval(makeSparkle, 1200);

  // sticker pop effect
  function makePop(){
    document.querySelectorAll('.floating').forEach((el,i)=>{
      el.animate([
        { transform: 'translateY(0) scale(1)' },
        { transform: 'translateY(-10px) scale(1.07)' },
        { transform: 'translateY(0) scale(1)' }
      ], { duration: 500 + i*40, easing: 'ease-out' });
    });
  }

  // keyboard: arrow navigation between tabs
  document.addEventListener('keydown', (e)=>{
    const activeIndex = Array.from(tabs).findIndex(t=> t.classList.contains('active'));
    if(e.key === 'ArrowDown' || e.key === 'ArrowRight'){
      const next = (activeIndex+1)%tabs.length;
      tabs[next].focus(); tabs[next].click();
    } else if(e.key === 'ArrowUp' || e.key === 'ArrowLeft'){
      const prev = (activeIndex-1+tabs.length)%tabs.length;
      tabs[prev].focus(); tabs[prev].click();
    }
  });

  // ensure initial active
  makePop();
});
