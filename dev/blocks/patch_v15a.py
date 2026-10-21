# v0.15 part A: facts and continuity fixes from the play-test reports
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'PAL10' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)

# --- ch4: era boundaries match real dates (ya = BCE + 2025)
rep(" ed:{a:4900,b:4335,"," ed:{a:4900,b:4360,")
rep(" akk:{a:4335,b:4155,"," akk:{a:4360,b:4180,")
rep(" ur3:{a:4112,b:4004,"," ur3:{a:4137,b:4030,")
rep(" ob:{a:3900,b:3600,w:.26,wp:32,n:X('ยุคบาบิโลนเก่า สมัยพระเจ้าฮัมมูราบี','the Old Babylonian period, the age of Hammurabi')},",
    " ob:{a:3920,b:3620,w:.26,wp:32,n:X('ยุคบาบิโลนเก่า','the Old Babylonian period')},")
rep("const era4=ya=>ya>4900?'uruk':ya>4335?'ed':ya>4112?'akk':ya>4004?'ur3':ya>2700?'ob':'nb';",
    "const era4=ya=>ya>4900?'uruk':ya>4360?'ed':ya>4137?'akk':ya>4029?'ur3':ya>2700?'ob':'nb';")
rep("const CLSNOTE=X('สังคมเมโสโปเตเมียแบ่งเป็นชั้น กฎหมายของฮัมมูราบีแยกคนอิสระชั้นสูง สามัญชน และทาส โทษสำหรับความผิดเดียวกันจึงไม่เท่ากัน",
    "const CLSNOTE=X('สังคมเมโสโปเตเมียแบ่งเป็นชั้น ประมวลกฎหมายตั้งแต่ของอูร์-นัมมู (ราว 2100 ปีก่อนคริสตกาล) จนถึงของฮัมมูราบี (ราว 1754 ปีก่อนคริสตกาล) แยกคนอิสระชั้นสูง สามัญชน และทาส โทษสำหรับความผิดเดียวกันจึงไม่เท่ากัน")
rep("'Mesopotamian society was layered. Hammurabi’s laws distinguish free citizens, commoners and slaves,",
    "'Mesopotamian society was layered. Law codes from Ur-Nammu’s (about 2100 BCE) to Hammurabi’s (about 1754 BCE) distinguish free citizens, commoners and slaves,")
rep("const EPI4T=X(' หลังจากนั้นไม่มีใครอ่านอักษรรูปลิ่มออกอีกเกือบสองพันปี จนนักวิชาการถอดความได้ในทศวรรษ 1850",
    "const EPI4T=X(' อักษรรูปลิ่มยังถูกใช้ต่อมาอีกราวสองพันปี แผ่นสุดท้ายที่รู้จักเป็นตำราดาราศาสตร์ราว ค.ศ. 75 หลังจากนั้นไม่มีใครอ่านออกอีกเลย จนนักวิชาการถอดความได้ในทศวรรษ 1850")
rep("' Then no one could read cuneiform for nearly two thousand years, until scholars deciphered it in the 1850s.",
    "' Cuneiform went on being written for about two thousand more years; the last known tablet is an astronomical text from about 75 CE. After that no one could read it until scholars deciphered it in the 1850s.")

# --- ch5 Egypt
rep("E6({a:[6,70],w:1.4,f:'band',cond:S=>S.focus==='story',x:X('คนเล่านิทานเล่าเรื่องนักเวทที่ปั้นจระเข้ขี้ผึ้ง",
    "E6({a:[6,70],w:1.4,f:'band',cond:S=>S.focus==='story'&&['mk','nk'].includes(era6(S.ya)),x:X('คนเล่านิทานเล่าเรื่องนักเวทที่ปั้นจระเข้ขี้ผึ้ง")
