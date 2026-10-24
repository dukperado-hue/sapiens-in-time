/* ================= v0.24 GRAPHICS: a Super Famicom look =================
   Scene canvases are now 384x216. Old scene art keeps its 192x108 grid (drawn at 2x),
   while the new layers below draw at full resolution: a dithered gradient sky,
   layered ridges with haze, a textured ground, and outlined, shaded people. */
const GFX={s:1,hi:0,qx:0,skin:[3,5],cache:new Map()};
const BAY=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
function gfxRGB(c){c=toHex(c);return [parseInt(c.slice(1,3),16),parseInt(c.slice(3,5),16),parseInt(c.slice(5,7),16)]}
/* draw at the canvas's own pixels, then return to the 192x108 grid */
function hr(ctx,f){ctx.setTransform(1,0,0,1,0,0);try{f(GFX.s)}finally{ctx.setTransform(GFX.s,0,0,GFX.s,GFX.qx,0)}}
function gfxCache(key,w,h,paint){let c=GFX.cache.get(key);if(c)return c;
  if(typeof document==='undefined')return null;c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');
  if(!x||typeof x.createImageData!=='function')return null;const im=x.createImageData(w,h);if(!im||!im.data)return null;
  paint(im.data,w,h);x.putImageData(im,0,0);if(GFX.cache.size>90)GFX.cache.delete(GFX.cache.keys().next().value);GFX.cache.set(key,c);return c}
/* sky: a smooth gradient, quantised into SNES-like bands and blended with a 4x4 ordered dither */
function sky24(ctx,P,day,dusk,dark,ash,smoke){if(!GFX.hi)return false;
  const q=v=>Math.round(v*40)/40,dq=q(day),uq=q(dusk);
  const top=c=>{if(dark)c=mix(c,'#5d6670',dark);if(ash)c=mix(c,'#6e6660',ash);return c};
  const c0=top(mix(P.n[0],P.d[0],dq)),c1=top(mix(P.n[1],P.d[1],dq));
  const s=GFX.s,w=192*s,h=75*s,key='sky|'+c0+c1+'|'+uq+'|'+(smoke?1:0)+'|'+w;
  const cv=gfxCache(key,w,h,(d,w,h)=>{const A=gfxRGB(c0),B=gfxRGB(c1),D=gfxRGB('#e2774c'),M=gfxRGB('#d9824a'),bands=22;
    for(let y=0;y<h;y++){const k=y/(h-1);let col=[0,1,2].map(i=>A[i]+(B[i]-A[i])*k);if(uq>0)col=col.map((v,i)=>v+(D[i]-v)*uq*k*.75);if(smoke)col=col.map((v,i)=>v+(M[i]-v)*smoke*k);
      const lo=col.map(v=>Math.floor(v/255*bands)/bands*255),hi2=col.map(v=>Math.min(255,(Math.floor(v/255*bands)+1)/bands*255)),fr=col.map((v,i)=>(v-lo[i])/((hi2[i]-lo[i])||1));
      for(let x=0;x<w;x++){const t=(BAY[(y&3)*4+(x&3)]+.5)/16,o=(y*w+x)*4;for(let i=0;i<3;i++)d[o+i]=fr[i]>t?hi2[i]:lo[i];d[o+3]=255}}});
  if(!cv)return false;hr(ctx,()=>ctx.drawImage(cv,0,0));return true}
/* a far, hazy ridge behind the land, and a sunlit rim on the land's crest */
function ridge24(ctx,P,day,dusk,seed,now,base,amp){if(!GFX.hi)return;const s=GFX.s,r=srng(seed+505),p1=r()*6,p2=r()*6;
  const sky=mix(mix(P.n[1],P.d[1],day),'#e2774c',dusk*.4),far=mix(P.far,sky,.62),drift=(now/9000)%(192*s);
  hr(ctx,()=>{ctx.fillStyle=far;for(let X=0;X<192*s;X+=2){const x=(X+drift)/s;const hh=(base-amp*.35)-amp*.9*(.5+.5*Math.sin(x*.022+p1))-amp*.35*Math.sin(x*.07+p2)-1.5*Math.sin(x*.4);ctx.fillRect(X,hh*s|0,2,(80-hh)*s|0)}
    ctx.fillStyle=mix(far,'#ffffff',.18);for(let X=0;X<192*s;X+=2){const x=(X+drift)/s;const hh=(base-amp*.35)-amp*.9*(.5+.5*Math.sin(x*.022+p1))-amp*.35*Math.sin(x*.07+p2)-1.5*Math.sin(x*.4);ctx.fillRect(X,hh*s|0,2,1)}})}
