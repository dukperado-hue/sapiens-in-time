/* ================= v0.23 CHAPTER 22 (shown as 13): SUVARNABHUMI, FROM FUNAN TO SUKHOTHAI ================= */
const ERA22={
 fun:{a:1925,b:1475,w:.25,wp:200,n:X('ยุคฟูนันและเมืองท่าริมทะเล','Funan and the sea ports')},
 dva:{a:1475,b:1125,w:.27,wp:220,n:X('ยุคทวารวดี ศรีเทพ และเจนละ','Dvaravati, Si Thep and Chenla')},
 ang:{a:1125,b:875,w:.28,wp:270,n:X('ยุคพระนครรุ่งเรือง: ปราสาทหินและบาราย','Angkor rises: stone sanctuaries and great reservoirs')},
 lat:{a:875,b:725,w:.2,wp:360,n:X('ยุคพระเจ้าชัยวรมันที่ 7 จนถึงสุโขทัย','from Jayavarman VII to Sukhothai')}};
const eraS22=ya=>ya>1475?'fun':ya>1125?'dva':ya>875?'ang':'lat';
/* year label: CE with the Thai Buddhist Era in Thai */
const yr22=ya=>{const y=2025-ya;return X('ค.ศ. '+y+' (พ.ศ. '+(y+543)+')',y+' CE')};
const R22={
 oce:{pop:{fun:10,dva:2}},
 abr:{pop:{fun:8,dva:4}},
 uth:{pop:{fun:3,dva:6,ang:2}},
 npt:{pop:{dva:10,ang:4,lat:3}},
 stp:{pop:{fun:2,dva:8,ang:5,lat:2}},
 lvo:{pop:{dva:5,ang:8,lat:7}},
 hpj:{pop:{dva:2,ang:5,lat:5}},
 cyj:{pop:{dva:4,ang:4,lat:3}},
 fdt:{pop:{dva:4,ang:2}},
 ang:{pop:{dva:2,ang:12,lat:12}},
 phm:{pop:{ang:5,lat:5}},
 prg:{pop:{ang:4,lat:3}},
 skt:{pop:{lat:6}},
 vil:{pop:{fun:30,dva:30,ang:30,lat:30}}};
Object.assign(REGIONS,{
 oce:{n:X('ออกแก้ว เมืองท่าของฟูนันบนดินดอนสามเหลี่ยมแม่น้ำโขง','Oc Eo, Funan’s port on the Mekong delta'),sc:'suvd',food:2,cold:0,dry:0},
 abr:{n:X('เมืองหลวงของฟูนันบนที่ราบน้ำท่วมถึง (อังกอร์บุรีในกัมพูชาปัจจุบัน)','Funan’s inland capital on the flood plain (Angkor Borei in today’s Cambodia)'),sc:'suvd',food:2,cold:0,dry:0},
 uth:{n:X('อู่ทอง เมืองคูน้ำล้อมริมลำน้ำจระเข้สามพัน','U Thong, a moated town on the Chorakhe Sam Phan stream'),sc:'suvc',food:2,cold:0,dry:0},
 npt:{n:X('นครปฐม เมืองใหญ่ที่สุดของทวารวดี','Nakhon Pathom, the greatest city of Dvaravati'),sc:'suvc',food:2,cold:0,dry:0},
 stp:{n:X('ศรีเทพ เมืองคูน้ำสองชั้นในลุ่มน้ำป่าสัก','Si Thep, the double-moated city of the Pa Sak valley'),sc:'suvs',food:1,cold:0,dry:0},
 lvo:{n:X('ละโว้ เมืองบนฝั่งแม่น้ำลพบุรี','Lavo, the town on the Lopburi river'),sc:'suvc',food:2,cold:0,dry:0},
 hpj:{n:X('หริภุญชัย เมืองในหุบเขาริมแม่น้ำกวงและแม่น้ำปิง','Haripunjaya, in the valley of the Kuang and the Ping'),sc:'suvn',food:1,cold:0,dry:0},
 cyj:{n:X('ไชยา เมืองท่าบนคาบสมุทรมลายู','Chaiya, a port on the Malay peninsula'),sc:'suvk',food:2,cold:0,dry:0},
 fdt:{n:X('เมืองฟ้าแดดสงยาง บนที่ราบสูงโคราช','Fa Daet Song Yang, on the Khorat plateau'),sc:'suvi',food:1,cold:0,dry:1},
 ang:{n:X('ยโศธรปุระ เมืองพระนครริมทะเลสาบใหญ่','Yasodharapura, the city of Angkor by the Great Lake'),sc:'suva',food:2,cold:0,dry:0},
 phm:{n:X('วิมายปุระ (พิมาย) ปลายทางถนนจากพระนคร','Vimayapura (Phimai), at the end of the road from Angkor'),sc:'suvi',food:1,cold:0,dry:1},
 prg:{n:X('ดินแดนบุรีรัมย์ ระหว่างเขาพนมรุ้งกับเทือกเขาพนมดงรัก','the Buriram country, between Phanom Rung and the Dangrek hills'),sc:'suvi',food:1,cold:0,dry:1},
 skt:{n:X('สุโขทัย เมืองหน้าด่านของพระนครริมแม่น้ำยม','Sukhothai, an Angkorian outpost near the Yom river'),sc:'suvs',food:1,cold:0,dry:0},
 vil_22:{n:X('หมู่บ้านทำนาในที่ราบลุ่มแม่น้ำ','a rice village on the river plain'),sc:'suvv',food:2,cold:0,dry:0}});
