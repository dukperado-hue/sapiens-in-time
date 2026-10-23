/* ---------- chapter 20 events ---------- */
const E20=e=>Object.assign({ch:20},e);
const town20=S=>['rjg','pat','sav','ves','var','vid','tax'].includes(S.rg);
const EV20=[
E20({a:[5,70],w:1.3,x:X('มื้อเย็นคือข้าวสวยร้อนๆ แกงถั่ว ผักต้ม และเนยใสหยดหนึ่ง ถ้าเป็นวันดีจะมีนมเปรี้ยวกับน้ำตาลอ้อยด้วย','Supper is hot rice, a stew of pulses, boiled greens and a drop of ghee. On a good day there is curd with cane sugar too.'),
 n:X('ข้าว ถั่ว เนยใส และนมเปรี้ยวเป็นอาหารหลักของลุ่มน้ำคงคาในยุคนี้ เนียรคัส แม่ทัพเรือของอเล็กซานเดอร์ ตื่นเต้นกับ “ต้นอ้อที่ให้น้ำผึ้งโดยไม่ต้องมีผึ้ง” ซึ่งก็คืออ้อยนั่นเอง คำว่า “ศรรกรา” ในภาษาสันสกฤตเดินทางไปเป็น sugar ในภาษาอังกฤษ','Rice, pulses, ghee and curd were the staples of the Ganges valley. Alexander’s admiral Nearchus marvelled at “reeds that make honey without bees”: sugar cane. The Sanskrit word sharkara travelled all the way to become English “sugar”.')}),
E20({a:[5,70],w:1.1,x:X('แม่ปั่นฝ้ายเป็นเส้นด้ายทุกเย็น เสื้อผ้าทุกชิ้นในบ้านทำจากฝ้ายที่ปลูกเอง','Every evening Mother spins cotton into thread. Every piece of clothing in the house is made from cotton you grow.'),
 n:X('อินเดียเป็นดินแดนแรกๆ ที่ปลูกฝ้ายทอผ้า เฮโรโดตัส นักประวัติศาสตร์กรีก เขียนว่าที่อินเดียมีต้นไม้ที่ให้ขนแกะ ซึ่งงามกว่าและดีกว่าขนแกะจริง ชาวกรีกไม่เคยเห็นฝ้ายมาก่อน','India was among the first lands to grow cotton for cloth. The Greek historian Herodotus wrote that India had trees bearing wool finer and better than a sheep’s; Greeks had never seen cotton.')}),
E20({a:[3,70],w:1.2,x:X('ฝนมรสุมมาถึง ท้องฟ้ามืดครึ้มทั้งวัน กบร้องทั้งคืน ทุกคนรีบดำนาให้ทันน้ำ','The monsoon arrives. The sky stays dark all day, the frogs sing all night, and everyone hurries to plant rice while the water lasts.'),
 n:X('ฤคเวทมีบทเพลงสรรเสริญกบ ที่ร้องรับฝนแรกเหมือนนักเรียนท่องตามครู ชีวิตในลุ่มน้ำคงคาขึ้นกับมรสุม ปีที่ฝนมาช้าหรือน้อยคือปีที่คนอดอยาก','The Rigveda has a hymn to the frogs, croaking at the first rains like pupils repeating their teacher. Life in the Ganges valley hung on the monsoon; a late or weak monsoon meant a hungry year.')}),
E20({a:[5,70],w:1,x:X('ยุงมาเป็นฝูงตอนน้ำท่วมขัง เด็กข้างบ้านจับไข้หนาวสั่นเป็นพักๆ ทุกสามวัน','Mosquitoes swarm over the standing water. The neighbour’s child has a fever with fits of shivering every third day.'),
 n:X('ไข้ที่จับเป็นรอบแบบนี้น่าจะเป็นมาลาเรีย ตำราการแพทย์อินเดียโบราณบรรยายไข้ที่กลับมาเป็นรอบๆ ไว้ ในยุคนี้มาลาเรียเป็นหนึ่งในสาเหตุการตายหลักของคนในที่ราบลุ่ม','A fever that returns in cycles like this was probably malaria; ancient Indian medical texts describe such recurring fevers. In this age malaria was one of the great killers of the lowland plains.')}),
E20({a:[5,70],w:1,x:X('คืนนี้เสือโคร่งลากวัวไปจากคอกบ้านท้ายหมู่บ้าน ผู้ชายถือคบไฟไปตามรอยจนถึงชายป่า แล้วหยุด','Tonight a tiger takes a cow from the pen at the end of the village. The men follow its tracks with torches to the edge of the forest, and stop.'),
 n:X('ป่าในลุ่มน้ำคงคายังกว้างใหญ่ในยุคนี้ เสือโคร่ง ช้างป่า และแรดอินเดียยังอยู่ใกล้หมู่บ้าน ศิลาจารึกของพระเจ้าอโศกฉบับหนึ่งห้ามฆ่าสัตว์หลายชนิด และพูดถึงคนป่าที่อาศัยในดินแดนของพระองค์','The forests of the Ganges valley were still vast. Tigers, wild elephants and Indian rhinos lived close to villages. One of Ashoka’s edicts forbids killing many kinds of animals, and another addresses the forest peoples within his realm.')}),
E20({a:[5,80],w:1.1,cond:S=>S.ya<=2473,x:X('วันพระ ชาวบ้านหลายคนไม่ทำงานหนัก ไปฟังธรรม และถือศีลกินข้าวมื้อเดียว','On the uposatha day many villagers do no heavy work, go to hear the teaching, and keep the precepts, eating only once.'),
 n:X('วันอุโบสถตามข้างขึ้นข้างแรมเป็นธรรมเนียมของนักบวชหลายสำนักก่อนมีศาสนาพุทธ พระวินัยเล่าว่าพระเจ้าพิมพิสารทูลขอให้ภิกษุประชุมในวันเหล่านี้เหมือนสำนักอื่น วันพระที่คนไทยถือทุกวันนี้สืบมาจากธรรมเนียมนี้','Moon-day observances were a custom of many ascetic schools before Buddhism. The Vinaya says King Bimbisara asked the Buddha to have monks meet on these days as other schools did. The Thai wan phra holy days descend from this custom.')}),
E20({a:[8,80],w:1,cond:S=>['var','pat','vil','rjg'].includes(S.rg),x:X('ตอนเช้า ผู้คนลงอาบน้ำในแม่น้ำคงคา ถัดไปไม่ไกล มีควันจากกองฟอนเผาศพลอยขึ้นจากริมฝั่ง','In the morning people bathe in the Ganges. Not far off, smoke from funeral pyres drifts up from the bank.'),
 n:X('การเผาศพริมแม่น้ำและการอาบน้ำในแม่น้ำศักดิ์สิทธิ์เป็นธรรมเนียมเก่าแก่ งานที่ป่าช้ามักเป็นของคนในกลุ่มจัณฑาล ซึ่งถูกรังเกียจเพราะงานนี้ แม้ทุกคนต้องพึ่งพวกเขาในวันสุดท้ายของชีวิต','Cremation by the river and bathing in a sacred river are ancient customs. Work at the cremation grounds usually fell to candala groups, shunned for that very work, though everyone depended on them at the end of life.')}),
E20({a:[8,70],w:1,cond:town20,x:X('มีงานรื่นเริงที่ลานเมือง มีมวยปล้ำ นักเต้น การแข่งไก่ และเหล้า คนแก่บ่นว่าสมัยนี้วัยรุ่นสนุกเกินไป','There is a festival in the town square: wrestling, dancers, cockfights and liquor. The old folk grumble that young people today have too much fun.'),
 n:X('งานรื่นเริงแบบนี้เรียกว่า “สมาช” ศิลาจารึกฉบับที่ 1 ของพระเจ้าอโศกบอกว่าพระองค์ไม่ชอบงานแบบนี้ แม้จะยอมรับว่ามีงานบางแบบที่ดี ผู้ปกครองที่ห้ามความสนุกของชาวบ้าน มีมาแล้วตั้งแต่สองพันกว่าปีก่อน','Festivals like this were called samaja. Ashoka’s first rock edict says he disapproved of them, though some kinds he thought good. Rulers frowning on ordinary people’s fun go back more than two thousand years.')}),
E20({a:[8,70],w:.9,x:X('คนเลี้ยงงูมาเปิดตะกร้าที่ลานหมู่บ้าน งูเห่ายกตัวแผ่แม่เบี้ย เด็กๆ กรีดร้องแต่ไม่ยอมไปไหน','A snake man opens his basket in the village square. The cobra rears and spreads its hood; the children shriek, but none of them leave.'),
 n:X('งูกัดเป็นสาเหตุการตายสำคัญในชนบทของอินเดียมาตลอดประวัติศาสตร์ จนทุกวันนี้อินเดียยังมีคนตายจากงูกัดหลายหมื่นคนต่อปี ไม่แปลกที่นาคได้รับการบูชาและเกรงกลัวพร้อมกัน','Snakebite has been a major killer in rural India throughout history; even today India loses tens of thousands of people a year to it. No wonder nagas were both worshipped and feared.')}),
E20({a:[10,70],w:.9,cond:S=>S.ya<=2350,x:X('หัวหน้ากิลด์ช่างไม้มาเรียกประชุมในหมู่บ้าน ทุกคนในกิลด์ต้องช่วยออกเงินให้ครอบครัวของช่างที่ตกนั่งร้านตาย','The head of the carpenters’ guild calls a meeting in the village. Every guild member must chip in for the family of a carpenter who fell from a scaffold and died.'),
 n:X('ชาดกและจารึกยุคนี้พูดถึงกิลด์ของช่างหลายประเภท ซึ่งมีหัวหน้า มีกฎ บางกิลด์รับฝากเงินและให้กู้ด้วย จารึกบางแห่งในยุคหลังบันทึกการฝากเงินไว้กับกิลด์ เพื่อเอาดอกเบี้ยไปเลี้ยงภิกษุ','Jatakas and inscriptions of this age mention guilds of many crafts, with heads and rules of their own; some even took deposits and lent money. Some later inscriptions record money deposited with guilds so that the interest would feed monks.')}),
E20({a:[45,90],w:1.1,x:X('ข้อเข่าคุณปวดเมื่อฝนมา คุณนั่งที่ระเบียงบ้าน เล่าให้เด็กๆ ฟังว่าสมัยก่อนป่ายังมาถึงหลังหมู่บ้าน','Your knees ache when the rains come. You sit on the veranda telling the young ones that the forest used to come right up behind the village.')}),
E20({a:[45,90],w:1,x:X('คุณเริ่มลืมชื่อคน แต่บทสวดที่ท่องตอนเด็กยังจำได้ทุกคำ','You are starting to forget people’s names, but the verses you learned as a child you still know word for word.'),
 n:X('ความจำที่ฝึกด้วยการท่องซ้ำตั้งแต่เด็กมักอยู่ได้นานแม้ในวัยชรา นี่คือเหตุผลหนึ่งที่วัฒนธรรมการท่องจำส่งต่อคำสอนได้หลายร้อยปีโดยไม่ต้องเขียน','Memories drilled by repetition in childhood often last into old age. That is one reason a culture of recitation could hand on teachings for centuries without writing.')})];
