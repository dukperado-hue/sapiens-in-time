B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'CAREERS22' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)

# chapter registry
rep("20:{old:2624,new:1875},","20:{old:2624,new:1875},22:{old:1925,new:725},")
rep("||ch===20}","||ch===20||ch===22}")
rep("20:12,5:13};","20:12,22:13,5:14};")
rep("chap===20?CAREERS20:CAREERS,ccH=","chap===20?CAREERS20:chap===22?CAREERS22:CAREERS,ccH=")
rep("chap===20?chosenCar20:chosenCar;","chap===20?chosenCar20:chap===22?chosenCar22:chosenCar;")
rep("&&chap!==20;","&&chap!==20&&chap!==22;")
rep("if(ccb){if(chap===20){","if(ccb){if(chap===22){chosenCar22=ccb.dataset.car;store.set('sit.car22',chosenCar22)}else if(chap===20){")
rep("const cc=chap===20?","const cc=chap===22?chosenCar22:chap===20?")
rep("const CS=chap===20?","const CS=chap===22?CAREERS22:chap===20?")
rep("  else if(chap===20){sp=SP.sap;const e20=pickEra20();ya=yaFor20(e20);rg=pickCity20(e20,ya)}",
    "  else if(chap===20){sp=SP.sap;const e20=pickEra20();ya=yaFor20(e20);rg=pickCity20(e20,ya)}\n  else if(chap===22){sp=SP.sap;const e22=pickEra22();ya=yaFor22(e22);rg=pickCity22(e22,ya)}")
