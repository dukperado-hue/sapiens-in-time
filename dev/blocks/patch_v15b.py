# v0.15 part B: pacing, controls, infant deaths, intro
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'skipTo' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)

# UI strings
rep("chapter:'บทที่',","chapter:'บทที่',skipNext:'ถัดไป »',quitLife:'ออก',quitSure:'แตะอีกครั้งเพื่อออก',sibBtn:'เกิดเป็นน้องในบ้านเดิม',noRefl:'ไม่ต้องถามอีก',autoHint:'อีกครู่จะเลือกให้อัตโนมัติ · แตะเพื่อเลือกเอง',")
rep("chapter:'Chapter',","chapter:'Chapter',skipNext:'Next »',quitLife:'Quit',quitSure:'Tap again to quit',sibBtn:'Be born as a younger sibling',noRefl:'Don’t ask again',autoHint:'Auto will choose in a moment · tap to choose yourself',")
# controls: bigger buttons, next-decision and quit buttons
rep(".ctrl{display:flex;gap:6px;align-items:center}",".ctrl{display:flex;gap:6px;align-items:center;flex-wrap:wrap}")
rep(".ctrl button{background:none;border:1px solid var(--line);padding:6px 10px;font-family:var(--px);font-size:11px;border-radius:2px;color:var(--ash)}",
    ".ctrl button{background:none;border:1px solid var(--line);padding:6px 10px;font-family:var(--px);font-size:12px;border-radius:2px;color:var(--ash);min-height:44px;min-width:40px}\n#log small{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;cursor:pointer}\n#log small.open{display:block;-webkit-line-clamp:unset}")
rep("      <button data-sp=\"8\">8×</button>\n      <span class=\"sp\"></span>",
    "      <button data-sp=\"8\">8×</button>\n      <button id=\"skipBtn\" data-i18n=\"skipNext\"></button>\n      <span class=\"sp\"></span>\n      <button id=\"quitBtn\" data-i18n=\"quitLife\"></button>")
rep("      <button class=\"btn btn-primary\" id=\"again\" data-i18n=\"again\"></button>\n    </div>",
    "      <button class=\"btn btn-primary\" id=\"again\" data-i18n=\"again\"></button>\n    </div>\n    <button class=\"btn btn-ghost\" id=\"sibBtn\" data-i18n=\"sibBtn\" hidden></button>")
# skip to the next decision
rep("if(!paused&&!busy){prog+=dt*speed/pace;","if(skipTo&&S.age>=skipTo)skipTo=0;if(!paused&&!busy){prog+=dt*(skipTo?40:speed)/pace;")
rep("function modal({eye,title,text,note,noteLg,input,opts}){","let skipTo=0,SIB=null;\nfunction modal({eye,title,text,note,noteLg,input,opts}){skipTo=0;")
# auto: give people time to read; a hint says it will choose
rep("    $('#modal').hidden=false;setTimeout(()=>box.firstChild&&box.firstChild.focus(),50);\n    if(auto){setTimeout(()=>{if(!$('#modal').hidden){$('#modal').hidden=true;res({i:pick(okI.length?okI:[0]),v:''})}},Math.max(500,1800/speed))}",
    "    $('#modal').hidden=false;setTimeout(()=>box.firstChild&&box.firstChild.focus(),50);\n    if(auto){$('#mEye').textContent=(eye||'')+' · '+t('autoHint');setTimeout(()=>{if(!$('#modal').hidden){$('#modal').hidden=true;res({i:pick(okI.length?okI:[0]),v:''})}},input?1500:3200)}")
