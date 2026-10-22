B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'CAREERS12' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)

rep("10:{old:3750,new:3050},","10:{old:3750,new:3050},12:{old:3625,new:2975},")
rep("function civ(ch){return ch===4||ch===6||ch===8||ch===10}","function civ(ch){return ch===4||ch===6||ch===8||ch===10||ch===12}")
rep("const CHSHOW={6:5,8:6,10:7,5:8};","const CHSHOW={6:5,8:6,10:7,12:8,5:9};")
rep("chap===10?CAREERS10:CAREERS,ccH=chap===4?chosenCar4:chap===6?chosenCar6:chap===8?chosenCar8:chap===10?chosenCar10:chosenCar;$('#carField').hidden=chap!==3&&chap!==4&&chap!==6&&chap!==8&&chap!==10;",
    "chap===10?CAREERS10:chap===12?CAREERS12:CAREERS,ccH=chap===4?chosenCar4:chap===6?chosenCar6:chap===8?chosenCar8:chap===10?chosenCar10:chap===12?chosenCar12:chosenCar;$('#carField').hidden=chap!==3&&chap!==4&&chap!==6&&chap!==8&&chap!==10&&chap!==12;")
rep("if(ccb){if(chap===10){","if(ccb){if(chap===12){chosenCar12=ccb.dataset.car;store.set('sit.car12',chosenCar12)}else if(chap===10){")
rep("const cc=chap===10?chosenCar10:","const cc=chap===12?chosenCar12:chap===10?chosenCar10:")
rep("const CS=chap===10?CAREERS10:","const CS=chap===12?CAREERS12:chap===10?CAREERS10:")
rep("  else if(chap===10){sp=SP.sap;const e10=pickEra10();ya=yaFor10(e10);rg=pickCity10(e10,ya)}",
    "  else if(chap===10){sp=SP.sap;const e10=pickEra10();ya=yaFor10(e10);rg=pickCity10(e10,ya)}\n  else if(chap===12){sp=SP.sap;const e12=pickEra12();ya=yaFor12(e12);rg=pickCity12(e12,ya)}")
