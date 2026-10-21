import sys
B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'CAREERS10' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)

rep("8:{old:5325,new:3325},","8:{old:5325,new:3325},10:{old:3750,new:3050},")
rep("function civ(ch){return ch===4||ch===6||ch===8}","function civ(ch){return ch===4||ch===6||ch===8||ch===10}")
rep("const CHSHOW={6:5,8:6,5:7};","const CHSHOW={6:5,8:6,10:7,5:8};")
rep("chap===8?CAREERS8:CAREERS,ccH=chap===4?chosenCar4:chap===6?chosenCar6:chap===8?chosenCar8:chosenCar;$('#carField').hidden=chap!==3&&chap!==4&&chap!==6&&chap!==8;",
    "chap===8?CAREERS8:chap===10?CAREERS10:CAREERS,ccH=chap===4?chosenCar4:chap===6?chosenCar6:chap===8?chosenCar8:chap===10?chosenCar10:chosenCar;$('#carField').hidden=chap!==3&&chap!==4&&chap!==6&&chap!==8&&chap!==10;")
rep("if(ccb){if(chap===8){","if(ccb){if(chap===10){chosenCar10=ccb.dataset.car;store.set('sit.car10',chosenCar10)}else if(chap===8){")
rep("function newLife(){const cc=chap===8?chosenCar8:","function newLife(){const cc=chap===10?chosenCar10:chap===8?chosenCar8:")
rep("const CS=chap===8?CAREERS8:","const CS=chap===10?CAREERS10:chap===8?CAREERS8:")
rep("  else if(chap===8){sp=SP.sap;const e8=pickEra8();ya=yaFor8(e8);rg=pickCity8(e8)}",
    "  else if(chap===8){sp=SP.sap;const e8=pickEra8();ya=yaFor8(e8);rg=pickCity8(e8)}\n  else if(chap===10){sp=SP.sap;const e10=pickEra10();ya=yaFor10(e10);rg=pickCity10(e10,ya)}")