rep("$('#autoBtn').onclick=()=>{auto=!auto;$('#autoBtn').setAttribute('aria-pressed',auto)};",
    "$('#autoBtn').onclick=()=>{auto=!auto;$('#autoBtn').setAttribute('aria-pressed',auto);if(auto&&!$('#modal').hidden)setTimeout(()=>{if(auto&&!$('#modal').hidden){const b=[...document.querySelectorAll('#mOpts button')].find(b=>!b.disabled);if(b)b.click()}},1500)};\n$('#skipBtn').onclick=()=>{if(!S||S.dead)return;skipTo=S.age+15;paused=false;updatePause()};\n{let qa=0;$('#quitBtn').onclick=()=>{const b=$('#quitBtn');if(!qa){qa=1;b.textContent=t('quitSure');setTimeout(()=>{qa=0;b.textContent=t('quitLife')},2500);return}qa=0;b.textContent=t('quitLife');paused=true;skipTo=0;if(S)S.quit=1;show('home');renderHome()}}\n$('#sibBtn').onclick=()=>{if(!S)return;SIB={chap:S.chap,sp:S.sp.id,rg:S.path[0],ya:Math.max(CHAPS[S.chap].new+5,S.ya0-1-((rnd()*3)|0)),cls:S.cls};if(LIN)LIN.next=null;startDraw()};")
# reflection pauses can be switched off
rep("  const r=await modal({eye:t('reflect',{a:age}),title:","  if(store.get('sit.noRefl',0))return;\n  const r=await modal({eye:t('reflect',{a:age}),title:")
rep("text:'',input:t('reflectPh'),opts:[{l:t('cont'),primary:1}]});\n  if(r.v)S.notes[age]=r.v;",
    "text:'',input:t('reflectPh'),opts:[{l:t('cont'),primary:1},{l:t('noRefl')}]});\n  if(r.i===1)store.set('sit.noRefl',1);\n  if(r.v)S.notes[age]=r.v;")
# the first two lives in each chapter always reach age five
rep("  if(rnd()<hazard(a)){\n    if(S.amulet&&a>=5)","  if(!(S.prot5&&a<5)&&rnd()<hazard(a)){\n    if(S.amulet&&a>=5)")
rep("function startLife(){SND.unlock();SND.sfx('birth');linStart();","function startLife(){SND.unlock();SND.sfx('birth');linStart();{const k='sit.cn'+S.chap,n=store.get(k,0);S.prot5=n<2;store.set(k,n+1)}if(SIB){S.sibOf=1;SIB=null}")
# a younger sibling: same place, time and household
rep("  if(cont){sp=SP.sap;ya=cont.ya;rg=cont.rg}","  if(SIB&&SIB.chap===chap&&!cont){sp=SP[SIB.sp]||SP.sap;ya=SIB.ya;rg=SIB.rg}\n  else if(cont){sp=SP.sap;ya=cont.ya;rg=cont.rg}")
rep("rollYear();init7();S.name=","rollYear();init7();if(SIB&&SIB.chap===chap&&SIB.cls&&S.cls)S.cls=SIB.cls;S.name=")
# death page: younger-sibling button, and what a child's death meant
rep("  show('death');renderDeath();\n}","  show('death');renderDeath();$('#sibBtn').hidden=!(S.age<15&&!CHAPS[S.chap].lin);\n}")
rep("  let epi=S.ch===10?epi10(S):","  let epi=(S.age<5?L(INF5):'')+(S.ch===10?epi10(S):")
i=s.find("  let epi=(S.age<5?L(INF5):'')+(S.ch===10?epi10(S):");j=s.find(";",i);line=s[i:j]
assert line.count('(')>=1
s=s[:j]+")"+s[j:]
# notes: shown once per life in every chapter, folded to two lines in the log
rep("if(civ(S.ch)&&seenN[ek])n=null;","if(seenN[ek])n=null;")
rep("function renderLog(){if(!S)return;$('#log').innerHTML=S.log.map(e=>'<li class=\"'+(e.c||'')+'\"><span class=\"a num\">'+e.a+'</span><span>'+(e.c==='lg'?'✦ ':'')+esc(L(e.x))+(e.n?'<small>'",
    "function renderLog(){if(!S)return;$('#log').innerHTML=S.log.map((e,i)=>'<li class=\"'+(e.c||'')+'\"><span class=\"a num\">'+e.a+'</span><span>'+(e.c==='lg'?'✦ ':'')+esc(L(e.x))+(e.n?'<small data-i=\"'+i+'\"'+(e.op?' class=\"open\"':'')+'>'")
