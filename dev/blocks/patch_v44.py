B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'const LESSTUFF44=' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
# the straw note now gives both views, as the classroom does
rep("n:X('เบียร์เมโสโปเตเมียมีกากข้าวลอยอยู่ คนจึงดื่มด้วยหลอดยาว ","n:X('คำอธิบายที่พบบ่อยคือเบียร์เมโสโปเตเมียมีกากข้าวลอยอยู่ คนจึงดื่มด้วยหลอดยาว แต่บางคนแย้งว่าเบียร์ถูกกรองแล้ว และหลอดเป็นธรรมเนียมการดื่มร่วมโถ ")
rep("function fig(ctx,x,y,o){",open(B+'v44.js',encoding='utf-8').read()+"\nfunction fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