rep("else if(chap===8)pw=pw8(rg,ya);","else if(chap===8)pw=pw8(rg,ya);else if(chap===10)pw=pw10(rg,ya);")
rep("  if(S.ch===8){init8();return}","  if(S.ch===8){init8();return}\n  if(S.ch===10){init10();return}")
rep("  if(R8[rg])return sp==='sap'&&!!R8[rg].pop[era8(ya)];","  if(R8[rg])return sp==='sap'&&!!R8[rg].pop[era8(ya)];\n  if(R10[rg])return sp==='sap'&&!!R10[rg].pop[era10(ya)];")
rep("const rn=r=>(S&&S.ch===8&&RNOTE8[r])||","const rn=r=>(S&&S.ch===10&&RNOTE10[r])||(S&&S.ch===8&&RNOTE8[r])||")
rep("if(S.ch===8)return L(S.age<13&&(A.c8||A.c)?(A.c8||A.c):(A.l8||A.l));","if(S.ch===10)return L(S.age<13&&(A.c10||A.c)?(A.c10||A.c):(A.l10||A.l));if(S.ch===8)return L(S.age<13&&(A.c8||A.c)?(A.c8||A.c):(A.l8||A.l));")
rep("if(S.ch===8&&!ACT8.includes(id))continue;let x=1;","if(S.ch===8&&!ACT8.includes(id))continue;if(S.ch===10&&!ACT10.includes(id))continue;let x=1;\n    if(S.ch===10){if(id==='herd'||id==='sow')x*=1.6;if(id==='school')x*=3;if(id==='write')x*=1.6;if(id==='fish'&&S.rg!=='myk')x*=1.4;if(id==='trade'&&['uga','enk'].includes(S.rg))x*=1.5}")
rep("else if(S.ch===8)trade8Year();else tradeYear();","else if(S.ch===8)trade8Year();else if(S.ch===10)trade10Year();else tradeYear();")
rep("S.ch===8?CARNOTE8:CARNOTE","S.ch===8?CARNOTE8:S.ch===10?CARNOTE10:CARNOTE",3)
rep("if(k==='weaver'&&S.sex==='f')s+=.5}return s};","if(k==='weaver'&&S.sex==='f')s+=.5}if(S.ch===10){if(k==='scribe'&&S.lit>=15)s+=2.5;if(k==='priest'&&S.cls==='elite')s+=1.5;if(k==='farmer'&&S.field)s+=.5;if(k==='sailor'&&['uga','enk','thr'].includes(S.rg))s+=1.2;if(k==='weaver'&&S.sex==='f')s+=.8;if(k==='perfumer'&&S.rg==='pyl')s+=1.5;if(k==='smith'&&S.rg==='enk')s+=1.2;if(k==='fisher'&&S.rg!=='myk')s+=.4}return s};")
rep("S&&S.ch===8?CAREERS8:CAREERS;","S&&S.ch===8?CAREERS8:S&&S.ch===10?CAREERS10:CAREERS;")
rep("v6Year(a);v8Year(a);","v6Year(a);v8Year(a);v10Year(a);")
rep("rollYear();nile6();mon8();","rollYear();nile6();mon8();rain10();")
rep("    log(S.ch===8?X('ลูกคนหนึ่งของคุณป่วยและจากไป","    log(S.ch===10?X('ลูกคนหนึ่งของคุณป่วยและจากไป ครอบครัววางร่างเล็กๆ ไว้ในไหดินเผาแล้วฝังใต้พื้นบ้าน','One of your children falls ill and dies. The family lays the little body in a clay jar and buries it beneath the floor.'):S.ch===8?X('ลูกคนหนึ่งของคุณป่วยและจากไป")
rep("    else log(S.ch===8?amb8():","    else log(S.ch===10?amb10():S.ch===8?amb8():")
rep("  if(S.ch===8)return title8(S);","  if(S.ch===8)return title8(S);\n  if(S.ch===10)return title10(S);")
rep("||(S.ch===8&&age===50&&era8(S.ya)==='late'&&REFL8L)||","||(S.ch===8&&age===50&&era8(S.ya)==='late'&&REFL8L)||(S.ch===10&&age===50&&['col','dark'].includes(era10(S.ya))&&REFL10L)||(S.ch===10&&REFLECT10[age])||")
rep("(S.ch===8&&D.x8)||D.x,","(S.ch===8&&D.x8)||(S.ch===10&&D.x10)||D.x,")
rep("  if(S.ch===8)return fun8Note(S);","  if(S.ch===8)return fun8Note(S);\n  if(S.ch===10)return fun10Note(S);")
rep("  if(S.ch===8){fun8Opts(S,o,done,lead);return o.slice(0,3)}","  if(S.ch===8){fun8Opts(S,o,done,lead);return o.slice(0,3)}\n  if(S.ch===10){fun10Opts(S,o,done,lead);return o.slice(0,3)}")
rep("  if(a<5&&S.ch===8)return L(","  if(a<5&&S.ch===10)return L(X('ครอบครัววางร่างเล็กๆ ของคุณไว้ในไหดินเผา แล้วฝังใต้พื้นบ้าน','Your family lays your small body in a clay jar and buries it beneath the house floor.'));\n  if(a<5&&S.ch===8)return L(")
rep("  if(S.ch===8)parts.push(fun8Text(S));","  if(S.ch===10)parts.push(fun10Text(S));\n  else if(S.ch===8)parts.push(fun8Text(S));")
rep("  if(S.ch===8){const i=c.findIndex(x=>x[0]==='predator');","  if(S.ch===10){const i=c.findIndex(x=>x[0]==='predator');if(i>=0)c[i][1]=.2;if(['sailor','fisher'].includes(S.car)||S.focus==='fish')c.push(['sea',1]);if(era10(S.ya)==='col'&&a>=14)c.push(['war10',1.6])}\n  if(S.ch===8){const i=c.findIndex(x=>x[0]==='predator');")
# scenes
rep("ind8:S.ch===8,","ind8:S.ch===8,aeg10:S.ch===10,vil10:S.ch===10&&S.rg==='aeg',myk10:S.ch===10&&S.rg==='myk',uga10:S.ch===10&&S.rg==='uga',thr10:S.ch===10&&S.rg==='thr',sea10:S.ch===10&&S.rg!=='myk',burn10:S.ch===10&&!!S.burn10,ani10:S.ch===10&&S.sc10a&&S.sc10a.age===S.age?S.sc10a.k:null,")
rep("  if(P.ind)drawIndus(ctx,gy,o,now);","  if(P.ind)drawIndus(ctx,gy,o,now);\n  if(P.aeg)drawAegean(ctx,gy,o,now);")
rep("  if(o.ind8&&st!=='baby'){","  if(o.aeg10&&st!=='baby'){const r10=drawAct10(ctx,o,act,gy,now,P);if(r10)return r10;if(['tablet','school','smith','market','march','read'].includes(act)){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}if(act==='weave'){const r8=drawAct8(ctx,o,act,gy,now,P);if(r8)return r8}}\n  if(o.ind8&&st!=='baby'){")
# draw card / tools / epilogue
rep("    ...(S.ch===8?[[esc(L(X('ยุค','Era'))),",
    "    ...(S.ch===10?[[esc(L(X('ยุค','Era'))),esc(L(ERA10[era10(S.ya0)].n))+'<br><span class=\"small num\">'+esc(L(X('ราว '+fmt(bce(S.ya0))+' ปีก่อนคริสตกาล','about '+fmt(bce(S.ya0))+' BCE')))+'</span>'],[esc(L(X('ฐานะ','Station'))),esc(L(CLS10[S.cls]))+'<br><span class=\"small\">'+esc(L(CLSNOTE10))+'</span>']]:[]),\n    ...(S.ch===8?[[esc(L(X('ยุค','Era'))),")
