B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'const EQ37=' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
rep("  if(!d)d=six35(a)||pay33(a);","  if(!d)d=six35(a)||eq37(a)||pay33(a);")
rep("bookMig30();homeBook29();six35Btn();","bookMig30();homeBook29();six35Btn();eqBtn37();")
rep("cMd:S.ch===30?{","eq37:(S.eq37||[]).join(','),cMd:S.ch===30?{")
rep("function fig(ctx,x,y,o){",open(B+'v37.js',encoding='utf-8').read()+"\nfunction fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
