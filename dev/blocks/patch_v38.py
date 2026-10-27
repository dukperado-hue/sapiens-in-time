B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'const MIS38=' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
rep("  if(!d)d=six35(a)||eq37(a)||pay33(a);","  if(!d)d=six35(a)||mis38c(a)||eq37(a)||pay33(a);")
rep("  if(!d&&craftDue26(a))await craft26(a);","  if(S.mis38)await mis38run(a);if(S.det38)await det38run(a);\n  if(!d&&craftDue26(a))await craft26(a);")
rep("six35Btn();eqBtn37();","six35Btn();eqBtn37();rivBtn38();")
# the flu and the moon become choices (v0.38), so the old one-line logs step aside
rep("if(ya<=107&&ya>=106&&a>=1)once('flu1918',","if(false&&ya<=107&&ya>=106&&a>=1)once('flu1918',")
rep("if(ya<=56&&ya>=56&&S.rg!=='vil'&&a>=3)once('moon',","if(false&&ya<=56&&ya>=56&&S.rg!=='vil'&&a>=3)once('moon',")
rep("if(ya<=56&&ya>=56&&S.rg==='vil'&&a>=6)once('moonvil',","if(false&&ya<=56&&ya>=56&&S.rg==='vil'&&a>=6)once('moonvil',")
# a wired house reads at night
rep("function vMdYear(a){if(S.ch!==30)return;","function vMdYear(a){if(S.ch!==30)return;if(S.wired38&&S.lit<70)S.lit=clamp(S.lit+1,0,100);")
rep("eq37:(S.eq37||[]).join(','),","eq37:(S.eq37||[]).join(','),mis38:(S.mis38log||[]).join(','),riv38:JSON.stringify(S.riv38||{}),det38:S.det38q==null?'':S.det38q,wired38:S.wired38|0,")
rep("function fig(ctx,x,y,o){",open(B+'v38.js',encoding='utf-8').read()+"\nfunction fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