Object.assign(COORD,{oce:[10.25,105.15],abr:[10.99,104.98],uth:[14.37,99.89],npt:[13.82,100.06],stp:[15.47,101.15],lvo:[14.8,100.62],hpj:[18.58,99.01],cyj:[9.38,99.18],fdt:[16.45,103.48],ang:[13.41,103.87],phm:[15.22,102.49],prg:[14.53,102.94],skt:[17.02,99.7],vil_22:[14.5,100.5]});
for(const k in R22){NEIGH[k]=[];VR[k]=['plain'];R3[k==='vil'?'vil_22':k]={vil:99999,share:0,plant:{ya:99999,n:X('ข้าว อ้อย มะพร้าว และหมาก','rice, sugar cane, coconuts and betel')},ani:['buffalo','zebu','pig'],hunt:'boar',pred:X('เสือโคร่งจากป่า','A tiger from the forest')};
  for(const a of ['buffalo','zebu','pig']){DOMYA[a]=DOMYA[a]||{};DOMYA[a][k]=99999}}
SC.suvv={d:['#8ec4dc','#f0dcae'],n:['#0a1024','#262040'],far:'#6f9a66',near:'#5f8a46',gr:'#6aa03e',riv:'#5f8f86',tree:'palm',suv:1};
SC.suvc=Object.assign({},SC.suvv,{far:'#7f9a6a',gr:'#76a044'});
SC.suvd=Object.assign({},SC.suvv,{sea:'#3a8aa8',riv:'#6a9a8e',far:'#78a072',tree:'palm'});
SC.suvs=Object.assign({},SC.suvv,{far:'#6f8a60',gr:'#7a9a48',tree:'broad',riv:'#5f8a86'});
SC.suvn=Object.assign({},SC.suvv,{far:'#5f7a58',gr:'#6a9244',tree:'broad',riv:'#5f8a96',d:['#9cc4d8','#e8dcbc']});
SC.suvk=Object.assign({},SC.suvv,{riv:null,sea:'#2f8ab0',tree:'palm',far:'#5f8a5a'});
SC.suvi=Object.assign({},SC.suvv,{riv:null,far:'#9a9a6a',gr:'#9aa252',tree:'broad'});
SC.suva=Object.assign({},SC.suvv,{far:'#6f8f60',gr:'#6f9c42',riv:'#5a8a8e',tree:'palm'});
const RNOTE22={
 oce:X('ออกแก้วอยู่ในเวียดนามใต้ปัจจุบัน ห่างทะเลราว 25 กิโลเมตร มีคลองขุดยาวต่อไปถึงเมืองหลวงด้านใน นักโบราณคดีชาวฝรั่งเศส หลุยส์ มาเลอแรต์ ขุดที่นี่ในทศวรรษ 1940 พบลูกปัด ตราประทับ และเหรียญทองของจักรพรรดิโรมันแอนโทนินุส ไพอัส จากกลางศตวรรษที่ 2','Oc Eo lies in today’s southern Vietnam, about 25 km from the sea, with dug canals running inland to the capital. The French archaeologist Louis Malleret excavated it in the 1940s and found beads, seals, and gold medallions of the Roman emperor Antoninus Pius from the mid-2nd century.'),
 abr:X('นักวิชาการหลายคนเห็นว่าเมืองที่อังกอร์บุรีน่าจะเป็นเมืองหลวงของฟูนันอยู่นาน มีคลองโบราณต่อกับออกแก้ว จีนเรียกอาณาจักรนี้ว่าฟูนัน ส่วนชื่อที่คนท้องถิ่นใช้จริงๆ ยังไม่แน่ชัด','Many scholars think the town at Angkor Borei was Funan’s capital for much of its history, linked to Oc Eo by ancient canals. The Chinese called the kingdom Funan; what its own people called it is still uncertain.'),
 uth:X('อู่ทองเป็นเมืองโบราณที่มีคูน้ำล้อม การติดต่อกับอินเดียเก่าไปถึงราวศตวรรษที่ 4 หรือก่อนนั้น พบเหรียญโรมันสมัยศตวรรษที่ 3 เหรียญเงินทวารวดี และตราประทับดินเผาจำนวนมาก บางคนเชื่อว่าที่นี่คือสุวรรณภูมิในคัมภีร์ แต่ยังพิสูจน์ไม่ได้','U Thong is an ancient moated town whose links with India go back to at least the 4th century. Finds include 3rd-century Roman coins, Dvaravati silver medallions and many clay sealings. Some believe it was the Suvarnabhumi of the texts, but that cannot be proved.'),
 npt:X('นครปฐมเป็นศูนย์กลางใหญ่ของทวารวดีระหว่างศตวรรษที่ 6 ถึง 10 คูเมืองล้อมพื้นที่ราว 300 เฮกตาร์ แล้วขยายเป็นกว่า 600 พระปฐมเจดีย์ที่เห็นทุกวันนี้สร้างครอบเจดีย์เก่าสมัยรัชกาลที่ 4','Nakhon Pathom was the great centre of Dvaravati from the 6th to the 10th century; its moat enclosed some 300 hectares, later over 600. The Phra Pathom Chedi seen today was built over an older stupa in the reign of King Mongkut.'),
 stp:X('ศรีเทพมีเมืองในคูน้ำทรงกลม และเมืองนอกที่ขยายไปทางตะวันออก ราว 4.7 ตารางกิโลเมตร นับถือทั้งพระวิษณุ พระศิวะ และพระพุทธเจ้า ทิ้งร้างไปราวศตวรรษที่ 13 ถึง 14 ยูเนสโกขึ้นทะเบียนเป็นมรดกโลกเมื่อ 19 กันยายน 2023','Si Thep has an inner town in a round moat and an outer town spreading east, about 4.7 km² in all. Its people worshipped Vishnu, Shiva and the Buddha. It was abandoned around the 13th or 14th century, and UNESCO inscribed it as a World Heritage Site on 19 September 2023.'),
 lvo:X('ละโว้หรือลพบุรีเป็นศูนย์กลางหนึ่งของทวารวดีตั้งแต่ราวกลางศตวรรษที่ 7 ต่อมาตกอยู่ใต้อำนาจของพระนครตั้งแต่ราวปี 1005 จีนบันทึกว่าละโว้ส่งทูตไปเองจนถึงปลายศตวรรษที่ 13','Lavo, today’s Lopburi, was a Dvaravati centre from around the mid-7th century and came under Angkorian authority from about 1005. Chinese records show Lavo still sending its own envoys as late as the end of the 13th century.'),
 hpj:X('หริภุญชัยคือลำพูนในปัจจุบัน พงศาวดารบอกว่าพระนางจามเทวีจากละโว้มาครองเมืองในศตวรรษที่ 7 แต่นักโบราณคดีคิดว่าเมืองน่าจะเกิดราวปี 750 ผู้คนพูดภาษามอญ จนถูกพญามังรายยึดในปลายศตวรรษที่ 13','Haripunjaya is today’s Lamphun. The chronicles say Queen Camadevi came from Lavo to rule it in the 7th century; archaeologists think the town more probably began around 750. Its people spoke Mon until King Mangrai took it in the late 13th century.'),
 cyj:X('ไชยาอยู่บนเส้นทางลัดข้ามคาบสมุทรระหว่างอ่าวไทยกับทะเลอันดามัน ศิลปะที่นี่ใกล้ชิดกับศรีวิชัยในสุมาตราและชวา และนับถือพุทธศาสนามหายาน','Chaiya sat on the short cut across the peninsula between the Gulf of Thailand and the Andaman Sea. Its art was close to that of Srivijaya in Sumatra and Java, and it followed Mahayana Buddhism.'),
 fdt:X('เมืองฟ้าแดดสงยางในกาฬสินธุ์เป็นเมืองคูน้ำล้อมสมัยทวารวดี ที่นี่พบใบเสมาหินจำนวนมาก บางแผ่นสลักเรื่องชาดก ใบเสมาแบบนี้พบมากที่สุดในอีสาน','Fa Daet Song Yang in Kalasin was a moated Dvaravati town where many stone boundary markers have been found, some carved with Jataka tales. Markers like these are found most of all in the northeast.'),
 ang:X('พระเจ้ายโศวรมันที่ 1 สร้างเมืองยโศธรปุระราวปี 889 ถึง 910 และขุดบารายตะวันออกยาว 7.5 กิโลเมตร กว้าง 1.8 กิโลเมตร เมืองนี้เป็นเมืองหลวงของพระนครอยู่หลายร้อยปี นครวัดและนครธมสร้างขึ้นในบริเวณนี้','Yasovarman I founded Yasodharapura around 889 to 910 and dug the East Baray, 7.5 km long and 1.8 km wide. The city was Angkor’s capital for centuries; Angkor Wat and Angkor Thom were built here.'),
 phm:X('ปราสาทพิมายเป็นปราสาทเขมรที่ใหญ่ที่สุดแห่งหนึ่งในไทย สร้างถวายพุทธศาสนามหายาน ส่วนใหญ่ในปลายศตวรรษที่ 11 ถึงปลายศตวรรษที่ 12 จารึกเรียกเมืองนี้ว่าวิมายปุระ อยู่ที่ปลายถนนโบราณจากพระนคร','Prasat Phimai, one of the largest Khmer sanctuaries in Thailand, was a Mahayana Buddhist shrine built mostly between the late 11th and late 12th centuries. Inscriptions call the town Vimayapura; it stood at the end of the ancient road from Angkor.'),
 prg:X('ปราสาทพนมรุ้งสร้างบนปากปล่องภูเขาไฟที่ดับแล้ว ใช้เวลาหลายช่วงตั้งแต่ศตวรรษที่ 10 ถึง 13 ใกล้ๆ คือปราสาทเมืองต่ำที่มีสระน้ำล้อม ส่วน “โกลเด้นบอย” ถูกพบที่อำเภอละหานทราย ในจังหวัดเดียวกัน','Phanom Rung was built on the rim of an extinct volcano in phases from the 10th to the 13th century; nearby is Muang Tam, with its ring of ponds. The “Golden Boy” was found at Lahan Sai, in the same province.'),
 skt:X('ก่อนเป็นราชธานีของคนไทย สุโขทัยเป็นเมืองหน้าด่านของพระนคร ศาลตาผาแดงและวัดศรีสวายสร้างตามแบบเขมร ราวปี 1238 พ่อขุนบางกลางหาวกับพ่อขุนผาเมืองยึดเมืองนี้ แล้วตั้งราชวงศ์พระร่วง','Before it was a Thai capital, Sukhothai was an Angkorian outpost; the Ta Pha Daeng shrine and Wat Si Sawai were built in the Khmer manner. Around 1238 Pho Khun Bang Klang Hao and Pho Khun Pha Mueang took the town and founded the Phra Ruang dynasty.'),
 vil:X('คนส่วนใหญ่ในดินแดนนี้เป็นชาวนาปลูกข้าว อยู่บ้านใต้ถุนสูงหนีน้ำ เลี้ยงควาย หมู และไก่ จับปลาในหนองและลำคลอง และนับถือผีบ้านผีเมืองควบคู่ไปกับเทพจากอินเดียและพระพุทธเจ้า','Most people here grew rice, lived in houses raised on posts above the floods, kept buffaloes, pigs and chickens, fished the ponds and canals, and honoured house and village spirits alongside the gods from India and the Buddha.')};
