/* ===================== The Last Harvest · the screen, controls, the carpenter's notebook and the door in (v0.51, Thai only) ===================== */
const HVK='sit.harvest';
const hvLoad=()=>{let d=null;try{d=store.get(HVK,null)}catch(e){}d=d||{};d.v=1;d.opt=Object.assign({low:0},d.opt||{});return d};
const hvSave=d=>{try{if(!TEST)store.set(HVK,d)}catch(e){}};
function hvCss(){if(document.getElementById('hvcss'))return;const st=document.createElement('style');st.id='hvcss';st.textContent=
 'html:has(#hv),body:has(#hv){overflow:hidden!important}#hv{position:fixed;inset:0;z-index:95;background:#120c08;color:#3b2418;font-family:Pridi,"Noto Serif Thai",serif;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none;font-size:var(--hfs,16px)}'+
 '#hv .fr{position:absolute;left:0;top:0;right:0;overflow:hidden}#hv canvas.cv{position:absolute;inset:0;width:100%;height:100%;display:block;cursor:pointer}'+
 '#hv .pp{background:#f4e6c8;border:2.5px solid #3b2418;border-radius:12px;box-shadow:0 3px 0 #3b241866,inset 0 0 0 3px #f9efd9,inset 0 0 18px #c9a46a55;color:#3b2418}'+
 '#hv button.pp{font:inherit;cursor:pointer;padding:.25em .8em;min-height:44px}#hv button.pp:active{transform:translateY(2px);box-shadow:0 1px 0 #3b241866}#hv button.pp.on{background:#e8c98a}#hv button.pp:disabled{opacity:.5;cursor:default}'+
 '#hv .top{position:absolute;top:10px;right:10px;display:flex;gap:8px;z-index:5}#hv .top button{font-size:.85em;min-height:40px}'+
 '#hv .cap{position:absolute;top:10px;left:10px;max-width:min(58%,30em);padding:.45em .9em;font-size:.88em;line-height:1.55;z-index:4;transition:opacity .8s;pointer-events:none}#hv .cap b{color:#8a3a1e}#hv .cap:empty{display:none}'+
 /* the bottom: a strip of dark wood with the carpenter's notebook on it */
 '#hv .pad{position:absolute;left:0;right:0;bottom:0;display:flex;gap:8px;padding:8px;z-index:4;align-items:stretch;background:linear-gradient(#3a2616,#24170e);border-top:3px solid #3b2418;box-sizing:border-box}#hv .pad>button{min-width:58px;font-size:1.05em}#hv .pad .ctl{display:flex;gap:8px;align-items:stretch}'+
 '#hv .nb{flex:1;min-width:0;display:grid;grid-template-columns:minmax(8.5em,1.1fr) minmax(0,1.4fr) minmax(9em,1.3fr);gap:8px;padding:.3em .6em .3em 1.6em;position:relative;background:repeating-linear-gradient(#f4e6c8 0 1.35em,#d9c39a 1.35em calc(1.35em + 1px));font-size:.82em;line-height:1.35}'+
 '#hv .nb::before{content:"";position:absolute;left:.45em;top:.4em;bottom:.4em;width:.5em;background:radial-gradient(circle,#3b2418 0 35%,transparent 40%) 0 0/.5em 1.1em repeat-y}'+
 '#hv .nb .st .r{display:grid;grid-template-columns:3.4em 1fr;align-items:center;gap:.3em}#hv .nb .st i{display:block;height:.55em;border:1.5px solid #3b2418;border-radius:3px;background:#efe0bf;overflow:hidden}#hv .nb .st i b{display:block;height:100%}#hv .nb .dg{font-size:.92em;color:#5a3a20}'+
 '#hv .nb .bag{display:grid;grid-template-columns:repeat(6,1fr);gap:4px;align-content:center;align-items:center}#hv .nb .bag button{position:relative;min-height:0;aspect-ratio:1;max-height:100%;padding:0;border-radius:8px;background:#efdcb4;border:2px solid #3b2418;cursor:pointer}#hv .nb .bag button canvas{width:78%;height:auto;aspect-ratio:1;display:block;margin:auto}#hv .nb .bag button span{position:absolute;right:3px;bottom:0;font-size:.85em;font-weight:bold}#hv .nb .bag button.emp{border-style:dashed;opacity:.5;cursor:default}'+
 '#hv .nb .ac{display:flex;flex-direction:column;gap:4px;justify-content:center;min-width:0}#hv .nb .ac button{min-height:36px;font-size:.95em;padding:.15em .5em;line-height:1.25;text-align:left}#hv .nb .ac .tip{font-size:.88em;color:#5a3a20;line-height:1.3}#hv .nb .ac .row{display:flex;gap:4px}#hv .nb .ac .row button{flex:1}'+
 '#hv.port .pad{flex-direction:column}#hv.port .nb{grid-template-columns:1fr;grid-template-rows:auto auto 1fr;flex:1;min-height:0;overflow:hidden;gap:4px}#hv.port .nb .st{display:grid;grid-template-columns:1fr 1fr;gap:0 .8em}#hv.port .nb .bag{grid-template-columns:repeat(6,1fr)!important}#hv.port .nb .bag button{aspect-ratio:1.15}#hv.port .pad .ctl{flex:0 0 auto}#hv.port .pad .ctl button{flex:0 0 auto;min-width:64px;min-height:52px}#hv.port .pad .ctl .sp{flex:1}'+
 '#hv .lab{position:absolute;right:10px;top:60px;z-index:6;padding:.6em .9em;width:min(19em,80vw);font-size:.86em;line-height:1.5;display:none;max-height:70vh;overflow:auto}#hv .lab.on{display:block}#hv .lab input{width:100%}#hv .lab .row{display:flex;flex-wrap:wrap;gap:4px;margin:.2em 0 .5em}#hv .lab .row button{min-height:34px;font-size:.9em;padding:.1em .55em}'+
 '#hv .warnc{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:9;background:#120c08ee;padding:16px}#hv .warnc .pp{max-width:30em;padding:1.2em 1.4em;line-height:1.75}#hv .warnc h2{margin:0 0 .3em;font-size:1.3em;color:#8a3a1e}';document.head.appendChild(st)}
