/* ===================== v0.26: who you are, where you came from, what your hands made ===================== */
CAUSE.old26=X('ชราภาพ จากไปอย่างสงบในบ้านของตัวเอง','old age, peacefully at home');

/* ---------- which part of the world a life is in ---------- */
const AREA26C={4:'wea',6:'naf',8:'sas',10:'eur',12:'eas',14:'ame',16:'eur',18:'eur',20:'sas',22:'sea',24:'wea'};
const AREA26R={eaf:'afr',saf:'afr',gsa:'afr',lev:'wea',ara:'wea',zag:'wea',ana:'wea',sas:'sas',sun:'sea',jav:'sea',flo:'sea',luz:'sea',phl:'sea',tha:'sea',
  kuk:'png',sah:'png',bis:'png',van:'pol',fij:'pol',ton:'pol',soc:'pol',haw:'pol',rap:'pol',nzl:'pol',eur:'eur',mst:'eur',wcv:'eur',
  sib:'eas',alt:'eas',tib:'eas',eas:'eas',yel:'eas',yan:'eas',ber:'ame',ame:'ame',ale:'naf',alx:'naf',cai:'naf',jud:'wea',uga:'wea',enk:'wea',jer:'wea'};
function area26(S){if(!S)return 'wea';if(civ(S.ch)&&AREA26C[S.ch]&&!['ale','alx','cai','jud','uga','enk','jer'].includes(S.rg))return S.ch===24&&S.rg==='cor'?'eur':AREA26C[S.ch];return AREA26R[S.rg]||AREA26C[S.ch]||'wea'}

/* ---------- archaic ancestry (estimates for people living in each region today) ---------- */
const MIX26={afr:[.3,0],naf:[1.5,0],wea:[1.8,0],eur:[1.9,0],sas:[1.9,.1],eas:[2.2,.2],sea:[2,.3],png:[2,4],pol:[1.9,.8],ame:[2,.1]};
const MIXNOTE26=X('ประมาณจากดีเอ็นเอของคนในภูมิภาคนี้ ตัวเลขต่างกันไปตามงานวิจัยและแต่ละคน ลองค้นคำว่า “Neanderthal ancestry” และ “Denisovan admixture”',
  'Estimated from the DNA of people in this region; figures vary between studies and between people. Try searching “Neanderthal ancestry” and “Denisovan admixture”.');
function mix26(S){const sp=S.sp.id,ya=S.ya0,ar=area26(S);
  if(sp==='nea')return X('นีแอนเดอร์ทัลเต็มตัว ทุกวันนี้ดีเอ็นเอของพวกคุณยังเหลืออยู่ราว 1–2% ในคนเกือบทุกคนที่บรรพบุรุษอยู่นอกแอฟริกา','Fully Neanderthal. Today about 1–2% of your kind’s DNA survives in almost everyone whose ancestors lived outside Africa.');
  if(sp==='den')return X('เดนิโซวาเต็มตัว ทุกวันนี้ดีเอ็นเอของพวกคุณยังเหลืออยู่ในชาวปาปัวและชาวอะบอริจินราว 3–5% และในชาวทิเบต ยีนที่ช่วยให้อยู่บนที่สูงได้มาจากพวกคุณ','Fully Denisovan. Today your kind’s DNA survives at about 3–5% in Papuans and Aboriginal Australians, and Tibetans carry a gene from you that helps at high altitude.');
  if(sp!=='sap')return null;
  if(ar==='afr'){if(ya>60000)return X('เซเปียนส์ราว 100% แต่นักวิจัยบางกลุ่มพบร่องรอยว่าบรรพบุรุษในแอฟริกาเองก็อาจเคยผสมกับมนุษย์สายโบราณที่ยังไม่มีใครพบฟอสซิล (ยังถกเถียง)','About 100% sapiens, though some researchers see traces that ancestors inside Africa also mixed with an archaic human no one has found a fossil of yet (debated).');
    return X('เซเปียนส์ ~99.7% · นีแอนเดอร์ทัล ~0.3% (มาจากคนที่ย้อนกลับเข้าแอฟริกาในภายหลัง)','Sapiens ~99.7% · Neanderthal ~0.3% (carried back into Africa by later migrants)')}
  if(ya>60000)return X('เซเปียนส์เกือบ 100% ช่วงนี้มีเซเปียนส์บางกลุ่มออกนอกแอฟริกาแล้ว และอาจพบนีแอนเดอร์ทัลบ้าง แต่การผสมครั้งใหญ่ที่ยังเหลือในคนปัจจุบันเกิดทีหลัง ราว 50,000–44,000 ปีก่อน','Almost 100% sapiens. Some sapiens have already left Africa and may meet Neanderthals now and then, but the big mixing that still survives in people today comes later, about 50,000–44,000 years ago.');
  if(ya>45000)return X('ช่วงนี้เซเปียนส์ที่ออกจากแอฟริกากำลังพบและมีลูกกับนีแอนเดอร์ทัล การผสมครั้งใหญ่เกิดราว 50,000–44,000 ปีก่อน คนรุ่นคุณอาจมีดีเอ็นเอนีแอนเดอร์ทัลมากกว่าคนปัจจุบัน','Sapiens leaving Africa are meeting and having children with Neanderthals now; the main mixing happened about 50,000–44,000 years ago. People of your time may carry more Neanderthal DNA than people today.');
  let[n,d]=MIX26[ar]||MIX26.wea;if(S.ch===5&&ya>2500)d=.3;if(ya>20000)n=3;
  const j=(v,k)=>Math.round(v*(1+(((S.seed>>k)&15)-7.5)/40)*10)/10;n=j(n,2);d=d>=1?Math.round(j(d,6)):j(d,6);const s=Math.round((100-n-d)*10)/10;
  return [X('เซเปียนส์ ~'+s+'%','Sapiens ~'+s+'%'),X('นีแอนเดอร์ทัล ~'+n+'%','Neanderthal ~'+n+'%'),...(d?[X('เดนิโซวา ~'+d+'%','Denisovan ~'+d+'%')]:[])]}

