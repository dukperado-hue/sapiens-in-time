const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{for(const ch of (process.env.CHS||'4,6,8,10,12,14').split(',').map(Number)){const o=await window.__sitSim(+(process.env.N||600),{ch,logs:1});
const mn=o.map(x=>x.cx?x.cx.split(',').length:0);const m={};for(const x of o)for(const k of (x.cx||'').split(',').filter(Boolean))m[k]=(m[k]||0)+1;
console.log('ch',ch,'n',o.length,'met>0',(mn.filter(v=>v>0).length/o.length).toFixed(2),'avg',(mn.reduce((a,b)=>a+b,0)/o.length).toFixed(2),'max',Math.max(...mn));console.log(' ',JSON.stringify(m));}
})().catch(e=>{console.error('ERR',e.stack);process.exit(1)})`)
