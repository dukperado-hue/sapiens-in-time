/* ===================== plague JRPG · party: seven people, their faces, the team screen (v0.48) ===================== */
const PARTY48=(()=>{const d=/*PARTY_JSON*/null;d.byK={};d.members.forEach(m=>d.byK[m.k]=m);return d})();
/* faces: n normal · h happy · w worried · s sad · drawn as 48x48 pixel busts from each person's colours */
function portrait48(look,face){const c=document.createElement('canvas');c.width=48;c.height=48;const x=c.getContext('2d');look=look||{};
  const sk=look.skin||'#e0b088',hr=look.hair||'#3a2414',tp=look.top||'#5a4a6a',hc=look.hatc||tp,ol='#0a0710',R=(a,b,w,h,col)=>{x.fillStyle=col;x.fillRect(a,b,w,h)};
  const bg=x.createLinearGradient(0,0,0,48);bg.addColorStop(0,'#2a2240');bg.addColorStop(1,'#120e1c');x.fillStyle=bg;x.fillRect(0,0,48,48);
  R(6,37,36,11,ol);R(7,38,34,10,tp);R(7,38,3,10,g45sh(tp,.2));R(37,38,4,10,g45sh(tp,-.35));R(20,38,8,3,g45sh(tp,-.3));
  R(19,32,10,7,ol);R(20,32,8,6,g45sh(sk,-.18));
  R(12,11,24,24,ol);R(13,12,22,22,sk);R(13,12,3,22,g45sh(sk,.12));R(31,12,4,22,g45sh(sk,-.2));R(15,32,18,2,g45sh(sk,-.15));
  const hat=look.hat||'none';
  if(hat==='hood'||hat==='veil'){R(10,8,28,30,ol);R(11,9,26,8,hc);R(11,9,4,28,hc);R(33,9,4,28,hc);R(11,9,26,1,g45sh(hc,.2))}
  else{R(12,8,24,7,ol);R(13,9,22,6,hr);R(12,12,3,10,hr);R(33,12,3,8,hr);if(look.child){R(14,14,6,2,hr)}}
  if(hat==='cap'){R(11,6,26,6,ol);R(12,7,24,4,hc);R(24,10,13,2,g45sh(hc,-.25))}
  if(hat==='turban'){R(10,4,28,10,ol);R(11,5,26,8,hc);for(let k=0;k<4;k++)R(12+k*6,6+(k%2),5,1,g45sh(hc,-.15))}
  if(look.beard){R(15,27,18,7,hr);R(17,26,14,2,hr);R(20,29,8,2,g45sh(sk,-.3))}
  /* eyes and brows by mood */
  const eye=(ex)=>{if(face==='h'){R(ex,21,4,1,'#1a1010');R(ex,20,1,1,'#1a1010');R(ex+3,20,1,1,'#1a1010')}else{R(ex,20,4,3,'#f8f0e8');R(ex+1,20,2,3,'#2a1a14');R(ex+1,20,1,1,'#fff')}};eye(16);eye(26);
  const brow=(bx,tilt)=>{R(bx,17+(tilt>0?1:0),2,1,hr);R(bx+2,17,1,1,hr);R(bx+3,17+(tilt<0?1:0),2,1,hr)};
  if(face==='w'){brow(15,1);brow(26,-1)}else if(face==='s'){brow(15,-1);brow(26,1)}else{R(15,17,5,1,g45sh(hr,.1));R(26,17,5,1,g45sh(hr,.1))}
  R(23,22,2,4,g45sh(sk,-.22));
  if(!look.beard||face!=='n'){if(face==='h'){R(19,28,10,1,'#6a2a24');R(18,27,1,1,'#6a2a24');R(29,27,1,1,'#6a2a24');R(20,29,8,1,'#c8706a')}else if(face==='s'){R(20,28,8,1,'#6a2a24');R(19,29,1,1,'#6a2a24');R(28,29,1,1,'#6a2a24');R(27,23,1,3,'#8ac8f0')}else if(face==='w'){R(21,28,6,2,'#4a1a14')}else R(20,28,8,1,'#6a2a24')}
  c.style.cssText='width:96px;height:96px;image-rendering:pixelated';return c}
