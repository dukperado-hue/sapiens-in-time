/* ===================== The Last Harvest · a life in the house: the calendar, the family, the sickness, the nights (v0.54, Thai only) =====================
   History is fixed; the family's fate is not. Every run: 1 June to 8 July 1349, a fictional Rhine town near Strasbourg (✦).
   (เกิดขึ้นจริง) The plague reached Strasbourg on 8 July 1349, moving north from Basel that summer. (Wikipedia: Black Death in the Holy Roman Empire)
   The dog never dies. Death always happens off the page. */
const HVCAL=[1,4,7,10,12,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,34,36,38];
const hvDate=n=>n<=30?n+' มิถุนายน 1349':(n-30)+' กรกฎาคม 1349';
const HVFAM={thomas:{n:'โทมัส',role:'พ่อ ช่างไม้'},anna:{n:'แอนนา',role:'แม่'},peter:{n:'ปีเตอร์',role:'ลูกชาย อายุ 12'}};
const HVSTAGE=['สบายดี','สบายดี','มีไข้ ไอ','นอนซม','ฟื้นแล้ว'];
/* one secret of the house, different each run */
const HVTRAIT=[
  {k:'hens',t:'บ้านนี้มีแม่ไก่สองตัวในลานหลังบ้าน บางเช้าก็มีไข่'},
  {k:'savings',t:'แม่ซ่อนเหรียญเงินไว้ใต้แผ่นพื้นห้องนอน พ่อไม่รู้'},
  {k:'exposed',t:'สัปดาห์ก่อน พ่อรับงานซ่อมหลังคาบ้านหลังหนึ่งที่ตอนนี้ปิดเงียบ'},
  {k:'cousin',t:'ลูกพี่ลูกน้องของแม่มีกระท่อมในไร่องุ่นบนเนินนอกเมือง'}];
/* the town's sickness by date: news first, then the first deaths in the street (date set per run, ✦ fictional town), then the long climb */
function hvTown(R,n){if(n<R.arrive)return Math.max(0,(n-6)*.008);return Math.min(.95,.18+(n-R.arrive)*.045)}
function hvNewRun(seed){seed=seed==null?(Math.random()*1e9|0):seed;const r=hvRng(seed);const tr=HVTRAIT[r()*HVTRAIT.length|0];
  const P=()=>({full:80,tired:10,mind:70,exp:0,inf:0,infT:0,dead:false,task:'rest',place:'bed',ate:false});
  const R={v:1,seed,di:0,phase:'morning',fam:{thomas:P(),anna:P(),peter:P()},dog:{name:'',trust:30},store:{food:6,water:5,wood:4,herb:1,plank:2},home:{fire:1,boarded:0,trap:0,hens:tr.k==='hens'?2:0,bedBurnt:0,dirty:0},trait:tr.k,flags:{},used:{},pending:[],log:[],arrive:15+(r()*5|0),deaths:0,day:1,over:false};
  if(tr.k==='exposed')R.fam.thomas.exp=35;R.rs=r()*1e9|0;return R}
