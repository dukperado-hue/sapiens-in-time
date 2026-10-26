/* ===================== v0.29: someone, not no one — life goals, a book of lives, achievements; fewer repeats; hands-on minigames ===================== */

/* ---------- 1. life goals: two per life, checked at death ---------- */
const lit29=S=>[4,6,8,10,12,16,18,20,22,24,26,28].includes(S.ch);
const kidsAdult29=S=>S.kids.filter(k=>S.age-k.born>=15&&(k.dies==null||k.dies>=15)).length;
const GOALS29=[
 {k:'old',w:3,n:X('มีชีวิตถึงอายุ 50 ปี','Live to the age of 50'),ok:S=>S.age>=50},
 {k:'kids',w:3,n:X('มีลูกที่รอดถึงวัยผู้ใหญ่อย่างน้อยสองคน','Raise at least two children to adulthood'),ok:S=>kidsAdult29(S)>=2},
 {k:'fame',w:3,c:S=>civ(S.ch),n:X('ได้พบหรือเป็นพยานของเหตุการณ์ที่ประวัติศาสตร์จดไว้','Meet or witness something history wrote down'),ok:S=>(S.fame26||0)>0},
 {k:'craft',w:2,n:X('ทำของสักชิ้นให้งามที่สุดในชีวิต','Make one thing as finely as you ever will'),ok:S=>!!(S.made26&&S.made26.q>=3)},
 {k:'master',w:2,c:S=>civ(S.ch)||S.ch===3,n:X('ไต่ขึ้นถึงขั้นสูงในอาชีพของคุณ','Rise high in your trade'),ok:S=>(S.clv||0)>=2},
 {k:'travel',w:2,n:X('ได้ไปอยู่ที่อื่นนอกจากบ้านเกิด','Live somewhere other than where you were born'),ok:S=>S.path.length>1},
 {k:'read',w:2,c:S=>lit29(S)&&S.cls!=='elite',n:X('อ่านออกเขียนได้','Learn to read and write'),ok:S=>(S.lit||0)>=30},
 {k:'respect',w:2,n:X('เป็นคนที่ทุกคนนับถือ','Become someone everyone respects'),ok:S=>(S.p||0)>=40||(S.rank||0)>=2},
 {k:'friends',w:2,c:S=>!civ(S.ch),n:X('มีเพื่อนในกลุ่มอื่นอย่างน้อยสามคน','Make at least three friends in other bands'),ok:S=>S.fr.length>=3},
 {k:'free',w:6,c:S=>S.cls==='slave',n:X('เป็นอิสระก่อนตาย','Be free before you die'),ok:S=>S.cls!=='slave'||!!S.freeNw},
 {k:'stars',w:2,n:X('อ่านท้องฟ้าได้แม่นทั้งกลุ่มดาว','Read a whole constellation without a mistake'),ok:S=>(S.starQ29||0)>=3},
 {k:'survive',w:2,c:S=>[16,18,24,26,28].includes(S.ch),n:X('รอดชีวิตจากวันที่บ้านเมืองถูกยึด','Survive the day your city falls'),ok:S=>!!(S.fall24||S.fallMg||S.fallNw||S.fall18||S.fall16)}];
function pickGoals29(S){const c=GOALS29.filter(g=>!g.c||g.c(S)),out=[];
  if(c.find(g=>g.k==='free'))out.push('free');
  while(out.length<2&&c.length>out.length){const g=weighted(c.filter(g=>!out.includes(g.k)).map(g=>[g,g.w]));out.push(g.k)}return out}
const goal29=k=>GOALS29.find(g=>g.k===k);
function goalsRow29(S){if(!S.goals29||!S.goals29.length)return null;return [esc(L(X('เป้าหมายชีวิต','Life goals'))),S.goals29.map(k=>'◇ '+esc(L(goal29(k).n))).join('<br>')]}
function goalsDone29(S){return (S.goals29||[]).map(k=>({k,ok:!!goal29(k).ok(S)}))}

/* ---------- 2. the book of lives (kept across lives in this browser) ---------- */
const MEETT29=()=>({4:MEETX,6:MEETX,8:MEETX,10:MEETX,12:MEETX,14:MEETX,16:typeof MEET16!=='undefined'?MEET16:{},18:typeof MEET18!=='undefined'?MEET18:{},20:typeof MEET20!=='undefined'?MEET20:{},22:typeof MEET22!=='undefined'?MEET22:{},24:MEET24,26:MEETMg,28:MEETNw});
const metOf29=S=>({16:S.met16,18:S.met18,20:S.met20,22:S.met22,24:S.met24,26:S.metMg,28:S.metNw}[S.ch])||S.metX||[];
const book29=()=>store.get('sit.book',{met:{},ach:{},lives:0,chaps:{},best:{},minis:{}});
function bookAdd29(S){if(TEST)return {fresh:[],ach:[]};const b=book29(),T=MEETT29()[S.ch]||{},fresh=[];
  b.lives=(b.lives||0)+1;b.chaps[S.chap]=(b.chaps[S.chap]||0)+1;
  for(const k of metOf29(S)){if(!T[k])continue;const id=S.ch+':'+k;if(!b.met[id]){b.met[id]=1;fresh.push(L(T[k]))}}
  if(S.made26&&S.made26.k)b.minis[S.made26.k]=Math.max(b.minis[S.made26.k]||0,S.made26.q||0);
  if(S.starQ29!=null)b.minis.stars=Math.max(b.minis.stars||0,S.starQ29);
  const got=[];for(const a of ACH29){if(b.ach[a.k])continue;try{if(a.ok(S,b)){b.ach[a.k]=Date.now();got.push(a)}}catch(e){}}
  store.set('sit.book',b);return {fresh,ach:got}}
function bookTotals29(){const T=MEETT29(),seen=new Set(),out={};for(const ch in T){const t=T[ch];if(seen.has(t))continue;seen.add(t);const ks=Object.keys(t);out[ch]=ks}return out}

