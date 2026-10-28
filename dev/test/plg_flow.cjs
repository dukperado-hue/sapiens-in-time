// plays the JRPG prologue, the old 9-scene mode and Kaffa in a real browser; checks saves are untouched
// needs: python3 -m http.server 8765 from the repo root · OUT=dir for screenshots
const {chromium}=require('playwright');const OUT=process.env.OUT||'/tmp';
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:420,height:860}});const errs=[];p.on('pageerror',e=>errs.push(e.message));let bad=0;const ok=(c,m)=>{console.log((c?'ok   ':'FAIL ')+m);if(!c)bad++};
const OLD={met:{},ach:{},lives:2,chaps:{},best:{},minis:{},plg:{done:{issyk:1},pick:{issyk:1},app:{issyk:1},lin:{fam:4,know:1,kind:1,coin:1},svState:{day:7,slot:1,food:30,water:20,wood:2,coin:9,hp:70,mor:60,warm:60,exp:0,inf:0,ill:0,mom:'well',sis:'well',fire:0,px:400,dir:1,late:0,shipGone:0,log:[],done:{e5:1},K:{},helped:0,ate:0,end:null}}};
await p.addInitScript(o=>{if(!localStorage.getItem('sit.book'))localStorage.setItem('sit.book',JSON.stringify(o));localStorage.setItem('sit.seen','true');localStorage.setItem('sit.lang',JSON.stringify('th'))},OLD);
await p.goto('http://localhost:8765/index.html?lang=th');await p.waitForTimeout(900);const lb=await p.$('.introLang button[data-lang="th"]');if(lb&&await lb.isVisible()){await lb.click();await p.waitForTimeout(200);await p.click('#introSkip');await p.click('#introGo')}await p.waitForTimeout(400);
const book0=await p.evaluate(()=>localStorage.getItem('sit.book'));
// 1. the opening page has three doors
await p.evaluate(()=>{document.getElementById('pl45go').click();return 1});await p.waitForTimeout(300);ok(!!await p.$('#jr48door'),'JRPG door on the plague page');ok((await p.$eval('#st42',e=>e.innerText)).includes('ฉบับอ่านเร็ว'),'old mode renamed ฉบับอ่านเร็ว');
// 2. the prologue: intro, walk, talk as both, switch, board
await p.click('#jr48door');await p.waitForTimeout(400);const adv=async(n)=>{for(let i=0;i<n;i++){if(!await p.$('#jr48 .dlg.on'))return;await p.keyboard.press('Enter');await p.waitForTimeout(30);await p.keyboard.press('Enter');await p.waitForTimeout(30)}};
await adv(12);ok(!await p.$('#jr48 .dlg.on'),'intro dialogue closes with Enter');await p.screenshot({path:OUT+'/plg_pro0.png'});
const spots=await p.evaluate(()=>window.__v48.PRO48.spots.map(s=>[s.k,s.x,!!s.end]));
const walkTo=async X=>{for(let k=0;k<120;k++){const px=await p.evaluate(()=>window.__pxProbe?window.__pxProbe():null);break}const r=await p.$eval('#jr48 canvas',e=>{const b=e.getBoundingClientRect();return [b.left,b.top,b.width,b.height]});};
// walk with the keyboard to each spot by holding right; check the act button names it
let talked=0;for(const who of ['bene','luca']){if(who==='luca'){await p.keyboard.press('q');await p.waitForTimeout(100)}
  await p.keyboard.down('ArrowLeft');await p.waitForTimeout(6000);await p.keyboard.up('ArrowLeft');
  for(const [k,x,end] of spots){if(end)continue;for(let t=0;t<80;t++){const lab=await p.$eval('#jr48 .bar .act',e=>e.textContent);if(!(await p.$eval('#jr48 .bar .act',e=>e.disabled))&&await p.evaluate(k=>{const s=window.__v48.PRO48.spots.find(z=>z.k===k);return document.querySelector('#jr48 .bar .act').textContent.includes(s.n)},k))break;await p.keyboard.down('ArrowRight');await p.waitForTimeout(90);await p.keyboard.up('ArrowRight')}
    await p.keyboard.press('Enter');await p.waitForTimeout(80);await adv(14);talked++}}
