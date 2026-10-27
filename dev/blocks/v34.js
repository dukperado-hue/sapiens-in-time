/* ===================== v0.34: turning points, a legacy that carries on, a life in pictures, the cup of the age ===================== */

/* ---------- 4. turning points of the world, felt in your own life ---------- */
const TP34=[
 {k:'paper',c:S=>S.ch===24&&S.ya<=1275&&S.ya>=1195&&S.age>=8,
  x:X('ในตลาดมีร้านขายของแผ่นบางสีขาวที่ทำจากเศษผ้าลินินแช่น้ำแล้วทุบ เรียกว่ากระดาษ ราคาถูกกว่าหนังสัตว์และกระดาษปาปิรุสมาก ใครๆ ก็เริ่มจดบัญชี เขียนจดหมาย และคัดลอกหนังสือ','A shop in the market sells thin white sheets made from soaked and beaten linen rags: paper. It costs far less than parchment or papyrus, and suddenly everyone is keeping accounts, writing letters and copying books.'),
  n:X('กระดาษคิดค้นในจีน และไปถึงซามาร์คันด์ราวกลางศตวรรษที่ 8 ตำนานเล่าว่าเชลยชาวจีนจากศึกตาลัสในปี ค.ศ. 751 เป็นคนสอนวิธีทำ ✦ นักประวัติศาสตร์หลายคนเห็นว่ากระดาษมาถึงเอเชียกลางก่อนหน้านั้น ราวปลายศตวรรษที่ 8 แบกแดดก็มีโรงทำกระดาษ หนังสือจึงถูกลงมาก','Paper was invented in China and reached Samarkand around the mid-8th century. Legend says Chinese prisoners taken at the Battle of Talas in 751 taught the craft ✦; many historians think paper reached Central Asia earlier. By the late 8th century Baghdad had paper mills, and books became far cheaper.'),
  run:S=>{S.lit=clamp((S.lit||0)+8,0,100);fx({kn:3});if(S.car)S.cxp=(S.cxp||0)+2;ms(X('มีชีวิตอยู่ตอนที่กระดาษมาถึงเมือง','Lived to see paper come to the city'))}},
 {k:'gunpowder',c:S=>S.ch===26&&S.ya<=805&&S.ya>=745&&S.age>=12,
  x:X('ทหารที่กลับจากการล้อมเมืองในจีนเล่าว่า ฝ่ายในเมืองโยนลูกเหล็กที่ระเบิดเสียงดังเหมือนฟ้าผ่า เศษเหล็กกระจายทะลุเกราะ ตอนนี้ทัพของข่านก็จ้างช่างจีนที่รู้วิธีทำผงดำนั้นแล้ว','Soldiers back from a siege in China say the defenders threw iron pots that burst with a sound like thunder, their fragments piercing armour. Now the khan’s armies employ Chinese craftsmen who know how to make the black powder.'),
  n:X('ดินปืนคิดค้นในจีนราวศตวรรษที่ 9 ในการล้อมไคเฟิงปี ค.ศ. 1232 ฝ่ายจินใช้ระเบิดเหล็กสู้ทัพมองโกล ทัพมองโกลรับช่างจีนเข้ามาใช้งาน และหลังสงครามของพวกเขา ความรู้เรื่องดินปืนก็ไปถึงโลกมุสลิมและยุโรป แต่ไปถึงด้วยเส้นทางไหนแน่ยังถกเถียง','Gunpowder was invented in China around the 9th century. At the siege of Kaifeng in 1232 the Jin used iron bombs against the Mongols, who took Chinese engineers into their service. After their wars, knowledge of gunpowder reached the Muslim world and Europe, though by exactly which routes is still debated.'),
  run:S=>{fx({kn:2,so:1});ms(X('ได้ยินเสียงดินปืนครั้งแรก','Heard of gunpowder for the first time'))}},
 {k:'smallpox',c:S=>S.ch===28&&S.peoNw==='nat'&&S.ya<=507&&S.ya>=490&&S.age>=1,
  x:X('ไข้ที่ไม่มีใครเคยเห็นมาก่อนลามไปทั่ว คนป่วยตัวร้อนจัด แล้วมีตุ่มหนองขึ้นเต็มตัว ทั้งบ้านล้มป่วยพร้อมกัน ไม่มีใครเหลือพอจะหุงข้าวหรือฝังคนตาย','A fever no one has ever seen sweeps through. The sick burn hot, then break out in pustules all over. Whole households fall ill at once, with no one left to cook or bury the dead.'),
  n:X('ไข้ทรพิษมาจากโลกเก่า และคนในทวีปอเมริกาไม่เคยมีภูมิต้านทาน มันระบาดในเกาะฮิสปานิโอลาราว ค.ศ. 1518 และในเตนอชตีตลันปลายปี ค.ศ. 1520 ก่อนชาวสเปนจะล้อมเมือง คร่าชีวิตคนไปจำนวนมาก นักประวัติศาสตร์เห็นว่าโรคจากโลกเก่าทำให้ประชากรพื้นเมืองลดลงมากกว่าสงคราม','Smallpox came from the Old World, and the peoples of the Americas had no immunity. It struck Hispaniola around 1518 and Tenochtitlan in late 1520, before the Spanish siege, killing vast numbers. Historians think Old World diseases cut the native population more than war did.'),
  run:S=>{fx({h:-25,b:-8,f:-6});for(const p of S.ppl)if(!p.dead&&p.age>=0&&rnd()<.3){p.dead=1;p.deadAt=S.age}for(const k of S.kids)if(!k.dead&&(k.dies==null||k.born+k.dies>S.age)&&rnd()<.3){k.dies=S.age-k.born+1}S.inj=1;ms(X('รอดจากโรคระบาดใหญ่ที่มาจากโลกเก่า','Survived the great epidemic from the Old World'))}}];
