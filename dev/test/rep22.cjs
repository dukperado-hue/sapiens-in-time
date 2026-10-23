// Repetition audit: how often a life sees the same log line twice, and how often the same theme repeats in a row.
const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{const CHS=(process.env.CHS||'1,2,3,5,4,6,8,10,12,14,16,18,20').split(',').map(Number);const N=+(process.env.N||150);
let tot=[0,0,0,0];
for(const ch of CHS){const o=await window.__sitSim(N,{ch,logs:1,leg:true});const L=o.filter(x=>x.age>=30);
  let ent=0,dup=0,lives=0,worst=0,ex={},runs=0,pairs=0;
  for(const x of L){const lines=(x.lgRaw||[]).filter(e=>e&&e.en&&!/^\\d/.test(e.en));const seen=new Map();let d=0;
    for(const e of lines){const k=e.en;if(seen.has(k)){d++;ex[k]=(ex[k]||0)+1}seen.set(k,1)}
    ent+=lines.length;dup+=d;lives++;worst=Math.max(worst,d);
    const th=x.thm||[];for(let i=1;i<th.length;i++){if(th[i]&&th[i]===th[i-1])runs++;if(th[i])pairs++}}
  const top=Object.entries(ex).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([k,v])=>v+'× '+k.slice(0,60));
  console.log('ch'+ch,'lives30+',lives,'lines/life',(ent/lives).toFixed(1),'dup%',(100*dup/ent).toFixed(1),'worst',worst,pairs?'themeRun% '+(100*runs/pairs).toFixed(1):'');top.forEach(t=>console.log('   ',t));
  tot[0]+=ent;tot[1]+=dup;tot[2]+=runs;tot[3]+=pairs}
console.log('ALL dup%',(100*tot[1]/tot[0]).toFixed(1),tot[3]?'themeRun% '+(100*tot[2]/tot[3]).toFixed(1):'');
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)})`)
