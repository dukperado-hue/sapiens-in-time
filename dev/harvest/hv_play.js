/* ===================== The Last Harvest · things to do on the street: search, send the dog, one knock at a window (v0.51, Thai only) =====================
   Story data (places, what they hold, words) is kept apart from the drawing code below it, so content can grow without touching the pictures.
   Nothing here says which choice is right; the player sees what happens and the notes at the end of a chapter explain. */
const HVITEM={bread:{n:'เศษขนมปัง',tip:'กินแล้วอิ่มขึ้น หรือแบ่งให้หมาก็ได้'},wood:{n:'ฟืน',tip:'เก็บไว้ให้แม่ก่อไฟ (ใช้ได้ในบ้าน ขั้นต่อไป)'},herb:{n:'สมุนไพร',tip:'ดมแล้วใจสงบลง แต่ไม่ได้กันโรค'},plank:{n:'ไม้กระดาน',tip:'พ่อใช้ซ่อมบ้านหรือตีปิดหน้าต่างได้ (ขั้นต่อไป)'}};
const HVBAG=6;
const HVSPOT=[
  {k:'crates',x:560,kind:'search',n:'กองลังไม้พัง',dur:1.4,loot:[['plank',1],['wood',1]],say:'ปีเตอร์งัดลังที่พังออกทีละแผ่น เหมือนที่เห็นพ่อทำ'},
  {k:'stall',x:1000,kind:'search',n:'แผงลอยร้าง',dur:1.2,loot:[['bread',1]],say:'ใต้ผ้าคลุมแผงมีขนมปังแข็งๆ ตกอยู่ เจ้าของไม่กลับมาหลายวันแล้ว'},
  {k:'door',x:1400,kind:'search',n:'ประตูบ้านที่ถูกตอกไม้ปิด',dur:1.8,loot:[['plank',1],['herb',1]],say:'ปีเตอร์ดึงตะปูออกหนึ่งตัว ไม้แผ่นหนึ่งหลุดลงมา หลังประตูมีช่อสมุนไพรแห้งแขวนอยู่'},
  {k:'cart',x:1760,kind:'dog',n:'โพรงใต้ซากเกวียน',loot:[['bread',1]],say:'ช่องแคบเกินกว่าปีเตอร์จะมุดเข้าไป'},
  {k:'rats',x:1990,kind:'rats',n:'ฝูงหนูกลางทาง',say:'หนูเต็มทาง ปีเตอร์ไม่อยากเดินผ่าน'},
  {k:'window',x:2110,kind:'moral',n:'บ้านที่มีคนเคาะหน้าต่าง'},
  {k:'home',x:2290,kind:'home',n:'บ้านของปีเตอร์'}];
/* ---------- small vector icons for the bag ---------- */
function hvIcon(x,k,s){x.save();x.scale(s/40,s/40);x.lineJoin='round';x.lineCap='round';
  if(k==='bread'){hvEll(x,20,23,15,9);hvInk(x,'#c98a44',2.4);x.strokeStyle='#7a4a20';x.lineWidth=1.8;[[13,18,17,26],[19,16,23,25],[25,17,29,25]].forEach(([a,b,c,d])=>{x.beginPath();x.moveTo(a,b);x.lineTo(c,d);x.stroke()});hvEll(x,16,19,5,2);x.fillStyle='#e8b070';x.fill()}
  else if(k==='wood'){[[8,24,32,30],[10,15,30,21]].forEach(([a,b,c,d],i)=>{x.beginPath();x.moveTo(a,b);x.lineTo(c,b-2);x.lineTo(c,d-2);x.lineTo(a,d);x.closePath();hvInk(x,i?'#8a5a34':'#7a4a2a',2.2);hvEll(x,c,(b+d)/2-2,3,3.2);hvInk(x,'#d8b080',1.6)})}
  else if(k==='herb'){x.strokeStyle='#3b5a2a';x.lineWidth=2.2;x.beginPath();x.moveTo(20,34);x.quadraticCurveTo(19,20,22,8);x.stroke();[[17,26,-1],[23,20,1],[17,15,-1],[23,11,1]].forEach(([a,b,d])=>{x.save();x.translate(a,b);x.rotate(d*.7);hvEll(x,d*4,0,5,2.6);hvInk(x,'#7aa858',1.4);x.restore()});x.beginPath();x.moveTo(15,33);x.lineTo(25,33);x.strokeStyle='#a0703a';x.lineWidth=3;x.stroke()}
  else if(k==='plank'){x.save();x.translate(20,20);x.rotate(-.35);hvRRect(x,-16,-5,32,10,2);hvInk(x,'#c49058',2.2);x.strokeStyle='#8a5a30';x.lineWidth=1;[-2,2].forEach(y=>{x.beginPath();x.moveTo(-13,y);x.quadraticCurveTo(0,y+1.5,13,y);x.stroke()});x.fillStyle='#5a3a20';x.fillRect(-12,-1,2,2);x.fillRect(10,-1,2,2);x.restore()}
  x.restore()}