const hvRR=R=>{R.rs=(R.rs*1664525+1013904223)>>>0;return R.rs/4294967296};
const hvAlive=R=>Object.keys(R.fam).filter(k=>!R.fam[k].dead);
/* ---------- the nights: fixed beats of history (always come, in different clothes) and a deck of small things ---------- */
const HVEV=[
  {id:'news',fixed:1,win:[1,1],title:'ข่าวจากต้นน้ำ',art:'boat',text:R=>'คนเรือที่ล่องลงมาตามแม่น้ำไรน์เล่าว่า หมู่บ้านทางต้นน้ำมีคนตายทีละหลายคน ไข้ขึ้น มีก้อนบวม แล้วสามวันก็จากไป',real:'(เกิดขึ้นจริง) ฤดูร้อนปี 1349 กาฬโรคแพร่จากบาเซิลขึ้นเหนือมาทางสตราสบูร์ก',
    ch:[{t:'พ่อแลกเครื่องมือเก่ากับแป้งตุนไว้',fx:R=>{R.store.plank=Math.max(0,R.store.plank-1);R.store.food+=3;return 'พ่อกลับมาพร้อมกระสอบแป้งเล็กๆ ไม้กระดานหายไปหนึ่งแผ่น'}},{t:'ทำทุกอย่างให้เหมือนปกติ',fx:R=>{hvMind(R,4);return 'คืนนั้นแม่ร้องเพลงเบาๆ ตอนล้างจาน ทุกคนนอนหลับ'}}]},
  {id:'hens_left',win:[4,8],cond:R=>!R.home.hens,title:'เพื่อนบ้านจะหนี',art:'door',text:R=>'ครอบครัวช่างทอผ้าข้างบ้านจะไปอยู่บ้านญาติในชนบท เขาเคาะประตูมาขอฝากแม่ไก่สองตัว',
    ch:[{t:'รับไว้ ดูแลให้',fx:R=>{R.home.hens=2;R.flags.keptHens=1;hvLater(R,30,'neighbors_back');return 'แม่ไก่สองตัวมาอยู่ในลานหลังบ้าน ปีเตอร์ตั้งชื่อให้ทั้งสองตัว'}},{t:'ปฏิเสธ เรามีปากต้องเลี้ยงพอแล้ว',fx:R=>{hvMind(R,-3);return 'เพื่อนบ้านพยักหน้า แล้วพาไก่ขึ้นเกวียนไป'}}]},
  {id:'stranger',fixed:1,win:[7,12],title:'คนแปลกหน้าที่ประตู',art:'door',text:R=>'กลางดึก มีหญิงคนหนึ่งอุ้มเด็กเล็กมาเคาะประตู เด็กตัวร้อน เธอขอที่ซุกหัวนอนแค่คืนเดียว'+(R.dog.trust>=50?' '+hvDogN(R)+'ยืนขวางประตู ขนหลังตั้ง':''),
    ch:[{t:'ให้เข้ามานอนข้างเตาไฟ',fx:R=>{hvAlive(R).forEach(k=>R.fam[k].exp+=18);hvMind(R,10);R.flags.strangerIn=1;hvLater(R,R.cur+4,'stranger_after');return 'แม่ปูผ้าให้ข้างเตา เด็กหลับไปในอ้อมแขนแม่ของเขา รุ่งเช้าทั้งสองจากไปก่อนใครตื่น'}},
        {t:'ยื่นขนมปังให้ผ่านช่องประตู',need:R=>R.store.food>0,fx:R=>{R.store.food--;hvMind(R,3);return 'เธอรับขนมปังไว้แนบอก แล้วเดินหายไปในความมืด'}},
        {t:'ไม่เปิดประตู',fx:R=>{hvMind(R,-8);R.flags.strangerOut=1;hvLater(R,R.cur+8,'stranger_church');return 'เสียงเคาะเงียบไป ปีเตอร์นอนลืมตาอยู่นาน'}}]},
  {id:'confess',fixed:1,win:[10,14],title:'ระฆังเรียกไปสารภาพบาป',art:'bell',text:R=>'บาทหลวงมาร์ตินเดินไปทั่วถนน บอกทุกบ้านให้มาสารภาพบาปที่โบสถ์ เพราะโรคคือการลงโทษ คนแน่นโบสถ์ตั้งแต่เช้ามืด',
    ch:[{t:'ทั้งบ้านไปโบสถ์',fx:R=>{hvAlive(R).forEach(k=>{R.fam[k].exp+=10});hvMind(R,10);return 'ในโบสถ์อบอวลไปด้วยกำยานและเสียงไอ ทุกคนกลับบ้านมาด้วยใจที่เบาขึ้น'}},{t:'สวดมนต์อยู่ที่บ้าน',fx:R=>{hvMind(R,3);return 'พ่อจุดเทียนเล่มเดียว ทุกคนคุกเข่าข้างเตียง'}}]},
  {id:'boat',win:[14,18],title:'เรือจากบาเซิล',art:'boat',text:R=>'มีเรือสินค้าจากบาเซิลมาจอดท่า ขายเกลือกับแป้งราคาถูก เพราะไม่มีเมืองไหนอยากให้เรือลำนี้จอดนาน',
    ch:[{t:'พ่อเอาไม้กระดานไปแลกแป้ง',need:R=>R.store.plank>=2,fx:R=>{R.store.plank-=2;R.store.food+=4;R.fam.thomas.exp+=14;return 'พ่อแบกแป้งกลับมาสองกระสอบ แต่บอกว่าคนเรือไอไม่หยุด'}},{t:'ไม่ไปใกล้ท่าเรือ',fx:R=>'เรือออกไปตอนเย็น ไม่มีใครรู้ว่าไปจอดที่ไหนต่อ'}]},
  {id:'first_death',fixed:1,win:[0,0],at:R=>R.arrive,title:'ระฆังศพ',art:'bell',text:R=>'วันนี้ระฆังโบสถ์ดังช้าๆ เป็นครั้งแรก มีคนในถนนของเราตายแล้ว เป็นคนทำถังไม้ที่หัวมุมถนน',
    ch:[{t:'ไปร่วมงานศพ',fx:R=>{hvAlive(R).forEach(k=>R.fam[k].exp+=8);hvMind(R,4);return 'งานศพสั้นมาก บาทหลวงสวดเร็วกว่าที่เคย'}},{t:'ปิดหน้าต่าง อยู่ในบ้าน',fx:R=>{hvMind(R,-3);return 'ทุกคนนั่งเงียบฟังเสียงระฆังจนมันหยุด'}}]},
  {id:'labour',fixed:1,win:[16,21],title:'งานในไร่',art:'field',text:R=>'เจ้าของไร่บนเนินขาดคนงาน คนของเขาตายไปสามคน เขาจ่ายเป็นอาหารมากกว่าที่เคยจ่ายถึงสองเท่า ถ้าพ่อยอมไปช่วยสามวัน',real:'(เกิดขึ้นจริง) คนตายมากทำให้แรงงานขาด คนที่รอดจึงต่อรองค่าแรงได้มากขึ้น และผู้ปกครองหลายแห่งพยายามออกกฎคุมค่าแรงไว้',
    ch:[{t:'พ่อไปทำงานในไร่',need:R=>!R.fam.thomas.dead&&R.fam.thomas.inf<2,fx:R=>{R.store.food+=5;R.fam.thomas.exp+=10;R.fam.thomas.tired=Math.min(100,R.fam.thomas.tired+40);R.flags.thomasAway=3;return 'พ่อออกไปตั้งแต่ไก่ขัน บ้านเงียบลงไปมาก'}},{t:'พ่ออยู่บ้าน',fx:R=>{hvMind(R,2);return 'เจ้าของไร่เดินไปเคาะบ้านถัดไป'}}]},
  {id:'well',fixed:1,win:[18,23],title:'ฝูงชนที่บ่อน้ำ',art:'well',text:R=>'ที่บ่อน้ำกลางเมือง มีคนตะโกนว่ามาร์กาเรเธ หญิงหมอยา เอาผงอะไรบางอย่างใส่บ่อ คนเริ่มล้อมเธอ เธอมองมาที่แม่ของปีเตอร์',
    ch:[{t:'แม่เข้าไปยืนข้างเธอ',need:R=>!R.fam.anna.dead,fx:R=>{R.flags.defended=1;hvMind(R,6);R.flags.neighborsAngry=1;hvLater(R,R.cur+5,'margarethe_herbs');return 'แม่บอกทุกคนว่าผงนั้นคือสมุนไพรต้มยา ฝูงชนแยกย้าย แต่บางคนจำหน้าแม่ไว้'}},{t:'เงียบ แล้วเดินกลับบ้าน',fx:R=>{hvMind(R,-6);return 'คืนนั้นไม่มีใครพูดเรื่องบ่อน้ำ'}},{t:'ตะโกนตามฝูงชน',fx:R=>{hvMind(R,-14);R.flags.joinedMob=1;return 'ปีเตอร์เห็นพ่อตะโกนกับเขาด้วย ปีเตอร์จำได้'}}]},
  {id:'blame',fixed:1,win:[21,25],title:'คำถามของปีเตอร์',art:'table',text:R=>'ในตลาดมีคนบอกว่าโรคมาจากชาวยิววางยาในบ่อ ครอบครัวช่างทำหนังสือชาวยิวที่ปีเตอร์รู้จัก ปิดบ้านแล้วออกจากเมืองไปตอนกลางคืน ปีเตอร์ถามพ่อว่าจริงไหม',real:'(เกิดขึ้นจริง) ปี 1348–1349 ชุมชนชาวยิวหลายเมืองริมไรน์ถูกกล่าวหาว่าวางยาบ่อน้ำและถูกสังหาร เช่น ที่สตราสบูร์กเมื่อ 14 กุมภาพันธ์ 1349 ซึ่งตอนนั้นโรคยังไม่มาถึงเมืองนั้นเลย · ในปี 1348 พระสันตะปาปาเคลเมนต์ที่ 6 ออกสารว่าชาวยิวไม่ใช่ต้นเหตุ เพราะชาวยิวเองก็ตายด้วยโรคนี้',
    ch:[{t:'"ไม่จริง พวกเขาก็ตายด้วยโรคนี้เหมือนเรา"',fx:R=>{R.flags.truth=1;hvMind(R,4);return 'ปีเตอร์พยักหน้า เขาเก็บม้าไม้ตัวเล็กที่ลูกบ้านนั้นเคยให้ไว้ใต้หมอน'}},{t:'พ่อไม่ตอบ',fx:R=>{hvMind(R,-4);return 'ปีเตอร์ถามซ้ำอีกครั้ง แล้วก็เลิกถาม'}},{t:'"คงจริง คนทั้งเมืองพูดกันอย่างนั้น"',fx:R=>{R.flags.blamed=1;hvMind(R,-8);return 'ปีเตอร์ไม่พูดอะไร แต่คืนนั้นเขาเอาม้าไม้ตัวนั้นไปวางไว้นอกหน้าต่าง'}}]},
  {id:'flagellants',fixed:1,win:[24,28],title:'ขบวนผู้เฆี่ยนตัวเอง',art:'procession',text:R=>'ขบวนคนหลายร้อยคนเดินเข้าเมือง ร้องเพลงสวด แล้วเฆี่ยนหลังตัวเองที่ลานโบสถ์ เพื่อขอให้พระเจ้าหยุดโรค พ่อมองอยู่นาน',real:'(เกิดขึ้นจริง) ปี 1349 กลุ่มผู้เฆี่ยนตัวเองเกิดขึ้นทั่วยุโรปเหนือและยุโรปกลาง รวมถึงเยอรมนี และพระสันตะปาปาเคลเมนต์ที่ 6 ประณามพวกเขาในเดือนตุลาคม 1349 · ✦ ขบวนในเมืองนี้แต่งขึ้น',
    ch:[{t:'พ่อเดินตามขบวนไปหนึ่งวัน',need:R=>!R.fam.thomas.dead&&R.fam.thomas.inf<2,fx:R=>{R.fam.thomas.exp+=16;hvMind(R,-2);R.fam.thomas.mind=Math.min(100,R.fam.thomas.mind+12);return 'พ่อกลับมาตอนดึก เงียบ ไม่ยอมให้ใครเห็นหลัง'}},{t:'ดูจากหน้าต่าง',fx:R=>'ปีเตอร์ปิดตาหมาไว้ตอนเสียงแส้ดัง'},{t:'ปิดหน้าต่าง ไม่ให้ปีเตอร์ดู',fx:R=>{hvMind(R,1);return 'แม่เล่านิทานเสียงดังกลบเสียงข้างนอก'}}]},
  {id:'gates',fixed:1,win:[26,30],title:'ประตูเมืองปิด',art:'gate',text:R=>'สภาเมืองสั่งปิดประตูเมือง ไม่รับคนและสินค้าจากเมืองที่มีโรค เกวียนแป้งไม่เข้ามาอีกแล้ว พ่อค้าข้าวคนหนึ่งยังมีแป้งเต็มโกดัง แต่ขายแพงจนไม่มีใครซื้อไหว',real:'✦ เมืองหลายแห่งในยุคนั้นปิดประตูหรือห้ามคนจากเมืองที่มีโรคเข้า ส่วนการกักกันเป็นระบบแบบ 30–40 วันมาทีหลัง (ราคุซา ปี 1377)',
    ch:[{t:'แม่เอาเหรียญที่ซ่อนไว้ไปซื้อ',need:R=>R.trait==='savings'&&!R.flags.spent,fx:R=>{R.flags.spent=1;R.store.food+=5;return 'พ่อมองแม่นานมาก แล้วกอดแม่'}},{t:'พ่อแอบเข้าโกดังตอนกลางคืน',need:R=>!R.fam.thomas.dead&&R.fam.thomas.inf<2,fx:R=>{if(hvRR(R)<.35){R.fam.thomas.tired=100;hvMind(R,-12);R.flags.caught=1;return 'พ่อถูกจับได้ คนเฝ้าโกดังตีพ่อจนต้องคลานกลับบ้าน มือเปล่า'}R.store.food+=4;R.flags.stole=1;hvMind(R,-6);return 'พ่อกลับมาพร้อมแป้งสองกระสอบ ไม่มีใครถามว่ามาจากไหน'}},{t:'อยู่กับสิ่งที่มี',fx:R=>{hvMind(R,-2);return 'แม่แบ่งขนมปังเป็นชิ้นเล็กลง'}}]},
  {id:'flee',win:[20,29],cond:R=>R.trait==='cousin'&&!R.flags.fleeAsked,title:'กระท่อมบนเนิน',art:'field',text:R=>'แม่ได้ข่าวจากลูกพี่ลูกน้อง ว่ากระท่อมในไร่องุ่นบนเนินยังว่าง ถ้าจะไป ต้องไปก่อนประตูเมืองปิด',
    ch:[{t:'ทั้งบ้านออกจากเมืองคืนนี้',fx:R=>{R.flags.fleeAsked=1;R.fled=1;return 'ทุกคนแบกของเท่าที่แบกไหว ปีเตอร์อุ้มหมาข้ามรั้วเมืองในความมืด'}},{t:'อยู่ต่อ เมืองนี้คือบ้าน',fx:R=>{R.flags.fleeAsked=1;hvMind(R,2);return 'พ่อบอกว่าจะไม่ทิ้งโรงไม้ของปู่'}}]},
  {id:'bellringer',fixed:1,win:[30,36],title:'ระฆังที่เงียบ',art:'bell',text:R=>'คนตีระฆังของโบสถ์ตายเมื่อวาน วันนี้มีคนตายอีกหลายคนแต่ไม่มีเสียงระฆัง ไม่มีใครกล้าขึ้นหอระฆัง',
    ch:[{t:'พ่อขึ้นไปตีระฆังให้คนตาย',need:R=>!R.fam.thomas.dead&&R.fam.thomas.inf<2,fx:R=>{R.fam.thomas.exp+=12;hvMind(R,10);R.flags.rang=1;return 'เสียงระฆังดังไปทั่วเมือง หลายบ้านจุดเทียนที่หน้าต่าง'}},{t:'ไม่มีใครในบ้านนี้ขึ้นไป',fx:R=>{hvMind(R,-4);return 'เมืองเงียบจนได้ยินเสียงแม่น้ำ'}}]},
  /* small things that can come any night */
  {id:'thief',win:[8,37],w:3,rep:1,cond:R=>R.store.food>0,title:'เสียงที่ประตูหลัง',art:'door',text:R=>'กลางดึก มีเสียงคนงัดประตูหลังบ้าน',auto:R=>{if(R.home.boarded){return 'ไม้ที่พ่อตอกไว้กันประตูไว้ได้ เสียงนั้นหายไป'}if(R.dog.trust>=55){R.dog.trust=Math.min(100,R.dog.trust+5);return hvDogN(R)+'เห่าลั่นบ้าน คนข้างนอกวิ่งหนีไป'}const n=Math.min(R.store.food,2);R.store.food-=n;hvMind(R,-6);return 'เช้ามา ขนมปังหายไป '+n+' ก้อน'}},
  {id:'rats',win:[8,37],w:3,rep:1,cond:R=>!R.home.trap,title:'หนูในห้องเก็บของ',art:'store',text:R=>'ได้ยินเสียงกุกกักในห้องเก็บของทั้งคืน',auto:R=>{if(R.store.food>0)R.store.food--;hvAlive(R).forEach(k=>R.fam[k].exp+=5);return 'ถุงแป้งมีรอยกัด ขนมปังหายไปหนึ่งก้อน'}},
  {id:'soup',win:[4,30],w:2,rep:1,title:'ซุปจากบ้านตรงข้าม',art:'door',text:R=>'หญิงม่ายบ้านตรงข้ามยกหม้อซุปมาวางหน้าประตู เธอบอกว่าทำเกิน',auto:R=>{R.store.food++;hvMind(R,4);return 'ซุปยังอุ่นอยู่'}},
  {id:'cat',win:[1,37],w:2,rep:1,title:'แมวบนขอบหน้าต่าง',art:'window',text:R=>'แมวดำตัวหนึ่งมานั่งที่ขอบหน้าต่างห้องนอน '+hvDogN(R)+'มองมันแต่ไม่เห่า',auto:R=>{R.fam.peter.mind=Math.min(100,R.fam.peter.mind+5);R.flags.cat=1;return 'ปีเตอร์ยื่นนิ้วไปให้มันดม มันกะพริบตาช้าๆ แล้วนอนลง'}},
  {id:'cough',win:[15,37],w:2,rep:1,title:'เสียงไอข้างบ้าน',art:'window',text:R=>'ทั้งคืนได้ยินเสียงไอผ่านผนังบ้านข้างๆ',auto:R=>{hvMind(R,-4);return 'เช้ามาไม่มีเสียงไอแล้ว'}},
  {id:'quiet',win:[1,37],w:2,rep:1,title:'คืนที่เงียบ',art:'window',text:R=>'คืนนี้ฟ้าโปร่ง มีดาวเต็มฟ้า ได้ยินแต่เสียงจิ้งหรีด',auto:R=>{hvMind(R,3);return 'ปีเตอร์นับดาวจนหลับไป'}},
  {id:'eggs',win:[1,37],w:3,rep:1,cond:R=>R.home.hens>0,title:'ไข่ในลานหลังบ้าน',art:'store',text:R=>'แม่ไก่ส่งเสียงดังตอนเช้ามืด',auto:R=>{R.store.food++;return 'มีไข่สองฟองในรัง'}},
  {id:'shoe',win:[1,37],w:1,rep:0,title:'ของขวัญจาก'+'หมา',art:'window',text:R=>hvDogN(R)+'คาบรองเท้าเก่าข้างหนึ่งมาวางไว้ที่ปลายเตียงปีเตอร์',auto:R=>{R.dog.trust=Math.min(100,R.dog.trust+6);R.fam.peter.mind=Math.min(100,R.fam.peter.mind+4);return 'ปีเตอร์หัวเราะเป็นครั้งแรกในรอบหลายวัน'}},
  {id:'rain',win:[1,37],w:2,rep:1,title:'ฝนตก',art:'window',text:R=>'ฝนตกหนักทั้งคืน',auto:R=>{R.store.water+=3;return 'ถังน้ำหลังบ้านเต็ม'}}];
