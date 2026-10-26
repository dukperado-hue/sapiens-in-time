const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{for(const ch of (process.env.CHS||'1,2,3,4,6,8,10,12,14,16,18,20,22,24,5,9').split(',').map(Number)){const o=await window.__sitSim(+(process.env.N||300),{ch});
const n=o.length,f=o.filter(x=>x.f26>0).length,m={};for(const x of o){const k=x.made26||'-';m[k]=(m[k]||0)+1}
console.log('ch',ch,'fame>0',(f/n).toFixed(2),'made',JSON.stringify(m))}})().catch(e=>{console.error('ERR',e.stack);process.exit(1)})`)
