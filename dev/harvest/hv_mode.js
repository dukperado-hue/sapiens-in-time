/* ===================== The Last Harvest · the screen, controls and the door in (v0.50 step A: walk one street, Thai only) ===================== */
const HVK='sit.harvest';
const hvLoad=()=>{let d=null;try{d=store.get(HVK,null)}catch(e){}d=d||{};d.v=1;d.opt=Object.assign({low:0},d.opt||{});return d};
const hvSave=d=>{try{if(!TEST)store.set(HVK,d)}catch(e){}};
function hvCss(){if(document.getElementById('hvcss'))return;const st=document.createElement('style');st.id='hvcss';st.textContent=
 'html:has(#hv),body:has(#hv){overflow:hidden!important}#hv{position:fixed;inset:0;z-index:95;background:#120c08;color:#3b2418;font-family:Pridi,"Noto Serif Thai",serif;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none;font-size:var(--hfs,16px)}'+
 '#hv .fr{position:absolute;left:0;top:0;right:0;overflow:hidden}#hv canvas{position:absolute;inset:0;width:100%;height:100%;display:block;cursor:pointer}'+
 '#hv .pp{background:#f4e6c8;border:2.5px solid #3b2418;border-radius:12px;box-shadow:0 3px 0 #3b241866,inset 0 0 0 3px #f9efd9,inset 0 0 18px #c9a46a55;color:#3b2418}'+
 '#hv button.pp{font:inherit;cursor:pointer;padding:.25em .8em;min-height:44px}#hv button.pp:active{transform:translateY(2px);box-shadow:0 1px 0 #3b241866}#hv button.pp.on{background:#e8c98a}'+
 '#hv .top{position:absolute;top:10px;right:10px;display:flex;gap:8px;z-index:5}#hv .top button{font-size:.85em;min-height:40px}'+
 '#hv .cap{position:absolute;top:10px;left:10px;max-width:min(62%,30em);padding:.45em .9em;font-size:.9em;line-height:1.55;z-index:4;transition:opacity .8s}#hv .cap b{color:#8a3a1e}'+
 '#hv .pad{position:absolute;left:0;right:0;bottom:0;display:flex;gap:10px;padding:10px;z-index:4;align-items:flex-end;pointer-events:none}#hv .pad button{pointer-events:auto;min-width:64px;min-height:56px;font-size:1.05em}#hv .pad .sp{flex:1}#hv .pad .hint{pointer-events:none;font-size:.78em;padding:.3em .8em;align-self:center;opacity:.9}'+
 '#hv.port .pad{position:absolute;top:auto;background:#24180f;border-top:3px solid #3b2418}#hv.port .pad .hint{display:none}#hv.port .cap{position:absolute;left:8px;right:8px;max-width:none;top:auto}'+
 '#hv .lab{position:absolute;right:10px;top:60px;z-index:6;padding:.6em .9em;width:min(19em,80vw);font-size:.86em;line-height:1.5;display:none}#hv .lab.on{display:block}#hv .lab input{width:100%}#hv .lab .row{display:flex;flex-wrap:wrap;gap:4px;margin:.2em 0 .5em}#hv .lab .row button{min-height:34px;font-size:.9em;padding:.1em .55em}'+
 '#hv .warnc{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:9;background:#120c08ee;padding:16px}#hv .warnc .pp{max-width:30em;padding:1.2em 1.4em;line-height:1.75}#hv .warnc h2{margin:0 0 .3em;font-size:1.3em;color:#8a3a1e}';document.head.appendChild(st)}
/* fit: any wide window gets the whole picture (the scene is drawn for any width); a tall phone puts the controls under the picture */
function hvLayout(el){const vw=el.clientWidth,vh=el.clientHeight,port=vh>vw*1.1;el.classList.toggle('port',port);const fr=el.querySelector('.fr'),pad=el.querySelector('.pad'),cap=el.querySelector('.cap');
  if(port){const ph=Math.max(190,Math.min(vh*.34,270));fr.style.height=(vh-ph)+'px';pad.style.height=ph+'px';cap.style.top=(vh-ph+8)+'px';cap.style.bottom='auto';cap.style.zIndex=5}else{let h=vh;if(vw/vh>2.3)h=vh;fr.style.height=h+'px';pad.style.height='auto';cap.style.top='10px';cap.style.bottom='auto';cap.style.zIndex=4}
  el.style.setProperty('--hfs',(port?Math.max(14,Math.min(17,vw*.042)):Math.max(14,Math.min(22,vh*.03)))+'px')}
