F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'ENS20' in s:raise SystemExit('already')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:120]))
    s=s.replace(old,new)
# ---- instruments ----
rep("  function bell(f,t,peak,dest){[[1,1],[2.76,.35],[5.4,.15]].forEach(([m,a])=>osc('sine',f*m,t,1.6/m+.3,peak*a,dest,{a:.004}))}",
"""  function bell(f,t,peak,dest){[[1,1],[2.76,.35],[5.4,.15]].forEach(([m,a])=>osc('sine',f*m,t,1.6/m+.3,peak*a,dest,{a:.004}))}
  function flute(f,t,dur,peak,dest){osc('sine',f,t,dur,peak,dest,{a:.06,vib:5,vibD:f*.006});osc('triangle',f*2,t,dur*.8,peak*.12,dest,{a:.08});noise(t,dur*.7,peak*.25,'bandpass',f*2,6,dest,{a:.05})}
  function reed(f,t,dur,peak,dest){osc('sawtooth',f,t,dur,peak,dest,{a:.05,lp:1500,q:2,vib:5.5,vibD:f*.008});osc('sawtooth',f*1.004,t,dur,peak*.6,dest,{a:.07,lp:1100})}
  function brass(f,t,dur,peak,dest){osc('sawtooth',f*.97,t,dur,peak,dest,{a:.07,lp:1400,q:1.5,to:f,toT:.08});osc('square',f/2,t,dur,peak*.35,dest,{a:.09,lp:600})}
  function drum(t,f,peak,dest){osc('sine',f*1.6,t,.28,peak,dest,{a:.002,to:f,toT:.12});noise(t,.06,peak*.35,'lowpass',f*6,1,dest,{brown:1})}
  function shaker(t,peak,dest){noise(t,.07,peak,'highpass',5500,.8,dest,{a:.01})}
  function chime(f,t,peak,dest){[[1,1],[2.92,.4],[4.1,.2]].forEach(([m,a])=>osc('sine',f*m,t,.7/m+.15,peak*a,dest,{a:.002}))}
  function knock(t,f,peak){noise(t,.04,peak,'bandpass',f,3,G.amb);osc('sine',f*.5,t,.05,peak*.5,G.amb,{a:.001,to:f*.35})}
  function voice(f,t,dur,peak,dest,vow){const fm=vow==='o'?[450,800]:[700,1150];const s0=ac.createOscillator();s0.type='sawtooth';s0.frequency.value=f;const g=ac.createGain();
    for(const ff of fm){const b=ac.createBiquadFilter();b.type='bandpass';b.frequency.value=ff;b.Q.value=7;s0.connect(b);b.connect(g)}g.connect(dest||G.amb);env(g,t,.25,peak,dur);s0.start(t);s0.stop(t+dur+.4)}""")
# ---- ambience: richer scene flags ----
rep("    const sea=!!(P.sea||o.pac),riv=!!P.riv||!!o.egy,city=!!(o.city||(o.egy&&(o.pylon||o.pyr)));",
"""    const sea=!!(P.sea||o.pac),riv=!!P.riv||!!o.egy,rv=o.rg18||'',city=!!(o.city||(o.egy&&(o.pylon||o.pyr))||(o.rom18&&!['vil','gal','bri'].includes(rv))||(o.gre16&&!o.vil16&&!o.spa16)||P.aeg&&!o.vil),
      med=!!(o.gre16||P.aeg||(o.rom18&&!['bri','gal'].includes(rv))||o.egy),arena=act==='arena18';""")
rep("    setBed('crowd',city&&!night&&act!=='stars'?.22:0);",
    "    setBed('crowd',arena?.6:(city&&!night&&act!=='stars'?.22:0));")
rep("      murmur:city&&!night,hippo:!!o.egy,goats:(o.herd||[]).length>0&&!night,music:musicKind()};",
"""      murmur:city&&!night,hippo:!!o.egy,goats:(o.herd||[]).length>0&&!night,music:musicKind(),
      act,cicada:med&&!night&&!wx.rain&&!cold&&day>.6,gulls:sea&&!night&&!cold,rooster:tm>.2&&tm<.3&&(o.herd||[]).length>0,owl:night&&!city&&!sea,
      thunder:!!wx.rain&&!cold,carts:o.rom18&&rv==='rom'&&night,arena,rom:!!o.rom18,gre:!!o.gre16,hob:!!o.rom18};""")
