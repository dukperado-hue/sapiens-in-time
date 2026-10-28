/* ===================== v0.42: History of Stuff — a learning mode built on the same engine (Thai only) ===================== */
/* courses: 17 equations (idea: Ian Stewart 2012), 17 molecules (idea: Le Couteur & Burreson, Napoleon's Buttons 2003; Nicolaou & Montagnon, Molecules That Changed the World 2008); all text is our own and checked */
const XS=t=>X(t,t);
const MOL42=/*MOL42*/null;

/* ---------- courses on the shelf ---------- */
const STUFF42=[
 {k:'eq',ic:'📐',t:'17 สมการที่เปลี่ยนโลก',s:'จากเชือกผูกปมของช่างรังวัด ถึงสูตรที่ทำให้ตลาดการเงินพัง',src:'แนวคิดจาก 17 Equations That Changed the World ของ Ian Stewart (2012)'},
 {k:'mol',ic:'⚗️',t:'17 โมเลกุลที่เปลี่ยนประวัติศาสตร์',s:'กลิ่นกานพลู กะลาสีฟันโยก และเสื้อยืดที่ทำจากน้ำตาล',src:'แนวคิดจาก Napoleon\'s Buttons ของ Penny Le Couteur และ Jay Burreson (2003) และ Molecules That Changed the World ของ K. C. Nicolaou และ Tamsyn Montagnon (2008)'},
 {k:'tee',ic:'👕',t:'การเดินทางของเสื้อยืดหนึ่งตัว',s:'ไร่ฝ้ายเท็กซัส โรงงานจีน กำแพงภาษี และตลาดเสื้อมือสอง',src:'แนวคิดจาก The Travels of a T-Shirt in the Global Economy ของ Pietra Rivoli',soon:1},
 {k:'cloth',ic:'🧵',t:'ผ้า: ด้ายที่ถักทออารยธรรม',s:'ฝ้าย ไหม ขนแกะ สีย้อม และเครื่องทอ',soon:1},
 {k:'spice',ic:'🌶️',t:'เครื่องเทศ',s:'เกาะเล็กๆ ที่ทำให้ยุโรปออกเรือไปทั่วโลก',soon:1},
 {k:'cod',ic:'🐟',t:'ปลาค็อด',s:'ปลาที่เลี้ยงกองเรือ สร้างเมือง และเกือบหมดทะเล',soon:1},
 {k:'med',ic:'💊',t:'ยา',s:'จากเปลือกต้นไม้และเชื้อราสู่โรงงานยา',soon:1},
 {k:'inno',ic:'💡',t:'นวัตกรรม',s:'ทำไมความคิดดีๆ มักเกิดพร้อมกันหลายที่',soon:1},
 {k:'mat',ic:'🧱',t:'วัสดุ',s:'ดิน หิน โลหะ แก้ว ยาง พลาสติก และซิลิคอน',soon:1},
 {k:'stuff',ic:'🗃️',t:'ของ 28 อย่าง',s:'เกลือ น้ำตาล ม้า กระดาษ ถ่านหิน และเชื้อโรค',soon:1}];

