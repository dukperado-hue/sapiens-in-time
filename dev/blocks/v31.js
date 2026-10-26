/* ===================== v0.31: fixes from the "Mika" test (readers of other languages, careers that matter) ===================== */

/* the child-mortality comparison speaks of the reader's own country */
const INF5A=X('ในสังคมก่อนยุคใหม่ การศึกษาที่รวบรวมข้อมูลจากหลายสังคมพบว่าเด็กราว 1 ใน 4 ตายก่อนอายุหนึ่งขวบ และเกือบครึ่งตายก่อนเป็นวัยรุ่น ','Studies combining data from many pre-modern societies found that about 1 in 4 children died before their first birthday, and nearly half before reaching their teens. ');
const INF5C={th:X('ประเทศไทยวันนี้ เด็กตายก่อนอายุห้าขวบไม่ถึง 1 ใน 100 คน ','In Thailand today, fewer than 1 in 100 children die before age five. '),
 en:X('ประเทศไทยวันนี้ เด็กตายก่อนอายุห้าขวบไม่ถึง 1 ใน 100 คน ','In Thailand today, fewer than 1 in 100 children die before age five. '),
 ja:X('ญี่ปุ่นวันนี้ เด็กตายก่อนอายุห้าขวบไม่ถึง 1 ใน 100 คน ','In Japan today, fewer than 1 in 100 children die before age five. '),
 ko:X('เกาหลีใต้วันนี้ เด็กตายก่อนอายุห้าขวบไม่ถึง 1 ใน 100 คน ','In South Korea today, fewer than 1 in 100 children die before age five. '),
 zh:X('จีนวันนี้ เด็กตายก่อนอายุห้าขวบไม่ถึง 1 ใน 100 คน ','In China today, fewer than 1 in 100 children die before age five. '),
 de:X('เยอรมนีวันนี้ เด็กตายก่อนอายุห้าขวบไม่ถึง 1 ใน 100 คน ','In Germany today, fewer than 1 in 100 children die before age five. '),
 es:X('สเปนวันนี้ เด็กตายก่อนอายุห้าขวบไม่ถึง 1 ใน 100 คน ','In Spain today, fewer than 1 in 100 children die before age five. ')};
const INF5D=X('ลองคิดดูว่าอะไรบ้างที่ทำให้เปลี่ยนไปขนาดนี้ ','Think about what changed to make that difference. ');
const inf531=()=>L(INF5A)+L(INF5C[lang]||INF5C.en)+L(INF5D);

