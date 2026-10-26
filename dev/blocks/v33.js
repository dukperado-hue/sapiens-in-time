/* ===================== v0.33: a life that carries over — people who come back, career forks, odds on the buttons ===================== */

/* ---------- odds on buttons ---------- */
const PRL33=o=>{if(!o.pr)return '';let p;try{p=o.pr(S)}catch(e){return ''}p=Math.round(clamp(p,.03,.97)*100);return ' · '+L(X('โอกาสออกมาดีราว ','good outcome about '))+p+'%'};
const setPr33=(id,i,f)=>{const d=DEC.find(e=>e.id===id)||PERS29.find(e=>e.id===id);if(d&&d.o&&d.o[i])d.o[i].pr=f};
setPr33('p29_rival',0,S=>S[(ACTS[S.focus]&&ACTS[S.focus].sk)||'cr']>=45?.97:.35);
setPr33('p29_lost',0,()=>.6);setPr33('p29_guest',0,()=>.85);setPr33('p29_secret',0,()=>.75);setPr33('p29_lend',0,()=>.7);
setPr33('p5_marry',1,()=>.7);setPr33('partner',1,()=>.65);
const vP33=S=>{const kn=['star','swell','bird','cloud','vaka','sail'].filter(k=>S.tech[k]).length;return fwd(S).length?.25+(S.tr+S.kn)/800+kn*.06+(S.role==='scout'?.12:S.role==='teller'?.05:0)+(S.rank>=2?.05:0)+(S.wait?.12:0)+(S.starQ29||0)*.04:.03};

/* ---------- people who come back ---------- */
const kid33=S=>S.ppl.find(p=>p.k==='friend'&&!p.dead&&p.age>=0&&p.tr>=40);
const riv33=S=>S.ppl.find(p=>p.k==='rival'&&!p.dead&&p.age>=0);
const rec33=p=>X('สถิติกับ'+p.n.th+': ชนะ '+(p.w33||0)+' แพ้ '+(p.l33||0),'Record against '+p.n.en+': won '+(p.w33||0)+', lost '+(p.l33||0));
function job33(){const p=kid33(S);return {id:'pay33_job',t:X('เพื่อนเก่าแนะนำงาน','An old friend puts in a word'),
  xf:S=>PX(p,'{p} เพื่อนที่เล่นด้วยกันมาตั้งแต่เด็ก มาบอกว่ามีคนกำลังหาคนทำงาน และ{p}บอกเขาไปแล้วว่าคุณเป็นคนที่ไว้ใจได้','{p}, the friend you have played with since childhood, says someone is looking for workers, and has already told them you can be trusted.'),
  o:[opt(X('ไปตามที่เพื่อนแนะนำ','Go where your friend sends you'),S=>{fx({f:5,p:2});S.cxp=(S.cxp||0)+4;p.tr+=6;p.owe33=1;return PX(p,'งานหนักกว่าที่คิด แต่คุณทำได้ดี และ{p}ภูมิใจที่แนะนำคนไม่ผิด','The work is harder than you expected, but you do well, and {p} is proud to have vouched for you.')}),
     opt(X('ขอบคุณ แต่ยังไม่ไป','Thank them, but stay put'),S=>{p.tr-=3;return PX(p,'{p}ยักไหล่ แต่จำได้ว่าคุณปฏิเสธ','{p} shrugs, but remembers that you said no.')})]}}
function help33(){const p=kid33(S);return {id:'pay33_help',t:X('เพื่อนที่ลำบาก','A friend in trouble'),
  xf:S=>PX(p,'{p} มาหาคุณตอนค่ำ หน้าซีด ปีนี้บ้าน{p}เสียทุกอย่าง และไม่รู้จะไปขอใคร นอกจากเพื่อนที่โตมาด้วยกัน','{p} comes to you at dusk, pale. This year their household has lost everything, and there is no one else to ask but the friend they grew up with.'),
  o:[opt(X('แบ่งของที่มีให้ครึ่งหนึ่ง','Give them half of what you have'),S=>{fx({f:-8,b:2});p.tr+=10;p.owe33=2;return PX(p,'{p}ร้องไห้ และสัญญาว่าจะไม่ลืม','{p} weeps and promises never to forget.')}),
     opt(X('ช่วยเท่าที่ไม่เดือดร้อน','Help only as far as you can spare'),S=>{fx({f:-3});p.tr+=2;return PX(p,'{p}ขอบคุณ แต่สายตาบอกว่าหวังมากกว่านั้น','{p} thanks you, though their eyes had hoped for more.')})]}}
