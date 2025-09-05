
document.addEventListener('DOMContentLoaded', ()=>{
  // Add slight random rotation variable to each card for playful chaos
  document.querySelectorAll('.card').forEach((el,i)=>{
    el.style.setProperty('--i', (i % 5) - 2);
  });

  // Sticker hover interactions
  document.querySelectorAll('.sticker').forEach(st=>{
    st.addEventListener('mouseover', ()=> st.style.transform += ' scale(1.14) rotate(6deg)');
    st.addEventListener('mouseout', ()=> st.style.transform = st.style.transform.replace(' scale(1.14) rotate(6deg)',''));
  });

  // Create gentle random sparkles around the page
  function makeSparkle(){
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = Math.random()*window.innerWidth + 'px';
    s.style.top  = Math.random()*window.innerHeight + 'px';
    document.body.appendChild(s);
    setTimeout(()=> s.remove(), 2800);
  }
  for(let i=0;i<18;i++){ setTimeout(makeSparkle, i*160); }
  setInterval(()=>{ makeSparkle(); }, 900);

  // Drift clouds horizontally with small random offsets
  const cloud = document.querySelector('.cloud');
  if(cloud){
    let dir = 1;
    setInterval(()=>{
      const x = (Math.sin(Date.now()/4000)+1)*10*dir;
      cloud.style.transform = `translateX(${x}px)`;
      dir = dir * (Math.random()>0.997 ? -1 : 1);
    }, 200);
  }
});
