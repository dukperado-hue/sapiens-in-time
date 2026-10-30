/* ===================== The Last Harvest · the life around: cats, pigeons, swallows, bats, candles, and the sounds of day and night (v0.54, Thai only) =====================
   Everything here is drawn and synthesised in the page: no image or sound files. */
/* a cat: sits on sills and roofs, sometimes walks the street; eyes blink, the tail moves */
function hvCat(x,o){const t=o.t||0,d=o.dir||1,c=o.col||'#7a7680',cd=hvMix(c,'#1a1410',.35),s=o.s||1;x.save();x.translate(o.X,o.Y);x.scale(d*s,s);
  if(o.pose==='walk'){const w=o.walk||t*8,a=Math.sin(w)*.5;[[-9,a],[-5,-a],[7,-a],[11,a]].forEach(([X,r])=>{x.save();x.translate(X,-9);x.rotate(r);x.beginPath();x.moveTo(0,0);x.lineTo(0,9);x.lineWidth=5.4;x.strokeStyle=HV.INK;x.lineCap='round';x.stroke();x.lineWidth=2.6;x.strokeStyle=c;x.stroke();x.restore()});
    x.beginPath();x.moveTo(-14,-14);x.quadraticCurveTo(-24,-24+Math.sin(t*3)*3,-20,-32);x.lineWidth=5;x.strokeStyle=HV.INK;x.stroke();x.lineWidth=2.4;x.strokeStyle=c;x.stroke();
    hvEll(x,0,-14,15,7);hvInk(x,c,2);hvEll(x,15,-20,7,6.5);hvInk(x,c,2);hvPath(x,[11,-24,12,-31,16,-25]);hvInk(x,c,1.6);hvPath(x,[16,-25,20,-31,21,-23]);hvInk(x,c,1.6);hvEll(x,18,-21,1.1,1.4);x.fillStyle='#e8d040';x.fill()}
  else{/* sitting: a pear shape, the tail round the feet */const sw=Math.sin(t*1.3)*.25;x.beginPath();x.moveTo(-8,0);x.quadraticCurveTo(-20,-2+sw*4,-16,-8);x.lineWidth=5;x.strokeStyle=HV.INK;x.stroke();x.lineWidth=2.4;x.strokeStyle=cd;x.stroke();
    x.beginPath();x.moveTo(0,-30);x.bezierCurveTo(12,-28,13,-6,10,0);x.lineTo(-10,0);x.bezierCurveTo(-13,-6,-12,-28,0,-30);x.closePath();hvInk(x,c,2);x.save();x.clip();hvEll(x,-8,-12,6,14);x.fillStyle=cd;x.fill();x.restore();x.beginPath();x.moveTo(0,-30);x.bezierCurveTo(12,-28,13,-6,10,0);x.lineTo(-10,0);x.bezierCurveTo(-13,-6,-12,-28,0,-30);x.closePath();hvInk(x,null,2);
    x.save();x.translate(2,-32);x.rotate(Math.sin(t*.5)*.08);hvEll(x,0,0,9,8);hvInk(x,c,2);hvPath(x,[-7,-4,-6,-13,-1,-7]);hvInk(x,c,1.6);hvPath(x,[2,-7,7,-13,8,-3]);hvInk(x,c,1.6);
    const bl=(Math.sin(t*.9+o.X)>.94);if(bl){x.lineWidth=1.2;x.strokeStyle='#1a1410';x.beginPath();x.moveTo(-4,0);x.lineTo(-1,0);x.moveTo(3,0);x.lineTo(6,0);x.stroke()}else{hvEll(x,-2.5,0,1.4,1.8);x.fillStyle='#e8d040';x.fill();hvEll(x,4.5,0,1.4,1.8);x.fill();x.fillStyle='#1a1410';x.fillRect(-2.9,-1.2,.8,2.4);x.fillRect(4.1,-1.2,.8,2.4)}x.restore()}
  x.restore()}
