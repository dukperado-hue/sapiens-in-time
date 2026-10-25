/* ================= v0.25 GRAPHICS: a Neo Geo-style material kit =================
   Old chapters are redrawn at full resolution, one at a time, from shared parts:
   textured materials (ashlar, mudbrick, marble, Roman brick, roof tiles, thatch, wood),
   a light from the upper left, outlines, contact and cast shadows, and fine detail. */
const MAT25={
 ashlar:{c:'#d8c49a',var:.10,bw:[14,24],bh:8,mortar:.30},
 lime:{c:'#e6dcc2',var:.06,bw:[18,30],bh:9,mortar:.16},
 sand:{c:'#c9a878',var:.12,bw:[12,20],bh:7,mortar:.32},
 granite:{c:'#8a7c78',var:.12,bw:[16,26],bh:10,mortar:.35},
 marble:{c:'#ece6d8',var:.04,bw:[26,40],bh:12,mortar:.10,vein:1},
 tufa:{c:'#b8a888',var:.10,bw:[10,16],bh:6,mortar:.30},
 brick:{c:'#b0603c',var:.10,bw:[8,8],bh:3,mortar:.35,bond:1},
 mud:{c:'#c9a476',var:.07,bw:[10,10],bh:4,mortar:.12,plaster:1},
 plaster:{c:'#e2d2b0',var:.04,bw:[0,0],bh:0,plaster:1},
 ochre:{c:'#d8a868',var:.05,bw:[0,0],bh:0,plaster:1},
 stoneG:{c:'#9a9284',var:.12,bw:[8,14],bh:6,mortar:.35,rough:1},
 wood:{c:'#7a5232',var:.08,plank:1},
 thatch:{c:'#c2a058',var:.10,straw:1},
 tile:{c:'#a8482c',var:.08,tile:1}};
function pat25(ctx,name){const M=MAT25[name],key='pat25|'+name;let cv=GFX.cache.get(key);
  if(!cv){cv=gfxCache(key,64,48,(d,w,h)=>{const C=gfxRGB(M.c),r=srng(name.length*977+name.charCodeAt(0)),set=(x,y,c,k)=>{const o=(((y+h)%h)*w+((x+w)%w))*4;d[o]=Math.max(0,Math.min(255,c[0]*k));d[o+1]=Math.max(0,Math.min(255,c[1]*k));d[o+2]=Math.max(0,Math.min(255,c[2]*k));d[o+3]=255};
    for(let y=0;y<h;y++)for(let x=0;x<w;x++)set(x,y,C,1+(r()-.5)*M.var*.6);
    if(M.plank){for(let y=0;y<h;y++)for(let x=0;x<w;x++){const g=Math.sin((x*.5+Math.sin(y*.15)*3))*.06;set(x,y,C,1+g+(x%8===0?-.28:0)+(x%8===1?.1:0))}}
    else if(M.straw){for(let x=0;x<w;x++)for(let y=0;y<h;y++){const k=(x*7+((y/3)|0)*13)%5;set(x,y,C,(k===0?.7:k===1?1.18:1)+(y%6===0?-.2:0))}}
    else if(M.tile){for(let y=0;y<h;y++)for(let x=0;x<w;x++){const row=(y/6)|0,cx=(x+(row%2)*4)%8,k=1-Math.abs(cx-3.5)/14+(y%6===5?-.35:0)+(y%6===0?.12:0);set(x,y,C,k)}}
    else if(M.bw[0]){let y=0,row=0;while(y<h){const bh=M.bh;let x=M.bond?(row%2)*4:((r()*M.bw[0])|0);
        while(x<w+M.bw[1]){const bw=M.bw[0]+((r()*(M.bw[1]-M.bw[0]+1))|0),t=1+(r()-.5)*M.var*2;
          for(let yy=0;yy<bh;yy++)for(let xx=0;xx<bw;xx++){let k=t;if(yy===0)k+=.08;if(xx===0)k+=.04;if(yy===bh-1||xx===bw-1)k=1-M.mortar;if(M.rough&&r()<.08)k-=.12;set(x+xx,y+yy,C,k)}
          if(M.vein&&r()<.5){let vx=x+((r()*bw)|0);for(let yy=0;yy<bh-1;yy++){vx+=r()<.5?1:0;set(vx,y+yy,C,.9)}}
          if(r()<.25)set(x+((r()*bw)|0),y+1+((r()*(bh-2))|0),C,.82);x+=bw}
        y+=bh;row++}}
    if(M.plaster){for(let i=0;i<30;i++){let x=(r()*w)|0,y=(r()*h)|0;const len=3+((r()*6)|0);for(let j=0;j<len;j++){set(x,y,C,.86);x+=r()<.5?1:0;y+=1}}
      if(M.bw[0])for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(((x+((y/4|0)%2)*5)%10===0||y%4===0)&&r()<.12)set(x,y,C,.9)}});
    if(!cv)return null}
  return ctx.createPattern?ctx.createPattern(cv,'repeat'):null}
