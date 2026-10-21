/* ================= v0.12 FACES: pixel portrait of you + family picture ================= */
const SKIN=['#4e3222','#5f3c28','#734a31','#8a5a3c','#a06c48','#b88058','#cc9a70','#ddb48e','#eac6a2'];
const SKINR={eaf:[0,2],saf:[1,3],gsa:[0,2],sah:[0,2],bis:[0,3],kuk:[0,2],van:[1,3],fij:[1,3],ton:[2,4],soc:[2,4],haw:[2,4],rap:[2,4],nzl:[2,4],
  sun:[2,4],tha:[2,4],phl:[2,4],jav:[2,4],flo:[2,4],luz:[2,4],sas:[1,3],ara:[2,4],lev:[2,5],zag:[3,5],ana:[3,5],
  eur:[2,5],mst:[2,5],wcv:[2,5],alt:[4,6],sib:[3,6],ber:[3,6],ame:[3,5],eas:[4,7],yel:[4,7],yan:[4,6],tib:[3,6]};
function strHash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function skinRange(rg){if(R4&&R4[rg])return [3,5];if(typeof R6!=='undefined'&&R6[rg])return rg==='ele'?[2,4]:[2,5];return SKINR[rg]||[3,5]}
// face spec, deterministic from seed
function faceSpec(seed,o){const r=srng(seed),sp=o.sp||'sap',[a,b]=skinRange(o.rg);
  let skin=SKIN[Math.min(8,a+Math.floor(r()*(b-a+1)))];if(sp==='nea')skin=SKIN[4+Math.floor(r()*3)];
  const hairC=sp==='nea'&&r()<.18?'#7a3a1c':pick2(r,['#1a120c','#20160e','#2a1c12','#120c08']);
  const eye=(['eur','wcv','mst'].includes(o.rg)&&o.ch===2&&r()<.3)?'#4a6a8a':'#2a1a10';
  return {seed,sex:o.sex,age:o.age,sp,ch:o.ch,rg:o.rg,cls:o.cls||'',skin,hairC,eye,beard:o.sex==='m'&&r()<.55,style:r(),wig:r()<.6,dead:!!o.dead,big:r()}}