function crest24(ctx,P,day,base,amp,p1,p2){if(!GFX.hi)return;const s=GFX.s,lit=mix(P.far,'#fff4d8',.22+.18*day),sh=mix(P.far,'#1a1c2a',.25);
  hr(ctx,()=>{for(let X=0;X<192*s;X++){const x=X/s,h=base-amp*(.5+.5*Math.sin(x*.035+p1))-(amp*.5)*Math.sin(x*.11+p2),Y=h*s|0;
    ctx.fillStyle=lit;ctx.fillRect(X,Y,1,1);if((X&3)===0){ctx.fillStyle=sh;ctx.fillRect(X,Y+4+((X>>2)&1)*2,1,1)}}})}
/* ground: darker toward the viewer, dithered, with grass tufts drawn at full resolution */
function ground24(ctx,gc,gy,seed,dry){if(!GFX.hi)return;const s=GFX.s,w=192*s,h=(108-gy)*s;if(h<=0)return;
  const key='gr|'+gc+'|'+gy+'|'+(seed%7)+'|'+(dry?1:0)+'|'+w;
  const cv=gfxCache(key,w,h,(d,w,h)=>{const G=gfxRGB(gc),Dk=gfxRGB(mix(gc,'#1a140c',.45)),Lt=gfxRGB(mix(gc,'#fff0c0',.18)),r=srng(seed+9);
    for(let y=0;y<h;y++){const k=Math.pow(y/h,1.3)*.55;for(let x=0;x<w;x++){const o=(y*w+x)*4,t=(BAY[(y&3)*4+(x&3)]+.5)/16,dk=k>t*.9;
      const n=((x*13+y*7)^(x*y))&31;const c=n===0?Lt:dk?[G[0]+(Dk[0]-G[0])*.5,G[1]+(Dk[1]-G[1])*.5,G[2]+(Dk[2]-G[2])*.5]:G;d[o]=c[0];d[o+1]=c[1];d[o+2]=c[2];d[o+3]=255}}
    for(let i=0;i<160;i++){const x=(r()*w)|0,y=(r()*h)|0,len=dry?1:2+((r()*3)|0);for(let j=0;j<len;j++){const yy=y-j;if(yy<0)break;const o=(yy*w+x)*4;d[o]=Dk[0];d[o+1]=Dk[1];d[o+2]=Dk[2];
      if(j===len-1&&x+1<w){const o2=(yy*w+x+1)*4;d[o2]=Lt[0];d[o2+1]=Lt[1];d[o2+2]=Lt[2]}}}});
  if(cv)hr(ctx,()=>ctx.drawImage(cv,0,gy*s))}