function match33(){const p=riv33(S);return {id:'pay33_match'+(S.rm33||0),t:X('คู่แข่งคนเดิม','The same old rival'),
  xf:S=>PX(p,'{p} ที่แข่งกับคุณมาตั้งแต่วัยรุ่น ท้าประชันฝีมือกันอีกครั้งต่อหน้าทุกคน','{p}, who has competed with you since your teens, challenges you to a contest of skill in front of everyone.'),
  o:[Object.assign(opt(X('รับคำท้า','Accept'),S=>{S.rm33=(S.rm33||0)+1;S.rmA33=S.age;const sk=(ACTS[S.focus]&&ACTS[S.focus].sk)||'cr';if(rnd()<.35+(S[sk]||0)/150){p.w33=(p.w33||0)+1;fx({p:5,b:2});S.recLog33=p;return PX(p,'คุณชนะ {p}ก้มหัวให้ ทั้งที่ไม่เคยทำมาก่อน','You win. {p} bows to you, which they have never done before.')}p.l33=(p.l33||0)+1;fx({p:-2});S.recLog33=p;return PX(p,'{p}ชนะอีกครั้ง คนดูโห่ร้อง คุณจำทุกจุดที่พลาดได้แม่น','{p} wins again. The crowd roars. You remember every mistake exactly.')}),{pr:S=>.35+(S[(ACTS[S.focus]&&ACTS[S.focus].sk)||'cr']||0)/150}),
     Object.assign(opt(X('ยื่นมือไปขอเลิกแข่งกัน','Offer your hand and end the rivalry'),S=>{S.rm33=(S.rm33||0)+1;S.rmA33=S.age;if(rnd()<.3+(S.so||0)/120){p.k='friend';p.tr=55;p.rec33=1;fx({b:4});return PX(p,'{p}มองมือคุณอยู่นาน แล้วจับไว้แน่น','{p} looks at your hand a long time, then grips it hard.')}fx({p:-1});return PX(p,'{p}หัวเราะเยาะ และเดินจากไป','{p} laughs at you and walks away.')}),{pr:S=>.3+(S.so||0)/120})]}}
/* career fork: someone opens a door to another trade */
function fork33(){const cur=S.car,av=carAvail(S).filter(k=>k!==cur);if(!av.length)return null;const ks=av.sort(()=>rnd()-.5).slice(0,2);const who=kid33(S)||S.ppl.find(p=>p.k==='mentor'&&!p.dead);
  return {id:'fork33',t:X('ทางแยก','A fork in the road'),
   xf:S=>who?PX(who,'{p} ชวนคุณไปลองทำงานอีกแบบ บอกว่าคนอย่างคุณไม่ควรติดอยู่กับงานเดิมไปจนแก่','{p} urges you to try a different kind of work: someone like you, they say, should not be stuck in the same trade until old age.'):X('ชีวิตมาถึงจุดที่คุณต้องเลือกว่าจะทำงานเดิมต่อไปจนแก่ หรือเริ่มต้นใหม่ในงานอีกแบบ','Life has reached the point where you must choose: keep to your trade until old age, or start again in another.'),
   o:ks.map(k=>{const C2=CARS()[k];return opt(X('เริ่มใหม่เป็น'+C2.n.th,'Start again as: '+C2.n.en),S=>{S.car=k;S.clv=Math.max(0,(S.clv||0)-1);S.cxp=(S.cxp||0)/2;S.fork33=1;fx({b:2});ms(X('เปลี่ยนอาชีพเป็น'+C2.n.th,'Changed trade: '+C2.n.en));return X('มือของคุณยังจำงานเก่าได้ครึ่งหนึ่ง อีกครึ่งต้องเรียนใหม่เหมือนเด็ก','Your hands remember half of the old work; the other half you must learn again like a child.')})}).concat([opt(X('ทำงานเดิมต่อไป','Keep to your trade'),S=>{fx({cr:1});return X('คุณกลับไปทำงานที่มือคุ้นที่สุด','You go back to the work your hands know best.')})])}}