/* ---------- 3. achievements ---------- */
const ACH29=[
 {k:'first',n:X('ชีวิตแรก','A first life'),d:X('ใช้ชีวิตจนจบหนึ่งชีวิต','Finish one life'),ok:(S,b)=>b.lives>=1},
 {k:'ten',n:X('สิบชีวิต','Ten lives'),d:X('ใช้ชีวิตจนจบสิบชีวิต','Finish ten lives'),ok:(S,b)=>b.lives>=10},
 {k:'sixty',n:X('ผู้อาวุโส','Elder'),d:X('มีชีวิตถึงอายุ 60 ปี','Live to 60'),ok:S=>S.age>=60},
 {k:'eighty',n:X('ผู้ที่ทุกคนมาฟัง','The one everyone comes to hear'),d:X('มีชีวิตถึงอายุ 80 ปี','Live to 80'),ok:S=>S.age>=80},
 {k:'kids5',n:X('บ้านที่เต็มไปด้วยเสียงเด็ก','A house full of children'),d:X('มีลูกห้าคนที่รอดถึงวัยผู้ใหญ่','Raise five children to adulthood'),ok:S=>kidsAdult29(S)>=5},
 {k:'goals',n:X('คนที่ทำได้ตามที่ตั้งใจ','Someone who did what they set out to'),d:X('ทำเป้าหมายชีวิตสำเร็จครบทั้งสองข้อ','Complete both life goals'),ok:S=>goalsDone29(S).length>=2&&goalsDone29(S).every(g=>g.ok)},
 {k:'gump3',n:X('อยู่ผิดที่ถูกเวลา','Wrong place, right time'),d:X('ได้พบหรือเป็นพยานของเหตุการณ์ดังสามครั้งในชีวิตเดียว','Witness three famous moments in one life'),ok:S=>(S.fame26||0)>=3},
 {k:'book10',n:X('นักสะสมเรื่องเล่า','Collector of stories'),d:X('มีคนดังและเหตุการณ์ในสมุดสะสม 10 อย่าง','Have 10 entries in the book of lives'),ok:(S,b)=>Object.keys(b.met).length>=10},
 {k:'book40',n:X('พยานของประวัติศาสตร์','A witness to history'),d:X('มีคนดังและเหตุการณ์ในสมุดสะสม 40 อย่าง','Have 40 entries in the book of lives'),ok:(S,b)=>Object.keys(b.met).length>=40},
 {k:'chaps5',n:X('นักเดินทางข้ามกาลเวลา','Traveller through time'),d:X('ใช้ชีวิตในห้าบทที่ต่างกัน','Live in five different chapters'),ok:(S,b)=>Object.keys(b.chaps).length>=5},
 {k:'chapsAll',n:X('ทุกยุคสมัย','Every age'),d:X('ใช้ชีวิตครบทุกบท','Live in every chapter'),ok:(S,b)=>Object.keys(CHAPS).every(c=>b.chaps[c])},
 {k:'fine',n:X('มือที่จำได้','Hands that remember'),d:X('ทำของได้งามที่สุดในมินิเกม','Get a perfect result in a hands-on minigame'),ok:S=>!!(S.made26&&S.made26.q>=3)},
 {k:'allmini',n:X('ช่างสารพัด','Jack of all crafts'),d:X('ได้ลองปั้นหม้อ เหลาหอก จุดไฟ และอ่านดาว','Try pottery, knapping, fire and stars'),ok:(S,b)=>['pot','knap','fire','stars'].every(k=>b.minis[k]!=null)},
 {k:'starmaster',n:X('ผู้อ่านฟ้า','Reader of the sky'),d:X('อ่านกลุ่มดาวได้ครบโดยไม่ผิด','Read a whole constellation without a mistake'),ok:S=>(S.starQ29||0)>=3},
 {k:'free',n:X('อิสรภาพ','Freedom'),d:X('เกิดเป็นทาสแล้วได้เป็นอิสระ','Be born enslaved and become free'),ok:S=>!!S.freeNw},
 {k:'fall',n:X('ผู้รอดชีวิต','Survivor'),d:X('รอดจากวันที่เมืองของคุณแตก','Survive the fall of your city'),ok:S=>!!(S.fall24||S.fallMg||S.fallNw)},
 {k:'top',n:X('สุดทางของอาชีพ','The top of the trade'),d:X('ไต่ถึงขั้นสูงสุดของอาชีพ','Reach the highest rank of a career'),ok:S=>(S.clv||0)>=3},
 {k:'short',n:X('ชีวิตที่สั้นที่สุด','The shortest life'),d:X('ชีวิตที่จบก่อนอายุหนึ่งขวบ เหมือนเด็กราวหนึ่งในสี่ในโลกก่อนยุคใหม่','A life that ends before age one, like about one child in four before modern times'),ok:S=>S.age<1}];
function toast29(a){try{toast29_(a)}catch(e){}}
function toast29_(a){if(TEST)return;try{SND.ui('fame')}catch(e){}
  let el=document.getElementById('toast29');if(!el){el=document.createElement('div');el.id='toast29';document.body.appendChild(el);
    const st=document.createElement('style');st.textContent='#toast29{position:fixed;left:50%;top:calc(env(safe-area-inset-top,0px) + 14px);transform:translate(-50%,-140%);z-index:90;background:var(--soot,#1b1511);border:1px solid var(--ember,#eba84b);color:var(--bone,#ede4d4);padding:10px 16px;border-radius:8px;box-shadow:0 8px 30px rgba(0,0,0,.6);transition:transform .45s cubic-bezier(.2,1.4,.4,1);max-width:min(90vw,420px);font-size:14px}#toast29.on{transform:translate(-50%,0)}#toast29 b{color:var(--ember,#eba84b);display:block;font-family:var(--display);font-size:16px}';document.head.appendChild(st)}
  el.innerHTML='<b>🏆 '+esc(L(a.n))+'</b>'+esc(L(a.d));el.classList.remove('on');void el.offsetWidth;el.classList.add('on');el.onclick=()=>el.classList.remove('on');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('on'),3800)}
function deathExtra29(S,res){try{deathExtra29_(S,res)}catch(e){}}
function deathExtra29_(S,res){const box=document.createElement('div');box.className='goal29';box.id='goal29';
  const g=goalsDone29(S);let h='<h2>'+esc(L(X('เป้าหมายชีวิต','Life goals')))+'</h2>';
  h+=g.map(x=>'<p>'+(x.ok?'✓ ':'✗ ')+esc(L(goal29(x.k).n))+'</p>').join('');
  if(res.fresh.length)h+='<p class="small"><b>'+esc(L(X('เพิ่มในสมุดสะสม: ','New in your book of lives: ')))+'</b>'+res.fresh.map(esc).join(', ')+'</p>';
  if(res.ach.length)h+='<p class="small"><b>'+esc(L(X('ความสำเร็จใหม่: ','New achievements: ')))+'</b>'+res.ach.map(a=>esc(L(a.n))).join(', ')+'</p>';
  box.innerHTML=h;const old=document.getElementById('goal29');if(old)old.remove();const ep=document.getElementById('dEpi');if(ep&&ep.parentNode)ep.parentNode.insertBefore(box,ep.nextSibling);
  if(!res.toasted){res.toasted=1;res.ach.forEach((a,i)=>setTimeout(()=>toast29(a),900+i*4200))}}
function bookHTML29(){const b=book29(),T=bookTotals29(),M=MEETT29();let got=0,all=0;const rows=[];
  const names={16:'chGrT',18:'chRoT',20:'chGaT',22:'chSuT',24:'chIsT',26:'chMoT',28:'chNwT'};
  for(const ch in T){const ks=T[ch];const have=ks.filter(k=>b.met[ch+':'+k]||[4,6,8,10,12,14].some(c=>b.met[c+':'+k]));got+=have.length;all+=ks.length;
    rows.push('<details><summary>'+esc(names[ch]?t(names[ch]).split(':')[0]:L(X('บท 04–09 อารยธรรมแรก','Chapters 04–09, the first civilisations')))+' · <b>'+have.length+'/'+ks.length+'</b></summary><p class="small">'+(have.length?have.map(k=>esc(L(M[ch][k]))).join(' · ')+'<br>':'')+esc(L(X('ยังไม่ได้พบอีก ','Still to find: ')))+(ks.length-have.length)+'</p></details>')}
  const ach=ACH29.map(a=>'<li class="'+(b.ach[a.k]?'on':'')+'"><b>'+(b.ach[a.k]?'🏆 ':'🔒 ')+esc(L(a.n))+'</b><span>'+esc(L(a.d))+'</span></li>').join('');
  return '<p class="note">'+esc(L(X('ชีวิตที่ใช้มาแล้ว ','Lives lived ')))+(b.lives||0)+' · '+esc(L(X('สมุดสะสม ','Book of lives ')))+got+'/'+all+' · '+esc(L(X('ความสำเร็จ ','Achievements ')))+Object.keys(b.ach).length+'/'+ACH29.length+'</p>'+rows.join('')+'<ul class="ach29">'+ach+'</ul>'}
function homeBook29(){try{homeBook29_()}catch(e){}}
function homeBook29_(){let sec=document.getElementById('book29');if(!sec){const past=document.getElementById('past');if(!past)return;sec=document.createElement('section');sec.className='block';sec.id='book29';past.closest('section').parentNode.insertBefore(sec,past.closest('section'));
    const st=document.createElement('style');st.textContent='#book29 details{border-bottom:1px solid var(--line);padding:6px 0}#book29 summary{cursor:pointer;font-size:14px}#book29 summary b{color:var(--ember)}.ach29{list-style:none;margin:8px 0 0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:6px}.ach29 li{background:var(--soot);border:1px solid var(--line);padding:6px 8px;font-size:12px;color:var(--ash);display:flex;flex-direction:column}.ach29 li.on{border-color:var(--ochre);color:var(--bone)}.ach29 li b{font-size:13px}#star29btn{margin-top:4px}';document.head.appendChild(st)}
  sec.innerHTML='<h2>'+esc(L(X('สมุดสะสมและความสำเร็จ','Book of lives and achievements')))+'</h2>'+bookHTML29()+'<button class="btn btn-ghost" id="star29btn">'+esc(L(X('✦ โหมดอ่านดาว','✦ Star reading mode')))+(book29().best.stars?' · '+esc(L(X('สถิติ ','best ')))+book29().best.stars:'')+'</button>';
  document.getElementById('star29btn').onclick=()=>{SND.unlock();starMode29()}}

