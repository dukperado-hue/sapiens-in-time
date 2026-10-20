import re,sys
D='/tmp/claude-0/-home-claude/88ad3b5f-5e3c-518f-8c01-435b4c3a595e/scratchpad/'
s=open(D+'work9.html',encoding='utf-8').read()
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:140]))
    s=s.replace(old,new)

rep("4:{old:5300,new:2560},","4:{old:5300,new:2560},6:{old:5100,new:3095},")
rep("const CSH=chap===4?CAREERS4:CAREERS,ccH=chap===4?chosenCar4:chosenCar;$('#carField').hidden=chap!==3&&chap!==4;",
    "const CSH=chap===4?CAREERS4:chap===6?CAREERS6:CAREERS,ccH=chap===4?chosenCar4:chap===6?chosenCar6:chosenCar;$('#carField').hidden=chap!==3&&chap!==4&&chap!==6;")
rep("if(ccb){if(chap===4){chosenCar4=ccb.dataset.car;store.set('sit.car4',chosenCar4)}else{",
    "if(ccb){if(chap===6){chosenCar6=ccb.dataset.car;store.set('sit.car6',chosenCar6)}else if(chap===4){chosenCar4=ccb.dataset.car;store.set('sit.car4',chosenCar4)}else{")
rep("const cc=chap===4?chosenCar4:chap===3?chosenCar:'';const CS=chap===4?CAREERS4:CAREERS;",
    "const cc=chap===6?chosenCar6:chap===4?chosenCar4:chap===3?chosenCar:'';const CS=chap===6?CAREERS6:chap===4?CAREERS4:CAREERS;")
rep("rg=pickCity4(e4)}","rg=pickCity4(e4)}\n  else if(chap===6){sp=SP.sap;const e6=pickEra6();ya=yaFor6(e6);rg=pickCity6(e6,ya)}")
rep("else if(chap===4)pw=pw4(rg,ya);","else if(chap===4)pw=pw4(rg,ya);else if(chap===6)pw=pw6(rg,ya);")
rep("S.name=S.ch===4?mkName4(S):mkName(S);","S.name=S.ch===4?mkName4(S):S.ch===6?mkName6(S):mkName(S);")
rep("  if(S.ch===4){init4();return}","  if(S.ch===4){init4();return}\n  if(S.ch===6){init6();return}")
rep("const n=S.ch===4?nm4X(","const n=S.ch===6?nm4X(genName6(S,k==='partner'?(S.sex==='f'?'m':'f'):(rnd()<.5?'m':'f'),era6(S.ya))):S.ch===4?nm4X(")
n=s.count("S.ch===3||S.ch===4");assert n==17,n
s=s.replace("S.ch===3||S.ch===4","S.ch===3||civ(S.ch)")
rep("S.ch!==3&&S.ch!==4","S.ch!==3&&!civ(S.ch)")
rep("  if(R4[rg])return sp==='sap'&&!!R4[rg].pop[era4(ya)];","  if(R4[rg])return sp==='sap'&&!!R4[rg].pop[era4(ya)];\n  if(R6[rg])return sp==='sap'&&!!R6[rg].pop[era6(ya)];")
rep("const rn=r=>(S&&S.ch===4&&RNOTE4[r])||","const rn=r=>(S&&S.ch===6&&RNOTE6[r])||(S&&S.ch===4&&RNOTE4[r])||")
rep("if(id==='job'&&S.car)return L((S.ch===4?CAREERS4:CAREERS)[S.car].l||X('ทำงานอาชีพ','Work at your trade'));if(S.ch===4)",
    "if(id==='job'&&S.car)return L(CARS()[S.car].l||X('ทำงานอาชีพ','Work at your trade'));if(S.ch===6)return L(S.age<13&&(A.c6||A.c)?(A.c6||A.c):(A.l6||A.l));if(S.ch===4)")
