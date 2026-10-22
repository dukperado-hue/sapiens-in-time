B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'CAREERS14' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)

rep("12:{old:3625,new:2975},","12:{old:3625,new:2975},14:{old:3525,new:2275},")
rep("||ch===10||ch===12}","||ch===10||ch===12||ch===14}")
rep("const CHSHOW={6:5,8:6,10:7,12:8,5:9};","const CHSHOW={6:5,8:6,10:7,12:8,14:9,5:10};")
rep("chap===12?CAREERS12:CAREERS,ccH=","chap===12?CAREERS12:chap===14?CAREERS14:CAREERS,ccH=")
rep("chap===12?chosenCar12:chosenCar;$('#carField').hidden=","chap===12?chosenCar12:chap===14?chosenCar14:chosenCar;$('#carField').hidden=")
rep("&&chap!==10&&chap!==12;","&&chap!==10&&chap!==12&&chap!==14;")
rep("if(ccb){if(chap===12){","if(ccb){if(chap===14){chosenCar14=ccb.dataset.car;store.set('sit.car14',chosenCar14)}else if(chap===12){")
rep("const cc=chap===12?chosenCar12:","const cc=chap===14?chosenCar14:chap===12?chosenCar12:")
rep("const CS=chap===12?CAREERS12:","const CS=chap===14?CAREERS14:chap===12?CAREERS12:")
rep("  else if(chap===12){sp=SP.sap;const e12=pickEra12();ya=yaFor12(e12);rg=pickCity12(e12,ya)}",
    "  else if(chap===12){sp=SP.sap;const e12=pickEra12();ya=yaFor12(e12);rg=pickCity12(e12,ya)}\n  else if(chap===14){sp=SP.sap;const e14=pickEra14();ya=yaFor14(e14);rg=pickCity14(e14,ya)}")