const AMB20=[X('กบร้องดังทั้งคืนหลังฝนตก','The frogs sing all night after the rain.'),X('นกยูงร้องจากต้นมะม่วง','A peacock calls from the mango tree.'),X('นักบวชเดินบิณฑบาตผ่านหน้าบ้านอย่างเงียบๆ','Ascetics walk past the house in silence on their alms round.'),X('ควายนอนแช่ในบ่อโคลน','Buffaloes lie wallowing in the mud pool.'),
 X('กลิ่นเนยใสลอยมาจากครัว','The smell of ghee drifts from the kitchen.'),X('เสียงกระดิ่งเกวียนดังมาจากถนน','Cart bells jingle on the road.'),X('ผู้หญิงร้องเพลงตอนดำนา','The women sing as they plant the rice.'),X('ลิงขโมยกล้วยจากระเบียง','A monkey steals bananas from the veranda.'),
 X('ควันจากไฟบูชาของพราหมณ์ลอยขึ้นตอนเช้า','Smoke from the Brahmin’s fire rite rises at dawn.'),X('เด็กๆ เล่นลูกเต๋าผลสมอใต้ต้นไทร','Children play with nut dice under the banyan.')];
function amb20(){return pick(AMB20)}
QUAKE.push('tax');CYCL.push('klg');
CAUSE.war20=X('บาดแผลจากการรบ','wounds from battle');CAUSE.snake20=X('งูเห่ากัด','a cobra bite');CAUSE.ele20=X('ช้างศึกเหยียบ','trampled by a war elephant');CAUSE.fev20=X('ไข้จับสั่น','a recurring fever');
DST.drought.x20=X('มรสุมมาช้าและน้อย นาข้าวแห้ง ราคาข้าวพุ่ง คนจนต้องเก็บหญ้าและรากไม้มากิน','The monsoon comes late and weak. The paddies dry up, the price of rice soars, and the poor gather grass and roots to eat.');
DST.flood.x20=X('แม่น้ำคงคาล้นตลิ่ง น้ำท่วมนาและหมู่บ้าน ครอบครัวของคุณหนีขึ้นไปอยู่บนเนิน','The Ganges bursts its banks, flooding fields and villages. Your family flees to higher ground.');
DST.quake.x20=X('แผ่นดินไหว กำแพงบ้านดินร้าว และหลังคาฟางพังลงมา','An earthquake cracks the mud walls, and thatched roofs come down.');
DST.storm.x20=X('พายุจากทะเลพัดเรือประมงหายไปหลายลำ','A storm off the sea carries away several fishing boats.');