const pick2=(r,a)=>a[Math.floor(r()*a.length)];
function shade(c,k){const n=parseInt(c.slice(1),16);let R=n>>16,G=(n>>8)&255,B=n&255;const f=x=>Math.max(0,Math.min(255,Math.round(k<0?x*(1+k):x+(255-x)*k)));return '#'+[f(R),f(G),f(B)].map(v=>v.toString(16).padStart(2,'0')).join('')}
// draw a 32x32 bust at (x0,y0) scale s
function drawFace(ctx,F,x0,y0,s){const P=(x,y,w,h,c)=>{ctx.fillStyle=c;ctx.fillRect(x0+x*s,y0+y*s,w*s,h*s)};
  const kid=F.age<13,baby=F.age<4,old=F.age>=55,arch=F.sp!=='sap',nea=F.sp==='nea'||F.sp==='den',ere=F.sp==='ere'||F.sp==='flo'||F.sp==='luz';
  const sk=F.skin,skD=shade(sk,-.18),skL=shade(sk,.12),hair=old?(F.style<.5?'#bdb5ac':'#8f8780'):F.hairC;
  const egy=F.ch===6,sum=F.ch===4,pac=F.ch===5,neo=F.ch===3,stone=F.ch<=2||F.ch===7;
  // clothes / shoulders
  let cl='#7a5a40',cl2='#5e4430';
  if(egy){cl=F.cls==='slave'?'#cfc4ae':'#efe9dc';cl2='#d8d0bf'}else if(sum){cl=F.cls==='elite'?'#e0d2ac':'#c9b48a';cl2='#a89064'}
  else if(neo){cl='#b59a6a';cl2='#8f774e'}else if(pac){cl='#c9a878';cl2='#a3845a'}
  const sw=kid?14:18,sx=16-sw/2;P(sx,26,sw,6,cl);P(sx+1,25,sw-2,1,cl);P(sx,31,sw,1,cl2);
  if(stone){for(let i=0;i<sw;i+=2)P(sx+i,25,1,1,'#a88a66')}
  if(sum&&!kid){for(let i=0;i<sw;i+=3)for(let j=27;j<32;j+=2)P(sx+i+(j%4?1:0),j,1,1,cl2)}
  if(egy&&(F.cls==='elite'||F.big>.6)&&!kid){P(sx+1,25,sw-2,2,'#2f6f8f');P(sx+2,27,sw-4,1,'#d9b45a');P(sx+3,28,sw-6,1,'#2f6f8f')}
  if(pac)for(let i=0;i<5;i++)P(11+i*2,26,1,1,'#f2ead8');
  // neck
  P(13,22,6,4,skD);
  // head geometry
  const hw=nea?16:kid?13:14,hx=16-Math.floor(hw/2),top=baby?10:kid?8:6,bot=23,hh=bot-top;
  for(let y=top;y<bot;y++){const t=(y-top)/hh;let w=hw;if(t<.15)w=hw-4;else if(t<.25)w=hw-2;if(t>.8)w=hw-(nea?2:3);if(t>.92)w=hw-(nea?3:6);P(16-Math.floor(w/2),y,w,1,sk)}
  P(16-Math.floor(hw/2),top+hh*.45|0,1,4,skD);P(16+Math.ceil(hw/2)-1,top+hh*.45|0,1,4,skD);// ears shade
  // hair
  const H=(x,y,w,h)=>P(x,y,w,h,hair);
  const ey=top+Math.round(hh*(baby?.5:.45));
  if(egy){if(kid){P(hx,top,hw,1,skL);H(hx-1,top+2,2,9);H(hx-1,top+10,2,3)}// shaved + sidelock
    else if(F.sex==='f'||F.wig){H(hx-1,top-1,hw+2,4);H(hx-2,top+2,3,F.sex==='f'?17:10);H(hx+hw-1,top+2,3,F.sex==='f'?17:10);if(F.sex==='f'){P(hx-1,top+1,hw+2,1,'#c0392b')}}
    else{H(hx,top,hw,2)}}
  else if(sum){if(F.sex==='f'&&!kid){H(hx-1,top-1,hw+2,4);H(hx+3,top-3,hw-6,3);P(hx-1,top+1,hw+2,1,'#c9a24a');H(hx-1,top+3,2,6);H(hx+hw-1,top+3,2,6)}
    else if(F.sex==='m'&&!kid&&F.style<.35){P(hx+1,top,hw-2,1,skL)}// shaven priest look
    else{H(hx-1,top-1,hw+2,4);H(hx-1,top+3,2,7);H(hx+hw-1,top+3,2,7)}}
  else if(pac){H(hx-1,top-1,hw+2,4);H(hx+4,top-4,hw-8,4);if(F.sex==='f'){H(hx-2,top+3,2,10);H(hx+hw,top+3,2,10)}}
  else{// stone age / neolithic: loose hair, braids sometimes
    H(hx-1,top-1,hw+2,4+(ere?1:0));if(F.sex==='f'||F.style>.5){H(hx-2,top+2,3,neo&&F.style>.5?14:11);H(hx+hw-1,top+2,3,neo&&F.style>.5?14:11);if(neo&&F.sex==='f')for(let y=top+6;y<top+16;y+=2){P(hx-2,y,1,1,shade(hair,.2));P(hx+hw+1,y,1,1,shade(hair,.2))}}
    else{H(hx-1,top+2,2,5);H(hx+hw-1,top+2,2,5)}}
  if(old&&F.sex==='m'&&F.style>.5)P(hx+3,top,hw-6,2,skL);// balding
  // brow ridge for archaic humans
  if(arch&&!baby){P(hx+1,ey-2,hw-2,2,skD);P(hx+1,ey-3,hw-2,1,shade(sk,-.08))}
  // brows
  if(!arch)P(hx+2,ey-2,4,1,shade(hair,.15)),P(hx+hw-6,ey-2,4,1,shade(hair,.15));
  // eyes
  const ew=baby||kid?3:2;const lx=hx+3,rx=hx+hw-3-ew;
  if(F.dead){P(lx,ey,ew,1,skD);P(rx,ey,ew,1,skD)}
  else{P(lx,ey,ew,2,'#f2ece2');P(rx,ey,ew,2,'#f2ece2');P(lx+ew-1,ey,1,2,F.eye);P(rx,ey,1,2,F.eye);if(nea){P(lx,ey-1,ew,1,skD);P(rx,ey-1,ew,1,skD)}}
  if(egy&&!kid){P(lx-1,ey-1,ew+1,1,'#151010');P(rx,ey-1,ew+1,1,'#151010');P(lx-2,ey,1,1,'#151010');P(rx+ew,ey,2,1,'#151010')}// kohl
  // nose
  const nw=nea||ere?4:baby?1:2;P(16-Math.ceil(nw/2),ey+2,nw,nea?3:2,skD);if(!baby)P(16-Math.ceil(nw/2),ey+4,nw,1,shade(sk,-.3));
  // mouth
  const my=ey+(baby?4:6);P(14,my,4,1,shade(sk,-.35));if(!old&&!F.dead)P(15,my+1,2,1,shade(sk,-.15));
  // wrinkles
  if(old){P(lx-1,ey+2,1,1,skD);P(rx+ew,ey+2,1,1,skD);P(13,my-1,1,1,skD);P(18,my-1,1,1,skD);P(hx+3,top+3,hw-6,1,skD)}
  // beard
  if(F.beard&&F.sex==='m'&&F.age>=18&&!(egy)&&!(sum&&F.style<.35)){const bc=old?'#c8c0b6':hair;P(hx+1,my-1,2,4,bc);P(hx+hw-3,my-1,2,4,bc);P(hx+2,my+1,hw-4,sum?5:3,bc);P(14,my,4,1,shade(sk,-.35))}
  if(egy&&F.sex==='m'&&F.cls==='elite'&&!kid&&F.style>.8)P(15,bot,2,3,'#1a1410');// false beard (kingly), rare
  // cheeks
  if(kid&&!F.dead){P(lx-1,ey+3,2,1,shade(sk,.06));P(rx+ew-1,ey+3,2,1,shade(sk,.06))}
}
function faceCanvas(F,px){const c=document.createElement('canvas');c.width=32;c.height=32;c.style.width=px+'px';c.style.height=px+'px';c.style.imageRendering='pixelated';drawFace(c.getContext('2d'),F,0,0,1);if(F.dead)c.style.filter='grayscale(1) brightness(.75)';return c}
function myFace(S,ageOverride){return faceSpec(S.seed^0x5eed,{sex:S.sex,age:ageOverride!=null?ageOverride:S.age,sp:S.sp.id,ch:S.ch,rg:S.rg,cls:S.cls,dead:!!S.dead})}
function kidInfo(S,k,i){if(!k.sex)k.sex=srng((S.seed^(i*7919+k.born))>>>0)()<.5?'m':'f';
  if(!k.n){if(S.ch===6&&typeof genName6==='function')k.n=nm4X(genName6(S,k.sex,era6(S.ya)));else if(S.ch===4)k.n=nm4X(genName4(S,k.sex,era4(S.ya)));else{const used=S.ppl.map(p=>p.n.th).concat(S.kids.map(x=>x.n&&x.n.th));const pool=PNAMES.filter(n=>!used.includes(n.th));k.n=pick(pool.length?pool:PNAMES)}}
  const lived=S.age-k.born,dead=k.dies!=null&&lived>=k.dies,age=dead?k.dies:lived;return {n:k.n,sex:k.sex,age,dead}}