/* fit: the picture above, the notebook below; nothing is left empty or black */
function hvLayout(el){const vw=el.clientWidth,vh=el.clientHeight,port=vh>vw*1.1;el.classList.toggle('port',port);const fr=el.querySelector('.fr'),pad=el.querySelector('.pad'),cap=el.querySelector('.cap');
  el.style.setProperty('--hfs',(port?Math.max(13.5,Math.min(16,vw*.04)):Math.max(13,Math.min(19,vh*.024)))+'px');
  if(port){const ph=Math.max(250,Math.min(vh*.38,310));fr.style.height=(vh-ph)+'px';pad.style.height=ph+'px';cap.style.top='58px';cap.style.left='8px';cap.style.right='8px';cap.style.maxWidth='none'}
  else{const ph=Math.max(104,Math.min(vh*.2,150));fr.style.height=(vh-ph)+'px';pad.style.height=ph+'px';cap.style.top='10px';cap.style.left='10px';cap.style.right='auto';cap.style.maxWidth=''}}
function hvStart(){try{PLM47.stop()}catch(e){}hvCss();let el=document.getElementById('hv');if(el)el.remove();el=document.createElement('div');el.id='hv';document.body.appendChild(el);const D=hvLoad();
  el.innerHTML='<div class="fr"><canvas class="cv"></canvas></div><div class="cap pp"></div><div class="top"><button class="pp" data-a="lab">🎨 ทดลองภาพ</button><button class="pp" data-a="exit">✕ ออก</button></div><div class="lab pp"></div><div class="pad"></div>';
  const cv=el.querySelector('canvas.cv'),cap=el.querySelector('.cap'),pad=el.querySelector('.pad'),lab=el.querySelector('.lab');
  const scene=hvStreet();const S={scene,cam:null,plague:.25,tod:1,lights:scene.lights.concat([]),p:{x:220,dir:1,moving:false,walk:0,idle:0},dog:{x:160,dir:1,walk:0},rats:[],bigRat:null,iris:0,mood:null,sick:0,lowfx:D.opt.low};hvPlayInit(S);
  const alive=()=>el.isConnected;
  /* exit asks twice */const ex=el.querySelector('[data-a=exit]');ex.onclick=()=>{if(ex.dataset.k){el.remove();try{plIntro46()}catch(e){}}else{ex.dataset.k=1;ex.textContent='แตะอีกครั้งเพื่อออก';setTimeout(()=>{if(ex.isConnected){delete ex.dataset.k;ex.textContent='✕ ออก'}},3000)}};
  el.querySelector('[data-a=lab]').onclick=()=>{lab.classList.toggle('on');drawLab()};
  function drawLab(){lab.innerHTML='<b>ทดลองภาพ</b> <span style="font-size:.85em">(สำหรับตรวจงานขั้นนี้)</span>'+
    '<div>โรคระบาด (plagueLevel) <b>'+S.plague.toFixed(2)+'</b></div><input type="range" min="0" max="1" step="0.05" value="'+S.plague+'" data-a="pl">'+
    '<div>เวลา</div><div class="row">'+HVTOD.map((T,i)=>'<button class="pp'+(S.tod===i?' on':'')+'" data-t="'+i+'">'+T.n+'</button>').join('')+'</div>'+
    '<div>อารมณ์ของปีเตอร์ (ไม่มีปาก)</div><div class="row">'+[[null,'ตามเรื่อง'],['n','เฉยๆ'],['h','ดีใจ'],['w','กังวล'],['s','เศร้า']].map(([m,n])=>'<button class="pp'+(S.mood===m?' on':'')+'" data-m="'+m+'">'+n+'</button>').join('')+'</div>'+
    '<div>อาการป่วย (สีผิวและรอบตา) <b>'+S.sick.toFixed(2)+'</b></div><input type="range" min="0" max="1" step="0.1" value="'+S.sick+'" data-a="sk">'+
    '<div style="font-size:.85em;margin:.3em 0">ค่าที่ผู้เล่นไม่เห็น · ความเสี่ยงติดเชื้อ (exposure) <b>'+S.exp.toFixed(1)+'</b></div>'+
    '<div class="row"><button class="pp'+(S.lowfx?' on':'')+'" data-a="low">โหมดเครื่องช้า (ไม่เบลอ)</button><button class="pp" data-a="reset">เริ่มถนนใหม่</button></div>';
    lab.querySelector('[data-a=pl]').oninput=e=>{S.plague=+e.target.value};lab.querySelector('[data-a=pl]').onchange=drawLab;lab.querySelector('[data-a=sk]').oninput=e=>{S.sick=+e.target.value};lab.querySelector('[data-a=sk]').onchange=drawLab;
    lab.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{S.tod=+b.dataset.t;drawLab()});lab.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{S.mood=b.dataset.m==='null'?null:b.dataset.m;drawLab()});lab.querySelector('[data-a=low]').onclick=()=>{S.lowfx=D.opt.low=S.lowfx?0:1;hvSave(D);drawLab()};lab.querySelector('[data-a=reset]').onclick=()=>{hvStart()}}
  /* captions: words that come and go at the top of the page */
  let capT=null;const say=(h,ms)=>{cap.style.opacity=1;cap.innerHTML=h;clearTimeout(capT);capT=setTimeout(()=>{if(alive())cap.style.opacity=0},ms||5200)};
  const api={say:t=>say(esc(t)),mood:()=>{},running:()=>run,home:()=>endDay()};
  /* the carpenter's notebook: how Peter is, what he carries, what he can do here */
  const mkB=(t,cls,parent)=>{const b=document.createElement('button');b.className='pp'+(cls?' '+cls:'');b.textContent=t;(parent||pad).appendChild(b);return b};
  const ctl=document.createElement('div');ctl.className='ctl';const bl=mkB('◀','',ctl),br=mkB('▶','',ctl);const nb=document.createElement('div');nb.className='nb pp';const sp0=document.createElement('div');sp0.className='sp';const brun=mkB('🏃 วิ่ง','',ctl);
  nb.innerHTML='<div class="st"></div><div class="bag"></div><div class="ac"></div>';const stE=nb.querySelector('.st'),bagE=nb.querySelector('.bag'),acE=nb.querySelector('.ac');
  const place=()=>{const port=el.classList.contains('port');pad.innerHTML='';if(port){pad.appendChild(nb);ctl.innerHTML='';ctl.append(bl,br,sp0,brun);pad.appendChild(ctl)}else{ctl.innerHTML='';ctl.append(bl,br);pad.append(ctl,nb,brun)}};
  const slots=[];for(let i=0;i<HVBAG;i++){const b=document.createElement('button');const c=document.createElement('canvas');c.width=c.height=64;b.appendChild(c);const n=document.createElement('span');b.appendChild(n);bagE.appendChild(b);slots.push({b,c,n,k:null});b.onclick=()=>useItem(slots[i].k)}
  let tipT='';const touch=matchMedia('(pointer:coarse)').matches;
  function useItem(k){if(!k)return;if(k==='bread'){acE.dataset.menu='bread';drawHud(true);return}if(k==='herb'){S.inv.herb--;if(!S.inv.herb)delete S.inv.herb;S.mind=Math.min(100,S.mind+6);hvFloat(S,'กลิ่นสมุนไพรทำให้ใจสงบลง');drawHud(true);return}tipT=HVITEM[k].n+' · '+HVITEM[k].tip;drawHud(true);setTimeout(()=>{tipT='';drawHud(true)},4500)}
  let lastHud='';
  function drawHud(force){const bar=(v,c)=>'<i><b style="width:'+Math.max(0,Math.min(100,v))+'%;background:'+c+'"></b></i>';const D2=S.dog;
    const dogS=D2.task?(D2.task.k==='fetch'?(D2.hide?'กำลังมุดใต้เกวียน':'กำลังไปที่เกวียน'):D2.task.k==='bark'?'เห่าไล่หนู':'นั่งรอ'):'เดินตามปีเตอร์';
    const stH='<div class="r"><span>อิ่ม</span>'+bar(S.full,'#c8903a')+'</div><div class="r"><span>เหนื่อย</span>'+bar(S.tired,'#8a7a9a')+'</div><div class="r"><span>ใจ</span>'+bar(S.mind,'#c8604a')+'</div><div class="dg">🐕 หมา: '+dogS+'</div>';
    if(stE._h!==stH){stE.innerHTML=stH;stE._h=stH}
    /* the bag and the buttons are rebuilt only when something they show has changed, so a finger on a button is never lost */
    const sp=hvNear(S),ratsNear=S.rats.some(r=>Math.abs(r.x-S.p.x)<220);const keyNow=JSON.stringify([S.inv,sp&&sp.k,sp&&(sp.done||sp.cleared||sp.state),S.busy&&S.busy.k,!!D2.task,tipT,acE.dataset.menu,ratsNear]);if(!force&&keyNow===lastHud)return;lastHud=keyNow;
    const ks=Object.keys(S.inv);slots.forEach((s,i)=>{const k=ks[i]||null;s.k=k;s.b.classList.toggle('emp',!k);s.n.textContent=k&&S.inv[k]>1?S.inv[k]:'';s.b.title=k?HVITEM[k].n:'ว่าง';s.b.setAttribute('aria-label',k?HVITEM[k].n+' '+S.inv[k]:'ช่องว่าง');const x=s.c.getContext('2d');x.setTransform(1,0,0,1,0,0);x.clearRect(0,0,64,64);if(k){x.translate(4,4);hvIcon(x,k,56)}});
    /* buttons are kept by their words and only moved, so one being pressed is never replaced under the finger; icons are drawn, not emoji, so every phone shows them */
    const keep=acE._keep||(acE._keep={});[...acE.childNodes].forEach(n=>n.remove());let row=null;
    const add=(t,f,dis,ic,inRow)=>{let b=keep[t];if(!b){b=keep[t]=document.createElement('button');if(ic){const c=document.createElement('canvas');c.width=c.height=48;c.style.cssText='width:1.35em;height:1.35em;vertical-align:-.3em;margin-right:.3em';hvUiIcon(c.getContext('2d'),ic);b.appendChild(c)}b.appendChild(document.createTextNode(t))}b.className='pp';b.disabled=!!dis;b.onclick=()=>{f();drawHud(true)};(inRow&&row?row:acE).appendChild(b);return b};
    const newRow=()=>{row=document.createElement('div');row.className='row';acE.appendChild(row)};const K=t=>t+(touch?'':'  ('+'Q'+')');
    if(acE.dataset.menu==='bread'&&S.inv.bread){newRow();add('ปีเตอร์กิน',()=>eat('peter'),false,'bread',1);add('ให้หมา',()=>eat('dog'),false,'paw',1);add('ไม่ใช้',()=>{delete acE.dataset.menu},false,null,1);return}
    delete acE.dataset.menu;
    if(sp){if(sp.kind==='search'){if(sp.done)add('ค้นแล้ว · '+sp.n,()=>{},true,'search');else add('สำรวจ · '+sp.n+(touch?'':'  (Enter)'),()=>hvAct(S,api),!!S.busy,'search')}
      else if(sp.kind==='dog')add(sp.done?'ใต้เกวียนว่างแล้ว':K('สั่งหมามุดเข้าไป'),()=>hvDogCmd(S,api,'fetch'),!!D2.task||sp.done,'paw');
      else if(sp.kind==='rats')add(sp.cleared?'ทางโล่งแล้ว':K('สั่งหมาเห่าไล่หนู'),()=>hvDogCmd(S,api,'bark'),!!D2.task||sp.cleared,'paw');
      else if(sp.kind==='home')add('กลับบ้าน · จบวันนี้'+(touch?'':'  (Enter)'),()=>api.home(),!!S.busy,'home');
      else if(sp.kind==='moral'){if(sp.state==='ask'){newRow();const busy=!!S.busy||!!S.auto;if(S.inv.bread)add('แบ่งขนมปัง',()=>hvGive(S,api,'bread'),busy,'bread',1);if(S.inv.herb)add('แบ่งสมุนไพร',()=>hvGive(S,api,'herb'),busy,'herb',1);if(!S.inv.bread&&!S.inv.herb)add('ไม่มีของจะให้',()=>{},true,'bread',1);add('เดินจากไป',()=>hvLeave(S,api,1),busy,'walk',1)}else add(sp.state==='given'?'หน้าต่างบ้านนี้มีแสงอุ่น':'ม่านบ้านนี้ปิดสนิท',()=>{},true)}
      if(ratsNear&&sp.kind!=='rats')add(K('สั่งหมาเห่าไล่หนู'),()=>hvDogCmd(S,api,'bark'),!!D2.task,'paw')}
    else if(ratsNear)add(K('สั่งหมาเห่าไล่หนู'),()=>hvDogCmd(S,api,'bark'),!!D2.task,'paw');
    if(acE.childNodes.length<2){const tip=document.createElement('div');tip.className='tip';tip.textContent=tipT||(sp?'':touch?'แตะ ◀ ▶ เพื่อก้าว กดค้างเพื่อเดิน · เดินไปหาของที่มีไอคอนลอยอยู่':'← → เดิน (แตะเพื่อก้าว) · Shift วิ่ง · Enter ใช้ · Q สั่งหมา · Esc เมนู');acE.appendChild(tip)}}
  function eat(who){if(!S.inv.bread)return;S.inv.bread--;if(!S.inv.bread)delete S.inv.bread;if(who==='peter'){S.full=Math.min(100,S.full+30);hvFloat(S,'+ อิ่ม');say('ปีเตอร์กินขนมปังแข็งๆ อย่างช้าๆ เคี้ยวนานกว่าปกติให้มันอยู่ท้องนานขึ้น')}else{S.dog.happy=3;S.mind=Math.min(100,S.mind+4);hvFloat(S,'+ ใจ',S.dog.x);say('หมากินหมดในคำเดียว แล้วเอาหัวมาถูขาปีเตอร์')}delete acE.dataset.menu}
  /* the end of the day: back home, a page that says what Peter brought and what he chose */
  function endDay(){if(el.querySelector('.endc'))return;const w=S.spots.find(s=>s.k==='window');let wl;if(w.state==='ask'&&w.near&&(S.inv.bread||S.inv.herb)){hvLeave(S,api);wl='ปีเตอร์เดินผ่านหน้าต่างบานนั้นมาโดยไม่หยุด'}else wl=w.state==='given'?'ปีเตอร์แบ่งของให้หญิงที่หน้าต่าง คืนนี้บ้านหลังนั้นมีตะเกียงจุดอยู่':w.state==='left'?'ปีเตอร์เดินจากหน้าต่างบานนั้นมา ม่านบ้านหลังนั้นปิดสนิท':'ปีเตอร์ไม่ได้แวะที่หน้าต่างบานนั้น';
    S.busy={k:'home',t:0,dur:1e9};const ks=Object.keys(S.inv);const c=document.createElement('div');c.className='warnc endc';
    c.innerHTML='<div class="pp" style="max-width:32em"><h2>จบวันที่ 1</h2><div style="font-size:.85em;margin-top:-.3em">ฤดูร้อน ค.ศ. 1349 · ✦ เรื่องในเมืองนี้แต่งขึ้น</div><p><b>ของที่นำกลับบ้าน</b><br><span class="eb"></span>'+(ks.length?'':'ไม่มีอะไรเลย')+'</p><p><b>หน้าต่างบานนั้น</b><br>'+esc(wl)+'</p><p><b>หมา</b><br>'+(S.spots.find(s=>s.k==='cart').done?'คาบขนมปังออกมาจากใต้เกวียน':'ยังไม่ได้ช่วยหาของ')+(S.spots.find(s=>s.k==='rats').cleared?' และไล่ฝูงหนูไปได้':'')+'</p><p style="font-size:.85em;opacity:.85">ขั้นต่อไปของเกม: บ้านแบบผ่าครึ่ง ของที่ปีเตอร์นำกลับมาจะได้ใช้ที่นั่น</p><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="pp" data-a="again">เล่นถนนนี้อีกครั้ง</button><button class="pp" data-a="out">กลับหน้ากาฬโรค</button></div></div>';
    const eb=c.querySelector('.eb');ks.forEach(k=>{const cv2=document.createElement('canvas');cv2.width=cv2.height=48;cv2.style.cssText='width:2em;height:2em;vertical-align:middle';hvIcon(cv2.getContext('2d'),k,48);eb.appendChild(cv2);eb.appendChild(document.createTextNode(' '+HVITEM[k].n+(S.inv[k]>1?' ×'+S.inv[k]:'')+'  '))});
    el.appendChild(c);c.querySelector('[data-a=again]').onclick=()=>hvStart();c.querySelector('[data-a=out]').onclick=()=>{el.remove();try{plIntro46()}catch(e){}};S.dayEnd=1}
  /* controls: a short tap takes one clear step; holding keeps walking; the run toggle; click the street to walk there */
  let hold=0,run=false,goto=null,pressAt=0,pressX=0;const P=S.p;
  const press=d=>{if(S.busy)return;hold=d;goto=null;pressAt=performance.now();pressX=P.x};
  const release=d=>{if(hold!==d)return;hold=0;if(performance.now()-pressAt<300&&Math.abs(P.x-pressX)<34){goto=Math.max(scene.mask[0][0],Math.min(scene.mask[0][1],pressX+d*34))}};
  [[bl,-1],[br,1]].forEach(([b,d])=>{b.setAttribute('aria-label',d<0?'เดินซ้าย':'เดินขวา');b.onpointerdown=e=>{e.preventDefault();press(d);try{b.setPointerCapture(e.pointerId)}catch(_){}};b.onpointerup=b.onpointercancel=()=>release(d);b.onlostpointercapture=()=>{if(hold===d)release(d)}});
  brun.onclick=()=>{run=!run;brun.classList.toggle('on',run)};
  cv.addEventListener('pointerdown',e=>{if(S.iris<1||S.busy)return;const r=cv.getBoundingClientRect();const wx=(S.cam||0)+(e.clientX-r.left)/r.width*(S.vw||640);goto=Math.max(scene.mask[0][0],Math.min(scene.mask[0][1],wx));hold=0});
  const kd=e=>{if(!alive()){document.removeEventListener('keydown',kd);document.removeEventListener('keyup',ku);return}if(e.repeat&&(e.key==='ArrowLeft'||e.key==='ArrowRight'||e.key==='a'||e.key==='d'))return e.preventDefault();
      if(e.key==='ArrowLeft'||e.key==='a'){press(-1);e.preventDefault()}else if(e.key==='ArrowRight'||e.key==='d'){press(1);e.preventDefault()}else if(e.key==='Shift'){run=true;brun.classList.add('on')}else if(e.key==='Escape'){lab.classList.toggle('on');drawLab()}
      else if((e.key==='Enter'||e.key===' ')&&!e.repeat){e.preventDefault();const sp=hvNear(S);if(sp&&sp.kind==='moral'&&sp.state==='ask')hvGive(S,api);else if(sp&&sp.kind==='dog')hvDogCmd(S,api,'fetch');else if(sp&&sp.kind==='rats')hvDogCmd(S,api,'bark');else hvAct(S,api);drawHud(true)}
      else if((e.key==='q'||e.key==='Q')&&!e.repeat){hvDogCmd(S,api);drawHud(true)}},
    ku=e=>{if(e.key==='ArrowLeft'||e.key==='a')release(-1);else if(e.key==='ArrowRight'||e.key==='d')release(1);else if(e.key==='Shift'){run=false;brun.classList.remove('on')}};
  document.addEventListener('keydown',kd);document.addEventListener('keyup',ku);
  /* the walker, the dog, the rats and the places are drawn in the play layer; what Peter loves is drawn again after the colour fades */
  S.drawActors=(x,t,rg)=>{hvDrawSpots(x,S,t,rg);for(const r of S.rats)hvRat(x,r.x,r.y,r.d,t,1);S.loved.push(()=>hvSpotsLoved(x,S,t));
    const dg=S.dog,dog=()=>hvDog(x,{X:dg.x,Y:HV.GY+6,dir:dg.dir,walk:dg.moving?dg.walk:null,t,happy:(dg.happy||0)>0||(!P.moving&&P.idle<2),hide:dg.hide,bark:dg.bark,sit:dg.sit,carry:dg.carry});S.loved.push(dog);S.dbox=dg.hide?null:{x0:dg.x-18,x1:dg.x+26};
    const mood=S.mood||(S.happyT>0?'h':S.mind<35?'s':(S.mind<55||S.plague>.6)?'w':'n'),tilt=S.mood?0:(P.idle>4&&!S.busy?-.16:0);
    const pose=S.busy?(S.busy.k==='give'?'reach':'crouch'):null;const o={X:P.x,Y:HV.GY+12,dir:P.dir,walk:P.moving?P.walk:null,run:run&&P.moving,t,mood,tilt,sick:S.sick,pose,shadow:S.tod===2?1.6:1,sx:S.tod===2?-14:0};
    S.pbox=hvKid(x,o);S.loved.push(()=>hvKid(x,Object.assign({},o,{pass:'loved'})));S.loved.push(()=>hvPrompt(x,S,t,hvNear(S)));S.silo=y=>{hvKid(y,o)}};
  S.overFx=(x,t)=>hvDrawFx(x,S,t);
  /* a big rat that runs across the front of the camera now and then */
  scene.front.push({kind:'bigrat',anim:1,x:-999,p:1.5,w:200,draw(x,t,S){const r=S.bigRat;if(!r)return;x.save();x.translate(0,348);x.scale(r.d*3.2,3.2);x.beginPath();x.moveTo(-8,-3);x.quadraticCurveTo(-18,-4+Math.sin(t*24),-26,-1);x.lineWidth=1.4;x.stroke();x.beginPath();x.moveTo(-9,-1);x.quadraticCurveTo(-8,-9,1,-8);x.quadraticCurveTo(8,-7,10,-2);x.quadraticCurveTo(4,0,-9,-1);x.fill();x.restore()}});const BR=scene.front[scene.front.length-1];
  /* opening words */const caps=['<b>เมืองเล็กริมแม่น้ำไรน์ ใกล้สตราสบูร์ก · ฤดูร้อน ค.ศ. 1349</b><br><span style="font-size:.88em">(เกิดขึ้นจริง) กาฬโรคมาถึงสตราสบูร์กเมื่อ 8 กรกฎาคม 1349 · ✦ เมือง ครอบครัว และเหตุการณ์ในเมืองนี้แต่งขึ้น</span>','<b>ปีเตอร์</b> อายุ 12 ปี ลูกช่างไม้ หมวกของเขาใหญ่เกินหัว เพราะเป็นของพ่อ<br><span style="font-size:.88em">หมาจรตัวเล็กเดินตามเขามาสามวันแล้ว · แม่ให้ออกมาหาของที่ยังพอใช้ได้</span>'];
  say(caps[0],6500);setTimeout(()=>{if(alive())say(caps[1],6500)},7000);
  const fit=()=>{if(!alive()){removeEventListener('resize',fit);return}hvLayout(el);place();hvFitCanvas(cv);drawHud(true)};addEventListener('resize',fit);fit();
  let last=performance.now(),t0=last,ft=[],hudT=0;S.perf=ft;
  const loop=now=>{if(!alive())return;const dt=Math.min(.1,(now-last)/1000);last=now;const t=(now-t0)/1000;
    S.iris=Math.min(1,S.iris+dt/0.9);
    /* move: walk 120, run 240 units a second (no running when too tired); never leave the walkable strip */
    let v=0;if(!S.busy&&!S.auto){if(hold)v=hold;else if(goto!=null){const d=goto-P.x;if(Math.abs(d)<3)goto=null;else v=Math.sign(d)}}else{hold=0;goto=null}
    const canRun=run&&S.tired<85,spd=(canRun?240:120)*(1-S.sick*.45);if(v){P.dir=v;P.x+=v*spd*dt;P.walk+=dt*(canRun?13:9);P.moving=true;P.idle=0}else{P.moving=false;P.idle+=dt}
    P.x=Math.max(scene.mask[0][0],Math.min(scene.mask[0][1],P.x));
    hvPlayTick(S,dt,t,api);
    const dg=S.dog;dg.happy=Math.max(0,(dg.happy||0)-dt);if(!dg.task){const tx=P.x-P.dir*52,dd=tx-dg.x;if(Math.abs(dd)>8){dg.dir=Math.sign(dd);dg.x+=Math.sign(dd)*Math.min(Math.abs(dd),(Math.abs(dd)>90?260:140)*dt);dg.walk+=dt*10;dg.moving=true}else{dg.moving=false;dg.dir=P.dir}}
    /* rats: more of them as the plague grows */if(!S.ratCalm&&Math.random()<dt*(.08+S.plague*.9)&&S.rats.length<2+S.plague*8){const d=Math.random()<.5?1:-1,vw=S.vw||640;S.rats.push({x:(S.cam||0)+(d>0?-30:vw+30),y:328+Math.random()*12,d,v:150+Math.random()*90})}
    S.rats.forEach(r=>r.x+=r.d*r.v*dt);S.rats=S.rats.filter(r=>r.x>(S.cam||0)-60&&r.x<(S.cam||0)+(S.vw||640)+60);
    if(!S.bigRat&&Math.random()<dt*(.02+S.plague*.06))S.bigRat={sx:0,d:Math.random()<.5?1:-1,k:0};if(S.bigRat){const r=S.bigRat;r.k+=dt*.55;const vw=S.vw||640;BR.x=(S.cam||0)*BR.p+(r.d>0?-80+r.k*(vw+160):vw+80-r.k*(vw+160));if(r.k>1){S.bigRat=null;BR.x=-999}}
    const w=S.spots.find(s=>s.k==='window');S.lights=scene.lights.concat([{x:P.x,y:HV.GY-40,r:90,p:1,i:.28}],w&&w.state==='given'?[{x:w.x-34,y:HV.GY-100,r:70,p:1,i:.9,lamp:1}]:[]);
    S.sad=Math.max(0,Math.min(1,(60-S.mind)/60));
    hudT+=dt;if(hudT>.12){hudT=0;drawHud()}
    if(hvFitCanvas(cv))S._ck=null;const a=performance.now();hvRender(cv,S,t,dt);ft.push(performance.now()-a);if(ft.length>120)ft.shift();
    requestAnimationFrame(loop)};requestAnimationFrame(loop);
  window.__hvS=S;return S}