rep("else if(chap===20)pw=pw20(rg,ya);","else if(chap===20)pw=pw20(rg,ya);else if(chap===22)pw=pw22(rg,ya);")
rep("  if(S.ch===20){init20();return}","  if(S.ch===20){init20();return}\n  if(S.ch===22){init22();return}")
rep("  if(R20[rg])return sp==='sap'&&!!R20[rg].pop[era20(ya)];","  if(R20[rg])return sp==='sap'&&!!R20[rg].pop[era20(ya)];\n  if(R22[rg])return sp==='sap'&&!!R22[rg].pop[eraS22(ya)]&&(!RW22[rg]||(ya<=RW22[rg][0]&&ya>=RW22[rg][1]));")
rep("const rn=r=>(S&&S.ch===20&&RNOTE20[r])||","const rn=r=>(S&&S.ch===22&&RNOTE22[r])||(S&&S.ch===20&&RNOTE20[r])||")
rep("if(S.ch===20)return L(S.age<13&&(A.c20||A.c)?(A.c20||A.c):(A.l20||A.l));","if(S.ch===22)return L(S.age<13&&(A.c22||A.c)?(A.c22||A.c):(A.l22||A.l));if(S.ch===20)return L(S.age<13&&(A.c20||A.c)?(A.c20||A.c):(A.l20||A.l));")
rep("if(S.ch===20&&!ACT20.includes(id))continue;","if(S.ch===20&&!ACT20.includes(id))continue;if(S.ch===22&&!ACT22.includes(id))continue;")
rep("if(id==='fish'&&['vid','tax'].includes(S.rg))x*=.2}","if(id==='fish'&&['vid','tax'].includes(S.rg))x*=.2}if(S.ch===22){if(id==='sow')x*=1.6;if(id==='temple')x*=1.3;if(id==='fish'&&wet22(S))x*=1.3;if(id==='fish'&&['fdt','phm','prg'].includes(S.rg))x*=.4}")
rep("else if(S.ch===20)trade20Year();","else if(S.ch===20)trade20Year();else if(S.ch===22)trade22Year();")
rep("S.ch===20?CARNOTE20:CARNOTE","S.ch===20?CARNOTE20:S.ch===22?CARNOTE22:CARNOTE",3)
rep("if(S.ch===20){if(k==='farmer'","if(S.ch===22){if(k==='farmer'&&(S.field||S.rg==='vil'))s+=1.2;if(k==='priest')s+=1.5;if(k==='trader'&&['oce','cyj','abr'].includes(S.rg))s+=.8;if(k==='fisher'&&wet22(S))s+=.5;if(k==='bead'&&['oce','cyj','uth'].includes(S.rg))s+=.6;if(k==='carver'&&['ang','phm','prg','stp','npt'].includes(S.rg))s+=.5;if(k==='caster'&&['prg','phm','ang','npt','cyj'].includes(S.rg))s+=.4;if(k==='dancer'&&['ang','phm','prg'].includes(S.rg))s+=.4;if(k==='mahout'&&['ang','lvo','phm'].includes(S.rg))s+=.4}if(S.ch===20){if(k==='farmer'")
rep("S&&S.ch===20?CAREERS20:CAREERS;","S&&S.ch===20?CAREERS20:S&&S.ch===22?CAREERS22:CAREERS;")
rep("v18Year(a);v20Year(a);","v18Year(a);v20Year(a);v22Year(a);")
rep("    log(S.ch===20?X('ลูกคนหนึ่ง","    log(S.ch===22?X('ลูกคนหนึ่งของคุณป่วยและจากไป ครอบครัวฝังร่างเล็กๆ ไว้ใต้ต้นไม้หลังบ้าน แล้วเลี้ยงผีบ้านให้ช่วยดูแล','One of your children falls ill and dies. The family buries the little body under a tree behind the house and feeds the house spirit to watch over it.'):S.ch===20?X('ลูกคนหนึ่ง")
rep("S.ch===20?amb20():","S.ch===22?ambS22():S.ch===20?amb20():")
rep("  if(S.ch===20)return title20(S);","  if(S.ch===20)return title20(S);\n  if(S.ch===22)return title22(S);")
rep("(S.ch===20&&REFLECT20[age])||","(S.ch===20&&REFLECT20[age])||(S.ch===22&&REFLECT22[age])||")
rep("(S.ch===20&&D.x20)||D.x,","(S.ch===20&&D.x20)||(S.ch===22&&D.x22)||D.x,")
rep("  if(S.ch===20)return fun20Note(S);","  if(S.ch===20)return fun20Note(S);\n  if(S.ch===22)return fun22Note(S);")
rep("  if(S.ch===20){fun20Opts(S,o,done,lead);return o.slice(0,3)}","  if(S.ch===20){fun20Opts(S,o,done,lead);return o.slice(0,3)}\n  if(S.ch===22){fun22Opts(S,o,done,lead);return o.slice(0,3)}")
rep("  if(a<5&&S.ch===20)return L(","  if(a<5&&S.ch===22)return L(X('ครอบครัวฝังร่างเล็กๆ ของคุณไว้ใต้ต้นไม้หลังบ้าน และวางข้าวไว้ที่ศาลผีบ้านทุกเย็น','Your family buries your small body under a tree behind the house, and leaves rice at the spirit shrine every evening.'));\n  if(a<5&&S.ch===20)return L(")
rep("  if(S.ch===20)parts.push(fun20Text(S));","  if(S.ch===22)parts.push(fun22Text(S));\n  else if(S.ch===20)parts.push(fun20Text(S));")
rep("  if(S.ch===20){const i=c.findIndex(x=>x[0]==='predator');",
    "  if(S.ch===22){const i=c.findIndex(x=>x[0]==='predator');if(i>=0)c[i][1]=.25;c.push(['fev22',.9]);if(S.field||S.rg==='vil'||S.car==='farmer')c.push(['snake22',.5]);if(wet22(S)||S.car==='fisher')c.push(['croc22',.25]);if(S.car==='trader'&&['oce','cyj'].includes(S.rg)&&a>=16)c.push(['sea22',.5]);if(S.car==='mahout'&&a>=16)c.push(['ele22',.7]);if(S.car==='mahout'&&a>=17&&a<50)c.push(['war22',1.2]);else if(S.sex==='m'&&a>=16&&a<50&&S.cls!=='dep'&&!S.monk22&&['ang','lat'].includes(eraS22(S.ya)))c.push(['war22',.25])}\n  if(S.ch===20){const i=c.findIndex(x=>x[0]==='predator');")
