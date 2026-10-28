/* ===================== plague JRPG · ui: one fixed game screen, blue windows, the dialogue box, settings, keys (v0.48, reworked v0.49 · Thai only) ===================== */
/* save: its own key "sit.jrpg"; never touches sit.book or plg.* */
const JR48K='sit.jrpg';
const jrLoad48=()=>{const d=store.get(JR48K,null)||{};d.v=1;d.seen=d.seen||{};d.journal=d.journal||[];d.flags=d.flags||{};d.opt=Object.assign({fs:1,hc:0,snd:1},d.opt||{});d.lead=d.lead||'bene';d.scene=d.scene||'prologue';return d};
const jrSave48=d=>{try{if(!TEST)store.set(JR48K,d)}catch(e){}};
/* v0.49: the whole game sits in one 16:9 screen that is scaled to fit the window, like a console.
   On a tall phone the picture sits on top and the windows sit under it; nothing ever scrolls. */
function jrCss48(){if(document.getElementById('jr48css'))return;const st=document.createElement('style');st.id='jr48css';st.textContent=
 'html:has(#jr48),body:has(#jr48){overflow:hidden!important}#jr48{position:fixed;inset:0;z-index:94;background:#000;color:#fff;overflow:hidden;font-family:Anuphan,"Noto Sans Thai",sans-serif;font-size:var(--fs,16px);-webkit-user-select:none;user-select:none;touch-action:manipulation}'+
 '#jr48 .fr{position:absolute;overflow:hidden;background:#000}#jr48 .fr canvas.cv{position:absolute;image-rendering:pixelated;image-rendering:crisp-edges;display:block}'+
 '#jr48 .low{position:absolute;left:0;right:0;bottom:0;display:none;flex-direction:column;gap:8px;padding:8px;box-sizing:border-box;background:#05060e}#jr48.port .low{display:flex}'+
 /* the window: deep blue, white bevel, as on 16-bit consoles */
 '#jr48 .win{background:linear-gradient(180deg,var(--wa,#3a4cb0) 0%,var(--wb,#141c6a) 100%);border:2px solid #f0f0f8;border-radius:7px;box-shadow:0 0 0 2px #10102a,inset 0 0 0 1px #6878d8,inset 0 2px 0 1px #8898f0;color:#fff;text-shadow:1px 1px 0 #000a;box-sizing:border-box}'+
 '#jr48.hc .win{--wa:#000;--wb:#000;box-shadow:0 0 0 2px #000,inset 0 0 0 1px #fff}'+
 '#jr48 button.win{font:inherit;cursor:pointer;padding:.25em .7em;min-height:40px}#jr48 button.win:hover,#jr48 button.win.sel{--wa:#4c60d0;--wb:#1c2690}#jr48 button.win:disabled{opacity:.55;cursor:default}#jr48 button.win.warn{--wa:#8a3040;--wb:#3a1020}'+
 '#jr48 .hand::before{content:"▶ "}'+
 '#jr48 .top{position:absolute;top:1.4%;right:1.2%;display:flex;gap:6px;z-index:5}#jr48 .top button{font-size:.8em;min-height:36px;padding:.15em .6em}'+
 '#jr48 .goal{position:absolute;top:1.4%;left:1.2%;max-width:58%;font-size:.78em;line-height:1.45;padding:.35em .7em;z-index:4}#jr48 .goal b{color:#ffe890}#jr48 .goal:empty{display:none}'+
 '#jr48 .banner{position:absolute;left:50%;top:22%;transform:translateX(-50%);padding:.5em 1.4em;font-size:1.05em;z-index:4;white-space:nowrap;transition:opacity .8s}'+
 '#jr48 .bar{position:absolute;left:1.2%;right:1.2%;bottom:2%;display:grid;grid-template-columns:auto auto 1fr auto;gap:8px;z-index:3;align-items:end}#jr48 .bar button{min-height:44px;font-size:.9em}#jr48 .bar .act{justify-self:center;min-width:40%;--wa:#4a3a90;--wb:#1a1450}#jr48 .bar .act:disabled{opacity:.5}#jr48 .bar .act kbd,#jr48 .bar button kbd{font:inherit;font-size:.75em;color:#ffe890;margin-left:.4em}'+
 '#jr48.port .bar{position:static;grid-template-columns:1fr 1fr 1fr;margin-top:auto}#jr48.port .bar .act{grid-column:1/4;grid-row:1;min-width:0;justify-self:stretch;min-height:52px}#jr48.port .bar button{min-height:52px}#jr48.port .goal{position:static;max-width:none;font-size:.9em}#jr48.port .top{top:6px;right:6px}#jr48 kbd{display:var(--kbd,inline)}#jr48.port kbd{display:none}'+
 '#jr48 .dlg{position:absolute;left:1.2%;right:1.2%;bottom:2%;z-index:6;display:none}#jr48.land .dlg{top:12%;bottom:auto}#jr48.land .fr:has(.dlg.on) .goal{visibility:hidden}#jr48 .dlg.on{display:block}#jr48.port .dlg{position:static;order:2}#jr48.port .goal{order:1}#jr48.port .bar{order:3}'+
 '#jr48 .dlg .box{display:flex;gap:.8em;padding:.7em .9em;min-height:5.6em;cursor:pointer;position:relative;align-items:flex-start}#jr48 .dlg canvas{width:5.2em;height:auto;aspect-ratio:34/33;image-rendering:pixelated;flex:0 0 auto}'+
 '#jr48 .dlg .nm{color:#ffe890;margin-bottom:.15em;font-size:.92em}#jr48 .dlg .tx{line-height:1.6;white-space:pre-wrap;min-height:3.2em}#jr48 .dlg .more{position:absolute;right:.8em;bottom:.4em;animation:jrb .8s infinite}@keyframes jrb{50%{opacity:.15}}'+
 '#jr48 .dlg .chs{display:flex;flex-direction:column;gap:4px;margin-top:.4em}#jr48 .dlg .chs button{text-align:left;font:inherit;font-size:.95em;background:transparent;border:0;color:#fff;padding:.25em .3em;min-height:40px;cursor:pointer;text-shadow:1px 1px 0 #000a}#jr48 .dlg .chs button.sel{color:#ffe890}#jr48 .dlg .chs button.sel::before{content:"▶ "}'+
 '#jr48 .pane{position:absolute;inset:0;z-index:8;display:flex;gap:1.5%;padding:2%;box-sizing:border-box;background:#05060ecc}'+
 '#jr48 .toast{position:absolute;top:14%;left:50%;transform:translateX(-50%);padding:.35em .9em;z-index:9;font-size:.85em;white-space:nowrap;transition:opacity .5s}';document.head.appendChild(st)}
