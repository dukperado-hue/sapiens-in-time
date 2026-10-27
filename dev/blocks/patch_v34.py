B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'slides34' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
rep("function fig(ctx,x,y,o){",open(B+'v34.js',encoding='utf-8').read()+'\nfunction fig(ctx,x,y,o){')
rep("athYear(a);v30Year(a);v33Year(a);","athYear(a);v30Year(a);v33Year(a);v34Year(a);")
rep("  await titleCard30(S);show('death')","  await slides34(S);await titleCard30(S);show('death')")
rep("bookMig30();S.book29=bookAdd29(S);","saveLegacy34(S);bookMig30();S.book29=bookAdd29(S);")
rep("lin31();fun33();","lin31();fun33();try{const h=legacyHTML34(S),e=document.getElementById('dEpi'),o=document.getElementById('leg34');if(o)o.remove();if(h&&e){const d=document.createElement('div');d.id='leg34';d.innerHTML=h;e.after(d)}}catch(e){}")
rep("...(goalsRow29(S)?[goalsRow29(S)]:[]),","...(goalsRow29(S)?[goalsRow29(S)]:[]),cupRow34(S),")
rep("if(S.starQ29!=null)b.minis.stars","b.cups=b.cups||{};if(S.cup34)b.cups[S.cup34]=1;if(S.starQ29!=null)b.minis.stars")
rep("+rows.join('')+'<ul class=\"ach29\">'","+rows.join('')+cupBook34()+'<ul class=\"ach29\">'")
rep("p33:Object.keys(S.done)","tp34:['paper','gunpowder','smallpox'].filter(k=>S['tp34'+k]).join('+'),cup:S.cup34,p33:Object.keys(S.done)")
open(F,'w',encoding='utf-8').write(s)
print('ok')