/* the full-resolution painter shared by every chapter redrawn in v0.25 */
function kit25(ctx,s,gy,burn){const G=gy*s,OL='#140e0a';
  const R=(a,b,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(Math.round(a),Math.round(b),Math.round(w),Math.round(h))};
  const W=c=>burn?mix(c,'#2a2420',.5):c,shade=(c,k)=>mix(c,'#000000',k),lite=(c,k)=>mix(c,'#ffffff',k);
  const A=(a)=>{ctx.globalAlpha=a},A1=()=>{ctx.globalAlpha=1};
  /* a textured, lit box: left rim light, right shade, top light, contact shadow, outline */
  const box=(x,y,w,h,mat,o={})=>{if(w<=0||h<=0)return;const M=MAT25[mat]||MAT25.plaster,p=pat25(ctx,mat);
    if(!o.noOL)R(x-1,y-1,w+2,h+2,OL);if(p){ctx.fillStyle=p;ctx.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h))}else R(x,y,w,h,M.c);
    if(o.tint){A(o.tintA||.35);R(x,y,w,h,o.tint);A1()}
    if(burn){A(.45);R(x,y,w,h,'#2a2420');A1()}
    A(.22);R(x,y,Math.min(3,w),h,'#fff8e8');A1();A(o.side===false?0:.28);R(x+w*.78,y,w*.22,h,'#1a1208');A1();
    if(!o.noTop){A(.3);R(x,y,w,1,'#ffffff');A1()}A(.3);R(x,y+h-2,w,2,'#1a1208');A1()};
  /* a sloped face (pyramid side, roof) filled from a pattern with a light or dark wash */
  const poly=(pts,mat,wash,a)=>{ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)ctx.lineTo(pts[i][0],pts[i][1]);ctx.closePath();
    const p=mat?pat25(ctx,mat):null;ctx.fillStyle=p||MAT25[mat||'plaster'].c;ctx.fill();if(wash){A(a||.3);ctx.fillStyle=wash;ctx.fill();A1()}if(burn){A(.45);ctx.fillStyle='#2a2420';ctx.fill();A1()}
    ctx.strokeStyle=OL;ctx.lineWidth=1;ctx.stroke()};
  const castShadow=(x,w,h)=>{A(.22);ctx.fillStyle='#1a1208';ctx.beginPath();ctx.moveTo(x+w,G+2);ctx.lineTo(x+w+h*.45,G+6);ctx.lineTo(x+w*.2+h*.45,G+8);ctx.lineTo(x,G+2);ctx.closePath();ctx.fill();A1()};
  const door=(cx,y,w,h,col)=>{R(cx-w/2-1,y-1,w+2,h+1,OL);R(cx-w/2,y,w,h,col||'#2a1a10');A(.25);R(cx-w/2,y,2,h,'#000');A1();R(cx-w/2-2,y-3,w+4,3,shade(W('#c8b090'),.1))};
  const win=(cx,y,w,h,shut)=>{R(cx-w/2-1,y-1,w+2,h+2,OL);R(cx-w/2,y,w,h,'#1e140c');if(shut){R(cx-w/2-3,y,3,h,W(shut));R(cx+w/2,y,3,h,W(shade(shut,.2)))}R(cx-w/2,y+h,w,1,W('#e8dcc0'))};
  /* date palm with a ringed trunk, fronds in four tones and hanging dates */
  const palm=(x,h,lean)=>{const X=x*s,H=h*s,tr=W('#7a5e3e'),trL=W('#9a7a52'),trD=W('#4e3a26'),L=[W('#24421e'),W('#3a6228'),W('#5a8a36'),W('#86ae4a')];lean=lean||.18;
    A(.22);R(X-6,G+2,26,4,'#1a1208');A1();let tx=X,ty=G;for(let i=0;i<H;i+=2){tx=X+Math.sin(i/H*1.5)*H*lean;ty=G-i;R(tx-1,ty-2,6,2,OL);R(tx,ty-2,4,2,i%6<2?trD:tr);R(tx,ty-2,1,2,trL)}
    const cx=tx+2,cy=ty;for(let a=0;a<11;a++){const ang=-Math.PI-.1+a*(Math.PI+.2)/10;const len=20+((a*7)%5)*2;for(let t=0;t<len;t++){const px=cx+Math.cos(ang)*t*1.05,py=cy+Math.sin(ang)*t*.5+t*t*.03;
      R(px,py,2,2,OL);R(px,py,2,1,L[t<5?0:t%4===0?3:(a%2?1:2)]);if(t>4&&t%2===0){R(px-1,py+1,1,2,L[1]);R(px+1,py+1,1,2,L[0])}}}
    for(let i=0;i<4;i++){R(cx-5+i*3,cy+2,3,4,OL);R(cx-5+i*3,cy+2,2,3,W(i%2?'#a85a2a':'#c8742e'))}};
  const cypress=(x,h)=>{const X=x*s,H=h*s;A(.2);R(X-4,G+2,18,3,'#1a1208');A1();for(let k=0;k<H;k++){const w=Math.round(Math.sin(Math.min(1,k/H*1.15)*Math.PI*.95)*7)+1;R(X-w-1,G-k,w*2+2,1,OL);R(X-w,G-k,w*2,1,W((k%6)<2?'#2a4426':'#3a5a30'));R(X-w,G-k,2,1,W('#5a7a40'));R(X+w-2,G-k,2,1,W('#1e3420'))}};
  const pine=(x,h)=>{const X=x*s,H=h*s;R(X-2,G-H*.5,5,H*.5,OL);R(X-1,G-H*.5,3,H*.5,W('#5a3e26'));for(let k=0;k<H*.45;k++){const w=Math.round(18*Math.sin((k/(H*.45))*Math.PI*.9)+4);R(X-w-1,G-H+k,w*2+2,1,OL);R(X-w,G-H+k,w*2,1,W(k%5<2?'#2e4a2a':'#3e5a32'));R(X-w,G-H+k,w*.6,1,W('#56743e'))}};
  const flag=(x,y,col,now)=>{R(x,y,2,30,OL);R(x,y+1,1,28,W('#8a6a44'));const f=((now/220)|0)%3;for(let i=0;i<8;i++)R(x+2+i,y+1+Math.round(Math.sin((i+f)*.8)*1),1,5,W(col))};
  const smoke=(now)=>{for(let i=0;i<5;i++){const sx=(30+i*34)*s+((now/300+i*7)%8);for(let j=0;j<10;j++){const r2=6+j*.9;A(.34-j*.025);ctx.fillStyle=j<2?'#4a4040':'#6a625c';ctx.beginPath();ctx.arc(sx+Math.sin(now/600+j+i)*6,G-40-j*13,r2,0,7);ctx.fill();A1()}}};
  return {R,W,G,OL,shade,lite,A,A1,box,poly,castShadow,door,win,palm,cypress,pine,flag,smoke,s}}