/* ---------- how many generations back to Africa ---------- */
const ROUTE26={wea:X('แอฟริกาตะวันออก → คาบสมุทรอาหรับหรือลิแวนต์ → ที่นี่','East Africa → Arabia or the Levant → here'),
  naf:X('แอฟริกาตะวันออก → เอเชียตะวันตก → ย้อนกลับเข้าแอฟริกาเหนือ คนแอฟริกาเหนือจึงมีบรรพบุรุษทั้งสองฝั่ง','East Africa → West Asia → back into North Africa, so North Africans have ancestors from both sides'),
  eur:X('แอฟริกาตะวันออก → เอเชียตะวันตก → ยุโรป','East Africa → West Asia → Europe'),
  sas:X('แอฟริกาตะวันออก → คาบสมุทรอาหรับหรืออิหร่าน → เอเชียใต้','East Africa → Arabia or Iran → South Asia'),
  eas:X('แอฟริกาตะวันออก → เอเชียใต้หรือเอเชียกลาง → เอเชียตะวันออก','East Africa → South or Central Asia → East Asia'),
  sea:X('แอฟริกาตะวันออก → เอเชียใต้ → แผ่นดินซุนดา (ตอนที่ทะเลยังต่ำ)','East Africa → South Asia → Sundaland (while the sea was low)'),
  png:X('แอฟริกาตะวันออก → เอเชียใต้ → ซุนดา → พายเรือข้ามทะเลไปซาฮูล','East Africa → South Asia → Sunda → by boat across the sea to Sahul'),
  pol:X('แอฟริกาตะวันออก → เอเชียตะวันออก → ไต้หวัน → ฟิลิปปินส์ → หมู่เกาะบิสมาร์ก → ข้ามมหาสมุทร','East Africa → East Asia → Taiwan → the Philippines → the Bismarcks → across the ocean'),
  ame:X('แอฟริกาตะวันออก → เอเชีย → ไซบีเรีย → เบริงเจีย → อเมริกา','East Africa → Asia → Siberia → Beringia → the Americas')};
const LATER26={eur:[7000,X(' ต่อมามีบรรพบุรุษอีกสองสายเข้ามา: ชาวนาจากอานาโตเลีย และคนเลี้ยงสัตว์จากทุ่งหญ้า',' Two more ancestral streams arrived later: farmers from Anatolia and herders from the steppe.')],
  sea:[4200,X(' ราว 4,000 ปีก่อน บรรพบุรุษอีกสายลงมาจากจีนตอนใต้พร้อมการปลูกข้าว แล้วผสมกับคนที่อยู่มาก่อน',' About 4,000 years ago another ancestral line came down from southern China with rice farming and mixed with the people already here.')],
  pol:[3000,X(' ระหว่างทางผสมกับชาวปาปัวที่อยู่ในหมู่เกาะมาหลายหมื่นปี',' On the way they mixed with Papuans who had lived on the islands for tens of thousands of years.')]};
const GENNOTE26=X('นับรุ่นละราว 28 ปี วันที่เซเปียนส์ออกจากแอฟริกายังถกเถียง ส่วนใหญ่ว่าราว 50,000–70,000 ปีก่อน','Counting about 28 years per generation. When sapiens left Africa is debated; most estimates say about 50,000–70,000 years ago.');
function lin26(S){if(S.sp.id!=='sap')return null;const ya=S.ya0,ar=area26(S);
  if(ar==='afr'){const g=Math.round((300000-ya)/27/100)*100;return [X('บรรพบุรุษส่วนใหญ่ของคุณอยู่ในแอฟริกามาตลอด ย้อนไปราว '+fmt(g)+' รุ่นก็ถึงเซเปียนส์ยุคแรกสุดที่รู้จัก ที่เจเบลอีร์ฮูด โมร็อกโก ราว 300,000 ปีก่อน','Most of your ancestors never left Africa. About '+fmt(g)+' generations back are the earliest known sapiens, at Jebel Irhoud, Morocco, about 300,000 years ago.')]}
  const g=Math.max(1,Math.round((60000-ya)/28/(ya>40000?10:100))*(ya>40000?10:100)),r=ROUTE26[ar]||ROUTE26.wea,l=LATER26[ar];
  if(ya>=60000)return [X('คุณอยู่ในเซเปียนส์กลุ่มแรกๆ ที่ออกนอกแอฟริกา เหมือนคนที่ถ้ำสคูลและกอฟเซห์ อิสราเอล ราว 120,000–90,000 ปีก่อน ลูกหลานของกลุ่มแรกๆ แบบนี้อาจเหลืออยู่ในคนปัจจุบันไม่มากนัก','You are among the earliest sapiens outside Africa, like the people of Skhul and Qafzeh caves, Israel, about 120,000–90,000 years ago. Early groups like this may have left few descendants among people today.')];
  if(ya>45000)return [X('คุณอยู่ในรุ่นแรกๆ หลังออกจากแอฟริกา ห่างจากรุ่นที่ออกเดินทางราว '+fmt(Math.max(10,g))+' รุ่น:','You are among the first generations out of Africa, about '+fmt(Math.max(10,g))+' generations after those who set out:'),r];
  return [X('ราว '+fmt(g)+' รุ่นก่อนคุณ บรรพบุรุษของคุณออกจากแอฟริกา:','About '+fmt(g)+' generations before you, your ancestors left Africa:'),r,...(l&&ya<l[0]?[l[1]]:[])]}

