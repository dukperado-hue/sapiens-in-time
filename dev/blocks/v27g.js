/* ===================== v0.27 graphics: a richer foreground, something in the grass, riders on the horizon ===================== */
/* one shared clock for the scene's surprises */
const FX27={k:null,t0:0,d:1,x:0,next:0,real:0};window.__fx27=FX27;
function tigerLand27(S){if(!S)return false;if([8,12,20,22].includes(S.ch))return !(civ(S.ch)&&S.rg!=='vil'&&!['kap','anu','klg','fdt','prg','phm','stp'].includes(S.rg));
  if([1,2,9].includes(S.ch))return ['sas','sun','jav','tha','eas','yan','sib','alt'].includes(S.rg);if(S.ch===3)return ['yan','tha'].includes(S.rg);return false}
function fxStart27(k,real){const now=Date.now();if(FX27.k&&now-FX27.t0<7000)return;FX27.k=k;FX27.t0=now;FX27.d=Math.random()<.5?1:-1;FX27.real=real?1:0;
  FX27.x=k==='eyes'||k==='tiger'?(FX27.d>0?14+Math.random()*12:150+Math.random()*14):0;
  try{if(typeof SND!=='undefined'){if(k==='tiger')setTimeout(()=>SND.sample('ani_tiger',.32),1500);else if(k==='eyes')SND.sample('ani_tiger',.08);else if(k==='mongol'){SND.sample('ani_horse',.3);setTimeout(()=>SND.sample('ani_horse',.22),900)}}}catch(e){}}
function fxLog27(x,c){if(!S||!x)return;const t=(x.en||'')+' '+(x.th||'');
  if(/\btigers?\b|เสือโคร่ง/i.test(t)&&tigerLand27(S))fxStart27('tiger',1);
  else if(/Mongol|มองโกล|ข่าน|ทัพม้า/i.test(t)&&(c==='sad'||/บุก|ล้อม|ยึด|ทัพ|ศึก|ปล้น|army|siege|sack|raid|charge/i.test(t)))fxStart27('mongol',1)}
/* every minute or so in tiger country, the grass moves. Usually nothing comes out. */
function fxTick27(o,now){if(!o.live||!S||screen!=='play')return;if(!FX27.next)FX27.next=now+25000+Math.random()*30000;
  if(FX27.k&&now-FX27.t0>9000)FX27.k=null;if(FX27.k||now<FX27.next)return;FX27.next=now+45000+Math.random()*50000;
  if(tigerLand27(S)&&S.age>=3)fxStart27(Math.random()<.22?'tiger':'eyes',0);else if(S.ch===26&&['stp','kar'].includes(S.rg)&&Math.random()<.35)fxStart27('mongol',0)}

