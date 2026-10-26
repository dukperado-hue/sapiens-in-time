B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'AGAIN31' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
def before(anchor,add,cnt=1):rep(anchor,add+anchor,cnt)
before("function fig(ctx,x,y,o){",open(B+'v31.js',encoding='utf-8').read()+'\n')
# 1. own-country comparison
rep("let epi=(S.age<5?L(INF5):'')","let epi=(S.age<5?inf531():'')")
# 2. real characters beside the transliterations (Shang)
rep("เจี่ย อี่ ปิ่ง ติง อู้ จี่ เกิง ซิน เหริน กุ่ย เด็กๆ","เจี่ย อี่ ปิ่ง ติง อู้ จี่ เกิง ซิน เหริน กุ่ย (甲乙丙丁戊己庚辛壬癸) เด็กๆ")
rep("jia, yi, bing, ding, wu, ji, geng, xin, ren, gui. The","jia, yi, bing, ding, wu, ji, geng, xin, ren, gui (甲乙丙丁戊己庚辛壬癸). The")
rep("ระบบหกสิบนี้ยังใช้ในปฏิทินจีนจนวันนี้ เช่น การนับปีนักษัตร'","ระบบหกสิบนี้ยังใช้ในปฏิทินจีนจนวันนี้ เช่น ปีเจี่ยจื่อ (甲子) ที่วนกลับมาทุก 60 ปี ส่วนชุดสิบสองชื่อนั้น ภายหลังจึงจับคู่กับสัตว์สิบสองนักษัตร'")
rep("The sixty cycle is still used in the Chinese calendar today, for example in naming years.'","The sixty cycle is still used in the Chinese calendar today, for example the jiazi (甲子) year that comes round every 60 years; the set of twelve was only later paired with the twelve zodiac animals.'")
rep("วันเจี่ยเซิน นักเสี่ยงทายเชว่ถามบรรพบุรุษ: “ฟู่ห่าวจะคลอด","วันเจี่ยเซิน (甲申) นักเสี่ยงทายถามบรรพบุรุษ: “ฟู่ห่าว (婦好) จะคลอด")
rep("On a jiashen day the diviner Que asks the ancestors: “Lady Hao will give birth.","On a jiashen (甲申) day a diviner asks the ancestors: “Lady Hao (婦好) will give birth.")
rep("“เชว่ส่งมาสองร้อยห้าสิบ”","“เชว่ส่งมาสองร้อยห้าสิบ” (雀入二百五十)")
rep("such as “Que sent in 250”.","such as “Que sent in 250” (雀入二百五十).")
rep("free:X('ครอบครัวชาวนา หนึ่งใน “จง” คนจำนวนมาก','a farming family, one of the zhong, “the multitude”')","free:X('ครอบครัวชาวนา หนึ่งใน “จง” (众) คนจำนวนมาก','a farming family, one of the zhong (众), “the multitude”')")
rep("จัดเรียงฉักกระ 64 แบบ","จัดเรียงสัญลักษณ์หกเส้น (卦) 64 แบบ")
# 3. repeated disasters are remembered
rep("  log((S.ch===4&&D.x4)||","  const ag31=again31(k);log(ag31||(S.ch===4&&D.x4)||")
# 4. careers: decisions at each promotion
rep("if(S.clv<3&&S.cxp>=need[0]&&(S[C.sk]||0)>=need[1]&&S.p>=need[2]){S.clv++;","if(S.clv<3&&S.cxp>=need[0]&&(S[C.sk]||0)>=need[1]&&S.p>=need[2]){S.clv++;S.cm31=S.clv;")
rep("  if(!d)d=marry30(a);","  if(!d&&S.cm31)d=cm31();\n  if(!d)d=marry30(a);")
# 5. named births
rep("log(X('คุณมีลูกคนที่ '+S.kids.length,'You have another child (child number '+S.kids.length+')'),null,'big')","log(birth31(),null,'big')")
# 6. island lives don't walk for weeks or move camp
rep("|land and (the )?herds/i;","|land and (the )?herds|days’ walk|moves camp/i;")
# 7. Pacific ancestry
rep("function area26(S){if(!S)return 'wea';","function area26(S){if(!S)return 'wea';if(S.ch===5)return 'pol';")
rep("'<br><span class=\"small\">'+esc(L(MIXNOTE26))+'</span>'","'<br><span class=\"small\">'+esc(L(S.ch===5?MIXNOTE31:MIXNOTE26))+'</span>'")
# 8. a stars goal gets its chance
rep("function starDue29(a){return S&&S.starQ29==null&&!S.dead&&a>=10&&a<=60&&(","function starDue29(a){return S&&S.starQ29==null&&!S.dead&&a>=10&&a<=60&&((S.goals29||[]).includes('stars')&&a>=12&&rnd()<.2||")
# 9. auto mode varies a recurring choice
rep("const r=await modal({eye:t(d.lg?'legendEye':'decision'","AP31=(S.ap31||{})[d.id];const r=await modal({eye:t(d.lg?'legendEye':'decision'")
rep("const res=os[r.i].run(S);","(S.ap31=S.ap31||{})[d.id]=r.i;AP31=null;const res=os[r.i].run(S);")
rep("const ai=pick(okI.length?okI:[0]);","const pl31=okI.length>1&&AP31!=null?okI.filter(i=>i!==AP31):okI;const ai=pick(pl31.length?pl31:[0]);")
# 10. early death: descendants first
rep("makeCard(sec);if(S.book29)deathExtra29(S,S.book29);","makeCard(sec);if(S.book29)deathExtra29(S,S.book29);lin31();")
rep("</style>","#linBlock.lin31{border:2px solid var(--ember);box-shadow:0 0 24px rgba(235,168,75,.25)}\n</style>")
# 11. chapters still in translation go last
rep("+card(24,'14','chIsT','chIsD',rng(24),clk(24),1)+card(26,'15','chMoT','chMoD',rng(26),clk(26),1)+card(28,'16','chNwT','chNwD',rng(28),clk(28),1)+card(5,'17','chPacT','chPacD',rng(5),clk(5),1,1)\n    +'<p class=\"chgroup\">'+t('journeys')+'</p>'+card(9,'→','chJT','chJD',rng(9),clk(9),1,1);",
    "+(TRL31()?'':card(24,'14','chIsT','chIsD',rng(24),clk(24),1)+card(26,'15','chMoT','chMoD',rng(26),clk(26),1)+card(28,'16','chNwT','chNwD',rng(28),clk(28),1))+card(5,'17','chPacT','chPacD',rng(5),clk(5),1,1)\n    +'<p class=\"chgroup\">'+t('journeys')+'</p>'+card(9,'→','chJT','chJD',rng(9),clk(9),1,1)+(TRL31()?'<p class=\"chgroup\">'+t('chTrans31')+'</p>'+card(24,'14','chIsT','chIsD',rng(24),clk(24),1)+card(26,'15','chMoT','chMoD',rng(26),clk(26),1)+card(28,'16','chNwT','chNwD',rng(28),clk(28),1):'');")
# 12. herds don't all stop at 30
rep("const cap=S.settled?30:20;let tot=herdTot();","const cap=Math.round((S.settled?30:20)*(.6+((S.seed>>>3)%9)/10)*(S.cls==='elite'?1.5:S.cls==='slave'?.4:1));let tot=herdTot();")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