/* ---------- the same year, elsewhere in the world ---------- */
const WORLD26=[
 [300000,12000,0,X('ทั้งโลกยังไม่มีใครเพาะปลูกหรือเลี้ยงสัตว์ ทุกคนเก็บของป่าและล่าสัตว์','No one on Earth farms or keeps herds yet; everyone forages and hunts.')],
 [300000,41000,1,X('นีแอนเดอร์ทัลยังมีชีวิตอยู่ในยุโรปและเอเชียตะวันตก','Neanderthals are still alive in Europe and West Asia.')],
 [100000,50000,1,X('บนเกาะฟลอเรส มนุษย์ตัวเล็ก โฮโม ฟลอเรเซียนซิส ยังมีชีวิตอยู่','On the island of Flores, the small human Homo floresiensis is still alive.')],
 [100000,24000,0,X('ทวีปอเมริกาอาจยังไม่มีมนุษย์เลย (วันที่คนไปถึงยังถกเถียง)','The Americas may have no people at all yet (when people arrived is debated).')],
 [50000,238,0,X('ชาวอะบอริจินใช้ชีวิตในออสเตรเลียต่อเนื่องมาหลายหมื่นปี และจะอยู่อย่างนั้นจนชาวอังกฤษมาถึงในปี ค.ศ. 1788','Aboriginal people live in Australia, as they have for tens of thousands of years and will until the British arrive in 1788.')],
 [30000,11500,0,X('ทะเลยังต่ำ เดินเท้าจากแผ่นดินไทยไปถึงเกาะบอร์เนียวและชวาได้ ผ่านแผ่นดินซุนดา','The sea is low: you could walk from what is now Thailand to Borneo and Java across Sundaland.')],
 [26000,19000,0,X('แผ่นน้ำแข็งหนาหลายกิโลเมตรปกคลุมแคนาดาและยุโรปเหนือ','Ice sheets kilometres thick cover Canada and northern Europe.')],
 [19000,17000,2,X('ที่ถ้ำลาสโกซ์ ฝรั่งเศส มีคนวาดม้าและวัวป่าบนผนังถ้ำ','In Lascaux cave, France, people are painting horses and aurochs on the walls.')],
 [20000,8200,0,X('บริเตนยังเชื่อมกับยุโรปด้วยแผ่นดินที่ตอนนี้จมอยู่ใต้ทะเลเหนือ','Britain is still joined to Europe by land that now lies under the North Sea.')],
 [16000,2400,0,X('ญี่ปุ่นยุคโจมง: นักล่าเก็บของป่าที่ปั้นหม้อดินเผาเก่าแก่ที่สุดแห่งหนึ่งของโลก','Jōmon Japan: foragers making some of the oldest pottery in the world.')],
 [11600,10200,3,X('ที่เกอเบคลีเตเป ตุรกี ผู้คนตั้งเสาหินสลักรูปสัตว์ ในช่วงที่การทำไร่เพิ่งเริ่มต้น','At Göbekli Tepe, Turkey, people raise carved stone pillars, just as farming is beginning.')],
 [11000,5500,0,X('ซาฮารายังเขียว มีทะเลสาบ ฮิปโป และจระเข้','The Sahara is green, with lakes, hippos and crocodiles.')],
 [10000,4100,0,X('แมมมอธฝูงสุดท้ายของโลกยังอยู่บนเกาะแรงเกล ทางเหนือของไซบีเรีย','The last mammoths on Earth still live on Wrangel Island, north of Siberia.')],
 [9100,7950,3,X('ชาตัลฮือยุก ตุรกี: บ้านดินหลายพันคนติดกันเป็นพืด คนเข้าบ้านทางหลังคา','Çatalhöyük, Turkey: thousands of people in mud houses packed wall to wall, entered through the roof.')],
 [5200,3800,4,X('เมโสโปเตเมีย: อาลักษณ์กดอักษรลิ่มลงแผ่นดินเหนียว','Mesopotamia: scribes press cuneiform into clay.')],
 [5000,3500,0,X('บริเตน: ผู้คนกำลังตั้งหินที่สโตนเฮนจ์','Britain: people are raising the stones of Stonehenge.')],
 [4625,4500,6,X('อียิปต์: กำลังสร้างพีระมิดที่กีซา','Egypt: the pyramids of Giza are being built.')],
 [4625,3925,8,X('ลุ่มน้ำสินธุ: เมืองโมเฮนโจ-ดาโรมีท่อระบายน้ำใต้ถนน','The Indus: Mohenjo-daro has drains under its streets.')],
 [3275,3071,12,X('จีน: กษัตริย์ราชวงศ์ซางเสี่ยงทายบนกระดองเต่าและกระดูกวัว','China: Shang kings divine on turtle shells and ox bones.')],
 [3225,2425,14,X('เม็กซิโก: ชาวโอลเมกสลักหัวหินยักษ์','Mexico: the Olmec carve colossal stone heads.')],
 [3350,2700,5,X('แปซิฟิก: นักเดินเรือลาปิตาพายเรือไปถึงเกาะที่ไม่เคยมีคน','The Pacific: Lapita voyagers reach islands no one has lived on.')],
 [5000,780,5,X('อาโอเทียรัว (นิวซีแลนด์) ยังไม่มีมนุษย์คนใดเหยียบ','Aotearoa (New Zealand) has never been touched by a human foot.')],
 [2533,2347,16,X('เอเธนส์: พลเมืองชายลงคะแนนเสียงในสภา','Athens: male citizens vote in the assembly.')],
 [2293,2257,20,X('อินเดีย: พระเจ้าอโศกสลักคำสอนลงบนเสาหินทั่วแผ่นดิน','India: King Ashoka carves his edicts on pillars across the land.')],
 [2227,1805,0,X('จีน: ราชวงศ์ฮั่นปกครอง และเส้นทางสายไหมเริ่มเชื่อมจีนกับตะวันตก','China: the Han rule, and the Silk Road begins to join China to the west.')],
 [2052,1549,18,X('จักรวรรดิโรมันปกครองรอบทะเลเมดิเตอร์เรเนียน','The Roman Empire rules around the Mediterranean.')],
 [1925,1475,0,X('เม็กซิโก: เตโอตีวากันเป็นหนึ่งในเมืองใหญ่ที่สุดของโลกในยุคนั้น','Mexico: Teotihuacan is one of the largest cities in the world of its time.')],
 [1775,1125,0,X('อเมริกากลาง: เมืองของชาวมายาสร้างพีระมิดและจารึกปฏิทิน','Central America: Maya cities build pyramids and carve calendars.')],
 [1407,1118,0,X('จีน: ราชวงศ์ถัง นครฉางอานมีผู้คนจากทั่วเอเชีย','China: the Tang dynasty; Chang’an is full of people from across Asia.')],
 [1155,959,0,X('ชาวไวกิงล่องเรือไปถึงไอซ์แลนด์ กรีนแลนด์ และชายฝั่งอเมริกาเหนือ','Vikings sail to Iceland, Greenland and the coast of North America.')],
 [1223,594,22,X('กัมพูชา: เมืองพระนคร (อังกอร์) ศูนย์กลางอาณาจักรเขมร','Cambodia: Angkor, heart of the Khmer empire.')],
 [975,675,0,X('ลุ่มน้ำมิสซิสซิปปี: เมืองคาโฮเกียมีเนินดินขนาดยักษ์','The Mississippi: the city of Cahokia with its giant earth mounds.')],
 [925,575,0,X('แอฟริกาตอนใต้: เมืองกำแพงหินเกรตซิมบับเว','Southern Africa: the stone-walled city of Great Zimbabwe.')],
 [819,657,0,X('จักรวรรดิมองโกลแผ่จากจีนถึงยุโรปตะวันออก','The Mongol Empire stretches from China to eastern Europe.')],
 [775,525,0,X('ราปานุย: ชาวเกาะสลักรูปปั้นโมอาย','Rapa Nui: islanders carve the moai.')],
 [700,504,0,X('เม็กซิโก: ชาวแอซเท็กสร้างนครเตนอชตีตลันกลางทะเลสาบ','Mexico: the Aztecs build Tenochtitlan in a lake.')]];
