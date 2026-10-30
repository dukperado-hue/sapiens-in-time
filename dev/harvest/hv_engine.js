/* ===================== The Last Harvest · engine: side-scrolling scenes in layers, drawn as vector paths (v0.50, Thai only) =====================
   World units: the picture is always 360 units tall; the ground line is y=300. A scene is a list of layers, each with its own parallax.
   Layers that never move inside themselves are drawn once onto an offscreen canvas and only slid sideways each frame. */
const HV={H:360,GY:300,INK:'#3b2418'};
/* the canvas matches the screen's real pixels (devicePixelRatio), capped so big screens stay fast */
function hvFitCanvas(cv){const dpr=Math.min(2,window.devicePixelRatio||1),r=cv.getBoundingClientRect();let w=Math.max(2,Math.round(r.width*dpr)),h=Math.max(2,Math.round(r.height*dpr));const cap=900;if(h>cap){const k=cap/h;w=Math.round(w*k);h=cap}if(cv.width!==w||cv.height!==h){cv.width=w;cv.height=h;return true}return false}
/* small helpers for drawing in world units */
const hvRng=s=>()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296};
const hvMix=(a,b,k)=>{const p=h=>{h=h.replace('#','');const n=parseInt(h,16);return[(n>>16)&255,(n>>8)&255,n&255]};const A=p(a),B=p(b);return'#'+A.map((v,i)=>Math.round(v+(B[i]-v)*k).toString(16).padStart(2,'0')).join('')};
function hvPath(x,pts,close){x.beginPath();x.moveTo(pts[0],pts[1]);for(let i=2;i<pts.length;i+=2)x.lineTo(pts[i],pts[i+1]);if(close!==false)x.closePath()}
function hvInk(x,fill,w){if(fill){x.fillStyle=fill;x.fill()}x.lineWidth=w||2.4;x.strokeStyle=HV.INK;x.lineJoin='round';x.lineCap='round';x.stroke()}
function hvRRect(x,X,Y,w,h,r){x.beginPath();x.moveTo(X+r,Y);x.arcTo(X+w,Y,X+w,Y+h,r);x.arcTo(X+w,Y+h,X,Y+h,r);x.arcTo(X,Y+h,X,Y,r);x.arcTo(X,Y,X+w,Y,r);x.closePath()}
const HVCAN=(()=>{try{const c=document.createElement('canvas').getContext('2d');return{filter:'filter' in c,sat:(()=>{c.globalCompositeOperation='saturation';return c.globalCompositeOperation==='saturation'})()}}catch(e){return{filter:false,sat:false}}})();
/* the camera: follows the walker, leads a little in the direction of walking, and breathes */
function hvCamera(S,vw,dt,t){const lead=S.p.dir*vw*.12*(S.p.moving?1:.5);const target=Math.max(0,Math.min(S.scene.W-vw,S.p.x-vw*.5+lead));S.cam=S.cam==null?target:S.cam+(target-S.cam)*Math.min(1,dt*3.2);S.camY=Math.sin(t*.55)*1.3}
/* draw one frame of a scene */
function hvRender(cv,S,t,dt){const x=cv.getContext('2d'),W=cv.width,H=cv.height,sc=H/HV.H,vw=W/sc,sn=S.scene;S.vw=vw;S.sc=sc;hvCamera(S,vw,dt,t);const cam=S.cam,pl=S.plague||0;
  x.setTransform(1,0,0,1,0,0);x.globalCompositeOperation='source-over';x.globalAlpha=1;x.filter='none';x.clearRect(0,0,W,H);
  const key=W+'x'+H+'|'+sn.k+'|'+(sn.ver||0);if(S._ck!==key){S._ck=key;S._cache={}}
  S.stats={layers:[]};const loved=[];S.loved=loved;
  for(const L of sn.layers){const off=cam*L.p;
    if(L.cache){let c=S._cache[L.id];if(!c){c=document.createElement('canvas');const lw=Math.ceil((vw+(sn.W-vw)*L.p)*sc)+4;c.width=Math.min(16000,lw);c.height=H;const y=c.getContext('2d');y.setTransform(sc,0,0,sc,0,0);L.draw(y,S,0,{x0:0,x1:lw/sc});S._cache[L.id]=c}
      x.setTransform(1,0,0,1,0,0);x.drawImage(c,Math.round(-off*sc),Math.round(S.camY*sc*L.p))}
    if(L.live){x.setTransform(sc,0,0,sc,-off*sc,S.camY*sc*L.p);L.live(x,S,t,{x0:off,x1:off+vw})}
    S.stats.layers.push({id:L.id,p:L.p,off:Math.round(off*10)/10});
    if(L.id==='play'){/* the plague takes the colour out of the world; what the characters love keeps it */
      x.setTransform(1,0,0,1,0,0);if(pl>0){if(HVCAN.sat){x.globalCompositeOperation='saturation';x.globalAlpha=Math.min(.92,pl*.92);x.fillStyle='#808080';x.fillRect(0,0,W,H);x.globalAlpha=1}else{x.globalAlpha=pl*.5;x.fillStyle='#8a8478';x.fillRect(0,0,W,H);x.globalAlpha=1}
        x.globalCompositeOperation='source-over';x.globalAlpha=pl*.18;x.fillStyle='#2a2620';x.fillRect(0,0,W,H);x.globalAlpha=1}
      x.setTransform(sc,0,0,sc,-cam*sc,S.camY*sc);for(const f of loved)f(x);
      hvLight(x,S,t,cam,sc,W,H)}}
  /* the front layer: dark shapes that pass in front of the camera, a little blurred */
  x.setTransform(1,0,0,1,0,0);const fr=sn.front||[];S.stats.front=[];
  const bx=b=>b&&{x0:(b.x0-cam)*sc,x1:(b.x1-cam)*sc},pb=bx(S.pbox),db=bx(S.dbox);let hit=[];const fdt=Math.min(.1,dt||.016);
  for(const o of fr){const ox=(o.x-cam*o.p)*sc,ow=(o.w||60)*sc;if(ox+ow<-40||ox-ow>W+40)continue;
    /* each front thing is drawn (blurred) onto its own small canvas, and redrawn only a few times a second when it moves: blur is costly on phones */
    const pad=30,bw=(o.w||60)+pad*2,key=sc+'|'+(S.lowfx?1:0);S._fn=(S._fn||0);if(!o._c||o._k!==key||(o.anim&&(S._fn+o.x)%5===0)){const c=o._c||(o._c=document.createElement('canvas'));c.width=Math.ceil(bw*sc);c.height=Math.ceil(400*sc);const y=c.getContext('2d');y.setTransform(sc,0,0,sc,(bw/2)*sc,20*sc);if(HVCAN.filter&&!S.lowfx)y.filter='blur('+Math.max(1,sc*.9).toFixed(1)+'px)';y.fillStyle=o.col||'#1d1611';y.strokeStyle=o.col||'#1d1611';o.draw(y,t,S);o._k=key}
    /* when it stands in front of Peter or the dog it fades smoothly to 0.35, then comes back */
    const ov=b=>b&&ox-ow*.5<b.x1&&ox+ow*.5>b.x0,full=o.a||.94,cover=ov(pb)||ov(db);if(o._a==null)o._a=full;o._a+=((cover?.35:full)-o._a)*Math.min(1,fdt*6);
    x.globalAlpha=o._a;x.drawImage(o._c,Math.round(ox-bw/2*sc),Math.round(S.camY*sc*o.p-20*sc));x.globalAlpha=1;
    S.stats.front.push(o.kind);if(ov(pb)){hit.push(o);S.stats.fade=Math.min(S.stats.fade==null?1:S.stats.fade,o._a)}}
  /* when something in front hides the walker, show the walker's outline through it */
  S.stats.through=0;if(hit.length&&S.silo){const m=S._mask||(S._mask=document.createElement('canvas'));if(m.width!==W||m.height!==H){m.width=W;m.height=H}const y=m.getContext('2d');y.setTransform(1,0,0,1,0,0);y.globalCompositeOperation='source-over';y.clearRect(0,0,W,H);
    for(const o of hit){y.save();y.setTransform(sc,0,0,sc,(o.x-cam*o.p)*sc,S.camY*sc*o.p);y.fillStyle='#fff';y.strokeStyle='#fff';y.globalAlpha=1;o.draw(y,t,S);y.restore()}
    const c2=S._mask2||(S._mask2=document.createElement('canvas'));if(c2.width!==W||c2.height!==H){c2.width=W;c2.height=H}const z=c2.getContext('2d');z.setTransform(1,0,0,1,0,0);z.globalCompositeOperation='source-over';z.clearRect(0,0,W,H);z.setTransform(sc,0,0,sc,-cam*sc,S.camY*sc);S.silo(z);z.setTransform(1,0,0,1,0,0);z.globalCompositeOperation='source-in';z.fillStyle='#ffe9c4';z.fillRect(0,0,W,H);
    y.globalCompositeOperation='source-in';y.setTransform(1,0,0,1,0,0);y.drawImage(c2,0,0);const k=Math.max(...hit.map(o=>((o._a||.94)-.35)/.59));x.globalAlpha=.55*Math.max(.25,k);x.drawImage(m,0,0);x.globalAlpha=1;S.stats.through=hit.length}
  S._fn=(S._fn||0)+1;
  if(sn.over){x.setTransform(sc,0,0,sc,-cam*sc,S.camY*sc);sn.over(x,S,t,{x0:cam,x1:cam+vw})}
  if(S.overFx){x.setTransform(sc,0,0,sc,-cam*sc,S.camY*sc);S.overFx(x,t)}
  /* paper and vignette: the page of a picture book */
  /* the vignette closes in as Peter grows sadder and the plague grows */
  const sad=Math.max(0,Math.min(1,S.sad||0)),vin=Math.max(.08,.35-sad*.2-pl*.08);S.stats.vignette={inner:+vin.toFixed(3),a:+(.38+pl*.25+sad*.3).toFixed(3)};
  x.setTransform(1,0,0,1,0,0);const g=x.createRadialGradient(W/2,H*.55,H*vin,W/2,H*.55,Math.max(W,H)*(.75-sad*.12));g.addColorStop(0,'rgba(30,18,12,0)');g.addColorStop(1,'rgba(30,18,12,'+Math.min(.9,.38+pl*.25+sad*.3)+')');x.fillStyle=g;x.fillRect(0,0,W,H);
  if(!S._paper){const p=document.createElement('canvas');p.width=p.height=128;const y=p.getContext('2d'),r=hvRng(5);for(let i=0;i<1400;i++){y.fillStyle='rgba('+(r()>.5?'255,240,210':'60,40,20')+','+(r()*.06).toFixed(3)+')';y.fillRect(r()*128|0,r()*128|0,1+(r()*2|0),1)}S._paper=x.createPattern(p,'repeat')}x.fillStyle=S._paper;x.fillRect(0,0,W,H);
  if(S.iris!=null&&S.iris<1){const r=Math.hypot(W,H)*.6*S.iris;x.save();x.fillStyle='#120c08';x.beginPath();x.rect(0,0,W,H);x.arc(W/2,H*.62,Math.max(0,r),0,Math.PI*2,true);x.fill('evenodd');x.restore()}}