rep("else if(chap===10)pw=pw10(rg,ya);","else if(chap===10)pw=pw10(rg,ya);else if(chap===12)pw=pw12(rg,ya);")
rep("  if(S.ch===10){init10();return}","  if(S.ch===10){init10();return}\n  if(S.ch===12){init12();return}")
rep("  if(R10[rg])return sp==='sap'&&!!R10[rg].pop[era10(ya)];","  if(R10[rg])return sp==='sap'&&!!R10[rg].pop[era10(ya)];\n  if(R12[rg])return sp==='sap'&&!!R12[rg].pop[era12(ya)];")
rep("const rn=r=>(S&&S.ch===10&&RNOTE10[r])||","const rn=r=>(S&&S.ch===12&&RNOTE12[r])||(S&&S.ch===10&&RNOTE10[r])||")
rep("if(S.ch===10)return L(S.age<13&&(A.c10||A.c)?(A.c10||A.c):(A.l10||A.l));","if(S.ch===12)return L(S.age<13&&(A.c12||A.c)?(A.c12||A.c):(A.l12||A.l));if(S.ch===10)return L(S.age<13&&(A.c10||A.c)?(A.c10||A.c):(A.l10||A.l));")
rep("if(S.ch===10&&!ACT10.includes(id))continue;let x=1;","if(S.ch===10&&!ACT10.includes(id))continue;if(S.ch===12&&!ACT12.includes(id))continue;let x=1;\n    if(S.ch===12){if(id==='herd'||id==='sow')x*=1.6;if(id==='school')x*=3;if(id==='write')x*=1.6;if(id==='fish'&&S.rg!=='plc')x*=.6}")
rep("else if(S.ch===10)trade10Year();else tradeYear();","else if(S.ch===10)trade10Year();else if(S.ch===12)trade12Year();else tradeYear();")
n=s.count("S.ch===10?CARNOTE10:CARNOTE");assert n>=1;s=s.replace("S.ch===10?CARNOTE10:CARNOTE","S.ch===10?CARNOTE10:S.ch===12?CARNOTE12:CARNOTE")
rep("if(k==='smith'&&S.rg==='enk')s+=1.2;if(k==='fisher'&&S.rg!=='myk')s+=.4}","if(k==='smith'&&S.rg==='enk')s+=1.2;if(k==='fisher'&&S.rg!=='myk')s+=.4}if(S.ch===12){if(k==='diviner'&&S.lit>=15)s+=2.5;if(k==='farmer'&&S.field)s+=.5;if(k==='herder'&&herdTot()>0)s+=.6;if(k==='weaver'&&S.sex==='f')s+=.8;if(k==='caster'&&['yin','zz','sxd'].includes(S.rg))s+=1;if(k==='carver'&&S.rg==='yin')s+=.6}")
rep("S&&S.ch===10?CAREERS10:CAREERS;","S&&S.ch===10?CAREERS10:S&&S.ch===12?CAREERS12:CAREERS;")
rep("v8Year(a);v10Year(a);","v8Year(a);v10Year(a);v12Year(a);")
rep("rollYear();nile6();mon8();rain10();","rollYear();nile6();mon8();rain10();rain12();")
rep("    log(S.ch===10?X('ลูกคนหนึ่งของคุณป่วยและจากไป","    log(S.ch===12?X('ลูกคนหนึ่งของคุณป่วยและจากไป ครอบครัวฝังร่างเล็กๆ ไว้ใกล้บ้านในไหดินเผา','One of your children falls ill and dies. The family buries the little body near the house in a clay urn.'):S.ch===10?X('ลูกคนหนึ่งของคุณป่วยและจากไป")
rep("    else log(S.ch===10?amb10():","    else log(S.ch===12?amb12():S.ch===10?amb10():")
rep("  if(S.ch===10)return title10(S);","  if(S.ch===10)return title10(S);\n  if(S.ch===12)return title12(S);")
rep("||(S.ch===10&&REFLECT10[age])||","||(S.ch===10&&REFLECT10[age])||(S.ch===12&&age===50&&era12(S.ya)==='zhou'&&S.rg!=='sxd'&&REFL12L)||(S.ch===12&&REFLECT12[age])||")
rep("(S.ch===10&&D.x10)||D.x,","(S.ch===10&&D.x10)||(S.ch===12&&D.x12)||D.x,")
rep("  if(S.ch===10)return fun10Note(S);","  if(S.ch===10)return fun10Note(S);\n  if(S.ch===12)return fun12Note(S);")
rep("  if(S.ch===10){fun10Opts(S,o,done,lead);return o.slice(0,3)}","  if(S.ch===10){fun10Opts(S,o,done,lead);return o.slice(0,3)}\n  if(S.ch===12){fun12Opts(S,o,done,lead);return o.slice(0,3)}")
rep("  if(a<5&&S.ch===10)return L(","  if(a<5&&S.ch===12)return L(X('ครอบครัวฝังร่างเล็กๆ ของคุณไว้ในไหดินเผาใกล้บ้าน ไม่ได้ฝังในสุสานของตระกูลเหมือนผู้ใหญ่','Your family buries your small body in a clay urn near the house, not in the lineage cemetery like the grown-ups.'));\n  if(a<5&&S.ch===10)return L(")
rep("  if(S.ch===10)parts.push(fun10Text(S));","  if(S.ch===12)parts.push(fun12Text(S));\n  else if(S.ch===10)parts.push(fun10Text(S));")
rep("  if(S.ch===10){const i=c.findIndex(x=>x[0]==='predator');","  if(S.ch===12){const i=c.findIndex(x=>x[0]==='predator');if(i>=0)c[i][1]=.25;if(['late'].includes(era12(S.ya))&&a>=15&&S.sex==='m')c.push(['war12',.8]);if(S.cls==='slave'&&a>=14&&['wud','late'].includes(era12(S.ya)))c.push(['sacr12',.8])}\n  if(S.ch===10){const i=c.findIndex(x=>x[0]==='predator');")
# scenes
rep("ani10:S.ch===10&&S.sc10a&&S.sc10a.age===S.age?S.sc10a.k:null,","ani10:S.ch===10&&S.sc10a&&S.sc10a.age===S.age?S.sc10a.k:null,shang12:S.ch===12,vil12:S.ch===12&&S.rg==='vil',sxd12:S.ch===12&&S.rg==='sxd',zz12:S.ch===12&&S.rg==='zz',plc12:S.ch===12&&S.rg==='plc',zou12:S.ch===12&&S.rg==='zou',fall12:S.ch===12&&S.rg==='yin'&&!!S.fall12,ani12:S.ch===12&&S.sc12a&&S.sc12a.age===S.age?S.sc12a.k:null,")
rep("  if(P.aeg)drawAegean(ctx,gy,o,now);","  if(P.aeg)drawAegean(ctx,gy,o,now);\n  if(P.shang)drawShang(ctx,gy,o,now);")
rep("  if(o.aeg10&&st!=='baby'){","  if(o.shang12&&st!=='baby'){const r12=drawAct12(ctx,o,act,gy,now,P);if(r12)return r12;if(['tablet','school','market','march','read'].includes(act)){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}if(act==='weave'){const r8=drawAct8(ctx,o,act,gy,now,P);if(r8)return r8}}\n  if(o.aeg10&&st!=='baby'){")
# draw card / tools / epilogue
rep("    ...(S.ch===10?[[esc(L(X('ยุค','Era'))),",
    "    ...(S.ch===12?[[esc(L(X('ยุค','Era'))),esc(L(ERA12[era12(S.ya0)].n))+'<br><span class=\"small num\">'+esc(L(X('ราว '+fmt(bce(S.ya0))+' ปีก่อนคริสตกาล','about '+fmt(bce(S.ya0))+' BCE')))+'</span>'],[esc(L(X('ฐานะ','Station'))),esc(L(CLS12[S.cls]))+'<br><span class=\"small\">'+esc(L(S.rg==='sxd'?RNOTE12.sxd:CLSNOTE12))+'</span>']]:[]),\n    ...(S.ch===10?[[esc(L(X('ยุค','Era'))),")
