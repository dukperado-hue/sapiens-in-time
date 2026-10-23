B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'CAREERS20' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)

# chapter registry
rep("18:{old:2289,new:1549},","18:{old:2289,new:1549},20:{old:2624,new:1875},")
rep("||ch===16||ch===18}","||ch===16||ch===18||ch===20}")
rep("18:11,5:12};","18:11,20:12,5:13};")
rep("chap===18?CAREERS18:CAREERS,ccH=","chap===18?CAREERS18:chap===20?CAREERS20:CAREERS,ccH=")
rep("chap===18?chosenCar18:chosenCar;","chap===18?chosenCar18:chap===20?chosenCar20:chosenCar;")
rep("&&chap!==16&&chap!==18;","&&chap!==16&&chap!==18&&chap!==20;")
rep("if(ccb){if(chap===18){","if(ccb){if(chap===20){chosenCar20=ccb.dataset.car;store.set('sit.car20',chosenCar20)}else if(chap===18){")
rep("const cc=chap===18?chosenCar18:","const cc=chap===20?chosenCar20:chap===18?chosenCar18:")
rep("const CS=chap===18?CAREERS18:","const CS=chap===20?CAREERS20:chap===18?CAREERS18:")
rep("  else if(chap===18){sp=SP.sap;const e18=pickEra18();ya=yaFor18(e18);rg=pickCity18(e18,ya)}",
    "  else if(chap===18){sp=SP.sap;const e18=pickEra18();ya=yaFor18(e18);rg=pickCity18(e18,ya)}\n  else if(chap===20){sp=SP.sap;const e20=pickEra20();ya=yaFor20(e20);rg=pickCity20(e20,ya)}")