rep("if(S.ch===4&&!ACT4.includes(id))continue;let x=1;","if(S.ch===4&&!ACT4.includes(id))continue;if(S.ch===6&&!ACT6.includes(id))continue;let x=1;\n    if(S.ch===6){if(id==='herd'||id==='sow')x*=1.6;if(id==='school')x*=3.5;if(id==='write'||id==='read')x*=1.6;if(id==='brew'&&S.sex==='f')x*=1.4;if(id==='marsh'&&['del','fay'].includes(S.rg))x*=1.5}")
rep("if(S.ch===4)trade4Year();else tradeYear();","if(S.ch===4)trade4Year();else if(S.ch===6)trade6Year();else tradeYear();")
rep("S.ch===4?CARNOTE4:CARNOTE","S.ch===4?CARNOTE4:S.ch===6?CARNOTE6:CARNOTE",3)
rep("if(k==='farmer'&&S.field)s+=.5}return s};","if(k==='farmer'&&S.field)s+=.5}if(S.ch===6){if(k==='scribe'&&S.lit>=20)s+=2.5;if(k==='priest'&&S.cls==='elite')s+=1.5;if(k==='farmer'&&S.field)s+=.5;if(k==='fisher'&&S.rg==='del')s+=.8;if(k==='builder'&&(S.rg==='dem'||S.rg==='giz'))s+=2;if(k==='embalmer')s-=.7;if(k==='physician')s-=.4;if(k==='brewer')s+=.3}return s};")
rep("const CARS=()=>S&&S.ch===4?CAREERS4:CAREERS;","const CARS=()=>S&&S.ch===4?CAREERS4:S&&S.ch===6?CAREERS6:CAREERS;")
rep("carYear(a);v4Year(a);","carYear(a);v4Year(a);v6Year(a);")
rep("rollYear();if(a>=1)rollDisaster(a);","rollYear();nile6();if(a>=1)rollDisaster(a);")
rep("log(S.ch===4?X('ลูกคนหนึ่งของคุณป่วยและจากไป","log(S.ch===6?X('ลูกคนหนึ่งของคุณป่วยและจากไป ครอบครัวห่อร่างเล็กๆ ด้วยผ้าลินิน แล้วฝังไว้ในหม้อดินเผาใต้พื้นบ้าน','One of your children falls ill and dies. The family wraps the little body in linen and buries it in a pot beneath the house floor.'):S.ch===4?X('ลูกคนหนึ่งของคุณป่วยและจากไป")
rep("if(e.eg)S.gilg++;","if(e.eg)S.gilg++;if(e.es)S.sinu++;")
rep("else log(S.ch===4?amb4():","else log(S.ch===6?amb6():S.ch===4?amb4():")
rep("if(S.ch===4&&e.ch!==4&&!W4.has(e.id))return false;","if(civ(S.ch)&&e.ch!==S.ch&&!W4.has(e.id))return false;")
rep("  if(S.ch===4)return title4(S);","  if(S.ch===4)return title4(S);\n  if(S.ch===6)return title6(S);")
rep("((S.ch===4&&(ACTS[S.focus]||{}).scene4)||","((civ(S.ch)&&(ACTS[S.focus]||{})['scene'+S.ch])||")
rep("city:S.ch===4,era4:S.ch===4?era4(ya):null,",
    "city:S.ch===4,era4:S.ch===4?era4(ya):null,egy:S.ch===6,era6:S.ch===6?era6(ya):null,school:S.focus==='school',pyr:S.ch===6&&['giz','mem','del'].includes(S.rg)?(ya<=4560?2:(ya<=4614&&S.rg!=='del')?1:0):0,step:S.ch===6&&S.rg==='mem'&&ya<=4690&&ya>4614,pylon:S.ch===6&&['the','aby','ele','ama'].includes(S.rg)&&['mk','nk'].includes(era6(ya)),obel:S.rg==='the'&&S.ch===6&&era6(ya)==='nk',rocks:S.rg==='ele',tombs:S.ch===6&&['the','dem'].includes(S.rg),ani6:S.ch===6&&S.sc6a&&S.sc6a.age===S.age?S.sc6a.k:null,")
rep("  if(P.city)drawCity(ctx,gy,o,now);","  if(P.city)drawCity(ctx,gy,o,now);\n  if(P.egy)drawEgypt(ctx,gy,o,now);")
rep("  if(o.city&&st!=='baby'){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}",
    "  if(o.egy&&st!=='baby'){const r6=drawAct6(ctx,o,act,gy,now,P);if(r6)return r6;if(['brew','market','canal','march','smith'].includes(act)){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}}\n  if(o.city&&st!=='baby'){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}")
rep("  if(S.ch===3||civ(S.ch)){Object.keys(S.herd).filter(k=>S.herd[k]>0).forEach(",
    "  if(S.ch===6){tech.push('<span class=\"tc\">'+esc(L(CLS6[S.cls]))+'</span>');if(S.lit>=5)tech.push('<span class=\"tc\">'+esc(L(X('อ่านออกเขียนได้','literacy')))+' '+Math.round(S.lit)+'%</span>');if(S.papN)tech.push('<span class=\"tc mam\">'+esc(L(X('กระดาษปาปิรุส','papyri')))+' ×'+S.papN+'</span>');if(S.ag)tech.push('<span class=\"tc it\">'+esc(L(X('ของมีค่า','goods')))+' '+S.ag+' '+esc(L(X('เดเบน','deben')))+'</span>');if(S.debt)tech.push('<span class=\"tc\">'+esc(L(X('หนี้','debt')))+' '+S.debt+'</span>')}\n  if(S.ch===3||civ(S.ch)){Object.keys(S.herd).filter(k=>S.herd[k]>0).forEach(")
