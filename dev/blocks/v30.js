/* ===================== v0.30: continuity and pacing fixes from the "Nolan" test ===================== */

/* a friend's death names a real friend and takes them out of your life */
const grief30=S=>S.ppl.filter(p=>!p.dead&&p.age>=12&&['friend','neighbor','mentor'].includes(p.k)).sort((a,b)=>b.tr-a.tr)[0];
{const i=PERS29.findIndex(p=>p.id==='p29_grief');if(i>=0)PERS29[i]={id:'p29_grief',a:[25,85],c:S=>!!grief30(S),t:X('การจากไปของเพื่อน','A friend’s death'),
  xf:S=>{const p=grief30(S);S.grief30=p;return PX(p,'{p} '+PK[p.k].th+'ที่ใกล้ชิดคุณที่สุดคนหนึ่ง เสียชีวิตอย่างกะทันหัน คุณไม่ได้บอกลา','{p}, your '+PK[p.k].en+' and one of the people closest to you, dies suddenly. You never said goodbye.')},
  x:X('',''),
  o:[opt(X('ดูแลครอบครัวของเขา','Look after their family'),S=>{const p=S.grief30;if(p){p.dead=1;p.deadAt=S.age}fx({so:3,b:1,f:-2});
      return S.sex==='f'?X('ลูกของเขาเรียกคุณว่าป้าไปจนโต','Their children call you aunt as they grow up.'):X('ลูกของเขาเรียกคุณว่าลุงไปจนโต','Their children call you uncle as they grow up.')}),
    opt(X('ใช้เวลาอยู่คนเดียว','Spend time alone'),S=>{const p=S.grief30;if(p){p.dead=1;p.deadAt=S.age}fx({b:-2,kn:1});return X('คุณเดินไปที่ที่เคยไปด้วยกันทุกเย็นจนจบฤดู','Every evening until the season ends, you walk to the place you used to go together.')})]}}
/* the lost keepsake needs a keepsake: your mother gives you one in childhood */
{const p=PERS29.find(p=>p.id==='p29_lost');if(p){const c0=p.c;p.c=S=>!!S.gift30&&(!c0||c0(S))}}
const GIFT30=[X('ลูกปัดเม็ดหนึ่งร้อยเชือก','a single bead on a cord'),X('เปลือกหอยเจาะรูอันเล็กๆ','a small pierced shell'),X('หินสีแดงก้อนเล็กที่ขัดจนเงา','a little red stone polished smooth')];
function gift30(a){if(S.gift30||a<6||a>9||rnd()<.6)return;S.gift30=pick(GIFT30);
  log(X('แม่ผูก'+S.gift30.th+'ไว้ที่ข้อมือคุณ บอกว่าเป็นของยาย และให้คุณเก็บไว้ให้ดี','Your mother ties '+S.gift30.en+' round your wrist. It was your grandmother’s, she says; keep it safe.'),null,'it')}
/* every 20 years: one line about somewhere else on the same world clock */
function cross30(a){if(![20,40,60].includes(a))return;const seen=S.w30=S.w30||new Set((world26(S)||[]).map(x=>x.en));const ya=S.ya,ar=area26(S);
  const c=WORLD26.filter(w=>ya<=w[0]&&ya>=w[1]&&w[2]!==S.ch&&w[2]!==1&&!seen.has(w[3].en)&&!(w[1]===238&&ar==='png')&&!(w[1]===24000&&ar==='ame'));if(!c.length)return;
  const w=pick(c);seen.add(w[3].en);log(X('ในปีเดียวกันนี้ที่อื่นในโลก · '+w[3].th,'This same year, elsewhere · '+w[3].en),null,'cl')}
/* everyone gets at least one chance at a partner between 18 and 30 */
const MARRY30=/^(partner2?|[a-z0-9]+_(marry|wed))$/;
function marry30(a){if(S.partner||a<18||a>32||(S.mar30||0)>=2||a-(S.marA30||-9)<5)return null;if(rnd()>(a>=24?.6:.3))return null;
  const c=DEC.filter(e=>MARRY30.test(e.id)&&!/^p29/.test(e.id)&&okEv(e,a)&&(S.done[e.id]==null||a-S.done[e.id]>=5));if(!c.length)return null;S.mar30=(S.mar30||0)+1;S.marA30=a;return pick(c)}
