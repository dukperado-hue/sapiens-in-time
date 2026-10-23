/* ================= v0.21 CHAPTER 20 (shown as 12): THE GANGES, IN THE AGE OF THE BUDDHA ================= */
const ERA20={
 jan:{a:2624,b:2424,w:.3,wp:110,n:X('ยุคสิบหกแคว้นและนักบวชพเนจร','the sixteen realms and the wandering teachers')},
 mag:{a:2424,b:2292,w:.2,wp:130,n:X('ยุคมคธผงาด: ราชวงศ์นันทะและเมารยะ','Magadha rises: the Nandas and the Mauryas')},
 aso:{a:2292,b:2209,w:.2,wp:150,n:X('ยุคพระเจ้าอโศกและศิลาจารึก','the age of Ashoka and his edicts')},
 aft:{a:2209,b:1875,w:.3,wp:190,n:X('หลังเมารยะ: ศุงคะ ชาวกรีก และคัมภีร์ที่ถูกเขียนลงใบลาน','after the Mauryas: the Shungas, the Greeks, and the scriptures written down')}};
const era20=ya=>ya>2424?'jan':ya>2292?'mag':ya>2209?'aso':'aft';
/* year label: BCE or CE, and the Thai Buddhist Era in Thai */
const yr20=ya=>{const y=2025-ya,be=y+543;const bt=be>0?' (พ.ศ. '+fmt(be)+')':' (ก่อน พ.ศ. '+fmt(1-be)+' ปี)';return y<=0?X(fmt(1-y)+' ปีก่อนคริสตกาล'+bt,fmt(1-y)+' BCE'):X('ค.ศ. '+fmt(y)+bt,fmt(y)+' CE')};
const R20={
 rjg:{pop:{jan:8,mag:3,aso:2,aft:2}},
 pat:{pop:{jan:2,mag:12,aso:14,aft:8}},
 sav:{pop:{jan:7,mag:4,aso:3,aft:3}},
 ves:{pop:{jan:6,mag:3,aso:2,aft:2}},
 var:{pop:{jan:6,mag:5,aso:5,aft:5}},
 kap:{pop:{jan:3,aso:1,aft:1}},
 vid:{pop:{jan:2,mag:3,aso:4,aft:6}},
 tax:{pop:{jan:3,mag:4,aso:4,aft:6}},
 klg:{pop:{mag:3,aso:3,aft:3}},
 anu:{pop:{aso:2,aft:4}},
 vil:{pop:{jan:36,mag:30,aso:28,aft:28}}};
Object.assign(REGIONS,{
 rjg:{n:X('ราชคฤห์ เมืองหลวงของแคว้นมคธ ในวงล้อมภูเขาห้าลูก','Rajagaha, capital of Magadha, ringed by five hills'),sc:'gangah',food:1,cold:0,dry:0},
 pat:{n:X('ปาฏลีบุตร เมืองที่แม่น้ำคงคาบรรจบแม่น้ำโสน','Pataliputra, where the Son meets the Ganges'),sc:'gangac',food:1,cold:0,dry:0},
 sav:{n:X('สาวัตถี เมืองหลวงของแคว้นโกศล','Savatthi, capital of Kosala'),sc:'gangac',food:1,cold:0,dry:0},
 ves:{n:X('เวสาลี เมืองของชาวลิจฉวีที่ปกครองด้วยที่ประชุม','Vesali, the Licchavis’ city, ruled by an assembly'),sc:'gangac',food:2,cold:0,dry:0},
 var:{n:X('พาราณสี เมืองศักดิ์สิทธิ์ริมแม่น้ำคงคา','Varanasi, the holy city on the Ganges'),sc:'gangar',food:1,cold:0,dry:0},
 kap:{n:X('แดนศากยะ ใกล้กบิลพัสดุ์และลุมพินี','the Shakya country, near Kapilavatthu and Lumbini'),sc:'gangav',food:2,cold:0,dry:0},
 vid:{n:X('วิทิศา เมืองพ่อค้าใกล้เนินเขาสาญจี','Vidisha, a merchants’ town near the Sanchi hill'),sc:'gangas',food:1,cold:0,dry:1},
 tax:{n:X('ตักกสิลา เมืองทางแยกในแคว้นคันธาระ','Taxila, the crossroads city of Gandhara'),sc:'gandh',food:1,cold:1,dry:1},
 klg:{n:X('แคว้นกลิงคะ ริมทะเลฝั่งตะวันออก','Kalinga, on the eastern sea coast'),sc:'gangak',food:2,cold:0,dry:0},
 anu:{n:X('อนุราธปุระ เมืองหลวงของเกาะลังกา','Anuradhapura, capital of the island of Lanka'),sc:'lanka',food:2,cold:0,dry:0},
 vil_20:{n:X('หมู่บ้านชาวนาบนที่ราบลุ่มแม่น้ำคงคา','a farming village on the Ganges plain'),sc:'gangav',food:2,cold:0,dry:0}});
