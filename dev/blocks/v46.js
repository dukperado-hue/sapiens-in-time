/* ===================== v0.46: the plague doctor, two ways in (learn or live), forty days under siege at Caffa; the New World's anthem and its first peoples' thought (Thai only) ===================== */

/* ---------- 1. the opening picture: a plague doctor in the rain ---------- */
SC45.doctor=function(x,t){G45R(x,0,0,320,180,'#0a0a12');g45bricks(x,0,0,320,180,'#2a2228',37,12,6);g45win(x,262,30,18,26,true,'#140c08');
  const fl=Math.sin(t*9)*.6+Math.sin(t*23)*.4,P=(pts,c)=>{x.fillStyle=c;x.beginPath();x.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)x.lineTo(pts[i],pts[i+1]);x.closePath();x.fill()};
  /* shoulders and the waxed cape */
  P([40,180,92,128,150,118,214,128,268,180],'#3a281c');P([40,180,92,128,104,126,62,180],'#6a4a30');P([228,132,214,128,268,180,250,180],'#1e140e');
  for(let k=0;k<5;k++)G45R(x,108+k*22,140+k%2*4,1,40,'#2a1c12');G45R(x,92,128,122,2,'#7a5a3a');
  /* the hood around the head */
  x.fillStyle='#24180f';x.beginPath();x.ellipse(146,96,38,42,0,0,7);x.fill();x.fillStyle='#4a3420';x.beginPath();x.ellipse(132,96,22,38,0,Math.PI*.5,Math.PI*1.5);x.fill();x.fillStyle='#24180f';x.beginPath();x.ellipse(140,96,18,36,0,0,7);x.fill();
  /* the beak, stitched leather */
  P([168,80,232,104,292,150,176,122],'#7a5a3c');P([168,80,232,104,292,150,286,148,228,108,170,88],'#b8946a');P([176,122,292,150,286,152,178,128],'#4a3424');
  x.strokeStyle='#2a1a10';x.lineWidth=1;for(let k=0;k<5;k++){const bx=188+k*20,by=94+k*11;x.beginPath();x.moveTo(bx,by);x.lineTo(bx-6,by+24-k*2);x.stroke()}G45R(x,262,134,3,2,'#2a1a10');
  /* the brass eye with a glass lens */
  x.fillStyle='#0a0806';x.beginPath();x.arc(164,78,15,0,7);x.fill();x.fillStyle='#b8903a';x.beginPath();x.arc(164,78,13,0,7);x.fill();x.fillStyle='#e8c070';x.beginPath();x.arc(162,76,13,Math.PI*.9,Math.PI*1.6);x.lineTo(164,78);x.fill();
  x.fillStyle='#14202a';x.beginPath();x.arc(164,78,9,0,7);x.fill();x.fillStyle='rgba(255,170,80,'+(.7+fl*.2)+')';x.beginPath();x.arc(160,74,3,0,7);x.fill();x.fillStyle='#ffffff';x.fillRect(167,81,2,2);
  /* the wide brimmed hat */
  x.fillStyle='#0c0a0c';x.beginPath();x.ellipse(146,50,74,12,-.04,0,7);x.fill();x.fillStyle='#2a2430';x.beginPath();x.ellipse(146,47,72,9,-.04,Math.PI,0);x.fill();x.fillStyle='#0c0a0c';x.beginPath();x.ellipse(146,49,70,9,-.04,0,7);x.fill();
  x.fillStyle='#141016';x.fillRect(110,8,72,42);x.beginPath();x.ellipse(146,8,36,7,0,0,7);x.fill();x.fillStyle='#2e2834';x.fillRect(112,10,4,38);x.fillStyle='#5a1414';x.fillRect(110,38,72,6);x.fillStyle='#7a2a2a';x.fillRect(110,38,72,1);
  /* a lantern held up on the left */
  x.strokeStyle='#3a3028';x.beginPath();x.moveTo(58,96);x.lineTo(58,110);x.stroke();G45R(x,48,110,20,4,'#2a2420');G45R(x,50,114,16,22,'#f0b040');G45R(x,54,118+(fl>0?0:1),8,12,'#ffe8a0');G45R(x,48,136,20,4,'#2a2420');G45R(x,50,114,2,22,'#2a2420');G45R(x,64,114,2,22,'#2a2420');
  P([60,180,72,150,96,148,98,180],'#3a281c');G45R(x,68,140,16,10,'#2a1c14');
  g45rain(x,t,120,'#8aa0c890',.25);g45fog(x,t,140,40,'#8a90a8',.12);
  return {amb:.34,lights:[{x:58,y:124,r:200,c:'#ffb050',i:1+fl*.03},{x:164,y:78,r:24,c:'#ffb050',i:.7},{x:271,y:43,r:40,c:'#ffc060',i:.6}]}};
/* ---------- 2. plains and longhouse at dusk, for the New World's quiet scenes ---------- */
SC45.plains=function(x,t){g45sky(x,['#1a1838','#4a2a5a','#a84a4a','#e8884a','#f8c070'],0,104);g45stars(x,30,77,40,t);x.fillStyle='#f8d890';x.beginPath();x.arc(80,98,12,0,7);x.fill();
  g45mount(x,106,'#3a2a3a',17,10,false);G45R(x,0,104,320,76,'#6a5a30');for(let j=106;j<180;j+=2)for(let i=(j%4);i<320;i+=4)G45R(x,i+Math.round(Math.sin(t*1.4+i*.04+j*.1)),j,1,2,g45sh('#7a6a38',((i+j)%7)/25-.1));
  const tipi=(X,Y,s,c)=>{x.fillStyle=c;x.beginPath();x.moveTo(X,Y-40*s);x.lineTo(X+18*s,Y);x.lineTo(X-18*s,Y);x.fill();x.fillStyle=g45sh(c,-.35);x.beginPath();x.moveTo(X,Y-40*s);x.lineTo(X+18*s,Y);x.lineTo(X+4*s,Y);x.fill();x.strokeStyle='#3a2a1a';x.lineWidth=1;x.beginPath();x.moveTo(X-3*s,Y-46*s);x.lineTo(X+2*s,Y-36*s);x.moveTo(X+4*s,Y-47*s);x.lineTo(X-1*s,Y-36*s);x.stroke();G45R(x,X-3*s,Y-12*s,6*s,12*s,'#2a1a10');G45R(x,X-12*s,Y-24*s,24*s,2,'#a83a2a')};
  tipi(210,150,1.1,'#d8c8a0');tipi(262,146,.8,'#c8b890');tipi(40,140,.6,'#c8b890');g45fire(x,236,160,t,2);g45smoke(x,236,148,t,'#8a7a7a');
  g45person(x,224,172,{top:'#8a5a3a',bot:'#6a4a2a',skin:G45P.skin[2],hair:G45P.hair[0],ph:1,dir:1},t);g45person(x,252,172,{top:'#6a4a2a',bot:'#5a3a24',dress:1,skin:G45P.skin[2],hair:G45P.hair[0],ph:2,dir:-1},t);
  return {amb:.38,lights:[{x:80,y:98,r:120,i:.7},{x:236,y:152,r:60,c:'#ff9a40',i:.85}]}};
SC45.longhouse=function(x,t){g45sky(x,['#0a1020','#1a2440','#2a3450'],0,90);g45stars(x,50,88,70,t);g45moon(x,250,28,7);
  for(let i=0;i<14;i++){const X=i*24+((i*7)%10),h=60+((i*13)%30);x.fillStyle='#0e1a14';x.beginPath();x.moveTo(X,120-h);x.lineTo(X+14,120);x.lineTo(X-14,120);x.fill()}
  G45R(x,0,118,320,62,'#2a3420');g45noise(x,0,118,320,62,'#2a3420',.25,6,2);
  x.fillStyle='#4a3a28';x.beginPath();x.moveTo(60,150);x.lineTo(60,112);x.quadraticCurveTo(140,84,220,112);x.lineTo(220,150);x.fill();for(let k=64;k<220;k+=8)G45R(x,k,112,1,38,'#3a2a1a');G45R(x,130,124,20,26,'#1a1008');G45R(x,132,126,16,24,'#f0a040');
  x.fillStyle='#1a2a1a';x.beginPath();x.moveTo(280,40);x.lineTo(300,120);x.lineTo(260,120);x.fill();G45R(x,278,120,4,30,'#3a2a1a');
  g45fire(x,170,160,t,2);g45person(x,190,172,{top:'#5a4a3a',bot:'#4a3a2a',skin:G45P.skin[2],hair:G45P.hair[0],ph:1,dir:-1},t);g45person(x,150,172,{top:'#6a3a2a',bot:'#4a3020',dress:1,skin:G45P.skin[2],ph:3},t);
  return {amb:.72,lights:[{x:140,y:136,r:50,c:'#ffa040',i:.8},{x:170,y:152,r:64,c:'#ff9a40',i:.9}]}};