/* ---------- the 17 equations as lessons: the equation speaks, then you use it ---------- */
/* pov: the thing speaks · use: [question, [label, right?, feedback]...] · mis: a mission from v0.38 · item: what goes in your museum */
const LESEQ42={
 pyth:{pov:'ฉันอยู่ในทุ่งนามาก่อนจะมีใครตั้งชื่อให้ ทุกครั้งที่มีคนขึงเชือกเพื่อหามุมที่ตั้งตรง ฉันอยู่ตรงนั้นเสมอ',
  use:['คุณมีเชือกหนึ่งเส้นผูกปมแบ่งเป็น 12 ช่วงเท่าๆ กัน จะขึงให้เป็นสามเหลี่ยมมุมฉาก ต้องแบ่งสามด้านอย่างไร',
   [['3, 4 และ 5 ช่วง',1,'ถูกต้อง 3² + 4² = 9 + 16 = 25 = 5² มุมระหว่างด้าน 3 กับ 4 จึงตั้งฉากพอดี'],['4, 4 และ 4 ช่วง',0,'สามด้านเท่ากันได้สามเหลี่ยมด้านเท่า ทุกมุมเป็น 60 องศา ไม่มีมุมฉาก'],['2, 5 และ 5 ช่วง',0,'2² + 5² = 29 ไม่เท่ากับ 5² = 25 จึงไม่ใช่มุมฉาก']]],
  mis:'field',item:'🪢 เชือกผูกปม 12 ช่วง'},
 log:{pov:'ฉันเปลี่ยนงานที่ยากให้เป็นงานที่ง่าย ใครที่ต้องคูณเลขยาวๆ ทั้งคืน ฉันให้เขาบวกแทน',
  use:['ในตาราง log 100 = 2 และ log 1,000 = 3 ถ้าจะหา 100 × 1,000 ด้วยตาราง ต้องทำอย่างไร',
   [['บวก 2 + 3 = 5 แล้วเปิดตารางย้อนกลับ ได้ 100,000',1,'ถูกต้อง การคูณกลายเป็นการบวก นี่คือเหตุที่ต้นหนและนักดาราศาสตร์รักตารางนี้'],['คูณ 2 × 3 = 6 ได้ 1,000,000',0,'ถ้าคูณ log จะได้คำตอบผิด ลอการิทึมของผลคูณคือผลบวกของลอการิทึม'],['ลบ 3 − 2 = 1 ได้ 10',0,'การลบ log ใช้กับการหาร 1,000 ÷ 100 = 10 ไม่ใช่การคูณ']]],
  mis:'navi',item:'📏 ไม้บรรทัดคำนวณ'},
 calc:{pov:'ฉันเห็นสิ่งที่ตาคนมองไม่ทัน ความเร็วในเสี้ยววินาทีเดียว และความชันของเส้นโค้งตรงจุดเดียว',
  use:['ลูกปืนใหญ่ตกลงมา คุณอยากรู้ว่ามันเร็วแค่ไหนในวินาทีที่ผ่านยอดเสากระโดงเรือพอดี ต้องทำอย่างไร',
   [['วัดระยะที่มันเคลื่อนในช่วงเวลาที่สั้นลงเรื่อยๆ รอบจุดนั้น แล้วดูว่าความเร็วเฉลี่ยเข้าใกล้ค่าไหน',1,'ถูกต้อง นี่คือความคิดของอนุพันธ์ ความเร็วขณะหนึ่งคือขีดจำกัดของความเร็วเฉลี่ยในช่วงเวลาที่สั้นมาก'],['เอาความสูงทั้งหมดหารด้วยเวลาที่ตกทั้งหมด',0,'นั่นคือความเร็วเฉลี่ยตลอดทาง ลูกปืนเร่งขึ้นตลอด ความเร็วตอนผ่านเสาจึงไม่เท่าค่าเฉลี่ย'],['ไม่มีทางรู้ เพราะในเสี้ยววินาทีมันไม่ได้เคลื่อนที่',0,'นี่คือปริศนาของซีโนเมื่อสองพันกว่าปีก่อน แคลคูลัสตอบได้ว่าความเร็วขณะหนึ่งมีค่าแน่นอน']]],
  item:'🎯 ลูกปืนใหญ่กับเสากระโดง'},
 grav:{pov:'ฉันดึงแอปเปิลลงดิน และดึงดวงจันทร์ไว้ไม่ให้หนีไปไหน แรงเดียวกัน กฎเดียวกัน',
  use:['ถ้าดาวเทียมขึ้นไปอยู่ห่างจากศูนย์กลางโลกเป็นสองเท่าของเดิม แรงดึงของโลกจะเหลือเท่าไร',
   [['เหลือหนึ่งในสี่',1,'ถูกต้อง แรงแปรผกผันกับ r² ระยะเพิ่มสองเท่า แรงจึงลดเป็น 1/(2×2) = 1/4'],['เหลือครึ่งหนึ่ง',0,'ถ้าแรงลดตาม r เฉยๆ จะเหลือครึ่ง แต่กฎของนิวตันใช้ r ยกกำลังสอง'],['เท่าเดิม เพราะดาวเทียมมวลเท่าเดิม',0,'มวลเท่าเดิมก็จริง แต่ระยะห่างอยู่ในสมการด้วย และมีผลมาก']]],
  mis:'apollo',item:'🌙 ตัวเลขชุดที่พาไปดวงจันทร์'},
 imag:{pov:'คนเรียกฉันว่าเลขที่ไม่มีจริงอยู่สองร้อยปี วันนี้ฉันอยู่ในทุกปลั๊กไฟในบ้านคุณ',
  use:['ถ้า i × i = −1 แล้ว i × i × i × i เท่ากับเท่าไร',
   [['1',1,'ถูกต้อง (i × i) × (i × i) = (−1) × (−1) = 1 การคูณ i หนึ่งครั้งเหมือนหมุนไปหนึ่งในสี่รอบ ครบสี่ครั้งก็กลับที่เดิม'],['−1',0,'นั่นคือ i × i สองตัว ลองจับเป็นคู่ (i × i) × (i × i) ดู'],['−4',0,'การคูณ i ไม่ได้บวกกันเป็นสี่ ลองจับเป็นคู่ (i × i) × (i × i) ดู']]],
  item:'🔌 ปลั๊กไฟกระแสสลับ'},
 euler:{pov:'บิดฉัน ยืดฉัน บีบฉันแค่ไหนก็ได้ ตราบที่ไม่เจาะรู ฉันจะได้สองเสมอ',
  use:['ลูกฟุตบอลแบบดั้งเดิมมี 32 หน้า (ห้าเหลี่ยม 12 หน้า หกเหลี่ยม 20 หน้า) และมี 90 สัน มันมีกี่มุม',
   [['60 มุม',1,'ถูกต้อง V − E + F = 2 จึงได้ V = 2 + 90 − 32 = 60'],['58 มุม',0,'ลองแทนค่าใหม่ V = 2 + E − F'],['62 มุม',0,'ลองแทนค่าใหม่ V = 2 + E − F']]],
  item:'⚽ ลูกฟุตบอลห้าเหลี่ยมหกเหลี่ยม'},
 norm:{pov:'คนส่วนใหญ่อยู่ใกล้กลางของฉัน คนส่วนน้อยอยู่ที่ขอบ ถ้ามีมากเกินกว่าที่ฉันบอก แปลว่ามีอะไรผิดปกติ',
  use:['ทหารกองหนึ่งสูงเฉลี่ย 165 ซม. ส่วนเบี่ยงเบนมาตรฐาน 5 ซม. ถ้าเจอคนสูง 185 ซม. คนนี้หายากแค่ไหน',
   [['ห่างค่าเฉลี่ย 4 σ หายากมาก ไม่ถึงหนึ่งในหมื่นคน',1,'ถูกต้อง (185 − 165) ÷ 5 = 4 ในรูประฆัง คนที่สูงเกิน 4 σ มีราวสามคนในแสนคน'],['ห่าง 2 σ เจอได้ราวหนึ่งในสี่สิบคน',0,'20 ซม. คือ 4 เท่าของ σ ไม่ใช่ 2 เท่า'],['เจอได้ในทุกหมู่บ้าน',0,'ถ้าส่วนสูงเป็นรูประฆังจริง คนที่ห่างค่าเฉลี่ยขนาดนี้หายากมาก']]],
  mis:'ward',item:'📊 สมุดจดตัวเลขหอผู้ป่วย'},
 wave:{pov:'ฉันวิ่งไปตามสายพิณ ผิวน้ำ และใต้พื้นดินตอนแผ่นดินไหว ฉันพาเสียงมาถึงหูคุณ',
  use:['ถ้าขันสายพิณให้ตึงขึ้น คลื่นบนสายจะวิ่งเร็วขึ้น (c มากขึ้น) เสียงที่ได้จะเป็นอย่างไร',
   [['สูงขึ้น',1,'ถูกต้อง สายยาวเท่าเดิมแต่คลื่นวิ่งเร็วขึ้น สายจึงสั่นถี่ขึ้น ความถี่สูงคือเสียงสูง'],['ต่ำลง',0,'คลื่นวิ่งเร็วขึ้นบนสายยาวเท่าเดิม ทำให้สั่นถี่ขึ้น ไม่ใช่ช้าลง'],['เท่าเดิม แค่ดังขึ้น',0,'ความดังขึ้นกับว่าดีดแรงแค่ไหน แต่ความสูงต่ำของเสียงขึ้นกับความถี่']]],
  item:'🪕 สายพิณ'},
 fourier:{pov:'ฉันฟังเสียงวงดนตรีทั้งวง แล้วแยกออกให้ดูได้ว่ามีเสียงสูงต่ำอะไรอยู่บ้าง เหมือนปริซึมแยกแสงเป็นสีรุ้ง',
  use:['เพลงจากวิทยุมีเสียงซ่ารบกวนแหลมๆ ปนอยู่ วิศวกรอยากเอาเสียงซ่าออกโดยไม่ให้เสียงกลองทุ้มหายไป ต้องทำอย่างไร',
   [['แยกสัญญาณออกเป็นความถี่ แล้วลดเฉพาะความถี่สูงที่เป็นเสียงซ่า',1,'ถูกต้อง นี่คือตัวกรองความถี่ เครื่องเสียง โทรศัพท์ และไฟล์เพลงทุกไฟล์ใช้ความคิดนี้'],['ลดเสียงทั้งหมดลงครึ่งหนึ่ง',0,'เสียงซ่าเบาลงก็จริง แต่เพลงก็เบาลงเท่ากัน สัดส่วนไม่เปลี่ยน'],['เปิดให้ดังขึ้น เสียงเพลงจะกลบเสียงซ่า',0,'เสียงซ่าก็ดังขึ้นด้วยในอัตราเดียวกัน']]],
  item:'📻 วิทยุหลอดสุญญากาศ'},
 navier:{pov:'ฉันอยู่ในสายน้ำ ในลมรอบปีกนก และในพายุ ฉันง่ายพอจะเขียนได้ในบรรทัดเดียว แต่ยากพอที่ไม่มีใครแก้ฉันได้หมด',
  use:['ทำไมการพยากรณ์อากาศต้องใช้คอมพิวเตอร์ขนาดใหญ่ ทั้งที่รู้สมการอยู่แล้ว',
   [['สมการนี้ไม่มีสูตรคำตอบสำเร็จรูป ต้องแบ่งท้องฟ้าเป็นช่องเล็กๆ นับล้านช่อง แล้วคำนวณทีละก้าวเวลา',1,'ถูกต้อง แบบจำลองอากาศคำนวณความเร็วลม ความดัน และอุณหภูมิในแต่ละช่อง ซ้ำไปเรื่อยๆ ทีละไม่กี่นาทีของเวลาจริง'],['เพราะลมไม่มีกฎที่แน่นอน ต้องเดาด้วยสถิติอย่างเดียว',0,'ลมมีกฎ คือสมการนี้ ปัญหาคือมันคำนวณยาก ไม่ใช่ไม่มีกฎ'],['เพราะต้องเก็บรูปเมฆไว้เป็นจำนวนมาก',0,'ข้อมูลสำคัญก็จริง แต่งานหนักที่สุดคือการคำนวณสมการของไหล']]],
  item:'🌀 แผนที่ลมพายุ'},
 maxwell:{pov:'ฉันพบว่าไฟฟ้ากับแม่เหล็กไล่ตามกันเป็นคลื่น และคลื่นนั้นวิ่งเร็วเท่ากับสิ่งที่คนรู้จักมาตลอด',
  use:['แมกซ์เวลล์คำนวณความเร็วของคลื่นไฟฟ้าและแม่เหล็กได้ราว 300,000 กิโลเมตรต่อวินาที ตัวเลขนี้บอกอะไร',
   [['เท่ากับความเร็วแสง แปลว่าแสงคือคลื่นแม่เหล็กไฟฟ้า',1,'ถูกต้อง ไฟฟ้า แม่เหล็ก และแสง กลายเป็นเรื่องเดียวกัน และทำนายว่ามีคลื่นที่ตามองไม่เห็นด้วย ซึ่งไฮน์ริช แฮทซ์ พบในปี 1887'],['เท่ากับความเร็วเสียง',0,'เสียงวิ่งราว 343 เมตรต่อวินาทีในอากาศ ช้ากว่าเกือบล้านเท่า'],['เป็นความบังเอิญ ไม่มีความหมายอะไร',0,'แมกซ์เวลล์เองเห็นว่ามันบังเอิญเกินไป จึงสรุปว่าแสงเป็นคลื่นชนิดเดียวกัน']]],
  item:'📡 เสาอากาศวิทยุ'},
 entropy:{pov:'ฉันคือเหตุผลที่ชาร้อนเย็นลงเองแต่ไม่เคยร้อนขึ้นเอง และเหตุผลที่เครื่องจักรทุกเครื่องต้องทิ้งความร้อนบางส่วน',
  use:['นักประดิษฐ์ชวนคุณลงทุนในเรือที่ดึงความร้อนจากน้ำทะเลมาหมุนใบพัด โดยไม่ต้องใช้เชื้อเพลิงและไม่มีที่ไหนเย็นกว่าน้ำทะเลให้ทิ้งความร้อน คุณจะลงทุนไหม',
   [['ไม่ เครื่องจักรความร้อนต้องมีที่เย็นกว่าให้ความร้อนไหลไป',1,'ถูกต้อง นี่คือกฎข้อที่สองในรูปที่ลอร์ดเคลวินเขียนไว้ ความร้อนจากที่อุณหภูมิเดียวเปลี่ยนเป็นงานทั้งหมดไม่ได้'],['ลงทุน เพราะทะเลมีความร้อนมหาศาล',0,'ทะเลมีพลังงานความร้อนมากจริง แต่ถ้าไม่มีที่เย็นกว่า ความร้อนก็ไม่ไหล และไม่มีงานออกมา'],['ลงทุน ถ้าเรือแล่นช้าพอ',0,'ความเร็วไม่เกี่ยว ไม่ว่าช้าแค่ไหน เครื่องแบบนี้ก็ขัดกับกฎข้อที่สอง']]],
  item:'🚂 หม้อไอน้ำ'},
 emc2:{pov:'ในเศษเสี้ยวของมวลที่เล็กที่สุด ฉันซ่อนพลังงานไว้มากพอจะส่องแสงดวงอาทิตย์ หรือทำลายเมืองทั้งเมือง',
  use:['ถ้ามวลหนึ่งกรัมเปลี่ยนเป็นพลังงานทั้งหมด จะได้พลังงานมากแค่ไหน',
   [['ระดับเดียวกับระเบิดที่ฮิโรชิมา',1,'ถูกต้อง 0.001 × (300,000,000)² ราว 9 × 10¹³ จูล เท่ากับระเบิดทีเอ็นทีราวสองหมื่นตัน ระเบิดที่ฮิโรชิมามีมวลที่หายไปไม่ถึงหนึ่งกรัม'],['เท่าถ่านไฟฉายหนึ่งก้อน',0,'ถ่านไฟฉายปล่อยพลังงานจากเคมี ซึ่งน้อยกว่าการเปลี่ยนมวลเป็นพลังงานหลายสิบล้านเท่า'],['เท่าไม้ขีดหนึ่งก้าน',0,'c² เป็นตัวเลขที่ใหญ่มาก มวลนิดเดียวจึงเท่ากับพลังงานมหาศาล']]],
  item:'☀️ แสงดวงอาทิตย์'},
 schro:{pov:'ในโลกที่เล็กกว่าอะตอม ไม่มีอะไรอยู่ที่จุดเดียวแน่นอน ฉันบอกแค่ว่ามันน่าจะอยู่ตรงไหน และนั่นก็พอจะสร้างชิปในโทรศัพท์ของคุณ',
  use:['กลศาสตร์ควอนตัมเกี่ยวอะไรกับโทรศัพท์มือถือ',
   [['ทรานซิสเตอร์ในชิปทำงานได้เพราะเข้าใจพฤติกรรมของอิเล็กตรอนในสารกึ่งตัวนำ ซึ่งสมการนี้อธิบาย',1,'ถูกต้อง ทรานซิสเตอร์ตัวแรกปี 1947 และชิปทุกตัวหลังจากนั้นออกแบบด้วยความรู้จากกลศาสตร์ควอนตัม'],['ไม่เกี่ยว ควอนตัมเป็นเรื่องของนักฟิสิกส์ในห้องทดลองเท่านั้น',0,'ของใช้ทุกวันหลายอย่าง ทั้งชิป เลเซอร์ และไฟ LED ออกแบบจากความรู้นี้'],['โทรศัพท์ใช้ควอนตัมส่งข้อความไปทันทีโดยไม่ต้องมีสัญญาณ',0,'ข้อความยังเดินทางด้วยคลื่นวิทยุตามสมการของแมกซ์เวลล์ ไม่มีอะไรส่งข้อมูลได้เร็วกว่าแสง']]],
  item:'🔬 ทรานซิสเตอร์ตัวแรก'},
 shannon:{pov:'ฉันวัดว่าข่าวหนึ่งข่าวมีความใหม่อยู่เท่าไร ข่าวที่เดาได้อยู่แล้วแทบไม่มีค่าสำหรับฉัน',
  use:['เหรียญอันหนึ่งออกหัวทุกครั้ง ไม่เคยออกก้อยเลย ถ้ามีคนโยนแล้วบอกผลคุณ คุณได้ข่าวสารกี่บิต',
   [['0 บิต',1,'ถูกต้อง คุณรู้คำตอบอยู่แล้ว จึงไม่ได้อะไรใหม่ ถ้าเป็นเหรียญปกติที่ออกหัวกับก้อยเท่ากัน จะได้ 1 บิต'],['1 บิต',0,'1 บิตคือข่าวสารของเหรียญปกติที่ออกหัวกับก้อยโอกาสเท่ากัน เหรียญนี้คุณเดาได้ทุกครั้ง'],['2 บิต',0,'2 บิตคือการเลือกหนึ่งในสี่ทางที่โอกาสเท่ากัน']]],
  item:'💾 ข่าวสารหนึ่งบิต'},
 chaos:{pov:'ฉันง่ายจนเด็กคำนวณได้ แต่เปลี่ยนตัวเลขเริ่มต้นนิดเดียว ผลของฉันก็ไปคนละทาง',
  use:['นักพยากรณ์รันแบบจำลองสองครั้ง ค่าเริ่มต้นต่างกันแค่ 0.001 องศา แต่ผลพยากรณ์อีกหนึ่งเดือนข้างหน้าต่างกันมาก แปลว่าอะไร',
   [['ความต่างเล็กๆ ขยายใหญ่ขึ้นเรื่อยๆ การทำนายระยะยาวจึงมีขีดจำกัด',1,'ถูกต้อง นักพยากรณ์จึงรันแบบจำลองหลายสิบครั้งแล้วดูว่าผลส่วนใหญ่ไปทางไหน และบอกเป็นโอกาส เช่น ฝนตก 70 เปอร์เซ็นต์'],['คอมพิวเตอร์คำนวณผิด',0,'คอมพิวเตอร์คำนวณถูกทั้งสองครั้ง ระบบนี้เองที่ไวต่อค่าเริ่มต้น'],['ต้องใช้แบบจำลองที่ใหม่กว่าก็จะแม่นได้ตลอดไป',0,'แบบจำลองดีขึ้นช่วยได้ แต่ความไวต่อค่าเริ่มต้นเป็นธรรมชาติของบรรยากาศเอง']]],
  item:'🦋 ผีเสื้อของลอเรนซ์'},
 bs:{pov:'ฉันให้ราคากับความเสี่ยง และทำให้คนเชื่อว่าความเสี่ยงคำนวณได้ บางวันคนเชื่อฉันมากเกินไป',
  use:['สมการนี้ถือว่าราคาหุ้นแกว่งแบบรูประฆัง และซื้อขายได้ตลอดเวลา ในวันที่ตลาดตื่นตระหนก ราคาร่วงทีละมากๆ และไม่มีใครรับซื้อ จะเกิดอะไรขึ้น',
   [['สูตรประเมินความเสี่ยงต่ำเกินไป คนที่เชื่อสูตรเต็มที่อาจขาดทุนหนัก',1,'ถูกต้อง เหตุการณ์สุดขั้วเกิดบ่อยกว่าที่รูประฆังบอก กองทุน LTCM ขาดทุนจนต้องให้ธนาคารรวมเงินกันช่วยในปี 1998'],['ไม่มีผลอะไร สูตรได้รางวัลโนเบลแล้ว',0,'รางวัลไม่ได้ทำให้ข้อสมมติเป็นจริงในวันที่ตลาดผิดปกติ'],['สูตรจะปรับตัวเองอัตโนมัติ',0,'สูตรใช้ข้อสมมติเดิม คนที่ใช้ต้องรู้เองว่าวันไหนข้อสมมติไม่จริง']]],
  item:'📉 กระดาษคำนวณราคาสัญญา'}};

