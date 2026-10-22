/* ================= v0.19 CHAPTER 18 (shown as 11): ROME, FROM THE ELEPHANTS TO THE FALL ================= */
const ERA18={
 rep:{a:2289,b:2158,w:.22,wp:150,n:X('ยุคสาธารณรัฐ: สงครามกับคาร์เธจและช้างของฮันนิบาล','the Republic: the wars with Carthage and Hannibal’s elephants')},
 civ:{a:2158,b:2052,w:.2,wp:200,n:X('ยุคสงครามกลางเมือง: จากพี่น้องกรากคัสถึงซีซาร์','the civil wars: from the Gracchi to Caesar')},
 pax:{a:2052,b:1833,w:.36,wp:250,n:X('ยุคจักรวรรดิรุ่งเรือง: สันติภาพโรมัน','the Empire at its height: the Roman peace')},
 late:{a:1833,b:1549,w:.22,wp:220,n:X('ยุคปลาย: จักรพรรดิประมูลได้ โรคระบาด และจักรวรรดิแยกเป็นสองฝั่ง','the late Empire: a throne for sale, plagues, and an empire split in two')}};
const era18=ya=>ya>2158?'rep':ya>2052?'civ':ya>1833?'pax':'late';
/* year label: BCE or CE */
const yr18=ya=>{const y=2025-ya;return y<=0?X(fmt(1-y)+' ปีก่อนคริสตกาล',fmt(1-y)+' BCE'):X('ค.ศ. '+fmt(y),fmt(y)+' CE')};
const R18={
 rom:{pop:{rep:12,civ:16,pax:18,late:10}},
 pom:{pop:{pax:6}},
 ost:{pop:{civ:3,pax:5,late:3}},
 crt:{pop:{rep:8,pax:4,late:4}},
 alx:{pop:{civ:3,pax:7,late:6}},
 jud:{pop:{civ:3,pax:5}},
 bri:{pop:{pax:4,late:4}},
 gal:{pop:{rep:5,civ:6,pax:5,late:5}},
 cpl:{pop:{late:8}},
 vil:{pop:{rep:30,civ:26,pax:22,late:24}}};
Object.assign(REGIONS,{
 rom:{n:X('กรุงโรม เมืองบนเนินเขาเจ็ดลูกริมแม่น้ำไทเบอร์','Rome, the city of seven hills on the Tiber'),sc:'roma',food:1,cold:0,dry:0},
 pom:{n:X('ปอมเปอี เมืองชายทะเลใต้ภูเขาวิสุเวียส','Pompeii, the seaside town below Mount Vesuvius'),sc:'romap',food:2,cold:0,dry:0},
 ost:{n:X('ออสเตีย เมืองท่าของกรุงโรม','Ostia, the port of Rome'),sc:'romao',food:1,cold:0,dry:0},
 crt:{n:X('คาร์เธจ เมืองท่าบนชายฝั่งแอฟริกา','Carthage, the harbour city on the African coast'),sc:'romac',food:2,cold:0,dry:1},
 alx:{n:X('อเล็กซานเดรีย เมืองท่าใหญ่ของอียิปต์โรมัน','Alexandria, the great port of Roman Egypt'),sc:'romae',food:2,cold:0,dry:1},
 jud:{n:X('แคว้นยูเดีย ระหว่างเยรูซาเล็มกับแคว้นกาลิลี','Judaea, between Jerusalem and Galilee'),sc:'romaj',food:1,cold:0,dry:1},
 bri:{n:X('ค่ายทหารริมชายแดนบริทันเนีย','a fort on the frontier of Britannia'),sc:'romab',food:1,cold:1,dry:0},
 gal:{n:X('หมู่บ้านชาวกอลในป่า','a village of the Gauls in the forest'),sc:'romag',food:2,cold:1,dry:0},
 cpl:{n:X('คอนสแตนติโนเปิล กรุงโรมใหม่บนช่องแคบบอสพอรัส','Constantinople, the New Rome on the Bosporus'),sc:'romak',food:1,cold:0,dry:0},
 vil_18:{n:X('หมู่บ้านชาวนาในชนบทอิตาลี','a farming village in the Italian countryside'),sc:'romav',food:2,cold:0,dry:0}});
Object.assign(COORD,{rom:[41.89,12.49],pom:[40.75,14.49],ost:[41.75,12.29],crt:[36.85,10.32],alx:[31.20,29.92],jud:[31.78,35.23],bri:[54.99,-2.36],gal:[46.0,4.0],cpl:[41.01,28.98],vil_18:[42.4,12.1]});
for(const k in R18){NEIGH[k]=[];VR[k]=['plain'];R3[k==='vil'?'vil_18':k]={vil:99999,share:0,plant:{ya:99999,n:k==='gal'||k==='bri'?X('ข้าวสาลี ข้าวบาร์เลย์ และถั่ว','wheat, barley and beans'):X('ข้าวสาลี มะกอก และองุ่น','wheat, olives and grapes')},ani:['sheep','goat','pig','cattle'],hunt:'boar',pred:X('หมาป่า','A wolf')};
  for(const a of ['sheep','goat','pig','cattle']){DOMYA[a]=DOMYA[a]||{};DOMYA[a][k]=99999}}
