B='/home/claude/sapiens-in-time/dev/'
F=B+'game.src.html'
s=open(F,encoding='utf-8').read()
if 'function hvRender(' in s:raise SystemExit('already patched')
src='\n'.join(open(B+'harvest/'+f,encoding='utf-8').read() for f in ['hv_engine.js','hv_people.js','hv_street.js','hv_mode.js'])
old="function fig(ctx,x,y,o){"
assert s.count(old)==1
s=s.replace(old,src+"\n"+old)
open(F,'w',encoding='utf-8').write(s);print('ok',len(s))
