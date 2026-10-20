/* ================= v0.10 CHAPTER 06 (shown as 05): ANCIENT EGYPT ================= */
function civ(ch){return ch===4||ch===6}
const ERA6={
 ed:{a:5100,b:4711,w:.10,wp:15,n:X('ยุคราชวงศ์ต้น เมื่ออียิปต์รวมเป็นแผ่นดินเดียว','the Early Dynastic period, when Egypt was first united')},
 ok:{a:4711,b:4206,w:.30,wp:22,n:X('ราชอาณาจักรเก่า ยุคแห่งพีระมิด','the Old Kingdom, the age of the pyramids')},
 fip:{a:4206,b:4080,w:.08,wp:25,n:X('ยุคแตกแยกครั้งที่หนึ่ง เมื่อราชอาณาจักรแตกเป็นเสี่ยง','the First Intermediate Period, when the kingdom fell apart')},
 mk:{a:4080,b:3675,w:.22,wp:30,n:X('ราชอาณาจักรกลาง','the Middle Kingdom')},
 nk:{a:3575,b:3095,w:.30,wp:50,n:X('ราชอาณาจักรใหม่ ยุคจักรวรรดิ','the New Kingdom, the age of empire')}};
const era6=ya=>ya>4711?'ed':ya>4206?'ok':ya>4080?'fip':ya>3620?'mk':'nk';
const R6={
 mem:{g:'ptah',pop:{ed:30,ok:60,fip:40,mk:50,nk:60}},
 giz:{g:'ra',pop:{ok:20}},
 aby:{g:'horus',pop:{ed:20,ok:20,fip:20,mk:30,nk:25}},
 the:{g:'amun',pop:{ed:5,ok:10,fip:20,mk:40,nk:80}},
 dem:{g:'amun',pop:{nk:2}},
 fay:{g:'sobek',pop:{ok:10,fip:10,mk:40,nk:30}},
 ele:{g:'khnum',pop:{ed:5,ok:8,fip:8,mk:10,nk:10}},
 ama:{g:'aten',pop:{nk:30}},
 del:{g:'neith',pop:{ed:40,ok:60,fip:60,mk:70,nk:90}}};
Object.assign(REGIONS,{
 mem:{n:X('เมมฟิส นครของเทพพทาห์ ตรงที่หุบแม่น้ำไนล์บรรจบสามเหลี่ยมปากแม่น้ำ','Memphis, city of the god Ptah, where the Nile valley meets the Delta'),sc:'egypt',food:2,cold:0,dry:1},
 giz:{n:X('เมืองคนงานที่กีซา ใต้เงาพีระมิดของพระราชา','the workers’ town at Giza, in the shadow of the king’s pyramid'),sc:'egypt',food:2,cold:0,dry:1},
 aby:{n:X('อไบดอส นครศักดิ์สิทธิ์ของเทพโอซิริส','Abydos, holy city of the god Osiris'),sc:'egypt',food:2,cold:0,dry:1},
 the:{n:X('ธีบส์ นครของเทพอามุน','Thebes, city of the god Amun'),sc:'egyc',food:2,cold:0,dry:1},
 dem:{n:X('เดร์เอล-เมดินา หมู่บ้านช่างผู้สร้างสุสานหลวง','Deir el-Medina, the village of the royal tomb builders'),sc:'egyc',food:1,cold:0,dry:1},
 fay:{n:X('ฟายุม ดินแดนทะเลสาบของเทพจระเข้โซเบค','the Fayum, the lake land of the crocodile god Sobek'),sc:'egypt',food:2,cold:0,dry:1},
 ele:{n:X('เอเลแฟนทีน เกาะชายแดนที่แก่งน้ำตกแห่งแรก','Elephantine, the border island at the First Cataract'),sc:'egyr',food:1,cold:0,dry:1},
 ama:{n:X('อาเคตาเตน นครใหม่ของเทพอาเทน','Akhetaten, the new city of the Aten'),sc:'egyc',food:1,cold:0,dry:1},
 del:{n:X('หมู่บ้านในบึงกกปาปิรุสของสามเหลี่ยมปากแม่น้ำไนล์','a village in the papyrus marshes of the Nile Delta'),sc:'egypt',food:2,cold:0,dry:0}});
Object.assign(COORD,{mem:[29.85,31.25],giz:[29.98,31.13],aby:[26.18,31.92],the:[25.7,32.64],dem:[25.73,32.6],fay:[29.3,30.84],ele:[24.09,32.89],ama:[27.65,30.9],del:[31.0,31.0]});
for(const k in R6){NEIGH[k]=[];VR[k]=['plain'];R3[k]={vil:99999,share:0,plant:{ya:99999,n:X('ข้าวสาลีเอมเมอร์และข้าวบาร์เลย์','emmer wheat and barley')},ani:['cattle','goat','sheep','pig','donkey'],hunt:'boar',pred:X('จระเข้ที่ซุ่มอยู่ริมน้ำ','A crocodile lurking at the water’s edge')};
  for(const a of ['cattle','goat','sheep','pig','donkey']){DOMYA[a]=DOMYA[a]||{};DOMYA[a][k]=99999}}
