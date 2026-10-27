/* ===================== v0.37: seventeen equations — pixel glyphs, cards, and the first four toys (Thai only) ===================== */
/* idea from Ian Stewart, "17 Equations That Changed the World" (2012); all text here is our own and checked against other sources */
const XEq=t=>X(t,t);
/* f: the formula as drawn in pixels; p: [symbol, meaning]; toy: a hands-on toy key; where: where in the game you can meet it */
const EQ37=[
 {k:'pyth',f:'a²+b²=c²',n:XEq('ทฤษฎีบทพีทาโกรัส'),who:XEq('รู้กันมาก่อนพีทาโกรัสหลายร้อยปี · บทพิสูจน์ที่เก่าที่สุดที่เหลืออยู่อยู่ในหนังสือ Elements ของยุคลิด ราว 300 ปีก่อน ค.ศ.'),
  x:XEq('ในสามเหลี่ยมมุมฉาก ถ้าสร้างสี่เหลี่ยมจัตุรัสบนด้านทั้งสาม พื้นที่ของสองสี่เหลี่ยมเล็กรวมกันจะเท่ากับพื้นที่ของสี่เหลี่ยมใหญ่บนด้านตรงข้ามมุมฉากพอดี แผ่นดินเหนียวพลิมป์ตัน 322 ของบาบิโลน (ราว 1800 ปีก่อน ค.ศ.) มีตารางตัวเลขที่เข้ากับความสัมพันธ์นี้ และศุลพสูตรของอินเดียโบราณก็บรรยายไว้ด้วย'),
  p:[['a, b','ความยาวของสองด้านที่ประกอบมุมฉาก'],['c','ด้านตรงข้ามมุมฉาก ด้านที่ยาวที่สุด'],['²','คูณตัวเอง ซึ่งก็คือพื้นที่ของสี่เหลี่ยมจัตุรัสบนด้านนั้น']],
  after:XEq('ช่างรังวัดใช้มันวัดที่ดิน นักเดินเรือใช้คำนวณระยะทาง วันนี้มันอยู่ในแผนที่ในโทรศัพท์ทุกเครื่องที่ต้องคำนวณระยะห่างระหว่างสองจุด'),
  note:XEq('✦ เรื่องที่ช่างขึงเชือกอียิปต์ใช้เชือกผูกปม 3-4-5 สร้างมุมฉาก เป็นเรื่องที่เล่าต่อกันมา แต่ไม่มีหลักฐานโดยตรงจากอียิปต์ ส่วนตัวพีทาโกรัสเองเราก็รู้จักน้อยมาก เพราะไม่มีงานเขียนของเขาเหลืออยู่เลย'),
  toy:'pyth',where:XEq('บท 04 เมโสโปเตเมีย · บท 10 กรีก · บท 12 คงคา')},
 {k:'log',f:'log xy = log x + log y',n:XEq('ลอการิทึม'),who:XEq('จอห์น เนเปียร์ ชาวสกอต ค.ศ. 1614 · เฮนรี บริกส์ ทำตารางฐานสิบ'),
  x:XEq('การคูณเลขยาวๆ ด้วยมือเป็นงานที่ช้าและผิดง่าย ลอการิทึมเปลี่ยนการคูณให้กลายเป็นการบวก ซึ่งง่ายกว่ามาก นักดาราศาสตร์อย่างเคปเลอร์ใช้ตารางลอการิทึมคำนวณวงโคจรของดาวเคราะห์ และไม่กี่ปีต่อมา วิลเลียม ออทเทรด ก็ทำไม้บรรทัดคำนวณที่ใช้หลักเดียวกัน'),
  p:[['log','ถามว่าต้องยกสิบขึ้นกำลังเท่าไร จึงได้ตัวเลขนั้น'],['xy','x คูณ y'],['+','การบวก ซึ่งทำแทนการคูณได้']],
  after:XEq('วิศวกรใช้ไม้บรรทัดคำนวณสร้างสะพาน ตึกระฟ้า และเครื่องบินอยู่สามร้อยกว่าปี วิศวกรโครงการอะพอลโลยังพกไม้บรรทัดคำนวณ จนเครื่องคิดเลขพกพาเข้ามาแทนในทศวรรษ 1970'),
  note:XEq('ลอการิทึมยังอยู่ในชีวิตประจำวัน เช่น มาตราริกเตอร์ของแผ่นดินไหว และเดซิเบลของความดังเสียง ที่เพิ่มหนึ่งขั้นหมายถึงแรงขึ้นหลายเท่า'),
  toy:'slide',where:XEq('บท 16 โลกใหม่ (คนที่อ่านออกเขียนได้ กะลาสี หรือช่างพิมพ์ หลังปี 1614)')},
 {k:'calc',f:'df/dt = lim (f(t+h)−f(t))/h',n:XEq('แคลคูลัส'),who:XEq('ไอแซก นิวตัน ในอังกฤษ และก็อทฟรีด ไลบ์นิซ ในเยอรมนี คิดขึ้นแยกกันในช่วงทศวรรษ 1660–1680'),
  x:XEq('ถ้ารู้ว่าของสิ่งหนึ่งอยู่ที่ไหนในแต่ละเวลา จะรู้ได้อย่างไรว่ามันเคลื่อนที่เร็วแค่ไหนในวินาทีนั้นพอดี แคลคูลัสตอบโดยดูการเปลี่ยนแปลงในช่วงเวลาที่สั้นลงเรื่อยๆ จนเกือบเป็นศูนย์ นิวตันกับไลบ์นิซทะเลาะกันอย่างรุนแรงว่าใครคิดได้ก่อน'),
  p:[['f','ปริมาณที่เปลี่ยนไปตามเวลา เช่น ตำแหน่งของลูกปืนใหญ่'],['t','เวลา'],['h','ช่วงเวลาสั้นๆ ที่ค่อยๆ ลดลงจนเกือบเป็นศูนย์'],['df/dt','อัตราการเปลี่ยนแปลง เช่น ความเร็ว']],
  after:XEq('แทบทุกกฎของฟิสิกส์เขียนด้วยภาษาของแคลคูลัส ตั้งแต่การโคจรของดาวเคราะห์ ไปจนถึงการคำนวณยา การสร้างสะพาน และการพยากรณ์อากาศ'),
  note:XEq('คำว่า lim (ลิมิต) แบบที่ใช้ในสมการนี้ นักคณิตศาสตร์เพิ่งนิยามได้อย่างรัดกุมในศตวรรษที่ 19 โดยโคชีและไวเออร์สตราส นิวตันกับไลบ์นิซใช้ความคิดเรื่องปริมาณที่เล็กมากๆ ซึ่งคนสมัยนั้นวิจารณ์ว่ายังไม่สมเหตุสมผล'),
  where:XEq('บท 16 โลกใหม่ (คนที่อ่านออกเขียนได้ หลังปี 1684)')},
 {k:'grav',f:'F = G m₁m₂ / r²',n:XEq('กฎแรงโน้มถ่วงของนิวตัน'),who:XEq('ไอแซก นิวตัน ในหนังสือ Principia ค.ศ. 1687'),
  x:XEq('แรงเดียวกันที่ทำให้ของตกลงพื้นดิน ทำให้ดวงจันทร์โคจรรอบโลก และโลกโคจรรอบดวงอาทิตย์ ยิ่งของหนักก็ยิ่งดึงกันแรง ยิ่งห่างกันเป็นสองเท่า แรงก็ยิ่งเหลือแค่หนึ่งในสี่ เอ็ดมันด์ แฮลลีย์ ใช้กฎนี้ทำนายว่าดาวหางที่เคยเห็นในปี 1682 จะกลับมาราวปี 1758 แล้วมันก็กลับมาจริงในคืนคริสต์มาสปี 1758 หลังแฮลลีย์ตายไปแล้วสิบหกปี'),
  p:[['F','แรงที่ดึงของสองสิ่งเข้าหากัน'],['G','ค่าคงที่ความโน้มถ่วง ซึ่งเฮนรี คาเวนดิช วัดผลได้ในปี 1798'],['m₁, m₂','มวลของของทั้งสองสิ่ง'],['r²','ระยะห่างคูณตัวเอง ยิ่งไกลแรงยิ่งลดเร็ว']],
  after:XEq('วิศวกรใช้กฎนี้ส่งดาวเทียมขึ้นวงโคจร และพายานอะพอลโลไปดวงจันทร์ ไอน์สไตน์ปรับปรุงมันในปี 1915 แต่สำหรับงานส่วนใหญ่ กฎของนิวตันยังแม่นพอ'),
  note:XEq('✦ เรื่องแอปเปิลตกใส่หัวนิวตันเป็นกึ่งตำนาน นิวตันเล่าเองตอนแก่ว่าเห็นแอปเปิลตกแล้วเกิดความคิด แต่ไม่ได้บอกว่ามันตกใส่หัว'),
  toy:'orbit',where:XEq('บท 16 โลกใหม่ (ดาวหางปี 1758 หรือคนที่อ่านออกเขียนได้หลังปี 1687)')},
 {k:'imag',f:'i² = −1',n:XEq('จำนวนจินตภาพ'),who:XEq('เจโรลาโม คาร์ดาโน ชาวอิตาลีเจอมันในปี 1545 · ราฟาเอล บอมเบลลี วางกฎการคำนวณ · ออยเลอร์ตั้งสัญลักษณ์ i ในปี 1777'),
  x:XEq('ไม่มีเลขธรรมดาตัวไหนคูณตัวเองแล้วได้ค่าติดลบ แต่ตอนแก้สมการกำลังสาม นักคณิตศาสตร์อิตาลีพบว่าถ้ายอมให้มีรากที่สองของเลขติดลบไว้ระหว่างทาง จะได้คำตอบที่ถูกต้องในตอนท้าย คนสมัยนั้นเรียกมันว่าเลขที่ไม่มีจริง และไม่มีใครสบายใจกับมันอยู่สองร้อยกว่าปี'),
  p:[['i','จำนวนจินตภาพ ตัวเลขที่คูณตัวเองแล้วได้ลบหนึ่ง'],['²','คูณตัวเอง'],['−1','ลบหนึ่ง']],
  after:XEq('วิศวกรไฟฟ้าใช้จำนวนเชิงซ้อนคำนวณไฟฟ้ากระแสสลับ และนักฟิสิกส์ต้องใช้มันในสมการกลศาสตร์ควอนตัม เลขที่คนเคยคิดว่าไม่มีจริงจึงอยู่ในทุกปลั๊กไฟ'),
  where:XEq('บท 16 โลกใหม่ (คนที่อ่านออกเขียนได้)')},
 {k:'euler',f:'V − E + F = 2',n:XEq('สูตรทรงหลายหน้าของออยเลอร์'),who:XEq('เลออนฮาร์ด ออยเลอร์ ชาวสวิส ราว ค.ศ. 1750'),
  x:XEq('นับมุม ลบด้วยจำนวนสัน แล้วบวกจำนวนหน้า ของลูกเต๋า พีระมิด หรือเพชรเจียระไนก็ตาม จะได้สองเสมอ เช่น ลูกเต๋ามี 8 มุม 12 สัน 6 หน้า 8 − 12 + 6 = 2 ไม่ว่าจะบิดหรือยืดรูปทรงอย่างไร ตราบที่ไม่เจาะรู'),
  p:[['V','จำนวนจุดมุม'],['E','จำนวนสัน'],['F','จำนวนหน้า']],
  after:XEq('สูตรนี้เป็นจุดเริ่มของทอพอโลยี วิชาที่ศึกษารูปทรงที่ไม่เปลี่ยนเมื่อถูกบิดหรือยืด ซึ่งวันนี้ใช้ทั้งในการศึกษาดีเอ็นเอ เครือข่ายถนน และรูปทรงของจักรวาล'),
  note:XEq('สูตรนี้ใช้ได้กับทรงหลายหน้าแบบนูน ถ้าทรงนั้นมีรูทะลุแบบโดนัท ผลรวมจะไม่ใช่สอง'),
  where:XEq('บท 16 โลกใหม่ (ช่างหรือคนที่อ่านออกเขียนได้ หลังปี 1750)')},
 {k:'norm',f:'Φ(x) = e^(−(x−μ)²/2σ²) / √(2πσ²)',n:XEq('การแจกแจงปกติ'),who:XEq('อับราฮัม เดอ มัวฟวร์ ค.ศ. 1733 · คาร์ล ฟรีดริช เกาส์ ค.ศ. 1809 · อาดอลฟ์ เกเตเลต์ ค.ศ. 1835'),
  x:XEq('ถ้าวัดส่วนสูงของคนเป็นพันคน หรือโยนเหรียญเป็นร้อยครั้งแล้วนับหัว ผลส่วนใหญ่จะกองอยู่ใกล้ค่ากลาง และค่อยๆ น้อยลงไปทั้งสองข้างเป็นรูประฆังคว่ำ ฟรานซิส กอลตัน ทำกระดานที่ปล่อยลูกเหล็กให้ตกผ่านหมุด เพื่อแสดงให้เห็นรูประฆังนี้กับตา'),
  p:[['μ','ค่าเฉลี่ย ตำแหน่งยอดของระฆัง'],['σ','ส่วนเบี่ยงเบนมาตรฐาน ระฆังกว้างหรือแคบแค่ไหน'],['e, π','ค่าคงที่ทางคณิตศาสตร์สองตัว'],['Φ(x)','โอกาสที่จะได้ค่าใกล้ x']],
  after:XEq('การแจกแจงปกติเป็นหัวใจของสถิติ ใช้ทดสอบยาว่าได้ผลจริงหรือแค่บังเอิญ ใช้ควบคุมคุณภาพในโรงงาน และใช้ในการสำรวจความคิดเห็น'),
  note:XEq('ไม่ใช่ทุกอย่างในโลกจะเป็นรูประฆัง ราคาหุ้นและภัยพิบัติมีเหตุการณ์สุดขั้วบ่อยกว่าที่ระฆังบอก การคิดว่าทุกอย่างเป็นระฆังเคยทำให้คนประเมินความเสี่ยงต่ำเกินไป'),
  toy:'galton',where:XEq('บท 18 ยุคเครื่องจักร (คนที่อ่านออกเขียนได้ พยาบาล หรือคนงานโรงงาน)')},
 {k:'wave',f:'∂²u/∂t² = c² ∂²u/∂x²',n:XEq('สมการคลื่น'),who:XEq('ฌ็อง เลอ รง ดาล็องแบร์ ชาวฝรั่งเศส ค.ศ. 1746'),
  x:XEq('เมื่อดีดสายพิณหรือสายไวโอลิน สายจะสั่นเป็นคลื่นที่วิ่งไปมา สมการนี้บอกว่าความโค้งของสายตรงไหน จะเร่งให้สายตรงนั้นเคลื่อนที่ และคลื่นวิ่งเร็วแค่ไหน'),
  p:[['u','ระยะที่สายหรือน้ำขยับออกจากที่เดิม'],['t, x','เวลาและตำแหน่ง'],['c','ความเร็วของคลื่น'],['∂²','อัตราการเปลี่ยนแปลงของอัตราการเปลี่ยนแปลง']],
  after:XEq('สมการเดียวกันอธิบายคลื่นเสียง คลื่นน้ำ และคลื่นแผ่นดินไหว นักธรณีวิทยาใช้คลื่นแผ่นดินไหวมองทะลุเข้าไปในโลก จนรู้ว่าแก่นโลกชั้นนอกเป็นของเหลว'),
  where:XEq('บท 18 ยุคเครื่องจักร (ช่างโทรเลข หรือคนที่อ่านออกเขียนได้)')},
 {k:'fourier',f:'f̂(ω) = ∫ f(x) e^(−2πixω) dx',n:XEq('การแปลงฟูเรียร์'),who:XEq('โฌแซ็ฟ ฟูรีเย ชาวฝรั่งเศส ศึกษาการไหลของความร้อน ค.ศ. 1807 และพิมพ์เป็นหนังสือ ค.ศ. 1822'),
  x:XEq('เสียงดนตรีที่ซับซ้อนแค่ไหน ก็แยกออกเป็นเสียงบริสุทธิ์หลายเสียงที่มีความถี่ต่างกันรวมกันอยู่ได้ เหมือนแยกแสงขาวออกเป็นสีรุ้ง ตอนแรกนักคณิตศาสตร์ชั้นนำในปารีสไม่ยอมรับงานของฟูรีเย เพราะคิดว่ามันไม่รัดกุมพอ'),
  p:[['f(x)','สัญญาณ เช่น เสียงหรือภาพ'],['ω','ความถี่'],['f̂(ω)','สัญญาณนั้นมีความถี่ ω อยู่มากแค่ไหน'],['∫','การรวมทุกส่วนเข้าด้วยกัน']],
  after:XEq('การแปลงที่สืบมาจากความคิดนี้อยู่ในการบีบอัดภาพ JPEG เครื่องสแกน MRI ในโรงพยาบาล การแยกเสียงพูด และสัญญาณโทรศัพท์มือถือ'),
  where:XEq('บท 18 ยุคเครื่องจักร (ปารีส หรือนักวิทยาศาสตร์)')},
 {k:'navier',f:'ρ(∂v/∂t + v·∇v) = −∇p + ∇·T + f',n:XEq('สมการนาเวียร์–สโตกส์'),who:XEq('โกลด-หลุยส์ นาวีเย ค.ศ. 1822 · จอร์จ สโตกส์ ค.ศ. 1845'),
  x:XEq('น้ำในแม่น้ำ ลมรอบปีกนก และควันที่ม้วนตัวออกจากปล่อง ล้วนไหลตามกฎเดียวกัน สมการนี้คือกฎของนิวตันที่เขียนใหม่สำหรับของไหล ทุกหยดถูกผลักด้วยความดัน ถูกหน่วงด้วยความหนืด และถูกแรงภายนอกดึง'),
  p:[['ρ','ความหนาแน่นของของไหล'],['v','ความเร็วของการไหล'],['p','ความดัน'],['T','ความหนืด แรงเสียดทานภายในของไหล'],['f','แรงภายนอก เช่น แรงโน้มถ่วง']],
  after:XEq('วิศวกรใช้มันออกแบบเครื่องบิน รถยนต์ และเรือ และนักพยากรณ์อากาศใช้มันในแบบจำลองบรรยากาศ แต่จนถึงวันนี้ ยังไม่มีใครพิสูจน์ได้ว่าสมการนี้มีคำตอบที่ดีเสมอ มันเป็นหนึ่งในโจทย์รางวัลหนึ่งล้านดอลลาร์ของสถาบันเคลย์ ที่ประกาศในปี 2000'),
  where:XEq('บท 18 ยุคเครื่องจักร (ช่างรถไฟ นักวิทยาศาสตร์ หรือคนที่อ่านออกเขียนได้)')},
 {k:'maxwell',f:'∇×E = −∂B/∂t',n:XEq('สมการของแมกซ์เวลล์'),who:XEq('เจมส์ เคลิร์ก แมกซ์เวลล์ ชาวสกอต ค.ศ. 1865 · โอลิเวอร์ เฮวีไซด์ ย่อเหลือสี่สมการในทศวรรษ 1880'),
  x:XEq('ไฟฟ้าที่เปลี่ยนแปลงสร้างแม่เหล็ก และแม่เหล็กที่เปลี่ยนแปลงสร้างไฟฟ้า แมกซ์เวลล์คำนวณพบว่าทั้งสองไล่กันไปเป็นคลื่นที่วิ่งเร็วเท่าแสงพอดี จึงสรุปว่าแสงเองก็คือคลื่นแม่เหล็กไฟฟ้า ในปี 1887–1888 ไฮน์ริช แฮทซ์ สร้างคลื่นแบบนี้ได้จริงในห้องทดลอง'),
  p:[['E','สนามไฟฟ้า'],['B','สนามแม่เหล็ก'],['∇×','การวนรอบ ดูว่าสนามหมุนวนแค่ไหน'],['∂/∂t','การเปลี่ยนแปลงตามเวลา']],
  after:XEq('วิทยุ โทรทัศน์ เรดาร์ ไวไฟ และโทรศัพท์มือถือ ล้วนใช้คลื่นที่สมการนี้ทำนายไว้ ก่อนที่จะมีใครสร้างมันขึ้นมาได้'),
  note:XEq('แมกซ์เวลล์เขียนไว้เป็นสมการยี่สิบสมการ รูปสั้นสี่สมการที่นักเรียนเรียนกันเป็นของเฮวีไซด์ ในเกมแสดงหนึ่งในสี่สมการนั้น คือกฎของฟาราเดย์'),
  where:XEq('บท 18 ยุคเครื่องจักร (ช่างไฟฟ้า หรือคนที่ได้ยินวิทยุ)')},
 {k:'entropy',f:'dS ≥ 0',n:XEq('กฎข้อที่สองของอุณหพลศาสตร์'),who:XEq('ซาดี การ์โน ค.ศ. 1824 · รูดอล์ฟ เคลาซีอุส ตั้งคำว่าเอนโทรปี ค.ศ. 1865 · ลุดวิก บอลทซ์มันน์ ค.ศ. 1877'),
  x:XEq('ความร้อนไหลจากของร้อนไปของเย็นเสมอ ไม่เคยไหลกลับเอง เครื่องจักรไอน้ำจึงเปลี่ยนความร้อนเป็นงานได้ไม่ครบร้อยเปอร์เซ็นต์ ส่วนหนึ่งต้องทิ้งไปเป็นความร้อนเสมอ เอนโทรปีคือการวัดว่าพลังงานกระจายตัวไปแค่ไหน'),
  p:[['S','เอนโทรปี ความยุ่งเหยิงหรือการกระจายตัวของพลังงาน'],['d','การเปลี่ยนแปลงเล็กๆ'],['≥ 0','เพิ่มขึ้นหรือคงที่ ไม่ลดลงเอง']],
  after:XEq('กฎนี้บอกขีดจำกัดของเครื่องยนต์ทุกเครื่อง อธิบายว่าตู้เย็นต้องใช้ไฟ และเป็นคำอธิบายหนึ่งว่าทำไมเวลาจึงเดินไปข้างหน้าทางเดียว ไข่ที่แตกแล้วไม่ประกอบกลับเอง'),
  note:XEq('กฎนี้ใช้กับระบบโดดเดี่ยวที่ไม่มีพลังงานเข้าออก สิ่งมีชีวิตสร้างความเป็นระเบียบในตัวเองได้ เพราะได้พลังงานจากอาหารและแสงแดด แล้วปล่อยความร้อนออกไป'),
  where:XEq('บท 18 ยุคเครื่องจักร (ช่างรถไฟ หรือคนงานโรงงาน)')},
 {k:'emc2',f:'E = mc²',n:XEq('สัมพัทธภาพ'),who:XEq('อัลเบิร์ต ไอน์สไตน์ ค.ศ. 1905'),
  x:XEq('มวลกับพลังงานคือสิ่งเดียวกันในสองรูป มวลเพียงนิดเดียวเทียบได้กับพลังงานมหาศาล เพราะความเร็วแสงยกกำลังสองเป็นตัวเลขที่ใหญ่มาก ดวงอาทิตย์ส่องแสงได้เพราะเปลี่ยนมวลของตัวเองเป็นพลังงานวินาทีละหลายล้านตัน'),
  p:[['E','พลังงาน'],['m','มวล'],['c','ความเร็วแสง ราว 300,000 กิโลเมตรต่อวินาที'],['²','คูณตัวเอง']],
  after:XEq('ทั้งโรงไฟฟ้านิวเคลียร์และระเบิดปรมาณูปล่อยพลังงานตามสมการนี้ ทฤษฎีสัมพัทธภาพของไอน์สไตน์ยังทำให้ระบบ GPS ต้องปรับเวลาของนาฬิกาบนดาวเทียม ไม่อย่างนั้นตำแหน่งจะคลาดไปหลายกิโลเมตรต่อวัน'),
  note:XEq('ระเบิดปรมาณูไม่ได้เกิดจากสมการนี้อย่างเดียว ต้องรอการค้นพบการแตกตัวของนิวเคลียสในปี 1938 โดยออทโท ฮาน และฟริทซ์ ชตรัสมันน์ ซึ่งลิเซอ ไมท์เนอร์ และออทโท ฟริช อธิบายได้ในเวลาต่อมา E = mc² แบบนี้คือพลังงานของมวลที่อยู่นิ่ง'),
  where:XEq('บท 18 ยุคเครื่องจักร (เบอร์ลิน หรือคนที่อ่านออกเขียนได้ หลังปี 1905)')},
 {k:'schro',f:'iħ ∂ψ/∂t = Ĥψ',n:XEq('สมการชเรอดิงเงอร์'),who:XEq('แอร์วิน ชเรอดิงเงอร์ ชาวออสเตรีย ค.ศ. 1926'),
  x:XEq('ในโลกที่เล็กกว่าอะตอม อนุภาคไม่ได้อยู่ที่จุดเดียวแน่นอน แต่เป็นเหมือนคลื่นของความเป็นไปได้ สมการนี้บอกว่าคลื่นนั้นเปลี่ยนไปตามเวลาอย่างไร ชเรอดิงเงอร์เองก็ไม่ชอบผลที่ตามมา เขาคิดเรื่องแมวที่ทั้งเป็นและตายในกล่องเพื่อแสดงว่ามันแปลกแค่ไหน'),
  p:[['ψ','ฟังก์ชันคลื่น บอกโอกาสที่จะพบอนุภาค'],['ħ','ค่าคงที่ของพลังค์ ตัวเลขเล็กมากที่กำหนดขนาดของโลกควอนตัม'],['i','จำนวนจินตภาพ'],['Ĥ','พลังงานทั้งหมดของระบบ']],
  after:XEq('ทรานซิสเตอร์ตัวแรกสร้างได้ที่ห้องทดลองเบลล์ในปี 1947 ด้วยความรู้จากกลศาสตร์ควอนตัม วันนี้ชิปในโทรศัพท์เครื่องเดียวมีทรานซิสเตอร์หลายพันล้านตัว เลเซอร์และแผงโซลาร์เซลล์ก็มาจากความรู้นี้'),
  where:XEq('บท 18 ยุคเครื่องจักร (นักวิทยาศาสตร์หรือโปรแกรมเมอร์ หลังปี 1926)')},
 {k:'shannon',f:'H = −Σ p(x) log p(x)',n:XEq('ทฤษฎีสารสนเทศ'),who:XEq('คลอด แชนนอน ชาวอเมริกัน ค.ศ. 1948'),
  x:XEq('ข่าวสารมีขนาดวัดได้ ถ้าคุณเดาตัวอักษรถัดไปได้ง่าย ตัวอักษรนั้นแทบไม่มีข่าวสารใหม่ ถ้าเดายาก มันมีข่าวสารมาก แชนนอนวัดข่าวสารเป็นหน่วยบิต และพิสูจน์ว่าส่งข้อความผ่านสายที่มีเสียงรบกวนได้ถูกต้อง ถ้าใส่รหัสตรวจแก้ข้อผิดพลาดอย่างฉลาด'),
  p:[['H','ปริมาณข่าวสารเฉลี่ย วัดเป็นบิต'],['p(x)','โอกาสที่จะเจอสัญลักษณ์ x'],['Σ','การรวมทุกสัญลักษณ์เข้าด้วยกัน'],['log','ลอการิทึม ตัวเดียวกับของเนเปียร์']],
  after:XEq('ไฟล์ซิป รูปภาพ วิดีโอสตรีมมิง คิวอาร์โค้ด และสัญญาณจากยานอวกาศที่อยู่ไกลหลายพันล้านกิโลเมตร ล้วนใช้ความคิดของแชนนอน'),
  where:XEq('บท 18 ยุคเครื่องจักร (โปรแกรมเมอร์ ช่างไฟฟ้า หรือคนที่อ่านออกเขียนได้ หลังปี 1948)')},
 {k:'chaos',f:'xₜ₊₁ = k xₜ (1 − xₜ)',n:XEq('ทฤษฎีความอลวน'),who:XEq('เอ็ดเวิร์ด ลอเรนซ์ ค.ศ. 1963 · โรเบิร์ต เมย์ ค.ศ. 1976'),
  x:XEq('สมการที่ง่ายมากของจำนวนสัตว์ในปีถัดไป อาจให้ผลที่ไม่มีวันซ้ำและทำนายไม่ได้ ถ้าตัวคูณ k สูงพอ ความต่างเพียงนิดเดียวของค่าเริ่มต้นจะขยายจนผลออกมาต่างกันโดยสิ้นเชิง ลอเรนซ์เจอเรื่องนี้เมื่อพิมพ์ตัวเลขพยากรณ์อากาศแบบปัดเศษ แล้วผลทั้งหมดเปลี่ยนไป'),
  p:[['xₜ','จำนวนสัตว์ในปีนี้ เทียบกับจำนวนมากที่สุดที่ที่นั้นรับได้'],['xₜ₊₁','จำนวนในปีหน้า'],['k','อัตราการเพิ่ม'],['1 − xₜ','ยิ่งแน่น ยิ่งเพิ่มได้ยาก']],
  after:XEq('ความอลวนอธิบายว่าทำไมพยากรณ์อากาศจึงแม่นได้แค่ราวสองสัปดาห์ นักพยากรณ์จึงรันแบบจำลองหลายสิบครั้งด้วยค่าเริ่มต้นต่างกันนิดหน่อย แล้วบอกเป็นโอกาส เช่น โอกาสฝนตกเจ็ดสิบเปอร์เซ็นต์'),
  note:XEq('คำว่าปรากฏการณ์ผีเสื้อมาจากชื่อการบรรยายของลอเรนซ์ในปี 1972 ที่ถามว่าผีเสื้อกระพือปีกในบราซิลทำให้เกิดพายุทอร์นาโดในเท็กซัสได้ไหม'),
  where:XEq('บท 18 ยุคเครื่องจักร (ชาวนาที่ฟังพยากรณ์อากาศ หรือคนที่อ่านออกเขียนได้ หลังปี 1963)')},
 {k:'bs',f:'½σ²S²∂²V/∂S² + rS∂V/∂S + ∂V/∂t − rV = 0',n:XEq('สมการแบล็ก–โชลส์'),who:XEq('ฟิสเชอร์ แบล็ก และไมรอน โชลส์ ค.ศ. 1973 · โรเบิร์ต เมอร์ตัน ในปีเดียวกัน'),
  x:XEq('สัญญาที่ให้สิทธิ์ซื้อหุ้นในราคาที่ตกลงไว้ล่วงหน้าควรมีราคาเท่าไร สมการนี้ให้คำตอบเป็นสูตร ทำให้การซื้อขายสัญญาแบบนี้เติบโตเป็นตลาดขนาดมหาศาล โชลส์และเมอร์ตันได้รางวัลโนเบลสาขาเศรษฐศาสตร์ในปี 1997 แบล็กเสียชีวิตไปก่อนในปี 1995'),
  p:[['V','ราคาของสัญญา'],['S','ราคาหุ้น'],['σ','ราคาหุ้นแกว่งแรงแค่ไหน'],['r','อัตราดอกเบี้ย'],['t','เวลา']],
  after:XEq('ปีต่อจากรางวัลโนเบล กองทุน LTCM ซึ่งมีเมอร์ตันและโชลส์เป็นหุ้นส่วน ขาดทุนจนธนาคารต้องรวมเงินกันช่วยในปี 1998 ส่วนบทบาทของสมการแบบนี้ในวิกฤตการเงินปี 2008 ยังถกเถียงกันอยู่'),
  note:XEq('สมการถือว่าราคาแกว่งแบบรูประฆังและซื้อขายได้ตลอดเวลา ซึ่งไม่จริงในวันที่ตลาดตื่นตระหนก'),
  where:XEq('บท 18 ยุคเครื่องจักร (นิวยอร์กหลังปี 1973 หรือกรุงเทพฯ ปี 2540)')}];