Object.assign(COORD,{rjg:[25.0,85.42],pat:[25.6,85.14],sav:[27.52,82.05],ves:[25.99,85.13],var:[25.32,83.0],kap:[27.53,83.05],vid:[23.52,77.81],tax:[33.75,72.82],klg:[20.24,85.87],anu:[8.31,80.4],vil_20:[25.8,84.0]});
for(const k in R20){NEIGH[k]=[];VR[k]=['plain'];R3[k==='vil'?'vil_20':k]={vil:99999,share:0,plant:{ya:99999,n:k==='tax'?X('ข้าวสาลี ข้าวบาร์เลย์ และองุ่น','wheat, barley and grapes'):X('ข้าว ถั่ว อ้อย และฝ้าย','rice, pulses, sugar cane and cotton')},ani:['zebu','buffalo','goat'],hunt:'boar',pred:k==='anu'?X('หมีควายจากป่าลังกา','A sloth bear from the Lankan forest'):X('เสือโคร่งจากป่าริมแม่น้ำ','A tiger from the riverside forest')};
  for(const a of ['zebu','buffalo','goat']){DOMYA[a]=DOMYA[a]||{};DOMYA[a][k]=99999}}
DRYR.push('tax');
SC.gangav={d:['#9cc3d8','#ecd7a8'],n:['#0a0f24','#24203a'],far:'#8fa070',near:'#6f8a4a',gr:'#6f9a3e',riv:'#6b8d86',tree:'palm',gan:1};
SC.gangac=Object.assign({},SC.gangav,{far:'#a39a74',gr:'#7d9446'});
SC.gangar=Object.assign({},SC.gangac,{riv:'#5f8a8e'});
SC.gangah=Object.assign({},SC.gangac,{far:'#7f8a62',tree:'broad'});
SC.gangas=Object.assign({},SC.gangac,{riv:null,far:'#a8946a',gr:'#9a9a5a',tree:'broad'});
SC.gangak=Object.assign({},SC.gangav,{riv:null,sea:'#2f7fa0',tree:'palm'});
SC.gandh=Object.assign({},SC.gangac,{peak:1,riv:'#6f8f96',d:['#9fb4c4','#e6dcc4'],far:'#9a8a70',gr:'#a39a62',tree:'pine'});
SC.lanka=Object.assign({},SC.gangav,{riv:'#4f8a96',gr:'#5f9a3a',far:'#5f7a48',tree:'palm',dense:1});
const RNOTE20={
 rjg:X('ราชคฤห์อยู่ในวงล้อมภูเขาห้าลูก มีกำแพงหินแห้งยาวราว 40 กิโลเมตรต่อเชื่อมยอดเขา ซากยังเห็นได้ทุกวันนี้ พระเจ้าพิมพิสารปกครองที่นี่ในสมัยพระพุทธเจ้า ต่อมาเมืองหลวงของมคธย้ายไปปาฏลีบุตร ที่นี่ยังมีบ่อน้ำร้อนที่คนมาอาบตั้งแต่ยุคนั้น','Rajagaha sat in a ring of five hills, joined by a dry-stone wall some 40 km long whose remains can still be seen. King Bimbisara ruled here in the Buddha’s time; later Magadha’s capital moved to Pataliputra. Its hot springs have drawn bathers since then.'),
 pat:X('ปาฏลีบุตรเริ่มจากป้อมเล็กๆ ริมแม่น้ำ แล้วกลายเป็นเมืองหลวงของราชวงศ์นันทะและเมารยะ ทูตกรีกชื่อเมกัสเธนีสบันทึกว่าเมืองยาวราว 80 สตาดิออน (ราว 15 กิโลเมตร) มีหอคอย 570 แห่งและประตู 64 ประตู นักโบราณคดีขุดพบแนวรั้วไม้ซุงของเมือง ทุกวันนี้คือเมืองปัฏนาในรัฐพิหาร','Pataliputra began as a small fort by the river and became the capital of the Nandas and the Mauryas. The Greek envoy Megasthenes recorded a city some 80 stades (about 15 km) long, with 570 towers and 64 gates; archaeologists have dug up stretches of its timber palisade. Today it is Patna, in Bihar.'),
 sav:X('สาวัตถีเป็นเมืองหลวงของแคว้นโกศล ตามคัมภีร์ พระพุทธเจ้าจำพรรษาที่วัดเชตวันในเมืองนี้มากกว่าที่ใด พระสูตรจำนวนมากจึงขึ้นต้นว่า “สมัยหนึ่ง พระผู้มีพระภาคประทับอยู่ที่สาวัตถี”','Savatthi was the capital of Kosala. According to the texts, the Buddha spent more rainy seasons at its Jeta Grove than anywhere else, so many discourses open: “Once the Blessed One was staying at Savatthi.”'),
 ves:X('เวสาลีเป็นเมืองของชาวลิจฉวีในสหพันธ์วัชชี ซึ่งไม่มีกษัตริย์องค์เดียว แต่ตัดสินเรื่องสำคัญในที่ประชุม นักประวัติศาสตร์บางคนเรียกว่าสาธารณรัฐยุคแรก แต่คนที่มีเสียงในที่ประชุมเป็นตระกูลชั้นสูง ไม่ใช่ทุกคน','Vesali was the city of the Licchavis in the Vajji league, which had no single king but decided great matters in assembly. Some historians call it an early republic, though the voices in the assembly belonged to noble clans, not to everyone.'),
 var:X('พาราณสีหรือกาสีเป็นเมืองศักดิ์สิทธิ์ตั้งแต่ก่อนพระพุทธเจ้า ผ้าจากกาสีมีชื่อเสียงจนคัมภีร์บาลีใช้เป็นตัวอย่างของผ้าชั้นดี ห่างไปราว 10 กิโลเมตรคือป่าอิสิปตนะ หรือสารนาถ ที่ตามคัมภีร์ พระพุทธเจ้าแสดงธรรมครั้งแรก','Varanasi, or Kashi, was a holy city before the Buddha. Its cloth was so famous that the Pali texts use it as the very example of fine fabric. About 10 km away lies the deer park at Isipatana, Sarnath, where the texts say the Buddha first taught.'),
 kap:X('ชาวศากยะเป็นตระกูลนักรบที่ปกครองด้วยที่ประชุม นักวิชาการเห็นว่าบิดาของพระพุทธเจ้าน่าจะเป็นผู้นำตระกูล ไม่ใช่กษัตริย์ใหญ่อย่างในเรื่องเล่ายุคหลัง ที่ตั้งของกบิลพัสดุ์ยังถกเถียงกันระหว่างติเลาราโกฏในเนปาลกับปิปราห์วาในอินเดีย','The Shakyas were a warrior clan governed in assembly. Scholars think the Buddha’s father was probably a clan leader, not the great king of later stories. Where Kapilavatthu stood is still argued over: Tilaurakot in Nepal or Piprahwa in India.'),
 vid:X('วิทิศาเป็นเมืองพ่อค้าบนเส้นทางการค้าจากที่ราบคงคาไปทางตะวันตก ห่างไปไม่ไกลคือเนินเขาสาญจี ที่พระเจ้าอโศกสร้างสถูป และคนรุ่นหลังแกะสลักประตูหินอันงดงามไว้รอบๆ','Vidisha was a merchants’ town on the trade route from the Ganges plain to the west. Nearby is the hill of Sanchi, where Ashoka built a stupa and later generations carved its splendid stone gateways.'),
 tax:X('ตักกสิลาอยู่บนทางแยกระหว่างอินเดีย เปอร์เซีย และเอเชียกลาง เคยอยู่ใต้เปอร์เซีย อเล็กซานเดอร์ ราชวงศ์เมารยะ ชาวกรีก ชาวศกะ และชาวกุษาณะ ที่นี่เขียนด้วยอักษรขโรษฐีที่อ่านจากขวาไปซ้าย และคัมภีร์พุทธที่เก่าที่สุดที่เหลือรอดก็มาจากแคว้นคันธาระแห่งนี้','Taxila sat at the crossroads of India, Persia and Central Asia. It was ruled in turn by Persians, Alexander, the Mauryas, Greeks, Sakas and Kushans. People here wrote in Kharosthi, read right to left, and the oldest surviving Buddhist manuscripts come from this land of Gandhara.'),
 klg:X('กลิงคะอยู่ริมทะเลฝั่งตะวันออก ชาวเรือจากที่นี่ค้าขายข้ามอ่าวเบงกอลไปถึงเอเชียตะวันออกเฉียงใต้ คำว่า “เกลิง” ที่คนมลายูใช้เรียกคนอินเดียก็มาจากชื่อกลิงคะ','Kalinga lay on the eastern coast. Its seafarers traded across the Bay of Bengal to Southeast Asia; the Malay word “Keling” for people from India comes from its name.'),
 anu:X('อนุราธปุระเป็นเมืองหลวงของลังกามากว่าพันปี ชาวเมืองสร้างอ่างเก็บน้ำขนาดใหญ่ไว้ทำนา ตามพงศาวดารลังกา ศาสนาพุทธมาถึงที่นี่ในสมัยพระเจ้าอโศก และพระไตรปิฎกบาลีที่วัดไทยสวดทุกวันนี้ ก็สืบมาจากสายที่ถูกเขียนลงบนเกาะนี้','Anuradhapura was Lanka’s capital for over a thousand years, its people farming with the water of huge reservoirs. The island’s chronicles say Buddhism arrived in Ashoka’s time, and the Pali canon chanted in Thai temples today descends from the line written down on this island.'),
 vil:X('คนส่วนใหญ่ในลุ่มแม่น้ำคงคาเป็นชาวนาปลูกข้าว ขวานและผาลเหล็กช่วยให้ถางป่าริมแม่น้ำเป็นนาได้ หมู่บ้านมีผู้ใหญ่บ้าน มีต้นไม้ศักดิ์สิทธิ์ และมีนักบวชหลายสำนักเดินผ่านมาขออาหารอยู่เสมอ','Most people in the Ganges valley grew rice. Iron axes and ploughshares let them clear the riverside forest for paddy. A village had its headman, its sacred tree, and a steady stream of wandering ascetics of many schools coming to beg for food.')};