function tp34(a){for(const T of TP34){if(S['tp34'+T.k]||!T.c(S)||rnd()>.45)continue;S['tp34'+T.k]=1;T.run(S);log(T.x,T.n,'big');break}}

/* ---------- 5. legacy: what this life leaves to the next ---------- */
function legacy34(S){const out=[];const ka=S.kids.filter(k=>!k.dead&&(k.dies==null||k.born+k.dies>S.age)).length;
  if(ka)out.push(X('ลูกที่ยังมีชีวิต '+ka+' คน','children still living: '+ka));
  if((S.p||0)>=40)out.push(X('ชื่อเสียงที่ลูกหลานจะได้ใช้','a good name for your descendants'));
  if(S.cust&&S.cust.length)out.push(X('ธรรมเนียมที่คุณเริ่ม','a custom you began'));
  if(S.made26&&S.made26.q>=2)out.push(X('ของที่คุณทำด้วยมือ','a thing made by your hands'));
  if(S.leg33)out.push(X('ชื่อที่ถูกเล่าต่อ','a name that is told on'));
  if(S.tech){const n=Object.keys(S.tech).filter(k=>S.tech[k]).length;if(n)out.push(X('ความรู้ '+n+' อย่างที่ส่งต่อได้','knowledge to pass on: '+n))}
  return out}
function saveLegacy34(S){if(TEST||!CHAPS[S.chap].lin)return;store.set('sit.leg34',{chap:S.chap,gen:S.gen||1,name:S.name,p:S.p||0,so:S.so||0,kn:S.kn||0,made:S.made26&&S.made26.q>=2?S.made26.k:null,leg:S.leg33||null})}
function applyLegacy34(a){if(a!==0&&a!==6)return;if(!CHAPS[S.chap].lin||(S.gen||1)<2)return;const L0=store.get('sit.leg34',null);if(!L0||L0.chap!==S.chap)return;
  if(a===0){if(S.leg34)return;S.leg34=1;S.p=clamp((S.p||0)+Math.round(L0.p/4),0,100);S.so=clamp((S.so||0)+Math.round(L0.so/5),0,100);S.kn=clamp((S.kn||0)+Math.round(L0.kn/5),0,100);return}
  if(L0.name&&!S.leg34told){S.leg34told=1;const nm=L0.name;log(L0.p>=40?X('ผู้ใหญ่เล่าเรื่องบรรพบุรุษคนหนึ่งให้คุณฟัง ชื่อ '+nm.th+' ที่ทุกคนในสายเลือดยังจำได้ และบอกว่าคุณมีแววแบบเดียวกัน','The elders tell you of an ancestor named '+nm.en+', whom everyone in the line still remembers, and say you have the same spark.'):X('ผู้ใหญ่เล่าเรื่องบรรพบุรุษคนหนึ่งให้คุณฟัง ชื่อ '+nm.th+' ที่ทุกคนในสายเลือดยังจำได้','The elders tell you of an ancestor named '+nm.en+', whom everyone in the line still remembers.'),null,'it')}}
function legacyHTML34(S){const l=legacy34(S);if(!l.length)return '';return '<p class="small"><b>'+esc(L(X('สิ่งที่ทิ้งไว้: ','What you leave behind: ')))+'</b>'+l.map(x=>esc(L(x))).join(' · ')+'</p>'}
function v34Year(a){if(!S.cup34)S.cup34=cupOf34(S);tp34(a);applyLegacy34(a)}

