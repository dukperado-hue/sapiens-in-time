import sys
B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'CAREERS8' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)

rep("6:{old:5100,new:3095},","6:{old:5100,new:3095},8:{old:5325,new:3325},")
rep("function civ(ch){return ch===4||ch===6}","function civ(ch){return ch===4||ch===6||ch===8}")
# home: career chips
rep("const CSH=chap===4?CAREERS4:chap===6?CAREERS6:CAREERS,ccH=chap===4?chosenCar4:chap===6?chosenCar6:chosenCar;$('#carField').hidden=chap!==3&&chap!==4&&chap!==6;",
    "const CSH=chap===4?CAREERS4:chap===6?CAREERS6:chap===8?CAREERS8:CAREERS,ccH=chap===4?chosenCar4:chap===6?chosenCar6:chap===8?chosenCar8:chosenCar;$('#carField').hidden=chap!==3&&chap!==4&&chap!==6&&chap!==8;")
rep("if(ccb){if(chap===6){","if(ccb){if(chap===8){chosenCar8=ccb.dataset.car;store.set('sit.car8',chosenCar8)}else if(chap===6){")
rep("function newLife(){const cc=chap===6?chosenCar6:chap===4?chosenCar4:chap===3?chosenCar:'';const CS=chap===6?CAREERS6:",
    "function newLife(){const cc=chap===8?chosenCar8:chap===6?chosenCar6:chap===4?chosenCar4:chap===3?chosenCar:'';const CS=chap===8?CAREERS8:chap===6?CAREERS6:")
rep("  else if(chap===6){sp=SP.sap;const e6=pickEra6();ya=yaFor6(e6);rg=pickCity6(e6,ya)}",
    "  else if(chap===6){sp=SP.sap;const e6=pickEra6();ya=yaFor6(e6);rg=pickCity6(e6,ya)}\n  else if(chap===8){sp=SP.sap;const e8=pickEra8();ya=yaFor8(e8);rg=pickCity8(e8)}")