/* people: outlined, shaded sprites about 20 px tall */
function skin24(x,y){const[a,b]=GFX.skin,n=((x*7+y*13)>>>0)%(b-a+1);return SKIN[Math.min(8,a+n)]}
function fig24(ctx,x,y,o){const s=GFX.s;hr(ctx,()=>{const X=Math.round(x*s)+2,Y=Math.round(y*s);
  const R=(a,b,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(a|0,b|0,w|0,h|0)};
  const h=o.h||6,k=Math.max(.6,h/6),p=o.pose||'stand',f=o.f||0,el=!!o.elder;
  const c=o.c||'#7a4a2a',cL=mix(c,'#ffffff',.28),cD=mix(c,'#000000',.38),sk=skin24(x|0,y|0),skD=mix(sk,'#000000',.3),hair=el?'#d8d0c4':'#24180f',OL='#140d08';
  const L=Math.round(5*k),B=Math.round(6*k)+(el?-1:0);
  if(p!=='lie'){ctx.fillStyle='rgba(0,0,0,.28)';ctx.fillRect(X-4,Y-1,10,2)}
  const head=(hx,hy)=>{R(hx-1,hy-1,6,7,OL);R(hx,hy,4,5,sk);R(hx+3,hy+1,1,4,skD);R(hx,hy,4,2,hair);R(hx,hy+2,1,1,hair);R(hx+2,hy+3,1,1,'#2a1a10');
    if(o.lead){R(hx-1,hy+1,6,1,'#f0c04a')}if(o.horns){R(hx-1,hy-3,1,3,'#8a6a44');R(hx+4,hy-3,1,3,'#8a6a44')}};
  const torso=(bx,by,w,hh)=>{R(bx-1,by-1,w+2,hh+2,OL);R(bx,by,w,hh,c);R(bx,by,1,hh,cL);R(bx+w-1,by,1,hh,cD);R(bx,by+hh-2,w,1,cD)};
  if(p==='lie'){R(X-3,Y-5,16,5,OL);R(X-2,Y-4,10,3,c);R(X-2,Y-4,10,1,cL);R(X+8,Y-4,4,3,sk);R(X-6,Y-6,5,5,OL);R(X-5,Y-5,4,3,sk);R(X-5,Y-5,4,1,hair);return}
  if(p==='bend'){R(X+3,Y-L,2,L,OL);R(X+3,Y-L+1,1,L-1,sk);R(X+7,Y-L,2,L,OL);R(X+7,Y-L+1,1,L-1,sk);torso(X,Y-L-4,9,5);head(X-5,Y-L-5);R(X-2,Y-L,1,4,sk);return}
  if(p==='sit'){torso(X,Y-B-3,6,B);R(X-1,Y-4,11,4,OL);R(X,Y-3,9,2,cD);R(X+8,Y-3,2,2,sk);head(X+1,Y-B-9);R(X-1,Y-B-1,1,B-2,sk);return}
  if(p==='crouch'){torso(X,Y-8,6,5);R(X-1,Y-3,9,3,OL);R(X,Y-3,7,2,cD);head(X+1,Y-14);return}
  const sw=(p==='walk'||p==='run')?(f?2:-2):0,lean=p==='run'?2:0;
  /* legs */
  R(X-1+sw,Y-L-1,3,L+1,OL);R(X+3-sw,Y-L-1,3,L+1,OL);R(X+sw,Y-L,1,L-1,sk);R(X+4-sw,Y-L,1,L-1,skD);R(X-1+sw,Y-1,3,1,'#3a2414');R(X+3-sw,Y-1,3,1,'#3a2414');
  const by=Y-L-B;torso(X-1+lean,by,7,B+2);
  /* arms */
  if(p==='dance'){const up=f?1:0;R(X-3+lean,by-4+up*3,2,6,OL);R(X-3+lean,by-4+up*3,1,5,sk);R(X+7+lean,by-1-up*3,2,6,OL);R(X+8+lean,by-1-up*3,1,5,sk)}
  else{const a=p==='walk'||p==='run'?(f?1:-1):0;R(X-3+lean,by+a,2,B,OL);R(X-2+lean,by+1+a,1,B-2,cD);R(X-2+lean,by+B-1+a,1,1,sk);R(X+6+lean,by-a,2,B,OL);R(X+6+lean,by+1-a,1,B-2,cD);R(X+6+lean,by+B-1-a,1,1,sk)}
  head(X+lean,by-6);
  if(o.spear){for(let i=0;i<16;i++)R(X+8+i*.5,by-2-i,1,1,'#7a5a34');R(X+16,by-18,2,2,'#d6cfc2')}
  if(o.pack){R(X-4,by+1,3,5,OL);R(X-3,by+2,2,3,'#6b4a32')}
  if(o.carry){R(X-6,by-9,18,2,'#5a3b24')}})}