function pickEra22(){const ks=Object.keys(ERA22);return weighted(ks.map(k=>[k,ERA22[k].w]))}
function yaFor22(e){const E=ERA22[e];return Math.round((E.b+rnd()*(E.a-E.b))/5)*5}
// towns exist only after they were founded, and some fade
const RW22={uth:[1700,0],stp:[1700,0],lvo:[1377,0],hpj:[1275,0],cyj:[1375,0],fdt:[1325,0],ang:[1223,0],phm:[1000,0],prg:[1100,0],skt:[825,0],oce:[1925,1400]};
function pickCity22(e,ya){const ks=Object.keys(R22).filter(k=>R22[k].pop[e]&&(!RW22[k]||(ya<=RW22[k][0]&&ya>=RW22[k][1])));return weighted(ks.map(k=>[k,R22[k].pop[e]]))}
const pw22=(rg,ya)=>{const e=eraS22(ya);return (R22[rg].pop[e]||10)*1000/(ERA22[e].wp*1e6)};

/* ---------- names ---------- */
const NM22={
 m:[['ชัยวีระ','Jayavira',X('วีรบุรุษผู้มีชัย','victorious hero')],['โสมทัตต์','Somadatta',X('ผู้ที่ดวงจันทร์ประทานให้','given by the moon')],['ธรรมบาล','Dharmapala',X('ผู้คุ้มครองธรรม','protector of the dharma')],['จันทร','Chandra',X('ดวงจันทร์','the moon')],['สุวรรณ','Suvarna',X('ทองคำ','gold')],['อินทร','Indra',X('ชื่อราชาแห่งเทวดา','the name of the king of the gods')]],
 f:[['กมลา','Kamala',X('ดอกบัว','lotus')],['รัศมี','Rasmi',X('แสงที่เปล่งออกมา','rays of light')],['มาลา','Mala',X('พวงมาลัย','garland')],['จันทริกา','Chandrika',X('แสงจันทร์','moonlight')],['ศรี','Sri',X('ความรุ่งเรืองและโชคดี','splendour and good fortune')],['รัตนา','Ratna',X('อัญมณี','jewel')]],
 tm:[['คำ','Kham',X('ทองคำ ในภาษาไท','gold, in the Tai language')],['แดง','Daeng',X('สีแดง ในภาษาไท','red, in the Tai language')],['บุญ','Bun',X('บุญ จากคำบาลีว่า ปุญญะ','merit, from the Pali puñña')]],
 tf:[['แก้ว','Kaew',X('แก้วหรืออัญมณี ในภาษาไท','crystal or jewel, in the Tai language')],['ดอก','Dok',X('ดอกไม้ ในภาษาไท','flower, in the Tai language')],['คำ','Kham',X('ทองคำ ในภาษาไท','gold, in the Tai language')]]};