/* ---------- the fate of the faiths ---------- */
const FA20={
 yak:{n:X('เทวดาประจำต้นไม้ ยักษ์ นาค และเทพีแม่','tree spirits, yakkhas, nagas and mother goddesses'),f:X('ไม่มีวัดหรือคัมภีร์ของตัวเอง แต่ไม่เคยหายไป ทุกศาสนารับมันเข้าไป ยักษ์กลายเป็นผู้พิทักษ์ประตูวัดทั้งพุทธ เชน และฮินดู ในไทยคือยักษ์หน้าประตูวัดและท้าวเวสสุวรรณ นาคกลายเป็นราวบันไดวัด','No temples or scriptures of its own, yet it never vanished: every faith took it in. Yakkhas became gate guardians of Buddhist, Jain and Hindu temples; in Thailand, the giants at temple gates and Thao Wessuwan. Nagas became temple stair-rails.')},
 veda:{n:X('พิธีบูชาไฟของพราหมณ์','the Brahmins’ fire rites'),f:X('พิธีบูชายัญด้วยสัตว์ค่อยๆ ลดลง แต่พระเวทยังถูกท่องจำปากต่อปากมากว่าสามพันปี และความเชื่อของพราหมณ์ผสมกับความศรัทธาต่อพระวิษณุ พระศิวะ และเทพท้องถิ่น จนกลายเป็นศาสนาฮินดูที่มีผู้นับถือกว่าพันล้านคน พราหมณ์ในราชสำนักไทยก็สืบสายมาจากที่นี่','Animal sacrifice slowly faded, but the Vedas were still recited mouth to mouth for over three thousand years, and Brahmin belief merged with devotion to Vishnu, Shiva and local gods into the Hinduism of over a billion people. The court Brahmins of Thailand descend from this line.')},
 bud:{n:X('สงฆ์ของพระพุทธเจ้า','the Sangha of the Buddha'),f:X('หายไปจากอินเดียเกือบหมดหลังศตวรรษที่ 13 เมื่อนาลันทาถูกทำลาย แต่รอดอยู่ในลังกา เอเชียตะวันออกเฉียงใต้ ทิเบต และเอเชียตะวันออก ในปี 2020 มีชาวพุทธราว 324 ล้านคน ในอินเดีย อัมเบดการ์และผู้ติดตามหลายแสนคนเปลี่ยนมานับถือพุทธในปี 1956','Almost vanished from India after the 13th century, when Nalanda was destroyed, but survived in Lanka, Southeast Asia, Tibet and East Asia. In 2020 there were about 324 million Buddhists. In India, Ambedkar and hundreds of thousands of followers turned to Buddhism in 1956.')},
 jain:{n:X('นักบวชนิครนถ์ของมหาวีระ','the Niganthas of Mahavira'),f:X('ไม่เคยออกจากอินเดีย และไม่เคยหายไป ทุกวันนี้มีชาวเชนราวสี่ล้านครึ่งคน หลักอหิงสาของเชนมีอิทธิพลต่อมหาตมะ คานธี','Never left India, and never vanished. There are about four and a half million Jains today, and the Jain principle of non-harm influenced Mahatma Gandhi.')},
 aji:{n:X('นักบวชอาชีวกของมักขลิ โคศาล','the Ajivikas of Makkhali Gosala'),f:X('หายไปจากอินเดียเหนือหลังราชวงศ์เมารยะ ร่องรอยสุดท้ายอยู่ในอินเดียใต้ราวศตวรรษที่ 14 ไม่มีคัมภีร์ของตัวเองเหลือเลย เรารู้จักพวกเขาจากคำของคู่แข่งเท่านั้น และจากถ้ำบาราบาร์ที่ยังเงาวาว','Faded from the north after the Mauryas; the last traces are in South India around the 14th century. None of their own scriptures survive; we know them only through rivals, and through the still-gleaming Barabar caves.')},
 lok:{n:X('สำนักวัตถุนิยมที่สอนว่าไม่มีชาติหน้า','the materialists, who taught there is no next life'),f:X('แทบไม่มีตำราของพวกเขาเหลืออยู่ เรารู้จักพวกเขาจากคนที่เขียนโต้แย้งเป็นส่วนใหญ่ แต่คำถามของพวกเขาว่าเราจะรู้ได้อย่างไร ยังถูกถามต่อในปรัชญาทุกยุค','Almost none of their texts survive; they are known mostly through those who wrote against them. Yet their question, how can we know?, has been asked in every age of philosophy since.')},
 bhag:{n:X('ผู้ภักดีต่อวาสุเทพ','the devotees of Vasudeva'),f:X('เติบโตเป็นการบูชาพระกฤษณะและพระวิษณุ หนึ่งในสายที่ใหญ่ที่สุดของศาสนาฮินดู ภควัทคีตากลายเป็นคัมภีร์ที่คนอ่านมากที่สุดเล่มหนึ่งของโลก','Grew into the worship of Krishna and Vishnu, one of the largest strands of Hinduism; the Bhagavad Gita became one of the most read scriptures in the world.')}};