rep("else if(chap===6)pw=pw6(rg,ya);","else if(chap===6)pw=pw6(rg,ya);else if(chap===8)pw=pw8(rg,ya);")
rep("S.name=S.ch===4?mkName4(S):S.ch===6?mkName6(S):mkName(S);","S.name=S.ch===4?mkName4(S):S.ch===6?mkName6(S):S.ch===8?mkName8(S):mkName(S);")
rep("  if(S.ch===6){init6();return}","  if(S.ch===6){init6();return}\n  if(S.ch===8){init8();return}")
rep("  if(R6[rg])return sp==='sap'&&!!R6[rg].pop[era6(ya)];","  if(R6[rg])return sp==='sap'&&!!R6[rg].pop[era6(ya)];\n  if(R8[rg])return sp==='sap'&&!!R8[rg].pop[era8(ya)];")
rep("const rn=r=>(S&&S.ch===6&&RNOTE6[r])||","const rn=r=>(S&&S.ch===8&&RNOTE8[r])||(S&&S.ch===6&&RNOTE6[r])||")
rep("if(S.ch===6)return L(S.age<13&&(A.c6||A.c)?(A.c6||A.c):(A.l6||A.l));","if(S.ch===8)return L(S.age<13&&(A.c8||A.c)?(A.c8||A.c):(A.l8||A.l));if(S.ch===6)return L(S.age<13&&(A.c6||A.c)?(A.c6||A.c):(A.l6||A.l));")
rep("if(S.ch===6&&!ACT6.includes(id))continue;let x=1;","if(S.ch===6&&!ACT6.includes(id))continue;if(S.ch===8&&!ACT8.includes(id))continue;let x=1;\n    if(S.ch===8){if(id==='herd'||id==='sow')x*=1.6;if(id==='school')x*=3;if(id==='write')x*=1.6;if(id==='temple')x*=1.2;if(id==='fish'&&['moh','lot'].includes(S.rg))x*=1.4}")
rep("else if(S.ch===6)trade6Year();else tradeYear();","else if(S.ch===6)trade6Year();else if(S.ch===8)trade8Year();else tradeYear();")
rep("S.ch===6?CARNOTE6:CARNOTE","S.ch===6?CARNOTE6:S.ch===8?CARNOTE8:CARNOTE",3)
rep("if(k==='brewer')s+=.3}return s};","if(k==='brewer')s+=.3}if(S.ch===8){if(k==='seal'&&S.sig>=15)s+=2;if(k==='merchant'&&S.cls==='elite')s+=1.5;if(k==='ritual'&&S.cls==='elite')s+=1;if(k==='farmer'&&S.field)s+=.5;if(k==='bead'&&S.rg==='lot')s+=1.5;if(k==='boatman'&&['moh','lot'].includes(S.rg))s+=.6;if(k==='weaver'&&S.sex==='f')s+=.5}return s};")
rep("const CARS=()=>S&&S.ch===4?CAREERS4:S&&S.ch===6?CAREERS6:CAREERS;","const CARS=()=>S&&S.ch===4?CAREERS4:S&&S.ch===6?CAREERS6:S&&S.ch===8?CAREERS8:CAREERS;")
rep("v4Year(a);v6Year(a);","v4Year(a);v6Year(a);v8Year(a);")
rep("rollYear();nile6();if(a>=1)rollDisaster(a);","rollYear();nile6();mon8();if(a>=1)rollDisaster(a);")
rep("    log(S.ch===6?X('ลูกคนหนึ่งของคุณป่วยและจากไป","    log(S.ch===8?X('ลูกคนหนึ่งของคุณป่วยและจากไป ครอบครัวฝังร่างเล็กๆ ไว้พร้อมหม้อดินเผาใบเล็ก','One of your children falls ill and dies. The family buries the little body with a small clay pot.'):S.ch===6?X('ลูกคนหนึ่งของคุณป่วยและจากไป")
rep("    else log(S.ch===6?amb6():","    else log(S.ch===8?amb8():S.ch===6?amb6():")
rep("  if(S.ch===6)return title6(S);","  if(S.ch===6)return title6(S);\n  if(S.ch===8)return title8(S);")
rep("||(S.ch===6&&REFLECT6[age])||","||(S.ch===6&&REFLECT6[age])||(S.ch===8&&REFLECT8[age])||")
rep("(S.ch===6&&D.x6)||D.x,","(S.ch===6&&D.x6)||(S.ch===8&&D.x8)||D.x,")
# funerals and deaths
rep("  if(S.ch===6)return fun6Note(S);","  if(S.ch===6)return fun6Note(S);\n  if(S.ch===8)return fun8Note(S);")
rep("  if(S.ch===6){fun6Opts(S,o,done,lead);return o.slice(0,3)}","  if(S.ch===6){fun6Opts(S,o,done,lead);return o.slice(0,3)}\n  if(S.ch===8){fun8Opts(S,o,done,lead);return o.slice(0,3)}")
rep("  if(a<5&&S.ch===6)return L(","  if(a<5&&S.ch===8)return L(X('ครอบครัวฝังร่างเล็กๆ ของคุณไว้ใต้พื้นบ้าน พร้อมหม้อดินเผาใบเล็กและกำไลเปลือกหอย','Your family buries your small body beneath the house floor, with a little clay pot and a shell bangle.'));\n  if(a<5&&S.ch===6)return L(")
rep("  if(S.ch===6)parts.push(fun6Text(S));","  if(S.ch===8)parts.push(fun8Text(S));\n  else if(S.ch===6)parts.push(fun6Text(S));")
rep("if(S.car==='soldier'&&a>=16&&a<50)c.push(['war6',2])}return weighted(c)}",
    "if(S.car==='soldier'&&a>=16&&a<50)c.push(['war6',2])}\n  if(S.ch===8){const i=c.findIndex(x=>x[0]==='predator');if(i>=0)c.splice(i,1);if(a>=3)c.push(['croc',['fish','herd'].includes(S.focus)?1.2:.4],['tiger',S.focus==='herd'?.5:.15])}return weighted(c)}")
