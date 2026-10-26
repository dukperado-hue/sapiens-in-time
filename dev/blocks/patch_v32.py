F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'v32:' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
# v32: typed notes were stored but never shown anywhere -> remove both prompts
rep("  if(REFLECT[S.age]&&!auto&&!TEST)await reflect(S.age);\n","  /* v32: reflection prompt removed (notes were never shown) */\n")
rep('    <div class="field">\n      <span data-i18n="finalMsg"></span>\n      <textarea id="finalMsg" data-i18n-ph="finalPh"></textarea>\n    </div>\n',
    '    <div class="field" hidden>\n      <span data-i18n="finalMsg"></span>\n      <textarea id="finalMsg" data-i18n-ph="finalPh"></textarea>\n    </div>\n')
# v32: the hill race with the rival is gone (it came back every life)
rep("{id:'p_rival',deck:'youth',w:1.6,cond:S=>!!pp('rival'),","{id:'p_rival',deck:'youth',w:1.6,cond:S=>false,")
open(F,'w',encoding='utf-8').write(s)
print('ok')