DRYR.push('crt','alx','jud');
SC.roma={d:['#86bcd8','#f2dcae'],n:['#0a0f24','#22233c'],far:'#9a8a70',near:'#8a7a5a',gr:'#9a9a5a',riv:'#5a8a8e',tree:'pine',rom:1};
SC.romap=Object.assign({},SC.roma,{riv:null,sea:'#2f7fa0',volc:1,far:'#7d6c59'});
SC.romao=Object.assign({},SC.roma,{riv:null,sea:'#2f7fa0',tree:'pine'});
SC.romac=Object.assign({},SC.roma,{riv:null,sea:'#2f7fa0',tree:'palm',far:'#c2a878',gr:'#c2ad78'});
SC.romae=Object.assign({},SC.roma,{riv:null,sea:'#2f7fa0',tree:'palm',far:'#c9b38a',gr:'#c2ad78'});
SC.romaj=Object.assign({},SC.roma,{riv:null,tree:'olive',far:'#b9a47c',near:'#a8925f',gr:'#b3a06a'});
SC.romab=Object.assign({},SC.roma,{riv:null,d:['#9fb4c4','#dfe2dc'],far:'#6f7a62',near:'#5b6b4c',gr:'#6f8a4a',tree:'birch'});
SC.romag=Object.assign({},SC.roma,{riv:'#4f7a7e',far:'#4f6a48',near:'#3e5a3a',gr:'#5f7a42',tree:'broad',dense:1});
SC.romak=Object.assign({},SC.roma,{riv:null,sea:'#2a7096',tree:'pine'});
SC.romav=Object.assign({},SC.roma,{riv:null,tree:'olive',gr:'#a0a05c'});
const RNOTE18={
 rom:X('กรุงโรมในยุครุ่งเรืองอาจมีคนราวหนึ่งล้านคน มากที่สุดในโลกตะวันตกจนถึงศตวรรษที่ 19 คนจนอยู่ในตึกเช่าหลายชั้นที่เรียกว่า “อินซูลา” ซึ่งมักไม่มีครัว ไฟไหม้บ่อย และยิ่งชั้นสูงยิ่งค่าเช่าถูก เพราะหนีไฟยาก','At its height Rome may have held about a million people, more than any Western city until the 19th century. The poor lived in tall rented blocks called insulae, often without kitchens; fires were common, and the higher the floor, the cheaper the rent, because it was harder to escape.'),
 pom:X('ปอมเปอีเป็นเมืองขนาดกลาง มีคนราว 10,000–20,000 คน ภูเขาไฟวิสุเวียสระเบิดในปี ค.ศ. 79 และฝังเมืองไว้ใต้เถ้าถ่าน ทำให้เราเห็นชีวิตประจำวันของชาวโรมันได้ละเอียดที่สุด ตั้งแต่ขนมปังในเตาจนถึงข้อความที่คนเขียนบนกำแพง','Pompeii was a middling town of perhaps 10,000–20,000 people. Vesuvius erupted in 79 CE and buried it in ash, giving us the most detailed picture of everyday Roman life, from loaves in the ovens to the messages people scrawled on walls.'),
 ost:X('ออสเตียคือท่าเรือที่ปากแม่น้ำไทเบอร์ ข้าวสาลีจากอียิปต์และแอฟริกาขึ้นฝั่งที่นี่เพื่อเลี้ยงคนในกรุงโรม ซากเมืองยังมีส้วมสาธารณะที่ที่นั่งหินเรียงกัน ร้านอาหาร และโกดังให้เดินชมทุกวันนี้','Ostia was the harbour at the mouth of the Tiber, where grain from Egypt and Africa landed to feed Rome. Its ruins still have public latrines with rows of stone seats, snack bars and warehouses to walk through today.'),
 crt:X('คาร์เธจก่อตั้งโดยชาวฟินีเซีย เป็นคู่แข่งของโรมในสงครามพิวนิกสามครั้ง ถูกโรมทำลายในปี 146 ปีก่อนคริสตกาล และถูกสร้างใหม่เป็นเมืองโรมันในสมัยจูเลียส ซีซาร์และออกัสตัส จนกลายเป็นเมืองใหญ่อันดับต้นๆ ของจักรวรรดิ','Carthage, founded by Phoenicians, fought Rome in three Punic Wars, was destroyed in 146 BCE, and was rebuilt as a Roman city under Julius Caesar and Augustus, becoming one of the great cities of the Empire.'),
 alx:X('หลังคลีโอพัตราตายในปี 30 ปีก่อนคริสตกาล อียิปต์เป็นของจักรพรรดิโรมันโดยตรง ข้าวสาลีจากอียิปต์เลี้ยงกรุงโรม และจากท่าเรือบนทะเลแดง เรือโรมันแล่นไปถึงอินเดียทุกปีตามลมมรสุม','After Cleopatra died in 30 BCE, Egypt belonged directly to the Roman emperor. Its wheat fed Rome, and from ports on the Red Sea Roman ships sailed to India every year on the monsoon winds.'),
 jud:X('แคว้นยูเดียอยู่ใต้อำนาจโรมันตั้งแต่ 63 ปีก่อนคริสตกาล ชาวยิวที่นี่ไหว้พระเจ้าองค์เดียวและไม่ยอมบูชาจักรพรรดิ ทำให้ขัดแย้งกับโรมหลายครั้ง จนวิหารในเยรูซาเล็มถูกทำลายในปี ค.ศ. 70','Judaea was under Roman power from 63 BCE. Its Jewish people worshipped one God and would not worship the emperor, leading to repeated conflict with Rome until the Temple in Jerusalem was destroyed in 70 CE.'),
 bri:X('บริทันเนียเป็นชายแดนเหนือสุดของจักรวรรดิ ทหารที่นี่มาจากทั่วจักรวรรดิ ทั้งชาวเยอรมัน ชาวซีเรีย และชาวแอฟริกาเหนือ ป้อมวินโดแลนดาใกล้กำแพงฮาเดรียนเก็บจดหมายบนแผ่นไม้บางๆ ไว้ในโคลนได้กว่าพันปี','Britannia was the Empire’s northernmost frontier. Its soldiers came from all over the Empire: Germans, Syrians, North Africans. The fort of Vindolanda near Hadrian’s Wall preserved letters on thin wooden tablets in its mud for well over a thousand years.'),
 gal:X('ชาวกอลพูดภาษาเคลต์ ดื่มเบียร์และเหล้าองุ่นที่ซื้อจากพ่อค้าโรมัน จูเลียส ซีซาร์พิชิตกอลในปี 58–50 ปีก่อนคริสตกาล หลังจากนั้นภาษาละตินค่อยๆ กลายเป็นภาษาฝรั่งเศสในหลายร้อยปีต่อมา','The Gauls spoke a Celtic language and drank beer, along with wine bought from Roman traders. Julius Caesar conquered Gaul in 58–50 BCE; over the following centuries Latin slowly turned into French.'),
 cpl:X('จักรพรรดิคอนสแตนตินตั้งคอนสแตนติโนเปิลเป็นเมืองหลวงใหม่ในปี ค.ศ. 330 บนที่ตั้งเมืองกรีกเก่าชื่อไบแซนเทียม คนที่นี่พูดภาษากรีกแต่เรียกตัวเองว่า “ชาวโรมัน” และจักรวรรดิฝั่งตะวันออกอยู่ต่อได้อีกกว่าพันปี','The emperor Constantine dedicated Constantinople as a new capital in 330 CE, on the site of the old Greek city of Byzantium. Its people spoke Greek but called themselves “Romans”, and the eastern Empire lasted another thousand years.'),
 vil:X('คนส่วนใหญ่ในจักรวรรดิไม่ได้อยู่ในเมือง แต่เป็นชาวนาที่ปลูกข้าวสาลี มะกอก และองุ่น หลายคนทำไร่ให้เจ้าที่ดินใหญ่ หรือทำงานเคียงข้างทาสในไร่ขนาดใหญ่ที่เรียกว่า “ลาติฟุนเดีย”','Most people in the Empire did not live in cities but were farmers growing wheat, olives and grapes. Many worked for great landowners, or alongside slaves on the big estates called latifundia.')};
