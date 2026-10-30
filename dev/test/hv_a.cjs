// The Last Harvest, step A: layers move at different speeds, things in front hide the walker (and show his outline),
// the plague fades the colours but not what Peter loves, keyboard and touch both walk, HUD fits at 360 and 1280, old saves untouched
// needs: python3 -m http.server 8765 from the repo root · OUT=dir for screenshots
const {chromium}=require('playwright');const OUT=process.env.OUT||'/tmp';
(async()=>{const b=await chromium.launch();let bad=0;const ok=(c,m)=>{console.log((c?'ok   ':'FAIL ')+m);if(!c)bad++};const errs=[];
const open=async(w,h,touch)=>{const p=await b.newPage({viewport:{width:w,height:h},hasTouch:!!touch,isMobile:!!touch,deviceScaleFactor:touch?2:1});p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  await p.addInitScript(()=>{localStorage.setItem('sit.seen','true');localStorage.setItem('sit.lang',JSON.stringify('th'))});await p.goto('http://localhost:8765/index.html?lang=th');await p.waitForTimeout(800);return p};
const p=await open(1280,720);const book0=await p.evaluate(()=>localStorage.getItem('sit.book'));
await p.evaluate(()=>document.getElementById('pl45go').click());await p.waitForTimeout(300);ok(!!await p.$('#hv50door'),'The Last Harvest door on the plague page');ok(!!await p.$('#jr48door'),'JRPG door still there');
await p.click('#hv50door');await p.waitForTimeout(200);ok((await p.$eval('#hv',e=>e.innerText)).includes('ไม่มีภาพเลือด'),'a short content warning comes first');await p.click('#hv [data-a=go]');await p.waitForTimeout(1300);
const st=()=>p.evaluate(()=>{const S=window.__hvS;return{x:S.p.x,cam:S.cam,L:S.stats.layers,front:S.stats.front,through:S.stats.through,sc:S.sc,camY:S.camY,dir:S.p.dir}});
const a=await st();await p.keyboard.down('ArrowRight');await p.waitForTimeout(2500);await p.keyboard.up('ArrowRight');await p.waitForTimeout(600);const c=await st();
ok(c.x>a.x+200,'keyboard walks right: '+Math.round(a.x)+' → '+Math.round(c.x));
const moved=c.L.map((l,i)=>Math.round((l.off-a.L[i].off)*10)/10);const speeds=new Set(moved.map(v=>Math.round(v)));ok(c.L.length>=6&&speeds.size>=5,'layers slide at different speeds: '+c.L.map((l,i)=>l.id+' '+moved[i]).join(' · '));
// walk until something in front hides Peter
let th=0;for(let k=0;k<160&&!th;k++){await p.keyboard.down('ArrowRight');await p.waitForTimeout(60);await p.keyboard.up('ArrowRight');th=(await st()).through}await p.waitForTimeout(100);await p.screenshot({path:OUT+'/hva_through.png'});ok(th>0,'something in front hides Peter and his outline shows through ('+(await st()).front.join(', ')+')');
// colour: saturation of the picture vs the hat
const sat=()=>p.evaluate(()=>{const S=window.__hvS,cv=document.querySelector('#hv canvas'),x=cv.getContext('2d'),W=cv.width,H=cv.height;const s=(d)=>{let t=0,n=0;for(let i=0;i<d.length;i+=16){const r=d[i],g=d[i+1],b=d[i+2],mx=Math.max(r,g,b),mn=Math.min(r,g,b);t+=mx?(mx-mn)/mx:0;n++}return t/n};
  const bg=s(x.getImageData(0,Math.round(H*.15),W,Math.round(H*.4)).data);const hx=Math.round((S.p.x+3*S.p.dir-S.cam)*S.sc),hy=Math.round((window.__hv.HV.GY+12-86-26+S.camY)*S.sc);const hat=s(x.getImageData(hx-6,hy-3,12,6).data);return{bg:+bg.toFixed(3),hat:+hat.toFixed(3)}});
await p.evaluate(()=>{const S=window.__hvS;S.p.x=420;S.cam=null;S.tod=1;S.plague=S.plagueBase=0});await p.waitForTimeout(500);const s0=await sat();await p.evaluate(()=>{window.__hvS.plague=window.__hvS.plagueBase=1});await p.waitForTimeout(500);const s1=await sat();await p.screenshot({path:OUT+'/hva_plague1.png'});
ok(s1.bg<s0.bg*.4,'plague 0→1 fades the town: saturation '+s0.bg+' → '+s1.bg);ok(s1.hat>s0.hat*.7,'Peter\'s hat keeps its colour: '+s0.hat+' → '+s1.hat);
for(const [i,n] of [[0,'morning'],[2,'evening'],[3,'night']]){await p.evaluate(i=>{window.__hvS.tod=i;window.__hvS.plague=window.__hvS.plagueBase=.3},i);await p.waitForTimeout(300);await p.screenshot({path:OUT+'/hva_'+n+'.png'})}
// click on the street to walk there
const x0=(await st()).x;await p.mouse.click(1100,400);await p.waitForTimeout(2200);ok((await st()).x>x0+80,'clicking the street walks there');
const perf=await p.evaluate(()=>{const f=window.__hvS.perf;return f.reduce((a,b)=>a+b,0)/f.length});console.log('     average draw time per frame (headless, no GPU): '+perf.toFixed(1)+' ms');
await p.click('#hv [data-a=exit]');ok(!!await p.$('#hv canvas'),'one tap on exit stays');await p.click('#hv [data-a=exit]');await p.waitForTimeout(200);ok(!await p.$('#hv'),'second tap leaves');
ok(await p.evaluate(()=>localStorage.getItem('sit.book'))===book0,'sit.book unchanged');await p.close();
// phones: touch-hold walks; HUD buttons do not overlap and stay on screen
for(const [w,h] of [[360,640],[390,844],[1280,720],[844,390]]){const q=await open(w,h,w<500);await q.evaluate(()=>{document.getElementById('pl45go').click()});await q.waitForTimeout(200);await q.evaluate(()=>window.__v50.hvStart());await q.waitForTimeout(1200);
  const ov=await q.evaluate(()=>{const bs=[...document.querySelectorAll('#hv .top button,#hv .pad .ctl>button,#hv .pad>button,#hv .nb,#hv .cap')].filter(e=>e.offsetParent&&getComputedStyle(e).opacity!=='0').map(e=>{const r=e.getBoundingClientRect();return{t:(e.textContent||'').slice(0,10),r}});const out=[];const vw=innerWidth,vh=innerHeight;
    bs.forEach(a=>{if(a.r.left<0||a.r.top<0||a.r.right>vw+.5||a.r.bottom>vh+.5)out.push('off screen: '+a.t)});for(let i=0;i<bs.length;i++)for(let j=i+1;j<bs.length;j++){const A=bs[i].r,B=bs[j].r;if(A.left<B.right-1&&B.left<A.right-1&&A.top<B.bottom-1&&B.top<A.bottom-1)out.push('overlap: '+bs[i].t+' / '+bs[j].t)}return out});
  const x1=await q.evaluate(()=>window.__hvS.p.x);const br=await q.$$('#hv .pad .ctl button');const bb=await br[1].boundingBox();await q.mouse.move(bb.x+bb.width/2,bb.y+bb.height/2);await q.mouse.down();await q.waitForTimeout(1200);await q.mouse.up();const x2=await q.evaluate(()=>window.__hvS.p.x);
  await q.screenshot({path:OUT+`/hva_${w}x${h}.png`});ok(!ov.length&&x2>x1+60,`${w}x${h}: HUD fits, holding ▶ walks (${Math.round(x1)}→${Math.round(x2)})`+(ov.length?' '+ov.join(' | '):''));await q.close()}
console.log('errors:',errs.length?errs.join('\n'):'none');console.log(bad?bad+' FAILED':'hv_a: all ok');await b.close();process.exit(bad?1:0)})();
