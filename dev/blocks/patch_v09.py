import re,sys
D='/tmp/claude-0/-home-claude/88ad3b5f-5e3c-518f-8c01-435b4c3a595e/scratchpad/'
s=open(D+'work8.html',encoding='utf-8').read()
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:120]))
    s=s.replace(old,new)

# 1 chapters
rep("3:{old:12000,new:7000},","3:{old:12000,new:7000},4:{old:5300,new:2560},")
# 2 home chips / careers per chapter (before generic CAREERS replacements)
i=s.index("$('#carField').hidden=chap!==3;");j=s.index('\n',i)
line=s[i:j]
nl=line.replace("$('#carField').hidden=chap!==3;","const CSH=chap===4?CAREERS4:CAREERS,ccH=chap===4?chosenCar4:chosenCar;$('#carField').hidden=chap!==3&&chap!==4;").replace("(!chosenCar)","(!ccH)").replace("Object.keys(CAREERS)","Object.keys(CSH)").replace("CAREERS[k]","CSH[k]").replace("k===chosenCar","k===ccH")
assert 'CAREERS[' not in nl and 'chosenCar)' not in nl.replace('chosenCar4','').replace('ccH',''),nl
s=s[:i]+nl+s[j:]
rep("const ccb=e.target.closest('#carChips button');if(ccb){chosenCar=ccb.dataset.car;store.set('sit.car',chosenCar);renderHome();return}",
    "const ccb=e.target.closest('#carChips button');if(ccb){if(chap===4){chosenCar4=ccb.dataset.car;store.set('sit.car4',chosenCar4)}else{chosenCar=ccb.dataset.car;store.set('sit.car',chosenCar)}renderHome();return}")
rep("function newLife(){for(let i=0;i<40;i++){newLife0();if(chap!==3||!chosenCar||CAREERS[chosenCar].ok(S))break}\n  if(chap===3&&chosenCar&&CAREERS[chosenCar].ok(S)){S.car=chosenCar;S.clv=0;S.cxp=0;S.carPre=1}}",
    "function newLife(){const cc=chap===4?chosenCar4:chap===3?chosenCar:'';const CS=chap===4?CAREERS4:CAREERS;for(let i=0;i<40;i++){newLife0();if(!cc||!CS[cc]||CS[cc].ok(S))break}\n  if(cc&&CS[cc]&&CS[cc].ok(S)){S.car=cc;S.clv=0;S.cxp=0;S.carPre=1;if(cc==='scribe')S.schOK=1}}")
# generic career references
s=s.replace("CAREERS[S.car]","CARS()[S.car]").replace("Object.keys(CAREERS)","Object.keys(CARS())")
s=s.replace("CAREERS[k]","CARS()[k]")
# newLife0
rep("  else if(chap===5){sp=SP.sap;ya=Math.round((3000+rnd()*500)/10)*10;rg=ya>3400?'phl':pick(['phl','bis'])}",
    "  else if(chap===5){sp=SP.sap;ya=Math.round((3000+rnd()*500)/10)*10;rg=ya>3400?'phl':pick(['phl','bis'])}\n  else if(chap===4){sp=SP.sap;const e4=pickEra4();ya=Math.round((ERA4[e4].b+rnd()*(ERA4[e4].a-ERA4[e4].b))/5)*5;rg=pickCity4(e4)}")
rep("if(chap===5)pw=pacShare(ya);else if(chap===3)pw=R3[rg].share;","if(chap===5)pw=pacShare(ya);else if(chap===3)pw=R3[rg].share;else if(chap===4)pw=pw4(rg,ya);")
rep("rollYear();init7();S.name=mkName(S);","rollYear();init7();S.name=S.ch===4?mkName4(S):mkName(S);")
rep("  if(S.ch!==3)return;const r=R3[S.rg];S.settled=","  if(S.ch===4){init4();return}\n  if(S.ch!==3)return;const r=R3[S.rg];S.settled=")
# people
rep("function mkP(k,age){const used=S.ppl.map(p=>p.n.th);const pool=PNAMES.filter(n=>!used.includes(n.th));const n=pick(pool.length?pool:PNAMES);",
    "function mkP(k,age){const used=S.ppl.map(p=>p.n.th);const pool=PNAMES.filter(n=>!used.includes(n.th));const n=S.ch===4?nm4X(genName4(S,k==='partner'?(S.sex==='f'?'m':'f'):(rnd()<.5?'m':'f'),era4(S.ya))):pick(pool.length?pool:PNAMES);")
