/* ---------- Greek names ---------- */
const NM16={m:[['ฟิลิปโปส','Philippos',X('คนรักม้า','lover of horses')],['นิคิอัส','Nikias',X('ชัยชนะ','victory')],['ธีโอโดรอส','Theodoros',X('ของขวัญจากเทพเจ้า','gift of the gods')],['ดีมีทริออส','Demetrios',X('ผู้เป็นของเทพีดีมิเทอร์','belonging to Demeter')],
  ['คัลลิอัส','Kallias',X('ความงาม','beauty')],['คลีออน','Kleon',X('ชื่อเสียง','glory')],['อากาธอน','Agathon',X('คนดี','the good one')],['ทีมอน','Timon',X('เกียรติ','honour')],['อริสโตคลีส','Aristokles',X('ชื่อเสียงที่ดีที่สุด','best glory')],['กลอคอส','Glaukos',X('สีเทาอมฟ้าของทะเล','sea-grey')],['ซานธิปโปส','Xanthippos',X('ม้าสีทอง','golden horse')]],
 f:[['ไอรีนี','Eirene',X('สันติภาพ','peace')],['เมลิสซา','Melissa',X('ผึ้ง','bee')],['โคลอี','Chloe',X('หน่ออ่อนสีเขียว','green shoot')],['ฟีบี','Phoibe',X('ผู้ส่องสว่าง','the bright one')],['ธีโอโดรา','Theodora',X('ของขวัญจากเทพเจ้า','gift of the gods')],
  ['นิคาเรตี','Nikarete',X('ชัยชนะของความดี','victory of virtue')],['กลีเคอรา','Glykera',X('ความหวาน','sweetness')],['อาสปาเซีย','Aspasia',X('ผู้ได้รับการต้อนรับ','the welcome one')],['คัลลิสโต','Kallisto',X('งามที่สุด','most beautiful')],['อาร์คิปปี','Archippe',X('ผู้นำม้า','mistress of horses')]],
 sm:[['มาเนส','Manes',X('ชื่อทาสที่มักตั้งให้ชาวฟรีเจีย','a name often given to Phrygian slaves')],['ซีรอส','Syros',X('ชาวซีเรีย','the Syrian')],['เกตัส','Getas',X('ชาวเกเท จากทางเหนือ','the Getan, from the north')]],
 sf:[['ธรัตตา','Thratta',X('หญิงชาวทราเซีย','the Thracian woman')],['ซีรา','Syra',X('หญิงชาวซีเรีย','the Syrian woman')],['ลีดี','Lyde',X('หญิงชาวลิเดีย','the Lydian woman')]]};
function gen16(sex,slave){const set=NM16[(slave?'s':'')+(sex==='f'?'f':'m')];const p=pick(set);return{th:p[0],en:p[1],m:p[2]}}
const gn16X=sx=>{const n=gen16(sx,false);return X(n.th,n.en)};
function mkName16(S){const n=gen16(S.sex,S.cls==='slave'),fa=gen16('m',false);S.nm16={...n,fa};return X(n.th,n.en)}
function nameNote16(S){const n=S.nm16;if(!n)return NAMENOTE16;
  if(S.cls==='slave')return X('ชื่อของคุณ “'+n.th+'” แปลว่า '+n.m.th+' ทาสในกรีกมักถูกเรียกด้วยชื่อที่บอกว่ามาจากไหน ไม่ใช่ชื่อที่พ่อแม่ตั้ง','Your name, '+n.en+', means “'+n.m.en+'”. Slaves in Greece were often called by a name that said where they came from, not the name their parents gave them.');
  return X('ชื่อของคุณ “'+n.th+'” แปลว่า '+n.m.th+' ชาวกรีกมีชื่อเดียว ตามด้วยชื่อพ่อ คุณคือ '+n.th+' ลูกของ'+n.fa.th+' ชื่อในเกมเป็นชื่อกรีกจริง แต่ตัวคนแต่งขึ้น','Your name, '+n.en+', means “'+n.m.en+'”. Greeks had one name, followed by their father’s: you are '+n.en+', child of '+n.fa.en+'. The names in the game are real Greek names; the people are invented.')}

