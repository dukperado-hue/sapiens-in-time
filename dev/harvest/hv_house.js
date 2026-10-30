/* ===================== The Last Harvest · the house, cut open like a doll's house (v0.54, Thai only) =====================
   Ground floor: kitchen with the hearth · Thomas's workshop · the store, where the real stock stands on the shelves.
   Upper floor: the bedroom · a corner for the sick. Under the roof: a place to keep a sick person apart. A small yard with hens (some runs).
   What happens in the run changes the house: boarded windows, a rat trap, a burnt-out bed, an empty peg where someone's things used to hang. */
const HVH={W:700,L:30,R:610,G:300,F1:194,F2:104,PEAK:34,kit:[36,250],work:[256,440],store:[446,604],bed:[36,380],sick:[386,604]};
function hvHouseScene(){const W=HVH.W;
  const sky={id:'sky',p:0,live(x,S,t,rg){const T=S.tod||0,cols=[['#cfe0f0','#f4e6d0'],['#9ec4e8','#f0e4c8'],['#e89a6a','#f6c88e'],['#141a38','#2a2e52']][T];const g=x.createLinearGradient(0,0,0,300);g.addColorStop(0,cols[0]);g.addColorStop(1,cols[1]);x.fillStyle=g;x.fillRect(rg.x0-10,-10,rg.x1-rg.x0+20,380);
      if(T===3){const r=hvRng(3);for(let i=0;i<60;i++){const X=rg.x0+r()*(rg.x1-rg.x0),Y=r()*200;x.globalAlpha=.4+.6*Math.abs(Math.sin(t*1.5+i));hvEll(x,X,Y,1,1);x.fillStyle='#f4f0e0';x.fill()}x.globalAlpha=1;hvEll(x,rg.x0+(rg.x1-rg.x0)*.82,58,13,13);x.fillStyle='#f4eed6';x.fill()}
      if(typeof hvAmbDrawSky==='function')hvAmbDrawSky(x,S,t,rg)}};
  const far={id:'far',p:.35,cache:true,draw(x,S,t,rg){const r=hvRng(41);for(let X=-40;X<rg.x1+40;X+=70+r()*40){const h=110+r()*70,w=60+r()*30;x.fillStyle='#8a7a86';x.fillRect(X,300-h,w,h);hvPath(x,[X-6,300-h,X+w/2,300-h-40,X+w+6,300-h]);x.fillStyle='#76666e';x.fill()}x.fillStyle='#6a5e64';x.fillRect(-20,296,rg.x1+40,80)}};
  const play={id:'play',p:1,live(x,S,t,rg){hvDrawHouse(x,S,t);if(S.drawActors)S.drawActors(x,t,rg)}};
  /* in front: the end of a beam and a hanging cloth, soft and dark */
  const front=[{kind:'beam',x:20,p:1.3,w:60,draw(x){x.fillRect(-14,0,28,380)}},{kind:'cloth',anim:1,x:860,p:1.35,w:120,draw(x,t){const w=Math.sin(t*1.5)*6;x.beginPath();x.moveTo(-50,0);x.lineTo(50,0);x.quadraticCurveTo(40+w,120,46+w,240);x.lineTo(-30+w,250);x.quadraticCurveTo(-40,120,-50,0);x.fill()}}];
  return {k:'house',W,GY:HVH.G,layers:[sky,far,play],front,lights:[],mask:[[0,W]],ver:1}}