function pickEra20(){const ks=Object.keys(ERA20);return weighted(ks.map(k=>[k,ERA20[k].w]))}
function yaFor20(e){const E=ERA20[e];return Math.round((E.b+rnd()*(E.a-E.b))/5)*5}
function pickCity20(e,ya){const ks=Object.keys(R20).filter(k=>R20[k].pop[e]&&!(k==='pat'&&ya>2430)&&!(k==='kap'&&e==='jan'&&ya<2430)&&!(k==='anu'&&ya>2275));return weighted(ks.map(k=>[k,R20[k].pop[e]]))}
const pw20=(rg,ya)=>{const e=era20(ya);return (R20[rg].pop[e]||10)*1000/(ERA20[e].wp*1e6)};

/* ---------- names ---------- */
const NM20={
 m:[['สุมนะ','Sumana',X('ใจดี','good-hearted')],['ติสสะ','Tissa',X('ชื่อดาวฤกษ์ดวงหนึ่ง','the name of a star')],['นันทะ','Nanda',X('ความยินดี','joy')],['ทัตตะ','Datta',X('ผู้ที่ได้รับมา','the one given')],['มิตตะ','Mitta',X('เพื่อน','friend')],['โสณะ','Sona',X('สีทอง','golden')],['นาคทัตตะ','Nagadatta',X('ผู้ที่นาคประทานให้','given by the naga')],['อิสิทัตตะ','Isidatta',X('ผู้ที่ฤษีประทานให้','given by the sages')]],
 f:[['สุมนา','Sumana',X('ใจดี','good-hearted')],['ภัททา','Bhadda',X('ผู้โชคดี','fortunate')],['อุตตรา','Uttara',X('ผู้สูงส่ง','the higher one')],['โสมา','Soma',X('ดวงจันทร์','the moon')],['สุชาตา','Sujata',X('เกิดดี','well born')],['วิสาขา','Visakha',X('ชื่อดาวฤกษ์ดวงหนึ่ง','the name of a star')],['ยักขทาสี','Yakkhadasi',X('ผู้รับใช้ยักษ์','servant of the yakkha')],['โคตมี','Gotami',X('หญิงตระกูลโคตมะ','a woman of the Gotama clan')]],
 bm:[['ภารทวาชะ','Bharadvaja',X('ชื่อตระกูลพราหมณ์ที่สืบจากฤษีโบราณ','a Brahmin clan name from an ancient seer')],['วาเสฏฐะ','Vasettha',X('ชื่อตระกูลพราหมณ์ที่สืบจากฤษีวสิษฐะ','a Brahmin clan name from the seer Vasishtha')],['กัสสปะ','Kassapa',X('ชื่อตระกูลพราหมณ์ที่สืบจากฤษีกัศยปะ','a Brahmin clan name from the seer Kashyapa')]],
 dm:[['ธัมมรักขิตะ','Dhammarakkhita',X('ผู้ที่ธรรมคุ้มครอง','protected by the Dhamma')]],df:[['ธัมมา','Dhamma',X('ธรรม','the Dhamma')]],
 gm:[['เธโอโดรอส','Theodoros',X('ของขวัญจากเทพ ชื่อกรีก','gift of the god: a Greek name')]],gf:[['อากาโธเคลีย','Agathokleia',X('ชื่อเสียงดี ชื่อกรีก และเป็นชื่อราชินีกรีกในอินเดีย','good fame: a Greek name, also borne by a Greek queen in India')]],
 lm:[['อภัย','Abhaya',X('ผู้ไม่กลัว ชื่อที่พบบ่อยในลังกา','fearless: a common name in Lanka')]],lf:[['อนุฬา','Anula',X('ชื่อพระราชินีลังกาที่บวชเป็นภิกษุณีตามพงศาวดาร','the name of a Lankan queen who became a nun, the chronicles say')]]};