/* ---------- chapter 16 events ---------- */
const E16=e=>Object.assign({ch:16},e);
const sea16=S=>S.rg!=='vil'&&S.rg!=='spa';
const EV16=[
E16({a:[5,70],w:1.4,x:X('ปลายฤดูใบไม้ร่วง ทั้งครอบครัวตีกิ่งมะกอกด้วยไม้ยาว ลูกมะกอกร่วงลงผ้าที่ปูไว้ใต้ต้นเหมือนฝน','In late autumn the whole family beats the olive branches with long poles, and the olives rain down onto cloths spread beneath.'),n:X('มะกอกเป็นพืชสำคัญที่สุดของกรีก น้ำมันมะกอกใช้กิน จุดตะเกียง ทาตัวหลังอาบน้ำ และเป็นรางวัลในการแข่งขัน ต้นมะกอกต้องใช้เวลาหลายปีกว่าจะให้ผล ศัตรูที่ตัดต้นมะกอกจึงทำร้ายครอบครัวไปหลายชั่วคน','The olive was Greece’s most important crop. Its oil was eaten, burned in lamps, rubbed on the body after bathing and given as prizes. Olive trees take years to bear fruit, so an enemy who cut them down harmed a family for generations.')}),
E16({a:[6,70],w:1.2,cond:sea16,x:X('ลมเหนือพัดแรงทั้งเดือน เรือทุกลำต้องจอดในท่า พ่อค้าบ่นว่าไหเหล้าองุ่นจะเปรี้ยวก่อนได้ขาย','The north wind blows hard all month and every ship stays in harbour. The traders complain their wine will sour before it sells.'),n:X('ลมเหนือแรงในฤดูร้อนของทะเลอีเจียนเรียกว่า “เมลเทมี” ชาวกรีกเดินเรือส่วนใหญ่ในฤดูร้อนและแทบไม่ออกทะเลในฤดูหนาว','The strong summer north wind of the Aegean is the meltemi. Greeks sailed mostly in summer and hardly ever put to sea in winter.')}),
E16({a:[6,70],w:1.2,cond:S=>S.rg!=='vil',x:X('ที่อะกอรา คนขายปลาตะโกนราคา นักการเมืองยืนพูดบนแท่นหิน คนเถียงกันเรื่องสงคราม และหมาวิ่งขโมยปลาหมึก','In the agora fishmongers shout prices, a politician speaks from a stone platform, people argue about the war, and a dog runs off with an octopus.'),n:X('อะกอราคือลานกลางเมืองกรีก เป็นทั้งตลาด ศาล ที่ประชุม และที่เดินเล่น ผู้หญิงที่มีฐานะมักไม่ออกไปตลาดเอง ทาสหรือผู้ชายในบ้านไปแทน','The agora was the heart of a Greek town: market, law court, meeting place and promenade. Women of good family seldom went to market themselves; slaves or the men of the house went instead.')}),
E16({a:[6,70],w:1,x:X('ครอบครัวเอาขนมรูปวัวไปถวายที่แท่นบูชา เพราะไม่มีเงินซื้อวัวจริง','The family brings a cake shaped like an ox to the altar, since they cannot afford a real one.'),n:X('ชาวกรีกบูชาเทพด้วยการฆ่าสัตว์ แล้วแบ่งเนื้อกินกันในงานเลี้ยง เทพได้กระดูกห่อไขมันที่เผาให้ควันลอยขึ้นฟ้า ตำนานเล่าว่าโพรมีเธียสหลอกซุสให้เลือกส่วนนั้น ✦ คนจนถวายขนม ผลไม้ หรือรูปสัตว์ดินเผาแทน','Greeks worshipped by sacrificing animals and sharing the meat at a feast; the gods got the bones wrapped in fat, burned so the smoke rose to heaven. Myth says Prometheus tricked Zeus into choosing that share ✦. The poor offered cakes, fruit or clay animal figures instead.')}),
E16({a:[8,70],w:1.1,cond:S=>S.rg!=='spa',x:X('เด็กผู้ชายวิ่งแข่งเปลือยกายในโรงยิม ชายแก่นั่งดูและวิจารณ์ท่าวิ่งของทุกคน','Naked boys race in the gymnasium while old men sit watching and criticising everyone’s running.'),n:X('คำว่ายิมนาเซียมมาจากคำกรีก “ยุมโนส” แปลว่าเปลือย ชาวกรีกฝึกกีฬาและแข่งขันแบบเปลือย และถือว่าร่างกายที่ฝึกมาดีเป็นส่วนหนึ่งของการเป็นพลเมืองที่ดี','The word gymnasium comes from the Greek gymnos, “naked”: Greeks trained and competed naked, and thought a well-trained body part of being a good citizen.')}),
E16({a:[6,70],w:1,cond:S=>S.rg!=='vil',x:X('หมอดูผ่าท้องแกะในพิธีแล้วดูตับ บอกว่าเทพอนุญาตให้เดินทัพได้ แม่ทัพยิ้ม','A seer cuts open a sheep at the rites and studies its liver. He says the gods allow the army to march, and the general smiles.'),n:X('ก่อนตัดสินใจเรื่องสำคัญ ชาวกรีกมักดูลางจากตับของสัตว์ที่บูชายัญ จากนก หรือถามคำทำนายที่เดลฟี คำทำนายมักกำกวมจนตีความได้หลายทาง','Before important decisions Greeks often read omens from the livers of sacrificed animals or from birds, or consulted the oracle at Delphi, whose answers were often ambiguous enough to read many ways.')}),
E16({a:[5,70],w:1.1,x:X('ตะเกียงน้ำมันมะกอกริบหรี่ในห้อง แม่ปั่นด้ายขนแกะ เล่าเรื่องเพเนโลพีที่ทอผ้ากลางวันแล้วแอบเลาะตอนกลางคืน','An olive-oil lamp flickers in the room. Mother spins wool and tells of Penelope, who wove by day and secretly unpicked her work at night.')}),
E16({a:[8,70],w:1,cond:S=>S.rg==='ath'&&S.ya<=2500,x:X('ทุกสี่ปีในงานแพนาธีเนีย ขบวนแห่ยาวทั้งเมืองนำผ้าคลุมผืนใหม่ไปถวายรูปปั้นเทพีอะธีนา ผ้าทอโดยเด็กสาวและผู้หญิงชาวเอเธนส์','Every four years at the Panathenaia a procession the length of the city carries a new robe to Athena’s statue. Girls and women of Athens have woven it.'),n:X('ภาพสลักขบวนแห่นี้อยู่บนผนังของพาร์เธนอน ภาพสลักส่วนใหญ่ถูกนำไปอังกฤษในต้นศตวรรษที่ 19 และอยู่ในบริติชมิวเซียมทุกวันนี้ กรีซยังเรียกร้องให้คืนมาจนถึงวันนี้','The procession was carved on the walls of the Parthenon. Most of the carvings were taken to Britain in the early 19th century and are in the British Museum today; Greece is still asking for them back.')}),
E16({a:[4,70],w:.8,once:1,cond:S=>S.rg==='spa'&&S.ya<=2490&&S.ya>=2488,fx:{b:-8,h:-6},x:X('แผ่นดินไหวรุนแรงจนบ้านในสปาร์ตาพังเกือบหมด ไม่นานเฮลอตทั่วแคว้นก็ลุกขึ้นกบฏ','An earthquake brings down almost every house in Sparta. Soon the helots across the land rise in revolt.'),n:X('แผ่นดินไหวใหญ่ที่สปาร์ตาราว 464 ปีก่อนคริสตกาลคร่าชีวิตคนจำนวนมาก และตามมาด้วยการกบฏของเฮลอตที่กินเวลาหลายปี สปาร์ตาซึ่งกลัวเฮลอตมาตลอดยิ่งเข้มงวดขึ้น','The great earthquake at Sparta around 464 BCE killed many people and was followed by a helot revolt that lasted years. Sparta, always afraid of the helots, grew harsher still.'),c:'sad'}),
E16({a:[3,70],w:1.6,once:1,cond:S=>S.rg==='ath'&&S.ya<=2455&&S.ya>=2453,fxF:S=>{if(!S.sick){S.sick={k:'plague16',y:0};S.yr+=.05}fx({h:-14,b:-6})},x:X('ในเมืองที่แออัด คนเริ่มมีไข้สูง ตาแดง ไอ และกระหายน้ำจนกระโดดลงบ่อ ศพกองอยู่ข้างวิหาร ไม่มีหมอคนไหนรักษาได้ และหมอก็ตายมากที่สุด','In the crowded city people start running high fevers, with red eyes, coughs and a thirst so great they throw themselves into wells. Bodies pile up by the temples. No doctor can cure it, and the doctors die most of all.'),n:X('โรคระบาดแห่งเอเธนส์ในปี 430 ปีก่อนคริสตกาล อาจคร่าชีวิตคนในเมืองไปหนึ่งในสี่ถึงหนึ่งในสาม รวมทั้งเพริคลีสในปีต่อมา ธิวซิดิดีสติดโรคแต่รอด และบันทึกอาการไว้ละเอียด นักวิทยาศาสตร์ยังไม่รู้แน่ว่าเป็นโรคอะไร อาจเป็นไข้รากสาดน้อยหรือไข้รากสาดใหญ่','The plague of Athens in 430 BCE may have killed a quarter to a third of the city, Pericles among them the next year. Thucydides caught it, survived and described it in detail. Scientists still do not know what it was; typhoid and typhus are candidates.'),c:'sad'}),
E16({a:[6,70],w:1,cond:S=>S.rg==='ale',x:X('กลางคืน ไฟบนยอดประภาคารฟาโรสส่องไกลจนคนบนเรือเห็นก่อนเห็นแผ่นดิน','At night the fire atop the Pharos lighthouse shines so far that sailors see it before they see land.'),n:X('ประภาคารฟาโรสสร้างเสร็จราว 280 ปีก่อนคริสตกาล อาจสูงกว่า 100 เมตร เป็นหนึ่งในเจ็ดสิ่งมหัศจรรย์ของโลกยุคโบราณ และพังลงจากแผ่นดินไหวในยุคกลาง คำว่า “ประภาคาร” ในหลายภาษา เช่น phare ในภาษาฝรั่งเศส มาจากชื่อฟาโรส','The Pharos lighthouse was completed around 280 BCE and may have stood over 100 metres tall. One of the Seven Wonders of the ancient world, it fell in medieval earthquakes. The word for lighthouse in several languages, such as French phare, comes from Pharos.')}),
E16({a:[6,70],w:1,cond:S=>S.rg==='ale',x:X('ในตลาดของอเล็กซานเดรีย คุณได้ยินภาษากรีก อียิปต์ ฮีบรู และอราเมอิกในวันเดียว','In the market of Alexandria you hear Greek, Egyptian, Hebrew and Aramaic all in one day.'),n:X('หลังอเล็กซานเดอร์ ภาษากรีกกลายเป็นภาษากลางตั้งแต่อียิปต์ถึงอัฟกานิสถาน คัมภีร์ฮีบรูถูกแปลเป็นภาษากรีกที่อเล็กซานเดรียในช่วงนี้ เรียกว่า “ฉบับเจ็ดสิบ” และภาษากรีกยังเป็นภาษาที่เขียนพันธสัญญาใหม่ในอีกหลายร้อยปีต่อมา','After Alexander, Greek became the common language from Egypt to Afghanistan. The Hebrew scriptures were translated into Greek at Alexandria in this period, the Septuagint, and Greek would later be the language of the New Testament.')}),
E16({a:[6,70],w:1,cond:S=>S.rg==='vil',x:X('คนเลี้ยงแพะเป่าขลุ่ยปีศาจแพนบนเขา เสียงก้องไปทั้งหุบ','A goatherd plays the pipes of Pan on the mountain, and the sound fills the valley.'),n:RNOTE16.vil}),
E16({a:[8,70],w:1,cond:S=>S.rg==='syr'||S.rg==='mas',x:X('ชาวบ้านพื้นเมืองที่ไม่ใช่ชาวกรีกเอาข้าวสาลีและขนสัตว์มาแลกเหล้าองุ่นและไหดินเผาลายสวย','Local people who are not Greek bring wheat and wool to trade for wine and handsome painted jars.'),n:X('อาณานิคมกรีกอยู่ท่ามกลางคนพื้นเมือง ทั้งชาวซิเคลในซิซิลีและชาวเคลต์รอบมัสซาเลีย ชาวเคลต์รับวัฒนธรรมการดื่มเหล้าองุ่นจากกรีก ไหผสมเหล้าสัมฤทธิ์ของกรีกใบใหญ่ที่สุดที่รู้จักพบในหลุมศพของหญิงชาวเคลต์ที่วิกซ์ ในฝรั่งเศส','Greek colonies lived among native peoples: the Sikels in Sicily, the Celts around Massalia. The Celts took up Greek wine-drinking; the largest Greek bronze wine-mixing bowl known was found in the grave of a Celtic woman at Vix, in France.')}),
E16({a:[45,90],w:1.2,x:X('ข้อเข่าของคุณปวดทุกครั้งที่ลมหนาวมา คุณนั่งที่ระเบียงบ้าน ฟังเด็กๆ ท่องโฮเมอร์ผิดๆ ถูกๆ','Your knees ache whenever the cold wind blows. You sit in the porch listening to the children mangle their Homer.')}),
E16({a:[45,90],w:1,cond:S=>S.rg!=='vil',x:X('ชายหนุ่มกลุ่มหนึ่งเถียงกันว่าคนรุ่นใหม่ไม่เคารพผู้ใหญ่ คุณหัวเราะเพราะได้ยินเรื่องนี้มาตั้งแต่เด็ก','Some young men argue that the young no longer respect their elders. You laugh, having heard the same complaint since you were a child.')})];
const AMB16=[X('จั๊กจั่นร้องดังในต้นมะกอกตอนเที่ยง','Cicadas shrill in the olive trees at noon.'),X('ลาร้องอยู่ข้างบ่อน้ำ','A donkey brays by the well.'),X('กลิ่นขนมปังและควันไม้ลอยจากเตา','The smell of bread and woodsmoke drifts from the ovens.'),X('เสียงค้อนจากโรงตีเหล็กดังทั้งวัน','Hammers ring from the smithies all day.'),
 X('เด็กๆ เล่นลูกเต๋ากระดูกแพะในซอย','Children play knucklebones in the alley.'),X('เสียงพิณลอยมาจากบ้านหลังหนึ่ง','Lyre music drifts from a house.'),X('ผู้หญิงหาบไหน้ำกลับจากน้ำพุ','Women carry water jars home from the fountain.'),X('ลมทะเลพัดกลิ่นเกลือมาถึงบ้าน','The sea breeze carries the smell of salt to the house.'),
 X('แพะกระดิ่งดังอยู่บนเนินเขา','Goat bells clink on the hillside.'),X('นกฮูกตัวเล็กร้องจากหลังคา นกของเทพีอะธีนา','A little owl calls from the roof: Athena’s bird.')];
