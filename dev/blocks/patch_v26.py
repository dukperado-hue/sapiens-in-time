B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'function area26' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)

# ---- bug fixes from the tester's report ----
rep("log(S.settled?X('คุณเกิดที่'+S.R.n.th+' ในหมู่บ้านเล็กๆ",
    "log(S.settled&&civ(S.ch)&&S.rg!=='vil'?X('คุณเกิดที่'+S.R.n.th,'You are born in '+S.R.n.en+'.'):S.settled?X('คุณเกิดที่'+S.R.n.th+' ในหมู่บ้านเล็กๆ")
rep("const c0=pickCause0(a);return S.R.pac&&c0==='predator'?'sea':c0}",
    "const c0=pickCause0(a);if(c0==='old'&&(civ(S.ch)||S.settled))return 'old26';return S.R.pac&&c0==='predator'?'sea':c0}")
rep("log(X('จากไปด้วย'+CAUSE[S.cause].th,'Died of '+CAUSE[S.cause].en),null,'sad');",
    "log(X('จากไปด้วย'+CAUSE[S.cause].th.replace(/^ป่วยด้วย(โรค)?/,'โรค'),'Died of '+CAUSE[S.cause].en),null,'sad');")
rep("{id:'e8_signs',deck:'elder',w:3,ch:8,a:[45,85],","{id:'e8_signs',deck:'elder',w:3,ch:8,a:[45,85],cond:S=>era8(S.ya)!=='early',")
rep("{id:'k18_legion',a:[18,50],","{id:'k18_legion',a:[38,60],")
rep("ms(X('ค้นพบและตั้งถิ่นฐานที่'+REGIONS[r].n.th,'Discovered and settled '+REGIONS[r].n.en));\n    return X(",
    "ms(X('ค้นพบและตั้งถิ่นฐานที่'+REGIONS[r].n.th,'Discovered and settled '+REGIONS[r].n.en));\n    if(r==='bis')return X('ในเช้าวันที่เก้า เห็นควันไฟลอยขึ้นจากชายฝั่ง เกาะนี้มีคนอยู่มาก่อนแล้วหลายหมื่นปี พวกเขาพูดภาษาที่คุณไม่รู้จัก แต่ยอมแลกเผือกกับเครื่องปั้นดินเผาของคุณ','On the ninth morning you see smoke rising from the shore. People have lived on these islands for tens of thousands of years. They speak a language you do not know, but they trade taro for your pottery.');\n    return X(")
rep("f:S.fr.length})","f:S.fr.length}).replace(S.fr.length?'@@':/ · [^·]*$/,'')")

# ---- fame bias in the draw ----
rep("    rg=weighted(regs(sp,chap).filter(([r])=>valid(sp.id,r,ya)));}\n  if(chap===5)pw=",
    "    rg=weighted(regs(sp,chap).filter(([r])=>valid(sp.id,r,ya)));}\n  if(!(SIB&&SIB.chap===chap)&&!cont){const f26=fame26(chap,ya,rg);if(f26){ya=f26[0];rg=f26[1]}}\n  if(chap===5)pw=")
rep("  if(!d&&[4,6,8,10,12,14].includes(S.ch))d=gumpX(a);",
    "  if(!d&&[4,6,8,10,12,14].includes(S.ch))d=gumpX(a);\n  if(d&&isFame26(d)){S.fame26=(S.fame26||0)+1;if(!TEST)SND.ui('fame')}")
# ---- ten seconds with your hands ----
rep("  if(made&&rnd()<.5)log(X('ทำ'+INV[made].n.th","  if(!d&&craftDue26(a))await craft26(a);\n  if(made&&rnd()<.5)log(X('ทำ'+INV[made].n.th")
rep("gan20:S.ch===20,","gan20:S.ch===20,made26:S.made26&&S.age-S.made26.a<7?S.made26:null,")
rep("  // night\n  ctx.fillStyle='rgba(6,8,26,'","  drawMade26(ctx,o,gy);\n  // night\n  ctx.fillStyle='rgba(6,8,26,'")
rep("out.push({cx:(S.metX||[]).join(','),","out.push({f26:S.fame26|0,made26:S.made26?S.made26.k+S.made26.q:'',cx:(S.metX||[]).join(','),")
# ---- birth card rows ----
rep("    [t('kOdds'),'<span class=\"odds\">'+oddsStr()","    ...rows26(S),\n    [t('kOdds'),'<span class=\"odds\">'+oddsStr()")