/* ---------- 6. a life in pictures before the title card ---------- */
function slides34(S){if(TEST)return Promise.resolve();return new Promise(res=>{try{
  const fr=[{a:0,x:X('เกิด','Born'),tm:.86}];const ms=S.ms.filter(m=>m.a>0&&m.a<S.age);const step=Math.max(1,Math.ceil(ms.length/4));for(let i=0;i<ms.length&&fr.length<5;i+=step)fr.push({a:ms[i].a,x:ms[i].x,tm:[.3,.45,.62,.75][fr.length%4]});
  if(S.age>0)fr.push({a:S.age,x:X('วันสุดท้าย','The last day'),tm:.7});if(fr.length<3){res();return}
  if(!document.getElementById('sl34css')){const st=document.createElement('style');st.id='sl34css';st.textContent='#sl34{position:fixed;inset:0;background:#000;z-index:94;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;cursor:pointer}#sl34 canvas{width:min(100%,640px);aspect-ratio:16/9;image-rendering:pixelated;opacity:0;transition:opacity .8s}#sl34 canvas.on{opacity:1}#sl34 .c{color:var(--bone,#ede4d4);margin-top:14px;min-height:3em;max-width:34em;text-align:center;font-size:15px;line-height:1.5;opacity:0;transition:opacity .8s}#sl34 .c.on{opacity:1}#sl34 .a{color:var(--ember,#eba84b);font-family:var(--display);font-size:13px;letter-spacing:.1em}#sl34 .bar{display:flex;gap:4px;margin-top:12px}#sl34 .bar i{width:22px;height:3px;background:#333}#sl34 .bar i.on{background:var(--ember,#eba84b)}';document.head.appendChild(st)}
  const el=document.createElement('div');el.id='sl34';el.innerHTML='<canvas width="384" height="216"></canvas><div class="c"></div><div class="bar">'+fr.map(()=>'<i></i>').join('')+'</div>';document.body.appendChild(el);
  const cv=el.querySelector('canvas'),cap=el.querySelector('.c'),bars=el.querySelectorAll('.bar i'),ctx=cv.getContext('2d');let i=0,done=false,tmr=null;const per=auto?1900:2900;
  const fin=()=>{if(done)return;done=true;clearTimeout(tmr);el.remove();res()};el.onclick=fin;
  const show=()=>{if(done)return;if(i>=fr.length){fin();return}const f=fr[i],ix=i;cv.classList.remove('on');cap.classList.remove('on');
    setTimeout(()=>{if(done)return;try{const o=sceneOpts(9000);o.tm=f.tm;o.stage=stage(f.a);o.dis=null;o.act=f.a<5?'fire':o.act;drawScene(ctx,o)}catch(e){}
      cv.classList.add('on');bars.forEach((b,j)=>b.classList.toggle('on',j<=ix));
      setTimeout(()=>{if(done)return;cap.innerHTML='<div class="a">'+esc(L(X('อายุ '+f.a,'Age '+f.a)))+'</div>'+esc(L(f.x));cap.classList.add('on')},per*.35)},300);
    i++;tmr=setTimeout(show,per)};show()}catch(e){res()}})}