rep("รัฐจึงเกณฑ์แรงงานไปทำงานก่อสร้าง ทีมคนงานที่กีซามีชื่อเรียกอย่าง","รัฐจึงเกณฑ์แรงงานไปทำงานก่อสร้าง ทีมคนงานที่สร้างพีระมิดกีซา (ราว 2550 ปีก่อนคริสตกาล) มีชื่อเรียกอย่าง")
n0=s.count("Gangs of workers at Giza had names such as")
if n0==1:rep("Gangs of workers at Giza had names such as","Gangs who built the Giza pyramids (about 2550 BCE) had names such as")
rep(" ok:X('พีระมิดที่สร้างในชั่วชีวิตของคุณจะตั้งอยู่ต่อไปกว่า 4,500 ปี"," ok:X('พีระมิดของยุคคุณจะตั้งอยู่ต่อไปกว่า 4,500 ปี")
rep("'The pyramids built in your lifetime will stand for more than 4,500 years.","'The pyramids of your age will stand for more than 4,500 years.")
rep(" the:{n:X('ธีบส์ นครของเทพอามุน','Thebes, city of the god Amun'),"," the:{n:X('ธีบส์ เมืองทางใต้ที่ต่อมากลายเป็นนครของเทพอามุน','Thebes, the southern town that later became the city of Amun'),")
rep(" the:X('ธีบส์ (วาเซต) เป็นนครของเทพอามุน มีวิหารคาร์นัค"," the:X('ธีบส์ (วาเซต) เป็นเมืองเล็กในยุคแรก แล้วกลายเป็นนครของเทพอามุนตั้งแต่ราชอาณาจักรกลาง มีวิหารคาร์นัค")
rep("'Thebes (Waset) was the city of Amun, with the temple of Karnak,","'Thebes (Waset) was a small town in early times and became the city of Amun from the Middle Kingdom, with the temple of Karnak,")
rep(" {pre:0,l:'hotep',th:'โฮเทป',h:'𓊵𓏏𓊪',s:'f',e:['ed','ok'],m:G=>X(G.th+' ทรงพอพระทัย','“'+G.l+' is satisfied”')},\n","")
rep(" {s:'f',l:'Baket',"," {s:'f',l:'Neithhotep',th:'เนทโฮเทป',h:'𓋋𓊵𓏏𓊪',m:X('“เทพีเนทพอพระทัย”','“Neith is satisfied”')},{s:'f',l:'Baket',")
rep("function mkName6(S){const n=genName6(S,S.sex),fa=genName6(S,'m');","function mkName6(S){const n=genName6(S,S.sex);let fa=genName6(S,'m');for(let i=0;i<8&&fa.l===n.l;i++)fa=genName6(S,'m');")
# corvee: only men haul stone; staying on at Giza only after going
rep("const corvee6=(id,deck,a)=>({id,deck,w:4,ch:6,a,rep:6,cond:S=>S.cls!=='elite',","const corvee6=(id,deck,a)=>({id,deck,w:4,ch:6,a,rep:6,cond:S=>S.cls!=='elite'&&S.sex==='m',")
rep(" o:[opt(X('ไปทำงานกับทีมของหมู่บ้าน','Go and work with your village gang'),S=>{fx({h:-3,b:4,f:3});"," o:[opt(X('ไปทำงานกับทีมของหมู่บ้าน','Go and work with your village gang'),S=>{S.corvWent=1;fx({h:-3,b:4,f:3});")
rep("{id:'a6_crew',deck:'adult',w:10,ch:6,a:[16,45],cond:S=>pyrEra(S)&&S.cls!=='elite'&&","{id:'a6_crew',deck:'adult',w:10,ch:6,a:[16,45],cond:S=>pyrEra(S)&&S.cls!=='elite'&&!!S.corvWent&&")