function amb16(){return pick(AMB16)}
QUAKE.push('spa','cor','mil','les','syr','ath');CYCL.push('ath','cor','mil','les','syr','mas','ale');
DIS.plague16={n:X('โรคระบาดแห่งเอเธนส์','the plague of Athens'),h:-20,rg:['__none'],yrs:1};CAUSE.d_plague16=X('ป่วยด้วยโรคระบาดแห่งเอเธนส์','the plague of Athens');
DST.drought.x16=X('ฝนหน้าหนาวไม่มาเลย ลำธารแห้ง ข้าวบาร์เลย์บนเนินเขาตายหมด ทุกบ้านต้องซื้อข้าวจากเรือที่มาจากทะเลดำ','The winter rains never come. The streams dry up and the barley on the hillsides dies. Every household must buy grain from the Black Sea ships.');
DST.quake.x16=X('แผ่นดินไหวครั้งใหญ่ เสาวิหารล้มระเนระนาด บ้านดินถล่ม','A great earthquake topples temple columns like skittles and brings the mud-brick houses down.');
DST.storm.x16=X('พายุฤดูหนาวพัดกระหน่ำ เรือในท่าแตกหลายลำ หลังคากระเบื้องปลิวว่อน','A winter storm lashes the coast, smashing ships in the harbour and sending roof tiles flying.');
DST.flood.x16=X('ฝนตกหนักจนน้ำป่าไหลลงหุบเขา พัดกำแพงขั้นบันไดและต้นองุ่นหายไป','Torrential rain sends a flash flood down the ravine, sweeping away terrace walls and vines.');
CAUSE.war16=X('บาดแผลจากการรบ','wounds from battle');CAUSE.sea16=X('เรือล่มกลางทะเล','a shipwreck');

