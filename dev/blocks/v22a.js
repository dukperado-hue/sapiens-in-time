/* ================= v0.22 ATMOSPHERE: one weather clock for the picture and the sound ================= */
// Lightning strikes at a distance d (km). The flash comes at once; the thunder comes d/0.343 seconds later,
// quieter, lower and longer the further away it is. Wind gusts drift between calm and strong and move grass,
// rain, the foreground and the wind sound together.
const ATM={strikes:[],next:0,gust:.2,tg:.2,gustT:0,on:false,last:0,
  update(now,storm,rain,cold){if(now-this.last>500){this.gust=this.tg}this.last=now;
    if(now>this.gustT){this.tg=Math.min(1,Math.random()*(storm?1:rain?.65:.45)+(storm?.25:0));this.gustT=now+2500+Math.random()*6500}
    this.gust+=(this.tg-this.gust)*.015;
    this.on=!!(storm||rain)&&!cold;if(!this.on){this.next=0;return}
    if(!this.next)this.next=now+1500+Math.random()*5000;
    if(now>=this.next){const d=storm?.3+Math.random()*2.4:1.2+Math.random()*3.8;
      this.strikes.push({t:now,d,x:18+Math.random()*156,seed:(Math.random()*1e9)|0});if(this.strikes.length>4)this.strikes.shift();
      this.next=now+(storm?3500+Math.random()*9000:11000+Math.random()*20000);
      if(typeof SND!=='undefined'&&SND.thunder)SND.thunder(d)}},
  // flash brightness 0..1 and the strike to draw as a bolt (close ones only)
  flash(now){let f=0,b=null;for(const s of this.strikes){const dt=now-s.t;if(dt<0||dt>700)continue;const k=1/(1+s.d*.8);
      const e=dt<70?1:dt<130?.2:dt<200?.75:dt<260?.15:Math.max(0,.5-(dt-260)/880);f=Math.max(f,k*e);if(s.d<1.4&&dt<240&&e>.5)b=s}return{f,b}}};
if(typeof window!=='undefined')window.__ATM=ATM;
// lightning bolt: a jagged line with a branch, from the cloud base to the ground
function bolt22(ctx,s,gy){const r=srng(s.seed);let x=s.x,y=4;ctx.fillStyle='#fffbe8';
  const fork=6+((r()*10)|0);while(y<gy-2){ctx.fillRect(x|0,y|0,1,3);x+=(r()-.5)*4;y+=2+r()*2;
    if(((y|0)>>1)===fork){let bx=x,by=y;for(let i=0;i<8;i++){ctx.fillRect(bx|0,by|0,1,2);bx+=(r()<.5?-1:1)*(1+r()*2);by+=2}}}
  ctx.fillStyle='rgba(255,250,230,.5)';ctx.fillRect((x|0)-2,gy-2,5,2)}
// rain that leans with the wind and splashes on the ground
function rain22(ctx,o,gy,now,storm){const W=192,H=108,n=storm?130:70,g=ATM.gust,lean=(o.live?g:.25)*(storm?3:1.8);
  ctx.fillStyle=storm?'rgba(200,215,235,.55)':'rgba(190,210,230,.45)';
  for(let i=0;i<n;i++){const sp=1+(i%3)*.5,y=(i*17+now/5*sp)%H,x=(i*29+now/9*sp*.5+y*lean*.35)%W;for(let k=0;k<3;k++)ctx.fillRect((x-k*lean*.35)|0,(y-k)|0,1,1)}
  ctx.fillStyle='rgba(215,228,240,.55)';const sr=srng(((now/90)|0));for(let i=0;i<(storm?16:9);i++){const x=sr()*W,y=gy+2+sr()*(H-gy-3);ctx.fillRect(x|0,y|0,1,1);ctx.fillRect((x|0)-1,(y|0)-1,1,1);ctx.fillRect((x|0)+1,(y|0)-1,1,1)}}
// the nearest layer: grass, reeds, ferns or stones at the bottom corners, swaying with the gust
function fg22(ctx,o,P,gy,now,wx){const W=192,H=108,g=o.live?ATM.gust:.2,cold=o.snowGround||o.snowFall,dry=P.dunes||P.dry||o.yt==='dry';
  if(o.city||P.city||P.rom||P.gre||(o.egy&&(o.pylon||o.pyr)))return;// paved towns: no fringe
  const kind=cold?'snow':(P.riv||P.lake||o.gan20&&!dry)?'reed':(P.dense||P.vines)?'fern':dry?'dry':P.sea?'dune':'grass';
  const base=mix(P.gr||'#4a5a2a','#0d0a08',.62),hi=mix(P.gr||'#4a5a2a','#1a140e',.4),rs=srng((o.seed>>>0)+404);
  const blade=(x,h,ph,c)=>{for(let k=0;k<h;k++){const sw=Math.sin(now/(520-g*260)+ph)*(k/h)*(1+g*2.6);ctx.fillStyle=c;ctx.fillRect((x+sw)|0,H-1-k,1,1)}};
  const side=(x0,x1)=>{for(let x=x0;x<x1;x++){const d=Math.min(x-x0,x1-x)/(x1-x0),h=(kind==='dry'?3:5)+((rs()*(kind==='reed'?16:kind==='fern'?9:8))|0)*(1-d*.9);
      if(kind==='dry'&&rs()<.55)continue;if(kind==='dune'&&rs()<.5)continue;blade(x,h,x*.7,rs()<.5?base:hi);
      if(kind==='reed'&&h>12&&rs()<.18){const sw=Math.sin(now/(520-g*260)+x*.7)*(1+g*2.6);ctx.fillStyle='#3a2414';ctx.fillRect((x+sw)|0,H-1-h,1,3)}
      if(kind==='snow'&&rs()<.4){ctx.fillStyle='#e8eef0';ctx.fillRect(x,H-2-((rs()*3)|0),1,1)}}
    if(kind==='fern'){for(let j=0;j<2;j++){const cx=x0+(x1-x0)*(.3+.4*j),cy=H-4-j*3,sw=Math.sin(now/700+j)*(1+g*2);ctx.fillStyle=base;
      for(let i=0;i<9;i++){ctx.fillRect((cx-i*1.6+sw)|0,(cy-i*.5+i*i*.06)|0,2,1);ctx.fillRect((cx+i*1.6+sw)|0,(cy-i*.5+i*i*.06)|0,2,1)}}}
    if(kind==='dry'||kind==='dune'){ctx.fillStyle=base;const sx=x0+(x1-x0)*.5;for(let i=0;i<4;i++)ctx.fillRect(sx-4+i*2,H-3-(i%2),3,3)}};
  side(0,30);side(W-26,W)}