# ---- sound: UI blips and recorded animals ----
SNDBLK=r"""  // ---------- v0.26 UI blips + recorded animals (CC0 / CC BY files in sfx/) ----------
  let lastUi=0;
  function ui(k){if(!ac||mode===0)return;const t=now()+.01,tn=now();
    if(k==='tick'){if(tn-lastUi<.06)return;lastUi=tn;osc('square',1250,t,.035,.03,G.fx,{lp:4000,to:900,toT:.035,a:.001})}
    else if(k==='ting'){osc('sine',1760,t,.35,.09,G.fx,{a:.002});osc('sine',2637,t+.06,.4,.06,G.fx,{a:.002})}
    else if(k==='ching'){[0,7,12,19].forEach((s,i)=>osc('square',988*Math.pow(2,s/12),t+i*.05,.12,.03,G.fx,{lp:5000,a:.002}));chime(2093,t+.22,.06,G.fx)}
    else if(k==='fame'){[0,4,7,12].forEach((s,i)=>brass(262*Math.pow(2,s/12),t+i*.12,i===3?.6:.16,.05,G.fx));bell(1047,t+.5,.05)}
    else if(k==='miss'){osc('triangle',180,t,.16,.12,G.fx,{to:110,a:.002});noise(t,.08,.08,'lowpass',400,1,G.fx,{brown:1})}
    else if(k==='hit'){pluck(1046,t,.3,G.fx,1);osc('sine',2093,t,.15,.05,G.fx)}}
  const SMP={};
  function sample(name,v){if(!ac||mode===0)return;const b=SMP[name];if(b===0||b===1)return;if(b){play(b,v);return}SMP[name]=1;
    fetch((window.__SFX||'dev/assets/sfx/')+name+'.ogg').then(r=>{if(!r.ok)throw 0;return r.arrayBuffer()}).then(x=>new Promise((ok,no)=>ac.decodeAudioData(x,ok,no))).then(buf=>{SMP[name]=buf;play(buf,v)}).catch(()=>{SMP[name]=0})}
  function play(buf,v){const s=ac.createBufferSource();s.buffer=buf;s.playbackRate.value=.95+Math.random()*.1;const g=ac.createGain(),t=now()+.02,dur=Math.min(buf.duration,5),off=buf.duration>6?Math.random()*(buf.duration-dur):0;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+(off?.25:.01));g.gain.setValueAtTime(v,t+Math.max(.02,dur-.6));g.gain.linearRampToValueAtTime(0,t+dur);
    const p=ac.createStereoPanner?ac.createStereoPanner():null;s.connect(g);if(p){p.pan.value=Math.random()*1.2-.6;g.connect(p);p.connect(G.fx)}else g.connect(G.fx);s.start(t,off,dur)}
  let nextAni=0;
  function ani26(o){if(!inPlay||!o||typeof pickAni26!=='function')return;const tn=now();if(tn<nextAni)return;nextAni=tn+6+Math.random()*9;
    const c=pickAni26(o,sc);if(c)sample(c[0],c[1])}
"""
rep("  return{unlock,setMode,thunder,setVol,",SNDBLK+"  return{ui,sample,unlock,setMode,thunder,setVol,")
rep("setTimeout(()=>call(k,.9),700)}}","setTimeout(()=>call(k,.9),700)}if(isPlay)ani26(o)}")