const FAM={me:X('คุณ','You'),mother:X('แม่','Mother'),father:X('พ่อ','Father'),son:X('ลูกชาย','Son'),daughter:X('ลูกสาว','Daughter'),title:X('ภาพครอบครัว','Family portrait'),
  close:X('ปิด','Close'),tap:X('แตะเพื่อดูหน้าและครอบครัวของคุณ','Tap to see your face and your family'),none:X('ตอนนี้ยังมีแค่คุณในภาพ','For now, it is only you in the picture'),
  note:X('หน้าตา สีผิว และทรงผมในภาพเป็นการจำลองแบบคร่าวๆ ตามยุคและถิ่น คนในยุคเดียวกันหน้าตาหลากหลายมาก','Faces, skin tones and hairstyles here are a rough simulation for the time and place. People in every age looked very varied.')};
function famMembers(S){const out=[];const me={F:myFace(S),n:S.name,rel:FAM.me,me:1};
  if(S.age<16&&!S.dead){out.push({F:faceSpec(S.seed^0x3a3a,{sex:'f',age:S.age+20+(S.seed%9),sp:S.sp.id,ch:S.ch,rg:S.rg,cls:S.cls}),n:null,rel:FAM.mother});
    const fa=(S.nm4&&S.nm4.fa)||(S.nm6&&S.nm6.fa);out.push({F:faceSpec(S.seed^0x4b4b,{sex:'m',age:S.age+24+(S.seed%11),sp:S.sp.id,ch:S.ch,rg:S.rg,cls:S.cls}),n:fa?X(fa.th,fa.l):null,rel:FAM.father})}
  const pr=S.ppl.find(p=>p.k==='partner');if(pr)out.push({F:faceSpec(strHash(pr.n.th),{sex:S.sex==='f'?'m':'f',age:Math.max(16,S.age+((strHash(pr.n.th)%7)-3)),sp:S.sp.id,ch:S.ch,rg:S.rg,cls:S.cls,dead:pr.dead}),n:pr.n,rel:PK.partner,dead:pr.dead});
  out.unshift(me);
  S.ppl.filter(p=>p.k==='sib').forEach(p=>{const h=strHash(p.n.th);out.push({F:faceSpec(h,{sex:h%2?'m':'f',age:Math.max(1,S.age+((h%13)-6)),sp:S.sp.id,ch:S.ch,rg:S.rg,cls:S.cls,dead:p.dead}),n:p.n,rel:PK.sib,dead:p.dead})});
  S.kids.forEach((k,i)=>{const K=kidInfo(S,k,i);out.push({F:faceSpec(strHash(K.n.th)^S.seed,{sex:K.sex,age:K.age,sp:S.sp.id,ch:S.ch,rg:S.rg,cls:S.cls,dead:K.dead}),n:K.n,rel:K.sex==='m'?FAM.son:FAM.daughter,dead:K.dead,kid:1,age:K.age})});
  return out}
