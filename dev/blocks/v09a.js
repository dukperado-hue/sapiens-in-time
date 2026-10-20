/* ================= v0.9 CHAPTER 04: MESOPOTAMIA ================= */
const ERA4={
 uruk:{a:5300,b:4900,w:.14,wp:18,n:X('ยุคอูรุก เมื่อตัวอักษรแรกถือกำเนิด','the Uruk period, when writing was born')},
 ed:{a:4900,b:4335,w:.22,wp:22,n:X('ยุคนครรัฐสุเมเรียน','the age of the Sumerian city-states')},
 akk:{a:4335,b:4155,w:.1,wp:26,n:X('จักรวรรดิอัคคัด จักรวรรดิแรกของโลก','the Akkadian Empire, the first empire')},
 ur3:{a:4112,b:4004,w:.12,wp:28,n:X('ราชวงศ์ที่สามแห่งอูร์','the Third Dynasty of Ur')},
 ob:{a:3900,b:3600,w:.26,wp:32,n:X('ยุคบาบิโลนเก่า สมัยพระเจ้าฮัมมูราบี','the Old Babylonian period, the age of Hammurabi')},
 nb:{a:2630,b:2565,w:.16,wp:100,n:X('จักรวรรดิบาบิโลนใหม่ สมัยพระเจ้าเนบูคัดเนซซาร์','the Neo-Babylonian Empire, the age of Nebuchadnezzar')}};
const era4=ya=>ya>4900?'uruk':ya>4335?'ed':ya>4112?'akk':ya>4004?'ur3':ya>2700?'ob':'nb';
const bce=ya=>Math.max(1,Math.round((ya-2025)/10)*10);
const R4={
 uru:{g:'inanna',pop:{uruk:40,ed:50,akk:40,ur3:40,ob:20,nb:20}},
 ur:{g:'nanna',pop:{uruk:8,ed:30,akk:30,ur3:65,ob:20,nb:10}},
 lag:{g:'ningirsu',pop:{ed:40,akk:25,ur3:40}},
 nip:{g:'enlil',pop:{uruk:10,ed:20,akk:20,ur3:25,ob:20,nb:15}},
 kis:{g:'inanna',pop:{ed:30,akk:25,ob:10}},
 sip:{g:'utu',pop:{ob:15,nb:15}},
 bab:{g:'marduk',pop:{ob:40,nb:150}}};
Object.assign(REGIONS,{
 uru:{n:X('อูรุก นครของเทพีอินันนา ริมแม่น้ำยูเฟรทีส','Uruk, city of the goddess Inanna, on the Euphrates'),sc:'sumer',food:1,cold:0,dry:1},
 ur:{n:X('อูร์ นครของเทพจันทร์ ใกล้ปากอ่าวเปอร์เซีย','Ur, city of the moon god, near the Persian Gulf'),sc:'sumer',food:1,cold:0,dry:1},
 lag:{n:X('ลากัช นครของเทพนินกีร์ซู','Lagash, city of the god Ningirsu'),sc:'sumer',food:1,cold:0,dry:1},
 nip:{n:X('นิปปูร์ นครศักดิ์สิทธิ์ของเทพเอนลิล','Nippur, holy city of the god Enlil'),sc:'sumer',food:1,cold:0,dry:1},
 kis:{n:X('คีช นครทางเหนือของดินแดนสุเมเรียน','Kish, a northern city of Sumer'),sc:'sumer',food:1,cold:0,dry:1},
 sip:{n:X('ซิปปาร์ นครของเทพสุริยะ','Sippar, city of the sun god'),sc:'sumer',food:1,cold:0,dry:1},
 bab:{n:X('บาบิโลน ริมแม่น้ำยูเฟรทีส','Babylon, on the Euphrates'),sc:'sumer',food:1,cold:0,dry:1}});
Object.assign(COORD,{uru:[31.3,45.6],ur:[30.96,46.1],lag:[31.4,46.4],nip:[32.1,45.2],kis:[32.5,44.6],sip:[33.06,44.25],bab:[32.54,44.42]});
for(const k in R4){NEIGH[k]=[];VR[k]=['plain'];R3[k]={vil:99999,share:0,plant:{ya:99999,n:X('ข้าวบาร์เลย์','barley')},ani:['sheep','goat','cattle','donkey'],hunt:'boar',pred:X('สิงโตจากดงกก','A lion from the reed beds')};
  for(const a of ['sheep','goat','cattle','donkey']){DOMYA[a]=DOMYA[a]||{};DOMYA[a][k]=99999}}