rep("    log(S.ch===6?(S.sc6a={k:'croc',age:S.age},","    log(S.ch===8?(S.sc8a={k:'tiger',age:S.age},X('เสือลาก'+ANI[k].n.th+'ของคุณไป '+d+' ตัวตอนกลางคืน','A tiger drags off '+d+' of your '+ANI[k].n.en+' in the night')):S.ch===6?(S.sc6a={k:'croc',age:S.age},")
# scenes
rep("egy:S.ch===6,era6:S.ch===6?era6(ya):null,",
    "egy:S.ch===6,era6:S.ch===6?era6(ya):null,ind8:S.ch===8,vil8:S.ch===8&&S.rg==='vil',cit8:S.ch===8&&['moh','har','dho','kal','rak'].includes(S.rg),bath8:S.ch===8&&S.rg==='moh'&&era8(ya)!=='early',dho8:S.ch===8&&S.rg==='dho',ani8:S.ch===8&&S.sc8a&&S.sc8a.age===S.age?S.sc8a.k:null,")
rep("  if(P.egy)drawEgypt(ctx,gy,o,now);","  if(P.egy)drawEgypt(ctx,gy,o,now);\n  if(P.ind)drawIndus(ctx,gy,o,now);")
rep("  if(o.city&&st!=='baby'){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}",
    "  if(o.ind8&&st!=='baby'){const r8=drawAct8(ctx,o,act,gy,now,P);if(r8)return r8;if(['market','smith'].includes(act)){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}}\n  if(o.city&&st!=='baby'){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}")
# beasts: humped cattle and buffalo
rep("barb:'#b88a5a',gazelle:'#b98b52',deer:'#7a5236'}[k]||'#6e4a2c';\n  const big=k==='cattle'||k==='banteng';",
    "barb:'#b88a5a',gazelle:'#b98b52',deer:'#7a5236',zebu:young?'#b8ab98':'#cfc6b6',buffalo:young?'#4a4446':'#2e2a2c'}[k]||'#6e4a2c';\n  const big=k==='cattle'||k==='banteng'||k==='zebu'||k==='buffalo';")
rep("  if(k==='banteng')R(x-bw/2,y-3,bw,1,'#e9e1cf');",
    "  if(k==='banteng')R(x-bw/2,y-3,bw,1,'#e9e1cf');\n  if(k==='zebu'&&!young){R(x+(dir>0?bw/2-3:-bw/2+1),y-3-bh,2,1,C);R(x+(dir>0?bw/2-2:-bw/2+1),y-4-bh,1,1,C)}\n  if(k==='buffalo'&&!young){R(hx-1,y-4-bh,4,1,'#4a4446');R(hx-2,y-3-bh,1,1,'#4a4446');R(hx+3,y-3-bh,1,1,'#4a4446')}")
# draw card / tools / epilogue
rep("    ...(S.ch===6?[[esc(L(X('ยุค','Era'))),",
    "    ...(S.ch===8?[[esc(L(X('ยุค','Era'))),esc(L(ERA8[era8(S.ya0)].n))+'<br><span class=\"small num\">'+esc(L(X('ราว '+fmt(bce(S.ya0))+' ปีก่อนคริสตกาล','about '+fmt(bce(S.ya0))+' BCE')))+'</span>'],[esc(L(X('ฐานะ','Station'))),esc(L(CLS8[S.cls]))+'<br><span class=\"small\">'+esc(L(CLSNOTE8))+'</span>']]:[]),\n    ...(S.ch===6?[[esc(L(X('ยุค','Era'))),")