rep("else if(chap===18)pw=pw18(rg,ya);","else if(chap===18)pw=pw18(rg,ya);else if(chap===20)pw=pw20(rg,ya);")
rep("  if(S.ch===18){init18();return}","  if(S.ch===18){init18();return}\n  if(S.ch===20){init20();return}")
rep("  if(R18[rg])return sp==='sap'&&!!R18[rg].pop[era18(ya)];","  if(R18[rg])return sp==='sap'&&!!R18[rg].pop[era18(ya)];\n  if(R20[rg])return sp==='sap'&&!!R20[rg].pop[era20(ya)];")
rep("const rn=r=>(S&&S.ch===18&&RNOTE18[r])||","const rn=r=>(S&&S.ch===20&&RNOTE20[r])||(S&&S.ch===18&&RNOTE18[r])||")
rep("if(S.ch===18)return L(S.age<13&&(A.c18||A.c)?(A.c18||A.c):(A.l18||A.l));","if(S.ch===20)return L(S.age<13&&(A.c20||A.c)?(A.c20||A.c):(A.l20||A.l));if(S.ch===18)return L(S.age<13&&(A.c18||A.c)?(A.c18||A.c):(A.l18||A.l));")
rep("if(S.ch===18&&!ACT18.includes(id))continue;let x=1;","if(S.ch===18&&!ACT18.includes(id))continue;if(S.ch===20&&!ACT20.includes(id))continue;let x=1;if(S.ch===20){if(id==='sow')x*=1.6;if(id==='temple')x*=1.3;if(id==='school')x*=1.2;if(id==='fish'&&['vid','tax'].includes(S.rg))x*=.2}")
rep("else if(S.ch===18)trade18Year();","else if(S.ch===18)trade18Year();else if(S.ch===20)trade20Year();")
rep("S.ch===18?CARNOTE18:CARNOTE","S.ch===18?CARNOTE18:S.ch===20?CARNOTE20:CARNOTE",3)
rep("if(k==='scribe'&&S.lit>=40)s+=1}","if(k==='scribe'&&S.lit>=40)s+=1}if(S.ch===20){if(k==='farmer'&&(S.field||S.rg==='vil'))s+=1.2;if(k==='priest')s+=1.5;if(k==='trader'&&town20(S))s+=.7;if(k==='potter')s+=.4;if(k==='samana')s-=.6;if(k==='mahout'&&['pat','rjg','klg'].includes(S.rg))s+=.5;if(k==='carver'&&['vid','tax','var'].includes(S.rg)&&S.ya<=2280)s+=.6}")
rep("S&&S.ch===18?CAREERS18:CAREERS;","S&&S.ch===18?CAREERS18:S&&S.ch===20?CAREERS20:CAREERS;")
rep("v16Year(a);v18Year(a);","v16Year(a);v18Year(a);v20Year(a);")
rep("    log(S.ch===18?X('ลูกคนหนึ่งของคุณป่วยและจากไป","    log(S.ch===20?X('ลูกคนหนึ่งของคุณป่วยและจากไป เด็กเล็กมักไม่ถูกเผา ครอบครัวจึงฝังร่างเล็กๆ ไว้ริมแม่น้ำ','One of your children falls ill and dies. Small children were usually not cremated, so the family buries the little body by the river.'):S.ch===18?X('ลูกคนหนึ่งของคุณป่วยและจากไป")
rep("    else log(S.ch===18?amb18():","    else log(S.ch===20?amb20():S.ch===18?amb18():")
rep("  if(S.ch===18)return title18(S);","  if(S.ch===18)return title18(S);\n  if(S.ch===20)return title20(S);")
rep("(S.ch===18&&REFLECT18[age])||","(S.ch===18&&REFLECT18[age])||(S.ch===20&&REFLECT20[age])||")
rep("(S.ch===18&&D.x18)||D.x,","(S.ch===18&&D.x18)||(S.ch===20&&D.x20)||D.x,")
rep("  if(S.ch===18)return fun18Note(S);","  if(S.ch===18)return fun18Note(S);\n  if(S.ch===20)return fun20Note(S);")
rep("  if(S.ch===18){fun18Opts(S,o,done,lead);return o.slice(0,3)}","  if(S.ch===18){fun18Opts(S,o,done,lead);return o.slice(0,3)}\n  if(S.ch===20){fun20Opts(S,o,done,lead);return o.slice(0,3)}")
rep("  if(a<5&&S.ch===18)return L(","  if(a<5&&S.ch===20)return L(X('เด็กเล็กมักไม่ถูกเผา ครอบครัวฝังร่างเล็กๆ ของคุณไว้ริมแม่น้ำ','Small children were usually not cremated. Your family buries your small body by the river.'));\n  if(a<5&&S.ch===18)return L(")
rep("  if(S.ch===18)parts.push(fun18Text(S));","  if(S.ch===20)parts.push(fun20Text(S));\n  else if(S.ch===18)parts.push(fun18Text(S));")
rep("  if(S.ch===18){const i=c.findIndex(x=>x[0]==='predator');",
    "  if(S.ch===20){const i=c.findIndex(x=>x[0]==='predator');if(i>=0)c[i][1]=.25;c.push(['fev20',.9]);if(S.field||S.rg==='vil'||S.car==='farmer')c.push(['snake20',.5]);if(S.car==='mahout'&&a>=16)c.push(['ele20',.7]);if(S.car==='mahout'&&a>=17&&a<50)c.push(['war20',1.2]);else if(S.sex==='m'&&a>=16&&a<50&&S.cls!=='slave'&&!S.monk20&&['jan','mag','aso'].includes(era20(S.ya)))c.push(['war20',.25])}\n  if(S.ch===18){const i=c.findIndex(x=>x[0]==='predator');")
