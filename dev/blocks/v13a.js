/* ================= v0.13 CHAPTER 08 (shown as 06): THE INDUS CITIES ================= */
const ERA8={
 early:{a:5325,b:4625,w:.18,wp:20,n:X('ยุคฮารัปปาตอนต้น เมื่อหมู่บ้านเริ่มกลายเป็นเมือง','the Early Harappan period, when villages were becoming towns')},
 m1:{a:4625,b:4225,w:.34,wp:26,n:X('ยุคเมืองรุ่งเรือง ตอนต้น','the age of the great cities, early part')},
 m2:{a:4225,b:3925,w:.30,wp:30,n:X('ยุคเมืองรุ่งเรือง ตอนปลาย เมื่อเรือค้าขายถึงเมโสโปเตเมีย','the age of the great cities, late part, when ships traded with Mesopotamia')},
 late:{a:3925,b:3325,w:.18,wp:40,n:X('ยุคฮารัปปาตอนปลาย เมื่อเมืองค่อยๆ ร้าง','the Late Harappan period, when the cities slowly emptied')}};
const era8=ya=>ya>4625?'early':ya>4225?'m1':ya>3925?'m2':'late';
const R8={
 moh:{pop:{early:3,m1:40,m2:40,late:4}},
 har:{pop:{early:10,m1:25,m2:30,late:10}},
 dho:{pop:{early:4,m1:10,m2:10,late:3}},
 lot:{pop:{m1:4,m2:6,late:2}},
 kal:{pop:{early:5,m1:6,m2:4}},
 rak:{pop:{early:8,m1:15,m2:15,late:5}},
 vil:{pop:{early:60,m1:70,m2:70,late:90}}};
Object.assign(REGIONS,{
 moh:{n:X('โมเฮนโจ-ดาโร เมืองใหญ่ริมแม่น้ำสินธุ','Mohenjo-daro, the great city on the Indus'),sc:'indus',food:2,cold:0,dry:1},
 har:{n:X('ฮารัปปา เมืองริมแม่น้ำราวี','Harappa, the city on the Ravi river'),sc:'indus',food:2,cold:0,dry:1},
 dho:{n:X('โธลาวีรา เมืองอ่างเก็บน้ำบนเกาะในที่ราบเกลือคัตช์','Dholavira, the city of reservoirs on an island in the salt flats of Kutch'),sc:'indusd',food:1,cold:0,dry:1},
 lot:{n:X('โลธัล เมืองช่างลูกปัดใกล้ทะเล','Lothal, the bead-makers’ town near the sea'),sc:'indus',food:2,cold:0,dry:0},
 kal:{n:X('กาลีบังกัน เมืองริมแม่น้ำฆัคคระ','Kalibangan, the town on the Ghaggar river'),sc:'indus',food:1,cold:0,dry:1},
 rak:{n:X('ราคีครหี เมืองใหญ่ทางตะวันออก','Rakhigarhi, the great town of the east'),sc:'indus',food:2,cold:0,dry:1},
 vil:{n:X('หมู่บ้านชาวนาบนที่ราบลุ่มแม่น้ำสินธุ','a farming village on the Indus plains'),sc:'indusv',food:2,cold:0,dry:1}});
Object.assign(COORD,{moh:[27.33,68.14],har:[30.63,72.86],dho:[23.89,70.21],lot:[22.52,72.25],kal:[29.47,74.13],rak:[29.29,76.11],vil:[28.4,70.3]});
for(const k in R8){NEIGH[k]=[];VR[k]=['plain'];R3[k]={vil:99999,share:0,plant:{ya:99999,n:X('ข้าวสาลี ข้าวบาร์เลย์ และฝ้าย','wheat, barley and cotton')},ani:['zebu','buffalo','sheep','goat'],hunt:'boar',pred:X('เสือที่ออกมาจากป่าริมแม่น้ำ','A tiger out of the riverside forest')};
  for(const a of ['zebu','buffalo','sheep','goat']){DOMYA[a]=DOMYA[a]||{};DOMYA[a][k]=99999}}