function pickEra18(){const ks=Object.keys(ERA18);return weighted(ks.map(k=>[k,ERA18[k].w]))}
function yaFor18(e){const E=ERA18[e];return Math.round((E.b+rnd()*(E.a-E.b))/5)*5}
function pickCity18(e,ya){const ks=Object.keys(R18).filter(k=>R18[k].pop[e]&&!(k==='pom'&&(ya<1960||ya>2010))&&!(k==='crt'&&ya<=2171&&ya>2070)&&!(k==='alx'&&ya>2060)&&!(k==='jud'&&(ya>2085||ya<1910))&&!(k==='bri'&&(ya>1980||ya<1620))&&!(k==='cpl'&&ya>1700)&&!(k==='ost'&&ya<1700));return weighted(ks.map(k=>[k,R18[k].pop[e]]))}
const pw18=(rg,ya)=>{const e=era18(ya);return (R18[rg].pop[e]||10)*1000/(ERA18[e].wp*1e6)};
const NAMENOTE18=X('ผู้ชายที่เป็นพลเมืองโรมันมีสามชื่อ: ชื่อตัว ชื่อตระกูล และฉายา ส่วนผู้หญิงมักใช้แค่ชื่อตระกูลในรูปผู้หญิง','Male Roman citizens had three names: a personal name, a family name and a nickname. Women usually used only the feminine form of the family name.');

/* ---------- names ---------- */
const NM18={pre:['Gaius','Lucius','Marcus','Publius','Quintus','Titus','Gnaeus','Sextus'],preT:['กายุส','ลูซิอุส','มาร์คุส','พูบลิอุส','ควินตุส','ติตุส','เนอุส','เซกตุส'],
 nom:['Julius','Cornelius','Valerius','Claudius','Aemilius','Fabius','Sempronius','Junius'],nomT:['ยูลิอุส','คอร์เนลิอุส','วาเลริอุส','คลาวดิอุส','เอมิลิอุส','ฟาบิอุส','เซมโปรนิอุส','ยูนิอุส'],
 cog:[['รูฟุส','Rufus',X('ผมแดง','red-haired')],['นาโซ','Naso',X('จมูกใหญ่','big nose')],['ซิเซโร','Cicero',X('ถั่วลูกไก่','chickpea')],['บรูตุส','Brutus',X('ทึ่ม','dim-witted')],['คราสซุส','Crassus',X('อ้วน','fat')],['คาลวุส','Calvus',X('หัวล้าน','bald')],['สตราโบ','Strabo',X('ตาเหล่','squinter')],['เฟลิกซ์','Felix',X('โชคดี','lucky')],['ไคคุส','Caecus',X('ตาบอด','blind')]],
 sl:[['เอรอส','Eros',X('ความรัก ชื่อกรีกที่มักตั้งให้ทาส','love: a Greek name often given to slaves')],['เฮอร์เมส','Hermes',X('ชื่อเทพ ที่มักตั้งให้ทาส','a god’s name, often given to slaves')],['ฟิเลโรส','Phileros',X('ผู้รักความรัก ชื่อกรีกที่มักตั้งให้ทาส','love-lover: a Greek name often given to slaves')],['ไซรา','Syra',X('หญิงชาวซีเรีย','the Syrian woman')],['เฟลิซูลา','Felicula',X('โชคดีน้อย','little lucky one')]],
 jm:[['ชิมอน','Shimon',X('ผู้ฟัง ชื่อชายที่พบบ่อยที่สุดในยูเดียยุคนี้','he has heard: the commonest man’s name in Judaea at this time')],['โยเซฟ','Yosef',X('ขอพระเจ้าทรงเพิ่ม','may God add')],['เอเลอาซาร์','Eleazar',X('พระเจ้าทรงช่วย','God has helped')]],
 jf:[['มาเรียม','Mariam',X('ชื่อหญิงที่พบบ่อยที่สุดในยูเดียยุคนี้','the commonest woman’s name in Judaea at this time')],['ชาโลม','Shelamzion',X('สันติภาพแห่งศิโยน','peace of Zion')]],
 cm:[['ลิตาวิคุส','Litavicus',X('ชื่อชาวกอลที่จูเลียส ซีซาร์บันทึกไว้','a Gaulish name recorded by Julius Caesar')],['คาตูโวลคุส','Catuvolcus',X('เหยี่ยวแห่งสงคราม','battle-hawk')]],
 cf:[['ตันโคริกซ์','Tancorix',X('ชื่อหญิงชาวเคลต์จากหลุมศพในบริเตน','a Celtic woman’s name from a tombstone in Britain')]]};
