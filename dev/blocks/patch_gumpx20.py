F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'GUMPX' in s:raise SystemExit('already')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:120]))
    s=s.replace(old,new)
blk=open('/home/claude/sapiens-in-time/dev/blocks/vgx.js',encoding='utf-8').read()
a="let chosenCar18=store.get('sit.car18','');if(chosenCar18&&!CAREERS18[chosenCar18])chosenCar18='';\n"
rep(a,a+blk+'\n')
rep("  if(!d&&S.ch===18)d=gump18(a);\n","  if(!d&&S.ch===18)d=gump18(a);\n  if(!d&&[4,6,8,10,12,14].includes(S.ch))d=gumpX(a);\n")
rep("S.ch===4?epi4(S):L((S.ch===3&&epi3(S))||(S.ch===5&&EPI5[S.sp.id])||(S.ch===2&&EPI2[S.sp.id])||EPI[S.sp.id])+(S.mixed?L(MIXED):''));\n",
    "S.ch===4?epi4(S):L((S.ch===3&&epi3(S))||(S.ch===5&&EPI5[S.sp.id])||(S.ch===2&&EPI2[S.sp.id])||EPI[S.sp.id])+(S.mixed?L(MIXED):''));\n  if([4,6,8,10,12,14].includes(S.ch))epi+=metXLine(S);\n")
rep("out.push({c18:","out.push({cx:(S.metX||[]).join(','),c18:")
open(F,'w',encoding='utf-8').write(s)
print('ok')