function world26(S){const ya=S.ya0,r=srng((S.seed>>>0)+26),sp=S.sp.id,ar=area26(S);
  const c=WORLD26.filter(w=>ya<=w[0]&&ya>=w[1]&&(w[2]===0||w[2]!==S.ch)&&!(w[2]===1&&sp!=='sap')&&!(w[1]===238&&ar==='png')&&!(w[1]===24000&&ar==='ame'));
  for(let i=c.length-1;i>0;i--){const j=(r()*(i+1))|0;[c[i],c[j]]=[c[j],c[i]]}return c.slice(0,3).map(w=>w[3])}
function rows26(S){const out=[],m=mix26(S),g=lin26(S),w=world26(S);
  if(m)out.push([esc(L(X('สายเลือด','Ancestry'))),(Array.isArray(m)?m.map(x=>esc(L(x))).join(' · '):esc(L(m)))+'<br><span class="small">'+esc(L(MIXNOTE26))+'</span>']);
  if(g)out.push([esc(L(X('ไล่สาย','Lineage'))),g.map(x=>esc(L(x).trim())).join(' ')+'<br><span class="small">'+esc(L(GENNOTE26))+'</span>']);
  if(w.length)out.push([esc(L(X('ปีเดียวกันที่อื่น','Same year, elsewhere'))),w.map(x=>'· '+esc(L(x))).join('<br>')]);
  return out}

/* ---------- famous moments: tilt a share of lives toward a time and place where one happens ---------- */
const PICK26={4:()=>{const e=pickEra4();return[Math.round((ERA4[e].b+rnd()*(ERA4[e].a-ERA4[e].b))/5)*5,pickCity4(e)]},
  6:()=>{const e=pickEra6(),y=yaFor6(e);return[y,pickCity6(e,y)]},8:()=>{const e=pickEra8();return[yaFor8(e),pickCity8(e)]},
  10:()=>{const e=pickEra10(),y=yaFor10(e);return[y,pickCity10(e,y)]},12:()=>{const e=pickEra12(),y=yaFor12(e);return[y,pickCity12(e,y)]},
  14:()=>{const e=pickEra14(),y=yaFor14(e);return[y,pickCity14(e,y)]},16:()=>{const e=pickEra16(),y=yaFor16(e);return[y,pickCity16(e,y)]},
  18:()=>{const e=pickEra18(),y=yaFor18(e);return[y,pickCity18(e,y)]},20:()=>{const e=pickEra20(),y=yaFor20(e);return[y,pickCity20(e,y)]},
  22:()=>{const e=pickEra22(),y=yaFor22(e);return[y,pickCity22(e,y)]},24:()=>{const e=pickEra24(),y=yaFor24(e);return[y,pickCity24(e,y)]}};
