/* ===================== The Last Harvest · the day in the house: morning plan, the street, the night, sleep (v0.54, Thai only) =====================
   The run lives in one object (R) saved every step, so the street can take over the screen and hand back to the house. */
function hvLifeCss(){if(document.getElementById('hvlcss'))return;const st=document.createElement('style');st.id='hvlcss';st.textContent=
 '#hv .card{box-sizing:border-box;position:absolute;z-index:8;right:12px;top:58px;bottom:auto;width:min(31em,46%);max-height:calc(100% - 70px);overflow:auto;padding:.9em 1.1em;line-height:1.65;font-size:.92em}#hv.port .card{left:8px;right:8px;width:auto;top:56px;max-height:calc(100% - 64px)}'+
 '#hv .card h3{margin:.1em 0 .2em;color:#8a3a1e;font-size:1.15em}#hv .card .dt{font-size:.82em;opacity:.8}#hv .card .real{font-size:.82em;background:#efe0bf;border-left:3px solid #8a3a1e;padding:.3em .6em;margin:.5em 0}#hv .card .hvch{display:flex;flex-direction:column;gap:6px;margin-top:.6em}#hv .card .hvch button{text-align:left;min-height:44px}#hv .card .res{margin:.5em 0;font-style:italic}'+
 '#hv .card .pl{display:grid;grid-template-columns:5.2em 1fr;gap:4px .6em;align-items:center;margin:.4em 0}#hv .card .pl .hvopts{display:flex;flex-wrap:wrap;gap:4px}#hv .card .pl .hvopts button{min-height:36px;padding:.1em .55em;font-size:.88em}#hv .card .pl .hvopts button.on{background:#e8c98a;box-shadow:inset 0 0 0 2px #8a3a1e}#hv .card .pl .nm{font-weight:bold}#hv .card .pl .note{grid-column:2;font-size:.8em;opacity:.8;margin-top:-2px}'+
 '#hv .card input[type=text]{font:inherit;padding:.4em .6em;border:2px solid #3b2418;border-radius:8px;background:#fffaf0;width:100%;box-sizing:border-box}'+
 '#hv .fam{display:grid;grid-template-columns:1fr;gap:1px;font-size:.84em;line-height:1.25;align-content:center}#hv .fam .r{display:grid;grid-template-columns:4.2em 1fr 1fr 1fr 4.6em;gap:4px;align-items:center}#hv .fam i{display:block;height:.5em;border:1.4px solid #3b2418;border-radius:3px;background:#efe0bf;overflow:hidden}#hv .fam i b{display:block;height:100%}#hv .fam .dead{opacity:.45}#hv .fam .sk{color:#8a2a1a;font-size:.88em}'+
 '#hv .stock{display:flex;gap:6px;flex-wrap:wrap;align-items:center;font-size:.86em}#hv .stock span{display:flex;align-items:center;gap:2px}#hv .stock canvas{width:1.7em;height:1.7em}#hv.port .lnb{grid-template-columns:1fr!important}';document.head.appendChild(st)}
