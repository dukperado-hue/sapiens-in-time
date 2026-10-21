/* ================= v0.14 CHAPTER 10 (shown as 07): THE AEGEAN AND THE BRONZE AGE COLLAPSE ================= */
const ERA10={
 min:{a:3750,b:3450,w:.3,wp:50,n:X('ยุควังมิโนอันบนเกาะครีต','the age of the Minoan palaces on Crete')},
 myc:{a:3450,b:3225,w:.36,wp:60,n:X('ยุควังไมซีเน เมื่อการค้ารอบทะเลรุ่งเรืองที่สุด','the age of the Mycenaean palaces, when trade around the sea was at its height')},
 col:{a:3225,b:3150,w:.16,wp:55,n:X('ยุคสำริดล่มสลาย เมื่อวังและเมืองพังไล่ๆ กัน','the Bronze Age collapse, when palaces and cities fell one after another')},
 dark:{a:3150,b:3050,w:.18,wp:45,n:X('ยุคมืดของกรีก หลังวังล่มสลาย','the Greek Dark Age, after the palaces fell')}};
const era10=ya=>ya>3450?'min':ya>3225?'myc':ya>3150?'col':'dark';
const R10={
 kno:{pop:{min:15,myc:10,col:3,dark:2}},
 thr:{pop:{min:3}},
 myk:{pop:{min:3,myc:8,col:3,dark:1}},
 pyl:{pop:{myc:6,col:1}},
 uga:{pop:{min:6,myc:8,col:2}},
 enk:{pop:{min:4,myc:6,col:5,dark:3}},
 aeg:{pop:{min:40,myc:50,col:50,dark:60}}};
Object.assign(REGIONS,{
 kno:{n:X('คนอสซอส วังใหญ่ที่สุดบนเกาะครีต','Knossos, the greatest palace on Crete'),sc:'aegean',food:2,cold:0,dry:1},
 thr:{n:X('อโครตีรี เมืองท่าบนเกาะเธรา','Akrotiri, the harbour town on the island of Thera'),sc:'thera',food:2,cold:0,dry:1},
 myk:{n:X('ไมซีเน ป้อมบนเนินเขาในแผ่นดินกรีก','Mycenae, the hilltop citadel on the Greek mainland'),sc:'aegeanm',food:1,cold:0,dry:1},
 pyl:{n:X('ไพลอส วังริมทะเลทางตะวันตกของกรีก','Pylos, the palace by the sea in western Greece'),sc:'aegean',food:2,cold:0,dry:1},
 uga:{n:X('อูการิต เมืองท่าค้าขายบนชายฝั่งซีเรีย','Ugarit, the trading port on the Syrian coast'),sc:'ugarit',food:2,cold:0,dry:1},
 enk:{n:X('เอนโคมี เมืองทองแดงบนเกาะไซปรัส','Enkomi, the copper town on Cyprus'),sc:'aegean',food:2,cold:0,dry:1},
 aeg:{n:X('หมู่บ้านชาวนาริมทะเลอีเจียน','a farming village by the Aegean Sea'),sc:'aegeanv',food:2,cold:0,dry:1}});
Object.assign(COORD,{kno:[35.30,25.16],thr:[36.35,25.40],myk:[37.73,22.76],pyl:[37.03,21.70],uga:[35.60,35.78],enk:[35.17,33.88],aeg:[37.5,23.5]});
for(const k in R10){NEIGH[k]=[];VR[k]=['plain'];R3[k]={vil:99999,share:0,plant:{ya:99999,n:X('ข้าวบาร์เลย์ ข้าวสาลี มะกอก และองุ่น','barley, wheat, olives and grapes')},ani:['sheep','goat','cattle','pig'],hunt:'deer',pred:X('หมาป่า','A wolf')};
  for(const a of ['sheep','goat','cattle','pig']){DOMYA[a]=DOMYA[a]||{};DOMYA[a][k]=99999}}