rep("if(a===21&&S.ch===3&&!pp('neighbor'))","if(a===21&&(S.ch===3||S.ch===4)&&!pp('neighbor'))")
s=s.replace("S.ch===3&&herdTot()","(S.ch===3||S.ch===4)&&herdTot()")
rep("if(d.vil&&!(S.ch===3&&S.settled))","if(d.vil&&!((S.ch===3||S.ch===4)&&S.settled))")
# regions
rep("function valid(sp,rg,ya){\n","function valid(sp,rg,ya){\n  if(R4[rg])return sp==='sap'&&!!R4[rg].pop[era4(ya)];\n")
rep("const rn=r=>(S&&S.ch===3&&RNOTE3[r])||RNOTE[r];","const rn=r=>(S&&S.ch===4&&RNOTE4[r])||(S&&S.ch===3&&RNOTE3[r])||RNOTE[r];")
# acts
rep("cond:S=>S.ch===3&&!!S.car&&CARS()[S.car].act==='job'}","cond:S=>(S.ch===3||S.ch===4)&&!!S.car&&CARS()[S.car].act==='job'}")
rep("cond:S=>S.ch===3&&S.field>0}","cond:S=>(S.ch===3||S.ch===4)&&S.field>0}")
rep("const actLabel=(id,S)=>{const A=ACTS[id];if(id==='job'&&S.car)return L(CARS()[S.car].l);",
    "const actLabel=(id,S)=>{const A=ACTS[id];if(id==='job'&&S.car)return L((S.ch===4?CAREERS4:CAREERS)[S.car].l||X('ทำงานอาชีพ','Work at your trade'));if(S.ch===4)return L(S.age<13&&(A.c4||A.c)?(A.c4||A.c):(A.l4||A.l));")
rep("  for(const id in ACTS){const A=ACTS[id];if(a<A.min)continue;if(A.cond&&!A.cond(S))continue;let x=1;",
    "  for(const id in ACTS){const A=ACTS[id];if(a<A.min)continue;if(A.cond&&!A.cond(S))continue;if(S.ch===4&&!ACT4.includes(id))continue;let x=1;\n    if(S.ch===4){if(id==='herd'||id==='sow')x*=1.6;if(id==='school')x*=3.5;if(id==='write'||id==='read')x*=1.6;if(id==='brew'&&S.sex==='f')x*=1.4}")
rep("if(id==='tame'&&S.pen)s+=2.5;","if(id==='tame'&&S.pen)s+=2.5;if(id==='school')s+=2.5;if(id==='write'&&S.lit>=50)s+=.8;")
rep("if(id==='trade'){tradeYear();","if(id==='trade'){if(S.ch===4)trade4Year();else tradeYear();")
rep("const carAct=S=>S.car?CARS()[S.car].act:null;","const carAct=S=>S.car&&CARS()[S.car]?CARS()[S.car].act:null;")
rep("log(X('ทุกคนเริ่มเรียกคุณว่า'+C.L[S.clv].th,'People begin to call you '+C.L[S.clv].en),S.clv===1?CARNOTE:null,'big')",
    "log(X('ทุกคนเริ่มเรียกคุณว่า'+C.L[S.clv].th,'People begin to call you '+C.L[S.clv].en),S.clv===1?(S.ch===4?CARNOTE4:CARNOTE):null,'big')")
rep("x:X('ผู้ใหญ่หลายคนเห็นว่าคุณโตพอจะเริ่มฝึกงานจริงจังแล้ว แต่ละคนอยากให้คุณไปเป็นลูกมือของเขา','Several adults think you are old enough to learn a real trade, and each wants you as their helper.'),n:CARNOTE,",
    "x:X('ผู้ใหญ่หลายคนเห็นว่าคุณโตพอจะเริ่มฝึกงานจริงจังแล้ว แต่ละคนอยากให้คุณไปเป็นลูกมือของเขา','Several adults think you are old enough to learn a real trade, and each wants you as their helper.'),nf:S=>S.ch===4?CARNOTE4:CARNOTE,")
