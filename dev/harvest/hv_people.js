/* ===================== The Last Harvest · people and animals: picture-book figures with big heads, no mouths, thick brown lines (v0.50) =====================
   Feelings are shown by brows, dot eyes and the tilt of the head. Illness shows only as colour: paler skin, darker round the eyes, slower moves. Never wounds. */
function hvEll(x,X,Y,rx,ry){x.beginPath();x.ellipse(X,Y,Math.max(.1,rx),Math.max(.1,ry),0,0,Math.PI*2)}
function hvLimb(x,X,Y,ang,len,w,col,foot){x.save();x.translate(X,Y);x.rotate(ang);x.beginPath();x.moveTo(0,0);x.lineTo(0,len);x.lineCap='round';x.lineWidth=w+4.6;x.strokeStyle=HV.INK;x.stroke();x.lineWidth=w;x.strokeStyle=col;x.stroke();
  if(foot){hvEll(x,foot*2.5,len+1,6.2,3.6);hvInk(x,'#4a2c1c',2.2)}else{hvEll(x,0,len+1,3.6,3.6);hvInk(x,foot===0?col:'#f0c8a0',2)}x.restore()}
/* brows and eyes for each mood: n calm · h glad · w worried · s sad · f fevered */
function hvFace(x,hx,hy,mood,sick,t){const ink='#2a170e',e=(X,Y)=>{hvEll(x,X,Y,1.9,2.6);x.fillStyle=ink;x.fill();hvEll(x,X+.6,Y-.9,.6,.6);x.fillStyle='#fff8e8';x.fill()};
  const blink=(Math.sin(t*1.7)+Math.sin(t*.43))>1.86;const E=[[hx+3,hy+1],[hx+11,hy+1]];
  if(sick>.3){x.globalAlpha=Math.min(.5,sick*.55);E.forEach(([X,Y])=>{hvEll(x,X,Y+1,3.6,3.4);x.fillStyle='#6a5a6a';x.fill()});x.globalAlpha=1}
  if(blink||mood==='h'){x.lineWidth=1.8;x.strokeStyle=ink;E.forEach(([X,Y])=>{x.beginPath();if(mood==='h'&&!blink)x.arc(X,Y+1.4,2.4,Math.PI*1.1,Math.PI*1.9);else{x.moveTo(X-2,Y+.5);x.lineTo(X+2,Y+.5)}x.stroke()})}else E.forEach(([X,Y])=>e(X,Y));
  const bw={n:[0,0],h:[-1.6,-1.6],w:[-2.6,.9],s:[-3,1.6],f:[-2.2,1.2]}[mood]||[0,0];x.lineWidth=1.9;x.strokeStyle=ink;x.lineCap='round';
  E.forEach(([X,Y],i)=>{const by=Y-5.2,l=i===0?bw[1]:bw[0],r=i===0?bw[0]:bw[1];x.beginPath();x.moveTo(X-2.6,by+l);x.quadraticCurveTo(X,by+(l+r)/2-(mood==='h'?1.2:0),X+2.6,by+r);x.stroke()});
  x.globalAlpha=.32+(mood==='h'?.15:0)-sick*.25;hvEll(x,hx+15,hy+6,3.4,2.2);x.fillStyle='#e8806a';x.fill();x.globalAlpha=1}
/* Peter, 12: small, quick, a hat too big for his head with a yellow flower in the band (what he loves keeps its colour) */
const HVLOOK={peter:{skin:'#f2cfa0',hair:'#7a4a26',tunic:'#5f86ad',tunicD:'#46698e',hose:'#6a4a34',hat:'#b8542e',hatD:'#8a3a1e',band:'#5a2a14',flower:'#f6c636'}};
function hvKid(x,o){const L=HVLOOK.peter,d=o.dir||1,t=o.t||0,wk=o.walk,run=o.run,sick=o.sick||0,pass=o.pass||'all';
  const bob=wk!=null?-Math.abs(Math.sin(wk))*(run?3.2:2):Math.sin(t*2.1)*.9,sw=wk!=null?Math.sin(wk)*(run?.85:.55):Math.sin(t*1.05)*.05,lean=run?.08:wk!=null?.03:0;
  const skin=hvMix(L.skin,'#c9c6b0',Math.min(.7,sick*.7)),tunic=L.tunic,tunicD=L.tunicD;
  x.save();x.translate(o.X,o.Y);
  if(pass!=='loved'){const sl=o.shadow||1;x.save();x.scale(sl,1);hvEll(x,(o.sx||0)/sl,0,20,4.4);x.fillStyle='rgba(40,24,14,.3)';x.fill();x.restore()}
  x.scale(d,1);x.rotate(lean);const by=bob;
  if(pass!=='loved'){
    hvLimb(x,-3,-56+by,-sw*.9+.15,17,6.5,tunicD,0);
    hvLimb(x,-5,-32+by,sw,26,7.2,L.hose,1);hvLimb(x,5,-32+by,-sw,26,7.2,hvMix(L.hose,'#000',.12),1);
    /* the body: a drop shape, one flat shadow on the far side */
    const body=()=>{x.beginPath();x.moveTo(1,-68+by);x.bezierCurveTo(15,-66+by,21,-42+by,19,-31+by);x.quadraticCurveTo(1,-23+by,-17,-31+by);x.bezierCurveTo(-19,-42+by,-13,-66+by,1,-68+by);x.closePath()};body();x.fillStyle=tunic;x.fill();
    x.save();x.clip();hvEll(x,-16,-42+by,13,30);x.fillStyle=tunicD;x.fill();x.fillStyle='#4a3020';x.fillRect(-20,-38+by,42,4);x.restore();body();hvInk(x,null,2.6);
    hvLimb(x,6,-56+by,sw*.9-.1,17,6.5,tunic,0);
    /* the head: a third of him */
    x.save();x.translate(3,-86+by);x.rotate((o.tilt||0)*d);
    hvEll(x,-11,-2,9,11);x.fillStyle=L.hair;x.fill();
    hvEll(x,0,0,19,18.5);x.fillStyle=skin;x.fill();x.save();x.clip();hvEll(x,-14,4,12,20);x.fillStyle=hvMix(skin,'#b07050',.25);x.fill();x.restore();hvEll(x,0,0,19,18.5);hvInk(x,null,2.6);
    hvEll(x,-15,1,4,5);hvInk(x,hvMix(skin,'#c08060',.2),2);
    x.beginPath();x.moveTo(-18,-6);x.quadraticCurveTo(-8,-14,6,-12);x.quadraticCurveTo(-6,-6,-18,-2);x.closePath();hvInk(x,L.hair,2);
    hvFace(x,0,4,o.mood||'n',sick,t);x.restore()}
  /* the hat */
  x.save();x.translate(3,-86+by);x.rotate((o.tilt||0)*d);
  hvEll(x,1,-14,31,7);hvInk(x,L.hatD,2.6);
  x.beginPath();x.moveTo(-15,-15);x.bezierCurveTo(-15,-35,17,-37,17,-15);x.closePath();hvInk(x,L.hat,2.6);
  x.beginPath();x.moveTo(-15,-19);x.quadraticCurveTo(1,-16,17,-19);x.lineTo(17,-15);x.quadraticCurveTo(1,-12,-15,-15);x.closePath();x.fillStyle=L.band;x.fill();
  x.save();x.translate(12,-20);for(let i=0;i<5;i++){x.rotate(Math.PI*2/5);hvEll(x,0,-3.2,2,3.2);x.fillStyle=L.flower;x.fill();x.lineWidth=.9;x.strokeStyle=HV.INK;x.stroke()}hvEll(x,0,0,1.8,1.8);x.fillStyle='#c0702a';x.fill();x.restore();
  x.restore();x.restore();
  return {x0:o.X-24,x1:o.X+24,y0:o.Y-122,y1:o.Y}}