# ---- per-tick sprinkles ----
rep("    if(sc.hippo&&r()<.012)call('hippo',.5);",
"""    if(sc.hippo&&r()<.012)call('hippo',.5);
    if(sc.cicada&&r()<.06){const f=5200+r()*900,n=6+(r()*10|0);for(let i=0;i<n;i++)osc('square',f,t+i*.035,.022,.008,G.amb,{lp:7000})}
    if(sc.gulls&&r()<.02){const f=1300+r()*400;for(let i=0;i<2+(r()*2|0);i++)osc('sawtooth',f,t+i*.28,.22,.025,G.amb,{lp:2600,to:f*.7,toT:.2})}
    if(sc.rooster&&r()<.03){const f=520;osc('sawtooth',f,t,.18,.05,G.amb,{lp:2200,to:f*1.4});osc('sawtooth',f*1.4,t+.2,.25,.05,G.amb,{lp:2200,to:f*1.6});osc('sawtooth',f*1.5,t+.48,.5,.045,G.amb,{lp:2000,to:f*1.1})}
    if(sc.owl&&r()<.012){osc('sine',380,t,.25,.05,G.amb,{a:.04,to:360});osc('sine',360,t+.45,.5,.05,G.amb,{a:.05,to:330})}
    if(sc.thunder&&r()<.012){noise(t,.15,.25,'highpass',900,.7,G.amb);noise(t+.05,3.2,.35,'lowpass',160,.8,G.amb,{brown:1,a:.3})}
    if(sc.carts&&r()<.05){for(let i=0;i<6;i++)knock(t+i*.12+r()*.04,180+r()*60,.06)}
    if(sc.arena&&r()<.08){noise(t,.6+r()*.6,.12,'bandpass',600+r()*300,1.2,G.amb,{a:.15});if(r()<.5)chime(2400+r()*600,t+.1,.05,G.amb)}
    if(sc.act&&ACTFX[sc.act])ACTFX[sc.act](t,r);""")