/* ---------- 4. fewer repeats, fewer silent years ---------- */
const recent29=()=>new Set(store.get('sit.recent29',[]));
function noteRecent29(id){if(TEST)return;const a=store.get('sit.recent29',[]).filter(x=>x!==id);a.unshift(id);store.set('sit.recent29',a.slice(0,40))}
const PERS29=[
 {id:'p29_wed',a:[16,35],t:X('งานแต่งงานของเพื่อน','A friend’s wedding'),x:X('เพื่อนที่โตมาด้วยกันจะแต่งงาน และขอให้คุณเป็นคนช่วยเตรียมงาน ทั้งที่ปีนี้งานของคุณเองก็ล้นมือ','The friend you grew up with is getting married and asks you to help prepare, though your own work is piling up this year.'),
  o:[[X('ช่วยเต็มที่','Help with everything'),S=>{fx({so:3,b:3,f:-2});return X('คุณแทบไม่ได้นอนสามวัน แต่เพื่อนกอดคุณแน่นในวันงาน','You barely sleep for three days, but your friend holds you tight on the day.')}],[X('ช่วยเท่าที่ไหว','Help as much as you can'),S=>{fx({so:1,b:1});return X('งานผ่านไปด้วยดี และงานของคุณก็ไม่เสีย','The wedding goes well and so does your own work.')}]]},
 {id:'p29_parent',a:[24,50],t:X('พ่อแม่ที่แก่ลง','Parents growing old'),x:X('พ่อหรือแม่ของคุณเดินช้าลงทุกปี ลืมชื่อเพื่อนบ้าน และตื่นมาตอนกลางคืนเรียกหาคนที่ตายไปนานแล้ว','One of your parents walks more slowly each year, forgets the neighbours’ names, and wakes at night calling for people long dead.'),
  o:[[X('รับมาดูแลเอง','Take them in and care for them'),S=>{fx({b:4,f:-3,so:1});return X('บ้านแคบลง แต่เด็กๆ ได้ฟังเรื่องเล่าที่ไม่มีใครเล่าอีกแล้ว','The house feels smaller, but the children hear stories no one else tells any more.')}],[X('ให้พี่น้องคนอื่นดูแล','Let a sibling care for them'),S=>{fx({b:-2});return X('คุณไปเยี่ยมทุกเดือน และรู้สึกผิดทุกครั้งที่กลับ','You visit every month and feel guilty every time you leave.')}]]},
 {id:'p29_rival',a:[18,50],t:X('คนที่เก่งกว่าคุณ','Someone better than you'),x:X('คนรุ่นเดียวกันคนหนึ่งเก่งงานเดียวกับคุณ และทุกคนพูดถึงแต่เขา คืนนี้มีคนมาชวนคุณแข่งกับเขาต่อหน้าทุกคน','Someone your age does the same work you do, and everyone talks only about them. Tonight someone dares you to compete in front of everyone.'),
  o:[[X('รับคำท้า','Accept the challenge'),S=>{const sk=(ACTS[S.focus]&&ACTS[S.focus].sk)||'cr';if(S[sk]>=45||rnd()<.35){fx({p:4,b:3});return X('คุณชนะอย่างหวุดหวิด และเขาเป็นคนแรกที่มาจับมือคุณ','You win by a hair, and they are the first to shake your hand.')}fx({p:-2,cr:2});return X('คุณแพ้ แต่ได้เรียนรู้มากกว่าที่ฝึกมาทั้งปี','You lose, but learn more than in a year of practice.')}],[X('ขอเรียนจากเขา','Ask to learn from them'),S=>{fx({cr:3,so:2,p:-1});return X('เขาประหลาดใจ แล้วสอนให้โดยไม่ปิดบัง','They are surprised, then teach you without holding back.')}]]},
 {id:'p29_lost',a:[10,70],t:X('ของที่หายไป','Something lost'),x:X('ของชิ้นเดียวที่คุณได้จากแม่หายไประหว่างทางกลับบ้าน ฝนกำลังจะตก','The one thing you have from your mother is lost on the way home. Rain is coming.'),
  o:[[X('ย้อนกลับไปหา','Go back and search'),S=>{if(rnd()<.6){fx({b:3});return X('คุณพบมันในโคลนข้างทาง ก่อนฝนจะลงพอดี','You find it in the mud by the path, just before the rain.')}fx({h:-2,b:-2});return X('คุณหาจนมืดและเปียกโชก แต่ไม่พบ','You search until dark and soaked, and never find it.')}],[X('ปล่อยมันไป','Let it go'),S=>{fx({b:-1,kn:1});return X('คุณบอกตัวเองว่าสิ่งที่แม่ให้จริงๆ ไม่ได้อยู่ในของชิ้นนั้น','You tell yourself that what she really gave you was never in the thing.')}]]},
 {id:'p29_guest',a:[16,75],t:X('คนแปลกหน้ายามค่ำ','A stranger at dusk'),x:X('คนแปลกหน้าที่เหนื่อยล้ามาขอที่พักคืนหนึ่ง เขาพูดสำเนียงแปลกๆ และไม่ยอมบอกว่ามาจากไหน','A tired stranger asks for a place to sleep for one night. He speaks with an odd accent and will not say where he is from.'),
  o:[[X('ให้พักและแบ่งอาหาร','Give him a bed and food'),S=>{if(rnd()<.15){fx({f:-4,b:-2});return X('ตอนเช้าเขาหายไปพร้อมอาหารสำรองของบ้าน','In the morning he is gone, with the household’s spare food.')}fx({so:2,b:2,kn:1});return X('เขาเล่าเรื่องดินแดนไกลจนดึก ก่อนจากไปเขาทิ้งของขวัญเล็กๆ ไว้','He tells of faraway lands late into the night, and leaves a small gift when he goes.')}],[X('ปฏิเสธ','Turn him away'),S=>{fx({b:-1});return X('คืนนั้นฝนตกหนัก คุณนอนไม่ค่อยหลับ','It rains hard that night. You sleep badly.')}]]},
 {id:'p29_kidsick',a:[18,55],c:S=>S.kids.some(k=>k.dies==null&&S.age-k.born<12),t:X('ไข้ของลูก','A child’s fever'),x:X('ลูกคนเล็กตัวร้อนจัดมาสามวัน ไม่ยอมกินอะไรเลย คุณต้องตัดสินใจว่าจะทำอะไร','Your youngest has burned with fever for three days and will eat nothing. You have to decide what to do.'),
  o:[[X('อยู่เฝ้าทั้งคืน','Sit up with them all night'),S=>{fx({b:3,h:-2});return X('ไข้ลดลงตอนฟ้าสาง ลูกหลับในอ้อมแขนของคุณ','The fever breaks at dawn and the child sleeps in your arms.')}],[X('ไปตามหมอหรือผู้รู้','Fetch a healer'),S=>{fx({f:-2,b:2,so:1});return X('ผู้รู้ให้ยาขม และบอกให้ลูกดื่มน้ำมากๆ สองวันต่อมาลูกวิ่งเล่นได้','The healer gives a bitter drink and says to give plenty of water. Two days later the child is running about.')}]]},
 {id:'p29_kidfight',a:[25,60],c:S=>S.kids.filter(k=>k.dies==null).length>=2,t:X('ลูกทะเลาะกัน','Your children quarrel'),x:X('ลูกสองคนทะเลาะกันรุนแรงเรื่องที่คุณไม่เคยคิดว่าสำคัญ ทั้งคู่มาหาคุณให้ตัดสิน','Two of your children quarrel bitterly over something you never thought mattered. Both come to you to decide.'),
  o:[[X('ตัดสินให้คนที่ถูก','Side with the one who is right'),S=>{fx({p:1,b:-1});return X('คนหนึ่งยิ้ม อีกคนไม่พูดกับคุณไปหลายเดือน','One smiles. The other does not speak to you for months.')}],[X('ให้ทั้งคู่ไปคุยกันเอง','Make them settle it themselves'),S=>{fx({so:2,b:1});return X('ทั้งคู่ไม่พอใจคุณ แต่กลับมาคืนดีกันเองในที่สุด','Both are cross with you, but they make peace in the end.')}]]},
 {id:'p29_teach',a:[32,80],t:X('เด็กที่อยากเรียน','A youngster who wants to learn'),x:X('เด็กคนหนึ่งในละแวกนี้มาด้อมๆ มองๆ ดูคุณทำงานทุกวัน วันนี้เขากล้าเดินเข้ามาถามว่าขอเรียนด้วยได้ไหม','A child from nearby has watched you work every day. Today they finally come and ask if they can learn.'),
  o:[[X('สอนให้','Teach them'),S=>{fx({so:3,b:3,p:2});return X('สิบปีต่อมา เด็กคนนั้นเก่งกว่าคุณ และบอกทุกคนว่าเรียนจากใคร','Ten years later the child is better than you, and tells everyone who taught them.')}],[X('บอกให้รอโตกว่านี้','Tell them to wait until they are older'),S=>{fx({b:-1});return X('เด็กไม่กลับมาอีก คุณเห็นเขาฝึกกับคนอื่น','The child never comes back. You see them learning from someone else.')}]]},
 {id:'p29_spouse',a:[22,60],c:S=>S.partner,t:X('คืนที่ทะเลาะกัน','The night of the quarrel'),x:X('คุณกับคู่ชีวิตทะเลาะกันรุนแรงเรื่องเดิมที่ไม่เคยจบ คืนนี้คนหนึ่งต้องพูดก่อน','You and your partner quarrel bitterly about the old thing that never ends. Tonight one of you has to speak first.'),
  o:[[X('เป็นฝ่ายขอโทษก่อน','Apologise first'),S=>{fx({b:4});return X('คู่ของคุณนิ่งไปนาน แล้วจับมือคุณ','Your partner is quiet a long time, then takes your hand.')}],[X('รอให้อีกฝ่ายพูดก่อน','Wait for them to speak'),S=>{fx({b:-3});return X('ทั้งบ้านเงียบไปสามวัน','The whole house is silent for three days.')}]]},
 {id:'p29_lend',a:[18,70],t:X('เพื่อนขอยืม','A friend asks to borrow'),x:X('เพื่อนบ้านที่เคยช่วยคุณมาก่อนขอยืมอาหารสำรองของบ้าน บอกว่าจะคืนหลังเก็บเกี่ยว แต่ปีนี้ทุกบ้านก็ไม่ค่อยมี','A neighbour who once helped you asks to borrow your spare food until the harvest. But no one has much this year.'),
  o:[[X('ให้ยืม','Lend it'),S=>{fx({f:-5,so:3});if(rnd()<.7){S.lend29=1;return X('หลังเก็บเกี่ยว เขาคืนมาเกินกว่าที่ยืมไป','After the harvest, they return more than they borrowed.')}return X('เขาคืนไม่ได้ แต่ในปีที่คุณลำบาก เขาเป็นคนแรกที่มาช่วย','They cannot pay it back, but in your own bad year they are the first to help.')}],[X('ปฏิเสธอย่างสุภาพ','Refuse politely'),S=>{fx({so:-2});return X('เขาเข้าใจ แต่ไม่ค่อยแวะมาอีก','They understand, but rarely stop by again.')}]]},
 {id:'p29_dream',a:[12,70],t:X('ความฝันที่กลับมา','The dream that returns'),x:X('คุณฝันเรื่องเดิมมาสามคืน เห็นทางที่ไม่เคยเดิน และใครบางคนยืนรออยู่ปลายทาง','For three nights you dream the same dream: a path you have never walked, and someone waiting at the end of it.'),
  o:[[X('เล่าให้ผู้อาวุโสฟัง','Tell an elder'),S=>{fx({so:1,kn:1});return X('ผู้อาวุโสฟังจบแล้วพยักหน้า บอกว่าความฝันเรื่องนี้ ย่าของคุณก็เคยฝัน','The elder listens and nods. Your grandmother, they say, dreamt the same.')}],[X('เก็บไว้คนเดียว','Keep it to yourself'),S=>{fx({b:1});return X('คืนที่สี่ ความฝันไม่มาอีก คุณรู้สึกโหวงอย่างประหลาด','On the fourth night the dream does not come. You feel strangely empty.')}]]},
 {id:'p29_storm',a:[18,70],t:X('หลังพายุ','After the storm'),x:X('พายุเมื่อคืนพังหลังคาบ้านคุณไปครึ่งหนึ่ง บ้านข้างๆ ก็เสียหายหนักกว่านั้น','Last night’s storm tore off half your roof. The house next door fared worse.'),
  o:[[X('ซ่อมบ้านตัวเองก่อน','Fix your own house first'),S=>{fx({sv:2,f:-1});return X('หลังคาเสร็จก่อนฝนลูกถัดไป พอดี','The roof is done just before the next rain.')}],[X('ช่วยบ้านข้างๆ ก่อน','Help next door first'),S=>{fx({so:3,b:2,h:-2});return X('คืนนั้นคุณนอนเปียก แต่วันรุ่งขึ้นทั้งละแวกมาช่วยซ่อมบ้านคุณ','You sleep wet that night, but the next day the whole street comes to fix your house.')}]]},
 {id:'p29_feast',a:[25,75],c:S=>S.settled,t:X('งานเลี้ยงของคุณ','Your feast'),x:X('ปีนี้ผลผลิตดี คุณมีพอจะเลี้ยงเพื่อนบ้านทั้งละแวกสักมื้อ แต่ก็อาจเก็บไว้เผื่อปีหน้า','A good year: you have enough to feed the whole neighbourhood once, or to save for next year.'),
  o:[[X('จัดงานเลี้ยง','Hold the feast'),S=>{fx({f:-6,so:4,p:3,b:3});return X('เสียงหัวเราะดังจนดึก คนพูดถึงงานนี้ไปอีกหลายปี','Laughter until late. People talk about it for years.')}],[X('เก็บไว้','Save it'),S=>{fx({f:4});return X('ปีถัดมาฝนแล้ง คุณดีใจที่เก็บไว้','The next year is dry. You are glad you saved it.')}]]},
 {id:'p29_oldfriend',a:[30,80],t:X('เพื่อนเก่ากลับมา','An old friend returns'),x:X('เพื่อนที่จากไปตั้งแต่ยังหนุ่มสาวกลับมาเยี่ยม ผมหงอกทั้งคู่ เขาจำคุณได้ก่อนคุณจะจำเขาได้','A friend who left in your youth comes back to visit. Both of you are grey. They recognise you before you recognise them.'),
  o:[[X('นั่งคุยกันทั้งคืน','Talk all night'),S=>{fx({b:5,so:2});return X('คุณหัวเราะเรื่องเดิมๆ จนน้ำตาไหล','You laugh at the old stories until you cry.')}],[X('ถามว่าที่ที่เขาไปเป็นอย่างไร','Ask what the world out there is like'),S=>{fx({kn:3,b:2});return X('เรื่องของเขาทำให้คุณอยากออกเดินทาง ทั้งที่ข้อเข่าไม่ยอมแล้ว','Their stories make you long to travel, though your knees will not allow it.')}]]},
 {id:'p29_grief',a:[25,85],t:X('การจากไปของเพื่อน','A friend’s death'),x:X('เพื่อนที่ใกล้ชิดที่สุดคนหนึ่งเสียชีวิตอย่างกะทันหัน คุณไม่ได้บอกลา','One of your closest friends dies suddenly. You never said goodbye.'),
  o:[[X('ดูแลครอบครัวของเขา','Look after their family'),S=>{fx({so:3,b:1,f:-2});return X('ลูกของเขาเรียกคุณว่าลุงหรือป้าไปจนโต','Their children call you aunt or uncle as they grow up.')}],[X('ใช้เวลาอยู่คนเดียว','Spend time alone'),S=>{fx({b:-2,kn:1});return X('คุณเดินไปที่ที่เคยไปด้วยกันทุกเย็นจนจบฤดู','Every evening until the season ends, you walk to the place you used to go together.')}]]},
 {id:'p29_secret',a:[14,70],t:X('สิ่งที่ได้ยินโดยบังเอิญ','Something overheard'),x:X('คุณได้ยินคนสองคนคุยกันว่าจะโกงคนที่คุณรู้จัก เขาไม่รู้ว่าคุณได้ยิน','You overhear two people planning to cheat someone you know. They don’t know you heard.'),
  o:[[X('เตือนคนที่จะถูกโกง','Warn the person'),S=>{fx({so:2,p:1});if(rnd()<.25){fx({so:-3});return X('คนโกงรู้ว่าใครพูด และหาเรื่องคุณไปอีกนาน','The cheats find out who talked and make trouble for you for a long time.')}return X('เขาขอบคุณคุณ และไม่เคยลืม','They thank you and never forget it.')}],[X('ไม่ยุ่ง','Stay out of it'),S=>{fx({b:-1});return X('เรื่องเกิดขึ้นอย่างที่คุณได้ยิน คุณไม่เคยบอกใคร','It happens just as you heard. You never tell anyone.')}]]}];