/* ---------- molecules: three lessons for now ---------- */
const MOLLIST42=['พริกไทย ลูกจันทน์ และกานพลู','วิตามินซี','กลูโคส','เซลลูโลส','สารประกอบไนโตร','ไหมและไนลอน','ฟีนอล','ไอโซพรีนและยาง','สีย้อม','ยาปฏิชีวนะ','ยาเม็ดคุมกำเนิด','สมุนไพรของแม่มด','มอร์ฟีน นิโคติน และคาเฟอีน','กรดโอเลอิกและน้ำมันมะกอก','เกลือ','สารคลอโรคาร์บอน','ยาสู้มาลาเรีย'];
const LESMOL42=[
 {k:'spice',n:0,t:'กานพลูกับเกาะที่แลกกับแมนแฮตตัน',m:'eugenol',mn:'ยูจีนอล (C₁₀H₁₂O₂)',
  pov:'ฉันชื่อยูจีนอล โมเลกุลเล็กๆ ที่ทำให้กานพลูหอมฉุน ญาติของฉันอยู่ในลูกจันทน์และพริกไทย คนเดินเรือข้ามครึ่งโลกเพื่อกลิ่นของพวกเรา และฆ่ากันเพื่อเป็นเจ้าของต้นไม้ที่สร้างพวกเรา',
  sc:'ปี 1667 เมืองเบรดา ประเทศเนเธอร์แลนด์ สงครามระหว่างอังกฤษกับดัตช์กำลังจะจบ คุณเป็นผู้ช่วยทูตฝ่ายดัตช์ บนโต๊ะมีสองเรื่อง เกาะรันในหมู่เกาะบันดา เกาะเล็กๆ ที่มีต้นจันทน์เทศ ซึ่งอังกฤษอ้างสิทธิ์ และนิวอัมสเตอร์ดัม เมืองท่าในอเมริกาที่อังกฤษยึดไปเมื่อสามปีก่อน คุณจะเสนอให้ฝ่ายดัตช์ทำอย่างไร',
  o:[['ยอมให้อังกฤษเก็บนิวอัมสเตอร์ดัม แลกกับเกาะรัน เพื่อผูกขาดลูกจันทน์ทั้งโลก','real','นี่คือสิ่งที่เกิดขึ้นจริง ทั้งสองฝ่ายตกลงให้ต่างคนต่างเก็บสิ่งที่ยึดไว้ ดัตช์ได้เกาะรัน อังกฤษได้นิวอัมสเตอร์ดัม ซึ่งเปลี่ยนชื่อเป็นนิวยอร์ก ดัตช์ผูกขาดลูกจันทน์ได้อีกราว 150 ปี จนอังกฤษยึดหมู่เกาะบันดาได้ช่วงสงครามนโปเลียน และย้ายต้นจันทน์ไปปลูกที่ศรีลังกา เกรนาดา และสิงคโปร์'],
   ['ทวงนิวอัมสเตอร์ดัมคืน ปล่อยเกาะรันให้อังกฤษ','sim','นี่คือการจำลอง ไม่ใช่ประวัติศาสตร์ ไม่มีใครรู้ว่าเมืองนั้นจะเป็นอย่างไรถ้ายังเป็นของดัตช์ แต่สิ่งที่รู้คือ ตอนนั้นคนส่วนใหญ่คิดว่าเกาะที่มีลูกจันทน์มีค่ามากกว่าเมืองท่าในป่าหนาวทางเหนือ คนในยุคนั้นตัดสินจากสิ่งที่เห็นตรงหน้า']],
  fact:['ยูจีนอลเป็นสารหลักในน้ำมันกานพลู และยังใช้ในคลินิกทันตกรรมผสมกับซิงก์ออกไซด์ทำวัสดุอุดฟันชั่วคราว เพราะช่วยลดอาการปวด','กลิ่นของพริกไทยมาจากโมเลกุลพิเพอรีน ส่วนลูกจันทน์มีไมริสติซินและไอโซยูจีนอล ซึ่งมีโครงวงแหวนคล้ายกัน','อังกฤษเคยมีคนอยู่บนเกาะรัน นาธาเนียล คอร์ทโฮป กับคนราวสี่สิบคนต้านดัตช์ไว้ได้ 1,540 วัน จนเขาถูกยิงตายในปี 1620'],
  cost:'ก่อนหน้านั้นในปี 1621 บริษัทอินเดียตะวันออกของดัตช์ นำโดยยาน ปีเตอร์ซูน คุน บุกหมู่เกาะบันดาเพื่อผูกขาดลูกจันทน์ คนบันดาราว 15,000 คนเหลือรอดบนเกาะเพียงราวหนึ่งพัน ที่เหลือถูกฆ่า อดตาย ถูกจับเป็นทาส หรือถูกส่งไปปัตตาเวีย ดัตช์แบ่งเกาะเป็นสวนให้เจ้าของไร่ชาวดัตช์ แล้วนำทาสจากที่อื่นมาทำงาน กลิ่นหอมในครัวยุโรปมีราคาที่คนอีกฟากโลกจ่าย',
  note:'✦ เรื่อง "แลกเกาะรันกับแมนแฮตตัน" เป็นการเล่าแบบย่อ ในสนธิสัญญาเบรดาไม่มีข้อความว่าแลกกัน แต่เป็นการตกลงให้ต่างฝ่ายเก็บสิ่งที่ยึดอยู่ ซึ่งมีผลแบบเดียวกัน',
  game:'ในเกมชีวิต: บท 16 โลกใหม่ (นิวอัมสเตอร์ดัม/นิวยอร์ก)',item:'🌰 ลูกจันทน์จากเกาะรัน',
  src:[['Run (island) · Wikipedia','https://en.wikipedia.org/wiki/Run_(island)'],['Dutch conquest of the Banda Islands · Wikipedia','https://en.wikipedia.org/wiki/Dutch_conquest_of_the_Banda_Islands']]},
 {k:'vitc',n:1,t:'กะลาสีที่ฟันโยก',m:'ascorbic',mn:'กรดแอสคอร์บิก หรือวิตามินซี (C₆H₈O₆)',
  pov:'ฉันชื่อกรดแอสคอร์บิก สัตว์ส่วนใหญ่สร้างฉันได้เอง แต่คน ลิงหลายชนิด หนูตะเภา และค้างคาวบางชนิดทำไม่ได้ เพราะยีนที่ใช้สร้างฉันเสียไปนานแล้ว ถ้าร่างกายคุณขาดฉันหลายเดือน คอลลาเจนที่ยึดร่างกายไว้จะพัง เหงือกบวมเลือดออก ฟันโยก และแผลเก่าที่หายแล้วจะเปิดออกอีก',
  sc:'เดือนพฤษภาคม ปี 1747 บนเรือรบอังกฤษเอชเอ็มเอสซอลส์บรี คุณเป็นศัลยแพทย์ประจำเรือ กะลาสีสิบสองคนป่วยด้วยโรคลักปิดลักเปิด ทุกคนบนเรือมีความเห็นว่ายาอะไรรักษาได้ ทั้งน้ำแอปเปิลหมัก กรดกำมะถันเจือจาง น้ำส้มสายชู น้ำทะเล ส้มกับมะนาว และยาถ่าย คุณจะทำอย่างไร',
  o:[['แบ่งคนป่วยเป็นหกคู่ ให้แต่ละคู่ได้ยาคนละอย่าง กินอาหารเหมือนกัน แล้วเทียบกัน','real','นี่คือสิ่งที่เจมส์ ลินด์ ทำจริง คู่ที่ได้ส้มกับมะนาวดีขึ้นเร็วที่สุด คนหนึ่งกลับไปทำงานได้ในหกวัน อีกคนหายพอจะช่วยพยาบาลคนอื่น การเทียบแบบนี้เป็นหนึ่งในการทดลองทางการแพทย์แบบมีกลุ่มเปรียบเทียบที่เก่าที่สุดที่มีบันทึก'],
   ['ให้ทุกคนกินยาที่หมอผู้ใหญ่เชื่อ คือกรดกำมะถันเจือจาง','sim','นี่คือการจำลอง ถ้าทุกคนได้ยาเดียวกัน คุณจะไม่มีวันรู้ว่ายาอื่นดีกว่าหรือไม่ และในการทดลองจริงของลินด์ คู่ที่ได้กรดกำมะถันก็ไม่ดีขึ้นเท่าคู่ที่ได้ผลไม้'],
   ['ให้ทุกคนกินทุกอย่างพร้อมกัน เผื่ออะไรสักอย่างได้ผล','sim','นี่คือการจำลอง ถ้าคนหายจริง คุณก็บอกไม่ได้ว่าเพราะอะไร เรือลำต่อไปจะต้องขนยาหกอย่างไปด้วย และยังป่วยต่อถ้าขาดผลไม้']],
  fact:['ลินด์พิมพ์ผลการทดลองในหนังสือปี 1753 แต่ตัวเขาเองยังคิดว่าโรคนี้เกิดจากความชื้นและอาหารที่ย่อยยากด้วย และไม่ได้สรุปว่าผลไม้คือคำตอบเดียว','กองทัพเรืออังกฤษเริ่มแจกน้ำมะนาวเหลืองให้กะลาสีทุกวันในปี 1795 สี่สิบแปดปีหลังการทดลอง หลังจากเซอร์กิลเบิร์ต เบลน ผลักดัน','วิตามินซีถูกแยกได้ในช่วงปี 1928–1932 โดยอัลแบร์ต แซ็นต์-เจอร์จี และทีมอื่นๆ ก่อนหน้านั้นไม่มีใครรู้ว่าในผลไม้มีอะไรที่รักษาโรคนี้'],
  cost:'ก่อนมีคำตอบ โรคนี้คร่ากะลาสีไปมากในยุคเดินเรือไกล การเดินทางรอบโลกที่เริ่มโดยมาเจลลันในปี 1519 เสียลูกเรือไปจำนวนมากด้วยความอดอยากและโรคนี้ระหว่างข้ามมหาสมุทรแปซิฟิก ความรู้ที่มีอยู่แล้วต้องรอเกือบห้าสิบปีกว่าจะกลายเป็นนโยบาย',
  note:'คำว่า "ไลมีย์" ที่ใช้เรียกกะลาสีอังกฤษ มาจากน้ำมะนาวที่แจกบนเรือ ต่อมาเมื่อเปลี่ยนไปใช้มะนาวพันธุ์ที่มีวิตามินซีน้อยกว่า และน้ำผลไม้ถูกต้มหรือเก็บไว้นาน โรคนี้จึงกลับมาอีกในการสำรวจบางครั้งช่วงปลายศตวรรษที่ 19',
  game:'ในเกมชีวิต: บท 16 โลกใหม่ (กะลาสีและนักล่าวาฬ)',item:'🍋 มะนาวในถังไม้ของเรือรบ',
  src:[['The mysteries of James Lind and scurvy · Hektoen International','https://hekint.org/2017/01/29/the-mysteries-of-james-lind-and-scurvy/'],['The Genetics of Vitamin C Loss in Vertebrates · PMC','https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3145266/']]},
 {k:'cell',n:3,t:'น้ำตาลที่เรากินไม่ได้แต่สวมใส่ได้',m:'cellulose',mn:'เซลลูโลส (C₆H₁₀O₅)ₙ',
  pov:'ฉันชื่อเซลลูโลส ฉันคือน้ำตาลกลูโคสหลายพันโมเลกุลที่ต่อกันเป็นสายยาวและตรง แป้งในข้าวก็เป็นกลูโคสต่อกันเหมือนฉัน แต่มุมของข้อต่อต่างกันนิดเดียว ท้องคุณย่อยแป้งได้ แต่ย่อยฉันไม่ได้ ใยฝ้ายในเสื้อยืดที่คุณใส่อยู่ เกือบทั้งหมดคือฉัน',
  sc:'ราวปี 1846 ข่าวมาถึงอังกฤษว่านักเคมีชาวเยอรมันในเมืองบาเซิล คริสเตียน เชินไบน์ เอาฝ้ายแช่กรดไนตริกผสมกรดกำมะถัน แล้วได้ฝ้ายที่ลุกไหม้วูบเดียวโดยแทบไม่มีควัน แรงกว่าดินปืนดำ บริษัทหนึ่งเสนอให้คุณร่วมทุนสร้างโรงงาน "ฝ้ายดินปืน" ที่เมืองเฟเวอร์แชม คุณจะทำอย่างไร',
  o:[['ลงทุนสร้างโรงงานทันที กองทัพต้องการมาก','real','นี่คือสิ่งที่เกิดขึ้นจริง วันที่ 14 กรกฎาคม 1847 โรงงานฝ้ายดินปืนที่เฟเวอร์แชมระเบิด คนงานตาย 18 คน ระบุศพได้แค่ 10 คน เจ้าของปิดโรงงาน และไม่มีใครผลิตฝ้ายดินปืนที่นั่นอีกจนปี 1873 เพราะยังไม่มีใครรู้วิธีล้างกรดที่ค้างอยู่ในใยฝ้ายออกให้หมด'],
   ['รอจนกว่าจะมีวิธีทำให้มันปลอดภัย','real','นี่ใกล้กับสิ่งที่เกิดขึ้น ในทศวรรษ 1860 เฟรเดอริก เอเบล นักเคมีของกองทัพอังกฤษ พบว่าต้องตีใยฝ้ายให้ละเอียดแล้วล้างหลายครั้ง กรดที่ค้างอยู่จึงออกหมด ฝ้ายดินปืนจึงผลิตได้อย่างปลอดภัยกว่าเดิม และกลายเป็นดินปืนไร้ควันในเวลาต่อมา'],
   ['ไม่ทำวัตถุระเบิด แต่ละลายมันในอีเทอร์กับแอลกอฮอล์ ลองทำเป็นวัสดุใหม่','real','นี่ก็เกิดขึ้นจริงในอีกทางหนึ่ง สารละลายนี้เรียกว่าคอลโลเดียน อเล็กซานเดอร์ พาร์กส์ เอามันผสมน้ำมันและการบูร ทำเป็นพาร์กสีน โชว์ในงานนิทรรศการที่ลอนดอนปี 1862 ต่อมาจอห์น เวสลีย์ ไฮแอตต์ ในอเมริกา ทำเป็นเซลลูลอยด์ ใช้ทำลูกบิลเลียดแทนงาช้าง แล้วกลายเป็นฟิล์มภาพยนตร์ยุคแรก ซึ่งติดไฟง่ายมาก']],
  fact:['กลูโคสในแป้งต่อกันด้วยข้อต่อแบบแอลฟา ส่วนในเซลลูโลสเป็นแบบบีตา สายของเซลลูโลสจึงยืดตรงและเกาะกันแน่นเป็นเส้นใย ร่างกายคนไม่มีเอนไซม์ตัดข้อต่อแบบนี้ วัวและปลวกย่อยได้เพราะมีจุลินทรีย์ในท้องช่วย','เซลลูโลสเป็นสารอินทรีย์ที่มีมากที่สุดในโลก อยู่ในผนังเซลล์ของพืชทุกชนิด ทั้งไม้ กระดาษ ฝ้าย และผ้าลินิน','ใยฝ้ายเกือบทั้งหมดคือเซลลูโลส ฝ้ายจึงเป็นหนึ่งในเซลลูโลสที่บริสุทธิ์ที่สุดในธรรมชาติ'],
  cost:'ฝ้ายดินปืนและดินปืนไร้ควันทำให้ปืนยิงได้ไกลขึ้นและสนามรบไม่มีม่านควันบัง สงครามในศตวรรษที่ 20 ใช้วัตถุระเบิดจากเซลลูโลสเป็นจำนวนมหาศาล ส่วนโรงงานเซลลูลอยด์และโรงหนังยุคฟิล์มไนเตรตก็เกิดไฟไหม้ครั้งใหญ่หลายครั้ง',
  note:'✦ เรื่องที่เชินไบน์ทำกรดหกในครัว แล้วเอาผ้ากันเปื้อนฝ้ายของภรรยามาเช็ด ตากไว้ข้างเตาจนผ้าลุกวาบหายไปโดยไม่มีควัน เป็นเรื่องที่เล่าต่อกันมาและน่าจะแต่งเติมบางส่วน',
  game:'ในเกมชีวิต: บท 18 ยุคเครื่องจักร (โรงปั่นฝ้ายแมนเชสเตอร์)',item:'🧶 ใยฝ้ายหนึ่งปุย',
  src:[['Faversham explosives industry · Wikipedia','https://en.wikipedia.org/wiki/Faversham_explosives_industry'],['Schönbein and guncotton · McGill OSS','https://www.mcgill.ca/oss/node/10242'],['Cellulose · New World Encyclopedia','https://www.newworldencyclopedia.org/entry/Cellulose']]}];