FLOODR.push(...Object.keys(R4));DRYR.push(...Object.keys(R4));
ANI.donkey={n:X('ลา','donkeys'),w:X('ลูกลาป่า','wild ass foals'),v:3,grow:.12,diff:.5,meat:6};
SC.sumer={d:['#8fbcd6','#f0d9a8'],n:['#0a0f24','#24203a'],far:'#c9a77a',gr:'#b9a46a',riv:'#5e8f96',tree:'palm',city:1};
const RNOTE4={
 uru:X('ราว 5,000 ปีก่อน อูรุกอาจเป็นเมืองที่ใหญ่ที่สุดในโลก มีคนราว 40,000–80,000 คน แผ่นดินเหนียวจารึกรุ่นแรกที่สุดพบในเขตวิหารเอียนนาของเทพีอินันนา ตำนานเล่าว่ากำแพงยาวราว 9 กิโลเมตรของเมืองสร้างโดยกิลกาเมช','About 5,000 years ago Uruk may have been the largest city in the world, with perhaps 40,000–80,000 people. The earliest inscribed tablets come from the Eanna temple of the goddess Inanna. Legend says the city’s wall, some 9 km long, was built by Gilgamesh.'),
 ur:X('ที่อูร์ นักโบราณคดีลีโอนาร์ด วูลลีย์ขุดพบสุสานหลวงอายุราว 4,600 ปี ในทศวรรษ 1920 รวมทั้งหลุมศพของราชินีปูอาบี ส่วนซิกกูรัตใหญ่ของเมืองสร้างโดยพระเจ้าอูร์-นัมมู ราว 2100 ปีก่อนคริสตกาล','At Ur in the 1920s the archaeologist Leonard Woolley excavated the Royal Cemetery, about 4,600 years old, including the tomb of Queen Puabi. The city’s great ziggurat was built by King Ur-Nammu around 2100 BCE.'),
 lag:X('ลากัชกับเมืองอุมมาที่อยู่ติดกันรบกันเรื่องทุ่งนาตรงชายแดนอยู่หลายชั่วคน ศิลาจารึกแห่งนกแร้งบันทึกชัยชนะของลากัช ที่นี่ยังพบรูปปั้นหินของผู้ครองนครกูเดอาหลายองค์','Lagash and neighbouring Umma fought over the border fields for generations; the Stele of the Vultures records a Lagash victory. Many stone statues of its ruler Gudea were found here.'),
 nip:X('นิปปูร์เป็นศูนย์กลางทางศาสนาของสุเมเรียน เป็นบ้านของเทพเอนลิล ไม่เคยเป็นเมืองหลวงทางการเมือง ที่นี่พบแผ่นดินเหนียวจากโรงเรียนอาลักษณ์จำนวนมหาศาล วรรณกรรมสุเมเรียนส่วนใหญ่ที่เรารู้จักมาจากที่นี่','Nippur was the religious heart of Sumer, home of the god Enlil, but never a political capital. Huge numbers of school tablets were found here; much of the Sumerian literature we know comes from Nippur.'),
 kis:X('บัญชีรายพระนามกษัตริย์สุเมเรียนเล่าว่าหลังน้ำท่วมใหญ่ ความเป็นกษัตริย์ลงมาจากสวรรค์ที่คีชเป็นแห่งแรก ในบัญชีเดียวกันมีกูบาบา หญิงเจ้าของร้านเบียร์ที่ได้เป็นกษัตริย์แห่งคีช','The Sumerian King List says that after the great flood, kingship first came down from heaven at Kish. The same list names Kubaba, a woman tavern keeper who became king of Kish.'),
 sip:X('ที่ซิปปาร์มีหญิงนาดิตูของเทพชามาช พวกเธอไม่แต่งงาน อยู่ในเขตปิดของวิหาร แต่ซื้อขายที่ดิน ให้กู้ และทำสัญญาเอง แผ่นดินเหนียวหลายพันแผ่นบันทึกธุรกิจของพวกเธอ','At Sippar lived the naditu women of the god Shamash. They did not marry and lived in a cloister of the temple, yet they bought land, lent silver and made contracts in their own names; thousands of tablets record their business.'),
 bab:X('บาบิโลนกลายเป็นเมืองสำคัญสมัยพระเจ้าฮัมมูราบี (ราว 1792–1750 ปีก่อนคริสตกาล) และยิ่งใหญ่ที่สุดสมัยพระเจ้าเนบูคัดเนซซาร์ที่ 2 (604–562 ปีก่อนคริสตกาล) ผู้สร้างประตูอิชตาร์','Babylon rose under Hammurabi (about 1792–1750 BCE) and was greatest under Nebuchadnezzar II (604–562 BCE), who built the Ishtar Gate.')};
function pickEra4(){const ks=Object.keys(ERA4);return weighted(ks.map(k=>[k,ERA4[k].w]))}
function pickCity4(e){const ks=Object.keys(R4).filter(k=>R4[k].pop[e]);return weighted(ks.map(k=>[k,R4[k].pop[e]]))}
const pw4=(rg,ya)=>{const e=era4(ya);return (R4[rg].pop[e]||10)*1000/(ERA4[e].wp*1e6)};

