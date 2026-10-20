/* ================= v0.11 SOUND: everything synthesized with Web Audio, no files ================= */
const SND=(()=>{
  let ac=null,M=null,G={},nz=null,bn=null,mode=+store.get('sit.snd',2),last=0,lastSig='',musT=0,callKey='',tickT=null,ksCache={},want={},layers={},inPlay=false,deadFade=0;
  // mode: 2 = music + sounds, 1 = sounds only, 0 = off
  const now=()=>ac.currentTime;
  function init(){if(ac||mode===0)return;const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
    try{ac=new C()}catch(e){ac=null;return}
    M=ac.createGain();M.gain.value=.85;const comp=ac.createDynamicsCompressor();comp.threshold.value=-18;comp.ratio.value=4;M.connect(comp);comp.connect(ac.destination);
    for(const k of ['amb','fx','mus']){G[k]=ac.createGain();G[k].connect(M)}G.amb.gain.value=.55;G.fx.gain.value=.75;G.mus.gain.value=mode===2?.32:0;
    const mk=(sec,brown)=>{const b=ac.createBuffer(1,ac.sampleRate*sec,ac.sampleRate),d=b.getChannelData(0);let l=0;for(let i=0;i<d.length;i++){const w=Math.random()*2-1;if(brown){l=(l+.02*w)/1.02;d[i]=l*3.5}else d[i]=w}return b};
    nz=mk(2,0);bn=mk(3,1);
    tickT=setInterval(tick,250)}
  function unlock(){if(mode===0)return;init();if(ac&&ac.state==='suspended')ac.resume().catch(()=>{})}
  function setMode(m){mode=m;store.set('sit.snd',m);if(m===0){if(ac)ac.suspend().catch(()=>{});return}unlock();if(ac&&G.mus)G.mus.gain.setTargetAtTime(m===2?.32:0,now(),.4)}
  // ---------- building blocks ----------
  const env=(g,t,a,peak,d,end=.0001)=>{g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(peak,t+a);g.gain.exponentialRampToValueAtTime(end,t+a+d)};
  function osc(type,f,t,dur,peak,dest,o={}){const s=ac.createOscillator(),g=ac.createGain();s.type=type;s.frequency.setValueAtTime(f,t);if(o.to)s.frequency.exponentialRampToValueAtTime(o.to,t+(o.toT||dur));
    if(o.vib){const l=ac.createOscillator(),lg=ac.createGain();l.frequency.value=o.vib;lg.gain.value=o.vibD||f*.02;l.connect(lg);lg.connect(s.frequency);l.start(t);l.stop(t+dur+.1)}
    let n=s;if(o.lp){const fl=ac.createBiquadFilter();fl.type='lowpass';fl.frequency.value=o.lp;fl.Q.value=o.q||.7;s.connect(fl);n=fl}
    n.connect(g);g.connect(dest||G.fx);env(g,t,o.a||.01,peak,dur);s.start(t);s.stop(t+(o.a||.01)+dur+.05);return s}
  function noise(t,dur,peak,type,f,q,dest,o={}){const s=ac.createBufferSource();s.buffer=o.brown?bn:nz;s.loop=true;const fl=ac.createBiquadFilter();fl.type=type;fl.frequency.setValueAtTime(f,t);if(o.to)fl.frequency.exponentialRampToValueAtTime(o.to,t+dur);fl.Q.value=q||1;
    const g=ac.createGain();s.connect(fl);fl.connect(g);g.connect(dest||G.fx);env(g,t,o.a||.005,peak,dur);s.start(t,Math.random()*1.5);s.stop(t+(o.a||.005)+dur+.05)}
  function ks(f,bright){const key=(f|0)+'_'+bright;if(ksCache[key])return ksCache[key];const sr=ac.sampleRate,N=Math.max(2,Math.round(sr/f)),len=Math.floor(sr*1.8),b=ac.createBuffer(1,len,sr),d=b.getChannelData(0);
    for(let i=0;i<N;i++)d[i]=Math.random()*2-1;const k=bright?.4985:.4965;d[N]=d[0]*k*2;for(let i=N+1;i<len;i++)d[i]=(d[i-N]+d[i-N-1])*k*(bright?1:.999);return ksCache[key]=b}
  function pluck(f,t,peak,dest,bright){const s=ac.createBufferSource();s.buffer=ks(f,bright);const g=ac.createGain();g.gain.value=peak;const fl=ac.createBiquadFilter();fl.type='lowpass';fl.frequency.value=bright?5200:2600;s.connect(fl);fl.connect(g);g.connect(dest||G.fx);s.start(t);s.stop(t+1.8)}
  function bell(f,t,peak,dest){[[1,1],[2.76,.35],[5.4,.15]].forEach(([m,a])=>osc('sine',f*m,t,1.6/m+.3,peak*a,dest,{a:.004}))}
  // ---------- ambient beds ----------
  function bed(name,make){if(layers[name])return layers[name];const g=ac.createGain();g.gain.value=0;g.connect(G.amb);const L={g,lvl:0};make(L,g);layers[name]=L;return L}
  function loopNoise(dest,type,f,q,brown,lfoF,lfoD){const s=ac.createBufferSource();s.buffer=brown?bn:nz;s.loop=true;const fl=ac.createBiquadFilter();fl.type=type;fl.frequency.value=f;fl.Q.value=q;s.connect(fl);
    if(lfoF){const l=ac.createOscillator(),lg=ac.createGain();l.frequency.value=lfoF;lg.gain.value=lfoD;l.connect(lg);lg.connect(fl.frequency);l.start()}
    fl.connect(dest);s.start(0,Math.random()*2);return fl}
  function swell(dest,rate,depth){const g=ac.createGain();g.gain.value=1-depth;const l=ac.createOscillator(),lg=ac.createGain();l.frequency.value=rate;lg.gain.value=depth;l.connect(lg);lg.connect(g.gain);l.start();g.connect(dest);return g}
  const BEDS={
    wind:(L,g)=>{const w=swell(g,.07,.45);loopNoise(w,'bandpass',420,.6,true,.05,180)},
    gale:(L,g)=>{const w=swell(g,.11,.5);loopNoise(w,'bandpass',700,1.4,false,.09,350);loopNoise(w,'lowpass',260,.7,true)},
    water:(L,g)=>{const w=swell(g,.23,.25);loopNoise(w,'bandpass',950,1.1,false,.31,260);loopNoise(w,'lowpass',380,.7,true)},
    waves:(L,g)=>{const w=swell(g,.085,.8);loopNoise(w,'lowpass',650,.6,true,.085,250)},
    rain:(L,g)=>{loopNoise(g,'highpass',1400,.6,false);loopNoise(g,'lowpass',500,.5,true)},
    crowd:(L,g)=>{const w=swell(g,.17,.3);loopNoise(w,'bandpass',520,.9,true,.6,160)},
    fire:(L,g)=>{loopNoise(g,'lowpass',180,.7,true)}};
  function setBed(name,lvl){want[name]=lvl}
  function applyBeds(){for(const k in BEDS){const v=want[k]||0;if(!v&&!layers[k])continue;const L=bed(k,BEDS[k]);if(Math.abs(L.lvl-v)>.01){L.g.gain.setTargetAtTime(v,now(),1.2);L.lvl=v}}}
  // random sprinkles per tick
  let sc={};
  function tick(){if(!ac||mode===0||ac.state!=='running')return;const t=now()+.05,r=Math.random;
    if(!inPlay){for(const k in want)want[k]=0;applyBeds();return}
    if(sc.fire&&r()<.35)noise(t+r()*.2,.02+r()*.03,.09+r()*.12,'highpass',2500+r()*3000,.8,G.amb);
    if(sc.birds&&r()<.05){const f=2200+r()*2200;for(let i=0,n=2+(r()*4|0);i<n;i++)osc('sine',f*(1+r()*.15),t+i*.11,.08,.05,G.amb,{to:f*(1.25+r()*.3),toT:.07})}
    if(sc.crickets&&r()<.3){const f=4300+r()*500;for(let i=0;i<3;i++)osc('sine',f,t+i*.045,.025,.022,G.amb)}
    if(sc.frogs&&r()<.07){const f=95+r()*60;for(let i=0;i<2+(r()*3|0);i++)osc('square',f,t+i*.16,.09,.035,G.amb,{lp:600,to:f*.8,toT:.09})}
    if(sc.drops&&r()<.06){const f=500+r()*700;osc('sine',f,t,.07,.05,G.amb,{to:f*1.8,toT:.05})}
    if(sc.murmur&&r()<.18)noise(t,.18+r()*.25,.05,'bandpass',280+r()*700,6,G.amb);
    if(sc.hippo&&r()<.012)call('hippo',.5);
    if(sc.goats&&r()<.008)call('goat',.4);
    if(sc.music&&mode===2&&typeof screen!=='undefined'&&screen==='play'&&ac.currentTime>musT)music(sc.music);
    if(deadFade&&ac.currentTime>deadFade){deadFade=0}}
  // ---------- scene → beds ----------
  function scene(o,isPlay){if(!ac||mode===0)return;inPlay=!!isPlay;const tn=performance.now();if(tn-last<900)return;last=tn;
    const P=Object.assign({},SC[o.sc]||{},(typeof VAR!=='undefined'&&VAR[o.vr])||{});
    const act=o.act||'fire';let tm=o.tm;if(act==='stars')tm=.03;else if(OUTDOOR.includes(act)||act==='knap'||act==='craft')tm=.28+tm*.44;
    const day=.5-.5*Math.cos(2*Math.PI*tm),night=day<.22,wx=o.wx||{},cold=o.snowGround||o.snowFall||wx.snow;
    const sea=!!(P.sea||o.pac),riv=!!P.riv||!!o.egy,city=!!(o.city||(o.egy&&(o.pylon||o.pyr)));
    setBed('wind',cold?0:(P.dunes||o.egy||o.city?.32:.22)+(wx.wind?.18:0));setBed('gale',cold?.42:0);
    setBed('water',riv&&!sea?.3:0);setBed('waves',sea?.55:0);setBed('rain',wx.rain&&!cold?.38:0);
    setBed('crowd',city&&!night&&act!=='stars'?.22:0);setBed('fire',(act==='fire'||night)&&!o.city?.25:0);
    applyBeds();
    sc={fire:(act==='fire'||(night&&!o.city)),birds:!night&&!cold&&!wx.rain,crickets:night&&!cold,frogs:night&&riv&&!cold,drops:riv&&!sea&&!night,
      murmur:city&&!night,hippo:!!o.egy,goats:(o.herd||[]).length>0&&!night,music:musicKind()};
    const k=o.ani6;const key=k&&S?k+S.age:'';if(key&&key!==callKey){callKey=key;setTimeout(()=>call(k,.9),700)}}
  // ---------- animal calls ----------
  function call(k,v){if(!ac||mode===0)return;const t=now()+.02,r=Math.random;v=v||.8;
    if(k==='hippo'){for(let i=0;i<4;i++){const tt=t+i*.32;osc('sawtooth',105-i*8,tt,.22,.16*v,G.fx,{lp:420,to:70-i*5,toT:.22,a:.03});noise(tt,.2,.05*v,'lowpass',300,1,G.fx,{brown:1})}}
    else if(k==='croc'){noise(t,1.1,.18*v,'bandpass',3200,1.2,G.fx,{a:.15,to:1800});osc('sawtooth',48,t+.1,.9,.12*v,G.fx,{lp:180,a:.2,vib:7,vibD:5})}
    else if(k==='lion'){osc('sawtooth',150,t,1.6,.22*v,G.fx,{lp:700,to:62,toT:1.6,a:.25,vib:9,vibD:9});noise(t,1.5,.08*v,'lowpass',500,1,G.fx,{brown:1,a:.25})}
    else if(k==='aurochs'||k==='cattle'){osc('sawtooth',98,t,1.3,.17*v,G.fx,{lp:520,to:128,toT:.45,a:.18,vib:5,vibD:2});osc('sawtooth',125,t+.5,.9,.12*v,G.fx,{lp:480,to:92,toT:.9,a:.1})}
    else if(k==='donkey'){for(let i=0;i<4;i++){osc('square',i%2?190:420,t+i*.34,.3,.07*v,G.fx,{lp:1500,a:.04,to:i%2?170:380})}}
    else if(k==='goat'||k==='sheep'){osc('sawtooth',k==='goat'?420:330,t,.55,.08*v,G.fx,{lp:1900,vib:13,vibD:22,a:.04,to:k==='goat'?380:300});osc('sawtooth',k==='goat'?420:330,t,.55,.06*v,G.fx,{lp:1900,vib:13,vibD:22,a:.04})}
    else if(k==='mammoth'){osc('sawtooth',300,t,1.2,.16*v,G.fx,{lp:1800,to:520,toT:.35,a:.08,vib:6,vibD:14});osc('sawtooth',600,t,1.1,.06*v,G.fx,{lp:2600,to:1000,toT:.35,a:.08})}
    else if(k==='wolf'){osc('sine',380,t,2.4,.12*v,G.fx,{to:620,toT:.9,a:.4,vib:5,vibD:6})}
    else if(k==='dog'){for(let i=0;i<2;i++){osc('sawtooth',520,t+i*.22,.09,.1*v,G.fx,{lp:1400,to:300});noise(t+i*.22,.06,.05,'bandpass',900,2)}}
    else if(k==='ibis'||k==='bird'){for(let i=0;i<3;i++)osc('square',900+r()*200,t+i*.18,.07,.07*v,G.fx,{lp:2200,to:700})}
    else if(k==='giraffe'){osc('sine',90,t,1.2,.06*v,G.fx,{a:.3})}
    else if(k==='hart'){osc('sawtooth',260,t,.25,.07*v,G.fx,{lp:900,to:200});osc('sawtooth',250,t+.35,.25,.06*v,G.fx,{lp:900,to:190})}
    else if(k==='boar'||k==='pig'){for(let i=0;i<3;i++)noise(t+i*.15,.12,.35*v,'bandpass',380,2)}
    else if(k==='bear'){osc('sawtooth',90,t,1,.16*v,G.fx,{lp:400,to:60,a:.15,vib:11,vibD:8})}}
  const CALLRX=[[/hippo/i,'hippo'],[/crocodile/i,'croc'],[/\blions?\b/i,'lion'],[/aurochs|wild bull/i,'aurochs'],[/mammoth/i,'mammoth'],[/\bwol(f|ves)\b/i,'wolf'],[/\bdonkeys?\b|wild ass/i,'donkey'],[/hartebeest/i,'hart'],[/\bgoats?\b/i,'goat'],[/\bsheep\b/i,'sheep'],[/\bcattle\b|\bcows?\b|\bcalf\b/i,'cattle'],[/\bdogs?\b|puppy/i,'dog'],[/\bboars?\b|\bpigs?\b/i,'boar'],[/\bbears?\b/i,'bear'],[/\bibis/i,'ibis'],[/giraffe/i,'giraffe']];
  // ---------- event sounds ----------
  function sfx(k){if(!ac||mode===0)return;const t=now()+.02;
    if(k==='birth'){if(G.mus)G.mus.gain.setTargetAtTime(mode===2?.32:0,t,.5);musT=t+3;[0,4,7,12].forEach((s,i)=>pluck(392*Math.pow(2,s/12),t+i*.14,.32,G.fx,1))}
    else if(k==='big'){bell(784,t,.09);bell(1175,t+.16,.07)}
    else if(k==='sad'){osc('triangle',294,t,1.1,.09,G.fx,{a:.05,lp:1200});osc('triangle',247,t+.45,1.4,.08,G.fx,{a:.05,lp:1000})}
    else if(k==='it'){osc('sine',2350,t,.18,.1,G.fx);osc('sine',3520,t+.05,.22,.07,G.fx)}
    else if(k==='lg'){for(let i=0;i<6;i++)osc('sine',1320*Math.pow(2,[0,3,7,10,12,15][i]/12),t+i*.07,.9,.025,G.fx,{a:.02,vib:6,vibD:8})}
    else if(k==='ms'){[0,4,7,11,14].forEach((s,i)=>bell(659*Math.pow(2,s/12),t+i*.08,.045))}
    else if(k==='card'){noise(t,.22,.08,'bandpass',1800,1.4,G.fx,{to:600});pluck(523,t+.12,.18,G.fx,1)}
    else if(k==='pick'){pluck(784,t,.24,G.fx,1)}
    else if(k==='doom'){osc('sine',55,t,1.4,.28,G.fx,{a:.01,to:38});noise(t,1.2,.12,'lowpass',220,1,G.fx,{brown:1,a:.02})}
    else if(k==='death'){G.mus&&G.mus.gain.setTargetAtTime(0,t,.5);osc('sine',220,t,3.2,.12,G.fx,{a:.3,to:110,toT:3.2});bell(330,t+.9,.08);deadFade=t+4}}
  const DOOMRX=/\bflood|drought|famine|locusts?|\bwar\b|army|raid|plague|epidemic|eruption|volcan|earthquake|sack(s|ed)? |burn(s|ed)? |storms?\b|hunger|starv/i;
  let lastCall=0,lastFx=0;
  function onLog(x,c){if(!ac||mode===0||!x)return;const en=x.en||'',tn=now();
    if(tn-lastCall>1.6){for(const[rx,k]of CALLRX)if(rx.test(en)){call(k,.75);lastCall=tn;break}}
    if(tn-lastFx<.5)return;lastFx=tn;
    if(DOOMRX.test(en)&&c!=='it')sfx('doom');else if(c==='big'||c==='sad'||c==='it'||c==='lg')sfx(c)}
  // ---------- generative music, one voice per chapter ----------
  function musicKind(){if(!S)return null;if(S.chap===5||S.ch===5)return 'pac';if(S.ch===6)return 'egy';if(S.ch===4)return 'sum';if(S.ch===3)return 'neo';return 'stone'}
  const SCALE={stone:[0,3,5,7,10],neo:[0,2,5,7,9],sum:[0,2,3,7,8],egy:[0,1,4,5,7],pac:[0,2,4,7,9]},ROOT={stone:196,neo:220,sum:196,egy:207.65,pac:233.08};
  let mstep=0,drone=null;
  function music(k){const t=now()+.1,r=Math.random,sc=SCALE[k],root=ROOT[k];
    if(r()<.22){musT=ac.currentTime+6+r()*8;return}
    const n=2+(r()*4|0);let deg=(r()*5|0);
    for(let i=0;i<n;i++){deg=Math.max(0,Math.min(9,deg+((r()*3|0)-1)));const st=sc[deg%5]+12*Math.floor(deg/5),f=root*Math.pow(2,st/12),tt=t+i*(.42+r()*.3);
      if(k==='sum'||k==='egy')pluck(f,tt,.42,G.mus,k==='egy');
      else if(k==='neo')(i%2?pluck(f,tt,.32,G.mus,0):osc('sine',f*2,tt,.9,.07,G.mus,{a:.12,vib:5,vibD:3}));
      else if(k==='pac'){osc('sine',f/2,tt,.25,.18,G.mus,{a:.003,to:f/2*.97});if(r()<.4)osc('sine',f*2,tt+.1,1.1,.05,G.mus,{a:.2,vib:5,vibD:4})}
      else osc('sine',f*2,tt,.8+r()*.6,.07,G.mus,{a:.15,vib:4.5,vibD:5})}
    if(k==='egy'&&r()<.35)for(let i=0;i<5;i++)noise(t+i*.09,.05,.04,'highpass',6000,1,G.mus);
    if((k==='stone'||k==='neo')&&r()<.4)for(let i=0;i<2;i++)osc('sine',90,t+i*.5,.25,.16,G.mus,{a:.003,to:60});
    mstep++;musT=ac.currentTime+n*.6+2.5+r()*4}
  document.addEventListener('visibilitychange',()=>{if(!ac)return;if(document.hidden)ac.suspend().catch(()=>{});else if(mode>0)ac.resume().catch(()=>{})});
  ['pointerdown','keydown'].forEach(ev=>document.addEventListener(ev,()=>unlock(),{passive:true}));
  return{unlock,setMode,get mode(){return mode},scene,call,sfx,onLog,leave(){inPlay=false}}})();
