import json
B='/home/claude/sapiens-in-time/dev/'
F=B+'game.src.html'
s=open(F,encoding='utf-8').read()
if 'const PARTY48=' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
J=lambda f:json.dumps(json.load(open(B+'plague/data/'+f,encoding='utf-8')),ensure_ascii=False,separators=(',',':'))
src=open(B+'plague/ui48.js',encoding='utf-8').read()+'\n'+open(B+'plague/party48.js',encoding='utf-8').read().replace('/*PARTY_JSON*/null',J('party.json'))+'\n'+open(B+'plague/walk48.js',encoding='utf-8').read().replace('/*PROLOGUE_JSON*/null',J('prologue.json'))+'\n'+open(B+'plague/fix48.js',encoding='utf-8').read()
rep("function fig(ctx,x,y,o){",src+"\nfunction fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