/* ---------- the places drawn on the street (play layer, behind Peter) ---------- */
function hvDrawSpots(x,S,t,rg){for(const sp of S.spots){if(sp.x<rg.x0-160||sp.x>rg.x1+160)continue;const X=sp.x,G=HV.GY+4;
  if(sp.k==='crates'){[[-30,0,-.08],[2,-2,.12],[-14,-26,.3]].forEach(([a,b,r],i)=>{if(sp.done&&i===2)return;x.save();x.translate(X+a,G+b);x.rotate(r);hvRRect(x,-15,-26,30,26,2);hvInk(x,i%2?'#a07040':'#8a5a34',2.2);x.strokeStyle=HV.INK;x.lineWidth=1.4;x.beginPath();x.moveTo(-15,-13);x.lineTo(15,-13);x.moveTo(-15,-26);x.lineTo(15,0);x.stroke();if(i===0){x.beginPath();x.moveTo(6,-26);x.lineTo(10,-34);x.lineTo(14,-26);x.stroke()}x.restore()});
    if(!sp.done){x.save();x.translate(X+18,G-4);x.rotate(.6);hvRRect(x,-14,-3,28,6,1);hvInk(x,'#b88850',1.6);x.restore()}}
  else if(sp.k==='stall'){x.fillStyle='#5a3a24';x.fillRect(X-46,G-74,4,74);x.fillRect(X+42,G-74,4,74);for(let i=0;i<6;i++){const sag=Math.sin(i/5*Math.PI)*6;hvPath(x,[X-48+i*16,G-80+sag*.3,X-32+i*16,G-80+sag*.3,X-32+i*16+(i===3?6:0),G-66+sag+(i===3?10:0),X-48+i*16,G-66+sag]);hvInk(x,i%2?'#e8dcc0':'#9a4a3a',1.4)}
    hvRRect(x,X-50,G-34,100,9,2);hvInk(x,'#8a6040',2);hvPath(x,[X-44,G-25,X+44,G-25,X+40,G-6,X-40,G-6]);hvInk(x,'#c8b490',1.8);x.strokeStyle='rgba(60,40,30,.5)';x.lineWidth=1;for(let i=-36;i<40;i+=8){x.beginPath();x.moveTo(X+i,G-24);x.lineTo(X+i+3,G-7);x.stroke()}
    if(!sp.done){hvEll(x,X+10,G-36,7,4);hvInk(x,'#c98a44',1.6)}hvEll(x,X-20,G-37,5,3);hvInk(x,'#7a7060',1.4)}
  else if(sp.k==='door'){x.save();hvRRect(x,X-50,G-128,100,128,3);hvInk(x,'#e2cfa8',2.4);x.clip();x.strokeStyle='rgba(90,60,40,.35)';x.lineWidth=1;for(let i=-60;i<60;i+=4){x.beginPath();x.moveTo(X+i,G-128);x.lineTo(X+i+30,G-98);x.stroke()}x.restore();
    hvRRect(x,X-26,G-104,52,104,22);hvInk(x,'#5a3a26',2.4);x.strokeStyle='rgba(30,16,10,.5)';x.lineWidth=1.2;for(let i=-20;i<26;i+=8){x.beginPath();x.moveTo(X+i,G-96);x.lineTo(X+i,G-2);x.stroke()}
    const boards=sp.done?[[0,-70,.3],[0,-30,-.25]]:[[0,-80,.35],[0,-50,-.3],[0,-22,.25]];boards.forEach(([a,b,r])=>{x.save();x.translate(X+a,G+b);x.rotate(r);hvRRect(x,-36,-6,72,12,2);hvInk(x,'#a8804c',2);x.fillStyle='#2a1a10';x.fillRect(-31,-1,2.5,2.5);x.fillRect(29,-1,2.5,2.5);x.restore()});
    x.save();x.translate(X-36,G-90);x.rotate(.1);x.lineWidth=2.6;x.strokeStyle='#e8e0d0';x.beginPath();x.moveTo(-8,-8);x.lineTo(8,8);x.moveTo(8,-8);x.lineTo(-8,8);x.stroke();x.restore()}
  else if(sp.k==='cart'){hvEll(x,X+4,G-4,30,8);x.fillStyle='#0e0806';x.fill();if(!sp.done){const g=.5+.5*Math.sin(t*3);x.globalAlpha=g;hvEll(x,X+12,G-6,2.2,1.6);x.fillStyle='#fff2c0';x.fill();x.globalAlpha=1}
    x.save();x.translate(X,G-14);x.rotate(-.16);hvRRect(x,-56,-30,104,18,2);hvInk(x,'#7a5030',2.4);x.strokeStyle=HV.INK;x.lineWidth=1.4;for(let i=-44;i<44;i+=14){x.beginPath();x.moveTo(i,-30);x.lineTo(i,-12);x.stroke()}x.restore();
    x.save();x.translate(X-48,G-8);x.rotate(.9);hvEll(x,0,0,20,20);x.lineWidth=5;x.strokeStyle=HV.INK;x.stroke();x.lineWidth=2.4;x.strokeStyle='#7a5030';x.stroke();for(let a=0;a<6;a+=1.2){x.beginPath();x.moveTo(0,0);x.lineTo(Math.cos(a)*18,Math.sin(a)*18);x.lineWidth=2;x.strokeStyle='#5a3a20';x.stroke()}x.restore();
    if(sp.rustle>0){for(let i=0;i<5;i++){const a=t*7+i;x.globalAlpha=.6*sp.rustle;hvEll(x,X+4+Math.cos(a)*22,G-12-Math.abs(Math.sin(a*1.3))*12,2,2);x.fillStyle='#b8a080';x.fill()}x.globalAlpha=1}}
  else if(sp.k==='rats'){if(!sp.cleared){for(let i=0;i<7;i++){const a=t*(1.4+i*.17)+i*2.1,rx=X+Math.cos(a)*(18+i*5),ry=G+22+Math.sin(a*1.7)*5;hvRat(x,rx,ry,Math.cos(a+1.57)>0?-1:1,t+i,.9)}}
    for(const r of (sp.flee||[]))hvRat(x,r.x,r.y,r.d,t,.9)}
  else if(sp.k==='home'){/* Peter's own house: the carpenter's sign, a warm door */const L=X-62,T=G-170;hvRRect(x,L,T,124,170,3);hvInk(x,'#efd8ae',2.4);x.save();hvRRect(x,L,T,124,170,3);x.clip();x.strokeStyle='#5a3a28';x.lineWidth=4;[T+60,T+120].forEach(y=>{x.beginPath();x.moveTo(L,y);x.lineTo(L+124,y);x.stroke()});x.beginPath();x.moveTo(L,T+60);x.lineTo(L+40,T+120);x.moveTo(L+40,T+60);x.lineTo(L,T+120);x.stroke();x.restore();
    hvPath(x,[L-10,T+4,X,T-44,L+134,T+4]);hvInk(x,'#a85a3a',2.6);hvRRect(x,X-8,G-70,34,70,14);hvInk(x,'#6a4428',2.4);hvEll(x,X+20,G-36,2,2);x.fillStyle='#d8b060';x.fill();
    hvRRect(x,L+16,T+76,26,22,3);hvInk(x,'#ffd890',2);x.strokeStyle=HV.INK;x.lineWidth=1.6;x.beginPath();x.moveTo(L+29,T+76);x.lineTo(L+29,T+98);x.stroke();
    x.beginPath();x.moveTo(X-30,G-120);x.lineTo(X+10,G-120);x.lineWidth=2;x.stroke();hvRRect(x,X-26,G-115,32,18,3);hvInk(x,'#d8b070',2);x.save();x.translate(X-10,G-106);x.rotate(-.3);x.fillStyle='#7a4a2a';x.fillRect(-10,-2,16,4);x.fillRect(4,-4,5,8);x.restore()}
  else if(sp.k==='window'){const L=X-80,T=G-196;x.save();hvRRect(x,L,T,160,196,3);hvInk(x,'#ead6b0',2.4);x.clip();x.strokeStyle='#5a3a28';x.lineWidth=4;[T+96,T+140].forEach(y=>{x.beginPath();x.moveTo(L,y);x.lineTo(L+160,y);x.stroke()});[L+40,L+120].forEach(c=>{x.beginPath();x.moveTo(c,T);x.lineTo(c,T+196);x.stroke()});
      x.strokeStyle='rgba(90,60,40,.3)';x.lineWidth=1;for(let i=0;i<30;i++){const a=L+120+(i%6)*7,b=T+(i/6|0)*36;x.beginPath();x.moveTo(a,b);x.lineTo(a+18,b+30);x.stroke()}x.restore();
    hvPath(x,[L-10,T+4,X,T-40,L+170,T+4]);hvInk(x,'#9a5038',2.6);hvRRect(x,X+44,G-62,26,62,10);hvInk(x,'#5a3a26',2.2);
    /* the window, the woman behind it: high on the wall, so Peter never hides it */const wx=X-34,wy=T+34;hvRRect(x,wx-26,wy-2,52,46,4);hvInk(x,sp.state==='left'?'#2a2430':'#4a3a40',2.4);
    if(sp.state!=='left'){x.save();hvRRect(x,wx-24,wy,48,42,3);x.clip();const tilt=sp.state==='given'?-.12:Math.sin(t*.8)*.04;x.translate(wx-2,wy+30);x.rotate(tilt);hvEll(x,0,0,13,13);hvInk(x,'#d8d0bc',2);hvPath(x,[-15,-3,-12,-15,0,-19,12,-15,15,-3,10,-9,-10,-9]);hvInk(x,'#6a5a7a',1.6);
      hvEll(x,-4,1,3.6,3.2);x.fillStyle='rgba(90,80,100,.45)';x.fill();hvEll(x,5,1,3.6,3.2);x.fill();hvEll(x,-4,1,1.5,2);x.fillStyle='#2a170e';x.fill();hvEll(x,5,1,1.5,2);x.fill();
      x.lineWidth=1.4;x.strokeStyle='#2a170e';x.beginPath();x.moveTo(-7,-4.5);x.lineTo(-1.5,-6.5);x.moveTo(8,-4.5);x.lineTo(2.5,-6.5);x.stroke();x.restore();
      if(sp.state!=='given'){const k=Math.max(0,Math.sin(t*5))*3;hvEll(x,wx+14,wy+20-k,4.6,4.6);hvInk(x,'#d8d0bc',1.6)}x.restore()}
    x.strokeStyle='rgba(255,255,255,.35)';x.lineWidth=1.2;x.beginPath();x.moveTo(wx-18,wy+8);x.lineTo(wx-8,wy+2);x.moveTo(wx-18,wy+16);x.lineTo(wx-2,wy+4);x.stroke();x.strokeStyle=HV.INK;x.lineWidth=2;x.beginPath();x.moveTo(wx,wy-2);x.lineTo(wx,wy+44);x.moveTo(wx-26,wy+20);x.lineTo(wx+26,wy+20);x.stroke();
    if(sp.state==='left'){x.fillStyle='#4a3a3a';x.fillRect(wx-24,wy,48,42);x.strokeStyle=HV.INK;x.lineWidth=1.2;for(let i=-20;i<24;i+=6){x.beginPath();x.moveTo(wx+i,wy);x.lineTo(wx+i,wy+42);x.stroke()}}}}}
