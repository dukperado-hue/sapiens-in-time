const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{const o=await window.__sitSim(+(process.env.N||400),{ch:28,logs:1,leg:!process.env.NOLEG});
const ad=o.filter(x=>x.cNw);const q=f=>(ad.filter(f).length/ad.length).toFixed(3);
const cnt=f=>{const m={};for(const x of ad){const k=f(x);m[k]=(m[k]||0)+1}return JSON.stringify(m)};
const cntL=f=>{const m={};for(const x of ad){for(const k of f(x).split(',').filter(Boolean))m[k]=(m[k]||0)+1}return JSON.stringify(m)};
console.log('n',ad.length,'met>0',q(x=>!!x.cNw.met),'fame>0',q(x=>x.f26>0),'fall',q(x=>x.cNw.fall),'plague',q(x=>x.cNw.plague));
console.log('met',cntL(x=>x.cNw.met));console.log('rg',cnt(x=>x.cNw.rg));console.log('era',cnt(x=>x.cNw.era));console.log('car',cnt(x=>x.cNw.car));console.log('cls',cnt(x=>x.cNw.cls+(x.cNw.free?'>free':'')));console.log('peo',cnt(x=>x.cNw.peo));console.log('faith',cnt(x=>x.cNw.faith));console.log('var',cnt(x=>x.cNw.var));console.log('made',cnt(x=>x.made26||'-'));
const ages=o.map(x=>x.age).sort((a,b)=>a-b);console.log('median age',ages[ages.length>>1],'<5',(ages.filter(a=>a<5).length/ages.length).toFixed(2));
console.log('causes',cnt(x=>x.cause));
const L=o.filter(x=>x.lg&&x.age>=40&&x.cNw&&x.cNw.met.split(',').length>=2)[0]||o[0];window.__sitLang('th');console.log(L.lg.slice().reverse().map(e=>typeof e==='string'?e:window.__sitL(e)).join('\\n'));
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)})`)