/* ---------- the tiger, drawn at full resolution (about 34 scene pixels long) ---------- */
function tiger27(ctx,x,y,d,f,pose){const s=GFX.s,k=s/2;hr(ctx,()=>{const X=x*s,Y=y*s;
  const P=(a,b,w,h,c)=>{ctx.fillStyle=c;const px=d>0?X+a*k:X-(a+w)*k;ctx.fillRect(Math.round(px),Math.round(Y+b*k),Math.max(1,Math.round(w*k)),Math.max(1,Math.round(h*k)))};
  const OR='#d8732a',ORL='#ef9a48',ORD='#a8521c',BEL='#f2e6cc',ST='#1c120a',OL='#120a06',leap=pose==='leap',crouch=pose==='crouch';
  const lift=leap?-14:crouch?6:0,legH=leap?12:crouch?8:14;
  /* shadow */
  ctx.fillStyle='rgba(0,0,0,'+(leap?.15:.3)+')';ctx.fillRect(Math.round(X-30*k),Math.round(Y-2*k),Math.round(64*k),Math.round(3*k));
  const by=-legH-17+lift;
  /* legs: far pair darker, near pair lighter; a gallop when running, a stretch when leaping */
  const leg=(lx,len,ang,near)=>{const c=near?OR:ORD;for(let i=0;i<len;i++){const ox=Math.round(ang*i);P(lx+ox-1,by+15+i,6,1,OL);P(lx+ox,by+15+i,4,1,i>len-3?BEL:c)}P(lx+Math.round(ang*len)-1,by+15+len-1,7,2,near?BEL:'#d8ccb0')};
  if(leap){leg(18,legH+2,1.1,0);leg(22,legH+2,1.3,1);leg(-20,legH,-1.1,0);leg(-16,legH,-1.3,1)}
  else{const g=f?1:-1;leg(16,legH,.25*g,0);leg(20,legH,-.25*g,1);leg(-18,legH,-.25*g,0);leg(-14,legH,.25*g,1)}
  /* tail: a long curve with rings and a black tip */
  for(let i=0;i<20;i++){const tx=-27-i,ty=by+4+Math.round(Math.sin(i/6+(leap?0:Date.now()/400))*3)-(leap?i*.35:0);P(tx,ty-1,2,4,OL);P(tx,ty,2,2,i>16?ST:(i%4<1?ST:OR))}
  /* body: rows from back to belly, shoulder higher than hips */
  for(let xx=-26;xx<=24;xx++){const t=(xx+26)/50,top=by+Math.round(3-4*Math.sin(t*Math.PI)-(t>.7?1:0)),bot=by+17-Math.round(2*Math.sin(t*Math.PI));
    P(xx,top-1,1,bot-top+2,OL);for(let yy=top;yy<=bot;yy++){const v=(yy-top)/(bot-top+.01);let c=v<.18?ORL:v>.72?BEL:v>.6?ORD:OR;
      const sx=(xx+40+Math.round(Math.sin(yy*.9)*1.5))%7;if(v<.66&&(sx===0||sx===1&&v<.4)&&xx>-24&&xx<21)c=ST;P(xx,yy,1,1,c)}}
  /* head */
  const hx=22,hy=by-5+(leap?-2:0);P(hx-1,hy-1,17,15,OL);P(hx,hy,15,13,OR);P(hx,hy,15,3,ORL);P(hx+9,hy+6,7,6,BEL);P(hx+1,hy+8,5,5,BEL);
  P(hx+2,hy-3,4,4,OL);P(hx+3,hy-2,2,2,'#f0e0c0');P(hx+8,hy-3,4,4,OL);P(hx+9,hy-2,2,2,'#f0e0c0');
  P(hx+10,hy+3,3,2,'#e8d040');P(hx+11,hy+3,1,2,OL);P(hx+14,hy+6,2,2,'#c87a72');P(hx+13,hy+9,3,1,OL);
  for(let i=0;i<3;i++){P(hx+3+i*3,hy+1,1,3,ST)}P(hx+1,hy+5,3,1,ST);P(hx+1,hy+7,2,1,ST);
  if(leap||crouch){P(hx+12,hy+10,3,2,'#f4f0e8');P(hx+12,hy+11,1,1,OL)}
  /* whiskers */
  ctx.fillStyle='rgba(250,245,230,.7)';for(let i=0;i<3;i++){const a=hx+16,b=hy+7+i;P(a,b,4,1,'rgba(250,245,230,.6)')}})}
