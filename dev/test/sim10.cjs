const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{const o=await window.__sitSim(+(process.env.N||600),{ch:6,logs:1,leg:true});
const ad=o.filter(x=>x.c6);const q=f=>(ad.filter(f).length/ad.length).toFixed(3);
console.log('n',ad.length,'lit>=35',q(x=>x.c6.lit>=35),'wrote',q(x=>x.c6.pap>0),'nameTab',q(x=>x.c6.nameTab),'sinu>=3',q(x=>x.c6.sinu>=3),'bod',q(x=>x.c6.bod),'tomb',q(x=>x.c6.tomb));
const cnt=f=>{const m={};for(const x of ad){const k=f(x);m[k]=(m[k]||0)+1}return JSON.stringify(m)};
console.log('cls',cnt(x=>x.c6.cls));console.log('rg',cnt(x=>x.c6.rg));console.log('era',cnt(x=>x.c6.era));console.log('car',cnt(x=>x.c6.car+(x.c6.clv>=3?'*':'')));
console.log('saw',cnt(x=>x.c6.saw));
const ages=o.map(x=>x.age).sort((a,b)=>a-b);console.log('median age',ages[ages.length>>1],'<5',(ages.filter(a=>a<5).length/ages.length).toFixed(2));
console.log('causes',cnt(x=>x.cause));
const L=o.filter(x=>x.lg&&x.age>=45).slice(0,1)[0]||o[0];window.__sitLang(process.env.LG||'en');console.log(L.lg.slice().reverse().map(e=>typeof e==='string'?e:window.__sitL(e)).join('\\n'));
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)})`)
