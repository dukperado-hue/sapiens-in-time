B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'function dream40c' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
rep("if(!d)d=six35(a)||mis38c(a)||eq37(a)||mod39(pay33(a));","if(!d)d=six35(a)||dream40c(a)||door40c(a)||mis38c(a)||ment40c(a)||eq37(a)||mod39(pay33(a));")
rep("let s=1+rnd();const C=CARS()[k];","let s=1+rnd()+(S.dream40===k?3:0);const C=CARS()[k];")
rep("S=>{S.car=k;S.clv=0;S.cxp=0;fx({b:2});","S=>{S.car=k;S.clv=0;S.cxp=0;fx({b:2});pathStart40(S);")
rep("const carAvail=S=>Object.keys(CARS()).filter(k=>CARS()[k].ok(S));","const carAvail=S=>Object.keys(CARS()).filter(k=>CARS()[k].ok(S)||S.door40===k);")
rep("if(S.carPre&&a===12){S.carPre=0;log(","if(S.carPre&&a===12){S.carPre=0;pathStart40(S);log(")
rep("S.cxp=(S.cxp||0)+g;","S.cxp=(S.cxp||0)+g+ment40(S);")
rep("vNwYear(a);vMdYear(a);","vNwYear(a);vMdYear(a);pathYear40(a);")
rep("function legacyHTML34(S){","function legacyHTML34(S){const dr=dreamEndL40(S);const h=legacyHTML34b(S);return dr?h+'<p class=\"small\">'+esc(dr.trim())+'</p>':h}\nfunction legacyHTML34b(S){")
rep("{k:'degree',w:3,","{k:'dream40',w:3,c:S=>S.ch===3||(civ(S.ch)&&S.ch!==30),n:X('ทำความฝันวัยเด็กให้เป็นจริง','ทำความฝันวัยเด็กให้เป็นจริง'),ok:S=>dreamOk40(S)||!!S.breaker40},\n {k:'degree',w:3,")
rep("edu39:S.edu|0,","edu39:S.edu|0,dream40:S.dream40||'',dbar40:S.dreamBar40||'',dok40:dreamOk40(S)?1:0,brk40:S.breaker40|0,ment40:S.ppl.some(p=>p.k==='mentor')?1:0,car40:S.car||'',clv40:S.clv|0,sex40:S.sex,")
rep("function fig(ctx,x,y,o){",open(B+'v40.js',encoding='utf-8').read()+"\nfunction fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
