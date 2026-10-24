B='/home/claude/sapiens-in-time/dev/blocks/'
F='/home/claude/sapiens-in-time/dev/game.src.html'
s=open(F,encoding='utf-8').read()
if 'function fig24' in s:raise SystemExit('already patched')
def rep(old,new,cnt=1):
    global s
    n=s.count(old)
    if n!=cnt:raise SystemExit('COUNT %d!=%d for: %s'%(n,cnt,old[:160]))
    s=s.replace(old,new)
# canvases at 2x
rep('<canvas class="scene" id="drawScene" width="192" height="108"></canvas>','<canvas class="scene" id="drawScene" width="384" height="216"></canvas>')
rep('<canvas class="scene" id="scene" width="192" height="108"></canvas>','<canvas class="scene" id="scene" width="384" height="216"></canvas>')
rep('<canvas class="mscene" id="mScene" width="192" height="68" aria-hidden="true"></canvas>','<canvas class="mscene" id="mScene" width="384" height="136" aria-hidden="true"></canvas>')
rep("const off=document.createElement('canvas');off.width=192;off.height=108;{const o=sceneOpts(9000)","const off=document.createElement('canvas');off.width=384;off.height=216;{const o=sceneOpts(9000)")
rep("STG22.prev=document.createElement('canvas');STG22.prev.width=192;STG22.prev.height=108}","STG22.prev=document.createElement('canvas');STG22.prev.width=cv.width;STG22.prev.height=cv.height}")
rep("c.drawImage(src,0,30,192,68,0,0,192,68)}","const k=src.width/192;c.drawImage(src,0,30*k,192*k,68*k,0,0,m.width,m.height)}")
# drawScene: scale, quake, sky, ridges, ground, reset
rep("  const W=192,H=108;const P=Object.assign({},SC[o.sc],VAR[o.vr]||{});const seed=o.seed>>>0;const r=srng(seed);",
    "  const W=192,H=108;const P=Object.assign({},SC[o.sc],VAR[o.vr]||{});const seed=o.seed>>>0;const r=srng(seed);\n  {const cw=ctx.canvas&&+ctx.canvas.width;GFX.s=cw>=384?Math.round(cw/192):1;GFX.hi=GFX.s>=2?1:0;GFX.qx=0;ctx.setTransform(GFX.s,0,0,GFX.s,0,0);GFX.skin=skinRange(typeof S!=='undefined'&&S?S.rg:'vil')}")
rep("if(quake)ctx.setTransform(1,0,0,1,((now/45)|0)%2?1:-1,0);","if(quake){GFX.qx=(((now/45)|0)%2?1:-1)*GFX.s;ctx.setTransform(GFX.s,0,0,GFX.s,GFX.qx,0)}")
rep("  if(quake)ctx.setTransform(1,0,0,1,0,0);\n}","  ctx.setTransform(1,0,0,1,0,0);GFX.hi=0;GFX.qx=0;\n}")
rep("  for(let i=0;i<10;i++){const k=i/9;let c=mix(mix(P.n[0],P.d[0],day)","  if(!sky24(ctx,P,day,dusk,dark,ash,smoke))for(let i=0;i<10;i++){const k=i/9;let c=mix(mix(P.n[0],P.d[0],day)")
rep("  for(let x=0;x<W;x++){const h=base-amp*(.5+.5*Math.sin(x*.035+p1))-(amp*.5)*Math.sin(x*.11+p2);R(x,h,1,H-h,P.far);if(P.peak&&h<base-amp*.9)R(x,h,1,3,'#eef0ee')}",
    "  ridge24(ctx,P,day,dusk,seed,now,base,amp);\n  for(let x=0;x<W;x++){const h=base-amp*(.5+.5*Math.sin(x*.035+p1))-(amp*.5)*Math.sin(x*.11+p2);R(x,h,1,H-h,P.far);if(P.peak&&h<base-amp*.9)R(x,h,1,3,'#eef0ee')}crest24(ctx,P,day,base,amp,p1,p2);")
rep("  R(0,gy,W,H-gy,gc);for(let i=0;i<120;i++)R(r()*W,gy+r()*(H-gy),1,1,mix(gc,'#2a2015',.35));",
    "  R(0,gy,W,H-gy,gc);for(let i=0;i<120;i++)R(r()*W,gy+r()*(H-gy),1,1,mix(gc,'#2a2015',.35));ground24(ctx,gc,gy,seed,o.yt==='dry'||dis==='drought');")
# trees
rep("function feature(ctx,k,x,y){const R=","function feature(ctx,k,x,y){if(GFX.hi&&tree24(ctx,k,x,y))return;const R=")
rep("function beast(ctx,x,y,k,dir,f,young){const R=","function beast(ctx,x,y,k,dir,f,young){if(GFX.hi&&beast24(ctx,x,y,k,dir,f,young))return;const R=")
# people
rep("function fig(ctx,x,y,o){const R=","function fig(ctx,x,y,o){if(GFX.hi){fig24(ctx,x,y,o||{});return}const R=")
# Suvarnabhumi in full resolution
rep("function drawSuvarna(ctx,gy,o,now){","function drawSuvarna(ctx,gy,o,now){if(GFX.hi){drawSuvarnaHD(ctx,gy,o,now);return}")
# the block goes before fig()
blk=open(B+'v24g.js',encoding='utf-8').read()+'\n'
rep("function fig(ctx,x,y,o){",blk+"function fig(ctx,x,y,o){")
open(F,'w',encoding='utf-8').write(s)
print('ok',len(s))
