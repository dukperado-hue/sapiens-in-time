B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'const MONEY41=' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
# siblings are named after the chapter has set who your people are (a Japanese girl no longer has a Thai brother)
rep("function init7(){S.car=null;","function init7(){init7b();if(S.sib7)mkP('sib',S.sib7)}\nfunction init7b(){S.car=null;")
rep("  if(rnd()<.7)mkP('sib',1+((rnd()*6)|0));\n","  S.sib7=rnd()<.7?1+((rnd()*6)|0):0;\n")
rep("if(!d)d=six35(a)||dream40c(a)||door40c(a)||mis38c(a)||","if(!d)d=six35(a)||mon41c(a)||dream40c(a)||door40c(a)||mis38c(a)||")
rep("vNwYear(a);vMdYear(a);pathYear40(a);","vNwYear(a);vMdYear(a);pathYear40(a);monYear41(a);goldYear41(a);")
rep("six35Btn();eqBtn37();rivBtn38();","six35Btn();eqBtn37();rivBtn38();monBtn41();")
rep("  if(S.ch===30){tech.push(","  if((S.ch===30||S.ch===28)&&S.ag)tech.push('<span class=\"tc it\">'+esc(L(X('เงินออม','เงินออม')))+' '+Math.round(S.ag)+'</span>');\n  if(S.ch===30){tech.push(")
rep("function fig(ctx,x,y,o){",open(B+'v41.js',encoding='utf-8').read()+"\nfunction fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
