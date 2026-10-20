import re,sys
D='/tmp/claude-0/-home-claude/88ad3b5f-5e3c-518f-8c01-435b4c3a595e/scratchpad/'
s=open(D+'work10.html',encoding='utf-8').read()
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:120]))
    s=s.replace(old,new)
snd=open(D+'v11snd.js',encoding='utf-8').read()
rep("function sceneLoop(){if(!rafOn)return;",snd+"\nwindow.__SND=SND;\nfunction sndBtnUpd(){const b=$('#sndBtn');if(!b)return;const m=SND.mode;b.textContent=m===2?'♪':m===1?'🔉':'🔇';b.setAttribute('aria-label',t(m===2?'sndAll':m===1?'sndFx':'sndOff'));b.title=t(m===2?'sndAll':m===1?'sndFx':'sndOff');b.setAttribute('aria-pressed',m>0)}\nfunction sceneLoop(){if(!rafOn)return;")
rep("  if(screen==='play'&&S){drawScene($('#scene').getContext('2d'),sceneOpts())}\n  if(screen==='draw'&&S&&!$('#drawCard').hidden){const o=sceneOpts();o.act='fire';o.stage='baby';o.dis=null;drawScene($('#drawScene').getContext('2d'),o)}",
    "  if(screen==='play'&&S){const so=sceneOpts();drawScene($('#scene').getContext('2d'),so);SND.scene(so,true)}\n  else if(screen==='draw'&&S&&!$('#drawCard').hidden){const o=sceneOpts();o.act='fire';o.stage='baby';o.dis=null;drawScene($('#drawScene').getContext('2d'),o);SND.scene(o,true)}\n  else SND.leave();")
rep("function log(x,n,c){S.log.unshift({a:S.age,x,n,c});if(S.log.length>140)S.log.pop();if(!TEST)renderLog()}",
    "function log(x,n,c){S.log.unshift({a:S.age,x,n,c});if(S.log.length>140)S.log.pop();if(!TEST){renderLog();SND.onLog(x,c)}}")
rep("const ms=x=>S.ms.push({a:S.age,x});","const ms=x=>{if(!TEST)SND.sfx('ms');return S.ms.push({a:S.age,x})};")
rep("  const r=await modal({eye:t(d.lg?'legendEye':'decision',{a:S.age}),","  if(!TEST)SND.sfx('card');\n  const r=await modal({eye:t(d.lg?'legendEye':'decision',{a:S.age}),")
rep("  const res=os[r.i].run(S);\n  const pn=S.pendingNote;","  const res=os[r.i].run(S);if(!TEST)SND.sfx('pick');\n  const pn=S.pendingNote;")
rep("  log(X('จากไปด้วย'+CAUSE[S.cause].th,'Died of '+CAUSE[S.cause].en),null,'sad');\n  if(CHAPS[S.chap].lin)linRecord();\n  if(TEST)return;",
    "  log(X('จากไปด้วย'+CAUSE[S.cause].th,'Died of '+CAUSE[S.cause].en),null,'sad');\n  if(CHAPS[S.chap].lin)linRecord();\n  if(TEST)return;SND.sfx('death');")
rep("function startLife(){linStart();","function startLife(){SND.unlock();SND.sfx('birth');linStart();")
# settings
rep('''        <div class="seg" id="legSeg">
          <button data-v="1" data-i18n="legOn"></button>
          <button data-v="0" data-i18n="legOff"></button>
        </div>
      </div>''','''        <div class="seg" id="legSeg">
          <button data-v="1" data-i18n="legOn"></button>
          <button data-v="0" data-i18n="legOff"></button>
        </div>
      </div>
      <div class="field">
        <span data-i18n="snd"></span>
        <div class="seg" id="sndSeg">
          <button data-v="2" data-i18n="sndAll"></button>
          <button data-v="1" data-i18n="sndFx"></button>
          <button data-v="0" data-i18n="sndOff"></button>
        </div>
      </div>''')
rep("  document.querySelectorAll('#legSeg button').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.v===+legOn));",
    "  document.querySelectorAll('#legSeg button').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.v===+legOn));\n  document.querySelectorAll('#sndSeg button').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.v===SND.mode));sndBtnUpd();")
rep("  const gb=e.target.closest('#legSeg button');if(gb){legOn=+gb.dataset.v;store.set('sit.leg',legOn);renderHome();return}",
    "  const gb=e.target.closest('#legSeg button');if(gb){legOn=+gb.dataset.v;store.set('sit.leg',legOn);renderHome();return}\n  const sdb=e.target.closest('#sndSeg button');if(sdb){SND.setMode(+sdb.dataset.v);if(SND.mode)SND.sfx('pick');renderHome();return}\n  if(e.target.closest('#sndBtn')){SND.setMode((SND.mode+2)%3);if(SND.mode)SND.sfx('pick');sndBtnUpd();return}")
rep('      <button id="autoBtn" aria-pressed="false" data-i18n="auto"></button>','      <button id="autoBtn" aria-pressed="false" data-i18n="auto"></button>\n      <button id="sndBtn" aria-pressed="true"></button>')
rep("legOn:'ใส่ตำนานด้วย',legOff:'สมจริงล้วน'","legOn:'ใส่ตำนานด้วย',legOff:'สมจริงล้วน',snd:'เสียง',sndAll:'ดนตรีและเสียง',sndFx:'เสียงอย่างเดียว',sndOff:'ปิดเสียง'")
rep("legOn:'Include legends',legOff:'Realistic only'","legOn:'Include legends',legOff:'Realistic only',snd:'Sound',sndAll:'Music and sound',sndFx:'Sound only',sndOff:'Off'")
open(D+'work11.html','w',encoding='utf-8').write(s)
print('ok',len(s))