FLOODR.push(...Object.keys(R8));DRYR.push(...Object.keys(R8));
ANI.zebu={n:X('วัวโหนก','humped cattle'),w:X('ลูกวัวป่า','a wild calf'),v:4,grow:.13,diff:.45,meat:22,danger:1};
ANI.buffalo={n:X('ควาย','water buffalo'),w:X('ลูกควายป่า','a wild buffalo calf'),v:4,grow:.12,diff:.4,meat:24,danger:1};
MILKERS.push('zebu','buffalo');
SC.indus={d:['#9cc3d8','#ecd7a8'],n:['#0a0f24','#24203a'],far:'#b9a77c',gr:'#7d9446',riv:'#6b8d86',tree:'broad',ind:1};
SC.indusd=Object.assign({},SC.indus,{far:'#d6c9a8',gr:'#a39a62',riv:'#7aa0a4'});
SC.indusv=Object.assign({},SC.indus,{gr:'#6f9440'});
const RNOTE8={
 moh:X('โมเฮนโจ-ดาโรเป็นเมืองใหญ่ที่สุดแห่งหนึ่งของอารยธรรมสินธุ อาจมีคนราว 40,000 คน ถนนตัดเป็นตาราง บ้านส่วนใหญ่มีห้องอาบน้ำ น้ำทิ้งไหลลงท่อระบายน้ำมีฝาปิดใต้ถนน และมีบ่อน้ำหลายร้อยบ่อ บนเนินป้อมมีสระน้ำใหญ่ ที่ขุดพบในทศวรรษ 1920','Mohenjo-daro was one of the largest Indus cities, perhaps home to some 40,000 people. Its streets ran in a grid, most houses had a bathing room, waste water ran into covered drains under the streets, and there were hundreds of wells. On the citadel mound stood the Great Bath, uncovered in the 1920s.'),
 har:X('ฮารัปปาเป็นเมืองแรกที่ถูกขุดค้น จนอารยธรรมทั้งหมดถูกเรียกตามชื่อเมืองนี้ ในศตวรรษที่ 19 คนสร้างทางรถไฟเอาอิฐเผาโบราณจากเนินดินของเมืองไปปูรองรางรถไฟหลายกิโลเมตร ก่อนจะมีใครรู้ว่ามันเก่าแค่ไหน','Harappa was the first city to be excavated, and the whole civilisation is named after it. In the 19th century railway builders carried off its ancient baked bricks to lay under kilometres of track, before anyone knew how old they were.'),
 dho:X('โธลาวีราอยู่บนเกาะในที่ราบเกลือคัตช์ ซึ่งฝนตกน้อย ชาวเมืองสร้างเขื่อนเล็กๆ และอ่างเก็บน้ำขนาดใหญ่ที่สกัดลงไปในหิน ที่ประตูเมืองพบป้ายที่ทำจากตัวอักษรขนาดใหญ่สิบตัว ซึ่งยังไม่มีใครอ่านออก','Dholavira stands on an island in the salt flats of Kutch, where little rain falls. Its people built small dams and huge reservoirs cut into the rock. Near a city gate archaeologists found a signboard of ten large signs, which no one can read.'),
 lot:X('โลธัลเป็นเมืองเล็กใกล้อ่าวคัมภัต มีย่านช่างทำลูกปัดคาร์เนเลียนและเปลือกหอย แอ่งอิฐขนาดใหญ่ข้างเมืองถูกตีความว่าเป็นอู่เรือ แต่นักวิชาการบางคนเห็นว่าเป็นอ่างเก็บน้ำ','Lothal was a small town near the Gulf of Khambhat, with workshops for carnelian and shell beads. A large brick basin beside it has been read as a dockyard, though some scholars think it was a reservoir.'),
 kal:X('ที่กาลีบังกันพบรอยไถในทุ่งนาจากยุคต้น เป็นร่องไขว้กันเป็นตาราง เกษตรกรแถบนั้นทุกวันนี้ยังไถแบบเดียวกันเพื่อปลูกพืชสองชนิดในแปลงเดียว ที่นี่ยังพบหลุมไฟเรียงเป็นแถว ซึ่งหลายคนตีความว่าเป็นแท่นบูชาไฟ','At Kalibangan archaeologists found a ploughed field from the early period, with furrows crossing in a grid. Farmers in the area still plough this way to grow two crops in one field. Rows of fire pits found here are read by many as fire altars.'),
 rak:X('ราคีครหีเป็นเมืองสินธุที่ใหญ่ที่สุดแห่งหนึ่ง ในปี 2019 นักวิทยาศาสตร์อ่าน DNA จากโครงกระดูกหญิงคนหนึ่งที่นี่ได้ เธอมีบรรพบุรุษผสมระหว่างนักล่าหาของป่าเอเชียใต้กับกลุ่มที่เกี่ยวข้องกับคนอิหร่านโบราณ และไม่มีบรรพบุรุษจากทุ่งหญ้าสเตปป์','Rakhigarhi was one of the largest Indus towns. In 2019 scientists read DNA from the skeleton of a woman buried here. She descended from a mix of South Asian hunter-gatherers and a group related to ancient Iranians, with no ancestry from the steppe.'),
 vil:X('คนส่วนใหญ่ในอารยธรรมสินธุไม่ได้อยู่ในเมืองใหญ่ แต่อยู่ในหมู่บ้านชาวนาหลายพันแห่ง ปลูกข้าวสาลี ข้าวบาร์เลย์ ถั่ว งา และฝ้าย และเลี้ยงวัวโหนกกับควาย','Most people of the Indus civilisation did not live in the great cities but in thousands of farming villages, growing wheat, barley, pulses, sesame and cotton, and keeping humped cattle and buffalo.')};