rep("[t('kName'),S.ch===8?","[t('kName'),S.ch===10?'“'+nmL(S.name)+'”<br><span class=\"small\">'+esc(L(NAMENOTE10))+'</span>':S.ch===8?")
rep("  if(S.ch===8){tech.push('<span class=\"tc\">'+esc(L(CLS8[S.cls]))+'</span>');",
    "  if(S.ch===10){tech.push('<span class=\"tc\">'+esc(L(CLS10[S.cls]))+'</span>');if(S.lit>=5)tech.push('<span class=\"tc\">'+esc(L(X('อ่านออกเขียนได้','literacy')))+' '+Math.round(S.lit)+'%</span>');if(S.tabN)tech.push('<span class=\"tc mam\">'+esc(L(X('แผ่นดินเหนียว','tablets')))+' ×'+S.tabN+'</span>');if(S.ag)tech.push('<span class=\"tc it\">'+esc(L(X('ของมีค่า','goods')))+' '+S.ag+'</span>');if(S.debt)tech.push('<span class=\"tc\">'+esc(L(X('หนี้','debt')))+' '+S.debt+'</span>')}\n  if(S.ch===8){tech.push('<span class=\"tc\">'+esc(L(CLS8[S.cls]))+'</span>');")
rep("  let epi=S.ch===8?epi8(S):","  let epi=S.ch===10?epi10(S):S.ch===8?epi8(S):")
rep("if(S.ch===8){$('#tabH').textContent=L(X('ตราประทับของคุณ','Your seal'));",
    "if(S.ch===10){if(S.tabN){$('#tabH').textContent=L(X('แผ่นดินเหนียวของคุณ','Your tablets'));$('#dTab').innerHTML='';$('#dTab').appendChild(tab10Block(S))}else $('#tabBlock').hidden=true}if(S.ch===8){$('#tabH').textContent=L(X('ตราประทับของคุณ','Your seal'));")