/* ---------- Suvarnabhumi drawn at full resolution ---------- */
function drawSuvarnaHD(ctx,gy,o,now){const s=GFX.s,rg=o.rg22,ya=o.ya22,burn=o.fall22,W=c=>burn?mix(c,'#2a2420',.5):c;
 hr(ctx,()=>{const R=(a,b,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(Math.round(a),Math.round(b),Math.round(w),Math.round(h))},G=gy*s,OL='#1a120c';
  const shade=(c,k)=>mix(c,'#000000',k),lite=(c,k)=>mix(c,'#ffffff',k);
  /* a house on stilts: posts, plank walls, a window, a thatched gable roof and a ladder */
  const stilt=(x,w,h)=>{const X=x*s,Wd=w*s,H=h*s,fl=G-8*s,wall=W('#8a5a34'),wallD=W('#6a4226'),post=W('#4a2e1a'),th=W('#c9a85a'),thD=W('#9a7a3a'),thL=W('#e2c47a');
    ctx.fillStyle='rgba(0,0,0,.25)';ctx.fillRect(X-4,G+2,Wd+10,4);
    for(let i=0;i<=3;i++){const px=X+i*(Wd-3)/3;R(px,fl,3,G-fl+3,post);R(px,fl,1,G-fl+3,lite(post,.2))}
    R(X-3,fl-2,Wd+6,3,shade(post,.2));
    for(let i=0;i<Wd;i+=3)R(X+i,fl-H+12,3,H-12,(i/3)%2?wall:wallD);R(X,fl-H+12,Wd,1,shade(wall,.4));
    R(X+Wd*.55,fl-H+18,Wd*.28,8,OL);R(X+Wd*.55+1,fl-H+19,Wd*.28-2,6,W('#2a1a10'));R(X+Wd*.55,fl-H+22,Wd*.28,1,wallD);
    const rh=16,top=fl-H-rh+12;for(let j=0;j<rh;j++){const ww=Wd+10-Math.round(j*j*.03);const xx=X+(Wd-ww)/2;R(xx,top+rh-j,ww,1,j%3===0?thD:j%3===1?th:thL)}
    R(X-6,top+rh,Wd+12,2,thD);R(X-7,top+rh-3,3,3,thD);R(X+Wd+4,top+rh-3,3,3,thD);R(X-8,top+rh-6,2,4,th);R(X+Wd+6,top+rh-6,2,4,th);
    const lx=X+Wd+3;R(lx,fl,2,G-fl+2,post);R(lx+6,fl,2,G-fl+2,post);for(let y=fl+3;y<G;y+=4)R(lx,y,8,1,lite(post,.15))};
  /* a palm with a curving trunk and drooping fronds */
  const palm=(x,h)=>{const X=x*s,H=h*s,tr=W('#7a6040'),trD=W('#5a4430'),lf=W('#3e6a2a'),lfL=W('#6a9a3a'),lfD=W('#2a4a1e');
    let tx=X,ty=G;for(let i=0;i<H;i+=2){const bend=Math.sin(i/H*1.6)*H*.18;tx=X+bend;ty=G-i;R(tx,ty-2,4,2,i%6===0?trD:tr);R(tx+3,ty-2,1,2,trD)}
    const cx=tx+2,cy=ty;for(let a=0;a<9;a++){const ang=-Math.PI+a*(Math.PI/8)+.08;for(let t=0;t<22;t++){const px=cx+Math.cos(ang)*t,py=cy+Math.sin(ang)*t*.55+t*t*.035;R(px,py,2,1,t<4?lfD:t%3?lf:lfL);if(t%3===0)R(px,py+1,1,2,lfD)}}
    R(cx-3,cy+1,3,3,W('#5a4020'));R(cx+1,cy+2,3,3,W('#6a4a24'))};
  /* a bell-shaped stupa with terraces, a harmika and a ringed spire */
  const stupa=(cx,r,col)=>{const X=cx*s,Rr=r*s,c=W(col),cD=shade(c,.32),cL=lite(c,.22),base=W('#a0503a');
    for(let t=0;t<3;t++)R(X-Rr-8+t*3,G-4-t*4,(Rr+8-t*3)*2,4,t%2?shade(base,.15):base);const by=G-12,dh=Rr*1.05;
    for(let k=0;k<dh;k++){const w=Math.max(2,Math.round(Rr*.82*Math.sqrt(1-Math.pow(k/dh,1.7))));for(let x=-w;x<w;x+=2){const sh=x/w;R(X+x,by-k,2,1,sh<-.45?cL:sh>.4?cD:c)}if(k%7===3)R(X-w,by-k,w*2,1,shade(c,.12))}
    const ty=by-dh;R(X-6,ty-6,12,6,cD);R(X-6,ty-6,12,1,cL);for(let i=0;i<9;i++){const w=Math.max(1,6-i*.6);R(X-w/2,ty-8-i*3,w,2,i%2?cD:c)}R(X-1,ty-36,2,8,W('#d8b84a'))};
  /* a Khmer-style tower: base, body with a door and false niches, corn-cob tiers, finial */
  const prang=(cx,h,col,cd)=>{const X=cx*s,H=h*s,c=W(col),cD=W(cd),cL=lite(c,.2),lat=W('#a8603a'),bw=Math.round(H/2.4);
    R(X-bw/2-6,G-10,bw+12,10,lat);R(X-bw/2-6,G-10,bw+12,2,lite(lat,.2));const by=G-10,bh=H*.48;
    R(X-bw/2,by-bh,bw,bh,c);R(X-bw/2,by-bh,3,bh,cL);R(X+bw/2-4,by-bh,4,bh,cD);
    R(X-5,by-bh*.6,10,bh*.6,OL);R(X-4,by-bh*.6+1,8,bh*.6-1,'#120c08');R(X-8,by-bh*.6-4,16,4,cD);R(X-8,by-bh*.6-4,16,1,cL);
    R(X-bw/2+4,by-bh*.7,4,bh*.4,cD);R(X+bw/2-8,by-bh*.7,4,bh*.4,cD);
    const tiers=5;let y=by-bh;for(let t=0;t<tiers;t++){const w=bw*(1-t/(tiers+1)),th=H*.52/tiers;R(X-w/2-2,y-2,w+4,2,cD);
      for(let k=0;k<th;k++){const ww=w*(1-k/th*.18);for(let x=-ww/2;x<ww/2;x+=2){const sh=x/(ww/2);R(X+x,y-2-k,2,1,sh<-.5?cL:sh>.5?cD:c)}}
      R(X-w/2+2,y-th*.6,3,4,cD);R(X+w/2-5,y-th*.6,3,4,cD);y-=th}
    R(X-2,y-8,4,8,c);R(X-1,y-12,2,4,W('#d8b84a'))};
  const moat=(x,w)=>{const X=x*s,Wd=w*s,wt=W('#4f8a86');R(X,G+4,Wd,7,wt);R(X,G+3,Wd,1,W('#6a5a3a'));for(let i=0;i<Wd;i+=9)R(X+i+((now/120)|0)%9,G+6+(i%2)*2,4,1,lite(wt,.35))};
  const boat=(bx,by)=>{R(bx-1,by,46,6,OL);R(bx,by+1,44,4,W('#6a4428'));R(bx,by+1,44,1,W('#8a6040'));R(bx+20,by-26,2,27,W('#4a3020'));for(let i=0;i<22;i++)R(bx+22,by-25+i,Math.round(18-i*.5),1,i%4?'#e8dcc0':'#d0c4a8')};
  const village=()=>{stilt(12,16,16);stilt(150,18,16);palm(100,26);for(let x=40;x<90;x+=3){R(x*s,G-2,2,6,W('#4f7a32'));R(x*s+2,G,2,4,W('#6a9a3a'))}
    R(40*s,G+6,50*s,4,W('#6a9a96'));R(126*s,G-14,14,12,W('#c8463a'));R(125*s,G-17,16,4,W('#8a3a2a'));R(129*s,G-2,4,12,W('#4a2e1a'))};
  if(rg==='oce'||rg==='abr'){stilt(10,16,16);stilt(36,14,14);palm(70,26);R(80*s,G+5,112*s,9,W('#4f8a86'));for(let i=0;i<14;i++)R(80*s+i*16+((now/140)|0)%16,G+8,6,1,'#9fc8c4');
    const bx=(((now/300)+(o.seed%40))%200-20)*s;boat(bx,G-6);palm(176,22)}
  else if(rg==='npt'){moat(90,90);stilt(8,14,14);palm(40,24);stupa(130,22,'#d8cfbc')}
  else if(rg==='uth'){moat(70,60);stilt(10,14,14);stilt(34,14,13);palm(110,22);stupa(150,14,'#d8cfbc')}
  else if(rg==='stp'){moat(8,180);stilt(12,14,14);if(ya>1125){stupa(120,18,'#b8644a')}else{stupa(70,13,'#b8644a');prang(140,40,'#b8644a','#8a4632')}palm(176,20)}
  else if(rg==='lvo'){stilt(10,14,14);palm(40,22);if(ya<=1020){prang(120,36,'#a8603a','#7a4026');prang(140,40,'#a8603a','#7a4026');prang(160,36,'#a8603a','#7a4026')}else stupa(140,14,'#d8cfbc')}
  else if(rg==='hpj'){stilt(10,14,14);stilt(32,14,13);stupa(130,16,'#b8644a')}
  else if(rg==='cyj'){stilt(10,14,14);palm(40,26);palm(64,22);stupa(140,13,'#b8644a');boat((((now/320)+(o.seed%50))%200-20)*s,G+6)}
  else if(rg==='fdt'){stilt(10,14,14);stilt(36,14,13);for(let i=0;i<5;i++){const X=(100+i*14)*s;R(X-1,G-29,14,30,OL);R(X,G-28,12,28,W('#c9b48a'));R(X,G-28,2,28,W('#e0cca0'));R(X+9,G-28,3,28,W('#a8946a'));R(X+2,G-32,8,4,W('#c9b48a'));R(X+4,G-34,4,2,W('#a8946a'))}}
  else if(rg==='ang'){stilt(8,14,14);palm(36,22);R(60*s,G+5,132*s,9,W('#4f8a86'));
    if(ya<=1125&&ya>875){prang(110,42,'#a8946a','#7a6a52');prang(140,54,'#a8946a','#7a6a52');prang(170,42,'#a8946a','#7a6a52')}
    else if(ya<=875){[[110,40],[140,48],[170,40]].forEach(([cx,h])=>{prang(cx,h,'#9a8a70','#6a5a48');const fy=G-10-h*s*.42;R(cx*s-5,fy,10,9,W('#c9b48a'));R(cx*s-3,fy+3,2,1,'#3a2a1c');R(cx*s+1,fy+3,2,1,'#3a2a1c');R(cx*s-2,fy+6,4,1,'#6a4a32')})}
    else stupa(140,12,'#b8644a')}
  else if(rg==='phm'||rg==='prg'){stilt(8,14,14);stilt(32,12,12);if(rg==='prg'){for(let k=0;k<32;k++){const w=(100-k*3)*s;R(100*s+k*3,G-k*1.2,w,2,W(k%2?'#6f8a52':'#5f7a46'))}}prang(rg==='prg'?150:140,rg==='prg'?34:46,'#d8c8a8','#a89878');if(rg==='phm')moat(80,30)}
  else if(rg==='skt'){moat(90,90);stilt(10,14,14);palm(40,22);if(ya<=788){stupa(120,14,'#d8cfbc');for(let k=0;k<10;k++)R(120*s-8+k*.8,G-40-k*4,16-k*1.6,4,W('#c8bea8'))}else prang(130,36,'#a8603a','#7a4026')}
  else village();
  if(burn)for(let i=0;i<5;i++){const sx=(40+i*30)*s+((now/300+i*7)%8);for(let j=0;j<8;j++){ctx.fillStyle='rgba(60,55,50,.4)';ctx.fillRect(sx+Math.sin(now/500+j)*4,G-60-j*12,8,8)}}});
 if(o.monks22){const mx=((now/120)+(o.seed%60))%230-20;for(let i=0;i<3;i++){const x=Math.round(mx-i*9);fig(ctx,x,gy+14,{c:'#c87a2a',h:6,pose:'walk',f:((now/300|0)+i)%2})}}}