function mkName18(S){const r=S.rg;let n;
  if(S.cls==='slave'){const p=pick(NM18.sl);n={th:p[0],en:p[1],m:p[2]}}
  else if(r==='jud'){const p=pick(S.sex==='f'?NM18.jf:NM18.jm);n={th:p[0],en:p[1],m:p[2]}}
  else if((r==='gal'||r==='bri')&&S.cls!=='elite'){const p=pick(S.sex==='f'?NM18.cf:NM18.cm);n={th:p[0],en:p[1],m:p[2]}}
  else{const ni=S.forceNom18!=null?S.forceNom18:(rnd()*NM18.nom.length)|0;S.nom18=ni;
    if(S.sex==='f'){const fe=NM18.nom[ni].replace(/us$/,'a'),ft=NM18.nomT[ni].replace(/อุส$/,'อา').replace(/ุส$/,'า');const ord=pick([['',''],[' ไมออร์',' Maior'],[' ไมนอร์',' Minor'],[' แตร์เตีย',' Tertia']]);n={th:ft+ord[0],en:fe+ord[1],m:X('ผู้หญิงใช้ชื่อตระกูลของพ่อ ถ้ามีพี่น้องหญิงหลายคนก็เติม “คนโต” “คนเล็ก” หรือ “คนที่สาม”','a woman took her father’s family name; sisters were told apart as “elder”, “younger” or “third”')}}
    else{const pi=(rnd()*NM18.pre.length)|0,c=pick(NM18.cog);n={th:NM18.preT[pi]+' '+NM18.nomT[ni]+' '+c[0],en:NM18.pre[pi]+' '+NM18.nom[ni]+' '+c[1],m:c[2]}}}
  S.nm18=n;return X(n.th,n.en)}
const gn18X=(sx,k)=>{const S0={sex:sx,cls:'free',rg:S&&S.rg||'rom'};if(k==='sib'&&S&&S.nom18!=null&&!['jud','gal','bri'].includes(S.rg)){S0.forceNom18=S.nom18;S0.rg='rom'}return mkName18(S0)};
function nameNote18(S){const n=S.nm18;if(!n)return NAMENOTE18;
  if(S.cls==='slave')return X('ชื่อของคุณ “'+n.th+'” แปลว่า '+n.m.th+' ทาสได้ชื่อเดียว ถ้าได้รับอิสรภาพจะได้ชื่อตระกูลของนายเก่าเพิ่ม','Your name, '+n.en+', means “'+n.m.en+'”. A slave had one name; on being freed, they took their former owner’s family name too.');
  return X('ชื่อของคุณ “'+n.th+'” — '+n.m.th+' '+NAMENOTE18.th+' ฉายามักมาจากลักษณะของบรรพบุรุษสักคน เช่น ซิเซโร แปลว่า “ถั่วลูกไก่” ชื่อในเกมเป็นชื่อโรมันจริง แต่ตัวคนแต่งขึ้น','Your name, '+n.en+': '+n.m.en+'. '+NAMENOTE18.en+' Nicknames often came from some ancestor’s looks: Cicero means “chickpea”. The names in the game are real Roman names; the people are invented.')}