/* light by the time of day: morning cool, noon clear, evening gold, night by candle; multiply darkens, screen adds glow */
const HVTOD=[{n:'เช้า',mul:'#e6ecf6',a:.35,glow:'#fff4e0',ga:.08},{n:'กลางวัน',mul:'#fff8ee',a:.12,glow:'#fff',ga:0},{n:'เย็น',mul:'#f6b878',a:.42,glow:'#ffc070',ga:.16},{n:'กลางคืน',mul:'#232a58',a:.8,glow:'#ffa850',ga:0}];
function hvLight(x,S,t,cam,sc,W,H){const T=HVTOD[S.tod||0];x.save();x.setTransform(1,0,0,1,0,0);x.globalCompositeOperation='multiply';x.globalAlpha=T.a;x.fillStyle=T.mul;x.fillRect(0,0,W,H);x.globalAlpha=1;
  if(T.ga){x.globalCompositeOperation='screen';const g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,T.glow);g.addColorStop(.6,'rgba(0,0,0,0)');x.globalAlpha=T.ga*3;x.fillStyle=g;x.fillRect(0,0,W,H);x.globalAlpha=1}
  if(S.tod>=2){const k=S.tod===3?1:.45;x.globalCompositeOperation='screen';for(const L of (S.lights||[])){if(S.tod===2&&!L.lamp)continue;const X=(L.x-cam*L.p)*sc,Y=(L.y+S.camY*L.p)*sc,R=L.r*sc;if(X<-R||X>W+R)continue;const fl=1+Math.sin(t*9+L.x)*.05;const g=x.createRadialGradient(X,Y,0,X,Y,R*fl);g.addColorStop(0,'rgba(255,170,80,'+((L.i||.7)*k)+')');g.addColorStop(1,'rgba(255,120,40,0)');x.fillStyle=g;x.fillRect(X-R*1.1,Y-R*1.1,R*2.2,R*2.2)}}
  x.restore()}
if(typeof window!=='undefined')window.__hv={HV,hvRender,hvFitCanvas,HVCAN,HVTOD};