const MOLNOTE42='"17 โมเลกุลที่เปลี่ยนประวัติศาสตร์" ใช้แนวคิดจากหนังสือ Napoleon\'s Buttons (2003) และ Molecules That Changed the World (2008) เนื้อหาในเกมเขียนใหม่ทั้งหมดและตรวจกับแหล่งอื่น ✦ ชื่อหนังสือเล่มแรกมาจากตำนานว่ากระดุมดีบุกในเครื่องแบบทหารของนโปเลียนแตกเป็นผงในความหนาวของรัสเซียปี 1812 ดีบุกบริสุทธิ์เปลี่ยนเป็นผงเทาได้จริงเมื่อเย็นต่ำกว่า 13.2 องศา แต่ต้องใช้เวลานานมาก และไม่มีบันทึกของทหารที่รอดกลับมาคนไหนเล่าเรื่องกระดุมแตกเลย (ที่มา: Tin pest · Wikipedia)';

/* ---------- progress ---------- */
const stB42=()=>{try{const b=book29();b.stuff=b.stuff||{done:{},mus:{}};b.stuff.done=b.stuff.done||{};b.stuff.mus=b.stuff.mus||{};return b}catch(e){return {stuff:{done:{},mus:{}},eqM:{},eq:{}}}};
const stSave42=b=>{try{if(!TEST)store.set('sit.book',b)}catch(e){}};
const LESX42={mol:{list:MOLLIST42,les:LESMOL42,note:()=>MOLNOTE42}};
const stLes42=c=>c==='eq'?EQ37.map((E,i)=>({k:E.k,n:i,t:L(E.n),E,D:LESEQ42[E.k]})):LESX42[c]?LESX42[c].les:[];
const stSeen42=()=>{try{return (book29().stuff||{}).seen||{}}catch(e){return {}}};
const stDone42=c=>{const d=stB42().stuff.done;return stLes42(c).filter(l=>d[c+'.'+l.k]).length};
function stMark42(c,l,item){const B=stB42();B.stuff.done[c+'.'+l]=1;if(item)B.stuff.mus[c+'.'+l]=item;stSave42(B)}

