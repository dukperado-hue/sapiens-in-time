/* ===================== v0.47: a dark theme for the plague (Swan Lake, Tchaikovsky 1876, public domain), and the mathematics of an epidemic (SIR) (Thai only) ===================== */

/* ---------- 1. music: the swan theme on a lonely oboe over low strings, looping while you are in the plague ---------- */
const SWAN47=[['F#5',2],['B4',.5],['C#5',.5],['D5',.5],['E5',.5],['F#5',1.5],['D5',.5],['F#5',1.5],['D5',.5],['F#5',1.5],['B4',.5],['D5',.5],['B4',.5],['G4',.5],['D5',.5],['B4',3],
 ['C#5',1],['B4',.5],['A#4',.5],['B4',1],['C#5',1],['D5',1.5],['C#5',.5],['B4',1],['A#4',1],['B4',4]];
const SWANCH47=[['B2','F#3','D4'],['B2','F#3','D4'],['G2','D3','B3'],['E2','B2','G3'],['F#2','C#3','A#3'],['B2','F#3','D4'],['G2','D3','B3'],['F#2','C#3','A#3']];
const PLM47=(()=>{let ac=null,mg=null,on=false,tm=null;const fq=n=>{const m={C:0,D:2,E:4,F:5,G:7,A:9,B:11};let s=m[n[0]],i=1;if(n[1]==='#'){s++;i++}else if(n[1]==='b'){s--;i++}return 440*Math.pow(2,(s+(+n.slice(i)-4)*12-9)/12)};
  const beat=.62;
  function voice(f,t,d,kind){const o=ac.createOscillator(),g=ac.createGain(),fl=ac.createBiquadFilter();fl.type='lowpass';
    if(kind==='oboe'){o.type='sawtooth';fl.frequency.value=1500;fl.Q.value=4;const l=ac.createOscillator(),lg=ac.createGain();l.frequency.value=5.2;lg.gain.value=f*.006;l.connect(lg);lg.connect(o.frequency);l.start(t);l.stop(t+d+.3);
      g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.22,t+.08);g.gain.setValueAtTime(.2,t+d*.8);g.gain.exponentialRampToValueAtTime(.0001,t+d+.15)}
    else{o.type='sawtooth';fl.frequency.value=600;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.06,t+.9);g.gain.setValueAtTime(.06,t+d-.4);g.gain.exponentialRampToValueAtTime(.0001,t+d+.4)}
    o.frequency.value=f;o.connect(fl);fl.connect(g);g.connect(mg);o.start(t);o.stop(t+d+.5)}
  function cycle(t){let x=t;for(const [n,d] of SWAN47){voice(fq(n),x,d*beat,'oboe');x+=d*beat}const len=x-t;const bar=len/SWANCH47.length;
    SWANCH47.forEach((c,i)=>c.forEach((n,k)=>{voice(fq(n),t+i*bar,bar,'str');if(k===0)voice(fq(n)/2,t+i*bar,bar,'str')}));return len}
  function start(){try{if(on)return;if(+store.get('sit.snd',2)!==2)return;const C=window.AudioContext||window.webkitAudioContext;if(!C)return;ac=ac||new C();if(ac.state==='suspended')ac.resume().catch(()=>{});
    mg=ac.createGain();mg.gain.value=.0001;const rv=ac.createDelay();rv.delayTime.value=.23;const fb=ac.createGain();fb.gain.value=.28;mg.connect(ac.destination);mg.connect(rv);rv.connect(fb);fb.connect(rv);rv.connect(ac.destination);
    const vol=clamp(+store.get('sit.vol',100),0,100)/100;mg.gain.exponentialRampToValueAtTime(.55*vol+.0001,ac.currentTime+2.5);on=true;
    let t=ac.currentTime+.3;const loop=()=>{if(!on)return;const len=cycle(t);t+=len+beat*2;tm=setTimeout(loop,Math.max(500,(t-ac.currentTime-1.5)*1000))};loop()}catch(e){}}
  function stop(){if(!on)return;on=false;clearTimeout(tm);try{const g=mg;g.gain.cancelScheduledValues(ac.currentTime);g.gain.setValueAtTime(g.gain.value,ac.currentTime);g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+1.2);setTimeout(()=>{try{g.disconnect()}catch(e){}},1400)}catch(e){}}
  return {start,stop,get on(){return on}}})();
{const W=(fn,f)=>function(){f();return fn.apply(this,arguments)};
 plIntro46=W(plIntro46,PLM47.start);plOpen45=W(plOpen45,PLM47.start);plAct45=W(plAct45,PLM47.start);plEnd45=W(plEnd45,PLM47.start);sv46UI=W(sv46UI,PLM47.start);
 stOpen42=W(stOpen42,PLM47.stop);stCourse42=W(stCourse42,PLM47.stop);stLesson42=W(stLesson42,PLM47.stop);stClose42=W(stClose42,PLM47.stop);}