function hvStart(){try{PLM47.stop()}catch(e){}hvCss();let el=document.getElementById('hv');if(el)el.remove();el=document.createElement('div');el.id='hv';document.body.appendChild(el);const D=hvLoad();
  el.innerHTML='<div class="fr"><canvas></canvas></div><div class="cap pp"></div><div class="top"><button class="pp" data-a="lab">🎨 ทดลองภาพ</button><button class="pp" data-a="exit">✕ ออก</button></div><div class="lab pp"></div><div class="pad"></div>';
  const cv=el.querySelector('canvas'),cap=el.querySelector('.cap'),pad=el.querySelector('.pad'),lab=el.querySelector('.lab');
  const scene=hvStreet();const S={scene,cam:null,plague:0,tod:2,lights:scene.lights.concat([]),p:{x:260,dir:1,moving:false,walk:0,idle:0},dog:{x:200,dir:1,walk:0},rats:[],bigRat:null,iris:0,mood:null,sick:0,lowfx:D.opt.low};
  const alive=()=>el.isConnected;
  /* exit asks twice */const ex=el.querySelector('[data-a=exit]');ex.onclick=()=>{if(ex.dataset.k){el.remove();try{plIntro46()}catch(e){}}else{ex.dataset.k=1;ex.textContent='แตะอีกครั้งเพื่อออก';setTimeout(()=>{if(ex.isConnected){delete ex.dataset.k;ex.textContent='✕ ออก'}},3000)}};
  el.querySelector('[data-a=lab]').onclick=()=>{lab.classList.toggle('on');drawLab()};
  function drawLab(){lab.innerHTML='<b>ทดลองภาพ</b> <span style="font-size:.85em">(สำหรับตรวจงานขั้นนี้)</span>'+
    '<div>โรคระบาด (plagueLevel) <b>'+S.plague.toFixed(2)+'</b></div><input type="range" min="0" max="1" step="0.05" value="'+S.plague+'" data-a="pl">'+
    '<div>เวลา</div><div class="row">'+HVTOD.map((T,i)=>'<button class="pp'+(S.tod===i?' on':'')+'" data-t="'+i+'">'+T.n+'</button>').join('')+'</div>'+
    '<div>อารมณ์ของปีเตอร์ (ไม่มีปาก)</div><div class="row">'+[[null,'ตามเรื่อง'],['n','เฉยๆ'],['h','ดีใจ'],['w','กังวล'],['s','เศร้า']].map(([m,n])=>'<button class="pp'+(S.mood===m?' on':'')+'" data-m="'+m+'">'+n+'</button>').join('')+'</div>'+
    '<div>อาการป่วย (สีผิวและรอบตา) <b>'+S.sick.toFixed(2)+'</b></div><input type="range" min="0" max="1" step="0.1" value="'+S.sick+'" data-a="sk">'+
    '<div class="row"><button class="pp'+(S.lowfx?' on':'')+'" data-a="low">โหมดเครื่องช้า (ไม่เบลอ)</button></div>';
    lab.querySelector('[data-a=pl]').oninput=e=>{S.plague=+e.target.value;lab.querySelector('b+span+div b, div b')};lab.querySelector('[data-a=pl]').onchange=drawLab;lab.querySelector('[data-a=sk]').oninput=e=>{S.sick=+e.target.value};lab.querySelector('[data-a=sk]').onchange=drawLab;
    lab.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{S.tod=+b.dataset.t;drawLab()});lab.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{S.mood=b.dataset.m==='null'?null:b.dataset.m;drawLab()});lab.querySelector('[data-a=low]').onclick=()=>{S.lowfx=D.opt.low=S.lowfx?0:1;hvSave(D);drawLab()}}
  /* controls: hold to walk, a run toggle; arrows and Shift on the keyboard; click the street to walk there */
  let hold=0,run=false,goto=null;const touch=matchMedia('(pointer:coarse)').matches;
  const mk=(t,cls)=>{const b=document.createElement('button');b.className='pp'+(cls?' '+cls:'');b.textContent=t;pad.appendChild(b);return b};
  const bl=mk('◀'),br=mk('▶');const hint=document.createElement('div');hint.className='pp hint';hint.textContent='← → เดิน · Shift วิ่ง · คลิกที่ถนนเพื่อเดินไป · Esc เมนู';pad.appendChild(hint);const sp=document.createElement('div');sp.className='sp';pad.appendChild(sp);const brun=mk('🏃 วิ่ง');
  [[bl,-1],[br,1]].forEach(([b,d])=>{b.onpointerdown=e=>{e.preventDefault();hold=d;goto=null;try{b.setPointerCapture(e.pointerId)}catch(_){}};b.onpointerup=b.onpointercancel=b.onlostpointercapture=()=>{if(hold===d)hold=0}});
  brun.onclick=()=>{run=!run;brun.classList.toggle('on',run)};
  cv.addEventListener('pointerdown',e=>{if(S.iris<1)return;const r=cv.getBoundingClientRect();const wx=(S.cam||0)+(e.clientX-r.left)/r.width*(S.vw||640);goto=Math.max(scene.mask[0][0],Math.min(scene.mask[0][1],wx));hold=0});
  const kd=e=>{if(!alive()){document.removeEventListener('keydown',kd);document.removeEventListener('keyup',ku);return}if(e.key==='ArrowLeft'||e.key==='a'){hold=-1;goto=null;e.preventDefault()}else if(e.key==='ArrowRight'||e.key==='d'){hold=1;goto=null;e.preventDefault()}else if(e.key==='Shift'){run=true;brun.classList.add('on')}else if(e.key==='Escape'){lab.classList.toggle('on');drawLab()}},
    ku=e=>{if(['ArrowLeft','ArrowRight','a','d'].includes(e.key)){hold=0}else if(e.key==='Shift'){run=false;brun.classList.remove('on')}};
  document.addEventListener('keydown',kd);document.addEventListener('keyup',ku);
  /* the walker, the dog and the rats are drawn in the play layer; what Peter loves is drawn again after the colour fades */
  const P=S.p;
  S.drawActors=(x,t,rg)=>{for(const r of S.rats)hvRat(x,r.x,r.y,r.d,t,1);
    const dg=S.dog,dog=()=>hvDog(x,{X:dg.x,Y:HV.GY+6,dir:dg.dir,walk:dg.moving?dg.walk:null,t,happy:!P.moving&&P.idle<2});S.loved.push(dog);
    const mood=S.mood||(S.plague>.6?'w':P.idle>4?'n':'n'),tilt=S.mood?0:(P.idle>4?-.16:0);const o={X:P.x,Y:HV.GY+12,dir:P.dir,walk:P.moving?P.walk:null,run:run&&P.moving,t,mood,tilt,sick:S.sick,shadow:S.tod===2?1.6:1,sx:S.tod===2?-14:0};
    S.pbox=hvKid(x,o);S.loved.push(()=>hvKid(x,Object.assign({},o,{pass:'loved'})));S.silo=y=>{hvKid(y,o)}};
  /* a big rat that runs across the front of the camera now and then */
  scene.front.push({kind:'bigrat',anim:1,x:-999,p:1.5,w:200,draw(x,t,S){const r=S.bigRat;if(!r)return;x.save();x.translate(0,348);x.scale(r.d*3.2,3.2);x.beginPath();x.moveTo(-8,-3);x.quadraticCurveTo(-18,-4+Math.sin(t*24),-26,-1);x.lineWidth=1.4;x.stroke();x.beginPath();x.moveTo(-9,-1);x.quadraticCurveTo(-8,-9,1,-8);x.quadraticCurveTo(8,-7,10,-2);x.quadraticCurveTo(4,0,-9,-1);x.fill();x.restore()}});const BR=scene.front[scene.front.length-1];
  /* opening words */const caps=['<b>เมืองเล็กริมแม่น้ำไรน์ ใกล้สตราสบูร์ก</b><br>ฤดูใบไม้ร่วง ค.ศ. 1348 · ตลาดยังคึกคัก เรือสินค้ายังเข้ามา<br><span style="font-size:.85em">✦ เมืองนี้แต่งขึ้น ส่วนยุคและภูมิภาคเป็นของจริง</span>','<b>ปีเตอร์</b> อายุ 12 ปี ลูกช่างไม้ หมวกของเขาใหญ่เกินหัว เพราะเป็นของพ่อ<br><span style="font-size:.85em">หมาจรตัวเล็กเดินตามเขามาสามวันแล้ว</span>'];let ci=0;cap.innerHTML=caps[0];
  const nextCap=()=>{ci++;if(ci<caps.length){cap.style.opacity=0;setTimeout(()=>{if(!alive())return;cap.innerHTML=caps[ci];cap.style.opacity=1},800)}else{cap.style.opacity=0}};setTimeout(nextCap,7000);setTimeout(nextCap,15000);
  const fit=()=>{if(!alive()){removeEventListener('resize',fit);return}hvLayout(el);hvFitCanvas(cv)};addEventListener('resize',fit);fit();
  let last=performance.now(),t0=last,ft=[];S.perf=ft;
  const loop=now=>{if(!alive())return;const dt=Math.min(.1,(now-last)/1000);last=now;const t=(now-t0)/1000;
    S.iris=Math.min(1,S.iris+dt/0.9);
    /* move: walk 120, run 240 units a second; never leave the walkable strip */
    let v=0;if(hold)v=hold;else if(goto!=null){const d=goto-P.x;if(Math.abs(d)<4)goto=null;else v=Math.sign(d)}
    const spd=(run?240:120)*(1-S.sick*.45);if(v){P.dir=v;P.x+=v*spd*dt;P.walk+=dt*(run?13:9);P.moving=true;P.idle=0}else{P.moving=false;P.idle+=dt}
    P.x=Math.max(scene.mask[0][0],Math.min(scene.mask[0][1],P.x));
    const dg=S.dog,tx=P.x-P.dir*52,dd=tx-dg.x;if(Math.abs(dd)>8){dg.dir=Math.sign(dd);dg.x+=Math.sign(dd)*Math.min(Math.abs(dd),(Math.abs(dd)>90?260:140)*dt);dg.walk+=dt*10;dg.moving=true}else{dg.moving=false;dg.dir=P.dir}
    /* rats: more of them as the plague grows */if(Math.random()<dt*(.08+S.plague*.9)&&S.rats.length<2+S.plague*8){const d=Math.random()<.5?1:-1,vw=S.vw||640;S.rats.push({x:(S.cam||0)+(d>0?-30:vw+30),y:328+Math.random()*12,d,v:150+Math.random()*90})}
    S.rats.forEach(r=>r.x+=r.d*r.v*dt);S.rats=S.rats.filter(r=>r.x>(S.cam||0)-60&&r.x<(S.cam||0)+(S.vw||640)+60);
    if(!S.bigRat&&Math.random()<dt*(.02+S.plague*.06))S.bigRat={sx:0,d:Math.random()<.5?1:-1,k:0};if(S.bigRat){const r=S.bigRat;r.k+=dt*.55;const vw=S.vw||640;BR.x=(S.cam||0)*BR.p+(r.d>0?-80+r.k*(vw+160):vw+80-r.k*(vw+160));if(r.k>1){S.bigRat=null;BR.x=-999}}
    S.lights=scene.lights.concat([{x:P.x,y:HV.GY-40,r:90,p:1,i:.28}]);
    if(hvFitCanvas(cv))S._ck=null;const a=performance.now();hvRender(cv,S,t,dt);ft.push(performance.now()-a);if(ft.length>120)ft.shift();
    requestAnimationFrame(loop)};requestAnimationFrame(loop);
  window.__hvS=S;return S}