function faithList20(S){const f=S.fa20||{};return Object.keys(FA20).filter(k=>(f[k]||0)>=.5).sort((a,b)=>(f[b]||0)-(f[a]||0))}

/* ---------- endings ---------- */
const EPI20={
 jan:X('หลังจากคุณ มคธจะกลืนแคว้นข้างเคียงทีละแคว้น ปาฏลีบุตรจะกลายเป็นเมืองหลวงของจักรวรรดิที่ใหญ่ที่สุดที่อินเดียเคยมี และครูที่คุณเคยได้ยินชื่อจะถูกจดจำโดยศิษย์ ที่จะเถียงกันอีกหลายร้อยปีว่าครูพูดอะไรจริงๆ','After you, Magadha will swallow its neighbours one by one, Pataliputra will become the capital of the largest empire India has yet known, and the teachers you heard of will be remembered by disciples who will argue for centuries over what they really said.'),
 mag:X('หลังจากคุณ หลานของจันทรคุปต์จะพิชิตกลิงคะ เสียใจ แล้วใช้ทั้งรัชกาลสลักความคิดของตนบนก้อนหินทั่วแผ่นดิน','After you, Chandragupta’s grandson will conquer Kalinga, regret it, and spend his reign carving his thoughts on rocks across the land.'),
 aso:X('หลังจากคุณ จักรวรรดิเมารยะจะแตกสลายในไม่ถึงห้าสิบปี จักรพรรดิองค์สุดท้ายจะถูกสังหารต่อหน้ากองทัพของตัวเอง แต่ภิกษุที่พระเจ้าอโศกส่งออกไปจะพาคำสอนข้ามทะเล','After you, the Maurya empire will fall apart within fifty years, its last emperor killed in front of his own army. But the monks of Ashoka’s time will carry the teachings across the sea.'),
 aft:X('หลังจากคุณ จักรวรรดิกุษาณะจะปกครองจากเอเชียกลางถึงลุ่มน้ำคงคา รูปพระพุทธเจ้าจะเดินทางตามเส้นทางสายไหมไปถึงจีน และในลังกา พระพุทธโฆสะจะแปลอรรถกถาเป็นภาษาบาลีในศตวรรษที่ 5 เป็นฉบับที่วัดไทยใช้ศึกษาจนทุกวันนี้','After you, the Kushans will rule from Central Asia to the Ganges, images of the Buddha will travel the Silk Road to China, and in Lanka Buddhaghosa will render the commentaries into Pali in the 5th century, the version Thai temples still study.')};