const EQNOTE37=XEq('แนวคิดการเล่าประวัติศาสตร์ผ่านสมการ 17 สมการมาจากหนังสือ 17 Equations That Changed the World ของเอียน สจ๊วร์ต (2012) เนื้อหาในเกมเขียนใหม่ทั้งหมดและตรวจกับแหล่งอื่น');
const EQK37=k=>EQ37.find(e=>e.k===k);

/* ---------- the moments in a life where an equation shows itself ---------- */
const LITC37=S=>(S.lit||0)>=12||!!S.schOK;
const EQEV37=[
 {id:'q37_pyth4',eq:'pyth',c:S=>S.ch===4&&S.age>=10&&(LITC37(S)||['scribe','builder','farmer'].includes(S.car)),t:XEq('มุมฉากของทุ่งนา'),
  x:XEq('ผู้วัดที่ของวัดกำลังแบ่งทุ่งข้าวบาร์เลย์ให้ชาวนาหลายครอบครัว เขาขึงเชือกเป็นสามเหลี่ยม แล้วจดตัวเลขลงบนแผ่นดินเหนียว บอกว่าถ้าตัวเลขสองด้านถูก ด้านที่สามก็หาได้โดยไม่ต้องวัด')},
 {id:'q37_pyth16',eq:'pyth',c:S=>S.ch===16&&S.age>=10&&LITC37(S),t:XEq('รูปวาดบนทราย'),
  x:XEq('ชายแก่คนหนึ่งในลานตลาดใช้ไม้ขีดรูปสามเหลี่ยมลงบนทราย แล้ววาดสี่เหลี่ยมบนแต่ละด้าน เด็กๆ ล้อมดู เขาบอกว่าสี่เหลี่ยมเล็กสองรูปรวมกันจะใหญ่เท่ารูปใหญ่พอดี และพิสูจน์ได้โดยไม่ต้องเชื่อใคร')},
 {id:'q37_pyth20',eq:'pyth',c:S=>S.ch===20&&S.age>=10&&(LITC37(S)||S.cls==='elite'||['priest','builder'].includes(S.car)),t:XEq('แท่นบูชารูปนกเหยี่ยว'),
  x:XEq('พราหมณ์ต้องสร้างแท่นบูชาไฟจากอิฐให้ได้ขนาดตามคัมภีร์พอดี เขาใช้เชือกวัดและหลักไม้ บอกวิธีทำสี่เหลี่ยมที่ใหญ่เป็นสองเท่าของรูปเดิม โดยใช้เส้นทแยงมุมเป็นด้านใหม่')},
 {id:'q37_log',eq:'log',c:S=>S.ch===28&&S.ya<=411&&S.age>=12&&(LITC37(S)||['sailor','printer','trader'].includes(S.car)),t:XEq('ตารางตัวเลขของต้นหน'),
  x:XEq('ต้นหนเรือเปิดหนังสือเล่มหนาที่มีแต่ตัวเลขเรียงแถว บอกว่าตั้งแต่มีตารางนี้ เขาไม่ต้องนั่งคูณเลขยาวๆ ทั้งคืนเพื่อหาตำแหน่งเรืออีกแล้ว แค่เปิดตาราง บวก แล้วเปิดตารางกลับ')},
 {id:'q37_calc',eq:'calc',c:S=>S.ch===28&&S.ya<=341&&S.age>=14&&LITC37(S),t:XEq('ความเร็วในชั่วพริบตา'),
  x:XEq('ครูในโรงเรียนถามว่าลูกปืนใหญ่ที่กำลังตก เร็วแค่ไหนในวินาทีที่มันผ่านยอดเสากระโดงเรือพอดี ทุกคนตอบไม่ได้ เพราะความเร็วต้องวัดในช่วงเวลา แต่วินาทีเดียวไม่มีช่วงเวลา')},
 {id:'q37_grav',eq:'grav',c:S=>S.ch===28&&S.ya<=267&&S.ya>=266&&S.age>=5,t:XEq('ดาวหางที่ถูกทำนาย'),
  x:XEq('หนังสือพิมพ์ลงข่าวมาหลายเดือนว่านักดาราศาสตร์อังกฤษที่ตายไปแล้วทำนายว่าดาวหางจะกลับมาปีนี้ ทุกคืนคนออกไปยืนดูฟ้า จนคืนหนึ่งก็มีแสงหางจางๆ ขึ้นมาทางตะวันออก ตรงกับที่ทำนายไว้')},
 {id:'q37_grav2',eq:'grav',c:S=>S.ch===28&&S.ya<=338&&S.age>=14&&LITC37(S),t:XEq('แรงที่ดึงดวงจันทร์'),
  x:XEq('หนังสือเล่มใหม่จากลอนดอนมาถึงร้านหนังสือในเมือง เขียนว่าแรงที่ทำให้แอปเปิลตกลงพื้น เป็นแรงเดียวกับที่ดึงดวงจันทร์ไว้ไม่ให้หลุดไปในอวกาศ คนที่อ่านต่างเถียงกันว่าแรงที่มองไม่เห็นจะข้ามความว่างเปล่าไปได้อย่างไร')},
 {id:'q37_imag',eq:'imag',c:S=>S.ch===28&&S.age>=14&&LITC37(S)&&S.ya<=480,t:XEq('เลขที่ไม่มีอยู่จริง'),
  x:XEq('ครูคณิตศาสตร์เขียนโจทย์บนกระดาน แล้วบอกว่าระหว่างทางต้องหารากที่สองของลบสิบห้า ซึ่งไม่มีเลขไหนทำได้ แต่ถ้าทำเป็นไม่เห็นแล้วคำนวณต่อไป คำตอบตอนท้ายกลับถูกต้อง นักเรียนทั้งห้องเงียบ')},
 {id:'q37_euler',eq:'euler',c:S=>S.ch===28&&S.ya<=275&&S.age>=12&&(LITC37(S)||['smith','printer'].includes(S.car)),t:XEq('นับมุมของลูกเต๋า'),
  x:XEq('คุณนั่งเล่นลูกเต๋ากับเพื่อน แล้วลองนับมุม นับสัน นับหน้า เทียบกับพีระมิดไม้ที่ช่างไม้แกะไว้ ตัวเลขต่างกันหมด แต่เมื่อนำมาบวกลบกันตามแบบที่ครูบอก กลับได้เลขเดียวกันทุกครั้ง')},
 {id:'q37_norm',eq:'norm',c:S=>S.ch===30&&S.age>=12&&S.ya<=216&&(LITC37(S)||['nurse','mill'].includes(S.car)),t:XEq('ส่วนสูงของทหารเกณฑ์'),
  x:XEq('เจ้าหน้าที่จดส่วนสูงของชายหนุ่มทุกคนที่มาเกณฑ์ทหาร แล้ววาดเป็นแท่งเรียงกัน แท่งตรงกลางสูงที่สุด แล้วค่อยๆ ต่ำลงทั้งสองข้างเป็นรูประฆังคว่ำ เขาบอกว่าไม่ว่าจะวัดอะไรในคนจำนวนมาก ก็ออกมาเป็นรูปนี้')},
 {id:'q37_wave',eq:'wave',c:S=>S.ch===30&&S.age>=10&&S.ya<=200&&(LITC37(S)||S.car==='wire'),t:XEq('สายที่สั่น'),
  x:XEq('คุณดีดสายเครื่องดนตรี แล้วเห็นสายสั่นเป็นรูปโค้งที่วิ่งไปมาระหว่างสองปลาย ช่างซ่อมเครื่องดนตรีบอกว่าถ้าขึงสายให้ตึงขึ้น คลื่นจะวิ่งเร็วขึ้น และเสียงจะสูงขึ้น ทุกเครื่องดนตรีทำงานแบบนี้')},
 {id:'q37_fourier',eq:'fourier',c:S=>S.ch===30&&S.age>=14&&S.ya<=203&&(S.rg==='prs'||S.car==='lab')&&LITC37(S),t:XEq('ความร้อนในแท่งเหล็ก'),
  x:XEq('ศาสตราจารย์คนหนึ่งเผาปลายแท่งเหล็กแล้ววัดอุณหภูมิทีละจุด เขาอ้างว่าความร้อนที่ซับซ้อนแค่ไหนก็แยกออกเป็นคลื่นง่ายๆ หลายคลื่นซ้อนกันได้ ผู้ฟังหลายคนส่ายหน้า')},
 {id:'q37_navier',eq:'navier',c:S=>S.ch===30&&S.age>=12&&S.ya<=180&&(LITC37(S)||['rail','lab'].includes(S.car)),t:XEq('ควันที่ม้วนตัว'),
  x:XEq('คุณดูควันจากปล่องลอยขึ้นตรงๆ แล้วจู่ๆ ก็ม้วนตัวเป็นวงหมุนวนไร้ระเบียบ ครูบอกว่ามีสมการที่บอกการไหลของทุกอย่าง ตั้งแต่ควันจนถึงแม่น้ำ แต่ไม่มีใครแก้มันได้ทั้งหมด')},
 {id:'q37_maxwell',eq:'maxwell',c:S=>S.ch===30&&S.age>=10&&S.ya<=160&&(S.car==='wire'||(S.ya<=101&&LITC37(S))),t:XEq('คลื่นที่มองไม่เห็น'),
  x:XEq('ช่างคนหนึ่งเอาลวดมาขดรอบแท่งเหล็ก ต่อเข้ากับแบตเตอรี่ แล้วเข็มทิศบนโต๊ะก็หันขวับ เขาบอกว่าไฟฟ้ากับแม่เหล็กเป็นของคู่กัน และคลื่นของมันวิ่งผ่านอากาศได้ไกลข้ามทะเล')},
 {id:'q37_entropy',eq:'entropy',c:S=>S.ch===30&&S.age>=12&&S.ya<=200&&(['rail','mill'].includes(S.car)||LITC37(S)),t:XEq('ถ่านที่หายไปกับควัน'),
  x:XEq('หัวหน้าช่างบ่นว่าถ่านหินที่โกยเข้าเตาทั้งวัน กลายเป็นแรงขับรถจักรได้ไม่ถึงหนึ่งในสิบ ที่เหลือหายไปเป็นความร้อนกับควัน ไม่ว่าจะสร้างเครื่องดีแค่ไหน ก็ไม่มีวันได้ครบ')},
 {id:'q37_emc2',eq:'emc2',c:S=>S.ch===30&&S.age>=12&&S.ya<=120&&(S.rg==='brl'||LITC37(S)),t:XEq('มวลที่กลายเป็นแสง'),
  x:XEq('หนังสือพิมพ์ลงบทความเรื่องนักฟิสิกส์ที่เคยเป็นเจ้าหน้าที่สำนักงานสิทธิบัตร ซึ่งอ้างว่ามวลกับพลังงานเป็นสิ่งเดียวกัน และก้อนถ่านเล็กๆ ก้อนหนึ่ง ถ้าเปลี่ยนเป็นพลังงานได้หมด จะให้ไฟฟ้าใช้ได้ทั้งเมือง')},
 {id:'q37_schro',eq:'schro',c:S=>S.ch===30&&S.age>=14&&S.ya<=99&&(['lab','coder','wire'].includes(S.car)||LITC37(S)),t:XEq('อิเล็กตรอนที่อยู่หลายที่'),
  x:XEq('ในห้องบรรยาย อาจารย์บอกว่าอิเล็กตรอนไม่ได้วิ่งเป็นวงรอบนิวเคลียสเหมือนดาวเคราะห์ แต่เป็นเหมือนเมฆของความเป็นไปได้ จนกว่าจะมีใครวัดมัน นักศึกษาคนหนึ่งถามว่าแล้วโลกจริงอยู่ที่ไหน')},
 {id:'q37_shannon',eq:'shannon',c:S=>S.ch===30&&S.age>=12&&S.ya<=77&&(['coder','wire','lab'].includes(S.car)||LITC37(S)),t:XEq('ทายตัวอักษรถัดไป'),
  x:XEq('เพื่อนเล่นเกมกับคุณ อ่านประโยคทีละตัวอักษรแล้วให้คุณทายตัวถัดไป บางตัวทายถูกทันที บางตัวทายไม่ได้เลย เขาบอกว่าตัวที่ทายยากนั่นแหละคือตัวที่มีข่าวสารมากที่สุด')},
 {id:'q37_chaos',eq:'chaos',c:S=>S.ch===30&&S.age>=10&&S.ya<=62,t:XEq('พยากรณ์ที่ผิด'),
  x:XEq('วิทยุบอกว่าพรุ่งนี้อากาศแจ่มใส แต่ฝนตกหนักทั้งวัน ลูกพี่ลูกน้องที่ทำงานกรมอุตุฯ บอกว่าต่อให้มีเครื่องคอมพิวเตอร์ที่เร็วที่สุด ก็ทายอากาศล่วงหน้าเกินสองสัปดาห์ไม่ได้ เพราะความต่างนิดเดียววันนี้จะกลายเป็นความต่างมหาศาลในวันหน้า')},
 {id:'q37_bs',eq:'bs',c:S=>S.ch===30&&S.age>=18&&((S.rg==='nym'&&S.ya<=52)||(['bkk','vil'].includes(S.rg)&&S.ya<=29&&S.ya>=27)),t:XEq('สูตรที่ตั้งราคาความเสี่ยง'),
  x:XEq('เพื่อนที่ทำงานในบริษัทการเงินเล่าว่าทุกโต๊ะในห้องค้าเงินมีเครื่องคิดเลขที่ใส่สูตรเดียวกันไว้ สูตรนั้นบอกราคาของสัญญาซื้อขายล่วงหน้า และทุกคนเชื่อมันเหมือนเชื่อกฎแรงโน้มถ่วง')}];