DRYR.push(...Object.keys(R10));
SC.aegean={d:['#7fb9d8','#efd7a6'],n:['#0a0f24','#22233c'],far:'#9d8b6d',near:'#86784f',sea:'#2f7fa0',gr:'#a8935e',tree:'olive',aeg:1};
SC.aegeanm=Object.assign({},SC.aegean,{sea:null,far:'#8f8068',gr:'#9c8a58'});
SC.aegeanv=Object.assign({},SC.aegean,{gr:'#9a9a5c'});
SC.thera=Object.assign({},SC.aegean,{volc:1,far:'#7d6c59',gr:'#b09a6a'});
SC.ugarit=Object.assign({},SC.aegean,{tree:'palm',far:'#a99877',gr:'#b8a070'});
const RNOTE10={
 kno:X('คนอสซอสเป็นวังใหญ่ที่สุดของชาวมิโนอัน มีห้องหลายร้อยห้องรอบลานกลาง ไม่มีกำแพงป้อมล้อมรอบ อาเธอร์ อีแวนส์ขุดค้นตั้งแต่ปี 1900 และตั้งชื่อ “มิโนอัน” ตามกษัตริย์ไมนอสในตำนานกรีก เราไม่รู้ว่าชาวเกาะครีตเรียกตัวเองว่าอะไร','Knossos was the largest Minoan palace, with hundreds of rooms around a central court and no fortress walls. Arthur Evans excavated it from 1900 and named the culture “Minoan” after King Minos of Greek legend. We do not know what the Cretans called themselves.'),
 thr:X('อโครตีรีบนเกาะเธรา (ซานโตรินี) เป็นเมืองท่าที่มีบ้านสองสามชั้นและภาพเขียนฝาผนังสีสด ภูเขาไฟกลางเกาะระเบิดครั้งใหญ่และฝังเมืองไว้ใต้เถ้าถ่าน ต่างจากปอมเปอี เพราะยังไม่พบศพผู้คนเลย แสดงว่าน่าจะหนีออกไปก่อน','Akrotiri on Thera (Santorini) was a harbour town with houses of two or three storeys and brightly painted walls. The island’s volcano erupted and buried it in ash. Unlike Pompeii, no bodies have been found, so the people probably escaped first.'),
 myk:X('ไมซีเนเป็นป้อมบนเนินเขาที่มีกำแพงหินก้อนมหึมา จนชาวกรีกยุคหลังเชื่อว่ายักษ์ไซคลอปส์เป็นคนสร้าง ไฮน์ริช ชลีมันน์ขุดค้นในปี 1876 และพบหน้ากากทองคำในสุสาน ซึ่งเขาเรียกว่า “หน้ากากของอากาเมมนอน” แต่หน้ากากนี้เก่ากว่ายุคที่สงครามกรุงทรอยอาจเกิดขึ้นหลายร้อยปี','Mycenae was a hilltop citadel with walls of such huge stones that later Greeks believed the giant Cyclopes had built them. Heinrich Schliemann excavated it in 1876 and found a gold mask he called the “Mask of Agamemnon”, but it is centuries older than any possible Trojan War.'),
 pyl:X('ไพลอสเป็นวังทางตะวันตกของกรีก เมื่อวังถูกไฟไหม้ราว 1180 ปีก่อนคริสตกาล ไฟได้เผาแผ่นดินเหนียวกว่าพันแผ่นในห้องเก็บเอกสารจนแข็ง แผ่นเหล่านี้จึงรอดมาถึงเรา และบอกเราว่าวังนับแกะ แจกข้าว และกลัวอะไรในปีสุดท้าย','Pylos was a palace in western Greece. When it burned around 1180 BCE, the fire baked more than a thousand clay tablets in its archive hard, so they survived. They tell us how the palace counted sheep, handed out rations, and what it feared in its last year.'),
 uga:X('อูการิตเป็นเมืองท่าที่คึกคักที่สุดแห่งหนึ่งของทะเลเมดิเตอร์เรเนียนตะวันออก มีพ่อค้าจากอียิปต์ ฮิตไทต์ ไซปรัส และกรีก และใช้ตัวอักษรรูปลิ่มแบบใหม่ที่มีแค่ 30 ตัว ซึ่งเป็นตัวอักษรแบบแรกๆ ของโลก เมืองถูกทำลายราว 1190 ปีก่อนคริสตกาลและไม่เคยมีคนกลับมาสร้างใหม่ จนชาวนาคนหนึ่งไถนาไปเจอสุสานในปี 1928','Ugarit was one of the busiest ports of the eastern Mediterranean, with merchants from Egypt, the Hittite lands, Cyprus and Greece, and a new cuneiform alphabet of only 30 letters, one of the world’s first alphabets. It was destroyed around 1190 BCE and never rebuilt, until a farmer ploughing his field broke into a tomb in 1928.'),
 enk:X('ไซปรัสคือแหล่งทองแดงสำคัญของยุคนั้น น่าจะเป็นดินแดนที่จดหมายยุคนั้นเรียกว่า “อาลาชิยา” ทองแดงถูกหล่อเป็นแท่งรูปหนังวัวหนักราว 20–30 กิโลกรัม แล้วส่งไปทั่วทะเล เพราะสำริดต้องใช้ทองแดงผสมดีบุกราวสิบต่อหนึ่ง','Cyprus was the great copper source of the age, probably the land called “Alashiya” in letters of the time. Copper was cast into ingots shaped like an ox-hide, weighing about 20–30 kilograms, and shipped all over the sea, since bronze needed copper mixed with tin at about ten to one.'),
 aeg:X('คนส่วนใหญ่ในยุคนี้ไม่ได้อยู่ในวัง แต่อยู่ในหมู่บ้านชาวนาและคนเลี้ยงแกะ ปลูกข้าวบาร์เลย์ มะกอก และองุ่น ส่งส่วนหนึ่งของผลผลิตให้วัง หมู่บ้านเหล่านี้เองที่ยังอยู่ต่อหลังวังล่มสลาย','Most people of this age did not live in palaces but in villages of farmers and shepherds, growing barley, olives and grapes and sending part of their harvest to the palace. These villages were what carried on after the palaces fell.')};
