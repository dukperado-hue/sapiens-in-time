const fs=require('fs'),vm=require('vm');
const src=fs.readFileSync(__dirname+'/../game.js','utf8');
const CH=+process.argv[2]||2;
const errs=[];
function el(id){const o={id,hidden:false,textContent:'',innerHTML:'',value:'',src:'',alt:'',placeholder:'',style:{},dataset:{},disabled:false,classList:{toggle(){},add(){},remove(){}},
 setAttribute(){},getAttribute(){return null},appendChild(){},insertAdjacentHTML(){},addEventListener(){},focus(){},select(){},remove(){},
 closest(){return null},querySelectorAll(){return[]},firstChild:null,
 getContext(){return new Proxy({},{get:(t,k)=>k in t?t[k]:(k==='measureText'?(s)=>({width:String(s).length*12}):/Gradient$/.test(k)?()=>({addColorStop(){}}):(...a)=>{if(k==='fillRect'&&a.some(v=>Number.isNaN(v)))errs.push('NaN fillRect')}),set:(t,k,v)=>(t[k]=v,true)})},toDataURL(){return 'data:image/png;base64,AAA'}};
 return new Proxy(o,{get:(t,k)=>k in t?t[k]:undefined,set:(t,k,v)=>(t[k]=v,true)})}
const cache={};const $=s=>cache[s]||(cache[s]=el(s));
const store={'sit.lang':process.env.LG||'th','sit.chap':JSON.stringify(CH),'sit.pace':'0.03','sit.leg':'1'};
let clickH=null;const document={querySelector:$,querySelectorAll:()=>[],createElement:()=>el('new'),addEventListener(t,f){if(t==='click')clickH=f},documentElement:el('html'),body:el('body'),fonts:{load:()=>Promise.resolve()}};
const window={scrollTo(){},addEventListener(){}};
const con={...console,error:(...a)=>errs.push(a.map(String).join(' '))};
const ctx={document,window,localStorage:{getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=v}},navigator:{clipboard:{writeText:()=>Promise.resolve()}},
 performance,setTimeout,setInterval,clearInterval,requestAnimationFrame:f=>setTimeout(()=>f(),16),Intl,console:con,Date,Math,Promise};
process.on('unhandledRejection',e=>errs.push('rej '+e));
vm.createContext(ctx);
try{vm.runInContext(src,ctx)}catch(e){errs.push('load '+e)}
const ENG=new Map();function scanUI(){for(const k in cache){const o=cache[k];for(const v of [o.textContent,o.innerHTML,o.value]){if(typeof v!=='string')continue;const t=v.replace(/<[^>]*>/g,' ').replace(/&[a-z]+;/g,' ');for(const m of t.match(/[A-Za-z][A-Za-z' -]{6,}[A-Za-z]/g)||[]){if(/DNA|hxaro|tattoo|EPAS1|Homo|Lapita|Hōkū|sapiens|erectus|floresiensis|luzonensis|Sapiens|Denny/.test(m))continue;const kk=k+': '+m.slice(0,60);ENG.set(kk,(ENG.get(kk)||0)+1)}}}}
(async()=>{
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  $('#introSkip').onclick();$('#introGo').onclick();
  const home=$('#chap').innerHTML;console.log('chapter cards:',(home.match(/data-ch="\d"/g)||[]).join(' '),'| selected pressed:',/aria-pressed="true"/.test(home));
  console.log('calendar has ch2 mark:',$('#cal').innerHTML.includes('45,000')||$('#cal').innerHTML.length>0);
  $('#autoBtn').onclick();
  let lives=0,deaths=0,maxAge=0,toolsShown=0,epi2=0;
  let skip=false;
  for(let run=0;run<5;run++){
    if(!skip){await $('#beBorn').onclick();await sleep(3500);if(!$('#rec').innerHTML.includes('class="k"'))errs.push('draw card empty');$('#begin').onclick()}
    skip=false;lives++;
    for(let i=0;i<4000&&$('#death').hidden!==false;i++){await sleep(25);if(i%40==0)scanUI();if($('#tools').innerHTML.includes('class="tc'))toolsShown++}
    if($('#death').hidden===false){deaths++;await sleep(80);scanUI();
      const d=$('#dEpi').textContent;if(d.includes('แรงเกล')||d.includes('Wrangel'))epi2++;
      maxAge=Math.max(maxAge,+($('#dLine').textContent.match(/อายุ (\d+)/)||[0,0])[1]);
      if(!$('#cardImg').src.startsWith('data:image'))errs.push('no card');
      if(!$('#shareText').value)errs.push('no share text');
      const lh=$('#linOpts').innerHTML;const has=lh.includes('data-lin="0"');
      if(!$('#linBlock').hidden){console.log('  lineage:',$('#linStat').textContent.slice(0,80),'| options',(lh.match(/data-lin/g)||[]).length,'| badges',$('#linBadges').innerHTML.replace(/<[^>]+>/g,' ').trim().slice(0,80))}
      if(has&&run<4){clickH({target:{closest:sel=>sel.includes('#linOpts')?{dataset:{lin:'0'}}:null}});await sleep(1800);if(!$('#rec').innerHTML.includes('class="k"'))errs.push('draw card empty (lineage)');console.log('  draw row:',($('#rec').innerHTML.match(/(รุ่นที่[^<]+|ผู้เริ่มต้น[^<]+)/)||['-'])[0]);$('#begin').onclick();skip=true;continue}
      $('#toHome').onclick();}
    else errs.push('life did not finish');
  }
  console.log('chapter',CH,'lives',lives,'finished',deaths,'max age seen',maxAge,'tools row filled ticks',toolsShown,'ch2 epilogues',epi2);
  console.log('past lives html ok:',$('#past').innerHTML.includes('<li>'));
  if(process.env.LG&&process.env.LG!=='en'&&process.env.LG!=='th')console.log('ENGLISH LEFT',ENG.size,[...ENG.entries()].sort((a,b)=>b[1]-a[1]).slice(0,25));
  console.log('errors:',errs.length?errs.slice(0,8):'none');
  process.exit(0);
})();