EQEV37.forEach(e=>{const E=EQK37(e.eq);e.n=XEq('สมการ '+L(E.n)+' ปรากฏในชีวิตของคุณ ถ้าสนใจ เกมจะแสดงสมการ และในสมุดจะมีการ์ดกับของเล่นให้ลองมือ');
  e.o=[opt(XEq('ตั้งใจดูให้เข้าใจ'),S=>{S.eq37=S.eq37||[];if(!S.eq37.includes(e.eq))S.eq37.push(e.eq);S.lit=clamp((S.lit||0)+3,0,100);fx({kn:3});eqGot37(e.eq);
      return XEq('ในหัวของคุณ ตัวเลขและเส้นเหล่านั้นเรียงตัวเป็นรูปที่คุณไม่เคยเห็นมาก่อน ✧ '+L(E.n))}),
    opt(XEq('ไม่ใช่เรื่องของคุณ'),S=>{fx({b:1});return XEq('คุณเดินผ่านไป อีกหลายร้อยปีคนทั้งโลกจะใช้มันโดยไม่รู้ตัว')})]});
function eq37(a){if(!S||![4,16,20,28,30].includes(S.ch))return null;if(S.eqA37!=null&&S.age-S.eqA37<8)return null;let b={};try{b=book29().eq||{}}catch(e){}
  const c=EQEV37.filter(e=>!S.done[e.id]&&!(S.eq37||[]).includes(e.eq)&&e.c(S));if(!c.length)return null;
  const fresh=c.filter(e=>!b[e.eq]);const pool=fresh.length?fresh:c;if(rnd()>(fresh.length?(S.ch===30?.25:.35):.06))return null;const g=pool.find(e=>e.eq==='grav')||pick(pool);S.eqA37=S.age;return g}