PERS29.forEach(p=>{p.x=p.x;p.o=p.o.map(z=>Array.isArray(z)?opt(z[0],z[1]):z)});
function pers29(a){if(!S||S.age<14)return null;const rc=recent29();
  let c=PERS29.filter(p=>!S.done[p.id]&&a>=p.a[0]&&a<=p.a[1]&&(!p.c||p.c(S)));if(!c.length)return null;
  const fresh=c.filter(p=>!rc.has(p.id));if(fresh.length)c=fresh;const p=pick(c);noteRecent29(p.id);return p}

/* ---------- 5. hands-on minigames ---------- */
const MGT29={
 pot:{n:X('ปั้นหม้อ','Shape a pot'),h:X('กดค้างเพื่อดึงดินขึ้น ปล่อยเมื่อถึงเส้นประ ทำสามครั้ง: ความสูง ความป่อง และปากหม้อ','Hold to draw the clay up; let go at the dotted line. Three times: height, belly, rim.')},
 knap:{n:X('เหลาหัวหอกหิน','Knap a spear point'),h:X('แตะตอนวงแหวนหดเข้าพอดีกับจุดบนขอบหิน แต่ละครั้งสะเก็ดหินจะกระเด็นออก','Tap as each ring closes on its mark on the stone. Every good strike sends a flake flying.')},
 fire:{n:X('จุดไฟด้วยไม้สีไฟ','Make fire with a hand drill'),h:X('แตะสลับซ้าย–ขวาให้เร็วเพื่อปั่นไม้ (หรือกด A / D) จนเกิดถ่านแดง แล้วแตะเป่าตอนถ่านสว่างที่สุด','Tap left and right in turn to spin the drill (or press A / D) until an ember forms, then tap to blow when it glows brightest.')},
 stars:{n:X('อ่านดาว','Read the stars'),h:X('จำรูปกลุ่มดาวที่ปรากฏ แล้วแตะดาวตามลำดับเส้น','Remember the shape, then tap its stars in order along the line.')}};
