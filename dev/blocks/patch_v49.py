import json
B='/home/claude/sapiens-in-time/dev/'
F=B+'game.src.html'
s=open(F,encoding='utf-8').read()
if 'const SPR49=' in s:raise SystemExit('already patched')
J=lambda f:json.dumps(json.load(open(B+'plague/data/'+f,encoding='utf-8')),ensure_ascii=False,separators=(',',':'))
src=open(B+'plague/gfx49.js',encoding='utf-8').read().replace('/*SPRITES_JSON*/null',J('sprites.json'))
old="function fig(ctx,x,y,o){"
assert s.count(old)==1
s=s.replace(old,src+"\n"+old)
open(F,'w',encoding='utf-8').write(s);print('ok',len(s))