/* a disaster that comes back is remembered, not described word for word again */
const AGAIN31={
 flood:[X('น้ำท่วมอีกแล้ว คราวนี้คุณรู้ว่าต้องขนอะไรขึ้นที่สูงก่อน และขนทันก่อนน้ำมาถึง','The water rises again. This time you know what to carry to high ground first, and you get it there in time.'),X('น้ำท่วมมาอีกครั้ง คนรุ่นหลังถามคุณว่าครั้งก่อนๆ เป็นอย่างไร คุณเล่าขณะที่ช่วยกันวิดน้ำ','Another flood. The young ones ask what the earlier floods were like, and you tell them while you all bail.')],
 drought:[X('ฝนไม่มาอีกปีหนึ่ง คุณจำได้ว่าคราวก่อนอะไรช่วยให้รอด และเริ่มทำตั้งแต่ต้นฤดู','Another year without rain. You remember what saved you last time and start on it early.'),X('แล้งอีกแล้ว ผู้คนมาถามคุณว่าจะทำอย่างไร เพราะคุณผ่านมาแล้วหลายครั้ง','Drought again. People come to ask what to do, because you have lived through it before.')],
 storm:[X('พายุมาอีกครั้ง คุณมัดหลังคาไว้แน่นตั้งแต่เห็นเมฆ','The storm comes again. You lashed the roof down the moment you saw the clouds.'),X('พายุอีกลูกหนึ่ง เด็กๆ ร้องไห้ คุณเล่าว่าเคยผ่านแบบนี้มาแล้ว และเช้าวันรุ่งขึ้นก็ยังอยู่','Another storm. The children cry; you tell them you have been through this before, and were still here in the morning.')],
 wildfire:[X('ไฟป่ามาอีกแล้ว คราวนี้คุณถางพื้นรอบที่พักไว้ก่อนแล้ว','Wildfire again. This time you had already cleared the ground around your shelter.'),X('ควันไฟป่าลอยมาอีกครั้ง คุณรู้ว่าต้องไปทางไหน','Smoke from a wildfire drifts in again. You know which way to go.')],
 blizzard:[X('พายุหิมะมาอีกครั้ง คุณเก็บฟืนไว้พอตั้งแต่ต้นหนาว','The blizzard returns. You stored enough wood at the start of winter.'),X('หิมะปิดทางอีกแล้ว ทุกคนนั่งชิดกันรอบไฟเหมือนครั้งก่อน','Snow shuts the paths again. Everyone huddles round the fire, as before.')],
 ash:[X('เถ้าภูเขาไฟตกลงมาอีก คุณคลุมแหล่งน้ำไว้ทันที','Ash falls again. You cover the water at once.'),X('ฟ้ามืดด้วยเถ้าอีกครั้ง คนแก่เล่าว่าเคยเห็นแบบนี้','The sky darkens with ash again. The old ones say they have seen this before.')],
 quake:[X('แผ่นดินไหวอีกครั้ง คุณวิ่งออกมาที่โล่งก่อนจะคิด','The ground shakes again. You are out in the open before you have time to think.'),X('แผ่นดินสั่นอีกแล้ว คราวนี้เสียหายน้อยกว่า เพราะทุกคนสร้างบ้านให้เตี้ยลง','Another quake. Less is broken this time, because everyone builds lower now.')],
 tsunami:[X('น้ำทะเลลดลงผิดปกติอีกครั้ง คุณตะโกนให้ทุกคนวิ่งขึ้นที่สูง','The sea pulls back strangely again. You shout for everyone to run uphill.'),X('คลื่นใหญ่มาอีกครั้ง ทุกคนรู้แล้วว่าต้องทำอย่างไร','A great wave comes again. This time everyone knows what to do.')],
 slide:[X('ดินถล่มอีกครั้ง คุณย้ายที่พักออกจากเชิงเขาไว้แล้ว','The hillside slides again. You had already moved your shelter away from the slope.'),X('ดินเลื่อนลงมาอีก คราวนี้ไม่มีใครอยู่ตรงนั้น','The earth slips again; this time no one is there.')]};
function again31(k){const n=S.disN31=S.disN31||{};n[k]=(n[k]||0)+1;if(n[k]<2||!AGAIN31[k])return null;return AGAIN31[k][Math.min(n[k]-2,1)]}

