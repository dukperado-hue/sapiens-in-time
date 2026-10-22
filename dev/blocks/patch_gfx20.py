F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'GFX20' in s:raise SystemExit('already')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:120]))
    s=s.replace(old,new)
# twinkling stars + shooting star
rep("if(day<.35&&!ash&&!storm){const a=(.35-day)/.35;const sr=srng(seed+7);for(let i=0;i<(act==='stars'?90:46);i++){const x=sr()*W,y=sr()*56;ctx.globalAlpha=a*(.4+.6*sr());R(x,y,1,1,'#f3ead8')}",
    "if(day<.35&&!ash&&!storm){const a=(.35-day)/.35;const sr=srng(seed+7);for(let i=0;i<(act==='stars'?90:46);i++){const x=sr()*W,y=sr()*56,b0=.4+.6*sr();ctx.globalAlpha=a*clamp(b0+.25*Math.sin(now/(380+i*7)+i),0,1);R(x,y,1,1,'#f3ead8')}\n    {const ph=(now/6500+(seed%17)/17)%1;if(ph<.06){const k=ph/.06,x0=30+(seed%120),y0=6+(seed%14);ctx.globalAlpha=a*(1-k);for(let j=0;j<6;j++)R(x0+k*40-j*2,y0+k*14-j*.7,1,1,'#fffbe8')}}")
# GFX20 sky: sun/moon glow + clouds, before far land
rep("  // far land\n  const p1=r()*6,p2=r()*6,amp=P.peak?24:10,base=P.peak?52:62;",
"""  // GFX20: glow round sun and moon, drifting clouds, a flock of birds
  if(!storm){const ang=(tm-.25)*2*Math.PI,sx=96+Math.sin(ang)*80,sy=62-Math.cos(ang)*48,mx=96-Math.sin(ang)*80,my=62+Math.cos(ang)*48;
    ctx.globalCompositeOperation='lighter';const glow=(x,y,rr,col,a)=>{for(let k=3;k>0;k--){ctx.globalAlpha=a/k;circle(ctx,x,y,rr*k*.9,col)}ctx.globalAlpha=1};
    if(sy<62)glow(sx,sy,6,dusk>.2?'#a8502a':'#6a5a2a',.22);if(my<62&&day<.4)glow(mx,my,5,'#2a3448',.25);ctx.globalCompositeOperation='source-over'}
  {const ncl=storm?9:wx.rain?7:(P.dunes||P.dry)?2:4,cr=srng(seed+31);
    const ccol=storm?'#4a525c':wx.rain?mix('#3a4048','#9aa0a8',day):mix(mix('#3a4058','#f4f1ea',day),'#f0a07a',dusk*.6),ca=storm?.85:wx.rain?.7:(.25+.45*day);
    for(let i=0;i<ncl;i++){const w=18+cr()*26,y=6+cr()*30+(storm?-4:0),sp=(1+cr()*1.5)*(wx.wind?2.2:1),x=((cr()*W+now/(260/sp))%(W+w*2))-w;
      const sky=mix(mix(P.n[0],P.d[0],day),mix(P.n[1],P.d[1],day),y/63),cc=mix(sky,ccol,ca),cs=mix(sky,mix(ccol,'#2a2a3a',.25),ca);
      for(let j=0;j<4;j++){const bx=x+j*w/4,br=3+((j===1||j===2)?3:1)+cr()*2;circle(ctx,bx,y+1,br,cs)}for(let j=0;j<4;j++){const bx=x+j*w/4,br=2+((j===1||j===2)?3:1);circle(ctx,bx,y,br,cc)}R(x,y,w,3,cc);R(x+1,y+3,w-2,1,cs)}}
  if(day>.45&&!storm&&!wx.rain&&!ash){const ph=(now/22000+(seed%29)/29)%1;if(ph<.4){const bx=-20+ph/.4*(W+40),by=18+(seed%16)+Math.sin(now/900)*2,wing=((now/160)|0)%2;
    for(let i=0;i<5;i++){const x=Math.round(bx-[0,6,6,12,12][i]),y=Math.round(by+[0,-4,4,-8,8][i]*.7),u=(wing+i)%2;const bc='#2c2a2a';R(x,y,1,1,bc);R(x-1,y-1,1,1,bc);R(x+1,y-1,1,1,bc);R(x-2,y-1-u,1,1,bc);R(x+2,y-1-u,1,1,bc)}}}
  // far land
  const p1=r()*6,p2=r()*6,amp=P.peak?24:10,base=P.peak?52:62;""")
# haze over far land
rep("  if(P.dunes){for(let x=0;x<W;x++){const h=66-4*Math.sin(x*.06+p2)-2*Math.sin(x*.15);R(x,h,1,10,mix(P.far,'#f0d7a0',.35))}}",
"""  {const hz=mix(mix(P.n[1],P.d[1],day),'#e2774c',dusk*.5);for(let y=base-amp;y<74;y+=2){ctx.globalAlpha=.06+.22*clamp((y-(base-amp))/(74-(base-amp)),0,1);R(0,y,W,2,hz)}ctx.globalAlpha=1}
  if(P.dunes){for(let x=0;x<W;x++){const h=66-4*Math.sin(x*.06+p2)-2*Math.sin(x*.15);R(x,h,1,10,mix(P.far,'#f0d7a0',.35))}}""")