/* ---------- 3. entering the plague: the doctor, the words, and two doors ---------- */
const PLQ46=['ในปีที่ระฆังดังทั้งวัน ไม่มีใครรู้ว่าศัตรูตัวเล็กกว่าเมล็ดข้าว','คนจึงสวมหน้ากาก จุดกำยาน ปิดประตู และสวดอ้อนวอน','แต่ในห้าร้อยปีนั้น สิ่งที่ช่วยชีวิตคนได้มากที่สุด คือคนที่ยังยอมเปิดประตูให้กัน'];
function plIntro46(){try{const w=plShell45();const c=document.createElement('canvas');c.width=320;c.height=180;c.className='stage45';w.appendChild(c);g45stage(c,'doctor');
  const q=document.createElement('div');q.style.cssText='margin:14px 0 6px;min-height:6.5em';w.appendChild(q);
  PLQ46.forEach((s,i)=>{const p=document.createElement('p');p.className='pov';p.style.cssText='opacity:0;transition:opacity 1.6s;margin:6px 0;border-left-color:#8a3a2a';p.textContent=s;q.appendChild(p);setTimeout(()=>{p.style.opacity='1'},600+i*2200)});
  const nt=document.createElement('p');nt.className='nt';nt.textContent='✦ ชุดหมอกาฬโรคที่มีหน้ากากจะงอยปาก ปรากฏในภาพวาดจากศตวรรษที่ 17 เช่น ภาพพิมพ์จากโรมปี 1656 ไม่ใช่ชุดของหมอในปี 1348 จะงอยปากใส่สมุนไพรกลิ่นแรงไว้กันอากาศเสีย ตามความเชื่อของยุคนั้น';
  const doors=document.createElement('div');doors.style.cssText='opacity:0;transition:opacity 1.2s';
  doors.innerHTML='<h3 style="margin:14px 0 6px;color:var(--bone)">คุณจะเข้าไปอย่างไร</h3>';const mk=(ic,t,s,f)=>{const b=document.createElement('button');b.className='crs';b.innerHTML='<span class="ic">'+ic+'</span><span><b>'+t+'</b><div class="d">'+s+'</div></span>';b.onclick=f;doors.appendChild(b)};
  mk('📖','ไปเรียนรู้','เรื่องยาว 9 ฉาก จากเอเชียกลางปี 1338 ถึงลอนดอนปี 1854 ทุกฉากเลือกได้ครั้งเดียว',plOpen45);
  mk('🕯️','ไปใช้ชีวิต','สี่สิบวันในเมืองคัฟฟาที่ถูกกองทัพมองโกลล้อม เดินไปทั่วเมือง หาอาหาร หาน้ำ หาไม้ ดูแลคนป่วย และตัดสินใจว่าจะอยู่หรือหนี ความรู้จากห้องเรียนติดตัวไปด้วย',sv46Start);
  w.appendChild(doors);w.appendChild(nt);setTimeout(()=>{doors.style.opacity='1'},600+PLQ46.length*2200);
  const nv=document.createElement('div');nv.className='nav';w.appendChild(nv);stBtn42(nv,'ข้าม',()=>{q.querySelectorAll('p').forEach(p=>p.style.opacity='1');doors.style.opacity='1'});stBtn42(nv,'← ชั้นวิชา',stOpen42);stBtn42(nv,'ปิด',stClose42)}catch(e){}}
{const C=STUFF42.find(c=>c.k==='plague');if(C){C.open=plIntro46;C.s='หมอกาฬโรคในสายฝน · ไปเรียนรู้ 9 ฉาก หรือไปใช้ชีวิตสี่สิบวันในเมืองที่ถูกล้อม'}}
{const _h=stHome42;stHome42=function(re){_h(re);try{const b=document.getElementById('pl45go');if(b)b.onclick=()=>{try{SND.unlock()}catch(e){}plIntro46()}}catch(e){}}}

/* ---------- 4. forty days at Caffa: walk, search, share, and decide ---------- */
/* the city in six parts, each 320 px wide: home, the empty street, the market, the well and church, the wall, the harbour */
const SVSEG46=['บ้าน','ถนนบ้านร้าง','ตลาด','บ่อน้ำและโบสถ์','กำแพงเมือง','ท่าเรือ'];
function svLying46(x,X,by,o,t){const c=o.top||'#6a5a4a';G45R(x,X-17,by-7,34,8,'#0a0710');G45R(x,X-16,by-6,26,6,o.blanket||'#7a6a50');G45R(x,X-16,by-6,26,1,g45sh(o.blanket||'#7a6a50',.2));G45R(x,X+10,by-7,8,7,'#0a0710');G45R(x,X+11,by-6,6,5,o.skin||G45P.skin[1]);G45R(x,X+11,by-6,6,2,o.hair||G45P.hair[1]);
  if(Math.sin(t*1.5+(o.ph||0))>.2)G45R(x,X-6,by-7,8,1,g45sh(o.blanket||'#7a6a50',.15))}
