B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'titleCard30' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
def before(anchor,add,cnt=1):rep(anchor,add+anchor,cnt)
before("function fig(ctx,x,y,o){",open(B+'v30.js',encoding='utf-8').read()+'\n')
# herd goes to kin when there are no children; living children only
rep("if((S.ch===3||civ(S.ch))&&herdTot()>0)parts.push(X('สัตว์ของคุณ '+herdTot()+' ตัวถูกแบ่งให้ลูกหลาน','Your '+herdTot()+' animals are divided among your children.'));\n  if(S.kids.some(k=>k.dies==null))parts.push(",
    "if((S.ch===3||civ(S.ch))&&herdTot()>0)parts.push(herdLine30());\n  if(kidsAlive30(S))parts.push(")
# setup label
rep("carMode:'อาชีพ (บทที่ 3)'","carMode:'อาชีพ'");rep("carMode:'Trade (chapter 3)'","carMode:'Trade'")
# funeral names the right relation
rep("'{p} '+(S.funFor.k==='mentor'?'ครูของคุณ':S.funFor.k==='partner'?'คู่ชีวิตของคุณ':S.funFor.k==='sib'?'พี่น้องของคุณ':'เพื่อนของคุณ')+' จากไปแล้ว","'{p} '+PK[S.funFor.k].th+'ของคุณ'+' จากไปแล้ว")
# temple school is for boys; girls get their own scene
rep("cond:S=>S.schOK&&S.ya<=1475,t:X('เรียนอักษรกับพระ'","cond:S=>S.schOK&&S.ya<=1475&&S.sex!=='f',t:X('เรียนอักษรกับพระ'")
# honest notes
rep("พิธีแบบนี้ยังทำกันในราชสำนักและบางครอบครัวจนถึงศตวรรษที่ 20','The Thai topknot-cutting rite has roots in Brahmin ritual: children kept a topknot until adolescence, and its cutting marked growing up. It was still performed at court and in some families into the 20th century.')",
    "พิธีนี้เป็นที่รู้จักจากยุคหลังมาก ยังไม่มีหลักฐานโดยตรงว่าคนสมัยทวารวดีทำพิธีนี้ ฉากนี้จึงเป็นการคาดเดา','The Thai topknot-cutting rite has roots in Brahmin ritual: children kept a topknot until adolescence, and its cutting marked growing up. The rite is known from much later times; there is no direct evidence that people of the Dvaravati period practised it, so this scene is a guess.')")
rep("บอกชื่อผู้บริจาคและการทำบุญ มีหลักหนึ่งลงปี 771 ผู้เล่นบทคงคา","บอกชื่อผู้บริจาคและการทำบุญ ผู้เล่นบทคงคา")
rep("are mostly short notes of donors and merit; one is dated 771. Players","are mostly short notes of donors and merit. Players")
# an evidence note is shown once a life
rep("async function decide(d){\n  const text=d.xf?d.xf(S):d.x;const note=d.nf?d.nf(S):d.n;","async function decide(d){\n  const text=d.xf?d.xf(S):d.x;let note=d.nf?d.nf(S):d.n;if(note&&note.en){const ns=S.nSeen30=S.nSeen30||{};if(ns[note.en])note=null;else ns[note.en]=1}")
# auto mode says what it will pick
rep("if(auto){$('#mEye').textContent=(eye||'')+' · '+t('autoHint');setTimeout(()=>{if(!$('#modal').hidden){$('#modal').hidden=true;document.body.classList.remove('cine');res({i:pick(okI.length?okI:[0]),v:''})}},input?1500:3200)}",
    "if(auto){const ai=pick(okI.length?okI:[0]);$('#mEye').textContent=(eye||'')+' · '+(input?t('autoHint'):L(X('อีกครู่จะเลือก: ','About to choose: '))+opts[ai].l+' · '+L(X('แตะเพื่อเลือกเอง','tap to choose yourself')));try{const bb=box.children[ai];if(bb)bb.classList.add('auto30')}catch(e){}setTimeout(()=>{if(!$('#modal').hidden){$('#modal').hidden=true;document.body.classList.remove('cine');res({i:ai,v:''})}},input?1500:3600)}")
rep("</style>","#mOpts button.auto30{outline:2px dashed var(--ember);outline-offset:2px}\n</style>",1) if s.count("</style>")==1 else None
# events: a scene you are not choosing happens once a life; your own focus can come back after 4 years
rep("!(S.done['e'+i]!=null&&a-S.done['e'+i]<(e.f?4:civ(S.ch)?12:8))","!(S.done['e'+i]!=null&&(!e.f||a-S.done['e'+i]<4))")
# a partner chance for everyone
rep("  if(!d){const c=DEC.filter(e=>!e.forced&&!e.deck&&canDec(e,a)&&rnd()<(e.w||1)*.05);if(c.length)d=pick(c)}","  if(!d)d=marry30(a);\n  if(!d){const c=DEC.filter(e=>!e.forced&&!e.deck&&canDec(e,a)&&rnd()<(e.w||1)*.05);if(c.length)d=pick(c)}")
rep("vNwYear(a);athYear(a);","vNwYear(a);athYear(a);v30Year(a);")
# death: an omen, then a title card
rep("async function die(){\n  S.cause=pickCause(S.age);","async function die(){\n  if(!TEST){log(omen30(S),null,'sad');renderPlay();await sleep(auto?1600:1000)}\n  S.cause=pickCause(S.age);")
rep("  show('death');renderDeath();$('#sibBtn')","  await titleCard30(S);show('death');renderDeath();$('#sibBtn')")
rep("S.book29=bookAdd29(S);","bookMig30();S.book29=bookAdd29(S);")
rep("  homeBook29();\n","  bookMig30();homeBook29();\n")
# achievement toast never lingers
rep("el.classList.add('on');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('on'),3800)}",
    "el.classList.remove('on');void el.offsetWidth;el.classList.add('on');el.onclick=()=>el.classList.remove('on');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('on'),3800)}")
rep("function show(id){screen=id;","function show(id){screen=id;try{const t9=document.getElementById('toast29');if(t9&&id!=='death')t9.classList.remove('on')}catch(e){}")
rep("pers:Object.keys(S.done).filter(k=>/^p29_/.test(k)).length},","pers:Object.keys(S.done).filter(k=>/^p29_/.test(k)).length,mar:Object.keys(S.done).some(k=>MARRY30.test(k)),kids:S.kids.length,pe:S.ppl.some(p=>p.k==='partner'),mk:Object.keys(S.done).filter(k=>MARRY30.test(k)).join('+')},")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
