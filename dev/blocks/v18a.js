/* ================= v0.18 CHAPTER 16 (shown as 10): THE GREEKS, FROM HOMER TO ROME ================= */
const ERA16={
 arch:{a:2825,b:2505,w:.36,wp:100,n:X('ยุคอาร์เคอิก: ตัวอักษร โอลิมปิก และอาณานิคมรอบทะเล','the Archaic age: the alphabet, the Olympics and colonies round the sea')},
 clas:{a:2505,b:2348,w:.36,wp:120,n:X('ยุคคลาสสิก: ประชาธิปไตย สงคราม และนักปรัชญา','the Classical age: democracy, wars and philosophers')},
 hell:{a:2348,b:2171,w:.28,wp:150,n:X('ยุคเฮลเลนิสติก: หลังอเล็กซานเดอร์ จนโรมันมาถึง','the Hellenistic age: after Alexander, until Rome arrives')}};
const era16=ya=>ya>2505?'arch':ya>2348?'clas':'hell';
const R16={
 ath:{pop:{arch:6,clas:14,hell:8}},
 spa:{pop:{arch:4,clas:5,hell:2}},
 cor:{pop:{arch:5,clas:5,hell:4}},
 mil:{pop:{arch:6,clas:4,hell:3}},
 les:{pop:{arch:3,clas:2}},
 syr:{pop:{arch:3,clas:5,hell:5}},
 mas:{pop:{arch:2,clas:2,hell:2}},
 ale:{pop:{hell:10}},
 vil:{pop:{arch:16,clas:14,hell:14}}};
Object.assign(REGIONS,{
 ath:{n:X('เอเธนส์ เมืองใต้เนินอะโครโพลิส','Athens, the city below the Acropolis'),sc:'greek',food:1,cold:0,dry:1},
 spa:{n:X('สปาร์ตา เมืองไม่มีกำแพงในหุบเขายูโรตัส','Sparta, the city without walls in the Eurotas valley'),sc:'greeks',food:2,cold:0,dry:1},
 cor:{n:X('โครินธ์ เมืองท่าบนคอคอดระหว่างสองทะเล','Corinth, the port on the isthmus between two seas'),sc:'greek',food:1,cold:0,dry:1},
 mil:{n:X('มิเลทัส เมืองท่ากรีกบนฝั่งไอโอเนีย','Miletus, the Greek port on the Ionian coast'),sc:'greek',food:2,cold:0,dry:1},
 les:{n:X('มิทิลีนี บนเกาะเลสบอส','Mytilene, on the island of Lesbos'),sc:'greek',food:2,cold:0,dry:1},
 syr:{n:X('ซีราคิวส์ อาณานิคมกรีกบนเกาะซิซิลี','Syracuse, the Greek colony on Sicily'),sc:'greek',food:2,cold:0,dry:1},
 mas:{n:X('มัสซาเลีย อาณานิคมกรีกที่จะกลายเป็นมาร์เซย์','Massalia, the Greek colony that will become Marseille'),sc:'greek',food:2,cold:0,dry:1},
 ale:{n:X('อเล็กซานเดรีย เมืองใหม่ของชาวกรีกในอียิปต์','Alexandria, the new Greek city in Egypt'),sc:'greeka',food:2,cold:0,dry:1},
 vil_16:{n:X('หมู่บ้านบนภูเขาในอาร์คาเดีย','a mountain village in Arcadia'),sc:'greekv',food:1,cold:0,dry:1}});
Object.assign(COORD,{ath:[37.97,23.73],spa:[37.08,22.43],cor:[37.91,22.88],mil:[37.53,27.28],les:[39.11,26.55],syr:[37.08,15.29],mas:[43.30,5.37],ale:[31.20,29.92],vil_16:[37.5,22.2]});
for(const k in R16){NEIGH[k]=[];VR[k]=['plain'];R3[k==='vil'?'vil_16':k]={vil:99999,share:0,plant:{ya:99999,n:X('ข้าวบาร์เลย์ ข้าวสาลี มะกอก และองุ่น','barley, wheat, olives and grapes')},ani:['sheep','goat','pig'],hunt:'deer',pred:X('หมาป่า','A wolf')};
  for(const a of ['sheep','goat','pig']){DOMYA[a]=DOMYA[a]||{};DOMYA[a][k]=99999}}