const tai22=S=>{const y=S.ya||S.ya0;return (y<=1025&&['hpj','skt'].includes(S.rg)&&rnd()<.5)||(y<=900&&S.rg==='vil'&&rnd()<.25)};
function mkName22(S){const p=S.peo22==='tai'?pick(S.sex==='f'?NM22.tf:NM22.tm):pick(S.sex==='f'?NM22.f:NM22.m);
  S.nm22={th:p[0],en:p[1],m:p[2]};return X(p[0],p[1])}
const gn22X=sx=>{const S0={sex:sx,rg:S&&S.rg||'vil',ya:S&&S.ya||1200,peo22:S&&S.peo22};return mkName22(S0)};
function nameNote22(S){const n=S.nm22;if(!n)return X('','');
  if(S.peo22==='tai')return X('ชื่อของคุณ “'+n.th+'” แปลว่า '+n.m.th+' คนที่พูดภาษาไทน่าจะอพยพลงมาจากทางเหนือ บริเวณกวางสีในจีนปัจจุบัน ราวศตวรรษที่ 8 ถึง 10 ภาษาของพวกเขาคือต้นของภาษาไทย ลาว และไทใหญ่ในทุกวันนี้ ชื่อในเกมแต่งขึ้นตามคำในภาษาไท ตัวคนแต่งขึ้น',
    'Your name, '+n.en+', means “'+n.m.en+'”. Tai-speaking people probably moved down from the north, around today’s Guangxi in China, between the 8th and 10th centuries; their language is the ancestor of Thai, Lao and Shan today. The name is built from Tai words; the person is invented.');
  return X('ชื่อของคุณ “'+n.th+'” แปลว่า '+n.m.th+' ชนชั้นสูงในยุคนี้นิยมชื่อภาษาสันสกฤต และคำเหล่านี้ก็เข้ามาอยู่ในภาษาไทยด้วย เช่น จันทร์ และกมล ส่วนชื่อของคนธรรมดาส่วนใหญ่สูญหายไป เพราะจารึกมักบันทึกแต่ผู้บริจาค ขุนนาง และข้าวัด ตัวคนในเกมแต่งขึ้น',
    'Your name, '+n.en+', means “'+n.m.en+'”. The elite of this age liked Sanskrit names, and such words came into Thai too, as chan (moon) and kamon (lotus). Most ordinary people’s names are lost, because inscriptions mostly record donors, officials and temple servants. The person is invented.')}

