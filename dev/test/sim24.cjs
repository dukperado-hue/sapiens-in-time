const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{const o=await window.__sitSim(+(process.env.N||600),{ch:24,logs:1,leg:!process.env.NOLEG});
const ad=o.filter(x=>x.c24);const q=f=>(ad.filter(f).length/ad.length).toFixed(3);
const cnt=f=>{const m={};for(const x of ad){const k=f(x);m[k]=(m[k]||0)+1}return JSON.stringify(m)};
const cntL=f=>{const m={};for(const x of ad){for(const k of f(x).split(',').filter(Boolean))m[k]=(m[k]||0)+1}return JSON.stringify(m)};
const mn=ad.map(x=>x.c24.met?x.c24.met.split(',').length:0);
console.log('n',ad.length,'met>0',q(x=>!!x.c24.met),'met>=3',q(x=>x.c24.met.split(',').length>=3),'avg met',(mn.reduce((a,b)=>a+b,0)/ad.length).toFixed(2),'max',Math.max(...mn),'fall',q(x=>x.c24.fall));
console.log('met',cntL(x=>x.c24.met));console.log('saw',cntL(x=>x.c24.saw));console.log('var',cnt(x=>x.c24.var));console.log('monk',cnt(x=>x.c24.monk||'-'));console.log('obj',cntL(x=>x.c24.obj));console.log('peo',cnt(x=>x.c24.peo));console.log('faith',cnt(x=>x.c24.faith));console.log('hajj',q(x=>x.c24.hajj));
console.log('cls',cnt(x=>x.c24.cls));console.log('rg',cnt(x=>x.c24.rg));console.log('path',cnt(x=>x.c24.path.includes('>')?x.c24.path:'-'));console.log('era',cnt(x=>x.c24.era));console.log('car',cnt(x=>x.c24.car+(x.c24.clv>=3?'*':'')));
console.log('met by rg', JSON.stringify(Object.fromEntries(Object.entries(ad.reduce((m,x)=>{(m[x.c24.rg]=m[x.c24.rg]||[]).push(x.c24.met?x.c24.met.split(',').length:0);return m},{})).map(([k,v])=>[k,(v.reduce((a,b)=>a+b,0)/v.length).toFixed(2)]))));
const ages=o.map(x=>x.age).sort((a,b)=>a-b);console.log('median age',ages[ages.length>>1],'<5',(ages.filter(a=>a<5).length/ages.length).toFixed(2));
console.log('causes',cnt(x=>x.cause));
const L=o.filter(x=>x.lg&&x.age>=45&&x.c24&&x.c24.met.split(',').length>=3).slice(0,1)[0]||o[0];window.__sitLang(process.env.LG||'en');console.log(L.lg.slice().reverse().map(e=>typeof e==='string'?e:window.__sitL(e)).join('\\n'));
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)})`)