/* v0.49: the team page is a console menu: everyone on the left, the one you point at on the right; it fits one screen */
function jrTeam48(){const el=document.getElementById('jr48');if(!el)return;const D=jrLoad48();const p=jrPane48();if(!p)return;const port=el.classList.contains('port');
  const L=document.createElement('div');L.className='win';L.style.cssText=port?'display:flex;gap:4px;padding:6px;justify-content:space-between;flex:0 0 auto':'flex:0 0 34%;display:flex;flex-direction:column;padding:.4em;gap:2px;overflow:hidden';p.appendChild(L);
  const R=document.createElement('div');R.className='win';R.style.cssText='flex:1;padding:.6em .9em;display:flex;flex-direction:column;gap:.2em;overflow:hidden;font-size:.86em;line-height:1.5;min-height:0';p.appendChild(R);
  const mem=PARTY48.members,met=m=>m.playable||D.flags['met_'+m.k];let cur=Math.max(0,mem.findIndex(m=>m.k===D.lead));
  const fc=(m,mood)=>{const look=met(m)?m.look:{skin:'#1a1a3a',hair:'#10102a',top:'#10102a',hatc:'#10102a'};const f=face49(m.k,look,mood||'n');const c=document.createElement('canvas');c.width=f.width;c.height=f.height;c.getContext('2d').drawImage(f,0,0);c.style.cssText='image-rendering:pixelated;flex:0 0 auto;'+(met(m)?'':'filter:brightness(.6)');return c};
  const rows=mem.map((m,i)=>{const b=document.createElement('button');b.style.cssText='display:flex;align-items:center;gap:.5em;background:transparent;border:0;color:#fff;font:inherit;font-size:.82em;text-align:left;cursor:pointer;padding:2px 4px;min-height:0;min-width:0;flex:1;justify-content:center;text-shadow:1px 1px 0 #000a;border-radius:4px';const c=fc(m);c.style.height=port?'min(40px,9vw)':'min(4.2vh,2.6em)';c.style.width='auto';b.appendChild(c);
    if(!port){const t=document.createElement('span');t.innerHTML=met(m)?esc(m.short)+(D.lead===m.k?' <span style="color:#ffe890">★</span>':''):'???';b.appendChild(t)}b.onclick=()=>{cur=i;draw()};L.appendChild(b);return b});
  function draw(){rows.forEach((b,i)=>{b.style.background=i===cur?'#ffffff26':'transparent';b.style.outline=i===cur?'1px solid #ffe890':'0'});const m=mem[cur];R.innerHTML='';
    const hd=document.createElement('div');hd.style.cssText='display:flex;gap:.8em;align-items:center';const c=fc(m,met(m)?'h':'n');c.style.height=port?'104px':'min(16vh,6.5em)';c.style.width='auto';hd.appendChild(c);const ht=document.createElement('div');hd.appendChild(ht);R.appendChild(hd);
    if(!met(m)){ht.innerHTML='<div style="font-size:1.2em;color:#ffe890">???</div><div>ยังไม่ได้พบ</div><div style="color:#c8ccff">'+esc(m.role)+'</div>';}
    else{ht.innerHTML='<div style="font-size:1.2em;color:#ffe890">'+esc(m.name)+'</div><div>'+m.age+' ปี · '+esc(m.role)+'</div><div style="color:#c8ccff">'+esc(m.faith)+' · '+esc(m.lang)+'</div>'+(m.playable?'<div style="color:#9cf0a0">เล่นได้แล้ว</div>':'');
      const ln=(k,v)=>{const d=document.createElement('div');d.innerHTML='<span style="color:#9cc8ff">'+k+'</span> '+v;R.appendChild(d)};
      ln('มุก','"'+esc(m.joke)+'"');ln('กลัว',esc(m.fear));ln('ท่า',m.skills.map(s=>esc(s.n)).join(' · '));ln('ท่าไม้ตาย',esc(m.limit.n));ln('ความลับ',D.flags['secret_'+m.k]?esc(m.secret):'🔒 ยังไม่รู้')}
    const ft=document.createElement('div');ft.style.cssText='margin-top:auto;display:flex;gap:8px;align-items:center;flex-wrap:wrap';const jn=D.journal;
    const bj=document.createElement('button');bj.className='win';bj.textContent='📓 สมุดของลูก้า · '+jn.length+' หน้า';bj.disabled=!jn.length;bj.style.fontSize='.95em';bj.onclick=()=>{R.innerHTML='<div style="color:#ffe890">สมุดของลูก้า</div>'+jn.map((j,i)=>'<div>'+(i+1)+'. '+esc(j)+'</div>').join('');const bk=document.createElement('button');bk.className='win';bk.textContent='กลับ';bk.style.cssText='margin-top:auto;align-self:flex-start';bk.onclick=draw;R.appendChild(bk)};ft.appendChild(bj);
    const bc=document.createElement('button');bc.className='win hand';bc.textContent='ปิด';bc.style.fontSize='.95em';bc.onclick=()=>{document.removeEventListener('keydown',key,true);p.remove()};ft.appendChild(bc);
    const nt=document.createElement('span');nt.style.cssText='font-size:.8em;color:#c8ccff';nt.textContent='ทุกคนเป็นตัวละครสมมติ ✦';ft.appendChild(nt);R.appendChild(ft)}
  const key=e=>{if(!p.isConnected){document.removeEventListener('keydown',key,true);return}if(e.key==='ArrowDown'||e.key==='ArrowRight'){cur=(cur+1)%mem.length;draw()}else if(e.key==='ArrowUp'||e.key==='ArrowLeft'){cur=(cur+mem.length-1)%mem.length;draw()}else if(e.key==='Escape'||e.key==='Enter'||e.key===' '){p.remove();document.removeEventListener('keydown',key,true)}else return;e.preventDefault();e.stopPropagation()};
  document.addEventListener('keydown',key,true);draw()}