function pickEra8(){const ks=Object.keys(ERA8);return weighted(ks.map(k=>[k,ERA8[k].w]))}
function pickCity8(e){const ks=Object.keys(R8).filter(k=>R8[k].pop[e]);return weighted(ks.map(k=>[k,R8[k].pop[e]]))}
function yaFor8(e){const E=ERA8[e];return Math.round((E.b+rnd()*(E.a-E.b))/5)*5}
const pw8=(rg,ya)=>{const e=era8(ya);return (R8[rg].pop[e]||10)*1000/(ERA8[e].wp*1e6)};

/* ---------- names and seals: no Indus name is known ---------- */
// sign glyphs: 7x7 bitmaps (1 = ink); shapes inspired by frequent Indus signs, not real readings
const SIGN8=['0011100,0100010,0100010,0100010,0100010,0111110,0000000', // jar
 '0001000,0011100,0111110,1101011,0111110,0011100,0001000', // fish-like
 '0001000,0011100,0001000,0011100,0101010,0010100,0100010', // man
 '1010101,1010101,1010101,1010101,1010101,1010101,0000000', // strokes
 '1111111,1001001,1001001,1001001,1001001,0000000,0000000', // comb
 '0001000,0010100,0100010,1000001,0100010,0010100,0001000', // diamond
 '0011100,0101010,1001001,1111111,1001001,0101010,0011100', // wheel
 '0001000,0001000,0111110,0001000,0001000,0001000,0001000', // cross-stick
 '1000001,0100010,0010100,0001000,0010100,0100010,1000001', // X
 '0100010,0100010,0111110,0100010,0100010,0000000,0000000', // ladder
 '0011100,0100000,0100000,0011000,0000100,0000100,0111000', // S-hook
 '1110111,0010100,0010100,0010100,0010100,0010100,1110111', // pillars
 '0001000,0011100,0101010,0001000,0001000,0001000,0011100', // arrow
 '0110110,1001001,1001001,0110110,0000000,0000000,0000000', // double loop
 '0001000,0010100,0100010,1111111,0000000,0111110,0000000'];// roof
const SEALANI8=['unicorn','unicorn','unicorn','zebu','buffalo','elephant','rhino','tiger'];
function mkSeal8(seed){const r=srng(seed);const n=2+Math.floor(r()*3);const signs=[];for(let i=0;i<n;i++)signs.push(Math.floor(r()*SIGN8.length));return{signs,ani:SEALANI8[Math.floor(r()*SEALANI8.length)]}}
function mkName8(S){S.seal8=mkSeal8((S.seed^0x51a1)>>>0);return mkName(S)}
const NAMENOTE8=X('เราไม่รู้ชื่อของคนในอารยธรรมสินธุแม้แต่คนเดียว เพราะยังอ่านตัวอักษรของพวกเขาไม่ออก และไม่รู้ด้วยซ้ำว่าพวกเขาพูดภาษาอะไร ในเกมนี้คุณจึงมีแค่ชื่อเล่น กับตราประทับที่มีตัวอักษรซึ่งวันนี้ไม่มีใครอ่านได้ (ตัวอักษรในเกมวาดเลียนแบบรูปทรง ไม่ใช่ตัวอักษรจริง)',
 'We do not know the name of a single person of the Indus civilisation: their writing cannot be read, and we do not even know what language they spoke. So in this game you have only a nickname, and a seal with signs that no one today can read. (The game’s signs imitate their shapes; they are not real signs.)');
function sealCanvas8(seal,px){const c=document.createElement('canvas');c.width=40;c.height=40;c.style.width=px+'px';c.style.height=px+'px';c.style.imageRendering='pixelated';
  const x=c.getContext('2d');const R=(a,b,w,h,col)=>{x.fillStyle=col;x.fillRect(a,b,w,h)};
  R(0,0,40,40,'#d9cdb4');R(1,1,38,38,'#e8ddc6');R(0,0,40,1,'#bfae8c');R(0,39,40,1,'#a99877');R(0,0,1,40,'#bfae8c');R(39,0,1,40,'#a99877');
  const ink='#5a4632';let sx=Math.floor((40-(8*seal.signs.length-1))/2);
  seal.signs.forEach((g,i)=>{const rows=SIGN8[g].split(',');rows.forEach((row,yy)=>{for(let xx=0;xx<7;xx++)if(row[xx]==='1')R(sx+xx,3+yy,1,1,ink)});sx+=8});
  drawSealAnimal8(x,seal.ani,6,16,ink);return c}