function mkName20(S){let p;
  if(S.rg==='tax'&&S.ya<=2200&&rnd()<.25)p=pick(S.sex==='f'?NM20.gf:NM20.gm);
  else if(S.rg==='anu'&&rnd()<.4)p=pick(S.sex==='f'?NM20.lf:NM20.lm);
  else if(S.var20==='brah'&&S.sex==='m'&&rnd()<.6)p=pick(NM20.bm);
  else if(S.ya<=2280&&rnd()<.15)p=pick(S.sex==='f'?NM20.df:NM20.dm);
  else p=pick(S.sex==='f'?NM20.f:NM20.m);
  S.nm20={th:p[0],en:p[1],m:p[2]};return X(p[0],p[1])}
const gn20X=sx=>{const S0={sex:sx,rg:S&&S.rg||'vil',ya:S&&S.ya||2400,var20:S&&S.var20};return mkName20(S0)};
function nameNote20(S){const n=S.nm20;if(!n)return X('','');
  return X('ชื่อของคุณ “'+n.th+'” แปลว่า '+n.m.th+' ชื่อในยุคนี้มักเกี่ยวกับดวงดาว เทพ นาค หรือยักษ์ ชื่อแบบ “นาคทัตตะ” หรือ “ยักขทาสี” พบในจารึกของผู้บริจาคที่สถูปภารหุตและสาญจี แสดงว่าคนที่ทำบุญให้สถูปของพุทธก็ยังนับถือเทพท้องถิ่นไปพร้อมกัน ชื่อในเกมเป็นชื่อจริงของยุคนั้น แต่ตัวคนแต่งขึ้น','Your name, '+n.en+', means “'+n.m.en+'”. Names of this age often honoured stars, gods, nagas or yakkhas. Names like Nagadatta or Yakkhadasi appear among donors carved at the Bharhut and Sanchi stupas: people who gave to Buddhist monuments still honoured local spirits too. The names are real names of the age; the people are invented.')}

