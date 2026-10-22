/* ================= v0.17 CHAPTER 14 (shown as 09): THE OLMEC AND THE COLOSSAL HEADS ================= */
const ERA14={
 early:{a:3525,b:3175,w:.24,wp:50,n:X('ยุคหมู่บ้านโอลเมกยุคแรกและน้ำพุเอลมานาตี','the first Olmec villages and the spring of El Manatí')},
 slz:{a:3175,b:2925,w:.3,wp:55,n:X('ยุครุ่งเรืองของซานลอเรนโซ','San Lorenzo at its height')},
 lav:{a:2925,b:2425,w:.34,wp:60,n:X('ยุคของลาเบนตา','the age of La Venta')},
 late:{a:2425,b:2275,w:.12,wp:70,n:X('ยุคหลังลาเบนตาล่ม','after the fall of La Venta')}};
const era14=ya=>ya>3175?'early':ya>2925?'slz':ya>2425?'lav':'late';
const R14={
 slz:{pop:{early:6,slz:12,lav:2}},
 lav:{pop:{slz:3,lav:12}},
 tz:{pop:{lav:4,late:8}},
 tux:{pop:{early:3,slz:5,lav:4,late:4}},
 chal:{pop:{lav:4}},
 vil:{pop:{early:40,slz:45,lav:50,late:50}}};
Object.assign(REGIONS,{
 slz:{n:X('ซานลอเรนโซ เมืองบนที่ราบสูงเหนือแม่น้ำโกอัตซาโกอัลโกส','San Lorenzo, the town on its plateau above the Coatzacoalcos River'),sc:'olmec',food:2,cold:0,dry:0},
 lav:{n:X('ลาเบนตา เมืองบนเกาะกลางหนองน้ำ','La Venta, the town on an island in the marshes'),sc:'olmecl',food:2,cold:0,dry:0},
 tz:{n:X('เตรสซาโปเตส เมืองริมเชิงเขาตุซตลา','Tres Zapotes, the town at the foot of the Tuxtla hills'),sc:'olmec',food:2,cold:0,dry:0},
 tux:{n:X('หมู่บ้านบนเขาตุซตลา ใกล้แหล่งหินบะซอลต์','a village in the Tuxtla mountains, near the basalt'),sc:'olmect',food:2,cold:0,dry:0},
 chal:{n:X('ชัลกัตซิงโก หมู่บ้านใต้หน้าผาบนที่ราบสูง','Chalcatzingo, a village below the cliffs of the highlands'),sc:'chal',food:1,cold:0,dry:1},
 vil:{n:X('หมู่บ้านชาวนาริมแม่น้ำในที่ราบชายฝั่งอ่าวเม็กซิโก','a farming village by a river on the Gulf Coast plain'),sc:'olmecv',food:2,cold:0,dry:0}});