function svRat46(x,X,Y,t,dead){if(dead){G45R(x,X,Y-2,6,2,'#5a5a5a');G45R(x,X+6,Y-1,4,1,'#8a6a6a');return}const s=Math.sin(t*12+X)>0?1:0;G45R(x,X,Y-3,6,3,'#4a4448');G45R(x,X+5,Y-4,2,2,'#4a4448');G45R(x,X-4,Y-2+s,4,1,'#8a6a6a');G45R(x,X+1,Y,1,1,'#2a2428');G45R(x,X+4,Y,1,1,'#2a2428')}
const SVDRAW46=[
 (x,t,S)=>{g45planks(x,0,0,320,150,'#5a4030',61);G45R(x,0,0,320,6,'#2a1a10');G45R(x,0,150,320,30,'#3a2a1a');g45planks(x,0,150,320,30,'#4a3420',62);
  G45R(x,30,96,50,54,'#3a3a3a');G45R(x,34,100,42,30,'#1a1410');G45R(x,28,94,54,4,'#5a5a5a');if(S.fire)g45fire(x,55,128,t,3);G45R(x,40,128,30,4,'#2a1a10');
  g45win(x,140,50,24,30,S.slot<2,'#2a1a10');G45R(x,270,70,36,80,'#2a1a0e');G45R(x,272,72,32,78,'#3a2414');G45R(x,298,110,3,3,'#a8884a');
  [[110,'#c8a868'],[200,'#a8c088']].forEach(([X,c],i)=>{G45R(x,X,140,8,10,'#6a5a40');G45R(x,X+1,136,6,4,c)});
  const L=[];if(S.fire)L.push({x:55,y:118,r:90,c:'#ff9040',i:.95});if(S.slot<2)L.push({x:152,y:65,r:80,i:.6});
  if(S.mom==='sick'||S.mom==='dying')svLying46(x,170,160,{blanket:'#8a6a4a',skin:G45P.skin[0],hair:G45P.hair[3],ph:1},t);else if(S.mom!=='dead')g45person(x,180,172,{top:'#6a4a3a',bot:'#4a3a2a',dress:1,hat:'veil',hatc:'#d8d0c0',skin:G45P.skin[0],ph:1,dir:-1},t);
  if(S.sis==='sick'||S.sis==='dying')svLying46(x,220,165,{blanket:'#6a7a8a',skin:G45P.skin[0],hair:G45P.hair[1],ph:2},t);else if(S.sis!=='dead')g45person(x,216,172,{top:'#8a4a5a',bot:'#4a3a3a',dress:1,child:1,skin:G45P.skin[0],hair:G45P.hair[1],ph:2,dir:-1},t);
  return L},
 (x,t,S)=>{g45sky(x,S.late?['#2a2e3a','#3a3e4a','#5a5a68']:['#3a4a6a','#6a7a9a','#a8b0c0'],0,60);[[0,30,90,'#8a7a64'],[90,44,70,'#7a6a58'],[160,24,90,'#8a7c66'],[250,40,70,'#766a56']].forEach(([X,Y,w,c],i)=>{g45stones(x,X,Y,w,120,c,i+70);for(let k=0;k<2;k++)g45win(x,X+12+k*30,Y+20,9,12,false,'#2a1a10');G45R(x,X+w/2-6,Y+92,12,28,i%2?'#1a120a':'#3a2414');if(i%2)G45R(x,X+w/2-6,Y+92,4,28,'#0a0604')});
  G45R(x,0,150,320,30,'#4a4440');g45noise(x,0,150,320,30,'#4a4440',.25,71,2);G45R(x,120,146,24,4,'#5a4a38');G45R(x,200,148,14,3,'#6a5a48');
  if(S.day>=22)for(let i=0;i<(S.day>=26?6:3);i++)svRat46(x,30+i*48,166+(i%2)*6,t,S.day>=22&&i%2===0);if(S.day>=26)for(let i=0;i<3;i++)svRat46(x,((i*97+t*30)%330)-10,174,t,false);return []},
 (x,t,S)=>{g45sky(x,S.late?['#2a2e3a','#3a3e4a','#5a5a68']:['#3a4a6a','#6a7a9a','#a8b0c0'],0,70);g45stones(x,0,40,320,110,'#9a8a70',81);
  const full=S.day<10?1:S.day<20?.5:0;[[20,'#a83a2a'],[120,'#3a6a8a'],[220,'#8a7a2a']].forEach(([X,c],i)=>{G45R(x,X,96,80,6,c);for(let k=0;k<80;k+=10)G45R(x,X+k,102,5,4,c);G45R(x,X+4,102,2,48,'#3a2a1a');G45R(x,X+74,102,2,48,'#3a2a1a');G45R(x,X,126,80,4,'#5a3a1a');
   const n=Math.round(6*full*(i===1?1.3:1));for(let k=0;k<n;k++)G45R(x,X+8+k*10,120,7,6,['#c8a048','#a8582a','#7a9a4a'][k%3])});
  if(S.day<30)g45person(x,160,150,{top:'#3a5a7a',bot:'#2a2a3a',hat:'cap',hatc:'#2a1a1a',skin:G45P.skin[0],ph:3,dir:-1},t);G45R(x,0,150,320,30,'#4a4440');g45noise(x,0,150,320,30,'#4a4440',.25,82,2);return []},
 (x,t,S)=>{g45sky(x,S.late?['#2a2e3a','#3a3e4a','#5a5a68']:['#3a4a6a','#6a7a9a','#a8b0c0'],0,60);g45bricks(x,0,56,170,94,'#7a6a58',94,10,5);for(let k=0;k<3;k++)g45win(x,20+k*52,74,9,12,S.slot===2&&k===1,'#2a1a10');x.fillStyle='#5a3a2a';x.beginPath();x.moveTo(-4,56);x.lineTo(85,34);x.lineTo(174,56);x.fill();
  x.fillStyle='#8a8070';x.beginPath();x.moveTo(170,40);x.lineTo(230,10);x.lineTo(290,40);x.fill();g45stones(x,170,40,120,110,'#9a9080',91);G45R(x,214,100,32,50,'#2a1a10');x.fillStyle='#2a1a10';x.beginPath();x.arc(230,100,16,Math.PI,0);x.fill();G45R(x,226,52,8,14,'#c8a048');
  g45stones(x,50,122,50,28,'#7a7468',92);G45R(x,48,118,54,5,'#5a5448');G45R(x,56,90,3,30,'#3a2a1a');G45R(x,92,90,3,30,'#3a2a1a');G45R(x,54,88,44,3,'#4a3420');G45R(x,72,98,6,8,'#6a5a48');
  G45R(x,0,150,320,30,'#4a4440');g45noise(x,0,150,320,30,'#4a4440',.25,93,2);const L=[{x:230,y:120,r:36,c:'#ffb050',i:.55}];
  const n=S.day<18?0:S.day<26?2:4;for(let i=0;i<n;i++)svLying46(x,140+i*44,170,{blanket:['#8a7a60','#6a6a7a','#7a5a5a','#5a6a5a'][i],skin:G45P.skin[i%2],ph:i},t);return L},
 (x,t,S)=>{g45sky(x,['#141a30','#2a2a44','#4a3a50'],0,90);for(let i=0;i<(S.day<15?12:S.day<30?7:3);i++)g45fire(x,10+i*26,86,t+i,1);
  g45stones(x,0,60,320,90,'#7a7064',101);for(let i=0;i<320;i+=10)G45R(x,i,54,6,6,'#7a7064');for(let k=0;k<6;k++){G45R(x,200+k*16,150-k*15,40,4,'#6a6258');G45R(x,200+k*16,146-k*15,40,4,'#8a8070')}
  G45R(x,0,150,320,30,'#4a4440');const L=[g45torch(x,60,46,t),g45torch(x,260,46,t)];L.push(g45person(x,120,60,{top:'#8a2a2a',bot:'#2a2a3a',hat:'cap',hatc:'#2a2a3a',skin:G45P.skin[0],hold:'torch',ph:1},t));if(S.day<20)g45person(x,160,60,{top:'#3a5a8a',bot:'#2a2a2a',skin:G45P.skin[0],ph:4,dir:-1},t);
  L.push({x:140,y:86,r:120,c:'#ff7a30',i:.25});return L},
 (x,t,S)=>{g45sky(x,['#2a3a5a','#4a5a7a','#7a8aa8'],0,80);g45sea(x,96,'#1a3a5a',t,null);G45R(x,0,140,200,40,'#4a3a2a');for(let k=0;k<200;k+=12)G45R(x,k,140,1,40,'#2a1a10');for(let k=10;k<200;k+=40)G45R(x,k,140,4,40,'#3a2a1a');
  if(!S.shipGone){const X=230;G45R(x,X,112+Math.sin(t)*1,70,10,'#3a2414');G45R(x,X+6,122+Math.sin(t)*1,58,3,'#1a0a08');G45R(x,X+32,58,3,56,'#4a3420');x.fillStyle='#d8c8a8';x.beginPath();x.moveTo(X+35,60);x.lineTo(X+62,104);x.lineTo(X+35,106);x.fill();G45R(x,X+46,80,3,3,'#a83a2a')}
  g45person(x,90,150,{top:'#5a6a7a',bot:'#3a3a3a',hat:'cap',hatc:'#2a2a3a',skin:G45P.skin[1],ph:2},t);return []}];
