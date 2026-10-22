const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
 p.on('pageerror',e=>console.log('PAGEERR',e.message));
 await p.addInitScript(()=>{window.__OFF=[];window.AudioContext=class extends OfflineAudioContext{constructor(){super(1,44100*12,44100);window.__OFF.push(this)}resume(){return Promise.resolve()}suspend(){return Promise.resolve()}}});
 const kinds=['stone','neo','sum','egy','ind','aeg','sha','olm','gre','rom','pac'];
 const out=[];
 for(const it of [...kinds.map(k=>'mus:'+k),'act:*']){
   if(it==='act:*'){await p.goto('file://'+__dirname+'/../../index.html');await p.waitForTimeout(150);const ks=await p.evaluate(()=>{__SND.unlock();return __SND._t.keys()});
     for(const k of ks){await p.goto('file://'+__dirname+'/../../index.html');await p.waitForTimeout(100);
       out.push(await p.evaluate(async k=>{__SND.unlock();const ac=window.__OFF[0];__SND._t.act(k);const buf=await ac.startRendering();const d=buf.getChannelData(0);let mx=0,nan=0;for(const v of d){if(v!==v)nan++;else mx=Math.max(mx,Math.abs(v))}return 'act '+k+' peak '+mx.toFixed(3)+' nan '+nan},k))}continue}
   await p.goto('file://'+__dirname+'/../../index.html');await p.waitForTimeout(150);
   const r=await p.evaluate(async it=>{__SND.unlock();const ac=window.__OFF[0];const k=it.split(':')[1];
     // emulate several phrases, using a fake clock offset by scheduling directly
     for(let i=0;i<4;i++)__SND._t.music(k);
     const buf=await ac.startRendering();const d=buf.getChannelData(0);let mx=0,s=0,nan=0;for(const v of d){if(v!==v){nan++;continue}mx=Math.max(mx,Math.abs(v));s+=v*v}
     // 16-bit wav
     const n=d.length,ab=new ArrayBuffer(44+n*2),dv=new DataView(ab);const W=(o,str)=>{for(let i=0;i<str.length;i++)dv.setUint8(o+i,str.charCodeAt(i))};
     W(0,'RIFF');dv.setUint32(4,36+n*2,true);W(8,'WAVEfmt ');dv.setUint32(16,16,true);dv.setUint16(20,1,true);dv.setUint16(22,1,true);dv.setUint32(24,44100,true);dv.setUint32(28,88200,true);dv.setUint16(32,2,true);dv.setUint16(34,16,true);W(36,'data');dv.setUint32(40,n*2,true);
     for(let i=0;i<n;i++)dv.setInt16(44+i*2,Math.max(-1,Math.min(1,d[i]||0))*32767,true);
     let bin='';const u=new Uint8Array(ab);for(let i=0;i<u.length;i+=8192)bin+=String.fromCharCode.apply(null,u.subarray(i,i+8192));
     return {txt:it+' peak '+mx.toFixed(3)+' rms '+Math.sqrt(s/d.length).toFixed(4)+' nan '+nan,wav:btoa(bin)}},it);
   out.push(r.txt);fs.writeFileSync(process.env.OUT+'/mus_'+it.split(':')[1]+'.wav',Buffer.from(r.wav,'base64'))}
 console.log(out.join('\n'));await b.close()})();