function eqGot37(k){if(TEST)return;try{const b=book29();b.eq=b.eq||{};const nw=!b.eq[k];b.eq[k]=1;store.set('sit.book',b);setTimeout(()=>eqReveal37(k,nw),500)}catch(e){}}

/* ---------- pixel glyphs: any formula becomes a field of glowing pixels ---------- */
function eqPix37(str,px){const c=document.createElement('canvas'),x=c.getContext('2d');px=px||12;const font='bold '+px+'px "DejaVu Sans","Noto Sans Math","Cambria Math",serif';x.font=font;
  const w=Math.ceil(x.measureText(str).width)+4,h=Math.ceil(px*1.5);c.width=w;c.height=h;x.font=font;x.textBaseline='middle';x.fillStyle='#fff';x.fillText(str,2,h/2);
  const d=x.getImageData(0,0,w,h).data,pts=[];for(let yy=0;yy<h;yy++)for(let xx=0;xx<w;xx++)if(d[(yy*w+xx)*4+3]>110)pts.push([xx,yy]);return {w,h,pts}}
function eqCanvas37(str,sc,col){const P=eqPix37(str,12);const c=document.createElement('canvas');c.width=P.w*sc;c.height=P.h*sc;const x=c.getContext('2d');
  for(const [a,b] of P.pts){x.fillStyle=col||'#e8a24a';x.fillRect(a*sc,b*sc,sc-1,sc-1)}c.style.cssText='max-width:100%;image-rendering:pixelated;display:block;margin:6px 0';return c}