# scene flags
rep("fall18:S.ch===18&&!!S.fall18,","fall18:S.ch===18&&!!S.fall18,gan20:S.ch===20,rg20:S.ch===20?S.rg:null,fall20:S.ch===20&&!!S.fall20,aso20:S.ch===20&&ya<=2275,ya20:S.ch===20?ya:0,monks20:S.ch===20&&ya<=2470&&S.seed%3!==0,sea20:S.ch===20&&S.rg==='klg',")
rep("  if(P.rom)drawRome(ctx,gy,o,now);","  if(P.rom)drawRome(ctx,gy,o,now);\n  if(P.gan)drawGanga(ctx,gy,o,now);")
rep("  if(o.rom18&&st!=='baby'){","  if(o.gan20&&st!=='baby'){const r20=drawAct20(ctx,o,act,gy,now,P);if(r20)return r20;if(['market','school','herb'].includes(act)){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}}\n  if(o.rom18&&st!=='baby'){")
# info rows, name, tags, epilogue, death tab
rep("    ...(S.ch===18?[[esc(L(X('ยุค','Era'))),",
    "    ...(S.ch===20?[[esc(L(X('ยุค','Era'))),esc(L(ERA20[era20(S.ya0)].n))+'<br><span class=\"small num\">'+esc(L(yr20(S.ya0)))+'</span><br><span class=\"small\">'+esc(L(CHRON20))+'</span>'],[esc(L(X('ฐานะ','Station'))),esc(L(var20(S)))+'<br><span class=\"small\">'+esc(L(VARNOTE20))+'</span>']]:[]),\n    ...(S.ch===18?[[esc(L(X('ยุค','Era'))),")
rep("[t('kName'),S.ch===18?","[t('kName'),S.ch===20?'“'+nmL(S.name)+'”<br><span class=\"small\">'+esc(L(nameNote20(S)))+'</span>':S.ch===18?")
rep("  if(S.ch===18){tech.push(",
    "  if(S.ch===20){tech.push('<span class=\"tc\">'+esc(L(var20(S)))+'</span>');if(S.met20&&S.met20.length)tech.push('<span class=\"tc mam\">'+esc(L(X('ได้พบหรือเป็นพยาน','met or witnessed')))+' ×'+S.met20.length+'</span>');if(S.don20)tech.push('<span class=\"tc mam\">'+esc(L(X('ชื่อบนราวสถูป','name on a stupa')))+'</span>');if((S.rec20||0)>=30)tech.push('<span class=\"tc\">'+esc(L(X('ผู้ทรงจำคำสอน','reciter')))+'</span>');if(S.ag)tech.push('<span class=\"tc it\">'+esc(L(X('กหาปณะ','karshapana')))+' '+S.ag+'</span>')}\n  if(S.ch===18){tech.push(")