const CONST29={
 dipper:{n:X('ดาวจระเข้ (กลุ่มดาวหมีใหญ่)','The Crocodile (the Big Dipper)'),p:[[40,40],[70,46],[96,58],[118,72],[124,104],[160,108],[166,78]],
  f:X('คนไทยเรียกกลุ่มดาวนี้ว่าดาวจระเข้ ชาวยุโรปเรียกว่ากระบวยใหญ่ ส่วนจีนเรียกว่ากระบวยเหนือ ดาวสองดวงปลายกระบวยชี้ไปหาขั้วฟ้าเหนือ แต่ดาวที่อยู่ใกล้ขั้วฟ้าเปลี่ยนไปตามยุค เพราะแกนโลกส่ายช้าๆ รอบละราว 26,000 ปี','Thais call this the Crocodile, Europeans the Big Dipper or Plough, the Chinese the Northern Ladle. Its last two stars point toward the north celestial pole, though which star sits near the pole changes over the ages, because Earth’s axis wobbles once every 26,000 years.')},
 orion:{n:X('กลุ่มดาวนายพราน (ดาวไถ)','Orion (the Thai Plough)'),p:[[60,30],[150,36],[96,80],[110,84],[124,88],[70,140],[156,134]],
  f:X('ดาวสามดวงเรียงกันกลางกลุ่มดาวนายพรานกับดาวที่ห้อยลงมาใต้มัน คือที่คนไทยเรียกว่าดาวไถ เพราะดูคล้ายคันไถ ดาวสีแดงที่ไหล่คือบีเทลจุส ดาวยักษ์แดงที่สักวันจะระเบิดเป็นซูเปอร์โนวา','The three stars in a row across Orion, with the line hanging below them, are what Thais call the Plough, for their shape. The red star at the shoulder is Betelgeuse, a red supergiant that will one day explode as a supernova.')},
 pleiades:{n:X('ดาวลูกไก่ (มาตาริกิ)','The Pleiades (Matariki)'),p:[[90,60],[112,52],[130,64],[120,84],[100,90],[80,80],[104,70]],
  f:X('ดาวลูกไก่เป็นกระจุกดาวที่คนแทบทุกวัฒนธรรมมีชื่อเรียก ชาวเมารีเรียกว่ามาตาริกิ และการขึ้นของมันก่อนรุ่งเช้าคือปีใหม่ คนไทยมีนิทานแม่ไก่กับลูกเจ็ดตัวที่กระโดดเข้ากองไฟตามแม่ ✦','Nearly every culture has a name for the Pleiades. Māori call it Matariki, and its pre-dawn rising marks the new year. Thais tell of a mother hen and her chicks who leapt into the fire after her ✦')},
 scorpius:{n:X('กลุ่มดาวแมงป่อง (เบ็ดของเมาอิ)','Scorpius (Maui’s fishhook)'),p:[[40,40],[58,52],[74,64],[90,80],[104,100],[124,114],[150,112],[166,96],[160,80]],
  f:X('ชาวฮาวายเห็นกลุ่มดาวนี้เป็นเบ็ดตกปลาของเทพเมาอิ ที่ใช้ตกเกาะขึ้นมาจากทะเล นักเดินเรือโพลินีเซียจำจุดขึ้นและตกของดาวหลายร้อยดวงบนขอบฟ้า และใช้เป็นเข็มทิศ ✦','Hawaiians saw this as the fishhook of the demigod Maui, who used it to haul islands from the sea. Polynesian navigators memorised where hundreds of stars rise and set on the horizon and used them as a compass ✦')},
 cross:{n:X('กลุ่มดาวกางเขนใต้','The Southern Cross'),p:[[100,30],[100,120],[66,76],[136,70],[118,96]],
  f:X('กางเขนใต้เห็นชัดจากซีกโลกใต้ จากประเทศไทยก็เห็นได้ ต่ำบนขอบฟ้าทิศใต้ แกนยาวของมันชี้ไปทางขั้วฟ้าใต้ ชาวอะบอริจินหลายกลุ่มเห็นนกอีมูบนฟ้า ที่เกิดจากแถบมืดในทางช้างเผือก หัวของมันคือเงามืดข้างกางเขนใต้','The Southern Cross is best seen from the southern hemisphere, though from Thailand it can be seen low in the south. Its long arm points toward the south celestial pole. Many Aboriginal peoples see an Emu in the Sky traced by dark lanes in the Milky Way; its head is the dark patch beside the Cross.')}};