/* draw the house from the back wall forward */
function hvDrawHouse(x,S,t){const R=S.life||{},H=R.home||{},st=R.store||{},T=S.tod||0,night=T===3,L=HVH.L,Rt=HVH.R,G=HVH.G,F1=HVH.F1,F2=HVH.F2;
  /* ground outside and the yard */x.fillStyle='#7a6a54';x.fillRect(-20,G,W0(),70);x.fillStyle='#6a7a4a';x.fillRect(Rt,G-4,120,8);
  /* the roof and attic */hvPath(x,[L-26,F2+6,320,HVH.PEAK,Rt+26,F2+6]);hvInk(x,'#9a5038',3);x.save();hvPath(x,[L-26,F2+6,320,HVH.PEAK,Rt+26,F2+6]);x.clip();x.strokeStyle='rgba(60,20,10,.35)';x.lineWidth=1;for(let y=HVH.PEAK;y<F2+8;y+=6){x.beginPath();x.moveTo(0,y);x.lineTo(700,y);x.stroke()}x.restore();
  hvPath(x,[L+8,F2,320,HVH.PEAK+18,Rt-8,F2]);hvInk(x,'#5a4436',2);x.save();hvPath(x,[L+8,F2,320,HVH.PEAK+18,Rt-8,F2]);x.clip();x.fillStyle='#6a5240';x.fillRect(0,0,700,F2);x.strokeStyle='rgba(30,16,10,.4)';x.lineWidth=3;for(let X=80;X<600;X+=60){x.beginPath();x.moveTo(X,F2);x.lineTo(320,HVH.PEAK+18);x.stroke()}x.restore();
  /* back walls: plaster between timbers, per room */const wall=(a,b,y0,y1,col)=>{x.fillStyle=col;x.fillRect(a,y0,b-a,y1-y0);x.strokeStyle='rgba(90,60,40,.18)';x.lineWidth=.8;for(let k=a;k<b;k+=3.6){x.beginPath();x.moveTo(k,y1);x.lineTo(k+8,y1-14);x.stroke()}};
  wall(HVH.kit[0],HVH.kit[1],F1+4,G,'#ead8b4');wall(HVH.work[0],HVH.work[1],F1+4,G,'#e2cfa8');wall(HVH.store[0],HVH.store[1],F1+4,G,'#d8c49c');wall(HVH.bed[0],HVH.bed[1],F2+4,F1-4,'#ecdcbc');wall(HVH.sick[0],HVH.sick[1],F2+4,F1-4,'#e2d4b4');
  /* back-wall windows: what the hour looks like outside; boards when Thomas has nailed them shut */const win=(X,Y)=>{const sky=[['#d8e8f4'],['#a8cce8'],['#f0a878'],['#1a2044']][T][0];hvRRect(x,X-14,Y,28,30,3);hvInk(x,sky,2.2);x.strokeStyle=HV.INK;x.lineWidth=1.6;x.beginPath();x.moveTo(X,Y);x.lineTo(X,Y+30);x.moveTo(X-14,Y+15);x.lineTo(X+14,Y+15);x.stroke();
    if(H.boarded){[[-.2,8],[.18,20]].forEach(([r,dy])=>{x.save();x.translate(X,Y+dy);x.rotate(r);hvRRect(x,-19,-4,38,8,1);hvInk(x,'#a8804c',1.6);x.restore()})}};win(150,F1+30);win(520,F1+30);win(120,F2+26);win(470,F2+26);
  /* the cat sits on the outside sill of the bedroom window some nights */if(S.catOn){hvCat(x,{X:470,Y:F2+56,dir:-1,t,col:S.catCol||'#2e2a30',s:.6})}
  /* timbers: floors, inner walls, the cut edge of the house */x.fillStyle='#5a3a26';x.fillRect(L,F1-4,Rt-L,10);x.fillRect(L,F2-4,Rt-L,9);x.fillRect(L,G-2,Rt-L,8);[HVH.kit[1],HVH.work[1]].forEach(X=>x.fillRect(X,F1+4,6,G-F1-4));x.fillRect(HVH.bed[1],F2+4,6,F1-F2-8);
  x.fillStyle='#3e2818';x.fillRect(L-6,F2-6,8,G-F2+12);x.fillRect(Rt-2,F2-6,8,G-F2+12);x.strokeStyle=HV.INK;x.lineWidth=2.4;x.strokeRect(L-6,F2-6,Rt-L+14,G-F2+12);
  /* ladders */const lad=(X,y0,y1)=>{x.strokeStyle='#7a5030';x.lineWidth=3;x.beginPath();x.moveTo(X,y0);x.lineTo(X,y1);x.moveTo(X+18,y0);x.lineTo(X+18,y1);x.stroke();x.lineWidth=2;for(let y=y0+8;y<y1;y+=12){x.beginPath();x.moveTo(X,y);x.lineTo(X+18,y);x.stroke()}};lad(226,F1-2,G);lad(360,F2-2,F1-4);
  /* kitchen: the hearth, the pot, the table */const hx=96;hvPath(x,[hx-40,G,hx-40,G-62,hx-30,G-74,hx+30,G-74,hx+40,G-62,hx+40,G]);hvInk(x,'#a89a88',2.4);x.fillStyle='#2a1c16';x.fillRect(hx-26,G-50,52,50);x.strokeStyle='rgba(60,50,44,.5)';x.lineWidth=1;for(let y=G-70;y<G;y+=9){x.beginPath();x.moveTo(hx-40,y);x.lineTo(hx-26,y);x.moveTo(hx+26,y);x.lineTo(hx+40,y);x.stroke()}
  if(H.fire){for(let i=0;i<3;i++){const f=Math.sin(t*9+i*2)*3;x.beginPath();x.moveTo(hx-14+i*14,G-4);x.quadraticCurveTo(hx-20+i*14,G-20+f,hx-12+i*14,G-28-f-i*2);x.quadraticCurveTo(hx-4+i*14,G-18,hx-6+i*14,G-4);x.fillStyle=['#f0a030','#f8d050','#e87828'][i];x.fill()}}else{x.fillStyle='#4a3a32';x.fillRect(hx-18,G-8,36,6)}
  x.strokeStyle='#2a1a10';x.lineWidth=1.6;x.beginPath();x.moveTo(hx,G-50);x.lineTo(hx,G-36);x.stroke();hvEll(x,hx,G-28,13,9);hvInk(x,'#3a3434',2);
  hvRRect(x,150,G-40,92,8,2);hvInk(x,'#9a6a40',2);x.fillStyle='#7a5030';x.fillRect(156,G-32,6,32);x.fillRect(230,G-32,6,32);if(night)hvCandle(x,196,G-40,t,12);
  [[168,G-44],[214,G-44]].forEach(([X,Y])=>{hvEll(x,X,Y,6,2.4);hvInk(x,'#c8b080',1.2)});
  /* workshop: the bench, tools, the planks in stock, the rat trap */hvRRect(x,276,G-46,150,10,2);hvInk(x,'#a07040',2.2);x.fillStyle='#7a5030';x.fillRect(284,G-36,7,36);x.fillRect(410,G-36,7,36);
  x.save();x.translate(300,G-58);x.rotate(-.2);x.fillStyle='#8a8a90';hvPath(x,[0,0,40,0,40,6,4,8]);x.fill();x.strokeStyle=HV.INK;x.lineWidth=1.2;x.stroke();x.fillStyle='#7a4a2a';x.fillRect(40,-2,12,10);x.restore();x.fillStyle='#5a3a20';x.fillRect(360,G-62,4,16);x.fillStyle='#8a8a90';x.fillRect(354,G-66,16,6);
  for(let i=0;i<Math.min(8,st.plank||0);i++){hvRRect(x,276+i*2,G-10-i*5,110,5,1);hvInk(x,'#c49058',1.2)}
  if(H.trap){hvRRect(x,412,G-12,22,12,2);hvInk(x,'#8a6a40',1.6);x.strokeStyle=HV.INK;x.lineWidth=1;x.beginPath();x.moveTo(414,G-12);x.lineTo(432,G-2);x.stroke()}
  /* the store: loaves, a water barrel (its level shows), firewood, herbs hanging */for(let k=0;k<3;k++){x.fillStyle='#8a6a44';x.fillRect(452,G-96+k*30,146,4)}
  for(let i=0;i<Math.min(9,st.food||0);i++){const X=462+(i%5)*24,Y=G-100+Math.floor(i/5)*30;hvEll(x,X,Y,10,6);hvInk(x,'#c98a44',1.6)}
  const wb=Math.min(1,(st.water||0)/8);hvRRect(x,546,G-44,40,44,6);hvInk(x,'#8a5a34',2.2);x.fillStyle='#4a6a8a';x.fillRect(549,G-41+40*(1-wb),34,40*wb);x.strokeStyle=HV.INK;x.lineWidth=1.6;[G-32,G-12].forEach(y=>{x.beginPath();x.moveTo(546,y);x.lineTo(586,y);x.stroke()});
  for(let i=0;i<Math.min(8,st.wood||0);i++){const X=462+(i%4)*18,Y=G-6-Math.floor(i/4)*10;hvEll(x,X,Y,9,5);hvInk(x,'#7a4a2a',1.4);hvEll(x,X+7,Y,2.4,3.6);x.fillStyle='#d8b080';x.fill()}
  for(let i=0;i<Math.min(6,st.herb||0);i++){const X=470+i*20,Y=G-64;x.strokeStyle='#5a3a20';x.lineWidth=1;x.beginPath();x.moveTo(X,Y-6);x.lineTo(X,Y);x.stroke();x.save();x.translate(X-6,Y-2);hvIcon(x,'herb',14);x.restore()}
  /* bedroom: two beds and a chest; the sick corner; the pallet under the roof */const bedS=(X,Y,w,col,burnt)=>{if(burnt){x.fillStyle='rgba(30,20,14,.35)';x.fillRect(X,Y-4,w,6);return}hvRRect(x,X,Y-16,w,16,3);hvInk(x,'#8a5a34',2);hvRRect(x,X+4,Y-22,w-8,8,3);hvInk(x,col,1.6);hvEll(x,X+12,Y-22,9,5);hvInk(x,'#efe6d4',1.4)};
  bedS(56,F1-4,120,'#8a7aa0');bedS(230,F1-4,70,'#7a9a7a');hvRRect(x,316,F1-28,40,24,3);hvInk(x,'#7a5030',2);if(night)hvCandle(x,336,F1-28,t,10);
  bedS(430,F1-4,110,'#9a8a7a',H.bedBurnt);x.fillStyle='rgba(200,190,170,.6)';x.fillRect(420,F2+20,2,F1-F2-30);
  hvRRect(x,250,F2-14,110,10,3);hvInk(x,'#8a7a6a',1.6);
  /* pegs by the door with each person's things; an empty peg is a person gone */const peg=[['thomas',552],['anna',570],['peter',588]];peg.forEach(([k,X])=>{x.fillStyle='#3a2414';x.fillRect(X-1,G-110,3,5);const P=(R.fam||{})[k];if(!P||P.dead){if(k==='peter'&&P&&P.dead){/* Peter's hat hangs where he left it */x.save();x.translate(X,G-100);hvEll(x,0,0,12,3);hvInk(x,'#8a3a1e',1.4);x.beginPath();x.moveTo(-6,0);x.bezierCurveTo(-6,-10,6,-10,6,0);hvInk(x,'#b8542e',1.4);x.restore()}return}
    if(k==='thomas'){x.fillStyle='#d8c8a4';x.fillRect(X-5,G-105,10,16)}else if(k==='anna'){x.fillStyle='#6a3a40';x.fillRect(X-4,G-105,8,14)}});
  /* the yard: the hen coop (some runs) and the gate */if(H.hens){hvRRect(x,624,G-30,56,30,3);hvInk(x,'#8a6a40',2);for(let i=0;i<H.hens;i++){const X=634+i*22+Math.sin(t*.7+i)*4,pk=Math.max(0,Math.sin(t*3+i*2))*3;x.save();x.translate(X,G+6);hvEll(x,0,-7,8,6);hvInk(x,'#f0e6d0',1.4);hvEll(x,6,-12+pk,3.4,3.4);hvInk(x,'#f0e6d0',1.2);x.fillStyle='#d84030';x.fillRect(5,-17+pk,3,3);x.fillStyle='#e0a040';x.beginPath();x.moveTo(9,-12+pk);x.lineTo(12,-11+pk);x.lineTo(9,-10+pk);x.fill();x.restore()}}
  x.fillStyle='#6a4428';for(let X=616;X<700;X+=12)x.fillRect(X,G-24,4,24);x.fillRect(612,G-18,90,3)}