/* a soft beep per few letters, pitched by voice; quiet and optional */
const JRBEEP48=(()=>{let ac=null;return (voice)=>{try{const d=jrLoad48();if(!d.opt.snd||+store.get('sit.snd',2)===0)return;const C=window.AudioContext||window.webkitAudioContext;if(!C)return;ac=ac||new C();const o=ac.createOscillator(),g=ac.createGain();o.type='square';o.frequency.value=(voice==='low'?190:voice==='high'?520:330)*(1+Math.random()*.08);g.gain.setValueAtTime(.025,ac.currentTime);g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+.05);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.06)}catch(e){}}})();
function jrToast48(t){const R=document.querySelector('#jr48 .fr');if(!R)return;const el=document.createElement('div');el.className='toast win';el.textContent=t;R.appendChild(el);setTimeout(()=>{el.style.opacity='0'},1800);setTimeout(()=>el.remove(),2400)}
function jrBanner48(t){const R=document.querySelector('#jr48 .fr');if(!R)return;const el=document.createElement('div');el.className='banner win';el.textContent=t;R.appendChild(el);setTimeout(()=>{el.style.opacity='0'},2600);setTimeout(()=>el.remove(),3500)}
/* fit the screen to the window: wide windows letterbox a 16:9 picture; tall phones put the picture on top and the windows below */
function jrLayout48(el){if(!el||!el.isConnected)return false;const vw=el.clientWidth||innerWidth,vh=el.clientHeight||innerHeight,D=jrLoad48(),port=vh>vw*1.15;el.classList.toggle('port',port);el.classList.toggle('land',!port);
  const fr=el.querySelector('.fr'),cv=el.querySelector('.fr canvas.cv'),low=el.querySelector('.low');let fw,fh,cw,ch,cl;
  if(el.dataset.mode==='k'){/* Kaffa: a 4:3 screen, the town on top and the windows below it */
    const side=!port&&vh<520&&vw>vh*1.45;el.classList.toggle('side',side);
    if(side){fw=vw*.58;ch=fw*9/16;fr.style.cssText='left:0;top:0;width:'+fw+'px;height:'+vh+'px';cv.style.cssText='left:0;top:0;width:'+fw+'px;height:'+ch+'px';low.style.cssText='left:'+fw+'px;top:0;width:'+(vw-fw)+'px;height:'+vh+'px;right:auto;bottom:auto';el.style.setProperty('--fs',Math.max(11,Math.min(15,vh*.032))*D.opt.fs+'px')}
    else if(!port){fw=Math.min(vw,vh*4/3);fh=fw*.75;const L=(vw-fw)/2,T=(vh-fh)/2;cw=fw;ch=fw*9/16;const vis=fw*.5;fr.style.cssText='left:'+L+'px;top:'+T+'px;width:'+fw+'px;height:'+vis+'px';low.style.cssText='left:'+L+'px;top:'+(T+vis)+'px;width:'+fw+'px;height:'+(fh-vis)+'px;right:auto;bottom:auto';cv.style.cssText='left:0;top:'+(vis-ch)+'px;width:'+cw+'px;height:'+ch+'px';el.style.setProperty('--fs',Math.max(12,Math.min(19,fh*.027))*D.opt.fs+'px')}
    else{fw=vw;fh=Math.min(vw*.82,vh*.4);fr.style.cssText='left:0;top:0;width:'+fw+'px;height:'+fh+'px';ch=fh;cw=fh*16/9;if(cw<fw){cw=fw;ch=fw*9/16}cl=(fw-cw)/2;low.style.cssText='top:'+fh+'px';cv.style.cssText='left:'+cl+'px;top:'+((fh-ch)/2)+'px;width:'+cw+'px;height:'+ch+'px';el.style.setProperty('--fs',Math.max(13,Math.min(16,vw*.037))*D.opt.fs+'px')}
    el.style.setProperty('--kbd',matchMedia('(pointer:coarse)').matches?'none':'inline');return true}
  if(!port){fw=Math.min(vw,vh*16/9);fh=fw*9/16;fr.style.cssText='left:'+((vw-fw)/2)+'px;top:'+((vh-fh)/2)+'px;width:'+fw+'px;height:'+fh+'px';cw=fw;ch=fh;cl=0;el.style.setProperty('--fs',Math.max(13,Math.min(24,fh*.04))*D.opt.fs+'px');
    ['goal','bar','dlg'].forEach(c=>{const n=el.querySelector('.'+c);if(n&&n.parentNode!==fr)fr.appendChild(n)})}
  else{fw=vw;fh=Math.max(vw*.56,Math.min(vw,vh-330));fr.style.cssText='left:0;top:0;width:'+fw+'px;height:'+fh+'px';ch=fh;cw=fh*16/9;if(cw<fw){cw=fw;ch=fw*9/16}cl=(fw-cw)/2;low.style.top=fh+'px';el.style.setProperty('--fs',Math.max(14,Math.min(18,vw*.042))*D.opt.fs+'px');
    ['goal','bar','dlg'].forEach(c=>{const n=el.querySelector('.'+c);if(n&&n.parentNode!==low)low.appendChild(n)})}
  if(cv)cv.style.cssText='left:'+cl+'px;top:'+((fh-ch)/2)+'px;width:'+cw+'px;height:'+ch+'px';el.style.setProperty('--kbd',matchMedia('(pointer:coarse)').matches?'none':'inline');return true}