function drawSealAnimal8(x,k,ox,oy,ink){const R=(a,b,w,h)=>{x.fillStyle=ink;x.fillRect(ox+a,oy+b,w,h)};
  // body facing right, 26x18 area
  if(k==='elephant'){R(4,4,16,8);R(18,3,5,6);R(22,6,2,8);R(5,12,3,6);R(16,12,3,6);R(9,12,3,6);R(1,5,3,1)}
  else if(k==='rhino'){R(4,6,16,7);R(19,6,5,5);R(23,4,1,3);R(5,13,3,4);R(16,13,3,4);R(8,5,10,1);R(10,8,1,4)}
  else if(k==='tiger'){R(4,7,15,5);R(18,5,5,5);R(19,4,1,1);R(22,4,1,1);R(5,12,2,5);R(16,12,2,5);R(1,5,3,1);R(0,4,1,2);x.fillStyle='#e8ddc6';for(let i=6;i<18;i+=3)x.fillRect(ox+i,oy+7,1,5)}
  else if(k==='buffalo'){R(4,6,16,7);R(19,6,4,5);R(15,3,10,2);R(23,1,2,3);R(15,1,2,2);R(5,13,2,4);R(17,13,2,4)}
  else if(k==='zebu'){R(4,6,16,7);R(16,3,4,3);R(19,5,5,5);R(22,2,1,3);R(19,10,2,4);R(5,13,2,4);R(17,13,2,4);R(1,7,3,1)}
  else{R(4,6,15,6);R(18,4,4,5);R(21,0,1,5);R(22,1,1,1);R(5,12,2,5);R(16,12,2,5);R(1,6,3,1);R(17,10,2,2);R(25,9,1,7);R(24,8,3,1);R(24,16,3,1)}} // unicorn + standard

/* ---------- careers ---------- */
const CAREERS8={
farmer:{n:X('ชาวนา','Farmer'),act:'sow',sk:'kn',ok:S=>S.cls!=='elite',
 L:[X('เด็กไล่นกในนาข้าวสาลี','a child who scares birds from the wheat'),X('ชาวนา','a farmer'),X('ชาวนาที่ทั้งหมู่บ้านถามเรื่องฤดูกาล','the farmer the whole village asks about the seasons'),X('ผู้ดูแลยุ้งข้าวของเมือง','keeper of the town’s granaries')]},
herder:{n:X('คนเลี้ยงวัวควาย','Cattle and buffalo herder'),act:'herd',sk:'sv',ok:S=>S.cls!=='elite',
 L:[X('เด็กเลี้ยงควาย','a buffalo boy'),X('คนเลี้ยงวัวควาย','a herder'),X('คนเลี้ยงที่มีวัวโหนกฝูงใหญ่','a herder with a great herd of humped cattle'),X('เจ้าของฝูงวัวที่ใหญ่ที่สุดในแถบนี้','owner of the largest herd in the district')]},
potter:{n:X('ช่างปั้นหม้อ','Potter'),act:'job',scene:'craft',sk:'cr',l:X('ปั้นหม้อแดงลายดำบนแป้นหมุน','Throw red pots painted in black on the wheel'),item:'pot',ok:S=>true,
 L:[X('ลูกมือหมุนแป้น','an apprentice at the wheel'),X('ช่างปั้นหม้อ','a potter'),X('ช่างวาดลายใบโพธิ์บนหม้อ','the painter of pipal leaves on pots'),X('หัวหน้าเตาเผาของย่าน','master of the quarter’s kilns')]},
bead:{n:X('ช่างลูกปัด','Bead-maker'),act:'job',scene:'bead',sk:'cr',l:X('เจาะและขัดลูกปัดคาร์เนเลียน','Drill and polish carnelian beads'),item:'cbead',ok:S=>true,
 L:[X('ลูกมือขัดหิน','a stone-polishing helper'),X('ช่างลูกปัด','a bead-maker'),X('ช่างเจาะลูกปัดยาว','a driller of long beads'),X('นายช่างที่ลูกปัดไปถึงสุสานกษัตริย์แดนไกล','the master whose beads reach the tombs of faraway kings')]},
seal:{n:X('ช่างแกะตราประทับ','Seal-cutter'),act:'job',scene:'seal',sk:'kn',l:X('แกะตราประทับจากหินสบู่','Carve seals from steatite'),ok:S=>S.cls!=='dep',
 L:[X('ลูกมือขัดตรา','an apprentice who polishes seals'),X('ช่างแกะตรา','a seal-cutter'),X('ช่างแกะตราของพ่อค้าใหญ่','seal-cutter to the great merchants'),X('ผู้แกะตราที่รู้ตัวอักษรมากที่สุดในเมือง','the seal-cutter who knows the most signs in the city')]},
copper:{n:X('ช่างทองแดง','Coppersmith'),act:'job',scene:'smith',sk:'cr',l:X('หลอมทองแดงและหล่อสำริด','Smelt copper and cast bronze'),item:'bronze',ok:S=>S.cls!=='dep',
 L:[X('เด็กเป่าลมเตา','a child at the bellows'),X('ช่างทองแดง','a coppersmith'),X('ช่างหล่อรูปปั้นด้วยขี้ผึ้ง','a caster of figures by the lost-wax method'),X('นายช่างโลหะของเมือง','master metalworker of the city')]},
weaver:{n:X('ช่างปั่นและทอฝ้าย','Cotton spinner and weaver'),act:'job',scene:'weave',sk:'cr',l:X('ปั่นด้ายและทอผ้าฝ้าย','Spin and weave cotton'),item:'cotton',ok:S=>true,
 L:[X('เด็กปั่นด้าย','a child at the spindle'),X('ช่างทอ','a weaver'),X('ช่างย้อมผ้าสีแดงจากรากไม้','a dyer of red cloth from madder roots'),X('ผู้ที่ผ้าทอถูกส่งไปขายแดนไกล','the weaver whose cloth is shipped to far lands')]},
merchant:{n:X('พ่อค้า','Merchant'),act:'job',scene:'boat8',sk:'so',l:X('ค้าขายตามแม่น้ำและทางทะเล','Trade along the rivers and across the sea'),ok:S=>S.cls!=='dep',
 L:[X('เด็กแบกห่อของ','a child who carries the bales'),X('พ่อค้า','a merchant'),X('พ่อค้าที่ล่องเรือถึงดิลมุน','a merchant who sails to Dilmun'),X('หัวหน้าพ่อค้าที่ชื่อเสียงไปถึงเมโสโปเตเมีย','a chief merchant known as far as Mesopotamia')]},
builder:{n:X('ช่างอิฐ','Brick-maker and builder'),act:'job',scene:'kiln',sk:'cr',l:X('เผาอิฐและซ่อมท่อระบายน้ำ','Fire bricks and mend the drains'),ok:S=>S.cls!=='elite',
 L:[X('เด็กขนดินเหนียว','a child who carries clay'),X('ช่างอิฐ','a brick-maker'),X('ช่างก่อท่อระบายน้ำ','a drain-builder'),X('ผู้ดูแลการก่อสร้างของเมือง','overseer of the city’s building')]},
boatman:{n:X('คนเรือ','Boatman'),act:'fish',sk:'sv',ok:S=>S.cls!=='elite',
 L:[X('เด็กวิดน้ำในเรือ','a child who bails the boat'),X('คนเรือ','a boatman'),X('คนเรือที่รู้จักทุกเกาะแก่งของแม่น้ำ','the boatman who knows every sandbar of the river'),X('นายเรือที่พาเรือสินค้าไปถึงทะเล','the captain who takes the cargo boats to the sea')]},
ritual:{n:X('ผู้ประกอบพิธี','Ritual keeper'),act:'temple',sk:'so',ok:S=>S.cls!=='dep',
 L:[X('เด็กช่วยงานพิธี','a child who helps at the rites'),X('ผู้ประกอบพิธี','a ritual keeper'),X('ผู้ดูแลสระน้ำศักดิ์สิทธิ์','keeper of the sacred bath'),X('ผู้ที่ทั้งเมืองมาขอให้ทำพิธี','the one the whole city asks to perform the rites')]}};