/* ---------- 7. the cup of the age ---------- */
const CUP34={
 water:{n:X('น้ำจากลำธาร','stream water'),f:X('ตลอดประวัติศาสตร์ส่วนใหญ่ เครื่องดื่มของมนุษย์คือน้ำ และน้ำสกปรกเป็นต้นเหตุของโรคท้องร่วงที่คร่าชีวิตเด็กจำนวนมาก','For most of history people drank water, and dirty water caused the diarrhoeal diseases that killed many children.')},
 beer:{n:X('เบียร์ข้าวบาร์เลย์ ดูดผ่านหลอด','barley beer, sipped through a straw'),f:X('ในเมโสโปเตเมียและอียิปต์ เบียร์เป็นอาหารประจำวัน แรงงานได้ค่าจ้างเป็นขนมปังและเบียร์ ภาพสลักโบราณแสดงคนดูดเบียร์จากไหด้วยหลอดยาว เพราะมีกากลอยอยู่','In Mesopotamia and Egypt beer was a daily food, and workers were paid in bread and beer. Ancient images show people drinking from jars through long straws, to get past the floating husks.')},
 wine:{n:X('ไวน์ผสมน้ำ','wine mixed with water'),f:X('ชาวกรีกและโรมันดื่มไวน์ผสมน้ำเป็นเรื่องปกติ การดื่มไวน์ไม่ผสมถูกมองว่าเป็นนิสัยของคนป่าเถื่อน','Greeks and Romans normally drank wine mixed with water; drinking it neat was thought barbarian.')},
 millet:{n:X('เหล้าหมักข้าวฟ่าง','fermented millet drink'),f:X('ราชวงศ์ซางมีภาชนะสำริดสำหรับเครื่องดื่มหมักหลายแบบ และใช้มันในพิธีเซ่นบรรพบุรุษ','The Shang made many kinds of bronze vessels for fermented drinks and used them in rites for the ancestors.')},
 cacao:{n:X('เครื่องดื่มโกโก้ขม','bitter cacao drink'),f:X('มีหลักฐานจากเศษภาชนะว่าคนในเม็กซิโกและอเมริกากลางดื่มเครื่องดื่มจากโกโก้มาตั้งแต่อย่างน้อยราว 3,500 ปีก่อน ยังไม่ใช่ช็อกโกแลตหวานแบบทุกวันนี้','Residues in pottery show people in Mexico and Central America drank cacao drinks from at least about 3,500 years ago; it was nothing like today’s sweet chocolate.')},
 milk:{n:X('นมและน้ำ','milk and water'),f:X('ในอินเดียโบราณ นมวัวมีค่ามากในพิธีกรรมและอาหาร เครื่องดื่มส่วนใหญ่ของคนทั่วไปคือน้ำและนม','In ancient India cow’s milk was precious in ritual and food; most ordinary people drank water and milk.')},
 rain:{n:X('น้ำฝนจากโอ่ง','rainwater from a jar'),f:X('บ้านในเขตมรสุมของเอเชียตะวันออกเฉียงใต้รองน้ำฝนเก็บไว้ในโอ่งดินไว้ดื่มตลอดหน้าแล้ง','Homes in monsoon Southeast Asia caught rain in clay jars to drink through the dry season.')},
 sharbat:{n:X('ชาร์บัต น้ำผลไม้หวานเย็น','sharbat, a sweet chilled fruit drink'),f:X('ในโลกมุสลิมยุคกลาง ชาร์บัตทำจากน้ำผลไม้ ดอกไม้ และน้ำตาล บางครั้งแช่ด้วยหิมะที่ขนลงมาจากภูเขา ส่วนกาแฟยังไม่มาจนถึงราวศตวรรษที่ 15','In the medieval Muslim world sharbat was made of fruit juice, flowers and sugar, sometimes chilled with snow carried down from the mountains. Coffee would not arrive until about the 15th century.')},
 airag:{n:X('ไอรัก นมม้าหมัก','airag, fermented mare’s milk'),f:X('ชาวทุ่งหญ้ามองโกลดื่มนมม้าหมักที่มีแอลกอฮอล์อ่อนๆ ทุกฤดูร้อน และยังดื่มกันในมองโกเลียทุกวันนี้','Mongol herders drank mildly alcoholic fermented mare’s milk every summer, and still do in Mongolia today.')},
 coconut:{n:X('น้ำมะพร้าว','coconut water'),f:X('นักเดินเรือแปซิฟิกบรรทุกมะพร้าวไปในเรือ เพราะเป็นทั้งน้ำดื่มและอาหารที่เก็บได้นาน','Pacific voyagers carried coconuts aboard, as both drink and food that kept for a long time.')},
 sugar:{n:X('กาแฟใส่น้ำตาลจากไร่','coffee sweetened with plantation sugar'),f:X('กาแฟและน้ำตาลที่ยุโรปดื่มกันมาจากไร่ในทวีปอเมริกาที่ใช้แรงงานทาสจากแอฟริกา เรือขนทาสข้ามมหาสมุทรแอตแลนติก แล้วขนน้ำตาลและเหล้ารัมกลับไปยุโรป','The coffee and sugar Europe drank came from American plantations worked by enslaved Africans. Ships carried captives across the Atlantic and brought sugar and rum back to Europe.')}};
function cupOf34(S){const c=S.ch,r=S.rg;if(c===4||c===6)return 'beer';if(c===10||c===16||c===18)return 'wine';if(c===12)return 'millet';if(c===14)return 'cacao';if(c===20)return 'milk';if(c===22)return 'rain';if(c===24)return 'sharbat';if(c===26)return 'airag';if(c===28)return S.peoNw==='nat'?'cacao':'sugar';if(c===5)return 'coconut';return 'water'}
function cupRow34(S){if(!S.cup34)S.cup34=cupOf34(S);const C=CUP34[S.cup34];return [esc(L(X('แก้วประจำวัน','Your daily cup'))),esc(L(C.n))+'<br><span class="small">'+esc(L(C.f))+'</span>']}
function cupBook34(){const b=book29(),have=Object.keys(b.cups||{});return '<p class="small"><b>'+esc(L(X('แก้วของแต่ละยุค ','Cups of the ages ')))+have.length+'/'+Object.keys(CUP34).length+'</b> '+Object.keys(CUP34).map(k=>have.includes(k)?esc(L(CUP34[k].n)):'?').join(' · ')+'</p>'}
window.__v34={slides34,legacyHTML34,cupRow34};
