B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'SIX35' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
rep("function fig(ctx,x,y,o){",open(B+'v35.js',encoding='utf-8').read()+'\nfunction fig(ctx,x,y,o){')
rep("if(c===28)return S.peoNw==='nat'?'cacao':'sugar';","if(c===28)return cup28_35(S);")
rep("bookMig30();homeBook29();","bookMig30();homeBook29();six35Btn();")
rep("  if(!d)d=pay33(a);","  if(!d)d=six35(a)||pay33(a);")
rep("return [esc(L(X('แก้วประจำวัน','Your daily cup'))),esc(L(C.n))+","return [esc(L(X('แก้วประจำวัน','Your daily cup'))),esc(L(C.n))+(SIX35.find(x=>x.cup===S.cup34)?' · '+esc(L(SIX35.find(x=>x.cup===S.cup34).t)):'')+")
open(F,'w',encoding='utf-8').write(s)
print('ok')