# activity sound effects
rep("  // ---------- scene → beds ----------",
"""  // ---------- what you are doing, as sound ----------
  const thud=(t,p)=>{noise(t,.09,p,'lowpass',260,1,G.amb,{brown:1});osc('sine',70,t,.1,p*.6,G.amb,{a:.002,to:45})};
  const splash=(t,p)=>noise(t,.35,p,'bandpass',1400,.8,G.amb,{a:.01,to:500});
  const scratch=(t,p)=>noise(t,.18,p,'highpass',3500,1.5,G.amb,{a:.02});
  const coins=(t,r)=>{for(let i=0;i<3;i++)chime(3200+r()*900,t+i*.07,.035,G.amb)};
  const steps=(t,n,gap,p,hob)=>{for(let i=0;i<n;i++){noise(t+i*gap,.05,p,'lowpass',420,1,G.amb,{brown:1});if(hob)chime(2600,t+i*gap,.015,G.amb)}};
  const ACTFX={
    sow:(t,r)=>{if(r()<.18)thud(t,.12)},garden:(t,r)=>{if(r()<.14)thud(t,.1)},canal:(t,r)=>{if(r()<.18){thud(t,.12);splash(t+.2,.03)}},spread:(t,r)=>{if(r()<.12)thud(t,.09)},
    fish:(t,r)=>{if(r()<.1)splash(t,.06)},marsh:(t,r)=>{if(r()<.1)splash(t,.05)},
    boat8:(t,r)=>{if(r()<.2)splash(t,.05)},boat10:(t,r)=>{if(r()<.2)splash(t,.05)},
    row16:(t,r)=>{if(r()<.2){splash(t,.07);drum(t,70,.05,G.amb)}},
    smith:(t,r)=>{if(r()<.25)for(let i=0;i<2;i++)chime(1900+r()*200,t+i*.3,.06,G.amb)},cast12:(t,r)=>{if(r()<.12)noise(t,.8,.06,'lowpass',500,1,G.amb,{brown:1})},
    build:(t,r)=>{if(r()<.2)for(let i=0;i<3;i++)knock(t+i*.28,900,.08)},build6:(t,r)=>{if(r()<.2)for(let i=0;i<2;i++)knock(t+i*.35,700,.07)},
    road18:(t,r)=>{if(r()<.22)for(let i=0;i<3;i++)knock(t+i*.25,1200+r()*300,.08)},
    carve14:(t,r)=>{if(r()<.25)for(let i=0;i<4;i++)knock(t+i*.16,2200,.05)},jade14:(t,r)=>{if(r()<.2)scratch(t,.03)},bead:(t,r)=>{if(r()<.2)scratch(t,.025)},
    knap:(t,r)=>{if(r()<.25)for(let i=0;i<2;i++)knock(t+i*.22,2800,.07)},craft:(t,r)=>{if(r()<.12)knock(t,1500,.05)},
    weave:(t,r)=>{if(r()<.25){knock(t,500,.06);knock(t+.4,450,.05)}},
    kiln:(t,r)=>{if(r()<.3)noise(t,.03,.12,'highpass',3000,.8,G.amb)},bake18:(t,r)=>{if(r()<.3)noise(t,.03,.12,'highpass',3000,.8,G.amb);if(r()<.04)call('donkey',.35)},
    brew:(t,r)=>{if(r()<.12)splash(t,.03)},full18:(t,r)=>{if(r()<.25)splash(t,.05)},
    vase16:(t,r)=>{if(r()<.15)osc('sine',110,t,1.2,.03,G.amb,{a:.2,vib:3,vibD:4})},
    school:(t,r)=>{if(r()<.18)scratch(t,.03)},tablet:(t,r)=>{if(r()<.18)knock(t,1600,.03)},read:(t,r)=>{if(r()<.1)scratch(t,.02)},papyrus:(t,r)=>{if(r()<.15)scratch(t,.025)},seal:(t,r)=>{if(r()<.12)knock(t,800,.04)},
    market:(t,r)=>{if(r()<.12)coins(t,r);if(r()<.06)voice(220+r()*120,t,.6,.03,G.amb)},market8:(t,r)=>{if(r()<.12)coins(t,r)},
    march:(t,r)=>{if(r()<.2)steps(t,4,.3,.08,sc.hob)},run:(t,r)=>{if(r()<.2)steps(t,6,.15,.06,0)},walk:(t,r)=>{if(r()<.25)steps(t,3,.45,.05,0)},
    herd:(t,r)=>{if(r()<.1)for(let i=0;i<3;i++)chime(1100+r()*150,t+i*.2,.025,G.amb)},
    hunt:(t,r)=>{if(r()<.05)osc('triangle',110,t,.25,.07,G.amb,{to:80,a:.002})},track:(t,r)=>{if(r()<.08)noise(t,.15,.04,'bandpass',900,1,G.amb)},
    temple:(t,r)=>{if(r()<.07){if(sc.rom||sc.gre)chime(880,t,.05,G.amb);else voice(150,t,1.6,.04,G.amb,'o')}},
    rite16:(t,r)=>{if(r()<.07)voice(165,t,1.8,.04,G.amb,'a')},ritual:(t,r)=>{if(r()<.12)drum(t,80,.07,G.amb)},
    rite8:(t,r)=>{if(r()<.1)drum(t,90,.06,G.amb)},rite10:(t,r)=>{if(r()<.1)shaker(t,.05,G.amb)},rite12:(t,r)=>{if(r()<.08)bell(330,t,.04,G.amb)},rite14:(t,r)=>{if(r()<.1)drum(t,110,.06,G.amb)},
    ball14:(t,r)=>{if(r()<.15)knock(t,300,.08)},arena18:(t,r)=>{if(r()<.2)for(let i=0;i<2;i++)chime(2500+r()*500,t+i*.18,.07,G.amb)},
    embalm:(t,r)=>{if(r()<.06)voice(140,t,1.4,.03,G.amb,'o')},heal:(t,r)=>{if(r()<.06)scratch(t,.02)}};
  // ---------- scene → beds ----------""")