DRYR.push(...Object.keys(R16));
/* several chapters have a region called 'vil': look it up by chapter */
for(const T of [REGIONS,COORD,R3])Object.defineProperty(T,'vil',{get(){return T['vil_'+(S&&S.ch)]||T.vil_16},configurable:true});
SC.greek={d:['#7fb9d8','#f0dcac'],n:['#0a0f24','#22233c'],far:'#9d8b6d',near:'#86784f',sea:'#2f7fa0',gr:'#a8935e',tree:'olive',gre:1};
SC.greeks=Object.assign({},SC.greek,{sea:null,far:'#7d7a6a',gr:'#9a9a5c'});
SC.greekv=Object.assign({},SC.greek,{sea:null,far:'#6f7a62',near:'#5f6a4c',gr:'#8f9a58',tree:'pine'});
SC.greeka=Object.assign({},SC.greek,{tree:'palm',far:'#c9b38a',gr:'#c2ad78'});
const RNOTE16={
 ath:X('เอเธนส์เป็นนครรัฐใหญ่ที่สุดแห่งหนึ่งของกรีก มีทั้งเมืองและชนบทรอบๆ ราว 2,500 ตารางกิโลเมตร ประชาธิปไตยเริ่มที่นี่ราว 508 ปีก่อนคริสตกาล แต่คนที่ออกเสียงได้มีแค่ผู้ชายที่เป็นพลเมือง ราวร้อยละ 10–20 ของคนในนครรัฐ','Athens was one of the largest Greek city-states, a town and its countryside of about 2,500 square kilometres. Democracy began here around 508 BCE, but only male citizens could vote, perhaps 10–20% of the people of the city-state.'),
 spa:X('สปาร์ตาไม่มีกำแพงเมืองจนถึงยุคหลัง เพราะเชื่อว่านักรบคือกำแพง พลเมืองชายถูกฝึกเป็นทหารตั้งแต่อายุ 7 ขวบ ส่วนงานไร่นาทำโดยเฮลอต คนที่ถูกพิชิตและต้องทำงานให้สปาร์ตาไปตลอดชีวิต ซึ่งมีจำนวนมากกว่าพลเมืองหลายเท่า ผู้หญิงสปาร์ตาเป็นเจ้าของที่ดินได้ ต่างจากเอเธนส์','Sparta had no city walls until late, for its warriors were its walls. Male citizens trained as soldiers from the age of 7, while the farming was done by helots, conquered people bound to work for Sparta for life, who far outnumbered the citizens. Spartan women could own land, unlike women in Athens.'),
 cor:X('โครินธ์คุมคอคอดแคบๆ ระหว่างสองทะเล มีทางลากเรือข้ามแผ่นดินที่เรียกว่าดิโอลคอส เมืองรวยจากการค้าและเครื่องปั้นดินเผา จนโรมันเผาทิ้งในปี 146 ปีก่อนคริสตกาล','Corinth controlled the narrow isthmus between two seas, with a paved track, the diolkos, for hauling ships over land. It grew rich on trade and pottery, until the Romans burned it in 146 BCE.'),
 mil:X('มิเลทัสบนฝั่งตุรกีทุกวันนี้ คือบ้านของทาลีส อแนกซิแมนเดอร์ และอแนกซิมินีส นักคิดกรุ่นแรกที่พยายามอธิบายโลกโดยไม่อ้างเทพเจ้า เมืองนี้ตั้งอาณานิคมรอบทะเลดำหลายสิบแห่ง','Miletus, on the coast of today’s Turkey, was home to Thales, Anaximander and Anaximenes, the first thinkers to try to explain the world without appealing to the gods. It founded dozens of colonies round the Black Sea.'),
 les:X('เกาะเลสบอสเป็นบ้านของซัปโฟ กวีหญิงที่ชาวกรีกยุคหลังยกย่องว่าเป็น “แรงบันดาลใจองค์ที่สิบ” บทกวีของเธอเหลือรอดมาแค่เศษเสี้ยว บางบทพบบนกระดาษปาปิรุสที่ใช้ห่อมัมมี่ในอียิปต์','Lesbos was home to Sappho, the poet later Greeks called “the tenth Muse”. Only fragments of her poems survive, some found on papyrus used to wrap mummies in Egypt.'),
 syr:X('ซีราคิวส์ก่อตั้งโดยชาวโครินธ์ราว 733 ปีก่อนคริสตกาล และกลายเป็นเมืองกรีกที่ใหญ่ที่สุดแห่งหนึ่ง ใหญ่กว่าเอเธนส์ในบางยุค อาร์คิมิดีสเกิดและตายที่นี่','Syracuse was founded by Corinthians around 733 BCE and became one of the largest Greek cities, at times larger than Athens. Archimedes was born and died here.'),
 mas:X('มัสซาเลียก่อตั้งโดยชาวกรีกจากโฟเคียราว 600 ปีก่อนคริสตกาล คือเมืองมาร์เซย์ในฝรั่งเศสทุกวันนี้ ชาวกรีกตั้งอาณานิคมตั้งแต่สเปนถึงทะเลดำ มีเมืองกรีกกระจายอยู่รอบทะเล','Massalia was founded by Greeks from Phocaea around 600 BCE: it is Marseille in France today. Greeks planted colonies from Spain to the Black Sea, leaving Greek towns scattered round the sea.'),
 ale:X('อเล็กซานเดรียก่อตั้งโดยอเล็กซานเดอร์มหาราชในปี 331 ปีก่อนคริสตกาล มีหอสมุดใหญ่ที่พยายามรวบรวมหนังสือทุกเล่มในโลก และประภาคารฟาโรสที่เป็นหนึ่งในเจ็ดสิ่งมหัศจรรย์','Alexandria was founded by Alexander the Great in 331 BCE. It had a great Library that tried to collect every book in the world, and the Pharos lighthouse, one of the Seven Wonders.'),
 vil:X('คนกรีกส่วนใหญ่ไม่ได้อยู่ในเมืองดังๆ แต่เป็นชาวนาบนภูเขาที่ปลูกข้าวบาร์เลย์ มะกอก และองุ่น เลี้ยงแพะ และไปเมืองเฉพาะวันตลาดหรือวันพิธี ภูเขาแบ่งกรีกออกเป็นหุบเขาเล็กๆ นับพัน','Most Greeks did not live in famous cities but were hill farmers growing barley, olives and grapes and keeping goats, going to town only on market or festival days. Mountains split Greece into a thousand small valleys.')};