/* ---------- trees as cached full-resolution sprites, lit from the upper left ---------- */
const TREE24={broad:{w:34,h:40,leaf:['#244a2a','#2f5a33','#3d6c3d','#5a8a4a'],trunk:'#3c2c1c',kind:'round',ty:14},
 olive:{w:22,h:22,leaf:['#4e5a3c','#6d7a52','#86926a','#a0aa80'],trunk:'#4a3a2a',kind:'round',ty:8},
 birch:{w:20,h:34,leaf:['#4e6e36','#6f8f4a','#82a35a','#a0c070'],trunk:'#e8e4da',kind:'round',ty:20},
 acacia:{w:32,h:24,leaf:['#3e4a22','#5d6b33','#6f7c3c','#8a9650'],trunk:'#4a3420',kind:'flat',ty:16},
 pine:{w:22,h:36,leaf:['#1e3424','#2f4a33','#3e5e40','#567a50'],trunk:'#3a2a1a',kind:'cone',ty:6},
 palm:{w:36,h:34,leaf:['#2a4a1e','#3e6a2a','#4f8a3a','#6a9a3a'],trunk:'#7a6040',kind:'palm',ty:0},
 fern:{w:28,h:26,leaf:['#2a5030','#3d6e42','#4c8050','#68a060'],trunk:'#4a3624',kind:'palm',ty:0},
 bush:{w:16,h:8,leaf:['#4e5434','#6e7448','#86906a','#9aa47a'],trunk:'#5a4a30',kind:'low',ty:0},
 shrub:{w:12,h:6,leaf:['#4e4c34','#6e6b48','#86846a','#9a987a'],trunk:'#5a4a30',kind:'low',ty:0}};