const SVHOME46=[{seg:0,x:56,k:'hearth',n:'เตาไฟ'},{seg:0,x:200,k:'family',n:'แม่กับน้อง'},{seg:0,x:288,k:'sleep',n:'นอน'},{seg:1,x:150,k:'search',n:'ค้นบ้านร้าง'},{seg:1,x:60,k:'rats',n:'หนู',when:S=>S.day>=24},{seg:2,x:160,k:'market',n:'แผงตลาด'},{seg:3,x:75,k:'well',n:'บ่อน้ำ'},{seg:3,x:230,k:'church',n:'โบสถ์'},{seg:4,x:240,k:'wall',n:'ขึ้นกำแพง'},{seg:5,x:90,k:'fish',n:'ตกปลา'},{seg:5,x:250,k:'ship',n:'เรือ',when:S=>!S.shipGone}];
const SVTIME46=['เช้า','บ่าย','ค่ำ'];
function svKnow46(){let d={},m={};try{const b=book29();d=(b.plg||{}).done||{};m=(b.stuff||{}).mus||{}}catch(e){}return {flea:!!d.hk,iso:!!(d.ragusa||d.eyam),care:!!d.florence,lemon:!!m['mol.vitc']}}
function sv46Start(){const K=svKnow46();const S={day:1,slot:0,food:40,water:30,wood:3,coin:12,hp:80,mor:70,warm:70,exp:0,inf:0,ill:0,mom:'well',sis:'well',fire:0,px:200,dir:1,late:0,shipGone:0,log:[],done:{},K,helped:0,ate:0,end:null};sv46UI(S)}
function svSave46(S,end){try{const B=plB45();B.plg.sv=B.plg.sv||{best:0,ends:{}};B.plg.sv.best=Math.max(B.plg.sv.best||0,S.day);if(end)B.plg.sv.ends[end]=1;stSave42(B)}catch(e){}}
function sv46UI(S){try{const w=plShell45();if(!document.getElementById('sv46css')){const st=document.createElement('style');st.id='sv46css';st.textContent='#st42 .hud46{display:flex;flex-wrap:wrap;gap:4px 10px;font-size:12.5px;margin:8px 0;color:var(--ash)}#st42 .hud46 b{color:#ffe2a8}#st42 .bar46{display:inline-block;width:44px;height:6px;background:#2a2430;border-radius:3px;vertical-align:middle;margin-left:3px;overflow:hidden}#st42 .bar46 i{display:block;height:100%}#st42 .ctl46{display:flex;gap:8px;margin:8px 0}#st42 .ctl46 button{flex:1;font-size:18px;padding:10px 0}#st42 .log46{font-size:14px;line-height:1.65;min-height:3.4em;margin:6px 0;padding:8px 10px;background:#141018;border:1px solid var(--line);border-radius:8px}#st42 .log46 p{margin:3px 0}#st42 .act46{display:flex;flex-direction:column;gap:6px}';document.head.appendChild(st)}
  const head=document.createElement('div');w.appendChild(head);const cv=document.createElement('canvas');cv.width=320;cv.height=180;cv.className='stage45';w.appendChild(cv);
  const hud=document.createElement('div');hud.className='hud46';w.appendChild(hud);const ctl=document.createElement('div');ctl.className='ctl46';w.appendChild(ctl);const prm=document.createElement('div');prm.className='act46';w.appendChild(prm);const lg=document.createElement('div');lg.className='log46';w.appendChild(lg);
  const foot=document.createElement('div');foot.className='nav';w.appendChild(foot);stBtn42(foot,'ออกจากเมือง (จบการเล่นรอบนี้)',()=>{if(confirmLeave()){alive=false;plIntro46()}});
  function confirmLeave(){return S.end||S.day<2||window.confirm('ออกตอนนี้ ชีวิตรอบนี้จะจบลงตรงนี้ เล่นใหม่ได้ แต่จะเริ่มวันแรกใหม่')}
  const x=cv.getContext('2d');x.imageSmoothingEnabled=false;const LL={};let alive=true,hold=0,last=performance.now(),t0=last,busy=false;
  const say=(s,cls)=>{S.log.unshift(s);S.log=S.log.slice(0,4);lg.innerHTML=S.log.map((z,i)=>'<p style="opacity:'+(1-i*.22)+'">'+esc(z)+'</p>').join('')};
  const bar=(v,c)=>'<span class="bar46"><i style="width:'+Math.max(0,Math.min(100,v))+'%;background:'+c+'"></i></span>';
  const drawHud=()=>{head.innerHTML='<div class="yr45">คัฟฟา ค.ศ. 1346 · วันที่ '+S.day+' จาก 40 · '+SVTIME46[S.slot]+'</div>';
    hud.innerHTML='<span>อาหาร'+bar(S.food,'#c8a048')+'</span><span>น้ำ'+bar(S.water*2,'#6aa8e8')+'</span><span>ความอบอุ่น'+bar(S.warm,'#e8884a')+'</span><span>สุขภาพ'+bar(S.hp,S.ill?'#c83a3a':'#6ac86a')+'</span><span>กำลังใจ'+bar(S.mor,'#b88ae8')+'</span><span>ไม้ <b>'+S.wood+'</b></span><span>เงิน <b>'+S.coin+'</b></span>'+(S.ill?'<span style="color:#ff8a7a">ป่วย</span>':'')};
  const near=()=>{const seg=Math.floor(S.px/320),lx=S.px%320;return SVHOME46.filter(h=>h.seg===seg&&Math.abs(h.x-lx)<34&&(!h.when||h.when(S)))[0]};
  const btns=()=>{prm.innerHTML='';if(S.end||busy)return;const h=near();if(!h){const p=document.createElement('p');p.className='nt';p.style.margin='2px 0';p.textContent='เดินไปที่ '+SVSEG46[Math.floor(S.px/320)]+' · กดลูกศร หรือแตะปุ่มซ้ายขวา เข้าไปใกล้สิ่งที่ทำได้ จะมีปุ่มขึ้นมา';prm.appendChild(p);return}
    for(const [lab,fn] of svActs46(S,h.k)){const b=document.createElement('button');b.className='op';b.textContent=lab;b.onclick=()=>{if(busy)return;fn(say,ev=>{if(ev)event46(ev)});drawHud();btns()};prm.appendChild(b)}};
  function event46(ev){busy=true;prm.innerHTML='';const box=document.createElement('div');box.className='fb';box.innerHTML='<b>'+esc(ev.t)+'</b><br>'+esc(ev.x);prm.appendChild(box);
    const fin=()=>{busy=false;drawHud();if(S.end)endSV();else btns()};
    if(ev.o){ev.o.forEach(([lab,fn])=>{const b=document.createElement('button');b.className='op';b.textContent=lab;b.onclick=()=>{prm.querySelectorAll('.op').forEach(z=>z.disabled=true);const r=fn(S);box.innerHTML+='<br><br>'+esc(r);say(r);const c=document.createElement('button');c.className='btn btn-primary';c.textContent='ต่อ';c.onclick=fin;prm.appendChild(c)};prm.appendChild(b)});
      const n=document.createElement('p');n.className='nt';n.textContent='เลือกได้ครั้งเดียว';prm.appendChild(n)}
    else{const c=document.createElement('button');c.className='btn btn-primary';c.textContent='ต่อ';c.onclick=fin;prm.appendChild(c)}}
  function endSV(){busy=true;prm.innerHTML='';const E=SVEND46[S.end]||SVEND46.dead;svSave46(S,S.end);const box=document.createElement('div');box.className='fb';box.innerHTML='<b>'+esc(E.t)+'</b><br>'+esc(E.x(S));prm.appendChild(box);
    const u=document.createElement('ul');u.className='fa';SVFACT46.forEach(f=>{const li=document.createElement('li');li.textContent=f;u.appendChild(li)});prm.appendChild(u);
    const d=document.createElement('div');d.className='src';d.innerHTML='<b>ที่มา</b> <a href="https://thebulletin.org/2023/08/catapulting-corpses-a-famous-case-of-medieval-biological-warfare-probably-never-happened/" target="_blank" rel="noopener">Catapulting corpses · Bulletin of the Atomic Scientists</a> · <a href="https://www.fondation-ipsen.org/podcast/history-of-plague/" target="_blank" rel="noopener">The history of plague · Fondation Ipsen</a>';prm.appendChild(d);
    const nv=document.createElement('div');nv.className='nav';prm.appendChild(nv);stBtn42(nv,'ใช้ชีวิตอีกครั้ง',()=>{alive=false;sv46Start()},1);stBtn42(nv,'ไปเรียนรู้ 9 ฉาก',()=>{alive=false;plOpen45()})}
  const press=d=>{hold=d};const mkc=(lab,d)=>{const b=document.createElement('button');b.className='btn btn-ghost';b.textContent=lab;b.onpointerdown=e=>{e.preventDefault();press(d)};b.onpointerup=b.onpointerleave=b.onpointercancel=()=>press(0);ctl.appendChild(b)};mkc('◀',-1);mkc('▶',1);
  const kd=e=>{if(!cv.isConnected){document.removeEventListener('keydown',kd);document.removeEventListener('keyup',ku);return}if(e.key==='ArrowLeft'||e.key==='a')hold=-1;if(e.key==='ArrowRight'||e.key==='d')hold=1;if((e.key==='Enter'||e.key==='e')&&!busy){const b=prm.querySelector('.op');if(b)b.click()}},ku=e=>{if(['ArrowLeft','ArrowRight','a','d'].includes(e.key))hold=0};document.addEventListener('keydown',kd);document.addEventListener('keyup',ku);
  let lastNear=null;
  const fr=now=>{if(!alive||!cv.isConnected){document.removeEventListener('keydown',kd);document.removeEventListener('keyup',ku);return}const dt=Math.min(.05,(now-last)/1000);last=now;const t=(now-t0)/1000;
    if(hold&&!busy&&!S.end){S.dir=hold;S.px=Math.max(20,Math.min(1900,S.px+hold*(S.ill?38:70)*dt))}
    const nn=near();if(nn!==lastNear){lastNear=nn;btns()}
    const cam=Math.max(0,Math.min(1600,S.px-160));x.clearRect(0,0,320,180);let lights=[];
    for(let i=0;i<6;i++){const ox=i*320-cam;if(ox>320||ox<-320)continue;x.save();x.beginPath();x.rect(Math.max(0,ox),0,320,180);x.clip();x.translate(ox,0);const L=SVDRAW46[i](x,t,S)||[];x.restore();lights=lights.concat(L.filter(Boolean).map(l=>Object.assign({},l,{x:l.x+ox})))}
    const pl=g45person(x,S.px-cam,172,{top:'#5a4a6a',bot:'#3a3040',hat:'cap',hatc:'#2a2030',skin:G45P.skin[0],hair:G45P.hair[1],dir:S.dir,ph:5,hold:S.slot===2?'lamp':null},hold?t*3:t);if(pl)lights.push(pl);
    if(S.late&&S.day>=28)g45snow(x,t,70);const amb=[.18,.08,.74][S.slot]+(S.late?.08:0);g45light(x,LL,Math.min(.9,amb),lights);
    const h=near();if(h&&!busy){x.fillStyle='rgba(10,8,16,.75)';const tw=h.n.length*6+12;x.fillRect((h.x+Math.floor(S.px/320)*320-cam)-tw/2,34,tw,13);x.fillStyle='#ffe2a8';x.font='9px "DejaVu Sans",sans-serif';x.textAlign='center';x.fillText(h.n,h.x+Math.floor(S.px/320)*320-cam,44);x.textAlign='left'}
    requestAnimationFrame(fr)};
  drawHud();btns();if(!S.log.length){say('กองทัพของข่านจานีเบกตั้งค่ายนอกกำแพงมาหลายวันแล้ว กำแพงคัฟฟาสูงและแข็งแรง ทุกคนเชื่อว่าเมืองจะอยู่ได้ ท่าเรือยังเปิด เรือจากเจนัวยังนำอาหารมาส่ง');const K=S.K;const kn=[K.flea&&'คุณรู้ว่าหมัดหนูพาเชื้อ',K.iso&&'คุณรู้เรื่องการแยกคนป่วย',K.care&&'คุณรู้วิธีดูแลคนป่วยโดยไม่ทิ้งเขา',K.lemon&&'คุณพกมะนาวมาจากห้องเรียน'].filter(Boolean);if(kn.length)say('ความรู้ที่ติดตัวมาจากห้องเรียน: '+kn.join(' · '))}
  requestAnimationFrame(fr)}catch(e){}}