rep("else if(chap===12)pw=pw12(rg,ya);","else if(chap===12)pw=pw12(rg,ya);else if(chap===14)pw=pw14(rg,ya);")
rep("  if(S.ch===12){init12();return}","  if(S.ch===12){init12();return}\n  if(S.ch===14){init14();return}")
rep("  if(R12[rg])return sp==='sap'&&!!R12[rg].pop[era12(ya)];","  if(R12[rg])return sp==='sap'&&!!R12[rg].pop[era12(ya)];\n  if(R14[rg])return sp==='sap'&&!!R14[rg].pop[era14(ya)];")
rep("const rn=r=>(S&&S.ch===12&&RNOTE12[r])||","const rn=r=>(S&&S.ch===14&&RNOTE14[r])||(S&&S.ch===12&&RNOTE12[r])||")
rep("if(S.ch===12)return L(S.age<13&&(A.c12||A.c)?(A.c12||A.c):(A.l12||A.l));","if(S.ch===14)return L(S.age<13&&(A.c14||A.c)?(A.c14||A.c):(A.l14||A.l));if(S.ch===12)return L(S.age<13&&(A.c12||A.c)?(A.c12||A.c):(A.l12||A.l));")
rep("if(S.ch===12&&!ACT12.includes(id))continue;let x=1;","if(S.ch===12&&!ACT12.includes(id))continue;if(S.ch===14&&!ACT14.includes(id))continue;let x=1;\n    if(S.ch===14){if(id==='sow')x*=1.6;if(id==='fish'&&S.rg!=='chal')x*=1.5;if(id==='herd')x*=.5}")
rep("else if(S.ch===12)trade12Year();else tradeYear();","else if(S.ch===12)trade12Year();else if(S.ch===14)trade14Year();else tradeYear();")
n=s.count("S.ch===12?CARNOTE12:CARNOTE");assert n>=1;s=s.replace("S.ch===12?CARNOTE12:CARNOTE","S.ch===12?CARNOTE12:S.ch===14?CARNOTE14:CARNOTE")
rep("if(k==='carver'&&S.rg==='yin')s+=.6}","if(k==='carver'&&S.rg==='yin')s+=.6}if(S.ch===14){if(k==='sculptor'&&(S.sclOK||['slz','lav','tz'].includes(S.rg)))s+=S.sclOK?2.5:1;if(k==='farmer'&&S.field)s+=.5;if(k==='fisher'&&S.rg!=='chal')s+=.5;if(k==='jade'&&S.cls==='dep')s+=1;if(k==='rubber'&&['slz','vil'].includes(S.rg))s+=.6;if(k==='trader'&&S.rg==='chal')s+=1;if(k==='shaman'&&S.kn>30)s+=.6}")
rep("S&&S.ch===12?CAREERS12:CAREERS;","S&&S.ch===12?CAREERS12:S&&S.ch===14?CAREERS14:CAREERS;")
rep("v10Year(a);v12Year(a);","v10Year(a);v12Year(a);v14Year(a);")
rep("rain10();rain12();","rain10();rain12();rain14();")
rep("    log(S.ch===12?X('ลูกคนหนึ่งของคุณป่วยและจากไป","    log(S.ch===14?X('ลูกคนหนึ่งของคุณป่วยและจากไป ครอบครัวฝังร่างเล็กๆ ไว้ใต้พื้นบ้าน พร้อมลูกปัดหยกหนึ่งเม็ด','One of your children falls ill and dies. The family buries the little body beneath the house floor with a single jade bead.'):S.ch===12?X('ลูกคนหนึ่งของคุณป่วยและจากไป")
rep("    else log(S.ch===12?amb12():","    else log(S.ch===14?amb14():S.ch===12?amb12():")
rep("  if(S.ch===12)return title12(S);","  if(S.ch===12)return title12(S);\n  if(S.ch===14)return title14(S);")
rep("||(S.ch===12&&REFLECT12[age])||","||(S.ch===12&&REFLECT12[age])||(S.ch===14&&REFLECT14[age])||")
rep("(S.ch===12&&D.x12)||D.x,","(S.ch===12&&D.x12)||(S.ch===14&&D.x14)||D.x,")
rep("  if(S.ch===12)return fun12Note(S);","  if(S.ch===12)return fun12Note(S);\n  if(S.ch===14)return fun14Note(S);")
rep("  if(S.ch===12){fun12Opts(S,o,done,lead);return o.slice(0,3)}","  if(S.ch===12){fun12Opts(S,o,done,lead);return o.slice(0,3)}\n  if(S.ch===14){fun14Opts(S,o,done,lead);return o.slice(0,3)}")
rep("  if(a<5&&S.ch===12)return L(","  if(a<5&&S.ch===14)return L(X('ครอบครัวฝังร่างเล็กๆ ของคุณไว้ใต้พื้นบ้าน ให้คุณอยู่ใกล้ทุกคนต่อไป','Your family buries your small body beneath the house floor, so you can stay close to everyone.'));\n  if(a<5&&S.ch===12)return L(")
rep("  if(S.ch===12)parts.push(fun12Text(S));","  if(S.ch===14)parts.push(fun14Text(S));\n  else if(S.ch===12)parts.push(fun12Text(S));")
rep("  if(S.ch===12){const i=c.findIndex(x=>x[0]==='predator');","  if(S.ch===14){const i=c.findIndex(x=>x[0]==='predator');if(i>=0)c[i][1]=.35;if(S.haul14&&a>=15)c.push(['haul14',.3])}\n  if(S.ch===12){const i=c.findIndex(x=>x[0]==='predator');")
# scenes
rep("ani12:S.ch===12&&S.sc12a&&S.sc12a.age===S.age?S.sc12a.k:null,","ani12:S.ch===12&&S.sc12a&&S.sc12a.age===S.age?S.sc12a.k:null,olm14:S.ch===14,vil14:S.ch===14&&S.rg==='vil',tux14:S.ch===14&&S.rg==='tux',lav14:S.ch===14&&S.rg==='lav',chal14:S.ch===14&&S.rg==='chal',fall14:S.ch===14&&!!S.fall14,ani14:S.ch===14&&S.sc14a&&S.sc14a.age===S.age?S.sc14a.k:null,")
rep("  if(P.shang)drawShang(ctx,gy,o,now);","  if(P.shang)drawShang(ctx,gy,o,now);\n  if(P.olm)drawOlmec(ctx,gy,o,now);")
rep("  if(o.shang12&&st!=='baby'){","  if(o.olm14&&st!=='baby'){const r14=drawAct14(ctx,o,act,gy,now,P);if(r14)return r14;if(['march','market'].includes(act)){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}}\n  if(o.shang12&&st!=='baby'){")
# draw card / tools / epilogue
rep("    ...(S.ch===12?[[esc(L(X('ยุค','Era'))),",
    "    ...(S.ch===14?[[esc(L(X('ยุค','Era'))),esc(L(ERA14[era14(S.ya0)].n))+'<br><span class=\"small num\">'+esc(L(X('ราว '+fmt(bce(S.ya0))+' ปีก่อนคริสตกาล','about '+fmt(bce(S.ya0))+' BCE')))+'</span>'],[esc(L(X('ฐานะ','Station'))),esc(L(CLS14[S.cls]))+'<br><span class=\"small\">'+esc(L(CLSNOTE14))+'</span>']]:[]),\n    ...(S.ch===12?[[esc(L(X('ยุค','Era'))),")