/* a horse archer at full resolution (about 26 scene pixels long) */
function horseman27(ctx,x,y,d,f,coat,lead){const s=GFX.s,k=s/2;hr(ctx,()=>{const X=x*s,Y=y*s;
  const P=(a,b,w,h,c)=>{ctx.fillStyle=c;const px=d>0?X+a*k:X-(a+w)*k;ctx.fillRect(Math.round(px),Math.round(Y+b*k),Math.max(1,Math.round(w*k)),Math.max(1,Math.round(h*k)))};
  const HC='#7a4e2c',HL='#9a6a40',HD='#4e3018',MN='#1e140c',OL='#100a06',ct=coat||'#8a3a2a',cL=mix(ct,'#ffffff',.25),cD=mix(ct,'#000000',.35),SK='#c89a70';
  ctx.fillStyle='rgba(0,0,0,.28)';ctx.fillRect(Math.round(X-22*k),Math.round(Y-2*k),Math.round(44*k),Math.round(3*k));
  /* legs in a gallop: two frames */
  const leg=(lx,ang,near)=>{for(let i=0;i<13;i++){const ox=Math.round(ang*i);P(lx+ox-1,-14+i,5,1,OL);P(lx+ox,-14+i,3,1,i>10?'#2a1a10':near?HC:HD)}};
  if(f){leg(12,.6,0);leg(15,.9,1);leg(-14,-.6,0);leg(-11,-.9,1)}else{leg(11,-.2,0);leg(14,.1,1);leg(-13,.3,0);leg(-10,0,1)}
  /* tail */for(let i=0;i<10;i++)P(-21-i,-25+i+(f?1:0),2,3,MN);
  /* body */for(let xx=-19;xx<=17;xx++){const t=(xx+19)/36,top=-28+Math.round(-2*Math.sin(t*Math.PI)),bot=-14;P(xx,top-1,1,bot-top+2,OL);for(let yy=top;yy<bot;yy++){const v=(yy-top)/(bot-top);P(xx,yy,1,1,v<.2?HL:v>.75?HD:HC)}}
  /* neck and head, stretched forward */for(let i=0;i<10;i++){P(15+i,-30-i*.8,6,7,OL);P(16+i,-29-i*.8,4,6,i<3?HC:HL)}P(24,-40,10,7,OL);P(25,-39,8,5,HC);P(31,-37,2,2,'#2a1a10');P(26,-41,2,3,HD);for(let i=0;i<9;i++)P(13+i,-33-i*.8,2,3,MN);
  /* saddle cloth */P(-6,-30,14,8,'#c8402a');P(-6,-30,14,2,'#e8c050');
  /* rider: deel coat, boots, sash, fur-rimmed hat, a bow drawn back */
  P(-3,-24,6,8,OL);P(-2,-23,4,7,'#2a1a10');P(-5,-46,13,18,OL);P(-4,-45,11,16,ct);P(-4,-45,2,16,cL);P(5,-45,2,16,cD);P(-4,-35,11,2,'#e8c050');
  P(-2,-53,9,9,OL);P(-1,-52,7,7,SK);P(4,-50,1,1,'#1a0e08');P(-3,-55,11,4,'#5a3a24');P(-1,-59,7,5,lead?'#c8402a':'#8a5a2a');P(2,-61,1,2,'#e8c050');
  P(6,-44,10,2,ct);P(15,-50,2,14,'#3a2414');for(let i=0;i<7;i++)P(16+Math.round(Math.sin(i/6*Math.PI)*3),-50+i*2,1,2,'#3a2414');P(6,-44,10,1,'#e8e0d0');
  if(lead){P(-8,-76,2,48,'#3a2414');for(let i=0;i<9;i++)P(-12-((Date.now()/90+i)%3),-76+i*2,5,2,'#e8e0d0')}})}
/* glowing eyes low in the grass */
function eyes27(ctx,o,gy,now){if(FX27.k!=='eyes'&&FX27.k!=='tiger')return;const t=now-FX27.t0;if(t>(FX27.k==='eyes'?4600:1700))return;
  const blink=((t/900)|0)%4===3&&(t%900)<120;if(blink)return;const a=Math.min(1,t/600)*(t>3800&&FX27.k==='eyes'?Math.max(0,1-(t-3800)/800):1);
  const x=FX27.x+Math.sin(t/700)*1.5,y=Math.min(100,gy+24);hr(ctx,()=>{const s=GFX.s;ctx.globalCompositeOperation='lighter';
    for(const ex of [0,5]){ctx.fillStyle='rgba(200,190,60,'+(.14*a).toFixed(2)+')';ctx.fillRect(Math.round((x+ex-2.5)*s),Math.round((y-2)*s),Math.round(s*6),Math.round(s*5));
      ctx.fillStyle='rgba(240,230,110,'+(.95*a).toFixed(2)+')';ctx.fillRect(Math.round((x+ex)*s),Math.round(y*s),Math.round(s*2),Math.round(s*1.3));ctx.fillStyle='rgba(255,255,220,'+a.toFixed(2)+')';ctx.fillRect(Math.round((x+ex+.5)*s),Math.round(y*s),Math.max(1,Math.round(s*.6)),Math.max(1,Math.round(s*.6)))}
    ctx.globalCompositeOperation='source-over'})}