/* the shell: picture, goal window, control bar, dialogue box; team / settings / exit (asks twice) in the corner */
function jrShell48(title,onExit){jrCss48();let el=document.getElementById('jr48');if(el)el.remove();el=document.createElement('div');el.id='jr48';document.body.appendChild(el);const D=jrLoad48();el.classList.toggle('hc',!!D.opt.hc);
  const fr=document.createElement('div');fr.className='fr';el.appendChild(fr);const low=document.createElement('div');low.className='low';el.appendChild(low);
  const cv=document.createElement('canvas');cv.className='cv';cv.width=320;cv.height=180;fr.appendChild(cv);
  const top=document.createElement('div');top.className='top';fr.appendChild(top);
  const mk=(t,f,c)=>{const b=document.createElement('button');b.className='win'+(c?' '+c:'');b.textContent=t;b.onclick=f;top.appendChild(b);return b};
  mk('👥 ทีม',()=>jrTeam48());mk('⚙',()=>jrSettings48());const ex=mk('✕ ออก',()=>{if(ex.dataset.k){el.remove();onExit&&onExit()}else{ex.dataset.k=1;ex.textContent='แตะอีกครั้งเพื่อออก';setTimeout(()=>{if(ex.isConnected){delete ex.dataset.k;ex.textContent='✕ ออก'}},3000)}},'warn');
  const goal=document.createElement('div');goal.className='goal win';fr.appendChild(goal);
  const bar=document.createElement('div');bar.className='bar';fr.appendChild(bar);
  const dlg=document.createElement('div');dlg.className='dlg';fr.appendChild(dlg);
  const fit=()=>{if(!jrLayout48(el))removeEventListener('resize',fit)};addEventListener('resize',fit);fit();if(title)setTimeout(()=>jrBanner48(title),60);
  return {el,cv,goal,bar,dlg,fr,low,fit}}
