// The Last Harvest v0.55: hunger fixes, Peter as a carrier, the brew the night after a fever, the street decaying with the days,
// three looks for the dead, the dead cat, cats chasing rats, Peter's notebook
// needs: python3 -m http.server 8765 from the repo root · OUT=dir for screenshots
const fs=require('fs');const {chromium}=require('playwright');const OUT=process.env.OUT||'/tmp';
let bad=0;const ok=(c,m)=>{console.log((c?'ok   ':'FAIL ')+m);if(!c)bad++};
/* ---------- part 1: the rules, run in node ---------- */
{const D=__dirname+'/../harvest/';const code=['hv_engine.js','hv_people.js','hv_play.js','hv_life.js','hv_lifeui.js'].map(f=>fs.readFileSync(D+f,'utf8')).join('\n');
  const store={get:(k,d)=>d,set(){}};const esc=s=>s;const HV0={};
  const API=(new Function('store','esc',code+';return {hvNewRun,hvUpkeep,hvSleep,hvAlive,hvTown,HVCAL,hvRunPick,hvDeadendP,hvPlayInit,HVSPOT,HVCORPSE,HVHUNGER,hvJournal,HVMEDNOTE}'))(store,esc);
  const {hvNewRun,hvUpkeep,hvSleep,HVCAL,hvRunPick,hvDeadendP,hvPlayInit,HVCORPSE,HVHUNGER,hvJournal,HVMEDNOTE}=API;
  const dayIdx=n=>HVCAL.indexOf(n);
  // hunger: a meal now pulls a person back up
  {const R=hvNewRun(1);R.fam.thomas.full=40;R.fam.thomas.ate=true;R.fam.anna.full=40;R.fam.anna.ate=false;hvUpkeep(R);
   ok(R.fam.thomas.full===65&&R.fam.anna.full===25,'a night costs '+HVHUNGER.night+', a meal gives '+HVHUNGER.meal+' (fed 40→'+R.fam.thomas.full+', hungry 40→'+R.fam.anna.full+')')}
  // the carrier: what Peter brings home can make his father or mother sick, never from nothing
  {let inf=0,inf0=0;for(let s=0;s<300;s++){const R=hvNewRun(500+s);R.di=dayIdx(24);R.arrive=15;R.home.trap=1;R.carry=60;hvSleep(R,1);inf+=(R.fam.thomas.inf>0)+(R.fam.anna.inf>0);ok.q=1;
     const Q=hvNewRun(500+s);Q.di=dayIdx(24);Q.arrive=15;Q.home.trap=1;Q.carry=0;Q.fam.thomas.exp=0;Q.fam.anna.exp=0;hvSleep(Q,1);inf0+=(Q.fam.thomas.inf>0)+(Q.fam.anna.inf>0)}
   ok(inf>60&&inf0===0,'carry 60 on day 24 infects a parent '+(inf/600*100).toFixed(0)+'% of the time; carry 0 → '+inf0);
   const R=hvNewRun(9);R.carry=50;hvSleep(R,1);ok(R.carry===0,'the carried risk is spent after one night')}
  // the brew: a fever needs herbs the next night, or that person dies
  {const mk=h=>{const R=hvNewRun(3);R.di=dayIdx(20);R.arrive=15;const T=R.fam.thomas;T.inf=2;T.infT=0;T.medDue=1;R.store.herb=h;R.fam.peter.mind=70;return R};
   const A=mk(0);const oa=hvSleep(A,1);ok(A.fam.thomas.dead&&oa.some(l=>l.includes('ไม่มีสมุนไพร')),'no herbs on the night after the fever: Thomas dies ("'+oa.find(l=>l.includes('ไม่มีสมุนไพร'))+'")');
   ok(A.fam.peter.mind===0&&A.griefT===3&&A.lastLost==='thomas','Peter\'s heart falls to the bottom and grief holds for three nights');
   const B=mk(2);const ob=hvSleep(B,1);ok(!B.fam.thomas.dead&&B.store.herb===1&&B.fam.thomas.med===1&&ob.some(l=>l.includes('ต้มยาสมุนไพร')),'with herbs: one is brewed and he lives the night ("'+ob.find(l=>l.includes('ต้มยา'))+'")');
   const C=mk(0);C.flags.healer=1;hvSleep(C,1);ok(!C.fam.thomas.dead&&C.flags.healerMed===1,'Margarethe, if the family stood by her, brings a brew once');
   const E=hvNewRun(4);E.di=dayIdx(20);E.arrive=15;E.fam.anna.inf=1;E.fam.anna.infT=9;const oe=hvSleep(E,1);ok(E.fam.anna.inf===2&&E.fam.anna.medDue===1&&oe.some(l=>l.includes('ต้องมียาต้ม')),'a fever that shows sets the brew for the next night');
   ok(HVMEDNOTE.includes('(เกิดขึ้นจริง)')&&HVMEDNOTE.includes('✦'),'the note says there was no cure in 1349 and marks the game\'s rule ✦');
   let g=hvNewRun(5);g.fam.peter.mind=0;g.griefT=2;g.fam.peter.mind=60;hvUpkeep(g);ok(g.fam.peter.mind<=20&&g.griefT===1,'while grieving, Peter\'s heart cannot climb past 20')}
  // the street decays: more dead ends and more of the dead as the days go by
  {const rate=d=>{let n=0;for(let s=0;s<600;s++)n+=hvRunPick({seed:(s*2654435761)>>>0,day:d}).deadend;return n/600};const a=rate(2),z=rate(36);
   ok(hvDeadendP(2)<hvDeadendP(36)&&a<.15&&z>.5,'the blocked street: day 2 '+(a*100).toFixed(0)+'%, day 36 '+(z*100).toFixed(0)+'%');
   const piles=d=>{let n=0,cats=0,clash=0;for(let s=0;s<300;s++){const S={scene:{mask:[[70,2400]]},plague:.3};hvPlayInit(S,{seed:s,day:d});n+=S.deco.filter(x=>x.k==='pile').length;cats+=S.deco.filter(x=>x.k==='deadcat').length;
       S.deco.forEach(x=>{if(x.k==='pile'&&S.spots.some(sp=>Math.abs(sp.x-x.x)<110))clash++})}return {n:n/300,cats:cats/300,clash}};
   const p2=piles(2),p36=piles(36);ok(p36.n>p2.n*3&&p36.n>1,'piles of the dead per walk: day 2 '+p2.n.toFixed(2)+', day 36 '+p36.n.toFixed(2));
   ok(p36.cats>p2.cats,'the dead cat by the rat: day 2 '+p2.cats.toFixed(2)+', day 36 '+p36.cats.toFixed(2));ok(p2.clash+p36.clash===0,'piles never sit on a place Peter searches');
   const looks=new Set();for(let s=0;s<60;s++){const S={scene:{mask:[[70,2400]]},plague:.3};hvPlayInit(S,{seed:s,run:'normal'});const c=S.spots.find(x=>x.kind==='corpse');if(c)looks.add(c.look)}
   ok(looks.size===3,'the body on the street comes in '+looks.size+' looks ('+[...looks].join(', ')+')')}
  // the notebook: in Peter's voice, and it shows the quiet first signs
  {const R=hvNewRun(7);R.dog.name='ถ่าน';R.di=dayIdx(20);R.arrive=15;R.fam.anna.inf=1;const j=hvJournal(R,{out:true});ok(j.length>=1&&j.length<=2&&j[0].includes('แม่'),'the notebook hints that Anna is getting sick ("'+j[0]+'")');
   R.fam.anna.inf=0;R.store.food=1;const j2=hvJournal(R,{out:true});ok(j2.some(l=>l.includes('ขนมปังใกล้หมด')&&l.includes('ถ่าน')),'and that food is short ("'+j2[0]+'")')}}