function pickEra16(){const ks=Object.keys(ERA16);return weighted(ks.map(k=>[k,ERA16[k].w]))}
function yaFor16(e){const E=ERA16[e];return Math.round((E.b+rnd()*(E.a-E.b))/5)*5}
function pickCity16(e,ya){const ks=Object.keys(R16).filter(k=>R16[k].pop[e]&&!(k==='mas'&&ya>2620)&&!(k==='syr'&&ya>2755)&&!(k==='ale'&&ya>2355));return weighted(ks.map(k=>[k,R16[k].pop[e]]))}
const pw16=(rg,ya)=>{const e=era16(ya);return (R16[rg].pop[e]||10)*1000/(ERA16[e].wp*1e6)};
const NAMENOTE16=X('ชาวกรีกมีชื่อเดียว ตามด้วยชื่อพ่อและบ้านเกิด เช่น “โสกราตีส ลูกของโซโฟรนิสคัส จากอโลเปเค” ชื่อมักมีความหมาย เช่น ฟิลิป แปลว่า “คนรักม้า” ชื่อในเกมเป็นชื่อที่แต่งขึ้น','Greeks had one name, followed by their father’s name and home district, such as “Socrates, son of Sophroniscus, of Alopeke”. Names often had meanings: Philip means “lover of horses”. The names in the game are invented.');