/* ---------- molecules drawn as pixels ---------- */
function molCanvas42(key,bl){const M=MOL42&&MOL42[key];const c=document.createElement('canvas');if(!M){c.width=c.height=1;return c}bl=bl||14;
  let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;for(const a of M.a){x0=Math.min(x0,a[1]);x1=Math.max(x1,a[1]);y0=Math.min(y0,a[2]);y1=Math.max(y1,a[2])}
  const pad=10,W=Math.ceil((x1-x0)*bl+pad*2),H=Math.ceil((y1-y0)*bl+pad*2);c.width=W;c.height=H;const x=c.getContext('2d');
  const P=a=>[pad+(a[1]-x0)*bl,pad+(y1-a[2])*bl];x.lineCap='square';
  for(const [i,j,o] of M.b){const [ax,ay]=P(M.a[i]),[bx,by]=P(M.a[j]);x.strokeStyle='#b8a8d8';x.lineWidth=2;x.beginPath();x.moveTo(ax,ay);x.lineTo(bx,by);x.stroke();
    if(o===2){const dx=bx-ax,dy=by-ay,l=Math.hypot(dx,dy),nx=-dy/l*3,ny=dx/l*3;x.beginPath();x.moveTo(ax+nx+dx*.15,ay+ny+dy*.15);x.lineTo(bx+nx-dx*.15,by+ny-dy*.15);x.stroke()}}
  for(const a of M.a){const [px,py]=P(a);const col=a[0]==='O'?'#ff6a5a':a[0]==='N'?'#6a9aff':'#6a6a7a';x.fillStyle='#120f1e';x.fillRect(px-4,py-4,8,8);x.fillStyle=col;x.fillRect(px-3,py-3,6,6);if(a[0]!=='C'){x.fillStyle='#ffd8d0';x.fillRect(px-1,py-2,2,2)}}
  c.style.cssText='image-rendering:pixelated;display:block;margin:8px auto;max-width:100%;width:'+Math.min(W*3,620)+'px';return c}

