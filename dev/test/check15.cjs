const b=require('fs').readFileSync(__dirname+'/sim5.cjs','utf8').split('const rep=')[0];
eval(b+`;(async()=>{window.__sitLang('en');const N=+(process.env.N||400);const R={};
for(const ch of [1,2,3,4,6,8,10,5]){const o=await window.__sitSim(N,{ch,logs:1,leg:false});const bad={};const add=(k,x)=>{bad[k]=bad[k]||{n:0,ex:{}};bad[k].n++;bad[k].ex[x.slice(0,150)]=1};
 for(const x of o){const t=x.lg.map(e=>typeof e==='string'?e:window.__sitL(e));const all=t.join(' | ');
  if(!x.kidsN&&/grandchild|\\byour (children|child|son|daughter)\\b/i.test(all)){const m=all.match(/.{0,90}(grandchild|\\byour (children|child|son|daughter)\\b).{0,30}/i);add('kids-without-kids',m?m[0]:'')}
  if(ch===10&&x.ya0<3150&&/palace scribe|rations of wheat|palace sheep|Mistress of the Labyrinth/i.test(all))add('palace-after-fall',(all.match(/[^|]*(palace scribe|rations of wheat|palace sheep|Mistress of the Labyrinth)[^|]*/i)||[''])[0].slice(0,140));
  if(ch===6&&/Westcar/.test(all)&&x.ya0>4100)add('westcar-early','ya0 '+x.ya0);
  if(ch===6&&x.sex==='f'&&/hauling stone|stone gangs|haul stones/i.test(all))add('woman-hauling','');
  if(/\\bundefined\\b|NaN|\\[object/.test(all))add('undefined',(all.match(/[^|]*(undefined|NaN|\\[object)[^|]*/)||[''])[0].slice(0,140));
 }R[ch]=bad}
for(const ch in R)for(const k in R[ch])R[ch][k].ex=Object.keys(R[ch][k].ex).slice(0,12);console.log(JSON.stringify(R,null,1))})()`)
