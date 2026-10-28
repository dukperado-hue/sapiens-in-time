/* ===================== plague JRPG · walking: masks you cannot leave, the harbour of Caffa, and the prologue (v0.48) ===================== */
const PRO48=/*PROLOGUE_JSON*/null;
const NPC48=PRO48.npc;
/* walkable mask: a list of [from,to] on the ground line; the player is always pulled back inside */
function jrClamp48(mask,px){let best=null,bd=1e9;for(const [a,b] of mask){if(px>=a&&px<=b)return px;const c=px<a?a:b,d=Math.abs(px-c);if(d<bd){bd=d;best=c}}return best==null?px:best}
const jrInMask48=(mask,px)=>mask.some(([a,b])=>px>=a&&px<=b);
function jrHorse48(x,X,by,t){const s=Math.sin(t*1.3)>.8?1:0;G45R(x,X-14,by-20,26,10,'#0a0710');G45R(x,X-13,by-19,24,8,'#7a4a2a');G45R(x,X+8,by-28,6,12,'#0a0710');G45R(x,X+9,by-27,4,11,'#7a4a2a');G45R(x,X+11,by-29-s,6,5,'#7a4a2a');G45R(x,X+15,by-27-s,1,1,'#000');
  [[-12,0],[-8,0],[4,0],[8,0]].forEach(([dx])=>{G45R(x,X+dx,by-11,3,11,'#5a3420')});G45R(x,X-16,by-19,3,9,'#2a1a10');G45R(x,X+8,by-29-s,2,5,'#2a1a10')}
/* the harbour of Caffa at night, 640 px wide */
function jrHarbour48(x,t,cam,D){g45sky(x,['#05060f','#0c1028','#1a1c38'],0,110);g45stars(x,60,48,90,t);g45moon(x,250,26,8);
  x.save();x.translate(-cam,0);const L=[];
  G45R(x,0,108,700,10,'#141a2a');g45sea(x,112,'#16284a',t,null);
  /* the warehouse */
  g45stones(x,0,40,150,112,'#6a6258',201);x.fillStyle='#3a2a24';x.beginPath();x.moveTo(-6,40);x.lineTo(75,18);x.lineTo(156,40);x.fill();G45R(x,30,108,24,44,'#2a1a10');g45win(x,100,62,10,12,true,'#2a1a10');L.push({x:105,y:68,r:30,c:'#ffb050',i:.6});
  /* the dock */
  G45R(x,0,150,462,30,'#4a3420');for(let k=0;k<462;k+=10){G45R(x,k,150,9,30,g45sh('#4a3420',((k*7)%5)/30-.05));G45R(x,k+9,150,1,30,'#2a1a10')}G45R(x,0,150,462,2,'#6a4a2a');for(let k=20;k<462;k+=60)G45R(x,k,176,4,8,'#2a1a10');
  /* crates */
  [[70,138,'#8a6a40'],[84,138,'#7a5a34'],[98,138,'#8a6a40'],[78,126,'#9a7a48'],[92,126,'#7a5a34']].forEach(([X,Y,c])=>{G45R(x,X-1,Y-1,14,14,'#1a1008');G45R(x,X,Y,12,12,c);G45R(x,X,Y+5,12,1,g45sh(c,-.35));G45R(x,X+5,Y,1,12,g45sh(c,-.35))});
  G45R(x,152,142,22,10,'#6a4a2a');G45R(x,152,142,22,2,'#8a6a40');
  /* the pen */
  for(let k=206;k<=292;k+=10)G45R(x,k,118,3,34,'#5a3a20');G45R(x,204,124,92,2,'#6a4a2a');G45R(x,204,138,92,2,'#6a4a2a');
  [[220,'#5a4a3a'],[266,'#4a3a2a']].forEach(([X,c],i)=>g45person(x,X,150,{top:c,bot:'#3a2a1a',skin:G45P.skin[2],hair:G45P.hair[0],ph:i+3,dir:i?-1:1},t));
  jrHorse48(x,312,152,t);
  /* rats */
  if(!D.flags.rat_gone)[[296,170],[304,174],[312,171]].forEach(([X,Y])=>{G45R(x,X,Y-2,6,2,'#5a5a5a');G45R(x,X+6,Y-1,4,1,'#8a6a6a')});
  /* the booth */
  G45R(x,332,104,44,48,'#5a3a20');G45R(x,330,100,48,6,'#3a2414');G45R(x,338,116,32,14,'#1a1008');G45R(x,338,128,32,3,'#6a4a2a');G45R(x,344,96,2,6,'#2a1a10');G45R(x,341,90,8,7,'#f0b040');L.push({x:345,y:94,r:60,c:'#ffb050',i:.9});
  /* the ship */
  const by=Math.sin(t*.8)*1;x.fillStyle='#2a1a10';x.beginPath();x.moveTo(468,138+by);x.lineTo(640,138+by);x.lineTo(624,160+by);x.lineTo(482,160+by);x.fill();G45R(x,470,136+by,168,4,'#4a3420');
  G45R(x,546,40+by,4,98,'#3a2a1a');G45R(x,520,58+by,56,4,'#3a2a1a');G45R(x,522,62+by,52,8,'#c8b898');G45R(x,600,70+by,2,68,'#3a2a1a');g45win(x,500,144+by,6,5,true,'#1a0a08');L.push({x:503,y:146,r:20,c:'#ffb050',i:.5});
  x.strokeStyle='#6a4a2a';x.lineWidth=3;x.beginPath();x.moveTo(440,152);x.lineTo(482,140+by);x.stroke();
  [[60,148],[200,148],[400,148]].forEach(([X,Y])=>{G45R(x,X,Y-30,2,30,'#2a1a10');G45R(x,X-3,Y-36,8,7,'#f0b040');L.push({x:X+1,y:Y-32,r:50,c:'#ffb050',i:.85})});
  x.restore();return L.map(l=>Object.assign({},l,{x:l.x-cam}))}