/* ---------- 2. the mathematics of an epidemic: S, I and R, and a curve you can flatten ---------- */
function sir47(host){const cv=document.createElement('canvas');cv.width=320;cv.height=180;cv.style.cssText='width:100%;image-rendering:pixelated;display:block;border:1px solid #3a3060;border-radius:6px;background:#120f1e';host.appendChild(cv);
  const out=document.createElement('div');out.className='fb';host.appendChild(out);const P={beta:.3,gamma:.1,cut:0};
  const sl=(lab,k,min,max,step,fmt)=>{const d=document.createElement('label');d.style.cssText='display:block;font-size:13.5px;margin:8px 0';const sp=document.createElement('span');const r=document.createElement('input');r.type='range';r.min=min;r.max=max;r.step=step;r.value=P[k];r.style.cssText='width:100%';
    const upd=()=>{sp.textContent=lab+': '+fmt(P[k])};r.oninput=()=>{P[k]=+r.value;upd();draw()};upd();d.appendChild(sp);d.appendChild(r);host.appendChild(d)};
  sl('β อัตราการแพร่ (คนป่วยหนึ่งคนพบคนแล้วแพร่ได้วันละเท่าไร)','beta',.05,.6,.01,v=>v.toFixed(2));sl('γ อัตราการหาย (1 หารด้วยจำนวนวันที่ป่วย)','gamma',.04,.3,.01,v=>v.toFixed(2)+' = ป่วยราว '+Math.round(1/v)+' วัน');sl('ลดการพบกัน (กักตัว แยกคนป่วย)','cut',0,.9,.05,v=>Math.round(v*100)+'%');
  const x=cv.getContext('2d');
  function draw(){const b=P.beta*(1-P.cut),g=P.gamma;let S=.999,I=.001,R=0,peak=0,pd=0;const pts=[];for(let d=0;d<=200;d++){pts.push([S,I,R]);if(I>peak){peak=I;pd=d}const nI=b*S*I,nR=g*I;S-=nI;I+=nI-nR;R+=nR}
    G45R(x,0,0,320,180,'#120f1e');for(let i=0;i<=4;i++)G45R(x,20,20+i*35,290,1,'#2a2440');G45R(x,20,160-140*.15,290,1,'#c84a4a');x.fillStyle='#c87a7a';x.font='8px "DejaVu Sans",sans-serif';x.fillText('ขีดที่โรงพยาบาลรับไหว',200,160-140*.15-3);
    [[0,'#6aa8e8'],[1,'#ff6a5a'],[2,'#6ac86a']].forEach(([k,c])=>{x.strokeStyle=c;x.lineWidth=2;x.beginPath();pts.forEach((p,d)=>{const X=20+d*290/200,Y=160-p[k]*140;d?x.lineTo(X,Y):x.moveTo(X,Y)});x.stroke()});
    x.fillStyle='#e8e0ff';x.fillText('S ยังไม่ติด',24,14);x.fillStyle='#ff8a7a';x.fillText('I กำลังป่วย',90,14);x.fillStyle='#8ae88a';x.fillText('R หายหรือตาย',160,14);x.fillStyle='#8a7ad8';x.fillText('200 วัน',282,172);
    const R0=b/g,tot=pts[200][2];out.innerHTML='<b>R₀ = β ÷ γ = '+R0.toFixed(2)+'</b> · '+(R0>1?'มากกว่า 1 โรคจะระบาด':'น้อยกว่า 1 โรคจะค่อยๆ หายไปเอง')+'<br>ยอดคนป่วยพร้อมกันสูงสุด '+Math.round(peak*100)+'% ของเมือง ในวันที่ '+pd+(peak>.15?' · เกินขีดที่โรงพยาบาลรับไหว':'')+'<br>รวมแล้วติดเชื้อ '+Math.round(tot*100)+'% ของเมือง'}
  draw()}