Object.assign(COORD,{slz:[17.75,-94.76],lav:[18.10,-94.04],tz:[18.47,-95.44],tux:[18.43,-95.10],chal:[18.68,-98.77],vil:[17.9,-94.6]});
for(const k in R14){NEIGH[k]=[];VR[k]=['plain'];R3[k]={vil:99999,share:0,plant:{ya:99999,n:X('ข้าวโพด ถั่ว และฟักทอง','maize, beans and squash')},ani:[],hunt:'deer',pred:X('เสือจากัวร์','A jaguar')}}
FLOODR.push('slz','lav','tz','vil');DRYR.push('chal');
SC.olmec={d:['#8cc4dc','#f0dcae'],n:['#0a0f24','#22253c'],far:'#4f7a52',near:'#3e6a46',gr:'#6f9346',riv:'#4f8a8e',tree:'palm',olm:1};
SC.olmecl=Object.assign({},SC.olmec,{riv:'#5a8e86',gr:'#7a9a4c'});
SC.olmecv=Object.assign({},SC.olmec,{gr:'#6a9a44'});
SC.olmect=Object.assign({},SC.olmec,{riv:null,far:'#5d6f5b',near:'#4b5d44',tree:'broad',volc:1});
SC.chal=Object.assign({},SC.olmec,{riv:null,far:'#8a7a62',near:'#7a6a50',gr:'#9c9a62',tree:'shrub'});
const RNOTE14={
 slz:X('ซานลอเรนโซสร้างบนที่ราบสูงที่คนถมดินเพิ่มจนสูงเหนือที่ราบน้ำท่วม รุ่งเรืองราว 1200–900 ปีก่อนคริสตกาล พบหัวหินยักษ์ 10 หัว และรางระบายน้ำยาวที่ทำจากรางหินบะซอลต์ต่อกัน','San Lorenzo stood on a plateau that people built up with fill until it rose above the flood plain. It flourished around 1200–900 BCE. Ten colossal heads have been found here, and long drains made of basalt troughs fitted end to end.'),
 lav:X('ลาเบนตาอยู่บนเกาะกลางหนองน้ำใกล้ปากแม่น้ำ รุ่งเรืองราว 900–400 ปีก่อนคริสตกาล มีเนินดินเหนียวรูปกรวยสูงราว 30 เมตร ลานพิธี หัวหินยักษ์ 4 หัว และหลุมที่ฝังหินเซอร์เพนทีนหลายตันไว้ใต้ดินโดยไม่ให้ใครเห็นอีก','La Venta, on an island in the marshes near the river mouth, flourished around 900–400 BCE. It had a cone-shaped clay mound about 30 metres high, ceremonial plazas, four colossal heads, and pits where tons of serpentine blocks were buried, never to be seen again.'),
 tz:X('เตรสซาโปเตสอยู่ต่อได้นานกว่าเมืองโอลเมกอื่น ที่นี่ในปี 1862 ชาวนาคนหนึ่งขุดพบหัวหินยักษ์หัวแรกที่โลกยุคใหม่ได้รู้จัก','Tres Zapotes lasted longer than the other Olmec towns. Here, in 1862, a farmhand dug up the first colossal head the modern world came to know.'),
 tux:X('หินบะซอลต์ของหัวหินยักษ์มาจากเขาตุซตลา โดยเฉพาะภูเขาไฟเซร์โรซินเตเปก ห่างจากเมืองใหญ่ 60–150 กิโลเมตร ก้อนหินหนักหลายสิบตันถูกเคลื่อนย้ายโดยไม่มีล้อและไม่มีสัตว์ลาก','The basalt for the colossal heads came from the Tuxtla mountains, especially the volcano Cerro Cintepec, 60–150 kilometres from the great towns. Boulders weighing tens of tons were moved with no wheels and no animals to pull them.'),
 chal:X('ชัลกัตซิงโกบนที่ราบสูงตอนกลางของเม็กซิโก ห่างจากชายฝั่งหลายร้อยกิโลเมตร แต่มีภาพสลักบนหน้าผาแบบโอลเมก เช่น คนนั่งในปากถ้ำที่เมฆฝนลอยออกมา แสดงว่าความคิดและของมีค่าเดินทางไปไกล','Chalcatzingo, in the central highlands of Mexico, lies hundreds of kilometres from the coast, yet its cliffs carry Olmec-style carvings, such as a figure seated in a cave mouth from which rain clouds drift. Ideas and precious goods travelled far.'),
 vil:X('คนส่วนใหญ่อยู่ในหมู่บ้านบ้านเสาไม้มุงใบปาล์ม ปลูกข้าวโพด ถั่ว และฟักทองบนดินริมตลิ่งที่น้ำท่วมทุกปี จับปลาและเต่าในแม่น้ำ และเลี้ยงหมาไว้กิน ทุกอย่างต้องแบกด้วยหลังคนหรือขนด้วยเรือแคนู','Most people lived in villages of pole houses roofed with palm leaves. They grew maize, beans and squash on riverbank land that flooded every year, caught fish and turtles in the rivers, and raised dogs to eat. Everything was carried on human backs or by canoe.')};