/* ---------- the classroom ---------- */
function stCss42(){eqCss37();if(document.getElementById('st42css'))return;const st=document.createElement('style');st.id='st42css';
  st.textContent='#st42{position:fixed;inset:0;background:#0b0907;z-index:93;overflow:auto;padding:18px 14px}#st42 .w{max-width:680px;margin:0 auto}#st42 h2{font-family:var(--display);color:var(--bone);margin:0 0 4px}#st42 .sub{color:var(--ash);font-size:13px;margin:0 0 10px}'+
  '#st42 .crs{display:flex;gap:12px;align-items:flex-start;border:1px solid var(--line);background:var(--soot);border-radius:10px;padding:12px 14px;margin:10px 0;cursor:pointer;text-align:left;width:100%;color:inherit;font:inherit}#st42 .crs.soon{opacity:.55;cursor:default}#st42 .crs .ic{font-size:28px;line-height:1}#st42 .crs b{color:#c8b8ff;font-size:16px}#st42 .crs .d{font-size:13px;color:var(--ash);margin-top:2px}#st42 .crs .pr{font-size:12px;color:#ffe2a8;margin-top:4px}'+
  '#st42 .les{display:flex;justify-content:space-between;gap:8px;border:1px solid var(--line);border-radius:8px;padding:9px 12px;margin:6px 0;background:#141018;cursor:pointer;width:100%;color:inherit;font:inherit;text-align:left}#st42 .les.ok{border-color:#6a8a5a}#st42 .les.off{opacity:.5;cursor:default}#st42 .les span{font-size:14px}#st42 .les i{font-style:normal;font-size:12px;color:var(--ash)}'+
  '#st42 .pov{font-size:16px;line-height:1.75;color:#ffe2a8;border-left:3px solid #8a7ad8;padding:6px 12px;margin:12px 0}#st42 .sc{font-size:15px;line-height:1.7;margin:10px 0}#st42 .op{display:block;width:100%;text-align:left;margin:8px 0;background:#1e1838;border:1px solid #4a3a8a;color:#e8e0ff;border-radius:8px;padding:10px 12px;font-size:14.5px;cursor:pointer;line-height:1.5}#st42 .op.r{border-color:#6a9a5a;background:#1a2a18}#st42 .op.x{border-color:#9a4a4a;background:#2a1414}'+
  '#st42 .fb{font-size:14.5px;line-height:1.7;margin:10px 0;padding:10px 12px;border-radius:8px;background:#141018;border:1px solid var(--line)}#st42 .tag{display:inline-block;font-size:11.5px;padding:1px 8px;border-radius:9px;margin-right:6px}#st42 .tag.real{background:#2a4a2a;color:#cfe8c0}#st42 .tag.sim{background:#4a3a1a;color:#ffe2a8}'+
  '#st42 ul.fa{padding-left:18px;margin:6px 0}#st42 ul.fa li{font-size:14px;line-height:1.65;margin:4px 0}#st42 .cost{font-size:14px;line-height:1.7;border-left:3px solid #9a4a4a;padding:4px 10px;margin:10px 0;color:#f0d8d0}#st42 .nt{font-size:12.5px;color:var(--ash);border-left:2px solid var(--line);padding-left:8px;line-height:1.6}'+
  '#st42 .mus{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px;margin:8px 0}#st42 .mus div{background:var(--soot);border:1px solid var(--line);border-radius:8px;padding:6px 8px;font-size:12.5px}#st42 .nav{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}#st42 .step{font-size:12px;color:#8a7ad8;letter-spacing:.05em}#st42 .chips{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}#st42 .chips button{background:#1e1838;border:1px solid #4a3a8a;color:#e8e0ff;border-radius:8px;padding:4px 10px;font-size:14px;cursor:pointer}#st42 .chips button.on{background:#4a3a8a}#st42 .mean{font-size:13.5px;color:#ffe2a8;min-height:1.4em}#st42 .btn:disabled{opacity:.38;cursor:not-allowed;filter:grayscale(.6)}#st42 .op.h{border-style:dashed;border-color:#8ac87a}#st42 .src a{color:#c8b8ff;font-size:12.5px}#st42 .src{font-size:12.5px;color:var(--ash);margin:8px 0}#st42 details.soon summary{cursor:pointer;color:var(--ash);font-size:14px;margin:14px 0 4px}';document.head.appendChild(st)}