/* ---------- names ---------- */
// gods: [Sumerian form, Thai, cuneiform] and [Akkadian form, Thai, cuneiform]
const G4={
 nanna:{su:['Nanna','นันนา','𒀭𒋀𒆠'],ak:['Sin','ซิน','𒀭𒂗𒍪'],d:X('เทพจันทร์','the moon god')},
 inanna:{su:['Inanna','อินันนา','𒀭𒈹'],ak:['Ishtar','อิชตาร์','𒀭𒈹'],d:X('เทพีแห่งความรักและสงคราม','the goddess of love and war')},
 utu:{su:['Utu','อูตู','𒀭𒌓'],ak:['Shamash','ชามาช','𒀭𒌓'],d:X('เทพสุริยะ','the sun god')},
 enlil:{su:['Enlil','เอนลิล','𒀭𒂗𒆤'],ak:['Ellil','เอลลิล','𒀭𒂗𒆤'],d:X('ราชาแห่งเหล่าเทพ','the king of the gods')},
 enki:{su:['Enki','เอนกี','𒀭𒂗𒆠'],ak:['Ea','เอีย','𒀭𒂗𒆠'],d:X('เทพแห่งน้ำจืดและปัญญา','the god of fresh water and wisdom')},
 ninurta:{su:['Ninurta','นินูร์ตา','𒀭𒊩𒌆𒅁'],ak:['Ninurta','นินูร์ตา','𒀭𒊩𒌆𒅁'],d:X('เทพนักรบผู้ดูแลคันไถ','the warrior god of the plough')},
 nanshe:{su:['Nanshe','นันเช','𒀭𒀏'],d:X('เทพีแห่งปลาและความยุติธรรม','the goddess of fish and justice')},
 ningirsu:{su:['Ningirsu','นินกีร์ซู','𒀭𒊩𒌆𒄈𒋢'],d:X('เทพนักรบแห่งลากัช','the warrior god of Lagash')},
 adad:{su:['Ishkur','อิชกูร์','𒀭𒅎'],ak:['Adad','อาดัด','𒀭𒅎'],d:X('เทพแห่งพายุและฝน','the storm god')},
 marduk:{ak:['Marduk','มาร์ดุก','𒀭𒀫𒌓'],d:X('เทพผู้คุ้มครองบาบิโลน','the patron god of Babylon')},
 nabu:{ak:['Nabu','นาบู','𒀭𒀝'],d:X('เทพแห่งการเขียน','the god of writing')}};
// patterns: p = prefix or suffix, th, cuneiform, meaning builder
const NP4={
 su_m:[{pre:1,l:'Ur-',th:'อูร์-',c:'𒌨',m:(g,G)=>X('ชายผู้รับใช้'+G.th+' '+G.d.th,'servant of '+g+', '+G.d.en)},
       {pre:1,l:'Lu-',th:'ลู-',c:'𒇽',m:(g,G)=>X('คนของ'+G.th+' '+G.d.th,'man of '+g+', '+G.d.en)}],
 su_f:[{pre:1,l:'Geme-',th:'เกเม-',c:'𒊩𒆳',m:(g,G)=>X('หญิงผู้รับใช้'+G.th+' '+G.d.th,'maidservant of '+g+', '+G.d.en)}],
 ak_m:[{pre:0,l:'-nasir',th:'-นาซีร์',c:'𒉽',m:(g,G)=>X(G.th+' คือผู้ปกป้อง','“'+g+' protects”')},
       {pre:0,l:'-bani',th:'-บานี',c:'𒆕',m:(g,G)=>X(G.th+' คือผู้สร้าง','“'+g+' is the creator”')},
       {pre:0,l:'-iddinam',th:'-อิดดินัม',c:'𒄿𒁷𒉆',m:(g,G)=>X(G.th+' ประทานเด็กคนนี้ให้ฉัน','“'+g+' has given me this child”')},
       {pre:1,l:'Warad-',th:'วาราด-',c:'𒀴',m:(g,G)=>X('ผู้รับใช้ของ'+G.th,'“servant of '+g+'”')}],
 ak_f:[{pre:1,l:'Amat-',th:'อามัต-',c:'𒊩𒆳',m:(g,G)=>X('หญิงผู้รับใช้ของ'+G.th,'“maidservant of '+g+'”')},
       {pre:0,l:'-ummi',th:'-อุมมี',c:'𒂼𒅀',m:(g,G)=>X(G.th+' คือแม่ของฉัน','“'+g+' is my mother”')}],
 nb_m:[{pre:0,l:'-nasir',th:'-นาซีร์',c:'𒉽',m:(g,G)=>X(G.th+' คือผู้ปกป้อง','“'+g+' protects”')},
       {pre:0,l:'-iddin',th:'-อิดดิน',c:'𒈬',m:(g,G)=>X(G.th+' ประทานให้','“'+g+' has given”')},
       {pre:0,l:'-bani',th:'-บานี',c:'𒆕',m:(g,G)=>X(G.th+' คือผู้สร้าง','“'+g+' is the creator”')}],
 nb_f:[{pre:1,l:'Amat-',th:'อามัต-',c:'𒊩𒆳',m:(g,G)=>X('หญิงผู้รับใช้ของ'+G.th,'“maidservant of '+g+'”')},
       {pre:0,l:'-ummi',th:'-อุมมี',c:'𒂼𒅀',m:(g,G)=>X(G.th+' คือแม่ของฉัน','“'+g+' is my mother”')}]};
// a few whole names known from tablets
const NWHOLE4=[{f:1,l:'Iltani',th:'อิลตานี',c:'𒅋𒋫𒉌',m:X('“เทพีของเรา”','“our goddess”')},{f:1,l:'Lamassi',th:'ลามัสซี',c:'𒆷𒈠𒋛',m:X('“เทพผู้คุ้มครองของฉัน”','“my protective spirit”')},
 {f:1,l:'Beltani',th:'เบลตานี',c:'𒁁𒂖𒋫𒉌',m:X('“นายหญิงของเรา”','“our lady”')}];