/* careers: three moments you actually decide, as you rise */
function cm31(){const C=CARS()[S.car];if(!C)return null;const lv=S.cm31;S.cm31=0;
  if(lv===1)return {id:'cm31_1',t:X('งานชิ้นแรกที่เป็นของคุณ','Your first piece'),x:X('วันนี้เป็นครั้งแรกที่คุณทำงานคนเดียวในฐานะ'+C.L[1].th+' ตั้งแต่ต้นจนจบ ไม่มีใครยืนดูอยู่ข้างหลัง','Today, for the first time, you work alone as '+C.L[1].en+', from start to finish, with no one watching over your shoulder.'),
   o:[opt(X('ทำช้าๆ ให้ประณีตที่สุด','Go slowly and make it as fine as you can'),S=>{fx({cr:4,f:-2});return X('งานเสร็จช้ากว่ากำหนด แต่ครูหยิบขึ้นมาดูนานมาก แล้วพยักหน้า','It is finished late, but your teacher looks at it for a long time, then nods.')}),
      opt(X('ทำให้เสร็จทันเวลา','Get it done on time'),S=>{fx({f:3,p:2});return X('งานเสร็จทันเวลา ไม่มีที่ติ แต่ก็ไม่มีใครพูดถึง','It is done on time and faultless, though no one mentions it.')})]};
  if(lv===2)return {id:'cm31_2',t:X('ลูกมือคนแรก','Your first apprentice'),x:X('ตอนนี้คนเรียกคุณว่า'+C.L[2].th+' มีครอบครัวหนึ่งพาลูกมาฝากให้เป็นลูกมือของคุณ','People now call you '+C.L[2].en+'. A family brings their child to be your apprentice.'),
   o:[opt(X('รับไว้และสอนทุกอย่าง','Take the child and teach everything'),S=>{fx({so:3,p:2,b:2});return X('เด็กคนนั้นซุ่มซ่ามแต่ตั้งใจ ปีต่อมาคุณเห็นมือของตัวเองในงานของเขา','The child is clumsy but keen. A year later you see your own hands in their work.')}),
      opt(X('ทำงานคนเดียวต่อไป','Keep working alone'),S=>{fx({cr:3});return X('คุณได้เวลาเงียบๆ กับงานมากขึ้น และทำได้ดีขึ้นอีก','You have more quiet hours with the work, and grow better still.')})]};
  if(lv===3)return {id:'cm31_3',t:X('งานที่ใหญ่ที่สุดในชีวิต','The greatest work of your life'),x:X('ชื่อของคุณไปถึงหูคนที่มีอำนาจที่สุดในละแวกนี้ เขาส่งคนมาบอกว่าต้องการงานจากมือคุณ และจะไม่ยอมรับงานที่ด้อยกว่าที่เคยเห็น','Your name has reached the most powerful person in these parts. They send word that they want work from your hands, and will accept nothing less than the best they have seen.'),
   o:[opt(X('รับงาน','Accept'),S=>{if(rnd()<.55+(S.cr||0)/250){fx({p:8,b:4});ms(X('ทำงานที่ใหญ่ที่สุดในชีวิตให้คนที่มีอำนาจที่สุด','Made the greatest work of your life for the most powerful patron'));return X('งานชิ้นนั้นถูกพูดถึงไปอีกหลายปี และมีคนเดินทางมาไกลเพื่อดูมัน','People talk about the piece for years, and some travel far to see it.')}fx({p:-3,b:-3});return X('งานไม่เป็นอย่างที่เขาหวัง เขาจ่ายครึ่งเดียว และคุณนอนไม่หลับไปหลายคืน','It is not what they hoped for. They pay half, and you lie awake for many nights.')}),
      opt(X('ปฏิเสธอย่างสุภาพ','Decline politely'),S=>{fx({b:2});return X('คุณกลับไปทำงานเล็กๆ ที่ทำให้มีความสุข','You go back to the small work that makes you happy.')})]};
  return null}

/* children are named the day they are born */
function kidName31(sx){return S.ch===6?nm4X(genName6(S,sx,era6(S.ya))):S.ch===4?nm4X(genName4(S,sx,era4(S.ya))):S.ch===16?gn16X(sx):S.ch===18?gn18X(sx,'sib'):S.ch===20?gn20X(sx):S.ch===22?gn22X(sx):S.ch===24?gn24X(sx):S.ch===26?gnMgX(sx):S.ch===28?gnNwX(sx):null}
function birth31(){const i=S.kids.length-1,k=S.kids[i];let n=null;try{k.sex=srng((S.seed^(i*7919+k.born))>>>0)()<.5?'m':'f';n=kidName31(k.sex)}catch(e){}
  if(!n){const used=S.ppl.map(p=>p.n.th).concat(S.kids.map(x=>x.n&&x.n.th));const pool=PNAMES.filter(x=>!used.includes(x.th));n=pick(pool.length?pool:PNAMES)}k.n=n;
  return k.sex==='f'?X('ลูกคนที่ '+S.kids.length+' ของคุณเกิดแล้ว เป็นลูกสาว คุณตั้งชื่อเธอว่า '+n.th,'Your child number '+S.kids.length+' is born, a daughter. You name her '+n.en+'.'):X('ลูกคนที่ '+S.kids.length+' ของคุณเกิดแล้ว เป็นลูกชาย คุณตั้งชื่อเขาว่า '+n.th,'Your child number '+S.kids.length+' is born, a son. You name him '+n.en+'.')}

