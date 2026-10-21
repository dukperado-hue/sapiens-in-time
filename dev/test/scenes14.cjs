const fs=require('fs'),vm=require('vm');const src=fs.readFileSync(__dirname+'/../game.js','utf8');
function el(){const o={hidden:false,textContent:'',innerHTML:'',value:'',style:{},dataset:{},classList:{toggle(){},add(){},remove(){}},setAttribute(){},getAttribute(){return null},appendChild(){},insertAdjacentHTML(){},addEventListener(){},focus(){},select(){},remove(){},closest(){return null},querySelectorAll(){return[]},firstChild:null,getContext(){return {}},toDataURL(){return 'data:,'}};return new Proxy(o,{get:(t,k)=>k in t?t[k]:undefined,set:(t,k,v)=>(t[k]=v,true)})}
const cache={};const document={querySelector:s=>cache[s]||(cache[s]=el()),querySelectorAll:()=>[],createElement:()=>el(),addEventListener(){},documentElement:el(),body:el(),fonts:{load:()=>Promise.resolve()}};
const window={scrollTo(){},addEventListener(){}};
const c2={document,window,localStorage:{getItem:()=>null,setItem(){}},navigator:{},performance,setTimeout,setInterval:()=>0,clearInterval(){},requestAnimationFrame:()=>0,Intl,console,Date,Math,Promise};
vm.createContext(c2);vm.runInContext(src,c2);
let bad=0,calls=0;const ctx={fillStyle:'',globalAlpha:1,globalCompositeOperation:'',imageSmoothingEnabled:false,setTransform(){},drawImage(){},
  fillRect(x,y,w,h){calls++;if([x,y,w,h].some(v=>!Number.isFinite(v)))bad++;if(typeof this.fillStyle!=='string'||/NaN|undefined/.test(this.fillStyle))bad++}};
const scs=['aegean','aegeanm','aegeanv','thera','ugarit'];
const vrs=['plain'];
const acts=['fire','fish','herb','stars','herd','sow','craft','tablet','school','boat10','oil10','rite10','weave','smith','market','march','temple','story','rest'];
const dis=[null,'drought','flood','wildfire','blizzard','ash','quake','storm','tsunami','slide'];
const yts=['good','wet','dry','cold','normal'];const hks=['ante','deer','horse','bison','boar','roo','moa','banteng'];const HK=[['goat','sheep'],['cattle','pig'],['barb'],['cass'],['fowl'],[]];const PK=['goat','gazelle','cattle','cass','fowl','barb','pig','deer'];
let n=0,errs=[];
for(let rep=0;rep<30;rep++)for(const sc of scs)for(const vr of vrs)for(const act of acts){const d=dis[n%dis.length],yt=yts[n%5];
  const o={sc,vr,seed:12345+n,tm:(n%13)/13,t:1e12+n*977,act,stage:['adult','child','elder','baby'][n%4],people:4,lead:n%2,hand:['red','black',null][n%3],handKid:n%2,spirit:n%4,dog:n%3===0,hut:0,aeg10:1,vil10:n%5===2,myk10:n%5===1,uga10:n%5===4,thr10:n%5===3,sea10:n%2===0,burn10:n%3===0,ani10:[null,'dolphin','agrimi','seal'][n%4],era6:['ed','ok','fip','mk','nk'][n%5],pyr:n%3,step:n%7===0,pylon:n%2===1,obel:n%4===1,rocks:n%5===0,tombs:n%3===2,school:n%2===0,bab:n%2===0,hg:n%3===0,moai:n%11===0,mam:n%5===0?2:0,
    ash:false,wx:{rain:n%3===0,fog:n%4===0,wind:n%2===0,snow:n%5===0},yt,dis:d,pac:n%6===0,hk:hks[n%8],vill:n%2===0,field:n%3===0,herd:[['sheep','goat'],['cattle','pig'],['sheep']][n%3],penK:PK[n%8],snowGround:n%4===1,snowFall:n%5===2};
  try{window.__sitDraw(ctx,o)}catch(e){errs.push(sc+'/'+vr+'/'+act+'/'+d+': '+e.message)}n++}
console.log('scenes drawn',n,'fillRect calls',calls,'bad values',bad,'exceptions',errs.length,errs.slice(0,3));