/* a menu page inside the screen (team, settings); Esc or the button closes it */
function jrPane48(){const R=document.querySelector('#jr48 .fr');if(!R)return null;const old=document.querySelector('#jr48 .pane');if(old)old.remove();const p=document.createElement('div');p.className='pane';
  const host=document.getElementById('jr48').classList.contains('port')?document.getElementById('jr48'):R;if(host.id==='jr48'){p.style.cssText='position:fixed;inset:0;flex-direction:column;padding:10px;gap:8px;background:#05060e'}host.appendChild(p);return p}
function jrSettings48(){const el=document.getElementById('jr48');if(!el)return;const D=jrLoad48();const p=jrPane48();if(!p)return;const w=document.createElement('div');w.className='win';w.style.cssText='flex:1;padding:.8em 1.1em;display:flex;flex-direction:column;gap:.4em;overflow:hidden';p.appendChild(w);
  w.innerHTML='<div style="color:#ffe890;font-size:1.05em">ตั้งค่า</div>';
  const row=(lab,opts,cur,set)=>{const d=document.createElement('div');d.style.cssText='display:flex;flex-wrap:wrap;align-items:center;gap:6px';d.innerHTML='<span style="min-width:9em">'+lab+'</span>';opts.forEach(([v,t])=>{const b=document.createElement('button');b.className='win'+(v===cur?' sel':'');b.textContent=(v===cur?'● ':'○ ')+t;b.style.fontSize='.9em';b.onclick=()=>{set(v);jrSave48(D);el.classList.toggle('hc',!!D.opt.hc);jrLayout48(el);jrSettings48()};d.appendChild(b)});w.appendChild(d)};
  row('ขนาดตัวอักษร',[[1,'ปกติ'],[1.2,'ใหญ่'],[1.4,'ใหญ่มาก']],D.opt.fs,v=>D.opt.fs=v);row('คอนทราสต์',[[0,'ปกติ'],[1,'สูง']],D.opt.hc,v=>D.opt.hc=v);row('เสียงบี๊บตอนพิมพ์',[[1,'เปิด'],[0,'ปิด']],D.opt.snd,v=>D.opt.snd=v);
  const k=document.createElement('div');k.style.cssText='font-size:.8em;line-height:1.6;color:#d8dcff;margin-top:auto';k.textContent='แป้นพิมพ์: ← → เดิน · เว้นวรรค/Enter คุยและไปต่อ · ↑ ↓ เลือก · Q หรือ Tab สลับตัวละคร · Esc ปิดหน้านี้';w.appendChild(k);
  const c=document.createElement('button');c.className='win hand';c.textContent='ปิด';c.style.alignSelf='flex-start';c.onclick=()=>p.remove();w.appendChild(c)}