/* what keeps its colour after the plague fades it: the warm light in the window that was helped, the balloon of what is asked */
function hvSpotsLoved(x,S,t){const sp=S.spots.find(s=>s.k==='window');if(!sp)return;const X=sp.x,G=HV.GY+4,wx=X-34,wy=G-196+34;
  if(sp.state==='given'){const g=x.createRadialGradient(wx,wy+20,2,wx,wy+20,60);g.addColorStop(0,'rgba(255,200,110,.75)');g.addColorStop(1,'rgba(255,170,80,0)');x.fillStyle=g;x.fillRect(wx-60,wy-40,120,120);x.globalAlpha=.55;hvRRect(x,wx-24,wy,48,42,3);x.fillStyle='#ffd890';x.fill();x.globalAlpha=1}
  if(sp.state==='ask'&&sp.seen){const bx=wx+34,by=wy-34+Math.sin(t*2)*2;x.save();hvEll(x,bx,by,19,16);hvInk(x,'#f8ecd0',2.2);hvPath(x,[bx-12,by+10,bx-22,by+24,bx-4,by+14]);hvInk(x,'#f8ecd0',2.2);hvEll(x,bx,by,17,14);x.fillStyle='#f8ecd0';x.fill();
    x.translate(bx-12,by-12);hvIcon(x,Math.floor(t/1.6)%2?'herb':'bread',24);x.restore()}}
