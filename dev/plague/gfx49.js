/* ===================== plague JRPG · pixel art drawn by hand: field sprites, faces, tiles (v0.49) ===================== */
const SPR49=/*SPRITES_JSON*/null;
/* colour ramps: shadows lean cool, lights lean warm, as in 16-bit art */
const c49=(()=>{const h2r=h=>{h=h.replace('#','');if(h.length===3)h=h.split('').map(c=>c+c).join('');const n=parseInt(h,16);return[(n>>16)&255,(n>>8)&255,n&255]};
  const r2h=(r,g,b)=>'#'+[r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
  const r2l=(r,g,b)=>{r/=255;g/=255;b/=255;const mx=Math.max(r,g,b),mn=Math.min(r,g,b);let h=0,s=0;const l=(mx+mn)/2;if(mx!==mn){const d=mx-mn;s=l>.5?d/(2-mx-mn):d/(mx+mn);h=mx===r?(g-b)/d+(g<b?6:0):mx===g?(b-r)/d+2:(r-g)/d+4;h*=60}return[h,s,l]};
  const l2r=(h,s,l)=>{h=((h%360)+360)%360;const c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2;let r=0,g=0,b=0;if(h<60)[r,g,b]=[c,x,0];else if(h<120)[r,g,b]=[x,c,0];else if(h<180)[r,g,b]=[0,c,x];else if(h<240)[r,g,b]=[0,x,c];else if(h<300)[r,g,b]=[x,0,c];else[r,g,b]=[c,0,x];return[(r+m)*255,(g+m)*255,(b+m)*255]};
  const toward=(h,t,k)=>{let d=((t-h+540)%360)-180;return h+d*k};
  const shift=(hex,dl,hueTo,hk,ds)=>{const [h,s,l]=r2l(...h2r(hex));return r2h(...l2r(s<.04?h:toward(h,hueTo,hk),Math.max(0,Math.min(1,s+(ds||0))),Math.max(0,Math.min(1,l+dl))))};
  const mix=(a,b,k)=>{const A=h2r(a),B=h2r(b);return r2h(A[0]+(B[0]-A[0])*k,A[1]+(B[1]-A[1])*k,A[2]+(B[2]-A[2])*k)};
  const ramp=hex=>({m:hex,d:shift(hex,-.13,255,.12,.04),dd:shift(hex,-.24,260,.2,.02),l:shift(hex,.11,48,.1,.02),ll:shift(hex,.2,52,.16,0)});
  return {ramp,mix,shift,h2r,r2h}})();
/* turn a look into the colour of every letter */
function pal49(look,ch){look=look||{};ch=ch||{};const R={},DD={s:'K',h:'J',t:'U',b:'N',c:'Q'},put=(k3,hex,skin)=>{const r=c49.ramp(hex);if(skin){r.d=c49.shift(hex,-.12,18,.35,.02);r.dd=c49.shift(hex,-.24,10,.4,0);r.l=c49.shift(hex,.06,30,.1,-.06)}R[k3[0]]=r.m;R[k3[1]]=r.d;R[k3[2]]=r.l;if(DD[k3[0]])R[DD[k3[0]]]=r.dd;R['_'+k3[0]]=r};
  put('skS',look.skin||'#e0b088',1);put('hjH',look.hair||'#3a2414');put('tuT',look.top||'#5a4a6a');put('bnB',look.dress?(look.top||'#5a4a6a'):(look.bot||'#3a3040'));put('cqC',look.hatc||look.top||'#5a4a6a');put('aA',ch.acc||'#8a6a30');put('fF',ch.shoe||'#4a2e1c');
  R.e='#1a1020';R.w='#f4ecdc';R.m=c49.mix(R.k,'#8a3030',.5);R.x='#0c0810';R.y='#ffd070';R.g='#b8b0a0';R.p='#e8dcc0';R.r='#7a3020';return R}
/* build the 16x24 grid for one person and one walk frame */
function grid49(ch,frame){const H=SPR49.head.map(r=>r.split('')),B=SPR49.bodies[ch.body||'man'];let body=B.rows.map(r=>r.split(''));
  if(frame&&B.walk&&B.walk[frame-1]){const w=B.walk[frame-1];body=body.slice(0,body.length-w.length).concat(w.map(r=>r.split('')))}
  const lay=(G,rows,y0)=>{if(!rows)return;rows.forEach((r,i)=>{const y=y0+i;if(!G[y])return;r.split('').forEach((c,x)=>{if(c==='.')return;G[y][x]=c==='x'?'.':c})})};
  if(ch.beard)lay(H,SPR49.beards[ch.beard],6);
  if(ch.hair)lay(H,SPR49.hair[ch.hair],1);
  if(ch.hat){if(ch.hat==='hood'||ch.hat==='veil'){/* cloth covers the hair behind the face */for(let y=1;y<12;y++)for(let x=0;x<8;x++)if('hjH'.includes(H[y][x]))H[y][x]='.'}lay(H,SPR49.hats[ch.hat],0)}
  if(ch.child)body.splice(3,2);
  let G=H.concat(body);if(ch.child)G=[[...'................'],[...'................']].concat(G);return G}
const rampOf49=(P,c)=>{const m={s:'_s',k:'_s',S:'_s',K:'_s',h:'_h',j:'_h',H:'_h',J:'_h',t:'_t',u:'_t',T:'_t',U:'_t',b:'_b',n:'_b',B:'_b',N:'_b',c:'_c',q:'_c',C:'_c',Q:'_c',a:'_a',A:'_a',f:'_f',F:'_f'}[c];return m?P[m]:null};
/* the outline is darker than the colour next to it, never pure black, so shapes read but stay soft */
const SPRC49={};
function sprite49(k,look,frame,extra){const ch=Object.assign({},SPR49.chars[k]||{body:'man',hair:'short'},extra||{});const key=k+'|'+JSON.stringify(look)+'|'+(frame||0)+'|'+JSON.stringify(extra||0);if(SPRC49[key])return SPRC49[key];
  const P=pal49(look,ch),G=grid49(ch,frame),W=18,Hh=G.length+2,cv=document.createElement('canvas');cv.width=W;cv.height=Hh;const x=cv.getContext('2d');
  const at=(gx,gy)=>(G[gy]&&G[gy][gx]&&G[gy][gx]!=='.')?G[gy][gx]:null;
  const rampOf=c=>rampOf49(P,c);
  for(let gy=-1;gy<=G.length;gy++)for(let gx=-1;gx<=16;gx++){const c=at(gx,gy);if(c){x.fillStyle=P[c]||'#f0f';x.fillRect(gx+1,gy+1,1,1);continue}
    const nb=[[0,1],[1,0],[-1,0],[0,-1]].map(([dx,dy])=>at(gx+dx,gy+dy)).filter(Boolean);if(!nb.length)continue;const r=rampOf(nb[0]);x.fillStyle=r?c49.mix(r.dd,'#06040a',.62):'#0a0610';x.fillRect(gx+1,gy+1,1,1)}
  return SPRC49[key]=cv}
/* draw a person standing on groundY, centred on X; walk is a phase in steps, dir 1 faces right */
function person49(x,k,look,X,gy,o){o=o||{};const fr=o.walk!=null?[0,1,0,2][Math.floor(o.walk)%4]:0;const bob=fr?0:0;const sp=sprite49(k,look,fr,o.extra);const sc=o.scale||1;
  x.save();x.translate(Math.round(X),Math.round(gy));if((o.dir||1)<0)x.scale(-1,1);
  x.fillStyle='rgba(0,0,0,.35)';x.fillRect(-7*sc,-1,14*sc,2);
  x.drawImage(sp,-9*sc,-sp.height*sc+1+bob,sp.width*sc,sp.height*sc);
  let L=null;const hy=-sp.height*sc+19*sc;
  if(o.hold==='lamp'){x.fillStyle='#3a2a1a';x.fillRect(5*sc,hy-2*sc,1,3*sc);x.fillStyle='#0a0610';x.fillRect(4*sc,hy+1*sc,4*sc,5*sc);x.fillStyle='#ffd070';x.fillRect(5*sc,hy+2*sc,2*sc,3*sc);x.fillStyle='#fff4c0';x.fillRect(5*sc,hy+3*sc,1*sc,1*sc)}
  if(o.hold==='book'){x.fillStyle='#0a0610';x.fillRect(1*sc,hy-1*sc,6*sc,5*sc);x.fillStyle='#7a3020';x.fillRect(2*sc,hy,4*sc,3*sc);x.fillStyle='#e8dcc0';x.fillRect(2*sc,hy,4*sc,1)}
  x.restore();if(o.hold==='lamp')L={x:X+(o.dir||1)*6*sc,y:gy+hy+3*sc,r:46,c:'#ffb050',i:1};return L}
/* faces for the dialogue box and the team menu: a 32x32 bust, hand-drawn layers, four moods (n h w s) */
const FACEC49={};
function face49(k,look,mood){mood=mood||'n';const key=k+'|'+JSON.stringify(look)+'|'+mood;if(FACEC49[key])return FACEC49[key];const F=SPR49.face,ch=Object.assign({},(SPR49.chars[k]||{}),(SPR49.faces||{})[k]||{});
  const G=F.base.map(r=>r.split(''));const lay=(o,x0)=>{if(!o)return;x0=x0==null?(o.rows[0].length===16?7:0):x0;o.rows.forEach((r,i)=>{const y=o.y+i;if(!G[y])return;r.split('').forEach((c,j)=>{if(c==='.')return;const X=x0+j;if(X<0||X>31)return;G[y][X]=c==='x'?'.':c})})};
  lay(F.nose);if(ch.beard)lay(F.beard[ch.beard]);lay(F.eyes[mood]||F.eyes.n);lay(F.mouth[mood]||F.mouth.n);
  if(ch.hat!=='hood'&&ch.hat!=='veil'||true)lay(F.hair[ch.fhair||ch.hair||'short']);
  if(ch.hat){if(ch.hat==='hood'||ch.hat==='veil')for(let y=0;y<26;y++)for(let x=0;x<32;x++)if('hjHJ'.includes(G[y][x])&&(x<9||y<9))G[y][x]='.';lay(F.hat[ch.hat])}
  const P=pal49(look,ch),cv=document.createElement('canvas');cv.width=34;cv.height=33;const x=cv.getContext('2d');const at=(a,b)=>(G[b]&&G[b][a]&&G[b][a]!=='.')?G[b][a]:null;
  for(let gy=-1;gy<32;gy++)for(let gx=-1;gx<=32;gx++){const c=at(gx,gy);if(c){x.fillStyle=P[c]||'#f0f';x.fillRect(gx+1,gy+1,1,1);continue}const nb=[[0,1],[1,0],[-1,0],[0,-1]].map(([dx,dy])=>at(gx+dx,gy+dy)).filter(Boolean);if(!nb.length)continue;const r=rampOf49(P,nb[0]);x.fillStyle=r?c49.mix(r.dd,'#06040a',.62):'#0a0610';x.fillRect(gx+1,gy+1,1,1)}
  return FACEC49[key]=cv}
if(typeof window!=='undefined')window.__g49={harbour49,face49,sprite49,person49,pal49,grid49,c49};
/* ---------- the harbour of Caffa, redrawn at the new scale (people 26 px tall) ---------- */
const P49=(x,X,Y,w,h,c)=>{x.fillStyle=c;x.fillRect(X|0,Y|0,w|0,h|0)};
const rng49=s=>()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296};
/* a little grid drawn with a ramp: letters m (mid) d (dark) e (deeper) l (light) o (outline) */
function grid49draw(x,X,Y,rows,base,flip){const r=c49.ramp(base),C={m:r.m,d:r.d,e:r.dd,l:r.l,L:r.ll,o:c49.mix(r.dd,'#06040a',.6)};rows.forEach((row,j)=>{for(let i=0;i<row.length;i++){const c=row[flip?row.length-1-i:i];if(C[c])P49(x,X+i,Y+j,1,1,C[c])}})}
const CRATE49=["oooooooooooo","olllllllllmo","olmdddddddmo","olmlddddlmmo","olmdlddlmdmo","olddmllmdddo","olddmllmdddo","olmdlddlmdmo","olmlddddlmmo","olmdddddddmo","ommmmmmmmmeo","oooooooooooo"];
const BARREL49=["..oooooo..",".olllmmdo.","olmmmmmdeo","oeeeeeeeeo","olmmmmmddo","olmmmmmddo","olmmmmmddo","oeeeeeeeeo","olmmmmmdeo",".ommmmmdo.","..oooooo.."];
const HORSE49=["....................oo..","...................ollo.","..................olmmlo","................oolmmmmo","...............ohhmmmemo","..............ohhmmmmmmdo","..............ohmmmmooddo","..ooooooooooooohmmmmo.oo.",".olllllllllllllmmmmo.....","ohlmmmmmmmmmmmmmmmdo.....","ohmmmmmmmmmmmmmmmmdo.....","oh.odmmmmmdddddmmddo.....","o..odmo.oooooooomdo......","...odmo.........odmo.....","...odmo.........odmo.....","...oeeo.........oeeo.....","...oooo.........oooo....."];
function horse49(x,X,gy,t,flip){const rows=HORSE49.map(r=>r.replace(/h/g,'e'));const bob=Math.sin(t*1.3)>.85?1:0;grid49draw(x,X-12,gy-17+0,rows.slice(0,1+0).concat([]),'#7a4a2a',flip);grid49draw(x,X-12,gy-17,rows,'#7a4a2a',flip);if(bob)P49(x,X+(flip?-9:8),gy-16,2,1,'#3a2010')}
function harbour49(x,t,cam,D){const L=[],W=640;
  /* sky in bands, dithered between them */
  const sky=['#05071a','#0a0e2a','#121a40','#1c2452','#28305e'];for(let y=0;y<104;y++){const f=y/104*(sky.length-1),i=Math.min(sky.length-2,f|0),k=f-i;for(let X=0;X<320;X+=2){const dz=((X>>1)+y)%2?.25:-.25;P49(x,X,y,2,1,sky[k+dz*.5>.5?i+1:i])}}
  const sr=rng49(7);for(let i=0;i<70;i++){const X=sr()*320|0,Y=sr()*80|0,b=sr();P49(x,X,Y,1,1,b>.9&&Math.sin(t*2+i)>.2?'#ffffff':b>.6?'#a8b0e0':'#5a6098')}
  /* the moon and its halo */
  const mx=236-cam*.05;for(let r=18;r>9;r-=3){x.fillStyle='rgba(180,190,255,'+(.05)+')';x.beginPath();x.arc(mx,30,r,0,7);x.fill()}x.fillStyle='#f4eed6';x.beginPath();x.arc(mx,30,8,0,7);x.fill();P49(x,mx-3,27,3,2,'#d8d0b4');P49(x,mx+1,31,2,2,'#d8d0b4');
  /* far: the walls and towers of Caffa on the hill, slow parallax */
  x.save();x.translate(-cam*.25,0);const fr=rng49(3);x.fillStyle='#161a3a';x.beginPath();x.moveTo(-10,104);for(let X=-10;X<=420;X+=20)x.lineTo(X,78+Math.sin(X*.02)*8+fr()*3);x.lineTo(420,104);x.fill();
  for(let X=0;X<400;X+=34){const h=8+(X*7%11),y=74+Math.sin(X*.02)*8;P49(x,X,y-h,10,h+30,'#1e2248');for(let k=0;k<10;k+=3)P49(x,X+k,y-h-2,2,2,'#1e2248');P49(x,X,y-h,1,h+30,'#262a56');if((X/34|0)%2)P49(x,X+4,y-h+4,2,2,'#e8a040')}
  P49(x,-10,92,440,3,'#1e2248');x.restore();
  /* sea */
  for(let y=104;y<180;y++)P49(x,0,y,320,1,c49.mix('#1c3058','#060a18',(y-104)/76));
  for(let i=0;i<9;i++){const yy=110+i*7;const w=(t*6+i*37)%40;for(let X=-40;X<330;X+=46)P49(x,(X+w+i*13)%360-20,yy,10+(i%3)*4,1,'#3a5a90')}
  for(let y=106;y<160;y+=3){const w=Math.sin(t*2+y)*2;P49(x,mx-3+w,y,6-(y%2)*2,1,'#8a9ad0')}
  /* distant ships */
  x.save();x.translate(-cam*.5,0);[[120,102],[330,103]].forEach(([X,Y])=>{P49(x,X,Y-2,18,3,'#10142c');P49(x,X+8,Y-14,1,12,'#10142c');P49(x,X+3,Y-12,11,6,'#1a2040')});x.restore();
  x.save();x.translate(-cam,0);
  /* the warehouse: stone blocks, terracotta roof, an arched door */
  const st=c49.ramp('#6a6478');for(let y=46;y<142;y+=6){const off=((y/6)|0)%2?6:0;for(let X=-off;X<150;X+=12){const v=((X*13+y*7)%5)/5;const b=c49.mix(st.m,st.d,v*.6);P49(x,X,y,11,5,b);P49(x,X,y,11,1,st.l);P49(x,X,y+4,11,1,st.d);P49(x,X+11,y,1,6,st.dd);P49(x,X,y+5,12,1,st.dd)}}
  const rf=c49.ramp('#8a4030');for(let k=0;k<9;k++){const y=24+k*3;P49(x,6-k*1.2,y+20,140+k*2.4,3,k%2?rf.m:rf.d);for(let X=6-k;X<146+k;X+=6)P49(x,X,y+20,1,3,rf.dd)}P49(x,-2,46,154,2,'#2a1418');
  P49(x,26,98,26,44,'#1a1018');x.fillStyle='#1a1018';x.beginPath();x.arc(39,98,13,Math.PI,0);x.fill();P49(x,28,100,22,42,'#3a2418');for(let X=29;X<50;X+=4)P49(x,X,101,1,40,'#2a1810');P49(x,44,120,2,2,'#c8a040');
  [[86,62],[118,62]].forEach(([X,Y],i)=>{P49(x,X-2,Y-2,14,16,'#2a1a18');P49(x,X,Y,10,12,i?'#1a1c2a':'#f0b050');if(!i){P49(x,X,Y,10,3,'#ffe0a0');P49(x,X+4,Y,2,12,'#2a1a18');L.push({x:X+5,y:Y+6,r:34,c:'#ffb050',i:.7})}});
  /* the dock: planks you walk on, posts into the water */
  const pk=c49.ramp('#6a4a2c');P49(x,0,140,464,14,pk.m);for(let y=140;y<154;y+=3)P49(x,0,y,464,1,pk.l);for(let X=0;X<464;X+=17){P49(x,X+((X*3)%7),141,1,13,pk.dd)}P49(x,0,139,464,1,pk.ll);
  P49(x,0,154,464,4,pk.d);P49(x,0,158,464,1,pk.dd);for(let X=4;X<464;X+=24){P49(x,X,158,5,22,pk.dd);P49(x,X,158,1,22,pk.d)}
  /* crates, barrels and sacks by the warehouse */
  [[66,128],[78,128],[90,128],[72,116],[84,116],[78,104]].forEach(([X,Y],i)=>grid49draw(x,X,Y,CRATE49,i%2?'#8a6a40':'#7a5a34'));
  [[104,129],[114,129]].forEach(([X,Y])=>grid49draw(x,X,Y,BARREL49,'#6a4428'));
  grid49draw(x,152,134,["oooooooooooooooooooooo","olllllllllllllllllllmo","ommmmmmmmmmmmmmmmmmmeo","ooddooooooooooooooddoo",".od.o............od.o."],'#7a5a34');
  /* the bread stall: a board on two trestles, round loaves, a cloth */
  P49(x,120,136,26,2,'#7a5a34');P49(x,120,136,26,1,'#9a7a48');P49(x,122,138,2,8,'#4a2e1c');P49(x,142,138,2,8,'#4a2e1c');P49(x,119,133,28,3,'#c8b898');[[123,131],[129,130],[135,131],[141,131]].forEach(([X,Y])=>{P49(x,X,Y,5,3,'#a8642a');P49(x,X+1,Y,3,1,'#d8944a')});
  /* lamp posts */
  [[58,140],[196,140],[398,140]].forEach(([X,Y])=>{P49(x,X,Y-30,2,30,'#1a1010');P49(x,X-3,Y-37,8,2,'#1a1010');P49(x,X-2,Y-35,6,6,'#1a1010');P49(x,X-1,Y-34,4,4,'#ffd070');P49(x,X,Y-33,2,2,'#fff4c0');L.push({x:X+1,y:Y-32,r:44,c:'#ffb050',i:.9})});
  /* the pen where people are held for sale */
  const fn=c49.ramp('#5a3a22');for(let X=206;X<=292;X+=9){P49(x,X,116,3,26,fn.m);P49(x,X,116,1,26,fn.l);P49(x,X+2,116,1,26,fn.dd);P49(x,X,115,3,1,fn.ll)}
  if(D._pen)D._pen(x);
  for(const y of [121,131]){P49(x,204,y,92,3,fn.m);P49(x,204,y,92,1,fn.l);P49(x,204,y+2,92,1,fn.dd)}
  horse49(x,318,146,t,true);
  /* rats on the boards */
  if(!(D.flags||{}).rat_gone)[[296,151],[304,153],[311,150]].forEach(([X,Y],i)=>{P49(x,X,Y-2,5,2,'#5a5a64');P49(x,X+5,Y-1,3,1,'#8a6a70');P49(x,X,Y-3,4,1,'#7a7a84')});
  /* the harbour officer's booth with a striped awning */
  const bw=c49.ramp('#6a4428');P49(x,330,104,48,38,bw.m);for(let X=330;X<378;X+=6)P49(x,X,104,1,38,bw.d);P49(x,330,104,48,1,bw.l);
  for(let k=0;k<8;k++)P49(x,326+k*7,96,7,8,k%2?'#e8e0d0':'#a83030');P49(x,326,103,56,2,'#2a1418');for(let k=0;k<8;k++)P49(x,326+k*7,104,7,2,k%2?'#c8c0b0':'#882020');
  P49(x,336,118,36,12,'#140c10');P49(x,334,128,40,3,bw.l);P49(x,334,131,40,2,bw.dd);P49(x,346,121,6,4,'#e8dcc0');P49(x,341,90,7,6,'#1a1010');P49(x,342,91,5,4,'#ffd070');L.push({x:345,y:93,r:52,c:'#ffb050',i:.95});
  /* the ship: shaded planks, the stern castle, a furled sail, rigging, the flag of Genoa */
  const by=Math.round(Math.sin(t*.8));const hl=c49.ramp('#4a2e1c');x.fillStyle=hl.dd;x.beginPath();x.moveTo(466,128+by);x.lineTo(644,122+by);x.lineTo(636,160+by);x.lineTo(484,160+by);x.fill();
  for(let k=0;k<7;k++){const y=130+k*4+by;P49(x,470+k*2,y,168-k*4,3,k%2?hl.m:hl.d);P49(x,470+k*2,y,168-k*4,1,hl.l)}P49(x,466,126+by,180,3,hl.ll);
  P49(x,590,104+by,52,22,hl.d);P49(x,590,104+by,52,2,hl.l);for(let X=594;X<640;X+=8)P49(x,X,100+by,4,4,hl.d);[[600,110],[616,110]].forEach(([X,Y])=>{P49(x,X,Y+by,6,5,'#f0b050');L.push({x:X+3,y:Y+2,r:22,c:'#ffb050',i:.6})});
  P49(x,544,30+by,3,98,'#3a2414');P49(x,545,30+by,1,98,'#5a3a24');P49(x,516,50+by,60,3,'#3a2414');const sl=c49.ramp('#c8b898');for(let k=0;k<5;k++)P49(x,518+k,53+by+k*2,56-k*2,2,k%2?sl.m:sl.d);
  P49(x,546,22+by,12,8,'#f0f0f0');P49(x,551,22+by,2,8,'#c02020');P49(x,546,25+by,12,2,'#c02020');
  x.strokeStyle='#2a1a14';x.lineWidth=1;x.beginPath();x.moveTo(545.5,32+by);x.lineTo(470,126+by);x.moveTo(545.5,32+by);x.lineTo(640,104+by);x.moveTo(520,52+by);x.lineTo(500,126+by);x.stroke();
  /* the gangplank down to the dock */
  const gp=c49.ramp('#7a5a34');x.fillStyle=gp.m;x.beginPath();x.moveTo(432,140);x.lineTo(484,126+by);x.lineTo(484,129+by);x.lineTo(432,143);x.fill();for(let k=0;k<5;k++)P49(x,438+k*10,139-k*3+by*k/5,1,3,gp.dd);
  x.restore();return L.map(l=>Object.assign({},l,{x:l.x-cam}))}