rep("[t('kName'),S.ch===6?","[t('kName'),S.ch===8?'“'+nmL(S.name)+'”<br><img class=\"seal8i\" alt=\"\" src=\"'+sealCanvas8(S.seal8,64).toDataURL()+'\"><br><span class=\"small\">'+esc(L(NAMENOTE8))+'</span>':S.ch===6?")
rep("  if(S.ch===6){tech.push('<span class=\"tc\">'+esc(L(CLS6[S.cls]))+'</span>');",
    "  if(S.ch===8){tech.push('<span class=\"tc\">'+esc(L(CLS8[S.cls]))+'</span>');if(S.sig>=5)tech.push('<span class=\"tc\">'+esc(L(X('รู้ตัวอักษร','signs known')))+' '+Math.round(S.sig)+'%</span>');if(S.sealN)tech.push('<span class=\"tc mam\">'+esc(L(X('ตราประทับ','seals')))+' ×'+S.sealN+'</span>');if(S.ag)tech.push('<span class=\"tc it\">'+esc(L(X('ของมีค่า','goods')))+' '+S.ag+'</span>');if(S.debt)tech.push('<span class=\"tc\">'+esc(L(X('หนี้','debt')))+' '+S.debt+'</span>')}\n  if(S.ch===6){tech.push('<span class=\"tc\">'+esc(L(CLS6[S.cls]))+'</span>');")
rep("  let epi=S.ch===6?epi6(S):","  let epi=S.ch===8?epi8(S):S.ch===6?epi6(S):")
rep("$('#dCun').textContent=S.ch===4?S.nm4.c:S.ch===6?S.nm6.h:'';",
    "$('#dCun').textContent=S.ch===4?S.nm4.c:S.ch===6?S.nm6.h:'';if(S.ch===8){$('#tabH').textContent=L(X('ตราประทับของคุณ','Your seal'));$('#dTab').innerHTML='';$('#dTab').appendChild(seal8Block(S))}")
rep("\n.rec .cun{font-size:18px;color:var(--ember)}","\n.rec .cun{font-size:18px;color:var(--ember)}\n.seal8i{width:64px;height:64px;image-rendering:pixelated;margin:4px 0;border-radius:3px}\n.seal8{display:flex;flex-direction:column;align-items:center;gap:6px}\n.seal8 canvas{border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.35)}")
# home card, calendar, chapter names
rep("+card(6,'05','chEgT','chEgD',rng(6),clk(6),1)+card(5,'06','chPacT',","+card(6,'05','chEgT','chEgD',rng(6),clk(6),1)+card(8,'06','chInT','chInD',rng(8),clk(8),1)+card(5,'07','chPacT',")
rep("{k:'calWrite',y:5200,hi:chap===4||chap===6}","{k:'calWrite',y:5200,hi:chap===4||chap===6||chap===8}")
rep("chEgT:'อียิปต์โบราณ: ชีวิตริมแม่น้ำไนล์',","chInT:'ลุ่มแม่น้ำสินธุ: เมืองที่ถูกลืม',chInD:'เมืองอิฐผังตาราง ท่อระบายน้ำ ตราประทับ และตัวอักษรที่ยังไม่มีใครอ่านออก ลองตามหาร่องรอยความเชื่อโบราณ ที่นักวิชาการยังเถียงกันจนทุกวันนี้',chEgT:'อียิปต์โบราณ: ชีวิตริมแม่น้ำไนล์',")
rep("chEgT:'Ancient Egypt: life on the Nile',","chInT:'The Indus: the forgotten cities',chInD:'Grid-planned brick cities, covered drains, seals, and a script no one can read. Look for traces of an ancient faith that scholars still argue about today.',chEgT:'Ancient Egypt: life on the Nile',")
# sim output
rep("    out.push({c6:","    out.push({c8:S.ch===8?{sig:S.sig|0,seals:S.sealN,cls:S.cls,ag:S.ag,relig:Object.keys(S.relig||{}).join(','),saw:Object.keys(S.saw||{}).join(','),car:S.car,clv:S.clv,rg:S.rg,era:era8(S.ya0),left:S.left8}:null,c6:")
# faces
rep("const egy=F.ch===6,sum=F.ch===4,","const ind=F.ch===8,egy=F.ch===6,sum=F.ch===4,")
rep("  else if(neo){cl='#b59a6a';cl2='#8f774e'}","  else if(ind){cl=F.cls==='elite'?'#b8463a':'#e6dcc6';cl2=F.cls==='elite'?'#8e3028':'#c8bca2'}\n  else if(neo){cl='#b59a6a';cl2='#8f774e'}")
rep("  if(pac)for(let i=0;i<5;i++)P(11+i*2,26,1,1,'#f2ead8');",
    "  if(pac)for(let i=0;i<5;i++)P(11+i*2,26,1,1,'#f2ead8');\n  if(ind&&!kid){if(F.cls==='elite'||F.big>.7)for(let i=1;i<sw-1;i+=3)for(let j=27;j<31;j+=3){P(sx+i,j,1,1,'#f2e6c8');P(sx+i+1,j,1,1,'#f2e6c8');P(sx+i,j+1,1,1,'#f2e6c8')}if(F.sex==='f'){P(sx+3,25,sw-6,1,'#c0392b');P(sx+4,26,sw-8,1,'#d9b45a')}}")