/* ---------- careers ---------- */
const CAREERS20={
farmer:{n:X('ชาวนา','Rice farmer'),act:'sow',sk:'kn',ok:S=>S.cls!=='elite'&&!['pat','tax'].includes(S.rg),
 L:[X('เด็กไล่นกในนาข้าว','a child who scares birds from the rice'),X('ชาวนา','a rice farmer'),X('ชาวนาที่มีควายของตัวเอง','a farmer with buffaloes of their own'),X('ผู้ใหญ่บ้านที่ทั้งหมู่บ้านเชื่อฟัง','the village headman')]},
potter:{n:X('ช่างปั้นหม้อ','Potter'),act:'job',scene:'pot20',sk:'cr',l:X('ปั้นหม้อบนแป้นหมุน แล้วเผาให้ผิวดำเงาเหมือนกระจก','Throw pots on the wheel and fire them black and glossy as a mirror'),ok:S=>['vai','sud'].includes(S.var20),
 L:[X('เด็กนวดดิน','a child who kneads the clay'),X('ช่างปั้นหม้อ','a potter'),X('ช่างที่ทำภาชนะดำเงาได้','a potter who can make the black polished ware'),X('หัวหน้ากิลด์ช่างปั้นหม้อ','the head of the potters’ guild')]},
trader:{n:X('พ่อค้ากองคาราวาน','Caravan trader'),act:'job',scene:'market',sk:'so',l:X('พาเกวียนวัวขนผ้า เกลือ และเครื่องเทศข้ามป่าไปเมืองอื่น','Lead ox-carts of cloth, salt and spices through the forests to other towns'),ok:S=>S.cls!=='slave'&&S.var20!=='cand',
 L:[X('เด็กเฝ้าเกวียน','a child who guards the carts'),X('พ่อค้า','a trader'),X('หัวหน้ากองคาราวานห้าร้อยเล่มเกวียน','the leader of a caravan of five hundred carts'),X('เศรษฐีที่กษัตริย์ต้องเกรงใจ','a great merchant even kings must flatter')]},
priest:{n:X('พราหมณ์ผู้ประกอบพิธี','Brahmin priest'),act:'job',scene:'fire20',sk:'kn',l:X('ท่องพระเวทแม่นทุกพยางค์ และประกอบพิธีบูชาไฟให้ครอบครัวต่างๆ','Recite the Vedas perfect to the syllable and perform fire rites for households'),ok:S=>S.var20==='brah'&&S.sex==='m',
 L:[X('ศิษย์ที่ท่องพระเวทตามครู','a pupil reciting the Vedas after his teacher'),X('พราหมณ์ผู้ประกอบพิธี','a Brahmin priest'),X('พราหมณ์ที่ทั้งเมืองเชิญไปทำพิธี','the priest the whole town invites'),X('ปุโรหิตของราชสำนัก','the royal chaplain')]},
samana:{n:X('นักบวช','Renunciant'),act:'job',scene:'monk20',sk:'kn',l:X('ออกบิณฑบาตตอนเช้า ฟังธรรม และนั่งสมาธิใต้ต้นไม้','Go on the morning alms round, hear the teaching and meditate under the trees'),ok:S=>S.cls!=='slave'&&!S.partner,
 L:[X('สามเณรหรือศิษย์น้อย','a novice'),X('นักบวช','a renunciant'),X('นักบวชที่ท่องคำสอนได้หลายบท','a renunciant who has many teachings by heart'),X('ครูที่มีศิษย์หลายร้อย','a teacher with hundreds of pupils')]},
mahout:{n:X('ควาญช้างและทหาร','Mahout and soldier'),act:'job',scene:'elephant20',sk:'sv',l:X('ฝึกช้างศึก นอนข้างมัน และเรียนคำสั่งทั้งหมดที่ช้างรู้จัก','Train war elephants, sleep beside them, and learn every command they know'),ok:S=>S.sex==='m'&&S.cls!=='slave',
 L:[X('เด็กหาหญ้าให้ช้าง','a boy who cuts fodder for the elephants'),X('ควาญช้าง','a mahout'),X('ควาญช้างศึกของกองทัพหลวง','a war-elephant driver of the royal army'),X('หัวหน้ากองช้างร้อยเชือก','the master of a hundred elephants')]},
physician:{n:X('หมอสมุนไพร','Physician'),act:'job',scene:'herb',sk:'kn',l:X('เก็บสมุนไพร ต้มยา และรักษาคนป่วยทั้งคนรวยและคนจน','Gather herbs, brew medicines and treat the sick, rich and poor'),ok:S=>S.cls!=='slave',
 L:[X('เด็กบดยา','a child who grinds the medicines'),X('หมอสมุนไพร','a physician'),X('หมอที่มีคนเดินทางมาหาจากเมืองอื่น','a physician people travel from other towns to see'),X('หมอประจำราชสำนัก','the royal physician')]},
carver:{n:X('ช่างแกะสลัก','Carver'),act:'job',scene:'carve20',sk:'cr',l:X('แกะไม้และงาช้าง และในยุคหลังแกะหินเป็นราวและประตูสถูป','Carve wood and ivory, and in later times stone railings and gateways for stupas'),ok:S=>S.cls!=='elite'&&S.var20!=='brah',
 L:[X('เด็กขัดงานแกะ','a child who polishes the carvings'),X('ช่างแกะสลัก','a carver'),X('ช่างที่แกะเรื่องชาดกได้มีชีวิต','a carver whose Jataka scenes seem alive'),X('หัวหน้ากิลด์ช่างแกะ','the head of the carvers’ guild')]}};