function stShell42(){stCss42();let el=document.getElementById('st42');if(!el){el=document.createElement('div');el.id='st42';document.body.appendChild(el)}el.innerHTML='';el.scrollTop=0;const w=document.createElement('div');w.className='w';el.appendChild(w);return w}
const stBtn42=(w,t,f,pri)=>{const b=document.createElement('button');b.className='btn '+(pri?'btn-primary':'btn-ghost');b.textContent=t;b.onclick=f;w.appendChild(b);return b};
const stP42=(w,cls,txt,tag)=>{const p=document.createElement(tag||'p');if(cls)p.className=cls;p.textContent=txt;w.appendChild(p);return p};
function stClose42(){const el=document.getElementById('st42');if(el)el.remove();try{stHome42(1)}catch(e){}}

function stOpen42(){try{const w=stShell42();
  w.innerHTML='<h2>📚 History of Stuff · ห้องเรียนของสิ่งของ</h2><p class="sub">ทุกอย่างมีประวัติ ทุกอย่างมีราคา · เลือกวิชา แล้วให้สิ่งของเล่าเรื่องของมันเอง</p>';
  const soon=document.createElement('details');soon.className='soon';soon.innerHTML='<summary>วิชาที่กำลังสร้าง · '+STUFF42.filter(c=>c.soon).length+' วิชา</summary>';
  for(const C of STUFF42.filter(c=>!c.soon).concat(STUFF42.filter(c=>c.soon))){const b=document.createElement('button');b.className='crs'+(C.soon?' soon':'');const n=stLes42(C.k).length,d=stDone42(C.k);
    b.innerHTML='<span class="ic">'+C.ic+'</span><span><b>'+esc(C.t)+'</b><div class="d">'+esc(C.s)+'</div><div class="pr">'+(C.soon?'กำลังสร้าง':C.prog?C.prog():(LESX42[C.k]?d+'/'+LESX42[C.k].list.length+' บทเรียน · เปิดแล้ว '+n:d+'/'+n+' บทเรียน')+(()=>{const sn=stSeen42(),dn=stB42().stuff.done;const m=stLes42(C.k).filter(l=>sn[C.k+'.'+l.k]&&!dn[C.k+'.'+l.k]).length;return m?' · ✨ '+m+' บทจากชีวิตของคุณ':''})())+'</div></span>';
    if(!C.soon){b.onclick=()=>C.open?C.open():stCourse42(C.k);w.appendChild(b)}else soon.appendChild(b)}w.appendChild(soon);
  const B=stB42(),mus=Object.values(B.stuff.mus);stP42(w,'','พิพิธภัณฑ์ของฉัน · '+mus.length+' ชิ้น','h3').style.cssText='font-size:15px;margin:16px 0 4px;color:var(--bone)';
  const g=document.createElement('div');g.className='mus';if(!mus.length)stP42(w,'nt','เรียนจบหนึ่งบท ได้ของหนึ่งชิ้นมาตั้งในพิพิธภัณฑ์');else mus.forEach(m=>{const d=document.createElement('div');d.textContent=m;g.appendChild(d)});w.appendChild(g);
  const nv=document.createElement('div');nv.className='nav';w.appendChild(nv);stBtn42(nv,'ปิด',stClose42,1)}catch(e){}}

function stCourse42(c){try{const C=STUFF42.find(z=>z.k===c);const w=stShell42();const done=stB42().stuff.done;
  w.innerHTML='<h2>'+C.ic+' '+esc(C.t)+'</h2><p class="sub">'+esc(C.src)+'</p>';
  if(c==='eq'){let got={};try{got=book29().eq||{}}catch(e){}stP42(w,'nt','ห้องเรียนกับเกมชีวิตใช้ของร่วมกันสองอย่าง ทำภารกิจที่นี่สำเร็จได้ดาวเชี่ยวชาญ ซึ่งในเกมชีวิตจะเปิดทางเลือก "ใช้ความรู้ที่เคยเรียนมา" ส่วนการ์ดในสมุด 17 สมการต้องเปิดด้วยการใช้ชีวิตจนเจอ');
    stLes42('eq').forEach((l,i)=>{const b=document.createElement('button');b.className='les'+(done['eq.'+l.k]?' ok':'');b.innerHTML='<span>'+(done['eq.'+l.k]?'✓ ':'')+(i+1)+'. '+esc(l.t)+'</span><i>'+(l.D.mis?'🧪 ภารกิจ':'')+(got[l.k]?' · เจอในชีวิตแล้ว':'')+'</i>';b.onclick=()=>stLesson42('eq',i);w.appendChild(b)})}
  else if(LESX42[c]){const X=LESX42[c],sn=stSeen42();if(X.intro)stP42(w,'nt',X.intro);X.list.forEach((nm,i)=>{const l=X.les.find(z=>z.n===i);const b=document.createElement('button');b.className='les'+(l?(done[c+'.'+l.k]?' ok':''):' off');
      b.innerHTML='<span>'+(l&&done[c+'.'+l.k]?'✓ ':'')+(i+1)+'. '+esc(nm)+'</span><i>'+(l?(sn[c+'.'+l.k]&&!done[c+'.'+l.k]?'✨ เจอในชีวิตแล้ว · ':'')+esc(l.t):'กำลังสร้าง')+'</i>';if(l)b.onclick=()=>stLesson42(c,X.les.indexOf(l));w.appendChild(b)});
    if(X.note)stP42(w,'nt',X.note())}
  if(c==='eq')stP42(w,'nt',L(EQNOTE37));
  const nv=document.createElement('div');nv.className='nav';w.appendChild(nv);stBtn42(nv,'← ชั้นวิชา',stOpen42);stBtn42(nv,'ปิด',stClose42)}catch(e){}}

