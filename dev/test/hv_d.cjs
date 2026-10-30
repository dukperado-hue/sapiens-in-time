// The Last Harvest v0.54: the house cut open, the day loop (morning plan → street or home → night → sleep), the dog's name, saving and continuing,
// the end of a run, the animals, the candles at night, and that it all fits a phone
// needs: python3 -m http.server 8765 from the repo root · OUT=dir for screenshots
const {chromium}=require('playwright');const OUT=process.env.OUT||'/tmp';
(async()=>{const b=await chromium.launch();let bad=0;const ok=(c,m)=>{console.log((c?'ok   ':'FAIL ')+m);if(!c)bad++};const errs=[];
const ctxNew=async()=>{const c=await b.newContext({viewport:{width:1280,height:720}});await c.addInitScript(()=>{localStorage.setItem('sit.seen','true');window.__hvSeed=4242});return c};
const C=await ctxNew();const p=await C.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
const home=async()=>{await p.goto('http://localhost:8765/index.html?lang=th');await p.waitForTimeout(700);await p.evaluate(()=>document.getElementById('pl45go').click());await p.waitForTimeout(200);await p.click('#hv50door');await p.waitForTimeout(200)};
const btn=async t=>{const bs=await p.$$('#hv .card button');for(const x of bs){if((await x.textContent()).includes(t)&&!(await x.isDisabled())){await x.click();await p.waitForTimeout(450);return true}}return false};
const cardT=()=>p.$eval('#hv .card',e=>e.innerText).catch(()=>'');const R=()=>p.evaluate(()=>window.__hvR());
await home();const book0=await p.evaluate(()=>localStorage.getItem('sit.book'));await p.click('#hv [data-a=go]');await p.waitForTimeout(1200);
// 1. the dog gets a name on day one
ok((await cardT()).includes('หมาตัวนี้ชื่ออะไร'),'day one asks for the dog\'s name');await p.fill('#hv .card input','ถ่าน');await p.click('#hv .card [data-a=ok]');await p.waitForTimeout(700);
const t1=await cardT();ok(t1.includes('เรื่องของบ้านนี้ในรอบนี้'),'each run tells the house\'s own secret');await p.screenshot({path:OUT+'/hvd_trait.png'});await btn('ต่อไป');
// 2. the morning plan: meals, tasks, Peter
const pl=await cardT();ok(pl.includes('มื้อเช้า')&&pl.includes('งานวันนี้')&&pl.includes('ถ่าน'),'the morning plan has meals (the dog too, by name) and the day\'s work');await p.screenshot({path:OUT+'/hvd_plan.png'});
const r0=await R();await btn('ทำกับดักหนู');await btn('อยู่บ้านช่วยแม่');await btn('เริ่มวัน');await p.waitForTimeout(600);{const j=await cardT();ok(j.includes('สมุดของปีเตอร์'),'Peter\'s notebook opens before the day ("'+j.split('\n').slice(1,2).join('')+'")');await p.screenshot({path:OUT+'/hvd_journal.png'});await btn('ต่อไป');await p.waitForTimeout(300)}
const ev=await cardT();ok(ev.includes('เย็นวันที่ 1')&&ev.includes('กับดักหนู'),'evening: what each did ("'+ev.split('\n').slice(2,4).join(' / ')+'")');await btn('ต่อไป');
// 3. the night: an event of history with a choice
await p.waitForTimeout(400);const nt=await cardT();await p.screenshot({path:OUT+'/hvd_night.png'});ok(nt.includes('คืนวันที่ 1')&&nt.includes('(เกิดขึ้นจริง)'),'the first night is a real-history beat with its label');
const L=await p.evaluate(()=>({tod:window.__hvL.tod,lights:window.__hvL.lights.length}));ok(L.tod===3&&L.lights>=2,'at night candles are lit in the house ('+L.lights+' lights)');
const chs=await p.$$('#hv .card button');await chs[chs.length-1].click();await p.waitForTimeout(500);await btn('ต่อไป');await p.waitForTimeout(500);
const m2=await cardT();const r1=await R();ok(r1.di===1&&m2.includes('เช้าวันที่ 4'),'sleep moves the calendar on (1 → 4 June)');ok(r1.home.trap===1,'the trap Thomas made stays in the house');
// 4. saving and continuing
await home();const goT=await p.$eval('#hv [data-a=go]',e=>e.textContent);ok(goT.includes('เล่นต่อ')&&goT.includes('4'),'the door offers to continue: "'+goT+'"');await p.click('#hv [data-a=go]');await p.waitForTimeout(1200);if((await cardT()).includes('เช้าวันที่ 4')&&!(await cardT()).includes('มื้อเช้า'))await btn('ต่อไป');
ok((await cardT()).includes('มื้อเช้า'),'continuing opens the morning of day 4');
// 5. Peter goes out, the street carries the date and the dog's name, and he comes home
await btn('ออกไปหาของกับ');await btn('เริ่มวัน');await p.waitForTimeout(600);ok((await cardT()).includes('สมุดของปีเตอร์'),'the notebook comes before the street too');await btn('ออกจากบ้าน');await p.waitForTimeout(1500);const st=await p.evaluate(()=>({cap:document.querySelector('#hv .cap').innerText,dog:document.querySelector('#hv .nb .dg').innerText,pig:window.__hvS.amb.pigeons.length}));
ok(st.cap.includes('4 มิถุนายน 1349')&&st.dog.includes('ถ่าน'),'the street knows the date and the dog\'s name');ok(st.pig>0,'pigeons peck on the street');
await p.evaluate(()=>{const S=window.__hvS;const b=S.amb.pigeons[0];S.p.x=b.x-30;S.cam=null;S.amb.walker={x:S.p.x+200,d:-1,col:'#2e2a30'}});await p.waitForTimeout(700);await p.screenshot({path:OUT+'/hvd_street_birds.png'});ok(await p.evaluate(()=>window.__hvS.amb.pigeons.some(b=>b.fly)),'pigeons fly off when Peter comes near');
await p.evaluate(()=>{const S=window.__hvS;S.p.x=S.scene.mask[0][1]-5;S.cam=null});await p.waitForTimeout(400);await p.keyboard.press('Enter');await p.waitForTimeout(1500);ok((await cardT()).includes('ปีเตอร์'),'coming home: the evening says what Peter brought');await p.screenshot({path:OUT+'/hvd_evening.png'});
// 6. the end of a run: the family's book, and the dog is there
await home();await p.evaluate(()=>{const d=JSON.parse(localStorage.getItem('sit.harvest'));d.run.di=24;d.run.phase='sleep';localStorage.setItem('sit.harvest',JSON.stringify(d))});await home();await p.click('#hv [data-a=go]');await p.waitForTimeout(1600);for(let i=0;i<4&&!(await cardT()).includes('หนังสือของครอบครัว');i++){await btn('ต่อไป')}
const et=await cardT();await p.screenshot({path:OUT+'/hvd_end.png'});ok(et.includes('หนังสือของครอบครัว')&&et.includes('ถ่าน')&&et.includes('อยู่ตรงนั้นเสมอ'),'the run ends with the family\'s book, and the dog is always there');
ok(await p.evaluate(()=>localStorage.getItem('sit.book'))===book0,'sit.book unchanged');
// 7. phone: the plan card and the notebook fit
for(const [w,h] of [[360,640],[390,844]]){const c2=await b.newContext({viewport:{width:w,height:h},isMobile:true,hasTouch:true,deviceScaleFactor:2});await c2.addInitScript(()=>{localStorage.setItem('sit.seen','true');window.__hvSeed=7});const q=await c2.newPage();q.on('pageerror',e=>errs.push(e.message));
  await q.goto('http://localhost:8765/index.html?lang=th');await q.waitForTimeout(700);await q.evaluate(()=>{document.getElementById('pl45go').click()});await q.waitForTimeout(200);await q.evaluate(()=>window.__v50&&hvLifeStart?0:0).catch(()=>0);await q.click('#hv50door');await q.waitForTimeout(200);await q.click('#hv [data-a=go]');await q.waitForTimeout(1000);
  await q.fill('#hv .card input','ถ่าน');await q.click('#hv .card [data-a=ok]');await q.waitForTimeout(600);await q.click('#hv .card .hvch button');await q.waitForTimeout(600);
  const ov=await q.evaluate(()=>{const vw=innerWidth,vh=innerHeight,o=[];const c=document.querySelector('#hv .card').getBoundingClientRect();if(c.left<0||c.right>vw+1||c.bottom>vh+1)o.push('card off');document.querySelectorAll('#hv .pad button').forEach(b=>{const r=b.getBoundingClientRect();if(r.bottom>vh+1||r.right>vw+1)o.push('button off')});const nb=document.querySelector('#hv .nb');if(nb.scrollHeight>nb.clientHeight+2)o.push('notebook cut');return o});
  await q.screenshot({path:OUT+`/hvd_${w}x${h}.png`});ok(!ov.length,`${w}x${h}: the plan card and notebook fit`+(ov.length?' · '+ov.join(' | '):''));await c2.close()}
console.log('errors:',errs.length?errs.join('\n'):'none');console.log(bad?bad+' FAILED':'hv_d: all ok');await b.close();process.exit(bad?1:0)})();