rep("if((S[C.sk]||0)>20)s+=.6;return s};","if((S[C.sk]||0)>20)s+=.6;if(S.ch===4){if(k==='scribe'&&S.lit>=20)s+=2.5;if(k==='priest'&&S.cls==='elite')s+=1.5;if(k==='brewer'&&S.sex==='f')s+=.8;if(k==='farmer'&&S.field)s+=.5}return s};")
# year step
rep("carYear(a);if(S.rumor&&S.rumor.p.dead)S.rumor=null;","carYear(a);v4Year(a);if(S.rumor&&S.rumor.p.dead)S.rumor=null;")
rep("function v3Year(a){\n  if(S.ch!==3)return;","function v3Year(a){\n  if(S.ch!==3&&S.ch!==4)return;")
rep("if(!d&&S.ch===3&&!S.car&&","if(!d&&(S.ch===3||S.ch===4)&&!S.car&&")
rep("log(X('คุณเริ่มฝึกเป็น'+CARS()[S.car].n.th+' ตามที่ครอบครัวทำมา','You begin training as a '+CARS()[S.car].n.en.toLowerCase()+', as your family has done'),CARNOTE,'big')",
    "log(X('คุณเริ่มฝึกเป็น'+CARS()[S.car].n.th+' ตามที่ครอบครัวทำมา','You begin training as a '+CARS()[S.car].n.en.toLowerCase()+', as your family has done'),S.ch===4?CARNOTE4:CARNOTE,'big')")
rep("log(S.sp.id==='sap'&&S.ch!==5?X(","log(S.ch===4?X('ลูกคนหนึ่งของคุณป่วยและจากไป ครอบครัววางร่างเล็กๆ ไว้ในโถดินเผา แล้วฝังใต้พื้นบ้าน','One of your children falls ill and dies. The family lays the little body in a clay jar beneath the house floor.'):S.sp.id==='sap'&&S.ch!==5?X(")
rep("S.done['e'+EV.indexOf(e)]=a;if(e.fx)fx(e.fx);","S.done['e'+EV.indexOf(e)]=a;if(e.fx)fx(e.fx);if(e.fxF)e.fxF(S);if(e.eg)S.gilg++;")
rep("else log(pick((S.ch===3&&AMB3[S.rg])||AMB[S.rg]||AMB.lev))","else log(S.ch===4?amb4():pick((S.ch===3&&AMB3[S.rg])||AMB[S.rg]||AMB.lev))")
rep("function okEv(e,a){","const W4=new Set(['p_gossip','p_truth','p_aboutyou','p_rival','p_secret']);\nfunction okEv(e,a){if(S.ch===4&&e.ch!==4&&!W4.has(e.id))return false;")
# title
rep("function title(S){\n","function title(S){\n  if(S.ch===4)return title4(S);\n")
# scenes
rep("act:S.scAct&&S.scAct.age===S.age?S.scAct.act:S.age<5?'fire':S.focus==='job'&&S.car?CARS()[S.car].scene:((ACTS[S.focus]||{}).scene||'fire')",
    "act:S.scAct&&S.scAct.age===S.age?S.scAct.act:S.age<5?'fire':S.focus==='job'&&S.car?CARS()[S.car].scene:((S.ch===4&&(ACTS[S.focus]||{}).scene4)||(ACTS[S.focus]||{}).scene||'fire')")
rep("field:S.ch===3&&!!S.field,","field:(S.ch===3||S.ch===4)&&!!S.field,city:S.ch===4,era4:S.ch===4?era4(ya):null,bab:S.rg==='bab',hg:S.hg,")
rep("herd:S.ch===3?Object.keys(S.herd)","herd:(S.ch===3||S.ch===4)?Object.keys(S.herd)")
rep("  // trees\n  const tr=srng(seed+3);","  if(P.city)drawCity(ctx,gy,o,now);\n  // trees\n  const tr=srng(seed+3);")
rep("  const dog=(x,y)=>{if(!o.dog)return;","  if(o.city&&st!=='baby'){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}\n  const dog=(x,y)=>{if(!o.dog)return;")
rep("const C={goat:'#8a6e52',","const C={donkey:'#8f877c',goat:'#8a6e52',")
rep("  if(k==='pig')R(dir>0?hx+2:hx-1,y-2-bh,1,1,'#c99a8a');","  if(k==='pig')R(dir>0?hx+2:hx-1,y-2-bh,1,1,'#c99a8a');\n  if(k==='donkey'){R(hx,y-6-bh,1,3,C);R(hx+1,y-6-bh,1,2,C)}")
# tools
rep("  if(S.ch===3){Object.keys(S.herd).filter(k=>S.herd[k]>0).forEach(",
    "  if(S.ch===4){tech.push('<span class=\"tc\">'+esc(L(CLS4[S.cls]))+'</span>');if(S.lit>=5)tech.push('<span class=\"tc\">'+esc(L(X('อ่านออกเขียนได้','literacy')))+' '+Math.round(S.lit)+'%</span>');if(S.tabN)tech.push('<span class=\"tc mam\">'+esc(L(X('แผ่นจารึก','tablets')))+' ×'+S.tabN+'</span>');if(S.ag)tech.push('<span class=\"tc it\">'+esc(L(X('เงิน','silver')))+' '+S.ag+' '+esc(L(X('เชเคิล','shekels')))+'</span>');if(S.debt)tech.push('<span class=\"tc\">'+esc(L(X('หนี้','debt')))+' '+S.debt+'</span>')}\n  if(S.ch===3||S.ch===4){Object.keys(S.herd).filter(k=>S.herd[k]>0).forEach(")