/* the prologue: walk, talk, switch who you are, then board */
function jrStart48(){try{PLM47.stop()}catch(e){}const D=jrLoad48();if(!PARTY48.byK[D.lead]||!PARTY48.byK[D.lead].playable)D.lead='bene';
  const UI=jrShell48(PRO48.title,()=>{try{plIntro46()}catch(e){}});const S={px:jrClamp48(PRO48.mask,PRO48.start.x),dir:1,hold:0,goto:null,busy:true,seen:{}};
  const x=UI.cv.getContext('2d');x.imageSmoothingEnabled=false;const LL={};let alive=true,last=performance.now(),t0=last;
  const lead=()=>PARTY48.byK[D.lead],other=()=>PARTY48.byK[D.lead==='bene'?'luca':'bene'];
  const near=()=>{let b=null,bd=26;for(const s of PRO48.spots){const d=Math.abs(s.x-S.px);if(d<bd){bd=d;b=s}}return b};
  const seenN=()=>PRO48.spots.filter(s=>!s.end&&(D.seen['pro.'+s.k+'.bene']||D.seen['pro.'+s.k+'.luca'])).length;
  const goalTxt=()=>{const n=seenN(),tot=PRO48.spots.filter(s=>!s.end).length;UI.goal.innerHTML='<b>เป้าหมาย</b> '+esc(PRO48.goal)+' · ดูแล้ว '+n+'/'+tot+' · ตอนนี้เล่นเป็น <b>'+esc(lead().short)+'</b>'};
  const bar=()=>{UI.bar.innerHTML='';const mk=(t,cls,down,up,click)=>{const b=document.createElement('button');b.textContent=t;if(cls)b.className=cls;if(down){b.onpointerdown=e=>{e.preventDefault();down()};b.onpointerup=b.onpointerleave=b.onpointercancel=up}if(click)b.onclick=click;UI.bar.appendChild(b);return b};
    mk('◀ เดินซ้าย','',()=>{S.hold=-1;S.goto=null},()=>{S.hold=0});mk('🔄 เป็น'+other().short,'',null,null,swap);mk('เดินขวา ▶','',()=>{S.hold=1;S.goto=null},()=>{S.hold=0});
    const h=near();const a=mk(h?(h.end?'⛵ ขึ้นเรือ':'✋ '+(h.k==='crates'||h.k==='rat'?'ดู':'คุยกับ')+' '+h.n):'เดินไปใกล้คนหรือสิ่งของ แล้วกดที่นี่','act',null,null,()=>act());a.disabled=!h};
  function swap(){if(S.busy)return;D.lead=D.lead==='bene'?'luca':'bene';jrSave48(D);goalTxt();bar();jrToast48('ตอนนี้คุณเป็น '+lead().short)}
  async function act(){const h=near();if(!h||S.busy)return;S.busy=true;S.hold=0;bar();
    if(h.end){if(seenN()<4){await jrSay48(UI,[{who:'bene',face:'w',t:'ยังขึ้นไม่ได้ ลูก้า เรายังไม่ได้ดูของกับคนให้ครบ ดูอีกหน่อย'}]);S.busy=false;bar();return}
      const lines=PRO48.ending.filter(l=>!l.needFlag||D.flags[l.needFlag]);await jrSay48(UI,lines);D.flags.prologue_done=1;D.flags.met_yusuf=D.flags.met_yusuf||0;jrSave48(D);finish();return}
    const lines=(h.by[D.lead]||[]).map(l=>Object.assign({},l));await jrSay48(UI,lines);const key='pro.'+h.k+'.'+D.lead,first=!D.seen[key];D.seen[key]=1;
    const g=(h.give||{})[D.lead];if(g&&first){if(g.journal&&!D.journal.includes(g.journal)){D.journal.push(g.journal);jrToast48('📓 ลูก้าจดลงสมุด · '+D.journal.length+' หน้า')}if(g.met){D.flags['met_'+g.met]=1;jrToast48('👥 พบ '+PARTY48.byK[g.met].short)}if(g.flag){D.flags[g.flag]=1;if(g.flag==='bribe')D.flags.secret_bene=1;if(g.flag==='luca_saw_office')D.flags.secret_luca=1}}
    if(first&&!D.seen['pro.'+h.k+'.'+(D.lead==='bene'?'luca':'bene')])setTimeout(()=>jrToast48('ลองเป็น'+other().short+' แล้วมาที่นี่อีกครั้ง เรื่องจะไม่เหมือนกัน'),900);
    jrSave48(D);S.busy=false;goalTxt();bar()}
  function finish(){alive=false;UI.bar.innerHTML='';const mk=(t,f,cls)=>{const b=document.createElement('button');b.textContent=t;if(cls)b.className=cls;b.onclick=f;UI.bar.appendChild(b)};UI.goal.innerHTML='<b>จบบทนำ</b> · ลูก้าจดไว้ '+D.journal.length+' หน้า · พบแล้ว '+['yusuf','togen'].filter(k=>D.flags['met_'+k]).length+' คน';
    mk('เล่นบทนำอีกครั้ง',()=>jrStart48());mk('👥 ดูทีม',()=>jrTeam48());mk('กลับไปหน้ากาฬโรค',()=>{document.getElementById('jr48').remove();plIntro46()},'act')}
  const key=e=>{if(!UI.el.isConnected){document.removeEventListener('keydown',key);document.removeEventListener('keyup',kup);return}if(document.querySelector('#jr48 .pane')){if(e.key==='Escape')document.querySelector('#jr48 .pane').remove();return}if(S.busy||!alive)return;
    if(e.key==='ArrowLeft'||e.key==='a'){S.hold=-1;S.goto=null}else if(e.key==='ArrowRight'||e.key==='d'){S.hold=1;S.goto=null}else if(e.key===' '||e.key==='Enter'){e.preventDefault();act()}else if(e.key==='q'||e.key==='Tab'){e.preventDefault();swap()}};
  const kup=e=>{if(['ArrowLeft','ArrowRight','a','d'].includes(e.key))S.hold=0};document.addEventListener('keydown',key);document.addEventListener('keyup',kup);
  UI.cv.onclick=e=>{if(S.busy||!alive)return;const r=UI.cv.getBoundingClientRect(),cam=Math.max(0,Math.min(PRO48.w-320,S.px-160));S.goto=jrClamp48(PRO48.mask,cam+(e.clientX-r.left)*320/r.width)};
  let lastN=null;
  const fr=now=>{if(!UI.el.isConnected){alive=false;return}const dt=Math.min(.05,(now-last)/1000);last=now;const t=(now-t0)/1000;
    if(alive&&!S.busy){if(S.hold){S.dir=S.hold;S.px+=S.hold*72*dt}else if(S.goto!=null){const d=S.goto-S.px;if(Math.abs(d)<2)S.goto=null;else{S.dir=Math.sign(d);S.px+=Math.sign(d)*Math.min(Math.abs(d),72*dt)}}S.px=jrClamp48(PRO48.mask,S.px)}
    const n=near();if(n!==lastN&&!S.busy){lastN=n;bar()}
    const cam=Math.max(0,Math.min(PRO48.w-320,S.px-160));x.clearRect(0,0,320,180);const L=jrHarbour48(x,t,cam,D);
    const NP={yusuf:{x:168,o:Object.assign({},PARTY48.byK.yusuf.look,{dir:-1,ph:2})},togen:{x:248,o:Object.assign({},PARTY48.byK.togen.look,{dir:1,ph:4})},officer:{x:356,o:Object.assign({},NPC48.officer.look,{dir:-1,ph:1,bot:'#2a2a3a'})},sailor:{x:420,o:Object.assign({},NPC48.sailor.look,{dir:-1,ph:3,bot:'#3a3a3a'})}};
    for(const k in NP){const p=NP[k];if(p.x-cam<-20||p.x-cam>340)continue;g45person(x,p.x-cam,k==='togen'?150:172,p.o,t)}
    const ot=other(),fx=S.px-S.dir*20;g45person(x,fx-cam,172,Object.assign({},ot.look,{dir:S.dir,ph:7}),S.hold||S.goto!=null?t*3:t);
    const pl=g45person(x,S.px-cam,172,Object.assign({},lead().look,{dir:S.dir,ph:5,hold:'lamp'}),S.hold||S.goto!=null?t*3:t);if(pl)L.push(pl);
    g45light(x,LL,.62,L);
    if(n&&!S.busy&&alive){x.fillStyle='rgba(10,8,16,.8)';x.font='9px "DejaVu Sans",sans-serif';const tw=x.measureText(n.n).width+12;x.fillRect(n.x-cam-tw/2,20,tw,13);x.fillStyle='#ffe2a8';x.textAlign='center';x.fillText(n.n,n.x-cam,30);x.textAlign='left';G45R(x,n.x-cam-2,36,4,4,'#ffe2a8')}
    requestAnimationFrame(fr)};requestAnimationFrame(fr);
  goalTxt();bar();(async()=>{if(!D.flags.prologue_seen_intro){await jrSay48(UI,PRO48.intro);D.flags.prologue_seen_intro=1;jrSave48(D)}S.busy=false;bar()})()}
/* a third door on the plague's opening page */
{const _i=plIntro46;plIntro46=function(){_i();try{const doors=[...document.querySelectorAll('#st42 .crs')];if(doors.length&&!document.getElementById('jr48door')){const b=document.createElement('button');b.className='crs';b.id='jr48door';b.innerHTML='<span class="ic">⚔️</span><span><b>เรื่องยาวฉบับ JRPG (ทดลอง)</b><div class="d">ทีมเจ็ดคน เริ่มจากพ่อลูกพ่อค้าเจนัวที่ท่าเรือคัฟฟา เดินสำรวจ คุย และสลับตัวละคร · ตอนนี้เล่นได้บทนำ</div></span>';b.onclick=jrStart48;doors[0].parentNode.insertBefore(b,doors[0]);
    const r=doors[0].querySelector('b');if(r&&r.textContent==='ไปเรียนรู้')r.textContent='ไปเรียนรู้ (ฉบับอ่านเร็ว)'}}catch(e){}}}
if(typeof window!=='undefined')window.__v48={jrStart48,jrClamp48,jrInMask48,PRO48,PARTY48,portrait48,jrLoad48};