function godsFor(S,e,akk){const city=R4[S.rg]?R4[S.rg].g:'enlil';
  let ks=Object.keys(G4).filter(k=>akk?G4[k].ak:G4[k].su);
  if(akk&&e!=='nb')ks=ks.filter(k=>k!=='nabu');if(akk&&!['ob','nb'].includes(e))ks=ks.filter(k=>k!=='marduk');
  if(!akk)ks=ks.filter(k=>k!=='ningirsu'||S.rg==='lag');
  const w=ks.map(k=>[k,k===city?5:(S.rg==='lag'&&k==='nanshe')?3:(S.rg==='bab'&&k==='nabu')?3:1]);return weighted(w)}
function genName4(S,sex,e){e=e||era4(S.ya0);const akk=e==='akk'?rnd()<.7:e==='ob'||e==='nb'?true:(e==='ed'&&S.rg==='kis')?rnd()<.5:rnd()<.08;
  if(akk&&sex==='f'&&e!=='nb'&&rnd()<.15){const w=pick(NWHOLE4);return{l:w.l,th:w.th,c:w.c,mean:w.m}}
  const set=NP4[(e==='nb'?'nb':akk?'ak':'su')+'_'+sex];const p=pick(set);const gk=godsFor(S,e,akk);const g=G4[gk][akk?'ak':'su'];
  const G={th:g[1],d:G4[gk].d};
  return p.pre?{l:p.l+g[0],th:p.th+g[1],c:p.c+g[2],mean:p.m(g[0],G),god:gk}:{l:g[0]+p.l,th:g[1]+p.th,c:g[2]+p.c,mean:p.m(g[0],G),god:gk}}
function mkName4(S){const n=genName4(S,S.sex),fa=genName4(S,'m');S.nm4={...n,fa};return X(n.th,n.l)}
const nm4X=n=>X(n.th,n.l);

/* ---------- careers (chapter 04) ---------- */
const CAREERS4={
scribe:{n:X('อาลักษณ์','Scribe'),act:'job',scene:'tablet',sk:'kn',l:X('เขียนแผ่นจารึกให้วิหารและวัง','Write tablets for the temple and palace'),ok:S=>S.cls!=='slave'&&(S.cls==='elite'||S.schOK||S.lit>=15),
 L:[X('นักเรียนบ้านแผ่นจารึก','a pupil of the tablet house'),X('อาลักษณ์','a scribe'),X('หัวหน้าอาลักษณ์ของวิหาร','the temple’s chief scribe'),X('อาลักษณ์หลวงผู้จดพระราชโองการ','the royal scribe who writes the king’s words')]},
brewer:{n:X('คนหมักเบียร์','Brewer'),act:'brew',sk:'cr',ok:S=>true,
 L:[X('ลูกมือโรงเบียร์','a brewery helper'),X('คนหมักเบียร์','a brewer'),X('เจ้าของร้านเบียร์ที่ทั้งย่านรู้จัก','the tavern keeper the whole quarter knows'),X('ผู้ส่งเบียร์ให้วิหารและวัง','brewer to the temple and the palace')]},
farmer:{n:X('ชาวนา','Farmer'),act:'sow',sk:'kn',ok:S=>S.cls!=='elite',
 L:[X('เด็กไล่นกในนาข้าวบาร์เลย์','a child who scares birds from the barley'),X('ชาวนา','a farmer'),X('หัวหน้าทีมไถของวิหาร','leader of a temple plough team'),X('ผู้ดูแลนาทั้งผืนของวิหาร','overseer of the temple’s fields')]},
herder:{n:X('คนเลี้ยงแกะ','Shepherd'),act:'herd',sk:'sv',ok:S=>S.cls!=='elite',
 L:[X('เด็กเลี้ยงแกะ','a shepherd child'),X('คนเลี้ยงแกะ','a shepherd'),X('คนเลี้ยงแกะที่วิหารฝากฝูงหลายร้อยตัว','the shepherd trusted with hundreds of temple sheep'),X('หัวหน้าคนเลี้ยงสัตว์ของวิหาร','chief herdsman of the temple')]},
potter:{n:X('ช่างปั้นหม้อ','Potter'),act:'job',scene:'craft',sk:'cr',l:X('ปั้นหม้อบนแป้นหมุน','Throw pots on the wheel'),item:'pot',ok:S=>true,
 L:[X('ลูกมือหมุนแป้น','an apprentice at the wheel'),X('ช่างปั้นหม้อ','a potter'),X('ช่างปั้นที่ทำโถเบียร์ให้ทั้งเมือง','the potter who makes beer jars for the whole city'),X('หัวหน้าโรงปั้นของวัง','master of the palace potteries')]},
smith:{n:X('ช่างโลหะ','Metalsmith'),act:'job',scene:'smith',sk:'cr',l:X('หลอมทองแดงและหล่อสำริด','Smelt copper and cast bronze'),item:'bronze',ok:S=>S.cls!=='slave',
 L:[X('เด็กเป่าลมเตาหลอม','a child who blows the furnace'),X('ช่างหล่อสำริด','a bronze-caster'),X('ช่างโลหะของวิหาร','the temple metalsmith'),X('ช่างทองที่ทำงานให้ราชวงศ์','the goldsmith of the royal house')]},
merchant:{n:X('พ่อค้า','Merchant'),act:'job',scene:'market',sk:'so',l:X('ค้าขายข้ามเมือง','Trade between cities'),ok:S=>S.cls==='free'||S.cls==='elite',
 L:[X('เด็กแบกของตามกองคาราวาน','a child who carries loads for the caravans'),X('พ่อค้า','a merchant'),X('พ่อค้าที่ค้าข้ามทะเลถึงดิลมุน','a merchant who trades across the sea to Dilmun'),X('หัวหน้าพ่อค้าของเมือง','overseer of the city’s merchants')]},
priest:{n:X('นักบวช','Priest'),act:'temple',sk:'so',ok:S=>S.cls==='free'||S.cls==='elite',
 L:[X('ผู้รับใช้ในวิหาร','a temple servant'),X('นักบวช','a priest'),X('ผู้ทำนายจากตับแกะ','a diviner who reads sheep’s livers'),X('ประมุขนักบวชของวิหาร','head of the temple’s priesthood')]},
soldier:{n:X('ทหาร','Soldier'),act:'job',scene:'march',sk:'sv',l:X('ฝึกรบและเฝ้ากำแพงเมือง','Drill and guard the city walls'),ok:S=>S.sex==='m',
 L:[X('ทหารเกณฑ์','a levy soldier'),X('ทหาร','a soldier'),X('หัวหน้ากองร้อย','captain of a hundred'),X('แม่ทัพของพระราชา','a general of the king')]},
gardener:{n:X('คนสวน','Gardener'),act:'garden',sk:'sv',ok:S=>true,
 L:[X('เด็กรดน้ำต้นอินทผลัม','a child who waters the date palms'),X('คนสวน','a gardener'),X('คนสวนของวัง','the palace gardener'),X('ผู้ดูแลสวนหลวง','keeper of the royal gardens')]}};