/* what moves in front of the scene: a leaping tiger, or riders sweeping past */
function fx27(ctx,o,P,gy,now,day){fxTick27(o,now);if(!FX27.k||!GFX.hi)return;const t=now-FX27.t0;
  if(FX27.k==='tiger'){if(t<1700)return;const u=(t-1700)/1500;if(u>1){FX27.k=null;return}
    const d=FX27.d,x0=FX27.x,x=x0+d*u*150,yy=Math.min(104,gy+30)-Math.sin(Math.min(1,u*1.6)*Math.PI)*10*(u<.62?1:0);
    tiger27(ctx,x,yy,d,((now/120)|0)%2,u<.62?'leap':'run');return}
  if(FX27.k==='mongol'){const u=t/6500;if(u>1){FX27.k=null;return}const d=FX27.d,base=Math.min(100,gy+20);
    for(let i=6;i>=0;i--){const lag=i*.05+(i%2)*.025,uu=u*1.45-lag;if(uu<0||uu>1.15)continue;const x=d>0?-30+uu*250:222-uu*250,y=base-(i%3)*4+(i>3?4:0),fr=(((now/110)|0)+i)%2;
      for(let j=0;j<5;j++){ctx.fillStyle='rgba(190,170,130,'+(.28-j*.05)+')';ctx.fillRect((x-d*(8+j*6))|0,(y-2-j*1.5)|0,6+j*2,3+j)}
      horseman27(ctx,x,y,d,fr,['#8a3a2a','#3a5a8a','#5a4a30','#6a2a4a'][i%4],i===0)}
    if(u>.15&&u<.85){ctx.fillStyle='#2a1a10';for(let i=0;i<9;i++){const p=((now/700)+i*.13)%1,ax=(d>0?20:170)+d*p*150+i*9*d,ay=gy-6-Math.sin(p*Math.PI)*24+i%3*3;ctx.fillRect(ax|0,ay|0,3,1)}}}}