/* the fifth step: a name that may be remembered */
function legKind33(S){const C=CARS()[S.car]||{n:{en:''}},en=C.n.en||'';if(S.cls==='elite'&&rnd()<.4)return 'ruler';if(/sail|boat|fish|row|navig|captain|merchant|trader|caravan/i.test(en))return 'captain';if(/warrior|soldier|legion|guard|archer|rider|horse|cavalry/i.test(en))return 'general';if(C.sk==='kn'||/scribe|diviner|priest|healer|teacher|scholar|astrolog|monk/i.test(en))return 'scholar';return 'master'}
const LEG33={ruler:{n:X('ผู้ปกครองที่ชื่ออยู่ในบันทึก','a ruler whose name stays in the records'),x:X('ผู้นำคนเก่าตาย และตระกูลของคุณกับอีกสองตระกูลต่างอ้างสิทธิ์ ผู้คนเริ่มมองมาที่คุณ','The old ruler dies, and your lineage and two others each claim the right. People begin to look to you.'),risk:{h:-10,p:-6}},
 captain:{n:X('ผู้นำกองเรือที่ไปถึงที่ที่ไม่มีใครเคยไป','a captain who reached where no one had gone'),x:X('มีคนรวบรวมเรือและคนได้พอจะออกเดินทางไกลกว่าที่ใครเคยไป และอยากให้คุณเป็นคนนำ','Someone has gathered enough ships and crew for a voyage farther than anyone has gone, and wants you to lead it.'),risk:{h:-20}},
 general:{n:X('แม่ทัพที่ผู้คนเล่าถึงอีกหลายร้อยปี','a general people tell of for centuries'),x:X('ศึกใหญ่กำลังมา และผู้นำต้องการคนที่ทหารยอมตามไปจนสุดทาง เขาส่งคนมาตามคุณ','A great war is coming, and the leaders need someone soldiers will follow to the end. They send for you.'),risk:{h:-25}},
 scholar:{n:X('นักปราชญ์ที่งานถูกคัดลอกต่อกันหลายร้อยปี','a thinker whose work is copied for centuries'),x:X('คุณเริ่มเขียนสิ่งที่คิดมาทั้งชีวิตลงไป ถ้าทำเสร็จ อาจมีคนคัดลอกต่อไปอีกหลายร้อยปี หรืออาจไม่มีใครอ่านเลย','You begin to write down what you have thought about all your life. If you finish, people may copy it for centuries, or no one may ever read it.'),risk:{b:-6}},
 master:{n:X('ช่างที่งานยังอยู่ให้คนดูในอีกหลายร้อยปี','a maker whose work is still looked at centuries later'),x:X('คุณคิดถึงงานชิ้นหนึ่งที่ไม่มีใครเคยทำ มันจะกินเวลาหลายปีและของที่คุณเก็บไว้ทั้งหมด','You imagine a piece no one has ever made. It will take years and everything you have saved.'),risk:{f:-12}}};
function legend33(){const k=legKind33(S),G=LEG33[k],C=CARS()[S.car]||{sk:'kn'};const pr=S=>.18+((S[C.sk]||0)/300)+((S.p||0)/500);
  return {id:'legend33',t:X('ชื่อที่อาจถูกจำ','A name that might be remembered'),x:G.x,n:X('คนส่วนใหญ่ในประวัติศาสตร์ไม่มีใครจำชื่อได้ ในเกมนี้มีชีวิตส่วนน้อยมากที่มาถึงทางแยกนี้ และถ้าสำเร็จ คุณจะเป็นคนแบบนั้น ไม่ใช่บุคคลจริงในประวัติศาสตร์','Most people in history are remembered by no one. Very few lives in this game reach this fork, and if you succeed you become someone of that kind, not a real historical person.'),
   o:[Object.assign(opt(X('ทุ่มทั้งชีวิตให้มัน','Give your whole life to it'),S=>{if(rnd()<pr(S)){S.leg33=k;fx({p:15,b:6});ms(X('กลายเป็น'+G.n.th,'Became '+G.n.en));return X('มันสำเร็จ ผู้คนเริ่มพูดชื่อคุณในที่ที่คุณไม่เคยไป','It works. People begin to speak your name in places you have never been.')}fx(G.risk);return X('มันไม่สำเร็จ และคุณต้องจ่ายราคานั้นไปอีกหลายปี','It fails, and you pay the price for years.')}),{pr}),
      opt(X('อยู่กับชีวิตที่มี','Stay with the life you have'),S=>{fx({b:2});return X('คุณเลือกชีวิตที่ไม่มีใครจะจำ แต่มีคนที่คุณรักอยู่ใกล้','You choose a life no one will remember, with the people you love close by.')})]}}