/* the bubble above Peter's head when there is something to do here */
function hvPrompt(x,S,t,sp){if(!sp||S.busy||S.auto||sp.kind==='moral'||(sp.kind==='search'&&sp.done))return;const P=S.p,X=P.x+3,Y=HV.GY-128+Math.sin(t*3)*2;x.save();hvEll(x,X,Y,13,12);hvInk(x,'#f8ecd0',2.2);x.translate(X,Y);x.lineWidth=2.2;x.strokeStyle=HV.INK;x.fillStyle=HV.INK;
  if(sp.kind==='dog'||sp.kind==='rats'){hvEll(x,0,3,4.4,3.6);x.fill();[[-6,-2],[-2,-6],[2,-6],[6,-2]].forEach(([a,b])=>{hvEll(x,a,b,1.9,2.3);x.fill()})}
  else if(sp.kind==='moral'){hvEll(x,-1,1,7,5);x.stroke();x.beginPath();x.moveTo(5,-1);x.lineTo(8,-5);x.stroke()}
  else{x.beginPath();x.arc(-1.5,-1.5,5.2,0,7);x.stroke();x.beginPath();x.moveTo(2.4,2.4);x.lineTo(7,7);x.lineWidth=3;x.stroke()}x.restore()}
/* icons for the notebook buttons (drawn, so they look the same on every phone) */
function hvUiIcon(x,k){if(HVITEM[k])return hvIcon(x,k,48);x.save();x.scale(48/40,48/40);x.lineCap='round';x.lineJoin='round';x.strokeStyle=HV.INK;x.fillStyle=HV.INK;x.lineWidth=3;
  if(k==='search'){x.beginPath();x.arc(17,17,9,0,7);x.stroke();x.lineWidth=4.5;x.beginPath();x.moveTo(24,24);x.lineTo(33,33);x.stroke()}
  else if(k==='paw'){hvEll(x,20,25,7,6);x.fill();[[10,16],[16,10],[24,10],[30,16]].forEach(([a,b])=>{hvEll(x,a,b,3,3.8);x.fill()})}
  else if(k==='walk'){hvEll(x,22,8,4,4);x.fill();x.beginPath();x.moveTo(21,13);x.lineTo(18,24);x.lineTo(12,34);x.moveTo(18,24);x.lineTo(25,34);x.moveTo(20,16);x.lineTo(28,21);x.moveTo(20,16);x.lineTo(13,20);x.stroke()}
  else if(k==='home'){hvPath(x,[6,20,20,7,34,20]);x.stroke();x.strokeRect(10,19,20,15);x.fillRect(18,25,5,9)}
  x.restore()}