/* what you can do at each place; every action takes part of the day */
function svActs46(S,k){const A=[],K=S.K,ph=S.day<12?0:S.day<24?1:2;const use=(say,next,msg)=>{say(msg);svTick46(S,say,next)};
  if(k==='sleep')A.push(['นอน จบวันนี้',(say,next)=>{S.slot=2;svTick46(S,say,next)}]);
  if(k==='hearth'){if(!S.fire&&S.wood>0)A.push(['จุดไฟ (ใช้ไม้ 1)',(say,next)=>{S.wood--;S.fire=1;S.warm=Math.min(100,S.warm+20);say('ไฟติด ห้องอุ่นขึ้น น้องเข้ามานั่งใกล้')}]);if(S.food>=8)A.push(['ทำอาหารให้ทุกคน',(say,next)=>{S.food-=8;S.ate=1;S.mor+=4;use(say,next,'ซุปข้าวบาร์เลย์ใส่ปลาแห้ง ทุกคนได้กินคนละถ้วย')}])}
  if(k==='family'){if(S.mom==='sick'||S.sis==='sick'){A.push(['ดูแลคนป่วยในบ้าน',(say,next)=>{S.exp+=K.iso?.08:.2;S.mor+=3;const who=S.mom==='sick'?'mom':'sis';if(Math.random()<(K.care?.45:.3)){S[who+'Save']=1}use(say,next,'คุณเช็ดตัว ป้อนน้ำ และนั่งข้างเตียงทั้งคืน')}]);if(K.iso)A.push(['แยกคนป่วยไว้อีกมุมของบ้าน (ความรู้จากรากูซา)',(say,next)=>{S.iso=1;S.exp=Math.max(0,S.exp-.1);use(say,next,'คุณกั้นมุมห้องด้วยผ้าและตู้ แยกที่นอน แยกถ้วย')}])}
    else A.push(['คุยกับแม่และน้อง',(say,next)=>{S.mor+=6;use(say,next,ph===0?'น้องร้องเพลงที่ได้ยินจากทหารบนกำแพง แม่หัวเราะ':ph===1?'แม่ถามว่าอาหารเหลือกี่วัน คุณโกหกว่ายังพอ':'ไม่มีใครพูดมาก น้องนอนหนุนตักคุณจนหลับ')}])}
  if(k==='search')A.push(['ค้นหาของในบ้านที่คนทิ้งไป',(say,next)=>{const r=Math.random();let m;if(r<.45-ph*.1){const f=8+((Math.random()*7)|0);S.food+=f;m='เจอถุงถั่วแห้งในหีบ อาหาร +'+f}else if(r<.7){S.wood+=2;m='คุณรื้อชั้นวางของได้ไม้ฟืนสองท่อน'}else if(r<.8){S.coin+=3;m='มีเหรียญเงินซ่อนใต้พื้น'}else m='ไม่เจออะไร บ้านถูกค้นไปหมดแล้ว';if(ph>=1){S.exp+=K.flea?.05:.12;m+=ph===2?' ในห้องมีกลิ่นแปลกๆ และหนูตายสองตัว':''}use(say,next,m)}]);
  if(k==='search'&&S.day>=20)A.push(['รื้อประตูและคานบ้านร้างไปทำฟืน',(say,next)=>{S.wood+=3;S.mor-=2;use(say,next,'ประตูบ้านคนที่ไม่กลับมาแล้ว กลายเป็นไฟให้บ้านคุณได้สามคืน')}]);
  if(k==='rats'){A.push(['จับหนูไปทำอาหาร',(say,next)=>{S.food+=10;S.exp+=K.flea?.08:.35;S.mor-=4;use(say,next,K.flea?'คุณรู้ว่าหมัดบนตัวหนูคือสิ่งที่อันตราย จึงจับด้วยไม้หนีบ ราดน้ำร้อน และต้มนานก่อนกิน อาหาร +10':'คุณจับหนูได้สามตัว ต้มกินกับน้ำ ไม่มีใครถามว่าเนื้ออะไร อาหาร +10 (ในยุคนั้นไม่มีใครรู้ว่าหมัดบนตัวหนูพาเชื้อ)')}]);A.push(['ปล่อยไว้ เดินอ้อม',(say)=>{say('คุณเดินอ้อมกองหนูตาย ตามถนนมีมากขึ้นทุกวัน')}])}
  if(k==='market'){const price=ph===0?3:ph===1?7:0;if(price&&S.coin>=price)A.push(['ซื้อขนมปังและปลาแห้ง ('+price+' เหรียญ)',(say,next)=>{S.coin-=price;S.food+=12;use(say,next,ph===0?'แม่ค้ายังยิ้ม ราคาเท่าเดิม':'ราคาขึ้นเป็นสองเท่าตั้งแต่สัปดาห์ก่อน แม่ค้าไม่ยิ้มแล้ว')}]);if(ph===2)A.push(['ดูแผงที่ว่างเปล่า',(say)=>{say('ไม่มีอะไรขายแล้ว แผงผ้าใบขาดปลิวตามลม')}]);if(S.coin>=2&&ph<2)A.push(['ซื้อไม้ฟืน (2 เหรียญ)',(say,next)=>{S.coin-=2;S.wood+=2;use(say,next,'ได้ไม้ฟืนสองท่อน')}])}
  if(k==='well'){A.push(['ตักน้ำ',(say,next)=>{S.water=Math.min(50,S.water+(ph===2?10:18));use(say,next,ph===2?'แถวยาวมาก น้ำในบ่อลดลง ได้แค่ครึ่งถัง':'น้ำเย็นจัด เต็มสองถัง')}])}
  if(k==='church'){if(S.day>=18){A.push(['ช่วยดูแลคนป่วยหน้าโบสถ์',(say,next)=>{S.exp+=K.iso?.1:.22;S.mor+=6;S.helped++;use(say,next,K.care?'คุณป้อนน้ำ เปลี่ยนผ้า และนั่งฟังเขาพูดถึงลูกที่อยู่เจนัว บางคนแค่ไม่อยากตายคนเดียว':'คุณป้อนน้ำคนป่วยที่นอนเรียงกัน บาทหลวงขอบคุณ ไม่มีใครรู้ว่าจะช่วยอะไรได้มากกว่านี้')}])}
    A.push(['สวดภาวนา',(say,next)=>{S.mor+=8;use(say,next,ph===2?'ในโบสถ์มีคนนั่งเต็ม ไม่มีใครร้องเพลงแล้ว':'เสียงสวดดังก้อง คุณรู้สึกว่าเมืองจะผ่านไปได้')}])}
  if(k==='wall')A.push(['เฝ้ายามบนกำแพง รับขนมปังปันส่วน',(say,next)=>{S.food+=ph===2?4:ph===1?6:8;S.mor+=ph===0?6:-2;S.warm-=5;use(say,next,ph===0?'ทหารร้องเพลงล้อกองทัพข้างล่าง ใครๆ ก็บอกว่ากำแพงนี้ไม่มีวันแตก':ph===1?'กองไฟในค่ายข้าศึกน้อยลงทุกคืน มีคนบอกว่าข้างล่างก็อดอยากและป่วยเหมือนกัน':'บนกำแพงเหลือคนเฝ้าไม่กี่คน ขนมปังปันส่วนเหลือก้อนเล็กนิดเดียว')}]);
  if(k==='fish')A.push(['ตกปลาที่ท่า',(say,next)=>{const g=Math.random()<.6?7+((Math.random()*6)|0):0;S.food+=g;S.warm-=8;use(say,next,g?'ได้ปลาตัวเล็ก อาหาร +'+g:'ลมแรง ไม่ได้อะไรเลย มือชาไปหมด')}]);
  if(k==='ship')A.push(['ถามคนบนเรือว่าจะออกเมื่อไร',(say)=>{say(S.day<30?'กะลาสีบอกว่าเรือรอสินค้าอยู่ ยังไม่ออก':'กะลาสีกระซิบว่าเรือจะออกในอีกไม่กี่วัน ใครมีเงินก็ขึ้นได้')}]);
  return A}