const CARNOTE8=X('งานฝีมือของอารยธรรมสินธุมีมาตรฐานเดียวกันอย่างน่าทึ่งทั่วดินแดนกว้างใหญ่ อิฐมีสัดส่วน 1:2:4 ตุ้มน้ำหนักหินเป็นลูกบาศก์ขนาดมาตรฐาน และลูกปัดกับตราประทับทำด้วยฝีมือสูงมาก เราไม่รู้ว่าใครควบคุมระบบนี้ เพราะไม่พบวังหรือภาพกษัตริย์ที่ชัดเจน อาชีพ “ผู้ประกอบพิธี” ในเกมเป็นการเดา เราไม่รู้ว่าพวกเขามีนักบวชหรือไม่',
 'Indus craft work was strikingly standard across a vast area: bricks in the proportions 1:2:4, cubic stone weights of fixed sizes, and beads and seals of great skill. We do not know who ran this system, since no clear palace or image of a king has been found. The game’s “ritual keeper” is a guess: we do not know whether they had priests.');
const CLS8={elite:X('ครอบครัวพ่อค้าใหญ่ บ้านกว้างบนเนินป้อม','a great merchant family with a large house on the citadel mound'),free:X('ครอบครัวช่างและชาวนา','a family of craftspeople and farmers'),dep:X('คนงานรับจ้าง ขนอิฐและแบกของ','hired labourers who carry bricks and loads')};
const CLSNOTE8=X('บ้านในเมืองสินธุมีขนาดต่างกัน บางหลังใหญ่มีหลายห้องและบ่อน้ำของตัวเอง บางหลังเป็นห้องเล็กแถวเดียว แต่ความต่างนี้น้อยกว่าเมโสโปเตเมียหรืออียิปต์มาก ไม่พบสุสานหรูหราแบบสุสานหลวง เราไม่รู้ว่ามีกษัตริย์ นักบวช หรือทาสหรือไม่',
 'Houses in Indus cities varied: some were large, with many rooms and their own well; others were rows of small rooms. But the gap looks far smaller than in Mesopotamia or Egypt, and no lavish royal tombs have been found. We do not know whether they had kings, priests or slaves.');

