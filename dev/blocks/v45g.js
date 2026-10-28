/* ===================== v0.45 graphics: a finer pixel scene engine (320x180, lights, weather, shaded people) ===================== */
const G45={W:320,H:180};
const g45rng=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const g45hex=c=>{const n=parseInt(c.slice(1),16);return [n>>16,(n>>8)&255,n&255]};
const g45mix=(a,b,t)=>{const A=g45hex(a),B=g45hex(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('')};
const g45sh=(c,k)=>k<0?g45mix(c,'#000000',-k):g45mix(c,'#ffffff',k);
function G45R(x,X,Y,w,h,c){x.fillStyle=c;x.fillRect(X|0,Y|0,w|0,h|0)}
/* a dithered vertical gradient in a few hard steps, like 16-bit skies */
function g45sky(x,cols,y0,y1,X0,X1){X0=X0||0;X1=X1||320;const n=cols.length-1;for(let y=y0;y<y1;y++){const t=(y-y0)/(y1-y0)*n,i=Math.min(n-1,Math.floor(t)),f=t-i;
  for(let X=X0;X<X1;X+=2){const d=((X>>1)+y)%4/4;G45R(x,X,y,2,1,f>d+.12?cols[i+1]:cols[i])}}}
function g45noise(x,X,Y,w,h,base,amt,seed,step){const r=g45rng(seed||7);step=step||1;for(let j=0;j<h;j+=step)for(let i=0;i<w;i+=step){const v=r();if(v<.18)G45R(x,X+i,Y+j,step,step,g45sh(base,-amt));else if(v>.9)G45R(x,X+i,Y+j,step,step,g45sh(base,amt*.7))}}
function g45planks(x,X,Y,w,h,base,seed){G45R(x,X,Y,w,h,base);const r=g45rng(seed||3);for(let i=X;i<X+w;i+=6){const c=g45sh(base,(r()-.5)*.25);G45R(x,i,Y,5,h,c);G45R(x,i+5,Y,1,h,g45sh(base,-.45));if(r()<.5)G45R(x,i+1+((r()*3)|0),Y+((r()*h)|0),1,3,g45sh(base,-.3))}}
function g45bricks(x,X,Y,w,h,base,seed,bw,bh){bw=bw||8;bh=bh||4;const r=g45rng(seed||5);G45R(x,X,Y,w,h,g45sh(base,-.4));for(let j=0;j<h;j+=bh){const off=(j/bh)%2?bw/2:0;for(let i=-off;i<w;i+=bw){const xx=Math.max(X,X+i),ww=Math.min(X+i+bw-1,X+w)-xx;if(ww>0)G45R(x,xx,Y+j,ww,bh-1,g45sh(base,(r()-.5)*.22))}}}
function g45stones(x,X,Y,w,h,base,seed){const r=g45rng(seed||9);G45R(x,X,Y,w,h,g45sh(base,-.45));for(let j=0;j<h;j+=5){let i=0;while(i<w){const sw=4+((r()*7)|0);G45R(x,X+i,Y+j,Math.min(sw-1,w-i),4,g45sh(base,(r()-.5)*.3));G45R(x,X+i,Y+j,Math.min(sw-1,w-i),1,g45sh(base,.15));i+=sw}}}
function g45win(x,X,Y,w,h,lit,frame,t){G45R(x,X-1,Y-1,w+2,h+2,frame||'#2a1a10');G45R(x,X,Y,w,h,lit?'#f0b860':'#141820');if(lit){G45R(x,X,Y,w,2,'#ffe0a0');G45R(x,X+(w>>1),Y,1,h,frame||'#2a1a10');G45R(x,X,Y+(h>>1),w,1,frame||'#2a1a10')}}
function g45moon(x,X,Y,r){x.fillStyle='#f0ead0';x.beginPath();x.arc(X,Y,r,0,7);x.fill();x.fillStyle='#d8d0b0';x.beginPath();x.arc(X+2,Y+1,r*.35,0,7);x.fill();x.beginPath();x.arc(X-2,Y-2,r*.2,0,7);x.fill()}
function g45stars(x,n,seed,ymax,t){const r=g45rng(seed);for(let i=0;i<n;i++){const X=(r()*320)|0,Y=(r()*ymax)|0,b=r();G45R(x,X,Y,1,1,(b>.85&&Math.sin(t*3+i)>.3)?'#ffffff':'#8a8ab0')}}
function g45rain(x,t,n,col,slant){const r=g45rng(11);for(let i=0;i<n;i++){const sp=180+r()*80,X=((r()*360+t*slant*sp)%360)-20,Y=((r()*200+t*sp)%200)-10;x.fillStyle=col||'#8aa0c8a0';x.fillRect(X|0,Y|0,1,4)}}
function g45snow(x,t,n){const r=g45rng(13);for(let i=0;i<n;i++){const sp=12+r()*16,X=((r()*340+Math.sin(t+i)*6)%340)-10,Y=((r()*190+t*sp)%190)-5;G45R(x,X,Y,1,1,'#e8eef8')}}
function g45fog(x,t,y,h,col,a){for(let i=0;i<4;i++){const X=((t*6*(i+1)+i*90)%420)-100;const gr=x.createRadialGradient(X+60,y+h/2,4,X+60,y+h/2,90);gr.addColorStop(0,col+Math.round(a*255).toString(16).padStart(2,'0'));gr.addColorStop(1,col+'00');x.fillStyle=gr;x.fillRect(X-40,y-20,200,h+40)}}
function g45smoke(x,X,Y,t,col){for(let i=0;i<7;i++){const k=(t*.4+i/7)%1;const r=2+k*7;x.fillStyle=(col||'#6a6a78')+Math.round((1-k)*110).toString(16).padStart(2,'0');x.beginPath();x.arc(X+Math.sin(k*6+i)*4*k,Y-k*40,r,0,7);x.fill()}}
function g45fire(x,X,Y,t,s){s=s||1;const f=Math.sin(t*17)+Math.sin(t*11.3);G45R(x,X-1*s,Y-3*s,3*s,3*s,'#c8381a');G45R(x,X-1*s,Y-5*s-(f>0?1:0),2*s,3*s,'#f08a20');G45R(x,X,Y-6*s-(f>.5?1:0),1*s,2*s,'#ffe070')}
function g45torch(x,X,Y,t){G45R(x,X,Y,2,9,'#4a2a14');g45fire(x,X+1,Y,t,1);return {x:X+1,y:Y-4,r:46,c:'#ff9a40',i:.9+Math.sin(t*13)*.06}}
function g45grass(x,y,col,t,seed,dens){const r=g45rng(seed||21);for(let X=0;X<320;X+=dens||2){const h=2+((r()*5)|0),sw=Math.round(Math.sin(t*1.5+X*.07));G45R(x,X+(h>4?sw:0),y-h,1,h,g45sh(col,(r()-.5)*.3))}}
function g45mount(x,y,col,seed,amp,snow){const r=g45rng(seed);let h=0;for(let X=0;X<320;X++){h+= (r()-.5)*2.2;h=Math.max(-amp,Math.min(amp,h*0.98));const top=y-amp-h-Math.sin(X*.03+seed)*amp*.6;G45R(x,X,top,1,y-top+1,col);if(snow&&top<y-amp*1.35)G45R(x,X,top,1,3,'#dfe6f0')}}
function g45sea(x,y,col,t,lightX){for(let j=y;j<180;j++){const k=(j-y)/(180-y);G45R(x,0,j,320,1,g45mix(col,'#05060c',k*.6))}const r=g45rng(31);for(let i=0;i<70;i++){const X=((r()*340+t*4*(r()>.5?1:-1))%340)-10,Y=y+2+((r()*(178-y))|0);G45R(x,X,Y,2+((r()*4)|0),1,g45sh(col,.25))}
  if(lightX!=null)for(let j=y+2;j<180;j+=3)G45R(x,lightX-3+Math.sin(t*2+j)*3,j,6+(j-y)/6,1,'#f0e0a0a0')}
/* ---------- people: about 30 px tall, outlined and shaded, lit from the left ---------- */
const G45P={skin:['#f0c8a0','#d8a070','#b8784a','#8a5434','#5a3420'],hair:['#1a1210','#3a2414','#6a4420','#a8a8a8','#c89850']};
function g45person(x,X,by,o,t){o=o||{};const s=o.skin||G45P.skin[1],hr=o.hair||G45P.hair[0],tp=o.top||'#6a4a8a',bt=o.bot||'#3a2a2a',ol='#0a0710',d=o.dir||1,c=o.child?.7:1,T=t||0,br=Math.sin(T*2+(o.ph||0))>.3?1:0;
  const P=(dx,dy,w,h,col)=>{const xx=d>0?X+dx*c:X-(dx+w)*c;G45R(x,Math.round(xx),Math.round(by-(dy+h)*c-(dy>=15?br:0)),Math.max(1,Math.round(w*c)),Math.max(1,Math.round(h*c)),col)};
  x.fillStyle='rgba(0,0,0,.35)';x.beginPath();x.ellipse(X,by,9*c,2.2*c,0,0,7);x.fill();
  const parts=[];const add=(dx,dy,w,h,col,k)=>parts.push([dx,dy,w,h,col,k]);
  add(-5,0,4,2,'#2a1e18');add(1,0,4,2,'#2a1e18');
  if(o.dress)add(-6,1,13,16,bt);else{add(-5,2,4,14,bt);add(1,2,4,14,bt)}
  add(-6,15,13,15,tp);add(-9,17,3,12,tp,'arm');add(7,17,3,12,tp,'arm');add(-9,14,3,3,s,'hand');add(7,14,3,3,s,'hand');
  if(o.cloak)add(-7,6,3,26,o.cloak);
  add(-1,30,3,2,s);add(-4,31,9,10,s,'head');
  const hat=o.hat||'none',hc=o.hatc||tp;
  if(hat==='hood'||hat==='veil'){add(-6,29,13,14,hc,'hood')}else{add(-5,38,11,4,hr);add(-5,33,3,6,hr)}
  if(hat==='cap'){add(-5,40,11,3,hc);add(1,39,7,1,g45sh(hc,-.2))}
  if(hat==='turban'){add(-5,38,11,6,hc)}
  if(hat==='tophat'){add(-6,41,13,2,'#141418');add(-4,43,9,9,'#18181e')}
  if(hat==='wide'){add(-9,40,19,2,hc);add(-4,42,9,5,hc)}
  for(const [dx,dy,w,h] of parts)P(dx-1,dy-1,w+2,h+2,ol);
  for(const [dx,dy,w,h,col,k] of parts){P(dx,dy,w,h,col);if(k!=='hand'){P(dx,dy,1,h,g45sh(col,.2));P(dx+w-1,dy,1,h,g45sh(col,-.32));P(dx,dy,w,1,g45sh(col,-.22))}}
  if(hat==='hood'||hat==='veil'){P(-3,31,7,9,s);P(-3,39,7,1,g45sh(hc,-.3));P(-4,31,1,9,g45sh(hc,-.35))}
  if(!o.dress)P(0,2,1,13,g45sh(bt,-.45));P(-6,17,13,2,g45sh(tp,-.38));P(0,26,4,2,g45sh(tp,.12));
  P(2,36,1,2,'#1a1010');if(Math.sin(T*.9+(o.ph||0))>.97)P(2,36,1,2,s);P(4,34,1,1,g45sh(s,-.28));P(2,33,2,1,g45sh(s,-.35));P(-3,32,1,1,g45sh(s,-.25));
  if(o.beard)P(-1,31,6,3,hr);
  const hx=d>0?X+8.5*c:X-8.5*c,hy=by-15*c;
  if(o.hold==='torch'){P(8,15,1,13,'#4a2a14');g45fire(x,Math.round(d>0?X+8*c:X-9*c),Math.round(by-28*c),T,1);return {x:d>0?X+8*c:X-8*c,y:by-31*c,r:50,c:'#ff9a40',i:.9+Math.sin(T*13)*.06}}
  if(o.hold==='lamp'){P(7,8,4,5,'#e8b860');P(7,13,4,1,'#3a2a1a');P(8,14,2,1,'#3a2a1a');return {x:hx,y:by-10*c,r:46,c:'#ffc860',i:.92}}
  if(o.hold==='bucket'){P(6,4,6,7,'#6a6a70');P(6,10,6,1,'#9a9aa0');P(6,4,6,1,'#3a3a40')}
  if(o.hold==='herbs'){P(7,16,4,4,'#5a9a4a');P(8,20,1,2,'#c84a6a');P(10,19,1,1,'#e8d870')}
  if(o.hold==='basket'){P(6,8,8,5,'#a8784a');P(6,12,8,1,'#c89a5a');P(7,13,1,2,'#6a4a2a');P(12,13,1,2,'#6a4a2a')}
  if(o.hold==='book'){P(6,14,5,7,'#7a2a1a');P(6,20,5,1,'#e8d8b0');P(10,14,1,7,'#5a1a0a')}
  return null}
/* ---------- the stage: draw, then light ---------- */
function g45light(x,L,amb,lights){if(!L.c){L.c=document.createElement('canvas');L.c.width=320;L.c.height=180}const l=L.c.getContext('2d');l.globalCompositeOperation='source-over';l.clearRect(0,0,320,180);l.fillStyle='rgba(4,5,16,'+amb+')';l.fillRect(0,0,320,180);
  l.globalCompositeOperation='destination-out';for(const s of lights){if(!s)continue;const g=l.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r);g.addColorStop(0,'rgba(0,0,0,'+(s.i||1)+')');g.addColorStop(.55,'rgba(0,0,0,'+((s.i||1)*.55)+')');g.addColorStop(1,'rgba(0,0,0,0)');l.fillStyle=g;l.fillRect(s.x-s.r,s.y-s.r,s.r*2,s.r*2)}
  x.drawImage(L.c,0,0);x.globalCompositeOperation='lighter';for(const s of lights){if(!s||!s.c)continue;const g=x.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r*.7);g.addColorStop(0,s.c+'38');g.addColorStop(1,s.c+'00');x.fillStyle=g;x.fillRect(s.x-s.r,s.y-s.r,s.r*2,s.r*2)}x.globalCompositeOperation='source-over';
  const v=x.createRadialGradient(160,90,70,160,90,200);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.55)');x.fillStyle=v;x.fillRect(0,0,320,180)}