/* time passes: three parts to a day; at night the family eats, drinks, and keeps warm, and illness takes its course */
function svTick46(S,say,next){S.slot++;if(S.slot<3){S.mor=Math.max(0,Math.min(100,S.mor));next(svEvent46(S,'slot'));return}
  S.slot=0;const n=1+(S.mom!=='dead'?1:0)+(S.sis!=='dead'?1:0);let m=[];
  if(!S.ate){if(S.food>=n*3){S.food-=n*3;m.push('ทุกคนได้กินมื้อเย็น')}else{S.food=Math.max(0,S.food-2);S.hp-=9;S.mor-=6;m.push('อาหารไม่พอ ทุกคนนอนท้องว่าง')}}S.ate=0;
  if(S.water>=n*2){S.water-=n*2}else{S.water=0;S.hp-=10;m.push('น้ำหมด ปากแห้งทั้งคืน')}
  if(!S.fire&&S.wood>0){S.wood--;S.fire=1;m.push('คุณก่อไฟก่อนนอน ไม้เหลือ '+S.wood)}if(S.fire){S.fire=0;S.warm=Math.min(100,S.warm+(S.late?14:22))}else{S.warm-=S.late?12:6}S.warm=Math.max(0,Math.min(100,S.warm));if(S.warm<25){S.hp-=6;m.push('คืนนี้หนาวจนนอนไม่หลับ')}
  if(S.K.lemon&&S.day===20){S.hp+=6;m.push('มะนาวที่พกมาช่วยให้เหงือกไม่บวมเหมือนคนอื่น')}
  if(!S.ill&&S.exp>0&&Math.random()<S.exp*.35){S.ill=1;S.illD=0}S.exp*=.6;
  if(S.ill){S.illD++;S.hp-=S.illD<=1?8:16;m.push(S.illD===1?'คุณมีไข้สูง ใต้รักแร้เจ็บ':'ก้อนบวมใหญ่ขึ้น ทั้งตัวร้อนเหมือนไฟ');if(S.illD>=4){if(S.hp>35&&Math.random()<.45){S.ill=0;S.hp=Math.max(20,S.hp);m.push('เช้าวันที่ห้า ไข้ลด คุณรอดมาได้ แต่ร่างกายอ่อนแรงมาก')}else{S.end='plague';S.hp=0}}}
  for(const who of ['mom','sis']){if(S[who]==='sick'){S[who+'D']=(S[who+'D']||0)+1;if(S[who+'D']>=4){if(S[who+'Save']||Math.random()<.25){S[who]='well';m.push((who==='mom'?'แม่':'น้อง')+'ไข้ลดแล้ว')}else{S[who]='dead';S.mor-=25;m.push((who==='mom'?'แม่':'น้อง')+'จากไปตอนรุ่งสาง')}}}
    else if(S[who]==='well'&&S.day>=19&&Math.random()<(S.iso?.03:.07)+(S.ill?.12:0)){S[who]='sick';S[who+'D']=0;m.push((who==='mom'?'แม่':'น้อง')+'เริ่มมีไข้')}}
  S.hp=Math.min(100,S.hp+(S.food>20&&S.water>10&&S.warm>40?3:0));S.mor=Math.max(0,Math.min(100,S.mor-(S.day>24?3:0)));
  S.day++;if(S.day>=28)S.late=1;if(m.length)say('คืนที่ '+(S.day-1)+': '+m.join(' · '));
  if(!S.end&&S.hp<=0)S.end=S.water<=0?'thirst':S.food<=0?'hunger':'cold';
  if(!S.end&&S.day>40)S.end=S.mom==='dead'&&S.sis==='dead'?'alone':'lifted';svSave46(S);next(S.end?null:svEvent46(S,'day'))}
/* the siege's own calendar */
function svEvent46(S,w){if(w!=='day')return null;const d=S.day,K=S.K;const once=(k,f)=>{if(S.done[k])return null;S.done[k]=1;return f()};
  if(d===5)return once('e5',()=>({t:'ลูกธนูไฟข้ามกำแพง',x:'ไฟไหม้โกดังขนสัตว์ใกล้ท่าเรือ คนทั้งย่านวิ่งตักน้ำดับไฟจนรุ่งเช้า ไม่มีใครตาย ทหารหัวเราะกันบนกำแพง'}));
  if(d===12)return once('e12',()=>({t:'ร้านขนมปังปิด',x:'เตาอบหลังสุดท้ายในย่านปิดเพราะไม่มีแป้ง สภาเมืองประกาศแจกขนมปังปันส่วนให้คนที่ขึ้นเฝ้ากำแพง'}));
  if(d===15)return once('e15',()=>({t:'ข่าวจากนอกกำแพง',x:'ทหารบนกำแพงเล่าว่าในค่ายข้าศึกมีคนตายทุกวัน ศพกองอยู่หลังเต็นท์ กองไฟน้อยลงทุกคืน บางคนบอกว่าพระเจ้าลงโทษพวกเขา'}));
  if(d===18)return once('e18',()=>({t:'เด็กบ้านตรงข้าม',x:'ลูกชายของช่างไม้บ้านตรงข้ามมีไข้สูงและก้อนบวมที่คอ แม่ของเขายืนร้องไห้หน้าบ้าน ขอให้ใครก็ได้ไปตามหมอ',o:[['เข้าไปช่วยอุ้มเด็กไปโบสถ์',S=>{S.exp+=K.iso?.12:.28;S.mor+=8;S.helped++;return'คุณอุ้มเด็กไปถึงโบสถ์ เขาเกาะเสื้อคุณแน่น บาทหลวงรับไว้ แม่ของเขาจับมือคุณโดยไม่พูดอะไร'}],['ช่วยไปตามบาทหลวงแทน ไม่เข้าใกล้',S=>{S.exp+=.04;S.mor+=2;return'บาทหลวงมาถึงตอนค่ำ คุณยืนดูจากหน้าต่าง'}],['ปิดประตูบ้าน',S=>{S.mor-=8;return'คุณได้ยินเสียงแม่ของเด็กเคาะประตูบ้านอื่นไปเรื่อยๆ จนเงียบ'}]]}));
  if(d===22)return once('e22',()=>({t:'หนูตายตามถนน',x:'เช้านี้มีหนูตายนอนเกลื่อนในถนนบ้านร้าง บางตัวยังกระตุกอยู่ คนไม่ค่อยสนใจ เพราะในเมืองที่ถูกล้อม หนูเป็นเรื่องปกติ'+(K.flea?' แต่คุณรู้ว่าเมื่อหนูตายพร้อมกันมากๆ หมัดที่อยู่บนตัวมันจะหาตัวใหม่ และตัวใหม่คือคน':'')}));
  if(d===24)return once('e24',()=>({t:'ตลาดว่างเปล่า',x:'ไม่มีอะไรขายเหลือในตลาด คนเริ่มจับหนู จับนก และต้มหนังสัตว์กิน'}));
  if(d===28)return once('e28',()=>({t:'หิมะแรก',x:'ลมจากทุ่งหญ้าพัดหิมะเข้ามาในเมือง ไม้ฟืนหายากขึ้นทุกวัน คนเริ่มรื้อประตูบ้านร้างไปเผา'}));
  if(d===33)return once('e33',()=>({t:'เรือจะออก',x:'กะลาสีบอกว่าเรือเจนัวลำสุดท้ายจะออกในอีกสองวัน ค่าโดยสารสามคนคือ 10 เหรียญ บนเรือไม่มีใครรู้ว่าใครป่วยอยู่บ้าง',o:[['ขึ้นเรือ พาครอบครัวหนี',S=>{if(S.coin>=10){S.coin-=10;S.end='ship';return'คุณพาแม่กับน้องลงเรือในคืนที่ไม่มีดวงจันทร์'}S.mor-=10;return'เงินไม่พอ กะลาสีส่ายหน้า คุณยืนดูเรือจนลับตา'}],['อยู่กับเมือง',S=>{S.shipGone=1;return'คุณยืนดูเรือแล่นออกไปจากท่า ไม่รู้ว่าโชคดีหรือโชคร้าย'}]]}));
  if(d===36){S.shipGone=1;return once('e36',()=>({t:'เสียงเงียบนอกกำแพง',x:'คืนนี้ไม่มีกองไฟในค่ายข้าศึกเลย มีแต่ควันลอยอยู่ไกลๆ'}))}
  return null}