/* the store holds what the bag brought: bread → food, herbs, firewood, planks */
const HVSTOCK=[['food','bread','ขนมปัง'],['water','water','น้ำ'],['wood','wood','ฟืน'],['herb','herb','สมุนไพร'],['plank','plank','ไม้กระดาน']];
function hvStockIcon(x,k,s){if(k==='water'){x.save();x.scale(s/40,s/40);hvRRect(x,10,8,20,26,5);hvInk(x,'#8a5a34',2.2);x.fillStyle='#4a7aa8';x.fillRect(13,16,14,15);x.restore();return}hvIcon(x,k,s)}
function hvLifeStart(cont){hvCss();hvLifeCss();try{PLM47.stop()}catch(e){}let R=cont?hvRunLoad():null;if(!R){R=hvNewRun(window.__hvSeed);hvRunSave(R)}
  let el=document.getElementById('hv');if(el)el.remove();el=document.createElement('div');el.id='hv';document.body.appendChild(el);
  el.innerHTML='<div class="fr"><canvas class="cv"></canvas></div><div class="cap pp"></div><div class="top"><button class="pp" data-a="exit">✕ ออก</button></div><div class="pad"></div>';
  const cv=el.querySelector('canvas.cv'),cap=el.querySelector('.cap'),pad=el.querySelector('.pad'),alive=()=>el.isConnected;
  const ex=el.querySelector('[data-a=exit]');ex.onclick=()=>{if(ex.dataset.k){hvRunSave(R);el.remove();try{plIntro46()}catch(e){}}else{ex.dataset.k=1;ex.textContent='แตะอีกครั้งเพื่อออก (บันทึกไว้แล้ว)';setTimeout(()=>{if(ex.isConnected){delete ex.dataset.k;ex.textContent='✕ ออก'}},3000)}};
  const scene=hvHouseScene();const S={scene,cam:null,plague:0,plagueBase:0,tod:0,lights:[],p:{x:320,dir:1,moving:false},dog:{x:0},iris:0,life:R,sad:0};window.__hvL=S;window.__hvR=()=>R;
  /* the notebook: the family, the stock, panning the house */
  const nb=document.createElement('div');nb.className='nb pp lnb';nb.style.gridTemplateColumns='1.5fr 1fr';nb.innerHTML='<div class="fam"></div><div class="stock"></div>';const famE=nb.querySelector('.fam'),stE=nb.querySelector('.stock');
  const ctl=document.createElement('div');ctl.className='ctl';const mk=t=>{const b=document.createElement('button');b.className='pp';b.textContent=t;return b};const bl=mk('◀'),br=mk('▶');bl.setAttribute('aria-label','มองไปทางซ้ายของบ้าน');br.setAttribute('aria-label','มองไปทางขวาของบ้าน');bl.onclick=()=>{S.p.x=Math.max(120,S.p.x-140)};br.onclick=()=>{S.p.x=Math.min(600,S.p.x+140)};
  const place=()=>{pad.innerHTML='';if(el.classList.contains('port')){pad.appendChild(nb);ctl.innerHTML='';ctl.append(bl,br);pad.appendChild(ctl)}else{ctl.innerHTML='';ctl.append(bl,br);pad.append(ctl,nb)}};
  function drawPad(){const bar=(v,c)=>'<i><b style="width:'+Math.max(0,Math.min(100,v))+'%;background:'+c+'"></b></i>';
    famE.innerHTML='<div class="r" style="font-size:.85em;opacity:.75"><span></span><span>อิ่ม</span><span>เหนื่อย</span><span>ใจ</span><span></span></div>'+Object.keys(HVFAM).map(k=>{const P=R.fam[k];if(P.dead)return '<div class="r dead"><span>'+HVFAM[k].n+'</span><span style="grid-column:2/6">จากไปแล้ว</span></div>';return '<div class="r"><span>'+HVFAM[k].n+'</span>'+bar(P.full,'#c8903a')+bar(P.tired,'#8a7a9a')+bar(P.mind,'#c8604a')+'<span class="sk">'+(P.inf>=2&&P.inf<4?HVSTAGE[P.inf]:P.inf===4?'ฟื้นแล้ว':'')+'</span></div>'}).join('')+'<div class="r"><span>🐕 '+esc(hvDogN(R))+'</span><span style="grid-column:2/6">ไว้ใจ '+Math.round(R.dog.trust)+' · อยู่ข้างปีเตอร์เสมอ</span></div>';
    stE.innerHTML='';HVSTOCK.forEach(([k,ic,n])=>{const s=document.createElement('span');s.title=n;const c=document.createElement('canvas');c.width=c.height=48;hvStockIcon(c.getContext('2d'),ic,48);s.appendChild(c);s.appendChild(document.createTextNode(R.store[k]));stE.appendChild(s)});
    const d=document.createElement('div');d.style.cssText='width:100%;font-size:.85em';d.textContent='วันที่ '+HVCAL[R.di]+' · '+hvDate(HVCAL[R.di])+' · '+hvTownWord(R);stE.appendChild(d)}
  /* the house as it is today */
  S.drawActors=(x,t)=>{const ph=R.phase;for(const k of ['thomas','anna']){const P=R.fam[k];if(P.dead||(k==='thomas'&&R.flags.thomasAway&&ph!=='night'))continue;const pos=hvHousePos(k,P,ph==='night'?'night':'day');if(!pos)continue;hvAdult(x,{k,X:pos.X,Y:pos.Y,dir:pos.dir||1,t:t+(k==='anna'?2:0),pose:P.inf===2&&pos.pose!=='lie'?'cough':pos.pose,sick:P.inf>=1&&P.inf<4?Math.min(1,P.inf*.3):0,mood:P.mind<30?'s':P.mind<50?'w':'n'});if(k==='anna')S.loved.push(()=>hvAdult(x,{k,X:pos.X,Y:pos.Y,dir:pos.dir||1,t:t+2,pose:P.inf===2&&pos.pose!=='lie'?'cough':pos.pose,pass:'loved'}))}
    const P=R.fam.peter;if(!P.dead){const pos=hvHousePos('peter',P,ph==='night'?'night':'day');if(pos){const o={X:pos.X,Y:pos.Y+(pos.pose==='lie'?0:12),dir:pos.dir||1,t,mood:P.mind<30?'s':P.mind<50?'w':'n',sick:P.inf>=1&&P.inf<4?Math.min(1,P.inf*.3):0,pose:pos.pose==='sit'?'crouch':null};
      const draw=pass=>{if(pos.pose==='lie'){x.save();x.translate(pos.X,pos.Y);x.rotate(-Math.PI/2);hvKid(x,Object.assign({},o,{X:0,Y:0,pass}));x.restore()}else hvKid(x,Object.assign({},o,{pass}))};draw('all');S.loved.push(()=>draw('loved'));
      const dx=ph==='night'?pos.X+44:pos.X-48,dy=ph==='night'?HVH.F1-6:HVH.G+6;S.loved.push(()=>hvDog(x,{X:dx,Y:dy,dir:ph==='night'?-1:1,t,sit:ph==='night'?1:0,emo:P.mind<30||R.deaths>0&&R.justDied?'scared':R.dog.trust>60?'happy':'normal',happy:R.dog.trust>60}))}}
    else{/* Peter is gone: the dog waits by the door */S.loved.push(()=>hvDog(x,{X:540,Y:HVH.G+6,dir:-1,t,sit:1,emo:'normal'}))}};
  const fit=()=>{if(!alive()){removeEventListener('resize',fit);return}hvLayout(el);place();hvFitCanvas(cv);drawPad()};addEventListener('resize',fit);fit();
  let last=performance.now(),t0=last;const loop=now=>{if(!alive())return;const dt=Math.min(.1,(now-last)/1000);last=now;const t=(now-t0)/1000;S.iris=Math.min(1,S.iris+dt/.9);
    const n=HVCAL[R.di]||38;S.plagueBase=Math.min(.85,hvTown(R,n)*.9);S.plague=S.plagueBase;S.home=R.home;S.sad=Math.max(0,Math.min(1,(55-(R.fam.peter.dead?0:R.fam.peter.mind))/55));
    const night=S.tod===3,G=HVH.G,F1=HVH.F1;S.lights=night?[{x:196,y:G-60,r:90,p:1,i:.85,lamp:1},{x:336,y:F1-46,r:80,p:1,i:.75,lamp:1}].concat(R.home.fire?[{x:96,y:G-26,r:120,p:1,i:1,lamp:1}]:[]):R.home.fire?[{x:96,y:G-26,r:90,p:1,i:.6,lamp:1}]:[];
    S.catOn=night&&(R.flags.cat||((R.di*7)%3===0));S.catCol='#2e2a30';
    hvAmbAudio.tick(S.tod,t,{fire:R.home.fire,hens:R.home.hens>0,cat:S.catOn});if(hvFitCanvas(cv))S._ck=null;hvRender(cv,S,t,dt);requestAnimationFrame(loop)};requestAnimationFrame(loop);
  /* a card on the page: text, then buttons; resolves with the button's value */
  let cardEl=null;const card=(html,btns)=>new Promise(res=>{if(cardEl)cardEl.remove();const c=cardEl=document.createElement('div');c.className='card pp';c.innerHTML=html;const ch=document.createElement('div');ch.className='hvch';c.appendChild(ch);
    (btns||[['ต่อไป',1]]).forEach(([t,v,dis])=>{const b=document.createElement('button');b.className='pp';b.textContent=t;b.disabled=!!dis;b.onclick=()=>{c.remove();cardEl=null;setTimeout(()=>res(v),250)};ch.appendChild(b)});el.appendChild(c);const f=ch.querySelector('button:not(:disabled)');if(f&&!matchMedia('(pointer:coarse)').matches)setTimeout(()=>f.focus(),300)});
  const say=(h,ms)=>{cap.style.opacity=1;cap.innerHTML=h;clearTimeout(say.t);say.t=setTimeout(()=>{if(alive())cap.style.opacity=0},ms||5000)};
  /* ---------- the flow, step by step; each step saves ---------- */
  (async()=>{try{while(alive()&&!R.over){drawPad();hvRunSave(R);
      if(R.phase==='morning')await morning();else if(R.phase==='evening')await evening();else if(R.phase==='night')await night();else if(R.phase==='sleep')await sleep();else if(R.phase==='street'){R.streetNote='ปีเตอร์รีบกลับบ้านกลางทาง ไม่ได้อะไรติดมือมา';R.phase='evening'}else R.phase='morning'}
    if(alive()&&R.over)await theEnd()}catch(e){console.error(e)}})();
  async function morning(){S.tod=0;const n=HVCAL[R.di];
    if(!R.dog.name){const nm=await nameDog();R.dog.name=nm}
    if(R.di===0&&!R.flags.traitShown){R.flags.traitShown=1;await card('<h3>บ้านของช่างไม้</h3><div class="dt">'+hvDate(1)+' · เมืองเล็กริมแม่น้ำไรน์ ใกล้สตราสบูร์ก ✦</div><p>โทมัสเป็นช่างไม้ แอนนาเลี้ยงบ้าน ปีเตอร์อายุ 12 ปี กับ'+esc(hvDogN(R))+' หมาจรที่ตามเขากลับบ้านมา</p><p><b>เรื่องของบ้านนี้ในรอบนี้:</b> '+esc(HVTRAIT.find(t=>t.k===R.trait).t)+'</p><p style="font-size:.85em">ทุกครั้งที่เริ่มใหม่ บ้านนี้จะมีเรื่องไม่เหมือนเดิม แต่ประวัติศาสตร์ข้างนอกเดินไปทางเดิม</p>')}
    if(R.report&&R.report.length){await card('<h3>เช้าวันที่ '+n+'</h3><div class="dt">'+hvDate(n)+'</div><p>'+R.report.map(esc).join('<br>')+'</p>');R.report=[]}
    for(const pd of R.pending.filter(p=>p.at<=n)){const L=HVLATER[pd.id];if(L){L.fx(R);await card('<h3>'+esc(L.title)+'</h3><p>'+esc(L.text(R))+'</p><div class="dt">✦</div>')}}R.pending=R.pending.filter(p=>p.at>n);drawPad();
    const plan=await planDay();applyPlan(plan);drawPad();if(plan.out&&!R.fam.peter.dead){R.phase='street';hvRunSave(R);goStreet();return new Promise(()=>{})}R.phase='evening'}
  function nameDog(){return new Promise(res=>{const c=document.createElement('div');c.className='card pp';const sug=['ถ่าน','เมล็ดข้าว','ฟริตซ์','ลูกเกาลัด'];c.innerHTML='<h3>หมาตัวนี้ชื่ออะไร</h3><p>หมาจรตัวเล็กเดินตามปีเตอร์กลับบ้านมาตั้งแต่สามวันก่อน แม่บอกว่าถ้าจะเลี้ยง ต้องตั้งชื่อให้มัน</p><input type="text" maxlength="14" placeholder="ชื่อหมา"><div class="hvch" style="flex-direction:row;flex-wrap:wrap">'+sug.map(s=>'<button class="pp" data-s="'+s+'">'+s+'</button>').join('')+'</div><div class="hvch"><button class="pp" data-a="ok">ตั้งชื่อนี้</button></div>';
    el.appendChild(c);const inp=c.querySelector('input');c.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{inp.value=b.dataset.s});const done=()=>{const v=(inp.value||'').trim()||sug[0];c.remove();res(v.slice(0,14))};c.querySelector('[data-a=ok]').onclick=done;inp.onkeydown=e=>{if(e.key==='Enter')done()}})}
  /* the morning plan: who eats, what the grown-ups do, whether Peter goes out */
  function planDay(){return new Promise(res=>{const n=HVCAL[R.di],al=hvAlive(R),P={eat:{},task:{},out:false,dog:false,attic:{}};let food=R.store.food;
    al.forEach(k=>{P.eat[k]=food>0;if(food>0)food--;P.task[k]=R.fam[k].task&&!['out','job','water'].includes(R.fam[k].task)?R.fam[k].task:'rest';P.attic[k]=R.fam[k].place==='attic'});P.out=!R.fam.peter.dead&&R.fam.peter.inf<2;
    const c=document.createElement('div');c.className='card pp';el.appendChild(c);const sick=k=>R.fam[k].inf>=2&&R.fam[k].inf<4;
    const TASK={thomas:[['rest','พัก'],['water','ตักน้ำที่บ่อ'],['job','รับจ้างซ่อมบ้าน'],['board','ตอกไม้ปิดหน้าต่าง',R.store.plank<2||R.home.boarded],['trap','ทำกับดักหนู',R.store.plank<1||R.home.trap],['care','ดูแลคนป่วย',!al.some(sick)]],
      anna:[['rest','พัก'],['soup','ทำซุป',R.store.food<1||R.store.wood<1],['water','ตักน้ำที่บ่อ'],['care','ดูแลคนป่วย',!al.some(sick)],['burn','เผาฟูกของคนป่วย',!R.home.dirty||R.store.wood<1],['clean','ปัดกวาดบ้าน']]};
    const draw=()=>{let used=al.filter(k=>P.eat[k]).length+(P.dog?1:0);const left=R.store.food-used;
      c.innerHTML='<h3>เช้าวันที่ '+n+'</h3><div class="dt">'+hvDate(n)+' · '+esc(hvTownWord(R))+'</div><div style="font-size:.86em;margin:.3em 0">ขนมปังเหลือหลังมื้อเช้า: <b>'+left+'</b> · น้ำ '+R.store.water+' · ฟืน '+R.store.wood+'</div>';
      const row=(nm,opts,cur,set,note)=>{const r=document.createElement('div');r.className='pl';r.innerHTML='<span class="nm">'+nm+'</span><div class="hvopts"></div>'+(note?'<div class="note">'+note+'</div>':'');opts.forEach(([v,t,dis])=>{const b=document.createElement('button');b.className='pp'+(cur===v?' on':'');b.textContent=t;b.disabled=!!dis;b.onclick=()=>{set(v);draw()};r.querySelector('.hvopts').appendChild(b)});c.appendChild(r)};
      const h=document.createElement('div');h.innerHTML='<b>มื้อเช้า</b>';c.appendChild(h);
      al.forEach(k=>row(HVFAM[k].n,[[true,'กิน',!P.eat[k]&&left<1],[false,'อด']],P.eat[k],v=>P.eat[k]=v,sick(k)?'ป่วย: '+HVSTAGE[R.fam[k].inf]:''));row(esc(hvDogN(R)),[[true,'แบ่งให้',!P.dog&&left<1],[false,'ไม่แบ่ง']],P.dog,v=>P.dog=v,'แบ่งขนมปังให้หมา หมาจะไว้ใจมากขึ้น');
      const h2=document.createElement('div');h2.innerHTML='<b>งานวันนี้</b>';c.appendChild(h2);
      ['thomas','anna'].forEach(k=>{if(R.fam[k].dead)return;if(sick(k)){row(HVFAM[k].n,[['bed','นอนในห้องนอน'],['attic','แยกขึ้นใต้หลังคา']],P.attic[k]?'attic':'bed',v=>P.attic[k]=v==='attic','แยกห้องทำให้คนอื่นเสี่ยงน้อยลง แต่ทุกคนใจแย่ลง');return}if(k==='thomas'&&R.flags.thomasAway){row(HVFAM[k].n,[['away','ไปทำงานในไร่']],'away',()=>{});return}row(HVFAM[k].n,TASK[k],P.task[k],v=>P.task[k]=v)});
      if(!R.fam.peter.dead){if(sick('peter'))row('ปีเตอร์',[['bed','นอนในห้องนอน'],['attic','แยกขึ้นใต้หลังคา']],P.attic.peter?'attic':'bed',v=>P.attic.peter=v==='attic');else row('ปีเตอร์',[[true,'ออกไปหาของกับ'+hvDogN(R)],[false,'อยู่บ้านช่วยแม่']],P.out,v=>P.out=v,'ข้างนอกมีของ แต่ก็มีโรค')}
      const ch=document.createElement('div');ch.className='hvch';const go=document.createElement('button');go.className='pp';go.textContent='เริ่มวัน';go.onclick=()=>{c.remove();setTimeout(()=>res(P),250)};ch.appendChild(go);c.appendChild(ch)};draw()})}
  function applyPlan(P){const al=hvAlive(R);al.forEach(k=>{const F=R.fam[k];F.ate=!!P.eat[k];if(F.ate&&R.store.food>0)R.store.food--;F.task=(k==='peter')?(P.out?'out':'home'):(R.flags.thomasAway&&k==='thomas'?'job':P.task[k]||'rest');if(F.inf>=2&&F.inf<4){F.task='sick';F.place=P.attic[k]?'attic':'bed'}});
    if(P.dog&&R.store.food>0){R.store.food--;R.dog.trust=Math.min(100,R.dog.trust+8)}if(al.some(k=>R.fam[k].place==='attic'&&R.fam[k].inf>=2))hvMind(R,-4)}
  /* Peter goes out: the street takes the screen; it comes back to the house with what he found */
  function goStreet(){const n=HVCAL[R.di];el.remove();hvStart({life:{R,n,back:res=>{hvLifeReturn(R,res);hvLifeStart(true)}}})}
  async function evening(){/* what the grown-ups did today */S.tod=2;const lines=hvDoTasks(R);if(R.streetNote){lines.unshift(R.streetNote);R.streetNote=null}if(lines.length)await card('<h3>เย็นวันที่ '+HVCAL[R.di]+'</h3><p>'+lines.map(esc).join('<br>')+'</p>');R.phase='night'}
  async function night(){S.tod=3;const ev=hvPickEvent(R);if(ev){const n=HVCAL[R.di];const head='<h3>'+esc(ev.title)+'</h3><div class="dt">คืนวันที่ '+n+' · '+hvDate(n)+(ev.real?'':' · ✦')+'</div><p>'+esc(ev.text(R))+'</p>'+(ev.real?'<div class="real">'+esc(ev.real)+'</div>':'');
      if(ev.auto){const r=ev.auto(R);await card(head+'<p class="res">'+esc(r)+'</p>')}else{const v=await card(head,ev.ch.map((c,i)=>[c.t,i,c.need&&!c.need(R)]));const r=ev.ch[v].fx(R);drawPad();await card('<h3>'+esc(ev.title)+'</h3><p class="res">'+esc(r)+'</p>')}
      R.used[ev.id]=1;R.lastEv=ev.id}
    R.phase='sleep'}
  async function sleep(){const lines=hvUpkeep(R);const gap=R.di+1<HVCAL.length?HVCAL[R.di+1]-HVCAL[R.di]:1;const out=hvSleep(R,gap);R.justDied=out.some(s=>s.includes('จากไป'));if(R.justDied)hvAmbAudio.play('bell');
    if(R.flags.thomasAway){R.flags.thomasAway-=gap;if(R.flags.thomasAway<=0){delete R.flags.thomasAway;lines.push('พ่อกลับมาจากไร่ เหนื่อยจนพูดไม่ออก')}}
    R.report=lines.concat(out);if(gap>1&&R.di+1<HVCAL.length)R.report.unshift('ผ่านไป '+gap+' วัน ตลาดยังพอมีของขาย ชีวิตยังเดินไปเหมือนทุกวัน');
    if(R.fled&&!R.fleeDone){R.fleeDone=1;hvFleeFate(R)}
    if(R.fam.peter.dead||R.fled||R.di+1>=HVCAL.length){R.over=true;return}R.di++;R.phase='morning'}
  async function theEnd(){hvRunSave(R);S.tod=R.fam.peter.dead?3:1;const n=HVCAL[Math.min(R.di,HVCAL.length-1)];
    const life=k=>{const P=R.fam[k];return P.dead?(P.fledDeath?'จากไปที่กระท่อมบนเนิน ราว ':'จากไปเมื่อ ')+hvDate(P.diedOn||n):'รอด'};
    const title=R.fam.peter.dead?'หมวกที่แขวนอยู่':R.fled?'กระท่อมบนเนิน':'วันที่ 38';
    const lead=R.fam.peter.dead?'หมวกใบใหญ่ของปีเตอร์แขวนอยู่ที่ตะปูข้างประตู '+hvDogN(R)+'นอนรออยู่ข้างใต้ ทุกเช้ามันยังเงยหน้าขึ้นมองประตู':R.fled?'บ้านช่างไม้ในเมืองว่างเปล่า บนเนินนอกเมือง '+hvDogN(R)+'นอนอยู่หน้ากระท่อม มองลงไปที่หลังคาเมือง':'8 กรกฎาคม 1349 ข่าวมาถึงว่าโรคเข้าสตราสบูร์กแล้ว ในบ้านช่างไม้ '+hvDogN(R)+'นอนอยู่ปลายเตียงของปีเตอร์';
    R.over=true;hvRunSave(R);const d=hvLoad();d.lives=(d.lives||0)+1;hvSave(d);
    const v=await card('<h3>'+title+'</h3><div class="dt">'+hvDate(n)+'</div><p>'+esc(lead)+'</p>'+(R.fled||R.fam.peter.dead?'':'<div class="real">(เกิดขึ้นจริง) กาฬโรคมาถึงสตราสบูร์กเมื่อ 8 กรกฎาคม 1349</div>')+'<p><b>หนังสือของครอบครัว</b><br>'+Object.keys(HVFAM).map(k=>esc(HVFAM[k].n)+' · '+life(k)).join('<br>')+'<br>'+esc(hvDogN(R))+' · อยู่ตรงนั้นเสมอ</p><p style="font-size:.85em">เล่นใหม่อีกครั้ง บ้านนี้จะมีเรื่องไม่เหมือนเดิม</p>',[['เริ่มครอบครัวใหม่','new'],['กลับหน้ากาฬโรค','out']]);
    hvRunClear();if(v==='new'){hvLifeStart(false)}else{el.remove();try{plIntro46()}catch(e){}}}
  return S}