/* the little stray dog that follows Peter */
function hvDog(x,o){const d=o.dir||1,t=o.t||0,wk=o.walk,sw=wk!=null?Math.sin(wk*1.4):0,by=wk!=null?-Math.abs(Math.sin(wk*1.4))*1.6:Math.sin(t*3)*.4;x.save();x.translate(o.X,o.Y);
  hvEll(x,0,0,16,3.4);x.fillStyle='rgba(40,24,14,.28)';x.fill();x.scale(d,1);const fur='#d99a5a',furD='#b0743c';
  [[-9,sw],[ -4,-sw],[7,-sw],[11,sw]].forEach(([X,s],i)=>{x.save();x.translate(X,-10+by);x.rotate(s*.5);x.beginPath();x.moveTo(0,0);x.lineTo(0,10);x.lineWidth=7.4;x.strokeStyle=HV.INK;x.lineCap='round';x.stroke();x.lineWidth=3.6;x.strokeStyle=i%2?furD:fur;x.stroke();x.restore()});
  const wag=Math.sin(t*(o.happy?14:7))*.5;x.save();x.translate(-14,-18+by);x.rotate(-.8+wag);x.beginPath();x.moveTo(0,0);x.quadraticCurveTo(-4,-8,2,-13);x.lineWidth=7;x.strokeStyle=HV.INK;x.stroke();x.lineWidth=3.4;x.strokeStyle=fur;x.stroke();x.restore();
  hvEll(x,0,-17+by,16,10);x.fillStyle=fur;x.fill();x.save();x.clip();hvEll(x,4,-10+by,10,6);x.fillStyle='#f4e2c8';x.fill();hvEll(x,-8,-24+by,9,6);x.fillStyle=furD;x.fill();x.restore();hvEll(x,0,-17+by,16,10);hvInk(x,null,2.4);
  x.save();x.translate(15,-27+by);x.rotate(o.tilt||Math.sin(t*.7)*.08);hvEll(x,0,0,10,9);hvInk(x,fur,2.4);
  x.beginPath();x.moveTo(-6,-6);x.quadraticCurveTo(-13,-2,-8,8);x.quadraticCurveTo(-4,2,-2,-6);x.closePath();hvInk(x,'#8a5428',2);
  hvEll(x,9,2,3.2,2.6);hvInk(x,'#f4e2c8',1.6);hvEll(x,11.6,1,1.5,1.3);x.fillStyle='#2a170e';x.fill();hvEll(x,4,-2,1.6,2.1);x.fillStyle='#2a170e';x.fill();x.restore();
  x.restore()}
/* a rat: grey, quick, a pink tail; there are more of them as the plague grows */
function hvRat(x,X,Y,d,t,s){s=s||1;x.save();x.translate(X,Y);x.scale(d*s,s);const k=Math.sin(t*24)*1.2;
  x.beginPath();x.moveTo(-8,-3);x.quadraticCurveTo(-18,-4+k,-24,-1);x.lineWidth=1.6;x.strokeStyle='#c88a8a';x.stroke();
  x.beginPath();x.moveTo(-9,-1);x.quadraticCurveTo(-8,-9,1,-8);x.quadraticCurveTo(8,-7,10,-2);x.quadraticCurveTo(4,0,-9,-1);x.closePath();hvInk(x,'#6e6a72',1.8);
  hvEll(x,1,-8.5,2.2,2.6);hvInk(x,'#b8a0a8',1.2);hvEll(x,6,-5,1,1);x.fillStyle='#120c0a';x.fill();x.restore()}