function pickEra14(){const ks=Object.keys(ERA14);return weighted(ks.map(k=>[k,ERA14[k].w]))}
function yaFor14(e){const E=ERA14[e];return Math.round((E.b+rnd()*(E.a-E.b))/5)*5}
function pickCity14(e,ya){const ks=Object.keys(R14).filter(k=>R14[k].pop[e]&&!(k==='chal'&&(ya>2925||ya<2525))&&!(k==='slz'&&e==='early'&&ya>3400));return weighted(ks.map(k=>[k,R14[k].pop[e]]))}
const pw14=(rg,ya)=>{const e=era14(ya);return (R14[rg].pop[e]||10)*1000/(ERA14[e].wp*1e6)};
const NAMENOTE14=X('เราไม่รู้ว่าชาวโอลเมกเรียกตัวเองว่าอะไร และไม่รู้ชื่อของใครเลยสักคน คำว่า “โอลเมก” มาจากภาษาของชาวแอซเท็กที่มาทีหลังกว่าสองพันปี แปลว่า “คนแห่งแดนยาง” ชื่อในเกมจึงเป็นชื่อที่แต่งขึ้น','We do not know what the Olmec called themselves, or the name of a single person. “Olmec” comes from the language of the Aztecs, who lived more than two thousand years later, and means “people of the rubber land”. The names in the game are invented.');

/* ---------- careers ---------- */
const CAREERS14={
farmer:{n:X('ชาวนา','Farmer'),act:'sow',sk:'kn',ok:S=>S.cls!=='elite',
 L:[X('เด็กไล่นกแก้วในไร่ข้าวโพด','a child who chases parrots from the maize'),X('ชาวนา','a farmer'),X('ชาวนาที่ได้ดินริมตลิ่งดีที่สุด','the farmer with the best riverbank land'),X('ผู้อาวุโสที่หมู่บ้านทั้งหมู่บ้านเชื่อฟัง','the elder the whole village heeds')]},
fisher:{n:X('ชาวประมง','Fisher'),act:'fish',sk:'sv',ok:S=>S.rg!=='chal',
 L:[X('เด็กดักเต่าริมตลิ่ง','a child who traps turtles at the bank'),X('ชาวประมง','a fisher'),X('คนพายแคนูที่รู้จักทุกคุ้งน้ำ','a canoe-man who knows every bend of the river'),X('เจ้าของแคนูหลายลำ','owner of many canoes')]},
sculptor:{n:X('ช่างสลักหิน','Stone sculptor'),act:'job',scene:'carve14',sk:'cr',l:X('ทุบและขัดหินบะซอลต์ให้เป็นรูปหน้าคน','Pound and polish basalt into a human face'),ok:S=>S.rg!=='chal',
 L:[X('เด็กหาบทรายเปียกมาให้ช่างขัด','a child who carries wet sand for the polishers'),X('ช่างสลักหิน','a stone sculptor'),X('ช่างที่สลักตาและริมฝีปาก','the sculptor who carves the eyes and lips'),X('หัวหน้าช่างสลักหัวหินยักษ์','master carver of the colossal heads')]},
jade:{n:X('ช่างหยกและกระจกเงา','Jade and mirror worker'),act:'job',scene:'jade14',sk:'cr',l:X('ขัดหยกสีเขียวฟ้าและกระจกเงาจากแร่เหล็ก','Polish blue-green jade and iron-ore mirrors'),item:'jade14',ok:S=>S.cls!=='free'||S.rg!=='vil',
 L:[X('เด็กขัดลูกปัดหยก','a child who polishes jade beads'),X('ช่างหยก','a jade worker'),X('ช่างขัดกระจกเงาโค้งจากแร่เหล็ก','a polisher of curved iron-ore mirrors'),X('ช่างที่ทำหยกให้ผู้ปกครอง','the carver who makes the ruler’s jades')]},
rubber:{n:X('คนทำยาง','Rubber maker'),act:'job',scene:'ball14',sk:'cr',l:X('กรีดน้ำยางจากต้นไม้แล้วพันเป็นลูกบอล','Tap latex from the trees and wind it into balls'),item:'ball14',ok:S=>S.rg!=='chal',
 L:[X('เด็กถือกะลารองน้ำยาง','a child who holds the latex cup'),X('คนทำยาง','a rubber maker'),X('คนทำลูกบอลที่เด้งสูงที่สุด','the maker of the bounciest balls'),X('ผู้ที่ลูกบอลถูกใช้ในงานพิธีใหญ่','the one whose balls are used at the great rites')]},
potter:{n:X('ช่างปั้นหม้อ','Potter'),act:'job',scene:'craft',sk:'cr',l:X('ปั้นหม้อและตุ๊กตาดินเผารูปทารก','Shape pots and clay baby figurines'),item:'pot',ok:S=>true,
 L:[X('ลูกมือขยำดิน','an apprentice who kneads clay'),X('ช่างปั้นหม้อ','a potter'),X('ช่างปั้นตุ๊กตาทารกหน้าเสือจากัวร์','a maker of jaguar-faced baby figures'),X('ช่างที่ทุกบ้านอยากได้หม้อ','the potter every household wants')]},
trader:{n:X('พ่อค้าทางไกล','Long-distance trader'),act:'job',scene:'walk',sk:'so',l:X('เดินทางไปแลกหินออบซิเดียนและหยกจากแดนไกล','Travel to trade for obsidian and jade from far lands'),ok:S=>S.cls!=='dep',
 L:[X('เด็กแบกห่อของตามพ่อ','a child who carries the bundles behind a parent'),X('พ่อค้า','a trader'),X('พ่อค้าที่ข้ามภูเขาไปถึงที่ราบสูง','the trader who crosses the mountains to the highlands'),X('พ่อค้าที่รู้จักผู้ปกครองทุกเมือง','the trader who knows the ruler of every town')]},
shaman:{n:X('หมอผี','Shaman'),act:'temple',sk:'kn',ok:S=>true,
 L:[X('เด็กช่วยงานพิธี','a child who helps at the rites'),X('หมอผี','a shaman'),X('หมอผีที่แปลงเป็นเสือจากัวร์ในความฝัน','the shaman who becomes a jaguar in dreams'),X('หมอผีของผู้ปกครอง','the ruler’s own shaman')]}};