const W0=()=>800;
/* where each person stands, sits or lies, from what they do today */
function hvHousePos(k,P,phase){const G=HVH.G,F1=HVH.F1;if(!P||P.dead)return null;
  if(P.inf>=3||(P.inf===2&&P.place==='attic'))return P.place==='attic'?{X:300,Y:HVH.F2-6,pose:'lie'}:{X:470,Y:F1-14,pose:'lie'};
  const task=P.task||'rest';const night=phase==='night';
  if(night)return k==='peter'?{X:262,Y:F1-14,pose:'sit',dir:1}:k==='thomas'?{X:238,Y:G,pose:'sit',dir:-1}:{X:160,Y:G,pose:'sit',dir:1};
  if(task==='soup')return {X:132,Y:G,pose:'work',dir:-1};if(task==='work'||task==='trap'||task==='board')return {X:350,Y:G,pose:'work',dir:1};if(task==='care')return {X:420,Y:F1,pose:'work',dir:1};if(task==='clean'||task==='burn')return {X:520,Y:F1,pose:'work',dir:-1};
  if(task==='out'||task==='water'||task==='job')return null;return k==='peter'?{X:300,Y:G,pose:'idle',dir:-1}:k==='thomas'?{X:238,Y:G,pose:'sit',dir:-1}:{X:158,Y:G,pose:'idle',dir:1}}