/* the dialogue box: letters one by one, a tap finishes the line, the next tap goes on; choices by tap or arrows */
function jrSay48(UI,lines){return new Promise(res=>{const D=UI.dlg;let i=0,typing=null,full='',sel=0;D.classList.add('on');UI.bar.style.visibility='hidden';
  const close=v=>{D.classList.remove('on');D.innerHTML='';UI.bar.style.visibility='';document.removeEventListener('keydown',key,true);res(v)};
  const show=()=>{const L=lines[i];if(!L)return close(null);D.innerHTML='';const box=document.createElement('div');box.className='box win';D.appendChild(box);
    const M=L.who&&PARTY48.byK[L.who];if(L.who){const look=M?M.look:(NPC48[L.who]||{}).look||{};const pc=typeof face49==='function'?face49(L.who,look,L.face||'n'):portrait48(look,L.face||'n');const im=document.createElement('canvas');im.width=pc.width;im.height=pc.height;im.getContext('2d').drawImage(pc,0,0);box.appendChild(im)}
    const r=document.createElement('div');r.style.flex='1';box.appendChild(r);const nm=document.createElement('div');nm.className='nm';nm.textContent=L.who?(M?M.short:(NPC48[L.who]||{}).n||''):(L.title||'');if(nm.textContent)r.appendChild(nm);
    const tx=document.createElement('div');tx.className='tx';r.appendChild(tx);full=L.t||'';let n=0;const voice=M?M.voice:(NPC48[L.who]||{}).voice||'mid';
    if(L.ch){tx.textContent=full;const cs=document.createElement('div');cs.className='chs';r.appendChild(cs);sel=0;L.ch.forEach((c,j)=>{const b=document.createElement('button');b.textContent=c.t;b.onclick=e=>{e.stopPropagation();close(c.v!=null?c.v:j)};b.onmouseenter=()=>{sel=j;mark()};cs.appendChild(b)});const mark=()=>cs.querySelectorAll('button').forEach((b,j)=>b.classList.toggle('sel',j===sel));mark();D._mark=mark;D._cs=cs;return}
    D._cs=null;typing=setInterval(()=>{n+=1;tx.textContent=full.slice(0,n);if(n%3===0)JRBEEP48(voice);if(n>=full.length){clearInterval(typing);typing=null;const m=document.createElement('div');m.className='more';m.textContent='▼';box.appendChild(m)}},22);
    box.onclick=adv};
  const adv=()=>{if(D._cs)return;if(typing){clearInterval(typing);typing=null;D.querySelector('.tx').textContent=full;const m=document.createElement('div');m.className='more';m.textContent='▼';D.querySelector('.box').appendChild(m);return}i++;show()};
  const key=e=>{if(!D.isConnected){document.removeEventListener('keydown',key,true);return}if(document.querySelector('#jr48 .pane'))return;if(D._cs){const bs=D._cs.querySelectorAll('button');if(e.key==='ArrowDown'||e.key==='ArrowRight'){sel=(sel+1)%bs.length;D._mark();e.preventDefault()}else if(e.key==='ArrowUp'||e.key==='ArrowLeft'){sel=(sel+bs.length-1)%bs.length;D._mark();e.preventDefault()}else if(e.key==='Enter'||e.key===' '){bs[sel].click();e.preventDefault()}e.stopPropagation();return}
    if([' ','Enter','ArrowRight','ArrowDown'].includes(e.key)){adv();e.preventDefault();e.stopPropagation()}};
  document.addEventListener('keydown',key,true);show()})}