/* ---------- endings ---------- */
const EPI16={
 arch:X('ไม่กี่ชั่วคนหลังจากคุณ เมืองกรีกที่แตกแยกกันจะรวมตัวสู้กับจักรวรรดิเปอร์เซียที่ใหญ่ที่สุดในโลก และชนะ','A few generations after you, the quarrelling Greek cities will band together against the Persian Empire, the largest in the world, and win.'),
 clas:X('หลังจากคุณ เอเธนส์และสปาร์ตาจะรบกันจนอ่อนแรงทั้งคู่ แล้วกษัตริย์จากมาซิโดเนียทางเหนือจะครองกรีกทั้งหมด และลูกชายของเขาจะพาภาษากรีกไปถึงอินเดีย','After you, Athens and Sparta will fight each other to exhaustion; then a king from Macedon in the north will master all Greece, and his son will carry the Greek language to India.'),
 hell:X('ไม่นานหลังจากคุณ โรมจะกลืนกรีกทั้งหมด แต่ชาวโรมันจะเรียนภาษากรีก จ้างครูกรีก ลอกรูปปั้นกรีก และไหว้เทพกรีกในชื่อละติน กวีโรมันคนหนึ่งเขียนว่ากรีกที่ถูกพิชิตได้พิชิตผู้พิชิตที่ป่าเถื่อน','Not long after you, Rome will swallow all of Greece. Yet Romans will learn Greek, hire Greek teachers, copy Greek statues and worship Greek gods under Latin names. A Roman poet wrote that captured Greece took her savage conqueror captive.')};