# draw card
rep("    [t('kName'),'“'+nmL(S.name)+'”<br><span class=\"small\">'+t('nameNote')+'</span>'],",
    "    ...(S.ch===4?[[esc(L(X('ยุค','Era'))),esc(L(ERA4[era4(S.ya0)].n))+'<br><span class=\"small num\">'+esc(L(X('ราว '+fmt(bce(S.ya0))+' ปีก่อนคริสตกาล','about '+fmt(bce(S.ya0))+' BCE')))+'</span>'],[esc(L(X('ฐานะ','Station'))),esc(L(CLS4[S.cls]))+'<br><span class=\"small\">'+esc(L(CLSNOTE))+'</span>']]:[]),\n    [t('kName'),S.ch===4?'“'+nmL(S.name)+'” <span class=\"cun\">'+S.nm4.c+'</span><br><span class=\"small\">'+esc(L(S.nm4.mean))+' · '+esc(L(X('ลูกของ '+S.nm4.fa.th,'child of '+S.nm4.fa.l)))+'</span>':'“'+nmL(S.name)+'”<br><span class=\"small\">'+t('nameNote')+'</span>'],")
# death
rep("  let epi=L((S.ch===3&&epi3(S))||","  let epi=S.ch===4?epi4(S):L((S.ch===3&&epi3(S))||")
rep("  $('#dFuneral').textContent=funeralText(S);","  $('#dFuneral').textContent=funeralText(S);\n  $('#dCun').textContent=S.ch===4?S.nm4.c:'';$('#tabBlock').hidden=S.ch!==4;if(S.ch===4){const T=tablet4(S);$('#tabH').textContent=L(T.h);$('#dTab').innerHTML=tabletHTML(T)}")
rep('    <h1 id="dName"></h1>\n','    <h1 id="dName"></h1>\n    <p class="cun" id="dCun"></p>\n')
rep('    <div class="block" id="funBlock">','    <div class="block" id="tabBlock" hidden><h2 id="tabH"></h2><div id="dTab"></div></div>\n    <div class="block" id="funBlock">')
# css + font
rep("family=Anuphan:wght@400;500;600&family=Pridi:wght@400;600&family=Silkscreen&display=swap","family=Anuphan:wght@400;500;600&family=Noto+Sans+Cuneiform&family=Pridi:wght@400;600&family=Silkscreen&display=swap")
rep(".rec{display:flex;flex-direction:column;margin:14px 0 18px}",".rec{display:flex;flex-direction:column;margin:14px 0 18px}\n.cun{font-family:'Noto Sans Cuneiform',serif;letter-spacing:.04em;line-height:1.3}\n.rec .cun{font-size:18px;color:var(--ember)}\n#dCun{font-size:28px;color:var(--ember);margin:2px 0 6px;min-height:0}\n.tab4{background:#c9b08a;color:#3a2a1c;border-radius:12px 16px 14px 18px;padding:14px 16px;display:flex;flex-direction:column;gap:10px;box-shadow:inset 0 0 0 2px #b39466;margin:6px 0}\n.tab4 .tl{display:flex;flex-direction:column;gap:1px}\n.tab4 .cun{font-size:24px}\n.tab4 i{font-size:12.5px;opacity:.75}\n.tab4 .tl span:last-child{font-size:13.5px}")
# home cards / calendar
rep("card(4,'04','ch3t','ch3d',fmt(5300),clockStr(5300),0)","card(4,'04','ch3t','ch3d',rng(4),clk(4),1)")
rep("{k:'calWrite',y:5200}","{k:'calWrite',y:5200,hi:chap===4}")
# funerals
rep("  if(S.ch===3)return fun3Note(S);","  if(S.ch===4)return fun4Note(S);\n  if(S.ch===3)return fun3Note(S);")
rep("  if(S.ch===3)fun3Opts(S,o,done,lead);","  if(S.ch===4){fun4Opts(S,o,done,lead);return o.slice(0,3)}\n  if(S.ch===3)fun3Opts(S,o,done,lead);")
rep("  if(a<5)return L(X('กลุ่มฝังคุณไว้ใต้ต้นไม้ใกล้ที่พัก","  if(a<5&&S.ch===4)return L(X('ครอบครัววางร่างเล็กๆ ของคุณในโถดินเผา แล้วฝังไว้ใต้พื้นบ้าน','Your family lays your small body in a clay jar and buries it beneath the house floor.'));\n  if(a<5)return L(X('กลุ่มฝังคุณไว้ใต้ต้นไม้ใกล้ที่พัก")
rep("  if(S.ch===3)parts.push(fun3Text(S));","  if(S.ch===4)parts.push(fun4Text(S));\n  else if(S.ch===3)parts.push(fun3Text(S));")
# causes
rep("  if(S.R.cold)c.push(['cold',2*S.R.cold*coldMul()]);return weighted(c)}","  if(S.R.cold)c.push(['cold',2*S.R.cold*coldMul()]);\n  if(S.ch===4){const pr=c.find(x=>x[0]==='predator');if(pr)pr[1]=.25;if(S.car==='soldier'&&a>=16&&a<50)c.push(['war',2.5])}return weighted(c)}")
rep("title:L(REFLECT[age])","title:L((S.ch===4&&REFLECT4[age])||REFLECT[age])")
# LANG chapter texts
rep("ch3t:'ยุคสำริด: สุเมเรียน',ch3d:'เมืองแรก ตัวอักษรแรก โลหะผสมแรก และเบียร์'","ch3t:'เมโสโปเตเมีย: สุเมเรียนถึงบาบิโลน',ch3d:'เมืองแรก ตัวอักษรแรก สำริด เบียร์ กฎหมายฮัมมูราบี มหากาพย์กิลกาเมช และสวนลอยแห่งบาบิโลน ชื่อของคุณถูกเขียนลงบนแผ่นดินเหนียว'")
rep("ch3t:'The Bronze Age: Sumer',ch3d:'The first cities, the first writing, the first alloys, and beer'","ch3t:'Mesopotamia: from Sumer to Babylon',ch3d:'The first cities, the first writing, bronze, beer, Hammurabi’s laws, the Epic of Gilgamesh and the Hanging Gardens. Your name is written in clay.'")
rep("out.push({lg:opts.logs?","out.push({c4:S.ch===4?{lit:S.lit|0,tab:S.tabN,cls:S.cls,g:S.gilg,ag:S.ag,debt:S.debt,sid:S.sid||'',hg:S.hg,king:!!S.kingT,nameTab:S.nameTab,sch:S.schOK}:null,lg:opts.logs?")
rep("log(D.x,m<1?X(","log((S.ch===4&&D.x4)||D.x,m<1?X(")
rep("if(!S.ineqN&&v>=16&&a>=14){","if(!S.ineqN&&S.ch===3&&v>=16&&a>=14){")
# block insertion after pickVar
blk=open(D+'v09a.js',encoding='utf-8').read()+'\n'+open(D+'v09b.js',encoding='utf-8').read()+'\n'+open(D+'v09c.js',encoding='utf-8').read()
rep("$('#blurb').textContent=L(S.sp.b);","$('#blurb').textContent=L(S.sp.id==='sap'&&S.chap===4?X('สายพันธุ์ของเราเอง ตอนนี้เป็นมนุษย์สายพันธุ์เดียวที่เหลืออยู่ อาศัยอยู่ทุกทวีปยกเว้นแอนตาร์กติกา ทั้งโลกอาจมีคนราว 15–45 ล้านคน ส่วนใหญ่ยังเป็นชาวนา คนเลี้ยงสัตว์ หรือนักล่า มีเพียงส่วนน้อยที่อยู่ในเมือง','Our own species, now the only humans left, living on every continent except Antarctica. The whole world may hold some 15–45 million people; most are still farmers, herders or hunters, and only a few live in cities.'):S.sp.id==='sap'&&S.chap>=3?X('สายพันธุ์ของเราเอง ตอนนี้เป็นมนุษย์สายพันธุ์เดียวที่เหลืออยู่ อาศัยอยู่ทุกทวีปยกเว้นแอนตาร์กติกา','Our own species, now the only humans left, living on every continent except Antarctica.'):S.sp.b);")
blk+="\nDEC.push(...DEC4,...DEC_CAR4);EV.push(...EV4);OUTDOOR.push('garden','canal','market','march','temple','school','tablet');\nlet chosenCar4=store.get('sit.car4','');if(chosenCar4&&!CAREERS4[chosenCar4])chosenCar4='';\nDIS.malaria.rg.push(...Object.keys(R4));\n"
i=s.index("const OUTDOOR=");j=s.index('\n',i)+1
s=s[:j]+blk+s[j:]
open(D+'work9.html','w',encoding='utf-8').write(s)
print('ok',len(s))