/* a pigeon pecking on the stones, or flying off */
function hvPigeon(x,X,Y,d,t,fly,s){s=s||1;x.save();x.translate(X,Y);x.scale(d*s,s);const k=fly?Math.sin(t*28):0,pk=fly?0:Math.max(0,Math.sin(t*4+X))*3;
  hvEll(x,0,-6,8,5);hvInk(x,'#9a9aa8',1.4);x.save();x.translate(6,-9+pk);hvEll(x,0,0,3.4,3.2);hvInk(x,'#8a8a98',1.2);x.fillStyle='#c8a070';x.beginPath();x.moveTo(3,0);x.lineTo(6,1);x.lineTo(3,1.6);x.fill();hvEll(x,1,-1,.7,.7);x.fillStyle='#d84a20';x.fill();x.restore();
  x.beginPath();x.moveTo(-3,-8);x.quadraticCurveTo(-2,-14-k*6,-10,-16-k*8);x.quadraticCurveTo(-8,-10,-6,-6);x.closePath();hvInk(x,'#7a7a88',1.2);x.beginPath();x.moveTo(-8,-5);x.lineTo(-13,-3);x.lineTo(-8,-3);x.fillStyle='#6a6a78';x.fill();
  if(!fly){x.strokeStyle='#c87060';x.lineWidth=1;x.beginPath();x.moveTo(-1,-1);x.lineTo(-1,0);x.moveTo(2,-1);x.lineTo(2,0);x.stroke()}x.restore()}
/* swallows by day, bats by night: small dark shapes that dart */
function hvSwallow(x,X,Y,t,i){const f=Math.sin(t*14+i)*4;x.beginPath();x.moveTo(X-8,Y-f);x.quadraticCurveTo(X-3,Y-1,X,Y);x.quadraticCurveTo(X+3,Y-1,X+8,Y-f);x.moveTo(X,Y);x.lineTo(X-3,Y+5);x.moveTo(X,Y);x.lineTo(X+3,Y+5);x.lineWidth=1.8;x.strokeStyle='#2a2430';x.stroke()}
function hvBat(x,X,Y,t,i){const f=Math.sin(t*22+i)*5;x.beginPath();x.moveTo(X-9,Y-f);x.lineTo(X-5,Y-1);x.lineTo(X-3,Y+2);x.lineTo(X,Y);x.lineTo(X+3,Y+2);x.lineTo(X+5,Y-1);x.lineTo(X+9,Y-f);x.lineTo(X+4,Y+3);x.lineTo(X,Y+2);x.lineTo(X-4,Y+3);x.closePath();x.fillStyle='#1a1420';x.fill()}
/* a candle: wax, a flame that never holds still, a small halo */
function hvCandle(x,X,Y,t,h){h=h||14;const fl=Math.sin(t*11+X)*.9+Math.sin(t*23+X*.3)*.5;hvRRect(x,X-3,Y-h,6,h,1.5);hvInk(x,'#efe2c0',1.4);x.beginPath();x.moveTo(X,Y-h);x.lineTo(X,Y-h-2);x.lineWidth=1;x.strokeStyle='#2a1a10';x.stroke();
  x.beginPath();x.moveTo(X,Y-h-11+fl);x.quadraticCurveTo(X+3.4,Y-h-4,X,Y-h-1.5);x.quadraticCurveTo(X-3.4,Y-h-4,X,Y-h-11+fl);x.fillStyle='#ffd25a';x.fill();hvEll(x,X,Y-h-4,1.2,2.2);x.fillStyle='#fff6d8';x.fill()}
/* ---------- the street's animals ---------- */
function hvAmbInit(S){const R=hvRng(S.run&&S.run.r?(S.run.r()*1e6|0):77);const A=S.amb={cats:[],pigeons:[],walker:null,t:0};
  /* cats on window sills of the middle row of houses (parallax .5) */for(let i=0;i<4;i++)A.cats.push({x:120+R()*1100,y:270,col:['#7a7680','#2e2a30','#d0884a','#e8e0d4'][R()*4|0],dir:R()<.5?1:-1});
  /* flocks of pigeons on the street */[[430,4],[1120,5],[1560,3]].forEach(([X,n])=>{for(let i=0;i<n;i++)A.pigeons.push({x:X+R()*70-35,y:HV.GY+18+R()*20,d:R()<.5?1:-1,fly:0,vx:0,vy:0,home:X,back:0})})}