const LESSON20=X(' ในยุคของคุณ สงฆ์ของพระพุทธเจ้าเป็นเพียงหนึ่งในหลายสำนัก ข้างนิครนถ์ อาชีวก นักวัตถุนิยม พราหมณ์ และเทวดาที่ทุกหมู่บ้านเลี้ยงดู นักประวัติศาสตร์ชี้เหตุผลหลายข้อที่ศาสนาพุทธอยู่รอด: คณะสงฆ์ที่มีกฎอยู่ร่วมกันและอยู่ได้นานกว่าผู้ก่อตั้ง คำสอนที่ท่องจำเป็นกลุ่มแล้วถูกเขียนลง กษัตริย์ที่อุปถัมภ์ (แต่พระเจ้าอโศกก็ถวายถ้ำให้อาชีวก ซึ่งยังหายไป) ภิกษุที่เดินทางไปกับพ่อค้าทั้งทางบกและทางทะเล และการเปิดรับนาคและยักษ์ของชาวบ้านเข้ามาแทนที่จะขับไล่ แต่แม้แต่ศาสนาพุทธเองก็เกือบหายไปจากดินแดนที่เกิด มันรอดเพราะได้หยั่งรากในที่อื่นแล้ว รวมทั้งดินแดนที่ต่อมาเป็นประเทศไทย',
 ' In your age the Buddha’s Sangha was one school among many, alongside the Niganthas, the Ajivikas, the materialists, the Brahmins, and the spirits every village fed. Historians point to several reasons Buddhism lasted: a community of monks and nuns with rules for living together that outlived its founder; teachings memorised in groups and then written down; kings who gave support (though Ashoka also gave caves to the Ajivikas, who still vanished); monks travelling with merchants by land and sea; and a readiness to welcome villagers’ nagas and yakkhas instead of driving them out. Yet even Buddhism nearly vanished from the land of its birth. It survived because it had already taken root elsewhere, including the land that would become Thailand.');
const THAI20=X(' ร่องรอยของยุคนี้ยังอยู่รอบตัวคนไทย: พุทธศักราชที่นับจากการปรินิพพาน อักษรไทยที่สืบมาจากอักษรพราหมี บทสวดภาษาบาลี วันเข้าพรรษา วันพระ ราวบันไดนาค ยักษ์เฝ้าประตูวัด และกระต่ายบนดวงจันทร์',
 ' Traces of this age are all around Thailand today: the Buddhist Era counted from the Buddha’s passing, a Thai alphabet descended from Brahmi, chanting in Pali, Khao Phansa, the wan phra holy days, naga stair-rails, giants guarding temple gates, and the hare in the moon.');
const TELL20={plain:X(' คุณเล่าเรื่องพระพุทธเจ้าตามที่ได้ยินมา ไม่เติมไม่ตัด',' You told the Buddha’s story just as you heard it, adding nothing, cutting nothing.'),
 wonder:X(' คุณเติมปาฏิหาริย์ลงในเรื่องพระพุทธเจ้าที่เล่าให้เด็กๆ ฟัง เหมือนผู้เล่าอีกนับไม่ถ้วนก่อนและหลังคุณ เรื่องเล่าที่ถูกเล่าด้วยความรักมักเติบโตแบบนี้',' You added wonders to the Buddha’s story for the young, like countless tellers before and after you. Stories told with love tend to grow this way.'),
 teach:X(' คุณเล่าคำสอนแทนเรื่องชีวิต ซึ่งตรงกับที่พระสูตรชั้นต้นให้ความสำคัญ',' You told the teaching instead of the life, which is what the early discourses themselves cared most about.')};
function epi20(S){const e=era20(S.ya0);let s=L(EPI20[e]);
  const met=(S.met20||[]).filter(k=>MEET20[k]);
  if(met.length)s+=L(X(' ในชีวิตเดียว คุณได้พบหรือเป็นพยานของ ',' In one lifetime you met or witnessed '))+met.map(k=>L(MEET20[k])).join(', ')+L(X(' ส่วนใหญ่ไม่มีวันรู้ว่าคุณอยู่ตรงนั้น',', and almost none of them knew you were there.'));
  if(S.monk20)s+=L(X(' คุณใช้ชีวิตเป็น'+MONK20[S.monk20][S.sex==='f'?'f':'m'].th+' ',' You lived as '+MONK20[S.monk20][S.sex==='f'?'f':'m'].en+'.'))+((S.rec20||0)>=30?L(X(' และจำคำสอนได้มากพอจะสอนคนรุ่นต่อไป',' You knew enough of the teachings by heart to pass them on.')):'');
  if(S.tell20)s+=L(TELL20[S.tell20]);
  if(S.don20)s+=L(X(' ชื่อของคุณถูกสลักบนราวสถูป ซึ่งในเกมนี้ อาจยังอยู่',' Your name was carved on a stupa railing, where, in this game, it may still be.'));
  if(S.fall20)s+=L(X(' คุณรอดจากวันที่บ้านเมืองของคุณล่ม',' You survived the day your homeland fell.'));
  return s+L(LESSON20)+L(THAI20)}
