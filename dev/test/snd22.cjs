// renders thunder at several distances offline: checks delay, loudness falls with distance, no NaN or clipping
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();p.on('pageerror',e=>console.log('PAGEERR',e.message));
 await p.addInitScript(()=>{window.__OFF=[];window.AudioContext=class extends OfflineAudioContext{constructor(){super(1,44100*16,44100);window.__OFF.push(this)}resume(){return Promise.resolve()}suspend(){return Promise.resolve()}}});
 for(const d of [.4,1.2,3]){await p.goto('file://'+__dirname+'/../../index.html');await p.waitForTimeout(150);
  console.log(await p.evaluate(async d=>{__SND.unlock();const ac=window.__OFF[0];__SND._t.thunder(d);const buf=await ac.startRendering();const x=buf.getChannelData(0);
   let mx=0,nan=0,first=-1;for(let i=0;i<x.length;i++){const v=x[i];if(v!==v){nan++;continue}const a=Math.abs(v);if(a>mx)mx=a;if(first<0&&a>.01)first=i}
   return 'thunder d='+d+'km  starts '+(first/44100).toFixed(2)+'s (expected ~'+Math.min(9,d/.343).toFixed(2)+'s)  peak '+mx.toFixed(3)+'  nan '+nan},d))}
 await b.close()})();