# --- names: no repeats within one life
rep("function mkP(k,age){const used=S.ppl.map(p=>p.n.th);const pool=PNAMES.filter(n=>!used.includes(n.th));const n=S.ch===6?nm4X(genName6(S,k==='partner'?(S.sex==='f'?'m':'f'):(rnd()<.5?'m':'f'),era6(S.ya))):S.ch===4?nm4X(genName4(S,k==='partner'?(S.sex==='f'?'m':'f'):(rnd()<.5?'m':'f'),era4(S.ya))):pick(pool.length?pool:PNAMES);",
    "function mkP(k,age){const used=S.ppl.map(p=>p.n.th).concat([S.name&&S.name.th,S.nm6&&S.nm6.fa&&S.nm6.fa.th,S.nm4&&S.nm4.fa&&S.nm4.fa.th].filter(Boolean),(S.kids||[]).map(x=>x.n&&x.n.th));const pool=PNAMES.filter(n=>!used.includes(n.th)&&!(S.ya>42000&&['Flute-Voice','Clay-Shaper'].includes(n.en)));\n  const g=()=>{const sx=k==='partner'?(S.sex==='f'?'m':'f'):(rnd()<.5?'m':'f');return S.ch===6?nm4X(genName6(S,sx,era6(S.ya))):S.ch===4?nm4X(genName4(S,sx,era4(S.ya))):null};let n=g();for(let i=0;n&&i<10&&used.includes(n.th);i++)n=g();if(!n)n=pick(pool.length?pool:PNAMES);")

# --- ch3 rice vs millet; dog with no pen
rep("const epi3=S=>['lev','ana','zag'].includes(S.rg)?EPI3.west:['yel','yan'].includes(S.rg)?EPI3.china:",
    "const epi3=S=>['lev','ana','zag'].includes(S.rg)?EPI3.west:S.rg==='yan'?EPI3.yan:S.rg==='yel'?EPI3.china:")
rep(" china:X('ข้าวฟ่างและข้าวจากลุ่มน้ำของคุณ"," yan:X('ข้าวจากลุ่มน้ำแยงซีของคุณจะเลี้ยงคนเป็นพันล้านในอนาคต ชาวนาจากแถบนี้จะเดินทางลงใต้ นำข้าวและหมูไปถึงเอเชียตะวันออกเฉียงใต้ รวมทั้งดินแดนที่เป็นไทยวันนี้ ราว 4,000 ปีก่อน','The rice of your Yangtze lands will one day feed billions. Farmers from here will move south, carrying rice and pigs into Southeast Asia, including today’s Thailand, about 4,000 years ago.'),\n china:X('ข้าวฟ่างจากลุ่มน้ำของคุณ")
rep("'The millet and rice of your rivers will one day feed billions.","'The millet of your Yellow River lands, with rice from the Yangtze, will one day feed billions.")
rep("return X('มันโตขึ้นและเห่าทุกครั้งที่มีอะไรเข้าใกล้คอก','It grows up and barks whenever anything nears the pen.')","return herdTot()>0?X('มันโตขึ้นและเห่าทุกครั้งที่มีอะไรเข้าใกล้คอก','It grows up and barks whenever anything nears the pen.'):X('มันโตขึ้นและเห่าทุกครั้งที่มีอะไรเข้าใกล้ที่พัก','It grows up and barks whenever anything nears the camp.')")

# --- epilogue claims that run ahead of the evidence
rep("คนทั้ง 8,000 ล้านคนในวันนี้สืบเชื้อสายจากประชากรรุ่นคุณ','Over the next tens of thousands of years your species will spread across the world and become the only human species left. All 8 billion people alive today descend from populations of your time.'),",
    "คนทั้ง 8,000 ล้านคนในวันนี้สืบเชื้อสายจากชาวแอฟริกาในยุคเดียวกับคุณ แต่กลุ่มที่ออกจากแอฟริการุ่นแรกๆ อาจไม่ได้มีลูกหลานเหลือถึงทุกวันนี้ ข้อนี้ยังถกเถียงกัน','Over the next tens of thousands of years your species will spread across the world and become the only human species left. All 8 billion people alive today descend from Africans of your time, though the earliest groups to leave Africa may have left no descendants today; this is still debated.'),")
rep("const EPI2={sap:X('ไม่กี่พันปีหลังจากนั้น น้ำแข็งละลาย","const EPI2={sap:X('หลังยุคของคุณ อีกหลายพันถึงหลายหมื่นปี น้ำแข็งจะละลาย")
rep("ลูกหลานของคุณจะเริ่มเก็บเมล็ดพืชมาปลูก","ผู้คนจะเริ่มเก็บเมล็ดพืชมาปลูก")
rep("'A few thousand years later the ice melts, the sea swallows the Beringia land bridge, and mammoths vanish from the mainland. Your descendants will start planting seeds.",
    "'Thousands or tens of thousands of years after your time, the ice melts, the sea swallows the Beringia land bridge, and mammoths vanish from the mainland. People will start planting seeds.")
