const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;for(const lg of ['en','th','zh','de']){window.__sitLang(lg);
 const S0={ya0:3300,tabN:14,baked:1,gump10:1,adapt10:1,burn10:1,saw:{seal:1,agrimi:1}};
 console.log('['+lg+']',window.__sitFn("epi10")(S0));}`)