const CARNOTE14=X('ชาวโอลเมกไม่มีเครื่องมือโลหะ ช่างสลักหัวหินยักษ์ใช้หินที่แข็งกว่าทุบ แล้วขัดด้วยทรายเปียก และเจาะรายละเอียดด้วยไม้ไผ่หมุนกับทราย ช่างหยกก็ใช้วิธีเดียวกัน หยกสีเขียวฟ้าของพวกเขามาจากหุบเขาโมตากัวในกัวเตมาลา ห่างไปหลายร้อยกิโลเมตร','The Olmec had no metal tools. Sculptors of the colossal heads pounded with harder stones, polished with wet sand, and drilled details with reeds spun against sand. Jade workers did the same. Their blue-green jade came from the Motagua valley in Guatemala, hundreds of kilometres away.');
const CLS14={elite:X('ครอบครัวของผู้ปกครองและคนใกล้ชิด','the family of the ruler and those close to him'),free:X('ครอบครัวชาวนาและชาวประมง','a family of farmers and fishers'),dep:X('ครอบครัวช่างที่ทำงานให้ผู้ปกครอง','a craft family working for the ruler')};
const CLSNOTE14=X('สังคมโอลเมกมีผู้ปกครองที่มีอำนาจมากพอจะสั่งคนนับพันให้ลากหินหนักหลายสิบตันและถมดินทำเนินใหญ่ ครอบครัวชั้นสูงน่าจะคุมดินริมตลิ่งที่ดีที่สุด ซึ่งได้ตะกอนใหม่ทุกปีหลังน้ำท่วม ส่วนเรื่องว่ามีทาสหรือไม่ เรายังรู้น้อยมาก','Olmec society had rulers powerful enough to order thousands of people to drag stones weighing tens of tons and heap up great mounds. Elite families probably controlled the best riverbank land, renewed with silt by every flood. Whether anyone was enslaved, we know very little.');

