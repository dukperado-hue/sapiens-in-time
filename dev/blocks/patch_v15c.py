# v0.15 part C: classroom mode, room code, sources for chapters 04-07, Pacific filter
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'CLASSM' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)

rep("const rnd=Math.random;","let RNDF=Math.random;const rnd=()=>RNDF();\nconst QS=new URLSearchParams(location.search||'');const CLASSM=QS.get('class')==='1'||QS.has('room');const ROOM=(QS.get('room')||'').replace(/[^0-9A-Za-z]/g,'').slice(0,12);\nconst CLASSX=new Set(['a6_drunk','c8_dice']);\nconst hash32=t=>{let h=2166136261;for(let i=0;i<t.length;i++){h^=t.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0};")
# room code: every student in the room is born as the same person (per chapter and life number)
rep("function newLife(){","let roomN=0;\nfunction newLife(){if(ROOM&&!TEST){RNDF=srng(hash32(ROOM+'|'+chap+'|'+(roomN++)))}else RNDF=Math.random;")
# classroom: realistic only, no drinking or gambling scenes
rep("function okEv(e,a){","function okEv(e,a){if(CLASSM&&(CLASSX.has(e.id)||/\\bdrunk|\\bgambl/i.test((e.x&&e.x.en)||'')))return false;if(S.ch===5&&!e.ch&&PALEO5.test([e.x,e.t,e.n].map(v=>v&&v.en||'').join(' ')))return false;")
rep("let chosenCar10=store.get('sit.car10','');","const PALEO5=/stone tool|hunter|gatherer|mammoth|\\bhides?\\b|\\bhail\\b|fire from the sky|before (people|anyone) knew how to make fire|land and (the )?herds/i;\nif(CLASSM)legOn=0;\nlet chosenCar10=store.get('sit.car10','');")
rep("  $('#sources').innerHTML='<p><b>'+t('sources')+'</b></p>","  {const b=document.querySelector('#home .brand');if(b)b.textContent='SAPIENS IN TIME'+(CLASSM?' · '+L(X('โหมดห้องเรียน','Classroom'))+(ROOM?' '+ROOM:''):'')}\n  $('#sources').innerHTML='<p><b>'+t('sources')+'</b></p>")
rep("<p>'+t('src9')+'</p>';","<p>'+t('src9')+'</p><p>'+t('src10')+'</p><p>'+t('src11')+'</p><p>'+t('src12')+'</p><p>'+t('src13')+'</p><p>'+t('src14')+'</p>';")
th=("src10:'บท 04 เมโสโปเตเมีย: ประมวลกฎหมายของอูร์-นัมมูและฮัมมูราบี จดหมายของนันนีถึงพ่อค้าเอีย-นาซีร์ (พิพิธภัณฑ์บริติช) และวรรณกรรมสุเมเรียนจากฐานข้อมูล ETCSL (มหาวิทยาลัยออกซฟอร์ด) ชื่อคนสร้างจากรูปแบบชื่อจริง การสะกดอักษรรูปลิ่มเป็นค่าประมาณ',"
    "src11:'บท 05 อียิปต์: ปาปิรุสเวสต์คาร์ (พิพิธภัณฑ์อียิปต์ เบอร์ลิน) บันทึกของเมเรอร์จากวาดีเอล-จาร์ฟ งานขุดค้นเมืองคนงานกีซา (Mark Lehner, AERA) และบันทึกของหมู่บ้านช่างเดร์เอล-เมดินา ชื่อและอักษรภาพสร้างจากรูปแบบชื่อจริง',"
    "src12:'บท 06 สินธุ: harappa.com (J. M. Kenoyer) พิพิธภัณฑ์เพนน์ Robbins Schug และคณะ (2013, PLOS ONE) เรื่องโรคและความรุนแรงที่ฮารัปปา Shinde และคณะ (2019, Cell) เรื่อง DNA ราคีครหี และ Petrie และคณะ (2017, Current Anthropology) เรื่องพืชกับมรสุม ตัวอักษรในเกมเลียนแบบรูปทรงเท่านั้น',"
    "src13:'บท 07 อีเจียน: แผ่นอักษรลีเนียร์บี (Ventris และ Chadwick, Documents in Mycenaean Greek) จดหมายจากอูการิต ซากเรืออูลูบูรุน (Cemal Pulak, INA) Eric H. Cline (1177 B.C.) และ Knapp และ Manning (2016) เรื่องสภาพอากาศกับการล่มสลาย ปีของภูเขาไฟเธรายังถกเถียงกัน',"
    "src14:'อัตราตายของเด็กในสังคมก่อนยุคใหม่: Volk และ Atkinson (2013, Evolution and Human Behavior) ส่วนอัตราของไทยวันนี้: UN IGME โหมดห้องเรียน: เติม ?class=1 ต่อท้ายลิงก์ หรือ ?room=รหัส ให้ทั้งห้องเกิดเป็นคนเดียวกัน',")
en=("src10:'Chapter 04, Mesopotamia: the law codes of Ur-Nammu and Hammurabi, Nanni’s letter to the merchant Ea-nasir (British Museum), and Sumerian literature from the ETCSL database (University of Oxford). Names follow real name patterns; cuneiform spellings are approximate.',"
    "src11:'Chapter 05, Egypt: the Westcar Papyrus (Egyptian Museum, Berlin), the diary of Merer from Wadi al-Jarf, excavations of the Giza workers’ town (Mark Lehner, AERA), and records of the Deir el-Medina workmen’s village. Names and hieroglyphs follow real name patterns.',"
    "src12:'Chapter 06, Indus: harappa.com (J. M. Kenoyer), the Penn Museum, Robbins Schug et al. (2013, PLOS ONE) on disease and violence at Harappa, Shinde et al. (2019, Cell) on Rakhigarhi DNA, and Petrie et al. (2017, Current Anthropology) on crops and the monsoon. The game’s signs only imitate shapes.',"
    "src13:'Chapter 07, Aegean: Linear B tablets (Ventris and Chadwick, Documents in Mycenaean Greek), letters from Ugarit, the Uluburun wreck (Cemal Pulak, INA), Eric H. Cline (1177 B.C.), and Knapp and Manning (2016) on climate and the collapse. The date of the Thera eruption is still debated.',"
    "src14:'Child deaths in pre-modern societies: Volk and Atkinson (2013, Evolution and Human Behavior); Thailand today: UN IGME. Classroom mode: add ?class=1 to the link, or ?room=CODE so the whole class is born as the same person.',")
rep("sources:'แหล่งข้อมูลและข้อจำกัด',","sources:'แหล่งข้อมูลและข้อจำกัด',"+th)
i=s.find("src8:'Line of travellers:");assert i>0
s=s[:i]+en+s[i:]
open(F,'w',encoding='utf-8').write(s)
print('ok')