function gumps26(ch){return ch===16?GUMP16:ch===18?GUMP18:ch===20?GUMP20:ch===22?GUMP22:ch===24?GUMP24:[4,6,8,10,12,14].includes(ch)?GUMPX.filter(e=>e.ch===ch):[]}
let FAME26=null;function isFame26(d){if(!FAME26){FAME26=new Set();for(const ch of [4,6,8,10,12,14,16,18,20,22,24])for(const e of gumps26(ch))FAME26.add(e.id)}return FAME26.has(d.id)}
function hits26(ch,ya,rg,G,mx){const st={rg,R:REGIONS[rg],ya,ya0:ya,age:0,ch,chap:ch,sex:'f',kids:[{}],done:{},tech:{},inv:{},fr:[],ms:[],path:[rg],rank:1,metX:[]};
  for(const e of G){const[a0,a1]=e.a||[0,80];for(let a=Math.max(a0,3);a<=Math.min(a1,mx||60);a+=3){st.age=a;st.ya=ya-a;for(const sx of ['f','m']){st.sex=sx;try{if(!e.cond||e.cond(st))return true}catch(_){}}}}return false}
function fame26(ch,ya,rg){const P=PICK26[ch];if(!P||rnd()>.8)return null;const G=gumps26(ch);if(!G.length||hits26(ch,ya,rg,G,38))return null;
  for(let i=0;i<40;i++){const[y,r]=P();if(hits26(ch,y,r,G,38))return[y,r]}return null}

/* ---------- ten seconds with your hands ---------- */
const CRAFT26={
 pot:{n:X('ปั้นหม้อ','Shaping a pot'),o:X('หม้อดินใบหนึ่ง','a clay pot'),st:[X('ขึ้นรูป','Raise the walls'),X('ขัดผิว','Burnish'),X('เผา','Fire it')]},
 rice:{n:X('ปลูกข้าวในนาน้ำ','Planting rice in the wet field'),o:X('นาข้าวแปลงหนึ่ง','a field of rice'),st:[X('ถอนกล้า','Pull the seedlings'),X('ปักลงโคลน','Press them into the mud'),X('ปักอีกแถว','Another row')]},
 dam:{n:X('ดำนา','Transplanting rice'),o:X('นาข้าวแปลงหนึ่ง','a field of rice'),st:[X('ถอนกล้า','Pull the seedlings'),X('ปักดำ','Press them into the mud'),X('ปักอีกแถว','Another row')]},
 bronze:{n:X('หล่อสำริด','Casting bronze'),o:X('ภาชนะสำริดใบหนึ่ง','a bronze vessel'),st:[X('หลอมโลหะ','Melt the metal'),X('เทลงแม่พิมพ์ดิน','Pour into the clay mould'),X('ทุบแม่พิมพ์ออก','Break the mould away')]},
 cloth:{n:X('ทอผ้า','Weaving'),o:X('ผ้าผืนหนึ่ง','a length of cloth'),st:[X('ขึงเส้นยืน','Set the warp'),X('พุ่งกระสวย','Throw the shuttle'),X('กระทบเส้นให้แน่น','Beat the weft tight')]},
 carve:{n:X('สลักหินสีเขียว','Carving greenstone'),o:X('รูปสลักหินสีเขียวชิ้นหนึ่ง','a small greenstone figure'),st:[X('ร่างเส้น','Mark the lines'),X('ขูดด้วยทรายและเชือก','Grind with sand and cord'),X('ขัดเงา','Polish')]},
 net:{n:X('ถักแห','Knotting a net'),o:X('แหผืนหนึ่ง','a fishing net'),st:[X('ผูกปม','Tie the knot'),X('ถักตา','Make the mesh'),X('ขึงให้ตึง','Pull it taut')]},
 tablet:{n:X('กดอักษรลิ่มลงดินเหนียว','Pressing cuneiform into clay'),o:X('แผ่นดินเหนียวจารึกแผ่นหนึ่ง','an inscribed clay tablet'),st:[X('นวดดิน','Knead the clay'),X('กดก้านอ้อ','Press the reed'),X('ตากแดด','Set it in the sun')]},
 papyrus:{n:X('เขียนบนกระดาษปาปิรุส','Writing on papyrus'),o:X('ม้วนปาปิรุสม้วนหนึ่ง','a papyrus roll'),st:[X('จุ่มพู่กันต้นอ้อ','Dip the reed brush'),X('เขียนหมึกดำ','Write in black'),X('เขียนหัวเรื่องหมึกแดง','The heading in red')]},
 paper:{n:X('ทำกระดาษ','Making paper'),o:X('กระดาษปึกหนึ่ง','a stack of paper'),st:[X('ตีเศษผ้าให้เป็นเยื่อ','Beat rags to pulp'),X('ช้อนตะแกรง','Lift the mould'),X('ตากแผ่น','Hang the sheet')]},
 knap:{n:X('กะเทาะหิน','Knapping stone'),o:X('หัวหอกหินอันหนึ่ง','a stone point'),st:[X('ตั้งหิน','Set the core'),X('ทุบสะเก็ด','Strike a flake'),X('กดแต่งคม','Press the edge')]},
 bead:{n:X('เจาะลูกปัดหินคาร์เนเลียน','Drilling carnelian beads'),o:X('สร้อยลูกปัดสีแดงเส้นหนึ่ง','a string of red beads'),st:[X('ขัดหินให้กลม','Grind it round'),X('เจาะรู','Drill the hole'),X('ขัดเงา','Polish')]}};
const CARK26={potter:'pot',smith:'bronze',caster:'bronze',copper:'bronze',weaver:'cloth',fuller:'cloth',carver:'carve',jade:'carve',sculptor:'carve',seal:'carve',
  fisher:'net',boatman:'net',sailor:'net',rower:'net',bead:'bead',knapper:'knap',warraq:'paper'};