const CARNOTE20=X('งานส่วนใหญ่ในยุคนี้สืบทอดในครอบครัว ช่างประเภทเดียวกันรวมเป็นกิลด์ที่เรียกว่า “เสณี” มีหัวหน้า มีกฎของตัวเอง และบางกิลด์ร่ำรวยพอจะบริจาคสร้างส่วนหนึ่งของสถูป ส่วนคนที่ออกบวชละทิ้งงานและครอบครัว แล้วอยู่ได้เพราะชาวบ้านใส่บาตร','Most work in this age ran in families. Craftsmen of one kind formed guilds called seni, with heads and rules of their own, and some were rich enough to pay for part of a stupa. Those who renounced the world left work and family behind and lived on the food lay people put in their bowls.');
const VAR20={brah:X('ครอบครัวพราหมณ์','a Brahmin family'),khat:X('ตระกูลขัตติยะ ชนชั้นนักรบและผู้ปกครอง','a khattiya family, of the warrior and ruling class'),vai:X('ครอบครัวคหบดี ชาวนาและพ่อค้า','a householder family of farmers and traders'),sud:X('ครอบครัวคนงานและช่าง','a family of labourers and craftsmen'),cand:X('ครอบครัวจัณฑาล คนที่ถูกผลักออกนอกวรรณะ','a candala family, pushed outside the varnas'),dasa:X('ทาส','a slave')};
const VARNOTE20=X('คัมภีร์ของพราหมณ์แบ่งสังคมเป็นสี่วรรณะ: พราหมณ์ ขัตติยะ แพศย์ และศูทร คนบางกลุ่มอย่างจัณฑาลถูกผลักออกไปข้างนอก ในชีวิตจริงคนแบ่งตามกลุ่มกำเนิดและอาชีพที่ละเอียดกว่านั้นมาก คัมภีร์บาลีมักเรียงขัตติยะขึ้นก่อนพราหมณ์ และมีพระสูตรที่สอนว่าคนไม่ได้ต่ำหรือสูงเพราะกำเนิด แต่เพราะการกระทำ','Brahmin texts divided society into four varnas: brahmins, khattiyas, vessas and suddas, with some groups such as the candalas pushed outside. Real life was divided far more finely, by birth group and occupation. The Pali texts usually list khattiyas before brahmins, and one discourse teaches that no one is low or high by birth, only by deeds.');
const var20=S=>{if(S.monk20)return MONK20[S.monk20].t;return VAR20[S.var20]||VAR20.vai};

function init20(){const e=era20(S.ya0);S.era=e;
  S.var20=weighted([['brah',.1],['khat',.06],['vai',.44],['sud',.3],['cand',.05],['dasa',.05]]);
  S.cls={brah:rnd()<.4?'elite':'free',khat:'elite',vai:'free',sud:'dep',cand:'dep',dasa:'slave'}[S.var20];
  S.settled=1;S.roleNo=1;S.lit=0;S.rec20=S.var20==='brah'?6:0;S.schOK=(S.var20==='brah'||S.cls==='elite'||rnd()<.15)?1:0;
  S.ag=S.cls==='elite'?12:S.var20==='vai'?4:S.cls==='free'?2:S.cls==='dep'?1:0;S.saw={};S.nameTab=0;S.met20=[];S.fall20=0;S.monk20=null;S.tell20=null;S.don20=0;
  S.fa20={yak:1};if(!['cand','dasa'].includes(S.var20))S.fa20.veda=1;
  S.field=S.cls!=='slave'&&S.var20!=='cand'?1:0;
  if(S.field){S.herd.zebu=1+((rnd()*2)|0);if(rnd()<.4)S.herd.goat=1+((rnd()*3)|0)}
  if(S.cls==='elite'){S.herd.zebu=6+((rnd()*8)|0);S.herd.buffalo=2+((rnd()*3)|0)}}
Object.assign(INV,{pot20:{n:X('หม้อดำเงา','black polished pots'),v:2},cloth20:{n:X('ผ้าฝ้ายจากกาสี','Kashi cotton cloth'),v:3}});
const meet20=(S,k)=>{S.met20=S.met20||[];if(!S.met20.includes(k))S.met20.push(k)};
const fa20=(S,k,n)=>{S.fa20=S.fa20||{};S.fa20[k]=(S.fa20[k]||0)+(n||1)};
const MONK20={bud:{t:X('ภิกษุหรือภิกษุณีในสงฆ์ของพระพุทธเจ้า','a monk or nun in the Buddha’s Sangha'),m:X('ภิกษุ','a bhikkhu'),f:X('ภิกษุณี','a bhikkhuni')},
 jain:{t:X('นักบวชนิครนถ์ สาวกของมหาวีระ','a Nigantha ascetic, a follower of Mahavira'),m:X('นักบวชนิครนถ์','a Nigantha monk'),f:X('นักบวชหญิงนิครนถ์','a Nigantha nun')},
 aji:{t:X('นักบวชอาชีวก','an Ajivika ascetic'),m:X('นักบวชอาชีวก','an Ajivika ascetic'),f:X('นักบวชหญิงอาชีวก','an Ajivika ascetic')}};