/* things that come back later because of what you chose */
const HVLATER={
  neighbors_back:{title:'เพื่อนบ้านกลับมา',text:R=>R.home.hens?'ครอบครัวช่างทอผ้ากลับมาจากชนบท เห็นแม่ไก่ยังอยู่ครบ เขาทิ้งแป้งไว้ให้หนึ่งถุงเป็นการขอบคุณ':'ครอบครัวช่างทอผ้ากลับมา ถามถึงแม่ไก่ของเขา',fx:R=>{if(R.home.hens)R.store.food+=2}},
  stranger_after:{title:'ห่อผ้าหน้าประตู',text:R=>'เช้านี้มีห่อผ้าวางอยู่หน้าประตู ข้างในมีสมุนไพรแห้ง กับรอยมือเด็กเล็กๆ ที่วาดด้วยถ่าน',fx:R=>{R.store.herb+=2}},
  stranger_church:{title:'ที่ลานโบสถ์',text:R=>'ปีเตอร์เห็นหญิงคนที่มาเคาะประตูคืนนั้น นั่งอยู่คนเดียวที่ลานโบสถ์ ไม่มีเด็กอยู่ในอ้อมแขน',fx:R=>{R.fam.peter.mind=Math.max(0,R.fam.peter.mind-12)}},
  margarethe_herbs:{title:'มาร์กาเรเธ',text:R=>'มาร์กาเรเธมาเคาะประตูหลังบ้านตอนเช้ามืด ยื่นห่อสมุนไพรให้แม่ แล้วบอกว่าถ้ามีใครในบ้านป่วย ให้ไปเรียกเธอ',fx:R=>{R.store.herb+=2;R.flags.healer=1}},
  window_gift:{title:'ของหน้าประตู',text:R=>'มีขนมปังห่อผ้าวางอยู่หน้าประตู ไม่มีชื่อคนให้ แต่ผ้าห่อเป็นผ้าลายเดียวกับม่านบ้านหลังที่ปีเตอร์เคยแบ่งของให้',fx:R=>{R.store.food+=2}}};