function craftKind26(S){const c=S.car;if(c==='scribe')return S.ch===4?'tablet':S.ch===6?'papyrus':S.ch===24?'paper':null;
  if(c&&CARK26[c]){const k=CARK26[c];if(k==='carve'&&S.ch!==14)return S.ch===8&&c==='seal'?'bead':'pot';if(k==='bronze'&&![12,10,4,8].includes(S.ch))return 'pot';if(k==='paper'&&S.ch!==24)return null;return k}
  if(c==='farmer'&&S.ch===22)return 'dam';if(c==='farmer'&&S.ch===20)return 'rice';
  return {1:'knap',2:'knap',9:'knap',3:S.rg==='yan'?'rice':'pot',4:'pot',5:'net',6:'cloth',8:'bead',10:'pot',12:'bronze',14:'carve',16:'pot',18:'cloth',20:'rice',22:'dam',24:'paper'}[S.ch]||null}
function craftDue26(a){return S&&!S.made26&&a>=(civ(S.ch)||S.ch===3?16:13)&&a<=45&&!S.dead&&rnd()<.35&&!!craftKind26(S)}
const CRES26=[
 o=>X('มือยังไม่จำจังหวะ ชิ้นที่ตั้งใจทำแตกเสียก่อน แต่ครั้งหน้ามือจะรู้เอง','Your hands haven’t found the rhythm yet. The piece breaks before it is done, but next time your hands will know.'),
 o=>X('ได้'+o.th+' ไม่สวยนัก แต่ใช้ได้','You make '+o.en+'. Not beautiful, but it works.'),
 o=>X('ได้'+o.th+' ที่ดีพอให้คนในบ้านชม','You make '+o.en+', good enough that your household praises it.'),
 o=>X('ได้'+o.th+' ที่งามที่สุดเท่าที่คุณเคยทำ คนแวะมาดูถึงหน้าบ้าน','You make '+o.en+', the finest you have ever made. People stop by your door to look.')];
function finishCraft26(k,q,a){const K=CRAFT26[k];S.made26={k,q,a};fx({cr:2+q*2,p:q});if(q>=2)S.b=clamp(S.b+q,0,100);
  log(CRES26[q](K.o),null,q>=2?'it':null);
  if(q===3)ms(X('ทำ'+K.o.th+'ได้งามที่สุดในชีวิต','Made '+K.o.en+', the finest of your life'))}
function craft26(a){const k=craftKind26(S);if(!k)return Promise.resolve();
  if(TEST){finishCraft26(k,weighted([[0,.15],[1,.3],[2,.35],[3,.2]]),a);return Promise.resolve()}
  S.made26={k,q:0,a};try{return craftUI26(k).then(q=>finishCraft26(k,q,a)).catch(()=>finishCraft26(k,1,a))}catch(e){finishCraft26(k,1,a);return Promise.resolve()}}
function craftUI26(k){return new Promise(res=>{const K=CRAFT26[k];
  if(!document.getElementById('c26css')){const st=document.createElement('style');st.id='c26css';st.textContent=
   '#craft26{position:fixed;inset:0;background:rgba(7,5,4,.62);display:flex;align-items:center;justify-content:center;z-index:80;touch-action:manipulation}'+
   '#craft26 .c26box{background:var(--soot,#1b1511);color:var(--bone,#ede4d4);border:2px solid var(--line,#3b3028);padding:18px 18px 16px;border-radius:10px;max-width:440px;width:calc(100% - 32px);text-align:center;box-shadow:0 10px 40px rgba(0,0,0,.6)}'+
   '#craft26 .c26t{font-family:var(--display);font-size:22px;margin-bottom:4px}#craft26 .c26h{opacity:.8;font-size:14px}'+
   '#craft26 .c26bar{position:relative;height:26px;background:#3a2e25;border-radius:13px;margin:16px 0 10px;overflow:hidden;transition:box-shadow .15s}'+
   '#craft26 .c26z{position:absolute;top:0;bottom:0;background:var(--good,#86b06d)}#craft26 .c26m{position:absolute;top:0;width:6px;height:26px;background:var(--ember,#eba84b);margin-left:-3px;box-shadow:0 0 8px var(--ember,#eba84b)}'+
   '#craft26 .c26s{font-size:15px;min-height:22px;margin-bottom:12px}#craft26 .c26d{letter-spacing:6px;font-size:18px;margin-bottom:10px}'+
   '#craft26 .c26b{font-size:20px;padding:12px 34px;border-radius:8px;border:0;background:var(--ochre,#c9623a);color:#fff;cursor:pointer}'+
   '#craft26.ok .c26bar{box-shadow:0 0 0 3px var(--good,#86b06d)}#craft26.no .c26bar{box-shadow:0 0 0 3px var(--bad,#d65a40)}';document.head.appendChild(st)}
  const ov=document.createElement('div');ov.id='craft26';ov.innerHTML='<div class="c26box"><div class="c26t"></div><div class="c26h"></div><div class="c26bar"><div class="c26z"></div><div class="c26m"></div></div><div class="c26d"></div><div class="c26s"></div><button class="c26b"></button></div>';
  document.body.appendChild(ov);const q=s=>ov.querySelector(s);
  q('.c26t').textContent=L(K.n);q('.c26h').textContent=L(X('กดตอนตัวชี้อยู่ในแถบสีเขียว 3 ครั้ง (แตะจอหรือกดเว้นวรรคก็ได้)','Tap when the marker is inside the green band, 3 times (tap the screen or press Space)'));
  q('.c26b').textContent=L(X('ตอนนี้!','Now!'));
  const W0=clamp(.16+(S.cr||0)/450,.16,.34);let round=0,hits=0,ph=Math.random()*6,zone=[0,1],last=performance.now(),done=false,t0=last,marks=[];
  const draw=()=>{q('.c26d').textContent=[0,1,2].map(i=>marks[i]==null?'○':marks[i]?'●':'✕').join('')};
  const newZone=()=>{const z0=.06+Math.random()*(.88-W0);zone=[z0,z0+W0];q('.c26z').style.left=(z0*100)+'%';q('.c26z').style.width=(W0*100)+'%';q('.c26s').textContent=(round+1)+'/3 · '+L(K.st[round]);draw()};
  const pos=()=>.5-.5*Math.cos(ph);
  function frame(t){if(done)return;const dt=Math.min(.05,(t-last)/1000);last=t;ph+=dt*(2.6+round*1.1);q('.c26m').style.left=(pos()*100)+'%';
    if(t-t0>10000){while(round<3){marks[round]=0;round++}finish();return}requestAnimationFrame(frame)}
  function press(e){if(e){e.preventDefault();e.stopPropagation()}if(done||round>=3)return;const p=pos(),hit=p>=zone[0]-.01&&p<=zone[1]+.01;hits+=hit?1:0;marks[round]=hit?1:0;SND.unlock();SND.ui(hit?'hit':'miss');
    ov.classList.remove('ok','no');void ov.offsetWidth;ov.classList.add(hit?'ok':'no');round++;if(round>=3)finish();else newZone()}
  function key(e){if(e.code==='Space'||e.key===' '||e.key==='Enter'){press(e)}else if(/^[0-9]$/.test(e.key)){e.preventDefault();e.stopPropagation()}}
  function finish(){if(done)return;done=true;draw();window.removeEventListener('keydown',key,true);if(hits===3)SND.ui('ching');
    q('.c26s').textContent=L(CRES26[hits](K.o));q('.c26b').hidden=true;setTimeout(()=>{ov.remove();res(hits)},hits===3?1700:1300)}
  ov.addEventListener('pointerdown',press);window.addEventListener('keydown',key,true);newZone();
  if(auto){setTimeout(()=>{if(done)return;hits=weighted([[1,.35],[2,.45],[3,.2]]);for(let i=0;i<3;i++)marks[i]=i<hits?1:0;round=3;finish()},900)}
  requestAnimationFrame(frame)})}