FLOODR.push(...Object.keys(R6));DRYR.push(...Object.keys(R6));
SC.egypt={d:['#8cc4e0','#f2dcaa'],n:['#0a0f24','#24203a'],far:'#d8b679',gr:'#6f9346',riv:'#3f7f99',tree:'palm',egy:1,dunes:1};
SC.egyc=Object.assign({},SC.egypt,{cliffs:1,far:'#cfa868'});
SC.egyr=Object.assign({},SC.egypt,{rocks:1});
const RNOTE6={
 mem:X('ตามตำนาน เมมฟิสถูกสร้างโดยกษัตริย์เมเนสราว 3100 ปีก่อนคริสตกาล ตรงรอยต่อระหว่างหุบแม่น้ำกับสามเหลี่ยมปากแม่น้ำ เป็นเมืองหลวงตลอดราชอาณาจักรเก่า สุสานซักการาของเมืองมีพีระมิดขั้นบันไดของพระเจ้าโจเซอร์ ซึ่งเป็นสิ่งก่อสร้างด้วยหินขนาดใหญ่ชิ้นแรกของโลก','By tradition Memphis was founded by King Menes about 3100 BCE where the valley meets the Delta. It was the capital through the Old Kingdom. Its cemetery at Saqqara holds King Djoser’s Step Pyramid, the world’s first large stone building.'),
 giz:X('พีระมิดสามองค์ที่กีซาสร้างให้พระเจ้าคูฟู คาเฟร และเมนคาวเร ราว 2600–2500 ปีก่อนคริสตกาล นักโบราณคดีขุดพบเมืองของคนงานใกล้ๆ มีโรงอบขนมปัง โรงเบียร์ และกระดูกวัวจำนวนมาก รวมทั้งสุสานของคนงานเอง คนสร้างพีระมิดเป็นคนงานที่จัดเป็นทีมและได้รับอาหาร ไม่ใช่ทาสอย่างที่เคยเชื่อกัน','The three pyramids at Giza were built for Khufu, Khafre and Menkaure about 2600–2500 BCE. Archaeologists have found the workers’ town nearby, with bakeries, breweries and masses of cattle bones, and the workers’ own cemetery. The builders were organised, fed crews, not slaves as was once believed.'),
 aby:X('กษัตริย์องค์แรกๆ ของอียิปต์ถูกฝังที่อไบดอส ต่อมาที่นี่กลายเป็นศูนย์กลางลัทธิบูชาเทพโอซิริส ผู้แสวงบุญทิ้งหม้อถวายไว้นับล้านใบ จนชาวบ้านทุกวันนี้เรียกที่นั่นว่า “อุมม์ เอล-กาอับ” แปลว่า “แม่แห่งหม้อ”','Egypt’s first kings were buried at Abydos, which later became the centre of the cult of Osiris. Pilgrims left offering pots by the million; local people today call the site Umm el-Qa’ab, “mother of pots”.'),
 the:X('ธีบส์ (วาเซต) เป็นนครของเทพอามุน มีวิหารคาร์นัคที่สร้างต่อเติมกันมาเกือบสองพันปี ฝั่งตะวันตกของแม่น้ำเป็นเมืองของคนตาย รวมทั้งหุบผากษัตริย์ในราชอาณาจักรใหม่','Thebes (Waset) was the city of Amun, with the temple of Karnak, added to for nearly two thousand years. Across the river lay the city of the dead, including the Valley of the Kings in the New Kingdom.'),
 dem:X('เดร์เอล-เมดินาเป็นหมู่บ้านของช่างผู้สร้างและตกแต่งสุสานหลวงในราชอาณาจักรใหม่ มีบ้านราวเจ็ดสิบหลังในกำแพง นักโบราณคดีพบเศษหินและเศษหม้อที่มีตัวหนังสือนับพันชิ้นในหลุมใหญ่หลุมเดียว บันทึกตั้งแต่รายการซักผ้า หนี้ การทะเลาะกัน ไปจนถึงเพลงรัก ผู้ชายที่นี่อ่านออกเขียนได้มากกว่าที่อื่น','Deir el-Medina was the village of the men who cut and decorated the royal tombs in the New Kingdom, with about seventy houses inside its wall. Thousands of inscribed flakes of stone and pottery were found in one great pit, recording laundry lists, debts, quarrels and love songs. Far more of its men could read than elsewhere.'),
 fay:X('ฟายุมเป็นแอ่งทะเลสาบทางตะวันตกของแม่น้ำไนล์ กษัตริย์ราชอาณาจักรกลางระบายน้ำและบุกเบิกที่นาใหม่ที่นี่ เมืองเชเด็ตบูชาเทพจระเข้โซเบค ส่วนเมืองลาฮูนที่อยู่ใกล้ๆ ทิ้งกระดาษปาปิรุสไว้มากมาย รวมทั้งตำราการแพทย์ของผู้หญิงที่เก่าแก่ที่สุดที่รู้จัก','The Fayum is a lake basin west of the Nile. Middle Kingdom kings drained it and opened new fields. The town of Shedet worshipped the crocodile god Sobek, and nearby Lahun left many papyri, including the oldest known medical text about women’s health.'),
 ele:X('เอเลแฟนทีนเป็นเกาะที่แก่งน้ำตกแห่งแรก ชายแดนกับดินแดนนูเบีย ชื่อเดิม “อาบู” แปลว่าช้าง อาจมาจากการค้างาช้าง ที่นี่มีมาตรวัดระดับน้ำไนล์ ซึ่งใช้ทำนายผลผลิตและกำหนดภาษี','Elephantine is an island at the First Cataract, on the border with Nubia. Its old name, Abu, means “elephant”, perhaps from the ivory trade. It had a Nilometer, used to measure the flood, predict the harvest and set taxes.'),
 ama:X('พระเจ้าอาเคนาเตนสร้างอาเคตาเตน (อามาร์นา) เป็นเมืองหลวงใหม่ของเทพอาเทนราว 1346 ปีก่อนคริสตกาล แล้วเมืองก็ถูกทิ้งร้างหลังจากนั้นไม่ถึงยี่สิบปี โครงกระดูกคนธรรมดาจากสุสานทางใต้ของเมืองแสดงว่าหลายคนทำงานหนักมาก และตายตั้งแต่ยังหนุ่มสาว','Akhenaten built Akhetaten (Amarna) as a new capital for the Aten about 1346 BCE; it was abandoned less than twenty years later. Skeletons of ordinary people from its South Tombs cemetery show heavy labour, and many died young.'),
 del:X('สามเหลี่ยมปากแม่น้ำไนล์เป็นที่ลุ่มกว้างใหญ่ เต็มไปด้วยกกปาปิรุส ทุ่งเลี้ยงวัว ฮิปโป และจระเข้ หลักฐานจากที่นี่รอดมาน้อยกว่าทางใต้มาก เพราะดินชื้นทำลายกระดาษปาปิรุสและอิฐดิบ','The Delta was a vast wetland of papyrus, cattle pastures, hippos and crocodiles. Far less evidence survives from here than from the south, because wet ground destroys papyrus and mud brick.')};
function pickEra6(){const ks=Object.keys(ERA6);return weighted(ks.map(k=>[k,ERA6[k].w]))}
function pickCity6(e,ya){const ks=Object.keys(R6).filter(k=>R6[k].pop[e]&&(k!=='ama'||(ya<=3371&&ya>=3357))&&(k!=='dem'||ya<=3525));return weighted(ks.map(k=>[k,R6[k].pop[e]*(k==='dem'?20:k==='giz'?2:1)]))}
function yaFor6(e){const E=ERA6[e];let ya=Math.round((E.b+rnd()*(E.a-E.b))/5)*5;if(e==='nk'&&rnd()<.05)ya=3360+((rnd()*10)|0);return ya}
const pw6=(rg,ya)=>{const e=era6(ya);return (R6[rg].pop[e]||10)*1000/(ERA6[e].wp*1e6)};

