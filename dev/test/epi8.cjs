const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;for(const lg of ['en','th','zh','ja','de']){window.__sitLang(lg);
 const S0={ya0:3800,adapt8:1,sealN:12,relig:{bath:1,horned:1,fire:1},saw:{rhino:1,gharial:1}};
 console.log('['+lg+']',window.__sitFn("epi8")(S0).slice(0,900));}`)