/* the front layer: dark posts and ropes that pass in front of the people */
function harbourFront49(x,t,cam){x.save();x.translate(-cam*1.3,0);for(let X=40;X<900;X+=150){P49(x,X,150,7,30,'#120a08');P49(x,X+1,150,2,30,'#2a1a12');P49(x,X-1,148,9,3,'#1a100c')}x.restore()}
/* in Kaffa every person is drawn with the new hand-made sprites at double size, so the family and the player match */
{const _p=g45person;g45person=function(x,X,by,o,t){if(!window.__chibi49||typeof person49!=='function')return _p.apply(this,arguments);o=o||{};
  const hat={cap:'cap',hood:'hood',veil:'veil',turban:'turban',tophat:'cap',wide:'cap'}[o.hat]||null;const ex={body:o.dress?'dress':'man',hair:o.child?'messy':(o.dress?'long':'short'),hat,beard:o.beard?'full':null,child:o.child?1:0};
  const look={skin:o.skin,hair:o.hair,top:o.top,bot:o.bot,hatc:o.hatc,dress:o.dress};const L=person49(x,'g'+JSON.stringify(ex),look,X,by+2,{dir:o.dir||1,scale:o.child?1.6:2,extra:ex,hold:o.hold==='lamp'||o.hold==='torch'?'lamp':null});
  return L||(o.hold==='torch'?{x:X,y:by-30,r:60,c:'#ffa040',i:1}:null)}}