function init14(){const e=era14(S.ya0);
  S.era=e;S.cls=weighted([['elite',.06],['free',.7],['dep',.24]]);S.settled=1;S.roleNo=1;S.lit=0;S.schOK=0;
  S.headP=0;S.headN=0;S.ag=S.cls==='elite'?8:S.cls==='free'?2:0;S.debt=0;S.debtY=0;S.saw={};S.nameTab=0;S.gump14=0;S.fall14=0;S.ani14=pick(['tapir','howler','armadillo','manatee','anteater','coati']);
  S.r14={jaguar:rnd()<.35,harpy:rnd()<.12,turtle:rnd()<.3};S.field=S.cls!=='elite'?1:0;S.dogs14=S.cls==='elite'?3:1}
Object.assign(INV,{jade14:{n:X('ลูกปัดหยก','jade beads'),v:3},ball14:{n:X('ลูกบอลยาง','rubber balls'),v:2}});

/* ---------- the year ---------- */
const RAIN14={flood:X('น้ำท่วมดินริมตลิ่งตามฤดู แล้วลดลงทิ้งโคลนใหม่ไว้หนาเป็นคืบ ปีนี้ข้าวโพดจะงาม','The seasonal flood covers the riverbank land, then drains away leaving a hand’s depth of fresh mud. The maize will be good this year.'),dry:X('ฝนมาช้า น้ำไม่ท่วมตลิ่ง ข้าวโพดรุ่นแรกเหี่ยว','The rains come late and the river never rises over the banks. The first maize wilts.')};
const RAINNOTE14=X('ชายฝั่งอ่าวเม็กซิโกฝนชุกและน้ำท่วมทุกปี ดินริมตลิ่งที่ได้ตะกอนใหม่ปลูกข้าวโพดได้ปีละสองรอบ นักโบราณคดีบางคนเชื่อว่าผู้ปกครองโอลเมกได้อำนาจจากการคุมดินดีพวกนี้','The Gulf Coast is rainy and floods every year. Riverbank land renewed with fresh silt can grow two maize crops a year. Some archaeologists think Olmec rulers gained their power by controlling these rich lands.');
function rain14(){if(!S||S.ch!==14)return;S.rain14=S.rg==='chal'?(rnd()<.25?'dry':'ok'):(rnd()<.12?'dry':'flood');if(S.rain14==='dry')S.yt='dry'}
function v14Year(a){if(S.ch!==14)return;const e=era14(S.ya);S.era=e;
  fx({f:{elite:4,free:1,dep:0}[S.cls]||0});
  if(S.rain14==='dry'){fx({f:-4});if(rnd()<.3||!S.rainN)log(RAIN14.dry,S.rainN?null:(S.rainN=1,RAINNOTE14),'sad')}
  else if(S.rain14==='flood'&&a>=5&&!S.rainG&&rnd()<.25){S.rainG=1;fx({f:3});log(RAIN14.flood,S.rainN?null:(S.rainN=1,RAINNOTE14),'it')}
  if(a>=14&&S.car&&S.clv>=1)S.ag+=S.clv*(S.car==='trader'?1.5:1);
  if(S.focus==='job'&&S.car==='sculptor'&&a>=12){S.headP+=6+((rnd()*8)|0)+(S.clv||0)*2;
    if(S.headP>=100){S.headP=0;S.headN++;fx({p:6,b:3});if(S.headN===1){ms(X('สลักหัวหินยักษ์หัวแรกเสร็จ','Finished your first colossal head'));log(X('วันที่ล้างฝุ่นทรายออกจากหน้าหินครั้งสุดท้าย ทั้งเมืองมามุงดู หน้าที่คุณสลักมาหลายปีมองกลับมาที่ทุกคน','On the day the last sand is washed from the stone face, the whole town gathers to look. The face you have carved for years looks back at everyone.'),CARNOTE14,'big')}else log(X('หัวหินยักษ์อีกหัวที่คุณช่วยสลักเสร็จแล้ว','Another colossal head you helped carve is finished.'),null,'it')}}
  if(S.debt>0){S.debtY++;S.debt=Math.ceil(S.debt*1.2);if(S.ag>=S.debt){S.ag-=S.debt;S.debt=0;S.debtY=0;log(X('คุณใช้คืนของที่ยืมมาครบ','You repay everything you borrowed.'),null,'it')}
    else if(S.debtY>=3){S.debt=0;S.debtY=0;fx({b:-6,p:-4});log(X('คุณต้องไปทำงานให้คนที่ให้ยืมหนึ่งฤดูแทนสิ่งที่ยังไม่คืน','You must work a season for the lender in place of what you still owe.'),null,'sad')}}
  const ya=S.ya,once=(k,f)=>{if(!S.tl)S.tl={};if(S.tl[k])return;S.tl[k]=1;f()};
  if(S.rg==='slz'&&ya<=3400&&ya>=3250&&a>=8)once('plateau14',()=>{fx({h:-2,p:2});log(X('ทุกครอบครัวต้องแบกตะกร้าดินขึ้นไปถมที่ราบสูงให้สูงขึ้นอีก ไม่มีวัว ไม่มีม้า ไม่มีเกวียน มีแต่หลังคนนับพัน','Every family must carry baskets of earth up to raise the plateau higher still. No oxen, no horses, no carts: only thousands of human backs.'),X('ที่ซานลอเรนโซ คนถมดินปริมาณมหาศาลด้วยตะกร้า ทวีปอเมริกาไม่มีสัตว์ใหญ่ที่เลี้ยงไว้ลากของได้ ม้าพื้นเมืองของอเมริกาสูญพันธุ์ไปตั้งแต่กว่าหนึ่งหมื่นปีก่อน','At San Lorenzo people moved enormous amounts of earth in baskets. The Americas had no large animals that could be tamed to pull loads; America’s native horses had died out more than ten thousand years earlier.'))});
  if(S.rg==='slz'&&ya<=2945&&ya>=2905)once('fall14',()=>{S.fall14=1;fx({b:-8,f:-4});
    log(X('ผู้คนทุบหน้าของหัวหินยักษ์และบัลลังก์หิน แล้วลากไปฝังเรียงกันในร่องดิน ไม่กี่ปีต่อมา ครอบครัวส่วนใหญ่ก็ย้ายออกจากเมือง','People batter the faces of the colossal heads and stone thrones, then drag them to be buried in rows in trenches. A few years later most families have left the town.'),
      X('ราว 900 ปีก่อนคริสตกาล ซานลอเรนโซเสื่อมลง อนุสาวรีย์หลายชิ้นถูกทำลายและฝังไว้ บางคนว่าเป็นการทำลายของศัตรูหรือการกบฏ บางคนว่าเป็นพิธี “ฆ่า” อนุสาวรีย์เมื่อผู้ปกครองตาย และบางคนเชื่อว่าแม่น้ำเปลี่ยนทางจนเมืองหมดความสำคัญ ยังไม่มีใครรู้แน่','Around 900 BCE San Lorenzo declined. Many monuments were damaged and buried. Some think enemies or rebels did it, some that it was a ritual “killing” of monuments when a ruler died, and some that the river changed course and the town lost its importance. No one knows for sure.'),'sad');ms(X('อยู่ในวันที่ซานลอเรนโซร้าง','Saw San Lorenzo emptied'))});
  if(S.rg==='lav'&&ya<=2800&&ya>=2600&&a>=8)once('pyr14',()=>{fx({h:-2,p:2});log(X('เนินดินเหนียวรูปกรวยกลางเมืองสูงขึ้นทุกปี จนยืนบนยอดแล้วมองเห็นทะเล','The cone-shaped clay mound in the middle of town grows higher every year, until from its top you can see the sea.'),RNOTE14.lav)});
  if(S.rg==='lav'&&ya<=2440&&ya>=2410)once('fallv14',()=>{S.fall14=1;fx({b:-8,f:-3});log(X('ผู้ปกครองไม่อยู่แล้ว อนุสาวรีย์หลายชิ้นถูกทุบ ครอบครัวทยอยออกจากเกาะ หญ้าขึ้นบนลานพิธี','The rulers are gone. Many monuments are smashed, families drift away from the island, and grass grows over the plazas.'),X('ลาเบนตาถูกทิ้งร้างราว 400 ปีก่อนคริสตกาล นักวิชาการบางคนชี้ว่าแม่น้ำเปลี่ยนทางและตะกอนทับถม ทำให้การเกษตรและการเดินเรือรอบเมืองยากขึ้น แต่สาเหตุแท้จริงยังถกเถียงกัน','La Venta was abandoned around 400 BCE. Some scholars point to rivers shifting and silting up, making farming and canoe travel around the town harder, but the real causes are still debated.'),'sad')});
  if(S.rg==='tux'&&a>=6)once('volc14',()=>{fx({b:-1});log(X('ยอดภูเขาไฟพ่นควันจางๆ ทั้งเดือน แผ่นดินสั่นเบาๆ ตอนกลางคืน ผู้เฒ่าบอกว่าภูเขาหายใจ','The volcano’s summit breathes thin smoke all month, and the ground trembles softly at night. The old people say the mountain is breathing.'),X('เขาตุซตลาเป็นเขาภูเขาไฟ หินบะซอลต์เนื้อแน่นของหัวหินยักษ์ก็คือลาวาที่เย็นตัวจากภูเขาไฟเหล่านี้','The Tuxtlas are volcanic mountains. The dense basalt of the colossal heads is cooled lava from these volcanoes.'))});
}
function trade14Year(){const ks=Object.keys(S.inv).filter(k=>S.inv[k]>0&&k!=='grain').sort((a,b)=>INV[b].v-INV[a].v);
  if(!ks.length){if(rnd()<.4){S.ag+=1;log(X('คุณช่วยแบกห่อเกลือและปลาแห้งไปส่งหมู่บ้านต้นน้ำ ได้ข้าวโพดเป็นค่าแรง','You help carry bundles of salt and dried fish to an upriver village and are paid in maize.'),null,'it')}return}
  const k=ks[0];S.inv[k]--;const v=Math.max(1,Math.round(INV[k].v+(S.so>50?1:0)));S.ag+=v;
  log(X('คุณแลก'+INV[k].n.th+'กับพ่อค้าที่เดินทางมา ได้ของมูลค่า '+v+' หน่วย','You trade '+INV[k].n.en+' with a travelling merchant for goods worth '+v+' units'),
    S.agNote?null:(S.agNote=1,X('ชาวโอลเมกไม่มีเงินตรา ของมีค่าคือหยก หินออบซิเดียนสำหรับทำใบมีด กระจกเงาแร่เหล็ก ขนนก และเมล็ดโกโก้ ทุกอย่างต้องแบกด้วยหลังคน เพราะไม่มีสัตว์ต่างหรือล้อ','The Olmec had no money. Valuables were jade, obsidian for blades, iron-ore mirrors, feathers and cacao beans. Everything moved on human backs, for there were no pack animals and no wheels.')),'it')}
function title14(S){
  if(S.car&&S.age>=12&&S.clv>=1)return CAREERS14[S.car].L[S.clv];
  if(S.age<13)return S.cls==='elite'?X('ลูกของตระกูลผู้ปกครอง','a child of the ruling family'):X('เด็กแห่งแดนยาง','a child of the rubber land');
  if(S.car)return CAREERS14[S.car].L[S.clv];
  return {elite:X('คนในตระกูลผู้ปกครอง','one of the ruling family'),free:X('ชาวนาและชาวประมง','a farmer and fisher'),dep:X('ช่างของผู้ปกครอง','a craftsman of the ruler')}[S.cls]}
