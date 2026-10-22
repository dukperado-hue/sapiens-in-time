const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{const o=await window.__sitSim(+(process.env.N||600),{ch:12,logs:1,leg:true});
const ad=o.filter(x=>x.c12);const q=f=>(ad.filter(f).length/ad.length).toFixed(3);
const cnt=f=>{const m={};for(const x of ad){const k=f(x);m[k]=(m[k]||0)+1}return JSON.stringify(m)};
const cntL=f=>{const m={};for(const x of ad){for(const k of f(x).split(',').filter(Boolean))m[k]=(m[k]||0)+1}return JSON.stringify(m)};
console.log('n',ad.length,'lit>=35',q(x=>x.c12.lit>=35),'bone',q(x=>x.c12.bone>0),'surv',q(x=>x.c12.surv>0),'fall',q(x=>x.c12.fall),'moved',q(x=>x.c12.moved),'gump',q(x=>!!x.c12.gump),'myth',q(x=>x.c12.myth));console.log('gumps',cnt(x=>x.c12.gump||'-'));console.log('saw',cntL(x=>x.c12.saw));
console.log('cls',cnt(x=>x.c12.cls));console.log('rg',cnt(x=>x.c12.rg));console.log('era',cnt(x=>x.c12.era));console.log('car',cnt(x=>x.c12.car+(x.c12.clv>=3?'*':'')));
const ages=o.map(x=>x.age).sort((a,b)=>a-b);console.log('median age',ages[ages.length>>1],'<5',(ages.filter(a=>a<5).length/ages.length).toFixed(2));
console.log('causes',cnt(x=>x.cause));
const L=o.filter(x=>x.lg&&x.age>=45).slice(0,1)[0]||o[0];window.__sitLang(process.env.LG||'en');console.log(L.lg.slice().reverse().map(e=>typeof e==='string'?e:window.__sitL(e)).join('\\n'));
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)})`)