rep("const EPI5={sap:X('ภายในไม่กี่ศตวรรษ ลูกหลานของนักเดินเรือรุ่นคุณตั้งถิ่นฐานทั่วสามเหลี่ยมโพลินีเซีย","const EPI5={sap:X('ในหลายร้อยปีหลังจากคุณ บางที่นานถึงสองพันปี ลูกหลานของนักเดินเรือแบบคุณจะตั้งถิ่นฐานทั่วสามเหลี่ยมโพลินีเซีย")
n1=s.count("'Within a few centuries, the descendants of voyagers like you settled")
if n1==1:rep("'Within a few centuries, the descendants of voyagers like you settled","'In the centuries after you, in some places up to two thousand years later, the descendants of voyagers like you settled")
else:
    import re
    m=re.search(r"const EPI5=\{sap:X\('[^']*','([^']*?)\s",s);print('EPI5 en start:',s[s.find("const EPI5"):s.find("const EPI5")+900].split("','")[1][:120])
rep("S.sp.id==='sap'&&S.chap>=3?X('สายพันธุ์ของเราเอง","S.sp.id==='sap'&&S.chap>=3&&S.chap!==9?X('สายพันธุ์ของเราเอง")
rep("{id:'partner2',a:[22,38],w:2,cond:S=>!S.partner,","{id:'partner2',a:[22,38],w:2,cond:S=>!S.partner&&S.done.partner!=null,")

# --- ch6 Indus: years forgotten follow the player's own date
rep("function epi8(S){const e=era8(S.ya0);let s=L(EPI8[e]);","function epi8(S){const e=era8(S.ya0);let s=L(EPI8[e]);const forgot=Math.round((Math.min(S.ya,3925)-102)/100)*100;")
rep("return s+L(EPI8T)}","return s+L(EPI8T).replace(/3([,.]?)700/g,(m,sep)=>sep?Math.floor(forgot/1000)+sep+String(forgot%1000).padStart(3,'0'):String(forgot))}")

# --- ch7 Aegean: no palace life after the palaces fell
rep("function init10(){","const PAL10=S=>{const e=era10(S.ya);return e==='min'||e==='myc'||(e==='col'&&S.ya>3185&&!S.burn10)};\nconst CLS10D={elite:X('ครอบครัวหัวหน้าท้องถิ่น (บาซิเลอุส)','the family of a local chief (basileus)'),free:X('ครอบครัวชาวบ้าน มีที่ดินของตัวเอง','a family of common people with land of their own'),dep:X('คนไร้ที่ดินที่รับจ้างทำนาให้คนอื่น','landless people who work other people’s fields'),slave:X('ทาสในบ้านของคนอื่น','slaves in another family’s house')};\nconst CLSNOTE10D=X('หลังวังล่มสลาย ไม่มีปันส่วนของวังและไม่มีอาลักษณ์อีกแล้ว อำนาจตกไปอยู่กับหัวหน้าท้องถิ่น คำว่า “บาซิเลอุส” เดิมในแผ่นลีเนียร์บีเป็นแค่ตำแหน่งเล็กๆ ในวัง (คาซิเรอุ) ต่อมากลายเป็นคำที่แปลว่ากษัตริย์','After the palaces fell, there were no palace rations and no scribes. Power passed to local chiefs: the word basileus, once a minor palace title in Linear B (qa-si-re-u), later came to mean king.');\nconst cls10=S=>PAL10(S)?CLS10[S.cls]:CLS10D[S.cls];const clsnote10=S=>PAL10(S)?CLSNOTE10:CLSNOTE10D;\nfunction init10(){")
rep("esc(L(CLS10[S.cls]))+'<br><span class=\"small\">'+esc(L(CLSNOTE10))+'</span>'","esc(L(cls10(S)))+'<br><span class=\"small\">'+esc(L(clsnote10(S)))+'</span>'")
rep("tech.push('<span class=\"tc\">'+esc(L(CLS10[S.cls]))+'</span>');","tech.push('<span class=\"tc\">'+esc(L(cls10(S)))+'</span>');")
rep("{id:'c10_laby',deck:'child',w:3,ch:10,a:[5,12],cond:S=>['kno','aeg'].includes(S.rg)&&era10(S.ya)!=='min',","{id:'c10_laby',deck:'child',w:3,ch:10,a:[5,12],cond:S=>['kno','aeg'].includes(S.rg)&&era10(S.ya)!=='min'&&PAL10(S),")
rep("{id:'y10_school',deck:'youth',w:4,ch:10,a:[11,17],cond:S=>S.cls!=='slave'&&era10(S.ya)!=='dark'&&S.lit<20,","{id:'y10_school',deck:'youth',w:4,ch:10,a:[11,17],cond:S=>S.cls!=='slave'&&PAL10(S)&&S.lit<20,")
rep("{id:'a10_ration',deck:'adult',w:5,ch:10,a:[16,55],cond:S=>S.cls==='dep'||S.cls==='slave',","{id:'a10_ration',deck:'adult',w:5,ch:10,a:[16,55],cond:S=>(S.cls==='dep'||S.cls==='slave')&&S.sex==='f'&&PAL10(S),")
rep("burn10:S.ch===10&&!!S.burn10,","burn10:S.ch===10&&(!!S.burn10||!PAL10(S)),")