/* ---------- names ---------- */
const G6={
 amun:{l:'Amun',c:'Amen',th:'อามุน',ct:'อาเมน',h:'𓇋𓏠𓈖',d:X('ราชาแห่งเหล่าเทพ','the king of the gods'),e:['mk','nk']},
 ra:{l:'Ra',c:'Ra',th:'รา',ct:'รา',h:'𓂋𓂝𓇳',d:X('เทพสุริยะ','the sun god'),e:['ok','fip','mk','nk']},
 ptah:{l:'Ptah',c:'Ptah',th:'พทาห์',ct:'พทาห์',h:'𓊪𓏏𓎛',d:X('เทพผู้สร้างแห่งเมมฟิส','the creator god of Memphis'),e:['ed','ok','fip','mk','nk']},
 hathor:{l:'Hathor',c:'Hathor',th:'ฮาธอร์',ct:'ฮาธอร์',h:'𓉡',d:X('เทพีแห่งความรัก ดนตรี และเบียร์','the goddess of love, music and beer'),e:['ok','fip','mk','nk']},
 thoth:{l:'Thoth',c:'Djehuty',th:'ธอท',ct:'เจฮูตี',h:'𓅝',d:X('เทพแห่งการเขียนและดวงจันทร์','the god of writing and the moon'),e:['mk','nk']},
 sobek:{l:'Sobek',c:'Sobek',th:'โซเบค',ct:'โซเบค',h:'𓋴𓃀𓎡𓆋',d:X('เทพจระเข้','the crocodile god'),e:['mk','nk']},
 khnum:{l:'Khnum',c:'Khnum',th:'คนุม',ct:'คนุม',h:'𓎸𓅱𓃝',d:X('เทพหัวแกะผู้ปั้นมนุษย์บนแป้นหมุน','the ram-headed god who shapes people on a potter’s wheel'),e:['ok','fip','mk','nk']},
 horus:{l:'Horus',c:'Hor',th:'ฮอรัส',ct:'ฮอร์',h:'𓅃',d:X('เทพเหยี่ยวแห่งความเป็นกษัตริย์','the falcon god of kingship'),e:['ed','ok','fip','mk','nk']},
 montu:{l:'Montu',c:'Mentu',th:'มอนตู',ct:'เมนตู',h:'𓏠𓈖𓏏𓅱',d:X('เทพสงครามแห่งธีบส์','the war god of Thebes'),e:['fip','mk']},
 neith:{l:'Neith',c:'Neith',th:'เนท',ct:'เนท',h:'𓋋',d:X('เทพีแห่งการทอผ้าและสงคราม','the goddess of weaving and war'),e:['ed','ok']},
 aten:{l:'Aten',c:'Aten',th:'อาเทน',ct:'อาเทน',h:'𓇋𓏏𓈖𓇳',d:X('ดวงสุริยะ','the sun disc'),e:[]}};
// pre: prefix pattern; s: sexes; e: eras
const NP6=[
 {pre:0,l:'hotep',th:'โฮเทป',h:'𓊵𓏏𓊪',s:'m',e:['ed','ok','fip','mk','nk'],m:G=>X(G.th+' ทรงพอพระทัย','“'+G.l+' is satisfied”')},
 {pre:0,l:'hotep',th:'โฮเทป',h:'𓊵𓏏𓊪',s:'f',e:['ed','ok'],m:G=>X(G.th+' ทรงพอพระทัย','“'+G.l+' is satisfied”')},
 {pre:0,l:'mose',th:'โมเซ',h:'𓄟𓋴',s:'m',e:['nk'],m:G=>X('ผู้ที่'+G.th+'ให้กำเนิด','“born of '+G.l+'”')},
 {pre:1,l:'Sa',th:'ซา',h:'𓅭',s:'m',e:['fip','mk'],m:G=>X('ลูกชายของ'+G.th,'“son of '+G.l+'”')},
 {pre:1,l:'Sat',th:'ซัต',h:'𓅭𓏏',s:'f',e:['ok','fip','mk'],m:G=>X('ลูกสาวของ'+G.th,'“daughter of '+G.l+'”')},
 {pre:1,l:'Meri',th:'เมรี',h:'𓌻𓂋',s:'m',e:['ok','fip','mk','nk'],m:G=>X('ผู้เป็นที่รักของ'+G.th,'“beloved of '+G.l+'”')},
 {pre:1,l:'Merit',th:'เมริต',h:'𓌻𓂋𓏏',s:'f',e:['ed','ok','fip','mk','nk'],m:G=>X('ผู้เป็นที่รักของ'+G.th,'“beloved of '+G.l+'”')},
 {pre:0,l:'nakht',th:'นัคต์',h:'𓈖𓐍𓏏',s:'m',e:['mk','nk'],m:G=>X(G.th+' ทรงพลัง','“'+G.l+' is strong”')}];
const NWHOLE6=[
 {s:'m',l:'Nakht',th:'นัคต์',h:'𓈖𓐍𓏏',m:X('“ผู้แข็งแรง”','“the strong one”')},{s:'m',l:'Senbi',th:'เซนบี',h:'𓋴𓈖𓃀',m:X('“ผู้แข็งแรงปลอดภัย”','“healthy one”')},
 {s:'m',l:'Hori',th:'โฮรี',h:'𓅃',m:X('“ผู้เป็นของฮอรัส”','“he of Horus”')},
 {s:'f',l:'Nefret',th:'เนเฟรต',h:'𓄤𓆑𓂋𓏏',m:X('“ผู้งดงาม”','“the beautiful one”')},{s:'f',l:'Henut',th:'เฮนุต',h:'𓎛𓈖𓏏',m:X('“นายหญิง”','“mistress”')},
 {s:'f',l:'Baket',th:'บาเกต',h:'𓅡𓎡𓏏',m:X('“ผู้รับใช้หญิง”','“servant girl”')}];
function gods6(S,e){const city=R6[S.rg]?R6[S.rg].g:'ra';
  if(S.rg==='ama'||(e==='nk'&&S.ya<=3371&&S.ya>=3357&&rnd()<.5))return 'aten';
  const ks=Object.keys(G6).filter(k=>G6[k].e.includes(e));
  return weighted(ks.map(k=>[k,k===city?5:(k==='amun'&&e==='nk')?3:(k==='ra'&&e==='ok')?2:1]))}