/* ---------- careers ---------- */
const CAREERS16={
farmer:{n:X('ชาวนา','Farmer'),act:'sow',sk:'kn',ok:S=>S.cls!=='elite',
 L:[X('เด็กเก็บมะกอก','a child who gathers olives'),X('ชาวนา','a farmer'),X('ชาวนาที่มีต้นมะกอกร้อยต้น','a farmer with a hundred olive trees'),X('ผู้อาวุโสที่หมู่บ้านทั้งหมู่บ้านเชื่อฟัง','the elder the whole village heeds')]},
potter:{n:X('ช่างปั้นและวาดแจกัน','Potter and vase painter'),act:'job',scene:'vase16',sk:'cr',l:X('ปั้นแจกันแล้ววาดภาพวีรบุรุษด้วยสีดำบนดินแดง','Throw vases and paint heroes in black on red clay'),item:'vase16',ok:S=>true,
 L:[X('เด็กบดดินในโรงปั้น','a child who mixes clay in the workshop'),X('ช่างปั้น','a potter'),X('ช่างวาดภาพบนแจกัน','a vase painter'),X('ช่างที่เซ็นชื่อบนแจกัน','the painter who signs the vases')]},
rower:{n:X('ฝีพายเรือรบ','Trireme rower'),act:'job',scene:'row16',sk:'sv',l:X('พายเรือรบไตรรีมในจังหวะเดียวกับอีก 169 คน','Row a trireme in time with 169 others'),ok:S=>S.sex==='m'&&S.cls!=='elite'&&S.rg!=='vil'&&S.rg!=='spa',
 L:[X('เด็กช่วยงานที่ท่าเรือ','a boy who helps at the docks'),X('ฝีพาย','a rower'),X('ฝีพายแถวบนสุด','a rower of the top bank'),X('คนตีจังหวะให้ฝีพาย','the man who calls the stroke')]},
hoplite:{n:X('ทหารราบโฮพลไลต์','Hoplite'),act:'job',scene:'march',sk:'sv',l:X('ฝึกสู้ในแถวโล่กับหอก','Drill in the shield wall with spear'),ok:S=>S.sex==='m'&&S.cls!=='slave',
 L:[X('เด็กถือโล่ให้พ่อ','a boy who carries his father’s shield'),X('ทหารโฮพลไลต์','a hoplite'),X('ทหารแถวหน้า','a man of the front rank'),X('ผู้บัญชาการกองร้อย','captain of a company')]},
trader:{n:X('พ่อค้าทางทะเล','Sea trader'),act:'job',scene:'boat10',sk:'so',l:X('ขนน้ำมันมะกอกและเหล้าองุ่นไปขายข้ามทะเล','Ship olive oil and wine across the sea'),ok:S=>S.cls!=='slave'&&S.rg!=='vil',
 L:[X('เด็กนับไหบนเรือ','a child who counts the jars on board'),X('พ่อค้า','a trader'),X('พ่อค้าที่มีเรือของตัวเอง','a trader with a ship of their own'),X('พ่อค้าที่รู้จักทุกท่าเรือในทะเลกลางแผ่นดิน','a trader known in every port of the inland sea')]},
weaver:{n:X('ช่างทอ','Weaver'),act:'job',scene:'weave',sk:'cr',l:X('ปั่นขนแกะและทอผ้าบนกี่ตั้ง','Spin wool and weave on the upright loom'),item:'wool10',ok:S=>true,
 L:[X('เด็กปั่นด้าย','a child at the spindle'),X('ช่างทอ','a weaver'),X('ช่างทอผ้าลายวิจิตร','a weaver of patterned cloth'),X('ช่างทอผ้าคลุมถวายเทพีอะธีนา','a weaver of the robe for Athena')]},
doctor:{n:X('หมอ','Physician'),act:'job',scene:'herb',sk:'kn',l:X('สังเกตอาการคนป่วยและจดบันทึก','Watch the sick and write down what you see'),ok:S=>S.cls!=='slave'&&(S.lit>=20||S.cls==='elite'),
 L:[X('ลูกศิษย์หมอ','a physician’s pupil'),X('หมอ','a physician'),X('หมอที่ทุกเมืองอยากได้','a physician every city wants'),X('หมอที่เขียนตำราให้คนรุ่นหลัง','a physician who writes books for later generations')]},
thinker:{n:X('ครูและนักคิด','Teacher and thinker'),act:'job',scene:'school',sk:'kn',l:X('สอนการพูด ถกเถียง และตั้งคำถาม','Teach speaking, argument and asking questions'),ok:S=>S.cls!=='slave'&&S.lit>=30,
 L:[X('เด็กที่ตามนักปราชญ์ไปทุกที่','a child who follows the wise men everywhere'),X('ครู','a teacher'),X('นักคิดที่มีลูกศิษย์ของตัวเอง','a thinker with pupils of their own'),X('นักปรัชญาที่ทุกคนในตลาดรู้จัก','a philosopher everyone in the market knows')]}};