rep("  else if(pac){H(hx-1,top-1,hw+2,4);",
    "  else if(ind){H(hx-1,top-1,hw+2,4);if(F.sex==='f'&&!kid){H(hx-2,top+2,3,13);H(hx+hw-1,top+2,3,13);if(F.style>.4){P(hx-1,top-4,hw+2,3,'#c9b48a');for(let i=0;i<hw+2;i+=2)P(hx-1+i,top-5,1,1,'#c9b48a')}}else{H(hx-1,top+2,2,6);H(hx+hw-1,top+2,2,6);if(!kid&&F.style>.6){P(hx-1,top+1,hw+2,1,'#d9b45a');P(hx+hw/2-1|0,top+1,2,1,'#c0392b')}}}\n  else if(pac){H(hx-1,top-1,hw+2,4);")
rep("function skinRange(rg){if(R4&&R4[rg])return [3,5];","function skinRange(rg){if(R4&&R4[rg])return [3,5];if(typeof R8!=='undefined'&&R8[rg])return [2,4];")
# music
rep("if(S.ch===6)return 'egy';if(S.ch===4)return 'sum';","if(S.ch===6)return 'egy';if(S.ch===8)return 'ind';if(S.ch===4)return 'sum';")
rep("egy:[0,1,4,5,7],pac:[0,2,4,7,9]},ROOT={","egy:[0,1,4,5,7],pac:[0,2,4,7,9],ind:[0,2,3,7,9]},ROOT={ind:220,")
rep("      if(k==='sum'||k==='egy')pluck(f,tt,.42,G.mus,k==='egy');","      if(k==='sum'||k==='egy'||k==='ind')pluck(f,tt,.42,G.mus,k==='egy');")
rep("    if(k==='egy'&&r()<.35)for(let i=0;i<5;i++)","    if(k==='ind'&&r()<.5)for(let i=0;i<3;i++)osc('sine',120,t+i*.38,.3,.14,G.mus,{a:.004,to:75});\n    if(k==='egy'&&r()<.35)for(let i=0;i<5;i++)")
# insert the Indus block after the Egypt block
blk=''.join(open(B+f,encoding='utf-8').read()+'\n' for f in ['v13a.js','v13b.js','v13c.js'])
blk+="DEC.push(...DEC_IN8,...DEC_CAR8);EV.push(...EV8);\nlet chosenCar8=store.get('sit.car8','');if(chosenCar8&&!CAREERS8[chosenCar8])chosenCar8='';\n"
k="let chosenCar6=store.get('sit.car6','');if(chosenCar6&&!CAREERS6[chosenCar6])chosenCar6='';\n"
rep(k,k+blk)
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