rep("+'</p><p>'+t('src21')+'</p>';","+'</p><p>'+t('src21')+'</p><p>'+esc(L(X('เสียงสัตว์และเสียงธรรมชาติ: ไฟล์บันทึกเสียง CC0/สาธารณสมบัติจาก Freesound และแหล่งอื่น (รายชื่อเต็มใน dev/assets/sfx/credits.json) · ใช้ภายใต้ CC BY 3.0:','Animal and nature sounds: CC0 / public-domain recordings from Freesound and others (full list in dev/assets/sfx/credits.json). Used under CC BY 3.0:')))+' Donkey braying — Garuda1982; Horse whinny — GoodListener; Bear growl — tbsounddesigns; Sheep bleat — Blender Foundation (via VoxeLibre).</p>';")
# ---- chapter titles ----
T=[("ch1t","มนุษย์หลายสายพันธุ์","ยุคมนุษย์หลายเผ่าพันธุ์: เมื่อเรายังไม่ได้อยู่ลำพัง","Many kinds of human","Many kinds of human: when we were not alone"),
 ("chMamT","นักล่าแมมมอธ","ยุคน้ำแข็ง: นักล่าแมมมอธและภาพบนผนังถ้ำ","Mammoth hunters","The Ice Age: mammoth hunters and painted caves"),
 ("ch2t","การปฏิวัติเกษตร","ปฏิวัติเกษตร: จากเก็บของป่าสู่ไร่นาแรกของโลก","The farming revolution","The farming revolution: from foraging to the first fields"),
 ("ch3t","เมโสโปเตเมีย: สุเมเรียนถึงบาบิโลน","เมโสโปเตเมีย: อักษรลิ่ม เบียร์ และกฎหมายฮัมมูราบี","Mesopotamia: from Sumer to Babylon","Mesopotamia: cuneiform, beer and the laws of Hammurabi"),
 ("chEgT","อียิปต์โบราณ: ชีวิตริมแม่น้ำไนล์","อียิปต์: ชีวิตใต้เงาพีระมิดริมแม่น้ำไนล์","Ancient Egypt: life on the Nile","Egypt: life by the Nile in the shadow of the pyramids"),
 ("chInT","ลุ่มแม่น้ำสินธุ: เมืองที่ถูกลืม","สินธุ: มหานครที่ยังไม่มีใครอ่านภาษาออก","The Indus: the forgotten cities","The Indus: great cities whose script no one can read"),
 ("chAeT","ทะเลอีเจียน: จากวังมิโนอันถึงยุคสำริดล่มสลาย","อีเจียน: วังมิโนอัน ภูเขาไฟเธรา และวันที่ยุคสำริดล่ม","The Aegean: from Minoan palaces to the Bronze Age collapse","The Aegean: Minoan palaces, the Thera eruption and the Bronze Age collapse"),
 ("chShT","จีนราชวงศ์ซาง: กระดูกเสี่ยงทาย","จีนซาง: กระดองเต่าที่ถามบรรพบุรุษ","Shang China: the oracle bones","Shang China: turtle shells that question the ancestors"),
 ("chOlT","โอลเมก: หัวหินยักษ์แห่งแดนยาง","โอลเมก: หัวหินยักษ์และลูกบอลยาง","The Olmec: colossal heads of the rubber land","The Olmec: colossal stone heads and rubber balls"),
 ("chGrT","กรีก: จากโฮเมอร์ถึงโรม","กรีก: จากโฮเมอร์ ประชาธิปไตย ถึงวันที่โรมมา","The Greeks: from Homer to Rome","The Greeks: from Homer and democracy to the coming of Rome"),
 ("chGaT","ลุ่มน้ำคงคา: ยุคพระพุทธเจ้า","ลุ่มน้ำคงคา: ยุคพระพุทธเจ้าและพระเจ้าอโศก","The Ganges: the age of the Buddha","The Ganges: the age of the Buddha and Ashoka"),
 ("chSuT","สุวรรณภูมิ: จากฟูนันถึงสุโขทัย","สุวรรณภูมิ: ฟูนัน ทวารวดี ศรีเทพ ถึงสุโขทัย","Suvarnabhumi: from Funan to Sukhothai","Suvarnabhumi: Funan, Dvaravati and Si Thep to Sukhothai"),
 ("chIsT","โลกมุสลิม: จากแบกแดดถึงมองโกล","ยุคทองอิสลาม: แบกแดด หอแห่งปัญญา ถึงทัพมองโกล","The Islamic world: Baghdad to the Mongols (Thai only)","The Islamic golden age: Baghdad, the House of Wisdom and the Mongols (Thai only)"),
 ("chPacT","นักเดินเรือแปซิฟิก","นักเดินเรือแปซิฟิก: อ่านดาวข้ามมหาสมุทร","Pacific voyagers","Pacific voyagers: reading the stars across the ocean"),
 ("chJT","ออกจากแอฟริกา: สายเลือดนักเดินทาง","ออกจากแอฟริกา: สายเลือดนักเดินทาง 60,000 ปี","Out of Africa: a line of travellers","Out of Africa: a 60,000-year line of travellers")]
for k,th0,th1,en0,en1 in T:
    rep(k+":'"+th0+"'",k+":'"+th1+"'")
    rep(k+":'"+en0.replace("'","\\'")+"'",k+":'"+en1.replace("'","\\'")+"'")

blk=open(B+'v26.js',encoding='utf-8').read()+'\n'
blk+="document.addEventListener('pointerdown',e=>{const b=e.target&&e.target.closest&&e.target.closest('button,.card,[role=button],select');if(b&&!b.closest('#craft26')&&typeof SND!=='undefined')SND.ui('tick')},true);\n"
rep("function fig(ctx,x,y,o){",blk+"function fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