rep("[t('kName'),S.ch===12?","[t('kName'),S.ch===14?'“'+nmL(S.name)+'”<br><span class=\"small\">'+esc(L(NAMENOTE14))+'</span>':S.ch===12?")
rep("  if(S.ch===12){tech.push('<span class=\"tc\">'+esc(L(cls12(S)))+'</span>');",
    "  if(S.ch===14){tech.push('<span class=\"tc\">'+esc(L(CLS14[S.cls]))+'</span>');if(S.headN||S.headP)tech.push('<span class=\"tc mam\">'+esc(L(X('หัวหินยักษ์','colossal heads')))+' ×'+S.headN+(S.headP?' (+'+Math.round(S.headP)+'%)':'')+'</span>');if(S.ag)tech.push('<span class=\"tc it\">'+esc(L(X('ของมีค่า','goods')))+' '+S.ag+'</span>');if(S.debt)tech.push('<span class=\"tc\">'+esc(L(X('หนี้','debt')))+' '+S.debt+'</span>')}\n  if(S.ch===12){tech.push('<span class=\"tc\">'+esc(L(cls12(S)))+'</span>');")
rep("(S.ch===12?epi12(S):","(S.ch===14?epi14(S):S.ch===12?epi12(S):")
rep("$('#dTab').innerHTML='';if(S.ch===12){","$('#dTab').innerHTML='';if(S.ch===14){if(S.headN||S.haul14){$('#tabH').textContent=L(S.headN?X('หัวหินยักษ์ของคุณ','Your colossal head'):X('หัวที่คุณช่วยลากหิน','The head you helped haul'));$('#dTab').appendChild(head14Block(S))}else $('#tabBlock').hidden=true}if(S.ch===12){")
# home card, chapter names
rep("+card(12,'08','chShT','chShD',rng(12),clk(12),1)+card(5,'09','chPacT',","+card(12,'08','chShT','chShD',rng(12),clk(12),1)+card(14,'09','chOlT','chOlD',rng(14),clk(14),1)+card(5,'10','chPacT',")
rep("chShT:'จีนราชวงศ์ซาง:","chOlT:'โอลเมก: หัวหินยักษ์แห่งแดนยาง',chOlD:'ลากหินบะซอลต์หนักหลายสิบตันโดยไม่มีล้อและไม่มีสัตว์ลาก สลักหน้าผู้ปกครอง เจอสมเสร็จ เสือจากัวร์ และลิงฮาวเลอร์ แล้วดูว่าทำไมทวีปนี้ถึงไม่มีม้าและวัว',chShT:'จีนราชวงศ์ซาง:")
rep("chShT:'Shang China:","chOlT:'The Olmec: colossal heads of the rubber land',chOlD:'Drag basalt boulders of tens of tons with no wheels and no draft animals, carve a ruler’s face, meet tapirs, jaguars and howler monkeys, and find out why this continent had no horses or oxen.',chShT:'Shang China:")
# sources
rep("<p>'+t('src15')+'</p>';","<p>'+t('src15')+'</p><p>'+t('src16')+'</p>';")
rep("src15:'บท 08 จีนซาง","src16:'บท 09 โอลเมก: Richard A. Diehl (The Olmecs) Ann Cyphers (ซานลอเรนโซ) Ponciano Ortiz และ María del Carmen Rodríguez (เอลมานาตี และก้อนหินกัสกาฮัล, Science 2006) งานศึกษาลูกบอลยางปี 2024 และพิพิธภัณฑ์มานุษยวิทยาแห่งฮาลาปา แนวคิดเรื่องภูมิศาสตร์ สัตว์เลี้ยง และเชื้อโรค มาจากงานด้านประวัติศาสตร์สิ่งแวดล้อมหลายชิ้น',src15:'บท 08 จีนซาง")
rep("src15:'Chapter 08, Shang China","src16:'Chapter 09, Olmec: Richard A. Diehl (The Olmecs), Ann Cyphers (San Lorenzo), Ponciano Ortiz and María del Carmen Rodríguez (El Manatí and the Cascajal block, Science 2006), the 2024 rubber-ball study, and the Museum of Anthropology in Xalapa. Ideas about geography, domestic animals and disease draw on many works of environmental history.',src15:'Chapter 08, Shang China")
# sim output, test hook
rep("    out.push({c12:","    out.push({c14:S.ch===14?{head:S.headN,haul:S.haul14,cls:S.cls,fall:S.fall14,gump:S.gump14,ani:S.ani14,saw:Object.keys(S.saw||{}).join(','),car:S.car,clv:S.clv,rg:S.rg,era:era14(S.ya0)}:null,c12:")
rep("title12,bone12Canvas})[n];","title12,bone12Canvas,epi14,fun14Note,fun14Text,title14,head14Canvas})[n];")
# faces
rep("const sha=F.ch===12,","const olm=F.ch===14,sha=F.ch===12,")
rep("  else if(sha){cl=F.cls==='elite'?","  else if(olm){cl=F.cls==='elite'?'#3f8a6a':'#e6dcc6';cl2=F.cls==='elite'?'#c9953a':'#c8bca2'}\n  else if(sha){cl=F.cls==='elite'?")
rep("  else if(sha){H(hx-1,top-1,hw+2,4);","  else if(olm){H(hx-1,top-1,hw+2,3);if(!kid&&F.cls==='elite'){P(hx-1,top-2,hw+2,2,'#c9953a');P(hx+(hw>>1)-1,top-4,2,2,'#4fae8a')}}\n  else if(sha){H(hx-1,top-1,hw+2,4);")
rep("if(typeof R12!=='undefined'&&R12[rg])return [2,4];","if(typeof R12!=='undefined'&&R12[rg])return [2,4];if(typeof R14!=='undefined'&&R14[rg])return [3,5];")
# music
rep("if(S.ch===12)return 'sha';","if(S.ch===12)return 'sha';if(S.ch===14)return 'olm';")
rep("sha:[0,2,4,7,9]},ROOT={","sha:[0,2,4,7,9],olm:[0,3,5,7,10]},ROOT={olm:220,")
# insert the Olmec block after the Shang block (before the kid-text guard)
blk=''.join(open(B+f,encoding='utf-8').read()+'\n' for f in ['v17a.js','v17b.js','v17c.js'])
blk+="DEC.push(...DEC_IN14,...DEC_CAR14);EV.push(...EV14);\nlet chosenCar14=store.get('sit.car14','');if(chosenCar14&&!CAREERS14[chosenCar14])chosenCar14='';\n"
k="let chosenCar12=store.get('sit.car12','');if(chosenCar12&&!CAREERS12[chosenCar12])chosenCar12='';\n"
rep(k,k+blk)
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