/* ---------- careers ---------- */
const CAREERS22={
farmer:{n:X('ชาวนา','Rice farmer'),act:'sow',sk:'kn',ok:S=>S.cls!=='elite'&&!['oce','cyj'].includes(S.rg),
 L:[X('เด็กเลี้ยงควาย','a child who herds the buffaloes'),X('ชาวนา','a rice farmer'),X('ชาวนาที่มีนาหลายแปลง','a farmer with many fields'),X('นายบ้านที่ทั้งหมู่บ้านนับถือ','the village chief everyone respects')]},
fisher:{n:X('ชาวประมงและคนเรือ','Fisher and boatman'),act:'fish',sk:'sv',ok:S=>S.cls!=='elite'&&['oce','abr','cyj','ang','vil','npt','uth'].includes(S.rg),
 L:[X('เด็กช่วยกู้ลอบ','a child who helps empty the fish traps'),X('ชาวประมง','a fisher'),X('นายเรือที่รู้จักทุกร่องน้ำ','a boatman who knows every channel'),X('เจ้าของเรือหลายลำ','the owner of many boats')]},
bead:{n:X('ช่างลูกปัด','Bead maker'),act:'job',scene:'bead22',sk:'cr',l:X('หลอมแก้วสีและเจาะหินคาร์เนเลียนเป็นลูกปัดขายให้พ่อค้า','Melt coloured glass and drill carnelian into beads for the merchants'),ok:S=>['oce','abr','uth','npt','cyj','vil'].includes(S.rg)&&S.ya>=1125,
 L:[X('เด็กร้อยลูกปัด','a child who strings beads'),X('ช่างลูกปัด','a bead maker'),X('ช่างที่ทำลูกปัดแก้วหลายสีได้','a maker of many-coloured glass beads'),X('เจ้าของโรงทำลูกปัดที่พ่อค้าต่างเมืองรู้จัก','owner of a bead workshop known to foreign merchants')]},
caster:{n:X('ช่างหล่อสำริด','Bronze caster'),act:'job',scene:'cast22',sk:'cr',l:X('ปั้นหุ่นขี้ผึ้ง พอกดิน แล้วเทสำริดร้อนลงแม่พิมพ์','Model in wax, coat it in clay and pour hot bronze into the mould'),ok:S=>S.cls!=='slave'&&S.ya<=1475,
 L:[X('เด็กเป่าเตา','a child who works the bellows'),X('ช่างหล่อ','a bronze caster'),X('ช่างที่หล่อรูปเทพได้','a caster who can cast the images of gods'),X('หัวหน้าโรงหล่อของเจ้าเมือง','master of the lord’s foundry')]},
carver:{n:X('ช่างสลักหิน','Stone carver'),act:'job',scene:'carve22',sk:'cr',l:X('สลักหินทรายเป็นรูปเทพ ทับหลัง และใบเสมา','Carve sandstone into gods, lintels and boundary markers'),ok:S=>S.cls!=='elite'&&S.ya<=1500,
 L:[X('เด็กขัดหิน','a child who polishes the stone'),X('ช่างสลัก','a stone carver'),X('ช่างที่สลักทับหลังได้ทั้งแผ่น','a carver trusted with a whole lintel'),X('นายช่างที่ทั้งปราสาทฟังคำสั่ง','the master the whole sanctuary obeys')]},
trader:{n:X('พ่อค้าเรือ','Sea trader'),act:'job',scene:'market',sk:'so',l:X('ขายของป่า เครื่องเทศ และลูกปัดให้เรือจากอินเดียและจีน','Sell forest goods, spices and beads to ships from India and China'),ok:S=>S.cls!=='slave'&&['oce','abr','cyj','npt','uth','lvo','ang'].includes(S.rg),
 L:[X('เด็กเฝ้าสินค้า','a child who watches the goods'),X('พ่อค้า','a trader'),X('พ่อค้าที่ล่องเรือไปถึงเมืองท่าไกลๆ','a trader who sails to faraway ports'),X('เศรษฐีที่เจ้าเมืองต้องเกรงใจ','a merchant even lords must flatter')]},
priest:{n:X('พราหมณ์ผู้ประกอบพิธี','Brahmin priest'),act:'job',scene:'fire22',sk:'kn',l:X('ท่องมนต์สันสกฤต และประกอบพิธีให้เจ้าเมืองและปราสาท','Chant Sanskrit and perform the rites for lords and sanctuaries'),ok:S=>S.var22==='brah',
 L:[X('ศิษย์พราหมณ์','a Brahmin’s pupil'),X('พราหมณ์ผู้ประกอบพิธี','a Brahmin priest'),X('พราหมณ์ประจำปราสาท','priest of a sanctuary'),X('ปุโรหิตของราชสำนัก','the royal chaplain')]},
mahout:{n:X('ควาญช้างและทหาร','Mahout and soldier'),act:'job',scene:'ele22',sk:'sv',l:X('ฝึกช้าง ดูแลมัน และออกศึกบนหลังช้าง','Train elephants, care for them, and ride them to war'),ok:S=>S.sex==='m'&&S.cls!=='slave',
 L:[X('เด็กหาหญ้าให้ช้าง','a boy who cuts fodder for the elephants'),X('ควาญช้าง','a mahout'),X('ควาญช้างศึกของเจ้าเมือง','war-elephant driver of the lord'),X('หัวหน้ากองช้าง','master of the elephants')]},
healer:{n:X('หมอยาและหมอผี','Healer'),act:'job',scene:'herb',sk:'kn',l:X('ต้มยาสมุนไพร เป่ามนต์ และดูแลคนป่วย','Brew herbal medicines, blow spells, and nurse the sick'),ok:S=>S.cls!=='slave',
 L:[X('เด็กบดยา','a child who grinds the medicines'),X('หมอยา','a healer'),X('หมอที่คนเดินทางมาหาจากต่างเมือง','a healer people travel from other towns to see'),X('หมอประจำอโรคยศาล','a healer of a royal hospital')]},
dancer:{n:X('นางรำและนักดนตรีของเทวสถาน','Temple dancer and musician'),act:'job',scene:'dance22',sk:'so',l:X('ฝึกรำและบรรเลงดนตรีถวายเทพในปราสาท','Train to dance and play music for the gods of the sanctuary'),ok:S=>S.ya<=1300&&S.cls!=='elite',
 L:[X('เด็กฝึกรำ','a child learning the dance'),X('นางรำหรือนักดนตรี','a dancer or musician'),X('ผู้นำวงรำในวันพิธี','leader of the dance on feast days'),X('ครูรำที่ทั้งปราสาทเคารพ','a dance teacher the whole sanctuary honours')]}};