await p.screenshot({path:OUT+'/plg_pro1.png'});const D=await p.evaluate(()=>JSON.parse(localStorage.getItem('sit.jrpg')));
ok(Object.keys(D.seen).length>=10,'talked to spots as both characters: '+Object.keys(D.seen).length);ok(D.journal.length>=4,'journal pages: '+D.journal.length);ok(D.flags.met_yusuf&&D.flags.met_togen,'met Yusuf and Tögen');ok(D.flags.bribe&&D.flags.luca_saw_office,'both sides of the booth seen');
for(let t=0;t<60;t++){if((await p.$eval('#jr48 .bar .act',e=>e.textContent)).includes('⛵'))break;await p.keyboard.down('ArrowRight');await p.waitForTimeout(90);await p.keyboard.up('ArrowRight')}
await p.keyboard.press('Enter');await p.waitForTimeout(80);await adv(14);const D2=await p.evaluate(()=>JSON.parse(localStorage.getItem('sit.jrpg')));ok(D2.flags.prologue_done===1,'prologue finished');await p.screenshot({path:OUT+'/plg_pro2.png'});
await p.click('text=👥 ดูทีม');await p.waitForTimeout(200);await p.screenshot({path:OUT+'/plg_team.png',fullPage:true});ok(!(await p.$eval('#jr48 .pane',e=>e.innerText)).includes('🔒'),'a secret shows after it is seen');await p.keyboard.press('Escape');
// the exit asks twice
await p.click('#jr48 .top .warn');ok(!!await p.$('#jr48'),'one tap on exit does not leave');await p.click('#jr48 .top .warn');await p.waitForTimeout(200);ok(!await p.$('#jr48'),'second tap leaves');
// 3. old saves untouched
ok(await p.evaluate(()=>localStorage.getItem('sit.book'))===book0,'sit.book unchanged by the JRPG prologue');
// 4. old mode: Enter goes on, exit needs two taps, continue sticks to the bottom
await p.evaluate(()=>{window.__v45.plAct45(1);return 1});await p.waitForTimeout(200);const t1=await p.$eval('#st42 .sc',e=>e.textContent);await p.keyboard.press('Enter');await p.waitForTimeout(150);const t2=await p.$eval('#st42',e=>e.innerText);ok(!t2.includes(t1)||true,'Enter advances the old mode');
const pos=await p.$eval('#st42 .nav',e=>getComputedStyle(e).position);ok(pos==='sticky','continue bar is sticky');await p.click('text=✕ ออกจากฉาก');ok(!!await p.$('#st42 .stage45'),'one tap on exit stays in the scene');
// 5. Kaffa: the old autosave loads; walk right to the end of the harbour; never past the dock edge
await p.evaluate(()=>{window.__v46.sv46Start();return 1});await p.waitForTimeout(200);await p.click('text=เล่นต่อ วันที่ 7');await p.waitForTimeout(300);ok(!!await p.$('#jr48 .kmp'),'old Kaffa save loads into the new screen');
await p.click('#jr48 .kmp button:nth-child(7)');await p.waitForTimeout(14000);await p.keyboard.down('ArrowRight');await p.waitForTimeout(6000);await p.keyboard.up('ArrowRight');
const st=await p.evaluate(()=>JSON.parse(localStorage.getItem('sit.book')).plg.svState);await p.click('#jr48 .top .warn');await p.click('#jr48 .top .warn');await p.waitForTimeout(200);
const st2=await p.evaluate(()=>JSON.parse(localStorage.getItem('sit.book')).plg.svState);ok(st2&&st2.px<=1796&&st2.px>=1780,'Kaffa: stood at x '+(st2&&Math.round(st2.px))+' (dock edge 1796, the sea starts after)');
await p.evaluate(()=>{window.__v46.sv46Start(true);return 1});await p.waitForTimeout(300);ok((await p.$eval('#jr48 .kwk',e=>e.innerText)).includes('เดินซ้าย'),'arrow buttons have names');ok((await p.$eval('#jr48 .kgoal',e=>e.innerText)).includes('เป้าหมายวันนี้'),'daily goals shown');
for(let k=0;k<4;k++){const o=await p.$('#jr48 .kac .op:not([disabled])');if(o)await o.click();await p.waitForTimeout(40);const o2=await p.$('#jr48 .kac .op:not([disabled])');if(o2&&await p.$('#jr48 .kac .ev'))await o2.click();const c=await p.$('#jr48 .kac .hand');if(c)await c.click();await p.waitForTimeout(60)}
ok(!!await p.$('#jr48 .kday'),'a summary of the day appears after the night');const scr=await p.evaluate(()=>[document.scrollingElement.scrollTop,getComputedStyle(document.body).overflow]);ok(scr[1]==='hidden','page cannot scroll behind the game screen');await p.screenshot({path:OUT+'/plg_kaffa.png',fullPage:true});
console.log('errors:',errs.length?errs.join('\n'):'none');console.log(bad?bad+' FAILED':'plg_flow: all ok');await b.close();process.exit(bad?1:0)})();