const hvTownWord=R=>{const n=HVCAL[R.di]||38;if(n<R.arrive)return n<6?'ในเมืองยังไม่มีใครป่วย':'มีข่าวลือว่าเมืองข้างๆ มีคนตาย';return 'ในเมืองมีคนตายแล้ว · ระฆังศพดังทุกวัน'};
/* the day's work, at evening */
function hvDoTasks(R){const n=HVCAL[R.di],tp=hvTown(R,n),L=[],ate=hvAlive(R).filter(k=>R.fam[k].ate);for(const k of ['thomas','anna']){const P=R.fam[k];if(P.dead)continue;const nm=HVFAM[k].n;
  switch(P.task){case 'rest':P.tired=Math.max(0,P.tired-25);P.mind=Math.min(100,P.mind+3);break;
    case 'water':R.store.water+=3;P.tired+=10;if(tp>.05)P.exp+=6+tp*20;L.push(nm+'ตักน้ำมาสามถัง ที่บ่อมีคนต่อแถวยาว');break;
    case 'job':if(R.flags.thomasAway){P.tired+=15;break}R.store.food+=2;P.exp+=8+tp*18;P.tired+=25;L.push(nm+'ซ่อมหลังคาให้บ้านหนึ่ง ได้ขนมปังมาสองก้อน');break;
    case 'board':R.store.plank-=2;R.home.boarded=1;hvMind(R,-2);L.push(nm+'ตอกไม้ปิดหน้าต่างชั้นล่าง บ้านมืดลงแต่ปลอดภัยขึ้น');break;
    case 'trap':R.store.plank-=1;R.home.trap=1;L.push(nm+'ทำกับดักหนูวางไว้ในห้องเก็บของ');break;
    case 'soup':R.store.food-=1;R.store.wood-=1;ate.forEach(a=>R.fam[a].full=Math.min(100,R.fam[a].full+15));L.push(nm+'ต้มซุปจากขนมปังแข็งกับผักที่เหลือ ทุกคนอิ่มนานขึ้น');break;
    case 'care':{const s=hvAlive(R).filter(a=>a!==k&&R.fam[a].inf>=2&&R.fam[a].inf<4);s.forEach(a=>{R.fam[a].mind=Math.min(100,R.fam[a].mind+8)});P.exp+=s.length?28:0;if(s.length&&R.store.herb>0){R.store.herb--;L.push(nm+'นั่งข้างเตียงคนป่วยทั้งวัน ต้มสมุนไพรให้ดม')}else if(s.length)L.push(nm+'นั่งข้างเตียงคนป่วยทั้งวัน');break}
    case 'burn':R.store.wood-=1;R.home.dirty=0;R.home.bedBurnt=1;L.push(nm+'เผาฟูกกับผ้าห่มของคนป่วยในลานหลังบ้าน');break;
    case 'clean':hvMind(R,3);R.home.dirty=Math.max(0,(R.home.dirty||0)-.5);L.push(nm+'ปัดกวาดบ้านจนทั่ว');break}
  P.tired=Math.min(100,P.tired)}
  const pe=R.fam.peter;if(!pe.dead&&pe.task==='home'){pe.mind=Math.min(100,pe.mind+4);pe.tired=Math.max(0,pe.tired-15);L.push('ปีเตอร์อยู่ช่วยแม่ที่บ้าน และเล่นกับ'+hvDogN(R)+'ในลาน');R.dog.trust=Math.min(100,R.dog.trust+2)}
  return L}
