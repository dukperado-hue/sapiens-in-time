const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{const o=await window.__sitSim(+(process.env.N||400),{ch:26,logs:1,leg:!process.env.NOLEG});
const ad=o.filter(x=>x.cMg);const q=f=>(ad.filter(f).length/ad.length).toFixed(3);
const cnt=f=>{const m={};for(const x of ad){const k=f(x);m[k]=(m[k]||0)+1}return JSON.stringify(m)};
const cntL=f=>{const m={};for(const x of ad){for(const k of f(x).split(',').filter(Boolean))m[k]=(m[k]||0)+1}return JSON.stringify(m)};
console.log('n',ad.length,'met>0',q(x=>!!x.cMg.met),'fame>0',q(x=>x.f26>0),'fall',q(x=>x.cMg.fall),'plague',q(x=>x.cMg.plague));
console.log('met',cntL(x=>x.cMg.met));console.log('rg',cnt(x=>x.cMg.rg));console.log('era',cnt(x=>x.cMg.era));console.log('car',cnt(x=>x.cMg.car));console.log('peo',cnt(x=>x.cMg.peo));console.log('faith',cnt(x=>x.cMg.faith));console.log('var',cnt(x=>x.cMg.var));console.log('made',cnt(x=>x.made26||'-'));
const ages=o.map(x=>x.age).sort((a,b)=>a-b);console.log('median age',ages[ages.length>>1],'<5',(ages.filter(a=>a<5).length/ages.length).toFixed(2));
console.log('causes',cnt(x=>x.cause));
const L=o.filter(x=>x.lg&&x.age>=40&&x.cMg&&x.cMg.met.split(',').length>=2)[0]||o[0];window.__sitLang('th');console.log(L.lg.slice().reverse().map(e=>typeof e==='string'?e:window.__sitL(e)).join('\\n'));
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)})`)