/* little sounds: a knock, a bark, a found thing */
const hvSnd=(()=>{let ac=null;return k=>{try{if(+store.get('sit.snd',2)===0)return;const C=window.AudioContext||window.webkitAudioContext;if(!C)return;ac=ac||new C();const n=ac.currentTime,o=ac.createOscillator(),g=ac.createGain();o.connect(g);g.connect(ac.destination);
  if(k==='knock'){o.type='triangle';o.frequency.setValueAtTime(140,n);g.gain.setValueAtTime(.12,n);g.gain.exponentialRampToValueAtTime(.0001,n+.08);o.start(n);o.stop(n+.1)}
  else if(k==='bark'){o.type='sawtooth';o.frequency.setValueAtTime(420,n);o.frequency.exponentialRampToValueAtTime(240,n+.12);g.gain.setValueAtTime(.06,n);g.gain.exponentialRampToValueAtTime(.0001,n+.15);o.start(n);o.stop(n+.16)}
  else{o.type='sine';o.frequency.setValueAtTime(660,n);o.frequency.setValueAtTime(880,n+.08);g.gain.setValueAtTime(.05,n);g.gain.exponentialRampToValueAtTime(.0001,n+.3);o.start(n);o.stop(n+.32)}}catch(e){}}})();
/* ---------- the rules ---------- */
function hvPlayInit(S){S.spots=HVSPOT.map(s=>Object.assign({},s,{done:false,state:s.kind==='moral'?'ask':null,flee:[]}));S.inv={};S.full=78;S.tired=10;S.mind=70;S.exp=0;S.fx=[];S.happyT=0;S.flags={};S.busy=null;S.lock=0}
const hvBagN=S=>Object.values(S.inv).reduce((a,b)=>a+b,0);
function hvAdd(S,k,n,X){const room=HVBAG-hvBagN(S),m=Math.min(room,n);if(m>0){S.inv[k]=(S.inv[k]||0)+m;hvFloat(S,'+ '+HVITEM[k].n,X)}if(m<n)hvFloat(S,'กระเป๋าเต็ม',X,1);return m}
function hvFloat(S,txt,X,warn){S.fx.push({txt,x:X==null?S.p.x:X,y:HV.GY-62-S.fx.filter(f=>f.t<.6).length*20,t:0,warn})}
function hvNear(S){let b=null,bd=64;for(const sp of S.spots){const d=Math.abs(sp.x-S.p.x);if(d<bd&&!(sp.kind==='search'&&sp.done&&sp.empty)){bd=d;b=sp}}return b}
/* the main action at the place Peter stands */
function hvAct(S,api){if(S.busy||S.lock>0)return;const sp=hvNear(S);if(!sp)return;
  if(sp.kind==='search'){if(sp.done){hvFloat(S,'ไม่เหลืออะไรแล้ว',sp.x,1);sp.tries=(sp.tries||0)+1;S.lock=.25;return}S.busy={k:'search',sp,t:0,dur:sp.dur};S.p.dir=Math.sign(sp.x-S.p.x)||S.p.dir;api.say(sp.say);return}
  if(sp.kind==='dog'){api.say(sp.done?'ใต้เกวียนไม่มีอะไรเหลือแล้ว':sp.say+' · ลองสั่งหมาดู');return}
  if(sp.kind==='rats'){api.say(sp.cleared?'ทางโล่งแล้ว':sp.say+' · ลองสั่งหมาเห่าไล่');return}
  if(sp.kind==='moral'&&sp.state==='ask')hvGive(S,api);if(sp.kind==='home')api.home()}