// low sun: soft beams falling from the sun, morning and evening, when the sky is clear
function shafts22(ctx,o,tm,day,dusk,wx,storm){if(storm||wx.rain||dusk<.15||day<.12)return;const W=192;const ang=(tm-.25)*2*Math.PI,sx=96+Math.sin(ang)*80,sy=62-Math.cos(ang)*48;if(sy>64)return;
  ctx.globalCompositeOperation='lighter';const a=.05*dusk*(o.live?.8+.2*Math.sin((o.t||Date.now())/2300):1);
  for(let k=0;k<4;k++){const off=(k-1.5)*22,sl=(96-sx)/60;ctx.fillStyle='rgba(255,196,120,'+a.toFixed(3)+')';
    for(let y=Math.max(0,sy|0);y<108;y+=2){const w=3+(y-sy)*.12,x=sx+off+(y-sy)*sl*.9+(y-sy)*off*.012;ctx.fillRect((x-w/2)|0,y,w|0,2)}}
  ctx.globalCompositeOperation='source-over'}
// embers rising from each fire, and a flicker in the light it throws
function embers22(ctx,fires,now,day){if(!fires.length)return;ctx.globalCompositeOperation='lighter';
  fires.forEach(([fx0,fy,sm],j)=>{for(let i=0;i<(sm?3:6);i++){const ph=((now/(900+i*130))+i*.37+j*.21)%1,x=fx0+Math.sin(now/300+i*2)*(1+ph*3)+(i-2.5),y=fy-6-ph*22;
      ctx.fillStyle='rgba(255,'+(170-ph*90|0)+',70,'+((1-ph)*(.5+.4*(1-day))).toFixed(2)+')';ctx.fillRect(x|0,y|0,1,1)}
    const fl=.5+.5*Math.sin(now/90+j)*Math.sin(now/37+j*3);ctx.fillStyle='rgba(255,150,70,'+(.05*fl*(1-day)+.01).toFixed(3)+')';ctx.fillRect(fx0-26,fy-20,52,30)});
  ctx.globalCompositeOperation='source-over'}
// colour of the hour: warm at the low sun, cool and grey in rain
function grade22(ctx,day,dusk,wx,storm){if(!(dusk>.1||wx.rain||storm))return;ctx.globalCompositeOperation='soft-light';
  if(dusk>.1){ctx.fillStyle='rgba(255,150,80,'+(.18*dusk).toFixed(3)+')';ctx.fillRect(0,0,192,108)}
  if(wx.rain||storm){ctx.fillStyle='rgba(70,90,120,'+(storm?.35:.2)+')';ctx.fillRect(0,0,192,108)}ctx.globalCompositeOperation='source-over'}
function flash22(ctx,o,gy,now,storm){if(!o.live){if(storm&&((now/97)|0)%41===0){ctx.fillStyle='rgba(255,255,255,.3)';ctx.fillRect(0,0,192,108)}return}
  const{f,b}=ATM.flash(Date.now());if(f<=.01)return;ctx.fillStyle='rgba(235,240,255,'+(f*.55).toFixed(3)+')';ctx.fillRect(0,0,192,108);if(b)bolt22(ctx,b,gy)}

/* ---------- the stage around the canvas: camera, cross-fades, title cards, the scene inside the event card ---------- */
const STG22={sig:'',prev:null,t0:0,card:'',cardT:0};
function stageFrame22(cv,so){const ctx=cv.getContext('2d'),now=performance.now();
  const sig=[so.sc,so.vr,S&&S.rg,so.act,so.stage].join('|');
  if(sig!==STG22.sig){if(STG22.sig){if(!STG22.prev){STG22.prev=document.createElement('canvas');STG22.prev.width=192;STG22.prev.height=108}
      STG22.prev.getContext('2d').drawImage(cv,0,0);STG22.t0=now}STG22.sig=sig}
  return()=>{const k=(now-STG22.t0)/900;if(STG22.prev&&k<1){ctx.globalAlpha=1-k*k*(3-2*k);ctx.drawImage(STG22.prev,0,0);ctx.globalAlpha=1}}}
// a cinema title when a life begins or you move: the place, and how long ago
function titleCard22(){if(!S)return;const el=$('#tcard');if(!el)return;const key=S.rg+'|'+S.seed;if(key===STG22.card)return;STG22.card=key;
  el.innerHTML='<small>'+esc(t('yearsAgo',{n:fmt(S.ya0-S.age)}))+'</small><b>'+esc(L(S.R.n))+'</b>';el.classList.remove('on');void el.offsetWidth;el.classList.add('on')}
function modalScene22(){const m=$('#mScene'),src=$('#scene');if(!m||!src||m.offsetParent===null)return;
  const c=m.getContext('2d');c.imageSmoothingEnabled=false;c.drawImage(src,0,30,192,68,0,0,192,68)}
