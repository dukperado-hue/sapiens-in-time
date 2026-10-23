// balance check: survival per chapter (run with GJ=path/to/game.js to compare builds)
const fs=require('fs');let b=fs.readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
if(process.env.GJ)b=b.replace("fs.readFileSync(__dirname+'/../game.js','utf8')","fs.readFileSync(process.env.GJ,'utf8')");
eval(b+`;(async()=>{for(const ch of (process.env.CHS||'1,2,3,5,4,6,8,10,12,14,16,18,20').split(',').map(Number)){const o=await window.__sitSim(+(process.env.N||400),{ch,leg:true});
 const ages=o.map(x=>x.age).sort((a,b)=>a-b),n=o.length,p=f=>(100*o.filter(f).length/n).toFixed(0);
 console.log('ch'+ch,'median',ages[n>>1],'<5',p(x=>x.age<5)+'%','45+',p(x=>x.age>=45)+'%','kids',(o.reduce((a,x)=>a+x.kidsN,0)/n).toFixed(2))}})()`)