/* ---------- careers ---------- */
const CAREERS18={
farmer:{n:X('ชาวนา','Farmer'),act:'sow',sk:'kn',ok:S=>S.cls!=='elite'&&!['rom','ost','cpl'].includes(S.rg),
 L:[X('เด็กไล่กาในไร่ข้าวสาลี','a child who scares crows from the wheat'),X('ชาวนา','a farmer'),X('ชาวนาที่มีไร่องุ่นของตัวเอง','a farmer with a vineyard of their own'),X('ผู้อาวุโสที่หมู่บ้านทั้งหมู่บ้านเชื่อฟัง','the elder the whole village heeds')]},
legion:{n:X('ทหารลีเจียน','Legionary'),act:'job',scene:'march',sk:'sv',l:X('เดินทัพวันละ 30 กิโลเมตรพร้อมสัมภาระ แล้วขุดคูสร้างค่ายทุกคืน','March 30 kilometres a day under full pack, then dig a fortified camp every night'),ok:S=>S.sex==='m'&&S.cls!=='slave',
 L:[X('เด็กที่ตามกองทัพแบกหม้อ','a boy who trails the army carrying pots'),X('ทหารลีเจียน','a legionary'),X('ผู้ถือธงนกอินทรี','the eagle-bearer'),X('นายร้อยเซนทูริออน','a centurion')]},
baker:{n:X('คนทำขนมปัง','Baker'),act:'job',scene:'bake18',sk:'cr',l:X('โม่แป้งด้วยลา อบขนมปังก้อนกลมแบ่งแปดชิ้นตั้งแต่ก่อนรุ่งสาง','Grind flour with a donkey-driven mill and bake round eight-part loaves before dawn'),item:'bread18',ok:S=>!['gal','bri'].includes(S.rg),
 L:[X('เด็กปั้นแป้ง','a child who shapes the dough'),X('คนทำขนมปัง','a baker'),X('เจ้าของร้านขนมปังที่มีเตาของตัวเอง','a baker with an oven of their own'),X('คนทำขนมปังที่ทั้งเมืองรู้จักตราประทับ','the baker whose stamp the whole town knows')]},
fuller:{n:X('ช่างซักผ้า','Fuller'),act:'job',scene:'full18',sk:'sv',l:X('ย่ำผ้าในอ่างปัสสาวะให้ขาวสะอาด','Tread cloth in tubs of urine until it comes up white'),ok:S=>S.cls!=='elite'&&['rom','pom','ost','crt','alx','vil'].includes(S.rg),
 L:[X('เด็กเก็บไหปัสสาวะตามหัวมุมถนน','a child who collects the urine pots from the street corners'),X('ช่างซักผ้า','a fuller'),X('หัวหน้าโรงซักผ้า','the foreman of a fullery'),X('เจ้าของโรงซักผ้าที่รวยกว่าเจ้าที่ดินบางคน','a fullery owner richer than some landowners')]},
trader:{n:X('พ่อค้าทางทะเล','Sea trader'),act:'job',scene:'boat10',sk:'so',l:X('ขนเหล้าองุ่น น้ำมันมะกอก และน้ำปลาหมักการุมข้ามทะเล','Ship wine, olive oil and fermented garum fish sauce across the sea'),ok:S=>S.cls!=='slave'&&!['vil','gal','bri','jud'].includes(S.rg),
 L:[X('เด็กนับไหบนเรือ','a child who counts the jars on board'),X('พ่อค้า','a trader'),X('พ่อค้าที่ส่งเรือไปถึงอินเดีย','a trader whose ships reach India'),X('พ่อค้าที่รวยพอจะซื้อตำแหน่งในสภาเมือง','a trader rich enough to buy a seat on the town council')]},
gladiator:{n:X('กลาดิเอเตอร์','Gladiator'),act:'job',scene:'arena18',sk:'sv',l:X('ฝึกสู้ในโรงเรียนกลาดิเอเตอร์ กินข้าวบาร์เลย์และถั่ว','Train in a gladiator school on barley and beans'),ok:S=>S.sex==='m'&&(S.cls==='slave'||S.cls==='dep'||S.gladOK)&&['rom','pom','crt','alx','vil','gal'].includes(S.rg),
 L:[X('เด็กเก็บทรายในสนาม','a child who rakes the sand in the arena'),X('กลาดิเอเตอร์มือใหม่','a novice gladiator'),X('กลาดิเอเตอร์ที่มีแฟนเขียนชื่อบนกำแพง','a gladiator whose fans write his name on walls'),X('กลาดิเอเตอร์ที่ได้ดาบไม้แห่งอิสรภาพ','a gladiator awarded the wooden sword of freedom')]},
builder:{n:X('ช่างก่อสร้าง','Builder'),act:'job',scene:'road18',sk:'cr',l:X('สร้างถนน ซุ้มโค้ง และท่อส่งน้ำด้วยคอนกรีตโรมัน','Build roads, arches and aqueducts with Roman concrete'),ok:S=>S.cls!=='elite',
 L:[X('เด็กแบกหิน','a child who carries stones'),X('ช่างก่อสร้าง','a builder'),X('ช่างที่วัดความลาดของท่อส่งน้ำ','the builder who levels the aqueduct channel'),X('สถาปนิกที่ได้สลักชื่อไว้บนสะพาน','an architect whose name is carved on a bridge')]},
scribe:{n:X('อาลักษณ์และครู','Scribe and teacher'),act:'job',scene:'school',sk:'kn',l:X('เขียนจดหมาย ทำบัญชี และสอนเด็กอ่านเขียนภาษาละตินกับกรีก','Write letters, keep accounts and teach children Latin and Greek'),ok:S=>S.lit>=25||S.cls==='slave'&&S.rg!=='vil',
 L:[X('เด็กที่ขูดตัวหนังสือบนแผ่นขี้ผึ้ง','a child scratching letters on a wax tablet'),X('อาลักษณ์','a scribe'),X('เลขานุการของคนรวย','a rich man’s secretary'),X('อาลักษณ์ในวังของจักรพรรดิ','a scribe in the emperor’s household')]}};
const CARNOTE18=X('ชาวโรมันชั้นสูงดูถูกการทำงานด้วยมือ แต่เศรษฐกิจโรมันขึ้นอยู่กับช่าง ทาส และอดีตทาสที่ได้รับอิสรภาพ ซึ่งหลายคนตั้งธุรกิจจนร่ำรวย หลุมศพของพวกเขาหลายแห่งสลักภาพอาชีพไว้อย่างภูมิใจ เช่นหลุมศพยักษ์ของยูริซาเซส คนทำขนมปังที่ประตูเมืองโรม','Upper-class Romans looked down on manual work, yet the Roman economy rested on craftsmen, slaves and freed slaves, many of whom grew rich in business. Their tombs often proudly show their trades, like the giant tomb of Eurysaces the baker at a gate of Rome.');
const CLS18={elite:X('ตระกูลวุฒิสมาชิกหรืออัศวิน','a senatorial or equestrian family'),free:X('ครอบครัวพลเมืองสามัญ','a family of ordinary citizens'),dep:X('ครอบครัวชาวเมืองขึ้นที่ยังไม่ใช่พลเมืองโรมัน','a family of provincials, not yet Roman citizens'),slave:X('ทาส','a slave'),lib:X('ทาสที่ได้รับอิสรภาพ','a freed slave')};
const CLSNOTE18=X('พลเมืองโรมันมีสิทธิ์ทางกฎหมาย เช่นอุทธรณ์ถึงจักรพรรดิและห้ามถูกเฆี่ยนโดยไม่ไต่สวน ชาวเมืองขึ้นไม่มีสิทธิ์เหล่านี้ จนในปี ค.ศ. 212 จักรพรรดิคาราคัลลาให้คนอิสระทุกคนในจักรวรรดิเป็นพลเมือง ทาสในอิตาลีอาจมีถึงราวหนึ่งในห้าของประชากร','Roman citizens had legal rights, such as appealing to the emperor and not being flogged without trial. Provincials lacked them, until in 212 CE the emperor Caracalla made every free person in the Empire a citizen. In Italy slaves may have been as many as a fifth of the population.');
const cls18=S=>CLS18[S.lib18&&S.cls!=='slave'&&S.cls!=='elite'?'lib':S.cls];