rep("document.addEventListener('click',e=>{\n","document.addEventListener('click',e=>{\n  const ln=e.target.closest('#log small[data-i]');if(ln&&S){const en=S.log[+ln.dataset.i];if(en){en.op=!en.op;ln.classList.toggle('open',!!en.op)}return}\n")
# made-more line printed Thai inside English
rep("log(X('ทำ'+invName(made)+'ได้เพิ่ม','Made more '+invName(made)),null,'it');","log(X('ทำ'+INV[made].n.th+'ได้เพิ่ม','Made more '+INV[made].n.en),null,'it');")
# returning players skip the typed intro
rep("$('#introGo').onclick=()=>{show('home');renderHome()};","$('#introGo').onclick=()=>{store.set('sit.seen',1);show('home');renderHome()};")
rep("applyLang();show('intro');runIntro();\n})();","applyLang();if(store.get('sit.seen',0)&&!/[?&]intro=1/.test(location.search)){introDone=true;show('home');renderHome()}else{show('intro');runIntro()}\n})();")
# one metaphor: a calendar year
rep("th:[['ถ้าย่อประวัติโลก 4,540 ล้านปี ให้เหลือเพียง 1 วัน',''],['Homo sapiens จะปรากฏแค่ 5.7 วินาทีสุดท้าย','em'],",
    "th:[['ถ้าย่อประวัติโลก 4,540 ล้านปี ให้เหลือ 1 ปีปฏิทิน',''],['Homo sapiens จะปรากฏตอน 23:25 น. ของคืนวันที่ 31 ธันวาคม','em'],['ชีวิตคนหนึ่งคน ยาวไม่ถึงครึ่งวินาที','dim'],")
rep("en:[['Shrink Earth’s 4.54 billion years into a single day.',''],['Homo sapiens appears only in the last 5.7 seconds.','em'],",
    "en:[['Shrink Earth’s 4.54 billion years into one calendar year.',''],['Homo sapiens appears at 11:25 pm on 31 December.','em'],['A whole human life lasts less than half a second.','dim'],")
open(F,'w',encoding='utf-8').write(s)
print('ok')
s=open(F,encoding='utf-8').read()
k="let chosenCar10=store.get('sit.car10','');if(chosenCar10&&!CAREERS10[chosenCar10])chosenCar10='';\n"
assert s.count(k)==1
add=r"""const INF5=X('ในสังคมก่อนยุคใหม่ การศึกษาที่รวบรวมข้อมูลจากหลายสังคมพบว่าเด็กราว 1 ใน 4 ตายก่อนอายุหนึ่งขวบ และเกือบครึ่งตายก่อนเป็นวัยรุ่น ประเทศไทยวันนี้ เด็กตายก่อนอายุห้าขวบไม่ถึง 1 ใน 100 คน ลองคิดดูว่าอะไรบ้างที่ทำให้เปลี่ยนไปขนาดนี้ ',
 'Studies combining data from many pre-modern societies found that about 1 in 4 children died before their first birthday, and nearly half before reaching their teens. In Thailand today, fewer than 1 in 100 children die before age five. Think about what changed to make that difference. ');
REFLECT4[5]=X('เด็กอายุห้าขวบในเมืองอิฐดิบ ได้ยินเสียงอะไรเป็นอย่างแรกทุกเช้า','What is the first sound a five-year-old hears each morning in a mud-brick city?');
REFLECT6[5]=X('เด็กห้าขวบริมแม่น้ำไนล์ คงกลัวอะไรมากที่สุด และชอบอะไรมากที่สุด','What might a five-year-old by the Nile fear most, and love most?');
REFLECT8[5]=X('ถ้าเด็กคนนี้วาดรูปบนพื้นดิน เขาจะวาดอะไร','If this child drew a picture in the dust, what would it be?');
REFLECT10[5]=X('เด็กห้าขวบริมทะเล เห็นเรือแปลกหน้าเข้าท่า เขาคิดว่าเรือมาจากไหน','A five-year-old by the sea watches a strange ship come in. Where does the child think it came from?');
"""
s=s.replace(k,k+add)
open(F,'w',encoding='utf-8').write(s);print('ok2')