rep("(S.ch===18?epi18(S):","(S.ch===20?epi20(S):S.ch===18?epi18(S):")
rep("$('#dTab').innerHTML='';if(S.ch===18){","$('#dTab').innerHTML='';if(S.ch===20){$('#tabH').textContent=L(X('ราวสถูปในยุคของคุณ','A stupa railing of your age'));$('#dTab').appendChild(rail20Block(S))}if(S.ch===18){")
# chapter card + UI text
rep("card(18,'11','chRoT','chRoD',rng(18),clk(18),1)+card(5,'12',","card(18,'11','chRoT','chRoD',rng(18),clk(18),1)+card(20,'12','chGaT','chGaD',rng(20),clk(20),1)+card(5,'13',")
rep("chRoT:'โรมัน","chGaT:'ลุ่มน้ำคงคา: ยุคพระพุทธเจ้า',chGaD:'เกิดในลุ่มแม่น้ำคงคาช่วงหกร้อยปี ตั้งแต่สิบหกแคว้นถึงการจารพระไตรปิฎก ใส่บาตรครูหลายสำนัก ทั้งพุทธ เชน อาชีวก และพราหมณ์ เลี้ยงนาคและยักษ์ ดูพระเจ้าอโศกสลักศิลาจารึก และดูว่าเรื่องเล่าเติบโตอย่างไรเมื่อถูกเล่าต่อ',chRoT:'โรมัน")
rep("chRoT:'Rome","chGaT:'The Ganges: the age of the Buddha',chGaD:'Be born in six hundred years of the Ganges valley, from the sixteen realms to the writing down of the scriptures. Feed teachers of many schools, Buddhist, Jain, Ajivika and Brahmin, leave milk for the nagas, watch Ashoka carve his edicts, and see how a story grows as it is retold.',chRoT:'Rome")
rep("<p>'+t('src18')+'</p>';","<p>'+t('src18')+'</p><p>'+t('src19')+'</p>';")
rep("src18:'บท 11","src19:'บท 12 ลุ่มน้ำคงคา: พระไตรปิฎกบาลี (ตามที่ระบุในเกม) คัมภีร์เชน ศิลาจารึกของพระเจ้าอโศก (ฉบับแปลของ E. Hultzsch) อาร์เรียนและสตราโบ (อ้างเมกัสเธนีส) ทีปวงศ์และมหาวงศ์ Richard Gombrich และ Heinz Bechert เรื่องปีของพระพุทธเจ้า A. L. Basham เรื่องอาชีวก Johannes Bronkhorst (Greater Magadha) Richard Salomon เรื่องคัมภีร์คันธาระ (หอสมุดอังกฤษ) และการขุดค้นที่สาญจี ภารหุต และปิปราห์วา',src18:'บท 11")
rep("src18:'Chapter 11","src19:'Chapter 12, the Ganges: the Pali canon (as named in the game), Jain scriptures, the edicts of Ashoka (E. Hultzsch’s edition), Arrian and Strabo (quoting Megasthenes), the Dipavamsa and Mahavamsa, Richard Gombrich and Heinz Bechert on the Buddha’s dates, A. L. Basham on the Ajivikas, Johannes Bronkhorst (Greater Magadha), Richard Salomon on the Gandharan scrolls (British Library), and the excavations at Sanchi, Bharhut and Piprahwa.',src18:'Chapter 11")
# sim output + test exports
rep("out.push({cx:(S.metX||[]).join(','),c18:","out.push({cx:(S.metX||[]).join(','),c20:S.ch===20?{met:(S.met20||[]).join(','),var:S.var20,cls:S.cls,rg:S.rg,path:S.path.join('>'),era:era20(S.ya0),car:S.car,clv:S.clv,monk:S.monk20,rec:S.rec20|0,don:S.don20,tell:S.tell20,fall:S.fall20,fa:faithList20(S).join(','),saw:Object.keys(S.saw||{}).join(',')}:null,c18:")
rep("epi18,fun18Note,","epi20,fun20Note,fun20Text,title20,rail20Canvas,nameNote20,gump20,drawGanga,epi18,fun18Note,")
# faces
rep("const rom=F.ch===18,","const gan=F.ch===20,rom=F.ch===18,")
rep("else if(rom){cl=","else if(gan){cl=F.cls==='slave'?'#b8ad94':'#efe9dc';cl2=F.cls==='elite'?'#b8463a':'#d8cfbc'}\n  else if(rom){cl=")
rep("if(typeof R18!=='undefined'&&R18[rg])return","if(typeof R20!=='undefined'&&R20[rg])return rg==='tax'?[3,5]:[2,4];if(typeof R18!=='undefined'&&R18[rg])return")
rep("if(S.ch===18)return [4,6];","if(S.ch===20)return [2,4];if(S.ch===18)return [4,6];")
# music + sound
rep("if(S.ch===18)return 'rom';","if(S.ch===18)return 'rom';if(S.ch===20)return 'gan';")
rep("rom:[0,2,4,5,7]},ROOT={","rom:[0,2,4,5,7],gan:[0,2,4,6,7]},ROOT={gan:196,")
rep("    rom:{mel:'pluck',alt:'brass',","    gan:{mel:'pluck',alt:'flute',dr:[1,0,1,1,0,1,0,0],df:140,drone:'reed'},\n    rom:{mel:'pluck',alt:'brass',")
rep("    if(k==='ind'&&r()<.5)","    if(k==='gan'&&r()<.45){osc('sine',root/2,t,n*.6+2,.05,G.mus,{a:.4});osc('sine',root*.75,t+.3,n*.6+1.5,.03,G.mus,{a:.4})}\n    if(k==='ind'&&r()<.5)")
rep("    embalm:(t,r)=>","    rice20:(t,r)=>{if(r()<.16)splash(t,.04)},pot20:(t,r)=>{if(r()<.15)osc('sine',120,t,1.2,.03,G.amb,{a:.2,vib:3,vibD:4})},fire20:(t,r)=>{if(r()<.08)voice(140,t,2,.04,G.amb,'o')},monk20:(t,r)=>{if(r()<.07)voice(125,t,1.8,.035,G.amb,'a')},\n    elephant20:(t,r)=>{if(r()<.03)osc('sawtooth',420,t,.9,.05,G.amb,{lp:1800,to:900,toT:.5,a:.05})},carve20:(t,r)=>{if(r()<.22)for(let i=0;i<3;i++)knock(t+i*.2,2000,.05)},\n    embalm:(t,r)=>")
rep("(o.rom18&&!['vil','gal','bri'].includes(rv))||","(o.rom18&&!['vil','gal','bri'].includes(rv))||(o.gan20&&!['vil','kap','anu','klg'].includes(o.rg20||''))||")
rep("arena,rom:!!o.rom18,","arena,peacock:!!o.gan20&&!night&&!wx.rain,rom:!!o.rom18,")
rep("    if(sc.act&&ACTFX[sc.act])ACTFX[sc.act](t,r);","    if(sc.peacock&&r()<.01){osc('sawtooth',650,t,.3,.04,G.amb,{lp:2400,to:1100,toT:.25});osc('sawtooth',1000,t+.35,.45,.035,G.amb,{lp:2400,to:700,toT:.4})}\n    if(sc.act&&ACTFX[sc.act])ACTFX[sc.act](t,r);")
# gump hook, names
rep("  if(!d&&S.ch===18)d=gump18(a);","  if(!d&&S.ch===18)d=gump18(a);\n  if(!d&&S.ch===20)d=gump20(a);")
rep("S.name=S.ch===18?mkName18(S):","S.name=S.ch===20?mkName20(S):S.ch===18?mkName18(S):")
rep("S.ch===18?gn18X(sx,k):null}","S.ch===18?gn18X(sx,k):S.ch===20?gn20X(sx):null}")
# the chapter itself
blk=''.join(open(B+f,encoding='utf-8').read()+'\n' for f in ['v21a.js','v21b.js','v21c.js','v21d.js'])
blk+="DEC.push(...DEC_IN20,...DEC_CAR20);EV.push(...EV20);FLOODR.push('pat','var','ves');DRYR.push('vid');\nconst CHRON20=X('ปีในบทนี้ใช้การประมาณของนักประวัติศาสตร์หลายคน ว่าพระพุทธเจ้าปรินิพพานราว 400 ปีก่อนคริสตกาล ส่วนพุทธศักราชของไทยนับจาก 543 ปีก่อนคริสตกาล ตามพงศาวดารลังกา นักวิชาการยังถกเถียงกัน ตัวเลขที่เสนอมีตั้งแต่ราว 480 ถึง 370 ปีก่อนคริสตกาล','Years in this chapter follow many historians’ estimate that the Buddha passed away around 400 BCE. The Thai Buddhist Era counts from 543 BCE, following the Lankan chronicles. Scholars still debate it; proposals run from about 480 to 370 BCE.');\nlet chosenCar20=store.get('sit.car20','');if(chosenCar20&&!CAREERS20[chosenCar20])chosenCar20='';\n"
k="let chosenCar18=store.get('sit.car18','');if(chosenCar18&&!CAREERS18[chosenCar18])chosenCar18='';\n"
rep(k,k+blk)
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