# ---- ensembles: richer music per chapter ----
rep("  let mstep=0,drone=null;",
"""  let mstep=0,drone=null;
  // ENS20: which instruments each chapter's music uses. mel = melody, alt = answering voice, dr = drum pattern (1 = beat), fx = colour
  const ENS20={
    stone:{mel:'flute',dr:[1,0,0,1,0,0,1,0],df:70},
    neo:{mel:'flute',alt:'pluck',dr:[1,0,1,0,1,0,0,0],df:80},
    sum:{mel:'pluck',alt:'reed',dr:[1,0,0,1,0,1,0,0],df:85,drone:'reed'},
    egy:{mel:'pluck',alt:'flute',dr:[1,0,1,1,0,0,1,0],df:95,fx:'sistrum'},
    ind:{mel:'pluck',alt:'flute',dr:[1,0,1,0,1,1,0,1],df:120},
    aeg:{mel:'pluck',alt:'reed',dr:[1,0,0,0,1,0,0,0],df:90,fx:'sistrum'},
    sha:{mel:'bell',alt:'chime',dr:[1,0,0,0,1,0,0,0],df:60,drone:'flute'},
    olm:{mel:'flute',alt:'shaker',dr:[1,0,1,0,0,1,0,0],df:130,fx:'rattle'},
    gre:{mel:'pluck',alt:'reed',dr:[1,0,0,0,0,0,1,0],df:100},
    rom:{mel:'pluck',alt:'brass',dr:[1,0,1,0,1,0,1,1],df:90,fanfare:1},
    pac:{mel:'pac',alt:'flute',dr:[1,0,0,1,0,0,1,0],df:65}};
  function voiceN(kind,f,t,d){if(kind==='pluck')pluck(f,t,.42,G.mus,0);else if(kind==='flute')flute(f*2,t,d,.08,G.mus);else if(kind==='reed')reed(f,t,d,.05,G.mus);else if(kind==='bell')bell(f*2,t,.06,G.mus);else if(kind==='chime')chime(f*2,t,.07,G.mus);else if(kind==='brass')brass(f,t,d,.05,G.mus);else if(kind==='pac'){osc('sine',f/2,t,.25,.18,G.mus,{a:.003,to:f/2*.97})}}""")
rep("""    for(let i=0;i<n;i++){deg=Math.max(0,Math.min(9,deg+((r()*3|0)-1)));const st=sc[deg%5]+12*Math.floor(deg/5),f=root*Math.pow(2,st/12),tt=t+i*(.42+r()*.3);
      if(k==='sum'||k==='egy'||k==='ind'||k==='aeg'||k==='sha'||k==='gre'||k==='rom')pluck(f,tt,.42,G.mus,k==='egy');
      else if(k==='neo')(i%2?pluck(f,tt,.32,G.mus,0):osc('sine',f*2,tt,.9,.07,G.mus,{a:.12,vib:5,vibD:3}));
      else if(k==='pac'){osc('sine',f/2,tt,.25,.18,G.mus,{a:.003,to:f/2*.97});if(r()<.4)osc('sine',f*2,tt+.1,1.1,.05,G.mus,{a:.2,vib:5,vibD:4})}
      else osc('sine',f*2,tt,.8+r()*.6,.07,G.mus,{a:.15,vib:4.5,vibD:5})}""",
"""    const E=ENS20[k]||{mel:'pluck'},beat=.42+r()*.12,useAlt=E.alt&&r()<.45;
    if(E.drone&&r()<.35)voiceN(E.drone,root/2,t,n*beat+1.5);
    if(E.fanfare&&r()<.12){[0,4,7,12].forEach((st2,i)=>brass(root*Math.pow(2,st2/12),t+i*.22,i===3?.9:.2,.06,G.mus));musT=ac.currentTime+6+r()*6;return}
    for(let i=0;i<n;i++){deg=Math.max(0,Math.min(9,deg+((r()*3|0)-1)));const st=sc[deg%5]+12*Math.floor(deg/5),f=root*Math.pow(2,st/12),tt=t+i*beat;
      voiceN(useAlt&&i%2?E.alt:E.mel,f,tt,beat*1.6);
      if(k==='pac'&&r()<.4)osc('sine',f*2,tt+.1,1.1,.05,G.mus,{a:.2,vib:5,vibD:4})}
    if(E.dr&&r()<.6){const len=Math.max(8,n*2);for(let i=0;i<len;i++)if(E.dr[i%8])drum(t+i*beat/2,E.df*(i%4===0?1:1.35),i%4===0?.09:.05,G.mus)}
    if(E.fx==='sistrum'&&r()<.4)for(let i=0;i<4;i++)shaker(t+i*beat,.04,G.mus);
    if(E.fx==='rattle'&&r()<.5)for(let i=0;i<n*2;i++)shaker(t+i*beat/2,.03,G.mus);""")
rep("return{unlock,setMode,get mode(){return mode},scene,call,sfx,onLog,ode,odeStop,leave(){inPlay=false}}})();",
    "return{unlock,setMode,get mode(){return mode},scene,call,sfx,onLog,ode,odeStop,leave(){inPlay=false},_t:{music:k=>music(k),act:(k)=>{const t=now()+.05;for(let i=0;i<8;i++)ACTFX[k](t+i*.6,()=>.01)},keys:()=>Object.keys(ACTFX)}}})();")
open(F,'w',encoding='utf-8').write(s);print('ok')