function tree24(ctx,k,x,y){const T=TREE24[k];if(!T)return false;const v=(x|0)%3,key='tree|'+k+'|'+v;
  const cv=gfxCache(key,T.w,T.h,(d,w,h)=>{const put=(px,py,c)=>{px|=0;py|=0;if(px<0||py<0||px>=w||py>=h)return;const o=(py*w+px)*4,C=gfxRGB(c);d[o]=C[0];d[o+1]=C[1];d[o+2]=C[2];d[o+3]=255};
    const L=T.leaf,r=srng(97+v*31+k.length),cx=w/2|0;
    const blob=(bx,by,rx,ry)=>{for(let yy=-ry;yy<=ry;yy++)for(let xx=-rx;xx<=rx;xx++){const q=(xx*xx)/(rx*rx)+(yy*yy)/(ry*ry);if(q>1)continue;
      const edge=q>.78,l=(xx+yy)/(rx+ry),t=(BAY[((by+yy)&3)*4+((bx+xx)&3)]+.5)/16;let i=l<-.35?3:l<-.05?(t<.5?3:2):l<.25?2:l<.45?(t<.5?1:2):1;if(edge)i=Math.max(0,i-1);if(q>.94)i=0;put(bx+xx,by+yy,L[i])}};
    const trunk=(tx,ty,tw,th)=>{for(let yy=0;yy<th;yy++)for(let xx=0;xx<tw;xx++)put(tx+xx,ty+yy,xx===0?mix(T.trunk,'#ffffff',.2):xx===tw-1?mix(T.trunk,'#000000',.35):T.trunk)};
    if(T.kind==='round'){trunk(cx-2,h-T.ty,4,T.ty);if(k==='birch'){for(let yy=h-T.ty;yy<h;yy+=4)put(cx-1,yy,'#2a2a2a')}
      const rx=w/2-2,ry=(h-T.ty)/2;blob(cx,ry+1,rx,ry);blob(cx-rx*.45,ry+3,rx*.5,ry*.55);blob(cx+rx*.4,ry*.7,rx*.5,ry*.5);for(let i=0;i<6;i++)put(cx-rx*.5+r()*rx,ry*.5+r()*ry*.5,L[3])}
    else if(T.kind==='flat'){trunk(cx-1,h-T.ty,3,T.ty);for(let i=-6;i<=6;i+=6)for(let j=0;j<6;j++)put(cx+i/2+j*(i>0?1:i<0?-1:0),h-T.ty-j,T.trunk);blob(cx,6,w/2-1,4);blob(cx-6,4,6,3)}
    else if(T.kind==='cone'){trunk(cx-1,h-T.ty,3,T.ty);for(let j=0;j<h-T.ty;j++){const ww=Math.round((j/(h-T.ty))*(w/2-1))+1,yy=j;for(let xx=-ww;xx<=ww;xx++){const sh=xx/ww,band=(j%6)<2;put(cx+xx,yy,band?L[0]:sh<-.3?L[2]:sh>.4?L[0]:L[1])}}}
    else if(T.kind==='palm'){let tx=cx,ty=h-1;for(let i=0;i<h-10;i++){tx=cx+Math.sin(i/(h-10)*1.5)*3;ty=h-1-i;put(tx,ty,i%4===0?mix(T.trunk,'#000000',.3):T.trunk);put(tx+1,ty,mix(T.trunk,'#000000',.25))}
      for(let a=0;a<9;a++){const ang=-Math.PI+a*(Math.PI/8)+.08;for(let t=0;t<w/2-1;t++){const px=tx+Math.cos(ang)*t,py=ty+Math.sin(ang)*t*.55+t*t*.03;put(px,py,t<3?L[0]:t%3?L[1]:L[2]);if(t%3===0)put(px,py+1,L[0])}}}
    else{blob(cx,h-4,w/2-1,4)}});
  if(!cv)return false;const s=GFX.s;hr(ctx,()=>ctx.drawImage(cv,Math.round(x*s-TREE24[k].w/2),Math.round(y*s-TREE24[k].h)));return true}