/* the thing you made, standing in the scene for a few years */
function drawMade26(ctx,o,gy){const m=o.made26;if(!m||!m.q)return;const R=(x,y,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(x,y,w,h)};const x=150,y=Math.min(104,gy+26),q=m.q;
  const fine=q>=3;ctx.fillStyle='rgba(0,0,0,.25)';ctx.fillRect(x-7,y,16,2);
  if(m.k==='pot'){const b='#a65a33',d='#7a3f22';R(x-4,y-10,10,9,b);R(x-5,y-8,12,5,b);R(x-2,y-12,6,2,d);R(x-3,y-13,8,1,b);R(x+3,y-9,2,6,d);if(q>=2)R(x-5,y-7,12,1,'#2d1a12');if(fine){R(x-4,y-5,10,1,'#e9d8b0');R(x-2,y-10,1,1,'#e9d8b0');R(x+2,y-10,1,1,'#e9d8b0')}}
  else if(m.k==='rice'||m.k==='dam'){R(x-26,y-9,54,9,'#4c6468');R(x-26,y-9,54,1,'#7a5a3a');R(x-26,y,54,1,'#7a5a3a');R(x-24,y-6,50,1,'#9cb8b4');for(let r=0;r<3;r++)for(let i=0;i<(r<q?9:4);i++){const xx=x-23+i*6+(r%2)*3,yy=y-1-r*3;R(xx,yy-4,1,4,'#5c9a3c');R(xx+1,yy-6,1,6,'#86c459');R(xx+2,yy-4,1,3,'#6fae4a')}}
  else if(m.k==='bronze'){const b=fine?'#d6b24e':'#b8953f',d='#7f6528';R(x-5,y-11,12,7,b);R(x-6,y-12,14,2,b);R(x-4,y-14,2,2,d);R(x+4,y-14,2,2,d);R(x-4,y-4,2,4,d);R(x+4,y-4,2,4,d);R(x,y-4,2,4,d);R(x-4,y-9,10,1,d);if(q>=2){R(x-2,y-8,2,2,d);R(x+2,y-8,2,2,d)}if(fine)R(x-5,y-11,2,1,'#fff1b8')}
  else if(m.k==='cloth'){R(x-12,y-20,1,20,'#6b4a2e');R(x+12,y-20,1,20,'#6b4a2e');R(x-12,y-19,25,1,'#4a3524');const c=S&&S.ch===6?'#efe7d2':'#c9b27a';R(x-9,y-18,18,12,c);if(q>=2){R(x-9,y-14,18,1,'#9a4a2a');R(x-9,y-11,18,1,'#2f4f6a')}if(fine)R(x-9,y-8,18,1,'#9a4a2a')}
  else if(m.k==='carve'){const g='#4f9a7a',d='#2e6a52';R(x-2,y-12,6,5,g);R(x-3,y-7,8,6,g);R(x-1,y-11,1,1,d);R(x+2,y-11,1,1,d);R(x,y-9,2,1,d);R(x-4,y-1,10,1,'#6b5a48');if(fine)R(x-1,y-12,2,1,'#a8e0c4')}
  else if(m.k==='net'){R(x-12,y-18,1,18,'#6b4a2e');R(x+12,y-18,1,18,'#6b4a2e');ctx.fillStyle='#cdbf99';for(let i=0;i<=(q>=2?8:5);i++){ctx.fillRect(x-11+i*(22/(q>=2?8:5)),y-17,1,14)}for(let j=0;j<4;j++)ctx.fillRect(x-11,y-17+j*4,22,1);if(fine){R(x-2,y-6,4,2,'#c0c8d0')}}
  else if(m.k==='tablet'){R(x-8,y-5,16,5,'#6b4a2e');R(x-5,y-12,10,7,'#b98d5e');ctx.fillStyle='#7a5a38';for(let j=0;j<(q+1);j++)for(let i=0;i<4;i++)ctx.fillRect(x-4+i*2.4,y-11+j*2,1,1)}
  else if(m.k==='papyrus'){R(x-8,y-5,16,5,'#6b4a2e');R(x-6,y-11,13,6,'#e6d6a0');R(x-7,y-11,1,6,'#c9b27a');R(x-4,y-10,5,1,'#b0392a');ctx.fillStyle='#2a2018';for(let j=0;j<q;j++)ctx.fillRect(x-4,y-8+j*1.5,9,1)}
  else if(m.k==='paper'){R(x-14,y-20,1,20,'#6b4a2e');R(x+14,y-20,1,20,'#6b4a2e');R(x-14,y-19,29,1,'#4a3524');for(let i=0;i<q+1;i++)R(x-12+i*7,y-18,6,8,'#f2ecdc')}
  else if(m.k==='knap'){R(x-6,y-4,12,4,'#7d7468');ctx.fillStyle=fine?'#c9c2b4':'#a59c8e';ctx.beginPath();ctx.moveTo(x,y-14);ctx.lineTo(x+3,y-5);ctx.lineTo(x-3,y-5);ctx.closePath();ctx.fill();R(x-1,y-11,1,4,'#e4ddd0')}
  else if(m.k==='bead'){R(x-10,y-14,1,14,'#6b4a2e');R(x+10,y-14,1,14,'#6b4a2e');for(let i=0;i<5+q*2;i++){const t=i/(4+q*2),xx=x-9+t*18,yy=y-13+Math.sin(t*Math.PI)*6;R(xx,yy,2,2,i%2?'#c8442a':'#e0703a')}}}