function pickEra10(){const ks=Object.keys(ERA10);return weighted(ks.map(k=>[k,ERA10[k].w]))}
function yaFor10(e){const E=ERA10[e];return Math.round((E.b+rnd()*(E.a-E.b))/5)*5}
function pickCity10(e,ya){const ks=Object.keys(R10).filter(k=>R10[k].pop[e]&&!(k==='thr'&&ya<=3630)&&!(k==='pyl'&&ya<=3200)&&!(k==='uga'&&ya<=3210));return weighted(ks.map(k=>[k,R10[k].pop[e]]))}
const pw10=(rg,ya)=>{const e=era10(ya);return (R10[rg].pop[e]||10)*1000/(ERA10[e].wp*1e6)};
const NAMENOTE10=X('อักษรลีเนียร์เอของชาวมิโนอันยังอ่านไม่ออก ส่วนอักษรลีเนียร์บีของชาวไมซีเนอ่านออกแล้วในปี 1952 และมีชื่อคนธรรมดาหลายพันชื่อ แต่ส่วนใหญ่เป็นแค่ชื่อในบัญชีของวัง ในเกมนี้คุณจึงมีแค่ชื่อเล่น','The Minoans’ Linear A script still cannot be read. The Mycenaeans’ Linear B was deciphered in 1952 and records thousands of ordinary people’s names, but mostly as entries in palace accounts. So in this game you have only a nickname.');

/* ---------- careers ---------- */
const CAREERS10={
farmer:{n:X('ชาวนา','Farmer'),act:'sow',sk:'kn',ok:S=>S.cls!=='elite',
 L:[X('เด็กไล่นกในนาข้าวบาร์เลย์','a child who scares birds from the barley'),X('ชาวนา','a farmer'),X('ชาวนาที่มีสวนมะกอกใหญ่','a farmer with a great olive grove'),X('ผู้อาวุโสที่หมู่บ้านทั้งหมู่บ้านเชื่อฟัง','the elder the whole village listens to')]},
shepherd:{n:X('คนเลี้ยงแกะ','Shepherd'),act:'herd',sk:'sv',ok:S=>S.cls!=='elite',
 L:[X('เด็กเลี้ยงแกะ','a shepherd boy'),X('คนเลี้ยงแกะ','a shepherd'),X('คนเลี้ยงแกะที่ดูแลฝูงของวัง','a shepherd of the palace flocks'),X('ผู้ดูแลแกะหลายพันตัว','keeper of thousands of sheep')]},
potter:{n:X('ช่างปั้นหม้อ','Potter'),act:'job',scene:'craft',sk:'cr',l:X('ปั้นหม้อลายปลาหมึกบนแป้นหมุน','Throw pots painted with octopuses on the wheel'),item:'pot',ok:S=>true,
 L:[X('ลูกมือหมุนแป้น','an apprentice at the wheel'),X('ช่างปั้นหม้อ','a potter'),X('ช่างวาดลายทะเลบนไหใบใหญ่','a painter of sea creatures on great jars'),X('ช่างที่หม้อถูกส่งไปขายถึงอียิปต์','the potter whose jars are shipped to Egypt')]},
smith:{n:X('ช่างสำริด','Bronze-smith'),act:'job',scene:'smith',sk:'cr',l:X('หลอมทองแดงกับดีบุกเป็นสำริด','Melt copper and tin into bronze'),item:'bronze',ok:S=>true,
 L:[X('เด็กเป่าลมเตา','a child at the bellows'),X('ช่างสำริด','a bronze-smith'),X('ช่างหล่อดาบและหัวหอก','a caster of swords and spearheads'),X('หัวหน้าช่างสำริดของวัง','master bronze-smith of the palace')]},
weaver:{n:X('ช่างทอ','Weaver'),act:'job',scene:'weave',sk:'cr',l:X('ปั่นขนแกะและทอผ้า','Spin wool and weave cloth'),item:'wool10',ok:S=>true,
 L:[X('เด็กปั่นด้าย','a child at the spindle'),X('ช่างทอ','a weaver'),X('ช่างย้อมผ้าสีม่วงจากหอย','a dyer of shellfish purple'),X('หัวหน้าห้องทอของวัง','head of the palace weaving rooms')]},
scribe:{n:X('อาลักษณ์','Scribe'),act:'job',scene:'tablet',sk:'kn',l:X('เขียนบัญชีของวังบนแผ่นดินเหนียว','Write palace accounts on clay tablets'),ok:S=>S.cls!=='slave',
 L:[X('ลูกศิษย์อาลักษณ์','a scribe’s pupil'),X('อาลักษณ์','a scribe'),X('อาลักษณ์ผู้นับแกะของวัง','the scribe who counts the palace sheep'),X('หัวหน้าห้องเก็บเอกสารของวัง','keeper of the palace archive')]},
sailor:{n:X('กะลาสีและพ่อค้า','Sailor and trader'),act:'job',scene:'boat10',sk:'so',l:X('ล่องเรือค้าขายข้ามทะเล','Sail and trade across the sea'),ok:S=>S.cls!=='slave',
 L:[X('เด็กวิดน้ำในเรือ','a child who bails the boat'),X('กะลาสี','a sailor'),X('นายเรือที่รู้จักทุกท่า','a ship’s master who knows every harbour'),X('พ่อค้าที่มีเรือของตัวเอง','a merchant with ships of his own')]},
perfumer:{n:X('คนทำน้ำมันหอม','Perfumed-oil maker'),act:'job',scene:'oil10',sk:'cr',l:X('ต้มน้ำมันมะกอกกับกุหลาบและสมุนไพร','Boil olive oil with rose and herbs'),item:'oil10',ok:S=>S.cls!=='slave',
 L:[X('เด็กเก็บกลีบกุหลาบ','a child who gathers rose petals'),X('คนทำน้ำมันหอม','a perfumed-oil maker'),X('คนต้มน้ำมันหอมของวัง','the palace’s oil-boiler'),X('ผู้ที่น้ำมันหอมไปถึงราชสำนักอียิปต์','the one whose oils reach the Egyptian court')]},
priest:{n:X('นักบวช','Priestess or priest'),act:'temple',sk:'so',ok:S=>S.cls!=='slave',
 L:[X('เด็กช่วยงานพิธี','a child who helps at the rites'),X('นักบวช','a priestess or priest'),X('ผู้ถือกุญแจของเทวสถาน','a key-bearer of the shrine'),X('นักบวชใหญ่ที่วังทั้งวังเกรงใจ','the high priestess whom the whole palace respects')]},
warrior:{n:X('นักรบ','Warrior'),act:'job',scene:'march',sk:'sv',l:X('ฝึกขี่รถศึกและใช้หอก','Train with chariot and spear'),ok:S=>S.cls!=='slave'&&S.sex==='m',
 L:[X('เด็กเลี้ยงม้า','a boy who tends the horses'),X('นักรบ','a warrior'),X('คนขับรถศึก','a chariot driver'),X('ผู้นำทัพของวัง','leader of the palace war band')]},
fisher:{n:X('ชาวประมง','Fisher'),act:'fish',sk:'sv',ok:S=>S.cls!=='elite',
 L:[X('เด็กจับปลาหมึกในน้ำตื้น','a child who catches octopus in the shallows'),X('ชาวประมง','a fisher'),X('ชาวประมงที่ออกเรือไกลที่สุด','the fisher who sails farthest out'),X('เจ้าของเรือประมงหลายลำ','owner of many fishing boats')]}};