function genName6(S,sex,e){e=e||era6(S.ya0);
  if(rnd()<.15){const w=pick(NWHOLE6.filter(n=>n.s===sex));return{l:w.l,th:w.th,h:w.h,mean:w.m}}
  const gk=gods6(S,e),G=G6[gk];
  let ps=NP6.filter(p=>p.s===sex&&p.e.includes(e));if(gk==='aten')ps=ps.filter(p=>p.l!=='Sa'&&p.l!=='Sat');if(!ps.length)ps=NP6.filter(p=>p.s===sex);
  const p=pick(ps);
  const l=p.pre?p.l+G.l.toLowerCase():G.c+p.l,th=p.pre?p.th+G.th:G.ct+p.th;
  return{l,th,h:G.h+p.h,mean:p.m(G),god:gk}}
function mkName6(S){const n=genName6(S,S.sex),fa=genName6(S,'m');S.nm6={...n,fa};return X(n.th,n.l)}

/* ---------- careers ---------- */
const CAREERS6={
scribe:{n:X('อาลักษณ์','Scribe'),act:'job',scene:'papyrus',sk:'kn',l:X('จดบันทึกให้วิหารและพระราชา','Keep records for the temple and the king'),ok:S=>S.cls!=='slave'&&(S.cls==='elite'||S.schOK||S.lit>=15),
 L:[X('ศิษย์ในโรงเรียนอาลักษณ์','a pupil of the scribal school'),X('อาลักษณ์','a scribe'),X('อาลักษณ์ผู้ดูแลยุ้งฉาง','scribe of the granary'),X('อาลักษณ์หลวงของพระราชา','a royal scribe')]},
farmer:{n:X('ชาวนา','Farmer'),act:'sow',sk:'kn',ok:S=>S.cls!=='elite',
 L:[X('เด็กไล่นกในนาข้าวสาลี','a child who scares birds from the wheat'),X('ชาวนา','a farmer'),X('ชาวนาที่ทำนาให้ที่ดินใหญ่หลายผืน','a farmer trusted with many of the estate’s fields'),X('ผู้ดูแลนาทั้งหมดของที่ดิน','overseer of the estate’s fields')]},
herder:{n:X('คนเลี้ยงวัว','Cattle herder'),act:'herd',sk:'sv',ok:S=>S.cls!=='elite',
 L:[X('เด็กเลี้ยงวัว','a cattle boy'),X('คนเลี้ยงวัว','a herdsman'),X('คนเลี้ยงฝูงวัวของวิหาร','herdsman of the temple cattle'),X('ผู้ดูแลฝูงวัวของเทพ','overseer of the god’s cattle')]},
fisher:{n:X('คนจับปลาและล่านก','Fisher and fowler'),act:'marsh',sk:'sv',ok:S=>S.cls!=='elite',
 L:[X('เด็กถือตาข่าย','a child who carries the nets'),X('คนจับปลา','a fisherman'),X('คนดักนกที่ตาข่ายไม่เคยว่าง','the fowler whose nets are never empty'),X('หัวหน้าคนหาปลาของบึง','chief of the marsh fishermen')]},
brewer:{n:X('คนทำขนมปังและเบียร์','Baker and brewer'),act:'brew',sk:'cr',ok:S=>true,
 L:[X('ลูกมือโรงขนมปัง','a helper at the bakery'),X('คนทำเบียร์','a brewer'),X('หัวหน้าโรงเบียร์ของที่ดิน','chief brewer of the estate'),X('คนทำเบียร์ของราชสำนัก','brewer to the royal house')]},
potter:{n:X('ช่างปั้นหม้อ','Potter'),act:'job',scene:'craft',sk:'cr',l:X('ปั้นหม้อบนแป้นหมุน','Throw pots on the wheel'),item:'pot',ok:S=>true,
 L:[X('ลูกมือหมุนแป้น','an apprentice at the wheel'),X('ช่างปั้นหม้อ','a potter'),X('ช่างปั้นหม้อของวิหาร','the temple potter'),X('หัวหน้าโรงปั้นหม้อ','master of the potteries')]},
builder:{n:X('ช่างหิน','Stone-cutter'),act:'job',scene:'build6',sk:'cr',l:X('สกัดหินและลากหินให้งานหลวง','Cut and haul stone for the king’s works'),ok:S=>S.sex==='m'&&S.cls!=='elite',
 L:[X('เด็กแบกน้ำให้ทีมคนงาน','a water-carrier for a work gang'),X('ช่างสกัดหิน','a stone-cutter'),X('หัวหน้าทีมคนงาน','foreman of a gang'),X('ผู้ควบคุมงานก่อสร้างหลวง','overseer of the king’s works')]},
embalmer:{n:X('ช่างทำมัมมี่','Embalmer'),act:'job',scene:'embalm',sk:'kn',l:X('ทำมัมมี่และพันผ้าศพ','Embalm and wrap the dead'),ok:S=>S.cls==='free'||S.cls==='dep',
 L:[X('ลูกมือในกระโจมทำศพ','a helper in the embalming tent'),X('ช่างทำมัมมี่','an embalmer'),X('ผู้สวมหน้ากากอนูบิส','the one who wears the jackal mask'),X('หัวหน้าช่างทำมัมมี่','chief of the embalmers')]},
priest:{n:X('นักบวช','Priest'),act:'temple',sk:'so',ok:S=>S.cls==='free'||S.cls==='elite',
 L:[X('ผู้รับใช้ในวิหาร','a temple servant'),X('นักบวชวาบ “ผู้บริสุทธิ์”','a wab priest, “the pure one”'),X('นักบวชผู้อ่านบทสวด','a lector priest who reads the rites'),X('มหาปุโรหิตของวิหาร','high priest of the temple')]},
physician:{n:X('หมอ','Physician'),act:'job',scene:'heal',sk:'kn',l:X('รักษาคนป่วยและคนเจ็บ','Treat the sick and injured'),ok:S=>S.cls==='free'||S.cls==='elite',
 L:[X('ลูกมือหมอ','a physician’s helper'),X('หมอ','a physician'),X('หัวหน้าหมอ','chief physician'),X('หมอประจำวัง','physician of the palace')]},
soldier:{n:X('ทหาร','Soldier'),act:'job',scene:'march',sk:'sv',l:X('ฝึกรบและเฝ้าชายแดน','Drill and guard the frontier'),ok:S=>S.sex==='m'&&S.cls!=='elite',
 L:[X('ทหารเกณฑ์','a levy soldier'),X('ทหาร','a soldier'),X('ผู้ถือธงประจำกอง','a standard-bearer'),X('ผู้บัญชาการกองทัพ','a commander of the army')]}};