const LESSON16=X(' คำว่า “ประชาธิปไตย” ในภาษาอังกฤษ democracy มาจากภาษากรีก แปลว่า “อำนาจของประชาชน” แต่ในเอเธนส์ คนที่ออกเสียงได้คือผู้ชายที่เป็นพลเมืองอายุ 18 ปีขึ้นไป อาจเพียงร้อยละ 10–20 ของคนในนครรัฐ ผู้หญิง ทาส และคนต่างถิ่นไม่มีสิทธิ์เลย และประชาธิปไตยแบบนี้ก็ประหารโสกราตีส สิ่งที่ชาวกรีกทิ้งไว้ไม่ใช่คำตอบที่สมบูรณ์ แต่คือความคิดว่าคนธรรมดาก็ควรมีส่วนตัดสินใจเรื่องของบ้านเมือง และนิสัยตั้งคำถามว่าทำไม ซึ่งคนรุ่นหลังใช้ขยายสิทธิ์นั้นไปถึงคนที่ชาวกรีกเองไม่เคยนับ',
 ' The English word democracy comes from Greek: “power of the people”. But in Athens those who could vote were male citizens over 18, perhaps only 10–20% of the people of the city-state. Women, slaves and foreigners had no say at all, and this democracy executed Socrates. What the Greeks left was not a finished answer, but the idea that ordinary people should share in deciding the affairs of their city, and the habit of asking why, which later generations used to extend those rights to people the Greeks themselves never counted.');