rep("[t('kName'),S.ch===10?","[t('kName'),S.ch===12?'“'+nmL(S.name)+'”<br><span class=\"small\">'+esc(L(NAMENOTE12))+'</span>':S.ch===10?")
rep("  if(S.ch===10){tech.push('<span class=\"tc\">'+esc(L(cls10(S)))+'</span>');",
    "  if(S.ch===12){tech.push('<span class=\"tc\">'+esc(L(cls12(S)))+'</span>');if(S.lit>=5)tech.push('<span class=\"tc\">'+esc(L(X('รู้ตัวอักษร','knows the signs')))+' '+Math.round(S.lit)+'%</span>');if(S.boneN)tech.push('<span class=\"tc mam\">'+esc(L(X('กระดองที่สลัก','shells carved')))+' ×'+S.boneN+'</span>');if(S.ag)tech.push('<span class=\"tc it\">'+esc(L(X('ของมีค่า','goods')))+' '+S.ag+'</span>');if(S.debt)tech.push('<span class=\"tc\">'+esc(L(X('หนี้','debt')))+' '+S.debt+'</span>')}\n  if(S.ch===10){tech.push('<span class=\"tc\">'+esc(L(cls10(S)))+'</span>');")
rep("(S.ch===10?epi10(S):S.ch===8?epi8(S):","(S.ch===12?epi12(S):S.ch===10?epi10(S):S.ch===8?epi8(S):")
# death page block: reset first (fixes v0.15 wiping the seal/tablet), then each chapter
rep("$('#dCun').textContent=S.ch===4?S.nm4.c:S.ch===6?S.nm6.h:'';if(S.ch===10){",
    "$('#dCun').textContent=S.ch===4?S.nm4.c:S.ch===6?S.nm6.h:'';$('#tabBlock').hidden=!civ(S.ch);$('#dTab').innerHTML='';if(S.ch===12){if(S.boneN){$('#tabH').textContent=L(X('กระดองเสี่ยงทายของคุณ','Your oracle bone'));$('#dTab').appendChild(bone12Block(S))}else $('#tabBlock').hidden=true}if(S.ch===10){")