const CARNOTE6=X('ในอียิปต์ คนส่วนใหญ่ทำนาบนที่ดินของวิหาร ของพระราชา หรือของขุนนาง ช่างและคนงานผู้เชี่ยวชาญได้ค่าจ้างเป็นขนมปัง เบียร์ และข้าว ลูกมักทำอาชีพเดียวกับพ่อแม่ วรรณกรรมเรื่อง “เสียดสีอาชีพ” จากราชอาณาจักรกลาง เยาะเย้ยงานทุกอย่าง ยกเว้นงานอาลักษณ์','In Egypt most people farmed land belonging to a temple, the king or a noble. Craftsmen and specialists were paid in bread, beer and grain, and children usually followed their parents’ trade. A Middle Kingdom text, the Satire of the Trades, mocks every job except the scribe’s.');
const CLS6={elite:X('ตระกูลขุนนาง ใกล้ชิดวังและวิหาร','a family of officials, close to the palace and temples'),free:X('ครอบครัวชาวนาและช่าง','a family of farmers and craftsmen'),dep:X('คนงานของที่ดินใหญ่ ได้ค่าจ้างเป็นปันส่วน','workers of a great estate, paid in rations'),slave:X('ทาส','enslaved')};
const CLSNOTE6=X('สังคมอียิปต์มีลำดับชั้น จากพระราชา ขุนนาง นักบวช อาลักษณ์ ช่าง ไปจนถึงชาวนาและคนรับใช้ ทาสมีจริง โดยเฉพาะเชลยศึกในราชอาณาจักรใหม่ แต่คนงานส่วนใหญ่ไม่ใช่ทาส ผู้หญิงอียิปต์มีทรัพย์สิน ฟ้องร้อง และหย่าได้ ซึ่งหาได้ยากในโลกโบราณ','Egyptian society was layered, from king, officials, priests and scribes to craftsmen, farmers and servants. Slavery existed, especially war captives in the New Kingdom, but most labourers were not slaves. Egyptian women could own property, go to court and divorce, which was rare in the ancient world.');

function init6(){const e=era6(S.ya0);
  S.era=e;S.cls=weighted([['elite',.05],['free',.5],['dep',.38],['slave',e==='nk'?.08:.03]]);S.settled=1;S.roleNo=1;
  S.lit=S.cls==='elite'?6:0;S.schOK=S.cls==='elite'?(rnd()<.8?1:0):S.cls==='free'?(rnd()<(S.rg==='dem'?.45:.12)?1:0):S.cls==='dep'?(rnd()<.02?1:0):0;
  S.ag=S.cls==='elite'?10:S.cls==='free'?2:0;S.debt=0;S.debtY=0;S.papN=0;S.papK={};S.sinu=0;S.lent=null;S.nameTab=0;S.bod=0;S.tomb=0;S.saw={hippo:1,croc:1};S.ldead=0;
  S.field=S.cls==='free'||S.cls==='dep'?1:0;
  if(S.cls==='free'){S.herd.goat=(rnd()*3)|0;if(rnd()<.5)S.herd.cattle=1;if(rnd()<.3)S.herd.donkey=1;if(rnd()<.3)S.herd.pig=1+((rnd()*2)|0)}
  if(S.cls==='elite'){S.herd.cattle=3+((rnd()*6)|0);S.herd.goat=2+((rnd()*4)|0);S.herd.donkey=2}
}
const NILE6={low:X('น้ำไนล์ปีนี้ขึ้นน้อย น้ำไม่ถึงนาที่อยู่สูง ข้าวในยุ้งต้องเก็บไว้ใช้อย่างประหยัด','The Nile rises too little this year. The water never reaches the higher fields, and the grain must be eked out.'),
 high:X('น้ำไนล์ปีนี้ขึ้นสูงเกินไป ท่วมคันดินและพัดบ้านอิฐดิบในหมู่บ้านพังไปหลายหลัง','The Nile rises too high this year. It breaks the dykes and washes away several mud-brick houses in the village.'),
 good:X('น้ำไนล์ขึ้นพอดี ทิ้งโคลนดำไว้ทั่วนา ปีนี้ข้าวจะงาม','The Nile rises just right and leaves black mud over the fields. It will be a fine harvest.')};
const NILENOTE=X('ทุกปี ราวเดือนกรกฎาคม แม่น้ำไนล์จะเอ่อท่วมจากฝนในเอธิโอเปีย ทิ้งตะกอนดำไว้บนนา ชาวอียิปต์เรียกดินแดนของตัวเองว่า “เคเมต” แปลว่า “ดินแดนดำ” น้ำขึ้นน้อยไปทำให้อดอยาก ขึ้นมากไปทำลายหมู่บ้าน รัฐวัดระดับน้ำด้วยมาตรวัดไนล์ เพื่อคาดการณ์ผลผลิตและกำหนดภาษี เขื่อนอัสวานซึ่งสร้างเสร็จในปี 1970 ทำให้น้ำไม่ท่วมแบบนี้อีก','Every year, around July, the Nile flooded with rain from Ethiopia and left black silt on the fields. Egyptians called their land Kemet, “the black land”. Too low a flood meant famine; too high destroyed villages. The state measured the river with Nilometers to predict the harvest and set taxes. The Aswan High Dam, finished in 1970, ended the flood.');
function nile6(){if(!S||S.ch!==6)return;const e=era6(S.ya);const lowP=e==='fip'?.45:.17;S.nile=weighted([['low',lowP],['high',.13],['good',1-lowP-.13]]);
  S.yt=S.nile==='low'?'dry':S.nile==='good'?'good':'wet'}
