const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{const o=await window.__sitSim(+(process.env.N||600),{ch:10,logs:1,leg:true});
const ad=o.filter(x=>x.c10);const q=f=>(ad.filter(f).length/ad.length).toFixed(3);
console.log('n',ad.length,'lit>=35',q(x=>x.c10.lit>=35),'tab',q(x=>x.c10.tab>0),'baked',q(x=>x.c10.baked),'burn',q(x=>x.c10.burn),'adapt',q(x=>x.c10.adapt),'gump',q(x=>x.c10.gump),'left',q(x=>x.c10.left));
const cnt=f=>{const m={};for(const x of ad){const k=f(x);m[k]=(m[k]||0)+1}return JSON.stringify(m)};
const cntL=f=>{const m={};for(const x of ad){for(const k of f(x).split(',').filter(Boolean))m[k]=(m[k]||0)+1}return JSON.stringify(m)};
console.log('cls',cnt(x=>x.c10.cls));console.log('rg',cnt(x=>x.c10.rg));console.log('era',cnt(x=>x.c10.era));console.log('car',cnt(x=>x.c10.car+(x.c10.clv>=3?'*':'')));
const ages=o.map(x=>x.age).sort((a,b)=>a-b);console.log('median age',ages[ages.length>>1],'<5',(ages.filter(a=>a<5).length/ages.length).toFixed(2));
console.log('causes',cnt(x=>x.cause));
const L=o.filter(x=>x.lg&&x.age>=45).slice(0,1)[0]||o[0];window.__sitLang(process.env.LG||'en');console.log(L.lg.slice().reverse().map(e=>typeof e==='string'?e:window.__sitL(e)).join('\\n'));
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)})`)