# scene flags
rep("gan20:S.ch===20,","suv22:S.ch===22,rg22:S.ch===22?S.rg:null,fall22:S.ch===22&&!!S.fall22,ya22:S.ch===22?ya:0,monks22:S.ch===22&&ya<=1450&&S.seed%3!==0&&!['oce','abr','phm','prg','ang'].includes(S.rg),gan20:S.ch===20,")
rep("  if(P.gan)drawGanga(ctx,gy,o,now);","  if(P.gan)drawGanga(ctx,gy,o,now);\n  if(P.suv)drawSuvarna(ctx,gy,o,now);")
rep("  if(o.gan20&&st!=='baby'){","  if(o.suv22&&st!=='baby'){const r22=drawAct22(ctx,o,act,gy,now,P);if(r22)return r22;if(['market','school','herb'].includes(act)){const r4=drawAct4(ctx,o,act,gy,now,P);if(r4)return r4}}\n  if(o.gan20&&st!=='baby'){")
# info rows, name, tags, epilogue, death tab
rep("    ...(S.ch===20?[[esc(L(X('ยุค','Era'))),",
    "    ...(S.ch===22?[[esc(L(X('ยุค','Era'))),esc(L(ERA22[eraS22(S.ya0)].n))+'<br><span class=\"small num\">'+esc(L(yr22(S.ya0)))+'</span>'],[esc(L(X('ฐานะ','Station'))),esc(L(var22(S)))+'<br><span class=\"small\">'+esc(L(VARNOTE22))+'</span>'],[esc(L(X('ผู้คน','People'))),esc(L(PEO22[S.peo22||'mon']))+'<br><span class=\"small\">'+esc(L(PEONOTE22))+'</span>']]:[]),\n    ...(S.ch===20?[[esc(L(X('ยุค','Era'))),")
rep("[t('kName'),S.ch===20?","[t('kName'),S.ch===22?'“'+nmL(S.name)+'”<br><span class=\"small\">'+esc(L(nameNote22(S)))+'</span>':S.ch===20?")
rep("  if(S.ch===20){tech.push(",
    "  if(S.ch===22){tech.push('<span class=\"tc\">'+esc(L(var22(S)))+'</span>');if(S.met22&&S.met22.length)tech.push('<span class=\"tc mam\">'+esc(L(X('ได้พบหรือเป็นพยาน','met or witnessed')))+' ×'+S.met22.length+'</span>');if((S.met22||[]).includes('golden'))tech.push('<span class=\"tc mam\">'+esc(L(X('เห็นโกลเด้นบอย','saw the Golden Boy')))+'</span>');if(S.don22)tech.push('<span class=\"tc mam\">'+esc(L(X('ชื่อบนจารึก','name in an inscription')))+'</span>');if(S.lit>=30)tech.push('<span class=\"tc\">'+esc(L(X('อ่านออกเขียนได้','literate')))+'</span>')}\n  if(S.ch===20){tech.push(")