function constFor29(S){const r=S&&S.rg;if(S&&(S.ch===5||PAC.includes(r)))return pick(['pleiades','scorpius']);if(S&&['sah','saf','kuk','jav','flo','cuz','pts'].includes(r))return pick(['cross','orion','pleiades']);return pick(['dipper','orion','pleiades','scorpius'])}
function mg29(kind,opt0){return new Promise(res=>{const K=MGT29[kind];
  if(!document.getElementById('mg29css')){const st=document.createElement('style');st.id='mg29css';st.textContent=
   '#mg29{position:fixed;inset:0;background:rgba(5,3,2,.72);display:flex;align-items:center;justify-content:center;z-index:85;touch-action:none;user-select:none;-webkit-user-select:none}'+
   '#mg29 .b{background:var(--soot,#1b1511);border:2px solid var(--line,#3b3028);border-radius:12px;width:min(560px,calc(100% - 24px));padding:14px 14px 12px;text-align:center;box-shadow:0 12px 50px rgba(0,0,0,.7)}'+
   '#mg29 h3{font-family:var(--display);font-size:21px;margin:0 0 2px;color:var(--bone)}#mg29 .h{font-size:13px;color:var(--ash);margin:0 0 8px}'+
   '#mg29 canvas{width:100%;aspect-ratio:16/10;display:block;border-radius:8px;image-rendering:pixelated;background:#0b0907;touch-action:none}'+
   '#mg29 .r{font-size:15px;min-height:22px;margin-top:8px;color:var(--bone)}#mg29 .t{height:4px;background:#3a2e25;border-radius:2px;margin-top:8px;overflow:hidden}#mg29 .t i{display:block;height:100%;background:var(--ember,#eba84b);width:100%}'+
   '#mg29 .x{margin-top:10px;display:flex;gap:8px;justify-content:center}#mg29 .x button{border:0;border-radius:8px;padding:10px 20px;font-size:15px;background:var(--ochre,#c9623a);color:#fff}#mg29 .x button.g{background:#3a2e25;color:var(--bone)}'+
   '#mg29.shake .b{animation:sh29 .25s}@keyframes sh29{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}';document.head.appendChild(st)}
  const ov=document.createElement('div');ov.id='mg29';ov.innerHTML='<div class="b"><h3></h3><p class="h"></p><canvas width="320" height="200"></canvas><div class="t"><i></i></div><div class="r"></div><div class="x"></div></div>';document.body.appendChild(ov);
  const q=s=>ov.querySelector(s),cv=q('canvas'),c=cv.getContext('2d');q('h3').textContent=L(K.n)+(opt0&&opt0.round?' · '+L(X('รอบที่ ','round '))+opt0.round:'');q('.h').textContent=L(K.h);
  const W=320,H=200,st={t:0,done:false,parts:[],score:0,msg:'',kind},TL=kind==='fire'?14:kind==='stars'?14:12;
  const shake=()=>{ov.classList.remove('shake');void ov.offsetWidth;ov.classList.add('shake')};
  const burst=(x,y,col,n,sp)=>{for(let i=0;i<(n||10);i++){const a=Math.random()*Math.PI*2,v=(sp||60)*(.4+Math.random());st.parts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-30,l:.6+Math.random()*.5,c:col})}};
  const say=m=>{q('.r').textContent=m};
  const G=GAME29[kind];G.init(st,opt0||{});
  let last=performance.now();
  function fin(){if(st.done)return;st.done=true;cleanup();const sc=clamp(Math.round(st.score),0,3);if(sc===3)SND.ui('ching');
    say(st.msg||L(sc===3?X('สมบูรณ์แบบ','Perfect'):sc===2?X('ดีมาก','Very good'):sc===1?X('พอใช้','Not bad'):X('ไม่สำเร็จ ลองใหม่ครั้งหน้า','Not this time')));
    if(opt0&&opt0.arcade){q('.x').innerHTML='';const b1=document.createElement('button');b1.textContent=L(X('ต่อ','Next'));const b2=document.createElement('button');b2.className='g';b2.textContent=L(X('ปิด','Close'));
      q('.x').append(b1,b2);b1.onclick=()=>{ov.remove();res({q:sc,next:1,st})};b2.onclick=()=>{ov.remove();res({q:sc,next:0,st})}}
    else setTimeout(()=>{ov.remove();res(sc)},1600)}
  const pos=e=>{const r=cv.getBoundingClientRect();return [(e.clientX-r.left)/r.width*W,(e.clientY-r.top)/r.height*H]};
  const down=e=>{e.preventDefault();if(st.done)return;SND.unlock();const[x,y]=pos(e);G.down(st,x,y,{burst,shake,say,fin})};
  const up=e=>{if(st.done)return;G.up&&G.up(st,{burst,shake,say,fin})};
  const key=e=>{if(st.done)return;if([' ','Enter','a','d','A','D','ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();e.stopPropagation();if(e.repeat)return;G.key?G.key(st,e.key,{burst,shake,say,fin}):G.down(st,W/2,H/2,{burst,shake,say,fin})}else if(/^[0-9]$/.test(e.key)){e.preventDefault();e.stopPropagation()}};
  const keyup=e=>{if(st.done)return;if([' ','Enter'].includes(e.key)&&G.up)G.up(st,{burst,shake,say,fin})};
  cv.addEventListener('pointerdown',down);window.addEventListener('pointerup',up);window.addEventListener('keydown',key,true);window.addEventListener('keyup',keyup,true);
  function cleanup(){window.removeEventListener('pointerup',up);window.removeEventListener('keydown',key,true);window.removeEventListener('keyup',keyup,true)}
  function frame(tn){if(!ov.isConnected)return;const dt=Math.min(.05,(tn-last)/1000);last=tn;if(!st.done){st.t+=dt;G.update(st,dt,{burst,shake,say,fin});if(st.t>=TL&&!st.done){G.timeout&&G.timeout(st);fin()}}
    q('.t i').style.width=Math.max(0,100-st.t/TL*100)+'%';
    c.setTransform(1,0,0,1,0,0);G.draw(c,st,W,H);
    for(const p of st.parts){p.l-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=160*dt;if(p.l>0){c.globalAlpha=Math.min(1,p.l*2);c.fillStyle=p.c;c.fillRect(p.x|0,p.y|0,2,2)}}c.globalAlpha=1;st.parts=st.parts.filter(p=>p.l>0);
    requestAnimationFrame(frame)}
  requestAnimationFrame(frame);
  if(auto&&!(opt0&&opt0.arcade)){setTimeout(()=>{if(st.done)return;st.score=weighted([[1,.3],[2,.45],[3,.25]]);if(kind==='stars')st.starQ=st.score;fin()},1200)}})}
const GAME29={
 /* the wheel: hold to raise the clay, let go at the line */
 pot:{init(st){st.stage=0;st.h=20;st.belly=.5;st.rim=0;st.hold=false;st.tg=[70+Math.random()*30,.7+Math.random()*.25,.5+Math.random()*.4];st.rot=0;st.sc=[];st.wob=0},
  down(st){st.hold=true},up(st,fx){if(!st.hold)return;st.hold=false;const v=[st.h,st.belly,st.rim][st.stage],tg=st.tg[st.stage],err=Math.abs(v-tg)/(st.stage===0?tg:1);
    const good=err<(st.stage===0?.06:.08),ok=err<(st.stage===0?.14:.18);st.sc.push(good?1:ok?.6:0);
    if(good){SND.ui('hit');fx.burst(160,120,'#e8c89a',14,50);fx.say(L(X('พอดีเป๊ะ!','Spot on!')))}else if(ok){SND.ui('hit');fx.say(L(X('ใกล้แล้ว','Close')))}else{SND.ui('miss');fx.shake();st.wob=1;fx.say(L(X('ดินเบี้ยว','The clay sags')))}
    st.stage++;if(st.stage>=3){st.score=st.sc.reduce((a,b)=>a+b,0);setTimeout(fx.fin,500)}},
  update(st,dt){st.rot+=dt*9;st.wob=Math.max(0,st.wob-dt*1.5);if(!st.hold||st.stage>2)return;
    if(st.stage===0)st.h=Math.min(130,st.h+dt*55);else if(st.stage===1)st.belly=Math.min(1.3,st.belly+dt*.42);else st.rim=Math.min(1.2,st.rim+dt*.5)},
  draw(c,st,W,H){c.fillStyle='#1a120c';c.fillRect(0,0,W,H);c.fillStyle='#2a1c12';c.fillRect(0,H-40,W,40);
    const cx=160,by=H-46;c.fillStyle='#5a3a22';c.fillRect(cx-70,by,140,8);c.fillStyle='#3a2414';c.fillRect(cx-60,by+8,120,6);
    for(let i=0;i<6;i++){const a=st.rot+i;c.fillStyle='rgba(255,255,255,.08)';c.fillRect(cx+Math.cos(a)*60-1,by+2,3,3)}
    const h=st.h,wob=Math.sin(st.t*30)*st.wob*4;
    for(let y=0;y<h;y++){const t=y/h,bw=22+Math.sin(Math.min(1,t*1.2)*Math.PI)*st.belly*26,nk=t>.8?(1-(t-.8)/.2*(.5-st.rim*.25)):1,w=Math.max(8,bw*nk);
      const sh=.55+.45*Math.sin(st.rot*2+y*.15);c.fillStyle='rgb('+(150*sh+40|0)+','+(88*sh+24|0)+','+(52*sh+14|0)+')';c.fillRect(cx-w+wob*t,by-y,w*2,1)}
    c.fillStyle='#7a4a2a';c.fillRect(cx-10,by-h-2,20,3);
    if(st.stage<3){c.strokeStyle='rgba(240,220,150,.85)';c.setLineDash([4,4]);c.beginPath();
      if(st.stage===0){c.moveTo(cx-80,by-st.tg[0]);c.lineTo(cx+80,by-st.tg[0])}else{const ww=22+st.tg[1]*26;c.moveTo(cx+ww,by-10);c.lineTo(cx+ww,by-h+10);c.moveTo(cx-ww,by-10);c.lineTo(cx-ww,by-h+10)}
      if(st.stage===2){const ww=Math.max(8,(22)*(1-(.5-st.tg[2]*.25)));c.moveTo(cx-ww-14,by-h);c.lineTo(cx-ww,by-h);c.moveTo(cx+ww,by-h);c.lineTo(cx+ww+14,by-h)}c.stroke();c.setLineDash([])}
    /* hands */c.fillStyle=st.hold?'#d8a070':'#b88458';c.fillRect(cx-58-(st.hold?0:6),by-h*.5,14,12);c.fillRect(cx+44+(st.hold?0:6),by-h*.5,14,12);
    c.fillStyle='#f0e0c0';c.font='12px sans-serif';c.textAlign='left';c.fillText(['① '+L(X('ความสูง','height')),'② '+L(X('ความป่อง','belly')),'③ '+L(X('ปากหม้อ','rim')),'✓'][Math.min(3,st.stage)],10,18)}},
 /* knapping: rings close on marks around the stone */
 knap:{init(st){st.marks=[];const n=6;for(let i=0;i<n;i++){const side=i%2?1:-1,t=.15+Math.floor(i/2)*.3;st.marks.push({x:160+side*(56-t*40),y:56+t*110,t0:.7+i*1.35,hit:null})}st.chips=[];st.sc=0},
  down(st,x,y,fx){const m=st.marks.find(m=>m.hit==null&&st.t>=m.t0-.9&&st.t<=m.t0+.35);if(!m){SND.ui('miss');fx.shake();return}
    const d=Math.abs(st.t-m.t0);if(d<.12){m.hit=2;st.sc+=1;SND.ui('hit');fx.burst(m.x,m.y,'#d8d0c4',16,90);fx.say(L(X('สะเก็ดสวย!','A clean flake!')))}else if(d<.28){m.hit=1;st.sc+=.55;SND.ui('hit');fx.burst(m.x,m.y,'#b8b0a4',8,60);fx.say(L(X('ใช้ได้','Good')))}else{m.hit=0;SND.ui('miss');fx.shake();fx.say(L(X('หินบิ่น','The stone chips badly')))}
    st.chips.push({x:m.x,y:m.y,s:m.hit});if(st.marks.every(m=>m.hit!=null)){st.score=st.sc/2;setTimeout(fx.fin,500)}},
  update(st,dt,fx){for(const m of st.marks)if(m.hit==null&&st.t>m.t0+.35){m.hit=0;fx.say(L(X('ช้าไป','Too late')))}if(st.marks.every(m=>m.hit!=null)&&!st.done&&!st.fz){st.fz=1;st.score=st.sc/2;setTimeout(fx.fin,500)}},
  draw(c,st,W,H){c.fillStyle='#1c1814';c.fillRect(0,0,W,H);c.fillStyle='#3a3026';c.fillRect(0,H-30,W,30);
    const cut=st.chips.reduce((a,ch)=>a+(ch.s||0),0)/12;c.fillStyle='#8a8478';c.beginPath();c.moveTo(160,30);for(let i=0;i<=20;i++){const t=i/20,w=(1-t*.1)*(60-cut*28)*Math.sin(Math.min(1,t*1.6+.1)*Math.PI*.5+.2);c.lineTo(160+w,40+t*140)}for(let i=20;i>=0;i--){const t=i/20,w=(1-t*.1)*(60-cut*28)*Math.sin(Math.min(1,t*1.6+.1)*Math.PI*.5+.2);c.lineTo(160-w,40+t*140)}c.closePath();c.fill();
    c.fillStyle='#a8a296';for(const ch of st.chips){if(ch.s){c.beginPath();c.arc(ch.x+(ch.x<160?6:-6),ch.y,6+ch.s*2,0,7);c.fill()}}
    c.strokeStyle='rgba(255,255,255,.12)';c.beginPath();c.moveTo(160,34);c.lineTo(160,176);c.stroke();
    for(const m of st.marks){if(m.hit!=null)continue;const dt=m.t0-st.t;if(dt>1.2)continue;c.fillStyle='rgba(235,168,75,.9)';c.fillRect(m.x-2,m.y-2,4,4);
      const r=Math.max(3,4+dt*40);c.strokeStyle=dt<.12&&dt>-.12?'#86e06d':'rgba(235,168,75,.9)';c.lineWidth=2;c.beginPath();c.arc(m.x,m.y,r,0,7);c.stroke();c.lineWidth=1}
    /* hammerstone in hand */const hx=st.t%1<.15?230:240;c.fillStyle='#6a5a48';c.beginPath();c.arc(hx,110,14,0,7);c.fill();c.fillStyle='#c89068';c.fillRect(hx+6,104,20,16)}},
 /* fire: alternate taps spin the drill, then blow on the ember */
 fire:{init(st){st.heat=0;st.lastSide=0;st.spin=0;st.phase=0;st.blows=0;st.flame=0;st.pulse=0},
  key(st,k,fx){const side=(k==='a'||k==='A'||k==='ArrowLeft')?-1:(k==='d'||k==='D'||k==='ArrowRight')?1:0;if(side)this.press(st,side,fx);else this.press(st,0,fx)},
  down(st,x,y,fx){this.press(st,st.phase===0?(x<160?-1:1):0,fx)},
  press(st,side,fx){if(st.phase===0){if(side&&side!==st.lastSide){st.heat=Math.min(1,st.heat+.045);st.spin+=side;st.lastSide=side;if(Math.random()<.4)fx.burst(160,150,'#5a5048',2,20)}else if(side){st.heat=Math.max(0,st.heat-.02)}
      if(st.heat>=1){st.phase=1;st.tEmber=st.t;SND.ui('ting');fx.say(L(X('มีถ่านแดงแล้ว! เป่าตอนมันสว่างที่สุด','An ember! Blow when it glows brightest')))}}
    else if(st.phase===1){const br=.5+.5*Math.sin(st.pulse);if(br>.75){st.blows++;st.flame+=1;SND.ui('hit');fx.burst(160,150,'#f0a040',14,70);if(st.blows>=3){st.phase=2;st.score=st.t<9?3:st.t<11.5?2.4:2;fx.say(L(X('ไฟติดแล้ว!','Fire!')));setTimeout(fx.fin,900)}}else{st.flame=Math.max(0,st.flame-.5);SND.ui('miss');fx.say(L(X('เป่าแรงไป ถ่านเกือบดับ','Too soon — the ember nearly dies')))}}},
  timeout(st){if(st.phase===0)st.score=st.heat>.7?.6:0;else if(st.phase===1)st.score=1+st.blows*.3},
  update(st,dt,fx){if(st.phase===0)st.heat=Math.max(0,st.heat-dt*.09);if(st.phase>=1)st.pulse+=dt*3.2;if(st.heat>.4&&Math.random()<st.heat*.3)fx.burst(160+Math.random()*6-3,148,'rgba(150,140,130,.6)',1,15)},
  draw(c,st,W,H){c.fillStyle='#0e0b09';c.fillRect(0,0,W,H);c.fillStyle='#2a1e14';c.fillRect(0,H-46,W,46);c.fillStyle='#6a4a2a';c.fillRect(90,H-56,140,10);
    const sp=st.spin%2;c.fillStyle='#8a6a40';c.fillRect(157,40,6,110);c.fillStyle='#c89068';c.fillRect(140+sp*4,70,16,12);c.fillRect(164-sp*4,90,16,12);
    c.fillStyle='rgba(255,'+(120+st.heat*100|0)+',40,'+(st.heat*.9).toFixed(2)+')';c.beginPath();c.arc(160,150,4+st.heat*6,0,7);c.fill();
    if(st.phase>=1){const br=.5+.5*Math.sin(st.pulse);c.fillStyle='rgba(255,'+(140+br*100|0)+',60,'+(.4+br*.6).toFixed(2)+')';c.beginPath();c.arc(160,150,8+br*6+st.flame*3,0,7);c.fill();
      if(br>.75){c.strokeStyle='#fff3c0';c.beginPath();c.arc(160,150,18+br*4,0,7);c.stroke()}}
    if(st.flame>0){for(let i=0;i<st.flame*6;i++){const h=10+Math.random()*st.flame*14;c.fillStyle=i%2?'#f0a040':'#e05a2a';c.fillRect(150+Math.random()*20,150-h,3,h)}}
    c.fillStyle='rgba(255,255,255,.5)';c.font='11px sans-serif';c.textAlign='center';if(st.phase===0){c.fillText('◀ A',40,100);c.fillText('D ▶',280,100)}
    c.fillStyle='#3a2e25';c.fillRect(20,H-16,280,6);c.fillStyle=st.phase?'#86e06d':'#eba84b';c.fillRect(20,H-16,280*st.heat,6)}},
 /* stars: remember the pattern, then tap it in order */
 stars:{init(st,o){const k=o.cons||constFor29(S);st.cn=k;const C=CONST29[k];const sx=50+Math.random()*60,sy=10+Math.random()*20,sc=.75+Math.random()*.15;
    st.pts=C.p.map(([x,y])=>({x:sx+x*sc,y:sy+y*sc}));st.bg=[];const r=srng((Math.random()*1e9)|0);for(let i=0;i<(o.round?50+o.round*12:70);i++)st.bg.push({x:r()*320,y:r()*200,b:.3+r()*.7});
    st.show=o.round?Math.max(1.2,3-o.round*.25):2.8;st.next=0;st.err=0;st.lines=[]},
  down(st,x,y,fx){if(st.t<st.show){return}const p=st.pts[st.next];const d=Math.hypot(p.x-x,p.y-y);
    if(d<14){st.lines.push(st.next);st.next++;SND.ui('hit');fx.burst(p.x,p.y,'#fff8d0',10,40);if(st.next>=st.pts.length){const sc=3-st.err*.75-(st.t>11?.5:0);st.score=Math.max(0,sc);st.starQ=st.err===0?3:Math.max(0,Math.round(sc));fx.say(L(CONST29[st.cn].n)+' ✓');setTimeout(fx.fin,700)}}
    else{st.err++;SND.ui('miss');fx.shake();if(st.err>=4){st.score=.5;st.starQ=0;fx.say(L(X('ดาวหลงทาง','Lost among the stars')));setTimeout(fx.fin,500)}}},
  timeout(st){st.score=st.next/st.pts.length*2;st.starQ=Math.round(st.score)},
  update(){},
  draw(c,st,W,H){const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#050818');g.addColorStop(1,'#141a34');c.fillStyle=g;c.fillRect(0,0,W,H);
    for(const s of st.bg){c.globalAlpha=s.b*(.6+.4*Math.sin(st.t*2+s.x));c.fillStyle='#e8ecff';c.fillRect(s.x|0,s.y|0,1,1)}c.globalAlpha=1;
    const showing=st.t<st.show,fade=showing?1-Math.max(0,(st.t-st.show+.8)/.8):0;
    c.strokeStyle='rgba(235,200,120,'+(fade*.8).toFixed(2)+')';c.beginPath();st.pts.forEach((p,i)=>i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y));c.stroke();
    c.strokeStyle='#eba84b';c.lineWidth=2;c.beginPath();st.lines.forEach((j,i)=>{const p=st.pts[j];i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y)});c.stroke();c.lineWidth=1;
    if(!showing&&st.next===0){const p=st.pts[0],r=7+2*Math.sin(st.t*6);c.strokeStyle='rgba(235,168,75,.8)';c.beginPath();c.arc(p.x,p.y,r,0,7);c.stroke()}
    for(const p of st.pts){c.fillStyle='#fff8e0';c.fillRect(p.x-1,p.y-1,3,3);c.fillStyle='rgba(255,248,224,.25)';c.fillRect(p.x-3,p.y-3,7,7)}
    c.fillStyle='#d8d0f0';c.font='12px sans-serif';c.textAlign='left';c.fillText(showing?L(X('จำรูปนี้ไว้…','Remember this shape…')):L(CONST29[st.cn].n)+'  '+st.next+'/'+st.pts.length,8,16);
    c.fillStyle='#1a2a1a';c.fillRect(0,H-12,W,12)}}};
