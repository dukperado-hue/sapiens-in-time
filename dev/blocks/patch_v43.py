B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'const FALL43=' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
# the Pythagoras toy no longer starts on a whole-number triangle, and the field mission needs two of them
rep("const u=10,O=[250,240];let a=4,b=3,drag=0;","const u=10,O=[250,240];let a=5,b=2,drag=0;")
rep("field:{eq:'pyth',toy:'pyth',opt:{need:1},","field:{eq:'pyth',toy:'pyth',opt:{need:2},")
# the funeral line belongs to this life only (it used to stay from the first life)
rep("function fun33(){try{const el=document.getElementById('dFuneral');if(!el||el.dataset.v33)return;el.dataset.v33=1;const parts=[];",
    "function fun33(){try{const el=document.getElementById('dFuneral');if(!el)return;let nx=el.nextElementSibling;while(nx&&nx.classList&&nx.classList.contains('fun')){const z=nx;nx=nx.nextElementSibling;z.remove()}const parts=[];")
# book counters are redrawn every time the home screen is shown
rep("six35Btn();eqBtn37();rivBtn38();monBtn41();stHome42();","six35Btn();eqBtn37(1);rivBtn38(1);monBtn41(1);stHome42(1);")
rep("function fig(ctx,x,y,o){",open(B+'v43.js',encoding='utf-8').read()+"\nfunction fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