/* ---------- Egypt ---------- */
function drawEgyptHD(ctx,gy,o,now){const s=GFX.s;hr(ctx,()=>{const K=kit25(ctx,s,gy,false),{R,W,G,OL,shade,lite,A,A1,box,poly,castShadow,door}=K;
  /* a true pyramid: sunlit west face, shaded east face, course lines, optional gold cap */
  const pyramid=(cx,half,h,cap,core)=>{const X=cx*s,Hf=half*s,H=h*s,by=G-6*s;
    A(.25);ctx.fillStyle='#1a1208';ctx.beginPath();ctx.moveTo(X-Hf*.2,by);ctx.lineTo(X+Hf,by);ctx.lineTo(X+Hf+H*.35,by+8);ctx.lineTo(X+H*.25,by+8);ctx.closePath();ctx.fill();A1();
    poly([[X,by-H],[X-Hf,by],[X,by]],core?'sand':'lime','#fff6dc',.2);poly([[X,by-H],[X,by],[X+Hf,by]],core?'sand':'lime','#3a2a18',.38);
    ctx.strokeStyle='rgba(60,40,20,.16)';for(let k=4;k<H;k+=core?5:6){const w=Hf*(1-k/H);ctx.beginPath();ctx.moveTo(X-w,by-k);ctx.lineTo(X+w,by-k);ctx.stroke()}
    if(cap){const ch=H*.08,cw=Hf*.08;ctx.fillStyle=W('#f0c84a');ctx.beginPath();ctx.moveTo(X,by-H);ctx.lineTo(X-cw,by-H+ch);ctx.lineTo(X,by-H+ch);ctx.fill();ctx.fillStyle=W('#b88a24');ctx.beginPath();ctx.moveTo(X,by-H);ctx.lineTo(X,by-H+ch);ctx.lineTo(X+cw,by-H+ch);ctx.fill()}};
  const stepPyr=(cx,tiers,w0,th)=>{const X=cx*s;let y=G-4*s;for(let t=0;t<tiers;t++){const w=(w0-t*w0/(tiers+1.5))*s,h=th*s;box(X-w/2,y-h,w,h,'ashlar',{side:true});A(.25);R(X+w/2-w*.18,y-h,w*.18,h,'#1a1208');A1();y-=h}};
  const ramp=(cx,h)=>{const X=cx*s,H=h*s;poly([[X-60,G-4],[X-6,G-4-H],[X+2,G-4-H],[X-44,G-4]],'mud','#000',.1);for(let i=0;i<6;i++){const t=((now/260+i*9)%60)/60;const px=X-56+t*50,py=G-8-t*H;R(px,py-6,3,6,OL);R(px,py-5,2,4,W('#8a5a3a'))}};
  /* pylon: battered towers with cavetto cornice, torus rolls, reliefs, flagpoles and a gate */
  const pylon=(cx)=>{const X=cx*s,tw=36*s/2,th=50,gw=26;
    for(const side of [-1,1]){const x0=side<0?X-gw/2-tw:X+gw/2,top=G-th*s/2*2;const pts=[[x0+(side<0?4:0),G-th],[x0+tw-(side<0?0:4),G-th],[x0+tw+(side<0?0:4),G],[x0-(side<0?4:0),G]];
      poly([[x0+4,G-th*1.0],[x0+tw-4,G-th],[x0+tw,G],[x0,G]],'ashlar',side<0?'#fff6dc':'#3a2a18',side<0?.12:.3);
      R(x0+2,G-th-6,tw-4,6,OL);R(x0+3,G-th-5,tw-6,4,W('#e6d4a8'));R(x0+3,G-th-2,tw-6,1,W('#a88a5c'));R(x0+4,G-th,tw-8,2,W('#c8b080'));
      for(let k=0;k<3;k++){const fx=x0+8+k*16;R(fx,G-th+8,6,14,W('#8a6a48'));R(fx+1,G-th+6,4,3,W('#8a6a48'));R(fx+6,G-th+11,6,1,W('#8a6a48'))}
      for(let y=G-th+28;y<G-6;y+=6)for(let x=x0+6;x<x0+tw-6;x+=4)if(((x+y)>>2)%3===0)R(x,y,2,2,W('#a88a5c'))}
    R(X-gw/2-2,G-34,gw+4,34,OL);box(X-gw/2,G-32,gw,32,'ashlar',{noOL:1});R(X-6,G-24,12,24,'#1e140c');R(X-12,G-34,24,4,W('#e6d4a8'));
    R(X-10,G-33,20,2,W('#3a6aa8'));R(X-3,G-33,6,2,W('#d8a830'));
    for(const fx of [X-gw/2-tw+6,X-gw/2-6,X+gw/2+4,X+gw/2+tw-8])K.flag(fx,G-th-30,'#c0392b',now)};
  const obelisk=(cx,h)=>{const X=cx*s,H=h*s;A(.25);R(X+6,G,H*.4,3,'#1a1208');A1();poly([[X-5,G-H+10],[X+5,G-H+10],[X+7,G],[X-7,G]],'granite','#000',.05);A(.3);R(X+1,G-H+10,6,H-10,'#000');A1();
    ctx.fillStyle=W('#f0c84a');ctx.beginPath();ctx.moveTo(X,G-H);ctx.lineTo(X-5,G-H+10);ctx.lineTo(X+5,G-H+10);ctx.fill();for(let y=G-H+14;y<G-6;y+=5)R(X-2+((y>>1)&1),y,2,2,W('#3e3430'))};
  /* a mudbrick house: plastered walls, flat roof with a parapet and roof shelter, high slit windows */
  const house=(x,w,h,i)=>{const X=x*s,Wd=w*s,H=h*s,y=G+6-H;castShadow(X,Wd,H);box(X,y,Wd,H,i%2?'mud':'plaster',{tint:i%3===0?'#e8d8b8':null});
    R(X-2,y-4,Wd+4,4,OL);R(X-1,y-3,Wd+2,3,W('#d8c49c'));R(X+Wd*.15,y+6,Wd*.22,3,OL);R(X+Wd*.15+1,y+7,Wd*.22-2,1,'#1e140c');
    door(X+Wd*.62,G-6,7,12);if(i%2===0){R(X+4,y-12,Wd*.4,8,OL);R(X+5,y-11,Wd*.4-2,2,W('#a8844e'));for(let k=0;k<3;k++)R(X+6+k*6,y-9,2,5,W('#6a4a2c'))}
    for(let k=0;k<2;k++){const jx=X+Wd+3+k*6;R(jx-1,G-1,7,9,OL);R(jx,G,5,8,W('#b8643f'));R(jx,G,2,6,W('#d0804e'));R(jx+1,G-2,3,2,W('#8a4a2e'))}};
  const cliff=()=>{for(let x=0;x<70*s;x+=2){const h=60+Math.sin(x*.03)*14+Math.sin(x*.11)*5;R(x,G-h,2,h,W('#c8a878'));if(x%6===0)R(x,G-h,2,3,W('#e0c494'));if(x%10===0)R(x+1,G-h+10,1,h-14,W('#a8885c'))}
    for(let i=0;i<4;i++){const tx=(10+i*13)*s,ty=G-48+i*9;R(tx-1,ty-1,9,11,OL);R(tx,ty,7,10,'#1a110a');R(tx-2,ty-3,11,2,W('#e0c494'))}};
  const rock=(x,y,r)=>{const X=x*s,Y=y*s,Rr=r*s;for(let k=-Rr;k<Rr;k++){const w=Math.sqrt(Rr*Rr-k*k);R(X-w-1,Y+k,w*2+2,1,OL);R(X-w,Y+k,w*2,1,W(k<-Rr*.3?'#7a6a62':k<Rr*.3?'#5a4a44':'#3e322e'));R(X-w,Y+k,3,1,W('#8a7a70'))}};
  const papyrus=(x,y)=>{const X=x*s,Y=y*s;for(let i=0;i<7;i++){const h=22+((i*13+x)%12),bx=X+i*3-9,tilt=(i-3)*.8;for(let k=0;k<h;k++)R(bx+tilt*k/h*4,Y-k,1,1,W(k%5?'#4f7a32':'#3e6228'));
    const tx=bx+tilt*4,ty=Y-h;for(let a=0;a<9;a++){const an=-Math.PI*.95+a*Math.PI*.95/8;R(tx+Math.cos(an)*5,ty+Math.sin(an)*4,1,1,W(a%2?'#8ab04a':'#6a9a3a'))}R(tx-1,ty-1,2,2,W('#a8c060'))}};
  const nileBoat=(bx,by)=>{R(bx-1,by-1,52,8,OL);for(let i=0;i<50;i++){const lift=Math.pow(Math.abs(i-25)/25,3)*6;R(bx+i,by-lift,1,6,W(i%4?'#b89a5a':'#9a7c40'))}R(bx+24,by-34,2,34,W('#5a3a22'));
    for(let k=0;k<26;k++)R(bx+12+k*.3,by-32+k,24-k*.6,1,W(k%5?'#efe6d0':'#d8ccb0'));for(let i=0;i<3;i++){R(bx+10+i*12,by-12,3,6,OL);R(bx+10+i*12,by-11,2,4,W('#8a5a3a'))}};
  /* the scene */
  if(o.tombs)cliff();
  if(o.pyr===2){pyramid(178,20,26,0,0);pyramid(150,34,44,1,0);pyramid(112,36,48,0,0)}
  else if(o.pyr===1){pyramid(146,34,26,0,1);ramp(146,26)}
  if(o.step)stepPyr(150,6,46,7);
  if(o.pylon){pylon(148);if(o.obel)obelisk(112,34)}
  if(o.rocks)[[30,gy+10,5],[58,gy+12,4],[120,gy+11,6],[170,gy+9,4]].forEach(([x,y,r])=>rock(x,y,r));
  [[6,13],[24,11],[42,14],[62,12]].forEach(([x,h],i)=>{if(o.tombs&&x<60)return;house(x,15,h,i)});
  K.palm(84,30,.12);if(!o.pylon&&!o.pyr)K.palm(132,26,-.15);K.palm(178,24,.2);
  for(let x=4;x<192;x+=17)if(x<66||x>96)papyrus(x+((x*7)%5),gy+9);
  if(o.seed%2===0){const bx=((((now/360)+(o.seed%60))%240)-30)*s;nileBoat(bx,G+14)}});
 const hx=((now/320)+(o.seed%80))%230-20;if(o.ani6!=='hippo'){hippo6(ctx,(hx|0),gy+12,now,0);if(o.seed%3===0)hippo6(ctx,((hx+70)%230)|0,gy+13,now,0)}
 if(o.ani6!=='croc')croc6(ctx,40+(o.seed%90),gy+17,o.seed%2?1:-1);
 if(o.seed%2===0)[[70,gy+18],[84,gy+20],[100,gy+17]].forEach(([x,y])=>ibis6(ctx,x+(((now/900)|0)%3),y));
 if(o.ani6)ani6Big(ctx,o.ani6,o,gy,now)}