/* every night: food, water, the fire, rest */
function hvUpkeep(R){const L=[];const al=hvAlive(R);al.forEach(k=>{const P=R.fam[k];P.full=Math.max(0,Math.min(100,P.full-28+(P.ate?32:0)));if(P.full<15)P.mind=Math.max(0,P.mind-8);P.tired=Math.max(0,P.tired-35);P.ate=false});
  if(R.store.water>0)R.store.water--;else{al.forEach(k=>{R.fam[k].tired=Math.min(100,R.fam[k].tired+15)});hvMind(R,-6);L.push('น้ำหมดบ้าน ทุกคนคอแห้งทั้งคืน')}
  if(R.store.wood>0){R.store.wood--;R.home.fire=1}else{R.home.fire=0;hvMind(R,-3);L.push('ไม่มีฟืนก่อไฟ บ้านเย็นและมืด')}
  if(al.some(k=>R.fam[k].full<10))L.push('มีคนในบ้านหิวจนนอนไม่หลับ');R.dog.trust=Math.min(100,R.dog.trust+1);return L}
/* what came back from the street */
function hvLifeReturn(R,res){const P=R.fam.peter;const map={bread:'food',herb:'herb',wood:'wood',plank:'plank'};const got=[];for(const k in res.inv){R.store[map[k]||k]=(R.store[map[k]||k]||0)+res.inv[k];got.push(HVITEM[k].n+(res.inv[k]>1?' ×'+res.inv[k]:''))}
  P.full=res.full;P.tired=res.tired;P.mind=res.mind;P.exp+=res.exp;R.dog.trust=Math.min(100,R.dog.trust+(res.flags.pet?4:0)+2);
  if(res.window&&res.window!=='ask'){R.flags.windowDone=res.window;if(res.window==='given')hvLater(R,HVCAL[R.di]+3,'window_gift')}if(res.flags.corpse)R.flags.corpse=1;
  R.streetNote='ปีเตอร์กลับถึงบ้าน'+(got.length?' พร้อม'+got.join(' ')+' ':' มือเปล่า ')+(res.flags.corpse?'· เขาไม่ยอมเล่าว่าเจออะไรมา':'');R.phase='evening';hvRunSave(R)}
