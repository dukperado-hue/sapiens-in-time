const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{const o=await window.__sitSim(+(process.env.N||600),{ch:22,logs:1,leg:!process.env.NOLEG});
const ad=o.filter(x=>x.c22);const q=f=>(ad.filter(f).length/ad.length).toFixed(3);
const cnt=f=>{const m={};for(const x of ad){const k=f(x);m[k]=(m[k]||0)+1}return JSON.stringify(m)};
const cntL=f=>{const m={};for(const x of ad){for(const k of f(x).split(',').filter(Boolean))m[k]=(m[k]||0)+1}return JSON.stringify(m)};
const mn=ad.map(x=>x.c22.met?x.c22.met.split(',').length:0);
console.log('n',ad.length,'met>0',q(x=>!!x.c22.met),'met>=3',q(x=>x.c22.met.split(',').length>=3),'avg met',(mn.reduce((a,b)=>a+b,0)/ad.length).toFixed(2),'max',Math.max(...mn),'fall',q(x=>x.c22.fall));
console.log('met',cntL(x=>x.c22.met));console.log('saw',cntL(x=>x.c22.saw));console.log('var',cnt(x=>x.c22.var));console.log('monk',cnt(x=>x.c22.monk||'-'));console.log('obj',cntL(x=>x.c22.obj));console.log('peo',cnt(x=>x.c22.peo));
console.log('cls',cnt(x=>x.c22.cls));console.log('rg',cnt(x=>x.c22.rg));console.log('path',cnt(x=>x.c22.path.includes('>')?x.c22.path:'-'));console.log('era',cnt(x=>x.c22.era));console.log('car',cnt(x=>x.c22.car+(x.c22.clv>=3?'*':'')));
console.log('met by rg', JSON.stringify(Object.fromEntries(Object.entries(ad.reduce((m,x)=>{(m[x.c22.rg]=m[x.c22.rg]||[]).push(x.c22.met?x.c22.met.split(',').length:0);return m},{})).map(([k,v])=>[k,(v.reduce((a,b)=>a+b,0)/v.length).toFixed(2)]))));
const ages=o.map(x=>x.age).sort((a,b)=>a-b);console.log('median age',ages[ages.length>>1],'<5',(ages.filter(a=>a<5).length/ages.length).toFixed(2));
console.log('causes',cnt(x=>x.cause));
const L=o.filter(x=>x.lg&&x.age>=45&&x.c22&&x.c22.met.split(',').length>=3).slice(0,1)[0]||o[0];window.__sitLang(process.env.LG||'en');console.log(L.lg.slice().reverse().map(e=>typeof e==='string'?e:window.__sitL(e)).join('\\n'));
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)})`)