const EPI16T=X(' คำที่คนทั่วโลกใช้ทุกวันนี้หลายคำมาจากภาษาของคุณ: การเมือง ประวัติศาสตร์ ปรัชญา คณิตศาสตร์ โรงละคร ดนตรี และตัวอักษรที่ใช้เขียนภาษาอังกฤษก็มาจากตัวอักษรกรีก',' Many words people around the world use today come from your language: politics, history, philosophy, mathematics, theatre, music; and the letters used to write English descend from the Greek alphabet.');
function epi16(S){const e=era16(S.ya0);let s=L(EPI16[e]);
  const met=(S.met16||[]).filter(k=>MEET16[k]);
  if(met.length)s+=L(X(' ในชีวิตเดียว คุณได้พบ ',' In one lifetime you met '))+met.map(k=>L(MEET16[k])).join(', ')+L(X(' ส่วนใหญ่ไม่มีวันรู้ว่าคุณเป็นใคร แต่คุณจำพวกเขาได้ทุกคน',', most of whom never knew who you were, though you remembered every one of them.'));
  const m=motto16(S);if(m)s+=L(X(' คำที่คุณยึดถือมาทั้งชีวิตคือ ',' The words you lived by were '))+L(m.q)+' ('+L(m.w)+').';
  if(S.trial16==='no')s+=L(X(' ในวันที่เอเธนส์ตัดสินประหารโสกราตีส คุณคือหนึ่งในเสียงข้างน้อย',' On the day Athens condemned Socrates, you were one of the minority.'));
  else if(S.trial16==='yes')s+=L(X(' ในวันที่เอเธนส์ตัดสินประหารโสกราตีส คุณอยู่กับเสียงข้างมาก',' On the day Athens condemned Socrates, you voted with the majority.'));
  if(S.sign16)s+=L(X(' แจกันที่คุณเซ็นชื่ออาจยังอยู่ในพิพิธภัณฑ์สักแห่ง ในเกมนี้',' In this game, a vase bearing your signature may still sit in some museum.'));
  if(S.fall16)s+=L(X(' คุณเห็นวันที่โครินธ์ถูกเผา ซึ่งเป็นวันที่นักประวัติศาสตร์มักใช้นับว่ากรีกโบราณสิ้นสุดลง',' You saw the day Corinth burned, which historians often use to mark the end of independent ancient Greece.'));
  return s+L(LESSON16)+L(EPI16T)}
function fun16Note(S){return X('ชาวกรีกเชื่อว่าคนตายต้องได้รับการฝังหรือเผาอย่างถูกพิธี มิฉะนั้นวิญญาณจะเร่ร่อน ผู้หญิงในครอบครัวล้างศพ แต่งตัว และร้องไห้คร่ำครวญ บางครั้งมีเหรียญใส่ในปากเป็นค่าจ้างให้คนแจวเรือคารอนพาข้ามแม่น้ำแห่งความตาย ✦ หลุมศพที่ดีมีแผ่นหินสลักภาพคนตายจับมือลาครอบครัว','Greeks believed the dead must be buried or burned with proper rites, or the soul would wander. The women of the family washed and dressed the body and sang laments. Sometimes a coin was placed in the mouth to pay Charon the ferryman across the river of the dead ✦. A good grave had a carved stone showing the dead person clasping hands in farewell with their family.')}
function fun16Opts(S,o,done,lead){
  o.push(opt(X('ใส่เหรียญในปากให้คารอน','Put a coin in the mouth for Charon'),S=>{fx({b:4});return X('เหรียญเล็กๆ วางบนลิ้น พอให้ข้ามแม่น้ำได้','A small coin on the tongue, enough for the crossing.')}));
  o.push(opt(X('ร้องเพลงคร่ำครวญทั้งคืน','Sing laments all night'),S=>{fx({b:4,so:1});return X('ผู้หญิงในบ้านร้องจนเสียงแหบ ความเศร้าที่ถูกร้องออกมาเบาลงกว่าที่เก็บไว้','The women of the house sing until they are hoarse. Grief sung aloud weighs less than grief held in.')}));
  o.push(opt(X('จ้างช่างสลักแผ่นหินหน้าหลุมศพ','Hire a carver for a gravestone'),S=>{S.ag=Math.max(0,S.ag-2);fx({b:5,p:2});return X('บนแผ่นหิน เขานั่งจับมือคุณ ทั้งคู่ไม่ร้องไห้ แต่ใครเห็นก็รู้ว่าเป็นการลาจาก','On the stone he sits clasping your hand. Neither weeps, but anyone can see it is a farewell.')}))}
function fun16Text(S){
  if(S.cls==='elite')return X('ศพของคุณถูกแห่ไปสุสานนอกกำแพงเมือง มีนักร้องคร่ำครวญที่จ้างมา และแผ่นหินสลักรูปคุณตั้งไว้ริมถนน','Your body is carried in procession to the cemetery outside the walls, with hired mourners, and a carved stone of you is set up beside the road.');
  if(S.cls==='slave')return X('คุณถูกฝังในหลุมง่ายๆ ไม่มีชื่อ แต่เพื่อนที่เป็นทาสด้วยกันวางขนมปังไว้ข้างๆ หนึ่งก้อน','You are buried in a simple grave with no name, but a fellow slave leaves a loaf of bread beside it.');
  return X('ครอบครัวล้างร่างของคุณด้วยน้ำมันมะกอก ฝังพร้อมขวดน้ำมันเล็กๆ และเหรียญหนึ่งเหรียญ','Your family washes your body with olive oil and buries you with a little oil flask and a single coin.')}