/* ---------- part 2: in the page ---------- */
(async()=>{const b=await chromium.launch();const errs=[];
const mk=async(opt,seed)=>{const c=await b.newContext({viewport:{width:1280,height:720}});await c.addInitScript(([o,sd])=>{localStorage.setItem('sit.seen','true');if(o)window.__hvOpt=o;window.__hvSeed=sd},[opt,seed]);const p=await c.newPage();p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
  await p.goto('http://localhost:8765/index.html?lang=th');await p.waitForTimeout(700);await p.evaluate(()=>document.getElementById('pl45go').click());await p.waitForTimeout(200);await p.click('#hv50door');await p.waitForTimeout(200);return p};
// a late day on the street
{const p=await mk({run:'normal',day:34,seed:11,emptyChance:0},1);await p.click('#hv [data-a=go]');await p.waitForTimeout(1500);
  const d=await p.evaluate(()=>{const S=window.__hvS;return {deco:S.deco,look:(S.spots.find(s=>s.kind==='corpse')||{}).look}});ok(d.deco.length>=1,'day 34 street has '+d.deco.map(x=>x.k).join(', '));
  const pile=d.deco.find(x=>x.k==='pile')||d.deco[0];await p.evaluate(x=>{const S=window.__hvS;S.p.x=x-120;S.dog.x=x-180},pile.x);await p.waitForTimeout(1600);await p.screenshot({path:OUT+'/hve_pile.png'});
  const cat=d.deco.find(x=>x.k==='deadcat');if(cat){await p.evaluate(x=>{const S=window.__hvS;S.p.x=x-110;S.dog.x=x-170},cat.x);await p.waitForTimeout(1600);await p.screenshot({path:OUT+'/hve_deadcat.png'})}
  const emo=await p.evaluate(x=>{const S=window.__hvS;S.dog.x=x;return new Promise(r=>setTimeout(()=>r(S.dog.emo),400))},pile.x);ok(emo==='scared','the dog is afraid near the dead ('+emo+')');
  // the corpse: searching it sends a heavy load home
  const r0=await p.evaluate(()=>window.__hvS.infectionRisk);await p.evaluate(()=>{const S=window.__hvS,c=S.spots.find(s=>s.kind==='corpse');S.p.x=c.x;window.__v50.hvAct(S,{say(){},mood(){},running:()=>false,home(){}})});await p.waitForTimeout(2800);
  await p.screenshot({path:OUT+'/hve_corpse.png'});const r1=await p.evaluate(()=>window.__hvS.infectionRisk);ok(r1-r0>=30,'searching the body adds '+(r1-r0).toFixed(0)+' to the hidden infectionRisk ('+d.look+')');
  await p.context().close()}
// cats and rats
{const p=await mk({run:'normal',seed:5,emptyChance:0},1);await p.click('#hv [data-a=go]');await p.waitForTimeout(1500);
  await p.evaluate(()=>{const S=window.__hvS;S.amb.walker={x:S.p.x+220,d:-1,col:'#2e2a30',sit:0};S.rats.length=0;S.rats.push({x:S.p.x+330,y:330,d:-1,v:60})});await p.waitForTimeout(350);
  const h=await p.evaluate(()=>{const S=window.__hvS,w=S.amb.walker;return {hunt:w&&w.hunt,rat:S.rats[0]&&S.rats[0].cat,v:S.rats[0]&&S.rats[0].v,calm:S.ratCalm}});ok(h.hunt===1&&h.rat===1&&h.v>=380&&h.calm>0,'a cat that sees a rat gives chase, the rat bolts, no new rats for a while');
  await p.screenshot({path:OUT+'/hve_catrat.png'});await p.waitForTimeout(2500);ok(await p.evaluate(()=>window.__hvS.rats.length===0),'the rat runs off the screen');
  const rx=await p.evaluate(()=>{const S=window.__hvS,rs=S.spots.find(s=>s.k==='rats');S.p.x=rs.x-300;S.dog.x=rs.x-350;return rs.x});await p.waitForTimeout(1500);
  await p.evaluate(x=>{const S=window.__hvS;S.amb.walker={x:x+170,d:-1,col:'#d0884a',sit:0}},rx);await p.waitForTimeout(1500);
  ok(await p.evaluate(()=>{const rs=window.__hvS.spots.find(s=>s.k==='rats');return rs.cleared&&rs.byCat}),'a cat clears the swarm of rats in the road');await p.context().close()}
// walking through the rats without the dog
{const p=await mk({run:'normal',seed:6,emptyChance:0},1);await p.click('#hv [data-a=go]');await p.waitForTimeout(1200);
  const r=await p.evaluate(()=>{const S=window.__hvS,rs=S.spots.find(s=>s.k==='rats');S.amb.walker=null;const a=S.infectionRisk;S.p.x=rs.x;return new Promise(res=>setTimeout(()=>res(S.infectionRisk-a),300))});ok(r>=20,'walking through the rats unchased adds '+r.toFixed(0)+' to infectionRisk');await p.context().close()}
// the house: what Peter carried home, the night with no herbs, the notebook in grief, the bread that is not there
{const p=await mk(null,4242);await p.click('#hv [data-a=go]');await p.waitForTimeout(1200);await p.fill('#hv .card input','ถ่าน');await p.click('#hv .card [data-a=ok]');await p.waitForTimeout(700);
  const btn=async t=>{const bs=await p.$$('#hv .card button');for(const x of bs){if((await x.textContent()).includes(t)&&!(await x.isDisabled())){await x.click();await p.waitForTimeout(450);return true}}return false};const cardT=()=>p.$eval('#hv .card',e=>e.innerText).catch(()=>'');
  await btn('ต่อไป');await p.waitForTimeout(300);
  // ghost eating: the plan said eat, but by the time the day starts there is no bread
  await p.evaluate(()=>{window.__hvR().store.food=0});await btn('อยู่บ้านช่วยแม่');await btn('เริ่มวัน');await p.waitForTimeout(400);
  const ate=await p.evaluate(()=>{const R=window.__hvR();return Object.values(R.fam).filter(f=>f.ate).length});ok(ate===0,'with no bread in the store nobody "eats" (ate='+ate+')');
  await btn('ต่อไป');
  // the street hand-off carries the hidden risk home
  const sv=await p.evaluate(()=>{const d=JSON.parse(localStorage.getItem('sit.harvest'));const R=d.run;R.phase='morning';R.di=8;R.arrive=15;R.store.food=6;R.store.herb=0;R.dog.name='ถ่าน';Object.assign(R.fam.thomas,{inf:2,infT:0,medDue:1,place:'bed'});localStorage.setItem('sit.harvest',JSON.stringify(d));return 1});
  await p.reload();await p.waitForTimeout(700);await p.evaluate(()=>document.getElementById('pl45go').click());await p.waitForTimeout(200);await p.click('#hv50door');await p.waitForTimeout(200);await p.click('#hv [data-a=go]');await p.waitForTimeout(1200);
  let pl=await cardT();while(!pl.includes('มื้อเช้า')&&pl){await btn('ต่อไป');pl=await cardT()}
  ok(pl.includes('ไม่มีสมุนไพรเหลือ'),'the morning plan warns there are no herbs for the brew');await p.screenshot({path:OUT+'/hve_plan_noherb.png'});
  await btn('ออกไปหาของกับ');await btn('เริ่มวัน');await p.waitForTimeout(500);await btn('ออกจากบ้าน');await p.waitForTimeout(1500);
  await p.evaluate(()=>{const S=window.__hvS;S.infectionRisk=42;S.inv={};S.p.x=(S.spots.find(s=>s.k==='home')||S.spots.find(s=>s.k==='barrier')).x});await p.keyboard.press('Enter');await p.waitForTimeout(1500);
  const car=await p.evaluate(()=>window.__hvR().carry);ok(Math.abs(car-42)<1,'what Peter picked up on the street comes home as R.carry ('+car+')');
  let t=await cardT();for(let i=0;i<6&&!t.includes('เช้าวันที่');i++){const bs=await p.$$('#hv .card button');if(!bs.length)break;await bs[bs.length-1].click();await p.waitForTimeout(500);t=await cardT()}
  const R=await p.evaluate(()=>window.__hvR());ok(R.fam.thomas.dead&&t.includes('ไม่มีสมุนไพรเหลือให้ต้มยา'),'no herbs that night: the morning says Thomas is gone');ok(R.fam.peter.mind<=20,'Peter\'s heart is at the bottom ('+R.fam.peter.mind+')');
  await btn('ต่อไป');let j=await cardT();for(let i=0;i<4&&!j.includes('มื้อเช้า');i++){await btn('ต่อไป');j=await cardT()}
  const fam=await p.$eval('#hv .fam',e=>e.innerText);ok(fam.includes('จากไปแล้ว'),'the notebook row says he is gone');await btn('อยู่บ้านช่วยแม่');await btn('เริ่มวัน');await p.waitForTimeout(500);
  j=await cardT();ok(j.includes('สมุดของปีเตอร์')&&j.includes('ค้อนของพ่อ'),'Peter\'s notebook in grief ("'+(j.split('\n').find(l=>l.includes('ค้อน'))||'')+'")');await p.screenshot({path:OUT+'/hve_grief.png'});
  const sad=await p.evaluate(()=>window.__hvL.sad);ok(sad>.6,'the house darkens with his grief (sad '+sad.toFixed(2)+')');await p.context().close()}
ok(errs.length===0,'no page errors'+(errs.length?': '+errs.slice(0,3).join(' | '):''));
await b.close();console.log(bad?'hv_e: '+bad+' FAILED':'hv_e: all ok');process.exit(bad?1:0)})();