function hvAmbTick(S,dt,t){const A=S.amb;if(!A)return;A.t+=dt;const P=S.p,D=S.dog;
  for(const b of A.pigeons){if(!b.fly&&(Math.abs(b.x-P.x)<80||Math.abs(b.x-D.x)<70||(S.rats||[]).some(r=>Math.abs(r.x-b.x)<30))){b.fly=1;b.vx=(b.x>P.x?1:-1)*(120+Math.random()*80);b.vy=-(140+Math.random()*80);b.d=Math.sign(b.vx);if(!A.flap||A.t-A.flap>.4){A.flap=A.t;hvAmbSnd('flap')}}
    if(b.fly){b.x+=b.vx*dt;b.y+=b.vy*dt;b.vy+=30*dt;if(b.y<-40){b.fly=2;b.back=20+Math.random()*20}}if(b.fly===2){b.back-=dt;if(b.back<=0&&Math.abs(b.home-P.x)>260){b.fly=0;b.x=b.home+Math.random()*70-35;b.y=HV.GY+18+Math.random()*20}}else if(!b.fly&&Math.random()<dt*.3)b.x+=b.d*(Math.random()*6)}
  /* now and then a cat crosses the street */if(!A.walker&&Math.random()<dt*.025){const vw=S.vw||640,d=Math.random()<.5?1:-1;A.walker={x:(S.cam||0)+(d>0?-40:vw+40),d,col:['#2e2a30','#d0884a','#7a7680'][Math.random()*3|0],sit:0}}
  if(A.walker){const w=A.walker;const near=Math.abs(w.x-D.x)<90;if(near&&!w.run){w.run=1;w.d=Math.sign(w.x-D.x)||w.d;hvAmbSnd('hiss')}w.x+=w.d*(w.run?260:46)*dt;if(w.x<(S.cam||0)-80||w.x>(S.cam||0)+(S.vw||640)+80)A.walker=null}}
function hvAmbDrawPlay(x,S,t){const A=S.amb;if(!A)return;for(const b of A.pigeons){if(b.fly===2)continue;hvPigeon(x,b.x,b.y,b.d,t+b.home,!!b.fly)}if(A.walker){const w=A.walker;hvCat(x,{X:w.x,Y:HV.GY+16,dir:w.d,t,pose:'walk',walk:t*(w.run?18:7),col:w.col,s:1.1})}}
function hvAmbDrawMid(x,S,t){const A=S.amb;if(!A)return;for(const c of A.cats)hvCat(x,{X:c.x,Y:c.y,dir:c.dir,t:t+c.x,col:c.col,s:.7})}
function hvAmbDrawSky(x,S,t,rg){const vw=rg.x1-rg.x0;if(S.tod===3){for(let i=0;i<5;i++){const k=(t*.05+i*.21)%1,X=rg.x0+vw*(.2+.6*((Math.sin(t*.4+i*2)+1)/2)),Y=60+Math.sin(t*1.3+i)*30+i*12;hvBat(x,X,Y,t,i)}}
  else{for(let i=0;i<4;i++){const X=rg.x0+((t*(60+i*14)+i*170)%(vw+200))-100,Y=50+i*16+Math.sin(t*2+i)*20;hvSwallow(x,X,Y,t,i)}}}