/* ---------- Rome ---------- */
function drawRomeHD(ctx,gy,o,now){const s=GFX.s,burn=o.fall18,rg=o.rg18;hr(ctx,()=>{const K=kit25(ctx,s,gy,burn),{R,W,G,OL,shade,lite,A,A1,box,poly,castShadow,door,win}=K;
  /* a terracotta roof: ridge, rows of tiles, eave shadow */
  const roof=(x,y,w,h)=>{poly([[x-4,y],[x+w/2,y-h],[x+w+4,y]],'tile','#000',.06);R(x-4,y,w+8,2,OL);A(.3);R(x-2,y+2,w+4,3,'#000');A1();R(x+w/2-1,y-h-1,2,2,W('#7a2a1a'))};
  const flatRoof=(x,y,w)=>{R(x-3,y-4,w+6,5,OL);ctx.fillStyle=pat25(ctx,'tile')||'#a8482c';ctx.fillRect(x-2,y-3,w+4,3);if(burn){A(.45);R(x-2,y-3,w+4,3,'#2a2420');A1()}};
  /* insula: brick storeys, shops with awnings at street level, shuttered windows, a timber balcony */
  const insula=(x,w,fl,i)=>{const X=x*s,Wd=w*s,fh=13,H=fl*fh+16,y=G+6-H;castShadow(X,Wd,H);box(X,y,Wd,H,'brick');
    for(let f=1;f<fl;f++){R(X,y+f*fh+2,Wd,2,W('#d8c8a8'));for(let wx=X+6;wx<X+Wd-6;wx+=12)win(wx+3,y+f*fh-8,5,7,f%2?'#5a7a4a':'#7a4a2a')}
    if(fl>2){const by=y+fh*2+2;R(X-3,by,Wd+6,3,OL);R(X-2,by,Wd+4,2,W('#8a6040'));for(let k=X;k<X+Wd;k+=6)R(k,by+2,1,8,W('#6a4428'))}
    box(X,G-10,Wd,16,'plaster',{noTop:1,tint:'#d8a868',tintA:.3});for(let k=0;k<Math.floor(Wd/18);k++){const ax=X+4+k*18;R(ax,G-6,12,12,OL);R(ax+1,G-5,10,11,'#1e140c');
      for(let j=0;j<12;j++)R(ax-2+j,G-12+((j/3)|0),1,3,W(j%4<2?(i%2?'#c84a2a':'#3a6a8a'):'#efe6d0'))}
    flatRoof(X,y,Wd)};
  const domus=(x,w,h)=>{const X=x*s,Wd=w*s,H=h*s,y=G+6-H;castShadow(X,Wd,H);box(X,y,Wd,H,'ochre');R(X,G-2,Wd,6,W('#a83a2a'));door(X+Wd/2,G-8,7,14,'#3a2414');win(X+8,y+8,5,5);win(X+Wd-10,y+8,5,5);roof(X,y,Wd,12)};
  /* temple: stepped podium, Corinthian columns with fluting and capitals, frieze, pediment */
  const temple=(x,cols)=>{const X=x*s,cw=11,Wd=cols*cw+6,H=48,base=G+4;castShadow(X,Wd,H+30);
    for(let t=0;t<3;t++)box(X-6+t*2,base-4-t*4,Wd+12-t*4,4,'marble',{side:false});const top=base-16-H;
    box(X,top+H-4,Wd,8,'marble',{noOL:1});
    for(let i=0;i<cols;i++){const cx=X+4+i*cw;R(cx-1,top+8,8,H-4,OL);for(let k=0;k<6;k++)R(cx+k,top+9,1,H-6,W(k===0?'#fffaf0':k===5?'#a8a090':k%2?'#e8e0cc':'#d0c8b4'));
      R(cx-2,top+4,10,5,OL);R(cx-1,top+5,8,3,W('#ece6d8'));R(cx,top+5,2,2,W('#b8b0a0'));R(cx+4,top+5,2,2,W('#b8b0a0'));R(cx-2,top+H+2,10,3,W('#d8d0c0'))}
    box(X-4,top-6,Wd+8,10,'marble');for(let k=X;k<X+Wd;k+=5)R(k,top-2,2,3,W('#b8b0a0'));
    poly([[X-6,top-6],[X+Wd/2,top-30],[X+Wd+6,top-6]],'marble','#000',.08);poly([[X+4,top-9],[X+Wd/2,top-25],[X+Wd-4,top-9]],'marble','#3a2a18',.25);
    for(let i=0;i<5;i++)R(X+Wd/2-14+i*6,top-14-(i%2)*2,3,5,W('#c8c0b0'));R(X+Wd/2-2,top-34,4,4,W('#d8b84a'));R(X-8,top-10,4,4,W('#d8b84a'));R(X+Wd+4,top-10,4,4,W('#d8b84a'))};
  /* aqueduct: stone piers and arches with voussoirs, a water channel on top */
  const aqueduct=(x0,x1,y)=>{const Y=y*s;box(x0*s,Y,(x1-x0)*s,8,'tufa',{side:false});R(x0*s,Y-2,(x1-x0)*s,2,W('#7aa8b8'));
    for(let x=x0*s;x<x1*s;x+=26){box(x,Y+8,6,G-Y-6,'tufa',{side:false});ctx.strokeStyle=OL;ctx.lineWidth=1;
      for(let a=0;a<=8;a++){const an=Math.PI+a*Math.PI/8,ax=x+16+Math.cos(an)*10,ay=Y+20+Math.sin(an)*10;R(ax-2,ay-2,4,4,W(a%2?'#c8b898':'#a89878'));R(ax-2,ay-2,4,1,OL)}
      A(.35);R(x+6,Y+20,20,G-Y-18,'#1a1208');A1()}};
  /* Colosseum: three arcades of arches framed by half-columns, then an attic with windows */
  const colosseum=(cx)=>{const X=cx*s,Wd=120,tiers=[22,22,22],aw=12;let y=G+2;castShadow(X-Wd/2,Wd,90);
    tiers.forEach((h,t)=>{box(X-Wd/2+t*2,y-h,Wd-t*4,h,'tufa',{side:true});for(let ax=X-Wd/2+6+t*2;ax<X+Wd/2-10-t*2;ax+=aw){R(ax,y-h+6,8,h-6,OL);R(ax+1,y-h+7,6,h-7,'#1a120c');R(ax+1,y-h+5,6,2,'#1a120c');A(.5);R(ax+4,y-h+7,3,h-7,'#000');A1();R(ax+9,y-h,2,h,W('#e0d4b8'))}
      R(X-Wd/2+t*2,y-h,Wd-t*4,2,W('#e8dcc0'));y-=h});
    box(X-Wd/2+6,y-14,Wd-12,14,'tufa');for(let wx=X-Wd/2+12;wx<X+Wd/2-12;wx+=16)R(wx,y-9,5,4,'#1a120c');for(let k=X-Wd/2+8;k<X+Wd/2-8;k+=8)R(k,y-18,1,4,W('#8a6a44'))};
  const dome=(cx)=>{const X=cx*s,Rr=34;box(X-46,G-30,92,36,'marble');for(let k=0;k<Rr;k++){const w=Math.round(Math.sqrt(Rr*Rr-k*k)*1.4);for(let x=-w;x<w;x+=2){const t=x/w;R(X+x,G-30-k,2,1,W(t<-.4?'#f4ece0':t>.45?'#a8a090':'#d8d0c0'))}}
    for(let a=0;a<12;a++){const an=Math.PI+a*Math.PI/11;R(X+Math.cos(an)*Rr*1.3-1,G-32+Math.sin(an)*4,2,3,'#1a120c')}R(X-1,G-30-Rr-6,2,6,W('#d8b84a'));
    for(const sx of [-1,1]){const hx=X+sx*56;for(let k=0;k<16;k++){const w=Math.round(Math.sqrt(256-k*k));R(hx-w,G-14-k,w*2,1,W(k%3?'#d8d0c0':'#b8b0a0'))}box(hx-18,G-14,36,20,'marble')}};
  const pharos=(cx)=>{const X=cx*s;box(X-18,G-50,36,56,'lime');box(X-11,G-86,22,36,'lime');box(X-7,G-108,14,22,'lime');for(let y=G-44;y<G;y+=10)K.win(X,y,4,5);
    const fl=((now/140)|0)%3;R(X-6,G-118-fl,12,10+fl,'#ff9a3a');R(X-3,G-122-fl,6,6,'#ffd27a');A(.18);ctx.fillStyle='#ffd27a';ctx.beginPath();ctx.arc(X,G-114,26,0,7);ctx.fill();A1()};
  const wall=(x0,x1,h,mat)=>{for(let x=x0*s;x<x1*s;x+=40){const hh=h+Math.sin(x*.02)*3;box(x,G-hh,40,hh+4,mat,{side:false});for(let k=0;k<40;k+=10)box(x+k,G-hh-6,6,6,mat,{side:false})}};
  const fort=(cx)=>{const X=cx*s;box(X-30,G-34,60,40,'stoneG');for(const tx of [X-36,X+24]){box(tx,G-46,14,52,'stoneG');for(let k=0;k<14;k+=5)box(tx+k,G-52,3,6,'stoneG',{side:false})}R(X-8,G-18,16,24,'#1a120c');R(X-10,G-20,20,3,W('#7a7268'))};
  const round=(x,w)=>{const X=x*s,Wd=w*s;box(X,G-10,Wd,16,'wood');for(let k=0;k<16;k++){const ww=Wd+8-k*k*.12;R(X+(Wd-ww)/2-1,G-10-k,ww+2,1,OL);ctx.fillStyle=pat25(ctx,'thatch')||'#c2a058';ctx.fillRect(X+(Wd-ww)/2,G-10-k,ww,1)}R(X+Wd/2-3,G-2,6,8,'#1a120c')};
  const vines=()=>{for(let r2=0;r2<4;r2++)for(let x=66*s;x<140*s;x+=8){const y=G+2+r2*4;R(x,y-6,1,7,W('#5a4a2a'));R(x-2,y-8,5,3,W(r2%2?'#3e6a2e':'#4f7a3a'));if((x/8+r2)%3===0)R(x,y-6,2,2,W('#5a2a5a'))}};
  const herod=()=>{wall(100,190,22,'lime');box(130*s,G-58,60,40,'lime',{tint:'#fff4d8'});R(130*s,G-62,60,4,W('#d8b84a'));R(150*s,G-40,20,22,'#1a120c')};
  const harbor=()=>{R(110*s,G+4,140,16,W('#2f7fa0'));for(let i=0;i<16;i++){const a=i/16*Math.PI;box(145*s+Math.cos(a)*58-3,G+6-Math.sin(a)*12,6,8,'marble',{side:false})}};
  const road=()=>{for(let x=0;x<192*s;x+=11){const y=G+30+((x*7)%3);R(x,y,10,5,OL);R(x+1,y+1,8,3,W(x%3?'#8a8578':'#9a958a'));R(x+1,y+1,8,1,W('#b0aca0'))}};
  const ship=(bx,by)=>{R(bx-1,by-1,48,8,OL);for(let i=0;i<46;i++){const lift=Math.pow(Math.abs(i-23)/23,2.4)*5;R(bx+i,by-lift,1,7,W(i%5?'#6a4428':'#5a3820'))}R(bx+44,by-8,3,6,W('#6a4428'));R(bx+22,by-30,2,30,W('#4a3020'));
    for(let k=0;k<20;k++)R(bx+10,by-28+k,26,1,W(k%4?'#efe4cc':'#c8402a'));for(let i=0;i<6;i++)R(bx+6+i*6,by+4,1,5,W('#4a3020'))};
  /* the scene */
  if(rg==='vil'||rg==='gal'){if(rg==='gal'){round(20,22);round(48,18);round(150,24);K.pine(176,40)}else{domus(16,26,22);domus(150,28,24);K.cypress(132,40);vines()}}
  else if(rg==='bri'){wall(20,180,18,'stoneG');fort(128);round(26,20);K.pine(8,44)}
  else if(rg==='jud'){herod();domus(12,24,20);domus(40,22,18);K.palm(88,28,.1)}
  else if(rg==='crt'){harbor();domus(10,24,22);domus(36,24,24);temple(70,5)}
  else if(rg==='alx'){domus(8,26,24);domus(36,24,20);temple(66,5);pharos(158);K.palm(130,26)}
  else if(rg==='cpl'){domus(8,24,20);insula(34,24,3,1);dome(130)}
  else{const city=rg==='rom';insula(4,26,city?4:2,0);insula(32,22,city?5:2,1);
    temple(rg==='pom'?140:66,rg==='pom'?4:6);
    if(city){aqueduct(118,192,gy-46);if(o.colo)colosseum(152)}
    if(rg==='ost'){for(let i=0;i<3;i++)box((120+i*22)*s,G-20,40,26,'brick');for(let i=0;i<6;i++){R((122+i*11)*s,G-10,10,16,'#1a120c')}}
    if(rg==='pom')domus(108,26,22);K.cypress(rg==='pom'?96:120,36)}
  road();
  if(o.sea18)ship(((((now/320)+(o.seed%50))%220)-26)*s,G-20);
  if(burn)K.smoke(now)})}