const REFLECT16={5:X('ชาวกรีกเชื่อว่าโลกเต็มไปด้วยเทพที่ทะเลาะกันเหมือนคน ถ้าคุณจะเล่าเรื่องเทพสักองค์ให้เด็กไทยวันนี้ฟัง จะเล่าเรื่องไหน','Greeks believed the world was full of gods who quarrelled like people. If you could tell a Thai child today about one of them, which story would you tell?'),
 50:X('ในเอเธนส์ คนที่ออกเสียงได้มีแค่ส่วนน้อย ทุกวันนี้ในบ้านเมืองของคุณ ใครบ้างที่ยังไม่มีเสียง','In Athens only a minority could vote. In your own country today, who still has no voice?')};

/* ---------- the vase of your life, on the death page ---------- */
function vase16Canvas(S,px){const c=document.createElement('canvas');c.width=48;c.height=56;c.style.width=px+'px';c.style.height=Math.round(px*56/48)+'px';c.style.imageRendering='pixelated';
  const x=c.getContext('2d'),R=(a,b,w,h,col)=>{x.fillStyle=col;x.fillRect(a,b,w,h)},r=srng((S.seed^0x16a5)>>>0);
  const body='#c4683a',blk='#1d1410',hi='#d98a5a';
  for(let y=0;y<56;y++){let w;if(y<4)w=22;else if(y<8)w=12;else if(y<12)w=12+(y-8)*4;else if(y<40)w=Math.round(40-Math.pow((y-24)/16,2)*10);else if(y<50)w=Math.round(30-(y-40)*1.6);else w=y<52?18:24;
    R(24-w/2,y,w,1,y<4||y>=50?blk:body)}
  for(let y=12;y<46;y++)R(24-((y<40?Math.round(40-Math.pow((y-24)/16,2)*10):Math.round(30-(y-40)*1.6))/2)+2,y,1,1,hi);
  R(5,9,4,10,blk);R(39,9,4,10,blk);R(7,11,2,6,body);R(39,11,2,6,body);
  for(let i=0;i<9;i++)R(9+i*3.4,13,2,1,blk);for(let i=0;i<10;i++)R(8+i*3.3,44,2,2,blk);
  const met=(S.met16||[]).length,n=Math.max(1,Math.min(6,met||1));const sp=30/(n+1);
  for(let i=0;i<n;i++){const fx0=Math.round(9+sp*(i+1)),fy=40,h=10+((r()*3)|0);R(fx0,fy-h,2,h-2,blk);R(fx0-1,fy-h-3,3,3,blk);if(i===0&&met){R(fx0+2,fy-h+2,3,1,blk)}
    if(r()<.5)R(fx0-2,fy-h+3,1,4,blk);else R(fx0+2,fy-h+3,1,4,blk);R(fx0-1,fy-2,1,2,blk);R(fx0+2,fy-2,1,2,blk)}
  if(!met){R(14,30,20,1,blk);R(22,24,4,6,blk)}
  return c}
function vase16Block(S){const box=document.createElement('div');box.className='seal8';box.appendChild(vase16Canvas(S,150));
  const met=(S.met16||[]).filter(k=>MEET16[k]);const p=document.createElement('p');p.className='small';
  const m=motto16(S);
  p.textContent=(met.length?L(X('บนแจกันใบนี้คือคนที่คุณได้พบ: ','On this vase are the people you met: '))+met.map(k=>L(MEET16[k])).join(', ')+'. ':'')+(m?L(m.q)+' — '+L(m.w):'')+L(X(' ภาพในเกมเป็นภาพจำลองเท่านั้น',' The game’s picture is only an imitation.'));
  box.appendChild(p);return box}

