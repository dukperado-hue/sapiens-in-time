const fs=require('fs'),vm=require('vm');
const src=fs.readFileSync(__dirname+'/../game.js','utf8');
function el(){const o={hidden:false,textContent:'',innerHTML:'',value:'',style:{},dataset:{},classList:{toggle(){},add(){},remove(){}},
 setAttribute(){},getAttribute(){return null},appendChild(){},insertAdjacentHTML(){},addEventListener(){},focus(){},select(){},remove(){},
 closest(){return null},querySelectorAll(){return[]},firstChild:null,getContext(){return new Proxy({},{get:(t,k)=>k in t?t[k]:(k==='measureText'?()=>({width:10}):()=>{}),set:(t,k,v)=>(t[k]=v,true)})},toDataURL(){return 'data:,'}};
 return new Proxy(o,{get:(t,k)=>k in t?t[k]:undefined,set:(t,k,v)=>(t[k]=v,true)})}
const cache={};
const document={querySelector:s=>cache[s]||(cache[s]=el()),querySelectorAll:()=>[],createElement:()=>el(),addEventListener(){},documentElement:el(),body:el(),fonts:{load:()=>Promise.resolve()}};
const window={scrollTo(){},addEventListener(){}};
const ctx={document,window,localStorage:{getItem:()=>null,setItem(){}},navigator:{clipboard:{writeText:()=>Promise.resolve()}},performance,setTimeout,setInterval:()=>0,clearInterval(){},requestAnimationFrame:()=>0,Intl,console,Date,Math,Promise};
vm.createContext(ctx);vm.runInContext(src,ctx);
const rep=(name,out)=>{const n=out.length;const ages=out.map(o=>o.age).sort((a,b)=>a-b);const pct=x=>(100*x/n).toFixed(0)+'%';
  const by=f=>out.reduce((m,o)=>{const k=f(o);m[k]=(m[k]||0)+1;return m},{});
  console.log('\n== '+name+' ('+n+')');
  console.log(' died<5',pct(ages.filter(a=>a<5).length),'reach15',pct(ages.filter(a=>a>=15).length),'reach45',pct(ages.filter(a=>a>=45).length),'median',ages[n>>1],'max',ages.at(-1));
  const old=out.filter(o=>o.age>=45);
  const avgD=old.reduce((a,o)=>a+o.decs.length,0)/Math.max(1,old.length);
  // overlap between random pairs of 45+ lives
  let J=0,pairs=0;for(let i=0;i<Math.min(400,old.length-1);i++){const A=new Set(old[i].decs),B=new Set(old[i+1].decs);const inter=[...A].filter(x=>B.has(x)).length;const uni=new Set([...A,...B]).size;if(uni){J+=inter/uni;pairs++}}
  const freq={};old.forEach(o=>o.decs.forEach(d=>freq[d]=(freq[d]||0)+1));const top=Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([k,v])=>k+':'+(100*v/old.length).toFixed(0)+'%');
  console.log(' 45+ lives: decisions/life',avgD.toFixed(1),'| overlap between two lives',(100*J/Math.max(1,pairs)).toFixed(0)+'%','| most common:',top.join(' '));
  const kid=out.filter(o=>o.age>=13);const fire=kid.filter(o=>o.decs.includes('fire')).length;console.log(' "fire" decision among lives reaching 13:',(100*fire/kid.length).toFixed(0)+'%');
  console.log(' activities tried (30+)',(out.filter(o=>o.age>=30).reduce((a,o)=>a+o.acts,0)/Math.max(1,out.filter(o=>o.age>=30).length)).toFixed(1),'| friends (30+)',(out.filter(o=>o.age>=30).reduce((a,o)=>a+o.fr,0)/Math.max(1,out.filter(o=>o.age>=30).length)).toFixed(1),'| ever sick',pct(out.filter(o=>o.sickEver).length),'| disasters/life (30+)',(out.filter(o=>o.age>=30).reduce((a,o)=>a+o.dis,0)/Math.max(1,out.filter(o=>o.age>=30).length)).toFixed(1));
  console.log(' roles',JSON.stringify(by(o=>o.role)),'| rank',JSON.stringify(by(o=>o.rank)));
  console.log(' causes',JSON.stringify(by(o=>o.cause)));
  const sk=[0,0,0,0,0];const o30=out.filter(o=>o.age>=30);o30.forEach(o=>o.sk.forEach((v,i)=>sk[i]+=v));console.log(' avg skills at death (30+) sv/cr/so/tr/kn',sk.map(v=>(v/Math.max(1,o30.length)).toFixed(0)).join('/'));
};
(async()=>{
  rep('Chapter 1',await window.__sitSim(1200,{ch:1,leg:true}));
  rep('Chapter 2',await window.__sitSim(1200,{ch:2,leg:false}));
  rep('Pacific (single lives)',await window.__sitSim(800,{ch:5}));
  const L=await window.__sitLin(80,9);console.log('\n== Out of Africa chains',L.length,'avg lives',(L.reduce((a,o)=>a+o.lives,0)/L.length).toFixed(1),'reach America',(100*L.filter(o=>o.badges.includes('bAme')).length/L.length).toFixed(0)+'%');
  const P=await window.__sitLin(80,5);console.log('== Pacific chains',P.length,'avg lives',(P.reduce((a,o)=>a+o.lives,0)/P.length).toFixed(1),'reach East Polynesia',(100*P.filter(o=>o.badges.includes('bSoc')).length/P.length).toFixed(0)+'%');
})().catch(e=>{console.error('SIM ERROR',e);process.exit(1)});