rep("(S.ch===20?epi20(S):","(S.ch===22?epi22(S):S.ch===20?epi20(S):")
rep("$('#dTab').innerHTML='';if(S.ch===20){","$('#dTab').innerHTML='';if(S.ch===22){$('#tabH').textContent=L(X('บ้านเมืองในยุคของคุณ','The land in your age'));$('#dTab').appendChild(obj22Block(S))}if(S.ch===20){")
# chapter card + UI text
rep("card(20,'12','chGaT','chGaD',rng(20),clk(20),1)+card(5,'13',","card(20,'12','chGaT','chGaD',rng(20),clk(20),1)+card(22,'13','chSuT','chSuD',rng(22),clk(22),1)+card(5,'14',")
rep("chGaT:'ลุ่มน้ำคงคา","chSuT:'สุวรรณภูมิ: จากฟูนันถึงสุโขทัย',chSuD:'เกิดในดินแดนที่ต่อมาเป็นประเทศไทยและเพื่อนบ้าน ในช่วงพันสองร้อยปี ตั้งแต่เมืองท่าฟูนัน ทวารวดี และศรีเทพ ถึงปราสาทหินของพระนครและการตั้งสุโขทัย ดูช่างหล่อโกลเด้นบอย ช่วยยกทับหลังพนมรุ้ง เลี้ยงผีบ้าน และดูว่าคนมอญ เขมร มลายู และไท ผสมกันเป็นคนในภูมิภาคนี้ได้อย่างไร',chGaT:'ลุ่มน้ำคงคา")
rep("chGaT:'The Ganges","chSuT:'Suvarnabhumi: from Funan to Sukhothai',chSuD:'Be born in twelve hundred years of the land that became Thailand and its neighbours, from the ports of Funan, Dvaravati and Si Thep to the stone sanctuaries of Angkor and the founding of Sukhothai. Watch the Golden Boy being cast, help raise the Phanom Rung lintel, feed the house spirits, and see how Mon, Khmer, Malay and Tai people mixed into the people of this region.',chGaT:'The Ganges")
rep("<p>'+t('src19')+'</p>';","<p>'+t('src19')+'</p><p>'+t('src20')+'</p>';")
rep("src19:'บท 12","src20:'บท 13 สุวรรณภูมิ: พงศาวดารจีน (เหลียงซู ซินถังซู และบันทึกของคังไถ่ที่ถูกอ้างถึง) บันทึกของอี้จิง และโจวต้ากวน (บันทึกขนบธรรมเนียมของเจนละ) จารึกเขมร มอญ และสันสกฤต (ตามที่ระบุในเกม) ศิลาจารึกสุโขทัย ทีปวงศ์และมหาวงศ์ ตำนานจามเทวีวงศ์และชินกาลมาลีปกรณ์ เอกสารยูเนสโกเรื่องศรีเทพ (2023) ข่าวการส่งคืนโกลเด้นบอย (2024) และทับหลังพนมรุ้ง (1988) งานของ George Cœdès, Michael Vickery, Charles Higham, Dougald O’Reilly, ศรีศักร วัลลิโภดม และผาสุข อินทราวุธ และการขุดค้นที่ออกแก้ว อู่ทอง ศรีเทพ และนครปฐม',src19:'บท 12")
rep("src19:'Chapter 12","src20:'Chapter 13, Suvarnabhumi: the Chinese histories (Liang shu, New Book of Tang, and the quoted reports of Kang Tai), Yijing, and Zhou Daguan’s Customs of Cambodia; Khmer, Mon and Sanskrit inscriptions (as named in the game); the Sukhothai inscriptions; the Dipavamsa and Mahavamsa; the Camadevivamsa and Jinakalamali; UNESCO’s Si Thep nomination (2023); reports of the return of the Golden Boy (2024) and the Phanom Rung lintel (1988); the work of George Cœdès, Michael Vickery, Charles Higham, Dougald O’Reilly, Srisakra Vallibhotama and Phasook Indrawooth; and the excavations at Oc Eo, U Thong, Si Thep and Nakhon Pathom.',src19:'Chapter 12")
# sim output + test exports
rep("c20:S.ch===20?{","c22:S.ch===22?{met:(S.met22||[]).join(','),obj:(S.obj22||[]).join(','),var:S.var22,cls:S.cls,rg:S.rg,peo:S.peo22,path:S.path.join('>'),era:eraS22(S.ya0),car:S.car,clv:S.clv,monk:S.monk22,fall:S.fall22,lit:S.lit|0,saw:Object.keys(S.saw||{}).join(',')}:null,c20:S.ch===20?{")
rep("epi20,fun20Note,","epi22,fun22Note,fun22Text,title22,obj22Canvas,nameNote22,gump22,drawSuvarna,epi20,fun20Note,")
# faces
rep("const gan=F.ch===20,","const suv=F.ch===22,gan=F.ch===20,")
rep("else if(gan){cl=","else if(suv){cl=F.cls==='dep'?'#8a6a4a':F.cls==='elite'?'#c8463a':'#3a5a8a';cl2=F.cls==='elite'?'#d8a830':'#c8b898'}\n  else if(gan){cl=")
rep("if(typeof R20!=='undefined'&&R20[rg])return","if(typeof R22!=='undefined'&&R22[rg])return [3,5];if(typeof R20!=='undefined'&&R20[rg])return")
rep("if(S.ch===20)return [2,4];","if(S.ch===22)return [3,5];if(S.ch===20)return [2,4];")
# music + sound
rep("if(S.ch===20)return 'gan';","if(S.ch===20)return 'gan';if(S.ch===22)return 'suv';")
rep("gan:[0,2,4,6,7]},ROOT={gan:196,","gan:[0,2,4,6,7],suv:[0,2,4,7,9]},ROOT={suv:220,gan:196,")
rep("    gan:{mel:'pluck'","    suv:{mel:'bell',alt:'flute',dr:[1,0,0,1,0,1,0,0],df:120,drone:'reed'},\n    gan:{mel:'pluck'")
rep("    if(k==='gan'&&r()<.45)","    if(k==='suv'&&r()<.4){osc('sine',root/4,t,3.2,.07,G.mus,{a:.005,to:root/4*.97,toT:3});osc('sine',root/2*1.01,t,2.4,.025,G.mus,{a:.005})}\n    if(k==='gan'&&r()<.45)")
rep("carve20:(t,r)=>{if(r()<.22)for(let i=0;i<3;i++)knock(t+i*.2,2000,.05)},","carve20:(t,r)=>{if(r()<.22)for(let i=0;i<3;i++)knock(t+i*.2,2000,.05)},\n    rice22:(t,r)=>{if(r()<.16)splash(t,.04)},bead22:(t,r)=>{if(r()<.1)knock(t,3200,.02)},cast22:(t,r)=>{if(r()<.08)scratch(t,.03)},carve22:(t,r)=>{if(r()<.22)for(let i=0;i<3;i++)knock(t+i*.2,2000,.05)},fire22:(t,r)=>{if(r()<.05)osc('sine',660,t,2.5,.02,G.amb,{a:.005})},\n    ele22:(t,r)=>{if(r()<.03)osc('sawtooth',420,t,.9,.05,G.amb,{lp:1800,to:900,toT:.5,a:.05})},dance22:(t,r)=>{if(r()<.12)osc('sine',r()<.5?440:587,t,1.6,.025,G.amb,{a:.005})},")
rep("(o.gan20&&!['vil','kap','anu','klg'].includes(o.rg20||''))||","(o.suv22&&!['vil','fdt','prg','phm'].includes(o.rg22||''))||(o.gan20&&!['vil','kap','anu','klg'].includes(o.rg20||''))||")
rep("peacock:!!o.gan20&&!night&&!wx.rain,","peacock:(!!o.gan20||(!!o.suv22&&['stp','prg','phm','fdt','vil','hpj'].includes(o.rg22||'')))&&!night&&!wx.rain,")
# gump hook, names
rep("  if(!d&&S.ch===20)d=gump20(a);","  if(!d&&S.ch===20)d=gump20(a);\n  if(!d&&S.ch===22)d=gump22(a);")
rep("S.name=S.ch===20?mkName20(S):","S.name=S.ch===22?mkName22(S):S.ch===20?mkName20(S):")
rep("S.ch===20?gn20X(sx):null}","S.ch===20?gn20X(sx):S.ch===22?gn22X(sx):null}")
# the chapter itself
blk=''.join(open(B+f,encoding='utf-8').read()+'\n' for f in ['v23a.js','v23b.js','v23c.js','v23d.js'])
blk+="DEC.push(...DEC_IN22,...DEC_CAR22,...EVD22);EV.push(...EV22);\nlet chosenCar22=store.get('sit.car22','');if(chosenCar22&&!CAREERS22[chosenCar22])chosenCar22='';\n"
k="let chosenCar20=store.get('sit.car20','');if(chosenCar20&&!CAREERS20[chosenCar20])chosenCar20='';\n"
rep(k,k+blk)

# v0.23b: on the birth card, show the person's name first
_i=s.find("    [t('kName'),");_j=s.find("\n",_i)+1;_ln=s[_i:_j];s=s[:_i]+s[_j:]
_k=s.find("    [t('kSpecies'),'<b>'+L(S.sp.n)");assert _i>0 and _k>0
s=s[:_k]+_ln+s[_k:]
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