function v30Year(a){gift30(a);cross30(a)}
/* the death page says what happens to the herd, kids or no kids */
const kidsAlive30=S=>S.kids.some(k=>!k.dead&&(k.dies==null||k.born+k.dies>S.age));
function herdLine30(){return kidsAlive30(S)?X('สัตว์ของคุณ '+herdTot()+' ตัวถูกแบ่งให้ลูกหลาน','Your '+herdTot()+' animals are divided among your children.'):X('สัตว์ของคุณ '+herdTot()+' ตัวถูกแบ่งให้ญาติพี่น้อง','Your '+herdTot()+' animals are divided among your kin.')}
/* a title card before the numbers */
function yr30(ya){const ce=2025-ya;if(ya>12000)return X('ราว '+fmt(Math.round(ya/100)*100)+' ปีก่อน','about '+fmt(Math.round(ya/100)*100)+' years ago');return ce>0?X('ค.ศ. '+ce,'CE '+ce):X(fmt(1-ce)+' ปีก่อน ค.ศ.',fmt(1-ce)+' BCE')}
function titleCard30(S){if(TEST)return Promise.resolve();return new Promise(res=>{try{
  if(!document.getElementById('tc30css')){const st=document.createElement('style');st.id='tc30css';st.textContent='#tc30{position:fixed;inset:0;background:#000;z-index:95;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px;opacity:0;transition:opacity 1s;cursor:pointer}#tc30.on{opacity:1}#tc30 .n{font-family:var(--display);font-size:clamp(28px,8vw,48px);color:var(--bone,#ede4d4);letter-spacing:.04em}#tc30 .y{margin-top:10px;color:var(--ash,#a89a88);font-size:16px}#tc30 .p{margin-top:18px;color:var(--ash,#a89a88);font-size:15px;max-width:30em;line-height:1.6}';document.head.appendChild(st)}
  const el=document.createElement('div');el.id='tc30';const born=S.path[0],end=S.path[S.path.length-1];
  const a=yr30(S.ya0),b=yr30(S.ya0-S.age),pl=born===end?X('เกิดและจากไปที่ '+REGIONS[born].n.th,'Born and died in '+REGIONS[born].n.en):X('เกิดที่ '+REGIONS[born].n.th+' และจากไปที่ '+REGIONS[end].n.th,'Born in '+REGIONS[born].n.en+', died in '+REGIONS[end].n.en);
  el.innerHTML='<div class="n">'+esc(nmL(S.name))+'</div><div class="y">'+esc(S.age<1?L(a):L(a)+' – '+(S.ya0<2025?String(2025-S.ya0+S.age):L(b)))+'</div><div class="p">'+esc(L(pl))+'</div>';document.body.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('on'));let done=false;const fin=()=>{if(done)return;done=true;el.classList.remove('on');setTimeout(()=>{el.remove();res()},700)};
  el.onclick=fin;setTimeout(fin,auto?2600:4200)}catch(e){res()}})}
/* a little omen before death, so the end does not come from nowhere */
function omen30(S){const a=S.age;if(a<1)return X('ทารกร้องไห้น้อยลง และไม่ค่อยยอมดูดนม','The baby cries less and will hardly feed.');if(a<12)return X('ช่วงหลังคุณเหนื่อยง่าย ไม่อยากวิ่งเล่นกับใคร','Lately you tire easily and do not want to run and play.');if(a<45)return X('อาการที่เริ่มเบาๆ เมื่อหลายวันก่อนไม่หายไป ร่างกายไม่ยอมฟังใจอีกแล้ว','Something that began mildly days ago does not go away. Your body will not listen any more.');return X('ช่วงหลังคุณนอนนานขึ้นทุกวัน และฝันถึงคนที่จากไปแล้ว','Lately you sleep longer each day, and dream of people who are gone.')}
/* achievements: count lives already played before the book existed */
function bookMig30(){try{const b=store.get('sit.book',null);if(b&&b.mig30)return;const nb=b||{met:{},ach:{},lives:0,chaps:{},best:{},minis:{}};const lv=store.get('sit.lives',[]);
  nb.lives=Math.max(nb.lives||0,lv.length);for(const r of lv)if(r&&r.chap!=null)nb.chaps[r.chap]=nb.chaps[r.chap]||1;nb.mig30=1;store.set('sit.book',nb)}catch(e){}}
window.__v30={titleCard30,omen30,marry30};
/* Suvarnabhumi: a girl's way to letters */
DEC.push({id:'c22_letters_f',deck:'child',w:6,ch:22,a:[8,13],cond:S=>S.schOK&&S.ya<=1475&&S.sex==='f',t:X('อักษรที่แอบเรียน','Letters learned on the sly'),
 x:X('พี่ชายของคุณไปเรียนอักษรกับพระที่วัดทุกเช้า ตอนเย็นเขาเขียนตัวอักษรบนทรายหน้าบ้านเพื่อทบทวน คุณนั่งดูอยู่ข้างๆ','Every morning your brother goes to the temple to learn letters from a monk. In the evening he writes them in the sand by the house to practise, and you sit beside him watching.'),
 n:X('วัดเป็นที่เรียนหนังสือของเด็กชายในภูมิภาคนี้มาหลายร้อยปี ผู้หญิงส่วนใหญ่ไม่ได้เรียนที่วัด แต่บางคนเรียนจากพี่น้องหรือพ่อแม่ในบ้าน','For centuries temples were where boys in this region learned to read. Most girls did not study there, though some learned from brothers or parents at home.'),
 o:[opt(X('ขอให้พี่สอน','Ask him to teach you'),S=>{S.lit=clamp((S.lit||0)+8,0,100);fx({kn:3,so:1});return X('พี่หัวเราะ แต่สอนให้ทุกเย็น ปลายปีคุณเขียนชื่อตัวเองบนทรายได้','He laughs, but teaches you every evening. By the year’s end you can write your name in the sand.')}),
    opt(X('ดูเงียบๆ แล้วจำเอง','Watch quietly and remember'),S=>{S.lit=clamp((S.lit||0)+4,0,100);fx({kn:2});return X('ไม่มีใครรู้ว่าคุณอ่านคำบนใบเสมาได้สองคำ','No one knows you can read two words on the boundary stone.')})]});