function pay33(a){if(!S||S.age<15)return null;
  if(!S.done.pay33_job&&(S.ch===3||civ(S.ch))&&a>=15&&a<=28&&kid33(S)&&rnd()<.25)return job33();
  if(riv33(S)&&a>=22&&a<=58&&(S.rm33||0)<2&&a-(S.rmA33||0)>=8&&rnd()<.18)return match33();
  if(!S.done.pay33_help&&a>=30&&a<=62&&kid33(S)&&rnd()<.14)return help33();
  if(!S.done.fork33&&S.car&&a>=25&&a<=45&&(S.ch===3||civ(S.ch))&&rnd()<.06)return fork33();
  if(!S.done.legend33&&S.car&&(S.clv||0)>=2&&(S.p||0)>=35&&a>=32&&a<=65&&rnd()<.1)return legend33();
  return null}
function v33Year(a){if(!S)return;if(S.recLog33){log(rec33(S.recLog33),null,'it');S.recLog33=null}
  const f=S.ppl.find(p=>p.owe33===2&&!p.dead&&p.k==='friend');if(f&&(S.f<30||S.sick)&&!S.repaid33){S.repaid33=1;fx({f:10,b:4});log(PX(f,'ปีที่คุณลำบาก {p}มาเคาะประตูพร้อมอาหารเต็มตะกร้า "ครั้งนั้นคุณแบ่งให้ฉันครึ่งหนึ่ง"','In your hard year {p} knocks at your door with a full basket. "Back then, you gave me half."'),null,'big')}
  const m=S.ppl.find(p=>p.k==='mentor'&&!p.dead);if(m&&S.done.cm31_1!=null&&!S.mv33){S.mv33=1;log(PX(m,'{p} ครูของคุณ แวะมาดูงานชิ้นแรกที่คุณทำเอง หยิบขึ้นมาพลิกดูนาน แล้ววางลงโดยไม่พูดอะไร แต่ยิ้ม','{p}, your teacher, comes to see the first piece you made alone, turns it over for a long time, and sets it down without a word, smiling.'),null,'it')}}
/* who was there at the end */
function fun33(){try{const el=document.getElementById('dFuneral');if(!el||el.dataset.v33)return;el.dataset.v33=1;const parts=[];
  const near=S.ppl.filter(p=>!p.dead&&p.age>=0&&p.k!=='rival'&&p.tr>=50).sort((a,b)=>b.tr-a.tr).slice(0,2);
  if(near.length)parts.push(L(near.length>1?X('ที่งานศพ '+near[0].n.th+' และ '+near[1].n.th+' ยืนอยู่ใกล้ที่สุด','At the funeral, '+near[0].n.en+' and '+near[1].n.en+' stand closest.'):X('ที่งานศพ '+near[0].n.th+' ยืนอยู่ใกล้ที่สุด','At the funeral, '+near[0].n.en+' stands closest.')));
  const rv=S.ppl.find(p=>(p.k==='rival'||p.rec33)&&!p.dead&&p.age>=0&&(p.w33||p.l33||p.rec33));if(rv)parts.push(L(PX(rv,'แม้แต่{p} คู่แข่งตลอดชีวิตของคุณ ก็มายืนอยู่ท้ายแถว','Even {p}, your lifelong rival, stands at the back.')));
  if(S.leg33)parts.push(L(X('ชื่อของคุณจะถูกเล่าต่อไปอีกนาน ในฐานะ'+LEG33[S.leg33].n.th+' (ตัวละครในเกม ไม่ใช่บุคคลจริง)','Your name will be told for a long time, as '+LEG33[S.leg33].n.en+' (a character in this game, not a real person).')));
  if(parts.length){const p=document.createElement('p');p.className='fun';p.textContent=parts.join(' ');el.after(p)}}catch(e){}}