const CARNOTE22=X('งานส่วนใหญ่สืบทอดในครอบครัว จารึกเขมรระบุชื่อคนจำนวนมากที่ถูกมอบให้ทำงานแก่ปราสาท ทั้งชาวนา ช่าง นักดนตรี และนางรำ งานช่างที่ดีที่สุด เช่นรูปสำริดและทับหลัง ทำให้กับเทพและเจ้าเมือง ไม่ใช่ให้คนทั่วไป','Most work ran in families. Khmer inscriptions list many people given to serve sanctuaries: farmers, craftsmen, musicians and dancers. The finest work, bronze images and carved lintels, was made for gods and lords, not for ordinary people.');
const VAR22={elite:X('ตระกูลขุนนาง','a family of officials and lords'),brah:X('ครอบครัวพราหมณ์','a Brahmin family'),mer:X('ครอบครัวพ่อค้า','a merchant family'),free:X('ครอบครัวชาวนาและช่าง','a family of farmers and craftsmen'),knum:X('ข้าวัดหรือ “ขญุม” ที่ต้องทำงานให้ปราสาทหรือนาย','temple servants, khñuṃ, bound to work for a sanctuary or a master')};
const VARNOTE22=X('จารึกเขมรแบ่งคนตามตำแหน่ง ตระกูล และหน้าที่ต่อปราสาท คนกลุ่มใหญ่ถูกเรียกว่า “ขญุม” ซึ่งต้องทำงานให้วัดหรือนาย บางคนแปลว่าทาส บางคนแปลว่าข้ารับใช้ เพราะบางคนก็มีที่ดินและมีข้าของตัวเองด้วย นักประวัติศาสตร์ยังถกเถียงกันอยู่','Khmer inscriptions sort people by rank, family and duty to a sanctuary. A large group were called khñuṃ, bound to work for a temple or a master. Some translate the word as slave, others as servant, since some khñuṃ held land and even servants of their own. Historians still argue over it.');
const PEO22={fun:X('ชาวฟูนัน','the people of Funan'),mon:X('ชาวมอญ','Mon-speaking people'),khm:X('ชาวเขมร','Khmer-speaking people'),mal:X('ชาวเมืองท่าคาบสมุทร','people of the peninsula ports'),tai:X('ชาวไท ผู้มาใหม่จากทางเหนือ','Tai-speaking newcomers from the north')};
const var22=S=>{if(S.monk22)return X('ภิกษุ','a Buddhist monk');return VAR22[S.var22]||VAR22.free};
function peo22(S){const e=eraS22(S.ya0),r=S.rg;if(tai22(S))return 'tai';if(['oce','abr'].includes(r)&&e==='fun')return 'fun';if(r==='cyj')return 'mal';
  if(['ang','phm','prg','abr'].includes(r)||(['stp','lvo','skt'].includes(r)&&['ang','lat'].includes(e)))return 'khm';return 'mon'}
const PEONOTE22=X('ภาษาในดินแดนนี้หลากหลาย ชาวมอญอยู่ในลุ่มเจ้าพระยาและหริภุญชัย ชาวเขมรอยู่ทางตะวันออกและอีสานใต้ เมืองท่าทางใต้พูดภาษาตระกูลมลายู คนพูดภาษาไทมาถึงทีหลัง แล้วทุกกลุ่มก็ผสมกันจนกลายเป็นคนในภูมิภาคทุกวันนี้','This land spoke many languages: Mon in the Chao Phraya basin and Haripunjaya, Khmer to the east and in the southern northeast, Malay languages in the southern ports. Tai speakers arrived later, and all of them mixed into the people of the region today.');

function init22(){const e=eraS22(S.ya0);S.era=e;
  S.var22=weighted([['elite',.06],['brah',.04],['mer',['oce','cyj','npt','uth','abr'].includes(S.rg)?.16:.06],['free',.6],['knum',['ang','phm','prg','lvo','stp'].includes(S.rg)&&e!=='fun'?.28:.14]]);
  S.cls={elite:'elite',brah:'elite',mer:'free',free:'free',knum:'dep'}[S.var22];
  S.peo22=peo22(S);S.settled=1;S.roleNo=1;S.lit=0;S.schOK=(S.cls==='elite'||rnd()<.12)?1:0;
  S.ag=S.cls==='elite'?12:S.var22==='mer'?6:S.cls==='free'?2:1;S.saw={};S.met22=[];S.obj22=[];S.fall22=0;S.monk22=null;
  S.field=S.var22==='free'||S.var22==='knum'?1:0;
  if(S.field){S.herd.buffalo=1+((rnd()*2)|0);if(rnd()<.5)S.herd.pig=1+((rnd()*3)|0)}
  if(S.cls==='elite'){S.herd.buffalo=4+((rnd()*6)|0);S.herd.zebu=2+((rnd()*4)|0)}}
Object.assign(INV,{bead22:{n:X('ลูกปัดแก้ว','glass beads'),v:2},salt22:{n:X('เกลือสินเธาว์จากที่ราบสูง','rock salt from the plateau'),v:2},resin22:{n:X('ยางไม้หอมและไม้หอม','fragrant resin and aromatic wood'),v:3}});
const meet22=(S,k)=>{S.met22=S.met22||[];if(!S.met22.includes(k))S.met22.push(k)};
const obj22=(S,k)=>{S.obj22=S.obj22||[];if(!S.obj22.includes(k))S.obj22.push(k)};