function fun20Note(S){return X('ชาวลุ่มน้ำคงคาส่วนใหญ่เผาศพริมแม่น้ำ แล้วลอยกระดูกและเถ้าลงน้ำ ภิกษุที่เป็นที่เคารพอาจได้สถูปเล็กๆ เก็บอัฐิ เด็กเล็กมักถูกฝังแทนการเผา งานที่ป่าช้าทำโดยคนกลุ่มจัณฑาล','Most people of the Ganges valley were cremated by the river, their bones and ashes given to the water. Revered monks might get a small stupa for their relics. Small children were usually buried instead of burned, and the cremation-ground work fell to candala groups.')}
function fun20Opts(S,o,done,lead){
  o.push(opt(X('นิมนต์นักบวชมาสวด','Invite ascetics to chant'),S=>{fx({b:4,so:1});return X('เสียงสวดดังเหนือเสียงไฟ ทุกคนเงียบลง','The chanting rises over the crackle of the fire, and everyone falls quiet.')}));
  o.push(opt(X('ลอยเถ้าลงแม่น้ำคงคา','Give the ashes to the Ganges'),S=>{fx({b:4});return X('แม่น้ำพาเถ้าไปทางตะวันออก อย่างที่พาทุกคนไปเสมอ','The river carries the ashes east, as it has carried everyone.')}));
  o.push(opt(X('ให้ทานแก่คนยากจนในนามผู้ตาย','Give to the poor in the name of the dead'),S=>{S.ag=Math.max(0,S.ag-1);fx({so:2,b:3});return X('คนยากจนหลายคนได้กินอิ่มในวันนั้น','Many of the poor eat their fill that day.')}))}
function fun20Text(S){
  if(S.monk20==='bud')return X('ภิกษุและชาวบ้านเผาศพของคุณ แล้วเก็บอัฐิไว้ในสถูปเล็กๆ ข้างวัด มีคนวางดอกไม้ทุกวันพระ','Monks and villagers cremate you and keep your relics in a little stupa beside the monastery, where someone leaves flowers every holy day.');
  if(S.monk20)return X('ศิษย์ของคุณเผาศพคุณอย่างเรียบง่าย ไม่มีพิธีใหญ่ ตามที่คุณสอนไว้','Your disciples cremate you simply, without a grand rite, as you taught them.');
  if(S.var20==='brah')return X('ลูกชายจุดไฟเผาศพด้วยไฟจากเตาบูชาประจำบ้าน พราหมณ์สวดพระเวทตลอดพิธี','Your son lights the pyre with fire from the household altar, and Brahmins chant the Vedas throughout.');
  if(S.cls==='slave')return X('นายของคุณจ่ายค่าเผาศพที่ป่าช้านอกเมือง มีคนเพียงไม่กี่คนมาส่ง','Your master pays for a cremation at the burning ground outside town. Only a few people come.');
  return X('ครอบครัวหามศพของคุณไปที่ริมแม่น้ำ เผาบนกองฟอน แล้วลอยกระดูกลงน้ำ','Your family carries you to the riverbank, burns you on a pyre and gives your bones to the water.')}
const REFLECT20={5:X('ในยุคพระพุทธเจ้า คนทั่วไปฟังครูหลายสำนักและให้อาหารนักบวชทุกสำนัก วันนี้คุณฟังความคิดที่ต่างจากของคุณบ้างไหม','In the Buddha’s time ordinary people listened to many teachers and fed ascetics of every school. Do you listen to ideas different from your own?'),
 50:X('เรื่องราวของพระพุทธเจ้าเติบโตขึ้นทุกครั้งที่ถูกเล่าต่อ มีเรื่องอะไรในชีวิตคุณที่เติบโตขึ้นเมื่อถูกเล่าซ้ำ','The Buddha’s story grew each time it was retold. What stories in your own life have grown in the retelling?')};

/* ---------- the death page: a stupa railing ---------- */
function rail20Canvas(S,px){const c=document.createElement('canvas');c.width=64;c.height=48;c.style.width=px+'px';c.style.height=Math.round(px*48/64)+'px';c.style.imageRendering='pixelated';
  const x=c.getContext('2d'),R=(a,b,w,h,col)=>{x.fillStyle=col;x.fillRect(a,b,w,h)};
  const sky=S.ya0<=2280?'#e8dcc0':'#d8e4ea',st='#c9b48a',sd='#9a8460',cut='#5a4632',dome='#ece4d2',domeD='#c8bea8';
  R(0,0,64,48,sky);R(0,40,64,8,'#9a9a5a');
  for(let k=0;k<14;k++){const w=Math.round(Math.sqrt(196-k*k)*2.2);R(32-w/2,26-k,w,1,k%3?dome:domeD)}R(28,9,8,3,domeD);R(31,5,2,4,sd);R(29,5,6,1,sd);
  for(let i=0;i<8;i++){const px0=3+i*8;R(px0,24,3,17,st);R(px0+2,24,1,17,sd)}for(let j=0;j<3;j++)R(2,27+j*4,60,2,st);R(2,22,60,3,sd);
  const nm=(S.don20?3:0);if(nm)for(let i=0;i<7;i++){const h=((S.seed>>i)&1)?3:2;R(20+i*3,36,2,1,cut);R(20+i*3+((i%2)?1:0),37,1,h-1,cut)}
  if(S.monk20)R(44,33,4,7,'#c87a2a');
  return c}