const SVEND46={
 lifted:{t:'การล้อมสิ้นสุด',x:S=>'เช้าวันที่สี่สิบเอ็ด ทหารบนกำแพงตะโกนว่าค่ายข้างล่างว่างเปล่า กองทัพข่านถอยไปแล้ว เพราะทหารป่วยตายมากเกินกว่าจะล้อมต่อ คุณรอดมาได้'+(S.mom==='dead'||S.sis==='dead'?' แต่ไม่ได้รอดมาทุกคน':' และทุกคนในบ้านยังอยู่')+' คุณช่วยคนป่วย '+S.helped+' ครั้ง แต่โรคยังอยู่ในเมือง และในไม่ช้า เรือที่ออกจากที่นี่ก็จะพามันไปถึงอิตาลี'},
 alone:{t:'การล้อมสิ้นสุด แต่บ้านว่างเปล่า',x:S=>'กองทัพข่านถอยไปแล้ว คุณยืนอยู่ในบ้านที่เคยมีเสียงแม่กับน้อง คนที่รอดจากโรคระบาดหลายคนเล่าว่า ความเงียบหลังจากนั้นยากกว่าวันที่ป่วย'},
 ship:{t:'เรือออกจากทะเลดำ',x:S=>'เรือแล่นออกไปทางตะวันตก ผ่านคอนสแตนติโนเปิล มุ่งหน้าไปอิตาลี ไม่กี่สัปดาห์ต่อมา มีกะลาสีคนแรกบนเรือเริ่มมีไข้ ในปี 1347 เรือจากทะเลดำนำโรคไปถึงซิซิลีและเมืองท่าของอิตาลี คุณหนีจากการล้อมได้ แต่ไม่ได้หนีจากโรค และโรคก็ไม่ได้อยู่แค่ที่คัฟฟา'},
 plague:{t:'คุณจากไปด้วยโรคระบาด',x:S=>'วันที่ '+S.day+' ไข้ไม่ลดอีกแล้ว คนในยุคนั้นไม่รู้ว่าเชื้อแบคทีเรียตัวเล็กกว่าเมล็ดข้าวเป็นพันเท่า และกว่าจะมียาปฏิชีวนะที่รักษาได้ ต้องรออีกเกือบหกร้อยปี'},
 hunger:{t:'ความหิว',x:S=>'วันที่ '+S.day+' อาหารหมดนานเกินไป ในเมืองที่ถูกล้อม คนตายจากความหิวไม่น้อยกว่าคนที่ตายจากอาวุธ'},
 thirst:{t:'ไม่มีน้ำ',x:S=>'วันที่ '+S.day+' น้ำหมด ร่างกายอยู่ได้โดยไม่มีอาหารหลายสัปดาห์ แต่ไม่มีน้ำได้เพียงไม่กี่วัน'},
 cold:{t:'ความหนาว',x:S=>'วันที่ '+S.day+' คืนที่หนาวที่สุดมาพร้อมกับร่างกายที่อ่อนแรงจากความหิว'},
 dead:{t:'จบ',x:S=>'ชีวิตรอบนี้จบลงแล้ว'}};
const SVFACT46=['กองทัพโกลเดนฮอร์ดของข่านจานีเบกล้อมคัฟฟาในปี 1346 และต้องถอยไปเพราะทหารป่วยตายจำนวนมาก','วันต่อวันในเกมเป็นการจำลอง เราไม่มีบันทึกชีวิตประจำวันของชาวคัฟฟาในการล้อมครั้งนั้น แต่ความหิว ความหนาว และการกินหนูในเมืองที่ถูกล้อม มีบันทึกจากการล้อมเมืองอื่นหลายครั้ง เช่น ปารีสในปี 1870–1871','ก่อนกาฬโรคจะระบาดในคน มักมีหนูตายจำนวนมากก่อน เพราะหมัดที่อยู่บนหนูที่ตายจะย้ายไปหาตัวใหม่ ซึ่งรวมถึงคนด้วย','✦ เรื่องเหวี่ยงศพข้ามกำแพงไม่อยู่ในเกม เพราะนักประวัติศาสตร์หลายคนสงสัยว่าไม่เคยเกิดขึ้นจริง'];

/* ---------- 5. the New World: its anthem, and its first peoples' thought between the years ---------- */
const ANTH46=[['F4',1],['D4',1],['Bb3',2],['D4',2],['F4',2],['Bb4',4],['D5',3],['C5',1],['Bb4',2],['D4',2],['E4',2],['F4',4],['F4',1],['F4',1],['D5',3],['C5',1],['Bb4',2],['A4',4],['G4',1],['A4',1],['Bb4',2],['Bb4',2],['F4',2],['D4',2],['Bb3',2]];
function anthem46(){try{if(+store.get('sit.snd',2)===0)return;const C=window.AudioContext||window.webkitAudioContext;if(!C)return;const ac=new C();const vol=clamp(+store.get('sit.vol',100),0,100)/100*.18;
  const fq=n=>{const m={C:0,D:2,E:4,F:5,G:7,A:9,B:11};let s=m[n[0]];let i=1;if(n[1]==='b'){s--;i++}else if(n[1]==='#'){s++;i++}const o=+n.slice(i);return 440*Math.pow(2,(s+(o-4)*12-9)/12)};
  let t=ac.currentTime+.15;const beat=.24;for(const [n,d] of ANTH46){const f=fq(n);for(const [type,mul,g] of [['triangle',1,1],['square',1,.18],['sine',.5,.4]]){const o=ac.createOscillator(),gn=ac.createGain();o.type=type;o.frequency.value=f*mul;gn.gain.setValueAtTime(.0001,t);gn.gain.exponentialRampToValueAtTime(vol*g,t+.03);gn.gain.exponentialRampToValueAtTime(.0001,t+d*beat*.95);o.connect(gn);gn.connect(ac.destination);o.start(t);o.stop(t+d*beat)}t+=d*beat}
  setTimeout(()=>{try{ac.close()}catch(e){}},(t-ac.currentTime+1)*1000)}catch(e){}}