/* a short warning first, as in the other chapters */
function hvIntro(){hvCss();let el=document.getElementById('hv');if(el)el.remove();el=document.createElement('div');el.id='hv';document.body.appendChild(el);
  el.innerHTML='<div class="warnc"><div class="pp"><h2>🌾 The Last Harvest</h2><p>เรื่องของครอบครัวช่างไม้ในเมืองเล็กริมแม่น้ำไรน์ ช่วงที่กาฬโรคค่อยๆ มาถึง ค.ศ. 1348–1349</p><p style="font-size:.9em"><b>ก่อนเริ่ม:</b> เกมนี้พูดถึงโรคระบาด ความตาย และการสูญเสียในครอบครัว ไม่มีภาพเลือดหรือบาดแผล</p><p style="font-size:.85em;opacity:.85">ตอนนี้เป็นฉากทดลอง: ถนนหนึ่งสาย ค้นหาของ สั่งหมา และการตัดสินใจหนึ่งครั้ง</p><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="pp" data-a="go">เข้าใจแล้ว เริ่ม</button><button class="pp" data-a="back">กลับ</button></div></div></div>';
  el.querySelector('[data-a=go]').onclick=hvStart;el.querySelector('[data-a=back]').onclick=()=>{el.remove()}}
/* a fourth door on the plague page */
{const _i=plIntro46;plIntro46=function(){_i();try{const d=document.getElementById('jr48door');if(d&&!document.getElementById('hv50door')){const b=document.createElement('button');b.className='crs';b.id='hv50door';b.innerHTML='<span class="ic">🌾</span><span><b>The Last Harvest (ทดลอง)</b><div class="d">เกมใหม่แบบหนังสือภาพ ครอบครัวช่างไม้ในเมืองริมแม่น้ำไรน์ · ตอนนี้: ถนนหนึ่งสาย ค้นของ สั่งหมา และหน้าต่างบานหนึ่ง</div></span>';b.onclick=hvIntro;d.parentNode.insertBefore(b,d)}}catch(e){}}}
if(typeof window!=='undefined')window.__v50={hvStart,hvIntro,hvStreet,hvKid,hvDog,HVSPOT,HVITEM};