/* ---------- the foreground, drawn at full resolution ---------- */
function fg27(ctx,o,P,gy,now,wx){if(o.city||P.city||P.rom||P.gre||(o.egy&&(o.pylon||o.pyr)))return;
  const W=192,H=108,s=GFX.s,g=o.live?ATM.gust:.2,cold=o.snowGround||o.snowFall,dry=P.dunes||P.dry||o.yt==='dry';
  const kind=cold?'snow':(P.riv||P.lake||o.gan20&&!dry)?'reed':(P.dense||P.vines)?'fern':dry?'dry':P.sea?'dune':'grass';
  const gr=P.gr||'#4a5a2a',sky=(P.d&&P.d[1])||'#e8d8b0',base=mix(gr,'#0a0806',.66),mid=mix(gr,'#120e0a',.48),hi=mix(gr,'#1a140e',.3),rim=mix(mix(gr,sky,.5),'#000000',.15);
  const rs=srng((o.seed>>>0)+917),fxk=FX27.k,ft=now-FX27.t0,rustle=(fxk==='eyes'&&ft<4600)||(fxk==='tiger'&&ft<1700),rx=FX27.x;
  hr(ctx,()=>{const R=(a,b,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(Math.round(a),Math.round(b),Math.max(1,Math.round(w)),Math.max(1,Math.round(h)))};
    const blade=(x,h,ph,c,lean,wid)=>{let px=x;for(let k=0;k<h;k++){const t=k/h,near=rustle&&Math.abs(x/s-rx-3)<12?Math.sin(now/60+x)*3*t:0;
        px=x+lean*t*t*h*.25+Math.sin(now/(560-g*280)+ph)*t*t*(2+g*5)+near;R(px,H*s-1-k,wid&&k<h*.5?2:1,1,k>h-3&&rs()<.3?rim:c)}return px};
    const clump=(cx,w,hmax,dens)=>{for(let i=0;i<w*dens;i++){const x=(cx+(rs()-.5)*w)*s,h=(hmax*(.35+.65*rs()))*s,c=rs()<.33?base:rs()<.6?mid:hi;
        const tip=blade(x,h,x*.13,c,(rs()-.5)*1.6,rs()<.3);
        if(kind==='grass'&&rs()<.07){R(tip-1,H*s-h-2,3,3,rs()<.5?'#e8d27a':'#d88aa0');R(tip,H*s-h-1,1,1,'#fff4d0')}
        if(kind==='grass'&&rs()<.08){for(let j=0;j<5;j++)R(tip+j%2,H*s-h-4+j,1,1,'#c8b48a')}
        if(kind==='reed'&&h>20*s&&rs()<.25){R(tip-1,H*s-h-6,3,7,'#5a3418');R(tip,H*s-h-6,1,6,'#7a4a22')}
        if(kind==='snow'&&rs()<.5)R(x-1,H*s-2-rs()*6,3,2,'#e8eef2')}};
    const fern=(cx,cy,sz,ph)=>{const sw=Math.sin(now/760+ph)*(1+g*2.2)*s+(rustle&&Math.abs(cx-rx)<14?Math.sin(now/55)*2*s:0);
      for(let fr=0;fr<6;fr++){const ang=-Math.PI*.95+fr*.32,len=sz*(.7+.3*Math.sin(fr*1.7));for(let i=0;i<len;i++){const t=i/len,x=cx*s+Math.cos(ang)*i*s*.9+sw*t,y=cy*s+Math.sin(ang)*i*s*.55+t*t*sz*s*.3;
        R(x,y,s,1,fr%2?base:mid);if(i%2===0&&i>2){R(x-s,y+1,s,1,mid);R(x+s,y+1,s,1,hi)}}}};
    const stone=(cx,w,h,c)=>{const X=cx*s,Y=H*s;for(let k=0;k<h*s;k++){const ww=Math.round(Math.sqrt(1-(k/(h*s))**2)*w*s*.5);R(X-ww,Y-k,ww*2,1,k>h*s*.7?mix(c,sky,.25):mix(c,'#000000',.15+.25*(1-k/(h*s))))}};
    if(kind==='fern'){fern(10,96,22,1);fern(26,100,16,2);fern(182,97,20,3);fern(168,101,14,4);clump(8,18,12,2.4);clump(184,16,11,2.4)}
    else if(kind==='dry'||kind==='dune'){stone(14,16,5,'#6a5a48');stone(178,12,4,'#5e5040');clump(6,14,7,.9);clump(26,8,5,.7);clump(186,12,6,.9)}
    else if(kind==='snow'){stone(16,18,6,'#5a5e64');clump(8,18,9,1.6);clump(182,16,8,1.6);R(0,H*s-3,40*s,3,'#dfe6ea');R(160*s,H*s-3,32*s,3,'#dfe6ea')}
    else{clump(9,20,kind==='reed'?26:16,3.2);clump(26,12,kind==='reed'?18:10,2.4);clump(183,18,kind==='reed'?24:15,3.2);clump(166,10,9,2.2);
      if(rs()<.5)stone(20,10,3,'#4a4238')}
    /* soft dark vignette at the very bottom so the foreground reads as close to the eye */
    for(let k=0;k<6;k++){ctx.fillStyle='rgba(0,0,0,'+(.05*(6-k)/6).toFixed(3)+')';ctx.fillRect(0,H*s-k*s,W*s,s)}})}