function eqCss37(){if(document.getElementById('eq37css'))return;const st=document.createElement('style');st.id='eq37css';
  st.textContent='#eq37r{position:fixed;inset:0;z-index:95;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,rgba(20,14,40,.88),rgba(5,4,10,.95));cursor:pointer}#eq37r canvas{max-width:94vw;image-rendering:pixelated}#eq37r .n{font-family:var(--display);color:#ffe2a8;font-size:22px;margin-top:10px;opacity:0;transition:opacity 1s}#eq37r .n.on{opacity:1}#eq37r .s{color:#b8a8d8;font-size:13px;margin-top:6px}'+
  '#eq37{position:fixed;inset:0;background:#0b0907;z-index:92;overflow:auto;padding:18px 14px}#eq37 .w{max-width:680px;margin:0 auto}#eq37 h2{font-family:var(--display);color:var(--bone);margin:0 0 4px}#eq37 .card{border:1px solid var(--line);background:var(--soot);border-radius:10px;padding:12px 14px;margin:10px 0}#eq37 .card.on{border-color:#8a7ad8}#eq37 .card h3{margin:0;font-size:17px;color:#c8b8ff}#eq37 .card .e{font-size:12px;color:var(--ash);margin:2px 0 6px}#eq37 .card p{margin:6px 0;font-size:14px;line-height:1.6}#eq37 .chips{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0}#eq37 .chips button{background:#1e1838;border:1px solid #4a3a8a;color:#e8e0ff;border-radius:8px;padding:4px 10px;font-size:14px;cursor:pointer}#eq37 .chips button.on{background:#4a3a8a}#eq37 .mean{font-size:13.5px;color:#ffe2a8;min-height:1.4em}#eq37 .wh{font-size:12.5px;color:var(--ash)}#eq37 .nt{font-size:12.5px;color:var(--ash);border-left:2px solid var(--line);padding-left:8px}'+
  '#toy37{position:fixed;inset:0;z-index:96;background:#07060c;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px}#toy37 canvas{width:min(96vw,720px);height:auto;aspect-ratio:16/10;background:#120f1e;border:1px solid #3a3060;border-radius:8px;touch-action:none}#toy37 .q{color:#e8e0ff;font-size:15px;max-width:720px;margin:8px 0;text-align:center;line-height:1.5}#toy37 .r{color:#ffe2a8;font-size:14px;min-height:1.4em;text-align:center}#toy37 .bt{display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;justify-content:center}';document.head.appendChild(st)}