function rail20Block(S){const box=document.createElement('div');box.className='seal8';box.appendChild(rail20Canvas(S,180));
  const p=document.createElement('p');p.className='small';
  p.textContent=(S.don20?L(X('ชื่อของคุณที่เชิงเสาราวสถูป เขียนด้วยอักษรพราหมี ',' Your name at the foot of a stupa railing post, in Brahmi letters. ')):L(X('สถูปในยุคของคุณ ',' A stupa of your age. ')))+L(X('ภาพในเกมเป็นภาพจำลองเท่านั้น',' The game’s picture is only an imitation.'));
  box.appendChild(p);
  const fl=faithList20(S);if(fl.length){const h=document.createElement('p');h.className='small';h.innerHTML='<b>'+esc(L(X('สำนักและความเชื่อที่คุณเคยทำบุญด้วย และชะตาของมันหลังจากคุณ','The faiths you gave to, and what became of them after you')))+'</b>';box.appendChild(h);
    for(const k of fl){const q=document.createElement('p');q.className='small';q.innerHTML='<b>'+esc(L(FA20[k].n))+'</b>: '+esc(L(FA20[k].f));box.appendChild(q)}}
  return box}

/* ---------- scenes ---------- */
function drawGanga(ctx,gy,o,now){const R=(a,b,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(a|0,b|0,w|0,h|0)};
  const rg=o.rg20,burn=o.fall20,aso=o.aso20,W=c=>burn?mix(c,'#2a2420',.55):c;
  const mud='#b8946a',mudD='#8a6a48',thatch='#c9a85a',thD='#9a7a3a',wood='#7a5232',woodD='#5a3a22',dome='#ece4d2',domeD='#c8bea8';
  const hut=(x,w,h)=>{R(x,gy-h+6,w,h,W(mud));R(x,gy+5,w,1,W(mudD));for(let k=0;k<5;k++)R(x-2+k,gy-h+6-k,w+4-k*2,1,W(k%2?thatch:thD));R(x+((w/2)|0)-1,gy+1,3,5,'#3a2a1c')};
  const wooden=(x,w,h)=>{R(x,gy-h+6,w,h,W(wood));for(let i=1;i<w;i+=3)R(x+i,gy-h+6,1,h,W(woodD));const cx=x+w/2;for(let k=0;k<6;k++){const ww=Math.round(Math.sqrt(36-k*k)*(w/12));R(cx-ww,gy-h+5-k,ww*2,1,W(k%2?thatch:thD))}R(cx-1,gy+1,3,5,'#2a1a10')};
  const stupa=(cx,r)=>{for(let k=0;k<r;k++){const w=Math.round(Math.sqrt(r*r-k*k)*2);R(cx-w/2,gy-k,w,1,W(k%3?dome:domeD))}R(cx-3,gy-r-2,6,2,W(domeD));R(cx,gy-r-6,1,4,W('#8a7a5a'));R(cx-2,gy-r-6,5,1,W('#8a7a5a'));for(let i=-r;i<=r;i+=3)R(cx+i,gy-3,1,5,W('#b8a07a'));R(cx-r-1,gy-2,r*2+3,1,W('#b8a07a'))};
  const pillar=(x)=>{R(x,gy-30,3,32,W('#d8cfbc'));R(x+2,gy-30,1,32,W('#b8ad98'));R(x-2,gy-34,7,4,W('#c8bea8'));R(x-1,gy-38,5,4,W('#e8d8a8'));R(x,gy-40,1,2,W('#e8d8a8'));R(x+2,gy-40,1,2,W('#e8d8a8'))};
  const tree=(x)=>{R(x,gy-14,3,16,W('#6a4a2a'));for(let k=0;k<4;k++)R(x-8+k,gy-22+k*2,19-k*2,3,W(k%2?'#3e6a2a':'#4f7a32'));R(x-10,gy+1,23,2,W('#a8946a'));R(x-2,gy-1,2,2,'#c8402a');R(x+3,gy-1,2,2,'#e8c84a')};
  if(rg==='vil'||rg==='kap'){hut(14,16,10);hut(150,18,11);tree(98);
    for(let i=0;i<6;i++)R(40+i*8,gy+4,6,1,'#5f8a8e');for(let x=36;x<84;x+=5){R(x,gy-1,1,4,'#4f7a32');R(x+2,gy,1,3,'#5f9a3a')}
    if(rg==='kap'&&aso)pillar(178)}
  else if(rg==='anu'){hut(12,16,10);if(o.ya20<=2270)stupa(140,16);R(60,gy+3,50,4,'#4f8a96');R(58,gy+2,54,1,'#7a6a4a')}
  else if(rg==='tax'){for(const hx of [10,34,150]){R(hx,gy-6,18,10,W('#a89a80'));R(hx-1,gy-8,20,2,W('#8a7a62'));R(hx+7,gy-1,3,5,'#3a2a1c')}if(o.ya20<=2280)stupa(100,13)}
  else if(rg==='vid'){hut(14,16,10);wooden(36,16,12);if(aso||o.ya20<=2280){stupa(132,18);if(o.ya20<=2075){const gx=104;R(gx,gy-24,2,26,W('#b8a07a'));R(gx+12,gy-24,2,26,W('#b8a07a'));for(let j=0;j<3;j++)R(gx-3,gy-26+j*4,20,2,W(j%2?'#c9b48a':'#a8946a'))}}if(o.ya20<=2140)pillar(70)}
  else if(rg==='klg'){hut(12,16,10);hut(36,14,9);R(120,gy-10,50,12,W(mud));for(let i=0;i<6;i++)R(120+i*9,gy-14,4,4,W(mud));R(141,gy-4,6,6,'#3a2a1c')}
  else{// cities: rjg, pat, sav, ves, var
    wooden(10,18,14);wooden(32,16,12);hut(54,14,9);
    if(rg==='pat'||rg==='rjg'){const x0=110;for(let x=x0;x<192;x+=2){R(x,gy-16,1,18,W(x%4?wood:woodD))}for(let t=x0;t<192;t+=22){R(t,gy-24,8,26,W(wood));R(t-1,gy-26,10,2,W(woodD))}R(140,gy-6,8,8,'#2a1a10')}
    if(rg==='rjg'&&aso){const hx=150,hy=gy-30;R(hx+6,hy+8,6,5,'#2a2420')}
    if(rg==='var'){for(let j=0;j<4;j++)R(110,gy+2+j*2,82-j*6,2,W(j%2?'#c8b898':'#a8987a'));if(aso){stupa(160,12);pillar(132)}}
    if((rg==='sav'||rg==='ves')&&o.ya20<=2280)stupa(150,14);
    if(rg==='pat'&&aso)pillar(96)}
  if(burn)for(let i=0;i<4;i++){const sx=40+i*36+((now/300+i*7)%4);for(let j=0;j<6;j++)R(sx+Math.sin(now/500+j)*2,gy-30-j*6,4,4,'rgba(60,55,50,.45)')}
  if(o.monks20){const mx=((now/120)+(o.seed%60))%230-20;for(let i=0;i<3;i++){const x=Math.round(mx-i*9);fig(ctx,x,gy+14,{c:'#c87a2a',h:6,pose:'walk',f:((now/300|0)+i)%2});R(x-1,gy+9,3,2,'#3a2a1c')}}
  if(o.sea20){const bx=((now/320)+(o.seed%50))%(220)-26,by=gy-13;R(bx,by,20,3,'#5a3a22');R(bx+9,by-10,1,10,'#4a3020');R(bx+4,by-10,10,6,'#e8dcc0')}}