try{if(document.head){const st=document.createElement('style');st.textContent='@media (hover:none) and (pointer:coarse){.khint{display:none!important}}';document.head.appendChild(st)}}catch(e){}
window.__v26={get S(){return S},craft:a=>{S.age=a;S.ya=S.ya0-a;S.made26=null;return craft26(a)},made:q=>{S.made26={k:craftKind26(S),q,a:S.age}}};
/* ---------- recorded animal calls: which ones belong in this place and time ---------- */
const GAIN26={ani_frog_croak:14,ani_frog_ribbit:16,ani_donkey_1:3,ani_donkey_2:2.5,ani_hen_1:4,ani_hen_2:4,ani_cat:3,ani_bear_growl:3,obj_bell:2.5,ani_elephant:2,ani_sheep:1.6,ani_horse:1.6,amb_night_bird:.8,amb_crickets_2:.75,obj_mosquito:.7};
function pickAni26(o,sc){if(!S)return null;const ar=area26(S),ya=S.ya0-S.age,night=!!sc.crickets||!!sc.owl,herd=(o.herd||[]).length>0,set=[];
  const add=(n,w,v)=>set.push([[n,v*(GAIN26[n]||1)],w]),old=['afr','naf','wea','eur','sas','eas','sea'].includes(ar),people=civ(S.ch)||S.ch===3||!!S.settled,city=civ(S.ch)&&!['vil'].includes(S.rg);
  if(sc.frogs)add(Math.random()<.5?'ani_frog_croak':'ani_frog_ribbit',3,.22);
  if(sc.owl)add('amb_night_bird',2,.28);
  if(sc.crickets&&!sc.frogs)add('amb_crickets_2',1,.18);
  if(night&&(ar==='sea'||ar==='sas'||ar==='png')&&(sc.frogs||sc.drops||sc.gulls))add('obj_mosquito',1,.1);
  if(sc.gulls)add('amb_gulls',2,.26);
  if(sc.peacock)add(Math.random()<.6?'ani_peacock':'ani_peacock_chirp',2,.26);
  if(!night&&sc.birds&&old&&ar!=='sea')add('ani_crow',1,.2);
  if(people&&ya<15000)add(night?'ani_dog_bark':'ani_dog_bark',night?.6:.8,.14);
  if(people&&!night){
    if(old&&ya<10500&&(herd||civ(S.ch)))add('ani_cow',herd?2:.6,.26);
    if(['naf','wea','eur','sas','eas'].includes(ar)&&ya<10500&&(herd||civ(S.ch)))add('ani_sheep',herd?2:.5,.26);
    if(['naf','wea','eur'].includes(ar)&&ya<6500&&civ(S.ch))add(Math.random()<.5?'ani_donkey_1':'ani_donkey_2',.7,.22);
    if(((ar==='sea'||ar==='pol')&&ya<3600)||((ar==='sas'||ar==='eas')&&ya<3300)||((ar==='wea'||ar==='eur')&&ya<2800)||(ar==='naf'&&ya<2300))add(Math.random()<.5?'ani_hen_1':'ani_hen_2',1,.22);
    if(((['eur','wea','eas','sas'].includes(ar)&&ya<3900)||(ar==='naf'&&ya<3600))&&civ(S.ch))add('ani_horse',.6,.2);
    if(civ(S.ch)&&(ar==='naf'||[16,18,24].includes(S.ch))&&ya<4000)add('ani_cat',.5,.16);
    if(S.ch===22&&city&&ya<1700)add('obj_bell',.5,.14)}
  if([20,22].includes(S.ch)||(S.ch===8&&!city))add('ani_elephant',.5,.18);
  if(([20,22,8,12].includes(S.ch)&&!city)||(['sas','sea'].includes(ar)&&!people))add('ani_tiger',.25,.11);
  if(!people&&(ar==='eur'||ar==='eas')&&S.R&&S.R.cold)add('ani_bear_growl',.3,.14);
  return set.length?weighted(set):null}