function init8(){const e=era8(S.ya0);
  S.era=e;S.cls=weighted([['elite',.06],['free',.74],['dep',.2]]);S.settled=1;S.roleNo=1;
  S.sig=S.cls==='elite'?5:0;S.schOK=S.cls==='elite'?(rnd()<.6?1:0):(rnd()<.1?1:0);
  S.ag=S.cls==='elite'?8:S.cls==='free'?2:0;S.debt=0;S.debtY=0;S.sealN=0;S.relig={};S.saw={zebu:1};S.nameTab=0;S.left8=0;
  S.field=S.cls==='free'||S.cls==='dep'?1:0;
  if(S.cls==='free'){S.herd.zebu=(rnd()*3)|0;if(rnd()<.4)S.herd.buffalo=1;S.herd.goat=(rnd()*3)|0;S.herd.sheep=(rnd()*2)|0}
  if(S.cls==='elite'){S.herd.zebu=3+((rnd()*5)|0);S.herd.buffalo=1+((rnd()*2)|0)}
}
const MON8={weak:X('มรสุมปีนี้มาน้อย แม่น้ำไม่ล้นตลิ่ง นาที่อยู่ไกลแม่น้ำแห้ง','The monsoon brings little rain this year. The river does not spill over its banks, and the fields far from it dry out.'),
 flood:X('มรสุมปีนี้แรง แม่น้ำล้นตลิ่งท่วมหมู่บ้านริมน้ำ ชาวเมืองยกบ้านขึ้นบนฐานอิฐที่สูงขึ้นอีกชั้น','The monsoon is fierce this year. The river overflows and floods the riverside villages, and the townspeople raise their houses on yet another layer of brick platforms.'),
 good:X('มรสุมมาตามฤดู แม่น้ำล้นตลิ่งพอดี ทิ้งตะกอนไว้ทั่วนา ข้าวสาลีหลังน้ำลดจะงาม','The monsoon comes on time. The river spills just enough and leaves silt across the fields, and the winter wheat will be fine.')};
const MONNOTE8=X('แม่น้ำสินธุและสาขาได้น้ำจากหิมะละลายบนเทือกเขาหิมาลัยและฝนมรสุมฤดูร้อน น้ำท่วมทิ้งตะกอนให้ปลูกข้าวสาลีและข้าวบาร์เลย์ในฤดูหนาว ชาวเมืองยกฐานเมืองให้สูงขึ้นด้วยแท่นอิฐเพื่อกันน้ำท่วม ราว 4,200 ปีก่อน มรสุมเริ่มอ่อนลง ซึ่งนักวิชาการหลายคนเชื่อว่ามีส่วนทำให้เมืองต่างๆ ถูกทิ้งร้าง',
 'The Indus and its tributaries were fed by Himalayan snowmelt and the summer monsoon. Floods left silt for winter crops of wheat and barley, and towns were raised on brick platforms against the water. From about 4,200 years ago the monsoon weakened, which many scholars think helped empty the cities.');
function mon8(){if(!S||S.ch!==8)return;const e=era8(S.ya);const weakP=e==='late'?.4:e==='m2'&&S.ya<=4225&&S.ya>=4100?.35:.15;S.mon=weighted([['weak',weakP],['flood',.13],['good',1-weakP-.13]]);
  S.yt=S.mon==='weak'?'dry':S.mon==='good'?'good':'wet'}