const CARNOTE16=X('งานส่วนใหญ่ในเมืองกรีกทำโดยคนที่ไม่ใช่พลเมือง ทั้งทาส คนต่างถิ่น และผู้หญิง ชาวกรีกชั้นสูงมองว่าการทำงานด้วยมือต่ำต้อย แต่ช่างวาดแจกันบางคนเซ็นชื่อบนงานของตัวเอง ทำให้เรารู้ชื่อศิลปินอย่างเอ็กซีเคียสมาจนถึงวันนี้','Much of the work in Greek cities was done by non-citizens: slaves, resident foreigners and women. Upper-class Greeks looked down on manual work, yet some vase painters signed their pieces, so we still know artists such as Exekias by name.');
const CLS16={elite:X('ตระกูลเจ้าที่ดินผู้มั่งคั่ง','a wealthy landowning family'),free:X('ครอบครัวพลเมือง ชาวนาหรือช่าง','a citizen family of farmers or craftspeople'),dep:X('ครอบครัวคนต่างถิ่น ไม่มีสิทธิ์พลเมือง','a family of resident foreigners, without citizen rights'),slave:X('ทาส','a slave')};
const CLS16S={elite:X('ตระกูลสปาร์เทียต พลเมืองนักรบ','a Spartiate family, warrior citizens'),free:X('ครอบครัวเพริโออิคอย คนอิสระรอบสปาร์ตาที่ไม่มีสิทธิ์พลเมือง','a family of perioikoi, free people round Sparta without citizen rights'),dep:X('ครอบครัวเพริโออิคอย ช่างและพ่อค้า','a family of perioikoi craftsmen and traders'),slave:X('เฮลอต คนที่ถูกพิชิตและต้องทำนาให้สปาร์ตา','a helot, one of the conquered who must farm for Sparta')};
const cls16=S=>S.rg==='spa'?CLS16S[S.cls]:CLS16[S.cls];
const CLSNOTE16=X('ในเมืองกรีกส่วนใหญ่ มีแค่ผู้ชายที่เป็นพลเมืองที่มีสิทธิ์ทางการเมือง ผู้หญิงที่เป็นพลเมืองไม่ได้ออกเสียง คนต่างถิ่นจ่ายภาษีและไปรบได้แต่ไม่มีสิทธิ์ และทาสถูกซื้อขายเหมือนสิ่งของ เอเธนส์ในยุครุ่งเรืองอาจมีทาสหลายหมื่นคน','In most Greek cities only male citizens had political rights. Citizen women could not vote, resident foreigners paid taxes and fought but had no rights, and slaves were bought and sold like property. Athens at its height may have had tens of thousands of slaves.');

function init16(){const e=era16(S.ya0);
  S.era=e;S.cls=weighted([['elite',.07],['free',.55],['dep',.16],['slave',S.rg==='spa'?.3:.16]]);S.settled=1;S.roleNo=1;
  if(S.rg==='vil'&&S.cls==='dep')S.cls='free';
  S.lit=S.cls==='elite'?10:S.cls==='free'?2:0;S.schOK=S.sex==='m'&&(S.cls==='elite'||(S.cls==='free'&&rnd()<.35))?1:0;
  S.ag=S.cls==='elite'?10:S.cls==='free'?3:S.cls==='dep'?3:0;S.debt=0;S.debtY=0;S.saw={};S.nameTab=0;S.met16=[];S.motto=null;S.fall16=0;S.alx16=rnd()<.35;S.trial16=0;S.sign16=0;
  S.field=S.cls==='free'||S.cls==='elite'?1:0;
  if(S.cls==='free'){S.herd.goat=1+((rnd()*3)|0);if(rnd()<.4)S.herd.sheep=1+((rnd()*3)|0)}
  if(S.cls==='elite'){S.herd.sheep=6+((rnd()*10)|0);S.herd.goat=3+((rnd()*5)|0)}}
Object.assign(INV,{vase16:{n:X('แจกันวาดลาย','painted vases'),v:3}});
const meet16=(S,k)=>{S.met16=S.met16||[];if(!S.met16.includes(k))S.met16.push(k)};

