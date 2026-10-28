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
function jrTeam48(){const el=document.getElementById('jr48');if(!el)return;const D=jrLoad48();const p=document.createElement('div');p.className='pane';const w=document.createElement('div');w.className='w';p.appendChild(w);
  w.innerHTML='<h2 style="font-family:var(--display);color:#ffe2a8;margin:0">ทีม</h2><p style="color:#a898c8;font-size:13px">ทุกคนเป็นตัวละครสมมติ ไม่ใช่บุคคลจริง · คนที่ยังไม่ได้พบจะเห็นแค่เงา · ความลับของแต่ละคนเปิดเมื่อเล่นถึงฉากของเขา</p>';
  PARTY48.members.forEach(m=>{const met=m.playable||D.flags['met_'+m.k];const c=document.createElement('div');c.className='card';const pc=portrait48(met?m.look:{skin:'#2a2436',hair:'#1a1626',top:'#1a1626'},met?'n':'n');c.appendChild(pc);const t=document.createElement('div');t.style.flex='1';c.appendChild(t);
    if(!met){t.innerHTML='<h3>???</h3><p class="lk">ยังไม่ได้พบ · '+esc(m.role)+'</p>';w.appendChild(c);return}
    t.innerHTML='<h3>'+esc(m.name)+' · '+m.age+' ปี</h3><p>'+esc(m.role)+' · '+esc(m.faith)+'</p><p>ภาษา: '+esc(m.lang)+'</p><p>มุกประจำตัว: "'+esc(m.joke)+'"</p><p>สิ่งที่กลัว: '+esc(m.fear)+'</p><p>'+(D.flags['secret_'+m.k]?'ความลับ: '+esc(m.secret):'<span class="lk">ความลับ: 🔒 ยังไม่รู้</span>')+'</p><p>ท่า: '+m.skills.map(s=>esc(s.n)).join(' · ')+'</p><p>ท่าไม้ตาย: '+esc(m.limit.n)+'</p>'+(m.playable?'<p style="color:#8ae88a">เล่นได้แล้ว</p>':'');w.appendChild(c)});
  const jn=D.journal;if(jn.length){const h=document.createElement('h3');h.style.color='#ffe2a8';h.textContent='สมุดของลูก้า · '+jn.length+' หน้า';w.appendChild(h);jn.forEach(j=>{const q=document.createElement('p');q.style.cssText='font-size:14px;line-height:1.6;border-left:2px solid #5a4a8a;padding-left:8px';q.textContent=j;w.appendChild(q)})}
  const b=document.createElement('button');b.textContent='ปิด';b.style.cssText='min-height:48px;padding:8px 24px;font-size:16px;background:#3a2a14;border:2px solid #c8903a;color:#ffe2a8;border-radius:10px;margin:14px 0';b.onclick=()=>p.remove();w.appendChild(b);el.appendChild(p)}