/* ---------- the year ---------- */
function v20Year(a){if(S.ch!==20)return;const e=era20(S.ya);S.era=e;
  fx({f:{elite:4,free:1,dep:0,slave:-1}[S.cls]||0});
  if(a>=14&&S.car&&S.clv>=1&&!S.monk20)S.ag+=S.clv*(S.car==='trader'?2:1);
  if(S.focus==='school'){if(S.ya<=2292)S.lit=clamp(S.lit+5+S.kn/40,0,100);S.rec20=(S.rec20||0)+3+(hasT('mem')?2:0)}
  if(S.focus==='write')S.lit=clamp(S.lit+3,0,100);
  if(S.focus==='temple'){fa20(S,S.var20==='brah'?'veda':'yak',.5);if(S.monk20)fa20(S,S.monk20,.5)}
  if(S.monk20){S.rec20=(S.rec20||0)+2;fa20(S,S.monk20,.3)}
  const ya=S.ya,once=(k,f)=>{if(!S.tl)S.tl={};if(S.tl[k])return;S.tl[k]=1;f()};
  if(ya<=2600&&ya>=2560&&a>=8&&rnd()<.3)once('mag20',()=>log(X('ผู้ใหญ่คุยกันเรื่องแคว้นใหญ่สิบหกแคว้นที่แย่งชิงที่ราบลุ่มแม่น้ำคงคา มคธกับโกศลกำลังขยายอำนาจ แคว้นเล็กๆ ถูกกลืนไปทีละแคว้น','The grown-ups talk of the sixteen great realms fighting over the Ganges plain. Magadha and Kosala are growing; the small realms are swallowed one by one.'),X('ตำราพุทธและเชนกล่าวถึง “มหาชนบท” สิบหกแคว้นในยุคนี้ บางแคว้นมีกษัตริย์ บางแคว้นปกครองด้วยที่ประชุมของตระกูลนักรบ ภายในราวสองร้อยปี มคธกลืนแทบทั้งหมด','Buddhist and Jain texts speak of sixteen “great realms”, the mahajanapadas, in this age. Some had kings; some were governed by assemblies of warrior clans. Within about two hundred years Magadha swallowed nearly all of them.')));
  if(ya<=2425&&ya>=2410&&S.rg==='ves'&&a>=6)once('vajji20',()=>{S.fall20=1;fx({b:-10,f:-6,h:-4});log(X('กองทัพมคธของพระเจ้าอชาตศัตรูข้ามแม่น้ำคงคามาตีแคว้นวัชชี เวสาลีแตก ที่ประชุมของชาวลิจฉวีไม่ได้ประชุมกันอีก','Ajatasattu’s Magadhan army crosses the Ganges against the Vajjis. Vesali falls, and the Licchavi assembly meets no more.'),X('ตามคัมภีร์เชน อชาตศัตรูใช้อาวุธใหม่สองอย่าง คือเครื่องยิงหินขนาดใหญ่และรถศึกติดกระบองหมุน ✦ ตามพระสูตร ก่อนสงคราม มีคนไปถามพระพุทธเจ้า และพระองค์ตอบว่าชาววัชชีจะไม่เสื่อมตราบที่ยังประชุมกันพร้อมเพรียง','Jain texts say Ajatasattu used two new weapons, a great stone-throwing engine and a chariot fitted with a swinging mace ✦. In the discourses, a minister is sent to ask the Buddha before the war, and he answers that the Vajjis will not decline as long as they meet often and in harmony.'),'sad')});
  if(ya<=2400&&ya>=2350&&a>=8&&rnd()<.25)once('nanda20',()=>log(X('ภาษีขึ้นอีกแล้ว คนเล่าว่ากษัตริย์นันทะที่ปาฏลีบุตรสะสมทองไว้ในคลังมากจนไม่มีใครนับไหว','Taxes are up again. People say the Nanda king at Pataliputra has hoarded more gold than anyone can count.'),X('ราชวงศ์นันทะปกครองมคธในศตวรรษที่ 4 ก่อนคริสตกาล นักเขียนกรีกและโรมันได้ยินว่ากองทัพนันทะใหญ่โตจนทหารของอเล็กซานเดอร์ไม่ยอมเดินทัพต่อเข้าลุ่มแม่น้ำคงคา ตำนานอินเดียเล่าถึงความร่ำรวยและความโลภของพวกเขา ✦','The Nanda dynasty ruled Magadha in the 4th century BCE. Greek and Roman writers heard that the Nanda army was so vast that Alexander’s soldiers refused to march on into the Ganges valley. Indian stories tell of the Nandas’ wealth and greed ✦.')));
  if(ya<=2286&&ya>=2283&&S.rg==='klg'&&a>=4)once('kal20',()=>{S.fall20=1;fx({b:-14,f:-10,h:-6});ms(X('รอดจากสงครามกลิงคะ','Survived the Kalinga war'));log(X('กองทัพเมารยะบุกกลิงคะ หมู่บ้านถูกเผา ผู้คนถูกฆ่าและถูกต้อนไปเป็นเชลย ครอบครัวของคุณหนีเข้าป่า','The Mauryan army invades Kalinga. Villages burn; people are killed and driven off as captives. Your family flees into the forest.'),X('ศิลาจารึกฉบับที่ 13 ของพระเจ้าอโศกบอกว่าในสงครามกลิงคะ มีคนถูกจับไป 150,000 คน ถูกฆ่า 100,000 คน และตายภายหลังอีกหลายเท่า พระองค์เขียนว่าเสียใจอย่างลึกซึ้ง แต่ที่น่าสนใจคือ ศิลาจารึกที่ตั้งในแคว้นกลิงคะเองกลับไม่มีข้อความนี้','Ashoka’s Rock Edict 13 says that in the Kalinga war 150,000 people were carried away, 100,000 killed, and many times that number died afterwards. He wrote of his deep remorse. Strikingly, the edicts set up in Kalinga itself leave this passage out.'),'sad')});
  if(ya<=2215&&ya>=2160&&a>=8&&rnd()<.25)once('yav20',()=>log(X('ข่าวมาว่าชาวยวนะ หรือชาวกรีกจากทางตะวันตกเฉียงเหนือ ยกทัพมาไกลถึงลุ่มแม่น้ำคงคา','Word comes that the Yavanas, the Greeks from the north-west, have marched as far as the Ganges valley.'),X('คนอินเดียเรียกชาวกรีกว่า “ยวนะ” มาจากคำว่า Ionia ในศตวรรษที่ 2 ก่อนคริสตกาล กษัตริย์กรีกที่ปกครองแคว้นคันธาระยกทัพลึกเข้ามาในอินเดีย ตำราไวยากรณ์ของปตัญชลีและคัมภีร์ยุคปุราณะกล่าวถึงการรุกครั้งนี้','Indians called the Greeks Yavanas, from Ionia. In the 2nd century BCE Greek kings ruling Gandhara pushed deep into India; the grammarian Patanjali and later Puranic texts mention the raid.')));
  if(S.rg==='kap'&&ya<=2431&&ya>=2429&&a>=4)once('shakya20',()=>{S.fall20=1;fx({b:-12,f:-8});log(X('กองทัพโกศลของพระเจ้าวิฑูฑภะบุกแดนศากยะ เมืองถูกเผาและคนถูกฆ่ามากมาย ครอบครัวของคุณหนีออกมาได้','The Kosalan army of King Vidudabha storms the Shakya land. The town is burned and many are killed. Your family escapes.'),X('อรรถกถาเล่าว่าวิฑูฑภะแค้นที่ชาวศากยะหลอกให้บิดาของเขาแต่งงานกับลูกสาวทาส จึงยกทัพมาล้างแค้น ✦ เรื่องนี้เกิดก่อนพระพุทธเจ้าปรินิพพานไม่นาน หลังจากนั้นแทบไม่มีใครพูดถึงชาวศากยะในฐานะแคว้นอีก','The commentaries say Vidudabha took revenge because the Shakyas had tricked his father into marrying a slave girl’s daughter ✦. It happened shortly before the Buddha’s passing; after that the Shakyas are barely heard of as a realm again.'),'sad');moveTo('vil')});
  if(ya<=1990&&ya>=1960&&a>=10&&['var','tax','vid','klg'].includes(S.rg)&&rnd()<.4)once('rome20',()=>{fx({kn:2});log(X('พ่อค้าคนหนึ่งเอาเหรียญทองหน้าตาแปลกมาอวด บนเหรียญมีหน้าชายสวมพวงมาลัยใบไม้ เขาบอกว่ามาจากเมืองไกลทางตะวันตกที่ชื่อโรม','A merchant shows off a strange gold coin with a man in a leaf crown on it. He says it comes from a far western city called Rome.'),X('ในศตวรรษที่ 1 เรือโรมันแล่นตามลมมรสุมมาค้าขายที่อินเดียใต้ทุกปี และพบเหรียญทองและเหรียญเงินโรมันของจักรพรรดิออกัสตัสและไทเบอริอุสฝังเป็นกองในอินเดีย นักเขียนโรมันชื่อพลินีบ่นว่าอินเดียดูดเงินไปจากจักรวรรดิทุกปี ผู้เล่นที่เคยเล่นบทโรมันจะเคยเห็นพระพุทธรูปที่ท่าเรือเบเรนิเกบนทะเลแดง','In the 1st century Roman ships sailed to South India every year on the monsoon, and hoards of gold and silver coins of Augustus and Tiberius have been found in India. The Roman writer Pliny complained that India drained the Empire of money every year. Players of the Rome chapter may have seen the Buddha at the Red Sea port of Berenike.'))});
}
function trade20Year(){const ks=Object.keys(S.inv).filter(k=>S.inv[k]>0&&k!=='grain').sort((a,b)=>INV[b].v-INV[a].v);
  if(!ks.length){if(rnd()<.4){S.ag+=1;log(X('คุณช่วยขนกระสอบข้าวขึ้นเกวียน ได้เหรียญทองแดงเป็นค่าแรง','You help load sacks of rice onto a cart and are paid in copper coins.'),null,'it')}return}
  const k=ks[0];S.inv[k]--;const v=Math.max(1,Math.round(INV[k].v+(S.so>50?1:0)));S.ag+=v;
  log(X('คุณขาย'+INV[k].n.th+'ที่ตลาด ได้เงิน '+v+' กหาปณะ','You sell '+INV[k].n.en+' at the market for '+v+' karshapana'),
    S.agNote?null:(S.agNote=1,X('เหรียญยุคแรกของอินเดียคือ “กหาปณะ” แผ่นเงินที่ตอกตราสัญลักษณ์ เช่น ดวงอาทิตย์ ช้าง หรือภูเขา ด้วยค้อนทีละดวง ไม่มีชื่อกษัตริย์และไม่มีหน้าคน คัมภีร์บาลีใช้กหาปณะเป็นหน่วยราคาบ่อยที่สุด','India’s earliest coins were karshapana: bits of silver punched one stamp at a time with symbols such as a sun, an elephant or a hill, with no king’s name and no face. The Pali texts price things in karshapana more than in anything else.')),'it')}
function title20(S){
  if(S.monk20&&S.age>=12)return MONK20[S.monk20][S.sex==='f'?'f':'m'];
  if(S.car&&S.age>=12&&S.clv>=1)return CAREERS20[S.car].L[S.clv];
  if(S.age<13)return S.var20==='brah'?X('ลูกพราหมณ์','a Brahmin child'):S.cls==='slave'?X('เด็กทาส','a slave child'):X('เด็กในลุ่มน้ำคงคา','a child of the Ganges valley');
  if(S.car)return CAREERS20[S.car].L[S.clv];
  return {brah:X('พราหมณ์','a Brahmin'),khat:X('ขัตติยะ','a khattiya'),vai:X('คหบดี','a householder'),sud:X('คนงาน','a labourer'),cand:X('จัณฑาล','a candala'),dasa:X('ทาส','a slave')}[S.var20]||X('คหบดี','a householder')}