/* ---------- the year ---------- */
function v16Year(a){if(S.ch!==16)return;const e=era16(S.ya);S.era=e;
  fx({f:{elite:4,free:1,dep:1,slave:-1}[S.cls]||0});
  if(S.yt==='dry'&&!S.rainN){S.rainN=1;log(X('ฝนหน้าหนาวน้อย ข้าวบาร์เลย์บนเนินเขาออกรวงลีบ','The winter rains are thin, and the barley on the hillsides comes up thin-eared.'),X('ดินกรีกบาง เป็นหินปูน และฝนตกแค่หน้าหนาว ที่ราบปลูกข้าวมีน้อย นครรัฐใหญ่อย่างเอเธนส์จึงต้องซื้อข้าวสาลีจากทะเลดำและอียิปต์ และตั้งอาณานิคมเมื่อคนมากเกินกว่าที่ดินจะเลี้ยงได้','Greek soil is thin and stony and the rain falls only in winter, so there is little good grain land. Big city-states like Athens had to buy wheat from the Black Sea and Egypt, and founded colonies when there were more people than the land could feed.'),'sad')}
  if(a>=14&&S.car&&S.clv>=1)S.ag+=S.clv*(S.car==='trader'?2:1);
  if(S.focus==='school')S.lit=clamp(S.lit+6+(hasT('mem')?2:0)+S.kn/40,0,100);
  if(S.focus==='write'||(S.focus==='job'&&['thinker','doctor'].includes(S.car)))S.lit=clamp(S.lit+3,0,100);
  if(S.debt>0){S.debtY++;S.debt=Math.ceil(S.debt*1.2);if(S.ag>=S.debt){S.ag-=S.debt;S.debt=0;S.debtY=0;log(X('คุณใช้หนี้หมด','You pay off your debt.'),null,'it')}
    else if(S.debtY>=3){S.debt=0;S.debtY=0;fx({b:-6,p:-4});if(S.ya>2619&&S.cls==='free'&&S.rg==='ath'){S.cls='slave';log(X('คุณใช้หนี้ไม่ได้ เจ้าหนี้ยึดตัวคุณไปเป็นทาส ตามกฎหมายของเอเธนส์ในยุคนี้','You cannot pay, and under Athenian law of this time the creditor takes you as a slave.'),X('ก่อนการปฏิรูปของโซลอนในปี 594 ปีก่อนคริสตกาล ชาวเอเธนส์ที่ใช้หนี้ไม่ได้อาจถูกขายเป็นทาสได้','Before Solon’s reforms of 594 BCE, Athenians who could not pay their debts could be sold into slavery.'),'sad')}else log(X('เจ้าหนี้ยึดสัตว์ของคุณไปแทนหนี้','The creditor takes your animals for the debt.'),null,'sad')}}
  const ya=S.ya,once=(k,f)=>{if(!S.tl)S.tl={};if(S.tl[k])return;S.tl[k]=1;f()};
  if(ya<=2800&&ya>=2700&&a>=8)once('alpha16',()=>{fx({kn:2});log(X('พ่อค้าคนหนึ่งขีดเครื่องหมายแปลกๆ บนไหน้ำมัน บอกว่ามันคือเสียง ไม่ใช่รูป ใครจำเครื่องหมายได้ยี่สิบกว่าตัวก็เขียนได้ทุกคำ','A trader scratches strange marks on an oil jar and says they are sounds, not pictures: learn twenty-odd marks and you can write any word.'),X('ชาวกรีกรับตัวอักษรจากชาวฟินีเซียราวศตวรรษที่ 8 ก่อนคริสตกาล แล้วเพิ่มตัวสระเข้าไป ตัวอักษรกรีกกลายเป็นต้นแบบของตัวอักษรละติน ซีริลลิก และตัวอักษรที่ใช้เขียนภาษาอังกฤษทุกวันนี้','Greeks took their alphabet from the Phoenicians around the 8th century BCE and added letters for vowels. The Greek alphabet became the model for the Latin and Cyrillic alphabets, and so for the letters used to write English today.'))});
  if(ya<=2620&&ya>=2560&&a>=8&&['ath','cor','mil','les','vil'].includes(S.rg))once('coin16',()=>{fx({kn:1});S.ag+=1;log(X('คุณได้แผ่นโลหะกลมเล็กๆ มีรูปสัตว์ประทับอยู่ พ่อค้าบอกว่ามันมีค่าเท่ากันทุกแผ่น ไม่ต้องชั่ง','You are given a small round piece of metal stamped with an animal. The trader says every piece is worth the same, no weighing needed.'),X('เหรียญแรกของโลกทำในอาณาจักรลิเดีย ใกล้ไอโอเนีย ราว 600 ปีก่อนคริสตกาล และนครรัฐกรีกรับไปใช้อย่างรวดเร็ว เหรียญเงินรูปเต่าของเกาะไอจินาและรูปนกฮูกของเอเธนส์กลายเป็นเงินที่คนทั่วทะเลรู้จัก','The world’s first coins were made in the kingdom of Lydia, near Ionia, around 600 BCE, and Greek cities quickly took them up. The silver “turtles” of Aegina and “owls” of Athens became money known all round the sea.'))});
  if(S.rg==='mil'&&ya<=2520&&ya>=2515)once('mil494',()=>{fx({b:-10,f:-8,h:-4});log(X('กองทัพเปอร์เซียตีมิเลทัสแตก เผาวิหาร และกวาดต้อนผู้คนไปไกลถึงอ่าวเปอร์เซีย','The Persian army breaks into Miletus, burns the temples and drives the people off as far as the Persian Gulf.'),X('มิเลทัสนำกบฏชาวไอโอเนียต่อเปอร์เซีย และถูกทำลายในปี 494 ปีก่อนคริสตกาล เมื่อละครเรื่องการล่มของมิเลทัสแสดงที่เอเธนส์ ผู้ชมร้องไห้จนผู้แต่งถูกปรับ','Miletus led the Ionian revolt against Persia and was destroyed in 494 BCE. When a play about its fall was staged in Athens, the audience wept so much that its author was fined.'),'sad')});
  if(S.rg==='ath'&&ya<=2505&&ya>=2504)once('per480',()=>{fx({b:-6,f:-6});log(X('ทั้งเมืองลงเรือหนีไปเกาะซาลามิส จากฝั่งตรงข้าม คุณเห็นควันลอยขึ้นจากอะโครโพลิส ชาวเปอร์เซียเผาวิหาร','The whole city takes to the boats and flees to Salamis. From across the water you watch smoke rise from the Acropolis: the Persians are burning the temples.'),X('ในปี 480 ปีก่อนคริสตกาล ชาวเอเธนส์ทิ้งเมืองให้ทัพเปอร์เซีย แล้วชนะการรบทางเรือที่ซาลามิสไม่กี่สัปดาห์ต่อมา','In 480 BCE the Athenians abandoned their city to the Persian army, then won the sea battle of Salamis a few weeks later.'),'sad')});
  if(S.rg==='ath'&&ya<=2472&&ya>=2457&&a>=6)once('parth16',()=>{fx({b:2});log(X('บนอะโครโพลิส ช่างหินนับร้อยกำลังสร้างวิหารใหม่ด้วยหินอ่อนขาว เสาทุกต้นป่องตรงกลางนิดหนึ่ง เพื่อให้ดูตรงจากด้านล่าง','On the Acropolis hundreds of masons are building a new temple of white marble. Every column swells a little in the middle, so that it looks straight from below.'),X('พาร์เธนอนสร้างในปี 447–432 ปีก่อนคริสตกาล ด้วยเงินส่วนหนึ่งจากบรรณาการของพันธมิตรเอเธนส์ ช่างตั้งใจทำให้แทบไม่มีเส้นตรงจริงๆ ในอาคาร เพื่อแก้ภาพลวงตา','The Parthenon was built in 447–432 BCE, partly with tribute paid by Athens’ allies. Its builders made almost no line truly straight, to correct optical illusions.'))});
  if(S.rg==='ath'&&ya<=2456&&ya>=2430&&a>=10&&rnd()<.5)once('war431',()=>{fx({f:-5,b:-2});log(X('ทัพสปาร์ตาบุกเข้ามาเผาไร่และตัดต้นมะกอกนอกเมือง ชาวนาทุกคนอัดกันอยู่หลังกำแพง','The Spartan army marches in, burning fields and cutting down olive trees outside the city. Every farmer is crammed inside the walls.'),X('สงครามเพโลพอนนีเซียนระหว่างเอเธนส์กับสปาร์ตา (431–404 ปีก่อนคริสตกาล) ทำให้คนในชนบทต้องอพยพเข้าเมืองทุกปี เมืองแออัดจนเกิดโรคระบาดในปี 430 ปีก่อนคริสตกาล','The Peloponnesian War between Athens and Sparta (431–404 BCE) drove country people inside the walls year after year. The crowding helped bring the plague of 430 BCE.'))});
  if(S.rg==='spa'&&ya<=2395&&ya>=2390&&S.cls==='slave')once('mess16',()=>{fx({b:10,f:2});S.cls='free';ms(X('เป็นอิสระจากการเป็นเฮลอต','Freed from helotry'));log(X('ทัพธีบส์ชนะสปาร์ตาและปลดปล่อยชาวเมสซีเนีย หลังเป็นเฮลอตมาหลายร้อยปี คุณเดินกลับไปยังที่ดินที่ปู่ทวดของปู่ทวดเคยเป็นเจ้าของ','The Theban army has beaten Sparta and freed Messenia. After centuries as helots, you walk back to land your ancestors once owned.'),X('หลังสปาร์ตาแพ้ที่ลิวคตราในปี 371 ปีก่อนคริสตกาล ชาวธีบส์ช่วยชาวเมสซีเนียตั้งเมืองใหม่ในปี 369 เฮลอตชาวเมสซีเนียจำนวนมากเป็นอิสระ สปาร์ตาไม่เคยกลับมายิ่งใหญ่อีก','After Sparta lost at Leuctra in 371 BCE, the Thebans helped the Messenians found a new city in 369. Many Messenian helots were freed, and Sparta never recovered its power.'),'big')});
  if(S.rg==='cor'&&ya<=2172&&ya>=2171)once('fall16',()=>{S.fall16=1;fx({b:-14,f:-10,h:-6});ms(X('รอดจากวันที่โรมันเผาโครินธ์','Survived the day Rome burned Corinth'));log(X('ทัพโรมันเข้าเมือง ผู้ชายถูกฆ่า ผู้หญิงและเด็กถูกขายเป็นทาส รูปปั้นและภาพวาดถูกขนลงเรือไปโรม แล้วเมืองก็ถูกเผา','The Roman army enters the city. The men are killed, the women and children sold as slaves, statues and paintings loaded onto ships for Rome, and then the city is burned.'),X('ในปี 146 ปีก่อนคริสตกาล ลูเซียส มัมมิอุสทำลายโครินธ์ ปีเดียวกับที่โรมทำลายคาร์เธจ กรีกกลายเป็นส่วนหนึ่งของอำนาจโรมัน แต่ชาวโรมันกลับรับศิลปะ ปรัชญา และเทพเจ้าของกรีกไปทั้งหมด','In 146 BCE Lucius Mummius destroyed Corinth, the same year Rome destroyed Carthage. Greece fell under Roman power, yet the Romans took up Greek art, philosophy and gods wholesale.'),'sad')});
}
function trade16Year(){const ks=Object.keys(S.inv).filter(k=>S.inv[k]>0&&k!=='grain').sort((a,b)=>INV[b].v-INV[a].v);
  if(!ks.length){if(rnd()<.4){S.ag+=1;log(X('คุณช่วยขนไหเหล้าองุ่นลงเรือที่ท่า ได้เหรียญทองแดงเป็นค่าแรง','You help carry wine jars onto the ships and are paid in bronze coins.'),null,'it')}return}
  const k=ks[0];S.inv[k]--;const v=Math.max(1,Math.round(INV[k].v+(S.so>50?1:0)));S.ag+=v;
  log(X('คุณขาย'+INV[k].n.th+'ที่ตลาด ได้เงิน '+v+' ดรัคมา','You sell '+INV[k].n.en+' in the market for '+v+' drachmas'),
    S.agNote?null:(S.agNote=1,X('ค่าแรงคนงานในเอเธนส์ยุคคลาสสิกราววันละหนึ่งดรัคมา ฝีพายเรือรบได้ราวเท่ากัน ส่วนพลเมืองที่ไปเป็นลูกขุนได้ค่าตอบแทนวันละครึ่งดรัคมา ทำให้คนจนก็มีส่วนในศาลได้','A labourer in Classical Athens earned about a drachma a day; a trireme rower about the same. Citizens serving as jurors were paid half a drachma a day, so even poor men could take part in the courts.')),'it')}
function title16(S){
  if(S.car&&S.age>=12&&S.clv>=1)return CAREERS16[S.car].L[S.clv];
  if(S.age<13)return S.cls==='elite'?X('ลูกของตระกูลมั่งคั่ง','a child of a wealthy family'):S.cls==='slave'?X('เด็กทาส','a slave child'):X('เด็กกรีก','a Greek child');
  if(S.car)return CAREERS16[S.car].L[S.clv];
  if(S.motto&&S.lit>=50)return X('คนที่ถกเถียงเก่งที่สุดในตลาด','the best arguer in the market');
  return {elite:X('เจ้าที่ดิน','a landowner'),free:X('พลเมือง','a citizen'),dep:X('คนต่างถิ่น','a resident foreigner'),slave:X('ทาส','a slave')}[S.cls]}