/* ---------- farm animals as outlined, shaded sprites ---------- */
const BEAST24={buffalo:{c:'#3a3436',w:20,h:9,leg:6,horn:'swept'},cattle:{c:'#6a4228',w:18,h:8,leg:6,horn:'short'},banteng:{c:'#4a3226',w:18,h:8,leg:6,horn:'short',sock:1},
 zebu:{c:'#cfc6b6',w:18,h:8,leg:7,horn:'short',hump:1},goat:{c:'#8a6e52',w:12,h:6,leg:5,horn:'back',beard:1},sheep:{c:'#e6dcc8',w:13,h:7,leg:4,wool:1,face:'#3a3028'},
 pig:{c:'#8a6a5a',w:13,h:7,leg:3,snout:1},donkey:{c:'#8f877c',w:14,h:7,leg:7,ears:1},horse:{c:'#6e4a2c',w:17,h:8,leg:9,mane:1},camel:{c:'#c09a64',w:18,h:8,leg:11,hump:2,long:1},
 barb:{c:'#b88a5a',w:12,h:6,leg:5,horn:'back'},deer:{c:'#7a5236',w:13,h:6,leg:7},gazelle:{c:'#b98b52',w:12,h:5,leg:7,horn:'back'}};
function beast24(ctx,x,y,k,dir,f,young){const B=BEAST24[k];if(!B)return false;const s=GFX.s;hr(ctx,()=>{
  const sc=young?.65:1,R=(a,b,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(Math.round(a),Math.round(b),Math.max(1,Math.round(w)),Math.max(1,Math.round(h)))};
  const X=x*s,Y=y*s,w=B.w*sc,h=B.h*sc,lg=B.leg*sc,c=B.c,cL=mix(c,'#ffffff',.25),cD=mix(c,'#000000',.38),OL='#140d08',d=dir>0?1:-1;
  ctx.fillStyle='rgba(0,0,0,.25)';ctx.fillRect(Math.round(X-w/2-1),Math.round(Y-1),Math.round(w+2),2);
  const bx=X-w/2,by=Y-lg-h;
  /* legs */
  const legs=[bx+2,bx+4,bx+w-5,bx+w-3];legs.forEach((lx,i)=>{const sw=f&&(i%2)?(i<2?1:-1):0;R(lx+sw-1,by+h-1,3,lg+1,OL);R(lx+sw,by+h,1,lg-1,i%2?cD:c);R(lx+sw,Y-2,1,1,'#1a1410')});
  /* body */
  R(bx-1,by-1,w+2,h+2,OL);R(bx,by,w,h,c);R(bx+1,by,w-2,1,cL);R(bx,by+h-2,w,2,cD);if(B.wool){for(let i=0;i<w;i+=3)R(bx+i,by-1,2,1,cL)}
  if(B.hump){const hx=B.hump===2?bx+w/2-3:(d>0?bx+w-7:bx+3);R(hx-1,by-4*sc-1,8,5*sc+1,OL);R(hx,by-4*sc,6,4*sc,c);R(hx+1,by-4*sc,4,1,cL)}
  if(B.sock)R(bx,Y-3,w,1,'#e9e1cf');
  /* tail */
  const tx=d>0?bx-2:bx+w+1;R(tx,by+1,1,h*.8,cD);
  /* neck and head */
  const nx=d>0?bx+w-2:bx-4,neckH=B.long?10*sc:3*sc,ny=by-neckH;R(nx-1,ny-1,6,neckH+3,OL);R(nx,ny,4,neckH+2,c);
  const hw=(B.snout?7:6)*sc,hh=5*sc,hx=d>0?nx+1:nx+3-hw,hy=ny-hh+2;R(hx-1,hy-1,hw+2,hh+2,OL);R(hx,hy,hw,hh,B.face||c);R(hx,hy,hw,1,cL);
  const ex=d>0?hx+hw-3:hx+2;R(ex,hy+1,1,1,'#0a0806');const mx=d>0?hx+hw-1:hx;R(mx,hy+hh-2,1,1,mix(c,'#000000',.55));
  if(B.snout)R(d>0?hx+hw:hx-2,hy+2,2,2,'#c99a8a');
  if(B.ears||B.horn!=='swept')R(d>0?hx:hx+hw-1,hy-2,1,2,cD);
  if(B.ears){R(d>0?hx+1:hx+hw-2,hy-4,1,4,c)}
  if(B.mane){for(let i=0;i<neckH+2;i+=2)R(d>0?nx-1:nx+4,ny+i,1,2,'#2a1a10')}
  if(B.beard)R(d>0?hx+hw-2:hx+1,hy+hh,1,2,cD);
  if(!young&&B.horn==='swept'){R(hx-3,hy-2,hw+6,1,'#cfc6b6');R(hx-4,hy-1,1,1,'#cfc6b6');R(hx+hw+3,hy-1,1,1,'#cfc6b6')}
  else if(!young&&B.horn==='short'){R(hx,hy-2,1,2,'#e9e1cf');R(hx+hw-1,hy-2,1,2,'#e9e1cf')}
  else if(!young&&B.horn==='back'){R(d>0?hx:hx+hw-1,hy-3,1,3,'#3a2a1a');R(d>0?hx-1:hx+hw,hy-4,1,1,'#3a2a1a')}});return true}