# --- the seal of the Indus must not leak onto other chapters' death pages
i=s.find("$('#tabBlock').hidden=!civ(S.ch);")
assert i>0
rep("$('#tabBlock').hidden=!civ(S.ch);","$('#tabBlock').hidden=!civ(S.ch);$('#dTab').innerHTML='';")

# --- children counted honestly at death
rep("(S.kids.length?' · '+t('kids',{n:S.kids.length})+', '+t('kidsAlive',{n:S.kids.filter(k=>k.dies==null).length}):'');",
    "(S.kids.length?' · '+t('kids',{n:S.kids.length})+', '+t('kidsAlive',{n:S.kids.filter(k=>S.age-k.born>=15&&(k.dies==null||k.dies>=15)).length})+(S.kids.filter(k=>S.age-k.born<15&&(k.dies==null||k.born+k.dies>S.age)).length?', '+L(X('ยังเป็นเด็ก ','still children: '))+S.kids.filter(k=>S.age-k.born<15&&(k.dies==null||k.born+k.dies>S.age)).length:''):'');")
rep("&&herdTot()?L(X(' · ฝูงสัตว์ที่ทิ้งไว้: ',' · Herd left behind: '))+herdStr():'')","&&herdTot()?L(S.age<15?X(' · ฝูงสัตว์ของครอบครัว: ',' · The family’s herd: '):X(' · ฝูงสัตว์ที่ทิ้งไว้: ',' · Herd left behind: '))+herdStr():'')")

# --- events about children or grandchildren need them; rain events not in a drought year
rep("DEC.push(...DEC_IN10,...DEC_CAR10);EV.push(...EV10);","DEC.push(...DEC_IN10,...DEC_CAR10);EV.push(...EV10);\n{const KRX=/grandchild|grandchildren|\\byour (children|child|son|daughter|sons|daughters)\\b|\\bthe children get half/i,txt=e=>[e.x,e.t,e.n].map(v=>v&&v.en||'').join(' ')+' '+(e.o||[]).map(o=>(o.l&&o.l.en)||(o.t&&o.t.en)||'').join(' ');\n for(const e of [...EV,...DEC]){if(!KRX.test(txt(e)))continue;if(/^(c_|c\\d|y\\d|y_)/.test(e.id||'')||e.deck==='child')continue;const c=e.cond;e.cond=c?(S=>S.kids.length>0&&c(S)):(S=>S.kids.length>0)}\n const RRX=/heavy rain|downpour|pouring rain|storm of rain|rain pours/i;for(const e of EV){if(!RRX.test(e.x&&e.x.en||''))continue;const c=e.cond;e.cond=c?(S=>S.yt!=='dry'&&S.dis!=='drought'&&c(S)):(S=>S.yt!=='dry'&&S.dis!=='drought')}}")

open(F,'w',encoding='utf-8').write(s)
print('ok')