/* ---------- sounds: everything is synthesised, quiet, and follows the time of day ---------- */
const hvAmbAudio=(()=>{let ac=null,master=null,next={},on=false;const ok=()=>{try{return +store.get('sit.snd',2)!==0}catch(e){return true}};
  const ctx=()=>{if(!ac){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;ac=new C();master=ac.createGain();master.gain.value=.5;master.connect(ac.destination)}return ac};
  const noise=(dur)=>{const a=ctx(),n=Math.floor(a.sampleRate*dur),buf=a.createBuffer(1,n,a.sampleRate),d=buf.getChannelData(0);for(let i=0;i<n;i++)d[i]=Math.random()*2-1;const s=a.createBufferSource();s.buffer=buf;return s};
  const tone=(f0,f1,dur,type,vol,at)=>{const a=ctx(),o=a.createOscillator(),g=a.createGain(),n=a.currentTime+(at||0);o.type=type||'sine';o.frequency.setValueAtTime(f0,n);o.frequency.linearRampToValueAtTime(f1,n+dur);g.gain.setValueAtTime(.0001,n);g.gain.linearRampToValueAtTime(vol,n+Math.min(.05,dur/3));g.gain.exponentialRampToValueAtTime(.0001,n+dur);o.connect(g);g.connect(master);o.start(n);o.stop(n+dur+.02)};
  const S={
    cricket:()=>{for(let i=0;i<3;i++)tone(4300,4200,.035,'sine',.012,i*.07)},
    owl:()=>{tone(380,360,.35,'sine',.05,0);tone(360,330,.55,'sine',.045,.55)},
    farbark:()=>{for(let i=0;i<2;i++)tone(330,220,.12,'sawtooth',.012,i*.28)},
    wind:()=>{const a=ctx(),s=noise(3),f=a.createBiquadFilter(),g=a.createGain(),n=a.currentTime;f.type='lowpass';f.frequency.value=380;g.gain.setValueAtTime(.0001,n);g.gain.linearRampToValueAtTime(.03,n+1.2);g.gain.linearRampToValueAtTime(.0001,n+3);s.connect(f);f.connect(g);g.connect(master);s.start(n);s.stop(n+3)},
    bird:()=>{const b=2200+Math.random()*1400;for(let i=0;i<2+(Math.random()*3|0);i++)tone(b+Math.random()*400,b-300+Math.random()*700,.07,'sine',.018,i*.11)},
    coo:()=>{tone(260,240,.25,'sine',.02,0);tone(250,220,.35,'sine',.018,.3)},
    flap:()=>{const a=ctx(),s=noise(.35),f=a.createBiquadFilter(),g=a.createGain(),n=a.currentTime;f.type='bandpass';f.frequency.value=900;g.gain.setValueAtTime(.05,n);g.gain.exponentialRampToValueAtTime(.0001,n+.35);s.connect(f);f.connect(g);g.connect(master);s.start(n);s.stop(n+.35)},
    hiss:()=>{const a=ctx(),s=noise(.4),f=a.createBiquadFilter(),g=a.createGain(),n=a.currentTime;f.type='highpass';f.frequency.value=3000;g.gain.setValueAtTime(.02,n);g.gain.exponentialRampToValueAtTime(.0001,n+.4);s.connect(f);f.connect(g);g.connect(master);s.start(n);s.stop(n+.4)},
    meow:()=>{tone(520,760,.18,'triangle',.02,0);tone(760,480,.3,'triangle',.018,.18)},
    hen:()=>{for(let i=0;i<3;i++)tone(600,520,.08,'square',.008,i*.12)},
    bell:()=>{tone(392,390,2.4,'sine',.05,0);tone(784,780,1.8,'sine',.015,0)},
    crackle:()=>{const a=ctx(),s=noise(.06),f=a.createBiquadFilter(),g=a.createGain(),n=a.currentTime;f.type='highpass';f.frequency.value=1800;g.gain.setValueAtTime(.025,n);g.gain.exponentialRampToValueAtTime(.0001,n+.06);s.connect(f);f.connect(g);g.connect(master);s.start(n);s.stop(n+.06)}};
  return {play:k=>{try{if(!ok()||!ctx()||!S[k])return;if(ac.state==='suspended')ac.resume();S[k]()}catch(e){}},
    /* called every frame with the time of day: schedules the background life */
    tick:(tod,t,extra)=>{if(!ok())return;extra=extra||{};const due=(k,a,b)=>{if(next[k]==null)next[k]=t+a+Math.random()*(b-a);if(t>=next[k]){next[k]=t+a+Math.random()*(b-a);return true}return false};
      if(tod===3){if(due('cricket',.5,1.4))hvAmbAudio.play('cricket');if(due('owl',9,20))hvAmbAudio.play('owl');if(due('farbark',22,40))hvAmbAudio.play('farbark');if(due('wind',14,28))hvAmbAudio.play('wind')}
      else{if(due('bird',2.5,7))hvAmbAudio.play('bird');if(extra.pigeons&&due('coo',6,14))hvAmbAudio.play('coo');if(due('wind2',25,45))hvAmbAudio.play('wind')}
      if(extra.fire&&due('crackle',.3,1.1))hvAmbAudio.play('crackle');if(extra.hens&&due('hen',10,22))hvAmbAudio.play('hen');if(extra.cat&&due('meow',30,60))hvAmbAudio.play('meow')},
    reset:()=>{next={}}}})();
const hvAmbSnd=k=>hvAmbAudio.play(k);