/* send the dog: into the hole under the cart, or at the rats */
function hvDogCmd(S,api,mode){if(S.busy||S.dog.task||S.lock>0)return;const sp=hvNear(S)||{},D=S.dog;
  const ratSp=S.spots.find(s=>s.k==='rats'&&!s.cleared&&Math.abs(s.x-S.p.x)<220),roam=S.rats.filter(r=>Math.abs(r.x-S.p.x)<220);
  if(sp.kind==='dog'&&!sp.done&&mode!=='bark'){D.task={k:'fetch',sp,ph:'go',t:0};api.say('ปีเตอร์ชี้ไปที่ช่องใต้เกวียน หมามุดเข้าไปทันที');return}
  if((ratSp||roam.length)&&mode!=='fetch'){D.task={k:'bark',sp:ratSp,ph:'go',t:0};api.say('หมาวิ่งไปเห่าใส่ฝูงหนู');return}
  D.task={k:'sit',ph:'sit',t:0};api.say('หมานั่งลงแล้วมองหน้าปีเตอร์ ไม่มีอะไรให้ทำตรงนี้')}
/* the woman at the window asks for bread or herbs */
/* Peter first walks to stand beside the window, so the woman behind it stays in sight */
const hvBeside=sp=>sp.x+46;
function hvGive(S,api,item){const sp=S.spots.find(s=>s.k==='window');if(!sp||sp.state!=='ask'||S.busy||S.auto)return;const k=item&&S.inv[item]?item:S.inv.bread?'bread':S.inv.herb?'herb':null;if(!k){api.say('ปีเตอร์ไม่มีอะไรจะให้ ถ้าหาขนมปังหรือสมุนไพรได้ ค่อยกลับมา');return}
  S.auto={x:hvBeside(sp),face:-1,then:()=>{S.busy={k:'give',sp,t:0,dur:1.3,item:k}}}}