function starMode29(){let round=1,total=0;const go=()=>mg29('stars',{arcade:1,round,cons:pick(Object.keys(CONST29))}).then(r=>{total+=r.q;const b=book29();if(total>(b.best.stars||0)){b.best.stars=total;store.set('sit.book',b)}
   if(r.q>=1&&r.next){round++;go()}else homeBook29()});go()}
/* stars inside a life: once, the first year you spend watching the sky */
function starDue29(a){return S&&S.starQ29==null&&!S.dead&&a>=10&&a<=60&&(S.focus==='stars'&&rnd()<.5||(S.scAct&&S.scAct.act==='stars'&&S.scAct.age===a)||S.ch===5&&a>=12&&rnd()<.2)}
async function starLife29(a){if(TEST){S.starQ29=weighted([[0,.2],[1,.3],[2,.3],[3,.2]]);return}const k=constFor29(S);let sc;try{sc=await mg29('stars',{cons:k})}catch(e){sc=1}S.starQ29=sc;
  log(X('คืนนั้นคุณนอนดูฟ้าจนจำ'+CONST29[k].n.th+'ได้ขึ้นใจ','That night you watch the sky until you know '+CONST29[k].n.en+' by heart.'),CONST29[k].f,sc>=2?'it':null);fx({kn:1+sc})}
['p29_storm','p29_lend','p29_guest'].forEach(id=>{const p=PERS29.find(p=>p.id===id);const c0=p.c;p.c=S=>(S.settled||civ(S.ch)||S.ch===3)&&(!c0||c0(S))});
CRAFT26.fire={n:X('จุดไฟด้วยไม้สีไฟ','Making fire with a hand drill'),o:X('กองไฟกองหนึ่ง','a fire'),st:[X('ปั่นไม้','Spin the drill'),X('เลี้ยงถ่าน','Nurse the ember'),X('เป่า','Blow')]};
window.__v29={mg29,starMode29,homeBook29,toast29,ACH29,get S(){return S}};
