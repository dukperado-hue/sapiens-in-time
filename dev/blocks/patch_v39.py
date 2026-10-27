B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'function drawActMd39' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
# modern illness
rep("  if(rnd()>=p)return;\n  const c=Object.keys(DIS)","  if(S.ch===30)p*=sickP39();if(rnd()>=p)return;\n  const c=S.ch===30?disMd39(a):Object.keys(DIS)")
rep("S.sick={k,y:0};fx({h:DIS[k].h});","S.sick={k,y:0};fx({h:DIS[k].h});if(S.ch===30&&DISNOTE39[k]&&!(S.dn39||(S.dn39={}))[k]){S.dn39[k]=1;S.dnPend39=DISNOTE39[k]}")
rep("k==='zoo'&&!S.zooN?","S.dnPend39?pn39():k==='zoo'&&!S.zooN?")
# quiet moments of this age
rep("function quiet22(a){","function quiet22(a){if(S&&S.ch===30&&rnd()<.6&&quiet39(a))return true;")
rep("const c=QM22.filter(q=>a>=q.a","const c=QM22.filter(q=>!(S.ch===30&&QOLD39.test(q.x.th))&&a>=q.a")
rep("function gift30(a){if(S.gift30||a<6","function gift30(a){if(S.ch===30){if(!S.gift30&&a>=8&&a<=12&&rnd()<.3){S.gift30=pick(GIFTMd39);log(X('ยายมอบ'+S.gift30.th+'ให้คุณ บอกให้เก็บไว้ให้ดี มันอยู่ในบ้านนี้มาตั้งแต่ก่อนแม่เกิด','ยายมอบ'+S.gift30.th+'ให้คุณ บอกให้เก็บไว้ให้ดี มันอยู่ในบ้านนี้มาตั้งแต่ก่อนแม่เกิด'),null,'it')}return}if(S.gift30||a<6")
rep("else if(S.ch===30)tradeMdYear();","else if(S.ch===30)tradeMd39();")
rep("30:S.rg==='vil'?'cloth':S.ya<=60?null:'cloth',","30:S.rg==='vil'?'cloth':null,")
rep("if(S.ch===30){if(c==='farmer')return S.rg==='vil'?'cloth':null;return S.rg==='vil'||S.ya>60?'cloth':null}","if(S.ch===30){return S.rg==='vil'?'cloth':null}")
rep("{k:'stars',w:2,","{k:'degree',w:3,c:S=>S.ch===30,n:X('เรียนจบปริญญา','เรียนจบปริญญา'),ok:S=>(S.edu||0)>=4},\n {k:'dream',w:3,c:S=>S.ch===30,n:X('ทำความฝันตอนเด็กให้เป็นจริง','ทำความฝันตอนเด็กให้เป็นจริง'),ok:S=>!!S.dream39&&DREAM39[S.dream39].ok(S)},\n {k:'stars',w:2,c:S=>S.ch!==30,")
rep("function starDue29(a){","function starDue29(a){if(S&&S.ch===30)return false;")
# work, school, money
rep("if(!d)d=six35(a)||mis38c(a)||eq37(a)||pay33(a);","if(!d)d=six35(a)||mis38c(a)||eq37(a)||mod39(pay33(a));")
rep("if(S.clv<3&&S.cxp>=need[0]&&(S[C.sk]||0)>=need[1]&&S.p>=need[2]){","if(S.clv<3&&S.cxp>=need[0]&&(S[C.sk]||0)>=need[1]&&S.p>=need[2]&&eduGate39(S,C,S.clv+1)){")
rep("vNwYear(a);vMdYear(a);","vNwYear(a);vMdYear(a);if(S.ch===30){eduYear39(a);econYear39(a)}")
rep("if(S.ch===30)hz*=hzMd(a);","if(S.ch===30)hz*=hzMd(a)*(S.hlt39||1);")
rep("if(S.ch===30){if(id==='sow'&&S.field)x*=1.6;","if(S.ch===30){if(id==='study')x*=S.eduT?9:.5;if(id==='school'&&S.eduT)x*=5;if(id==='side')x*=S.unemp39?3:.6;if(id==='sow'&&S.field)x*=1.6;")
rep("esc(L(PEONOTEMd))+'</span>']]:[]),","esc(L(PEONOTEMd))+'</span>'],birthRow39(S)]:[]),")
rep("  return s+L(LESSONMd)+L(THAIMd)}","  return s+epi39(S)+L(LESSONMd)+L(THAIMd)}")
rep("  if(!d&&S.ch===30)d=gumpMd(a);","  if(!d&&S.ch===30)d=edu39c(a);\n  if(!d&&S.ch===30)d=gumpMd(a);")
rep("  // weather\n  if(wx.rain||storm)rain22(","  if(!o._inMd){\n  // weather\n  if(wx.rain||storm)rain22(")
rep("  if(GFX.hi)fg27(ctx,o,P,gy,now,wx);else fg22(ctx,o,P,gy,now,wx);\n  drawMade26(ctx,o,gy);","  if(GFX.hi)fg27(ctx,o,P,gy,now,wx);else fg22(ctx,o,P,gy,now,wx);\n  }\n  drawMade26(ctx,o,gy);")
rep("function drawModern(ctx,gy,o,now,day){","function drawModern(ctx,gy,o,now,day){o._inMd=0;")
rep("const invName=k=>L(S.ch===5&&INV[k].n5?INV[k].n5:INV[k].n);","const invName=k=>L(S.ch===5&&INV[k].n5?INV[k].n5:S.ch===30&&INV[k].n30?INV[k].n30:INV[k].n);")
# scenes
rep("if(o.md30){const rD=drawActMd(ctx,o,act,gy,now,P);","if(o.md30){const rD=drawActMd39(ctx,o,act,gy,now,P)||drawActMd(ctx,o,act,gy,now,P);")
rep("eq37:(S.eq37||[]).join(','),","eq37:(S.eq37||[]).join(','),edu39:S.edu|0,dream39:S.dream39||'',dreamOk39:S.dream39?(DREAM39[S.dream39].ok(S)?1:0):'',ag39:Math.round(S.ag||0),clv39:S.clv|0,")
rep("function fig(ctx,x,y,o){",open(B+'v39.js',encoding='utf-8').read()+"\nfunction pn39(){const n=S.dnPend39;S.dnPend39=null;return n}\nfunction fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