function hvLeave(S,api,walk){const sp=S.spots.find(s=>s.k==='window');if(!sp||sp.state!=='ask')return;if(walk){if(S.busy||S.auto)return;S.auto={x:hvBeside(sp)+70,face:1,slow:1,then:()=>hvLeave(S,api)};return}sp.state='left';S.mind=Math.max(0,S.mind-20);S.plague=Math.min(1,(S.plague||0)+.15);S.flags.left_window=1;api.say('ปีเตอร์ก้มหน้าแล้วเดินต่อ เสียงเคาะหน้าต่างเงียบไป ม่านในบ้านหลังนั้นถูกดึงปิด');api.mood()}
function hvPlayTick(S,dt,t,api){const P=S.p,D=S.dog;S.lock=Math.max(0,S.lock-dt);S.happyT=Math.max(0,S.happyT-dt);
  /* body: hunger slowly, tired when running, the heart follows both */
  /* walking is moving: Peter is pulled along by S.auto when he goes to stand beside something */
  if(S.auto&&!S.busy){const a=S.auto,d=a.x-P.x;if(Math.abs(d)<3){P.x=a.x;P.moving=false;if(a.face)P.dir=a.face;S.auto=null;a.then&&a.then()}else{P.dir=Math.sign(d);P.x+=Math.sign(d)*Math.min(Math.abs(d),(a.slow?70:130)*dt);P.walk+=dt*(a.slow?6:9);P.moving=true}}
  S.full=Math.max(0,S.full-dt*(P.moving?.2:.12));S.tired=Math.max(0,Math.min(100,S.tired+(S.busy&&S.busy.k==='search'?dt*3:P.moving&&api.running()?dt*6:P.moving?dt*1.6:-dt*1.5)));if(S.full<25)S.mind=Math.max(0,S.mind-dt*.4);
  /* rats near Peter: the hidden risk goes up */
  const rs=S.spots.find(s=>s.k==='rats');if(rs&&!rs.cleared&&Math.abs(rs.x-P.x)<80)S.exp+=dt*6;for(const r of S.rats)if(Math.abs(r.x-P.x)<40)S.exp+=dt*3;
  /* a search takes time; Peter crouches and works */
  if(S.busy){const b=S.busy;b.t+=dt;if(b.t>=b.dur){if(b.k==='search'){const sp=b.sp;sp.done=true;let got=0;for(const [k,n] of sp.loot)got+=hvAdd(S,k,n,sp.x);if(got)hvSnd('get');S.mind=Math.min(100,S.mind+2)}
      else if(b.k==='give'){const sp=b.sp;S.inv[b.item]--;if(!S.inv[b.item])delete S.inv[b.item];sp.state='given';S.mind=Math.min(100,S.mind+20);S.happyT=4;S.flags.gave_window=1;hvSnd('get');api.say('ปีเตอร์ยื่น'+HVITEM[b.item].n+'ผ่านช่องหน้าต่าง หญิงคนนั้นแนบมือกับกระจก แล้วตะเกียงในบ้านก็ถูกจุดขึ้น')}
      S.busy=null;S.lock=.25;api.mood()}}
  /* the window: knocking when Peter is close; walking away with something to give counts as a choice */
  const w=S.spots.find(s=>s.k==='window');if(w&&w.state==='ask'){const d=Math.abs(w.x-P.x);if(d<300){w.seen=1;w.kt=(w.kt||0)+dt;if(w.kt>1.3){w.kt=0;hvSnd('knock');setTimeout(()=>hvSnd('knock'),160)}}if(w.seen&&d>420&&(S.inv.bread||S.inv.herb)&&w.near)hvLeave(S,api);if(d<90)w.near=1}
  /* the dog's errands */
  const T=D.task;if(T){T.t+=dt;const goTo=(tx,v)=>{const dd=tx-D.x;if(Math.abs(dd)<6)return true;D.dir=Math.sign(dd);D.x+=Math.sign(dd)*Math.min(Math.abs(dd),v*dt);D.walk+=dt*12;D.moving=true;return false};
    if(T.k==='fetch'){if(T.ph==='go'){if(goTo(T.sp.x+4,240)){T.ph='in';T.t=0;D.hide=1;D.moving=false}}else if(T.ph==='in'){T.sp.rustle=1;if(T.t>1.6){T.sp.rustle=0;D.hide=0;T.ph='back';D.carry=T.sp.loot[0][0];T.sp.done=true}}else if(goTo(P.x-P.dir*30,220)){for(const [k,n] of T.sp.loot)hvAdd(S,k,n,D.x);hvSnd('get');D.carry=null;D.task=null;D.happy=2;api.say('หมาคาบ'+HVITEM[T.sp.loot[0][0]].n+'ออกมาวางที่เท้าปีเตอร์ แล้วกระดิกหาง')}}
    else if(T.k==='bark'){const tx=T.sp?T.sp.x-50*Math.sign(T.sp.x-P.x||1):P.x+P.dir*60;if(T.ph==='go'){if(goTo(tx,260)){T.ph='bark';T.t=0}}else if(T.ph==='bark'){D.bark=1;D.moving=false;if((T.t*4|0)!==(T._b||0)){T._b=T.t*4|0;hvSnd('bark')}
        if(T.sp&&!T.sp.cleared&&T.t>.4){T.sp.cleared=true;for(let i=0;i<7;i++)T.sp.flee.push({x:T.sp.x+(i-3)*10,y:HV.GY+24+(i%3)*4,d:i%2?1:-1,v:220+i*30})}S.rats.forEach(r=>{r.d=Math.sign(r.x-D.x)||1;r.v=420});S.ratCalm=45;if(T.t>1.2){D.bark=0;T.ph='back'}}
      else if(goTo(P.x-P.dir*40,200)){D.task=null;api.say('หนูวิ่งหนีไปจนหมด หมาเดินกลับมาอย่างภูมิใจ')}}
    else if(T.k==='sit'){D.sit=1;if(T.t>1.5){D.sit=0;D.task=null}}}
  for(const s of S.spots)if(s.flee){s.flee.forEach(r=>r.x+=r.d*r.v*dt);s.flee=s.flee.filter(r=>Math.abs(r.x-s.x)<500)}S.ratCalm=Math.max(0,(S.ratCalm||0)-dt);
  S.fx.forEach(f=>f.t+=dt);S.fx=S.fx.filter(f=>f.t<2.2)}
/* floating words drawn over the picture */
function hvDrawFx(x,S,t){x.save();x.font='bold 12px Pridi,"Noto Serif Thai",serif';x.textAlign='center';x.textBaseline='middle';for(const f of S.fx){const a=Math.min(1,(2.2-f.t)*1.5),y=f.y-f.t*16;const w=x.measureText(f.txt).width+14;x.globalAlpha=a;hvRRect(x,f.x-w/2,y-9,w,18,7);hvInk(x,f.warn?'#f0d8c8':'#f8ecd0',1.8);x.fillStyle=f.warn?'#8a2a1a':HV.INK;x.fillText(f.txt,f.x,y+1)}x.restore()}