const CARNOTE4=X('ในเมืองเมโสโปเตเมีย อาหารส่วนเกินเลี้ยงคนที่ไม่ได้ทำนาได้ วิหารและวังจ้างช่าง อาลักษณ์ และคนงานจำนวนมาก แล้วจ่ายเป็นข้าวบาร์เลย์ น้ำมัน และขนแกะ ลูกมักทำอาชีพเดียวกับพ่อแม่ แผ่นจารึกรายชื่ออาชีพยุคอูรุกมีอาชีพมากกว่าร้อยชนิด','In Mesopotamian cities, surplus food could feed people who did not farm. Temples and palaces employed craftsmen, scribes and labourers and paid them in barley, oil and wool. Children usually followed their parents’ trade. A list of professions from the Uruk period names more than a hundred.');
const CARS=()=>S&&S.ch===4?CAREERS4:CAREERS;
const CLS4={elite:X('ตระกูลสูง ใกล้ชิดวิหารและวัง','a great household, close to the temple and palace'),free:X('ชาวเมืองอิสระ','a free family of the city'),dep:X('คนงานของวิหาร ได้ค่าจ้างเป็นปันส่วนข้าว','temple workers, paid in rations of barley'),slave:X('ทาส','enslaved')};
const CLSNOTE=X('สังคมเมโสโปเตเมียแบ่งเป็นชั้น กฎหมายของฮัมมูราบีแยกคนอิสระชั้นสูง สามัญชน และทาส โทษสำหรับความผิดเดียวกันจึงไม่เท่ากัน คนจำนวนมากเป็นคนงานของวิหารหรือวังที่ได้ค่าจ้างเป็นปันส่วน ทาสส่วนหนึ่งเป็นเชลยศึก ส่วนหนึ่งตกเป็นทาสเพราะหนี้','Mesopotamian society was layered. Hammurabi’s laws distinguish free citizens, commoners and slaves, and the same offence carried different penalties. Many people worked for a temple or palace in return for rations. Some slaves were war captives; others fell into slavery through debt.');

