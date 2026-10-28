// the JRPG screen and Kaffa must fit one screen at every size: no part outside the window, no window cut off, no page scroll
// needs: python3 -m http.server 8765 from the repo root · OUT=dir for screenshots
const {chromium}=require('playwright');const OUT=process.env.OUT||'/tmp';
const SIZES=[[1920,1080],[1366,768],[1280,720],[1024,600],[800,600],[844,390],[667,375],[390,844],[360,640],[414,896]];
(async()=>{const b=await chromium.launch();let bad=0;const ok=(c,m)=>{console.log((c?'ok   ':'FAIL ')+m);if(!c)bad++};const errs=[];
const check=async(p,tag)=>p.evaluate(tag=>{const vw=innerWidth,vh=innerHeight,out=[];document.querySelectorAll('#jr48 button,#jr48 .win').forEach(e=>{const r=e.getBoundingClientRect();if(!r.width||getComputedStyle(e).visibility==='hidden'||e.closest('[style*="display: none"]'))return;if(e.closest('.toast,.banner'))return;if(r.left<-1||r.top<-1||r.right>vw+1||r.bottom>vh+1)out.push(tag+' outside: '+(e.textContent||'').slice(0,24)+' '+[r.left,r.top,r.right,r.bottom].map(Math.round))});
  document.querySelectorAll('#jr48 .kw,#jr48 .dlg .box,#jr48 .goal').forEach(e=>{if(e.offsetParent&&e.scrollHeight>e.clientHeight+3)out.push(tag+' cut off: '+e.className+' '+e.scrollHeight+'>'+e.clientHeight)});
  if(document.scrollingElement.scrollHeight>vh+1&&getComputedStyle(document.body).overflow!=='hidden')out.push(tag+' page scrolls');return out},tag);
for(const [w,h] of SIZES){const p=await b.newPage({viewport:{width:w,height:h}});p.on('pageerror',e=>errs.push(e.message));
  await p.addInitScript(()=>{localStorage.setItem('sit.seen','true');localStorage.setItem('sit.lang',JSON.stringify('th'))});
  await p.goto('http://localhost:8765/index.html?lang=th');await p.waitForTimeout(700);await p.evaluate(()=>{document.getElementById('pl45go').click()});await p.waitForTimeout(200);await p.click('#jr48door');await p.waitForTimeout(600);
  let o=await check(p,'intro');for(let i=0;i<12;i++){await p.keyboard.press('Enter');await p.waitForTimeout(30)}await p.waitForTimeout(200);o=o.concat(await check(p,'walk'));
  await p.keyboard.down('ArrowRight');await p.waitForTimeout(1500);await p.keyboard.up('ArrowRight');await p.keyboard.press('Enter');await p.waitForTimeout(1200);o=o.concat(await check(p,'talk'));for(let i=0;i<8;i++){await p.keyboard.press('Enter');await p.waitForTimeout(30)}
  await p.click('#jr48 .top button');await p.waitForTimeout(200);o=o.concat(await check(p,'team'));await p.keyboard.press('Escape');
  await p.evaluate(()=>{document.getElementById('jr48').remove();window.__v46.sv46Start(true)});await p.waitForTimeout(500);o=o.concat(await check(p,'kaffa'));
  for(let k=0;k<4;k++){const op=await p.$('#jr48 .kac .op:not([disabled])');if(op)await op.click();await p.waitForTimeout(40);const c=await p.$('#jr48 .kac .hand');if(c)await c.click();await p.waitForTimeout(40)}o=o.concat(await check(p,'kaffa-night'));
  await p.screenshot({path:`${OUT}/fit_${w}x${h}.png`});ok(!o.length,`${w}x${h} fits`+(o.length?'\n   '+o.slice(0,6).join('\n   '):''));await p.close()}
console.log('errors:',errs.length?errs.join('\n'):'none');console.log(bad?bad+' FAILED':'plg_fit: all ok');await b.close();process.exit(bad?1:0)})();