function init18(){const e=era18(S.ya0);
  S.era=e;S.cls=weighted([['elite',.05],['free',.5],['dep',S.rg==='rom'||S.rg==='vil'||S.rg==='pom'?.08:.3],['slave',['rom','pom','vil'].includes(S.rg)?.22:.12]]);
  if(S.ya0<=1813&&S.cls==='dep')S.cls='free';
  if(['gal','jud','bri'].includes(S.rg)&&S.cls==='free'&&S.ya0>1813)S.cls='dep';
  S.settled=1;S.roleNo=1;S.lit=S.cls==='elite'?12:S.cls==='free'?3:0;S.schOK=(S.cls==='elite'||(S.cls==='free'&&rnd()<.35))?1:0;
  S.ag=S.cls==='elite'?12:S.cls==='free'?3:S.cls==='dep'?2:0;S.debt=0;S.debtY=0;S.saw={};S.nameTab=0;S.met18=[];S.fall18=0;S.ath=0;S.oly=0;S.mara=0;S.lib18=0;S.gladOK=0;
  S.drink18=['gal','bri'].includes(S.rg)?'beer':'wine';S.east18=0;S.chris18=0;
  S.field=S.cls==='free'||S.cls==='elite'||S.cls==='dep'?1:0;
  if(S.field){S.herd.sheep=1+((rnd()*3)|0);if(rnd()<.5)S.herd.pig=1+((rnd()*2)|0)}
  if(S.cls==='elite'){S.herd.sheep=8+((rnd()*10)|0);S.herd.cattle=2+((rnd()*4)|0)}}
Object.assign(INV,{bread18:{n:X('ขนมปังก้อนกลม','round loaves'),v:1},garum18:{n:X('ไหน้ำปลาการุม','jars of garum'),v:3}});
const meet18=(S,k)=>{S.met18=S.met18||[];if(!S.met18.includes(k))S.met18.push(k)};