rep("$('#dCun').className=S.ch===6?'hie':'cun';$('#tabBlock').hidden=!civ(S.ch);$('#dTab').innerHTML='';","$('#dCun').className=S.ch===6?'hie':'cun';")
# home card, chapter names
rep("+card(10,'07','chAeT','chAeD',rng(10),clk(10),1)+card(5,'08','chPacT',","+card(10,'07','chAeT','chAeD',rng(10),clk(10),1)+card(12,'08','chShT','chShD',rng(12),clk(12),1)+card(5,'09','chPacT',")
rep("chAeT:'ทะเลอีเจียน:","chShT:'จีนราชวงศ์ซาง: กระดูกเสี่ยงทาย',chShD:'เผากระดองเต่าให้แตกแล้วถามบรรพบุรุษ หล่อหม้อสำริดใบใหญ่ที่สุดในโลก เดินทัพกับฟู่ห่าว แล้วดูราชวงศ์ล่มที่มู่เย่ ตัวอักษรที่สลักไว้ยังอยู่ในภาษาจีนทุกวันนี้',chAeT:'ทะเลอีเจียน:")
rep("chAeT:'The Aegean:","chShT:'Shang China: the oracle bones',chShD:'Crack turtle shells with fire to question the ancestors, cast the greatest bronzes in the world, march with Fu Hao, and see the dynasty fall at Muye. The signs you carve still live on in Chinese writing today.',chAeT:'The Aegean:")
# sources
rep("<p>'+t('src14')+'</p>';","<p>'+t('src14')+'</p><p>'+t('src15')+'</p>';")
rep("src14:'อัตราตายของเด็ก","src15:'บท 08 จีนซาง: David N. Keightley (Sources of Shang History) คลังกระดูกเสี่ยงทายของสถาบันประวัติศาสตร์และภาษา Academia Sinica สุสานฟู่ห่าว (สถาบันโบราณคดี CASS 1976) พิพิธภัณฑ์ซานซิงตุย และคัมภีร์ซ่างซู ตำนานและเรื่องที่ผู้ชนะเขียนมีเครื่องหมาย ✦',src14:'อัตราตายของเด็ก")
rep("src14:'Child deaths","src15:'Chapter 08, Shang China: David N. Keightley (Sources of Shang History), the oracle-bone collection of the Institute of History and Philology, Academia Sinica, the tomb of Fu Hao (CASS Institute of Archaeology, 1976), the Sanxingdui Museum and the Book of Documents. Legends and stories written by the winners are marked ✦.',src14:'Child deaths")
# sim output, test hook
rep("    out.push({c10:","    out.push({c12:S.ch===12?{lit:S.lit|0,bone:S.boneN,surv:S.boneSurv,cls:S.cls,fall:S.fall12,moved:S.moved12,gump:S.gump12,myth:S.myth12,saw:Object.keys(S.saw||{}).join(','),car:S.car,clv:S.clv,rg:S.rg,era:era12(S.ya0)}:null,c10:")
rep("epi10,fun10Note,fun10Text,title10})[n];","epi10,fun10Note,fun10Text,title10,epi12,fun12Note,fun12Text,title12,bone12Canvas})[n];")
# faces
rep("const aeg=F.ch===10,","const sha=F.ch===12,aeg=F.ch===10,")
rep("  else if(aeg){cl=F.cls==='elite'?","  else if(sha){cl=F.cls==='elite'?'#6a2a1f':F.cls==='slave'?'#b8ad94':'#cdbf9a';cl2=F.cls==='elite'?'#d9b45a':'#a89a78'}\n  else if(aeg){cl=F.cls==='elite'?")
rep("  else if(aeg){H(hx-1,top-1,hw+2,4);","  else if(sha){H(hx-1,top-1,hw+2,4);if(!kid){H(hx+(hw>>1)-2,top-4,4,4);P(hx+(hw>>1)-4,top-3,8,1,'#e8dab8')}else{H(hx-1,top+2,2,4);H(hx+hw-1,top+2,2,4)}}\n  else if(aeg){H(hx-1,top-1,hw+2,4);")
rep("if(typeof R10!=='undefined'&&R10[rg])return [3,5];","if(typeof R10!=='undefined'&&R10[rg])return [3,5];if(typeof R12!=='undefined'&&R12[rg])return [2,4];")
# music
rep("if(S.ch===10)return 'aeg';","if(S.ch===10)return 'aeg';if(S.ch===12)return 'sha';")
rep("aeg:[0,2,3,5,7]},ROOT={ind:220,aeg:196,","aeg:[0,2,3,5,7],sha:[0,2,4,7,9]},ROOT={ind:220,aeg:196,sha:207.65,")
rep("if(k==='sum'||k==='egy'||k==='ind'||k==='aeg')pluck(","if(k==='sum'||k==='egy'||k==='ind'||k==='aeg'||k==='sha')pluck(")
# kid-text guard list
rep("const KID_IDS=new Set(['a6_coffin','a6_lettdead','a10_strangers']);","const KID_IDS=new Set(['a6_coffin','a6_lettdead','a10_strangers','a12_family','e12_ancestor','a6_aten']);")
# insert the Shang block after the Aegean block
blk=''.join(open(B+f,encoding='utf-8').read()+'\n' for f in ['v16a.js','v16b.js','v16c.js'])
blk+="DEC.push(...DEC_IN12,...DEC_CAR12);EV.push(...EV12);\nlet chosenCar12=store.get('sit.car12','');if(chosenCar12&&!CAREERS12[chosenCar12])chosenCar12='';\n"
k="let chosenCar10=store.get('sit.car10','');if(chosenCar10&&!CAREERS10[chosenCar10])chosenCar10='';\n"
rep(k,k+blk)
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
