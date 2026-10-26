B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'pay33' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
rep("function fig(ctx,x,y,o){",open(B+'v33.js',encoding='utf-8').read()+'\nfunction fig(ctx,x,y,o){')
rep("  if(!d&&S.cm31)d=cm31();","  if(!d)d=pay33(a);\n  if(!d&&S.cm31)d=cm31();")
rep("athYear(a);v30Year(a);","athYear(a);v30Year(a);v33Year(a);")
rep("opts:os.map(o=>({l:L(o.l),lock:lockText(o)}))","opts:os.map(o=>({l:L(o.l)+(lockText(o)?'':PRL33(o)),lock:lockText(o)}))")
rep("lin31();","lin31();fun33();")
rep("esc(L(trW(p.tr)))+'</span>'","esc(L(trW(p.tr)))+(p.w33||p.l33?' · '+esc(L(X('ชนะ '+(p.w33||0)+' แพ้ '+(p.l33||0),'won '+(p.w33||0)+', lost '+(p.l33||0)))):'')+'</span>'")
# voyage and the great commission show their odds
rep("opt(X('นำทางด้วยดาว คลื่น และนก ออกค้นหาแผ่นดินใหม่','Steer by stars, swells and birds, and search for new land'),S=>voyage(S))","Object.assign(opt(X('นำทางด้วยดาว คลื่น และนก ออกค้นหาแผ่นดินใหม่','Steer by stars, swells and birds, and search for new land'),S=>voyage(S)),{pr:S=>vP33(S)})")
rep("opt(X('รับงาน','Accept'),S=>{if(rnd()<.55+(S.cr||0)/250)","Object.assign(opt(X('รับงาน','Accept'),S=>{if(rnd()<.55+(S.cr||0)/250)")
rep("return X('งานไม่เป็นอย่างที่เขาหวัง เขาจ่ายครึ่งเดียว และคุณนอนไม่หลับไปหลายคืน','It is not what they hoped for. They pay half, and you lie awake for many nights.')}),","return X('งานไม่เป็นอย่างที่เขาหวัง เขาจ่ายครึ่งเดียว และคุณนอนไม่หลับไปหลายคืน','It is not what they hoped for. They pay half, and you lie awake for many nights.')}),{pr:S=>.55+(S.cr||0)/250}),")
rep("mk:Object.keys(S.done).filter(k=>MARRY30.test(k)).join('+')},","mk:Object.keys(S.done).filter(k=>MARRY30.test(k)).join('+'),p33:Object.keys(S.done).filter(k=>/33|cm31/.test(k)).join('+')+(S.leg33?'+LEG':'')+(S.repaid33?'+REPAID':'')},")
open(F,'w',encoding='utf-8').write(s)
print('ok')
