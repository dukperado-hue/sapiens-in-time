# v0.22 part 3: landscape home, birth and death screens on computers; a landscape share card everywhere
rep("  document.body.classList.toggle('playing',id==='play');window.scrollTo(0,0);","  document.body.classList.toggle('playing',id==='play');document.body.dataset.scr=id;window.scrollTo(0,0);")
# death page: the head (who you were + card) and the body (story) as two blocks, side by side on a computer
rep('  <section id="death" hidden>\n    <p class="eyebrow" data-i18n="lifeEnded"></p>','  <section id="death" hidden>\n    <div class="dHead">\n    <p class="eyebrow" data-i18n="lifeEnded"></p>')
rep('    <p class="small" data-i18n="cardHint"></p>\n    <p class="epi" id="dEpi"></p>','    <p class="small" data-i18n="cardHint"></p>\n    </div>\n    <div class="dBody">\n    <p class="epi" id="dEpi"></p>')
rep('    <button class="btn btn-ghost" id="toHome" data-i18n="home"></button>\n  </section>','    <button class="btn btn-ghost" id="toHome" data-i18n="home"></button>\n    </div>\n  </section>')
# share card: 1280 x 720, scene on the left, who you were on the right, the odds and the clock under the scene
old=s[s.index("  const c=document.createElement('canvas');c.width=720;c.height=960;"):s.index("  $('#cardImg').src=c.toDataURL('image/png');")]
new='''  const c=document.createElement('canvas');c.width=1280;c.height=720;const x=c.getContext('2d');
  x.fillStyle='#110d0b';x.fillRect(0,0,1280,720);x.imageSmoothingEnabled=false;x.drawImage(off,0,0,768,432);
  {const g=x.createLinearGradient(0,330,0,432);g.addColorStop(0,'rgba(17,13,11,0)');g.addColorStop(1,'rgba(17,13,11,.85)');x.fillStyle=g;x.fillRect(0,330,768,102)}
  if(S.hand){const h=document.createElement('canvas');h.width=24;h.height=24;const hc=h.getContext('2d');handStencil(hc,6,6,S.hand==='black'?'#1e1814':'#b8482e');if(S.handKid)handStencil(hc,15,9,'#b8482e',1);x.drawImage(h,660,320,96,96)}
  x.fillStyle='#c9623a';x.fillRect(768,0,6,720);
  const px=810,mw=430;let y=70;
  x.fillStyle='#eba84b';x.font='18px Silkscreen, monospace';x.fillText('SAPIENS IN TIME',px,y);y+=30;x.fillText('DEC 31 '+clockStr(S.ya0,2),px,y);y+=74;
  x.fillStyle='#ede4d4';x.font='600 54px Pridi, serif';y=wrap(x,L(S.sp.n),px,y,mw,62)+56;
  x.fillStyle='#eba84b';x.font='600 34px Anuphan, sans-serif';y=wrap(x,L(S.title),px,y,mw,42)+48;
  x.font='400 27px Anuphan, sans-serif';x.fillStyle='#a0948a';y=wrap(x,L(REGIONS[S.path[0]].n)+' · '+t('yearsAgo',{n:fmt(S.ya0)}),px,y,mw,36)+54;
  x.fillStyle='#ede4d4';x.font='600 40px Anuphan, sans-serif';x.fillText(t('cardAge',{a:S.age}),px,y);y+=48;
  x.font='400 27px Anuphan, sans-serif';x.fillStyle='#a0948a';wrap(x,L(CAUSE[S.cause]),px,y,mw,36);
  let by=500;x.fillStyle='#eba84b';x.font='600 34px Anuphan, sans-serif';by=wrap(x,oddsStr(),44,by,680,44)+60;
  x.fillStyle='#ede4d4';x.font='400 28px Anuphan, sans-serif';wrap(x,t('clockLine',{n:S.age,s:sec}),44,by,680,38);
'''
s=s.replace(old,new)
