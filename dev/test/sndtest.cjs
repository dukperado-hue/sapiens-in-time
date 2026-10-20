const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
 p.on('pageerror',e=>console.log('PAGEERR',e.message));
 await p.addInitScript(()=>{window.__OFF=[];window.AudioContext=class extends OfflineAudioContext{constructor(){super(1,44100*6,44100);window.__OFF.push(this)}resume(){return Promise.resolve()}suspend(){return Promise.resolve()}}});
 await p.goto('file://'+__dirname+'/../../index.html');await p.waitForTimeout(300);
 const list=['sfx:birth','sfx:big','sfx:sad','sfx:it','sfx:lg','sfx:ms','sfx:card','sfx:pick','sfx:doom','sfx:death','call:hippo','call:croc','call:lion','call:aurochs','call:donkey','call:goat','call:sheep','call:mammoth','call:wolf','call:dog','call:ibis','call:hart','call:boar','call:bear','call:giraffe'];
 // simpler: one reload per sound
 const out=[];
 for(const it of list){await p.goto('file://'+__dirname+'/../../index.html');await p.waitForTimeout(150);
   const r=await p.evaluate(async(it)=>{__SND.unlock();const ac=window.__OFF[0];const [kind,k]=it.split(':');if(kind==='sfx')__SND.sfx(k);else __SND.call(k,.9);
     const buf=await ac.startRendering();const d=buf.getChannelData(0);let mx=0,s=0,nan=0,last=0;for(let i=0;i<d.length;i++){const v=d[i];if(v!==v){nan++;continue}const a=Math.abs(v);if(a>mx)mx=a;s+=v*v;if(a>.002)last=i}
     return it+' peak '+mx.toFixed(3)+' rms '+Math.sqrt(s/d.length).toFixed(4)+' len '+(last/44100).toFixed(2)+'s nan '+nan},it);out.push(r)}
 console.log(out.join('\n'));await b.close()})();