function ele24(ctx,x,y,dir,f){const s=GFX.s;hr(ctx,()=>{const R=(a,b,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(Math.round(a),Math.round(b),Math.round(w),Math.round(h))};
  const X=x*s,Y=y*s,c='#7a7a82',cL='#9a9aa2',cD='#55555c',OL='#141418',d=dir>0?1:-1,bx=X-18,by=Y-30;
  ctx.fillStyle='rgba(0,0,0,.28)';ctx.fillRect(bx-2,Y-1,40,3);
  [bx+3,bx+9,bx+26,bx+31].forEach((lx,i)=>{const sw=f&&i%2?1:0;R(lx-1+sw,by+16,7,15,OL);R(lx+sw,by+17,5,13,i%2?cD:c);R(lx+sw,Y-2,5,1,'#d8d0c0')});
  R(bx-1,by-1,38,20,OL);R(bx,by,36,18,c);R(bx+2,by,30,2,cL);R(bx,by+14,36,4,cD);for(let i=4;i<34;i+=6)R(bx+i,by+6,1,6,cD);
  const hx=d>0?bx+30:bx-10;R(hx-1,by-5,14,16,OL);R(hx,by-4,12,14,c);R(hx+1,by-4,9,2,cL);
  const ex=d>0?hx-3:hx+9;R(ex-1,by-3,7,13,OL);R(ex,by-2,5,11,cD);
  R(d>0?hx+8:hx+2,by,1,1,'#0a0a0a');
  const tx=d>0?hx+9:hx;for(let i=0;i<16;i++){const sx=tx+Math.sin(i/5+f)*1.5*d;R(sx-1,by+8+i,5,1,OL);R(sx,by+8+i,3,1,i%4?c:cD)}
  R(d>0?hx+8:hx,by+9,4*d>0?6:6,2,'#f2ead8');
  R(d>0?bx-3:bx+36,by+3,3,1,cD);R(d>0?bx-4:bx+38,by+3,1,6,cD)});return true}