/* Pacific voyagers came by the Austronesian route */
const MIXNOTE31=X('ตัวเลขนี้สำหรับนักเดินเรือลาปิตาที่สืบเชื้อสายมาจากไต้หวันและฟิลิปปินส์ ดีเอ็นเอโบราณของคนลาปิตารุ่นแรกในวานูอาตูและตองกาแทบไม่มีเชื้อสายปาปัว ส่วนชาวปาปัวที่อยู่บนเกาะเหล่านี้มาก่อนหลายหมื่นปีมีเดนิโซวาราว 3–5%',
  'These figures are for Lapita voyagers descended from Taiwan and the Philippines. Ancient DNA of the first Lapita people in Vanuatu and Tonga shows almost no Papuan ancestry, while the Papuans who had lived on these islands for tens of thousands of years carry about 3–5% Denisovan DNA.');

/* auto mode does not make the same choice every time a decision comes back */
let AP31=null;

/* an early death puts "where do your descendants go?" first */
function lin31(){try{const lb=document.getElementById('linBlock'),ep=document.getElementById('dEpi');if(!lb||lb.hidden||!ep)return;
  if(S.age<15){if(lb.nextSibling!==ep)ep.parentNode.insertBefore(lb,ep);lb.classList.add('lin31')}else{const after=document.getElementById('dMs');if(lb.classList.contains('lin31')&&after){after.closest('.block').after(lb);lb.classList.remove('lin31')}}}catch(e){}}

/* chapters still being translated go last for readers of other languages */
const TRL31=()=>!['th','en'].includes(lang);
LANG.th.chTrans31='บทที่ยังแปลไม่เสร็จ';LANG.en.chTrans31='Chapters still being translated';
/* Pacific lives had no way to find a partner (the band-meeting scene is filtered out on the islands) */
DEC.push({id:'p5_marry',ch:5,deck:'adult',w:5,a:[16,32],cond:S=>!S.partner,t:X('เรือจากเกาะใกล้ๆ','A canoe from the next island'),
 x:X('เรือแคนูจากเกาะใกล้ๆ มาแลกหม้อดินกับเปลือกหอย มีคนหนึ่งจากหมู่บ้านนั้นหาเรื่องมาคุยกับคุณทุกวันจนเรือต้องกลับ','A canoe from the next island comes to trade pots for shell. Someone from that village finds a reason to talk with you every day until it must sail home.'),
 n:X('ชุมชนออสโตรนีเซียนยุคแรกน่าจะแต่งงานข้ามหมู่บ้านและข้ามเกาะ ซึ่งช่วยผูกเครือข่ายแลกเปลี่ยนให้แน่นขึ้น นักวิจัยบางกลุ่มเสนอจากดีเอ็นเอว่าฝ่ายชายมักย้ายไปอยู่กับครอบครัวฝ่ายหญิง แต่เรื่องนี้ยังถกเถียง','Early Austronesian communities probably married between villages and islands, which bound trade networks together. Some researchers argue from DNA that men often moved to their wife’s family, but this is still debated.'),
 o:[opt(X('ไปกับเรือลำนั้น','Sail away with them'),S=>{S.partner=1;fx({b:-3,so:2});ms(X('มีคู่ และย้ายไปอยู่อีกเกาะ','Found a partner and moved to another island'));return X('คุณลงเรือไปพร้อมของไม่กี่ชิ้น และเริ่มชีวิตกับครอบครัวใหม่ที่พูดสำเนียงต่างไปเล็กน้อย','You board with a few belongings and begin life with a new family who speak with a slightly different accent.')}),
    opt(X('ชวนเขามาอยู่ที่นี่','Ask them to stay here'),S=>{if(rnd()<.7){S.partner=1;fx({b:6});ms(X('มีคู่ที่ข้ามทะเลมาอยู่ด้วยกัน','Found a partner who crossed the sea to stay'));return X('เมื่อเรือออก เขาไม่ได้อยู่บนเรือ','When the canoe leaves, they are not on it.')}fx({b:-2});return X('เขาลังเลอยู่นาน แล้วก็กลับไปกับเรือ','They hesitate a long time, then sail home.')}),
    opt(X('ยังไม่ผูกพันกับใคร','Not yet'),S=>{S.later=1;return X('เรือแล่นหายไปทางขอบฟ้า','The canoe sails away over the horizon.')})]});