/* a short warning first, as in the other chapters */
function hvIntro(){hvCss();let el=document.getElementById('hv');if(el)el.remove();el=document.createElement('div');el.id='hv';document.body.appendChild(el);
  el.innerHTML='<div class="warnc"><div class="pp"><h2>🌾 The Last Harvest</h2><p>เรื่องของครอบครัวช่างไม้ในเมืองเล็กริมแม่น้ำไรน์ ช่วงที่กาฬโรคค่อยๆ มาถึง ค.ศ. 1348–1349</p><p style="font-size:.9em"><b>ก่อนเริ่ม:</b> เกมนี้พูดถึงโรคระบาด ความตาย และการสูญเสียในครอบครัว ไม่มีภาพเลือดหรือบาดแผล</p><p style="font-size:.85em;opacity:.85">ตอนนี้เป็นขั้นทดลองแรก: เดินดูถนนของเมือง และลองปรับภาพ</p><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="pp" data-a="go">เข้าใจแล้ว เริ่ม</button><button class="pp" data-a="back">กลับ</button></div></div></div>';
  el.querySelector('[data-a=go]').onclick=hvStart;el.querySelector('[data-a=back]').onclick=()=>{el.remove()}}
/* a fourth door on the plague page */
{const _i=plIntro46;plIntro46=function(){_i();try{const d=document.getElementById('jr48door');if(d&&!document.getElementById('hv50door')){const b=document.createElement('button');b.className='crs';b.id='hv50door';b.innerHTML='<span class="ic">🌾</span><span><b>The Last Harvest (ทดลอง)</b><div class="d">เกมใหม่แบบหนังสือภาพ ครอบครัวช่างไม้ในเมืองริมแม่น้ำไรน์ ค.ศ. 1348 · ตอนนี้เดินดูถนนได้</div></span>';b.onclick=hvIntro;d.parentNode.insertBefore(b,d)}}catch(e){}}}
if(typeof window!=='undefined')window.__v50={hvStart,hvIntro,hvStreet,hvKid,hvDog};