function g45stage(cv,scene){const x=cv.getContext('2d');x.imageSmoothingEnabled=false;const L={};let alive=true,t0=performance.now(),last=0;
  const fr=now=>{if(!alive||!cv.isConnected){alive=false;return}if(now-last>45){last=now;const t=(now-t0)/1000;x.clearRect(0,0,320,180);const r=SC45[scene]?SC45[scene](x,t):{amb:0,lights:[]};g45light(x,L,r.amb,r.lights||[])}requestAnimationFrame(fr)};requestAnimationFrame(fr);return {stop:()=>{alive=false}}}

/* ---------- nine scenes, Central Asia 1338 to London 1854 ---------- */
const SC45={
 issyk(x,t){g45sky(x,['#2a1a40','#5a2a5a','#a8484a','#e8884a','#f0b868'],0,96);x.fillStyle='#f8d890';x.beginPath();x.arc(261,82,10,0,7);x.fill();g45mount(x,100,'#3a3050',3,26,true);g45mount(x,108,'#2a2440',8,14,false);
  G45R(x,0,104,320,8,'#6a7aa8');for(let i=0;i<40;i++)G45R(x,(i*37+t*3)%320,105+(i%3)*2,6,1,'#a8b8d8');G45R(x,0,112,320,68,'#4a4430');g45noise(x,0,112,320,68,'#4a4430',.25,4,2);
  const L=[];for(let i=0;i<7;i++){const X=30+i*24+(i%2)*6,Y=150+(i%3)*6;G45R(x,X-1,Y-17,10,18,'#141018');G45R(x,X,Y-16,8,16,'#8a8478');G45R(x,X,Y-16,8,2,'#a8a294');G45R(x,X+3,Y-14,2,8,'#4a4440');G45R(x,X+1,Y-12,6,2,'#4a4440');if(i%2)G45R(x,X+1,Y-5,6,1,'#5a5450')}
  x.fillStyle='#d8c8a8';x.beginPath();x.moveTo(230,150);x.quadraticCurveTo(255,112,280,150);x.fill();G45R(x,230,148,50,4,'#a8987a');G45R(x,250,136,10,14,'#3a2a1a');g45smoke(x,255,118,t,'#8a7a8a');
  g45grass(x,180,'#6a6a3a',t,4,3);g45person(x,190,166,{top:'#7a3a2a',bot:'#4a3a2a',hat:'cap',hatc:'#5a3a1a',skin:G45P.skin[1],ph:1},t);g45person(x,206,166,{top:'#3a4a6a',bot:'#2a2a3a',child:1,skin:G45P.skin[1],dir:-1,ph:2},t);
  return {amb:.3,lights:[{x:260,y:80,r:120,i:.8},{x:255,y:142,r:30,c:'#ff8a40',i:.7}]}},
 caffa(x,t){g45sky(x,['#05060f','#0c1024','#1a1e3a','#2a2a48'],0,100);g45stars(x,70,5,80,t);g45moon(x,270,30,9);
  G45R(x,0,100,120,10,'#141420');for(let i=0;i<9;i++){g45fire(x,10+i*13,104,t+i,1)}g45sea(x,118,'#1a2a4a',t,270);
  const sh=(X,Y)=>{G45R(x,X,Y,40,6,'#2a1a10');G45R(x,X+4,Y+6,32,2,'#1a0a08');G45R(x,X+18,Y-30,2,30,'#3a2a1a');x.fillStyle='#c8b898';x.beginPath();x.moveTo(X+20,Y-28);x.lineTo(X+36,Y-8);x.lineTo(X+20,Y-6);x.fill();G45R(x,X+26,Y-22,1,1,'#a83a2a')};sh(230,118+Math.sin(t)*1);
  g45stones(x,90,60,150,70,'#6a6258',2);for(let i=90;i<240;i+=10)G45R(x,i,54,6,6,'#6a6258');g45stones(x,150,36,26,94,'#7a7064',3);for(let i=150;i<176;i+=7)G45R(x,i,30,4,6,'#7a7064');g45win(x,160,50,5,8,true);
  x.fillStyle='#2a2622';x.beginPath();x.moveTo(0,128);x.lineTo(84,126);x.lineTo(246,128);x.lineTo(270,180);x.lineTo(0,180);x.fill();const rr=g45rng(41);for(let i=0;i<60;i++){const X=rr()*250,Y=130+rr()*48;if(Y>128+(X-240)*2.3||X<240)G45R(x,X,Y,3+rr()*6,2+rr()*3,g45sh('#3a342e',(rr()-.5)*.4))}G45R(x,0,126,250,2,'#4a443c');
  const L=[g45torch(x,100,46,t),g45torch(x,206,46,t),g45torch(x,176,28,t)];
  L.push(g45person(x,124,60,{top:'#8a2a2a',bot:'#2a2a3a',hat:'cap',hatc:'#2a2a3a',skin:G45P.skin[0],hold:'torch',ph:1},t));g45person(x,138,60,{top:'#3a5a8a',bot:'#2a2a2a',skin:G45P.skin[0],dir:-1,ph:2},t);
  L.push({x:60,y:104,r:60,c:'#ff7a30',i:.55});L.push({x:162,y:54,r:20,c:'#ffc060',i:.6});return {amb:.82,lights:L}},
 florence(x,t){g45sky(x,['#05060f','#101428','#1e2240'],0,60);g45stars(x,40,9,50,t);G45R(x,140,6,22,60,'#1a1c28');G45R(x,144,0,14,8,'#1a1c28');for(let i=0;i<4;i++)G45R(x,146,14+i*12,3,6,'#2a2e40');
  G45R(x,128,70,56,90,'#4a4038');for(let i=0;i<3;i++){G45R(x,132+i*17,96,13,40,'#1a1614');x.fillStyle='#1a1614';x.beginPath();x.arc(138+i*17,96,6.5,Math.PI,0);x.fill()}G45R(x,128,70,56,3,'#2a2420');
  const hs=[[0,40,70,'#c8a878'],[70,24,60,'#b89a70'],[180,30,70,'#c8b088'],[250,20,70,'#a88a64']];const L=[];
  hs.forEach(([X,Y,w,c],i)=>{G45R(x,X,Y,w,140,c);g45noise(x,X,Y,w,140,c,.12,i+3,2);G45R(x,X,Y,w,4,g45sh(c,-.4));for(let r=0;r<3;r++)for(let k=0;k<Math.floor(w/22);k++){const lit=(i*7+r*3+k)%5===0;g45win(x,X+8+k*22,Y+14+r*26,7,12,lit,'#3a2414');if(lit)L.push({x:X+11+k*22,y:Y+20+r*26,r:22,c:'#ffb050',i:.6})}});
  G45R(x,0,150,320,30,'#4a4440');for(let j=150;j<180;j+=4)for(let i=(j/4%2)*4;i<320;i+=8)G45R(x,i,j,7,3,g45sh('#4a4440',((i*j)%7)/30));
  G45R(x,130,138,50,10,'#5a3a1a');G45R(x,128,136,54,3,'#3a2414');for(let i=0;i<3;i++){G45R(x,134+i*14,130,12,7,'#d8d0c0');G45R(x,134+i*14,133,12,1,'#a89880')}x.strokeStyle='#2a1a0a';x.lineWidth=2;[[136,150],[174,150]].forEach(([cx,cy])=>{x.beginPath();x.arc(cx,cy,6,0,7);x.stroke()});
  L.push(g45person(x,196,166,{top:'#4a3a5a',bot:'#2a2a2a',hat:'hood',hatc:'#3a2a3a',skin:G45P.skin[0],hold:'lamp',dir:-1,ph:1},t));g45person(x,100,166,{top:'#8a5a3a',bot:'#4a3a2a',dress:1,hat:'veil',hatc:'#e8e0d0',skin:G45P.skin[0],hold:'herbs',ph:3},t);
  return {amb:.78,lights:L}},
 stras(x,t){g45sky(x,['#2a3048','#4a4a68','#7a6a80','#a88a88'],0,90);x.fillStyle='#3a3448';x.beginPath();x.moveTo(140,90);x.lineTo(150,20);x.lineTo(160,90);x.fill();G45R(x,130,50,40,40,'#3a3448');G45R(x,138,88,64,64,'#a89a8a');for(let k=138;k<202;k+=9)G45R(x,k,88,2,64,'#4a3424');G45R(x,138,110,64,2,'#4a3424');G45R(x,160,124,18,28,'#2a1a10');x.fillStyle='#2a1a10';x.beginPath();x.arc(169,124,9,Math.PI,0);x.fill();
  const L=[];[[0,50,80],[80,60,60],[200,45,70],[270,55,50]].forEach(([X,Y,w],i)=>{G45R(x,X,Y,w,120,'#d8d0c0');for(let k=X;k<X+w;k+=10)G45R(x,k,Y,2,120,'#5a3a24');for(let j=Y;j<180;j+=22)G45R(x,X,j,w,2,'#5a3a24');x.fillStyle='#4a2a24';x.beginPath();x.moveTo(X-4,Y);x.lineTo(X+w/2,Y-26);x.lineTo(X+w+4,Y);x.fill();g45win(x,X+w/2-4,Y+30,8,10,i%2===0,'#3a2414')});
  G45R(x,0,150,320,30,'#d8dce8');g45noise(x,0,150,320,30,'#d8dce8',.1,3,2);g45snow(x,t,60);
  for(let i=0;i<7;i++){const o={top:['#5a3a2a','#3a3a4a','#6a4a2a'][i%3],bot:'#2a2a2a',hat:i%2?'cap':'hood',hatc:'#3a2a24',skin:G45P.skin[i%2],ph:i};if(i%3===0)o.hold='torch';const l=g45person(x,40+i*16,160+(i%2)*3,o,t);if(l)L.push(l)}
  g45person(x,250,164,{top:'#2a3a5a',bot:'#2a2a3a',hat:'cap',hatc:'#1a1a2a',skin:G45P.skin[0],dir:-1,ph:9},t);return {amb:.45,lights:L}},
 manor(x,t){g45sky(x,['#6a9ad8','#9ac0e8','#d8e8f0'],0,70);G45R(x,40,20,14,6,'#f8f8ff');G45R(x,46,16,14,6,'#f8f8ff');G45R(x,220,28,20,5,'#f0f4ff');g45mount(x,78,'#7a9a7a',4,8,false);
  G45R(x,0,78,320,102,'#c8a848');for(let j=80;j<180;j+=3)for(let i=(j%6);i<320;i+=5){const sw=Math.round(Math.sin(t*1.6+i*.05+j*.02));G45R(x,i+sw,j,1,3,g45sh('#c8a848',((i+j)%9)/30-.1))}
  G45R(x,210,40,80,40,'#a89880');g45stones(x,210,40,80,40,'#a89880',6);x.fillStyle='#5a3a2a';x.beginPath();x.moveTo(204,40);x.lineTo(250,16);x.lineTo(296,40);x.fill();g45win(x,230,54,6,10,false);g45win(x,262,54,6,10,false);G45R(x,246,62,10,18,'#3a2414');g45smoke(x,280,16,t,'#c8c8d0');
  g45person(x,120,170,{top:'#6a5a3a',bot:'#4a3a2a',hat:'wide',hatc:'#c8a858',skin:G45P.skin[1],ph:1},t);g45person(x,150,172,{top:'#8a6a4a',bot:'#4a3a2a',dress:1,hat:'veil',hatc:'#e8e0d0',skin:G45P.skin[0],ph:2,hold:'basket'},t);g45person(x,200,168,{top:'#4a2a5a',bot:'#2a2a3a',hat:'cap',hatc:'#2a1a2a',skin:G45P.skin[0],dir:-1,ph:3,hold:'book'},t);
  return {amb:.0,lights:[]}},
 ragusa(x,t){g45sky(x,['#3a3a6a','#8a5a7a','#e88a5a','#f8c878'],0,80);G45R(x,40,62,20,20,'#f8e0a0');g45sea(x,82,'#2a4a7a',t,50);
  x.fillStyle='#5a5048';x.beginPath();x.moveTo(170,90);x.lineTo(320,74);x.lineTo(320,130);x.lineTo(160,130);x.fill();g45stones(x,190,50,130,36,'#c8b898',7);for(let i=190;i<320;i+=8)G45R(x,i,46,5,4,'#c8b898');G45R(x,240,30,16,20,'#c8b898');x.fillStyle='#a84a2a';x.beginPath();x.moveTo(238,30);x.lineTo(248,18);x.lineTo(258,30);x.fill();
  const L=[];for(let k=0;k<5;k++){g45win(x,200+k*22,62,4,6,k%2===0,'#5a4a3a');if(k%2===0)L.push({x:202+k*22,y:65,r:14,c:'#ffb050',i:.5})}
  x.fillStyle='#3a3a30';x.beginPath();x.ellipse(70,120,30,8,0,0,7);x.fill();G45R(x,58,106,22,10,'#8a7a60');x.fillStyle='#5a3a2a';x.beginPath();x.moveTo(56,106);x.lineTo(69,96);x.lineTo(82,106);x.fill();
  const bx=110+Math.sin(t*.4)*8;G45R(x,bx,132,30,5,'#4a2a1a');G45R(x,bx+2,137,26,2,'#2a1a0a');g45person(x,bx+10,132,{top:'#7a6a5a',bot:'#3a3a3a',hat:'cap',hatc:'#3a2a1a',skin:G45P.skin[1],ph:1},t);g45person(x,bx+21,132,{top:'#2a4a6a',bot:'#2a2a3a',skin:G45P.skin[1],dir:-1,ph:2},t);
  return {amb:.25,lights:[{x:50,y:72,r:110,i:.6}].concat(L)}},
 eyam(x,t){g45sky(x,['#4a5060','#6a7080','#8a8a90'],0,80);g45mount(x,84,'#4a5a48',12,14,false);G45R(x,0,84,320,96,'#5a6a48');g45noise(x,0,84,320,96,'#5a6a48',.2,8,2);
  for(let i=0;i<12;i++){G45R(x,i*28,118,20,3,'#7a7468')}for(let k=0;k<3;k++){const X=190+k*42,Y=74;g45stones(x,X,Y,34,24,'#8a8274',k+2);x.fillStyle='#3a3a3a';x.beginPath();x.moveTo(X-3,Y);x.lineTo(X+17,Y-12);x.lineTo(X+37,Y);x.fill();g45win(x,X+6,Y+8,5,6,k===1,'#3a3024');g45smoke(x,X+28,Y-12,t+k,'#9a9aa0')}
  G45R(x,92,138,34,14,'#7a7468');G45R(x,92,138,34,2,'#9a9488');[[98,142],[108,142],[118,142],[103,146],[113,146]].forEach(([a,b])=>{G45R(x,a,b,4,3,'#2a2a30');G45R(x,a+1,b+1,2,1,'#c8a848')});
  G45R(x,60,146,14,8,'#8a6a3a');G45R(x,61,144,12,2,'#a8884a');G45R(x,63,142,3,2,'#c84a3a');G45R(x,68,142,3,2,'#e8d8a0');
  g45person(x,150,170,{top:'#3a3a4a',bot:'#2a2a2a',hat:'wide',hatc:'#1a1a1a',skin:G45P.skin[0],dir:-1,ph:1,hold:'book'},t);g45person(x,40,168,{top:'#6a4a3a',bot:'#3a2a2a',dress:1,hat:'veil',hatc:'#d8d0c0',skin:G45P.skin[0],ph:2},t);
  g45fog(x,t,96,40,'#c8ccd8',.18);return {amb:.32,lights:[{x:233,y:85,r:16,c:'#ffb050',i:.5}]}},
 hk(x,t){g45planks(x,0,0,320,140,'#7a6a40',4);for(let i=0;i<320;i+=4)G45R(x,i,0,1,140,'#5a4a28');G45R(x,0,0,320,8,'#3a2a14');
  G45R(x,30,30,60,44,'#0c1220');g45rain(x,t,0);for(let i=0;i<14;i++){const X=32+((i*7+t*40)%56),Y=32+((i*13+t*120)%40);G45R(x,X,Y,1,3,'#6a80a8')}G45R(x,58,30,2,44,'#3a2a14');G45R(x,30,50,60,2,'#3a2a14');G45R(x,28,28,64,2,'#3a2a14');G45R(x,28,74,64,3,'#3a2a14');
  G45R(x,0,140,320,40,'#3a2a1a');g45planks(x,0,140,320,40,'#4a3420',9);
  G45R(x,130,112,140,6,'#5a3a1a');G45R(x,130,118,140,2,'#2a1a0a');G45R(x,136,120,4,30,'#3a2414');G45R(x,262,120,4,30,'#3a2414');
  G45R(x,182,108,22,4,'#2a2a30');G45R(x,184,107,18,1,'#5a5a64');G45R(x,198,84,4,24,'#8a6a2a');G45R(x,199,84,1,24,'#c8a050');G45R(x,186,96,16,3,'#2a2a30');G45R(x,190,72,6,22,'#a8823a');G45R(x,191,72,1,22,'#e8c070');G45R(x,189,70,8,3,'#2a2a30');G45R(x,191,92,4,4,'#3a3a40');G45R(x,186,100,6,2,'#c8d8e8');
  [[150,100,'#8ab0a0'],[160,98,'#c8a860'],[226,102,'#a85a5a'],[236,100,'#d8d0b8']].forEach(([X,Y,c])=>{G45R(x,X,Y,6,12,'#18202a');G45R(x,X+1,Y+3,4,8,c);G45R(x,X+1,Y,4,2,'#d8d8d8')});
  G45R(x,244,98,10,14,'#c8a050');G45R(x,247,94,4,4,'#e8e0c0');const fl=Math.sin(t*9)*.04;
  const L=[{x:249,y:96,r:110,c:'#ffc060',i:.95+fl}];g45person(x,210,150,{top:'#e8e4d8',bot:'#3a3a40',hat:'none',skin:G45P.skin[0],hair:G45P.hair[1],dir:-1,ph:1},t);g45person(x,104,150,{top:'#2a2a3a',bot:'#2a2a30',skin:G45P.skin[1],hair:G45P.hair[0],ph:4,hold:'bucket'},t);
  return {amb:.86,lights:L}},
 soho(x,t){g45sky(x,['#141828','#2a2e44','#4a4a60'],0,70);const L=[];
  [[0,20,90,'#7a4a3a'],[90,30,80,'#6a4434'],[170,16,80,'#7a5040'],[250,26,70,'#64402e']].forEach(([X,Y,w,c],i)=>{g45bricks(x,X,Y,w,150,c,i+11);for(let r=0;r<3;r++)for(let k=0;k<Math.floor(w/24);k++){const lit=(i+r+k)%3===0;g45win(x,X+8+k*24,Y+12+r*30,9,14,lit,'#e8e0d0');if(lit)L.push({x:X+12+k*24,y:Y+19+r*30,r:20,c:'#ffd080',i:.5})}G45R(x,X,Y,w,3,'#3a2a24')});
  G45R(x,0,140,320,40,'#3a3a40');for(let j=142;j<180;j+=5)for(let i=(j%10);i<320;i+=10)G45R(x,i,j,9,4,g45sh('#3a3a40',((i+j)%7)/25));
  G45R(x,150,104,10,38,'#2a3a2a');G45R(x,148,102,14,4,'#1a2a1a');G45R(x,160,112,10,2,'#1a2a1a');G45R(x,168,112,2,8,'#1a2a1a');G45R(x,144,118,6,2,'#4a5a6a');G45R(x,146,120,2,4,'#6a8aa8');
  [[60,104],[262,104]].forEach(([X,Y])=>{G45R(x,X,Y,2,38,'#1a1a1a');G45R(x,X-3,Y-6,8,7,'#2a2a2a');G45R(x,X-2,Y-5,6,5,'#ffe0a0');L.push({x:X+1,y:Y-2,r:54,c:'#ffd890',i:.8})});
  g45person(x,128,168,{top:'#5a4a3a',bot:'#2a2a2a',dress:1,hat:'veil',hatc:'#c8c0b0',skin:G45P.skin[0],ph:1,hold:'bucket'},t);g45person(x,190,168,{top:'#1a1a22',bot:'#1a1a22',hat:'tophat',skin:G45P.skin[0],dir:-1,ph:2,hold:'book'},t);g45person(x,220,166,{top:'#2a2a3a',bot:'#2a2a30',hat:'cap',hatc:'#1a1a1a',skin:G45P.skin[0],dir:-1,ph:3},t);
  g45fog(x,t,110,50,'#a8a898',.2);return {amb:.62,lights:L}}};
if(typeof window!=='undefined')window.__g45={SC45,g45stage,g45person};