rep("    ...(S.ch===4?[[esc(L(X('ยุค','Era'))),",
    "    ...(S.ch===6?[[esc(L(X('ยุค','Era'))),esc(L(ERA6[era6(S.ya0)].n))+'<br><span class=\"small num\">'+esc(L(X('ราว '+fmt(bce(S.ya0))+' ปีก่อนคริสตกาล','about '+fmt(bce(S.ya0))+' BCE')))+'</span>'],[esc(L(X('ฐานะ','Station'))),esc(L(CLS6[S.cls]))+'<br><span class=\"small\">'+esc(L(CLSNOTE6))+'</span>']]:[]),\n    ...(S.ch===4?[[esc(L(X('ยุค','Era'))),")
rep("[t('kName'),S.ch===4?","[t('kName'),S.ch===6?'“'+nmL(S.name)+'” <span class=\"hie\">'+S.nm6.h+'</span><br><span class=\"small\">'+esc(L(S.nm6.mean))+' · '+esc(L(X('ลูกของ '+S.nm6.fa.th,'child of '+S.nm6.fa.l)))+'</span>':S.ch===4?")
rep("S.sp.id==='sap'&&S.chap===4?X(","S.sp.id==='sap'&&civ(S.chap)?X(")
rep("let epi=S.ch===4?epi4(S):","let epi=S.ch===6?epi6(S):S.ch===4?epi4(S):")
rep("$('#dCun').textContent=S.ch===4?S.nm4.c:'';$('#tabBlock').hidden=S.ch!==4;",
    "$('#dCun').textContent=S.ch===4?S.nm4.c:S.ch===6?S.nm6.h:'';$('#dCun').className=S.ch===6?'hie':'cun';$('#tabBlock').hidden=!civ(S.ch);if(S.ch===6){const T=papyrus6(S);$('#tabH').textContent=L(T.h);$('#dTab').innerHTML=papHTML(T)}")
rep("family=Noto+Sans+Cuneiform&","family=Noto+Sans+Cuneiform&family=Noto+Sans+Egyptian+Hieroglyphs&")
rep("\n.rec .cun{font-size:18px;color:var(--ember)}","\n.rec .cun{font-size:18px;color:var(--ember)}\n.hie{font-family:'Noto Sans Egyptian Hieroglyphs',serif;line-height:1.3}\n.rec .hie{font-size:18px;color:var(--ember)}\n#dCun.hie{font-size:28px}\n.tab4 .hie{font-size:24px}\n.tab4.pap6{background:#eadcb4;box-shadow:inset 0 0 0 2px #cdb98a;border-radius:3px 6px 4px 8px;background-image:repeating-linear-gradient(90deg,rgba(150,120,70,.08) 0 2px,transparent 2px 7px)}")
rep("card(4,'04','ch3t','ch3d',rng(4),clk(4),1)+card(5,'05','chPacT','chPacD',rng(5),clk(5),1,1)",
    "card(4,'04','ch3t','ch3d',rng(4),clk(4),1)+card(6,'05','chEgT','chEgD',rng(6),clk(6),1)+card(5,'06','chPacT','chPacD',rng(5),clk(5),1,1)")