/* ---------- the year ---------- */
function v22Year(a){if(S.ch!==22)return;const e=eraS22(S.ya);S.era=e;
  if(S.herd){const cap=S.cls==='elite'?20:S.var22==='mer'?6:4;for(const k in S.herd)S.herd[k]=Math.min(S.herd[k],k==='pig'?cap*2:cap)}
  fx({f:{elite:4,free:1,dep:0,slave:-1}[S.cls]||0});
  if(a>=14&&S.car&&S.clv>=1&&!S.monk22)S.ag+=S.clv*(S.car==='trader'?2:1);
  if(S.focus==='school')S.lit=clamp(S.lit+4+S.kn/40,0,100);
  if(S.focus==='write')S.lit=clamp(S.lit+3,0,100);
  const ya=S.ya,once=(k,f)=>{if(!S.tl)S.tl={};if(S.tl[k])return;S.tl[k]=1;f()};
  if(ya<=1080&&ya>=1076&&S.rg==='stp'&&a>=6)once('stp946',()=>{S.fall22=1;fx({b:-8,f:-5});log(X('กองทัพจากพระนครมาถึงศรีเทพ เจ้าเมืองต้องยอมรับอำนาจของพระราชาองค์ใหม่ทางตะวันออก','An army from Angkor reaches Si Thep. The lord of the city must bow to the new king in the east.'),X('จารึกบันทึกว่าพระเจ้าราเชนทรวรมันที่ 2 ได้ชัยเหนือดินแดนรามัญในปี 946 นักประวัติศาสตร์หลายคนเห็นว่าศรีเทพตกอยู่ใต้อำนาจพระนครในช่วงนี้ หลังจากนั้นที่นี่สร้างปรางค์แบบเขมรถวายพระศิวะ','An inscription records Rajendravarman II’s victory over the land of Ramanya in 946, and many historians think Si Thep came under Angkor at this time. Afterwards Khmer-style towers were built here for Shiva.'),'sad')});
  if(ya<=1020&&ya>=1015&&S.rg==='lvo'&&a>=6)once('lvo1005',()=>log(X('ขุนนางจากพระนครมาประจำที่ละโว้ จารึกใหม่เขียนด้วยภาษาเขมร ไม่ใช่ภาษามอญแบบเดิม','Officials from Angkor take up posts in Lavo. The new inscriptions are in Khmer, not Mon as before.'),X('ละโว้อยู่ใต้อำนาจพระนครตั้งแต่ราวปี 1005 ในรัชกาลพระเจ้าสุริยวรมันที่ 1 จารึกที่ลพบุรีหลังจากนั้นเขียนด้วยภาษาเขมร ทุกวันนี้ลพบุรียังมีปรางค์แบบเขมรหลายแห่ง เช่นพระปรางค์สามยอด','Lavo came under Angkorian authority from around 1005, in the reign of Suryavarman I, and inscriptions at Lopburi afterwards are in Khmer. Lopburi still has many Khmer-style towers, such as Phra Prang Sam Yot.')));
  if(ya<=1300&&ya>=1050&&['hpj','vil','skt'].includes(S.rg)&&a>=8&&rnd()<.25)once('tai22',()=>{fx({kn:2,so:1});log(X('ครอบครัวคนแปลกหน้าจากทางเหนือมาตั้งบ้านริมลำน้ำ พวกเขาเรียกข้าวว่า “เข้า” เรียกน้ำว่า “น้ำ” และเลี้ยงผีบรรพบุรุษในบ้าน','A family of strangers from the north settles by the stream. They call rice khao and water nam, and keep the ancestor spirits in the house.'),X('นักภาษาศาสตร์ประมาณว่าคนพูดภาษาไทกลุ่มตะวันตกเฉียงใต้อพยพจากบริเวณกวางสีลงมาในเอเชียตะวันออกเฉียงใต้ระหว่างศตวรรษที่ 8 ถึง 10 พวกเขาผสมกับชาวมอญ เขมร และคนพื้นเมืองอื่นๆ ไม่ได้ “แทนที่” ใคร คำว่าข้าว น้ำ และผี ยังเป็นคำไทยจนทุกวันนี้','Linguists estimate that south-western Tai speakers moved from the Guangxi region into Southeast Asia between the 8th and 10th centuries. They mixed with Mon, Khmer and other local people rather than “replacing” anyone. Khao, nam and phi are still Thai words today.'))});
  if(ya<=1000&&ya>=995&&S.rg==='cyj'&&a>=6)once('chola22',()=>{S.fall22=1;fx({b:-8,f:-6,h:-3});log(X('กองเรือรบจากอินเดียใต้โจมตีเมืองท่าตามคาบสมุทร ปล้นสินค้าและจับคนไป','A war fleet from South India raids the peninsula ports, plundering goods and carrying people off.'),X('ราวปี 1025 พระเจ้าราเชนทรโจฬะแห่งอินเดียใต้ส่งกองเรือโจมตีศรีวิชัยและเมืองท่าในคาบสมุทร จารึกที่ตันชาวูร์ระบุชื่อเมืองที่ถูกโจมตี รวมทั้งมาทมาลิงคัม ซึ่งเชื่อกันว่าคือตามพรลิงค์ หลังจากนั้นศรีวิชัยอ่อนแอลงมาก','Around 1025 the South Indian king Rajendra Chola sent a fleet against Srivijaya and the peninsula ports. His inscription at Thanjavur names the places attacked, including Madamalingam, thought to be Tambralinga. Srivijaya never fully recovered.'),'sad')});
  if(ya<=1470&&ya>=1400&&S.rg==='abr'&&a>=6)once('chenla22',()=>{S.fall22=1;fx({b:-8,f:-4});log(X('กองทัพจากทางเหนือที่พูดภาษาเขมรมาถึงเมืองหลวง พระราชาของฟูนันหนีลงใต้ เจ้านายใหม่มาจากแดนที่จีนเรียกว่าเจนละ','An army from the north that speaks Khmer reaches the capital. Funan’s king flees south; the new lords come from the land the Chinese call Chenla.'),X('พงศาวดารราชวงศ์ถังบอกว่าเจนละปราบฟูนันได้ต้นศักราชเจิ้งกวน (627–649) และพระราชาฟูนันย้ายไปทางใต้ นักประวัติศาสตร์ปัจจุบันสงสัยว่าเจนละอาจไม่ใช่อาณาจักรเดียว แต่เป็นกลุ่มเจ้าเมืองที่รวมกันหลวมๆ','The New Book of Tang says Chenla subdued Funan at the start of the Zhenguan era (627–649) and that Funan’s king moved south. Historians today wonder whether Chenla was one kingdom at all, or a loose league of local lords.'),'sad')});
  if(ya<=849&&ya>=847&&S.rg==='ang'&&a>=4)once('cham22',()=>{S.fall22=1;fx({b:-14,f:-10,h:-6});ms(X('รอดจากวันที่ชาวจามบุกพระนคร','Survived the day the Chams took Angkor'));log(X('กองเรือของชาวจามแล่นขึ้นแม่น้ำโขง ข้ามทะเลสาบ และบุกยโศธรปุระโดยไม่มีใครทันตั้งตัว พระราชาถูกสังหาร เมืองถูกปล้น ครอบครัวของคุณหนีเข้าป่า','A Cham fleet sails up the Mekong, across the Great Lake, and falls on Yasodharapura without warning. The king is killed and the city sacked. Your family flees into the forest.'),X('ในเดือนมิถุนายน 1177 พระเจ้าชัยอินทรวรมันที่ 4 แห่งจามปาโจมตีพระนครทางน้ำ สังหารพระราชาและยึดครองอยู่ราวสี่ปี จนเจ้าชายที่จะเป็นพระเจ้าชัยวรมันที่ 7 ขับไล่ไปได้ ภาพการรบทางน้ำครั้งนี้ยังสลักอยู่ที่ปราสาทบายนและบันทายฉมาร์','In June 1177 Jaya Indravarman IV of Champa attacked Angkor by water, killed the king and held the country for about four years, until the prince who became Jayavarman VII drove them out. The naval battle is still carved at the Bayon and Banteay Chmar.'),'sad')});
  if(ya<=736&&ya>=730&&S.rg==='hpj'&&a>=6)once('mangrai22',()=>{S.fall22=1;fx({b:-10,f:-6});log(X('กองทัพไทยวนของพญามังรายล้อมหริภุญชัย ไม่นานเมืองก็แตก พระราชาชาวมอญหนีไป','The Tai Yuan army of King Mangrai besieges Haripunjaya. Before long the city falls and its Mon king flees.'),X('พญามังรายยึดหริภุญชัยในปลายศตวรรษที่ 13 แหล่งข้อมูลให้ปีต่างกันเป็น 1281 หรือ 1292 แล้วรวมเข้าในอาณาจักรล้านนา แต่วัดและเจดีย์ของหริภุญชัยยังได้รับการบูรณะต่อมา และคนลำพูนก็ยังบูชาพระนางจามเทวีจนทุกวันนี้','King Mangrai took Haripunjaya in the late 13th century, in 1281 or 1292 depending on the source, and made it part of his Lan Na kingdom. Yet Haripunjaya’s temples and stupas were kept up, and the people of Lamphun still honour Queen Camadevi today.'),'sad')});
}
function trade22Year(){const ks=Object.keys(S.inv).filter(k=>S.inv[k]>0&&k!=='grain').sort((a,b)=>INV[b].v-INV[a].v);
  if(!ks.length){if(rnd()<.4){S.ag+=1;log(X('คุณช่วยขนกระสอบข้าวลงเรือ ได้ข้าวสารและเกลือเป็นค่าแรง','You help load sacks of rice onto a boat and are paid in rice and salt.'),null,'it')}return}
  const k=ks[0];S.inv[k]--;const v=Math.max(1,Math.round(INV[k].v+(S.so>50?1:0)));S.ag+=v;
  log(X('คุณแลก'+INV[k].n.th+'ที่ตลาด ได้ของมีค่ากลับมา '+v+' ส่วน','You barter '+INV[k].n.en+' at the market for goods worth '+v),
    S.agNote?null:(S.agNote=1,X('ในดินแดนนี้คนส่วนใหญ่แลกของกันโดยตรง ข้าว ผ้า เกลือ ทอง และเงินใช้วัดมูลค่า จารึกเขมรตีราคาที่ดินเป็นผ้า ทอง เงิน และควาย ส่วนเหรียญเงินแบบทวารวดีมีน้อยและอาจใช้ในพิธีมากกว่าการซื้อขาย','Most people here bartered directly. Rice, cloth, salt, gold and silver measured value; Khmer inscriptions price land in cloth, gold, silver and buffaloes. Dvaravati-style silver medallions were few and may have served rites more than trade.')),'it')}
function title22(S){
  if(S.monk22&&S.age>=12)return X('ภิกษุ','a Buddhist monk');
  if(S.car&&S.age>=12&&S.clv>=1)return CAREERS22[S.car].L[S.clv];
  if(S.age<13)return S.cls==='elite'?X('ลูกขุนนาง','a child of the nobility'):S.var22==='knum'?X('ลูกข้าวัด','a child of temple servants'):X('เด็กในสุวรรณภูมิ','a child of Suvarnabhumi');
  if(S.car)return CAREERS22[S.car].L[S.clv];
  return {elite:X('ขุนนาง','an official'),brah:X('พราหมณ์','a Brahmin'),mer:X('พ่อค้า','a merchant'),free:X('ชาวนา','a farmer'),knum:X('ข้าวัด','a temple servant')}[S.var22]||X('ชาวนา','a farmer')}
