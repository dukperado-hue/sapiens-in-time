B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'const STUFF42=' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
blk=open(B+'v42.js',encoding='utf-8').read().replace('/*MOL42*/null',open(B+'mol42.json',encoding='utf-8').read().strip())
rep("six35Btn();eqBtn37();rivBtn38();monBtn41();","six35Btn();eqBtn37();rivBtn38();monBtn41();stHome42();")
rep("function fig(ctx,x,y,o){",blk+"\nfunction fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