rep("{k:'calWrite',y:5200,hi:chap===4}","{k:'calWrite',y:5200,hi:chap===4||chap===6}")
rep("ch3t:'เมโสโปเตเมีย: สุเมเรียนถึงบาบิโลน',","chEgT:'อียิปต์โบราณ: ชีวิตริมแม่น้ำไนล์',chEgD:'น้ำท่วมทุกปีกำหนดชีวิตของคุณ พีระมิด อักษรภาพ กระดาษปาปิรุส ฮิปโป จระเข้ และการชั่งหัวใจ คุณยังมีชีวิตอยู่ตราบที่ยังมีคนเอ่ยชื่อของคุณ',ch3t:'เมโสโปเตเมีย: สุเมเรียนถึงบาบิโลน',")
rep("ch3t:'Mesopotamia: from Sumer to Babylon',","chEgT:'Ancient Egypt: life on the Nile',chEgD:'The yearly flood rules your life. Pyramids, hieroglyphs, papyrus, hippos, crocodiles and the weighing of the heart. You live as long as your name is spoken.',ch3t:'Mesopotamia: from Sumer to Babylon',")
rep("  if(S.ch===4)return fun4Note(S);","  if(S.ch===6)return fun6Note(S);\n  if(S.ch===4)return fun4Note(S);")
rep("  if(S.ch===4){fun4Opts(S,o,done,lead);return o.slice(0,3)}","  if(S.ch===6){fun6Opts(S,o,done,lead);return o.slice(0,3)}\n  if(S.ch===4){fun4Opts(S,o,done,lead);return o.slice(0,3)}")
rep("  if(a<5&&S.ch===4)return L(","  if(a<5&&S.ch===6)return L(X('ครอบครัวห่อร่างเล็กๆ ของคุณด้วยผ้าลินิน แล้วฝังไว้ในหม้อดินเผาใต้พื้นบ้าน','Your family wraps your small body in linen and buries it in a pot beneath the house floor.'));\n  if(a<5&&S.ch===4)return L(")
rep("  if(S.ch===4)parts.push(fun4Text(S));","  if(S.ch===6)parts.push(fun6Text(S));\n  else if(S.ch===4)parts.push(fun4Text(S));")
rep("if(S.car==='soldier'&&a>=16&&a<50)c.push(['war',2.5])}return weighted(c)}",
    "if(S.car==='soldier'&&a>=16&&a<50)c.push(['war',2.5])}\n  if(S.ch===6){const i=c.findIndex(x=>x[0]==='predator');if(i>=0)c.splice(i,1);if(a>=3){c.push(['croc',['marsh','fish','herd'].includes(S.focus)?2:.6],['hippo',S.focus==='marsh'||S.focus==='fish'?1:.2],['scorp',.25])}if(S.car==='soldier'&&a>=16&&a<50)c.push(['war6',2])}return weighted(c)}")
rep("title:L((S.ch===4&&REFLECT4[age])||REFLECT[age])","title:L((S.ch===4&&REFLECT4[age])||(S.ch===6&&REFLECT6[age])||REFLECT[age])")
rep("out.push({c4:","out.push({c6:S.ch===6?{lit:S.lit|0,pap:S.papN,cls:S.cls,sinu:S.sinu,ag:S.ag,bod:S.bod,nameTab:S.nameTab,saw:Object.keys(S.saw||{}).join(','),car:S.car,clv:S.clv,rg:S.rg,era:era6(S.ya0),tomb:S.tomb}:null,c4:")
rep("log((S.ch===4&&D.x4)||D.x,","log((S.ch===4&&D.x4)||(S.ch===6&&D.x6)||D.x,")
rep("log(X(R3[S.rg].pred.th+'ลาก'","log(S.ch===6?(S.sc6a={k:'croc',age:S.age},X('จระเข้ลาก'+ANI[k].n.th+'ของคุณลงน้ำไป '+d+' ตัวตอนลงกินน้ำ','A crocodile drags '+d+' of your '+ANI[k].n.en+' into the river as they drink')):X(R3[S.rg].pred.th+'ลาก'")
rep("if(S.ya<=7800&&(S.herd.cattle||0)>=2&&S.field){fx({f:2});if(!S.oxN){","if(S.ya<=7800&&(S.herd.cattle||0)>=2&&S.field){fx({f:2});if(!S.oxN&&S.ch===3){")
# insert Egypt block after the v0.9 block
blk=open(D+'v10a.js',encoding='utf-8').read()+'\n'+open(D+'v10b.js',encoding='utf-8').read()+'\n'+open(D+'v10c.js',encoding='utf-8').read()
blk+="\nCAUSE.war6=X('สงครามในแดนไกล','a war in a far country');\nDEC.push(...DEC6,...DEC_CAR6);EV.push(...EV6);OUTDOOR.push('marsh','build6');\nlet chosenCar6=store.get('sit.car6','');if(chosenCar6&&!CAREERS6[chosenCar6])chosenCar6='';\n"
k="DIS.malaria.rg.push(...Object.keys(R4));\n"
rep(k,k+blk)
rep("const c=EV.filter((e,i)=>okEv(e,a)&&!(e.once&&S.done['e'+i]!=null));","const c=EV.filter((e,i)=>okEv(e,a)&&!(e.once&&S.done['e'+i]!=null)&&!(civ(S.ch)&&!e.f&&S.done['e'+i]!=null&&a-S.done['e'+i]<7));")
rep("if(d){S.done[d.id]=a;await decide(d);","if(d){S.done[d.id]=a;if(S.ch===6)ani6Mark(d,S);await decide(d);")
open(D+'work10.html','w',encoding='utf-8').write(s)
print('ok',len(s))