# sun/moon glitter on the sea
rep("  if(P.sea){R(0,horizon-6,W,22,P.sea);const ph=(now/600)%8;for(let y=horizon-4;y<horizon+14;y+=3)for(let x=((y*3+ph)|0)%8;x<W;x+=8)R(x,y,3,1,'#9fd0dc')}",
"""  if(P.sea){R(0,horizon-6,W,22,P.sea);const ph=(now/600)%8;for(let y=horizon-4;y<horizon+14;y+=3)for(let x=((y*3+ph)|0)%8;x<W;x+=8)R(x,y,3,1,'#9fd0dc');
    if(!storm){const ang=(tm-.25)*2*Math.PI,sx=96+Math.sin(ang)*80,mx=96-Math.sin(ang)*80,up=-Math.cos(ang)>-.1,gx=up?sx:mx,gcol=up?(dusk>.2?'#ffb070':'#fff2c4'):'#dfe6f0';
      if(up||day<.35)for(let y=horizon-5;y<horizon+15;y+=2){const w=2+((y-horizon+6)*.25),o2=Math.sin(now/300+y)*2;if(((now/180+y)|0)%3)R(gx-w/2+o2,y,w,1,gcol)}}}""")
# gentle grass sway
rep("for(let i=0;i<26;i++){const x=r()*W,y=gy+3+r()*(H-gy-4),sw=wx.wind?Math.round(Math.sin(now/170+i)):0;R(x+sw,y-2,1,2,mix(gc,'#3d4a22',.45))}",
    "for(let i=0;i<26;i++){const x=r()*W,y=gy+3+r()*(H-gy-4),sw=wx.wind?Math.round(Math.sin(now/170+i)):Math.round(Math.sin(now/900+i*1.7)*.6);R(x+sw,y-2,1,2,mix(gc,'#3d4a22',.45));R(x,y,1,1,mix(gc,'#3d4a22',.3))}")
# fireflies, dust motes and a soft vignette, after night tint
rep("  // disaster overlays\n",
"""  // GFX20: fireflies on warm nights, motes in dry daylight, soft vignette
  {const cold=o.snowGround||o.snowFall||P.cold,warm=!cold&&(P.riv||P.dense||['palm','broad','olive'].includes(P.tree)||P.lake);
    if(day<.28&&warm&&!wx.rain){ctx.globalCompositeOperation='lighter';const fr=srng(seed+77);for(let i=0;i<12;i++){const x=(fr()*W+Math.sin(now/1300+i)*8)%W,y=gy-14+fr()*22+Math.cos(now/1100+i*2)*4,on=Math.sin(now/400+i*3)>.2;if(on){ctx.fillStyle='rgba(200,240,120,.55)';ctx.fillRect(x|0,y|0,1,1);ctx.fillStyle='rgba(200,240,120,.15)';ctx.fillRect((x|0)-1,(y|0)-1,3,3)}}ctx.globalCompositeOperation='source-over'}
    if(day>.6&&(P.dunes||P.dry||o.yt==='dry')&&!wx.rain){const mr=srng(seed+91);for(let i=0;i<14;i++){const x=(mr()*W+now/(90+i*6))%W,y=gy-20+mr()*30+Math.sin(now/700+i)*3;ctx.globalAlpha=.35;R(x,y,1,1,'#f4e6c4')}ctx.globalAlpha=1}
    for(let k=0;k<5;k++){ctx.fillStyle='rgba(0,0,0,'+(.07-k*.012)+')';ctx.fillRect(0,k,W,1);ctx.fillRect(0,H-1-k,W,1);ctx.fillRect(k,0,1,H);ctx.fillRect(W-1-k,0,1,H)}}
  // disaster overlays
""")
open(F,'w',encoding='utf-8').write(s);print('ok')
s=open(F,encoding='utf-8').read()
def rep2(old,new):
    global s
    assert s.count(old)==1,old[:80];s=s.replace(old,new)
rep2("  const h=o.h||6,c=o.c||'#1e140e',hd=o.elder?'#cfc6b8':c,f=o.f||0,p=o.pose||'stand';",
"""  const h=o.h||6,c=o.c||'#1e140e',hd=o.elder?'#cfc6b8':c,f=o.f||0,p=o.pose||'stand';
  if(p!=='lie'){ctx.fillStyle='rgba(0,0,0,.22)';ctx.fillRect(x-1,y,5,1)}""")
rep2("  if(o.spear){for(let i=0;i<7;i++)R(x+2+i,y-h-1-i*.6,1,1,'#8a6a44');",
"""  if(p==='stand'||p==='walk'||p==='dance'){ctx.fillStyle='rgba(255,255,255,.16)';ctx.fillRect(x,y-h,1,h-2)}
  if(o.spear){for(let i=0;i<7;i++)R(x+2+i,y-h-1-i*.6,1,1,'#8a6a44');""")
open(F,'w',encoding='utf-8').write(s);print('fig ok')