/* ---------- the year ---------- */
function v18Year(a){if(S.ch!==18)return;const e=era18(S.ya);S.era=e;
  fx({f:{elite:4,free:1,dep:1,slave:-1}[S.cls]||0});
  if(a>=14&&S.car&&S.clv>=1)S.ag+=S.clv*(S.car==='trader'?2:1);
  if(S.focus==='school')S.lit=clamp(S.lit+6+(hasT('mem')?2:0)+S.kn/40,0,100);
  if(S.focus==='write'||(S.focus==='job'&&S.car==='scribe'))S.lit=clamp(S.lit+3,0,100);
  if(S.focus==='run')S.ath=(S.ath||0)+3+(hasT('legs')||hasT('strong')?2:0);
  if(S.debt>0){S.debtY++;S.debt=Math.ceil(S.debt*1.12);if(S.ag>=S.debt){S.ag-=S.debt;S.debt=0;S.debtY=0;log(X('คุณใช้หนี้หมด','You pay off your debt.'),null,'it')}
    else if(S.debtY>=3){S.debt=0;S.debtY=0;fx({b:-6,p:-4});log(X('เจ้าหนี้ยึดข้าวของในห้องเช่าของคุณไปแทนหนี้','The moneylender seizes the things in your rented room for the debt.'),X('ผู้ปล่อยกู้ชาวโรมันคิดดอกเบี้ยตามกฎหมายได้ราวร้อยละ 12 ต่อปี แต่หลายคนคิดเกินกว่านั้น บรูตุสผู้ฆ่าซีซาร์เคยปล่อยกู้ให้เมืองหนึ่งในไซปรัสที่ร้อยละ 48','Roman moneylenders could legally charge about 12% a year, though many charged more. Brutus, Caesar’s assassin, once lent to a city in Cyprus at 48%.'),'sad')}}
  if(S.cls==='dep'&&S.ya<=1813&&S.ya>=1811&&!S.tl212){S.tl212=1;S.cls='free';fx({b:4,p:2});log(X('ประกาศจากกรุงโรม: คนอิสระทุกคนในจักรวรรดิเป็นพลเมืองโรมันแล้ว รวมทั้งคุณ','A proclamation from Rome: every free person in the Empire is now a Roman citizen, you included.'),X('ในปี ค.ศ. 212 จักรพรรดิคาราคัลลาออกกฤษฎีกาให้คนอิสระเกือบทุกคนในจักรวรรดิเป็นพลเมือง นักประวัติศาสตร์โรมันคนหนึ่งบอกว่าเหตุผลจริงคือจะได้เก็บภาษีมรดกจากคนได้มากขึ้น','In 212 CE the emperor Caracalla decreed that almost every free person in the Empire was a citizen. One Roman historian claimed the real reason was to collect inheritance tax from more people.'),'big')}
  const ya=S.ya,once=(k,f)=>{if(!S.tl)S.tl={};if(S.tl[k])return;S.tl[k]=1;f()};
  if(S.rg==='rom'&&ya<=2240&&ya>=2239&&a>=6)once('cannae18',()=>{fx({b:-10});log(X('ข่าวจากแคนนี: กองทัพโรมันถูกฮันนิบาลล้อมและแพ้ในวันเดียว ผู้หญิงทั้งเมืองร้องไห้ในถนน ทุกบ้านเสียใครสักคน','News from Cannae: Hannibal has surrounded and destroyed the Roman army in a single day. Women weep in every street; every household has lost someone.'),X('ที่แคนนีในปี 216 ปีก่อนคริสตกาล ทหารโรมันอาจตายราว 50,000 คนในบ่ายเดียว เป็นหนึ่งในวันที่มีคนตายในสนามรบมากที่สุดในประวัติศาสตร์ แต่โรมไม่ยอมแพ้ และสู้ต่ออีกสิบกว่าปีจนชนะ','At Cannae in 216 BCE perhaps 50,000 Roman soldiers died in one afternoon, one of the bloodiest days of battle in history. But Rome would not surrender, and fought on for more than a decade until it won.'),'sad')});
  if(S.rg==='crt'&&ya<=2170&&ya>=2169)once('fall18',()=>{S.fall18=1;fx({b:-14,f:-10,h:-6});ms(X('รอดจากวันที่โรมทำลายคาร์เธจ','Survived the day Rome destroyed Carthage'));log(X('ทหารโรมันบุกเข้ามาทีละบ้าน เมืองไหม้อยู่หกวัน คนที่รอดถูกขายเป็นทาส','Roman soldiers fight their way in house by house. The city burns for six days, and the survivors are sold as slaves.'),X('ในปี 146 ปีก่อนคริสตกาล โรมทำลายคาร์เธจ เรื่องที่ว่าโรมันโรยเกลือลงดินไม่ให้อะไรขึ้นได้อีก ไม่มีในบันทึกโบราณเลย เป็นเรื่องที่แต่งขึ้นในยุคใหม่ ✦ ร้อยปีต่อมา คาร์เธจกลับมาเป็นเมืองโรมันที่รุ่งเรือง','Rome destroyed Carthage in 146 BCE. The story that the Romans sowed the ground with salt so nothing would grow appears in no ancient source; it is a modern invention ✦. A century later Carthage was a thriving Roman city again.'),'sad')});
  if(S.rg==='rom'&&ya<=1961&&ya>=1960&&a>=4)once('fire18',()=>{fx({b:-8,f:-4,h:-3});log(X('ไฟลุกจากร้านค้าใกล้สนามแข่งรถม้า ลมพัดให้ไหม้ไปเก้าวัน สิบในสิบสี่เขตของเมืองเสียหาย ครอบครัวคุณนอนในสวนสาธารณะ','Fire breaks out in the shops by the chariot track and the wind drives it on for nine days. Ten of the city’s fourteen districts are damaged, and your family sleeps in a public garden.'),X('ไฟไหม้ใหญ่ในกรุงโรมปี ค.ศ. 64 เนโรไม่ได้สีไวโอลินดูไฟ ✦ เพราะไวโอลินยังไม่ถูกประดิษฐ์ และทาซิทัสบอกว่าตอนไฟเริ่ม เนโรอยู่ที่เมืองอันติอุม เนโรโยนความผิดให้ชาวคริสต์กลุ่มเล็กๆ ในเมือง และฆ่าพวกเขาอย่างโหดร้าย','In the Great Fire of Rome in 64 CE Nero did not fiddle ✦: the violin had not been invented, and Tacitus says Nero was away at Antium when it began. Nero blamed the city’s small group of Christians and killed them cruelly.'),'sad')});
  if(ya<=1956&&ya>=1955&&a>=6)once('four18',()=>{fx({b:-3});log(X('ปีนี้ คุณได้ยินชื่อจักรพรรดิใหม่สี่ครั้ง ช่างทำเหรียญเพิ่งแกะหน้าจักรพรรดิเสร็จ ก็ต้องแกะใหม่','This year you hear the name of a new emperor four times. The coin-makers have barely finished carving one face before they must start another.'),X('ปี ค.ศ. 69 เรียกว่า “ปีแห่งจักรพรรดิสี่องค์”: กัลบา โอโท วิเทลลิอุส และเวสปาเซียน สามองค์แรกตายภายในปีเดียว เหรียญของแต่ละองค์ยังพบอยู่ บางเหรียญถูกตีทับหน้าคนก่อน','69 CE is called the Year of the Four Emperors: Galba, Otho, Vitellius and Vespasian. The first three were dead within the year. Coins of each survive, some struck over the face of the one before.'))});
  if(S.rg==='alx'&&ya<=2054&&ya>=2053)once('cleo18',()=>{fx({b:-3});log(X('ข่าวลือว่าราชินีคลีโอพัตราตายแล้วในสุสานของพระองค์ ทหารโรมันเดินเต็มถนน อียิปต์ไม่มีฟาโรห์อีกต่อไป','Rumour says Queen Cleopatra has died in her tomb. Roman soldiers fill the streets; Egypt has no pharaoh any more.'),X('คลีโอพัตราตายในปี 30 ปีก่อนคริสตกาล เรื่องงูเห่ากัด ✦ เป็นเรื่องที่เล่ากันมา แม้แต่นักเขียนโบราณก็ไม่แน่ใจ ข้อเท็จจริงสนุกๆ: คลีโอพัตรามีชีวิตใกล้วันที่มนุษย์ไปดวงจันทร์มากกว่าวันที่สร้างพีระมิดใหญ่แห่งกิซา','Cleopatra died in 30 BCE. The asp bite ✦ is a story; even ancient writers were not sure. A fun fact: Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid of Giza.'))});
  if(S.rg==='jud'&&ya<=1955&&ya>=1955&&a>=4)once('temple18',()=>{S.fall18=1;fx({b:-14,f:-8,h:-6});ms(X('รอดจากวันที่วิหารเยรูซาเล็มถูกทำลาย','Survived the destruction of the Temple in Jerusalem'));log(X('กองทัพของติตุสยึดเยรูซาเล็ม วิหารถูกเผา เหลือแต่กำแพงด้านตะวันตก ผู้คนนับพันถูกจับไปเป็นทาส','Titus’ army takes Jerusalem. The Temple is burned, all but its western wall, and thousands are carried off as slaves.'),X('ในปี ค.ศ. 70 โรมทำลายวิหารที่สองในเยรูซาเล็ม ภาพสลักบนประตูชัยติตุสในกรุงโรมยังแสดงทหารแบกเชิงเทียนเจ็ดกิ่งจากวิหาร จารึกที่นักวิชาการอ่านซ่อมขึ้นมาบอกว่าโคลอสเซียมสร้างด้วยของที่ยึดมาจากสงคราม กำแพงตะวันตกยังเป็นที่สวดภาวนาของชาวยิวทุกวันนี้','In 70 CE Rome destroyed the Second Temple in Jerusalem. A relief on the Arch of Titus in Rome still shows soldiers carrying off its seven-branched lampstand, and an inscription, as scholars have reconstructed it, says the Colosseum was built from war spoils. The Western Wall is still a place of Jewish prayer today.'),'sad')});
  if(S.rg==='pom'&&ya<=1945)once('pomx18',()=>{fx({b:-8,f:-6});log(X('ครอบครัวอุ้มคุณหนีจากเมืองตั้งแต่หินภูเขาไฟก้อนแรกตก คุณโตมาในหมู่บ้านอื่น และได้ยินผู้ใหญ่เล่าถึงเมืองที่หายไปใต้เถ้า','Your family carried you out of town when the first pumice fell. You grow up in another village, hearing the grown-ups talk of the town that vanished under the ash.'),null,'sad');moveTo('vil')});
  if(ya<=1860&&ya>=1850&&a>=3&&rnd()<.5)once('plague18',()=>{if(!S.sick){S.sick={k:'plague18',y:0};S.yr+=.04}fx({h:-12,b:-5});log(X('ทหารที่กลับจากทางตะวันออกนำโรคมาด้วย ผื่นขึ้นเต็มตัว ไข้สูง คนตายทั้งครอบครัว','Soldiers returning from the east have brought a sickness: a rash all over the body, a high fever, whole families dead.'),X('โรคระบาดแอนโทนินเริ่มราวปี ค.ศ. 165 และอาจคร่าชีวิตคนในจักรวรรดิไปหนึ่งในสิบหรือมากกว่านั้น นักวิชาการหลายคนเชื่อว่าเป็นไข้ทรพิษ หมอชื่อเกเลนบันทึกอาการไว้','The Antonine Plague began around 165 CE and may have killed a tenth of the Empire or more. Many scholars think it was smallpox; the physician Galen recorded its symptoms.'),'sad')});
  if(!['rom','ost','vil'].includes(S.rg)&&ya<=1832&&ya>=1831&&a>=10)once('auc18',()=>{log(X('ข่าวมาถึงว่าองครักษ์ในกรุงโรมฆ่าจักรพรรดิ แล้วขายบัลลังก์ให้คนที่ให้เงินพวกเขามากที่สุด ไม่กี่เดือนต่อมา ผู้ซื้อก็ถูกฆ่า และแม่ทัพจากชายแดนก็เดินทัพเข้าโรม','News arrives that the guards in Rome murdered the emperor and sold the throne to whoever paid them most. A few months later the buyer is killed too, and a frontier general marches on Rome.'),X('ในปี ค.ศ. 193 ดิดิอุส ยูลิอานุสชนะการประมูลบัลลังก์ด้วยเงิน 25,000 เซสเตอร์ซต่อทหารหนึ่งคน และครองราชย์ได้ 66 วัน ปีนั้นมีจักรพรรดิห้าองค์ เซปติมิอุส เซเวอรุส แม่ทัพจากแอฟริกาเหนือ เป็นผู้ชนะ','In 193 CE Didius Julianus won the auction for the throne at 25,000 sesterces per soldier and reigned 66 days. That year had five emperors; Septimius Severus, a general from North Africa, came out on top.'))});
  if(S.rg==='rom'&&ya<=1615&&ya>=1615&&a>=4)once('sack18',()=>{S.fall18=1;fx({b:-12,f:-8});log(X('ชาวกอทของอะแลริกเข้ากรุงโรมได้ เป็นครั้งแรกในแปดร้อยปีที่ศัตรูปล้นเมืองนี้ ทั่วจักรวรรดิไม่มีใครเชื่อว่าเป็นไปได้','Alaric’s Goths break into Rome: the first time in eight hundred years an enemy has sacked the city. Across the Empire no one can believe it.'),X('ในปี ค.ศ. 410 ชาวกอทปล้นกรุงโรมสามวัน นักประวัติศาสตร์ยุคหลังเล่าว่าจักรพรรดิโฮโนริอุสได้ยินข่าวว่า “โรมาตายแล้ว” แล้วตกใจ เพราะคิดว่าหมายถึงไก่ตัวโปรดชื่อโรมา ✦','In 410 CE the Goths sacked Rome for three days. A later historian tells that the emperor Honorius heard “Roma has perished” and was distraught, thinking it meant his favourite chicken, named Roma ✦.'),'sad')});
}
function trade18Year(){const ks=Object.keys(S.inv).filter(k=>S.inv[k]>0&&k!=='grain').sort((a,b)=>INV[b].v-INV[a].v);
  if(!ks.length){if(rnd()<.4){S.ag+=1;log(X('คุณช่วยขนกระสอบข้าวสาลีลงจากเรือ ได้เหรียญทองแดงเป็นค่าแรง','You help unload sacks of grain from a ship and are paid in copper coins.'),null,'it')}return}
  const k=ks[0];S.inv[k]--;const v=Math.max(1,Math.round(INV[k].v+(S.so>50?1:0)));S.ag+=v;
  log(X('คุณขาย'+INV[k].n.th+'ที่ตลาด ได้เงิน '+v+' เดนาริอุส','You sell '+INV[k].n.en+' in the market for '+v+(v===1?' denarius':' denarii')),
    S.agNote?null:(S.agNote=1,X('ทหารลีเจียนในศตวรรษแรกได้ราว 225 เดนาริอุสต่อปี ขนมปังก้อนหนึ่งราคาไม่กี่อัส (หนึ่งเดนาริอุสเท่ากับ 16 อัส) ในศตวรรษที่ 3 จักรพรรดิลดเนื้อเงินในเหรียญเรื่อยๆ จนเหรียญแทบเป็นทองแดงล้วน และราคาของพุ่งขึ้น','A first-century legionary earned about 225 denarii a year; a loaf cost a few asses (16 asses to the denarius). In the 3rd century emperors kept cutting the silver in the coins until they were almost pure copper, and prices soared.')),'it')}
function title18(S){
  if(S.car&&S.age>=12&&S.clv>=1)return CAREERS18[S.car].L[S.clv];
  if(S.age<13)return S.cls==='elite'?X('ลูกของตระกูลวุฒิสมาชิก','a child of a senatorial family'):S.cls==='slave'?X('เด็กทาส','a slave child'):X('เด็กโรมัน','a Roman child');
  if(S.car)return CAREERS18[S.car].L[S.clv];
  if(S.oly)return X('ผู้ชนะที่โอลิมเปีย','an Olympic victor');
  return {elite:X('วุฒิสมาชิก','a senator'),free:X('พลเมืองโรมัน','a Roman citizen'),dep:X('ชาวเมืองขึ้น','a provincial'),slave:X('ทาส','a slave')}[S.cls]}