/* a lesson: 1 the thing speaks · 2 a situation, you choose · 3 (equations) the mission · 4 what is true · 5 the museum */
function stLesson42(c,i){const ls=stLes42(c),l=ls[i];if(!l)return;let pg=0;const C=STUFF42.find(z=>z.k===c);
  const next=()=>{pg++;show()},nav=(w,lab,f)=>{const nv=document.createElement('div');nv.className='nav';w.appendChild(nv);if(lab)stBtn42(nv,lab,f||next,1);stBtn42(nv,'← รายการบทเรียน',()=>stCourse42(c));return nv};
  const head=(w,s)=>{stP42(w,'step',C.ic+' '+C.t+' · บทที่ '+(LESX42[c]?l.n+1:i+1)+' · '+s);stP42(w,'',c==='eq'?l.t:l.t,'h2')};
  const show=()=>{try{const w=stShell42();
    if(pg===0){head(w,'ฉันคือใคร');if(c==='eq')w.appendChild(eqCanvas37(l.E.f,Math.max(3,Math.min(7,Math.floor(Math.min(innerWidth*.9,640)/eqPix37(l.E.f,12).w))),'#c8b8ff'));else{w.appendChild(l.sp&&typeof sprCanvas44==='function'?sprCanvas44(l.sp):molCanvas42(l.m));stP42(w,'nt',l.mn).style.cssText='text-align:center;border:0;padding:0';
        const sv=stSeen42()[c+'.'+l.k];if(sv)stP42(w,'fb','✨ คุณเคยเจอสิ่งนี้ในเกมชีวิต '+(sv.nm?'ตอนเป็น '+sv.nm+' ':'')+(sv.a!=null?'อายุ '+sv.a+' ปี':''))}
      stP42(w,'pov','“'+(c==='eq'?l.D.pov:l.pov)+'”');nav(w,'ต่อ')}
    else if(pg===1){head(w,c==='eq'?'ลองใช้':'คุณจะทำอย่างไร');
      if(c==='eq'){const [q,os]=l.D.use;stP42(w,'sc',q);const fb=document.createElement('div');let solved=false;
        let miss=0;const bs=[];os.forEach(([t,ok,f])=>{const b=document.createElement('button');b.className='op';b.textContent=t;bs.push([b,ok]);b.onclick=()=>{if(solved||b.classList.contains('x'))return;b.classList.add(ok?'r':'x');fb.className='fb';fb.textContent=(ok?'✓ ':'✗ ')+f;
          if(ok){solved=true;nb.disabled=false;nb.textContent='ต่อ'}else if(++miss>=2){bs.forEach(([z,k])=>{if(k)z.classList.add('h')});fb.textContent+=' · ข้อที่มีกรอบเส้นประคือคำตอบ ลองแตะอ่านเหตุผล'}};w.appendChild(b)});
        w.appendChild(fb);const nv=nav(w,'เลือกคำตอบที่ถูกก่อน');const nb=nv.firstChild;nb.disabled=true}
      else{stP42(w,'sc',l.sc);const fb=document.createElement('div');let picked=false;
        const bs=[];let seen=false;l.o.forEach(([t,tag,f])=>{const b=document.createElement('button');b.className='op';b.textContent=t;bs.push([b,tag]);b.onclick=()=>{bs.forEach(([z])=>z.classList.remove('r','x'));b.classList.add(tag==='real'?'r':'x');fb.className='fb';
            fb.innerHTML=(picked?'':'<div class="nt" style="border:0;padding:0;margin-bottom:6px">คุณเลือกโดยไม่รู้อนาคต เหมือนคนในยุคนั้น</div>')+'<span class="tag '+tag+'">'+(tag==='real'?'เกิดขึ้นจริง':'จำลอง')+'</span>'+esc(f)+(tag==='real'?'':'<br><b>แล้วในประวัติศาสตร์จริง คนเลือกทางไหน</b> ลองเลือกทางที่มีกรอบเส้นประ');picked=true;
            if(tag==='real'){seen=true;nb.disabled=false;nb.textContent='ต่อ'}else bs.forEach(([z,g])=>{if(g==='real')z.classList.add('h')})};w.appendChild(b)});
        w.appendChild(fb);stP42(w,'nt','เลือกทางที่คุณจะทำ แล้วดูว่าในประวัติศาสตร์จริงเกิดอะไรขึ้น ทุกทางบอกว่าเป็นเรื่องจริงหรือการจำลอง');const nv=nav(w,'ดูว่าเกิดอะไรขึ้นจริงก่อน');const nb=nv.firstChild;nb.disabled=true}}
    else if(pg===2){if(c!=='eq'||!l.D.mis||typeof MIS38==='undefined'||!MIS38[l.D.mis]){pg=3;show();return}
      const M=MIS38[l.D.mis];head(w,'ภารกิจ');stP42(w,'',L(M.t),'h3');stP42(w,'sc',L(M.x));const fb=document.createElement('div');w.appendChild(fb);
      const nv=nav(w,'🧪 ลงมือ',()=>{toyRun38(M.toy,Object.assign({title:M.title},M.opt)).then(r=>{if(r.q>=3){try{const B=stB42();B.eqM=B.eqM||{};B.eqM[M.eq]=1;stSave42(B)}catch(e){}fb.className='fb';fb.textContent='✓ สำเร็จ คุณได้ดาวเชี่ยวชาญของสมการนี้ ในเกมชีวิต ถ้าเจอปัญหาแบบนี้ จะมีทางเลือก "ใช้ความรู้ที่เคยเรียนมา"'}else{fb.className='fb';fb.textContent='ยังไม่สำเร็จ ลองอีกครั้งได้ หรือข้ามไปก่อนก็ได้'}nb.textContent='🧪 ลองอีกครั้ง'})});
      const nb=nv.firstChild;stBtn42(nv,'ข้าม →',next)}
    else if(pg===3){head(w,'เรื่องจริง');
      if(c==='eq'){const E=l.E;stP42(w,'nt',L(E.who));stP42(w,'sc',L(E.x));const ch=document.createElement('div');ch.className='chips';const mean=document.createElement('div');mean.className='mean';mean.textContent='แตะสัญลักษณ์เพื่อดูความหมาย';
        E.p.forEach(([s,m])=>{const b=document.createElement('button');b.textContent=s;b.onclick=()=>{ch.querySelectorAll('button').forEach(z=>z.classList.remove('on'));b.classList.add('on');mean.textContent=s+' — '+m};ch.appendChild(b)});w.appendChild(ch);w.appendChild(mean);
        const af=document.createElement('p');af.className='sc';af.innerHTML='<b>โลกหลังจากนั้น</b> '+esc(L(E.after));w.appendChild(af);if(E.note)stP42(w,'nt',L(E.note))}
      else{const u=document.createElement('ul');u.className='fa';l.fact.forEach(f=>{const li=document.createElement('li');li.textContent=f;u.appendChild(li)});w.appendChild(u);
        const cs=document.createElement('div');cs.className='cost';cs.innerHTML='<b>ราคาที่ซ่อนอยู่</b> '+esc(l.cost);w.appendChild(cs);if(l.note)stP42(w,'nt',l.note);
        if(l.src){const d=document.createElement('div');d.className='src';d.innerHTML='<b>ที่มา</b> '+l.src.map(([t,u])=>'<a href="'+u+'" target="_blank" rel="noopener">'+esc(t)+'</a>').join(' · ');w.appendChild(d)}}
      nav(w,'ต่อ')}
    else{const item=c==='eq'?l.D.item:l.item;stMark42(c,l.k,item);head(w,'จบบทเรียน');
      stP42(w,'pov','ของชิ้นใหม่ในพิพิธภัณฑ์: '+item);stP42(w,'sc',c==='eq'?'ในเกมชีวิต: เจอสมการนี้ได้ใน '+L(l.E.where):l.game);
      if(c==='eq'){let got={};try{got=book29().eq||{}}catch(e){}stP42(w,'nt',got[l.k]?'คุณเคยเจอสมการนี้ในชีวิตหนึ่งแล้ว การ์ดอยู่ในสมุด 17 สมการ':'การ์ดในสมุด 17 สมการของเกมชีวิตยังต้องเปิดด้วยการใช้ชีวิตจนเจอปัญหาที่สมการนี้ตอบ')}
      const nv=document.createElement('div');nv.className='nav';w.appendChild(nv);const nx=ls[i+1];if(nx)stBtn42(nv,'บทต่อไป: '+(nx.t||''),()=>stLesson42(c,i+1),1);stBtn42(nv,'← รายการบทเรียน',()=>stCourse42(c));stBtn42(nv,'ปิด',stClose42)}
  }catch(e){}};show()}

/* ---------- the door on the home screen ---------- */
function stHome42(re){try{let sec=document.getElementById('st42home');if(!sec){const ch=document.getElementById('chap');if(!ch)return;const blk=ch.closest('section');sec=document.createElement('section');sec.className='block';sec.id='st42home';blk.parentNode.insertBefore(sec,blk)}
  else if(!re)return;
  const all=STUFF42.filter(c=>!c.soon).reduce((s,c)=>s+stDone42(c.k),0);const sn=stSeen42(),dn=stB42().stuff.done,fresh=Object.keys(sn).filter(k=>!dn[k]).length;
  sec.innerHTML='<h2>📚 History of Stuff</h2><p class="note">โหมดเรียนรู้ ให้สิ่งของเล่าเรื่องของมันเอง สมการ โมเลกุล เสื้อยืด เครื่องเทศ ปลาค็อด และอีกมาก ค่อยๆ เพิ่มทีละวิชา</p><button class="btn btn-primary" id="st42go">เข้าห้องเรียนของสิ่งของ'+(all?' · เรียนแล้ว '+all+' บท':'')+'</button>'+(fresh?'<p class="note" style="color:#ffe2a8">✨ มี '+fresh+' บทเรียนเรื่องของที่คุณเพิ่งเจอในชีวิต</p>':'');
  document.getElementById('st42go').onclick=()=>{try{SND.unlock()}catch(e){}stOpen42()};
  const bar=document.querySelector('#home header.bar');if(bar&&!document.getElementById('st42top')){const t=document.createElement('button');t.id='st42top';t.className='btn btn-ghost';t.textContent='📚 ห้องเรียนของสิ่งของ';t.style.cssText='margin-left:auto;padding:4px 10px;font-size:13px;min-height:0;width:auto';t.onclick=()=>{try{SND.unlock()}catch(e){}stOpen42()};bar.style.display='flex';bar.style.alignItems='center';bar.appendChild(t)}}catch(e){}}
if(typeof window!=='undefined')window.__v42={STUFF42,LESEQ42,LESMOL42,LESX42,stOpen42,stCourse42,stLesson42,molCanvas42};