const CARNOTE10=X('แผ่นอักษรลีเนียร์บีบอกว่าวังไมซีเนจัดงานเป็นระบบมาก มีชื่ออาชีพหลายสิบแบบ ทั้งช่างสำริด คนต้มน้ำมันหอม คนทอผ้า คนบดข้าว คนนับแกะ และวังแจกวัตถุดิบกับปันส่วนอาหารให้ ส่วนยุคมิโนอันนั้นเราแทบไม่รู้ เพราะยังอ่านอักษรของพวกเขาไม่ออก','Linear B tablets show that the Mycenaean palaces organised work in great detail, with dozens of named trades: bronze-smiths, oil-boilers, weavers, grinders, counters of sheep. The palace handed out raw materials and food rations. Of the Minoan age we know far less, because their script still cannot be read.');
const CLS10={elite:X('ครอบครัวในวัง ใกล้ชิดกษัตริย์ (วานักซ์)','a palace family close to the king (the wanax)'),free:X('ครอบครัวชาวบ้าน มีที่ดินของตัวเอง','a family of common people with land of their own'),dep:X('คนงานของวัง ได้รับปันส่วนข้าวและมะเดื่อ','palace workers paid in rations of grain and figs'),slave:X('ทาส (โดเอโร) ของวังหรือของเทวสถาน','slaves (do-e-ro) of the palace or a shrine')};
const CLSNOTE10=X('แผ่นอักษรลีเนียร์บีที่ไพลอสบันทึกผู้หญิงหลายร้อยคนกับลูกๆ แยกตามงาน เช่น บดข้าว ปั่นด้าย พร้อมปันส่วนข้าวและมะเดื่อ หลายคนมีชื่อตามดินแดนฝั่งตะวันออกของทะเล ซึ่งอาจเป็นเชลยหรือทาส มีคำว่า “โดเอโร” ที่แปลว่าทาส และ “วานักซ์” ที่แปลว่ากษัตริย์','Linear B tablets at Pylos list hundreds of women and their children by task, such as grinding grain and spinning, with rations of grain and figs. Many are named after lands across the sea to the east and may have been captives or slaves. The tablets use do-e-ro for slave and wa-na-ka (wanax) for king.');

function init10(){const e=era10(S.ya0);
  S.era=e;S.cls=weighted([['elite',.05],['free',.58],['dep',.27],['slave',.1]]);S.settled=1;S.roleNo=1;
  S.lit=S.cls==='elite'?6:0;S.schOK=S.cls==='elite'?(rnd()<.5?1:0):(rnd()<.06?1:0);S.tabN=0;S.baked=0;S.burn10=0;
  S.ag=S.cls==='elite'?8:S.cls==='free'?2:0;S.debt=0;S.debtY=0;S.saw={};S.nameTab=0;S.left10=0;S.net=1;S.adapt10=0;
  S.field=S.cls!=='elite'?1:0;
  if(S.cls==='free'){S.herd.sheep=1+((rnd()*5)|0);S.herd.goat=(rnd()*3)|0;if(rnd()<.3)S.herd.pig=1;if(rnd()<.25)S.herd.cattle=1}
  if(S.cls==='elite'){S.herd.sheep=10+((rnd()*20)|0);S.herd.cattle=2+((rnd()*3)|0)}}
Object.assign(INV,{wool10:{n:X('ผ้าขนแกะ','woollen cloth'),v:2},oil10:{n:X('น้ำมันหอม','perfumed oil'),v:3}});