function hvLater(R,at,id){R.pending.push({at,id})}
const hvMind=(R,d)=>hvAlive(R).forEach(k=>R.fam[k].mind=Math.max(0,Math.min(100,R.fam[k].mind+d)));
const hvDogN=R=>R.dog.name||'หมา';
/* choose tonight's event: a fixed beat whose window is open first; otherwise a weighted draw from what fits */
function hvPickEvent(R){const n=HVCAL[R.di];const fx=HVEV.filter(e=>e.fixed&&!R.used[e.id]&&(e.at?e.at(R)<=n:n>=e.win[0])&&(e.at?true:n<=e.win[1]+3)&&(!e.cond||e.cond(R)));if(fx.length)return fx[0];
  const pool=HVEV.filter(e=>!e.fixed&&n>=e.win[0]&&n<=e.win[1]&&(e.rep||!R.used[e.id])&&(!e.cond||e.cond(R))&&R.lastEv!==e.id);let tot=pool.reduce((a,e)=>a+(e.w||1),0),r=hvRR(R)*tot;for(const e of pool){r-=(e.w||1);if(r<=0)return e}return pool[0]||null}
/* ---------- the sickness: what happens in the night, for each person ---------- */
function hvSleep(R,days){const n=HVCAL[R.di],tp=hvTown(R,n),out=[];const fam=R.fam;const sickHome=hvAlive(R).filter(k=>fam[k].inf>=2&&fam[k].inf<4);
  for(let d=0;d<days;d++){
    for(const k of hvAlive(R)){const P=fam[k];
      /* the hidden risk: from the street, from the sick in the house, from rats, from a dirty bed */
      for(const s of sickHome)if(s!==k)P.exp+=fam[s].place==='attic'?9:24;if(!R.home.trap&&tp>.1)P.exp+=3;if(R.home.dirty)P.exp+=6;
      if(P.inf===0&&tp>0){const p=Math.min(.42,(P.exp/100)*(.25+tp*.75)*.30);if(hvRR(R)<p){P.inf=1;P.infT=0}}
      else if(P.inf>=1&&P.inf<4){P.infT++;const nx=P.inf===1?2+(hvRR(R)*2|0):P.inf===2?1+(hvRR(R)*2|0):2;if(P.infT>=nx){P.infT=0;
        if(P.inf<3){P.inf++;if(P.inf===2)out.push(HVFAM[k].n+'ตัวร้อน ไอไม่หยุด')}
        else{/* the crisis ends: care, food and rest give a chance */const care=hvAlive(R).some(c=>c!==k&&fam[c].task==='care'&&fam[c].inf<2)||R.flags.healer;const ch=.2+(care?.2:0)+(P.full>50?.1:0)+(k==='peter'&&R.dog.trust>=60?.1:0);
          if(hvRR(R)<ch){P.inf=4;out.push(HVFAM[k].n+'ไข้ลดลงแล้ว เขาลืมตาขึ้นมาขอน้ำ');R.home.dirty=1}else{P.dead=true;P.diedOn=n;R.home.dirty=1;out.push(k==='peter'?'ปีเตอร์จากไปตอนรุ่งสาง':HVFAM[k].n+'จากไปตอนรุ่งสาง');R.deaths++}}}}
      P.exp*=.6}}
  return out}
/* leaving town is no sure escape: those already sick may not make it, and the plague reached the villages too */
function hvFleeFate(R){const n=HVCAL[R.di];for(const k of hvAlive(R)){const P=R.fam[k];const risk=P.inf>=1&&P.inf<4?.7:.14;if(hvRR(R)<risk){P.dead=true;P.diedOn=Math.min(38,n+3+(hvRR(R)*6|0));P.fledDeath=1}}}
/* ---------- saving: one run, kept in sit.harvest.run ---------- */
const hvRunSave=R=>{try{const d=hvLoad();d.run=R;hvSave(d)}catch(e){}};
const hvRunLoad=()=>{try{const d=hvLoad();return d.run&&!d.run.over?d.run:null}catch(e){return null}};
const hvRunClear=()=>{try{const d=hvLoad();delete d.run;hvSave(d)}catch(e){}};