/* the reveal: pixels drift in from nowhere, settle into the formula, glow, and hang over the scene */
function eqReveal37(k,fresh){try{eqCss37();const E=EQK37(k);if(!E||document.getElementById('eq37r'))return;const P=eqPix37(E.f,12),sc=Math.max(3,Math.min(8,Math.floor(Math.min(innerWidth*.92,900)/P.w)));
  const el=document.createElement('div');el.id='eq37r';const cv=document.createElement('canvas');cv.width=P.w*sc+40;cv.height=P.h*sc+60;el.appendChild(cv);
  const nm=document.createElement('div');nm.className='n';nm.textContent=L(E.n);el.appendChild(nm);const sm=document.createElement('div');sm.className='s';sm.textContent=fresh?'การ์ดใหม่ในสมุด 17 สมการ · แตะเพื่อเปิด':'แตะเพื่อเปิดการ์ด';el.appendChild(sm);document.body.appendChild(el);
  const x=cv.getContext('2d'),W=cv.width,H=cv.height,pts=P.pts.map(([a,b],i)=>({tx:20+a*sc,ty:30+b*sc,x:Math.random()*W,y:H+Math.random()*H*.5,d:Math.random()*.6,ph:Math.random()*6.28}));
  const t0=performance.now();let alive=true;try{SND.ui('hit')}catch(e){}
  const fr=now=>{if(!alive)return;const t=(now-t0)/1000;x.clearRect(0,0,W,H);
    for(const p of pts){const u=clamp((t-p.d)/1.4,0,1),ee=1-Math.pow(1-u,3);const fx0=p.x+(p.tx-p.x)*ee,fy0=p.y+(p.ty-p.y)*ee+Math.sin(t*2+p.ph)*(u>=1?1.5:4);
      const hue=(260+Math.sin(t*1.3+p.tx/60)*40+u*20)|0;x.fillStyle='hsla('+hue+',90%,'+(60+u*15)+'%,'+(.3+u*.7)+')';x.fillRect(fx0,fy0,sc-1,sc-1);
      if(u>=1&&Math.random()<.004){x.fillStyle='rgba(255,240,200,.9)';x.fillRect(fx0-sc,fy0-sc,sc*3,sc*3)}}
    if(t>1.6)nm.classList.add('on');if(t>9){close();return}requestAnimationFrame(fr)};
  const close=()=>{alive=false;el.remove()};el.onclick=()=>{close();eqOpen37(k)};requestAnimationFrame(fr)}catch(e){}}

