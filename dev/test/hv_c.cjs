// The Last Harvest v0.53: the dead under a cloth, the dog's fear and comfort, empty days, the closed street, the night lines on the end page
// needs: python3 -m http.server 8765 from the repo root · OUT=dir for screenshots
const {chromium}=require('playwright');const OUT=process.env.OUT||'/tmp';
(async()=>{const b=await chromium.launch();let bad=0;const ok=(c,m)=>{console.log((c?'ok   ':'FAIL ')+m);if(!c)bad++};const errs=[];
const open=async(w,h,touch)=>{const p=await b.newPage({viewport:{width:w,height:h},hasTouch:!!touch,isMobile:!!touch,deviceScaleFactor:touch?2:1});p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  await p.addInitScript(()=>{localStorage.setItem('sit.seen','true');localStorage.setItem('sit.lang',JSON.stringify('th'))});await p.goto('http://localhost:8765/index.html?lang=th');await p.waitForTimeout(700);await p.evaluate(()=>{document.getElementById('pl45go').click()});await p.waitForTimeout(200);return p};
const go=async(p,o)=>{await p.evaluate(o=>window.__v50.hvStart(o),o);await p.waitForTimeout(1200)};const S=(p,f)=>p.evaluate(f);const tp=(p,x,dx)=>p.evaluate(([x,dx])=>{const S=window.__hvS;S.p.x=x;S.dog.x=x-(dx==null?50:dx);S.cam=null},[x,dx]);
const labs=p=>p.$$eval('#hv .nb .ac button',bs=>bs.map(b=>b.textContent));
const p=await open(1280,720);const book0=await p.evaluate(()=>localStorage.getItem('sit.book'));await go(p,{run:'normal',emptyChance:0});
// 1. the dog is afraid near the dead and will not come close
await tp(p,1170,60);await p.waitForTimeout(2200);const d1=await S(p,()=>{const S=window.__hvS,c=S.spots.find(s=>s.k==='corpse');return{emo:S.dog.emo,dist:Math.abs(S.dog.x-c.x)}});await p.screenshot({path:OUT+'/hvc_corpse_near.png'});
ok(d1.emo==='scared','near the body the dog is scared (shivers, tail down, a shiver bubble)');ok(d1.dist>=135,'the dog keeps away from the body: '+Math.round(d1.dist)+' units');
ok((await labs(p)).some(t=>t.includes('ค้นศพ')),'the notebook offers ค้นศพ');
// 2. searching the dead: good things, a heavy cost, the picture darkens for a while
const b0=await S(p,()=>({m:window.__hvS.mind,e:window.__hvS.exp,pl:window.__hvS.plague,n:Object.values(window.__hvS.inv).reduce((a,b)=>a+b,0)}));await tp(p,1200,200);await p.keyboard.press('Enter');await p.waitForTimeout(2700);
const b1=await S(p,()=>({m:window.__hvS.mind,e:window.__hvS.exp,pl:window.__hvS.plague,n:Object.values(window.__hvS.inv).reduce((a,b)=>a+b,0),inv:window.__hvS.inv}));await p.screenshot({path:OUT+'/hvc_corpse_after.png'});
ok(b1.n===b0.n+2,'the body gave two good things: '+JSON.stringify(b1.inv));ok(b1.m<=b0.m-25,'Peter\'s heart drops hard: '+Math.round(b0.m)+' → '+Math.round(b1.m));ok(b1.e>=b0.e+24,'the hidden risk jumps: '+b0.e.toFixed(1)+' → '+b1.e.toFixed(1));ok(b1.pl>=b0.pl+.3,'the town darkens at once: plague '+b0.pl.toFixed(2)+' → '+b1.pl.toFixed(2));
await p.waitForTimeout(6000);const pl2=await S(p,()=>window.__hvS.plague);ok(pl2<b1.pl-.1,'and the darkness slowly lifts: '+b1.pl.toFixed(2)+' → '+pl2.toFixed(2));
// 3. petting the dog
await tp(p,600,40);await p.waitForTimeout(1200);ok((await labs(p)).some(t=>t.includes('ลูบหัวปลอบใจ')),'standing still by the dog shows ลูบหัวปลอบใจ');const q0=await S(p,()=>({m:window.__hvS.mind,f:window.__hvS.full}));await p.keyboard.press('e');await p.waitForTimeout(400);await p.screenshot({path:OUT+'/hvc_pet.png'});await p.waitForTimeout(1000);
const q1=await S(p,()=>({m:window.__hvS.mind,f:window.__hvS.full,emo:window.__hvS.dog.emo,h:window.__hvS.dog.heart}));ok(q1.m>=q0.m+10&&q1.f<q0.f-1.5,'petting helps the heart (+'+Math.round(q1.m-q0.m)+') and costs a little food');ok(q1.emo==='happy','the dog is happy again, a heart rises');
await p.keyboard.press('e');await p.waitForTimeout(1400);const q2=await S(p,()=>window.__hvS.mind);ok(q2-q1.m<q1.m-q0.m,'petting again helps less (+'+Math.round(q2-q1.m)+')');
// 4. end of the day after the dead: the night line
await tp(p,2290);await p.waitForTimeout(400);await p.keyboard.press('Enter');await p.waitForTimeout(400);const e1=await p.$eval('#hv .endc',e=>e.innerText);await p.screenshot({path:OUT+'/hvc_end_corpse.png'});ok(e1.includes('นอนไม่หลับ'),'the end page says Peter cannot sleep after the dead');const day1=+(e1.match(/จบวันที่ (\d+)/)||[])[1];
await p.click('#hv .endc [data-a=again]');await p.waitForTimeout(1200);await p.evaluate(()=>{const S=window.__hvS;S.p.x=2290;S.cam=null});await p.waitForTimeout(300);await p.keyboard.press('Enter');await p.waitForTimeout(400);const day2=+((await p.$eval('#hv .endc',e=>e.innerText)).match(/จบวันที่ (\d+)/)||[])[1];ok(day2===day1+1,'days are counted: จบวันที่ '+day1+' → '+day2);
// 5. an empty day
await go(p,{run:'empty'});await tp(p,540);await p.waitForTimeout(300);await p.keyboard.press('Enter');await p.waitForTimeout(1900);const em=await S(p,()=>({inv:window.__hvS.inv,cap:document.querySelector('#hv .cap').textContent}));await p.screenshot({path:OUT+'/hvc_empty.png'});
ok(!Object.keys(em.inv).length&&/ไม่มีอะไรเหลือ|ถูกรื้อ|มีคนมาค้นก่อน|ว่างเปล่า/.test(em.cap),'on an empty day the crates hold nothing: "'+em.cap.trim()+'"');
await tp(p,1745);await p.waitForTimeout(300);await p.keyboard.press('q');await p.waitForTimeout(5500);ok(!Object.keys(await S(p,()=>window.__hvS.inv)).length,'the dog comes back from under the cart with nothing');
// 6. the closed street
await go(p,{run:'deadend',emptyChance:0});const de=await S(p,()=>({mask:window.__hvS.scene.mask[0][1],ks:window.__hvS.spots.map(s=>s.k)}));ok(de.mask<=1860&&!de.ks.includes('window')&&!de.ks.includes('home')&&de.ks.includes('barrier'),'a closed street ends at the barrier: '+de.ks.join(','));
await tp(p,1700);await p.keyboard.down('ArrowRight');await p.waitForTimeout(2500);await p.keyboard.up('ArrowRight');await p.waitForTimeout(500);const px=await S(p,()=>window.__hvS.p.x);await p.screenshot({path:OUT+'/hvc_barrier.png'});ok(px<=1851,'Peter cannot pass the barrier (x '+Math.round(px)+')');
ok((await labs(p)).some(t=>t.includes('กลับบ้านทางตรอก')),'at the barrier the notebook offers กลับบ้านทางตรอก');await p.keyboard.press('Enter');await p.waitForTimeout(400);const e2=await p.$eval('#hv .endc',e=>e.innerText);ok(e2.includes('ถนนถูกกั้น')&&e2.includes('ไปไม่ถึงหน้าต่าง'),'the end page tells the street was closed');
ok(await p.evaluate(()=>localStorage.getItem('sit.book'))===book0,'sit.book unchanged');await p.close();
// 7. a phone: the body, the barrier and the pet button all fit
for(const [w,h] of [[360,640],[390,844],[844,390]]){const r=await open(w,h,w<500);await go(r,{run:'deadend',emptyChance:0});await tp(r,1150,30);await r.waitForTimeout(900);
  const ov=await r.evaluate(()=>{const vw=innerWidth,vh=innerHeight,out=[];const els=[...document.querySelectorAll('#hv .top button,#hv .pad .ctl>button,#hv .pad>button,#hv .nb .ac button')].filter(e=>e.offsetParent);els.forEach(e=>{const r=e.getBoundingClientRect();if(r.left<-.5||r.top<-.5||r.right>vw+.5||r.bottom>vh+.5)out.push('off: '+e.textContent.slice(0,12))});const nb=document.querySelector('#hv .nb');if(nb.scrollHeight>nb.clientHeight+2)out.push('notebook cut');return out});
  await r.screenshot({path:OUT+`/hvc_${w}x${h}.png`});ok(!ov.length,`${w}x${h}: fits`+(ov.length?' · '+ov.join(' | '):''));await r.close()}
console.log('errors:',errs.length?errs.join('\n'):'none');console.log(bad?bad+' FAILED':'hv_c: all ok');await b.close();process.exit(bad?1:0)})();