function init4(){
  S.era=era4(S.ya0);S.cls=weighted([['elite',.06],['free',.58],['dep',.26],['slave',.1]]);S.settled=1;S.roleNo=1;
  S.lit=S.cls==='elite'?6:0;S.schOK=S.cls==='elite'?(rnd()<.8?1:0):S.cls==='free'?(rnd()<.22?1:0):S.cls==='dep'?(rnd()<.03?1:0):0;
  S.ag=S.cls==='elite'?12:S.cls==='free'?3:0;S.debt=0;S.debtY=0;S.tabN=0;S.tabK={};S.gilg=0;S.readN=0;S.lent=null;S.kingT=null;S.burned=0;S.nameTab=0;S.hg=0;
  S.field=S.cls==='free'||S.cls==='dep'?1:0;
  if(S.cls==='free'){S.herd.sheep=(rnd()*5)|0;S.herd.goat=(rnd()*3)|0;if(rnd()<.3)S.herd.donkey=1}
  if(S.cls==='elite'){S.herd.sheep=6+((rnd()*10)|0);S.herd.cattle=1+((rnd()*2)|0);S.herd.donkey=2}
}
function v4Year(a){if(S.ch!==4)return;const e=era4(S.ya);S.era=e;
  fx({f:{elite:5,free:1,dep:0,slave:-2}[S.cls]||0});
  if(S.cls==='slave'&&a>=8)S.yr+=.004;if(S.cls==='elite')S.yr-=.002;
  if(a>=14&&S.car&&S.clv>=1)S.ag+=S.clv*(S.car==='merchant'?2:1);
  if(S.focus==='school'){S.lit=clamp(S.lit+5+(hasT('mem')?2:0)+S.kn/40,0,100);S.schY=(S.schY||0)+1}
  if(S.focus==='job'&&S.car==='scribe')S.lit=clamp(S.lit+3,0,100);
  if(S.focus==='write'||(S.focus==='job'&&S.car==='scribe')){S.lit=clamp(S.lit+1,0,100);if(rnd()<.7){S.tabN+=1+((rnd()*3)|0);const k=pick(S.car==='scribe'?['receipt','receipt','letter','contract','hymn']:['receipt','letter','contract']);S.tabK[k]=(S.tabK[k]||0)+1;
    if(!S.wroteN){S.wroteN=1;ms(X('เขียนแผ่นดินเหนียวแผ่นแรกด้วยมือตัวเอง','Wrote a clay tablet with your own hand'))}}}
  if(S.focus==='read'){S.lit=clamp(S.lit+1,0,100);S.readN++}
  if(!S.nameTab&&a>=1&&(S.cls!=='elite'||a>=12)&&rnd()<.08){S.nameTab=1;log(X('อาลักษณ์ของวิหารเขียนชื่อของคุณลงในบัญชีรายชื่อผู้รับปันส่วน คุณไม่รู้ว่ามันเขียนว่าอะไร แต่นั่นคือชื่อของคุณ','A temple scribe writes your name in the list of those who receive rations. You cannot read it, but that is your name.'),X('คนธรรมดาจำนวนมากถูกจดชื่อไว้ในบัญชีปันส่วน สัญญา หรือใบรับของ เราจึงรู้จักชื่อคนเมโสโปเตเมียที่ไม่ใช่กษัตริย์นับหมื่นคน','Ordinary people were listed in ration lists, contracts and receipts, so we know the names of tens of thousands of Mesopotamians who were not kings.'),'it');ms(X('ชื่อของคุณถูกเขียนลงบนแผ่นดินเหนียว','Your name was written on a clay tablet'))}
  // debt
  if(S.debt>0){S.debtY++;S.debt=Math.ceil(S.debt*1.2);
    if(S.ag>=S.debt){S.ag-=S.debt;log(X('คุณใช้หนี้ครบพร้อมดอกเบี้ย อาลักษณ์ทุบแผ่นสัญญาเงินกู้ทิ้ง','You pay off the loan with interest, and the scribe smashes the loan tablet.'),null,'it');S.debt=0;S.debtY=0}
    else if(S.debtY>=3&&(S.cls==='free'||S.cls==='elite')){S.cls0=S.cls;S.cls='dep';S.bondY=a;S.debt=0;S.debtY=0;fx({b:-8,p:-4});
      log(X('คุณใช้หนี้ไม่ไหว เจ้าหนี้พาคุณไปทำงานใช้หนี้ในบ้านของเขา','You cannot pay the debt. The creditor takes you to work it off in his household.'),e==='ob'?X('กฎหมายของฮัมมูราบีข้อ 117 กำหนดว่าคนที่ถูกขายหรือถูกยึดไปทำงานใช้หนี้ต้องได้รับอิสรภาพในปีที่สี่','Hammurabi’s law 117 says that a person sold or bound into service for a debt must be freed in the fourth year.'):X('ในเมโสโปเตเมีย คนที่ใช้หนี้ไม่ได้อาจต้องไปทำงานให้เจ้าหนี้ หรือขายลูกหรือตัวเองเป็นทาสหนี้','In Mesopotamia a person who could not repay might have to work for the creditor, or sell a child or themselves into debt slavery.'),'sad');ms(X('ตกเป็นทาสหนี้','Fell into debt bondage'))}}
  if(S.bondY!=null&&S.cls==='dep'&&a-S.bondY>=(e==='ob'?3:4+((rnd()*4)|0))){S.cls=S.cls0||'free';S.bondY=null;fx({b:6});log(X('ครบกำหนดแล้ว คุณได้กลับบ้านเป็นคนอิสระอีกครั้ง','The term is over. You go home a free person again.'),null,'big');ms(X('ได้อิสรภาพคืนจากการเป็นทาสหนี้','Freed from debt bondage'))}
  // timeline
  const ya=S.ya,once=(k,f)=>{if(!S.tl)S.tl={};if(S.tl[k])return;S.tl[k]=1;f()};
  if(ya<=4380&&ya>=4365&&S.rg==='lag')once('amargi',()=>{if(S.debt){S.debt=0;S.debtY=0}fx({b:4});log(X('ผู้ครองนครอูรู-อีนิมกีนาประกาศยกหนี้ และสั่งห้ามคนมีอำนาจยึดลา บ้าน และปลาของคนจน','The ruler Uru-inimgina proclaims debts forgiven, and forbids the powerful to seize the donkeys, houses and fish of the poor.'),X('ในจารึกปฏิรูปของอูรู-อีนิมกีนาแห่งลากัช ราว 2350 ปีก่อนคริสตกาล มีคำว่า “อามาร์กี” แปลตรงตัวว่า “กลับไปหาแม่” หมายถึงการปลดหนี้และปล่อยคนกลับบ้าน หลายคนถือว่าเป็นคำว่า “อิสรภาพ” ที่เก่าที่สุดที่มีการเขียนไว้','The reform texts of Uru-inimgina of Lagash, about 2350 BCE, use the word amargi, literally “return to the mother”, for releasing people from debt. It is often called the oldest written word for “freedom”.'),'cl')});
  if(ya<=4360&&ya>=4330&&['kis','ur','uru','lag','nip'].includes(S.rg))once('sargon',()=>{fx({b:-3});log(X('ข่าวมาถึงว่าชายชื่อซาร์กอนจากเมืองอัคคัดตีได้นครสุเมเรียนทีละเมือง และทำลายกำแพงเมืองเหล่านั้น','Word comes that a man named Sargon of Akkad is taking the Sumerian cities one by one and tearing down their walls.'),X('ซาร์กอนแห่งอัคคัด (ครองราชย์ราว 2334–2279 ปีก่อนคริสตกาล) รวมเมโสโปเตเมียเป็นจักรวรรดิแรกที่เรารู้จัก ภาษาอัคคาเดียนเริ่มแทนที่ภาษาสุเมเรียนในงานราชการ','Sargon of Akkad (about 2334–2279 BCE) united Mesopotamia into the first empire we know of. Akkadian began to replace Sumerian in government.'),'cl')});
  if(ya<=4225&&ya>=4160)once('k42',()=>{fx({f:-9,h:-3});log(X('หลายปีติดต่อกัน ฝนทางเหนือไม่มา แม่น้ำลดลง และคนเลี้ยงสัตว์จากภูเขาบุกลงมาหาอาหาร','For years in a row the northern rains fail, the rivers fall, and herders from the mountains raid the plains for food.'),X('ราว 4,200 ปีก่อน โลกหลายภูมิภาคแห้งแล้งลงอย่างรุนแรง นักวิชาการหลายคนเชื่อมโยงกับการล่มสลายของจักรวรรดิอัคคัด และการเข้ามาของชาวกูเตียนจากเทือกเขาซากรอส แต่น้ำหนักของสาเหตุยังถกเถียงกัน','About 4,200 years ago much of the world turned severely dry. Many scholars link it to the fall of the Akkadian Empire and the arrival of the Gutians from the Zagros, though how much it caused is debated.'),'cl')});
  if(ya<=4130&&ya>=4115&&S.rg==='ur')once('zig',()=>{fx({b:3,h:-1});log(X('ทั้งเมืองช่วยกันวางอิฐหลายล้านก้อน ขึ้นรูปเป็นภูเขาขั้นบันไดของเทพจันทร์ พระราชาอูร์-นัมมูเสด็จมาดูเอง','The whole city lays millions of bricks into a stepped mountain for the moon god. King Ur-Nammu comes to watch.'),X('ซิกกูรัตใหญ่แห่งอูร์สร้างราว 2100 ปีก่อนคริสตกาล แกนในเป็นอิฐดิบ ผิวนอกเป็นอิฐเผาเชื่อมด้วยยางมะตอย ฐานที่บูรณะแล้วยังตั้งอยู่ในอิรักวันนี้','The Great Ziggurat of Ur was built about 2100 BCE, a core of mud brick faced with baked brick set in bitumen. Its restored base still stands in Iraq today.'),'cl')});
  if(ya<=4006&&ya>=4002&&S.rg==='ur')once('urfall',()=>{S.burned=1;fx({b:-10,h:-8,f:-10});S.yr+=.06;log(X('กองทัพจากเอลามบุกเข้าเมือง ไฟไหม้วิหาร ผู้คนถูกฆ่าและถูกจับไป พระราชาถูกพาตัวไปเป็นเชลย','An army from Elam breaks into the city. The temples burn; people are killed and carried off; the king is led away a captive.'),X('อูร์ถูกชาวเอลามทำลายราว 2004 ปีก่อนคริสตกาล บทกวี “ร่ำไห้ให้อูร์” คร่ำครวญว่า “ศพกองอยู่ที่ประตูเมือง” ไฟที่เผาเมืองบางครั้งทำให้แผ่นดินเหนียวสุกแข็งและรอดมาถึงวันนี้','Ur was sacked by the Elamites about 2004 BCE. The poem known as the Lament for Ur mourns bodies lying in the city gates. Fires that burned cities sometimes baked clay tablets hard and preserved them.'),'sad')});
  if(ya<=3780&&ya>=3770)once('ham',()=>{fx({kn:2});log(X('เจ้าหน้าที่อ่านประกาศกฎหมายของพระเจ้าฮัมมูราบีให้คนในตลาดฟัง เริ่มด้วยคำว่า “หากผู้ใด…”','An official reads King Hammurabi’s laws aloud in the market. Each begins: “If a man…”'),X('ประมวลกฎหมายฮัมมูราบี ราว 1754 ปีก่อนคริสตกาล มีราว 282 ข้อ จารึกบนแท่งศิลาสีดำสูงกว่า 2 เมตร ปัจจุบันอยู่ที่พิพิธภัณฑ์ลูฟวร์ มีกฎหมายที่เก่ากว่านี้อีก เช่น ของอูร์-นัมมู ราว 2100 ปีก่อนคริสตกาล','Hammurabi’s code, about 1754 BCE, has some 282 laws carved on a black stone stele over two metres tall, now in the Louvre. Older law collections exist too, such as Ur-Nammu’s, about 2100 BCE.'),'cl')});
  if(ya<=3622&&ya>=3618&&S.rg==='bab')once('hittite',()=>{S.burned=1;fx({b:-8,f:-8});S.yr+=.05;log(X('กองทัพฮิตไทต์จากแดนไกลบุกเข้าบาบิโลน ปล้นวิหาร และขนรูปเคารพของเทพมาร์ดุกไป','A Hittite army from far away storms Babylon, loots the temples and carries off the statue of Marduk.'),X('ราว 1595 ปีก่อนคริสตกาล พระเจ้ามูร์ซิลีที่ 1 แห่งฮิตไทต์ปล้นบาบิโลน ราชวงศ์ของฮัมมูราบีสิ้นสุดลง','About 1595 BCE the Hittite king Mursili I sacked Babylon, ending Hammurabi’s dynasty.'),'sad')});
  if(ya<=2622&&ya>=2608&&S.rg==='bab')once('exile',()=>{log(X('เชลยจากยูดาห์ถูกพามาตั้งบ้านเรือนริมคลองนอกเมือง ตอนเย็นคุณได้ยินพวกเขาร้องเพลงเศร้าถึงบ้านเกิด','Captives from Judah are settled by the canals outside the city. In the evenings you hear them singing sad songs about home.'),X('พระเจ้าเนบูคัดเนซซาร์ที่ 2 ยึดเยรูซาเลมในปี 597 และ 586 ปีก่อนคริสตกาล แล้วกวาดต้อนชาวยูดาห์จำนวนมากมาบาบิโลน เพลงสดุดีบทที่ 137 เริ่มว่า “ริมฝั่งแม่น้ำแห่งบาบิโลน”','Nebuchadnezzar II took Jerusalem in 597 and 586 BCE and deported many Judeans to Babylonia. Psalm 137 begins “By the rivers of Babylon”.'),'cl')});
  if(ya<=2566&&ya>=2563)once('cyrus',()=>{fx({b:-2});log(X('กองทัพเปอร์เซียของพระเจ้าไซรัสเข้าเมืองบาบิโลนโดยแทบไม่มีการรบ นักบวชของมาร์ดุกต้อนรับพระราชาองค์ใหม่','The Persian army of King Cyrus enters Babylon almost without a fight, and the priests of Marduk welcome the new king.'),X('ในปี 539 ปีก่อนคริสตกาล ไซรัสมหาราชยึดบาบิโลน กระบอกดินเหนียวไซรัสบรรยายว่ามาร์ดุกเลือกเขา บาบิโลนไม่เคยเป็นศูนย์กลางของจักรวรรดิของตัวเองอีก แต่ยังเขียนอักษรรูปลิ่มต่อไปอีกหลายร้อยปี','In 539 BCE Cyrus the Great took Babylon; the Cyrus Cylinder claims Marduk chose him. Babylon never again ruled an empire of its own, but people went on writing cuneiform there for centuries.'),'cl')});
}
function trade4Year(){const ks=Object.keys(S.inv).filter(k=>S.inv[k]>0&&k!=='grain').sort((a,b)=>INV[b].v-INV[a].v);
  if(!ks.length){if(rnd()<.4){S.ag+=1;log(X('คุณช่วยขนของลงเรือที่ท่าเรือ ได้ค่าจ้างเป็นเงินหนึ่งเชเคิล','You help load boats at the quay and earn a shekel of silver.'),null,'it')}return}
  const k=ks[0];S.inv[k]--;const v=INV[k].v+(S.so>50?1:0);S.ag+=v;
  log(X('คุณขาย'+invName(k)+'ที่ท่าเรือ ได้เงิน '+v+' เชเคิล','You sell '+invName(k)+' at the quay for '+v+' shekels of silver'),S.agNote?null:(S.agNote=1,X('เมโสโปเตเมียใช้เงินเป็นตัววัดมูลค่า โดยชั่งน้ำหนัก หนึ่งเชเคิลหนักราว 8 กรัม ค่าจ้างคนงานหนึ่งเดือนในยุคบาบิโลนเก่าราวหนึ่งเชเคิล ส่วนในชีวิตประจำวันคนจ่ายกันด้วยข้าวบาร์เลย์','Mesopotamians measured value in silver, by weight. A shekel weighed about 8 grams; in the Old Babylonian period a month’s hired labour cost about one shekel. In daily life people often paid in barley.')),'it')}
function title4(S){if(S.kingT)return S.kingT;
  if(S.car&&S.age>=12&&S.clv>=1)return CAREERS4[S.car].L[S.clv];
  if(S.nad)return X('นาดิตูแห่งเทพชามาช','a naditu of Shamash');
  if(S.age<13)return S.cls==='slave'?X('เด็กทาส','an enslaved child'):S.cls==='elite'?X('ลูกตระกูลสูง','a child of a great household'):X('เด็กในเมือง','a child of the city');
  if(S.car)return CAREERS4[S.car].L[S.clv];
  if(S.lit>=60)return X('ผู้อ่านออกเขียนได้ หนึ่งในคนจำนวนน้อย','one of the few who can read');
  return {elite:X('สมาชิกตระกูลสูง','a member of a great household'),free:X('ชาวเมืองอิสระ','a free citizen'),dep:X('คนงานรับปันส่วนของวิหาร','a temple worker paid in rations'),slave:X('ทาส','an enslaved person')}[S.cls]}