/* ---------- scenes ---------- */
function drawGreek(ctx,gy,o,now){const R=(a,b,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(a|0,b|0,w|0,h|0)};
  const mar='#e9e2d0',marD='#bdb3a0',marS='#9d927e',tile='#a8442a',wallC='#d8c8a4',burn=o.fall16;
  const W=c=>burn?mix(c,'#2a2420',.55):c;
  const house=(x,w,h)=>{R(x,gy-h+6,w,h,W(wallC));R(x-1,gy-h+4,w+2,2,W(tile));R(x+((w/2)|0)-1,gy+1,3,5,'#3a2a1c');R(x+2,gy-h+8,2,2,'#3a2a1c')};
  const temple=(x,y,cols,sc)=>{const cw=Math.round(3*sc),gap=Math.round(4*sc),w=cols*(cw+gap)-gap+4,h=Math.round(14*sc);
    R(x-2,y,w+4,2,W(marD));R(x-1,y-1,w+2,1,W(mar));
    for(let i=0;i<cols;i++){const cx=x+2+i*(cw+gap);R(cx,y-h,cw,h,W(mar));R(cx+cw-1,y-h,1,h,W(marD));R(cx-1,y-h-1,cw+2,1,W(marD))}
    R(x,y-h-3,w,2,W(mar));R(x,y-h-2,w,1,W(marS));
    for(let k=0;k<5;k++)R(x+k*2,y-h-4-k,w-k*4,1,W(k%2?mar:marD))};
  if(o.vil16){house(18,16,10);house(40,14,9);house(150,16,10);
    for(let i=0;i<5;i++)R(70+i*18,gy+2,14,1,'#8a7a50');
    for(let x=60;x<140;x+=10){R(x,gy-3,1,4,'#6a5a3a');R(x-1,gy-5,3,2,'#5f7a42')}}
  else if(o.spa16){house(14,16,9);house(36,16,9);house(150,14,8);house(170,14,9);
    temple(84,gy+2,4,.7);for(let i=0;i<3;i++)R(60+i*40,gy-1,1,6,'#8a6a44')}
  else if(o.ale16){house(10,18,12);house(32,16,10);house(166,18,12);
    const px=110,b=gy+4;R(px,b-22,18,22,W(mar));R(px+1,b-22,1,22,W(marD));R(px+3,b-36,12,14,W(mar));R(px+5,b-46,8,10,W(mar));R(px+6,b-50,6,4,W(marD));
    if(((now/300)|0)%2)R(px+7,b-54,4,4,'#ffb04a');else R(px+8,b-55,3,5,'#ff8a3a');R(px+16,b-22,2,22,W(marD))}
  else{// polis: acropolis on a hill above town
    const ath=o.ath16,hx=ath?96:120,hw=ath?92:60;
    for(let y=0;y<(ath?22:14);y++){const w=hw-y*2.4;R(hx-w/2,gy-y,w,1,mix('#9d8b6d','#86784f',y/24))}
    temple(hx-(ath?28:16),gy-(ath?21:13),ath?8:5,ath?1.2:.9);
    house(8,16,9);house(28,14,8);house(162,16,9);house(178,12,8)}
  if(burn&&((now/400)|0)%2+1)for(let i=0;i<4;i++){const sx=40+i*36+((now/300+i*7)%4);for(let j=0;j<6;j++)R(sx+Math.sin(now/500+j)*2,gy-30-j*6,4,4,'rgba(60,55,50,.45)')}
  // trireme on the sea
  if(o.sea16){const bx=((now/300)+(o.seed%50))%(220)-26,by=gy-13;R(bx,by,24,2,'#4a2f1c');R(bx+24,by+1,3,1,'#b08a3a');R(bx-2,by-2,2,3,'#4a2f1c');R(bx+2,by-1,20,1,'#7a5638');
    for(let i=0;i<6;i++){const ph=((now/200)|0)%2;R(bx+3+i*3,by+2,1,ph?3:2,'#3a2416')}R(bx+11,by-10,1,9,'#4a3020');R(bx+7,by-10,9,6,'#efe6d2');R(bx+10,by-8,3,2,'#a8442a')}}
function drawAct16(ctx,o,act,gy,now,P){const R=(x,y,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(x|0,y|0,w|0,h|0)};
  const fy=gy+18,PC='#e6dcc6',OC='#1e140e',st=o.stage||'adult',ph=st==='child'?4:6,el=st==='elder',fires=[];
  if(act==='vase16'){const spin=((now/120)|0)%4;R(94,fy-4,14,3,'#5a3a22');R(99,fy-14,4,10,'#c4683a');R(97,fy-11,8,6,'#c4683a');R(98+spin%3,fy-10,1,4,'#1d1410');
    for(let i=0;i<3;i++){R(122+i*7,fy-9,5,9,'#c4683a');R(123+i*7,fy-7,3,2,'#1d1410');R(123+i*7,fy-10,3,1,'#1d1410')}
    fig(ctx,88,fy+1,{c:PC,h:ph,elder:el,pose:'sit'});return fires}
  if(act==='row16'){const bx=60,by=gy+8,st2=((now/350)|0)%2;R(bx,by,74,4,'#4a2f1c');R(bx+74,by+2,6,2,'#b08a3a');R(bx-4,by-3,4,5,'#4a2f1c');R(bx,by-1,74,1,'#7a5638');
    for(let i=0;i<12;i++){const ox=bx+4+i*6;R(ox,by+4,1,st2?5:3,'#3a2416');R(ox+(st2?1:-1),by+(st2?9:7),2,1,'#3a2416');R(ox-1,by-3,2,2,i===5?'#c9623a':'#2a1c12')}
    R(bx+36,by-20,1,18,'#4a3020');R(bx+28,by-20,17,10,'#efe6d2');R(bx+34,by-17,5,3,'#a8442a');return fires}
  if(act==='rite16'){R(92,fy-8,16,8,'#e9e2d0');R(91,fy-9,18,2,'#bdb3a0');fires.push([100,fy-9,2]);for(let j=0;j<4;j++)R(99+Math.sin(now/400+j)*2,fy-16-j*5,3,3,'rgba(220,220,210,.5)');
    fig(ctx,118,fy+1,{c:PC,h:ph,elder:el});fig(ctx,80,fy+1,{c:OC});fig(ctx,72,fy+1,{c:OC,h:4});return fires}
  return null}