function drawAct20(ctx,o,act,gy,now,P){const R=(x,y,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(x|0,y|0,w|0,h|0)};
  const fy=gy+18,PC='#e6dcc6',OC='#2a1e16',st=o.stage||'adult',ph=st==='child'?4:6,el=st==='elder',fires=[];
  const MONK='#c87a2a';
  if(act==='rice20'){for(let x=40;x<170;x+=1)R(x,fy-2,1,3,'#5f8a8e');for(let x=44;x<168;x+=6){R(x,fy-6,1,4,'#5f9a3a');R(x+1,fy-7,1,2,'#7fba4a')}
    const bend=((now/400)|0)%2;fig(ctx,100,fy-1,{c:PC,h:ph-(bend?1:0),elder:el});fig(ctx,124,fy-1,{c:'#b8463a',h:6});return fires}
  if(act==='pot20'){const sp=(now/80)%8;R(96,fy-3,16,3,'#5a4632');R(103,fy-6,2,3,'#3a2a1c');R(98,fy-10,12,4,'#2a2a2e');R(100,fy-12,8,2,'#3a3a40');R(98+sp,fy-9,1,1,'#8a8a96');
    for(let i=0;i<4;i++){R(130+i*8,fy-6,6,6,'#1e1e22');R(131+i*8,fy-5,2,2,'#5a5a66')}fig(ctx,86,fy+1,{c:PC,h:ph,elder:el});return fires}
  if(act==='fire20'){R(96,fy-4,16,4,'#a8946a');R(98,fy-6,12,2,'#c9b48a');fires.push([104,fy-8,3]);const fl=((now/120)|0)%3;R(102,fy-12-fl,4,4,'#ffb04a');R(103,fy-15-fl,2,3,'#ffd27a');
    fig(ctx,84,fy+1,{c:'#efe9dc',h:ph,elder:el});fig(ctx,122,fy+1,{c:'#efe9dc',h:6});return fires}
  if(act==='monk20'){const wx=((now/90)%120)+30;fig(ctx,wx,fy+1,{c:MONK,h:ph,pose:'walk',f:((now/300)|0)%2,elder:el});R(wx-1,fy-4,3,2,'#3a2a1c');
    fig(ctx,140,fy+1,{c:PC,h:5});R(136,fy-3,4,2,'#e8e0c8');return fires}
  if(act==='elephant20'){const ex=80+Math.sin(now/900)*6;R(ex,fy-16,26,12,'#7a7a80');R(ex+24,fy-14,8,9,'#7a7a80');R(ex+30,fy-6,2,7,'#6a6a70');R(ex+2,fy-4,4,5,'#6a6a70');R(ex+18,fy-4,4,5,'#6a6a70');R(ex+26,fy-12,2,2,'#1a1a1a');R(ex+29,fy-7,3,1,'#f2ead8');
    fig(ctx,ex+10,fy-16,{c:PC,h:ph,elder:el});return fires}
  if(act==='carve20'){R(100,fy-24,6,24,'#c9b48a');R(104,fy-24,2,24,'#a8946a');for(let j=0;j<4;j++)R(101,fy-21+j*5,4,1,'#8a7458');const hit=((now/250)|0)%2;fig(ctx,90,fy+1,{c:PC,h:ph,elder:el});R(95,fy-8-(hit?1:0),3,1,'#8a8a8a');return fires}
  return null}