# home card, calendar, chapter names
rep("+card(8,'06','chInT','chInD',rng(8),clk(8),1)+card(5,'07','chPacT',","+card(8,'06','chInT','chInD',rng(8),clk(8),1)+card(10,'07','chAeT','chAeD',rng(10),clk(10),1)+card(5,'08','chPacT',")
rep("chInT:'ลุ่มแม่น้ำสินธุ: เมืองที่ถูกลืม',","chAeT:'ทะเลอีเจียน: จากวังมิโนอันถึงยุคสำริดล่มสลาย',chAeD:'วังไม่มีกำแพงบนเกาะครีต ภูเขาไฟเธรา บัญชีของวังไมซีเน เรือบรรทุกทองแดง แล้วโลกที่เชื่อมกันทั้งทะเลก็พังลงภายในไม่กี่สิบปี',chInT:'ลุ่มแม่น้ำสินธุ: เมืองที่ถูกลืม',")
rep("chInT:'The Indus: the forgotten cities',","chAeT:'The Aegean: from Minoan palaces to the Bronze Age collapse',chAeD:'Palaces without walls on Crete, the eruption of Thera, Mycenaean palace accounts, ships laden with copper, and then a whole connected world around the sea falling apart within a few decades.',chInT:'The Indus: the forgotten cities',")
# sim output
rep("    out.push({c8:","    out.push({c10:S.ch===10?{lit:S.lit|0,tab:S.tabN,baked:S.baked,cls:S.cls,burn:S.burn10,adapt:S.adapt10,gump:S.gump10,left:S.left10,saw:Object.keys(S.saw||{}).join(','),car:S.car,clv:S.clv,rg:S.rg,era:era10(S.ya0)}:null,c8:")
# faces
rep("const ind=F.ch===8,","const aeg=F.ch===10,ind=F.ch===8,")
rep("  else if(ind){cl=F.cls==='elite'?","  else if(aeg){cl=F.cls==='elite'?'#2f5f8f':F.cls==='slave'?'#cfc4ae':'#e6dcc6';cl2=F.cls==='elite'?'#b8463a':'#c8bca2'}\n  else if(ind){cl=F.cls==='elite'?")
rep("  else if(ind){H(hx-1,top-1,hw+2,4);","  else if(aeg){H(hx-1,top-1,hw+2,4);H(hx-2,top+2,3,kid?6:(F.sex==='f'?15:11));H(hx+hw-1,top+2,3,kid?6:(F.sex==='f'?15:11));if(!kid){for(let i=0;i<hw;i+=3)P(hx+i,top+1,1,1,shade(hair,.25));if(F.sex==='f'&&F.style>.5)P(hx-1,top,hw+2,1,'#2f5f8f')}}\n  else if(ind){H(hx-1,top-1,hw+2,4);")
rep("if(typeof R8!=='undefined'&&R8[rg])return [2,4];","if(typeof R8!=='undefined'&&R8[rg])return [2,4];if(typeof R10!=='undefined'&&R10[rg])return [3,5];")
# music
rep("if(S.ch===8)return 'ind';","if(S.ch===8)return 'ind';if(S.ch===10)return 'aeg';")
rep("ind:[0,2,3,7,9]},ROOT={ind:220,","ind:[0,2,3,7,9],aeg:[0,2,3,5,7]},ROOT={ind:220,aeg:196,")
rep("if(k==='sum'||k==='egy'||k==='ind')pluck(","if(k==='sum'||k==='egy'||k==='ind'||k==='aeg')pluck(")
# test hook
rep("window.__sitFn=n=>({epi8,fun8Note,fun8Text,title8})[n];","window.__sitFn=n=>({epi8,fun8Note,fun8Text,title8,epi10,fun10Note,fun10Text,title10})[n];")
# insert the Aegean block after the Indus block
blk=''.join(open(B+f,encoding='utf-8').read()+'\n' for f in ['v14a.js','v14b.js','v14c.js'])
blk+="DEC.push(...DEC_IN10,...DEC_CAR10);EV.push(...EV10);\nlet chosenCar10=store.get('sit.car10','');if(chosenCar10&&!CAREERS10[chosenCar10])chosenCar10='';\n"
k="let chosenCar8=store.get('sit.car8','');if(chosenCar8&&!CAREERS8[chosenCar8])chosenCar8='';\n"
rep(k,k+blk)
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
