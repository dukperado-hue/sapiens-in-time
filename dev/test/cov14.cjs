const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{window.__sitLang(process.env.LG||'zh');const miss=new Map();let tot=0;const cjk=/^(zh|ja|ko)$/.test(process.env.LG||'zh');
for(const ch of [14]){const o=await window.__sitSim(400,{ch,logs:1,leg:true});
 for(const x of o)for(const e of x.lg){if(!e)continue;const s=window.__sitL(e);tot++;let bad;
  if(cjk){let rest=s,pr;do{pr=rest;rest=rest.replace(/«[^«»]*»/g,'')}while(rest!==pr);bad=/(^|[^A-Za-z])[a-z]{3,}/.test(rest.replace(/[A-Z][a-z-]+/g,""))}
  else{const en=e.en||'';const ws=en.match(/[A-Za-z]{4,}/g)||[];bad=ws.length>2&&ws.filter(w=>s.includes(w)).length>=ws.length*0.6}
  if(bad&&!/[A-Z][a-z]+-[A-Za-z]+|DNA|Ellil|Enlil|Inanna|Nanna|Utu|Ninurta|Ishtar|Marduk|Shamash|Sin|Ea|Adad|Nabu|Nanshe|Enki|Ningal|Ninlil|Gula|Aya/.test(e.en||'')&&!/^[A-Z][a-z]+$/.test(s)){const k=(e.en||'').slice(0,100)+' ==> '+s.slice(0,100);miss.set(k,(miss.get(k)||0)+1)}}}
console.log('total',tot,'kinds',miss.size,'occ',[...miss.values()].reduce((a,b)=>a+b,0));
[...miss.entries()].sort((a,b)=>b[1]-a[1]).slice(0,+(process.env.N||12)).forEach(([k,v])=>console.log(v,k));})()`)
