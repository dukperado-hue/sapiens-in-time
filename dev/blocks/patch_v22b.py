# v0.22 part 2: atmosphere, visuals, sound, DOM, keyboard, CSS (exec'd by patch_v22.py, shares rep/s/blk)
# --- ATMOSPHERE + VISUALS inside drawScene
rep("  if(wx.rain||storm){for(let i=0;i<(storm?110:60);i++){const x=(i*29+now/9*(1+i%3)*.5)%W,y=(i*17+now/5*(1+(i%2)*.4))%H;R(x,y,1,3,'rgba(190,210,230,.5)')}}",
    "  if(wx.rain||storm)rain22(ctx,o,gy,now,storm);")
rep("  // night\n  ctx.fillStyle='rgba(6,8,26,'","  fg22(ctx,o,P,gy,now,wx);\n  // night\n  ctx.fillStyle='rgba(6,8,26,'")
rep("ctx.globalCompositeOperation='source-over'}\n  // GFX20: fireflies","ctx.globalCompositeOperation='source-over'}\n  embers22(ctx,fires,now,day);shafts22(ctx,o,tm,day,dusk,wx,storm);\n  // GFX20: fireflies")
rep("  if(storm&&((now/97)|0)%41===0){ctx.fillStyle='rgba(255,255,255,.35)';ctx.fillRect(0,0,W,H);let x=40+(seed%110);for(let y=0;y<gy;y+=3){R(x,y,1,3,'#fffbe8');x+=((y*7)%3)-1}}",
    "  grade22(ctx,day,dusk,wx,storm);flash22(ctx,o,gy,now,storm);")
rep("  if(screen==='play'&&S){const so=sceneOpts();drawScene($('#scene').getContext('2d'),so);SND.scene(so,true)}",
    "  if(screen==='play'&&S){const so=sceneOpts();so.live=1;if(QS.has('storm')){so.wx=Object.assign({},so.wx,{rain:1});so.yt='wet'}if(QS.has('dusk'))so.tm=.79;const wx=so.wx||{},cold=!!(so.snowGround||so.snowFall||wx.snow);ATM.update(Date.now(),so.dis==='storm'||(wx.rain&&so.yt==='wet'),!!wx.rain,cold);\n    const cv=$('#scene'),fin=stageFrame22(cv,so);drawScene(cv.getContext('2d'),so);fin();SND.scene(so,true);if(!$('#modal').hidden)modalScene22();titleCard22()}")

# --- SOUND
rep("let ac=null,M=null,G={},","let vol22=clamp(+store.get('sit.vol',100),0,100)/100,lastK22={},lastBig22=0,ac=null,M=null,G={},")
rep("M=ac.createGain();M.gain.value=.85;","M=ac.createGain();M.gain.value=.85*vol22;")
rep("    if(sc.thunder&&r()<.012){noise(t,.15,.25,'highpass',900,.7,G.amb);noise(t+.05,3.2,.35,'lowpass',160,.8,G.amb,{brown:1,a:.3})}\n","")
rep("if(sc.hippo&&r()<.012)call('hippo',.5);","if(sc.hippo&&gap22('hippo',14)&&r()<.012){mark22('hippo');call('hippo',.5)}")
rep("if(sc.goats&&r()<.008)call('goat',.4);","if(sc.goats&&gap22('goats',14)&&r()<.008){mark22('goats');call('goat',.4)}")
for k,p in [('gulls','.02'),('rooster','.03'),('owl','.012'),('peacock','.01')]:
    rep("if(sc."+k+"&&r()<"+p+"){","if(sc."+k+"&&gap22('"+k+"',14)&&r()<"+p+"){mark22('"+k+"');")
rep("  // ---------- what you are doing, as sound ----------",
"""  function gap22(k,s){const tn=now();return !(tn-(lastK22[k]||-99)<s||tn-lastBig22<3)}
  const mark22=k=>{const tn=now();lastK22[k]=tn;lastBig22=tn};
  // thunder after a flash: delayed by distance (sound ~343 m/s); further away = quieter, lower, longer
  function thunder(d,force){if(!ac||mode===0||!force&&(ac.state!=='running'||!inPlay))return;const t=now()+Math.min(9,d/.343)*(.92+Math.random()*.16),k=1/(1+d*.75);
    if(d<.8){noise(t,.14,.6*k,'highpass',2200,.7,G.amb);noise(t+.02,.35,.3*k,'bandpass',900,.8,G.amb)}
    const len=1.6+d*1.1,lp=Math.max(110,520/(1+d*.9));noise(t+.04,len,.7*k,'lowpass',lp,.8,G.amb,{brown:1,a:.06+d*.1});
    for(let i=1;i<=2+(d>1.5?1:0);i++)noise(t+.3*i+Math.random()*.4,len*.7,.45*k,'lowpass',lp*.8,.8,G.amb,{brown:1,a:.2})}
  function setVol(v){vol22=clamp(v,0,100)/100;store.set('sit.vol',Math.round(vol22*100));if(M)M.gain.setTargetAtTime(.85*vol22,now(),.1)}
  // ---------- what you are doing, as sound ----------""")