/* ---------- the book of seventeen ---------- */
function eqGot37list(){try{return (book29().eq)||{}}catch(e){return {}}}
function eqOpen37(focus){try{eqCss37();const got=eqGot37list(),n=EQ37.filter(e=>got[e.k]).length;const old=document.getElementById('eq37');if(old)old.remove();
  const el=document.createElement('div');el.id='eq37';const w=document.createElement('div');w.className='w';el.appendChild(w);
  w.innerHTML='<h2>17 สมการที่เปลี่ยนโลก</h2><p class="small">ใช้ชีวิตจนเจอปัญหาที่สมการนั้นตอบ เพื่อเปิดการ์ด · '+n+'/17</p>';
  EQ37.forEach((E,i)=>{const on=!!got[E.k];const c=document.createElement('div');c.className='card '+(on?'on':'off');c.id='eqc_'+E.k;
    c.innerHTML='<h3>'+(on?'':'🔒 ')+(i+1)+'. '+esc(L(E.n))+'</h3>';
    if(on){c.appendChild(eqCanvas37(E.f,3,'#b8a8ff'));const who=document.createElement('div');who.className='e';who.textContent=L(E.who);c.appendChild(who);
      const px=document.createElement('p');px.textContent=L(E.x);c.appendChild(px);
      const ch=document.createElement('div');ch.className='chips';const mean=document.createElement('div');mean.className='mean';mean.textContent='แตะสัญลักษณ์เพื่อดูความหมาย';
      E.p.forEach(([s,m])=>{const b=document.createElement('button');b.textContent=s;b.onclick=()=>{ch.querySelectorAll('button').forEach(z=>z.classList.remove('on'));b.classList.add('on');mean.textContent=s+' — '+m};ch.appendChild(b)});c.appendChild(ch);c.appendChild(mean);
      const af=document.createElement('p');af.innerHTML='<b>โลกหลังจากนั้น</b> '+esc(L(E.after));c.appendChild(af);
      if(E.note){const nt=document.createElement('p');nt.className='nt';nt.textContent=L(E.note);c.appendChild(nt)}
      if(E.toy&&TOY37[E.toy]){const tb=document.createElement('button');tb.className='btn btn-primary';tb.textContent='🧪 ลองมือ';tb.onclick=()=>toyOpen37(E.toy);c.appendChild(tb)}}
    else{const wh=document.createElement('p');wh.className='wh';wh.textContent='เจอได้ใน '+L(E.where);c.appendChild(wh);if(E.toy&&TOY37[E.toy]){const tb=document.createElement('p');tb.className='wh';tb.textContent='มีของเล่นให้ลองมือเมื่อเปิดการ์ดแล้ว';c.appendChild(tb)}}
    w.appendChild(c)});
  const nt=document.createElement('p');nt.className='small';nt.textContent=L(EQNOTE37);w.appendChild(nt);const cb=document.createElement('button');cb.className='btn btn-primary';cb.textContent='ปิด';cb.onclick=()=>{el.remove();try{eqBtn37(1)}catch(e){}};w.appendChild(cb);
  document.body.appendChild(el);if(focus){const f=document.getElementById('eqc_'+focus);if(f)setTimeout(()=>f.scrollIntoView({block:'start'}),50)}}catch(e){}}
function eqBtn37(re){try{const sec=document.getElementById('book29');if(!sec)return;let b=document.getElementById('eq37btn');if(b&&!re)return;if(!b){b=document.createElement('button');b.className='btn btn-ghost';b.id='eq37btn';b.onclick=()=>eqOpen37();sec.appendChild(b)}
  const n=EQ37.filter(e=>eqGot37list()[e.k]).length;b.textContent='📐 17 สมการที่เปลี่ยนโลก · '+n+'/17'}catch(e){}}

/* ---------- toys: thirty seconds with your hands ---------- */
function toyOpen37(k){try{eqCss37();const T=TOY37[k];if(!T)return;const old=document.getElementById('toy37');if(old)old.remove();
  const el=document.createElement('div');el.id='toy37';el.innerHTML='<div class="q"></div><canvas width="640" height="400"></canvas><div class="r"></div><div class="bt"></div>';document.body.appendChild(el);
  const cv=el.querySelector('canvas'),x=cv.getContext('2d'),q=el.querySelector('.q'),r=el.querySelector('.r'),bt=el.querySelector('.bt');let alive=true;
  const pos=e=>{const b=cv.getBoundingClientRect();return [(e.clientX-b.left)*cv.width/b.width,(e.clientY-b.top)*cv.height/b.height]};
  const api={x,cv,W:640,H:400,q:t=>q.textContent=t,r:t=>r.textContent=t,btn:(t,f,pri)=>{const b=document.createElement('button');b.className='btn '+(pri?'btn-primary':'btn-ghost');b.textContent=t;b.onclick=f;bt.appendChild(b);return b},
    win:t=>{r.textContent='✧ '+t;try{SND.ui('hit')}catch(e){};try{const B=book29();B.toys=B.toys||{};B.toys[k]=1;store.set('sit.book',B)}catch(e){}},alive:()=>alive,pos,font:(px,c)=>{x.font=px+'px "DejaVu Sans",sans-serif';x.fillStyle=c||'#e8e0ff'}};
  const st=T(api);api.btn('ปิด',()=>{alive=false;el.remove()});
  cv.onpointerdown=e=>{cv.setPointerCapture(e.pointerId);st.down&&st.down(...pos(e))};cv.onpointermove=e=>{st.move&&st.move(...pos(e),e.buttons)};cv.onpointerup=e=>{st.up&&st.up(...pos(e))};
  const loop=now=>{if(!alive)return;try{st.draw(now)}catch(e){}requestAnimationFrame(loop)};requestAnimationFrame(loop)}catch(e){}}
