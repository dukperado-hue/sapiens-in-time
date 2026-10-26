B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'GOALS29' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
def after(anchor,add,cnt=1):rep(anchor,anchor+add,cnt)
def before(anchor,add,cnt=1):rep(anchor,add+anchor,cnt)
blk=open(B+'v29.js',encoding='utf-8').read()+'\n'
before("function fig(ctx,x,y,o){",blk)
# fire as a craft for the stone-age chapters
rep("1:'knap',2:'knap',9:'knap'","1:rnd()<.5?'knap':'fire',2:rnd()<.5?'knap':'fire',9:rnd()<.5?'knap':'fire'")
rep("function craftUI26(k){return new Promise(res=>{const K=CRAFT26[k];","function craftUI26(k){if(GAME29[k])return mg29(k);return new Promise(res=>{const K=CRAFT26[k];")
# events: no repeat within 12 years (4 for your own focus), at most 3 times a life
rep("!(civ(S.ch)&&!e.f&&S.done['e'+i]!=null&&a-S.done['e'+i]<7)","!(S.done['e'+i]!=null&&a-S.done['e'+i]<(e.f?4:civ(S.ch)?12:8))&&!((S.evC29&&S.evC29[i])>=3)")
rep("S.done['e'+EV.indexOf(e)]=a;cnt22(EV.indexOf(e));","S.done['e'+EV.indexOf(e)]=a;cnt22(EV.indexOf(e));{const c9=S.evC29=S.evC29||{},i9=EV.indexOf(e);c9[i9]=(c9[i9]||0)+1}")
# shared decisions: once a life, and rarer if seen in a recent life
rep("const canDec=(e,a)=>{const d=S.done[e.id];","const canDec=(e,a)=>{const d=S.done[e.id];if(W4.has(e.id)&&(d!=null||(recent29().has(e.id)&&rnd()<.7)))return false;")
# personal decisions fill silent years
rep("  if(!d){const c=DEC.filter(e=>!e.forced&&!e.deck&&canDec(e,a)&&rnd()<(e.w||1)*.05);if(c.length)d=pick(c)}",
    "  if(!d){const c=DEC.filter(e=>!e.forced&&!e.deck&&canDec(e,a)&&rnd()<(e.w||1)*.05);if(c.length)d=pick(c)}\n  if(!d&&a>=15&&a-(S.lastD29==null?0:S.lastD29)>=4&&rnd()<.45)d=pers29(a);")
rep("if(d){S.done[d.id]=a;if(S.ch===6)ani6Mark(d,S);","if(d){S.done[d.id]=a;S.lastD29=a;if(W4.has(d.id))noteRecent29(d.id);if(S.ch===6)ani6Mark(d,S);")
rep("  if(!d&&craftDue26(a))await craft26(a);","  if(!d&&craftDue26(a))await craft26(a);\n  else if(!d&&starDue29(a))await starLife29(a);")
# star knowledge helps a Pacific voyage
rep("+(S.wait?.12:0)","+(S.wait?.12:0)+(S.starQ29||0)*.04")
# goals, book of lives, achievements
rep("if(!cc||!CS[cc]||CS[cc].ok(S))break}","if(!cc||!CS[cc]||CS[cc].ok(S))break}S.goals29=pickGoals29(S);")
rep("    ...rows26(S),","    ...rows26(S),...(goalsRow29(S)?[goalsRow29(S)]:[]),")
rep("lives.unshift(S.rec);store.set('sit.lives',lives.slice(0,30));","lives.unshift(S.rec);store.set('sit.lives',lives.slice(0,30));S.book29=bookAdd29(S);")
rep("  makeCard(sec);\n}","  makeCard(sec);if(S.book29)deathExtra29(S,S.book29);\n}")
rep("  {const b=document.querySelector('#home .brand');","  homeBook29();\n  {const b=document.querySelector('#home .brand');")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
s=open(F,encoding='utf-8').read()
rep("out.push({f26:S.fame26|0,","out.push({g29:{goals:S.goals29,ok:goalsDone29(S).filter(g=>g.ok).length,maxRep:Math.max(0,...Object.values(S.evC29||{})),dA:Object.entries(S.done).filter(([k,v])=>!/^e\\d+$/.test(k)&&typeof v==='number').map(([k,v])=>v),age:S.age,star:S.starQ29,pers:Object.keys(S.done).filter(k=>/^p29_/.test(k)).length},f26:S.fame26|0,")
open(F,'w',encoding='utf-8').write(s)
print('ok2')