function famHTML(S,box){box.innerHTML='';const ms=famMembers(S);
  ms.forEach(m=>{const d=document.createElement('div');d.className='fm'+(m.dead?' dead':'')+(m.me?' me':'');d.appendChild(faceCanvas(m.F,m.kid&&m.F.age<13?56:72));
    const cap=document.createElement('div');cap.className='fmc';cap.innerHTML=(m.n?'<b>'+esc(nmL(m.n))+'</b>':'')+'<span>'+esc(L(m.rel))+(m.dead?' †':'')+'</span>';d.appendChild(cap);box.appendChild(d)});
  if(ms.length===1){const p=document.createElement('p');p.className='small';p.textContent=L(FAM.none);box.appendChild(p)}}
let famWasPaused=null;
function openFam(){if(!S)return;const sh=$('#famSheet');$('#famFace').innerHTML='';$('#famFace').appendChild(faceCanvas(myFace(S),160));
  $('#famName').textContent=nmL(S.name);$('#famSub').textContent=t('cardAge',{a:S.age})+' · '+L(title(S));$('#famH').textContent=L(FAM.title);$('#famNote').textContent=L(FAM.note);$('#famClose').textContent=L(FAM.close);
  famHTML(S,$('#famGrid'));sh.hidden=false;if(screen==='play'){famWasPaused=paused;paused=true;updatePause()}}
function closeFam(){$('#famSheet').hidden=true;if(famWasPaused!=null&&screen==='play'){paused=famWasPaused;updatePause()}famWasPaused=null}
function renderAvatar(){const a=$('#pAvatar');if(!a||!S)return;const key=S.age+'|'+S.ch+'|'+S.seed+'|'+S.cls;if(a.dataset.k===key)return;a.dataset.k=key;a.innerHTML='';a.appendChild(faceCanvas(myFace(S),44));a.title=L(FAM.tap);a.setAttribute('aria-label',L(FAM.tap))}