const TOY37={
 /* 1. squares on the sides of a right triangle */
 pyth(A){A.q('ลากมุมสีส้มเพื่อเปลี่ยนสามเหลี่ยมมุมฉาก หาสามเหลี่ยมที่ทั้งสามด้านเป็นเลขเต็มทุกด้าน เช่นที่ชาวบาบิโลนจดไว้ (หาให้ได้สองแบบ)');const u=10,O=[250,240];let a=4,b=3,drag=0;const found=new Set(),x=A.x;
  const sq=(p,q,col,lab)=>{/* square outward on segment p->q */const dx=q[0]-p[0],dy=q[1]-p[1];const r=[q[0]-dy,q[1]+dx],s=[p[0]-dy,p[1]+dx];x.fillStyle=col;x.beginPath();x.moveTo(...p);x.lineTo(...q);x.lineTo(...r);x.lineTo(...s);x.closePath();x.fill();x.strokeStyle='#0008';x.stroke();
    A.font(16,'#fff');x.fillText(lab,(p[0]+r[0])/2-14,(p[1]+r[1])/2+6)};
  return {down:(mx,my)=>{const P=[O[0]+b*u,O[1]-a*u];if(Math.hypot(mx-P[0],my-P[1])<30)drag=1},move:(mx,my,bs)=>{if(!drag||!bs)return;b=clamp(Math.round((mx-O[0])/u),1,12);a=clamp(Math.round((O[1]-my)/u),1,12)},up:()=>{drag=0},
   draw:()=>{x.fillStyle='#120f1e';x.fillRect(0,0,640,400);x.strokeStyle='#ffffff10';for(let i=0;i<640;i+=u){x.beginPath();x.moveTo(i,0);x.lineTo(i,400);x.stroke()}for(let j=0;j<400;j+=u){x.beginPath();x.moveTo(0,j);x.lineTo(640,j);x.stroke()}
    const P0=O,P1=[O[0]+b*u,O[1]],P2=[O[0],O[1]-a*u],c2=a*a+b*b,c=Math.sqrt(c2),whole=Math.abs(c-Math.round(c))<1e-9;
    sq(P0,P1,'#3a6ab8aa','b²='+b*b);sq(P2,P0,'#4aa86aaa','a²='+a*a);sq(P1,P2,whole?'#e8a24acc':'#8a5acaaa','c²='+c2);
    x.strokeStyle='#fff';x.lineWidth=2;x.beginPath();x.moveTo(...P0);x.lineTo(...P1);x.lineTo(...P2);x.closePath();x.stroke();x.lineWidth=1;
    x.fillStyle='#ff9a3a';x.beginPath();x.arc(O[0]+b*u,O[1]-a*u,9,0,7);x.fill();
    A.font(18);x.fillText('a = '+a+'   b = '+b+'   c = √'+c2+' = '+(whole?Math.round(c):c.toFixed(3)),20,30);x.fillText(a*a+' + '+b*b+' = '+c2,20,56);
    if(whole&&!found.has(Math.min(a,b)+'-'+Math.max(a,b))){found.add(Math.min(a,b)+'-'+Math.max(a,b));A.r('เจอแล้ว '+Math.min(a,b)+'–'+Math.max(a,b)+'–'+Math.round(c)+' · พบ '+found.size+' แบบ');if(found.size>=2)A.win('คุณหาสามเหลี่ยมเลขเต็มได้ '+found.size+' แบบ แผ่นดินเหนียวพลิมป์ตัน 322 มีชุดตัวเลขแบบนี้สิบห้าแถว')}}}},
 /* 2. a slide rule: multiplication by sliding two log scales */
 slide(A){const x=A.x,L0=60,LW=520,lg=v=>L0+Math.log10(v)*LW;const tasks=[[2,3],[2,4],[1.5,6],[3,3]];let ti=0,off=0,drag=null,doneN=0;
  const setQ=()=>A.q('ไม้บรรทัดคำนวณ: ลากไม้ท่อนกลางให้เลข 1 ของมันตรงกับ '+tasks[ti][0]+' บนไม้ท่อนล่าง แล้วดูว่าใต้เลข '+tasks[ti][1]+' ของไม้ท่อนกลางคือเลขอะไร');setQ();
  const scale=(y,sh,col,up)=>{x.fillStyle=col;x.fillRect(sh+L0-20,y,LW+40,44);x.strokeStyle='#1a1a1a';x.fillStyle='#1a1a1a';x.font='12px "DejaVu Sans",sans-serif';
   for(let v=1;v<=10.001;v+=.1){const X=sh+lg(v),major=Math.abs(v-Math.round(v))<1e-6;x.beginPath();x.moveTo(X,up?y+44:y);x.lineTo(X,up?y+44-(major?16:7):y+(major?16:7));x.stroke();if(major)x.fillText(String(Math.round(v)),X-4,up?y+22:y+32)}};
  return {down:(mx,my)=>{if(my>150&&my<200)drag=mx-off},move:(mx,my,bs)=>{if(drag!=null&&bs)off=clamp(mx-drag,-LW,LW)},up:()=>{drag=null;const want=Math.log10(tasks[ti][0])*LW;if(Math.abs(off-want)<5){off=want;const ans=tasks[ti][0]*tasks[ti][1];
     if(ans<=10){doneN++;A.r(tasks[ti][0]+' × '+tasks[ti][1]+' = '+ans+' (คุณบวกความยาว ไม่ได้คูณเลย)');ti=(ti+1)%tasks.length;if(doneN>=3)A.win('คุณคูณเลขด้วยการบวกความยาวได้ '+doneN+' ข้อ แบบที่วิศวกรทำกันมาสามร้อยปี');setTimeout(setQ,1400)}}},
   draw:()=>{x.fillStyle='#120f1e';x.fillRect(0,0,640,400);scale(110,0,'#e8dcb8',true);scale(156,off,'#f4ecd0',false);scale(202,0,'#e8dcb8',true);
    const cx=off+lg(tasks[ti][1]);x.fillStyle='#ff4a3a55';x.fillRect(cx-2,96,4,170);
    A.font(15);x.fillText('ระยะของ '+tasks[ti][0]+' = log '+tasks[ti][0]+' ≈ '+Math.log10(tasks[ti][0]).toFixed(3),20,40);x.fillText('ไม้ท่อนกลางเลื่อนไป '+(off/LW).toFixed(3),20,64);
    x.fillText('log a + log b = log (a×b)',20,330);x.fillStyle='#ffe2a8';x.fillText('อ่านค่าใต้เส้นแดง ≈ '+(Math.pow(10,(cx-L0)/LW)).toFixed(2),20,360)}}},
 /* 3. launch a moon: one law for falling apples and circling worlds */
 orbit(A){A.q('ลากจากดาวดวงเล็กเพื่อกำหนดทิศและแรงที่ส่งมันออกไป แล้วปล่อย ถ้าเร็วไปมันจะหลุดหายไป ช้าไปมันจะตกใส่ดาวใหญ่ ให้มันโคจรครบหนึ่งรอบ');const x=A.x,C=[320,200],GM=9000;let p=null,v=null,drag=null,trail=[],ang=0,lastA=null,turns=0,res='';
  const reset=()=>{p=[320,80];v=[0,0];trail=[];ang=0;lastA=null;turns=0};reset();A.btn('เริ่มใหม่',()=>{reset();res=''});
  return {down:(mx,my)=>{if(Math.hypot(mx-p[0],my-p[1])<40&&!(v[0]||v[1]))drag=[mx,my]},move:(mx,my,bs)=>{if(drag&&bs)drag=[mx,my]},up:()=>{if(drag){v=[(p[0]-drag[0])/18,(p[1]-drag[1])/18];drag=null}},
   draw:()=>{x.fillStyle='#08060f';x.fillRect(0,0,640,400);for(let i=0;i<60;i++){x.fillStyle='#ffffff30';x.fillRect((i*97)%640,(i*53)%400,1,1)}
    x.fillStyle='#3a7ad8';x.beginPath();x.arc(C[0],C[1],26,0,7);x.fill();x.fillStyle='#5aa848';x.fillRect(C[0]-12,C[1]-8,10,8);x.fillRect(C[0]+4,C[1]+4,12,6);
    if(v[0]||v[1]){for(let s=0;s<4;s++){const dx=C[0]-p[0],dy=C[1]-p[1],r2=dx*dx+dy*dy,r=Math.sqrt(r2),a=GM/r2;v[0]+=a*dx/r*.25;v[1]+=a*dy/r*.25;p[0]+=v[0]*.25;p[1]+=v[1]*.25;
       const an=Math.atan2(p[1]-C[1],p[0]-C[0]);if(lastA!=null){let d=an-lastA;if(d>Math.PI)d-=2*Math.PI;if(d<-Math.PI)d+=2*Math.PI;ang+=d}lastA=an;
       if(r<28){res='ตกใส่ดาวใหญ่ ส่งช้าเกินไป';v=[0,0]}else if(r>700){res='หลุดออกไปในอวกาศ ส่งเร็วเกินไป';v=[0,0]}}trail.push([p[0],p[1]]);if(trail.length>900)trail.shift();
     if(Math.abs(ang)>=2*Math.PI*(turns+1)){turns++;A.win('โคจรครบ '+turns+' รอบ แรงเดียวกับที่ทำให้แอปเปิลตก ดึงดวงจันทร์ไว้ไม่ให้หลุดไป')}}
    x.strokeStyle='#c8b8ff70';x.beginPath();trail.forEach(([a,b],i)=>i?x.lineTo(a,b):x.moveTo(a,b));x.stroke();x.fillStyle='#e8e0d0';x.beginPath();x.arc(p[0],p[1],7,0,7);x.fill();
    if(drag){x.strokeStyle='#ff9a3a';x.lineWidth=2;x.beginPath();x.moveTo(p[0],p[1]);x.lineTo(p[0]+(p[0]-drag[0]),p[1]+(p[1]-drag[1]));x.stroke();x.lineWidth=1}
    const r=Math.hypot(C[0]-p[0],C[1]-p[1]);A.font(15);x.fillText('F = G m₁m₂ / r²   ระยะ r = '+r.toFixed(0)+'   แรง ∝ '+(GM/(r*r)).toFixed(2),16,28);if(res){x.fillStyle='#ffe2a8';x.fillText(res,16,380)}}}},
 /* 4. the Galton board: chance falling into a bell */
 galton(A){A.q('กดปล่อยลูกเหล็กให้ตกผ่านหมุด แต่ละลูกเด้งซ้ายหรือขวาแบบสุ่มที่หมุดทุกแถว ดูว่าช่องด้านล่างเต็มเป็นรูปอะไร');const x=A.x,ROWS=12,NB=ROWS+1,bins=new Array(NB).fill(0),balls=[];let total=0,won=0;
  const drop=n=>{for(let i=0;i<n;i++)balls.push({r:-1-i*.35,k:0,t:0})};A.btn('ปล่อย 1 ลูก',()=>drop(1));A.btn('ปล่อย 100 ลูก',()=>drop(100),1);
  const px=(r,k)=>320+(k-r/2)*30,py=r=>40+r*22;
  return {draw:()=>{x.fillStyle='#120f1e';x.fillRect(0,0,640,400);x.fillStyle='#8a7ad8';for(let r=0;r<ROWS;r++)for(let k=0;k<=r;k++){x.beginPath();x.arc(px(r,k),py(r)+10,3,0,7);x.fill()}
    for(const b of balls){b.r+=.12;if(b.r>=0&&Math.floor(b.r)>b.t){b.t=Math.floor(b.r);if(b.t<=ROWS&&Math.random()<.5)b.k++}}
    for(let i=balls.length-1;i>=0;i--){const b=balls[i];if(b.r>=ROWS){bins[clamp(b.k,0,NB-1)]++;total++;balls.splice(i,1);continue}if(b.r<0)continue;const fr=b.r-Math.floor(b.r);
      x.fillStyle='#e8e0d0';x.beginPath();x.arc(px(Math.floor(b.r),b.k),py(b.r)+4,4,0,7);x.fill()}
    const mx=Math.max(1,...bins),BW=30,base=392;for(let i=0;i<NB;i++){const h=bins[i]/mx*120;x.fillStyle='#e8a24a';x.fillRect(320+(i-ROWS/2)*BW-12,base-h,24,h)}
    if(total>=30){x.strokeStyle='#c8b8ff';x.lineWidth=2;x.beginPath();const mu=ROWS/2,sd=Math.sqrt(ROWS)/2;for(let t=0;t<=NB-1;t+=.1){const yv=Math.exp(-((t-mu)**2)/(2*sd*sd));const X=320+(t-ROWS/2)*BW,Y=base-yv*120;t?x.lineTo(X,Y):x.moveTo(X,Y)}x.stroke();x.lineWidth=1}
    A.font(15);x.fillText('ลูกที่ตกแล้ว '+total,16,24);if(total>=100&&!won){won=1;A.win('ความบังเอิญเล็กๆ หลายครั้งรวมกัน กลายเป็นรูประฆังที่ทำนายได้ นี่คือการแจกแจงปกติ')}}}}};
try{window.__v37={eqReveal37,eqOpen37,toyOpen37,EQ37,eqBtn37}}catch(e){}
