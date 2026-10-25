B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'function kit25' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
rep("function drawEgypt(ctx,gy,o,now){","function drawEgypt(ctx,gy,o,now){if(GFX.hi){drawEgyptHD(ctx,gy,o,now);return}")
rep("function drawRome(ctx,gy,o,now){","function drawRome(ctx,gy,o,now){if(GFX.hi){drawRomeHD(ctx,gy,o,now);return}")
blk=open(B+'v25g.js',encoding='utf-8').read()+'\n'
rep("function fig(ctx,x,y,o){",blk+"function fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