rep("setBed('wind',cold?0:(P.dunes||o.egy||o.city?.32:.22)+(wx.wind?.18:0));","setBed('wind',cold?0:((P.dunes||o.egy||o.city?.32:.22)+(wx.wind?.18:0))*(.5+.9*ATM.gust));")
rep("setBed('rain',wx.rain&&!cold?.38:0);","setBed('rain',wx.rain&&!cold?(o.dis==='storm'||o.yt==='wet'?.5:.34):0);")
rep("setBed('gale',cold?.42:0);","setBed('gale',cold?.3+.3*ATM.gust:0);")
rep("  return{unlock,setMode,get mode(){return mode},","  return{unlock,setMode,thunder,setVol,get vol(){return Math.round(vol22*100)},get mode(){return mode},")
rep("_t:{music:k=>music(k),","_t:{thunder:d=>thunder(d,1),music:k=>music(k),")

# --- DOM
rep('    <canvas class="scene" id="scene" width="192" height="108"></canvas>\n    <div class="whoRow">',
    '    <div class="stage" id="stage"><canvas class="scene" id="scene" width="192" height="108"></canvas><div class="tcard" id="tcard" aria-live="polite"></div></div>\n    <div class="yearbar"><i id="yearProg"></i></div>\n    <aside class="side">\n    <div class="whoRow">')
rep('    <div class="tools" id="tools"></div>\n    <div class="yearbar"><i id="yearProg"></i></div>\n    <ul class="log" id="log"></ul>\n  </section>',
    '    <div class="tools" id="tools"></div>\n    <ul class="log" id="log"></ul>\n    </aside>\n  </section>')
rep('<div class="modal" id="modal" hidden role="dialog" aria-modal="true">\n  <div class="sheet">\n    <p class="eyebrow" id="mEye"></p>',
    '<div class="modal" id="modal" hidden role="dialog" aria-modal="true">\n  <div class="sheet">\n    <canvas class="mscene" id="mScene" width="192" height="68" aria-hidden="true"></canvas>\n    <p class="eyebrow" id="mEye"></p>')
rep('    <div class="opts" id="mOpts"></div>\n  </div>\n</div>','    <div class="opts" id="mOpts"></div>\n    <p class="khint" data-i18n="keyHint"></p>\n  </div>\n</div>')
rep('          <button data-v="0" data-i18n="sndOff"></button>\n        </div>\n      </div>',
    '          <button data-v="0" data-i18n="sndOff"></button>\n        </div>\n        <label class="vol"><span data-i18n="vol"></span><input type="range" id="volR" min="0" max="100" step="5"></label>\n      </div>')
rep('      <button id="sndBtn" aria-pressed="true"></button>','      <button id="sndBtn" aria-pressed="true"></button>\n      <input type="range" class="dvol" id="volD" min="0" max="100" step="5">')
rep("      b.onclick=()=>{$('#modal').hidden=true;res({i,v:mi.value.trim()})};box.appendChild(b)});\n    $('#modal').hidden=false;",
    "      b.onclick=()=>{$('#modal').hidden=true;document.body.classList.remove('cine');res({i,v:mi.value.trim()})};box.appendChild(b)});\n    $('#modal').hidden=false;document.body.classList.add('cine');modalScene22();")
rep("if(!$('#modal').hidden){$('#modal').hidden=true;res({i:pick(okI.length?okI:[0]),v:''})}","if(!$('#modal').hidden){$('#modal').hidden=true;document.body.classList.remove('cine');res({i:pick(okI.length?okI:[0]),v:''})}")
rep("$('#pauseBtn').onclick=()=>{paused=!paused;updatePause()};",
"""$('#pauseBtn').onclick=()=>{paused=!paused;updatePause()};
['#volR','#volD'].forEach(id=>{const el=$(id);if(!el)return;el.value=SND.vol;el.setAttribute('aria-label',t('vol'));el.oninput=()=>{SND.unlock();SND.setVol(+el.value);['#volR','#volD'].forEach(j=>{if(j!==id&&$(j))$(j).value=el.value})}});
document.addEventListener('keydown',e=>{if(e.target&&/^(TEXTAREA|INPUT)$/.test(e.target.tagName)||e.metaKey||e.ctrlKey||e.altKey)return;
  if(!$('#modal').hidden){const n=+e.key;if(n>=1&&n<=9){const bs=[...document.querySelectorAll('#mOpts button:not([disabled])')];if(bs[n-1]){e.preventDefault();bs[n-1].click()}}return}
  if(screen!=='play'||!$('#famSheet').hidden)return;
  if(e.key===' '){e.preventDefault();$('#pauseBtn').click()}else if(e.key==='n'||e.key==='N')$('#skipBtn').click();
  else{const n=+e.key;if(n>=1&&n<=9){const fb=[...document.querySelectorAll('#focus button:not([disabled])')];if(fb[n-1])fb[n-1].click()}}});""")
rep("sndAll:'ดนตรีและเสียง',","vol:'ระดับเสียง',keyHint:'กดตัวเลข 1–9 เพื่อเลือก',sndAll:'ดนตรีและเสียง',")
rep("sndAll:'Music and sound',","vol:'Volume',keyHint:'Press 1–9 to choose',sndAll:'Music and sound',")
rep("@media (prefers-reduced-motion:reduce)","/*V22CSS*/\n@media (prefers-reduced-motion:reduce)")
s=s.replace('/*V22CSS*/',blk('v22.css')+blk('v22b.css'))
exec(open(B+'patch_v22c.py',encoding='utf-8').read())
# death: the stage drains of colour and light before the last page
rep("  if(TEST)return;SND.sfx('death');\n  await sleep(900);","  if(TEST)return;SND.sfx('death');document.body.classList.add('dying');\n  await sleep(1600);document.body.classList.remove('dying');")