/* ---------- the year: rain, the sea and the trade network ---------- */
const RAIN10={dry:X('ฝนหน้าหนาวปีนี้มาน้อย ข้าวบาร์เลย์ขึ้นไม่เต็มนา','The winter rains are thin this year, and the barley comes up patchy.'),good:X('ฝนมาตามฤดู มะกอกออกลูกดก','The rains come on time, and the olive trees are heavy with fruit.')};
const RAINNOTE10=X('รอบทะเลอีเจียนฝนตกในหน้าหนาวเป็นหลัก หน้าร้อนแห้ง ชาวนาจึงปลูกข้าวบาร์เลย์ มะกอก และองุ่น ซึ่งทนแล้งได้ หลักฐานจากวงปีของต้นไม้ในอานาโตเลียและระดับน้ำทะเลเดดซีชี้ว่าช่วงราว 1200 ปีก่อนคริสตกาลแห้งแล้งหนัก แต่หนักแค่ไหนและนานเท่าไรยังถกเถียงกัน','Around the Aegean most rain falls in winter and summers are dry, so farmers grew barley, olives and vines, which cope with drought. Tree rings in Anatolia and falling Dead Sea levels suggest a severe dry spell around 1200 BCE, though how severe and how long is still debated.');
function rain10(){if(!S||S.ch!==10)return;const e=era10(S.ya);const dryP=e==='col'?.45:e==='dark'?.25:.14;S.rain10=rnd()<dryP?'dry':'good';S.yt=S.rain10==='dry'?'dry':'good'}
function v10Year(a){if(S.ch!==10)return;const e=era10(S.ya);S.era=e;
  fx({f:{elite:4,free:1,dep:0,slave:-1}[S.cls]||0});
  if(S.rain10==='dry'){fx({f:S.field?-5:-3});if(rnd()<.25||!S.rainN)log(RAIN10.dry,S.rainN?null:(S.rainN=1,RAINNOTE10),'sad')}
  else if(a>=5&&!S.rainG&&rnd()<.2){S.rainG=1;fx({f:3});log(RAIN10.good,S.rainN?null:(S.rainN=1,RAINNOTE10),'it')}
  if(a>=14&&S.car&&S.clv>=1)S.ag+=S.clv*(S.car==='sailor'?2:1)*(e==='col'||e==='dark'?.5:1);
  if(S.focus==='school'){S.lit=clamp(S.lit+5+(hasT('mem')?2:0)+S.kn/40,0,100)}
  if(S.focus==='job'&&S.car==='scribe')S.lit=clamp(S.lit+4,0,100);
  if(S.focus==='write'||(S.focus==='job'&&S.car==='scribe')){if(e==='dark'){if(!S.noWrite){S.noWrite=1;log(X('ไม่มีวังให้ทำบัญชีอีกแล้ว ไม่มีใครต้องการอาลักษณ์ คุณเขียนชื่อตัวเองบนดินแล้วลบทิ้ง','There is no palace left to keep accounts for, and no one needs a scribe. You write your name in the dirt and rub it out.'),X('หลังวังล่มสลาย อักษรลีเนียร์บีหายไปจากกรีกทั้งหมด กรีกไม่มีตัวอักษรใช้อีกราว 400 ปี จนรับตัวอักษรจากชาวฟินีเซียราว 800 ปีก่อนคริสตกาล แล้วกลายเป็นตัวอักษรกรีกที่ใช้มาถึงทุกวันนี้','After the palaces fell, Linear B vanished from Greece entirely. The Greeks had no writing for some 400 years, until they adopted the Phoenician letters around 800 BCE, which became the Greek alphabet still used today.'),'sad')}}
    else if(rnd()<.8){S.tabN+=S.car==='scribe'?2+((rnd()*5)|0):1;S.lit=clamp(S.lit+1,0,100);if(!S.tabFirst){S.tabFirst=1;ms(X('เขียนแผ่นดินเหนียวแผ่นแรก','Wrote your first clay tablet'))}}}
  if(S.debt>0){S.debtY++;S.debt=Math.ceil(S.debt*1.2);if(S.ag>=S.debt){S.ag-=S.debt;S.debt=0;S.debtY=0;log(X('คุณใช้คืนของที่ยืมมาครบ','You repay everything you borrowed.'),null,'it')}
    else if(S.debtY>=3){const k=Object.keys(S.herd).find(k=>S.herd[k]>0);if(k)addHerd(k,-1);S.debt=0;S.debtY=0;fx({b:-6,p:-4});log(X('คนที่ให้ยืมมาเอาสัตว์ของคุณไปแทนสิ่งที่คุณยังไม่คืน','The lender comes and takes one of your animals for what you still owe.'),null,'sad')}}
  if((e==='col'||e==='dark')&&S.net>0){S.net=e==='dark'?0:.4}
  const ya=S.ya,once=(k,f)=>{if(!S.tl)S.tl={};if(S.tl[k])return;S.tl[k]=1;f()};
  // the eruption of Thera
  if(ya<=3630&&ya>=3590&&['thr','kno','aeg'].includes(S.rg))once('thera10',()=>{
    if(S.rg==='thr'){fx({b:-10,f:-10});S.rg='kno';S.R=REGIONS.kno;S.path.push('kno');S.left10=1;
      log(X('แผ่นดินไหวหนักติดกันหลายวัน ทั้งเมืองลงเรือหนีไปเกาะครีต ไม่กี่วันต่อมา ภูเขาไฟกลางเกาะเธราระเบิด ฟ้ามืดกลางวัน เถ้าถ่านตกลงทะเลเหมือนหิมะ บ้านเกิดของคุณหายไปใต้ฝุ่นหนาหลายเมตร','For days the ground shakes hard, and the whole town takes to the boats and flees to Crete. A few days later the volcano at the heart of Thera explodes. The sky goes dark at noon and ash falls on the sea like snow. The town you were born in disappears under metres of dust.'),
        X('การระเบิดของภูเขาไฟเธราเป็นการระเบิดที่ใหญ่ที่สุดครั้งหนึ่งในประวัติศาสตร์มนุษย์ อายุยังถกเถียงกัน: วิธีคาร์บอนกัมมันตรังสีชี้ไปราว 1600 ปีก่อนคริสตกาลหรือเก่ากว่านั้นเล็กน้อย ส่วนการเทียบเครื่องปั้นดินเผากับอียิปต์ชี้ไปราว 1500 ปีก่อนคริสตกาล ที่อโครตีรีไม่พบศพผู้คน นักวิชาการส่วนใหญ่คิดว่าชาวเมืองได้คำเตือนจากแผ่นดินไหวและหนีไปก่อน','The eruption of Thera was one of the largest in human history. Its date is still argued over: radiocarbon points to around 1600 BCE or a little earlier, while comparing pottery with Egypt points to around 1500 BCE. No bodies have been found at Akrotiri; most scholars think the townspeople were warned by earthquakes and left first.'),'big');ms(X('หนีภูเขาไฟเธราระเบิด','Escaped the eruption of Thera'))}
    else{fx({f:-6,b:-3});log(X('ฟ้าทางเหนือมืดดำ เสียงระเบิดดังข้ามทะเลมาถึง เถ้าสีเทาตกลงบนนา คลื่นใหญ่ซัดเรือที่ชายฝั่งทางเหนือแตกเป็นชิ้น','The northern sky turns black and a boom rolls across the sea. Grey ash falls on the fields, and a great wave smashes the boats on the north coast.'),
        X('ชั้นเถ้าจากภูเขาไฟเธราพบบนเกาะครีตและไกลถึงอานาโตเลีย และพบตะกอนคลื่นยักษ์ที่ชายฝั่งทางเหนือของเกาะครีต แต่ชาวมิโนอันไม่ได้ล่มทันที วังยังรุ่งเรืองต่อไปอีกหลายสิบปีหรืออาจเป็นร้อยปี','Ash from Thera has been found on Crete and as far as Anatolia, and tsunami deposits on Crete’s north coast. But the Minoans did not collapse at once: their palaces went on for decades, perhaps a century.'),'sad')}});
  // Knossos changes hands
  if(ya<=3475&&ya>=3440&&['kno','aeg'].includes(S.rg))once('knoss10',()=>{fx({b:-3});log(X('วังหลายแห่งบนเกาะครีตถูกเผา คนอสซอสรอด แต่คนในวังพูดภาษาใหม่จากแผ่นดินใหญ่ และอาลักษณ์เริ่มเขียนด้วยอักษรแบบใหม่','Many palaces on Crete are burned. Knossos survives, but the people in the palace now speak a new tongue from the mainland, and the scribes begin to write a new script.'),
      X('ราว 1450 ปีก่อนคริสตกาล วังมิโนอันส่วนใหญ่ถูกทำลาย คนอสซอสดูเหมือนตกอยู่ใต้การปกครองของชาวไมซีเนจากแผ่นดินใหญ่ อักษรลีเนียร์บีที่ใช้เขียนภาษากรีกยุคแรกเข้ามาแทนลีเนียร์เอ สาเหตุยังถกเถียง ทั้งการรุกราน แผ่นดินไหว และความขัดแย้งภายใน','Around 1450 BCE most Minoan palaces were destroyed. Knossos seems to have come under Mycenaeans from the mainland, and Linear B, used to write an early form of Greek, replaced Linear A. The cause is still debated: invasion, earthquakes or conflict within.'),'sad')});
  if(ya<=3275&&ya>=3240&&S.rg==='myk')once('lion10',()=>{fx({b:2});log(X('ช่างลากหินก้อนใหญ่กว่าบ้านมาตั้งเป็นประตูป้อม ข้างบนสลักรูปสิงโตสองตัวยืนหันหน้าเข้าหาเสา','Builders haul stones bigger than a house to make the citadel gate, and above it carve two lions facing a column.'),
      X('ประตูสิงโตของไมซีเนสร้างราว 1250 ปีก่อนคริสตกาล เป็นรูปสลักขนาดใหญ่ที่เก่าที่สุดชิ้นหนึ่งในยุโรป ช่วงเดียวกันนี้ป้อมหลายแห่งในกรีกสร้างกำแพงหนาขึ้นและหาทางเก็บน้ำไว้ในป้อม เหมือนกำลังเตรียมรับมือกับอะไรบางอย่าง','The Lion Gate of Mycenae was built around 1250 BCE, one of the oldest large sculptures in Europe. Around the same time several Greek citadels thickened their walls and secured water inside them, as if preparing for something.'))});
  // the collapse, place by place
  const fall=(k,lo,hi,txt,note)=>{if(S.rg===k&&ya<=hi&&ya>=lo)once('fall10',()=>{S.burn10=1;if(S.tabN&&['kno','pyl','myk','uga'].includes(k))S.baked=1;fx({b:-12,f:-12,h:-6});S.net=.2;log(txt,note,'sad');ms(X('รอดจากวันที่เมืองถูกเผา','Survived the day the city burned'))})};
  fall('uga',3200,3215,X('ควันลอยขึ้นจากท่าเรือ เรือแปลกหน้าหลายสิบลำเกยตื้นอยู่ริมหาด ผู้คนวิ่งหนีขึ้นเขา คืนนั้นทั้งเมืองลุกเป็นไฟ','Smoke rises from the harbour. Dozens of strange ships are drawn up on the beach. People run for the hills, and that night the whole city burns.'),
    X('อูการิตถูกทำลายราว 1190 ปีก่อนคริสตกาล ในซากเมืองพบหัวลูกศรกระจายอยู่ตามถนน และไม่มีใครกลับมาสร้างเมืองใหม่อีกเลย','Ugarit was destroyed around 1190 BCE. Arrowheads lie scattered in its streets, and no one ever rebuilt the city.'));
  fall('pyl',3175,3195,X('ไฟลุกท่วมวังกลางดึก หลังคาถล่มลงบนห้องเก็บน้ำมันจนไฟโหมแรงขึ้นอีก รุ่งเช้าเหลือแต่กำแพงดำ','Fire sweeps through the palace in the night. The roof falls into the oil stores and the flames roar higher. By morning only blackened walls are left.'),
    X('วังไพลอสถูกไฟไหม้ราว 1180 ปีก่อนคริสตกาลและไม่เคยถูกสร้างใหม่ ไฟที่ทำลายวังได้เผาแผ่นดินเหนียวในห้องเอกสารจนแข็งเหมือนกระเบื้อง บัญชีปีสุดท้ายของวังจึงรอดมาถึงเรา','The palace of Pylos burned around 1180 BCE and was never rebuilt. The fire that destroyed it baked the clay tablets in its archive as hard as tile, so the palace’s last year of accounts survives.'));
  fall('myk',3180,3200,X('ไฟไหม้บ้านในป้อมหลายหลัง ใครเป็นคนจุดไม่มีใครรู้ บางคนว่าศัตรู บางคนว่าคนในเมืองเอง','Fire takes many houses inside the citadel. No one knows who set it: some say enemies, some say the townspeople themselves.'),
    X('ไมซีเนเสียหายจากแผ่นดินไหวราว 1250 ปีก่อนคริสตกาล แล้วถูกไฟไหม้ราว 1190 ปีก่อนคริสตกาล ยังไม่รู้ว่าใครหรืออะไรเป็นต้นเหตุ ผู้คนยังอยู่ต่ออีกพักหนึ่ง แต่ไม่มีวังอีกแล้ว','Mycenae was damaged by an earthquake around 1250 BCE and burned around 1190 BCE. Who or what caused it is unknown. People lived on there for a while, but there was no palace any more.'));
  fall('kno',3175,3215,X('วังคนอสซอสร้างไปทีละส่วน ห้องเก็บของว่าง ไม่มีเรือจากแผ่นดินใหญ่มาอีก ครอบครัวหลายบ้านย้ายขึ้นไปอยู่บนภูเขาสูงที่ศัตรูขึ้นไปไม่ถึง','The palace of Knossos empties room by room. The stores are bare and no ships come from the mainland. Many families move high into the mountains, where no enemy can reach them.'),
    X('ช่วงนี้ชาวเกาะครีตหลายกลุ่มย้ายไปตั้งหมู่บ้านบนภูเขาสูงที่ป้องกันตัวง่าย เช่น การ์ฟีที่สูงกว่า 1,100 เมตร นักโบราณคดีเรียกว่า “แหล่งหลบภัย”','At this time many Cretans moved to high mountain villages that were easy to defend, such as Karphi at more than 1,100 metres. Archaeologists call them “refuge settlements”.'));
  if(ya<=3205&&ya>=3170&&['aeg','enk'].includes(S.rg))once('fallv10',()=>{fx({f:3,b:-2});log(X('อาลักษณ์ของวังไม่มาเก็บข้าวอีกแล้ว ข่าวมาว่าวังถูกเผา ปีนี้เป็นปีแรกที่หมู่บ้านได้เก็บข้าวไว้เองทั้งหมด แต่ก็ไม่มีใครให้แลกของด้วยเหมือนกัน','The palace scribes no longer come for the harvest. Word comes that the palace has burned. For the first time the village keeps all its grain, but there is no one to trade with either.'),
      X('เมื่อวังล่ม ระบบเก็บผลผลิตแล้วแจกคืนก็หายไปด้วย หมู่บ้านที่ปลูกกินเองได้ อยู่ต่อได้ แต่ช่างฝีมือ อาลักษณ์ และพ่อค้าที่พึ่งวังตกงานทันที','When the palaces fell, the system of collecting produce and handing it back went with them. Villages that fed themselves carried on, but the craftsmen, scribes and merchants who depended on the palace lost their work overnight.'),'sad')});
  if(ya<=3205&&ya>=3175&&['enk','aeg','kno'].includes(S.rg))once('egypt10',()=>{fx({kn:2});log(X('คนเรือที่หนีมาจากทางใต้เล่าว่า ฟาโรห์แห่งอียิปต์รบชนะ “ชาวทะเล” ที่ปากแม่น้ำไนล์ และสลักภาพการรบไว้บนกำแพงวิหาร','Sailors fleeing from the south say the pharaoh of Egypt has beaten the “Sea Peoples” at the mouth of the Nile and carved the battle on a temple wall.'),
      X('ฟาโรห์รามเสสที่ 3 สลักภาพการรบกับ “ชาวทะเล” ไว้ที่วิหารเมดิเนตฮาบู ราว 1177 ปีก่อนคริสตกาล ชื่อ “ชาวทะเล” นักวิชาการยุคใหม่เป็นคนตั้ง พวกเขาน่าจะเป็นหลายกลุ่ม ทั้งโจรสลัด นักรบรับจ้าง และครอบครัวอพยพที่หนีความแห้งแล้งและสงคราม กลุ่มหนึ่งชื่อเปเลเซต น่าจะเป็นชาวฟิลิสเตียในคัมภีร์ไบเบิล','Ramesses III carved his battle against the “Sea Peoples” on his temple at Medinet Habu around 1177 BCE. The name “Sea Peoples” was coined by modern scholars. They were probably many groups: pirates, mercenaries and whole families fleeing drought and war. One group, the Peleset, were probably the Philistines of the Bible.'))});
  if(ya<=3150&&ya>=3100)once('dark10',()=>{fx({b:-2});log(X('ไม่มีใครสร้างบ้านหินหลังใหญ่อีกแล้ว คนในหมู่บ้านน้อยลงทุกปี หม้อที่ใช้กันก็เรียบง่ายลง ไม่มีใครวาดลายสวยๆ เหมือนสมัยปู่ย่า','No one builds big stone houses any more. There are fewer people in the village every year, and the pots are plainer; no one paints them as finely as in your grandparents’ day.'),
      X('หลังวังล่มสลาย ประชากรกรีกน่าจะลดลงมาก หมู่บ้านเล็กลงและอยู่ห่างกัน การค้าทางไกลแทบหยุด แต่ช่วงนี้เองเหล็กเริ่มแพร่เข้ามา เหล็กหาง่ายกว่าดีบุก ไม่ต้องพึ่งเส้นทางการค้าข้ามทะเล','After the palaces fell, Greece’s population probably dropped sharply. Villages became smaller and farther apart, and long-distance trade almost stopped. Yet in this time iron began to spread: iron ore was easier to find than tin, so it did not depend on trade routes across the sea.'))});
}
function trade10Year(){const ks=Object.keys(S.inv).filter(k=>S.inv[k]>0&&k!=='grain').sort((a,b)=>INV[b].v-INV[a].v);
  if(!ks.length){if(rnd()<.4){S.ag+=1;log(X('คุณช่วยขนไหน้ำมันลงเรือที่ท่า ได้ค่าแรงเป็นข้าวบาร์เลย์กับมะเดื่อ','You help carry oil jars onto the ships and are paid in barley and figs.'),null,'it')}return}
  const k=ks[0];S.inv[k]--;const v=Math.max(1,Math.round((INV[k].v+(S.so>50?1:0))*(S.net>.5?1:.5)));S.ag+=v;
  log(X('คุณแลก'+INV[k].n.th+'ที่ท่าเรือ ได้ของมูลค่า '+v+' หน่วย','You trade '+INV[k].n.en+' at the harbour for goods worth '+v+' units'),
    S.agNote?null:(S.agNote=1,X('ในยุคนี้ยังไม่มีเหรียญ วังเก็บผลผลิตไว้แล้วแจกคืนเป็นปันส่วน ส่วนการค้าข้ามทะเลชั่งด้วยทองแดง เงิน หรือทอง เรือที่จมนอกชายฝั่งอูลูบูรุนในตุรกีราว 1300 ปีก่อนคริสตกาลบรรทุกแท่งทองแดงราว 10 ตันกับดีบุกราว 1 ตัน พอทำสำริดได้ราว 11 ตัน พร้อมแท่งแก้ว งาช้าง และเครื่องประดับจากหลายดินแดน','There were no coins yet. Palaces gathered produce and handed it back as rations, while sea trade was weighed in copper, silver or gold. A ship that sank off Uluburun in Turkey around 1300 BCE carried about 10 tons of copper and about 1 ton of tin, enough for some 11 tons of bronze, along with glass ingots, ivory and jewellery from many lands.')),'it')}
function title10(S){
  if(S.car&&S.age>=12&&S.clv>=1)return CAREERS10[S.car].L[S.clv];
  if(S.age<13)return S.cls==='elite'?X('ลูกของคนในวัง','a child of the palace'):X('เด็กริมทะเลอีเจียน','a child of the Aegean');
  if(S.car)return CAREERS10[S.car].L[S.clv];
  if(S.lit>=60)return X('ผู้รู้หนังสือ หนึ่งในคนจำนวนน้อย','one of the few who can write');
  return {elite:X('คนในวัง','a member of the palace'),free:X('ชาวนาและชาวประมง','a farmer and fisher'),dep:X('คนงานของวัง','a palace worker'),slave:X('ทาสของวัง','a palace slave')}[S.cls]}