let anthOnce46=false;
{const _nl=newLife;newLife=function(){const r=_nl.apply(this,arguments);try{if(!TEST&&typeof chap!=='undefined'&&chap===28&&!anthOnce46){anthOnce46=true;anthem46();log(X('เสียงแตรเพลง "The Star-Spangled Banner" ลอยมาจากที่ไหนสักแห่ง ✦ เนื้อเพลงเขียนในปี 1814 และกลายเป็นเพลงชาติสหรัฐฯ ในปี 1931 คนในบทนี้ส่วนใหญ่ไม่เคยได้ยินมัน','เสียงแตรเพลง "The Star-Spangled Banner" ลอยมาจากที่ไหนสักแห่ง'),null,'it')}}catch(e){}return r}}
/* quiet scenes: ideas of the continent's first peoples, told in our own words, with who said it and how well we know it */
const NWQ46=[
 {k:'thanks',sc:'longhouse',t:'คำกล่าวก่อนทุกสิ่ง',x:'ก่อนการประชุมและพิธีสำคัญ ชาวเฮาเดอโนโชนี (อิโรควอยส์) กล่าวขอบคุณไล่ไปทีละอย่าง ผู้คน แผ่นดิน น้ำ ปลา พืช สมุนไพร สัตว์ ต้นไม้ นก ลม ฟ้าร้อง ดวงอาทิตย์ ดวงจันทร์ และดวงดาว หลังขอบคุณแต่ละอย่าง ผู้ฟังจะตอบว่า ตอนนี้ใจของเราเป็นหนึ่งเดียวกัน',n:'คำกล่าวนี้เรียกว่า Ohén:ton Karihwatéhkwen แปลว่าคำที่มาก่อนทุกสิ่ง ยังใช้อยู่จนถึงทุกวันนี้ ถ้อยคำแต่ละครั้งต่างกันไปตามผู้กล่าว'},
 {k:'peace',sc:'longhouse',t:'ต้นไม้แห่งสันติภาพ',x:'ตำนานของชาวเฮาเดอโนโชนีเล่าว่า ผู้สร้างสันติภาพกับไฮยาวาธา รวมห้าชาติที่เคยรบกันให้เป็นสหพันธ์เดียว แล้วให้ทุกชาติฝังอาวุธไว้ใต้รากต้นสนขาว ไม่ให้มันกลับขึ้นมาอีก กฎหมายใหญ่แห่งสันติภาพสอนให้ผู้นำคิดถึงคนที่ยังไม่เกิด',n:'✦ สำนวน "คิดเผื่อลูกหลานเจ็ดชั่วคน" ที่คนยุคหลังนิยมยกมา เป็นการสรุปความคิดนี้ในยุคใหม่ ไม่ใช่ถ้อยคำเดิมในกฎหมาย ส่วนวันที่ก่อตั้งสหพันธ์ยังถกเถียงกันอยู่ ตั้งแต่ศตวรรษที่ 12 ถึง 16'},
 {k:'relatives',sc:'plains',t:'ญาติทั้งหมดของเรา',x:'ชาวลาโกตาลงท้ายคำอธิษฐานด้วยคำว่า มิตากูเย โอยาซิน แปลว่าญาติทั้งหมดของฉัน ญาติในที่นี้ไม่ได้หมายถึงแค่คนในครอบครัว แต่รวมถึงผู้คน สัตว์ ต้นไม้ หิน และทุกสิ่งที่มีชีวิตร่วมโลกกัน',n:'คำนี้ยังใช้ในพิธีของชาวลาโกตาจนถึงวันนี้'},
 {k:'land',sc:'plains',t:'ขายแผ่นดินได้อย่างไร',x:'ในปี 1810 เทคัมเซห์ ผู้นำชาวชอว์นี พูดกับวิลเลียม แฮร์ริสัน ผู้ว่าการดินแดนอินดีแอนาว่า แผ่นดินเป็นของชนพื้นเมืองทุกเผ่าร่วมกัน ไม่มีเผ่าไหนมีสิทธิ์ขายมันคนเดียว แนวคิดว่าแผ่นดินเป็นของส่วนรวม ขัดกับแนวคิดของผู้มาใหม่ที่ซื้อขายที่ดินเป็นแปลงๆ',n:'✦ คำพูดของเทคัมเซห์ถูกบันทึกโดยคนอื่นและผ่านการแปล ประโยคที่มักยกมาว่า "ทำไมไม่ขายอากาศ ขายเมฆ ขายทะเลด้วยเล่า" น่าจะเป็นถ้อยคำที่เรียบเรียงทีหลัง แต่ความคิดว่าแผ่นดินเป็นของทุกเผ่าร่วมกัน เป็นสิ่งที่เขายืนยันจริง'},
 {k:'give',sc:'longhouse',t:'คนที่รวยที่สุดคือคนที่ให้มากที่สุด',x:'ชนพื้นเมืองชายฝั่งตะวันตกเฉียงเหนือ จัดพิธีพ็อตแลตช์ เจ้าภาพแจกผ้าห่ม อาหาร และของมีค่าให้แขก ยิ่งให้มาก ฐานะยิ่งสูง ความมั่งคั่งวัดจากสิ่งที่ให้ออกไป ไม่ใช่สิ่งที่เก็บไว้',n:'รัฐบาลแคนาดาห้ามพิธีพ็อตแลตช์ในปี 1885 และยกเลิกการห้ามในปี 1951'},
 {k:'silence',sc:'plains',t:'ความเงียบ',x:'โอฮิเยซา หรือชาลส์ อีสต์แมน หมอชาวดาโกตา เขียนหนังสือในปี 1911 เล่าว่าในวัยเด็ก เขาถูกสอนให้ออกไปอยู่กับความเงียบในป่าและทุ่งหญ้าทุกวัน คนที่สงบและควบคุมตัวเองได้ คือคนที่ได้รับความเคารพ ไม่ใช่คนที่พูดมาก',n:'หนังสือ The Soul of the Indian ของอีสต์แมนเป็นหนึ่งในหนังสือแรกๆ ที่ชนพื้นเมืองเขียนอธิบายความเชื่อของตัวเองเป็นภาษาอังกฤษ'},
 {k:'seattle',sc:'longhouse',t:'คำพูดที่ไม่ได้พูด',x:'คำปราศรัยที่โด่งดังของหัวหน้าเผ่าซีแอตเทิลเรื่องการดูแลโลก ที่คนแชร์กันทั่วโลก ส่วนใหญ่ไม่ใช่คำพูดของเขา ฉบับแรกเขียนโดยหมอคนหนึ่งในปี 1887 สามสิบกว่าปีหลังเหตุการณ์ และฉบับที่โด่งดังที่สุดเขียนขึ้นใหม่สำหรับภาพยนตร์ในปี 1971',n:'✦ หัวหน้าซีแอตเทิลมีตัวตนจริงและเคยพูดในการประชุมราวปี 1854 แต่เราไม่รู้ว่าเขาพูดว่าอะไรจริงๆ บทนี้อยู่ที่นี่เพื่อเตือนว่า เสียงของคนที่แพ้ มักถูกคนอื่นเขียนแทน'}];
function nwSeen46(){try{return (book29().nw46)||{}}catch(e){return {}}}
function nwShow46(Q){return new Promise(res=>{try{stCss42();plShell45;const el=document.createElement('div');el.id='nw46';el.style.cssText='position:fixed;inset:0;z-index:97;background:#07060c;overflow:auto;padding:18px 14px;cursor:pointer';
  const w=document.createElement('div');w.style.cssText='max-width:680px;margin:0 auto';el.appendChild(w);const c=document.createElement('canvas');c.width=320;c.height=180;c.style.cssText='width:100%;image-rendering:pixelated;display:block;border-radius:6px';w.appendChild(c);g45stage(c,Q.sc);
  const h=document.createElement('h2');h.style.cssText='font-family:var(--display);color:var(--bone);margin:12px 0 6px';h.textContent=Q.t;w.appendChild(h);const p=document.createElement('p');p.style.cssText='font-size:16px;line-height:1.8;color:#ffe2a8';p.textContent=Q.x;w.appendChild(p);
  const n=document.createElement('p');n.style.cssText='font-size:12.5px;color:var(--ash);border-left:2px solid var(--line);padding-left:8px;line-height:1.6';n.textContent=Q.n;w.appendChild(n);const s=document.createElement('p');s.style.cssText='font-size:12.5px;color:#8a7ad8;margin-top:14px';s.textContent='เล่าใหม่ด้วยถ้อยคำของเกม ไม่ใช่คำพูดตรงตัว · แตะที่ใดก็ได้เพื่อกลับไปใช้ชีวิตต่อ';w.appendChild(s);
  document.body.appendChild(el);try{const B=book29();B.nw46=B.nw46||{};B.nw46[Q.k]=1;if(!TEST)store.set('sit.book',B)}catch(e){}setTimeout(()=>{el.onclick=()=>{el.remove();res()}},900)}catch(e){res()}})}
async function nw46y(a){if(TEST||!S||S.ch!==28||window.__sitNoPause)return;if(![14,30,46,62].includes(a))return;S.nw46n=(S.nw46n||0);if(S.nw46n>=2)return;const sn=nwSeen46();const q=NWQ46.filter(z=>!sn[z.k]);const Q=(q.length?q:NWQ46)[Math.floor(Math.random()*(q.length||NWQ46.length))];S.nw46n++;await nwShow46(Q)}
{const _f=fun33;fun33=function(){_f();try{if(!TEST&&!window.__sitNoPause&&S&&S.ch===28&&!S.nw46end){S.nw46end=1;const sn=nwSeen46();const q=NWQ46.filter(z=>!sn[z.k]);const Q=q.length?q[0]:NWQ46[Math.floor(Math.random()*NWQ46.length)];setTimeout(()=>nwShow46(Q),1200)}}catch(e){}}}
if(typeof window!=='undefined')window.__v46={plIntro46,sv46Start,anthem46,nwShow46,NWQ46,svEvent46,svTick46,svActs46,SVHOME46};