function v8Year(a){if(S.ch!==8)return;const e=era8(S.ya);S.era=e;
  fx({f:{elite:4,free:1,dep:0}[S.cls]||0});if(S.cls==='elite')S.yr-=.002;
  if(S.mon==='weak'){fx({f:S.field?-5:-3});if(rnd()<.25||!S.monN)log(MON8.weak,S.monN?null:(S.monN=1,MONNOTE8),'sad')}
  else if(S.mon==='flood'){fx({b:-2,f:-2});if(rnd()<.2||!S.monN)log(MON8.flood,S.monN?null:(S.monN=1,MONNOTE8),'sad')}
  else if(a>=5&&!S.monG&&rnd()<.25){S.monG=1;fx({f:3});log(MON8.good,S.monN?null:(S.monN=1,MONNOTE8),'it')}
  if(['fish','herd'].includes(S.focus))S.yr+=.002;
  if(a>=14&&S.car&&S.clv>=1)S.ag+=S.clv*(S.car==='merchant'?2:1);
  if(S.focus==='school'){S.sig=clamp(S.sig+5+(hasT('mem')?2:0)+S.kn/40,0,100);S.schY=(S.schY||0)+1}
  if(S.focus==='job'&&(S.car==='seal'||S.car==='merchant'))S.sig=clamp(S.sig+2,0,100);
  if((S.focus==='write'||(S.focus==='job'&&S.car==='seal'))&&rnd()<.75){const n=S.car==='seal'?2+((rnd()*4)|0):1;S.sealN+=n;S.sig=clamp(S.sig+1,0,100);
    if(!S.sealedN){S.sealedN=1;ms(X('แกะตราประทับชิ้นแรกด้วยมือตัวเอง','Carved your first seal with your own hand'))}}
  if(!S.nameTab&&a>=10&&rnd()<.07){S.nameTab=1;log(X('ห่อสินค้าของครอบครัวถูกมัดและปิดด้วยก้อนดินเหนียว แล้วกดตราประทับของพ่อค้าลงไป ภาพสัตว์กับตัวอักษรนูนขึ้นบนดิน','Your family’s bale of goods is tied and sealed with a lump of clay, and a merchant’s seal is pressed into it. An animal and a row of signs stand out in the clay.'),
    X('ตราประทับสินธุส่วนใหญ่เป็นหินสบู่สี่เหลี่ยมเล็กๆ แกะลายสัตว์กับตัวอักษรสั้นๆ แล้วเผาให้แข็งและขาว ใช้กดลงบนดินเหนียวที่ปิดห่อสินค้า ภาชนะ หรือประตู เศษดินเหนียวที่มีรอยตราเหล่านี้ช่วยให้รู้ว่าสินค้าเดินทางไปไหนบ้าง','Most Indus seals were small squares of steatite carved with an animal and a short line of signs, then fired hard and white. They were pressed into clay that closed bales, jars or doors. The impressed lumps of clay help show where goods travelled.'),'it')}
  if(S.debt>0){S.debtY++;S.debt=Math.ceil(S.debt*1.15);if(S.ag>=S.debt){S.ag-=S.debt;S.debt=0;S.debtY=0;log(X('คุณใช้คืนของที่ยืมมาครบ','You repay everything you borrowed.'),null,'it')}
    else if(S.debtY>=3){const k=Object.keys(S.herd).find(k=>S.herd[k]>0);if(k)addHerd(k,-1);S.debt=0;S.debtY=0;fx({b:-6,p:-4});log(X('คนที่ให้ยืมมาเอาสัตว์ของคุณไปแทนสิ่งที่คุณยังไม่คืน','The lender comes and takes one of your animals for what you still owe.'),null,'sad')}}
  const ya=S.ya,once=(k,f)=>{if(!S.tl)S.tl={};if(S.tl[k])return;S.tl[k]=1;f()};
  if(ya<=4625&&ya>=4600&&['moh','har','rak'].includes(S.rg))once('city8',()=>{fx({b:2});log(X('เมืองถูกสร้างใหม่ตามผัง ถนนใหญ่ตัดตรงจากเหนือจรดใต้ บ้านใหม่ทุกหลังก่อด้วยอิฐเผาขนาดเดียวกันหมด','The town is rebuilt to a plan: main streets run straight from north to south, and every new house is built of baked bricks all the same size.'),
    X('ราว 2600 ปีก่อนคริสตกาล ชุมชนในลุ่มแม่น้ำสินธุเปลี่ยนเป็นเมืองใหญ่อย่างรวดเร็ว และใช้มาตรฐานเดียวกันทั้งอิฐ ตุ้มน้ำหนัก และตราประทับ ตั้งแต่อัฟกานิสถานจนถึงคุชราต พื้นที่ของอารยธรรมนี้กว้างกว่าเมโสโปเตเมียและอียิปต์ในยุคเดียวกัน','About 2600 BCE settlements along the Indus quickly grew into great cities sharing one standard of bricks, weights and seals, from Afghanistan to Gujarat. The civilisation covered more land than Mesopotamia or Egypt at the time.'),'cl')});
  if(ya<=4335&&ya>=4300&&['lot','moh','dho'].includes(S.rg))once('akkad8',()=>{fx({b:1,kn:2});log(X('คนเรือกลับมาเล่าว่าที่ปลายทะเลมีกษัตริย์ชื่อซาร์กอน ผู้โอ้อวดว่าเรือจากแดนของเราจอดเทียบท่าเมืองหลวงของเขา','Sailors come back saying that at the far end of the sea a king called Sargon boasts that ships from our land tie up at the quay of his capital.'),
    X('จารึกของซาร์กอนแห่งอัคคัด ราว 2300 ปีก่อนคริสตกาล บอกว่าเรือจากเมลูฮา มากัน และดิลมุนมาจอดที่ท่าเมืองอัคคัด นักวิชาการส่วนใหญ่เชื่อว่าเมลูฮาคือดินแดนของอารยธรรมสินธุ','An inscription of Sargon of Akkad, about 2300 BCE, says that ships from Meluhha, Magan and Dilmun moored at the quay of Akkad. Most scholars think Meluhha was the land of the Indus civilisation.'),'cl')});
  if(ya<=4225&&ya>=4160)once('k42_8',()=>{fx({f:-6,h:-2});log(X('มรสุมมาน้อยติดต่อกันหลายปี แม่น้ำสายเล็กทางตะวันออกเริ่มแห้งเป็นช่วงๆ บางครอบครัวย้ายไปหาที่ที่มีน้ำ','For years the monsoon brings little rain. The smaller rivers to the east begin to dry up for part of the year, and some families move in search of water.'),
    X('ราว 4,200 ปีก่อน มรสุมเอเชียใต้อ่อนลงอย่างชัดเจน หลักฐานจากหินงอกในถ้ำและตะกอนทะเลสาบสนับสนุนเรื่องนี้ นักวิชาการหลายคนเชื่อว่ามันทำให้ชาวสินธุค่อยๆ ย้ายไปทางตะวันออกที่ฝนชุกกว่า แต่น้ำหนักของปัจจัยนี้ยังถกเถียงกัน','About 4,200 years ago the South Asian monsoon clearly weakened, as cave stalagmites and lake sediments show. Many scholars think it helped push Indus people slowly east to wetter lands, though how much it mattered is still debated.'),'sad')});
  if(ya<=3925&&ya>=3880&&['moh','har','dho','kal','rak'].includes(S.rg))once('empty8',()=>{fx({b:-4});log(X('ย่านทั้งย่านในเมืองว่างเปล่า บ้านใหม่สร้างด้วยอิฐเก่าที่รื้อมาจากหลังอื่น ไม่มีใครซ่อมท่อระบายน้ำอีกแล้ว และตราประทับก็แทบไม่มีใครใช้','Whole quarters of the city stand empty. New houses are built of old bricks pulled from others, no one mends the drains any more, and hardly anyone uses seals.'),
    X('หลังราว 1900 ปีก่อนคริสตกาล เมืองใหญ่ของสินธุค่อยๆ ร้าง ตัวอักษร ตราประทับ และตุ้มน้ำหนักมาตรฐานเลิกใช้ ผู้คนไม่ได้หายไป แต่กระจายไปอยู่ในหมู่บ้านเล็กๆ จำนวนมาก โดยเฉพาะทางตะวันออกในลุ่มแม่น้ำคงคา-ยมุนา ทฤษฎีเก่าที่ว่าเมืองถูก “ผู้รุกรานอารยัน” ทำลายไม่มีหลักฐานสนับสนุนแล้ว','After about 1900 BCE the great Indus cities slowly emptied. Writing, seals and the standard weights fell out of use. The people did not vanish but spread into many small villages, especially east towards the Ganges–Yamuna plain. The old theory that “Aryan invaders” destroyed the cities is no longer supported by the evidence.'),'sad')});
}
function trade8Year(){const ks=Object.keys(S.inv).filter(k=>S.inv[k]>0&&k!=='grain').sort((a,b)=>INV[b].v-INV[a].v);
  if(!ks.length){if(rnd()<.4){S.ag+=1;log(X('คุณช่วยแบกห่อสินค้าลงเรือที่ท่า ได้ค่าแรงเป็นข้าวสาลีกับงา','You help carry bales down to the boats and are paid in wheat and sesame.'),null,'it')}return}
  const k=ks[0];S.inv[k]--;const v=INV[k].v+(S.so>50?1:0);S.ag+=v;
  log(X('คุณแลก'+INV[k].n.th+'ที่ตลาด พ่อค้าชั่งด้วยตุ้มหินลูกบาศก์ ได้ของมูลค่า '+v+' หน่วย','You trade '+INV[k].n.en+' at the market; the merchant weighs it with cube-shaped stone weights, and you get goods worth '+v+' units'),
    S.agNote?null:(S.agNote=1,X('ชาวสินธุใช้ตุ้มน้ำหนักทรงลูกบาศก์ ส่วนใหญ่ทำจากหินเชิร์ต ขนาดเพิ่มขึ้นเป็นเท่าตัว 1, 2, 4, 8, 16… แล้วเป็นสิบเท่าในตุ้มใหญ่ ตุ้มหนึ่งหนักราว 13.7 กรัม และขนาดแทบไม่เปลี่ยนเลยตลอดหลายร้อยปีในหลายเมือง ยังไม่พบเหรียญ คนน่าจะแลกของกับของ','Indus people used cube-shaped weights, mostly of chert, doubling in size 1, 2, 4, 8, 16… and going up in tens for the large ones. One common unit weighed about 13.7 grams, and the sizes hardly changed for centuries across many cities. No coins have been found; people probably swapped goods.')),'it')}
function title8(S){
  if(S.car&&S.age>=12&&S.clv>=1)return CAREERS8[S.car].L[S.clv];
  if(S.age<13)return S.cls==='elite'?X('ลูกพ่อค้าใหญ่','a child of a great merchant house'):X('เด็กริมแม่น้ำสินธุ','a child of the Indus');
  if(S.car)return CAREERS8[S.car].L[S.clv];
  if(S.sig>=60)return X('ผู้รู้ตัวอักษร หนึ่งในคนจำนวนน้อย','one of the few who know the signs');
  return {elite:X('สมาชิกครอบครัวพ่อค้าใหญ่','a member of a great merchant house'),free:X('ชาวเมืองและชาวนา','a townsperson and farmer'),dep:X('คนงานรับจ้าง','a hired labourer')}[S.cls]}