function sirPage47(){PLM47.start();try{const w=plShell45();stP42(w,'yr45','ห้องทดลอง · คณิตศาสตร์ของโรคระบาด');stP42(w,'','เส้นโค้งที่กดให้แบนได้','h2');
  stP42(w,'sc','ห้าร้อยปีที่ผ่านมา คนรับมือโรคระบาดด้วยการสังเกต การกักตัว และการนับคนตาย ในปี 1927 นักวิทยาศาสตร์สองคนในสกอตแลนด์ วิลเลียม เคอร์แมก และแอนเดอร์สัน แมกเคนดริก เขียนสมการที่แบ่งคนในเมืองเป็นสามกลุ่ม คนที่ยังไม่ติด (S) คนที่กำลังป่วยและแพร่เชื้อ (I) และคนที่หายหรือตายแล้ว (R) แล้วถามว่าคนย้ายจากกลุ่มหนึ่งไปอีกกลุ่มเร็วแค่ไหน');
  const host=document.createElement('div');w.appendChild(host);sir47(host);
  const u=document.createElement('ul');u.className='fa';['ตัวเลข R₀ คือจำนวนคนเฉลี่ยที่ผู้ป่วยหนึ่งคนแพร่เชื้อให้ ในเมืองที่ยังไม่มีใครมีภูมิคุ้มกัน ถ้ามากกว่า 1 โรคจะขยายตัวแบบทวีคูณ ถ้าน้อยกว่า 1 โรคจะค่อยๆ หายไป',
   'การกักเรือที่รากูซา การปิดหมู่บ้านที่เอียม และการถอดคันโยกปั๊มของสโนว์ ล้วนเป็นการลดตัวเลขนี้ ก่อนที่จะมีใครเขียนสมการได้',
   'ลองเลื่อน "ลดการพบกัน" ดู ยอดของเส้นสีแดงจะต่ำลงและเลื่อนไปทางขวา การกดยอดให้ต่ำกว่าขีดที่โรงพยาบาลรับไหว ทำให้คนป่วยทุกคนได้รับการดูแล',
   'นี่คือแบบจำลองที่ง่ายที่สุด กาฬโรคจริงซับซ้อนกว่านี้มาก เพราะมันแพร่ผ่านหมัดและหนูด้วย ไม่ใช่จากคนสู่คนเพียงอย่างเดียว'].forEach(f=>{const li=document.createElement('li');li.textContent=f;u.appendChild(li)});w.appendChild(u);
  stP42(w,'nt','สมการนี้เป็นสมการเชิงอนุพันธ์ ใช้แคลคูลัสแบบที่อยู่ในวิชา 17 สมการ: dS/dt = −βSI · dI/dt = βSI − γI · dR/dt = γI');
  const nv=document.createElement('div');nv.className='nav';w.appendChild(nv);stBtn42(nv,'← กาฬโรค',plIntro46,1);stBtn42(nv,'ปิด',stClose42)}catch(e){}}
{const _i=plIntro46;plIntro46=function(){_i();try{const nv=document.querySelector('#st42 .nav');if(nv){const b=document.createElement('button');b.className='btn btn-ghost';b.textContent='🧮 ห้องทดลอง: คณิตศาสตร์ของโรคระบาด';b.onclick=sirPage47;nv.parentNode.insertBefore(b,nv)}}catch(e){}}}
{const _e=plEnd45;plEnd45=function(){_e();try{const nv=document.querySelector('#st42 .nav');if(nv){const b=document.createElement('button');b.className='btn btn-ghost';b.textContent='🧮 ต่อไป: คณิตศาสตร์ของโรคระบาด';b.onclick=sirPage47;nv.parentNode.insertBefore(b,nv)}}catch(e){}}}
if(typeof window!=='undefined')window.__v47={PLM47,sirPage47};