function v6Year(a){if(S.ch!==6)return;const e=era6(S.ya);S.era=e;
  fx({f:{elite:5,free:1,dep:0,slave:-2}[S.cls]||0});
  if(S.cls==='slave'&&a>=8)S.yr+=.004;if(S.cls==='elite')S.yr-=.002;
  if(S.nile==='low'){fx({f:S.cls==='dep'?-3:-6});if(rnd()<.25||!S.nileN)log(NILE6.low,S.nileN?null:(S.nileN=1,NILENOTE),'sad')}
  else if(S.nile==='high'){fx({b:-2,f:-2});if(rnd()<.2||!S.nileN)log(NILE6.high,S.nileN?null:(S.nileN=1,NILENOTE),'sad')}
  else if(a>=5&&!S.nileG&&rnd()<.25){S.nileG=1;fx({f:3});log(NILE6.good,S.nileN?null:(S.nileN=1,NILENOTE),'it')}
  if(['marsh','fish','herd'].includes(S.focus))S.yr+=.003;
  if(a>=14&&S.car&&S.clv>=1)S.ag+=S.clv;
  if(S.focus==='school'){S.lit=clamp(S.lit+5+(hasT('mem')?2:0)+S.kn/40,0,100);S.schY=(S.schY||0)+1}
  if(S.focus==='job'&&S.car==='scribe')S.lit=clamp(S.lit+3,0,100);
  if(S.focus==='write'||(S.focus==='job'&&S.car==='scribe')){S.lit=clamp(S.lit+1,0,100);if(rnd()<.7){S.papN+=1+((rnd()*3)|0);const k=pick(S.car==='scribe'?['account','account','letter','list','copy']:['account','letter','letter']);S.papK[k]=(S.papK[k]||0)+1;
    if(!S.wroteN){S.wroteN=1;ms(X('เขียนกระดาษปาปิรุสแผ่นแรกด้วยมือตัวเอง','Wrote on papyrus with your own hand'))}}}
  if(S.focus==='read'){S.lit=clamp(S.lit+1,0,100);S.readN=(S.readN||0)+1}
  if(!S.nameTab&&a>=1&&(S.cls!=='elite'||a>=12)&&rnd()<.08){S.nameTab=1;log(X('อาลักษณ์ของที่ดินเขียนชื่อของคุณลงในบัญชีคนงาน คุณอ่านไม่ออก แต่นั่นคือชื่อของคุณ','A scribe of the estate writes your name in the list of workers. You cannot read it, but that is your name.'),X('ชาวอียิปต์เชื่อว่าชื่อ (เรน) เป็นส่วนหนึ่งของตัวตน ถ้าชื่อยังถูกเอ่ยถึง คนผู้นั้นก็ยังอยู่ การลบชื่อใครออกจากจารึกจึงเหมือนฆ่าเขาซ้ำอีกครั้ง','Egyptians believed the name (ren) was part of the self: while your name was spoken, you lived on. Erasing someone’s name from a monument was like killing them a second time.'),'it');ms(X('ชื่อของคุณถูกเขียนลงบนกระดาษปาปิรุส','Your name was written on papyrus'))}
  if(S.debt>0){S.debtY++;S.debt=Math.ceil(S.debt*1.2);
    if(S.ag>=S.debt){S.ag-=S.debt;log(X('คุณใช้หนี้ครบ เจ้าหนี้ลบชื่อคุณออกจากเศษหม้อที่จดหนี้ไว้','You pay the debt in full, and the creditor scratches your name off the potsherd where he noted it.'),null,'it');S.debt=0;S.debtY=0}
    else if(S.debtY>=3){const k=Object.keys(S.herd).find(k=>S.herd[k]>0);if(k)addHerd(k,-1);S.debt=0;S.debtY=0;fx({b:-6,p:-4});
      log(k?X('เจ้าหนี้ฟ้องคุณต่อศาลหมู่บ้าน ศาลสั่งให้คุณสาบานในนามของพระราชาว่าจะใช้หนี้ แล้วยึด'+ANI[k].n.th+'ไปหนึ่งตัว','Your creditor takes you before the village court. You must swear by the king’s name to pay, and the court seizes one of your '+ANI[k].n.en+'.'):X('เจ้าหนี้ฟ้องคุณต่อศาลหมู่บ้าน ศาลสั่งให้คุณสาบานในนามของพระราชาว่าจะใช้หนี้ แล้วยึดข้าวของในบ้านไป','Your creditor takes you before the village court. You must swear by the king’s name to pay, and the court seizes goods from your house.'),X('ศาลท้องถิ่นของอียิปต์เรียกว่า “เคนเบต” มีชาวบ้านและเจ้าหน้าที่นั่งพิจารณาด้วยกัน คนที่สาบานในนามพระราชาแล้วผิดคำอาจถูกลงโทษหนัก บันทึกจากเดร์เอล-เมดินาแสดงว่าคดีหนี้เล็กๆ บางคดีลากยาวหลายปี','Egypt’s local courts, the kenbet, were made up of villagers and officials. Breaking an oath sworn by the king’s name could bring harsh punishment. Records from Deir el-Medina show some small debt cases dragging on for years.'),'sad');ms(X('ถูกฟ้องต่อศาลเพราะหนี้','Taken to court over a debt'))}}
  const ya=S.ya,once=(k,f)=>{if(!S.tl)S.tl={};if(S.tl[k])return;S.tl[k]=1;f()};
  if(ya<=5100&&ya>=5085)once('narmer',()=>{fx({b:-1});log(X('ข่าวมาถึงว่ากษัตริย์จากทางใต้ตีได้ดินแดนสามเหลี่ยมปากแม่น้ำ และสวมมงกุฎของทั้งสองแผ่นดิน','Word comes that a king from the south has conquered the Delta and wears the crowns of both lands.'),X('จานสีนาร์เมอร์ ราว 3100 ปีก่อนคริสตกาล แสดงกษัตริย์แห่งอียิปต์บนกำลังฟาดศัตรู มักถูกอ่านว่าเป็นภาพการรวมอียิปต์ แม้การรวมจริงอาจใช้เวลาหลายชั่วคน','The Narmer Palette, about 3100 BCE, shows a king of Upper Egypt striking an enemy. It is often read as the unification of Egypt, though the real process probably took generations.'),'cl')});
  if(ya<=4695&&ya>=4680&&['mem','del'].includes(S.rg))once('djoser',()=>{fx({b:2});log(X('ที่ซักการา ภูเขาหินขั้นบันไดค่อยๆ สูงขึ้นเหนือสุสานของพระราชา ผู้คนบอกว่าผู้ออกแบบคืออิมโฮเทป ขุนนางคนสำคัญของพระองค์','At Saqqara a stepped mountain of stone rises over the king’s tomb. People say it was designed by Imhotep, his chief official.'),X('พีระมิดขั้นบันไดของพระเจ้าโจเซอร์ ราว 2670 ปีก่อนคริสตกาล เป็นสิ่งก่อสร้างด้วยหินขนาดใหญ่ชิ้นแรกที่รู้จัก ต่อมาอิมโฮเทปถูกบูชาเป็นเทพแห่งการแพทย์และปัญญา','King Djoser’s Step Pyramid, about 2670 BCE, is the first large stone building known. Imhotep was later worshipped as a god of medicine and wisdom.'),'cl')});
  if(ya<=4614&&ya>=4592&&['mem','giz','del','aby'].includes(S.rg))once('khufu',()=>{fx({b:1});log(X('พีระมิดของพระราชาที่กีซาสูงขึ้นทุกปี ทีมคนงานจากทุกหมู่บ้านผลัดกันมาลากหิน','Each year the king’s pyramid at Giza grows taller. Crews from every village take turns hauling the stone.'),X('มหาพีระมิดของพระเจ้าคูฟูสูงราว 146 เมตร เป็นสิ่งก่อสร้างที่สูงที่สุดในโลกนานราว 3,800 ปี บันทึกประจำวันของหัวหน้าทีมชื่อเมเรอร์ ซึ่งเขียนบนกระดาษปาปิรุสราว 2560 ปีก่อนคริสตกาล เล่าการขนหินปูนทางเรือมาที่กีซา และเป็นกระดาษปาปิรุสที่มีตัวหนังสือเก่าที่สุดเท่าที่รู้จัก','Khufu’s Great Pyramid, about 146 metres tall, was the tallest structure on Earth for some 3,800 years. The logbook of a team leader named Merer, written about 2560 BCE, records shipping limestone to Giza; it is the oldest inscribed papyrus known.'),'cl')});
  if(ya<=4200&&ya>=4150)once('famine6',()=>{fx({f:-10,h:-3});log(X('น้ำไนล์ขึ้นน้อยติดกันหลายปี ยุ้งของหลายเมืองว่างเปล่า ผู้คนเดินทางไกลเพื่อหาข้าว','For years in a row the Nile rises too little. Many towns’ granaries stand empty, and people walk far in search of grain.'),X('จารึกในสุสานของอังค์ทิฟี ผู้ปกครองท้องถิ่นราว 2100 ปีก่อนคริสตกาล อวดว่าเขาเลี้ยงคนหิวโหย ขณะที่ “อียิปต์บนทั้งหมดกำลังอดตาย” หลายคนเชื่อมโยงยุคนี้กับความแห้งแล้งทั่วโลกเมื่อราว 4,200 ปีก่อน แต่ยังถกเถียงกัน','The tomb of Ankhtifi, a local ruler about 2100 BCE, boasts that he fed the hungry while “all of Upper Egypt was dying of hunger”. Many link this time to the worldwide drought of about 4,200 years ago, though this is debated.'),'sad')});
  if(ya<=4082&&ya>=4070&&['the','aby','ele'].includes(S.rg))once('mentu',()=>{fx({b:3});log(X('กองทัพของพระเจ้าเมนทูโฮเทปจากธีบส์รวมแผ่นดินกลับเป็นหนึ่งเดียวอีกครั้ง','The army of King Mentuhotep of Thebes unites the land once more.'),X('พระเจ้าเมนทูโฮเทปที่ 2 รวมอียิปต์อีกครั้งราว 2055 ปีก่อนคริสตกาล เริ่มต้นราชอาณาจักรกลาง','Mentuhotep II reunited Egypt about 2055 BCE, beginning the Middle Kingdom.'),'cl')});
  if(ya<=3860&&ya>=3800&&S.rg==='fay')once('fayum',()=>{fx({f:4});log(X('พระราชาส่งคนงานมาขุดคลองและระบายน้ำจากทะเลสาบ ที่นาผืนใหม่โผล่ขึ้นมาจากบึง','The king sends workers to dig canals and drain the lake. New fields rise out of the marsh.'),X('กษัตริย์ราชอาณาจักรกลาง โดยเฉพาะพระเจ้าอาเมนเอมฮัตที่ 3 พัฒนาที่ดินในฟายุมอย่างมาก วิหารที่ฝังพระศพของพระองค์ที่ฮาวารา ถูกนักเขียนกรีกเรียกว่า “เขาวงกต”','Middle Kingdom kings, above all Amenemhat III, greatly developed the Fayum. His mortuary temple at Hawara was called “the Labyrinth” by Greek writers.'),'cl')});
  if(ya<=3500&&ya>=3485&&['the','dem'].includes(S.rg))once('punt',()=>{fx({b:3,kn:2});log(X('เรือกลับมาจากดินแดนพุนต์อันไกลโพ้น บรรทุกต้นกำยานทั้งต้นที่ปลูกในตะกร้า ลิงบาบูน และหนังเสือดาว ทั้งเมืองออกมาดู','Ships return from distant Punt with whole incense trees growing in baskets, baboons and leopard skins. The whole city comes out to watch.'),X('ราชินีฮัตเชปซุต (ครองราชย์ราว 1479–1458 ปีก่อนคริสตกาล) ส่งคณะเดินทางไปพุนต์ ภาพสลักบนวิหารที่เดร์เอล-บาห์รีเล่าเรื่องนี้ พุนต์น่าจะอยู่แถบทะเลแดงตอนใต้หรือจะงอยแอฟริกา การศึกษาไอโซโทปในมัมมี่ลิงบาบูนช่วยระบุตำแหน่ง','Queen Hatshepsut (reigned about 1479–1458 BCE) sent an expedition to Punt, carved on her temple at Deir el-Bahari. Punt was probably on the southern Red Sea or the Horn of Africa; isotopes in mummified baboons have helped locate it.'),'cl')});
  if(ya<=3413&&ya>=3400)once('bulls',()=>{S.saw.aurochs=1;S.sc6a={k:'aurochs',age:S.age};log(X('ข่าวเล่าว่าพระราชาออกล่าวัวป่าในทะเลทราย และล่าได้ 96 ตัวในการล่าครั้งเดียว','Word spreads that the king hunted wild bulls in the desert and killed 96 of them in one hunt.'),X('แมลงสคารับที่ระลึกของพระเจ้าอาเมนโฮเทปที่ 3 บันทึกการล่าวัวป่าครั้งนี้ วัวป่าคือวัวออรอคส์ บรรพบุรุษของวัวบ้าน ซึ่งสูญพันธุ์ไปจากโลกเมื่อตัวสุดท้ายตายในโปแลนด์ปี ค.ศ. 1627','A commemorative scarab of Amenhotep III records this hunt. The wild bulls were aurochs, the ancestors of cattle; the species died out when the last one died in Poland in 1627.'),'cl')});
  if(ya<=3371&&ya>=3357)once('amarna',()=>{fx({b:-2});log(X('พระราชาประกาศว่ามีเทพองค์เดียวที่ควรบูชา คือดวงสุริยะอาเทน คนงานออกไปสกัดชื่อเทพอามุนออกจากกำแพงวิหาร','The king proclaims that only one god should be worshipped: the Aten, the sun disc. Workmen go out to chisel the name of Amun off the temple walls.'),X('พระเจ้าอาเคนาเตน (ครองราชย์ราว 1353–1336 ปีก่อนคริสตกาล) ยกเทพอาเทนเหนือเทพองค์อื่น หลังสิ้นรัชกาล ทุกอย่างถูกเปลี่ยนกลับ และชื่อของพระองค์ถูกลบออกจากบัญชีกษัตริย์ แต่ในบ้านคนธรรมดาที่อามาร์นา นักโบราณคดียังพบรูปเทพเบสและเทพีทาเวเรต','Akhenaten (reigned about 1353–1336 BCE) raised the Aten above all other gods. After his death it was all reversed and his name left out of the king lists. Yet in ordinary houses at Amarna archaeologists still found figures of Bes and Taweret.'),'cl')});
  if(ya<=3349&&ya>=3346)once('tut',()=>{log(X('ข่าวมาถึงว่าพระราชาหนุ่มสิ้นพระชนม์แล้ว อายุยังไม่ถึงยี่สิบ','Word comes that the young king has died, not yet twenty years old.'),X('ตุตันคาเมนสิ้นพระชนม์ราว 1323 ปีก่อนคริสตกาล การศึกษา DNA พบเชื้อมาลาเรียในมัมมี่ของพระองค์ สุสานของพระองค์ที่ฮาวเวิร์ด คาร์เตอร์ขุดพบในปี ค.ศ. 1922 เป็นสุสานในหุบผากษัตริย์ที่สมบูรณ์ที่สุด ทั้งที่พระองค์เป็นกษัตริย์ที่ไม่ได้สำคัญนัก','Tutankhamun died about 1323 BCE; DNA studies found malaria in his mummy. His tomb, found by Howard Carter in 1922, is the best-preserved tomb in the Valley of the Kings, though he was a minor king.'),'cl')});
  if(ya<=3300&&ya>=3297)once('kadesh',()=>{fx({b:1});log(X('ทหารที่กลับมาเล่าว่ากองทัพของพระราชาเกือบถูกตีแตกที่เมืองคาเดช แต่จารึกบนกำแพงวิหารกลับประกาศว่าพระองค์ได้ชัยชนะยิ่งใหญ่','Returning soldiers say the king’s army was nearly routed at Kadesh, yet the temple walls proclaim a mighty victory.'),X('ศึกคาเดชระหว่างรามเสสที่ 2 กับชาวฮิตไทต์ ปี 1274 ปีก่อนคริสตกาล ทั้งสองฝ่ายอ้างว่าชนะ ราวสิบหกปีต่อมาทั้งสองทำสนธิสัญญาสันติภาพ ซึ่งเป็นหนึ่งในสนธิสัญญาสันติภาพที่เก่าที่สุดที่ยังมีตัวบทเหลืออยู่','At Kadesh in 1274 BCE Ramesses II fought the Hittites; both sides claimed victory. About sixteen years later they made a peace treaty, one of the oldest whose text survives.'),'cl')});
  if(ya<=3203&&ya>=3199)once('seapeople',()=>{fx({b:-2});log(X('ข่าวว่ากองเรือของคนแปลกหน้าจากทะเลบุกมาที่ปากแม่น้ำ กองทัพของพระราชาไปรับมือ','Word comes that a fleet of strangers from the sea has attacked the river mouths, and the king’s army goes to meet them.'),X('ภาพสลักที่วิหารเมดิเนตฮาบูของรามเสสที่ 3 แสดงการรบกับ “ชาวทะเล” ราว 1177 ปีก่อนคริสตกาล ช่วงนี้หลายอาณาจักรรอบทะเลเมดิเตอร์เรเนียนล่มสลาย อียิปต์รอดแต่อ่อนแอลง','Reliefs at Ramesses III’s temple of Medinet Habu show battles with the “Sea Peoples” about 1177 BCE. Many kingdoms around the Mediterranean collapsed at this time; Egypt survived, weakened.'),'cl')});
}
function trade6Year(){const ks=Object.keys(S.inv).filter(k=>S.inv[k]>0&&k!=='grain').sort((a,b)=>INV[b].v-INV[a].v);
  if(!ks.length){if(rnd()<.4){S.ag+=1;log(X('คุณช่วยขนกระสอบข้าวลงเรือที่ท่า ได้ค่าแรงเป็นขนมปังและเบียร์มูลค่าราวหนึ่งเดเบน','You help load sacks of grain onto the boats and earn bread and beer worth about a deben.'),null,'it')}return}
  const k=ks[0];S.inv[k]--;const v=INV[k].v+(S.so>50?1:0);S.ag+=v;
  log(X('คุณแลก'+invName(k)+'ที่ตลาดริมแม่น้ำ ได้ของมูลค่า '+v+' เดเบน','You trade '+invName(k)+' at the riverbank market for goods worth '+v+' deben'),S.agNote?null:(S.agNote=1,X('อียิปต์ไม่มีเหรียญ ผู้คนแลกของกับของ แต่คิดมูลค่าเป็น “เดเบน” ซึ่งเป็นน้ำหนักของทองแดง (ราว 91 กรัมในราชอาณาจักรใหม่) หรือเป็นกระสอบข้าว บันทึกการซื้อวัวตัวหนึ่งอาจจ่ายด้วยผ้าลินิน น้ำมัน และตะกร้า รวมกันให้ได้ตามราคา','Egypt had no coins. People swapped goods, but reckoned value in deben, a weight of copper (about 91 grams in the New Kingdom), or in sacks of grain. A record of buying an ox might list linen, oil and a basket that together made up the price.')),'it')}
function title6(S){
  if(S.car&&S.age>=12&&S.clv>=1)return CAREERS6[S.car].L[S.clv];
  if(S.age<13)return S.cls==='slave'?X('เด็กทาส','an enslaved child'):S.cls==='elite'?X('ลูกขุนนาง','a child of an official’s family'):X('เด็กริมแม่น้ำไนล์','a child of the Nile');
  if(S.car)return CAREERS6[S.car].L[S.clv];
  if(S.lit>=60)return X('ผู้อ่านออกเขียนได้ หนึ่งในคนจำนวนน้อย','one of the few who can read');
  return {elite:X('สมาชิกตระกูลขุนนาง','a member of an official’s family'),free:X('ชาวนาอิสระ','a free farmer'),dep:X('คนงานรับปันส่วนของที่ดินใหญ่','an estate worker paid in rations'),slave:X('ทาส','an enslaved person')}[S.cls]}
